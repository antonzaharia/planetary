(() => {
var exports = {};
exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(731);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "web3"
const external_web3_namespaceObject = require("web3");
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_namespaceObject);
;// CONCATENATED MODULE: ./lib/Planetary.json
const Planetary_namespaceObject = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true}]}');
;// CONCATENATED MODULE: ./lib/web3.js

 // let web3 = new Web3(Web3.givenProvider)

let web3 = new (external_web3_default())('https://rinkeby.infura.io/v3/7743689b52a44de99f0af205b634d905');
const contractAddress = "0x15fdFC3605d41f255f94e4ef650eb0522d831b9C";
const contract = new web3.eth.Contract(Planetary_namespaceObject.Mt, contractAddress);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/Navigation.js






const Navigation = function ({
  total
}) {
  const router = (0,router_.useRouter)();
  let {
    id
  } = router.query;
  id = parseInt(id);
  const {
    0: prevUrl,
    1: setPrevUrl
  } = (0,external_react_.useState)("/" + total);
  const {
    0: nextUrl,
    1: setNextUrl
  } = (0,external_react_.useState)("/2");
  (0,external_react_.useEffect)(() => {
    let n = `/${id + 1}`;

    if (id >= total) {
      n = `/1`;
    }

    let p = `/${id - 1}`;

    if (id <= 1) {
      p = `/${total}`;
    }

    setPrevUrl(p);
    setNextUrl(n);
  }, [id, total]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: prevUrl,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "\u2190"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      children: [id, "/", total]
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: nextUrl,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "\u2192"
      })
    })]
  });
};

/* harmony default export */ const components_Navigation = (Navigation);
;// CONCATENATED MODULE: external "three"
const external_three_namespaceObject = require("three");
;// CONCATENATED MODULE: ./components/Universe.js





const Universe = function ({
  id,
  metadata
}) {
  let includes = `
    #define NUM_OCTAVES 5

    float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
    vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
    vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

    float noise(vec3 p){
        vec3 a = floor(p);
        vec3 d = p - a;
        d = d * d * (3.0 - 2.0 * d);

        vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
        vec4 k1 = perm(b.xyxy);
        vec4 k2 = perm(k1.xyxy + b.zzww);

        vec4 c = k2 + a.zzzz;
        vec4 k3 = perm(c);
        vec4 k4 = perm(c + 1.0);

        vec4 o1 = fract(k3 * (1.0 / 41.0));
        vec4 o2 = fract(k4 * (1.0 / 41.0));

        vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
        vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

        return o4.y * d.y + o4.x * (1.0 - d.y);
    }


    float fbm(vec3 x) {
      float v = 0.0;
      float a = 0.5;
      vec3 shift = vec3(100);
      for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * noise(x);
        x = x * 2.0 + shift;
        a *= 0.5;
      }
      return v;
    }

    mat3 rotation3dX(float angle) {
      float s = sin(angle);
      float c = cos(angle);
    
      return mat3(
        1.0, 0.0, 0.0,
        0.0, c, s,
        0.0, -s, c
      );
    }
    

    mat3 rotation3dY(float angle) {
      float s = sin(angle);
      float c = cos(angle);
    
      return mat3(
        c, 0.0, -s,
        0.0, 1.0, 0.0,
        s, 0.0, c
      );
    }

    mat3 rotation3dZ(float angle) {
      float s = sin(angle);
      float c = cos(angle);
    
      return mat3(
        c, s, 0.0,
        -s, c, 0.0,
        0.0, 0.0, 1.0
      );
    }
    
    varying vec3 v_position;
    varying vec3 v_normal;
    varying vec2 v_uv;
    varying mat3 v_rotation;

    uniform float time;
    uniform vec3 mainColor;
    uniform vec3 secondaryColor;
    uniform vec3 backgroundColor;
    uniform float jagged;
    uniform float jaggedDepth;
    uniform vec3 rotation;
    uniform vec2 surfaceSpeed;
    uniform vec2 surfaceNoise;
    uniform vec3 size;
  `;
  let vert = `
    ${includes}

    void main() {
      mat3 calcRotation = rotation3dX(time * rotation.x);
      calcRotation *= rotation3dY(time * rotation.y);
      calcRotation *= rotation3dZ(time * rotation.z);

      vec3 newPosition = position * size;
      newPosition *= mix(1.0 - jaggedDepth, 1.0 + jaggedDepth, fbm(position * jagged));
      newPosition *= calcRotation;

      gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
      v_position = position * size;
      v_normal = normal;
      v_uv = uv;
      v_rotation = calcRotation;
    }
  `;
  let frag = `
    ${includes}

    void main() {
      vec3 lightColor = vec3(0.75, 0.75, 0.75);
      vec3 lightPos = vec3(-1.0, 1.0, 5.0);

      float f = fbm(v_position * jagged);

      float m = surfaceNoise.x * cos(time * surfaceSpeed.x + 0.03);
      float n = surfaceNoise.y * sin(time * surfaceSpeed.y + 0.04);

      vec3 landColor = mix(
        mix(secondaryColor, mainColor, step(0.5 - m, f)),
        backgroundColor,
        step(0.5 + n, fbm(v_position))
      );

      float ambientStrength = 0.75;
      vec3 ambientColor = vec3(0.5, 0.5, 0.5);
      vec3 ambient = ambientStrength * ambientColor;

      vec3 norm = normalize(v_normal);
      vec3 lightDir = normalize(lightPos);

      float diff = max(dot(norm, lightDir), 0.0);
      vec3 diffuse = diff * lightColor;

      vec3 result = (ambient + diffuse) * landColor;

      gl_FragColor = vec4(result, 1.0);
    }
  `;
  const universe = (0,external_react_.useRef)();
  (0,external_react_.useEffect)(() => {
    let div = universe.current;
    let anim;

    if (div !== null && metadata.properties.hasOwnProperty("mainColor")) {
      const renderer = new external_three_namespaceObject.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      const scene = new external_three_namespaceObject.Scene();
      const camera = new external_three_namespaceObject.PerspectiveCamera(75, div.clientWidth / div.clientHeight, 0.1, 100);
      renderer.setSize(div.clientWidth, div.clientHeight);
      renderer.setClearColor(0x000000, 0);
      div.innerHTML = "";
      div.append(renderer.domElement);
      const {
        properties
      } = metadata;
      const clock = new external_three_namespaceObject.Clock();
      const uniforms = {
        time: {
          value: clock.getElapsedTime()
        },
        mainColor: {
          value: new external_three_namespaceObject.Color(properties.mainColor)
        },
        secondaryColor: {
          value: new external_three_namespaceObject.Color(properties.secondaryColor)
        },
        backgroundColor: {
          value: new external_three_namespaceObject.Color(properties.backgroundColor)
        },
        jagged: {
          value: properties.jagged
        },
        jaggedDepth: {
          value: properties.jaggedDepth
        },
        size: {
          value: properties.size
        },
        rotation: {
          value: properties.rotation
        },
        surfaceSpeed: {
          value: properties.surfaceSpeed
        },
        surfaceNoise: {
          value: properties.surfaceNoise
        }
      };
      const geometry = new external_three_namespaceObject.SphereGeometry(2.5, 256, 128);
      const material = new external_three_namespaceObject.ShaderMaterial({
        uniforms,
        vertexShader: vert,
        fragmentShader: frag
      });
      const planet = new external_three_namespaceObject.Mesh(geometry, material);
      scene.add(planet);
      camera.position.z = 7;

      const animate = () => {
        anim = requestAnimationFrame(animate);
        uniforms.time.value = clock.getElapsedTime();
        renderer.render(scene, camera);
      };

      window.addEventListener("resize", function () {
        camera.aspect = div.clientWidth / div.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(div.clientWidth, div.clientHeight);
      });
      animate();
    }

    return () => cancelAnimationFrame(anim);
  }, [metadata, frag, vert]);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "universe",
      ref: universe
    })
  });
};

