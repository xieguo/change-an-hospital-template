/*! portal-pc-static - git - 2019-05-21 15:39:18 */
!function(e, t) {
    "use strict";
    function n() {}
    function r(e, t) {
        if (e) {
            "object" == typeof e && (e = [].slice.call(e));
            for (var n = 0, r = e.length; n < r; n++)
                t.call(e, e[n], n)
        }
    }
    function a(e, n) {
        var r = Object.prototype.toString.call(n).slice(8, -1);
        return n !== t && null !== n && r === e
    }
    function o(e) {
        return a("Function", e)
    }
    function i(e) {
        return a("Array", e)
    }
    function u(e) {
        var t = e.split("/")
          , n = t[t.length - 1]
          , r = n.indexOf("?");
        return r !== -1 ? n.substring(0, r) : n
    }
    function s(e) {
        e = e || n,
        e._done || (e(),
        e._done = 1)
    }
    function l(e, t, r, a) {
        var o = "object" == typeof e ? e : {
            test: e,
            success: !!t && (i(t) ? t : [t]),
            failure: !!r && (i(r) ? r : [r]),
            callback: a || n
        }
          , u = !!o.test;
        return u && o.success ? (o.success.push(o.callback),
        A.load.apply(null, o.success)) : u || !o.failure ? a() : (o.failure.push(o.callback),
        A.load.apply(null, o.failure)),
        A
    }
    function c(e) {
        var t, n, r = {};
        if ("object" == typeof e)
            for (t in e)
                !e[t] || (r = {
                    name: t,
                    url: e[t]
                });
        else
            r = {
                name: u(e),
                url: e
            };
        return n = j[r.name],
        n && n.url === r.url ? n : (j[r.name] = r,
        r)
    }
    function f(e) {
        e = e || j;
        for (var t in e)
            if (e.hasOwnProperty(t) && e[t].state !== C)
                return !1;
        return !0
    }
    function d(e) {
        e.state = k,
        r(e.onpreload, function(e) {
            e.call()
        })
    }
    function m(e) {
        e.state === t && (e.state = F,
        e.onpreload = [],
        v({
            url: e.url,
            type: "cache"
        }, function() {
            d(e)
        }))
    }
    function h() {
        var e = arguments
          , t = e[e.length - 1]
          , n = [].slice.call(e, 1)
          , a = n[0];
        return o(t) || (t = null),
        i(e[0]) ? (e[0].push(t),
        A.load.apply(null, e[0]),
        A) : (a ? (r(n, function(e) {
            o(e) || !e || m(c(e))
        }),
        y(c(e[0]), o(a) ? a : function() {
            A.load.apply(null, n)
        }
        )) : y(c(e[0])),
        A)
    }
    function p() {
        var e = arguments
          , t = e[e.length - 1]
          , n = {};
        return o(t) || (t = null),
        i(e[0]) ? (e[0].push(t),
        A.load.apply(null, e[0]),
        A) : (r(e, function(e) {
            e !== t && (e = c(e),
            n[e.name] = e)
        }),
        r(e, function(e) {
            e !== t && (e = c(e),
            y(e, function() {
                f(n) && s(t)
            }))
        }),
        A)
    }
    function y(e, t) {
        return t = t || n,
        e.state === C ? void t() : e.state === x ? void A.ready(e.name, t) : e.state === F ? void e.onpreload.push(function() {
            y(e, t)
        }) : (e.state = x,
        void v(e, function() {
            e.state = C,
            t(),
            r(O[e.name], function(e) {
                s(e)
            }),
            T && f() && r(O.ALL, function(e) {
                s(e)
            })
        }))
    }
    function g(e) {
        e = e || "";
        var t = e.split("?")[0].split(".");
        return t[t.length - 1].toLowerCase()
    }
    function v(t, r) {
        function a(t) {
            t = t || e.event,
            u.onload = u.onreadystatechange = u.onerror = null,
            r()
        }
        function o(n) {
            n = n || e.event,
            ("load" === n.type || /loaded|complete/.test(u.readyState) && (!S.documentMode || S.documentMode < 9)) && (e.clearTimeout(t.errorTimeout),
            e.clearTimeout(t.cssTimeout),
            u.onload = u.onreadystatechange = u.onerror = null,
            r())
        }
        function i() {
            if (t.state !== C && t.cssRetries <= 20) {
                for (var n = 0, r = S.styleSheets.length; n < r; n++)
                    if (S.styleSheets[n].href === u.href)
                        return void o({
                            type: "load"
                        });
                t.cssRetries++,
                t.cssTimeout = e.setTimeout(i, 250)
            }
        }
        var u, s, l;
        r = r || n,
        s = g(t.url),
        "css" === s ? (u = S.createElement("link"),
        u.type = "text/" + (t.type || "css"),
        u.rel = "stylesheet",
        u.href = t.url,
        t.cssRetries = 0,
        t.cssTimeout = e.setTimeout(i, 500)) : (u = S.createElement("script"),
        u.type = "text/" + (t.type || "javascript"),
        u.src = t.url),
        u.onload = u.onreadystatechange = o,
        u.onerror = a,
        u.async = !1,
        u.defer = !1,
        t.errorTimeout = e.setTimeout(function() {
            a({
                type: "timeout"
            })
        }, 7e3),
        l = S.head || S.getElementsByTagName("head")[0],
        l.insertBefore(u, l.lastChild)
    }
    function b() {
        for (var e, t = S.getElementsByTagName("script"), n = 0, r = t.length; n < r; n++)
            if (e = t[n].getAttribute("data-headjs-load"),
            !!e)
                return void A.load(e)
    }
    function D(e, t) {
        var n, a, u;
        return e === S ? (T ? s(t) : w.push(t),
        A) : (o(e) && (t = e,
        e = "ALL"),
        i(e) ? (n = {},
        r(e, function(e) {
            n[e] = j[e],
            A.ready(e, function() {
                f(n) && s(t)
            })
        }),
        A) : "string" == typeof e && o(t) ? (a = j[e],
        a && a.state === C || "ALL" === e && f() && T ? (s(t),
        A) : (u = O[e],
        u ? u.push(t) : u = O[e] = [t],
        A)) : A)
    }
    function M() {
        return S.body ? void (T || (T = !0,
        b(),
        r(w, function(e) {
            s(e)
        }))) : (e.clearTimeout(A.readyTimeout),
        void (A.readyTimeout = e.setTimeout(M, 50)))
    }
    function L() {
        S.addEventListener ? (S.removeEventListener("DOMContentLoaded", L, !1),
        M()) : "complete" === S.readyState && (S.detachEvent("onreadystatechange", L),
        M())
    }
    var T, N, S = e.document, w = [], O = {}, j = {}, E = "async"in S.createElement("script") || "MozAppearance"in S.documentElement.style || e.opera, Y = e.head_conf && e.head_conf.head || "head", A = e[Y] = e[Y] || function() {
        A.ready.apply(null, arguments)
    }
    , F = 1, k = 2, x = 3, C = 4;
    if ("complete" === S.readyState)
        M();
    else if (S.addEventListener)
        S.addEventListener("DOMContentLoaded", L, !1),
        e.addEventListener("load", M, !1);
    else {
        S.attachEvent("onreadystatechange", L),
        e.attachEvent("onload", M),
        N = !1;
        try {
            N = !e.frameElement && S.documentElement
        } catch (H) {}
        N && N.doScroll && function B() {
            if (!T) {
                try {
                    N.doScroll("left")
                } catch (t) {
                    return e.clearTimeout(A.readyTimeout),
                    void (A.readyTimeout = e.setTimeout(B, 50))
                }
                M()
            }
        }()
    }
    A.load = A.js = E ? p : h,
    A.test = l,
    A.ready = D,
    A.ready(S, function() {
        f() && r(O.ALL, function(e) {
            s(e)
        }),
        A.feature && A.feature("domloaded", !0)
    })
}(window);
var headLoad = head.js;
!function() {
    var e = {
        fileLoadList: [],
        fifterLoadFile: function(e) {
            for (var t = [], n = 0; n < e.length; n++)
                "string" == typeof e[n] ? $.inArray(e[n], this.fileLoadList) < 0 && (this.fileLoadList.push(e[n]),
                t.push(e[n])) : t.push(e[n]);
            return 0 === t.length ? t.push("") : "",
            t
        },
        namespace: function(t, n) {
            var r, a = t.split("."), o = 0;
            for (0 == t.indexOf(".") && (o = 1,
            n = n || e),
            n = n || window; r = a[o++]; )
                n[r] || (n[r] = {}),
                n = n[r];
            return n
        },
        load: function(e, t) {
            for (var n = e.length, r = [], a = 0; a < n; a++)
                r = r.concat(e[a]);
            t && r.push(t),
            headLoad.apply(null, r)
        },
        loadEops: function(e, t) {
            e = this.fifterLoadFile(e);
            for (var n = e.length, r = [], a = 0; a < n; a++)
                r = r.concat(e[a]);
            t && r.push(t),
            headLoad.apply(null, r)
        },
        throttle: function(e, t, n) {
            var r, a = null;
            return function() {
                var o = this
                  , i = arguments
                  , u = +new Date;
                clearTimeout(a),
                r || (r = u),
                u - r >= n ? (e.apply(o, i),
                r = u) : a = setTimeout(function() {
                    e.apply(o, i)
                }, t)
            }
        }
    };
    e.Browser = function() {
        var e = window.navigator
          , t = e.userAgent.toLowerCase()
          , n = /(msie|webkit|gecko|presto|opera|safari|firefox|chrome|maxthon|android|ipad|iphone|webos|hpwos)[ \/os]*([\d_.]+)/gi
          , r = {
            platform: e.platform
        };
        if (t.replace(n, function(e, t, n) {
            var a = t.toLowerCase();
            r[a] || (r[a] = n)
        }),
        r.opera && t.replace(/opera.*version\/([\d.]+)/, function(e, t) {
            r.opera = t
        }),
        r.msie) {
            r.ie = r.msie;
            var a = parseInt(r.msie, 10);
            r["ie" + a] = !0
        }
        return r
    }(),
    e.jHack = !!e.Browser.ie6 || !!e.Browser.ie7,
    function() {
        var t = {
            format: function(e, t) {
                var n = arguments;
                return e.replace(/\{(\d+)\}/gi, function(e, t) {
                    var r = n[(0 | t) + 1];
                    return null == r ? "" : r
                })
            },
            contains: function(e, t) {
                return e.indexOf(t) > -1
            },
            queryUrl: function(e, t) {
                e = e.replace(/^[^?=]*\?/gi, "").split("#")[0];
                var n = {};
                return e.replace(/(^|&)([^&=]+)=([^&]*)/g, function(e, t, r, a) {
                    try {
                        r = decodeURIComponent(r)
                    } catch (o) {}
                    try {
                        a = decodeURIComponent(a)
                    } catch (o) {}
                    r in n ? n[r]instanceof Array ? n[r].push(a) : n[r] = [n[r], a] : n[r] = /\[\]$/.test(r) ? [a] : a
                }),
                t ? n[t] : n
            }
        };
        e.StringH = t
    }(),
    function() {
        var t = function(e) {
            var t = "0" + e;
            return t.substring(t.length - 2)
        }
          , n = {
            dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            abbrDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            abbrMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            firstDayOfWeek: 1,
            format: "dd/mm/yyyy",
            fullYearStart: "20",
            isLeapYear: function(e) {
                var t = e.getFullYear();
                return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
            },
            isWeekend: function(e) {
                return 0 == e.getDay() || 6 == e.getDay()
            },
            isWeekDay: function(e) {
                return e.isWeekend()
            },
            getDaysInMonth: function(e) {
                return [31, e.isLeapYear() ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e.getMonth()]
            },
            getDayName: function(e, t) {
                return t ? this.abbrDayNames[e.getDay()] : this.dayNames[e.getDay()]
            },
            getMonthName: function(e, t) {
                return t ? this.abbrMonthNames[e.getMonth()] : this.monthNames[e.getMonth()]
            },
            getDayOfYear: function(e) {
                var t = new Date("1/1/" + e.getFullYear());
                return Math.floor((e.getTime() - t.getTime()) / 864e5)
            },
            getWeekOfYear: function(e) {
                return Math.ceil(e.getDayOfYear() / 7)
            },
            setDayOfYear: function(e) {
                return this.setMonth(0),
                this.setDate(e),
                this
            },
            addYears: function(e, t) {
                return e.setFullYear(e.getFullYear() + t),
                e
            },
            addMonths: function(e, t) {
                var n = e.getDate();
                return e.setMonth(e.getMonth() + t),
                n > e.getDate() && e.addDays(-e.getDate()),
                e
            },
            addDays: function(e, t) {
                return e.setTime(e.getTime() + 864e5 * t),
                e
            },
            addHours: function(e, t) {
                return e.setHours(e.getHours() + t),
                e
            },
            addMinutes: function(e, t) {
                return e.setMinutes(e.getMinutes() + t),
                e
            },
            addSeconds: function(e, t) {
                return e.setSeconds(e.getSeconds() + t),
                e
            },
            asString: function(e, n) {
                var r = n || this.format;
                return r.split("yyyy").join(e.getFullYear()).split("yy").join((e.getFullYear() + "").substring(2)).split("mmmm").join(this.getMonthName(e, !1)).split("mmm").join(this.getMonthName(e, !0)).split("mm").join(t(e.getMonth() + 1)).split("dd").join(t(e.getDate())).split("hh").join(t(e.getHours())).split("min").join(t(e.getMinutes())).split("ss").join(t(e.getSeconds()))
            },
            fromString: function(e, t) {
                var n = t || this.format
                  , r = new Date("01/01/1977")
                  , a = 0
                  , o = n.indexOf("mmmm");
                if (o > -1) {
                    for (var i = 0; i < Date.monthNames.length; i++) {
                        var u = e.substr(o, Date.monthNames[i].length);
                        if (Date.monthNames[i] == u) {
                            a = Date.monthNames[i].length - 4;
                            break
                        }
                    }
                    r.setMonth(i)
                } else if (o = n.indexOf("mmm"),
                o > -1) {
                    for (var u = e.substr(o, 3), i = 0; i < Date.abbrMonthNames.length && Date.abbrMonthNames[i] != u; i++)
                        ;
                    r.setMonth(i)
                } else
                    r.setMonth(Number(e.substr(n.indexOf("mm"), 2)) - 1);
                var s = n.indexOf("yyyy");
                s > -1 ? (o < s && (s += a),
                r.setFullYear(Number(e.substr(s, 4)))) : (o < s && (s += a),
                r.setFullYear(Number(Date.fullYearStart + e.substr(n.indexOf("yy"), 2))));
                var l = n.indexOf("dd");
                return o < l && (l += a),
                r.setDate(Number(e.substr(l, 2))),
                !isNaN(r.getTime()) && r
            }
        };
        e.DateH = n
    }(),
    "undefined" != typeof $GS && $GS instanceof Array && head.js.apply(null, $GS),
    window.GL = e
}();
