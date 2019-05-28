/*! portal-pc-static - git - 2019-05-21 15:39:38 */
GH.run(function() {
    function move() {
        $("#J_Notify .move-box2").show();
        var e = $("#J_Notify .move-box2").css("left")
          , t = $("#J_Notify .move-box").css("left");
        left1 -= 1,
        left2 -= 1,
        $("#J_Notify .move-box").css({
            left: left1 + 40 + "px"
        }),
        $("#J_Notify .move-box2").css({
            left: left2 + 40 + "px"
        }),
        parseInt(t) == difference ? (left2 = outWidth,
        $("#J_Notify .move-box2").css({
            left: left2 + 40 + "px"
        })) : parseInt(e) == difference && (left1 = outWidth,
        $("#J_Notify .move-box").css({
            left: left1 + 40 + "px"
        })),
        requestAnimationFrame(move)
    }
    function _responsive() {
        $(window).width() >= 1280 ? $("body").addClass("g-1200px") : $("body").removeClass("g-1200px")
    }
    function numberChange(id) {
        var zone = id.substring(0, 6)
          , year = "19" + id.substring(6, 8)
          , mdo = id.substring(8, 15);
        id = zone + year + mdo;
        var getNum = eval(7 * id.charAt(0) + 9 * id.charAt(1) + 10 * id.charAt(2) + 5 * id.charAt(3) + 8 * id.charAt(4) + 4 * id.charAt(5) + 2 * id.charAt(6) + 1 * id.charAt(7) + 6 * id.charAt(8) + 3 * id.charAt(9) + 7 * id.charAt(10) + 9 * id.charAt(11) + 10 * id.charAt(12) + 5 * id.charAt(13) + 8 * id.charAt(14) + 4 * id.charAt(15) + 2 * id.charAt(16));
        switch (getNum %= 11) {
        case 0:
            lastNumber = "1";
            break;
        case 1:
            lastNumber = "0";
            break;
        case 2:
            lastNumber = "X";
            break;
        case 3:
            lastNumber = "9";
            break;
        case 4:
            lastNumber = "8";
            break;
        case 5:
            lastNumber = "7";
            break;
        case 6:
            lastNumber = "6";
            break;
        case 7:
            lastNumber = "5";
            break;
        case 8:
            lastNumber = "4";
            break;
        case 9:
            lastNumber = "3";
            break;
        case 10:
            lastNumber = "2"
        }
        return id + lastNumber
    }
    $GM.init(),
    $GU.iwant.init(),
    $GUM.trackSource(),
    $GFO.init(),
    window.$TK || (window.$TK = function() {
        var e = $GC.debug ? "/images/blank.gif" : "/images/blank.gif"
          , t = "mlt"
          , a = "mst"
          , i = {
            get: function() {
                return ~~$.cookie("monitor_sid")
            },
            set: function(e) {
                return $.cookie("monitor_sid", e, {
                    domain: $GC.domainEnd,
                    path: "/",
                    expires: 365
                }),
                !0
            }
        }
          , n = {
            get: function() {
                return ~~$.cookie("monitor_seq")
            },
            set: function(e) {
                return $.cookie("monitor_seq", e, {
                    domain: $GC.domainEnd,
                    path: "/",
                    expires: 365
                }),
                !0
            }
        }
          , o = {};
        o.uuid = $GU.fpCode,
        o.user_id = GreenLine.Log.loginId,
        o.enc_user_id = $GC.encodeId,
        o.open_id = $GC.extEncodeId,
        o.client = navigator.platform,
        o.persession_id = GreenLine.Log.perSessiionId,
        o.shortsession_id = GreenLine.Log.shortSessionId,
        o.url = location.href,
        o.pv_sid = i.get(),
        o.pv_seq = n.get(),
        o.uid_cat = GreenLine.Log.sourceId || "",
        o.st_time = $.cookie(a) || "";
        var r = {
            isTouchDevice: function() {
                try {
                    return document.createEvent("TouchEvent"),
                    !0
                } catch (e) {
                    return !1
                }
            },
            $emit: function(t) {
                var a = new Image;
                src = e + "?pdata=" + t.pdata + "&data=" + t.data,
                a.src = src
            },
            $serialize: function(e, t) {
                var a = [];
                $.each(e, function(e, t) {
                    a.push(e + "=" + encodeURIComponent(t))
                }),
                a = a.join("|");
                var i = "";
                if (t)
                    try {
                        i = JSON.stringify(t),
                        i = encodeURIComponent(i)
                    } catch (n) {
                        window.console && console.error(n)
                    }
                return {
                    pdata: a,
                    data: i
                }
            },
            visit: function(e) {
                var s = 18e5
                  , c = $.cookie(t) || 0
                  , d = new Date - c > s;
                d && (n.set(0),
                i.set(i.get() + 1),
                $.cookie(a, 1 * new Date, {
                    domain: $GC.domainEnd,
                    path: "/",
                    expires: 365
                })),
                n.set(n.get() + 1),
                $.cookie(t, 1 * new Date, {
                    domain: $GC.domainEnd,
                    path: "/",
                    expires: 365
                });
                var l = $.extend({}, o, {
                    report_time: (new Date).getTime(),
                    refer_url: document.referrer,
                    track_souce: $.cookie("_track_source") || ""
                })
                  , u = r.$serialize(l, e);
                r.$emit(u)
            },
            click: function(e, t) {
                e = e.replace(/\s/g, "");
                var a = $.extend({}, o, {
                    report_time: (new Date).getTime(),
                    click_event: e
                })
                  , i = r.$serialize(a, t);
                r.$emit(i)
            }
        };
        return window.monitorVisitConfig ? r.visit(window.monitorVisitConfig) : r.visit(),
        $(document).on("mousedown", "[monitor]", function() {
            var e = $(this)
              , t = e.attr("monitor")
              , a = {};
            $.each(this.attributes, function(e, t) {
                t.nodeName.replace(/monitor-(.*)/, function(e, i) {
                    i = i.replace(/-/g, "_"),
                    a[i] = t.nodeValue
                })
            }),
            r.click(t, a)
        }),
        r
    }());
    for (var i = 0; i < $GF.length; i++)
        $GF[i].call();
    if (window.asyncPagination = function(e, t) {
        function a(e) {
            t.find("div.pagin a").click(function() {
                var a = $(this).attr("id");
                if (t.find("#" + a).html() != n) {
                    if ("prev" === a)
                        n--;
                    else if ("next" === a)
                        n++;
                    else if ("first" === a)
                        n = 1;
                    else if ("last" === a)
                        n = s;
                    else if ("pagejump" === a) {
                        var i = t.find(".jump-page").val()
                          , o = /^[1-9]\d*$/;
                        if (!o.test(i))
                            return $GM.smartAlert("请输入正确页码"),
                            void t.find(".jump-page").val("");
                        i > s ? ($GM.smartAlert("输入页码不可大于总页数"),
                        t.find(".jump-page").val("")) : n = i
                    } else
                        n = t.find("#" + a).html();
                    n = parseInt(n),
                    n < 1 || n > s || e(n)
                }
            })
        }
        function i(e) {
            if (t.find("#pagedes").html("共<a>" + Math.ceil(s / o) + "</a>页"),
            c > 0) {
                s = c % o === 0 ? c / o : (c - c % o) / o + 1,
                n = parseInt(n),
                n < 1 ? n = 1 : n > s && (n = s);
                var i = "";
                i = 1 === n ? "<span class='prev-disabled'>首页</span><span  class='prev-disabled'>上一页<b></b></span> <a id='1'>1</a> " : "<a id='first' href='javascript:void(0)'>首页</a><a id='prev' class='prev' href='javascript:void(0)'>上一页<b></b></a> <a id='1' href='javascript:void(0)'>1</a> ",
                n - 2 > 2 && (i += "<span class='text'>...</span> "),
                1 < n - 2 && n - 2 < s && (i += "<a id='" + (n - 2) + "' href='javascript:void(0)'>" + (n - 2) + "</a> "),
                1 < n - 1 && n - 1 < s && (i += "<a id='" + (n - 1) + "' href='javascript:void(0)'>" + (n - 1) + "</a> "),
                1 < n && n < s && (i += "<a id='" + n + "'>" + n + "</a> ");
                for (var r = n + 1; r < s && r <= n + 2; r++)
                    i += "<a id='" + r + "' href='javascript:void(0)'>" + r + "</a> ";
                n + 3 < s && (i += "<span class='text'>...</span> "),
                i += n < s ? "<a id='" + s + "' href='javascript:void(0)'>" + s + "</a> <a id='next' href='javascript:void(0)' class='next'>下一页<b></b></a><a href='javascript:void(0)' id='last'>末页</a><label>转向第<input type='text' class='jump-page'/>页<b></b></label><a class='J_PageJump' id='pagejump' href='javascript:void(0)'>确定</a>" : n > 1 ? "<a id='" + s + "'>" + s + "</a> <span class='next-disabled'>下一页<b></b></span><span class='next-disabled'>末页</span><label>转向第<input type='text' class='jump-page'/>页<b></b></label><a class='J_PageJump' id='pagejump' href='javascript:void(0)'>确定</a>" : "<span class='next-disabled'>下一页<b></b></span><span class='next-disabled'>末页</span><label>转向第<input type='text' class='jump-page'/>页<b></b></label><a class='J_PageJump' id='pagejump' href='javascript:void(0)'>确定</a>",
                t.find("#page").html(i),
                t.find("#" + n).addClass("current"),
                a(e)
            } else
                t.find("#page").empty()
        }
        var n = e.pageIndex
          , o = e.pageSize
          , r = e.totalRecord
          , s = Math.round(r / 1)
          , c = r;
        s < 1 && (s = 1),
        "function" == typeof e.doPaging && i(e.doPaging)
    }
    ,
    function() {
        for (var e = 0, t = ["ms", "moz", "webkit", "o"], a = 0; a < t.length && !window.requestAnimationFrame; ++a)
            window.requestAnimationFrame = window[t[a] + "RequestAnimationFrame"],
            window.cancelAnimationFrame = window[t[a] + "CancelAnimationFrame"] || window[t[a] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(t, a) {
            var i = (new Date).getTime()
              , n = Math.max(0, 16 - (i - e))
              , o = window.setTimeout(function() {
                t(i + n)
            }, n);
            return e = i + n,
            o
        }
        ),
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        }
        )
    }(),
    !GreenLine.Util.isEmbedFrame()) {
        var adjustHieght = function() {
            $("#content").css("min-height", $(window).height() - 346 + "px"),
            $("#gc").css("min-height", $(window).height() - $("#gh").outerHeight() - $("#gf").outerHeight() - $("#J_Notify").outerHeight() - 1 + "px")
        };
        if (adjustHieght(),
        $(window).resize(GL.throttle(function() {
            adjustHieght()
        }, 300, 500)),
        $("#J_Notify").length) {
            localStorage.getItem("indexNotice") && localStorage.getItem("indexNotice") == $("#J_Notify").attr("data-time") || $(".J_NoticeBox").show();
            var outWidth = $("#J_Notify").outerWidth()
              , inWidth = $("#J_Notify .move-box").outerWidth();
            if (inWidth > outWidth) {
                var left1 = 0
                  , left2 = inWidth
                  , difference = outWidth - inWidth;
                move()
            } else {
                var textWidth = (inWidth - 10) / 2;
                $("#J_Notify .move-box").css({
                    left: "50%",
                    "margin-left": "-" + textWidth + "px"
                })
            }
            $("#J_Notify .move-box").css({
                visibility: "visible"
            }),
            $("#J_Notify .move-box2").css({
                visibility: "visible"
            }),
            $(".J_NoticeClose").click(function() {
                $("#J_Notify").attr("data-time") && localStorage.setItem("indexNotice", $("#J_Notify").attr("data-time")),
                $(".J_NoticeBox").hide()
            }),
            $(".J_NoticeContent").click(function() {
                $GM.smartModal($(this), {
                    message: $("#J_Notify .move-box")[0].innerText,
                    btnText: "知道了",
                    title: "公告",
                    showClose: !1,
                    callback: function() {
                        $(".J_NoticeBox").hide(),
                        localStorage.setItem("indexNotice", $("#J_Notify").attr("data-time"))
                    }
                })
            })
        }
    }
    var cfg = $("#g-cfg");
    if ("1" == cfg.data("is-responsive") && (_responsive(),
    $(window).resize(GL.throttle(_responsive, 200, 500))),
    window.top === window.self && "1" != cfg.data("is-fluid") && $("body").css("min-width", "980px"),
    function(e) {
        function t(e, t, a, i) {
            if ("history" === e) {
                var n, o, e = a.type, r = a.name.replace(/&lt;/g, "<").replace(/&gt;/g, ">"), s = a.name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                switch (e) {
                case "hos":
                    n = "/search/hospital?q=",
                    o = "医院";
                    break;
                case "doc":
                    n = "/search?q=",
                    o = "医生";
                    break;
                case "dis":
                    n = "/search?q=",
                    o = "疾病";
                    break;
                case "clear":
                    return n = "/search?q=",
                    o = "清空搜索历史记录",
                    {
                        label: r,
                        value: r,
                        childNode: '<a href="javascript: ;" data-clear="true">&nbsp;<i>' + o + "</i></a>"
                    };
                default:
                    n = "/search?q=",
                    o = ""
                }
                return {
                    label: r,
                    value: r,
                    childNode: "<a class='J_SearchHistory' monitor='public_search,public_search,search_query' monitor-search-q='" + a.name + "' monitor-click-rank='" + i + "' href='" + $GC.guahaoServer + n + encodeURIComponent(r) + c + "&searchType=search_query'>" + s + "<i>" + o + "</i></a>"
                }
            }
            d++;
            var e = a.type
              , l = new RegExp(t,"g")
              , n = "/search?q="
              , o = "疾病";
            return "hospital" == e ? (n = "/search/hospital?q=",
            o = "医院") : "doctor" == e && (o = "医生"),
            {
                label: a.name.replace(l, "<em>" + t + "</em>"),
                value: a.name,
                childNode: "<a class='J_SearchSuggest' monitor='public_search,public_search,search_ideapad' monitor-search-q='" + a.name + "' monitor-click-rank='" + i + "' href='" + $GC.guahaoServer + n + encodeURIComponent(a.name) + c + "&searchType=search_ideapad'>" + a.name.replace(l, "<em>" + t + "</em>") + "<i>" + o + "</i></a>"
            }
        }
        function a(e, a) {
            $.each(e, function(e, i) {
                return !(e > 10) && void a.push(t("history", i, i, e))
            })
        }
        function i(e, a) {
            e.suggest && $.each(e.suggest, function(i) {
                a.push(t("", e.q, this))
            })
        }
        function n(e, t) {
            var a = $.trim(e.q);
            "" !== a ? GH.H5ApiRequest.ajax({
                url: $GC.gatewayServer + "/common/searchsuggest/list.json",
                data: {
                    q: a
                },
                success: function(e) {
                    if (console.table(e.items),
                    e.items) {
                        e.suggest = e.items;
                        try {
                            delete e.items
                        } catch (a) {}
                    }
                    t(e.suggest || [])
                },
                error: function() {
                    $GM.smartAlert("系统异常，请稍后再试"),
                    t([])
                }
            }) : t(r($.cookie("searchHistory")) || [])
        }
        function o(e) {
            if ("" === e)
                return !1;
            if (e.nodeType && !$(e).attr("data-clear") == !1)
                return $.cookie("searchHistory", "", {
                    expires: -1,
                    domain: document.domain,
                    path: "/"
                }),
                !1;
            var t, a = $.cookie("searchHistory"), i = null;
            if (a = a ? r(a) : [],
            e.nodeType) {
                var n = e.innerHTML.replace(/<i>/i, "|").replace(/<\/?\w+>/g, "").split("|");
                t = {
                    name: n[0],
                    type: {
                        "医院": "hos",
                        "疾病": "dis",
                        "医生": "doc"
                    }[n[1]] || ""
                }
            } else
                t = {
                    name: e.toString(),
                    type: ""
                };
            return t.name = t.name.slice(0, 24),
            $.each(a, function(e, a) {
                if (a.name === t.name && a.type === t.type)
                    return i = e,
                    !1
            }),
            null !== i ? a.splice(0, 0, a.splice(i, 1)[0]) : a.splice(0, 0, t),
            1 === a.length && a.push({
                name: "",
                type: "clear"
            }),
            a.length > 11 && a.splice(10, 1),
            $.cookie("searchHistory", s(a), {
                expires: 365,
                domain: document.domain,
                path: "/"
            }),
            !0
        }
        function r(e) {
            if ("string" != typeof e)
                return [];
            for (var t = e.split("|"), a = [], i = 0; t[i]; i++)
                a = t[i].split(","),
                t[i] = {
                    name: a[0],
                    type: a[1]
                };
            return t
        }
        function s(e) {
            if (e.constructor !== [].constructor)
                return "";
            for (var t = [], a = 0; e[a]; a++)
                t.push(e[a].name + "," + e[a].type);
            return t.join("|")
        }
        if (0 != e.length) {
            e.submit(function() {
                return "" == $.trim($(this).find("input[name='q']").val()) ? ($(this).find("input[name='q']").val(""),
                !1) : ($GUM.link($(this).attr("action") + "?" + $(this).serialize(), "SOU"),
                !0)
            }),
            e.find("a").click(function() {
                var t = e.find("a.js-search-inhos")
                  , a = "";
                a = $(this) == t ? "search_hospital" : "search";
                var i = e.find('input[name="q"]').val();
                return $TK.click("public_search,public_search," + a, {
                    search_q: i
                }),
                $(this).hasClass("js-search-inhos") ? e.attr("action", "/search/expert") : e.find("input[name='hospitalId']").remove(),
                $(this).parent().trigger("submit"),
                !1
            }),
            e.find("input[name=q]").keypress(function(t) {
                $(this).parent();
                13 == t.keyCode && (t.preventDefault(),
                setTimeout(function() {
                    e.find("a:eq(0)").trigger("click")
                }, 200))
            });
            var c = ""
              , d = 0;
            $GU.checkSubdomain("shanghai") && (c = "&p=上海&pi=2"),
            e.find(".J_SearchQ").autocomplete({
                onfocus: !0,
                source: n,
                ofElement: e.find(".gh-search-input"),
                customCls: "gh-search-autocomplete",
                minLength: 0,
                beforeJump: o,
                normalize: function(e) {
                    var t = [];
                    return d = 0,
                    $.isArray(e) ? a(e, t) : $GU.checkPageName("gp-search-hos") ? i(e, t) : i(e, t),
                    t
                }
            }),
            e.find("input[name=q]")[0] === document.activeElement && e.find("input[name=q]").focus();
            var l = $(e.find("input[name=q]").data("autocomplete").menu.element[0]);
            l.delegate("a", "click", function() {
                o(this)
            }),
            e.submit(function() {
                o(e.find("input[name=q]").val())
            }),
            $(window).resize(GL.throttle(function() {
                e.find("input[name=q]").autocomplete("close")
            }, 200, 200)),
            e.hover(function() {
                $(this).find(".gh-search-input").addClass("gh-search-focus")
            }, function() {
                $(this).find(".gh-search-input").removeClass("gh-search-focus")
            }),
            e.find(".J_SearchQ").glPlaceholder()
        }
    }($(".gh-search-form")),
    function(e) {
        0 !== e.length && GH.run(function() {
            function t(e) {
                var t = !0
                  , i = $.trim(e.val())
                  , n = o.find(".tips-error");
                if (i)
                    t = a(e, n);
                else if (t = !1,
                e.hasClass("required") && e.hasClass("form-input")) {
                    e.addClass("error");
                    var r = e.parent();
                    r.hasClass("g-iptph-wrap") && (r = r.parent())
                }
                return t
            }
            function a(e, t) {
                var a = !0
                  , i = $.trim(e.val());
                return "password" === e.attr("type") && (e.data("pattern", "^([a-zA-Z0-9]|[~`!@#$%^&*()_+-={}]|[:;\"'<>,./?]){6,16}$"),
                e.data("message", "登录名或密码错误.")),
                e.data("pattern") && (a = new RegExp(e.data("pattern")).test(i),
                a === !0 ? (t.text("").hide(),
                e.hasClass("form-input") && e.removeClass("error")) : e.data("message") && (e.addClass("error"),
                t.text(e.data("message")).show())),
                a
            }
            function i() {
                var e, a = o.find("input.form-input"), i = !0;
                return a.length > 0 && $.each(a, function(a, n) {
                    e = t($(n)),
                    0 == e && (i = !1)
                }),
                i
            }
            function n(t) {
                $GUB.disable($("#loginbtn"), "登录中...");
                var a = "/user/login_a";
                $GU.logs(a, "post"),
                $.ajax({
                    type: "POST",
                    url: a,
                    data: t.serialize(),
                    dataType: "json",
                    timeout: 3e4,
                    success: function(a) {
                        var i = "";
                        if (a.hasError)
                            null != a.data && "0" == a.data.status && "1" == a.data.userType ? i = "/doctor/toupdateloginpage?docsigndata=" + a.data.docsigndata : (null != a.data && e.find("#resendform #email").attr("value", a.data.loginId),
                            t.find(".tips-error").html(a.message).show(),
                            $GUB.enable(e.find("#loginbtn"), "登录"),
                            e.find(".captcha").trigger("click"));
                        else if ("1" == a.data.userType && a.data.doctorTargetUrl)
                            i = a.data.doctorTargetUrl;
                        else if ($GM.modalTrigger.hasClass("login") || $GM.modalTrigger.hasClass("login-to-see")) {
                            var n = a.returnUrl;
                            n ? (n += n.indexOf("?") > -1 ? "&" : "?",
                            n += "targetUrl=" + encodeURIComponent(window.location.href),
                            window.location.href = n) : window.location.reload(!0)
                        } else
                            i = $GM.modalTrigger.attr("href");
                        "" != i && setTimeout(function() {
                            window.location.href = i
                        }, 300)
                    },
                    error: function(a, i, n) {
                        t.find(".tips-error").text("系统异常，请稍后再试！").show(),
                        $GUB.enable(e.find("#loginbtn"), "登录"),
                        e.find(".captcha").trigger("click")
                    }
                })
            }
            var o = e.find("form:eq(0)")
              , r = $("#J_CaptchaName").val() || "imagetest"
              , s = {
                context: o.find(".J_Valid"),
                businessType: 1,
                product: "bind",
                testSucc: function() {
                    n(o)
                }
            };
            e.find(".J_Social").each(function() {
                var e = $(this);
                e.attr("href", e.attr("href") + "?target=" + encodeURIComponent(location.href))
            }),
            e.find(".J_MoreLogin").on("click", function() {
                return $(".J_LoginList").toggle(),
                !1
            }),
            $("#gh .login").click(function() {
                return $GU.checkSubdomain("fecity") ? window.location.href = $GC.guahaoServer + "/58fastlogin/entry" : document.domain.indexOf("jklj") > -1 ? window.location.href = $GC.jkljServer + "/login?returnurl=" + encodeURIComponent(window.location.href) : (o.find("input").removeClass("error"),
                o.find(".tips-error").text("").hide(),
                o.find("i.error").remove(),
                e.find(".captcha").trigger("click"),
                $GM.loadDirectModal($(this), e)),
                !1
            }),
            "geetest" == r ? $GU.geeTestCaptcha.init(s) : e.find(".captcha").click(function() {
                return $(this).find("img").attr("src", "/validcode/genimage/" + Math.floor(1e7 * Math.random())),
                !1
            }),
            "placeholder"in document.createElement("input") || o.find(":input").not(":checkbox").each(function(e) {
                var t = $(this)
                  , a = $("<input type='text' />");
                a.attr({
                    name: "re" + t.attr("name"),
                    id: "J_re" + e
                }).val(t.attr("placeholder")),
                t.hide().after(a),
                a.show(),
                a.addClass(t.attr("class")).val(t.attr("placeholder")).css("color", "#bbb"),
                a.focus(function() {
                    a.hide(),
                    t.val("").show().focus()
                }),
                t.blur(function() {
                    "" == t.val() && (a.show(),
                    t.hide())
                })
            }),
            o.find("input.form-input").focus(function() {
                var e = $(this);
                e.addClass("focus"),
                e.removeClass("error");
                var t = e.parent();
                t.hasClass("g-iptph-wrap") && (t = t.parent()),
                t.find("i").remove()
            }).blur(function() {
                var e = $(this);
                e.removeClass("focus")
            }),
            e.on("keyup", function() {
                return "block" === $("#gm-login").css("display") && 13 === event.keyCode && e.find(".actionbt #loginbtn").trigger("click"),
                !1
            }),
            e.find("#loginbtn").click(function() {
                return o.find(".tips-error").hide(),
                o.find(".tips-succ").hide(),
                $GUB.isActive($(this)) && i() && (o.find("input[name='password']").val($().crypt({
                    method: "md5",
                    source: o.find("#password").val()
                })),
                "geetest" === r && "bind" === s.product ? $GU.geeTestCaptcha.verify() : n(o)),
                !1
            }),
            $(".J_DownloadTab").on("click", function() {
                $(this).prev().removeClass("main-current").addClass("main-normal").end().removeClass("download-normal").addClass("download-current"),
                $(".J_TabList").animate({
                    "margin-left": -$(".J_TabList")[0].offsetWidth / 2 + "px"
                }, 300)
            }),
            $(".J_MainTab").on("click", function() {
                $(this).next().removeClass("download-current").addClass("download-normal").end().removeClass("main-normal").addClass("main-current"),
                $(".J_TabList").animate({
                    "margin-left": 0
                }, 300)
            })
        }, [GH.modules.crypt])
    }($("#gm-login")),
    $(".g-fastorder-box").length > 0 && $GW.fastOrder.init($(".g-fastorder-box")),
    $("#freshcode").length > 0 && $GU.refreshCaptcha($("#freshcode"), $("#vcode_img")),
    function(e) {
        e.length > 0 && e.find(".list-left").css("height", e.find(".list-content").height() + "px")
    }($(".g-foucus-warp")),
    $("#gh .gh-search").length > 0 && "1" == cfg.data("header-fixed") && !GreenLine.Util.isIE6()) {
        var $headMenu = $("#gh .gh-menu");
        0 === $headMenu.length && ($headMenu = $("#gh .gh-home-menu"));
        var num = $headMenu.offset().top + $headMenu.height();
        $(window).scroll(function() {
            if ($(".gh-main").hasClass("gh-mini") || !($(document).height() - $(window).height() < num)) {
                var e = $("#gh .gh-nav").height() + 75
                  , t = $headMenu.height() + 20
                  , a = $(document).scrollTop();
                if (a > e) {
                    if ($(".gh-main").hasClass("gh-mini"))
                        return;
                    $(".gh-search-form").find("input").autocomplete("close"),
                    $(".ui-autocomplete").css({
                        position: "fixed"
                    }),
                    $(".gh-main").addClass("gh-mini"),
                    $(".gh-main").css({
                        position: "fixed"
                    }),
                    $(".gh-mini").animate({
                        top: 0
                    }, "100000"),
                    $(".gh-main").find(".search-key").hide(),
                    $(".gh-search-tips").length > 0 && ($(".gh-main").find(".gh-search-tips").hide(),
                    $(".gh-main .gh-search").removeClass("gh-search-left"))
                }
                if (a < t) {
                    if (!$(".gh-main").hasClass("gh-mini"))
                        return;
                    $(".gh-main").removeClass("gh-mini"),
                    $(".gh-main").css({
                        top: "-35px",
                        position: "static"
                    }),
                    $(".gh-search-form").find("input").autocomplete("close"),
                    $(".ui-autocomplete").css({
                        position: "absolute"
                    }),
                    $(".gh-main").find(".search-key").show(),
                    $(".gh-search-tips").length > 0 && ($(".gh-main").find(".gh-search-tips").show(),
                    $(".gh-main .gh-search").addClass("gh-search-left"))
                }
            }
        })
    }
    if ($("#idNumber").click(function() {
        var e = $("#idNumber").attr("data-number")
          , t = numberChange(e)
          , a = $GD.init({
            title: "温馨提醒",
            extClass: "gm-user-numb",
            content: "<div class='per-num'>您的十八身份证号码如下：" + t + ",<br/>请核对您的18位身份证信息，如有错误，请联系网络客服人员。</div>",
            noCancelBtn: !1,
            okTxt: "确认",
            okCall: function() {
                $.ajax({
                    type: "post",
                    url: "/my/fristCertToTwo",
                    data: "certno=" + t,
                    success: function(e) {
                        a = e.hasError ? $GD.init({
                            title: "温馨提醒",
                            extClass: "num-error",
                            content: "<div class='error-des'>" + e.message + "</div>",
                            noCancelBtn: !0,
                            okTxt: "知道了"
                        }) : $GD.init({
                            title: "温馨提醒",
                            extClass: "num-suc",
                            content: "<div class='suc-des'>您已修改成功！</div>",
                            noCancelBtn: !0,
                            okTxt: "知道了",
                            okCall: function() {
                                location.reload()
                            }
                        })
                    }
                })
            }
        })
    }),
    $(".js-apply-jkdjt-rule").length > 0 && $(".js-apply-jkdjt-rule").click(function() {
        $GD.init({
            title: "申请成为讲堂专家",
            extClass: "gm-jkdjtnew-dialog",
            content: '<form action="javascript:;"><ul><li>请填写以下信息，以便及时与您取得联系：</li><li><label for="name">您的姓名：</label><input type="text"  data-required="1" placeholder="您的姓名" data-phtext="您的姓名" id="name" name="fullName" /></li><li><label for="hospital">您所在的医院：</label><input placeholder="您所在的医院" data-phtext="您所在的医院" data-required="1" type="text" id="hospital" name="hospitalName" /></li><li><label for="phone">您的联系电话：</label><input placeholder="您的联系电话" data-required="1" data-phtext="您的联系电话" type="text" id="phone" name="phone" /></li><li class="jk-goodat"><label for="goodat">您的擅长：</label><textarea id="goodat" name="goodat" maxlength="500" placeholder="请输入您的擅长" pattern ="^(.|\n){1,500}$" data-message ="请输入1-500个字符"  data-phtext="请输入您的擅长" data-required="1" ></textarea></li></ul></form><div class="jk-des">健康大讲堂由国家卫生和计划生育委员会、国家食品药品监督管理总局、中国科学技术协会联合主办，微医为官方指定支持单位。后续将用三年时间进入全国百座城市，通过名医大讲堂和专家咨询等多样活动。大力宣传健康生活方式和安全用药常识。</div><div class="success hide"><i></i><span>反馈成功！</span></div>',
            width: 460,
            okCls: "gbn gbt-blue1 gbt-ps",
            okTxt: "提交",
            noCancelBtn: !1,
            okCall: function() {
                var e = $GD.find(".js-ok");
                if ($GUB.isActive(e)) {
                    var t = $(".gm-jkdjtnew-dialog").find("form");
                    return t.validator({
                        formEvent: "null"
                    }),
                    t.data("validator").checkValidity() && ($GUB.disable(e, "提交中…"),
                    $.ajax({
                        url: "/jkzgx/doctorapply?",
                        cache: !1,
                        dataType: "json",
                        type: "post",
                        data: t.serialize(),
                        success: function(t) {
                            $GUB.enable(e, "确定"),
                            t.errors ? $GD.showError(t.errors[0].defaultMessage) : ($(".gm-jkdjtnew-dialog").find("form").hide(),
                            $(".gm-jkdjtnew-dialog").find(".jk-des").html("反馈成功！"),
                            setTimeout(function() {
                                $(".gm-jkdjtnew-dialog").find(".js-close").trigger("click")
                            }, 2e3))
                        },
                        error: function() {
                            $GUB.enable(e, "确定"),
                            $GD.showError("系统繁忙，请稍后再试")
                        }
                    })),
                    !1
                }
            }
        }),
        $(".gm-jkdjtnew-dialog").glNewPlaceholder()
    }),
    GH.dispatcher(".J_NewMenu", function() {
        return {
            init: function() {
                var e = this
                  , t = $(".J_FastCategory ul");
                t.menuAim({
                    submenuDirection: "right",
                    rowSelector: "> li",
                    submenuSelector: "*",
                    enter: function(t) {
                        0 === $(".J_FastCategory .menu-current").length && e.showSubCategory($(t))
                    },
                    activate: function(t) {
                        e.showSubCategory($(t))
                    },
                    deactivate: function(t) {
                        e.hideSubCategory($(t))
                    }
                }),
                $(".J_DiseaseCategory").on("mouseleave ", function() {
                    e.hideSubCategory($(".J_FastCategory .menu-current"))
                }),
                $(".J_FastCategory").is(":visible") || $(".J_DiseaseCategory").on("mouseenter", function() {
                    $(".J_FastCategory").show()
                }).on("mouseleave", function() {
                    $(".J_FastCategory").hide()
                }),
                $(".J_FastSubCategory").on("click", ".J_ShowMore", function() {
                    var e = $(this).prev().parent().outerHeight()
                      , t = $(this).prev().find("ul").outerHeight();
                    e < t ? ($(this).parent().css("height", t + 40 + "px"),
                    $(this).prev().css("height", "auto"),
                    $(this).addClass("take-up")) : ($(this).prev().css("height", "410px"),
                    $(this).parent().css("height", "444px"),
                    $(this).removeClass("take-up"))
                })
            },
            showSubCategory: function(e) {
                var t = this
                  , a = e.data("id")
                  , i = $(".J_FastSubCategory[data-id=" + a + "]");
                i.show().addClass("menu-current"),
                e.addClass("menu-current"),
                t.initSubCategoryHeight(i)
            },
            hideSubCategory: function(e) {
                var t = e.data("id")
                  , a = $(".J_FastSubCategory[data-id=" + t + "]");
                a.hide(),
                e.removeClass("menu-current")
            },
            initSubCategoryHeight: function(e) {
                if (!e.find(".J_ShowMore").length) {
                    var t = e.outerHeight()
                      , a = e.find("ul").outerHeight();
                    a > t && (e.find(".J_SubBox").after("<p class='click-more J_ShowMore'></p>"),
                    e.find(".J_SubBox").css("height", "410px"))
                }
            }
        }
    }),
    GH.dispatcher(".J_NewMenu", function(e) {
        return {
            init: function() {
                this.initSubnav()
            },
            initSubnav: function() {
                function t(e, t) {
                    clearTimeout(i),
                    e.addClass("active"),
                    o.addClass("active"),
                    t.addClass("active"),
                    t.css({
                        left: e.offset().left + (e.outerWidth() - t.outerWidth()) / 2
                    })
                }
                function a(e) {
                    clearTimeout(i),
                    e === !0 ? (n.find(".active").removeClass("active"),
                    o.find(".active").removeClass("active")) : i = setTimeout(function() {
                        n.find(".active").removeClass("active"),
                        o.removeClass("active"),
                        o.find(".active").removeClass("active")
                    }, 250)
                }
                var i, n = e.find(".main-menu-nav"), o = e.find("#sub-nav");
                n.on("mouseenter", "li", function(e) {
                    if (null != e.target.getAttribute("data-subnav")) {
                        var i = $(e.target)
                          , n = $("#" + i.data("subnav"));
                        n.length && (a(!0),
                        t(i, n))
                    }
                }),
                n.on("mouseleave", "li", a),
                o.on("mouseenter", function() {
                    clearTimeout(i)
                }),
                o.on("mouseleave", a)
            }
        }
    }),
    $(".J_BuyGhwy").length > 0) {
        var isclose = !0
          , $dom = $("#J_GhwyRuleBox")
          , timer = null;
        $(".J_BuyGhwy").mouseover(function() {
            isclose = !1,
            clearInterval(timer);
            var e = $(this)
              , t = $(this).offset().left
              , a = $(this).offset().top + $(this).outerHeight();
            e.data("left") && (t += e.data("left")),
            e.data("top") && (a += e.data("top")),
            $dom.css({
                left: t,
                top: a
            }),
            e.data("row") && $dom.find("i").addClass(e.data("row")),
            $dom.show()
        }),
        $(".J_BuyGhwy").mouseout(function(e) {
            timer = setInterval(function() {
                isclose || ($dom.hide(),
                isclose = !0)
            }, 50)
        }),
        $dom.mouseover(function() {
            isclose = !0,
            $dom.show()
        }),
        $dom.mouseout(function() {
            isclose = !0,
            $dom.hide()
        })
    }
    document.domain.indexOf("jklj") > -1 && $("#g-breadcrumb").find("a").each(function() {
        "首页" == $(this).text() && $(this).attr("href", $GC.jkljServer)
    }),
    function() {
        $(".J_BottomInnerModule").length && $(".J_BottomInnerModuleLink").length && ($(".J_BottomInnerModuleLink").each(function() {
            if (!$(this).hasClass("hide")) {
                var e = $(this).height();
                e > 35 && $(this).next().show()
            }
        }),
        $(".J_BottomInnerModuleTab").on("click", "a", function() {
            var e = $(".J_BottomInnerModuleContent .module-content[data-tab=" + $(this).attr("data-tab") + "]");
            $(this).addClass("selected").siblings().removeClass("selected"),
            e.show().siblings().hide();
            var t = e.find(".J_BottomInnerModuleLink").height();
            return t > 35 && e.find(".J_BottomInnerModuleToggle").show(),
            !1
        }),
        $(".J_BottomInnerModuleToggle").on("click", function() {
            $(this).toggleClass("down"),
            $(this).hasClass("down") ? ($(this).parent().addClass("open"),
            $(this).find("span").text("收起")) : ($(this).parent().removeClass("open"),
            $(this).find("span").text("展开"))
        }))
    }()
}, [GH.modules.autocomplete, GH.modules.bxslider, GH.modules.fastMenu, GH.modules.json2]);
