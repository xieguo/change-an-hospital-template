/*! portal-pc-static - git - 2019-05-21 15:39:48 */
GH.run(function() {
    window.makeLink = function(e) {
        return '<a href="${guahaoServer}/search?q=' + window.encodeURIComponent(e) + '">' + e + "</a>"
    }
    ,
    $.fn.asyncTabs = function(e) {
        var t = this
          , i = {}
          , n = {
            tabs: ".J_Nav",
            tabChild: "li",
            contentCtn: ".J_ContentContainer",
            onCls: "on",
            event: "mouseenter",
            hasAllDept: !1,
            loadHtml: function(e, i, o, a) {
                if (!e.data("loading")) {
                    var c = i.data("id");
                    return e.data("loading", !0),
                    e.append('<div class="loading"></div>'),
                    a[c] ? (o(a[c]),
                    e.data("loading", !1),
                    void e.find(".loading").remove()) : void $.ajax({
                        type: "get",
                        dataType: "html",
                        cache: !1,
                        url: n.getAjaxUrl(t, i),
                        success: function(t) {
                            a[c] = t,
                            o(t),
                            e.data("loading", !1),
                            e.find(".loading").remove()
                        },
                        error: function() {
                            e.data("loading", !1),
                            e.find(".loading").remove()
                        }
                    })
                }
            },
            getAjaxUrl: function(e, t) {
                return e.data("tab-url") + t.data("id")
            },
            afterRender: function() {}
        };
        return $.extend(n, e),
        this.each(function() {
            var e = $(this)
              , t = e.find(n.tabs)
              , o = t.find(n.tabChild)
              , a = e.find(n.contentCtn);
            t.find(n.tabChild).each(function() {
                $(this).width($(this).width())
            }),
            o.splice(o.length - 1, +n.hasAllDept),
            o.on(n.event, function() {
                return !$(this).hasClass(n.onCls) && (o.removeClass(n.onCls),
                $(this).addClass(n.onCls),
                a.empty(),
                n.loadHtml(a, $(this), function(e) {
                    if (n.hasAllDept)
                        a.empty(),
                        e.appendTo(n.contentCtn),
                        n.afterRender(e);
                    else {
                        if (e.indexOf("DOCTYPE") > -1)
                            return;
                        a.empty().append(e),
                        n.afterRender(e)
                    }
                }, i, n),
                !1)
            })
        })
    }
    ,
    function() {
        $("body").on("click", ".J_ConsultSection .J_ConsultShow .inner > a", function() {
            $TK.click("home_ask,doctordirect,spteam")
        }),
        $("body").on("click", ".J_ConsultSection .J_ConsultShow .doc-answer > a", function() {
            $TK.click("home_ask,doctordirect,detail")
        }),
        $(".J_ContentContainer").on("click", ".J_DoctorList .inner a", function() {
            $TK.click("home_ask,doctor_select,doctor")
        }),
        $(".J_ContentContainer").on("click", ".J_Nav li a", function() {
            $TK.click("home_ask,divtype,div")
        }),
        $(".js-hospital").on("click", function() {
            $TK.click("home_order,fastorder,hospital_select")
        }),
        $(".js-dept").on("click", function() {
            $TK.click("home_order,fastorder,div_select")
        }),
        $(".J_exportTeam").find("li a").on("click", function() {
            $TK.click("home_activity,doctordirect,spteam")
        }),
        $("#gfo-rightbar #gfo-ghApp").on("click", function() {
            $TK.click("home_activity,edge_promotion,app")
        }),
        $("#gfo-rightbar #gfo-ghApp").on("click", function() {
            $TK.click("home_activity,edge_promotion,app")
        }),
        $("#gfo-rightbar #gfo-ghApp").on("click", function() {
            $TK.click("home_activity,edge_promotion,app")
        }),
        $("#gfo-rightbar #gfo-helpqs a").on("click", function() {
            $TK.click("home_activity,nethelp,cscenter")
        });
        var e = $(".J_RecomHospital li a");
        e.hasClass("g-more") ? e.on("click", function() {
            $TK.click("home_order,hosprecommend,hospital_more")
        }) : e.on("click", function() {
            $TK.click("home_order,hosprecommend,hospital")
        });
        var t = $("#gf .g-footer")
          , i = t.siblings();
        $("#gf .g-footer .logo").on("click", function() {
            $TK.click("home_end,home_end,endlogo")
        }),
        i.on("click", function() {
            $TK.click("home_end,home_end,home_remark_certific")
        }),
        $("#gf .g-footer .one dt").on("click", function() {
            $TK.click("home_end,home_end,aboutwy")
        }),
        $("#gf .g-footer .one a").on("click", function() {
            $TK.click("home_end,home_end,aboutwy")
        }),
        $("#gf .g-footer .two .partner a").on("click", function() {
            $TK.click("home_end,home_end,hospcooperaion")
        }),
        $("#gf .g-footer .two .help a").on("click", function() {
            $TK.click("home_end,home_end,cscenter")
        }),
        $("#gf .g-footer .code a").on("click", function() {
            $TK.click("home_end,home_end,other_link")
        }),
        $("#gf .g-footer .internation a").on("click", function() {
            $TK.click("home_end,home_end,other_link")
        })
    }();
    GH.dispatcher(".J_FocusSection", function() {
        return {
            init: function() {
                $(".J_FocusSlider").focusSlider({
                    interval: 4e3
                }),
                1 === $(".J_FocusSlider li").length && $(".J_FocusSlider .J_TextBanner").css({
                    opacity: 1
                })
            }
        }
    });
    var e = {
        loaded: !1,
        urls: {
            province: "/json/white/area/provinces",
            city: "/json/white/area/citys",
            hospital: "/json/white/fastorder/hospitals",
            dept: "/json/white/fastorder/depts"
        },
        init: function(e) {
            var t = this;
            if (!$(".J_AreaFilter").data("loaded")) {
                t.needLbs = !0,
                t.userChoice = t._getUserChoice(),
                t.geoLoc = {
                    isEmpty: !0
                },
                t.container = e,
                t.dept = e.find(".js-dept").change(function(e) {
                    e.lbs || (t.needLbs = !1)
                }),
                t.hospital = e.find(".js-hospital").change(function(e) {
                    t._cleanSelect(t.dept, !0),
                    e.lbs || (t.needLbs = !1),
                    "" != $(this).val() && t._updateSelect("dept")
                }),
                t.city = e.find(".js-city").change(function(e) {
                    if (t._cleanSelect(t.hospital, !0),
                    t._cleanSelect(t.dept, !0),
                    e.lbs || (t.needLbs = !1),
                    $(this).val()) {
                        var i = $(".J_AreaFilter form")
                          , n = i.find("input[name='ci']").val();
                        if (n)
                            $(".J_City").text(i.find("input[name='c']").val()),
                            $(this).val(n);
                        else {
                            var o = $(this).find("option:selected").text();
                            $(".J_City").text(o),
                            i.find("input[name='ci']").val($(this).val()),
                            i.find("input[name='c']").val(o)
                        }
                        t._updateSelect("hospital")
                    }
                }),
                t.province = e.find(".js-province").change(function(e) {
                    if (t._cleanSelect(t.city, "" != $(this).val()),
                    t._cleanSelect(t.hospital, !0),
                    t._cleanSelect(t.dept, !0),
                    e.lbs || (t.needLbs = !1),
                    $(this).val()) {
                        var i = $(".J_AreaFilter form")
                          , n = i.find("input[name='pi']").val();
                        if (n)
                            $(".J_Province").text(i.find("input[name='p']").val()),
                            $(this).val(n);
                        else {
                            var o = $(this).find("option:selected").text();
                            $(".J_Province").text(o),
                            i.find("input[name='pi']").val($(this).val()),
                            i.find("input[name='p']").val(o)
                        }
                        t._updateSelect("city")
                    }
                }),
                t.btn = e.find(".js-btn").click(function() {
                    var e = t._getUrl();
                    return $(this).attr("href", e),
                    $GUM.link(e, "QCK"),
                    t._setUserChoice(),
                    !0
                });
                var i = t.container.find(".js-hospital")
                  , n = t.container.find(".js-dept");
                i.select2({
                    placeholder: "请输入你要预约的医院",
                    maximumSelectionLength: 1,
                    width: 215
                }),
                i.on("select2:select", function() {
                    $(this).next().find(".select2-search--inline").hide(),
                    i.data("doSel", !0)
                }),
                i.on("select2:unselect", function() {
                    $(this).val(null).trigger("change"),
                    $(this).next().find(".select2-search--inline").show(),
                    n.next().find(".select2-search--inline").show()
                }),
                i.on("select2:afterUpdate", function() {
                    $(this).val() && $(this).next().find(".select2-search--inline").hide()
                }),
                n.select2({
                    placeholder: "请选择科室",
                    maximumSelectionLength: 1,
                    width: 215
                }),
                n.on("select2:select", function() {
                    $(this).next().find(".select2-search--inline").hide()
                }),
                n.on("select2:unselect", function() {
                    $(this).val(null).trigger("change"),
                    $(this).next().find(".select2-search--inline").show()
                }),
                n.on("select2:afterUpdate", function() {
                    var e = $(this).next().find(".select2-selection__choice").length;
                    e > 1 && $(this).next().find(".select2-selection__choice:first").remove(),
                    $(this).val() && $(this).next().find(".select2-search--inline").hide()
                }),
                t._updateSelect("province"),
                $(".J_AreaFilter").data("loaded", !0);
                var o = e.find(".J_exportTeam");
                o.find(".team-item").hover(function() {
                    $(this).next().addClass("hover")
                }, function() {
                    $(this).next().removeClass("hover")
                })
            }
        },
        _setUserChoice: function() {
            var e = this
              , t = "";
            e.container.find("select").each(function(e) {
                e > 0 && (t += "|"),
                t += $(this).attr("name") + ":" + $(this).val()
            }),
            $.cookie("_fo_opt", t, {
                expires: 10,
                path: "/"
            })
        },
        _getUserChoice: function() {
            var e = $.cookie("_fo_opt")
              , t = {
                isEmpty: !0
            };
            if (e) {
                t.isEmpty = !1,
                e = e.split("|");
                for (var i = 0; i < e.length; i++)
                    if ("" != e[i]) {
                        var n = e[i].split(":");
                        t[n[0]] = n[1]
                    }
            }
            return t
        },
        _getUrl: function() {
            var e = this
              , t = e.province.find("option:selected")
              , i = e.city.find("option:selected")
              , n = $GC.guahaoServer + "/hospital/areahospitals";
            return e.dept.val() ? n = $GC.guahaoServer + "/department/shiftcase/" + e.dept.val() : e.hospital.val() ? n = $GC.guahaoServer + "/hospital/" + e.hospital.val() : n += e.city.val() ? "?pi=" + e.province.val() + "&p=" + encodeURIComponent(t.text()) + "&ci=" + e.city.val() + "&c=" + encodeURIComponent(i.text()) + "&open=1" : e.province.val() ? "?pi=" + e.province.val() + "&p=" + encodeURIComponent(t.text()) + "&open=1" : "?open=1",
            n
        },
        _updateSelect: function(e) {
            var t = this
              , i = {}
              , n = t.province;
            switch (e) {
            case "city":
                i = {
                    provinceId: t.province.val()
                },
                n = t.city;
                break;
            case "hospital":
                i = {
                    provinceId: t.province.val(),
                    cityId: t.city.val()
                },
                n = t.hospital;
                break;
            case "dept":
                var o = t.hospital.val();
                if (!o)
                    return;
                $.isArray(o) && (o = o[0]),
                i = {
                    hospitalId: o
                },
                n = t.dept
            }
            $.ajax({
                url: t.urls[e],
                data: i,
                success: function(i) {
                    "dept" === e ? t._addDeptOptions(n, i) : t._addOptions(n, i),
                    t.needLbs ? t._lbs(n) : "city" === e && t.city.trigger({
                        type: "change"
                    })
                }
            })
        },
        _lbs: function(e) {
            var t = this
              , i = e.attr("name");
            t.userChoice.isEmpty ? t.geoLoc.isEmpty && "province" === i ? t._ipGeo() : "city" === i && (t.geoLoc.city && t.geoLoc.city && t.city.find("option").each(function() {
                var e = $(this);
                t.geoLoc.city == e.text() && t.city.val(e.val())
            }),
            t.city.trigger({
                type: "change",
                lbs: !0
            })) : t.userChoice[i] && "" != t.userChoice[i] && setTimeout(function() {
                e.val(t.userChoice[i]),
                e.trigger({
                    type: "change",
                    lbs: !0
                })
            }, 1)
        },
        _ipGeo: function() {
            $GU.ipGeo(function(e) {
                var t = this
                  , i = e.province
                  , n = e.city;
                t.geoLoc.provice = i,
                t.geoLoc.city = n,
                t.geoLoc.isEmpty = !1,
                i && (t.province.find("option").each(function() {
                    var e = $(this);
                    i === e.text() && t.province.val(e.val())
                }),
                t.province.trigger({
                    type: "change",
                    lbs: !0
                }))
            }, this)
        },
        _addOptions: function(e, t) {
            for (var i = "", n = 0; n < t.length; n++)
                i += '<option value="' + t[n].value + '">' + t[n].text + "</option>";
            e.append(i).removeAttr("disabled", "disabled").removeClass("disabled")
        },
        _addDeptOptions: function(e, t) {
            for (var i = "", n = t.hospDepts, o = 0; o < n.length; o++) {
                var a = n[o]
                  , c = a.obj;
                i += "<optgroup label='" + a.key + "'>";
                for (var r = 0; r < c.length; r++)
                    i += '<option value="' + c[r].value + '">' + c[r].text + "</option>";
                i += "</optgroup>"
            }
            i && e.append(i).removeAttr("disabled", "disabled").removeClass("disabled"),
            setTimeout(function() {
                var t = $(".J_AreaFilter .js-hospital");
                !e.val() && t.data("doSel") && t.data("doSel", !1)
            }, 100)
        },
        _cleanSelect: function(e, t) {
            if (e.val()) {
                e.next().find(".select2-selection__choice").remove();
                var i = e.hasClass("js-dept") ? "请选择科室" : "请输入你要预约的医院";
                e.next().find(".select2-search__field").attr("placeholder", i).width(213).parent().show()
            }
            e.empty().attr("disabled", "disabled").addClass("disabled"),
            t || $("<option/>", {
                value: "",
                text: "请选择..."
            }).appendTo(e)
        }
    };
    GH.dispatcher(".J_BookingSection", function(t) {
        return {
            init: function() {
                var e = this;
                this.initAreaFilter(function() {
                    e.initFastOrder()
                }),
                this.initRecomHospital()
            },
            initRecomHospital: function() {
                $(".J_RecomHospital").asyncTabs(),
                $(".J_RecomHospital .J_Nav a:first").trigger("mouseenter"),
                $GU.ipGeo(function(e) {
                    var t = e.province;
                    $(".J_RecomHospital .J_Nav a").each(function() {
                        if ($(this).data("id") + "" === t)
                            return void $(this).trigger("mouseenter")
                    })
                })
            },
            initFastOrder: function() {
                e.init(t)
            },
            initAreaFilter: function(e) {
                var i = t.find(".J_AreaFilter")
                  , n = i.find("form")
                  , o = i.find(".J_Area")
                  , a = o.attr("json-url")
                  , c = o.attr("hide-province")
                  , r = function(e) {
                    $.cookie("_area_", JSON.stringify(e), {
                        expires: 1,
                        path: "/"
                    }),
                    $.cookie("_fo_area_", JSON.stringify(e), {
                        expires: 1,
                        path: "/"
                    })
                }
                  , l = {}
                  , s = $.cookie("_fo_area_");
                s && (s = JSON.parse(s),
                s.provinceId && (l.provinceId = s.provinceId,
                i.find(".J_Province").text(s.provinceName),
                n.find("input[name=pi]").val(s.provinceId),
                n.find("input[name=p]").val(s.provinceName)),
                s.cityId && (l.cityId = s.cityId,
                i.find(".J_City").text(s.cityName),
                n.find("input[name=ci]").val(s.cityId),
                n.find("input[name=c]").val(s.cityName)),
                $(".js-city").val(s.cityId),
                $(".js-province").val(s.provinceId)),
                i.find(".J_Area").glAreapicker({
                    homeFlag: !0,
                    hideAreas: [14],
                    plinkCallback: function(e) {
                        if (1 == e.data("nosub")) {
                            var t = {};
                            t.provinceId = e.attr("data-val") || "all",
                            t.provinceName = e.text() || "全国",
                            t.cityId = "all",
                            t.cityName = "不限",
                            n.find("input[name='pi']").val(t.provinceId),
                            n.find("input[name='p']").val(t.provinceName),
                            n.find("input[name='ci']").val(t.cityId),
                            n.find("input[name='c']").val(t.cityName),
                            r(t),
                            $(".J_Province").text(t.provinceName),
                            $(".J_City").text(t.cityName),
                            o.hide(),
                            $(".js-city").val(t.cityId),
                            $(".js-province").val(t.provinceId).trigger("change")
                        } else
                            o.find(".J_CityLink[data-val='" + l.cityId + "']").addClass("on"),
                            o.find(".J_ProvinceContainer").hide(),
                            o.find(".J_CityContainer").show()
                    },
                    clinkCallback: function(e) {
                        var t = e.attr("data-val")
                          , i = e.attr("parent-id")
                          , o = {};
                        o.provinceId = i,
                        o.provinceName = e.attr("parent-name"),
                        o.cityId = t,
                        o.cityName = e.text(),
                        n.find("input[name='pi']").val(i),
                        n.find("input[name='p']").val(o.provinceName),
                        n.find("input[name='ci']").val(t),
                        n.find("input[name='c']").val(o.cityName),
                        $(".J_Province").text(o.provinceName),
                        $(".J_City").text(o.cityName),
                        r(o),
                        $(".js-city").val(o.cityId),
                        $(".js-province").val(o.provinceId).trigger("change")
                    },
                    dataUrl: a,
                    selArea: l,
                    hideProvince: c
                }),
                i.find(".J_HideArea").click(function() {
                    o.hide()
                }),
                i.find(".J_AreaSwitch").click(function() {
                    i.find("a.on").removeClass("on");
                    var e = n.find("input[name='ci']").val()
                      , t = n.find("input[name='pi']").val();
                    e ? o.find(".J_HotCity a[city-id='" + e + "']").addClass("on") : o.find(".J_HotCity a[province-id='" + t + "']").addClass("on"),
                    o.find(".J_ProvinceLink[data-val='" + t + "']").addClass("on"),
                    o.find(".J_CityLink[data-val='" + e + "']").addClass("on"),
                    GreenLine.Util.isIE6() || GreenLine.Util.isIE7() ? i.css("z-index", "3500") : o.css("z-index", "3500"),
                    o.show()
                }),
                i.find(".hot-city a").click(function(e) {
                    var t = $(e.target)
                      , i = t.attr("city-id")
                      , a = t.attr("province-id")
                      , c = {};
                    return c.provinceId = a,
                    i ? (c.cityId = i,
                    c.cityName = t.text(),
                    c.provinceName = t.attr("province-name"),
                    n.find("input[name='ci']").val(i),
                    n.find("input[name='c']").val(c.cityName),
                    $(".J_City").text(c.cityName)) : (c.provinceName = t.text(),
                    n.find("input[name='ci']").val("all"),
                    n.find("input[name='c']").val("不限"),
                    $(".J_City").html("不限")),
                    n.find("input[name='pi']").val(a),
                    n.find("input[name='p']").val(c.provinceName),
                    $(".J_Province").text(c.provinceName),
                    r(c),
                    o.hide(),
                    $(".js-city").val(c.cityId),
                    $(".js-province").val(c.provinceId).trigger("change"),
                    !1
                }),
                e()
            }
        }
    }),
    GH.dispatcher(".J_ConsultSection", function(e) {
        return {
            init: function() {
                var e = this;
                e.inintConsultSearch(),
                e.changeConsultShow(),
                e.initConsultToggle(),
                $(".J_ConsultList").asyncTabs({
                    hasAllDept: !0,
                    contentCtn: ".J_ContentContainer_Doctor",
                    loadHtml: function(t, i, n, o, a) {
                        if (!t.data("loading")) {
                            var c = i.data("id");
                            return t.data("loading", !0),
                            t.append('<div class="loading"></div>'),
                            o[c] ? (n(o[c]),
                            t.data("loading", !1),
                            void t.find(".loading").remove()) : void $.ajax({
                                type: "get",
                                dataType: "json",
                                cache: !1,
                                url: a.getAjaxUrl($(".J_ConsultList"), i),
                                success: function(i) {
                                    var a = e.getHtmlTemplate(i);
                                    o[c] = a,
                                    n(a),
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
                    getAjaxUrl: function(e, t) {
                        var i = t.data("id");
                        return $TK.click("home, ask, div", {
                            div_id: i
                        }),
                        e.data("tab-new-url") + "?deptId=" + i
                    },
                    afterRender: function(t) {
                        e.setMoreHref()
                    }
                }),
                $(".J_ConsultList .J_Nav a:first").trigger("mouseenter")
            },
            getHtmlTemplate: function(e) {
                return $("#J_quickInquiry").tmpl({
                    doctorList: e.data
                })
            },
            changeConsultShow: function() {
                $(".J_ConsultList .J_Nav li").on("mouseenter", function() {
                    var e = ($(this).data("id"),
                    '.consult-show ul[data-id="' + $(this).data("id") + '"]');
                    $(e).siblings().hide(),
                    $(e).show(),
                    $(e).find(".answer").first().show()
                })
            },
            initConsultToggle: function() {
                $(".J_ConsultShow").eq(0).show(),
                $(".J_ConsultShow").eq(0).find(".answer").first().show(),
                $(".J_ConsultShow").eq(0).siblings().hide(),
                $(".J_ConsultShow li").on("mouseenter", function() {
                    $(this).siblings().find(".answer").hide(),
                    $(this).find(".answer").show()
                })
            },
            initDoctorSlider: function() {
                $(".J_DoctorList").bxSlider({
                    maxSlides: 4,
                    moveSlides: 4,
                    slideWidth: 199,
                    pager: !1,
                    nextText: "",
                    prevText: "",
                    infiniteLoop: $(".J_DoctorList li").length > 4,
                    slideMargin: 23,
                    pause: 5e3,
                    auto: !0,
                    autoHover: !0,
                    controls: $(".J_DoctorList li").length > 1
                })
            },
            inintConsultSearch: function() {
                var e = $(".J_FreeConsult")
                  , t = e.find(".consult-txt")
                  , i = e.find(".consult-input");
                i.val(""),
                t.on("click", function() {
                    $(this).hide(),
                    i.focus()
                }),
                i.on("blur", function() {
                    this.value || t.show()
                }),
                e.find(".consult-btn").on("click", function() {
                    var t = i.val();
                    return $TK.click("home,ask_search,freeask", {
                        search_q: t
                    }),
                    e.submit(),
                    !1
                })
            },
            setMoreHref: function() {
                var e = $(".J_ConsultList li.on")
                  , t = e.data("id")
                  , i = e.find("a").text()
                  , n = $(".J_moreDoctor a").data("value")
                  , o = "/" + t + "/" + i;
                $(".J_moreDoctor").attr("href", n + o)
            }
        }
    }),
    GH.dispatcher(".news-main", function(e) {
        return {
            init: function() {
                this.hotTopicChangedate()
            },
            renderTemplate: function(e, t, i) {
                $.ajax({
                    url: e,
                    type: "get",
                    dataType: "json",
                    success: function(e) {
                        if (e.hasError)
                            t.html("");
                        else {
                            var n = e.data || [];
                            if (n.length > 0) {
                                for (var o = 0; o < n.length; o++)
                                    n[o].description = n[o].description.slice(0, 50);
                                t.html(""),
                                $(".J_Template").tmpl({
                                    ehrItemDOList: e.data,
                                    title: i
                                }).appendTo(t)
                            } else
                                t.html("")
                        }
                        $(".J_healthHot").css("display", "block")
                    },
                    error: function() {
                        t.html("")
                    }
                })
            },
            hotTopicChangedate: function() {
                var e = $(".J_hotTopic").find("a");
                e.on("click", function() {
                    if (!$(this).attr("href") || "javascript:;" === $(this).attr("href")) {
                        $(this).addClass("active"),
                        $(this).siblings().removeClass("active");
                        var e = $(this).data("tagid");
                        $(".J_hotTopicList").find("ul").each(function(t) {
                            t == e - 1 ? $(this).show() : $(this).hide()
                        })
                    }
                })
            },
            renderHotTopicTpl: function(e, t, i) {
                $.ajax({
                    url: e,
                    type: "get",
                    dataType: "json",
                    data: i,
                    success: function(e) {
                        if (e.hasError)
                            t.html("");
                        else {
                            var i = e.data || [];
                            if (i.length > 0) {
                                for (var n = 0; n < i.length; n++)
                                    i[n].description = i[n].description.slice(0, 50);
                                t.html(""),
                                $(".J_hotTopicTemplate").tmpl({
                                    ehrItemDOList: e.data
                                }).appendTo(t)
                            } else
                                t.html("")
                        }
                    },
                    error: function() {
                        t.html("")
                    }
                })
            }
        }
    })
}, [GH.modules.focusSlider, GH.modules.areapicker, GH.modules.json2, GH.modules.select2, GH.modules.jqtmpl]);
