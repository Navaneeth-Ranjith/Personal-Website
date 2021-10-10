(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8771: function(e, t, n) {
            "use strict";
            var r = n(1682);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        r(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            t.default = function(e, t) {
                var n = i.default,
                    r = {
                        loading: function(e) {
                            e.error, e.isLoading;
                            return e.pastDelay, null
                        }
                    };
                e instanceof Promise ? r.loader = function() {
                    return e
                } : "function" === typeof e ? r.loader = e : "object" === typeof e && (r = s(s({}, r), e));
                var a = r = s(s({}, r), t);
                if (a.suspense) throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");
                if (a.suspense) return n(a);
                r.loadableGenerated && delete(r = s(s({}, r), r.loadableGenerated)).loadableGenerated;
                if ("boolean" === typeof r.ssr) {
                    if (!r.ssr) return delete r.ssr, l(n, r);
                    delete r.ssr
                }
                return n(r)
            };
            o(n(7294));
            var i = o(n(4860));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }
        },
        1083: function(e, t, n) {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LoadableContext = void 0;
            var a = ((r = n(7294)) && r.__esModule ? r : {
                default: r
            }).default.createContext(null);
            t.LoadableContext = a
        },
        4860: function(e, t, n) {
            "use strict";
            var r = n(2553),
                a = n(2012),
                s = n(1682);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        s(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function l(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return u(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var s, i = !0,
                    o = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        o = !0, s = e
                    },
                    f: function() {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (o) throw s
                        }
                    }
                }
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var c, d = (c = n(7294)) && c.__esModule ? c : {
                    default: c
                },
                f = n(7161),
                m = n(1083);
            var h = [],
                p = [],
                x = !1;

            function b(e) {
                var t = e(),
                    n = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return n.promise = t.then((function(e) {
                    return n.loading = !1, n.loaded = e, e
                })).catch((function(e) {
                    throw n.loading = !1, n.error = e, e
                })), n
            }
            var _ = function() {
                function e(t, n) {
                    r(this, e), this._loadFn = t, this._opts = n, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
                return a(e, [{
                    key: "promise",
                    value: function() {
                        return this._res.promise
                    }
                }, {
                    key: "retry",
                    value: function() {
                        var e = this;
                        this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                            pastDelay: !1,
                            timedOut: !1
                        };
                        var t = this._res,
                            n = this._opts;
                        t.loading && ("number" === typeof n.delay && (0 === n.delay ? this._state.pastDelay = !0 : this._delay = setTimeout((function() {
                            e._update({
                                pastDelay: !0
                            })
                        }), n.delay)), "number" === typeof n.timeout && (this._timeout = setTimeout((function() {
                            e._update({
                                timedOut: !0
                            })
                        }), n.timeout))), this._res.promise.then((function() {
                            e._update({}), e._clearTimeouts()
                        })).catch((function(t) {
                            e._update({}), e._clearTimeouts()
                        })), this._update({})
                    }
                }, {
                    key: "_update",
                    value: function(e) {
                        this._state = o(o({}, this._state), {}, {
                            error: this._res.error,
                            loaded: this._res.loaded,
                            loading: this._res.loading
                        }, e), this._callbacks.forEach((function(e) {
                            return e()
                        }))
                    }
                }, {
                    key: "_clearTimeouts",
                    value: function() {
                        clearTimeout(this._delay), clearTimeout(this._timeout)
                    }
                }, {
                    key: "getCurrentValue",
                    value: function() {
                        return this._state
                    }
                }, {
                    key: "subscribe",
                    value: function(e) {
                        var t = this;
                        return this._callbacks.add(e),
                            function() {
                                t._callbacks.delete(e)
                            }
                    }
                }]), e
            }();

            function y(e) {
                return function(e, t) {
                    var n = Object.assign({
                        loader: null,
                        loading: null,
                        delay: 200,
                        timeout: null,
                        webpack: null,
                        modules: null,
                        suspense: !1
                    }, t);
                    n.suspense && (n.lazy = d.default.lazy(n.loader));
                    var r = null;

                    function a() {
                        if (!r) {
                            var t = new _(e, n);
                            r = {
                                getCurrentValue: t.getCurrentValue.bind(t),
                                subscribe: t.subscribe.bind(t),
                                retry: t.retry.bind(t),
                                promise: t.promise.bind(t)
                            }
                        }
                        return r.promise()
                    }
                    if (!x && "function" === typeof n.webpack && !n.suspense) {
                        var s = n.webpack();
                        p.push((function(e) {
                            var t, n = l(s);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var r = t.value;
                                    if (-1 !== e.indexOf(r)) return a()
                                }
                            } catch (i) {
                                n.e(i)
                            } finally {
                                n.f()
                            }
                        }))
                    }
                    var i = n.suspense ? function(e, t) {
                        return d.default.createElement(n.lazy, o(o({}, e), {}, {
                            ref: t
                        }))
                    } : function(e, t) {
                        a();
                        var s = d.default.useContext(m.LoadableContext),
                            i = f.useSubscription(r);
                        return d.default.useImperativeHandle(t, (function() {
                            return {
                                retry: r.retry
                            }
                        }), []), s && Array.isArray(n.modules) && n.modules.forEach((function(e) {
                            s(e)
                        })), d.default.useMemo((function() {
                            return i.loading || i.error ? d.default.createElement(n.loading, {
                                isLoading: i.loading,
                                pastDelay: i.pastDelay,
                                timedOut: i.timedOut,
                                error: i.error,
                                retry: r.retry
                            }) : i.loaded ? d.default.createElement(function(e) {
                                return e && e.__esModule ? e.default : e
                            }(i.loaded), e) : null
                        }), [e, i])
                    };
                    return i.preload = function() {
                        return !n.suspense && a()
                    }, i.displayName = "LoadableComponent", d.default.forwardRef(i)
                }(b, e)
            }

            function j(e, t) {
                for (var n = []; e.length;) {
                    var r = e.pop();
                    n.push(r(t))
                }
                return Promise.all(n).then((function() {
                    if (e.length) return j(e, t)
                }))
            }
            y.preloadAll = function() {
                return new Promise((function(e, t) {
                    j(h).then(e, t)
                }))
            }, y.preloadReady = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise((function(t) {
                    var n = function() {
                        return x = !0, t()
                    };
                    j(p, e).then(n, n)
                }))
            }, window.__NEXT_PRELOADREADY = y.preloadReady;
            var g = y;
            t.default = g
        },
        1081: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n(5152),
                a = n(5706),
                s = n(5893);

            function i() {
                return (0, s.jsxs)("div", {
                    className: "h_mobile-100 sm:min-h-screen bg-no-repeat bg-cover sm:bg-bottom overflow-hidden",
                    style: {
                        backgroundImage: "url(../background/1.svg)"
                    },
                    children: [(0, s.jsxs)("div", {
                        className: "flex justify-between text-light  text-2xl p-5 sm:px-10",
                        children: [(0, s.jsx)("div", {
                            children: (0, s.jsx)("a", {
                                href: "#",
                                children: "Aj"
                            })
                        }), (0, s.jsxs)("div", {
                            className: "flex gap-7",
                            children: [(0, s.jsx)("p", {
                                children: (0, s.jsx)("a", {
                                    href: "#projects",
                                    children: "Projects"
                                })
                            }), (0, s.jsx)("p", {
                                children: (0, s.jsx)("a", {
                                    href: "#contact",
                                    children: "Contact"
                                })
                            })]
                        })]
                    }), (0, s.jsx)("h1", {
                        className: "text-center font-black text-4xl p-2 sm:text-7xl mt-5 text-light animate__animated animate__backInDown",
                        children: "Welcome to NJ's World"
                    }), (0, s.jsxs)("div", {
                        className: "grid grid-cols-3 grid-rows-2 sm:grid-rows-none sm:grid-cols-5 mx-auto max-w-4xl  items-center py-10 sm:py-12 px-2",
                        children: [(0, s.jsx)("div", {
                            className: "justify-self-center col-span-1 animate__animated animate__backInLeft row-span-2",
                            children: (0, s.jsx)("img", {
                                src: "../images/aj/1.webp",
                                alt: "aj.webp",
                                width: "160"
                            })
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col items-center gap-4 text-center col-span-2 animate__animated animate__backInRight row-span-2",
                            children: [(0, s.jsx)("h1", {
                                className: "text-light text-xl sm:text-3xl",
                                children: "Hi I am,"
                            }), (0, s.jsx)("h1", {
                                className: "text-light text-2xl sm:text-5xl",
                                children: "Navaneeth P"
                            }), (0, s.jsx)("h1", {
                                className: "text-light text-lg sm:text-3xl",
                                children: "MERN Stack Developer"
                            }), (0, s.jsx)("a", {
                                href: "#projects",
                                className: "btn btn-outline btn-primary m-4 p-2 min-h-16 ring-4 ring-indigo-500 sm:text-lg ",
                                children: "Explore my Projects"
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex sm:flex-col social-icons  sm:col-auto sm:row-span-1 sm:row-start-1 mt-5 col-span-3 sm:col-span-1 justify-self-center sm:justify-self-start gap-3",
                            children: [(0, s.jsx)("h1", {
                                className: "text-light text-2xl sm:text-5xl animate__animated animate__zoomIn animate__delay-1s",
                                children: (0, s.jsx)("a", {
                                    href: a.Z.linkedin,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)("i", {
                                        className: "bx bxl-linkedin-square "
                                    })
                                })
                            }), (0, s.jsx)("h1", {
                                className: "text-light text-2xl sm:text-5xl animate__animated animate__zoomIn animate__delay-1s",
                                children: (0, s.jsx)("a", {
                                    href: a.Z.facebook,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)("i", {
                                        className: "bx bxl-facebook-square"
                                    })
                                })
                            }), (0, s.jsx)("h1", {
                                className: "text-light text-2xl sm:text-5xl animate__animated animate__zoomIn animate__delay-1s",
                                children: (0, s.jsx)("a", {
                                    href: a.Z.twitter,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)("i", {
                                        className: "bx bxl-twitter"
                                    })
                                })
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex sm:flex-col social-icons row-span-1 sm:justify-self-end mt-5 col-span-3 sm:col-span-1 justify-self-center gap-3",
                            children: [(0, s.jsx)("h1", {
                                className: "text-light text-2xl sm:text-5xl animate__animated animate__zoomIn animate__delay-1s",
                                children: (0, s.jsx)("a", {
                                    href: a.Z.github,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)("i", {
                                        className: "bx bxl-github"
                                    })
                                })
                            }), (0, s.jsx)("h1", {
                                className: "text-light text-2xl sm:text-5xl animate__animated animate__zoomIn animate__delay-1s",
                                children: (0, s.jsx)("a", {
                                    href: a.Z.instagram,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)("i", {
                                        className: "bx bxl-instagram"
                                    })
                                })
                            }), (0, s.jsx)("h1", {
                                className: "text-light text-2xl sm:text-5xl animate__animated animate__zoomIn animate__delay-1s",
                                children: (0, s.jsx)("a", {
                                    href: a.Z.youtube,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)("i", {
                                        className: "bx bxl-youtube"
                                    })
                                })
                            })]
                        })]
                    })]
                })
            }
            var o = (0, r.default)((function() {
                    return n.e(230).then(n.bind(n, 5230))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [5230]
                        },
                        modules: ["index.js -> ../components/Projects"]
                    }
                }),
                l = (0, r.default)((function() {
                    return Promise.all([n.e(675), n.e(145)]).then(n.bind(n, 1145))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [1145]
                        },
                        modules: ["index.js -> ../components/About"]
                    }
                }),
                u = (0, r.default)((function() {
                    return n.e(61).then(n.bind(n, 61))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [61]
                        },
                        modules: ["index.js -> ../components/Skills"]
                    }
                }),
                c = (0, r.default)((function() {
                    return Promise.all([n.e(675), n.e(379)]).then(n.bind(n, 1379))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [1379]
                        },
                        modules: ["index.js -> ../components/Certificates"]
                    }
                }),
                d = (0, r.default)((function() {
                    return n.e(987).then(n.bind(n, 1987))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [1987]
                        },
                        modules: ["index.js -> ../components/Contact"]
                    }
                });

            function f() {
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(i, {}), (0, s.jsx)(o, {}), (0, s.jsx)(l, {}), (0, s.jsx)(u, {}), (0, s.jsx)(c, {}), (0, s.jsx)(d, {})]
                })
            }
        },
        5706: function(e, t) {
            "use strict";
            t.Z = {
                linkedin: "https://www.linkedin.com/in/navaneeth-p-b473b71ba/",
                facebook: "https://www.facebook.com/navaneeth.ranjith.71/",
                twitter: "https://twitter.com/Navanee71318512",
                github: "https://github.com/Navaneeth-Ranjith",
                instagram: "https://www.instagram.com/_.n_v_n_e_e_t_h._/",
                youtube: "https://www.youtube.com/channel/UCzjasS_P8cMCEawJ-s92G3g"
            }
        },
        8581: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(1081)
            }])
        },
        5152: function(e, t, n) {
            e.exports = n(8771)
        }
    },
    function(e) {
        e.O(0, [774, 888, 179], (function() {
            return t = 8581, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);