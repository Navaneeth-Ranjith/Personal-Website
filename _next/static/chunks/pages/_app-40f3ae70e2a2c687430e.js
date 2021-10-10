(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        7672: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n(2809),
                a = (n(3498), n(1127), n(9008)),
                r = n(4298),
                s = n(7294),
                i = n(5893);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            t.default = function(e) {
                var t = e.Component,
                    n = e.pageProps;
                return (0, s.useEffect)((function() {
                    AOS.init({
                        disable: function() {
                            return "#skills" == location.hash || "#projects" == location.hash
                        },
                        debounceDelay: 0,
                        throttleDelay: 0
                    }), window.addEventListener("load", AOS.refresh)
                }), []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(a.default, {
                        children: [(0, i.jsx)("script", {
                            src: "../cdn/aos/aos.js"
                        }), (0, i.jsx)("link", {
                            rel: "stylesheet",
                            href: "../cdn/aos/aos-original.css"
                        }), (0, i.jsx)("link", {
                            rel: "stylesheet",
                            href: "../cdn/animate/animate.css"
                        }), (0, i.jsx)("link", {
                            rel: "stylesheet",
                            href: "../cdn/boxicons/boxicons.css"
                        }), (0, i.jsx)("link", {
                            rel: "stylesheet",
                            href: "../cdn/devicon/devicon.css"
                        }), (0, i.jsx)("title", {
                            children: "Navaneeth P"
                        }), (0, i.jsx)("link", {
                            rel: "manifest",
                            href: "/manifest.json"
                        }), (0, i.jsx)("meta", {
                            name: "application-name",
                            content: "Navaneeth P"
                        }), (0, i.jsx)("meta", {
                            name: "apple-mobile-web-app-capable",
                            content: "yes"
                        }), (0, i.jsx)("meta", {
                            name: "apple-mobile-web-app-status-bar-style",
                            content: "default"
                        }), (0, i.jsx)("meta", {
                            name: "apple-mobile-web-app-title",
                            content: "Navaneeth P"
                        }), (0, i.jsx)("meta", {
                            name: "description",
                            content: "I am a MERN Stack Developer. I have done so many projects with amazing web technologies such as Node.js, Next.js, React.js, MongoDB etc.  Hire me as a web developer."
                        }), (0, i.jsx)("meta", {
                            name: "format-detection",
                            content: "telephone=no"
                        }), (0, i.jsx)("meta", {
                            name: "mobile-web-app-capable",
                            content: "yes"
                        }), (0, i.jsx)("meta", {
                            name: "msapplication-TileColor",
                            content: "#2B5797"
                        }), (0, i.jsx)("meta", {
                            name: "msapplication-tap-highlight",
                            content: "no"
                        }), (0, i.jsx)("meta", {
                            name: "theme-color",
                            content: "#000000"
                        }), (0, i.jsx)("link", {
                            rel: "apple-touch-icon",
                            href: "/logo1.png"
                        }), (0, i.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "32x32",
                            href: "/logo1.png"
                        }), (0, i.jsx)("link", {
                            rel: "mask-icon",
                            href: "/logo1.png",
                            color: "#5bbad5"
                        }), (0, i.jsx)("link", {
                            rel: "shortcut icon",
                            href: "/favicon1.ico"
                        }), (0, i.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary"
                        }), (0, i.jsx)("meta", {
                            name: "twitter:url",
                            content: "https://navaneeth.gq"
                        }), (0, i.jsx)("meta", {
                            name: "twitter:title",
                            content: "Navaneeth P"
                        }), (0, i.jsx)("meta", {
                            name: "twitter:description",
                            content: "I am a MERN Stack Developer. I have done so many projects with amazing web technologies such as Node.js, Next.js, React.js, MongoDB etc. Hire me as a web developer."
                        }), (0, i.jsx)("meta", {
                            name: "twitter:image",
                            content: "https://navaneeth.gq/logo1.png"
                        }), (0, i.jsx)("meta", {
                            name: "twitter:creator",
                            content: "@ajayda24"
                        }), (0, i.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, i.jsx)("meta", {
                            property: "og:title",
                            content: "Navaneeth P"
                        }), (0, i.jsx)("meta", {
                            property: "og:description",
                            content: "I am a MERN Stack Developer. I have done so many projects with amazing web technologies such as Node.js, Next.js, React.js, MongoDB etc. Hire me as a web developer."
                        }), (0, i.jsx)("meta", {
                            property: "og:site_name",
                            content: "Navaneeth P"
                        }), (0, i.jsx)("meta", {
                            property: "og:url",
                            content: "https://navaneeth.gq"
                        }), (0, i.jsx)("meta", {
                            property: "og:image",
                            content: "https://navaneeth.gq/logo1.png"
                        })]
                    }), (0, i.jsx)(r.default, {
                        dangerouslySetInnerHTML: {
                            __html: "\n                document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01+'px');\n                document.documentElement.setAttribute('data-theme','my-theme');\n                window.addEventListener('resize', () => {\n                document.documentElement.style.setProperty('--vh',window.innerHeight * 0.01 + 'px')});\n          "
                        }
                    }), (0, i.jsx)(t, l({}, n))]
                })
            }
        },
        1780: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n(7672)
            }])
        },
        3498: function() {},
        1127: function() {},
        9008: function(e, t, n) {
            e.exports = n(639)
        },
        4298: function(e, t, n) {
            e.exports = n(7926)
        },
        2809: function(e, t, n) {
            "use strict";

            function o(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, {
                Z: function() {
                    return o
                }
            })
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], (function() {
            return t(1780), t(4651)
        }));
        var n = e.O();
        _N_E = n
    }
]);