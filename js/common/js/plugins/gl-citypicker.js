/*! common - git - 2018-12-27 14:42:18 */
!function(t){function i(i,n){this.container=i,this.options={plinkCallback:null,clinkCallback:null},t.extend(this.options,n),this.provinceInput=i.find("input:eq(0)").attr("readonly","readonly"),this.cityInput=i.find("input:eq(1)").attr("readonly","readonly"),this.provinceFlyout=i.find(".cflyout:eq(0)"),this.cityFlyout=i.find(".cflyout:eq(1)"),this._init()}t.extend(i.prototype,{_init:function(){var i=this;this.hasProvincePicker()&&(this.provinceFlyout.css({top:this.provinceInput.parent().position().top+this.provinceInput.outerHeight()+"px",left:this.provinceInput.parent().position().left+"px"}).find("a").click(function(){return i.provinceInput.val(t(this).text()),i.options.plinkCallback&&i.options.plinkCallback.call(i,t(this)),i.provinceFlyout.hide(),!1}),this.provinceInput.parent().click(function(n){i.provinceFlyout.is(":hidden")&&(t(".g-citypicker .cflyout").hide(),i.provinceFlyout.show()),i.provinceInput.focus(),n.stopPropagation()})),this.hasCityPicker()&&(this.cityFlyout.css({top:this.cityInput.parent().position().top+this.cityInput.outerHeight()+"px",left:this.cityInput.parent().position().left+"px"}).find("a").click(function(){return i.cityInput.val(t(this).text()),i.options.clinkCallback&&i.options.clinkCallback.call(i,t(this)),i.cityFlyout.hide(),!1}),this.cityInput.parent().click(function(n){i.cityFlyout.is(":hidden")&&(t(".g-citypicker .cflyout").hide(),i.cityFlyout.show()),i.cityInput.focus(),n.stopPropagation()})),t(document).mousedown(function(n){0==t(n.target).parents(".cflyout").length&&i.container.find(".cflyout").hide()})},hasProvincePicker:function(){return this.provinceInput.length>0},hasCityPicker:function(){return this.cityInput.length>0},getCityFlyout:function(){return this.cityFlyout},getCityInput:function(){return this.cityInput},getProvinceFlyout:function(){return this.provinceFlyout}}),t.fn.glCitypicker=function(n){return this.data("citypicker")?this:this.each(function(){var o=t(this),c=new i(o,n);o.data("citypicker",c)})}}(jQuery);