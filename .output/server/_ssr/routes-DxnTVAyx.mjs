import { a as __toESM } from "../_runtime.mjs";
import { n as motion, r as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Pause, i as Play, n as Volume2, o as Music, r as SkipForward, t as X } from "../_libs/lucide-react.mjs";
import { t as QRCodeSVG } from "../_libs/qrcode.react.mjs";
import { t as confetti_module_default } from "../_libs/canvas-confetti.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DxnTVAyx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuroraBackground() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aurora-blob aurora-one" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aurora-blob aurora-two" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aurora-blob aurora-three" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "starfield absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,var(--vignette)_100%)]" })
		]
	});
}
function FloatingHearts({ count = 18 }) {
	const hearts = (0, import_react.useMemo)(() => Array.from({ length: count }, (_, i) => ({
		left: i * 97 % 100,
		size: 12 + i * 7 % 22,
		delay: i * .83 % 10,
		duration: 12 + i * 3 % 10,
		drift: (i % 5 - 2) * 40,
		opacity: .25 + i % 4 * .15
	})), [count]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
		children: hearts.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			className: "absolute text-primary-glow",
			style: {
				left: `${h.left}%`,
				fontSize: h.size,
				bottom: -40
			},
			initial: {
				y: 0,
				opacity: 0
			},
			animate: {
				y: ["0vh", "-115vh"],
				x: [
					0,
					h.drift,
					0
				],
				opacity: [
					0,
					h.opacity,
					h.opacity,
					0
				],
				rotate: [
					0,
					h.drift > 0 ? 25 : -25,
					0
				]
			},
			transition: {
				duration: h.duration,
				delay: h.delay,
				repeat: Infinity,
				ease: "linear"
			},
			children: "❤"
		}, i))
	});
}
function GlowCursor() {
	const [pos, setPos] = (0, import_react.useState)({
		x: -200,
		y: -200
	});
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!window.matchMedia("(pointer: fine)").matches) return;
		setEnabled(true);
		const onMove = (e) => setPos({
			x: e.clientX,
			y: e.clientY
		});
		window.addEventListener("pointermove", onMove);
		return () => window.removeEventListener("pointermove", onMove);
	}, []);
	if (!enabled) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": true,
		className: "pointer-events-none fixed z-50 h-[420px] w-[420px] rounded-full opacity-60 blur-3xl",
		style: {
			background: "var(--gradient-cursor)",
			top: 0,
			left: 0
		},
		animate: {
			x: pos.x - 210,
			y: pos.y - 210
		},
		transition: {
			type: "spring",
			stiffness: 120,
			damping: 20,
			mass: .6
		}
	});
}
function Sparkles({ count = 40 }) {
	const dots = (0, import_react.useMemo)(() => Array.from({ length: count }, (_, i) => ({
		top: i * 37 % 100,
		left: i * 61 % 100,
		size: 2 + i * 5 % 4,
		delay: i * .37 % 6,
		duration: 2.2 + i * 3 % 5 * .4
	})), [count]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: dots.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			className: "absolute rounded-full bg-sparkle shadow-sparkle",
			style: {
				top: `${d.top}%`,
				left: `${d.left}%`,
				width: d.size,
				height: d.size
			},
			animate: {
				opacity: [
					0,
					1,
					0
				],
				scale: [
					.4,
					1.3,
					.4
				]
			},
			transition: {
				duration: d.duration,
				delay: d.delay,
				repeat: Infinity
			}
		}, i))
	});
}
function WelcomeGate({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
		className: "relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: {
			opacity: 0,
			filter: "blur(18px)",
			scale: 1.06
		},
		transition: {
			duration: .9,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { count: 50 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				className: "glass-pill mb-8 text-xs tracking-[0.35em] uppercase text-muted-foreground",
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .2,
					duration: .8
				},
				children: "A surprise from Piyush"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
				className: "max-w-4xl font-display text-4xl leading-[1.1] font-semibold tracking-tight text-glow sm:text-6xl lg:text-7xl",
				initial: {
					opacity: 0,
					y: 40,
					filter: "blur(14px)"
				},
				animate: {
					opacity: 1,
					y: 0,
					filter: "blur(0px)"
				},
				transition: {
					delay: .35,
					duration: 1.1,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gradient-text",
						children: "Happy Friendship Day"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-baseline gap-3",
						children: ["Arpita", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							className: "text-rose",
							animate: { scale: [
								1,
								1.18,
								1
							] },
							transition: {
								duration: 1.6,
								repeat: Infinity
							},
							children: "❤️"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				className: "mt-7 max-w-xl text-base text-muted-foreground sm:text-lg",
				initial: {
					opacity: 0,
					y: 24
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .7,
					duration: .9
				},
				children: "Some friendships are not found, they are gifted. This little world is made entirely for you."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				type: "button",
				onClick: onOpen,
				className: "btn-hero mt-12",
				initial: {
					opacity: 0,
					y: 30
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .95,
					duration: .8
				},
				whileHover: { scale: 1.04 },
				whileTap: { scale: .97 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "relative z-10",
					children: "Open My Surprise"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute bottom-8 text-[0.7rem] tracking-[0.3em] uppercase text-muted-foreground/70",
				animate: { opacity: [
					.35,
					1,
					.35
				] },
				transition: {
					duration: 2.6,
					repeat: Infinity
				},
				children: "tap to begin"
			})
		]
	});
}
function SectionHeading({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		className: "mx-auto mb-12 max-w-2xl text-center",
		initial: {
			opacity: 0,
			y: 30,
			filter: "blur(10px)"
		},
		whileInView: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		},
		viewport: {
			once: true,
			margin: "-100px"
		},
		transition: {
			duration: .8,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "glass-pill mb-5 text-[0.65rem] tracking-[0.35em] uppercase text-muted-foreground",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gradient-text",
					children: title
				})
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted-foreground sm:text-base",
				children: subtitle
			})
		]
	});
}
var LETTER = `Dear Arpita,

There are people who walk into your life and quietly make it better without ever asking for credit. You are that person for me.

Thank you for every late night talk, every silly fight that ended in laughter, and every time you believed in me louder than I believed in myself.

Distance, time, busy days — nothing has ever changed what we have. And nothing ever will.

Happy Friendship Day, my forever favourite person.

— Piyush`;
function AnimatedLetter() {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-120px"
	});
	const [shown, setShown] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		let i = 0;
		const id = window.setInterval(() => {
			i += 1;
			setShown(i);
			if (i >= LETTER.length) window.clearInterval(id);
		}, 22);
		return () => window.clearInterval(id);
	}, [inView]);
	const done = shown >= LETTER.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "letter",
		className: "section-shell",
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "A letter for you",
			title: "Words I never say out loud"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "glass-card mx-auto max-w-3xl p-7 sm:p-12",
			initial: {
				opacity: 0,
				y: 40
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			transition: {
				duration: .9,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "whitespace-pre-line font-letter text-[1.05rem] leading-relaxed text-foreground/90 sm:text-lg",
				children: [LETTER.slice(0, shown), !done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "caret" })]
			})
		})]
	});
}
var photoGlob = /* #__PURE__ */ Object.assign({
	"/public/photos/1.jpeg": () => import("./1-xasCBzD3.mjs"),
	"/public/photos/10.jpeg": () => import("./10-BHJqTVHM.mjs"),
	"/public/photos/11.jpeg": () => import("./11-4gZ2GrYU.mjs"),
	"/public/photos/12.jpeg": () => import("./12-Dwf5qzBM.mjs"),
	"/public/photos/13.jpeg": () => import("./13-B5_FJT4M.mjs"),
	"/public/photos/14.jpeg": () => import("./14-D9P3TsIG.mjs"),
	"/public/photos/15.jpeg": () => import("./15-BdMH5orC.mjs"),
	"/public/photos/16.jpeg": () => import("./16-y48hyMRb.mjs"),
	"/public/photos/17.jpeg": () => import("./17-CjuyF6l7.mjs"),
	"/public/photos/18.jpeg": () => import("./18-niG_NlZU.mjs"),
	"/public/photos/19.jpeg": () => import("./19-C0ZVWBay.mjs"),
	"/public/photos/2.jpeg": () => import("./2-DRZHKMnF.mjs"),
	"/public/photos/20.jpeg": () => import("./20-ZCLTkKy7.mjs"),
	"/public/photos/21.jpeg": () => import("./21-Ee0U4MFY.mjs"),
	"/public/photos/22.jpeg": () => import("./22-A4iCNPZC.mjs"),
	"/public/photos/23.jpeg": () => import("./23-P8F6mZGQ.mjs"),
	"/public/photos/24.jpeg": () => import("./24-Bk6YTb9k.mjs"),
	"/public/photos/25.jpeg": () => import("./25-BAsJeueO.mjs"),
	"/public/photos/26.jpeg": () => import("./26-CFh09ZBO.mjs"),
	"/public/photos/27.jpeg": () => import("./27-7CxrIHot.mjs"),
	"/public/photos/28.jpeg": () => import("./28-oj9CUPs2.mjs"),
	"/public/photos/29.jpeg": () => import("./29-DHCFt6Wn.mjs"),
	"/public/photos/3.jpeg": () => import("./3-CXUwFh5m.mjs"),
	"/public/photos/30.jpeg": () => import("./30-G15L4m_d.mjs"),
	"/public/photos/4.jpeg": () => import("./4-CR5MOWGD.mjs"),
	"/public/photos/5.jpeg": () => import("./5-BE4WUBH_.mjs"),
	"/public/photos/6.jpeg": () => import("./6-D4bP2gHp.mjs"),
	"/public/photos/7.jpeg": () => import("./7-CvomzFae.mjs"),
	"/public/photos/8.jpeg": () => import("./8-Xmqqv0OL.mjs"),
	"/public/photos/9.jpeg": () => import("./9-Bv4Qsl5x.mjs")
});
var videoGlob = /* #__PURE__ */ Object.assign({
	"/public/videos/1.mp4": () => import("./1-j7RsO1UI.mjs"),
	"/public/videos/10.mp4": () => import("./10-BVAF5o1x.mjs"),
	"/public/videos/11.mp4": () => import("./11-8LguXJnM.mjs"),
	"/public/videos/12.mp4": () => import("./12-DAJieFUo.mjs"),
	"/public/videos/13.mp4": () => import("./13-DEvAO9Me.mjs"),
	"/public/videos/14.mp4": () => import("./14-D8RcRR7D.mjs"),
	"/public/videos/15.mp4": () => import("./15-CflJjm1m.mjs"),
	"/public/videos/2.mp4": () => import("./2-BY6_wMdT2.mjs"),
	"/public/videos/3.mp4": () => import("./3-qcdksf_E.mjs"),
	"/public/videos/4.mp4": () => import("./4-BzGY7-tF.mjs"),
	"/public/videos/5.mp4": () => import("./5-BqeZUKAW.mjs"),
	"/public/videos/6.mp4": () => import("./6-C0zdPV3L.mjs"),
	"/public/videos/7.mp4": () => import("./7-D2wM-fJ_.mjs"),
	"/public/videos/8.mp4": () => import("./8-goFPj103.mjs"),
	"/public/videos/9.mp4": () => import("./9-DTx-WWQe.mjs")
});
var musicGlob = /* #__PURE__ */ Object.assign({ "/public/music/Tera-Yaar-Hoon-Main-Instrumental-Hindi.mp3": () => import("./Tera-Yaar-Hoon-Main-Instrumental-Hindi-kw5hwzru.mjs") });
var toPublicUrl = (key) => key.replace(/^\/public/, "");
var sortNatural = (a, b) => a.localeCompare(b, void 0, {
	numeric: true,
	sensitivity: "base"
});
var collect = (glob) => Object.keys(glob).sort(sortNatural).map(toPublicUrl);
var photos = collect(photoGlob);
var videos = collect(videoGlob);
var tracks = collect(musicGlob);
var prettyName = (url) => decodeURIComponent(url.split("/").pop() ?? "").replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
function PhotoGallery() {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "section-shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Gallery",
				title: "Frames of us",
				subtitle: photos.length ? "Every picture here is a day I would happily live again." : "Drop your pictures into /public/photos and they appear here automatically."
			}),
			photos.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyHint, { text: "No photos yet — add files to /public/photos" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3",
				children: photos.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
					type: "button",
					onClick: () => setActive(i),
					className: "group glass-card relative aspect-4/3 overflow-hidden",
					initial: {
						opacity: 0,
						y: 40,
						scale: .96
					},
					whileInView: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: .7,
						delay: i % 3 * .08
					},
					whileHover: { y: -6 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: prettyName(src),
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-linear-to-t from-overlay to-transparent opacity-70" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute bottom-3 left-4 text-xs tracking-wide text-foreground/85 capitalize",
							children: prettyName(src)
						})
					]
				}, src))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: active !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "fixed inset-0 z-60 flex items-center justify-center bg-overlay/90 p-4 backdrop-blur-xl",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				onClick: () => setActive(null),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: photos[active],
					alt: prettyName(photos[active] ?? ""),
					className: "max-h-[86vh] w-auto max-w-full rounded-3xl shadow-elegant",
					initial: {
						scale: .9,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					exit: {
						scale: .92,
						opacity: 0
					},
					transition: {
						duration: .4,
						ease: [
							.22,
							1,
							.36,
							1
						]
					}
				}, photos[active]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Close",
					className: "glass-pill absolute top-6 right-6 p-3",
					onClick: () => setActive(null),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}) })
		]
	});
}
function EmptyHint({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "glass-card mx-auto max-w-xl px-6 py-10 text-center text-sm text-muted-foreground",
		children: text
	});
}
function VideoGallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "videos",
		className: "section-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Video gallery",
			title: "Moving memories",
			subtitle: "Tap fullscreen and turn the volume up."
		}), videos.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyHint, { text: "No videos yet — add files to /public/videos and they load automatically" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-5xl gap-6 sm:grid-cols-2",
			children: videos.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
				className: "glass-card overflow-hidden",
				initial: {
					opacity: 0,
					y: 50
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: {
					duration: .8,
					delay: i % 2 * .1
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src,
					controls: true,
					playsInline: true,
					preload: "metadata",
					className: "aspect-video w-full bg-overlay object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "px-5 py-4 text-xs tracking-wide text-muted-foreground capitalize",
					children: prettyName(src)
				})]
			}, src))
		})]
	});
}
var MOMENTS = [
	{
		when: "The first day",
		title: "Two strangers, one bench",
		text: "We talked about nothing important and somehow it became everything."
	},
	{
		when: "That one night",
		title: "3 AM confessions",
		text: "Phone battery at 2%, hearts at 100%. Some conversations never really end."
	},
	{
		when: "The hardest week",
		title: "You stayed",
		text: "You didn't try to fix me. You just refused to leave. That mattered more."
	},
	{
		when: "Every festival",
		title: "Our little traditions",
		text: "Same jokes, same songs, same laughter that scares everyone else in the room."
	},
	{
		when: "Today",
		title: "Still my person",
		text: "Years later and you're still the first person I want to tell everything to."
	}
];
function Timeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "timeline",
		className: "section-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Memory timeline",
			title: "How we happened"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-0 bottom-0 left-4 w-px bg-linear-to-b from-transparent via-primary to-transparent sm:left-1/2" }), MOMENTS.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: `relative mb-10 pl-14 sm:w-1/2 sm:pl-0 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"}`,
				initial: {
					opacity: 0,
					x: i % 2 === 0 ? -40 : 40
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: {
					once: true,
					margin: "-90px"
				},
				transition: {
					duration: .8,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-6 left-[0.6rem] size-3 rounded-full bg-primary-glow shadow-glow sm:left-auto ${i % 2 === 0 ? "sm:-right-1.5" : "sm:-left-1.5"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground",
							children: m.when
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-xl font-semibold",
							children: m.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: m.text
						})
					]
				})]
			}, m.title))]
		})]
	});
}
var QUOTES = [
	{
		text: "A real friend is one who walks in when the rest of the world walks out.",
		by: "Walter Winchell"
	},
	{
		text: "Friendship is the only cement that will ever hold the world together.",
		by: "Woodrow Wilson"
	},
	{
		text: "In the cookie of life, friends are the chocolate chips.",
		by: "Salman Rushdie"
	},
	{
		text: "Some souls just understand each other upon meeting.",
		by: "N.R. Hart"
	},
	{
		text: "Good friends are like stars — you don't always see them, but they're always there.",
		by: "Unknown"
	},
	{
		text: "We are best friends. Always remember, if you fall, I will pick you up — after I finish laughing.",
		by: "Unknown"
	}
];
function Quotes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "quotes",
		className: "section-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Friendship quotes",
			title: "Things that sound like us"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: QUOTES.map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.blockquote, {
				className: "glass-card flex h-full flex-col justify-between p-6",
				initial: {
					opacity: 0,
					y: 40
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-70px"
				},
				transition: {
					duration: .7,
					delay: i % 3 * .08
				},
				whileHover: {
					y: -6,
					rotate: i % 2 ? .6 : -.6
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-letter text-lg leading-relaxed text-foreground/90",
					children: [
						"“",
						q.text,
						"”"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "mt-5 text-[0.7rem] tracking-[0.25em] uppercase text-muted-foreground",
					children: q.by
				})]
			}, q.text))
		})]
	});
}
function QRSection() {
	const [url, setUrl] = (0, import_react.useState)("https://lovable.dev");
	(0, import_react.useEffect)(() => {
		setUrl(window.location.origin + window.location.pathname);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "qr",
		className: "section-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Keep it forever",
			title: "Scan to open anywhere",
			subtitle: "Point your camera here to carry this surprise in your pocket."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			className: "glass-card mx-auto flex max-w-md flex-col items-center gap-6 p-8",
			initial: {
				opacity: 0,
				scale: .94
			},
			whileInView: {
				opacity: 1,
				scale: 1
			},
			viewport: { once: true },
			transition: {
				duration: .8,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-qr-surface p-4 shadow-glow",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QRCodeSVG, {
					value: url,
					size: 168,
					level: "M",
					bgColor: "transparent",
					fgColor: "#0b1026"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-xs break-all text-muted-foreground",
				children: url
			})]
		})]
	});
}
var COLORS = [
	"#a78bfa",
	"#7c5cff",
	"#38bdf8",
	"#f472b6",
	"#ffffff"
];
function burstConfetti() {
	confetti_module_default({
		particleCount: 140,
		spread: 90,
		origin: { y: .7 },
		colors: COLORS,
		scalar: 1.1
	});
}
function fireworksShow(durationMs = 6e3) {
	const end = Date.now() + durationMs;
	const frame = () => {
		confetti_module_default({
			particleCount: 6,
			startVelocity: 42,
			spread: 360,
			ticks: 90,
			gravity: .9,
			origin: {
				x: Math.random(),
				y: Math.random() * .6
			},
			colors: COLORS,
			shapes: ["circle"],
			scalar: .9
		});
		if (Date.now() < end) requestAnimationFrame(frame);
	};
	frame();
}
function heartRain() {
	confetti_module_default({
		particleCount: 60,
		spread: 120,
		origin: { y: .2 },
		colors: ["#f472b6", "#a78bfa"],
		gravity: .6,
		scalar: 1.4
	});
}
var LINES = [
	"Thank you for every smile,",
	"every memory,",
	"every laugh,",
	"and every moment.",
	"Always stay happy."
];
function Ending() {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-150px"
	});
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		fireworksShow(6500);
		const t = window.setTimeout(heartRain, 900);
		return () => window.clearTimeout(t);
	}, [inView]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		id: "ending",
		className: "relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { count: 60 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
				className: "font-display text-4xl leading-tight font-semibold tracking-tight sm:text-6xl",
				initial: {
					opacity: 0,
					y: 40,
					filter: "blur(16px)"
				},
				whileInView: {
					opacity: 1,
					y: 0,
					filter: "blur(0px)"
				},
				viewport: { once: true },
				transition: {
					duration: 1,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gradient-text",
						children: "Happy Friendship Day"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-baseline gap-3",
						children: ["Arpita", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							className: "text-rose",
							animate: { scale: [
								1,
								1.2,
								1
							] },
							transition: {
								duration: 1.5,
								repeat: Infinity
							},
							children: "❤️"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-2",
				children: LINES.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					className: "font-letter text-lg text-foreground/85 sm:text-2xl",
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .7,
						delay: .4 + i * .25
					},
					children: line
				}, line))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				type: "button",
				onClick: () => fireworksShow(4e3),
				className: "btn-hero mt-14",
				whileHover: { scale: 1.04 },
				whileTap: { scale: .97 },
				initial: { opacity: 0 },
				whileInView: { opacity: 1 },
				viewport: { once: true },
				transition: {
					delay: 1.6,
					duration: .8
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "relative z-10",
					children: "Celebrate again 🎉"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
				className: "mt-16 text-xs tracking-[0.35em] uppercase text-muted-foreground",
				initial: { opacity: 0 },
				whileInView: { opacity: 1 },
				viewport: { once: true },
				transition: {
					delay: 1.9,
					duration: .9
				},
				children: [
					"Made with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-rose",
						children: "❤️"
					}),
					" by Piyush"
				]
			})
		]
	});
}
function MusicPlayer({ autoStart }) {
	const audioRef = (0, import_react.useRef)(null);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!autoStart || tracks.length === 0) return;
		const el = audioRef.current;
		if (!el) return;
		el.volume = .45;
		el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
	}, [autoStart]);
	const toggle = () => {
		const el = audioRef.current;
		if (!el) return;
		if (el.paused) el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
		else {
			el.pause();
			setPlaying(false);
		}
	};
	const next = () => setIndex((i) => (i + 1) % Math.max(tracks.length, 1));
	const current = tracks[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed bottom-4 left-1/2 z-50 -translate-x-1/2",
		initial: {
			opacity: 0,
			y: 40
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			delay: .6,
			duration: .8
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-pill flex items-center gap-3 px-4 py-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative flex size-8 items-center justify-center rounded-full bg-primary/25",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "size-3.5 text-primary-glow" }), playing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 animate-ping rounded-full bg-primary/20" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-[9rem] sm:max-w-[13rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-xs font-medium capitalize",
						children: current ? prettyName(current) : "Add songs to /public/music"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground",
						children: current ? playing ? "now playing" : "paused" : "no track"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": playing ? "Pause music" : "Play music",
					onClick: toggle,
					disabled: !current,
					className: "rounded-full p-2 transition-colors hover:bg-primary/25 disabled:opacity-40",
					children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Next track",
					onClick: next,
					disabled: tracks.length < 2,
					className: "rounded-full p-2 transition-colors hover:bg-primary/25 disabled:opacity-40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipForward, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "hidden size-4 text-muted-foreground sm:block" })
			]
		}), current && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
			ref: audioRef,
			src: current,
			loop: tracks.length === 1,
			onEnded: next,
			autoPlay: autoStart
		})]
	});
}
function Index() {
	const [opened, setOpened] = (0, import_react.useState)(false);
	const open = () => {
		setOpened(true);
		burstConfetti();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuroraBackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowCursor, {}),
			opened && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingHearts, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: !opened ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WelcomeGate, { onOpen: open }, "gate") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						filter: "blur(20px)",
						scale: .98
					},
					animate: {
						opacity: 1,
						filter: "blur(0px)",
						scale: 1
					},
					transition: {
						duration: 1,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "relative z-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedLetter, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoGallery, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoGallery, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quotes, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QRSection, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ending, {})
					]
				}, "content")
			}),
			opened && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MusicPlayer, { autoStart: true })
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { count: 45 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				className: "glass-pill mb-7 text-[0.65rem] tracking-[0.35em] uppercase text-muted-foreground",
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .3,
					duration: .8
				},
				children: "02 · 08 · Friendship Day"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
				className: "max-w-4xl font-display text-4xl leading-[1.08] font-semibold tracking-tight sm:text-6xl lg:text-[4.5rem]",
				initial: {
					opacity: 0,
					y: 40,
					filter: "blur(14px)"
				},
				animate: {
					opacity: 1,
					y: 0,
					filter: "blur(0px)"
				},
				transition: {
					delay: .45,
					duration: 1.1,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gradient-text",
						children: "For Arpita"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"my favourite kind of forever"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				className: "mt-7 max-w-xl text-base text-muted-foreground sm:text-lg",
				initial: {
					opacity: 0,
					y: 24
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .75,
					duration: .9
				},
				children: "Scroll slowly. Every section below is a piece of us — words, photos, videos, memories, and a little bit of magic."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
				href: "#letter",
				className: "btn-hero mt-11",
				initial: {
					opacity: 0,
					y: 24
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .95,
					duration: .8
				},
				whileHover: { scale: 1.04 },
				whileTap: { scale: .97 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "relative z-10",
					children: "Read my letter"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute bottom-24 h-12 w-px bg-linear-to-b from-transparent via-primary-glow to-transparent",
				animate: { opacity: [
					.2,
					1,
					.2
				] },
				transition: {
					duration: 2.4,
					repeat: Infinity
				}
			})
		]
	});
}
//#endregion
export { Index as component };