/* harmony default export */ const components_Universe = (Universe);
;// CONCATENATED MODULE: ./components/EthName.js


const EthName = function ({
  address
}) {
  let formatted = "&mdash;";

  if (address) {
    formatted = address.substr(0, 8) + "…" + address.substr(-4);
    formatted = formatted.toLowerCase();
  }

  return /*#__PURE__*/jsx_runtime_.jsx("abbr", {
    className: "eth-name",
    title: address,
    children: formatted
  });
};

/* harmony default export */ const components_EthName = (EthName);
;// CONCATENATED MODULE: ./pages/[id].js










function Planet({
  metadata,
  openSea
}) {
  var _openSea$orders;

  const router = (0,router_.useRouter)();
  let {
    id
  } = router.query;
  id = parseInt(id);

  if (typeof document === "object") {
    document.documentElement.style.setProperty("--main-color", metadata.properties.mainColor);
    document.documentElement.style.setProperty("--secondary-color", metadata.properties.secondaryColor);
  }

  let forSaleNotice = /*#__PURE__*/jsx_runtime_.jsx("p", {
    children: "Not for sale"
  });

  if ((openSea === null || openSea === void 0 ? void 0 : (_openSea$orders = openSea.orders) === null || _openSea$orders === void 0 ? void 0 : _openSea$orders.length) > 0) {
    const price = web3.utils.fromWei(openSea.orders[0].base_price, 'ether');
    const address = openSea.orders[0].maker.address;
    forSaleNotice = /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: ["Currently on sale on Opensea for ", price, " ETH by ", /*#__PURE__*/jsx_runtime_.jsx(components_EthName, {
        address: address
      }), "."]
    });
  }

  let openSeaLink = `https://testnets.opensea.io/assets/${contractAddress}/${id}`;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Navigation, {
      id: id,
      total: 5
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Universe, {
      id: id,
      metadata: metadata
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
        children: ["Planet #", id]
      }), forSaleNotice, console.log(openSea), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: openSeaLink,
        target: "_blank",
        className: "button",
        children: "View on OpenSea"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: ["Planetary \u2013 Planet #", id]
      })
    })]
  });
}

async function getStaticPaths() {
  const paths = [1, 2, 3, 4, 5].map(id => {
    return {
      params: {
        id: id.toString()
      }
    };
  });
  return {
    paths: paths,
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  // params.id is available
  let token = await contract.methods.tokenURI(params.id).call();
  let metadataResponse = await fetch(token);
  let metadata = await metadataResponse.json();
  let openSeaResponse = await fetch(`https://rinkeby-api.opensea.io/api/v1/asset/${contractAddress}/${params.id}`);
  let openSea = await openSeaResponse.json();
  console.log(openSea);
  return {
    props: {
      metadata: metadata,
      openSea: openSea
    }
  };
}
/* harmony default export */ const _id_ = (Planet);

/***/ }),

/***/ 325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(502)));
module.exports = __webpack_exports__;

})();