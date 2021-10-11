"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [230], {
        5230: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var s = a(5893);

            function i(e) {
                return (0, s.jsxs)("div", {
                    className: "flex flex-col md:flex-row  mx-auto  justify-evenly  items-center py-10 sm:py-12 px-2 gap-5",
                    children: [(0, s.jsx)("div", {
                        className: "justify-self-center ring-4 ring-[#98b6f6] ring-offset-2 p-1 order-last ".concat(e.imageLeft ? "md:order-first" : "md:order-last"),
                        "data-aos": "fade-right",
                        children: (0, s.jsx)("img", {
                            className: "h-96",
                            src: "../images/projects/".concat(e.image, ".webp"),
                            alt: e.title
                        })
                    }), (0, s.jsxs)("div", {
                        className: "flex flex-col  gap-4 text-center ",
                        "data-aos": "fade-left",
                        children: [e.indicator ? (0, s.jsxs)("div", {
                            className: "mx-auto indicator ",
                            children: [(0, s.jsx)("div", {
                                className: "indicator-item badge badge-primary !-top-2",
                                children: e.indicator
                            }), (0, s.jsx)("h1", {
                                className: "text-light text-xl sm:text-3xl ",
                                children: e.title
                            })]
                        }) : (0, s.jsx)("h1", {
                            className: "text-light text-xl sm:text-3xl ",
                            children: e.title
                        }), (0, s.jsx)("hr", {
                            className: "hr"
                        }), (0, s.jsxs)("div", {
                            className: "max-w-md flex flex-col gap-4",
                            children: [(0, s.jsx)("h2", {
                                className: "text-light text-md sm:text-lg",
                                children: e.description
                            }), (0, s.jsx)("h2", {
                                className: "text-light text-lg sm:text-xl",
                                children: "Features & Technologies"
                            }), (0, s.jsx)("hr", {
                                className: " border-double border-b-4 border-[#98b6f6] border-opacity-50 ",
                                style: {
                                    width: "20%",
                                    margin: "auto"
                                }
                            }), (0, s.jsx)("div", {
                                className: "flex flex-wrap gap-4 justify-center",
                                children: e.features.map((function(e) {
                                    return (0, s.jsx)("div", {
                                        className: "badge badge-lg text-light rounded-none",
                                        children: e
                                    }, e)
                                }))
                            }), (0, s.jsx)("div", {
                                className: "flex flex-wrap gap-4 justify-center",
                                children: e.technologies.map((function(e) {
                                    return (0, s.jsx)("div", {
                                        className: "badge badge-lg text-light",
                                        children: e
                                    }, e)
                                }))
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-wrap justify-center",
                            children: [(0, s.jsx)("a", {
                                target: "_blank",
                                href: e.github,
                                className: "btn btn-outline btn-primary m-4 p-2 px-6  ring-4 ring-indigo-500 sm:text-lg gap-2 order-first",
                                rel: "noopener noreferrer",
                                children: (0, s.jsx)("p", {
                                    children: "Github"
                                })
                            }), (0, s.jsx)("a", {
                                target: "_blank",
                                href: e.view,
                                className: "btn btn-outline btn-primary m-4 p-2 px-6  ring-4 ring-indigo-500 sm:text-lg gap-2 order-2 ",
                                rel: "noopener noreferrer",
                                children: (0, s.jsx)("p", {
                                    children: "Open"
                                })
                            })]
                        })]
                    })]
                })
            }

            function r() {
                return (0, s.jsxs)("div", {
                    id: "projects",
                    className: "h_mobile-100 sm:min-h-screen overflow-hidden",
                    children: [(0, s.jsx)("h1", {
                        className: "text-center font-black text-4xl p-2 sm:text-7xl mt-5 text-light",
                        "data-aos": "fade-down",
                        children: "Explore my Projects"
                    }), (0, s.jsx)(i, {
                        title: "Class Room Management",
                        image: "classathome1",
                        description: "Manage your time, make studies more advanced. Easy to Access, Easy to Manage your teachers and students.",
                        github: "https://github.com/Navaneeth-Ranjith/nodejs-master-completed",
                        view: "..https://classathome.gq/",
                        features: ["Assignments", "Chat", "Video Call", "Paid Events"],
                        technologies: ["NodeJS", "ExpressJS", "MongoDB", "SocketIO"],
                        imageLeft: !0,
                        indicator: "coming soon..."
                    }), (0, s.jsx)(i, {
                        title: "Chain Reaction Multiplayer",
                        image: "chainreaction",
                        description: "Play Chain Reaction Online with your Friends. Developed by me.",
                        github: "https://github.com/Navaneeth-Ranjith/emojireaction",
                        view: "https://emojireaction.navaneeth.gq/",
                        features: ["Play Online", "Multiplayer", "Fun with Friends", "Chat"],
                        technologies: ["NodeJS", "SocketIO", "HTML", "CSS"],
                        indicator: "coming soon..."
                    }), (0, s.jsx)(i, {
                        title: "NJ Movies Info",
                        image: "ajmoviesinfo1",
                        description: "Get latest movies and series details. Watch official trailer. Filter using date and genre.",
                        github: "https://github.com/Navaneeth-Ranjith/Nj_movies",
                        view: "https://nj-movies.vercel.app/",
                        features: ["Latest Movies", "Latest Series", "Movies Details", "Official Trailer", "Filter"],
                        technologies: ["NextJS", "ReactJS", "TMDB API", "CSS"],
                        imageLeft: !0
                    }), (0, s.jsx)(i, {
                        title: "NJ Whatsapp",
                        image: "ajwhatsapp",
                        description: "I made a Whatsapp clone with some features of official Whatsapp",
                        github: "..https://github.com/Navaneeth-Ranjith/aj-whatsapp-clone",
                        view: "..https://aj-whatsapp-clone.vercel.app/",
                        features: ["Chat", "Personal Chat", "Group Chat"],
                        technologies: ["NextJS", "ReactJS", "Firebase", "CSS"],
                        indicator: "coming soon..."
                    }), (0, s.jsx)(i, {
                        title: "Other Projects",
                        image: "otherprojects",
                        description: "When I am studying these technologies I made so many simple projects.",
                        github: "https://github.com/Navaneeth-Ranjith/Personal-Website",
                        view: "...https://oldprojects.ajdaniel.gq/#projects",
                        features: ["Maths Matrix", "Picture Puzzle", "Sharpen your Eyes"],
                        technologies: ["HTML", "CSS", "JavaScript", "NodeJS"],
                        imageLeft: !0,
                        indicator: "coming soon..."
                    }), (0, s.jsx)("img", {
                        src: "../background/3-crop1.png",
                        alt: "",
                        width: "100%"
                    })]
                })
            }
        }
    }
]);
