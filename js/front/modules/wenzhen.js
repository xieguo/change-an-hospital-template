GH.run(function() {
    $.fn.asyncTabs = function(t) {
        var e = this
          , n = {}
          , i = {
            tabs: ".J_Nav",
            tabChild: "li",
            contentCtn: ".J_ContentContainer",
            onCls: "on",
            event: "mouseenter",
            hasAllDept: !1,
            loadHtml: function(t, n, a, o) {
                if (!t.data("loading")) {
                    var d = n.data("id");
                    return t.data("loading", !0),
                    t.append('<div class="loading"></div>'),
                    o[d] ? (a(o[d]),
                    t.data("loading", !1),
                    void t.find(".loading").remove()) : void $.ajax({
                        type: "get",
                        dataType: "html",
                        cache: !1,
                        url: i.getAjaxUrl(e, n),
                        success: function(e) {
                            o[d] = e,
                            a(e),
                            t.data("loading", !1),
                            t.find(".loading").remove()
                        },
                        error: function() {
                            t.data("loading", !1),
                            t.find(".loading").remove()
                        }
                    })
                }
            },
            getAjaxUrl: function(t, e) {
                return t.data("tab-url") + e.data("id")
            },
            afterRender: function() {}
        };
        return $.extend(i, t),
        this.each(function() {
            var t = $(this)
              , e = t.find(i.tabs)
              , a = e.find(i.tabChild)
              , o = t.find(i.contentCtn);
            e.find(i.tabChild).each(function() {
                $(this).width($(this).width())
            }),
            a.splice(a.length - 1, +i.hasAllDept),
            a.on(i.event, function() {
                return !$(this).hasClass(i.onCls) && (a.removeClass(i.onCls),
                $(this).addClass(i.onCls),
                o.empty(),
                i.loadHtml(o, $(this), function(t) {
                    if (i.hasAllDept)
                        o.empty(),
                        t.appendTo(i.contentCtn),
                        i.afterRender(t);
                    else {
                        if (t.indexOf("DOCTYPE") > -1)
                            return;
                        o.empty().append(t),
                        i.afterRender(t)
                    }
                }, n, i),
                !1)
            })
        })
    }
    ,
    GH.dispatcher(".doc-main", function(t) {
        return {
            init: function() {
                t.find(".J_RefreshCaptcha").click(function() {
                    return $(".J_Captcha").find("img").attr("src", "/validcode/genimage/" + Math.floor(1e7 * Math.random())),
                    !1
                }),
                $(".J_text").niceScroll({
                    cursorcolor: "#377BEF",
                    cursoropacitymin: .1
                });
                var e = $(".doc-t1").text()
                  , n = e.substr(0, e.length - 9)
                  , i = $(".form");
                i.validator({
                    formEvent: "null"
                }),
                $(".submit").click(function() {
                    i.data("validator").checkValidity() && $.ajax({
                        url: "/wenzhen/askresult",
                        type: "POST",
                        dataType: "json",
                        data: {
                            captcha: $("#captcha").val(),
                            patientName: $(".patientName").val(),
                            mobile: $(".mobile").val(),
                            diseaseDescription: $(".requirement").val(),
                            expert: n
                        }
                    }).done(function(t) {
                        "1" === t ? ($(".submit1").click(),
                        $(":input").val("")) : "0" === t ? alert("验证码错误！") : alert("提交失败！")
                    }).fail(function() {
                        alert("提交失败！")
                    })
                })
            }
        }
    }),
    GH.dispatcher(".J_AdvancedIndex", function() {
        return {
            init: function() {
                var t = $(".J_Banner");
                t && t.children().size() > 1 && t.bxSlider({
                    pager: !0,
                    auto: !0,
                    maxSlides: 1,
                    moveSlides: 1,
                    infiniteLoop: !0,
                    autoHover: !0,
                    slideWidth: t.width(),
                    pause: 5e3,
                    controls: !1
                });
                var e = $(".J_Gallery");
                e && e.children().size() > 1 && e.bxSlider({
                    pager: !0,
                    auto: !0,
                    maxSlides: 4,
                    moveSlides: 1,
                    infiniteLoop: !0,
                    autoHover: !0,
                    slideWidth: $(".J_GalleryItem", e).width(),
                    pause: 5e3,
                    controls: !1
                })
            }
        }
    }),
    GH.dispatcher(".internet-top", function() {
        return {
            init: function() {
                $(".J_title").bxSlider({
                    pager: !0,
                    auto: !0,
                    maxSlides: 1,
                    moveSlides: 1,
                    infiniteLoop: !0,
                    autoHover: !0,
                    pause: 5e3,
                    controls: !1
                }).show(function() {
                    $(".bx-pager-link").text("")
                })
            }
        }
    }),
    GH.dispatcher(".J_ConsultSearch", function(t) {
        return {
            init: function() {
                var t = $(".J_FreeConsult")
                  , e = t.find(".consult-txt")
                  , n = t.find(".consult-input");
                n.val(""),
                e.on("click", function() {
                    $(this).hide(),
                    n.focus()
                }),
                n.on("blur", function() {
                    this.value || e.show()
                }),
                t.find(".consult-btn").on("click", function() {
                    var e = n.val();
                    $TK.click("ask,search,freeask", {
                        search_q: e
                    }),
                    t.submit()
                })
            }
        }
    }),
    GH.dispatcher(".J_ExpertList", function(t) {
        return {
            init: function() {
                var e = this;
                t.asyncTabs({
                    hasAllDept: !0,
                    contentCtn: ".J_ContentContainer_Doctor",
                    loadHtml: function(t, n, i, a, o) {
                        if (!t.data("loading")) {
                            var d = n.data("id");
                            return t.data("loading", !0),
                            t.append('<div class="loading"></div>'),
                            a[d] ? (i(a[d]),
                            t.data("loading", !1),
                            void t.find(".loading").remove()) : void $.ajax({
                                type: "get",
                                dataType: "json",
                                cache: !1,
                                url: o.getAjaxUrl($(".J_ExpertList"), n),
                                success: function(n) {
                                    var o = e.getHtmlTemplate(n);
                                    a[d] = o,
                                    i(o),
                                    $(".J_moreDoctor").click(function() {
                                        location.href = $(this).attr("href")
                                    }),
                                    t.data("loading", !1),
                                    t.find(".loading").remove()
                                },
                                error: function() {
                                    t.data("loading", !1),
                                    t.find(".loading").remove()
                                }
                            })
                        }
                    },
                    getAjaxUrl: function(t, e) {
                        return t.data("tab-new-url") + "?deptId=" + e.data("id")
                    },
                    afterRender: function(t) {
                        e.setMoreHref()
                    }
                }),
                0 === t.find(".J_Nav li").length ? (t.find(".loading").remove(),
                $(".J_ContentContainer").html('<div class="noresults"><img src="' + $GC.guahaoServer + '/images/noapply.png"><p>暂无记录</p></div>')) : t.find(".J_Nav li:first").trigger("mouseenter"),
                e.deptInit()
            },
            deptInit: function() {
                var t = [{
                    deptName: "内科",
                    deptId: "61409",
                    deptImgSrc: $GC.guahaoServer + "/images/departments/neike.png"
                }, {
                    deptName: "外科",
                    deptId: "61410",
                    deptImgSrc: $GC.guahaoServer + "/images/departments/waike.png"
                }, {
                    deptName: "妇产科",
                    deptId: "61411",
                    deptImgSrc: $GC.guahaoServer + "/images/departments/fuchanke.png"
                }, {
                    deptName: "儿科",
                    deptId: "61412",
                    deptImgSrc: $GC.guahaoServer + "/images/departments/erke.png"
                }, {
                    deptName: "皮肤科",
                    deptId: "61413",
                    deptImgSrc: $GC.guahaoServer + "/images/departments/pifuke.png"
                }, {
                    deptName: "耳鼻咽喉科",
                    deptId: "61414",
                    deptImgSrc: $GC.guahaoServer + "/images/departments/erbiyanhouke.png"
                }, {
                    deptName: "眼科",
                    deptId: "61415",
                    deptImgSrc: $GC.guahaoServer + "/images/departments/yanke.png"
                }, {
                    deptName: "口腔科",
                    deptId: "61416",
                    deptImgSrc: $GC.guahaoServer + "/images/departments/kouqiangke.png"
                }, {
                    deptName: "全科医疗科",
                    deptId: "61417",
                    deptImgSrc: $GC.guahaoServer + "/images/departments/quankeyiliaoke.png"
                }, {
                    deptName: "急诊医学科",
                    deptId: "61418",
                    deptImgSrc: $GC.guahaoServer + "/images/departments/jizhenyixueke.png"
                }, {
                    deptName: "精神科",
                    deptId: "61419",
                    deptImgSrc: $GC.guahaoServer + "/images/departments/jingshenke.png"
                }, {
                    deptName: "中医科",
                    deptId: "61420",
                    deptImgSrc: $GC.guahaoServer + "/images/departments/zhongyike.png"
                }, {
                    deptName: "中西医结合科",
                    deptId: "61421",
                    deptImgSrc: $GC.guahaoServer + "/images/departments/zhongxijieheke.png"
                }, {
                    deptName: "肿瘤科",
                    deptId: "61422",
                    deptImgSrc: $GC.guahaoServer + "/images/departments/zhongliuke.png"
                }, {
                    deptName: "医学检验科",
                    deptId: "61423",
                    deptImgSrc: $GC.guahaoServer + "/images/departments/yixuejianyanke.png"
                }, {
                    deptName: "医学影像科",
                    deptId: "61424",
                    deptImgSrc: $GC.guahaoServer + "/images/departments/yixueyingxiangke.png"
                }]
                  , e = "";
                t.forEach(function(t) {
                    e += '<li class="item"><a href="' + $GC.guahaoServer + "/expert/" + t.deptId + "/" + encodeURIComponent(t.deptName) + '" monitor="ask,div,div"><i class="icon" style="background-image: url(' + t.deptImgSrc + ')"></i><p class="name">' + t.deptName + "</p></a></li>"
                }),
                $(e).prependTo(".J_deptList")
            },
            getHtmlTemplate: function(t) {
                return $("#J_quickInquiry").tmpl({
                    doctorList: t.data
                })
            },
            setMoreHref: function() {
                var t = $(".J_ExpertList li.on")
                  , e = t.data("id")
                  , n = t.find("a").text()
                  , i = $(".J_moreDoctor a").data("value")
                  , a = "/" + e + "/" + n;
                $(".J_moreDoctor").attr("href", i + a)
            },
            initDoctorSlider: function() {
                $(".J_DoctorList").bxSlider({
                    pager: !1,
                    nextText: "",
                    prevText: "",
                    infiniteLoop: $(".J_DoctorList ul").length > 1,
                    pause: 5e3,
                    auto: !0,
                    autoHover: !0,
                    controls: $(".J_DoctorList ul").length > 1
                })
            }
        }
    }),
    GH.dispatcher(".J_ConsultList", function(t) {
        return {
            init: function() {
                this.loadDisease()
            },
            clickShowMore: function() {
                $(".J_ShowMore").on("click", function() {
                    var t = $(this).text();
                    $(this).html(t.indexOf("展开") > -1 ? '收起<i class="open"></i>' : "展开<i></i>"),
                    $(".J_DiseaseList .J_DisNav.on").toggleClass("hidden")
                })
            },
            showMore: function() {
                var t = $(".J_DiseaseList .J_DisNav.on")
                  , e = t.height();
                e > 38 && t.addClass("hidden"),
                t.hasClass("hidden") ? ($(".J_ShowMore").show(),
                $(".J_ShowMore").text("展开")) : $(".J_ShowMore").hide()
            },
            initConsultToggle: function() {
                $(".J_ConsultShow li").on("mouseenter", function() {
                    $(this).siblings().find(".answer").hide(),
                    $(this).find(".answer").show()
                }),
                $(".J_ConsultShow .answer:first").show()
            },
            initDiseaseListToggle: function(t) {
                if (t) {
                    var e = ".J_DisNav[data-id=" + t + "]";
                    $(e) && ($(e).addClass("on"),
                    $(e).siblings().removeClass("on"),
                    $(e).find("li").eq(0).addClass("on"),
                    $(e).find("li").eq(0).siblings().removeClass("on"),
                    this.showMore(),
                    this.loadHtml($(".J_DisContainer"), $(e).find("li").eq(0)))
                }
            },
            loadHtml: function(e, n) {
                if (!e.data("loading")) {
                    var i = this;
                    n.data("id");
                    e.data("loading", !0),
                    e.append('<div class="loading"></div>'),
                    $.ajax({
                        type: "get",
                        dataType: "html",
                        cache: !1,
                        url: t.data("nav-url") + "?q=" + encodeURIComponent(n.text()),
                        success: function(t) {
                            e.data("loading", !1),
                            e.find(".loading").remove(),
                            e.html(t),
                            i.initConsultToggle()
                        },
                        error: function() {
                            e.data("loading", !1),
                            e.find(".loading").remove(),
                            e.html('<div class="noresults"><img src="' + $GC.guahaoServer + '/images/noapply.png"><p>暂无记录</p></div>')
                        }
                    })
                }
            },
            loadDisease: function() {
                if (0 === t.find(".J_Nav li").length)
                    return t.find(".loading").remove(),
                    void $(".J_DisContainer").html('<div class="noresults"><img src="' + $GC.guahaoServer + '/images/noapply.png"><p>暂无记录</p></div>');
                var e = this;
                e.clickShowMore(),
                e.loadAnswer(),
                t.find(".J_Nav li").on("mouseenter", function() {
                    if (!$(this).hasClass("on")) {
                        var t = $(this).data("id");
                        $(this).siblings().removeClass("on"),
                        $(this).addClass("on"),
                        $TK.click("ask,individuation_ask,sick", {
                            sick_id: t
                        }),
                        e.initDiseaseListToggle(t)
                    }
                }),
                t.find(".J_Nav:first li:first").trigger("mouseenter")
            },
            loadAnswer: function() {
                var e = this;
                t.asyncTabs({
                    tabs: ".J_DisNav",
                    contentCtn: ".J_DisContainer",
                    getAjaxUrl: function(t, e) {
                        return $TK.click("ask,individuation_ask,sick", {
                            tag_id: e.data("id")
                        }),
                        t.data("nav-url") + "?q=" + encodeURIComponent(e.text())
                    },
                    afterRender: function() {
                        e.initConsultToggle()
                    }
                }),
                t.find(".J_DisNav li:first").trigger("mouseenter")
            }
        }
    })
}, [GH.modules.bxslider, GH.modules.nicescroll, GH.modules.jqtmpl]);
