/*! portal-pc-static - git - 2019-05-21 15:39:33 */
!function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("Geetest requires a window with a document");
        return e(t)
    }
    : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    "use strict";
    function n(t) {
        this._obj = t
    }
    function o(t) {
        var e = this;
        new n(t)._each(function(t, n) {
            e[t] = n
        })
    }
    if ("undefined" == typeof t)
        throw new Error("Geetest requires browser environment");
    var r = t.document
      , i = t.Math
      , a = r.getElementsByTagName("head")[0];
    n.prototype = {
        _each: function(t) {
            var e = this._obj;
            for (var n in e)
                e.hasOwnProperty(n) && t(n, e[n]);
            return this
        }
    },
    o.prototype = {
        api_server: "api.geetest.com",
        protocol: "http://",
        type_path: "/gettype.php",
        fallback_config: {
            slide: {
                static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
                type: "slide",
                slide: "/static/js/geetest.0.0.0.js"
            },
            fullpage: {
                static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
                type: "fullpage",
                fullpage: "/static/js/fullpage.0.0.0.js"
            }
        },
        _get_fallback_config: function() {
            var t = this;
            return f(t.type) ? t.fallback_config[t.type] : t.new_captcha ? t.fallback_config.fullpage : t.fallback_config.slide
        },
        _extend: function(t) {
            var e = this;
            new n(t)._each(function(t, n) {
                e[t] = n
            })
        }
    };
    var c = function(t) {
        return "number" == typeof t
    }
      , f = function(t) {
        return "string" == typeof t
    }
      , u = function(t) {
        return "boolean" == typeof t
    }
      , s = function(t) {
        return "object" == typeof t && null !== t
    }
      , l = function(t) {
        return "function" == typeof t
    }
      , p = {}
      , d = {}
      , g = function() {
        return parseInt(1e4 * i.random()) + (new Date).valueOf()
    }
      , h = function(t, e) {
        var n = r.createElement("script");
        n.charset = "UTF-8",
        n.async = !0,
        n.onerror = function() {
            e(!0)
        }
        ;
        var o = !1;
        n.onload = n.onreadystatechange = function() {
            o || n.readyState && "loaded" !== n.readyState && "complete" !== n.readyState || (o = !0,
            setTimeout(function() {
                e(!1)
            }, 0))
        }
        ,
        n.src = t,
        a.appendChild(n)
    }
      , _ = function(t) {
        return t.replace(/^https?:\/\/|\/$/g, "")
    }
      , v = function(t) {
        return t = t.replace(/\/+/g, "/"),
        0 !== t.indexOf("/") && (t = "/" + t),
        t
    }
      , y = function(t) {
        if (!t)
            return "";
        var e = "?";
        return new n(t)._each(function(t, n) {
            (f(n) || c(n) || u(n)) && (e = e + encodeURIComponent(t) + "=" + encodeURIComponent(n) + "&")
        }),
        "?" === e && (e = ""),
        e.replace(/&$/, "")
    }
      , w = function(t, e, n, o) {
        e = _(e);
        var r = v(n) + y(o);
        return e && (r = t + e + r),
        r
    }
      , m = function(t, e, n, o, r) {
        var i = function(a) {
            var c = w(t, e[a], n, o);
            h(c, function(t) {
                t ? a >= e.length - 1 ? r(!0) : i(a + 1) : r(!1)
            })
        };
        i(0)
    }
      , b = function(e, n, o, r) {
        if (s(o.getLib))
            return o._extend(o.getLib),
            void r(o);
        if (o.offline)
            return void r(o._get_fallback_config());
        var i = "geetest_" + g();
        t[i] = function(e) {
            r("success" === e.status ? e.data : e.status ? o._get_fallback_config() : e),
            t[i] = void 0;
            try {
                delete t[i]
            } catch (n) {}
        }
        ,
        m(o.protocol, e, n, {
            gt: o.gt,
            callback: i
        }, function(t) {
            t && r(o._get_fallback_config())
        })
    }
      , k = function(t, e) {
        var n = {
            networkError: "网络错误"
        };
        if ("function" != typeof e.onError)
            throw new Error(n[t]);
        e.onError(n[t])
    }
      , E = function() {
        return !!t.Geetest
    };
    E() && (d.slide = "loaded");
    var j = function(e, n) {
        var r = new o(e);
        e.https ? r.protocol = "https://" : e.protocol || (r.protocol = t.location.protocol + "//"),
        b([r.api_server || r.apiserver], r.type_path, r, function(e) {
            var o = e.type
              , i = function() {
                r._extend(e),
                n(new t.Geetest(r))
            };
            p[o] = p[o] || [];
            var a = d[o] || "init";
            "init" === a ? (d[o] = "loading",
            p[o].push(i),
            m(r.protocol, e.static_servers || e.domains, e[o] || e.path, null, function(t) {
                if (t)
                    d[o] = "fail",
                    k("networkError", r);
                else {
                    d[o] = "loaded";
                    for (var e = p[o], n = 0, i = e.length; n < i; n += 1) {
                        var a = e[n];
                        l(a) && a()
                    }
                    p[o] = []
                }
            })) : "loaded" === a ? i() : "fail" === a ? k("networkError", r) : "loading" === a && p[o].push(i)
        })
    };
    return t.initGeetest = j,
    j
});
