/*! common - git - 2018-12-27 14:42:35 */
!function(e) {
    function t(t, n, a) {
        n = e(n).first() || n;
        var i = t.offset().top
          , r = t.offset().left
          , s = a.position.split(/,?\s+/)
          , o = s[0]
          , f = s[1];
        i -= n.outerHeight() - a.offset[0],
        r += t.outerWidth() + a.offset[1],
        /iPad/i.test(navigator.userAgent) && (i -= e(window).scrollTop());
        var l = n.outerHeight() + t.outerHeight();
        "center" == o && (i += l / 2),
        "bottom" == o && (i += l);
        var u = t.outerWidth();
        return "center" == f && (r -= (u + n.outerWidth()) / 2),
        "left" == f && (r -= u),
        {
            top: i,
            left: r
        }
    }
    function n(t, n, a) {
        n = e(n).first() || n,
        t.position().top;
        var i = t.offset().top - t.outerHeight() - e(document).scrollTop()
          , r = t.outerWidth() + t.offset().left - e(document).scrollLeft()
          , s = a.position.split(/,?\s+/)
          , o = s[0]
          , f = s[1];
        i += a.offset[0],
        r += a.offset[1],
        /iPad/i.test(navigator.userAgent) && (i -= e(window).scrollTop());
        var l = n.outerHeight() + t.outerHeight();
        "center" == o && (i += l / 2),
        "bottom" == o && (i += l);
        var u = t.outerWidth();
        return "center" == f && (r -= (u + n.outerWidth()) / 2),
        "left" == f && (r -= u),
        {
            top: i,
            left: r
        }
    }
    function a(e) {
        function t() {
            return this.getAttribute("type") == e
        }
        return t.key = '[type="' + e + '"]',
        t
    }
    function i(a, i, s) {
        function o(t, n, a) {
            if (s.grouped || !t.length) {
                var i;
                if (a === !1 || e.isArray(a)) {
                    i = r.messages[n.key || n] || r.messages["*"],
                    i = i[s.lang] || r.messages["*"].en;
                    var o = i.match(/\$\d/g);
                    o && e.isArray(a) && e.each(o, function(e) {
                        i = i.replace(this, a[e])
                    })
                } else
                    i = a[s.lang] || a;
                t.push(i)
            }
        }
        var l = this
          , u = i.add(l);
        a = a.not(":button, :image, :reset, :submit"),
        GL.jHack || i.attr("novalidate", "novalidate"),
        e.extend(l, {
            getConf: function() {
                return s
            },
            getForm: function() {
                return i
            },
            getInputs: function() {
                return a
            },
            reflow: function() {
                return a.each(function() {
                    var a = e(this)
                      , i = a.data("msg.el");
                    if (i) {
                        var r;
                        r = "fixed" === s.effect ? n(a, i, s) : t(a, i, s),
                        i.css({
                            top: r.top,
                            left: r.left
                        })
                    }
                }),
                l
            },
            invalidate: function(t, n) {
                if (!n) {
                    var i = [];
                    e.each(t, function(e, t) {
                        var n = a.filter("[name='" + e + "']");
                        n.length && (n.trigger("OI", [t]),
                        i.push({
                            input: n,
                            messages: [t]
                        }))
                    }),
                    t = i,
                    n = e.Event()
                }
                return n.type = "onFail",
                u.trigger(n, [t]),
                n.isDefaultPrevented() || v[s.effect][0].call(l, t, n),
                l
            },
            reset: function(t) {
                return t = t || a,
                t.removeClass(s.errorClass).each(function() {
                    var t = e(this).data("msg.el");
                    t && (t.remove(),
                    e(this).data("msg.el", null))
                }).off(s.errorInputEvent + ".v" || ""),
                l
            },
            destroy: function() {
                return i.off(s.formEvent + ".V reset.V"),
                a.off(s.inputEvent + ".V change.V"),
                l.reset()
            },
            checkValidity: function(t, n) {
                t = t || a,
                t = t.not(":disabled");
                var i = {};
                if (0 != s.filterByName && (t = t.filter(function() {
                    var t = e(this).attr("name");
                    if (!i[t])
                        return i[t] = !0,
                        e(this)
                })),
                !t.length)
                    return !0;
                if (n = n || e.Event(),
                n.type = "onBeforeValidate",
                u.trigger(n, [t]),
                n.isDefaultPrevented())
                    return n.result;
                var r = [];
                t.each(function() {
                    if (e(this).is(":visible")) {
                        var t = []
                          , a = e(this).data("messages", t)
                          , i = f && a.is(":date") ? "onHide.v" : s.errorInputEvent + ".v";
                        if (a.off(i),
                        e.each(d, function() {
                            var i = this
                              , r = i[0];
                            if (a.filter(r).length) {
                                var f = i[1].call(l, a, e.trim(a.val()));
                                if (f !== !0) {
                                    if (n.type = "onBeforeFail",
                                    u.trigger(n, [a, r]),
                                    n.isDefaultPrevented())
                                        return !1;
                                    var c = a.attr(s.messageAttr);
                                    if (c)
                                        return t = [c],
                                        !1;
                                    o(t, r, f)
                                }
                            }
                        }),
                        t.length && (r.push({
                            input: a,
                            messages: t
                        }),
                        a.trigger("OI", [t]),
                        s.errorInputEvent && a.on(i, function(e) {
                            l.checkValidity(a, e)
                        })),
                        s.singleError && r.length)
                            return !1
                    }
                });
                var c = v[s.effect];
                if (!c)
                    throw 'Validator: cannot find effect "' + s.effect + '"';
                return r.length ? (l.invalidate(r, n),
                !1) : (c[1].call(l, t, n),
                n.type = "onSuccess",
                u.trigger(n, [t]),
                t.off(s.errorInputEvent + ".v"),
                !0)
            }
        }),
        e.each("onBeforeValidate,onBeforeFail,onFail,onSuccess".split(","), function(t, n) {
            e.isFunction(s[n]) && e(l).on(n, s[n]),
            l[n] = function(t) {
                return t && e(l).on(n, t),
                l
            }
        }),
        s.formEvent && i.on(s.formEvent + ".V", function(e) {
            return l.checkValidity(null, e) ? (e.target = i,
            void (e.type = s.formEvent)) : e.preventDefault()
        }),
        i.on("reset.V", function() {
            l.reset()
        }),
        a[0] && a[0].validity && a.each(function() {
            this.oninvalid = function() {
                return !1
            }
        }),
        i[0] && (i[0].checkValidity = l.checkValidity),
        s.inputEvent && a.on(s.inputEvent + ".V", function(t) {
            l.checkValidity(e(this), t)
        }),
        a.filter(":checkbox, select").filter("[data-required]").on("change.V", function(t) {
            var n = e(this);
            (this.checked || n.is("select") && e(this).val()) && v[s.effect][1].call(l, n, t)
        }),
        a.filter(":radio[data-required]").on("change.V", function(t) {
            var n = e("[name='" + e(t.srcElement).attr("name") + "']");
            null != n && 0 != n.length && l.checkValidity(n, t)
        }),
        e(window).resize(function() {
            l.reflow()
        })
    }
    e.tools = e.tools || {
        version: "@VERSION"
    };
    var r, s = /\[type=([a-z]+)\]/, o = /^-?[0-9]*(\.[0-9]+)?$/, f = e.tools.dateinput, l = /^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i, u = /^([a-zA-Z0-9]|[~`!@#$%\^&\*\(\)_\+-=\{\}\]\[:;\"'<>,\.\/\?]){6,16}$/, c = /^(https?:\/\/)?[\da-z\.\-]+\.[a-z\.]{2,6}[#&+_\?\/\w \.\-=]*$/i;
    r = e.tools.validator = {
        conf: {
            grouped: !1,
            effect: "default",
            errorClass: "invalid",
            inputEvent: null,
            errorInputEvent: "keyup",
            formEvent: "submit",
            lang: "en",
            message: '<div class="errorMsg"><span><i class="text"></i></span></div>',
            messageAttr: "data-message",
            messageClass: "error",
            offset: [0, 0],
            position: "center right",
            singleError: !1,
            zIndex: 0,
            speed: "normal"
        },
        messages: {
            "*": {
                en: "Please correct this value"
            }
        },
        localize: function(t, n) {
            e.each(n, function(e, n) {
                r.messages[e] = r.messages[e] || {},
                r.messages[e][t] = n
            })
        },
        localizeFn: function(t, n) {
            r.messages[t] = r.messages[t] || {},
            e.extend(r.messages[t], n)
        },
        fn: function(t, n, i) {
            e.isFunction(n) ? i = n : ("string" == typeof n && (n = {
                en: n
            }),
            this.messages[t.key || t] = n);
            var r = s.exec(t);
            r && (t = a(r[1])),
            d.push([t, i])
        },
        addEffect: function(e, t, n) {
            v[e] = [t, n]
        }
    };
    var d = []
      , v = {
        "default": [function(n) {
            var a = this.getConf();
            e.each(n, function(n, i) {
                var r = i.input;
                r.addClass(a.errorClass);
                var s = r.data("msg.el");
                if (!s) {
                    s = e(a.message).addClass(a.messageClass).appendTo(document.body);
                    var o = r.data("validcode") || r.data("qsvalidcode") || r.attr("name");
                    o && s.addClass(o.replace(".", "_") + "ErrorMsg"),
                    a.zIndex && s.css("z-index", a.zIndex),
                    r.data("msg.el", s)
                }
                s.css({
                    visibility: "hidden"
                }).find("p").remove(),
                e.each(i.messages, function(t, n) {
                    e("<p/>").html(n).appendTo(s.find("i"))
                }),
                s.outerWidth() == s.parent().width() && s.add(s.find("p")).css({
                    display: "inline"
                });
                var f = t(r, s, a);
                s.css({
                    visibility: "visible",
                    position: "absolute",
                    top: f.top,
                    left: f.left
                }).fadeIn(a.speed)
            })
        }
        , function(t) {
            var n = this.getConf();
            t.removeClass(n.errorClass).each(function() {
                var t = e(this).data("msg.el");
                t && t.css({
                    visibility: "hidden"
                })
            })
        }
        ],
        fixed: [function(t) {
            var a = this.getConf();
            e.each(t, function(t, i) {
                var r = i.input;
                r.addClass(a.errorClass);
                var s = r.data("msg.el");
                if (!s) {
                    s = e(a.message).addClass(a.messageClass).appendTo(document.body);
                    var o = r.data("validcode") || r.data("qsvalidcode") || r.attr("name");
                    o && s.addClass(o.replace(".", "_") + "ErrorMsg"),
                    a.zIndex && s.css("z-index", a.zIndex),
                    r.data("msg.el", s)
                }
                s.css({
                    visibility: "hidden"
                }).find("p").remove(),
                e.each(i.messages, function(t, n) {
                    e("<p/>").html(n).appendTo(s.find("i"))
                }),
                s.outerWidth() == s.parent().width() && s.add(s.find("p")).css({
                    display: "inline"
                });
                var f = n(r, s, a);
                s.css({
                    visibility: "visible",
                    position: "fixed",
                    top: f.top,
                    left: f.left
                }).fadeIn(a.speed)
            })
        }
        , function(t) {
            var n = this.getConf();
            t.removeClass(n.errorClass).each(function() {
                var t = e(this).data("msg.el");
                t && t.css({
                    visibility: "hidden"
                })
            })
        }
        ]
    };
    e.each("email,url,number".split(","), function(t, n) {
        e.expr[":"][n] = function(e) {
            return e.getAttribute("type") === n
        }
    }),
    e.fn.oninvalid = function(e) {
        return this[e ? "on" : "trigger"]("OI", e)
    }
    ,
    r.fn(":password", "请输入6-16位数字及字符组成的密码.", function(e, t) {
        return !!e.attr("pattern") || (!t || u.test(t))
    }),
    r.fn(":email", "请输入正确的邮箱地址", function(e, t) {
        return !t || l.test(t)
    }),
    r.fn(":url", "Please enter a valid URL", function(e, t) {
        return !t || c.test(t)
    }),
    r.fn(":file", "请上传正确的文件格式", function(t, n) {
        var a, i = t.attr("data-postfix");
        return "img" === i && (a = "^.*.(jpg|JPG|gif|GIF|png|PNG)$"),
        !n || new RegExp("^" + a + "$").test(e(t).data("src"))
    }),
    r.fn(":number", "Please enter a numeric value.", function(e, t) {
        return o.test(t)
    }),
    r.fn("[max]", "Please enter a value no larger than $1", function(e, t) {
        if ("" === t || f && e.is(":date"))
            return !0;
        var n = e.attr("max");
        return parseFloat(t) <= parseFloat(n) || [n]
    }),
    r.fn("[min]", "Please enter a value of at least $1", function(e, t) {
        if ("" === t || f && e.is(":date"))
            return !0;
        var n = e.attr("min");
        return parseFloat(t) >= parseFloat(n) || [n]
    }),
    r.fn("[data-required]", "不能为空", function(e, t) {
        return e.is(":checkbox") ? e.is(":checked") : !!t && t != e.data("tips")
    }),
    r.fn("[pattern]", function(e, t) {
        return "" === t || new RegExp("^" + e.attr("pattern") + "$").test(t)
    }),
    r.fn(":radio[data-required]", "请选择一项", function(t) {
        var n = !1;
        e("[name='" + t.attr("name") + "']").each(function(t, a) {
            e(a).is(":checked") && (n = !0)
        });
        return !!n
    }),
    r.fn("[data-equals]", "必须和$1相同", function(e, t) {
        var n = e.attr("data-equals")
          , a = this.getInputs().filter("[name=" + n + "]");
        return e.val() == a.val() || [n]
    }),
    r.fn("[data-disease]", "请输入合适疾病", function(e, t) {
        return !!t && t != e.data("tips") && !new RegExp("^[0-9]+$|^[a-zA-Z]+$").test(t)
    }),
    e.fn.validator = function(t) {
        var n = this.data("validator");
        return n && (n.destroy(),
        this.removeData("validator")),
        t = e.extend(!0, {}, r.conf, t),
        this.is("form") ? this.each(function() {
            var a = e(this);
            n = new i(a.find(":input"),a,t),
            a.data("validator", n)
        }) : (n = new i(this,this.eq(0).closest("form"),t),
        this.data("validator", n))
    }
}(jQuery);
