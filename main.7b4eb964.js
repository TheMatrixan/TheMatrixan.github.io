!(function(e) {
  function t(t) {
    for (
      var r, c, i = t[0], l = t[1], s = t[2], p = 0, f = [];
      p < i.length;
      p++
    )
      (c = i[p]),
        Object.prototype.hasOwnProperty.call(a, c) && a[c] && f.push(a[c][0]),
        (a[c] = 0);
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    for (u && u(t); f.length; ) f.shift()();
    return o.push.apply(o, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], r = !0, i = 1; i < n.length; i++) {
        var l = n[i];
        0 !== a[l] && (r = !1);
      }
      r && (o.splice(t--, 1), (e = c((c.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = { 3: 0 },
    o = [];
  function c(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.e = function(e) {
    var t = [],
      n = a[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var r = new Promise(function(t, r) {
          n = a[e] = [t, r];
        });
        t.push((n[2] = r));
        var o,
          i = document.createElement("script");
        (i.charset = "utf-8"),
          (i.timeout = 120),
          c.nc && i.setAttribute("nonce", c.nc),
          (i.src = (function(e) {
            return (
              c.p +
              "templates/" +
              ({ 1: "src/pages", 2: "src/pages/404.tsx" }[e] || e) +
              "." +
              { 1: "36c1e66e", 2: "fb6d5aa2" }[e] +
              ".js"
            );
          })(e));
        var l = new Error();
        o = function(t) {
          (i.onerror = i.onload = null), clearTimeout(s);
          var n = a[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src;
              (l.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = r),
                (l.request = o),
                n[1](l);
            }
            a[e] = void 0;
          }
        };
        var s = setTimeout(function() {
          o({ type: "timeout", target: i });
        }, 12e4);
        (i.onerror = i.onload = o), document.head.appendChild(i);
      }
    return Promise.all(t);
  }),
    (c.m = e),
    (c.c = r),
    (c.d = function(e, t, n) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (c.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function(e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          c.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (c.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = "/"),
    (c.oe = function(e) {
      throw (console.error(e), e);
    });
  var i = (window.webpackJsonp = window.webpackJsonp || []),
    l = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var s = 0; s < i.length; s++) t(i[s]);
  var u = l;
  o.push([65, 0, 4]), n();
})({
  118: function(e, t, n) {
    "use strict";
    n.r(t),
      function(e) {
        n.d(t, "notFoundTemplate", function() {
          return d;
        });
        var r = n(25),
          a = n.n(r),
          o = n(26),
          c = n.n(o),
          i = n(0),
          l = n.n(i),
          s = n(16),
          u = n.n(s);
        Object(s.setHasBabelPlugin)();
        var p = {
            loading: function() {
              return null;
            },
            error: function(e) {
              return (
                console.error(e.error),
                l.a.createElement(
                  "div",
                  null,
                  "An error occurred loading this page's template. More information is available in the console."
                )
              );
            },
            ignoreBabelRename: !0,
          },
          f = u()(
            c()({
              id: "src/pages/404.tsx",
              load: function() {
                return Promise.all([n.e(2).then(n.bind(null, 63))]).then(
                  function(e) {
                    return e[0];
                  }
                );
              },
              path: function() {
                return a.a.join(e, "src/pages/404.tsx");
              },
              resolve: function() {
                return 63;
              },
              chunkName: function() {
                return "src/pages/404.tsx";
              },
            }),
            p
          );
        f.template = "src/pages/404.tsx";
        var m = u()(
          c()({
            id: "src/pages",
            load: function() {
              return Promise.all([
                Promise.all([n.e(0), n.e(1)]).then(n.bind(null, 64)),
              ]).then(function(e) {
                return e[0];
              });
            },
            path: function() {
              return a.a.join(e, "src/pages");
            },
            resolve: function() {
              return 64;
            },
            chunkName: function() {
              return "src/pages";
            },
          }),
          p
        );
        (m.template = "src/pages"),
          (t.default = { "src/pages/404.tsx": f, "src/pages": m });
        var d = "src/pages/404.tsx";
      }.call(this, "/");
  },
  120: function(e, t, n) {
    var r = { ".": 17, "./": 17, "./index": 17, "./index.js": 17 };
    function a(e) {
      var t = o(e);
      return n(t);
    }
    function o(e) {
      if (!n.o(r, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return r[e];
    }
    (a.keys = function() {
      return Object.keys(r);
    }),
      (a.resolve = o),
      (e.exports = a),
      (a.id = 120);
  },
  127: function(e, t, n) {
    "use strict";
    n.r(t),
      function(e) {
        var r = n(0),
          a = n.n(r),
          o = n(37),
          c = n.n(o),
          i = n(62),
          l = n(27),
          s = n(61);
        if (((t.default = l.a), "undefined" != typeof document)) {
          var u,
            p,
            f = document.getElementById("root"),
            m = null != f && f.hasChildNodes() ? c.a.hydrate : c.a.render,
            d = function(e) {
              m(
                a.a.createElement(
                  i.AppContainer,
                  null,
                  a.a.createElement(e, null)
                ),
                f
              );
            };
          d(l.a),
            null === (u = e) ||
              void 0 === u ||
              null === (p = u.hot) ||
              void 0 === p ||
              p.accept("./App", function() {
                d(l.a);
              });
        }
        "undefined" != typeof document && s.a();
      }.call(this, n(128)(e));
  },
  18: function(e, t, n) {
    "use strict";
    (function(e) {
      n.d(t, "a", function() {
        return r;
      }),
        n.d(t, "b", function() {
          return a;
        }),
        n.d(t, "c", function() {
          return o;
        });
      var r = "UA-155263040-1",
        a = "https://www.linkedin.com/in/mateusz-lesiak-tul/",
        o = e.env.ORIGIN || "https://thematrixan.github.io";
    }.call(this, n(30)));
  },
  27: function(e, t, n) {
    "use strict";
    var r = n(0),
      a = n.n(r),
      o = n(2),
      c = n(12),
      i = n(34),
      l = n.n(i);
    function s(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function u(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? s(Object(n), !0).forEach(function(t) {
              l()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : s(Object(n)).forEach(function(t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var p = function(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        "undefined" != typeof window &&
          ((window.dataLayer = window.dataLayer || []),
          window.dataLayer.push(u({ event: e }, t)));
      },
      f = function() {
        var e = Object(o.l)().pathname;
        return (
          Object(r.useEffect)(
            function() {
              setTimeout(function() {
                window.scrollTo({ behavior: "smooth", left: 0, top: 0 }),
                  p("page-view", { pathname: e });
              });
            },
            [e]
          ),
          null
        );
      },
      m = n(18),
      d = "https://www.googletagmanager.com/gtag/js?id=".concat(m.a),
      g = Object(r.memo)(function() {
        return a.a.createElement(
          c.Head,
          null,
          a.a.createElement("script", { async: !0, src: d }),
          a.a.createElement(
            "script",
            null,
            "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date()); gtag('config', '".concat(
              m.a,
              "');"
            )
          )
        );
      }),
      h = "Mateusz Lesiak - Software Engineer",
      _ =
        "I am a software engineer from Lodz who specializes in building (and sometimes designing) high-quality websites and applications using React in TypeScript.",
      v = "Mateusz Lesiak",
      w = "".concat(m.c, "/mateusz_lesiak@2x.jpg"),
      y = function() {
        return a.a.createElement(
          c.Head,
          null,
          a.a.createElement("html", { lang: "en" }),
          a.a.createElement("title", null, h),
          a.a.createElement("meta", { name: "description", content: _ }),
          a.a.createElement("link", {
            rel: "manifest",
            href: "/manifest.json",
            crossOrigin: "use-credentials",
          }),
          a.a.createElement("meta", { name: "robots", content: "follow" }),
          a.a.createElement("meta", { name: "author", content: v }),
          a.a.createElement("meta", { name: "copyright", content: v }),
          a.a.createElement("link", {
            rel: "preconnect dns-prefetch",
            href: "https://fonts.googleapis.com",
          }),
          a.a.createElement("link", {
            rel: "preconnect dns-prefetch",
            href: "https://www.google-analytics.com",
          }),
          a.a.createElement("link", {
            rel: "preconnect dns-prefetch",
            href: "https://www.googletagmanager.com",
          }),
          a.a.createElement("meta", {
            name: "twitter:card",
            content: "summary",
          }),
          a.a.createElement("meta", { name: "twitter:title", content: h }),
          a.a.createElement("meta", {
            name: "twitter:description",
            content: _,
          }),
          a.a.createElement("meta", { name: "twitter:image", content: w }),
          a.a.createElement("meta", { property: "og:title", content: h }),
          a.a.createElement("meta", {
            property: "og:type",
            content: "website",
          }),
          a.a.createElement("meta", { property: "og:image", content: w }),
          a.a.createElement("meta", { property: "og:image:alt", content: v }),
          a.a.createElement("meta", { property: "og:locale", content: "en" }),
          a.a.createElement("meta", { property: "og:description", content: _ }),
          a.a.createElement("meta", { property: "og:site_name", content: h }),
          a.a.createElement("link", {
            rel: "shortcut icon",
            href: "/favicon.ico",
            type: "image/x-icon",
          }),
          a.a.createElement("link", {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          }),
          a.a.createElement("link", {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          }),
          a.a.createElement("link", {
            rel: "mask-icon",
            href: "/safari-pinned-tab.svg",
            color: "#b7a26d",
          }),
          a.a.createElement("link", {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
          }),
          a.a.createElement("link", {
            rel: "apple-touch-icon",
            sizes: "57x57",
            href: "/apple-touch-icon-57x57.png",
          }),
          a.a.createElement("link", {
            rel: "apple-touch-icon",
            sizes: "72x72",
            href: "/apple-touch-icon-72x72.png",
          }),
          a.a.createElement("link", {
            rel: "apple-touch-icon",
            sizes: "76x76",
            href: "/apple-touch-icon-76x76.png",
          }),
          a.a.createElement("link", {
            rel: "apple-touch-icon",
            sizes: "114x114",
            href: "/apple-touch-icon-114x114.png",
          }),
          a.a.createElement("link", {
            rel: "apple-touch-icon",
            sizes: "120x120",
            href: "/apple-touch-icon-120x120.png",
          }),
          a.a.createElement("link", {
            rel: "apple-touch-icon",
            sizes: "144x144",
            href: "/apple-touch-icon-144x144.png",
          }),
          a.a.createElement("link", {
            rel: "apple-touch-icon",
            sizes: "152x152",
            href: "/apple-touch-icon-152x152.png",
          }),
          a.a.createElement("link", {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon-180x180.png",
          }),
          a.a.createElement("meta", {
            name: "msapplication-TileColor",
            content: "#ffffff",
          }),
          a.a.createElement("meta", {
            name: "theme-color",
            content: "#ffffff",
          }),
          a.a.createElement("meta", {
            name: "mobile-web-app-capable",
            content: "yes",
          }),
          a.a.createElement("meta", {
            name: "apple-mobile-web-app-capable",
            content: "yes",
          })
        );
      };
    n(132),
      (t.a = function() {
        return a.a.createElement(
          c.Root,
          null,
          a.a.createElement(
            a.a.Suspense,
            { fallback: null },
            a.a.createElement(
              o.g,
              null,
              a.a.createElement(c.Routes, { path: "*" }),
              a.a.createElement(f, null)
            ),
            a.a.createElement(y, null),
            a.a.createElement(g, null)
          )
        );
      });
  },
  61: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    });
    var r = Boolean(
      "undefined" != typeof window &&
        ("localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          ))
    );
    function a(e, t) {
      navigator.serviceWorker
        .register(e)
        .then(function(e) {
          e.onupdatefound = function() {
            var n = e.installing;
            null != n &&
              (n.onstatechange = function() {
                "installed" === n.state &&
                  (navigator.serviceWorker.controller
                    ? (console.log(
                        "New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."
                      ),
                      t && t.onUpdate && t.onUpdate(e))
                    : (console.log("Content is cached for offline use."),
                      t && t.onSuccess && t.onSuccess(e)));
              });
          };
        })
        .catch(function(e) {
          console.error("Error during service worker registration:", e);
        });
    }
    function o(e) {
      "serviceWorker" in navigator &&
        window.addEventListener("load", function() {
          var t = "/service-worker.js";
          r
            ? (!(function(e, t) {
                fetch(e, { headers: { "Service-Worker": "script" } })
                  .then(function(n) {
                    var r = n.headers.get("content-type");
                    404 === n.status ||
                    (null != r && -1 === r.indexOf("javascript"))
                      ? navigator.serviceWorker.ready.then(function(e) {
                          e.unregister().then(function() {
                            window.location.reload();
                          });
                        })
                      : a(e, t);
                  })
                  .catch(function() {
                    console.log(
                      "No internet connection found. App is running in offline mode."
                    );
                  });
              })(t, e),
              navigator.serviceWorker.ready.then(function() {
                console.log(
                  "This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA"
                );
              }))
            : a(t, e);
        });
    }
  },
  65: function(e, t, n) {
    n(66), n(117), (e.exports = n(123));
  },
  67: function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(58),
      a = [
        {
          location: "node_modules/react-static-plugin-typescript",
          plugins: [],
          hooks: {},
        },
        {
          location: "node_modules/react-static-plugin-sass",
          plugins: [],
          hooks: {},
        },
        {
          location: "node_modules/react-static-plugin-react-router",
          plugins: [],
          hooks: n.n(r)()({}),
        },
        {
          location: "node_modules/react-static-plugin-sitemap/dist",
          plugins: [],
          hooks: {},
        },
        { location: "", plugins: [], hooks: {} },
      ];
    t.default = a;
  },
});
