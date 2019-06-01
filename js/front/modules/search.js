/*! portal-pc-static - git - 2019-05-29 10:53:06 */
GH.run(function() {
    $GW.expertHospitalCommon2015();
    $(".J_NoticeTxt").length && $GD.load({
        title: $(".J_NoticeKey").val() || "通知",
        extClass: "gm-notice-dialog",
        noCancelBtn: !0,
        okTxt: "我知道了",
        content: $(".J_NoticeTxt").html()
    });
    var i = $("#g-cfg")
      , t = $GC.isLogined
      , n = {
        run: function() {
            var t = this
              , e = i.data("page");
            e && (e = "_" + e,
            n[e] && $.isFunction(n[e]) && n[e].call(n)),
            t.init(),
            t.searchRad()
        },
        searchRad: function() {
            var i = [];
            if ($(".disease-box h2 a").length > 0)
                for (var t = 0; t < $(".disease-box h2 a").length; t++)
                    i.push($(".disease-box h2 a").eq(t).attr("href").split("disease/")[1]);
            var n = [];
            if ($(".J_hospitalItem dl dt a").length > 0)
                for (var t = 0; t < $(".J_hospitalItem dl dt a").length; t++)
                    n.push($(".J_hospitalItem dl dt a").eq(t).attr("href").split("/hospital/")[1]);
            var e = [];
            if ($(".g-doctor-items .g-doc-baseinfo>a").length > 0)
                for (var t = 0; t < $(".g-doctor-items .g-doc-baseinfo>a").length; t++)
                    e.push($(".g-doctor-items .g-doc-baseinfo>a").eq(t).attr("href").split("/expert/")[1]);
            var a = [];
            if ($(".g-consult-item .ask>a").length > 0)
                for (var t = 0; t < $(".g-consult-item .ask>a").length; t++)
                    a.push($(".g-consult-item .ask>a").eq(t).attr("href").split("/consult/detail/")[1]);
            var o = {
                sick_id: i,
                hosp_id: n,
                doctor_id: e,
                consult_id: a
            }
              , r = window.location.href;
            if (r.indexOf("searchType=") != -1)
                var d = r.substr(r.indexOf("searchType=") + 1).split("=")[1];
            else
                var d = null;
            var s = $('input[name="q"]').val();
            null != d && $TK.click("public_search,public_search,search_virtual_click", {
                searchType: d,
                search_q: s,
                search_result: o
            })
        },
        _colligate: function() {
            var t = this;
            t.initAreaFilter(),
            t.initTableHover(".J_ExpertList"),
            t.initTableHover(".J_HospitalList"),
            t.pjSlider(i.find("#J_JYShare"), 4),
            $GUM.info("hid:" + t.logIds(i.find("#J_HospitalList .img"), "hospital") + "~~eid:" + t.logIds(i.find("#J_ExpertList .img"), "expert") + "~~reid:" + t.logIds(i.find("#J_HospitalList_Rec .img"), "expert"), "ZH_SHOW"),
            i.find(".dd-tips a.js-up").click(function() {
                $(this).parent().hide(),
                $(this).parent().parent().find(".less-content").show()
            }),
            i.find(".dd-tips a.js-down").click(function() {
                $(this).parent().hide(),
                $(this).parent().parent().find(".more-content").show()
            })
        },
        _colligateNew: function() {
            var i = this;
            i.initAreaFilter()
        },
        _eteamSearch: function() {
            var i = this;
            i.initAreaFilter()
        },
        _colligate_dis: function() {
            var t = this;
            t.initAreaFilter(),
            t.initTableHover(".J_ExpertList"),
            t.initTableHover(".J_HospitalList");
            var n = i.find("#J_Banner");
            n.find("li").length > 1 && (n.find("ul").bxSlider({
                auto: !0,
                infiniteLoop: !0,
                autoHover: !0,
                pager: !1,
                pause: 4e3
            }),
            n.mouseenter(function() {
                n.find(".bx-controls-direction").show()
            }).mouseleave(function() {
                n.find(".bx-controls-direction").hide()
            }));
            var e = i.find("#J_QAList");
            e.find("dl dt").mouseenter(function() {
                e.find(".js-show").hide(),
                e.find("dd").hide(),
                e.find(".answered").show(),
                $(this).find(".js-show").show(),
                $(this).next("dd").show(),
                $(this).find(".answered").hide()
            }),
            i.find("#J_TipLinks").glTabs({
                content: "p",
                event: "mouseenter"
            }),
            t.pjSlider(i.find("#J_JYShare"), 6),
            $GUM.info("hid:" + t.logIds(i.find("#J_HospitalList .img"), "hospital") + "~~eid:" + t.logIds(i.find("#J_ExpertList .img"), "expert") + "~~reid:" + t.logIds(i.find("#J_HospitalList_Rec .img"), "expert"), "ZH_SHOW")
        },
        _expert_embed: function() {
            var t = this;
            t.initFilter(),
            t.initSche(),
            t.expertFns(),
            t.showDialog($(".gp-ght-depart .introduce-word")),
            t.showDialog($(".gp-ght-depart .g-hdintro-content")),
            t.showDialog($(".gp-ght-hosp .introduce-word")),
            t.showDialog($(".gp-ght-hosp .introduce-ads")),
            t.showDialog($(".gp-ght-hosp .introduce-tel")),
            t.showDialog($(".gp-ght-hosp .g-hdintro-content"));
            var n = i.find(".filter")
              , e = n.find("form");
            $(".gp-ght-hosp .ght-right-content").find("a[data-handledept='submit']").click(function() {
                return e.find("input[name='" + $(this).attr("name") + "']").val($(this).data("val")),
                e.submit(),
                !1
            })
        },
        _expert_in: function() {
            var i = this;
            i.initAreaFilter(),
            i.initFilter(),
            i.initIndeptSche(),
            i.expertFns(),
            i.initTableHover(".J_DoctorList")
        },
        _deptztc: function() {
            var i = this;
            i.initAreaFilter(),
            i.initFilter(),
            i.initIndeptSche(),
            i.expertFns(),
            i.initTableHover(".J_DoctorList")
        },
        _expert_v1: function() {
            var i = this;
            i.initAreaFilter(),
            i.initFilter(),
            i.expertFns()
        },
        _expert_vip: function() {
            var i = this;
            i.initAreaFilter(),
            i.initFilter(),
            i.initVipSche(),
            i.expertFns(),
            i.initTableHover(".J_DoctorList")
        },
        expertFns: function() {
            var t = this;
            $GUM.info("eid:" + t.logIds(i.find("#J_ExpertList .img"), "expert") + "~~rid:" + t.logIds(i.find("#J_ExpertList_Rec .img"), "expert") + "~~count:" + $.trim(i.find("#J_ResultNum").text()), "DOC_SHOW")
        },
        _hospital: function() {
            var i = this;
            i.initAreaFilter(),
            i.initFilter(),
            i.hospitalFns(),
            i.initTableHover(".J_HospitalList")
        },
        _hospital_embed: function() {
            var i = this;
            i.initFilter(),
            i.hospitalFns()
        },
        hospitalFns: function() {
            var t = this;
            $GUM.info("hid:" + t.logIds(i.find("#J_HospitalList .img"), "hospital") + "~~rid:" + t.logIds(i.find("#J_HospitalList_Rec .img"), "hospital") + "~~count:" + $.trim(i.find("#J_ResultNum").text()), "HPT_SHOW")
        },
        init: function() {
            $(".J_yyhospitalName").each(function() {
                $(this).text($(this).text().split(",")[0])
            });
            var t = $("#J_Jkdjt");
            t.length > 0 && t.find(".jk-li").length > 1 && t.bxSlider({
                auto: !0,
                infiniteLoop: !0,
                autoHover: !0,
                pager: !1,
                pause: 4e3
            }),
            i.hasClass("gp-search-new") && ($("body").css("min-width", "1200px"),
            $(".g-hospital-items").length > 0 && ($(".gp-search-new").css({
                "margin-bottom": 0
            }),
            $(".g-grid2-l").css({
                height: $(".g-grid2-l").height() + 5
            }),
            $.each($(".g-hospital-item .info dl dt .a"), function() {
                $(this).html($GU.truncate($.trim($(this).html()), 24))
            })),
            $(".hos-total").eq(0).css({
                border: "none"
            }),
            i.find(".J_articleItem").hover(function() {
                $(this).find("dt").addClass("on"),
                $(this).find("dd").show()
            }, function() {
                $(this).find("dt").removeClass("on"),
                $(this).find("dd").hide()
            }))
        },
        pjSlider: function(i, t) {
            i.find("ul li").length > t && i.find("ul").bxSlider({
                mode: "vertical",
                minSlides: t,
                maxSlides: t,
                moveSlides: 1,
                slideMargin: 10,
                pager: !1,
                auto: !0,
                nextText: "",
                prevText: "",
                infiniteLoop: !0,
                adaptiveHeight: !0,
                autoHover: !0,
                autoDirection: "prev",
                pause: 3e3
            })
        },
        showDialog: function(i) {
            i.find(".g-more").click(function() {
                return i.find(".more-box").show(),
                !1
            }),
            i.find(".more-up").click(function() {
                return i.find(".more-box").hide(),
                !1
            }),
            $(document).click(function(t) {
                return $(t.target).hasClass("more-box") || $(t.target).parents(".more-box").length > 0 || i.find(".more-box").hide(),
                !0
            })
        },
        logIds: function(i, t) {
            var n = ""
              , e = t.length + 1;
            return i.each(function(i) {
                var a = $(this).attr("href")
                  , o = a.indexOf(t) + e;
                end = a.indexOf("?"),
                end < 0 && (end = a.length),
                i > 0 && (n += "|"),
                n += a.substring(o, end)
            }),
            n
        },
        initTableHover: function(t) {
            var n = i.find(t);
            n && n.length > 0 && n.find(".J_ListItem").mouseenter(function(i) {
                n.find(".J_ListItem").removeClass("hover"),
                $(this).addClass("hover")
            }).mouseleave(function() {
                $(this).removeClass("hover")
            })
        },
        SeoUrlCombination: function(i, t) {
            if (i.find("input[name=isSeoHospital]").val()) {
                var n = i.find("input[name=pi]").val() || "default"
                  , e = i.find("input[name=p]").val() || "default"
                  , a = i.find("input[name=ci]").val() || "default"
                  , o = i.find("input[name=c]").val() || "default"
                  , r = i.find("input[name=o]").val() || "default"
                  , d = i.find("input[name=hl]").val() || "default"
                  , s = i.find("input[name=ht]").val() || "default"
                  , l = i.find("input[name=hk]").val() || "default"
                  , c = i.find("input[name=fg]").val() || "default"
                  , f = i.find("input[name=ipIsShanghai]").val() || "default"
                  , h = i.find("input[name=sort]").val() || "default"
                  , p = [];
                p = t ? [n, e, a, o] : [n, e, a, o, r, d, s, l, c, f, h],
                i.attr("method", "post"),
                i.attr("action", $GC.guahaoServer + "/hospital/" + p.join("/"))
            }
        },
        SeoUrlAreaClick: function(i) {
            if (i.find("input[name='isStaticUrl']").val() && i.find("input[name='isDiseaseUrl']").val()) {
                var t = i.find("input[name='staticUrl']").val()
                  , n = i.find("input[name=pi]").val() || "default"
                  , e = i.find("input[name=p]").val() || "default"
                  , a = i.find("input[name=ci]").val() || "default"
                  , o = i.find("input[name=c]").val() || "default"
                  , r = [n, e, a, o];
                i.attr("method", "post"),
                i.attr("action", $GC.guahaoServer + t + "/" + r.join("/"))
            }
        },
        SeoUrlDoctorList: function(i) {
            if (i.find("input[name='isStaticUrl']").val() && i.find("input[name='isExpertUrl']").val()) {
                var t = i.attr("action").split("/")
                  , n = i.find("input[name=standardDepartmentName]").val()
                  , e = i.find("input[name=standardDepartmentId]").val()
                  , a = i.find("input[name=pi]").val();
                if ("all" == a) {
                    if (!n || !e) {
                        var o = i.find("input[name=p]").val()
                          , r = i.find("input[name=ci]").val()
                          , d = i.find("input[name=c]").val();
                        return t = $GC.guahaoServer + "/expert/" + a + "/" + o + "/" + r + "/" + d,
                        i.attr("method", "post"),
                        void i.attr("action", t)
                    }
                    return t = $GC.guahaoServer + "/expert/" + e + "/" + n,
                    i.attr("method", "post"),
                    void i.attr("action", t)
                }
                if (!n || !e) {
                    var o = i.find("input[name=p]").val()
                      , r = i.find("input[name=ci]").val()
                      , d = i.find("input[name=c]").val();
                    return t = $GC.guahaoServer + "/expert/" + a + "/" + o + "/" + r + "/" + d,
                    i.attr("method", "post"),
                    void i.attr("action", t)
                }
                t[t.length - 1] = n,
                t[t.length - 2] = e,
                t = t.join("/"),
                i.attr("method", "post"),
                i.attr("action", t)
            }
        },
        initFilter: function() {
            var t = this;
            if (i.find(".J_Filter").length > 0)
                var n = i.find(".J_Filter");
            else
                var n = i.find(".filter");
            var e = n.find("form")
              , a = i.find("#J_SelCondition");
            n.find(".J_Submit_A").click(function(i) {
                _this = $(this);
                var n = _this.attr("name")
                  , a = _this.attr("data-name");
                return e.find("input[name='" + n + "']").val(_this.data("val")),
                a && e.find("input[name='" + a + "']").val(_this.text()),
                t.SeoUrlCombination(e),
                t.SeoUrlAreaClick(e),
                t.SeoUrlDoctorList(e),
                e.submit(),
                !1
            }),
            n.find(".J_Submit").change(function(i) {
                var n = $(i.target);
                if (_this = $(this),
                n.is("input"))
                    switch (n.attr("type")) {
                    case "text":
                        setTimeout(function() {
                            _this.hasClass("J_Date") && e.find("input[name='es']").val(1),
                            t.SeoUrlCombination(e),
                            t.SeoUrlAreaClick(e),
                            t.SeoUrlDoctorList(e),
                            e.submit()
                        }, 30);
                        break;
                    case "checkbox":
                        e.find("input[name='" + _this.data("name") + "']").val(_this.is(":checked") ? "1" : "all"),
                        t.SeoUrlCombination(e),
                        t.SeoUrlAreaClick(e),
                        t.SeoUrlDoctorList(e),
                        e.submit()
                    }
                else
                    n.is("select") && (t.SeoUrlCombination(e),
                    t.SeoUrlAreaClick(e),
                    t.SeoUrlDoctorList(e),
                    e.submit());
                return !1
            }),
            n.find(".J_Date").datepicker({
                minDate: "+1",
                maxDate: "+28",
                showUnlimited: !0,
                showOn: "both",
                buttonImageOnly: !0
            }),
            n.find(".J_DateRange").each(function() {
                var i = $(this)
                  , t = i.find(".J_DateF")
                  , n = i.find(".J_DateT");
                t.datepicker({
                    minDate: "+1",
                    showUnlimited: !0,
                    showOn: "both",
                    buttonImageOnly: !0,
                    maxDate: "不限" == n.val() ? null : n.val(),
                    onClose: function(i) {
                        "不限" != i && "不限" == n.val() && n.val(i)
                    }
                }),
                n.datepicker({
                    maxDate: "+28",
                    showUnlimited: !0,
                    showOn: "both",
                    buttonImageOnly: !0,
                    minDate: "不限" == t.val() ? null : t.val()
                })
            }),
            $("#J_Login").click(function() {
                $("#gh .login").trigger("click")
            }),
            n.find(".g-citypicker").glCitypicker({
                plinkCallback: function(i) {
                    if (e.find("input[name='pi']").val(i.data("val")),
                    $.cookie("pa", i.data("val"), {
                        expires: 1,
                        path: "/",
                        domain: "www.guahao.com"
                    }),
                    this.hasCityPicker()) {
                        var t = this.getCityFlyout().find("a:eq(0)");
                        this.getCityInput().val(t.text()),
                        e.find("input[name='ci']").val(t.data("val")),
                        $.cookie("ca", t.data("val"), {
                            expires: 1,
                            path: "/",
                            domain: "www.guahao.com"
                        })
                    }
                    $GUM.link(e.attr("action") + "?" + e.serialize(), "SXSF"),
                    e.submit()
                },
                clinkCallback: function(i) {
                    var t = e.find("input[name='pi']").val();
                    $.cookie("pa", t, {
                        expires: 1,
                        path: "/",
                        domain: "www.guahao.com"
                    }),
                    $.cookie("ca", i.data("val"), {
                        expires: 1,
                        path: "/",
                        domain: "www.guahao.com"
                    }),
                    e.find("input[name='ci']").val(i.data("val")),
                    $GUM.link(e.attr("action") + "?" + e.serialize(), "SXCS"),
                    e.submit()
                }
            }),
            a.delegate(".J_DelCondition", "click", function(i) {
                var n = $(i.target).hasClass("J_DelCondition") ? $(i.target) : $(i.target).parents(".J_DelCondition")
                  , a = $(this).attr("data-name");
                return e.find("input[name='" + n.attr("name") + "']").val("all"),
                null != n.data("type") && "consult" == n.data("type") && (e.find("input[name='imagetext']").val(""),
                e.find("input[name='phone']").val(""),
                e.find("input[name='diagnosis']").val("")),
                a && e.find("input[name='" + a + "']").val(""),
                t.SeoUrlCombination(e),
                t.SeoUrlAreaClick(e),
                t.SeoUrlDoctorList(e),
                e.submit(),
                !1
            }),
            n.find(".J_More").click(function(i) {
                var t = $(i.target);
                return t.prop("isExpand") && "off" == t.prop("isExpand") ? t.text("展开").prop("isExpand", "on").parents(".J_CT").removeClass("condition-expand").addClass("condition-collapse") : t.text("收起").prop("isExpand", "off").parents(".J_CT").removeClass("condition-collapse").addClass("condition-expand"),
                !1
            }),
            n.find("#J_ShowMore") && n.find("#J_ShowMore").length > 0 && n.find("#J_ShowMore .attr-extra").click(function(i) {
                n.find(".condition").show(),
                n.find("#J_ShowMore").hide(),
                n.find("#J_HideMore").show()
            }),
            n.find("#J_HideMore") && n.find("#J_HideMore").length > 0 && n.find("#J_HideMore .attr-extra").click(function(i) {
                n.find(".J_EnableCollapse").hide(),
                n.find("#J_HideMore").hide(),
                n.find("#J_ShowMore").show()
            })
        },
        initAreaFilter: function() {
            var t = this
              , n = i.find(".J_AreaFilter")
              , e = i.find(".J_Filter")
              , a = e.find("form")
              , o = n.find(".J_Area")
              , r = o.attr("json-url")
              , d = o.attr("hide-province")
              , s = this
              , l = {};
            n.find(".J_Province") && n.find(".J_Province").attr("province-id") && (l.provinceId = n.find(".J_Province").attr("province-id")),
            n.find(".J_City") && n.find(".J_City").attr("city-id") && (l.cityId = n.find(".J_City").attr("city-id")),
            n.find(".J_Area").glAreapicker({
                plinkCallback: function(i) {
                    if (1 == i.data("nosub")) {
                        var n = {};
                        n.provinceId = i.attr("data-val") || "all",
                        n.provinceName = i.text() || "全国",
                        n.cityId = "all",
                        n.cityName = "不限",
                        s.clearFilterForm(a),
                        a.find("input[name='pi']").val(n.provinceId),
                        a.find("input[name='p']").val(n.provinceName),
                        a.find("input[name='ci']").val(n.cityId),
                        a.find("input[name='c']").val(n.cityName),
                        $.cookie("_area_", s.stringify(n), {
                            expires: 1,
                            path: "/"
                        }),
                        $GUM.link(a.attr("action") + "?" + a.serialize(), "SXCS"),
                        t.SeoUrlCombination(a, !0),
                        t.SeoUrlAreaClick(a),
                        a.submit()
                    } else
                        o.find(".J_CityLink[data-val='" + l.cityId + "']").addClass("on"),
                        o.find(".J_CityLink").attr("monitor", "search_allpg_city,search_allpg_city,city"),
                        o.find(".J_ProvinceContainer").hide(),
                        o.find(".J_CityContainer").show()
                },
                clinkCallback: function(i) {
                    var n = i.attr("data-val")
                      , e = i.attr("parent-id")
                      , o = {};
                    o.provinceId = e,
                    o.provinceName = i.attr("parent-name"),
                    o.cityId = n,
                    o.cityName = i.text(),
                    s.clearFilterForm(a),
                    a.find("input[name='pi']").val(e),
                    a.find("input[name='p']").val(o.provinceName),
                    a.find("input[name='ci']").val(n),
                    a.find("input[name='c']").val(o.cityName),
                    $.cookie("_area_", s.stringify(o), {
                        expires: 1,
                        path: "/"
                    }),
                    $GUM.link(a.attr("action") + "?" + a.serialize(), "SXCS"),
                    t.SeoUrlCombination(a, !0),
                    t.SeoUrlAreaClick(a),
                    a.submit()
                },
                dataUrl: r,
                selArea: l,
                hideProvince: d
            }),
            n.find(".J_AreaSwitch").click(function(i) {
                $GUM.action("SXCS"),
                l.cityId ? o.find(".J_HotCity a[city-id='" + l.cityId + "']").addClass("on") : o.find(".J_HotCity a[province-id='" + l.provinceId + "']").addClass("on"),
                o.find(".J_ProvinceLink[data-val='" + l.provinceId + "']").addClass("on"),
                o.find(".J_ProvinceLink").attr("monitor", "search_allpg_city,search_allpg_city,province"),
                GreenLine.Util.isIE6() || GreenLine.Util.isIE7() ? n.css("z-index", "3500") : o.css("z-index", "3500"),
                o.css("left", $(this).position().left + 15),
                o.show()
            }),
            n.find(".hot-city a").click(function(i) {
                i.preventDefault();
                var n = $(i.target)
                  , e = n.attr("city-id")
                  , o = n.attr("province-id")
                  , r = {};
                r.provinceId = o,
                s.clearFilterForm(a),
                e ? (r.cityId = e,
                r.cityName = n.text(),
                r.provinceName = n.attr("province-name"),
                a.find("input[name='ci']").val(e),
                a.find("input[name='c']").val(r.cityName)) : (r.provinceName = n.text(),
                a.find("input[name='ci']").val("all"),
                a.find("input[name='c']").val("不限")),
                a.find("input[name='pi']").val(o),
                a.find("input[name='p']").val(r.provinceName),
                $.cookie("_area_", s.stringify(r), {
                    expires: 1,
                    path: "/"
                }),
                $GUM.link(a.attr("action") + "?" + a.serialize(), "SXCS"),
                t.SeoUrlCombination(a, !0),
                t.SeoUrlAreaClick(a),
                a.submit()
            })
        },
        clearFilterForm: function(i) {
            i.find("input[name='hl']") && i.find("input[name='hl']").length > 0 && i.find("input[name='hl']").val("all"),
            i.find("input[name='ht']") && i.find("input[name='ht']").length > 0 && i.find("input[name='ht']").val("all"),
            i.find("input[name='hk']") && i.find("input[name='hk']").length > 0 && i.find("input[name='hk']").val(""),
            i.find("input[name='dt']") && i.find("input[name='dt']").length > 0 && i.find("input[name='dt']").val(""),
            i.find("input[name='dty']") && i.find("input[name='dty']").length > 0 && i.find("input[name='dty']").val(""),
            i.find("input[name='hdi']") && i.find("input[name='hdi']").length > 0 && i.find("input[name='hdi']").val(""),
            i.find("input[name='hospitalId']") && i.find("input[name='hospitalId']").length > 0 && i.find("input[name='hospitalId']").val(""),
            i.find("input[name='standardDepartmentId']") && i.find("input[name='standardDepartmentId']").length > 0 && i.find("input[name='standardDepartmentId']").val("")
        },
        stringify: function(i) {
            var t = typeof i;
            if ("object" != t || null === i)
                return "string" == t && (i = '"' + i + '"'),
                String(i);
            var n, e, a = [], o = i && i.constructor == Array;
            for (n in i)
                e = i[n],
                t = typeof e,
                i.hasOwnProperty(n) && ("string" == t ? e = '"' + e + '"' : "object" == t && null !== e && (e = jQuery.stringify(e)),
                a.push((o ? "" : '"' + n + '":') + String(e)));
            return (o ? "[" : "{") + String(a) + (o ? "]" : "}")
        },
        initSche: function() {
            function n(i, t) {
                t && (r.find(".gi-preward,.gi-nextward").show(),
                0 == i ? r.find(".gi-preward").hide() : i == t - 1 ? r.find(".gi-nextward").hide() : r.find(".gi-preward,.gi-nextward").show());
                var n = GL.DateH.addDays(GL.DateH.fromString(d, "yyyy-mm-dd"), 7 * i)
                  , e = GL.DateH.asString(n, "yyyy-mm-dd");
                r.find("span").removeClass("highlight").each(function() {
                    e == s && $(this).addClass("highlight"),
                    $(this).html(GL.DateH.asString(n, "mm/dd") + "<br/>" + GL.DateH.getDayName(n)),
                    e = GL.DateH.asString(GL.DateH.addDays(n, 1), "yyyy-mm-dd")
                })
            }
            function e() {
                if (s && "不限" !== s && "" !== s) {
                    var i = GL.DateH.fromString(s, "yyyy-mm-dd")
                      , t = GL.DateH.fromString(d, "yyyy-mm-dd");
                    iDays = parseInt(Math.abs(i - t) / 1e3 / 60 / 60 / 24),
                    l.goToSlide(parseInt(iDays / 7))
                }
                return !1
            }
            if (0 != $(".head-bar").length) {
                var a = i.find(".filter")
                  , o = i.find(".sche-list")
                  , r = i.find(".head-bar .date-navi")
                  , d = r.data("show") ? r.data("show") : (new Date).asString("yyyy-mm-dd")
                  , s = a.find("input[name='ed']").val()
                  , l = null;
                o.find("li").show().length > 1 ? (l = o.find("ul").bxSlider({
                    pager: !1,
                    infiniteLoop: !1
                }),
                l.bxSlider({
                    onSliderLoad: function() {
                        n(l.getCurrentSlide(), l.getSlideCount())
                    },
                    onSlideAfter: function() {
                        n(l.getCurrentSlide(), l.getSlideCount())
                    }
                }),
                e(),
                r.find(".gi-preward").on("click", function() {
                    l.goToPrevSlide()
                }),
                r.find(".gi-nextward").on("click", function() {
                    l.goToNextSlide()
                })) : n(0);
                var c = $(".doc-list");
                o.find("table tr").hover(function() {
                    var i = $(this).attr("data-inx")
                      , t = $(this).parent().find("tr[data-inx='" + i + "']");
                    t.each(function() {
                        $(this).find("span.hide").css("display", "inline-block")
                    })
                }, function() {
                    var i = $(this).attr("data-inx")
                      , t = $(this).parent().find("tr[data-inx='" + i + "']");
                    t.each(function() {
                        $(this).find("span.hide").css("display", "none")
                    })
                }),
                c.find("li").each(function(i) {
                    var t = $(this);
                    t.hover(function() {
                        o.find("table").find("tr[data-inx='" + i + "']").each(function() {
                            $(this).find("span.hide").css("display", "inline-block")
                        })
                    }, function() {
                        o.find("table").find("tr[data-inx='" + i + "']").each(function() {
                            $(this).find("span.hide").css("display", "none")
                        })
                    })
                }),
                0 == i.find(".results .g-pagination").length && (o.find("li").each(function() {
                    $(this).find("tr:last td").css("background", "none")
                }),
                c.find("li:last").css("background", "none")),
                o.find("[data-tips]").mouseenter(function() {
                    var i = $(this).closest("tr")
                      , t = i.attr("data-inx")
                      , n = i.parent().find("tr[data-inx='" + t + "']");
                    n.each(function() {
                        $(this).find("span.hide").css("display", "inline-block")
                    });
                    var e = $(this).data("tips");
                    if ("" != $.trim(e)) {
                        var a = $("#sche-tips");
                        0 == a.length && (a = $("<div/>", {
                            id: "sche-tips"
                        }).appendTo($("body"))),
                        a.html($(this).data("tips") + "<i></i>").css({
                            top: $(this).offset().top + $(this).outerHeight() + "px",
                            left: $(this).offset().left + "px"
                        }),
                        a.show()
                    }
                    return !1
                }).mouseleave(function() {
                    var i = $(this).closest("tr")
                      , t = i.attr("data-inx")
                      , n = i.parent().find("tr[data-inx='" + t + "']");
                    return n.each(function() {
                        $(this).find("span.hide").css("display", "none")
                    }),
                    $("#sche-tips").hide(),
                    !1
                }),
                o.find(".search-a").hover(function() {
                    $(this).addClass("search-a-hover")
                }, function() {
                    $(this).removeClass("search-a-hover")
                }),
                o.find(".apply-open").click(function() {
                    return $(this).unbind("mouseenter mouseleave").text("已许愿").removeClass("search-a-hover").addClass("search-a-click"),
                    $(this).hasClass("disabled") || ($(this).addClass("disabled"),
                    $.ajax({
                        url: $(this).attr("href"),
                        data: {
                            expertId: $(this).data("id"),
                            expertName: $(this).data("name")
                        },
                        success: function(i) {}
                    })),
                    !1
                }),
                o.find(".js-add-fav").click(function() {
                    var i = this;
                    GreenLine.Favorite.addFav({
                        type: "expert",
                        element: i,
                        succCall: function() {
                            o.find(".js-add-fav" + $(i).attr("data-id")).html("已关注").removeClass("search-a-hover").addClass("has-add-fav").off()
                        }
                    })
                }),
                o.find(".order-it").click(function() {
                    var i = $("#dept-container" + this.name).data("size")
                      , n = $(this);
                    return t && i > 1 ? GreenLine.Modal2.confirm.load(n, {
                        title: "预约提醒",
                        icon: '<i class="gi0 gi-bulb"></i>',
                        okTxt: "确认预约",
                        cancelBtnCls: "",
                        message: '该医生目前在<span class="g-txt-red">' + i + '</span>个科室出诊。<br/>您选择的科室是：<span class="g-txt-red">' + n.attr("dept") + "</span><br/>确定要预约吗？",
                        call: function() {
                            GreenLine.Modal2.confirmTreatModal.load(n)
                        }
                    }) : GreenLine.Modal2.confirmTreatModal.load(n),
                    !1
                }),
                t || o.find(".login-to-see").click(function() {
                    var i = $("#gm-login")
                      , t = i.find("form:eq(0)");
                    return t.find("input").removeClass("error"),
                    t.find(".tips-error").text("").hide(),
                    t.find("i.error").remove(),
                    i.find(".captcha").trigger("click"),
                    $GM.loadDirectModal($(this), i),
                    !1
                })
            }
        },
        initIndeptSche: function() {
            if (0 != $(".J_DoctorList").length) {
                var t = i.find(".filter")
                  , n = i.find(".J_DoctorList")
                  , e = n.find(".J_ShiftCaseContent");
                t.find("input[name='ed']").val();
                e && e.length > 0 && e.each(function() {
                    function i(i, t) {
                        if (t) {
                            var n = t.getCurrentSlide()
                              , e = t.getSlideCount();
                            e > 5 && (i.find(".bx-prev,.bx-next").show(),
                            0 == n ? i.find(".bx-prev").hide() : 5 * (n + 1) >= e ? i.find(".bx-next").hide() : i.find(".bx-prev,.bx-next").show())
                        } else
                            i.find(".bx-prev").hide()
                    }
                    var t = $(this)
                      , n = $(this).find("ul");
                    if (n.find("li").length > 5) {
                        var e = parseInt(n.find(".J_CaseInfo").index(n.find(".J_CaseInfo .on").parents(".J_CaseInfo")) / 5)
                          , a = n.bxSlider({
                            pager: !1,
                            infiniteLoop: !1,
                            nextText: "",
                            prevText: "",
                            maxSlides: 5,
                            moveSlides: 5,
                            slideWidth: 63,
                            slideMargin: 1,
                            onSliderLoad: function() {
                                i(t, a)
                            },
                            onSlideAfter: function() {
                                i(t, a)
                            },
                            onSlidePrev: function() {
                                i(t, a)
                            },
                            onSlideNext: function() {
                                i(t, a)
                            }
                        });
                        e > 0 && a.goToSlide(e)
                    }
                }),
                this.initScheFns(e)
            }
        },
        initVipSche: function() {
            var t = i.find(".filter")
              , n = i.find(".J_DoctorList")
              , e = n.find(".J_ShiftCaseContent");
            t.find("input[name='ed']").val();
            e && e.length > 0 && e.each(function() {
                function i(i, t) {
                    if (t) {
                        var n = t.getCurrentSlide()
                          , e = t.getSlideCount();
                        i.find(".bx-prev,.bx-next").show(),
                        0 == n ? i.find(".bx-prev").hide() : n + 1 >= e ? i.find(".bx-next").hide() : i.find(".bx-prev,.bx-next").show()
                    } else
                        i.find(".bx-prev").hide()
                }
                var t = $(this)
                  , n = $(this).find("ul")
                  , e = n.find("li").length;
                if (e > 8) {
                    var a;
                    n.find(".J_CaseInfo").each(function(i) {
                        i % 8 == 0 && (a = $("<li>", {
                            "class": "box"
                        })),
                        a.append($(this)),
                        i % 8 != 7 && i + 1 != e || a.appendTo(n)
                    }),
                    n.find("li:not(.box)").remove();
                    var o = parseInt(n.find(".J_CaseInfo").index(n.find(".J_CaseInfo .on").parents(".J_CaseInfo")) / 8)
                      , r = n.bxSlider({
                        pager: !1,
                        infiniteLoop: !1,
                        nextText: "",
                        prevText: "",
                        onSliderLoad: function() {
                            i(t, r)
                        },
                        onSlideAfter: function() {
                            i(t, r)
                        },
                        onSlidePrev: function() {
                            i(t, r)
                        },
                        onSlideNext: function() {
                            i(t, r)
                        }
                    });
                    o > 0 && r.goToSlide(o)
                }
            }),
            this.initScheFns(e)
        },
        initScheFns: function(i) {
            i.delegate(".J_CaseInfo", "mouseenter", function() {
                if (!($(this).find("disabled") && $(this).find("disabled").length > 0)) {
                    var i = $(this).attr("data-tips");
                    if ($(this).find(".J_Date").addClass("hover"),
                    "" != $.trim(i)) {
                        var t = $("#J_CaseContent");
                        0 == t.length && (t = $("<div/>", {
                            id: "J_CaseContent",
                            "class": "gl-doc-shift-content"
                        }).appendTo($("body"))),
                        t.html(i + "<i></i>").css({
                            top: $(this).offset().top + $(this).outerHeight() + 4 + "px",
                            left: $(this).offset().left + 24 + "px"
                        }),
                        t.show()
                    }
                    return !1
                }
            }),
            i.delegate(".J_CaseInfo", "mouseleave", function() {
                return $(this).find(".J_Date").removeClass("hover"),
                $("#J_CaseContent").hide(),
                !1
            }),
            t ? i.delegate(".J_CaseInfo", "click", function() {
                null != $(this).data("isauth") && 0 == $(this).data("isauth") && $GD.init({
                    title: "",
                    extClass: "gm-realName-dialog",
                    content: '<a title="关闭" class="close js-close" href="javascript:;"></a><h2>就医服务需要账号实名认证</h2>如需为家人挂号或问诊，请完成认证后，添加家人信息至常用就诊人  ',
                    width: 607,
                    okCls: "gbn gbt-blue1",
                    okTxt: "去实名认证",
                    noCancelBtn: !0,
                    okCall: function() {
                        return location.href = "/my/preauth?target=" + encodeURIComponent(window.location.href),
                        !1
                    }
                })
            }) : i.delegate(".J_CaseInfo", "click", function() {
                return $("#gh .login").trigger("click"),
                !1
            })
        },
        barMoving: function() {
            0 != $(".head-bar").length && i.find(".head-bar").each(function() {
                var i = $(this);
                i.data("moving") && "1" == i.data("moving") && !GreenLine.Util.isIE6() && $(window).scroll(function() {
                    if (alert("sdfds"),
                    $("#gh .gh-mini").length > 0) {
                        var t = i.data("offsetTop")
                          , n = $(document).scrollTop();
                        t ? t >= n ? i.removeClass("fixed-bar") : i.addClass("fixed-bar") : i.data("offsetTop", i.offset().top - 65)
                    }
                })
            })
        }
    };
    n.run()
}, [GH.modules.bxslider, GH.modules.citypicker, GH.modules.datepicker, GH.modules.areapicker, GH.modules.jqtmpl]);
