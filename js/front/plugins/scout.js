/*! portal-pc-static - git - 2019-05-21 15:39:35 */
"undefined" != typeof String && "undefined" == typeof String.prototype.trim && (String.prototype.trim = function() {
    return this.replace(/^\s+/, "").replace(/\s+$/, "")
}
),
Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
    var t = this.length >>> 0
      , i = Number(arguments[1]) || 0;
    for (i = i < 0 ? Math.ceil(i) : Math.floor(i),
    i < 0 && (i += t); i < t; i++)
        if (i in this && this[i] === e)
            return i;
    return -1
}
),
function() {
    if (!window.console) {
        window.console = {};
        for (var e = window.console, t = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], i = 0, n = t.length; i < n; i++) {
            var r = t[i];
            e[r] || (e[r] = function() {}
            ),
            e.memory || (e.memory = {})
        }
    }
}(),
!function(e, t, i) {
    "use strict";
    "undefined" != typeof module && module.exports ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : t[e] = i()
}("Fingerprint2", this, function() {
    "use strict";
    Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
        var i;
        if (null == this)
            throw new TypeError("'this' is null or undefined");
        var n = Object(this)
          , r = n.length >>> 0;
        if (0 === r)
            return -1;
        var a = +t || 0;
        if (1 / 0 === Math.abs(a) && (a = 0),
        a >= r)
            return -1;
        for (i = Math.max(a >= 0 ? a : r - Math.abs(a), 0); r > i; ) {
            if (i in n && n[i] === e)
                return i;
            i++
        }
        return -1
    }
    );
    var e = function(e) {
        var t = {
            swfContainerId: "fingerprintjs2",
            swfPath: "flash/compiled/FontList.swf",
            detectScreenOrientation: !0,
            sortPluginsFor: [/palemoon/i]
        };
        this.options = this.extend(e, t),
        this.nativeForEach = Array.prototype.forEach,
        this.nativeMap = Array.prototype.map
    };
    return e.prototype = {
        extend: function(e, t) {
            if (null == e)
                return t;
            for (var i in e)
                null != e[i] && t[i] !== e[i] && (t[i] = e[i]);
            return t
        },
        log: function(e) {
            window.console && console.log(e)
        },
        get: function(e) {
            var t = [];
            t = this.userAgentKey(t),
            t = this.languageKey(t),
            t = this.colorDepthKey(t),
            t = this.screenResolutionKey(t),
            t = this.availableScreenResolutionKey(t),
            t = this.timezoneOffsetKey(t),
            t = this.sessionStorageKey(t),
            t = this.localStorageKey(t),
            t = this.indexedDbKey(t),
            t = this.addBehaviorKey(t),
            t = this.openDatabaseKey(t),
            t = this.cpuClassKey(t),
            t = this.platformKey(t),
            t = this.doNotTrackKey(t),
            t = this.pluginsKey(t),
            t = this.canvasKey(t),
            t = this.webglKey(t),
            t = this.adBlockKey(t),
            t = this.hasLiedLanguagesKey(t),
            t = this.hasLiedResolutionKey(t),
            t = this.hasLiedOsKey(t),
            t = this.hasLiedBrowserKey(t),
            t = this.touchSupportKey(t);
            var i = this;
            this.fontsKey(t, function(t) {
                var n = [];
                i.each(t, function(e) {
                    var t = e.value;
                    "undefined" != typeof e.value.join && (t = e.value.join(";")),
                    n.push(t)
                });
                var r = i.x64hash128(n.join("~~~"), 31);
                return e(r, t)
            })
        },
        userAgentKey: function(e) {
            return this.options.excludeUserAgent || e.push({
                key: "user_agent",
                value: this.getUserAgent()
            }),
            e
        },
        getUserAgent: function() {
            return navigator.userAgent
        },
        languageKey: function(e) {
            return this.options.excludeLanguage || e.push({
                key: "language",
                value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage
            }),
            e
        },
        colorDepthKey: function(e) {
            return this.options.excludeColorDepth || e.push({
                key: "color_depth",
                value: screen.colorDepth
            }),
            e
        },
        screenResolutionKey: function(e) {
            return this.options.excludeScreenResolution ? e : this.getScreenResolution(e)
        },
        getScreenResolution: function(e) {
            var t;
            return t = this.options.detectScreenOrientation && screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height],
            "undefined" != typeof t && e.push({
                key: "resolution",
                value: t
            }),
            e
        },
        availableScreenResolutionKey: function(e) {
            return this.options.excludeAvailableScreenResolution ? e : this.getAvailableScreenResolution(e)
        },
        getAvailableScreenResolution: function(e) {
            var t;
            return screen.availWidth && screen.availHeight && (t = this.options.detectScreenOrientation ? screen.availHeight > screen.availWidth ? [screen.availHeight, screen.availWidth] : [screen.availWidth, screen.availHeight] : [screen.availHeight, screen.availWidth]),
            "undefined" != typeof t && e.push({
                key: "available_resolution",
                value: t
            }),
            e
        },
        timezoneOffsetKey: function(e) {
            return this.options.excludeTimezoneOffset || e.push({
                key: "timezone_offset",
                value: (new Date).getTimezoneOffset()
            }),
            e
        },
        sessionStorageKey: function(e) {
            return !this.options.excludeSessionStorage && this.hasSessionStorage() && e.push({
                key: "session_storage",
                value: 1
            }),
            e
        },
        localStorageKey: function(e) {
            return !this.options.excludeSessionStorage && this.hasLocalStorage() && e.push({
                key: "local_storage",
                value: 1
            }),
            e
        },
        indexedDbKey: function(e) {
            return !this.options.excludeIndexedDB && this.hasIndexedDB() && e.push({
                key: "indexed_db",
                value: 1
            }),
            e
        },
        addBehaviorKey: function(e) {
            return document.body && !this.options.excludeAddBehavior && document.body.addBehavior && e.push({
                key: "add_behavior",
                value: 1
            }),
            e
        },
        openDatabaseKey: function(e) {
            return !this.options.excludeOpenDatabase && window.openDatabase && e.push({
                key: "open_database",
                value: 1
            }),
            e
        },
        cpuClassKey: function(e) {
            return this.options.excludeCpuClass || e.push({
                key: "cpu_class",
                value: this.getNavigatorCpuClass()
            }),
            e
        },
        platformKey: function(e) {
            return this.options.excludePlatform || e.push({
                key: "navigator_platform",
                value: this.getNavigatorPlatform()
            }),
            e
        },
        doNotTrackKey: function(e) {
            return this.options.excludeDoNotTrack || e.push({
                key: "do_not_track",
                value: this.getDoNotTrack()
            }),
            e
        },
        canvasKey: function(e) {
            return !this.options.excludeCanvas && this.isCanvasSupported() && e.push({
                key: "canvas",
                value: this.getCanvasFp()
            }),
            e
        },
        webglKey: function(e) {
            return this.options.excludeWebGL ? ("undefined" == typeof NODEBUG && this.log("Skipping WebGL fingerprinting per excludeWebGL configuration option"),
            e) : this.isWebGlSupported() ? (e.push({
                key: "webgl",
                value: this.getWebglFp()
            }),
            e) : ("undefined" == typeof NODEBUG && this.log("Skipping WebGL fingerprinting because it is not supported in this browser"),
            e)
        },
        adBlockKey: function(e) {
            return this.options.excludeAdBlock || e.push({
                key: "adblock",
                value: this.getAdBlock()
            }),
            e
        },
        hasLiedLanguagesKey: function(e) {
            return this.options.excludeHasLiedLanguages || e.push({
                key: "has_lied_languages",
                value: this.getHasLiedLanguages()
            }),
            e
        },
        hasLiedResolutionKey: function(e) {
            return this.options.excludeHasLiedResolution || e.push({
                key: "has_lied_resolution",
                value: this.getHasLiedResolution()
            }),
            e
        },
        hasLiedOsKey: function(e) {
            return this.options.excludeHasLiedOs || e.push({
                key: "has_lied_os",
                value: this.getHasLiedOs()
            }),
            e
        },
        hasLiedBrowserKey: function(e) {
            return this.options.excludeHasLiedBrowser || e.push({
                key: "has_lied_browser",
                value: this.getHasLiedBrowser()
            }),
            e
        },
        fontsKey: function(e, t) {
            return this.options.excludeJsFonts ? this.flashFontsKey(e, t) : this.jsFontsKey(e, t)
        },
        flashFontsKey: function(e, t) {
            return this.options.excludeFlashFonts ? ("undefined" == typeof NODEBUG && this.log("Skipping flash fonts detection per excludeFlashFonts configuration option"),
            t(e)) : this.hasSwfObjectLoaded() ? this.hasMinFlashInstalled() ? "undefined" == typeof this.options.swfPath ? ("undefined" == typeof NODEBUG && this.log("To use Flash fonts detection, you must pass a valid swfPath option, skipping Flash fonts enumeration"),
            t(e)) : void this.loadSwfAndDetectFonts(function(i) {
                e.push({
                    key: "swf_fonts",
                    value: i.join(";")
                }),
                t(e)
            }) : ("undefined" == typeof NODEBUG && this.log("Flash is not installed, skipping Flash fonts enumeration"),
            t(e)) : ("undefined" == typeof NODEBUG && this.log("Swfobject is not detected, Flash fonts enumeration is skipped"),
            t(e))
        },
        jsFontsKey: function(e, t) {
            var i = this;
            return setTimeout(function() {
                var n = ["monospace", "sans-serif", "serif"]
                  , r = "mmmmmmmmmmlli"
                  , a = "72px"
                  , o = document.getElementsByTagName("body")[0]
                  , s = document.createElement("span");
                s.style.fontSize = a,
                s.style.opacity = 0,
                s.innerHTML = r;
                for (var l = {}, u = {}, c = 0, d = n.length; d > c; c++)
                    s.style.fontFamily = n[c],
                    o.appendChild(s),
                    l[n[c]] = s.offsetWidth,
                    u[n[c]] = s.offsetHeight,
                    o.removeChild(s);
                var h = function(e) {
                    for (var t = !1, i = 0, r = n.length; r > i; i++) {
                        s.style.fontFamily = e + "," + n[i],
                        o.appendChild(s);
                        var a = s.offsetWidth !== l[n[i]] || s.offsetHeight !== u[n[i]];
                        o.removeChild(s),
                        t = t || a
                    }
                    return t
                }
                  , g = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"]
                  , p = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
                i.options.extendedJsFonts && (g = g.concat(p));
                for (var f = [], m = 0, S = g.length; S > m; m++)
                    h(g[m]) && f.push(g[m]);
                e.push({
                    key: "js_fonts",
                    value: f
                }),
                t(e)
            }, 1)
        },
        pluginsKey: function(e) {
            return this.options.excludePlugins || e.push(this.isIE() ? {
                key: "ie_plugins",
                value: this.getIEPlugins()
            } : {
                key: "regular_plugins",
                value: this.getRegularPlugins()
            }),
            e
        },
        getRegularPlugins: function() {
            for (var e = [], t = 0, i = navigator.plugins.length; i > t; t++)
                e.push(navigator.plugins[t]);
            return this.pluginsShouldBeSorted() && (e = e.sort(function(e, t) {
                return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
            })),
            this.map(e, function(e) {
                var t = this.map(e, function(e) {
                    return [e.type, e.suffixes].join("~")
                }).join(",");
                return [e.name, e.description, t].join("::")
            }, this)
        },
        getIEPlugins: function() {
            var e = [];
            if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject"in window) {
                var t = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
                e = this.map(t, function(e) {
                    try {
                        return new ActiveXObject(e),
                        e
                    } catch (t) {
                        return null
                    }
                })
            }
            return navigator.plugins && (e = e.concat(this.getRegularPlugins())),
            e
        },
        pluginsShouldBeSorted: function() {
            for (var e = !1, t = 0, i = this.options.sortPluginsFor.length; i > t; t++) {
                var n = this.options.sortPluginsFor[t];
                if (navigator.userAgent.match(n)) {
                    e = !0;
                    break
                }
            }
            return e
        },
        touchSupportKey: function(e) {
            return this.options.excludeTouchSupport || e.push({
                key: "touch_support",
                value: this.getTouchSupport()
            }),
            e
        },
        hasSessionStorage: function() {
            try {
                return !!window.sessionStorage
            } catch (e) {
                return !0
            }
        },
        hasLocalStorage: function() {
            try {
                return !!window.localStorage
            } catch (e) {
                return !0
            }
        },
        hasIndexedDB: function() {
            return !!window.indexedDB
        },
        getNavigatorCpuClass: function() {
            return navigator.cpuClass ? navigator.cpuClass : "unknown"
        },
        getNavigatorPlatform: function() {
            return navigator.platform ? navigator.platform : "unknown"
        },
        getDoNotTrack: function() {
            return navigator.doNotTrack ? navigator.doNotTrack : "unknown"
        },
        getTouchSupport: function() {
            var e = 0
              , t = !1;
            "undefined" != typeof navigator.maxTouchPoints ? e = navigator.maxTouchPoints : "undefined" != typeof navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);
            try {
                document.createEvent("TouchEvent"),
                t = !0
            } catch (i) {}
            var n = "ontouchstart"in window;
            return [e, t, n]
        },
        getCanvasFp: function() {
            var e = []
              , t = document.createElement("canvas");
            t.width = 2e3,
            t.height = 200,
            t.style.display = "inline";
            var i = t.getContext("2d");
            return i.rect(0, 0, 10, 10),
            i.rect(2, 2, 6, 6),
            e.push("canvas winding:" + (i.isPointInPath(5, 5, "evenodd") === !1 ? "yes" : "no")),
            i.textBaseline = "alphabetic",
            i.fillStyle = "#f60",
            i.fillRect(125, 1, 62, 20),
            i.fillStyle = "#069",
            i.font = this.options.dontUseFakeFontInCanvas ? "11pt Arial" : "11pt no-real-font-123",
            i.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
            i.fillStyle = "rgba(102, 204, 0, 0.7)",
            i.font = "18pt Arial",
            i.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
            i.globalCompositeOperation = "multiply",
            i.fillStyle = "rgb(255,0,255)",
            i.beginPath(),
            i.arc(50, 50, 50, 0, 2 * Math.PI, !0),
            i.closePath(),
            i.fill(),
            i.fillStyle = "rgb(0,255,255)",
            i.beginPath(),
            i.arc(100, 50, 50, 0, 2 * Math.PI, !0),
            i.closePath(),
            i.fill(),
            i.fillStyle = "rgb(255,255,0)",
            i.beginPath(),
            i.arc(75, 100, 50, 0, 2 * Math.PI, !0),
            i.closePath(),
            i.fill(),
            i.fillStyle = "rgb(255,0,255)",
            i.arc(75, 75, 75, 0, 2 * Math.PI, !0),
            i.arc(75, 75, 25, 0, 2 * Math.PI, !0),
            i.fill("evenodd"),
            e.push("canvas fp:" + t.toDataURL()),
            e.join("~")
        },
        getWebglFp: function() {
            var e, t = function(t) {
                return e.clearColor(0, 0, 0, 1),
                e.enable(e.DEPTH_TEST),
                e.depthFunc(e.LEQUAL),
                e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
                "[" + t[0] + ", " + t[1] + "]"
            }, i = function(e) {
                var t, i = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                return i ? (t = e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT),
                0 === t && (t = 2),
                t) : null
            };
            if (e = this.getWebglCanvas(),
            !e)
                return null;
            var n = []
              , r = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
              , a = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
              , o = e.createBuffer();
            e.bindBuffer(e.ARRAY_BUFFER, o);
            var s = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
            e.bufferData(e.ARRAY_BUFFER, s, e.STATIC_DRAW),
            o.itemSize = 3,
            o.numItems = 3;
            var l = e.createProgram()
              , u = e.createShader(e.VERTEX_SHADER);
            e.shaderSource(u, r),
            e.compileShader(u);
            var c = e.createShader(e.FRAGMENT_SHADER);
            return e.shaderSource(c, a),
            e.compileShader(c),
            e.attachShader(l, u),
            e.attachShader(l, c),
            e.linkProgram(l),
            e.useProgram(l),
            l.vertexPosAttrib = e.getAttribLocation(l, "attrVertex"),
            l.offsetUniform = e.getUniformLocation(l, "uniformOffset"),
            e.enableVertexAttribArray(l.vertexPosArray),
            e.vertexAttribPointer(l.vertexPosAttrib, o.itemSize, e.FLOAT, !1, 0, 0),
            e.uniform2f(l.offsetUniform, 1, 1),
            e.drawArrays(e.TRIANGLE_STRIP, 0, o.numItems),
            null != e.canvas && n.push(e.canvas.toDataURL()),
            n.push("extensions:" + e.getSupportedExtensions().join(";")),
            n.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),
            n.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),
            n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)),
            n.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")),
            n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)),
            n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)),
            n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)),
            n.push("webgl max anisotropy:" + i(e)),
            n.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
            n.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),
            n.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),
            n.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)),
            n.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),
            n.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)),
            n.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)),
            n.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)),
            n.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),
            n.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),
            n.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))),
            n.push("webgl red bits:" + e.getParameter(e.RED_BITS)),
            n.push("webgl renderer:" + e.getParameter(e.RENDERER)),
            n.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)),
            n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)),
            n.push("webgl vendor:" + e.getParameter(e.VENDOR)),
            n.push("webgl version:" + e.getParameter(e.VERSION)),
            e.getShaderPrecisionFormat ? (n.push("webgl vertex shader high float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision),
            n.push("webgl vertex shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMin),
            n.push("webgl vertex shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMax),
            n.push("webgl vertex shader medium float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision),
            n.push("webgl vertex shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMin),
            n.push("webgl vertex shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMax),
            n.push("webgl vertex shader low float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).precision),
            n.push("webgl vertex shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMin),
            n.push("webgl vertex shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMax),
            n.push("webgl fragment shader high float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision),
            n.push("webgl fragment shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMin),
            n.push("webgl fragment shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMax),
            n.push("webgl fragment shader medium float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision),
            n.push("webgl fragment shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMin),
            n.push("webgl fragment shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMax),
            n.push("webgl fragment shader low float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).precision),
            n.push("webgl fragment shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMin),
            n.push("webgl fragment shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMax),
            n.push("webgl vertex shader high int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).precision),
            n.push("webgl vertex shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMin),
            n.push("webgl vertex shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMax),
            n.push("webgl vertex shader medium int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).precision),
            n.push("webgl vertex shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMin),
            n.push("webgl vertex shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMax),
            n.push("webgl vertex shader low int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).precision),
            n.push("webgl vertex shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMin),
            n.push("webgl vertex shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMax),
            n.push("webgl fragment shader high int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).precision),
            n.push("webgl fragment shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMin),
            n.push("webgl fragment shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMax),
            n.push("webgl fragment shader medium int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).precision),
            n.push("webgl fragment shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMin),
            n.push("webgl fragment shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMax),
            n.push("webgl fragment shader low int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).precision),
            n.push("webgl fragment shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMin),
            n.push("webgl fragment shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMax),
            n.join("~")) : ("undefined" == typeof NODEBUG && this.log("WebGL fingerprinting is incomplete, because your browser does not support getShaderPrecisionFormat"),
            n.join("~"))
        },
        getAdBlock: function() {
            var e = document.createElement("div");
            e.setAttribute("id", "ads");
            try {
                return document.body.appendChild(e),
                !document.getElementById("ads")
            } catch (t) {
                return !1
            }
        },
        getHasLiedLanguages: function() {
            if ("undefined" != typeof navigator.languages)
                try {
                    var e = navigator.languages[0].substr(0, 2);
                    if (e !== navigator.language.substr(0, 2))
                        return !0
                } catch (t) {
                    return !0
                }
            return !1
        },
        getHasLiedResolution: function() {
            return screen.width < screen.availWidth || screen.height < screen.availHeight
        },
        getHasLiedOs: function() {
            var e, t = navigator.userAgent.toLowerCase(), i = navigator.oscpu, n = navigator.platform.toLowerCase();
            e = t.indexOf("windows phone") >= 0 ? "Windows Phone" : t.indexOf("win") >= 0 ? "Windows" : t.indexOf("android") >= 0 ? "Android" : t.indexOf("linux") >= 0 ? "Linux" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 ? "iOS" : t.indexOf("mac") >= 0 ? "Mac" : "Other";
            var r;
            if (r = "ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
            r && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e)
                return !0;
            if ("undefined" != typeof i) {
                if (i = i.toLowerCase(),
                i.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e)
                    return !0;
                if (i.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e)
                    return !0;
                if (i.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e)
                    return !0;
                if (0 === i.indexOf("win") && 0 === i.indexOf("linux") && i.indexOf("mac") >= 0 && "other" !== e)
                    return !0
            }
            return n.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e || ((n.indexOf("linux") >= 0 || n.indexOf("android") >= 0 || n.indexOf("pike") >= 0) && "Linux" !== e && "Android" !== e || ((n.indexOf("mac") >= 0 || n.indexOf("ipad") >= 0 || n.indexOf("ipod") >= 0 || n.indexOf("iphone") >= 0) && "Mac" !== e && "iOS" !== e || (0 === n.indexOf("win") && 0 === n.indexOf("linux") && n.indexOf("mac") >= 0 && "other" !== e || "undefined" == typeof navigator.plugins && "Windows" !== e && "Windows Phone" !== e)))
        },
        getHasLiedBrowser: function() {
            var e, t = navigator.userAgent.toLowerCase(), i = navigator.productSub;
            if (e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("chrome") >= 0 ? "Chrome" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : "Other",
            ("Chrome" === e || "Safari" === e || "Opera" === e) && "20030107" !== i)
                return !0;
            var n = eval.toString().length;
            if (37 === n && "Safari" !== e && "Firefox" !== e && "Other" !== e)
                return !0;
            if (39 === n && "Internet Explorer" !== e && "Other" !== e)
                return !0;
            if (33 === n && "Chrome" !== e && "Opera" !== e && "Other" !== e)
                return !0;
            var r;
            try {
                throw "a"
            } catch (a) {
                try {
                    a.toSource(),
                    r = !0
                } catch (o) {
                    r = !1
                }
            }
            return !(!r || "Firefox" === e || "Other" === e)
        },
        isCanvasSupported: function() {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"))
        },
        isWebGlSupported: function() {
            if (!this.isCanvasSupported())
                return !1;
            var e, t = document.createElement("canvas");
            try {
                e = t.getContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
            } catch (i) {
                e = !1
            }
            return !!window.WebGLRenderingContext && !!e
        },
        isIE: function() {
            return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
        },
        hasSwfObjectLoaded: function() {
            return "undefined" != typeof window.swfobject
        },
        hasMinFlashInstalled: function() {
            return swfobject.hasFlashPlayerVersion("9.0.0")
        },
        addFlashDivNode: function() {
            var e = document.createElement("div");
            e.setAttribute("id", this.options.swfContainerId),
            document.body.appendChild(e)
        },
        loadSwfAndDetectFonts: function(e) {
            var t = "___fp_swf_loaded";
            window[t] = function(t) {
                e(t)
            }
            ;
            var i = this.options.swfContainerId;
            this.addFlashDivNode();
            var n = {
                onReady: t
            }
              , r = {
                allowScriptAccess: "always",
                menu: "false"
            };
            swfobject.embedSWF(this.options.swfPath, i, "1", "1", "9.0.0", !1, n, r, {})
        },
        getWebglCanvas: function() {
            var e = document.createElement("canvas")
              , t = null;
            try {
                t = e.getContext("webgl") || e.getContext("experimental-webgl")
            } catch (i) {}
            return t || (t = null),
            t
        },
        each: function(e, t, i) {
            if (null !== e)
                if (this.nativeForEach && e.forEach === this.nativeForEach)
                    e.forEach(t, i);
                else if (e.length === +e.length) {
                    for (var n = 0, r = e.length; r > n; n++)
                        if (t.call(i, e[n], n, e) === {})
                            return
                } else
                    for (var a in e)
                        if (e.hasOwnProperty(a) && t.call(i, e[a], a, e) === {})
                            return
        },
        map: function(e, t, i) {
            var n = [];
            return null == e ? n : this.nativeMap && e.map === this.nativeMap ? e.map(t, i) : (this.each(e, function(e, r, a) {
                n[n.length] = t.call(i, e, r, a)
            }),
            n)
        },
        x64Add: function(e, t) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
            t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
            var i = [0, 0, 0, 0];
            return i[3] += e[3] + t[3],
            i[2] += i[3] >>> 16,
            i[3] &= 65535,
            i[2] += e[2] + t[2],
            i[1] += i[2] >>> 16,
            i[2] &= 65535,
            i[1] += e[1] + t[1],
            i[0] += i[1] >>> 16,
            i[1] &= 65535,
            i[0] += e[0] + t[0],
            i[0] &= 65535,
            [i[0] << 16 | i[1], i[2] << 16 | i[3]]
        },
        x64Multiply: function(e, t) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
            t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
            var i = [0, 0, 0, 0];
            return i[3] += e[3] * t[3],
            i[2] += i[3] >>> 16,
            i[3] &= 65535,
            i[2] += e[2] * t[3],
            i[1] += i[2] >>> 16,
            i[2] &= 65535,
            i[2] += e[3] * t[2],
            i[1] += i[2] >>> 16,
            i[2] &= 65535,
            i[1] += e[1] * t[3],
            i[0] += i[1] >>> 16,
            i[1] &= 65535,
            i[1] += e[2] * t[2],
            i[0] += i[1] >>> 16,
            i[1] &= 65535,
            i[1] += e[3] * t[1],
            i[0] += i[1] >>> 16,
            i[1] &= 65535,
            i[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0],
            i[0] &= 65535,
            [i[0] << 16 | i[1], i[2] << 16 | i[3]]
        },
        x64Rotl: function(e, t) {
            return t %= 64,
            32 === t ? [e[1], e[0]] : 32 > t ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32,
            [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
        },
        x64LeftShift: function(e, t) {
            return t %= 64,
            0 === t ? e : 32 > t ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
        },
        x64Xor: function(e, t) {
            return [e[0] ^ t[0], e[1] ^ t[1]]
        },
        x64Fmix: function(e) {
            return e = this.x64Xor(e, [0, e[0] >>> 1]),
            e = this.x64Multiply(e, [4283543511, 3981806797]),
            e = this.x64Xor(e, [0, e[0] >>> 1]),
            e = this.x64Multiply(e, [3301882366, 444984403]),
            e = this.x64Xor(e, [0, e[0] >>> 1]);
        },
        x64hash128: function(e, t) {
            e = e || "",
            t = t || 0;
            for (var i = e.length % 16, n = e.length - i, r = [0, t], a = [0, t], o = [0, 0], s = [0, 0], l = [2277735313, 289559509], u = [1291169091, 658871167], c = 0; n > c; c += 16)
                o = [255 & e.charCodeAt(c + 4) | (255 & e.charCodeAt(c + 5)) << 8 | (255 & e.charCodeAt(c + 6)) << 16 | (255 & e.charCodeAt(c + 7)) << 24, 255 & e.charCodeAt(c) | (255 & e.charCodeAt(c + 1)) << 8 | (255 & e.charCodeAt(c + 2)) << 16 | (255 & e.charCodeAt(c + 3)) << 24],
                s = [255 & e.charCodeAt(c + 12) | (255 & e.charCodeAt(c + 13)) << 8 | (255 & e.charCodeAt(c + 14)) << 16 | (255 & e.charCodeAt(c + 15)) << 24, 255 & e.charCodeAt(c + 8) | (255 & e.charCodeAt(c + 9)) << 8 | (255 & e.charCodeAt(c + 10)) << 16 | (255 & e.charCodeAt(c + 11)) << 24],
                o = this.x64Multiply(o, l),
                o = this.x64Rotl(o, 31),
                o = this.x64Multiply(o, u),
                r = this.x64Xor(r, o),
                r = this.x64Rotl(r, 27),
                r = this.x64Add(r, a),
                r = this.x64Add(this.x64Multiply(r, [0, 5]), [0, 1390208809]),
                s = this.x64Multiply(s, u),
                s = this.x64Rotl(s, 33),
                s = this.x64Multiply(s, l),
                a = this.x64Xor(a, s),
                a = this.x64Rotl(a, 31),
                a = this.x64Add(a, r),
                a = this.x64Add(this.x64Multiply(a, [0, 5]), [0, 944331445]);
            switch (o = [0, 0],
            s = [0, 0],
            i) {
            case 15:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(c + 14)], 48));
            case 14:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(c + 13)], 40));
            case 13:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(c + 12)], 32));
            case 12:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(c + 11)], 24));
            case 11:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(c + 10)], 16));
            case 10:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(c + 9)], 8));
            case 9:
                s = this.x64Xor(s, [0, e.charCodeAt(c + 8)]),
                s = this.x64Multiply(s, u),
                s = this.x64Rotl(s, 33),
                s = this.x64Multiply(s, l),
                a = this.x64Xor(a, s);
            case 8:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(c + 7)], 56));
            case 7:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(c + 6)], 48));
            case 6:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(c + 5)], 40));
            case 5:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(c + 4)], 32));
            case 4:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(c + 3)], 24));
            case 3:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(c + 2)], 16));
            case 2:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(c + 1)], 8));
            case 1:
                o = this.x64Xor(o, [0, e.charCodeAt(c)]),
                o = this.x64Multiply(o, l),
                o = this.x64Rotl(o, 31),
                o = this.x64Multiply(o, u),
                r = this.x64Xor(r, o)
            }
            return r = this.x64Xor(r, [0, e.length]),
            a = this.x64Xor(a, [0, e.length]),
            r = this.x64Add(r, a),
            a = this.x64Add(a, r),
            r = this.x64Fmix(r),
            a = this.x64Fmix(a),
            r = this.x64Add(r, a),
            a = this.x64Add(a, r),
            ("00000000" + (r[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (r[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8)
        }
    },
    e.VERSION = "1.1.1",
    e
}),
function(e) {
    if ("undefined" == typeof $GLog) {
        if ("undefined" == typeof GreenLine || !GreenLine.Log)
            return !1;
        $GLog = GreenLine.Log
    }
    $GLog.fpCode = 0;
    var t = function() {
        var t, i = Object.prototype.toString, n = Object.prototype.hasOwnProperty, r = {
            "[object Boolean]": "boolean",
            "[object Number]": "number",
            "[object String]": "string",
            "[object Function]": "function",
            "[object Array]": "array",
            "[object Date]": "date",
            "[object RegExp]": "regExp",
            "[object Object]": "object"
        }, a = function(e) {
            return null == e ? String(e) : r[i.call(e)] || "object"
        }, o = function(e) {
            return e && "object" == typeof e && "setInterval"in e
        }, s = Array.isArray || function(e) {
            return "array" === a(e)
        }
        , l = function(e) {
            if (!e || "object" !== a(e) || e.nodeType || o(e))
                return !1;
            if (e.constructor && !n.call(e, "constructor") && !n.call(e.constructor.prototype, "isPrototypeOf"))
                return !1;
            var t;
            for (t in e)
                ;
            return void 0 === t || n.call(e, t)
        }, u = function(e, i, n) {
            for (name in n) {
                var r = i[name]
                  , a = n[name];
                if (i !== a)
                    if (e && a && (l(a) || (t = s(a)))) {
                        var o;
                        t ? (t = !1,
                        o = r && s(r) ? r : []) : o = r && l(r) ? r : {},
                        i[name] = u(e, o, a)
                    } else
                        void 0 !== a && (i[name] = a)
            }
            return i
        }, c = function(t) {
            var i = new RegExp("(^|&)" + t + "=([^&]*)(&|$)")
              , n = e.location.search.substr(1).match(i);
            return null != n ? unescape(n[2]) : null
        }, d = function(e, t, i) {
            if ("undefined" == typeof t) {
                var n = null;
                if (document.cookie && "" != document.cookie)
                    for (var r = document.cookie.split(";"), a = 0; a < r.length; a++) {
                        var o = r[a].trim();
                        if (o.substring(0, e.length + 1) == e + "=") {
                            n = decodeURIComponent(o.substring(e.length + 1));
                            break
                        }
                    }
                return n
            }
            i = i || {},
            null === t && (t = "",
            i.expires = -1);
            var s = "";
            if (i.expires && ("number" == typeof i.expires || i.expires.toUTCString)) {
                var l;
                "number" == typeof i.expires ? (l = new Date,
                l.setTime(l.getTime() + 24 * i.expires * 60 * 60 * 1e3)) : l = i.expires,
                s = "; expires=" + l.toUTCString()
            }
            var u = i.path ? "; path=" + i.path : ""
              , c = i.domain ? "; domain=" + i.domain : ""
              , d = i.secure ? "; secure" : "";
            document.cookie = [e, "=", encodeURIComponent(t), s, u, c, d].join("")
        }, h = function(e, t, i) {
            var n, r = 0, a = e.length, o = void 0 === a || "function" == typeof e;
            if (i)
                if (o) {
                    for (n in e)
                        if (t.apply(e[n], i) === !1)
                            break
                } else
                    for (; r < a && t.apply(e[r++], i) !== !1; )
                        ;
            else if (o) {
                for (n in e)
                    if (t.call(e[n], n, e[n]) === !1)
                        break
            } else
                for (; r < a && t.call(e[r], r, e[r++]) !== !1; )
                    ;
            return e
        }, g = function(e, t) {
            var i = e.getElementsByTagName("*")
              , n = [];
            return i.length && h(i, function() {
                this.attributes && void 0 != this.attributes[t] && n.push(this)
            }),
            n
        }, p = function(e, t, i) {
            (p = e.addEventListener ? function(e, t, i) {
                e.addEventListener(t, i, !1)
            }
            : function(e, t, i) {
                e.attachEvent("on" + t, i)
            }
            )(e, t, i)
        }, f = function(t, i, n, r) {
            p(t, n, function(n) {
                var a = g(t, i);
                n = n ? n : e.event;
                for (var o = n.srcElement ? n.srcElement : n.target; a.indexOf(o) === -1; ) {
                    if (!o || !o.nodeName || "HTML" === o.nodeName)
                        return;
                    o = o.parentElement
                }
                return r.apply(o, arguments)
            }, !1)
        };
        return {
            extend: u,
            cookie: d,
            each: h,
            delegate: f,
            getUrlParams: c
        }
    }();
    !function() {
        var i = t.cookie("_fp_code_");
        i && 32 == i.length || !e.Fingerprint2 ? $GLog.fpCode = i : (new Fingerprint2).get(function(e, i) {
            t.cookie("_fp_code_", e, {
                domain: $GLog.domainEnd,
                path: "/",
                expires: 3650
            }),
            $GLog.fpCode = e
        })
    }();
    var i, n, r = $GLog.system ? $GLog.system : "web", a = location.protocol, o = $GLog.debug ? a + "//test.track" + r + ".guahao-inc.com/blank.gif" : a + "//track" + r + ".guahao.cn/blank.gif", s = $GLog.logUrl ? $GLog.logUrl : o, l = "mlt", u = "mst", c = {};
    "h5" !== r && "app" !== r ? (i = {
        get: function() {
            return +t.cookie("monitor_sid")
        },
        set: function(e) {
            return t.cookie("monitor_sid", e, {
                domain: $GLog.domainEnd,
                path: "/",
                expires: 365
            }),
            !0
        }
    },
    n = {
        get: function() {
            return +t.cookie("monitor_seq")
        },
        set: function(e) {
            return t.cookie("monitor_seq", e, {
                domain: $GLog.domainEnd,
                path: "/",
                expires: 365
            }),
            !0
        }
    },
    c.uuid = $GLog.fpCode,
    c.user_id = $GLog.loginId,
    c.enc_user_id = e.$GC && $GC.encodeId || "",
    c.open_id = e.$GC && $GC.extEncodeId || "",
    c.client = navigator.platform,
    c.persession_id = $GLog.perSessiionId,
    c.shortsession_id = $GLog.shortSessionId,
    c.url = location.href,
    c.pv_sid = i.get(),
    c.pv_seq = n.get(),
    c.uid_cat = $GLog.sourceId || "",
    c.st_time = t.cookie(u) || "") : (i = {
        get: function() {
            try {
                return +localStorage.getItem("monitor_sid")
            } catch (e) {
                return -1
            }
        },
        set: function(e) {
            try {
                return localStorage.setItem("monitor_sid", e),
                !0
            } catch (t) {
                return !1
            }
        }
    },
    n = {
        get: function() {
            try {
                return +sessionStorage.getItem("monitor_seq")
            } catch (e) {
                return -1
            }
        },
        set: function(e) {
            try {
                return sessionStorage.setItem("monitor_seq", e),
                !0
            } catch (t) {
                return !1
            }
        }
    },
    c.uuid = $GLog.fpCode,
    c.user_id = $GLog.loginId,
    c.enc_user_id = e.$GC && $GC.encodeId || "",
    c.open_id = e.$GC && $GC.extEncodeId || "",
    c.persession_id = $GLog.perSessiionId,
    c.shortsession_id = $GLog.shortSessionId,
    c.url = location.href,
    c.pv_sid = i.get(),
    c.pv_seq = n.get(),
    c.uid_cat = $GLog.sourceId || "",
    c.channel = t.getUrlParams("_channel"));
    var d = {
        isTouchDevice: function() {
            try {
                return document.createEvent("TouchEvent"),
                !0
            } catch (e) {
                return !1
            }
        },
        $emit: function(e) {
            var t = new Image
              , i = s + "?pdata=" + e.pdata + "&data=" + e.data;
            t.src = i
        },
        $serialize: function(i, n) {
            var r = [];
            t.each(i, function(e, t) {
                r.push(e + "=" + encodeURIComponent(t))
            }),
            r = r.join("|");
            var a = "";
            if (n)
                try {
                    a = JSON.stringify(n),
                    a = encodeURIComponent(a)
                } catch (o) {
                    e.console && console.error(o)
                }
            return {
                pdata: r,
                data: a
            }
        },
        visit: function(e) {
            var a = 18e5;
            if ("h5" === r || "app" === r) {
                0 === n.get() && i.set(i.get() + 1),
                n.set(n.get() + 1),
                setTimeout(function() {
                    n.set(0)
                }, g);
                var o = t.extend({}, c, {
                    report_time: (new Date).getTime(),
                    refer_url: document.referrer,
                    acct_id: t.getUrlParams("_f") || "",
                    track_souce: t.cookie("_track_source") || ""
                });
                if ("undefined" != typeof $BG && $BG && $BG.adaptNative)
                    $BG.adaptNative({
                        method: "pageTracker",
                        successCallback: function(t) {
                            t.callNative("pageTracker", {
                                pageUrl: location.href,
                                seq: n.get(),
                                msg: JSON.stringify(e)
                            })
                        },
                        failCallback: function() {
                            var t = d.$serialize(o, e);
                            d.$emit(t),
                            $GLog.debug && console.log("打点测试：%o", o)
                        }
                    });
                else {
                    var s = d.$serialize(o, e);
                    d.$emit(s),
                    $GLog.debug && console.log("打点测试：%o", o)
                }
            } else {
                var h = t.cookie(l) || 0
                  , g = new Date - h > a;
                g && (n.set(0),
                i.set(i.get() + 1),
                t.cookie(u, 1 * new Date, {
                    domain: $GLog.domainEnd,
                    path: "/",
                    expires: 365
                })),
                n.set(n.get() + 1),
                t.cookie(l, 1 * new Date, {
                    domain: $GLog.domainEnd,
                    path: "/",
                    expires: 365
                });
                var o = t.extend({}, c, {
                    report_time: (new Date).getTime(),
                    refer_url: document.referrer,
                    track_souce: t.cookie("_track_source") || ""
                })
                  , s = d.$serialize(o, e);
                d.$emit(s),
                $GLog.debug && console.log("打点测试：%o", o)
            }
        },
        click: function(e, i, n) {
            e = e.replace(/\s/g, "");
            var a = t.extend({}, c, {
                report_time: (new Date).getTime(),
                click_event: e
            });
            if ("h5" === r || "app" === r)
                if (!n && "undefined" != typeof $BG && $BG && $BG.adaptNative)
                    $BG.adaptNative({
                        method: "actionTracker",
                        successCallback: function(t) {
                            t.callNative("actionTracker", {
                                clickCode: e,
                                pageUrl: location.href,
                                msg: JSON.stringify(i)
                            })
                        },
                        failCallback: function() {
                            var e = d.$serialize(a, i);
                            d.$emit(e),
                            $GLog.debug && console.log("打点测试：%o", a)
                        }
                    });
                else {
                    var o = d.$serialize(a, i);
                    d.$emit(o),
                    $GLog.debug && console.log("打点测试：%o", a)
                }
            else {
                var o = d.$serialize(a, i);
                d.$emit(o),
                $GLog.debug && console.log("打点测试：%o", a)
            }
        }
    };
    e.monitorVisitConfig ? d.visit(e.monitorVisitConfig) : d.visit(),
    t.delegate(document, "monitor", "click", function() {
        var e = this.getAttribute("monitor")
          , i = {};
        t.each(this.attributes, function(e, t) {
            t.nodeName.replace(/monitor-(.*)/, function(e, n) {
                n = n.replace(/-/g, "_"),
                i[n] = t.nodeValue
            })
        }),
        d.click(e, i)
    }),
    e.$TK = e.scout = d,
    e.onerror = function(e, t, i, n) {
        $TK.click("front_error,js_error," + ($GLog.errorEventName || "portal_js_error"), {
            detail: "错误信息：" + e + "~~~出错文件：" + t + "~~~出错位置：" + i + "行，" + n + "列~~~浏览器信息：" + navigator.userAgent + "~~~访客信息：" + $GLog.loginId
        })
    }
}(window);
