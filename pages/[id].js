import { useRouter } from 'next/router'
import Head from 'next/head'

import { web3, contract, contractAddress } from '../lib/web3'

import Navigation from '../components/Navigation'
import Universe from '../components/Universe'
import EthName from '../components/EthName'

function Planet({ metadata, openSea }) {
  const router = useRouter()
  let { id } = router.query
  id = parseInt(id)

  if (typeof document === "object") {
    document.documentElement.style.setProperty("--main-color", metadata.properties.mainColor)
    document.documentElement.style.setProperty("--secondary-color", metadata.properties.secondaryColor)
  }

  let forSaleNotice = (
    <p>Not for sale</p>
  )
  
  if (openSea.orders.length > 0) {
    const price = web3.utils.fromWei(openSea.orders[0].base_price, 'ether')
    const address = openSea.orders[0].maker.address
    forSaleNotice = (
        <p>Currently on sale on Opensea for {price} ETH by <EthName address={address} />.</p>

    )
  }

  let openSeaLink = `https://testnets.opensea.io/assets/${contractAddress}/${id}`

  return (
    <>
      <Navigation id={id} total={5} />
      <Universe id={id} metadata={metadata} />

      <section>
        <h2>Planet #{id}</h2>

        {forSaleNotice}

        <a href={openSeaLink} target="_blank" className="button"> 
          View on OpenSea
        </a>
      </section>

      <Head>
        <title>Planetary – Planet #{id}</title>
      </Head>
    </>
  )
}

export async function getStaticPaths() {
  const paths = [1, 2, 3, 4, 5].map(id => {
    return { params: { id: id.toString() }}
  })

  return {
    paths: paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {

  // params.id is available

  let token = await contract.methods.tokenURI(params.id).call()

  let metadataResponse = await fetch(token)
  let metadata = await metadataResponse.json()

  let openSeaResponse = await fetch(`https://rinkeby-api.opensea.io/api/v1/asset/${contractAddress}/${params.id}`)
  let openSea = await openSeaResponse.json()
  console.log(openSea)

  return {
    props: {
      metadata: metadata,
      openSea: openSea
    }
  }
}

export default Planet