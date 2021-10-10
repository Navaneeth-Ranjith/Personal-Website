if (!self.define) {
    const e = e => {
            "require" !== e && (e += ".js");
            let s = Promise.resolve();
            return c[e] || (s = new Promise((async s => {
                if ("document" in self) {
                    const c = document.createElement("script");
                    c.src = e, document.head.appendChild(c), c.onload = s
                } else importScripts(e), s()
            }))), s.then((() => {
                if (!c[e]) throw new Error(`Module ${e} didn’t register its module`);
                return c[e]
            }))
        },
        s = (s, c) => {
            Promise.all(s.map(e)).then((e => c(1 === e.length ? e[0] : e)))
        },
        c = {
            require: Promise.resolve(s)
        };
    self.define = (s, i, a) => {
        c[s] || (c[s] = Promise.resolve().then((() => {
            let c = {};
            const n = {
                uri: location.origin + s.slice(1)
            };
            return Promise.all(i.map((s => {
                switch (s) {
                    case "exports":
                        return c;
                    case "module":
                        return n;
                    default:
                        return e(s)
                }
            }))).then((e => {
                const s = a(...e);
                return c.default || (c.default = s), c
            }))
        })))
    }
}
define("./sw.js", ["./workbox-21b21c9a"], (function(e) {
    "use strict";
    importScripts(), self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{
        url: "/_next/static/chunks/145.9b01bcb4e62574266bfd.js",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/chunks/230.5b08e5d9b5a9f31199b2.js",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/chunks/379.1a10bee77cd7706fc67a.js",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/chunks/61.64bb93a78c4b788e3ecb.js",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/chunks/675.206f45134bf365b1d727.js",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/chunks/987.0c466c87dfb57ddc1fdf.js",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/chunks/framework-717d42ae9e172961f2a5.js",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/chunks/main-f61ef6357d0f360da4a2.js",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/chunks/pages/_app-40f3ae70e2a2c687430e.js",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/chunks/pages/index-87593503a0a6b8292cbc.js",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/chunks/webpack-3b5cad86990d7dc93961.js",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/crVMucDsI3-KIbjKH3L45/_buildManifest.js",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/crVMucDsI3-KIbjKH3L45/_ssgManifest.js",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/css/9cc0ab34f494134af7e1.css",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/image/public/images/aj/ajay.fa03143de1d628082fd0c57a4168d29c.webp",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/image/public/images/certificates/crossroads-nodejs-cert.fc090f182d838a4ab6f04d51b72d888d.webp",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/image/public/images/certificates/nextjs-cert.c69e86d42942a0536147acb88df6ebdb.webp",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/image/public/images/certificates/nodejs-cert.c69e86d42942a0536147acb88df6ebdb.webp",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/image/public/images/certificates/reactjs-cert.1d908326ace26965700a56ceced6b0de.webp",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/_next/static/image/public/images/certificates/webdevelopment-cert.fc81fe6daf11efcdab38bdc37eaad497.webp",
        revision: "crVMucDsI3-KIbjKH3L45"
    }, {
        url: "/background/1.svg",
        revision: "2bca54bcf5e889e4b29356f754bca30e"
    }, {
        url: "/background/3-crop.png",
        revision: "1043d9e05f74e5f744b495450739e56c"
    }, {
        url: "/background/3-crop1.png",
        revision: "ff1d49e49b7d831d8b4850c8dc15b9cb"
    }, {
        url: "/background/3.svg",
        revision: "068c14b349274652eaf442fdef6c494b"
    }, {
        url: "/bg-landscape.png",
        revision: "696b71adbba3d266285f1db31994c1dd"
    }, {
        url: "/bg-portrait.png",
        revision: "16ee9bef4de5fd86e972ae103c1694da"
    }, {
        url: "/cdn/animate/animate.css",
        revision: "3d5f5e77a9564a8834a6ac3d7488a641"
    }, {
        url: "/cdn/aos/aos-original.css",
        revision: "3a5075d64458e13d180aff0dfffc9923"
    }, {
        url: "/cdn/aos/aos.js",
        revision: "d3718e34eeb0355be8e3179a2e2bccb7"
    }, {
        url: "/cdn/boxicons/boxicons.css",
        revision: "8630158e1dd601d2c96a1596e9f1c996"
    }, {
        url: "/cdn/boxicons/fonts/boxicons.ttf",
        revision: "ffe87d4821ad790a70dbc2849d9b9866"
    }, {
        url: "/cdn/devicon/devicon.css",
        revision: "f11f50aa8e747a828fa96415403e4d19"
    }, {
        url: "/cdn/devicon/fonts/devicon.svg",
        revision: "53db46c103d90bae79f87b6077e473dc"
    }, {
        url: "/cdn/devicon/fonts/devicon.ttf",
        revision: "5a4709929c93b840da31d3172991fc91"
    }, {
        url: "/favicon1.ico",
        revision: "0373919ec26082acdfce7b87103b1688"
    }, {
        url: "/images/aj/1.webp",
        revision: "092583c7bfb284858c8eb853e62bd6f5"
    }, {
        url: "/images/aj/ajay.webp",
        revision: "026acde6b40dc3a2901cd9403a659ffe"
    }, {
        url: "/images/certificates/crossroads-nodejs-cert.webp",
        revision: "8bc98778e03f226861f55ba6521ecc3b"
    }, {
        url: "/images/certificates/nextjs-cert.webp",
        revision: "59d75ffdd5d923a4eefed16b2e4111b7"
    }, {
        url: "/images/certificates/nodejs-cert.webp",
        revision: "59d75ffdd5d923a4eefed16b2e4111b7"
    }, {
        url: "/images/certificates/reactjs-cert.webp",
        revision: "1d647deb8528738989f649dc10a319de"
    }, {
        url: "/images/certificates/webdevelopment-cert.webp",
        revision: "f14b8fe320a76ae0598d265159b92d61"
    }, {
        url: "/images/projects/ajmoviesinfo1.webp",
        revision: "3008a671730a741347a2ac836db3a26a"
    }, {
        url: "/images/projects/ajwhatsapp.webp",
        revision: "680a77b506d4713ec10ed9151557fcce"
    }, {
        url: "/images/projects/chainreaction.webp",
        revision: "707c9b3987cb98434a0333d3953963ee"
    }, {
        url: "/images/projects/classathome1.webp",
        revision: "34c9c91b8f39980f3dac6c857033bf23"
    }, {
        url: "/images/projects/otherprojects.webp",
        revision: "6de5a6b0165b6fc6fa6a5f3cc2a315ec"
    }, {
        url: "/logo1.png",
        revision: "e898e9d0e9386f2de42915b74d3da3fe"
    }, {
        url: "/manifest.json",
        revision: "7fd183a8bf39e0583d0c52113085c030"
    }, {
        url: "/vercel.svg",
        revision: "4b4f1876502eb6721764637fe5c41702"
    }], {
        ignoreURLParametersMatching: []
    }), e.cleanupOutdatedCaches(), e.registerRoute("/", new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [{
            cacheWillUpdate: async ({
                request: e,
                response: s,
                event: c,
                state: i
            }) => s && "opaqueredirect" === s.type ? new Response(s.body, {
                status: 200,
                statusText: "OK",
                headers: s.headers
            }) : s
        }]
    }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3
        })]
    }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800
        })]
    }), "GET"), e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800
        })]
    }), "GET"), e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\/_next\/image\?url=.+$/i, new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:mp3|wav|ogg)$/i, new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:mp4)$/i, new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute((({
        url: e
    }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/")
    }), new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute((({
        url: e
    }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/")
    }), new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute((({
        url: e
    }) => !(self.origin === e.origin)), new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 3600
        })]
    }), "GET")
}));