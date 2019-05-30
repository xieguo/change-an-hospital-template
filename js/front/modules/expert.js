GH.run(function() {
    "use strict";
    var e = $GW.expertHospitalCommon2015()
      , t = location.href.indexOf("jwy") > -1;
    t && (window.postMessage && window.parent.postMessage($("html").height(), "*"),
    $("#g-breadcrumb").css("width", "100%"),
    $("body").css({
        "background-color": "#fff"
    }),
    $("#gc").addClass("jwy-gc-height")),
    e.rate($("#expert-rate"));
    GH.dispatcher(".expert-card", function(a) {
        return {
            init: function() {
                this.initScroll("#service a"),
                this.initMark(),
                this.initShowIntro()
            },
            initScroll: function(e) {
                var t = this
                  , i = window.location.href;
                if (i.indexOf("#") > -1) {
                    var a = i.split("#")[1];
                    setTimeout(function() {
                        t.scrollTo(".J_T" + a)
                    }, 1e3)
                }
                $(e).on("click", function() {
                    var e = $(this).data("scroll-target");
                    t.scrollTo(e)
                })
            },
            scrollTo: function(e) {
                var i = $.extend({}, $(e).offset(), {
                    width: $(e).width(),
                    height: $(e).height()
                })
                  , a = {
                    width: $(window).width(),
                    height: $(window).height()
                };
                $("html,body").animate({
                    scrollTop: i.height / 2 + i.top - a.height / 2,
                    scrollLeft: i.left
                }, 550, function() {
                    if (this === $("html")[0]) {
                        var n = $(e)[0].getBoundingClientRect()
                          , s = []
                          , r = t ? $(document).scrollTop() : i.height / 2 + i.top - a.height / 2
                          , o = "<div style='z-index: 3;position: absolute;background: rgba(255, 255, 255, 0.75);opacity: 0;'>"
                          , l = "2px solid #a5d3ff";
                        s.push($(o).css({
                            left: 0,
                            top: r,
                            width: n.left,
                            height: n.top
                        }).appendTo("body")),
                        s.push($(o).css({
                            left: n.left,
                            top: r,
                            width: n.right - n.left,
                            height: n.top,
                            "border-bottom": l
                        }).addClass("animation-flicker").appendTo("body")),
                        s.push($(o).css({
                            left: n.right,
                            top: r,
                            right: 0,
                            height: n.top
                        }).appendTo("body")),
                        s.push($(o).css({
                            left: n.right,
                            top: n.top + r,
                            right: 0,
                            height: n.bottom - n.top,
                            "border-left": l
                        }).addClass("animation-flicker").appendTo("body")),
                        s.push($(o).css({
                            left: n.right,
                            right: 0,
                            top: n.bottom + r,
                            bottom: 0
                        }).addClass("animation-flicker").appendTo("body")),
                        s.push($(o).css({
                            left: n.left,
                            top: n.bottom - 1 + r,
                            width: n.right - n.left,
                            bottom: 0,
                            "border-top": l
                        }).addClass("animation-flicker").appendTo("body")),
                        s.push($(o).css({
                            left: 0,
                            top: n.bottom + r,
                            bottom: 0,
                            width: n.left
                        }).addClass("animation-flicker").appendTo("body")),
                        s.push($(o).css({
                            left: 0,
                            top: n.top + r,
                            width: n.left,
                            height: n.bottom - n.top,
                            "border-right": l
                        }).addClass("animation-flicker").appendTo("body")),
                        $.each(s, function(t, i) {
                            var a = 600
                              , n = 1200
                              , s = $("section:not(" + e + ")");
                            i.css({
                                transition: "opacity " + a + "ms linear"
                            }),
                            setTimeout(function() {
                                i.css({
                                    opacity: 1
                                })
                            }, 10),
                            setTimeout(function() {
                                s.css({
                                    "-webkit-filter": "blur(1px)"
                                })
                            }, 300),
                            setTimeout(function() {
                                i.css({
                                    opacity: 0
                                })
                            }, n),
                            setTimeout(function() {
                                s.css({
                                    "-webkit-filter": ""
                                })
                            }, n + a - 300),
                            setTimeout(function() {
                                i.remove()
                            }, n + a)
                        })
                    }
                })
            },
            initMark: function() {
                a.find("#card-mark").click(e.active(function(e) {
                    var t = $(this).next()[0];
                    "active" === e ? (this.innerHTML = "已关注",
                    t.innerHTML = 1 * t.innerHTML + 1) : (this.innerHTML = "<i></i>关注",
                    t.innerHTML = Math.max(0, 1 * t.innerHTML - 1))
                }))
            },
            initShowIntro: function() {
                a.find(".J_MorePre").on("click", function() {
                    setTimeout(function() {
                        a.find(".more-description").last().addClass("show-pre")
                    })
                })
            }
        }
    }),
    GH.dispatcher(".aside-article", function(e) {
        return {
            init: function() {
                e.find(".J_articleItem").hover(function() {
                    $(this).find("dt").addClass("on"),
                    $(this).find("dd").show()
                }, function() {
                    $(this).find("dt").removeClass("on"),
                    $(this).find("dd").hide()
                })
            }
        }
    })
}, [GH.modules.validator]);

// [GH.modules.bxslider, GH.modules.swfupload, GH.modules.validator, GH.modules.iframeUpload, GH.modules.placeholder, GH.modules.datepicker, GH.modules.datehelper, GH.modules.qrGenerator]);