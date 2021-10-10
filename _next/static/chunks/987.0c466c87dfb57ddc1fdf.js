"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [987], {
        1987: function(e, t, r) {
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            });
            var n = r(2809);

            function a(e, t, r, n, a, i, s) {
                try {
                    var o = e[i](s),
                        l = o.value
                } catch (c) {
                    return void r(c)
                }
                o.done ? t(l) : Promise.resolve(l).then(n, a)
            }
            var i = r(809),
                s = r.n(i),
                o = r(5706),
                l = r(7294);
            var c = r(5893);

            function m(e) {
                var t = e.errorState,
                    r = void 0 === t ? "alert-error" : t,
                    n = e.text;
                return (0, c.jsx)("div", {
                    className: "alert ".concat(r, " min-w-[90%] sm:min-w-[30%] top-[9rem] md:top[10rem] absolute-center  text-center"),
                    children: (0, c.jsx)("div", {
                        className: "flex-1 justify-center",
                        children: (0, c.jsx)("label", {
                            children: n
                        })
                    })
                })
            }

            function u(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function f() {
                ! function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "animate__zoomIn";
                    (0, l.useEffect)((function() {
                        window.addEventListener("scroll", (function() {
                            var r = document.querySelector(e, t),
                                n = r.getBoundingClientRect();
                            n.top >= 0 && n.bottom <= window.innerHeight ? null == r.getAttribute("data-ajAnimation") && (r.style.opacity = 1, r.classList.add("animate__animated", t), r.setAttribute("data-ajAnimation", !0)) : null == r.getAttribute("data-ajAnimation") && (r.style.opacity = 0, r.classList.remove("animate__animated", t))
                        }))
                    }), [])
                }(".profile-icons");
                var e = (0, l.useState)({
                        firstName: "",
                        email: "",
                        message: ""
                    }),
                    t = e[0],
                    r = e[1],
                    n = (0, l.useState)(!1),
                    i = n[0],
                    u = n[1],
                    f = (0, l.useState)({
                        text: "Something went wrong!",
                        error: "alert-error"
                    }),
                    d = f[0],
                    h = f[1],
                    p = (0, l.useState)("Submit"),
                    g = p[0],
                    b = p[1],
                    j = function() {
                        var e, n = (e = s().mark((function e(n) {
                            var a, i;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n.preventDefault(), "" == t.firstName.trim() || "" == t.email.trim() || "" == t.message.trim()) {
                                            e.next = 11;
                                            break
                                        }
                                        return b("Sending..."), e.next = 5, fetch("api/postSubmitContact", {
                                            method: "POST",
                                            body: JSON.stringify({
                                                firstName: t.firstName,
                                                email: t.email,
                                                message: t.message
                                            }),
                                            headers: {
                                                Accept: "application/json",
                                                "Content-Type": "application/json"
                                            }
                                        });
                                    case 5:
                                        return a = e.sent, e.next = 8, a.json();
                                    case 8:
                                        (i = e.sent) && (b("Submit"), u(!0), h({
                                            text: i.status,
                                            error: i.error
                                        }), r({
                                            firstName: "",
                                            email: "",
                                            message: ""
                                        })), setTimeout((function() {
                                            u(!1), h(null)
                                        }), 3e3);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })), function() {
                            var t = this,
                                r = arguments;
                            return new Promise((function(n, i) {
                                var s = e.apply(t, r);

                                function o(e) {
                                    a(s, n, i, o, l, "next", e)
                                }

                                function l(e) {
                                    a(s, n, i, o, l, "throw", e)
                                }
                                o(void 0)
                            }))
                        });
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }();
                return (0, c.jsxs)("div", {
                    id: "contact",
                    className: "h_mobile-100 sm:min-h-screen  overflow-hidden flex flex-col justify-between relative",
                    children: [(0, c.jsx)("h1", {
                        id: "contact-heading",
                        className: "text-center font-black text-4xl p-2 sm:text-7xl mt-5 text-light",
                        "data-aos": "fade-down",
                        children: "Contact Me"
                    }), (0, c.jsx)("p", {
                        className: "text-light text-center font-black text-xl p-2 sm:text-2xl mt-3 ".concat(i ? "invisible" : ""),
                        children: "Want to get in touch?"
                    }), (0, c.jsxs)("form", {
                        onSubmit: j,
                        children: [(0, c.jsx)("div", {
                            className: "form-control text-light max-w-screen-sm m-5 mx-auto  px-5",
                            children: (0, c.jsx)("input", {
                                placeholder: "Name",
                                className: "input input-primary input-bordered focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500",
                                type: "text",
                                required: !0,
                                autoComplete: "hello",
                                value: t.firstName,
                                onChange: function(e) {
                                    return r((function(t) {
                                        return x(x({}, t), {}, {
                                            firstName: e.target.value
                                        })
                                    }))
                                }
                            })
                        }), (0, c.jsx)("div", {
                            className: "form-control text-light max-w-screen-sm m-5 mx-auto  px-5",
                            children: (0, c.jsx)("input", {
                                placeholder: "Email",
                                className: "input input-primary input-bordered focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500",
                                type: "email",
                                required: !0,
                                autoComplete: "off",
                                value: t.email,
                                onChange: function(e) {
                                    return r((function(t) {
                                        return x(x({}, t), {}, {
                                            email: e.target.value
                                        })
                                    }))
                                }
                            })
                        }), (0, c.jsx)("div", {
                            className: "form-control text-light max-w-screen-sm m-5 mx-auto  px-5",
                            children: (0, c.jsx)("textarea", {
                                className: "textarea h-24 textarea-bordered textarea-primary focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500",
                                placeholder: "Message",
                                required: !0,
                                autoComplete: "off",
                                value: t.message,
                                onChange: function(e) {
                                    return r((function(t) {
                                        return x(x({}, t), {}, {
                                            message: e.target.value
                                        })
                                    }))
                                }
                            })
                        }), (0, c.jsx)("center", {
                            children: (0, c.jsx)("button", {
                                type: "submit",
                                className: "btn md:btn-wide btn-primary mx-auto",
                                children: g
                            })
                        })]
                    }), (0, c.jsxs)("div", {
                        className: "flex justify-center mt-10 gap-5 profile-icons",
                        children: [(0, c.jsx)("h1", {
                            className: "text-light text-2xl sm:text-5xl",
                            children: (0, c.jsx)("a", {
                                href: o.Z.linkedin,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, c.jsx)("i", {
                                    className: "bx bxl-linkedin-square "
                                })
                            })
                        }), (0, c.jsx)("h1", {
                            className: "text-light text-2xl sm:text-5xl",
                            children: (0, c.jsx)("a", {
                                href: o.Z.facebook,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, c.jsx)("i", {
                                    className: "bx bxl-facebook-square"
                                })
                            })
                        }), (0, c.jsx)("h1", {
                            className: "text-light text-2xl sm:text-5xl",
                            children: (0, c.jsx)("a", {
                                href: o.Z.github,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, c.jsx)("i", {
                                    className: "bx bxl-github"
                                })
                            })
                        }), (0, c.jsx)("h1", {
                            className: "text-light text-2xl sm:text-5xl",
                            children: (0, c.jsx)("a", {
                                href: o.Z.twitter,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, c.jsx)("i", {
                                    className: "bx bxl-twitter"
                                })
                            })
                        }), (0, c.jsx)("h1", {
                            className: "text-light text-2xl sm:text-5xl",
                            children: (0, c.jsx)("a", {
                                href: o.Z.instagram,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, c.jsx)("i", {
                                    className: "bx bxl-instagram"
                                })
                            })
                        })]
                    }), (0, c.jsx)("img", {
                        src: "../background/3-crop1.png",
                        alt: "",
                        width: "100%"
                    }), i && (0, c.jsx)(m, {
                        text: d.text,
                        errorState: d.error
                    })]
                })
            }
        }
    }
]);