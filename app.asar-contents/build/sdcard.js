! function(t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return t[i].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "./build/", e(0)
}({
    0: function(t, e, n) {
        n(967);
        var i = n(191),
            o = n(193),
            r = n(132),
            s = new i(n(1175));
        o.getFilter(i), i.transition("fade", {
            enter: function(t, e) {
                $(t).css("opacity", 0).animate({
                    opacity: 1
                }, 800, e)
            },
            enterCancelled: function(t) {
                $(t).stop()
            }
        }), r.on("/:view", function(t) {
            s.view = t
        }), r.init("flight-log"), i.config.debug = !0
    },
    2: function(t, e, n) {
        var i = n(189),
            o = i.extend;
        o(e, i), o(e, n(188)), o(e, n(187)), o(e, n(190)), o(e, n(185)), o(e, n(186))
    },
    3: function(t, e) {
        t.exports = {
            prefix: "v-",
            debug: !1,
            strict: !1,
            silent: !1,
            proto: !0,
            interpolate: !0,
            async: !0,
            warnExpressionErrors: !0,
            _delimitersChanged: !0,
            _assetTypes: ["component", "directive", "elementDirective", "filter", "transition", "partial"],
            _propBindingModes: {
                ONE_WAY: 0,
                TWO_WAY: 1,
                ONE_TIME: 2
            },
            _maxUpdateCount: 100
        };
        var n = ["{{", "}}"];
        Object.defineProperty(t.exports, "delimiters", {
            get: function() {
                return n
            },
            set: function(t) {
                n = t, this._delimitersChanged = !0
            }
        })
    },
    4: function(t, e) {
        "use strict";
        t.exports = {
            ready: function() {
                this.$root.locale || this.$root.$set("locale", "en")
            },
            methods: {
                translate: function(t, e) {
                    e = e || this.locale || this.$root.locale;
                    var n = this.$options.translations || this.$root.$options.translations;
                    try {
                        var i = t.split(".").reduce(function(t, e, i) {
                            return "object" == typeof t ? t[e] : n[t][e]
                        })[e];
                        i || (i = t.split(".").reduce(function(t, e, i) {
                            return "object" == typeof t ? t[e] : n[t][e]
                        }).en)
                    } catch (i) {
                        try {
                            var i = t.split(".").reduce(function(t, e, i) {
                                return "object" == typeof t ? t[e] : n[t][e]
                            }).en
                        } catch (n) {
                            console.warn("No translation found for namespace %s using locale %s (%s)", t, e, n)
                        }
                    }
                    return i
                },
                t: function(t, e) {
                    return this.translate(t, e)
                }
            }
        }
    },
    5: function(t, e, n) {
        function i(t) {
            return s.isTemplate(t) && t.content instanceof DocumentFragment
        }

        function o(t) {
            var e = l.get(t);
            if (e) return e;
            var n = document.createDocumentFragment(),
                i = t.match(d),
                o = h.test(t);
            if (i || o) {
                var r = i && i[1],
                    s = u[r] || u._default,
                    a = s[0],
                    c = s[1],
                    p = s[2],
                    f = document.createElement("div");
                for (f.innerHTML = c + t.trim() + p; a--;) f = f.lastChild;
                for (var g; g = f.firstChild;) n.appendChild(g)
            } else n.appendChild(document.createTextNode(t));
            return l.put(t, n), n
        }

        function r(t) {
            if (i(t)) return s.trimNode(t.content), t.content;
            if ("SCRIPT" === t.tagName) return o(t.textContent);
            for (var n, r = e.clone(t), a = document.createDocumentFragment(); n = r.firstChild;) a.appendChild(n);
            return s.trimNode(a), a
        }
        var s = n(2),
            a = n(6),
            l = new a(1e3),
            c = new a(1e3),
            u = {
                _default: [0, "", ""],
                legend: [1, "<fieldset>", "</fieldset>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]
            };
        u.td = u.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"], u.option = u.optgroup = [1, '<select multiple="multiple">', "</select>"], u.thead = u.tbody = u.colgroup = u.caption = u.tfoot = [1, "<table>", "</table>"], u.g = u.defs = u.symbol = u.use = u.image = u.text = u.circle = u.ellipse = u.line = u.path = u.polygon = u.polyline = u.rect = [1, '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">', "</svg>"];
        var d = /<([\w:]+)/,
            h = /&\w+;|&#\d+;|&#x[\dA-F]+;/,
            p = function() {
                if (s.inBrowser) {
                    var t = document.createElement("div");
                    return t.innerHTML = "<template>1</template>", !t.cloneNode(!0).firstChild.innerHTML
                }
                return !1
            }(),
            f = function() {
                if (s.inBrowser) {
                    var t = document.createElement("textarea");
                    return t.placeholder = "t", "t" === t.cloneNode(!0).value
                }
                return !1
            }();
        e.clone = function(t) {
            if (!t.querySelectorAll) return t.cloneNode();
            var n, o, r, s = t.cloneNode(!0);
            if (p) {
                var a = s;
                if (i(t) && (t = t.content, a = s.content), o = t.querySelectorAll("template"), o.length)
                    for (r = a.querySelectorAll("template"), n = r.length; n--;) r[n].parentNode.replaceChild(e.clone(o[n]), r[n])
            }
            if (f)
                if ("TEXTAREA" === t.tagName) s.value = t.value;
                else if (o = t.querySelectorAll("textarea"), o.length)
                for (r = s.querySelectorAll("textarea"), n = r.length; n--;) r[n].value = o[n].value;
            return s
        }, e.parse = function(t, n, i) {
            var a, l;
            return t instanceof DocumentFragment ? (s.trimNode(t), n ? e.clone(t) : t) : ("string" == typeof t ? i || "#" !== t.charAt(0) ? l = o(t) : (l = c.get(t), l || (a = document.getElementById(t.slice(1)), a && (l = r(a), c.put(t, l)))) : t.nodeType && (l = r(t)), l && n ? e.clone(l) : l)
        }
    },
    6: function(t, e) {
        function n(t) {
            this.size = 0, this.limit = t, this.head = this.tail = void 0, this._keymap = Object.create(null)
        }
        var i = n.prototype;
        i.put = function(t, e) {
            var n = {
                key: t,
                value: e
            };
            return this._keymap[t] = n, this.tail ? (this.tail.newer = n, n.older = this.tail) : this.head = n, this.tail = n, this.size === this.limit ? this.shift() : void this.size++
        }, i.shift = function() {
            var t = this.head;
            return t && (this.head = this.head.newer, this.head.older = void 0, t.newer = t.older = void 0, this._keymap[t.key] = void 0), t
        }, i.get = function(t, e) {
            var n = this._keymap[t];
            if (void 0 !== n) return n === this.tail ? e ? n : n.value : (n.newer && (n === this.head && (this.head = n.newer), n.newer.older = n.older), n.older && (n.older.newer = n.newer), n.newer = void 0, n.older = this.tail, this.tail && (this.tail.newer = n), this.tail = n, e ? n : n.value)
        }, t.exports = n
    },
    7: function(t, e, n) {
        var i = n(2);
        i.extend(e, n(149)), i.extend(e, n(150))
    },
    8: function(t, e, n) {
        function i(t) {
            return t.replace(g, "\\$&")
        }

        function o() {
            p._delimitersChanged = !1;
            var t = p.delimiters[0],
                e = p.delimiters[1];
            u = t.charAt(0), d = e.charAt(e.length - 1);
            var n = i(u),
                o = i(d),
                r = i(t),
                s = i(e);
            l = new RegExp(n + "?" + r + "(.+?)" + s + o + "?", "g"), c = new RegExp("^" + n + r + ".*" + s + o + "$"), a = new h(1e3)
        }

        function r(t, e, n) {
            return t.tag ? e && t.oneTime ? '"' + e.$eval(t.value) + '"' : s(t.value, n) : '"' + t.value + '"'
        }

        function s(t, e) {
            if (v.test(t)) {
                var n = f.parse(t)[0];
                return n.filters ? "this._applyFilters(" + n.expression + ",null," + JSON.stringify(n.filters) + ",false)" : "(" + t + ")"
            }
            return e ? t : "(" + t + ")"
        }
        var a, l, c, u, d, h = n(6),
            p = n(3),
            f = n(12),
            g = /[-.*+?^${}()|[\]\/\\]/g;
        e.parse = function(t) {
            p._delimitersChanged && o();
            var e = a.get(t);
            if (e) return e;
            if (t = t.replace(/\n/g, ""), !l.test(t)) return null;
            for (var n, i, r, s, u, d, h = [], f = l.lastIndex = 0; n = l.exec(t);) i = n.index, i > f && h.push({
                value: t.slice(f, i)
            }), s = n[1].charCodeAt(0), u = 42 === s, d = 64 === s, r = u || d ? n[1].slice(1) : n[1], h.push({
                tag: !0,
                value: r.trim(),
                html: c.test(n[0]),
                oneTime: u,
                twoWay: d
            }), f = i + n[0].length;
            return f < t.length && h.push({
                value: t.slice(f)
            }), a.put(t, h), h
        }, e.tokensToExp = function(t, e) {
            return t.length > 1 ? t.map(function(t) {
                return r(t, e)
            }).join("+") : r(t[0], e, !0)
        };
        var v = /[^|]\|[^|]/
    },
    9: function(t, e) {
        t.exports = {
            init: function() {},
            addDevice: function(t, e) {
                try {
                    console.log("lstore addDevice:", t);
                    for (var n = JSON.parse(localStorage.getItem("devices") || "[]"), i = 0, o = n.length; i < o; i++)
                        if (n[i].FILE === t.FILE) return void(JSON.stringify(n[i]) !== JSON.stringify(t) ? (e ? $.extend(n[i], t) : n[i] = t, localStorage.setItem("devices", JSON.stringify(n)), console.log("lstore.addDevice: update device status")) : console.log("lstore.addDevice: same file!"));
                    return console.log("lstore.addDevice: add a new device!"), n.push(t), localStorage.setItem("devices", JSON.stringify(n)), !0
                } catch (t) {
                    console.log(t)
                }
            },
            clearDevice: function() {
                console.log("lstore.clearDevice");
                try {
                    localStorage.setItem("devices", []), this.setActiveDevice({}, {})
                } catch (t) {
                    console.log(t)
                }
            },
            removeDevice: function(t) {
                try {
                    for (var e = JSON.parse(localStorage.getItem("devices") || "[]"), n = 0, i = e.length; n < i; n++)
                        if (e[n].FILE === t.FILE) return console.log("device.FILE", t.FILE), e.splice(n, 1), localStorage.setItem("devices", JSON.stringify(e)), !0;
                    return !1
                } catch (t) {
                    console.log(t)
                }
            },
            getAllDevices: function() {
                try {
                    return JSON.parse(localStorage.getItem("devices") || "[]")
                } catch (t) {
                    console.log(t)
                }
            },
            setActiveDevice: function(t, e) {
                try {
                    console.log("setting active_device", JSON.stringify(t)), localStorage.setItem("active_device", JSON.stringify(t)), this.setActiveDeviceConfig(e)
                } catch (t) {
                    console.log(t)
                }
            },
            setActiveDevice2: function(t) {
                try {
                    console.log("setting active_device", JSON.stringify(t)), localStorage.setItem("active_device", JSON.stringify(t))
                } catch (t) {
                    console.log(t)
                }
            },
            setActiveDeviceConfig: function(t) {
                try {
                    localStorage.setItem("active_device_config", JSON.stringify(t))
                } catch (t) {
                    console.log(t)
                }
            },
            removeActiveDevice: function() {
                try {
                    localStorage.removeItem("active_device"), this.removeActiveDeviceConfig()
                } catch (t) {
                    console.log(t)
                }
            },
            removeActiveDeviceConfig: function(t) {
                try {
                    localStorage.removeItem("active_device_config")
                } catch (t) {
                    console.log(t)
                }
            },
            getActiveDevice: function() {
                try {
                    return JSON.parse(localStorage.getItem("active_device")) || {}
                } catch (t) {
                    console.log(t)
                }
            },
            getActiveDeviceConfig: function() {
                try {
                    return JSON.parse(localStorage.getItem("active_device_config")) || {}
                } catch (t) {
                    console.log(t)
                }
            },
            setActiveFirmware: function(t) {
                localStorage.setItem("active_firmware", JSON.stringify(t))
            },
            getActiveFirmware: function() {
                try {
                    return JSON.parse(localStorage.getItem("active_firmware")) || {}
                } catch (t) {
                    console.log(t)
                }
            },
            setActiveHardware: function(t) {
                localStorage.setItem("active_hardware", JSON.stringify(t))
            },
            getEmail: function() {
                return localStorage.getItem("email") || !1
            },
            setEmail: function(t) {
                localStorage.setItem("email", t)
            },
            clearEmail: function(t) {
                localStorage.removeItem("email")
            },
            getLang: function() {
                var t = localStorage.getItem("locale") || "en";
                return window.ipcRenderer || utils.initElectron(), window.ipcRenderer.send("set-locale", t), t
            },
            setLang: function(t) {
                localStorage.setItem("locale", t), window.ipcRenderer || utils.initElectron(), window.ipcRenderer.send("set-locale", t)
            },
            getDebug: function() {
                return localStorage.getItem("debug") || 0
            },
            setDebug: function(t) {
                localStorage.setItem("debug", t)
            },
            clearDebug: function() {
                try {
                    localStorage.removeItem("debug")
                } catch (t) {
                    console.error("localStorage.removeItem error, funName:clearDebug")
                }
            },
            getDebugEnabled: function() {
                try {
                    return JSON.parse(localStorage.getItem("debug_enabled")) || !1
                } catch (t) {
                    console.log(t)
                }
            },
            setDebugEnabled: function(t) {
                localStorage.setItem("debug_enabled", t)
            },
            getFactoryEnabled: function() {
                try {
                    return JSON.parse(localStorage.getItem("factory_enabled")) || !1
                } catch (t) {
                    console.log(t)
                }
            },
            setFactoryEnabled: function(t) {
                localStorage.setItem("factory_enabled", t || !1)
            },
            getTestServerEnabled: function() {
                try {
                    return JSON.parse(localStorage.getItem("test_server_enabled")) || !1
                } catch (t) {
                    console.log(t)
                }
            },
            setTestServerEnabled: function(t) {
                localStorage.setItem("test_server_enabled", t || !1)
            },
            setbackupdate: function() {
                localStorage.setItem("backupdate", Date.now())
            },
            setbackupdate: function() {
                localStorage.setItem("backupdate", Date.now())
            },
            backup: function(t) {
                localStorage.setItem("backupdate", Date.now()), localStorage.setItem("backup", JSON.stringify(t))
            },
            getbackup: function() {
                try {
                    return JSON.parse(localStorage.getItem("backup")) || {}
                } catch (t) {
                    console.log(t)
                }
            },
            getbackupdate: function() {
                return localStorage.getItem("backupdate") || ""
            },
            getUpgradeStatus: function() {
                try {
                    return localStorage.getItem("upgrade_status") || 0
                } catch (t) {
                    console.log(t)
                }
            },
            setUpgradeStatus: function(t) {
                localStorage.setItem("upgrade_status", t || 0)
            },
            readP4CalibrationTutorial: function() {
                localStorage.setItem("p4_calibration_tutorial_read", "true")
            },
            isP4CalibrationTutorialRead: function() {
                return "true" == localStorage.getItem("p4_calibration_tutorial_read")
            },
            getdownloadPath: function() {
                return localStorage.getItem("downloadPath") || ""
            },
            setdownloadPath: function(t) {
                localStorage.setItem("downloadPath", t)
            },
            getSortRoutesDateFlag: function() {
                return localStorage.getItem("has_sort_routes_date")
            },
            setSortRoutesDateFlag: function(t) {
                return localStorage.setItem("has_sort_routes_date", t)
            },
            getAllRoutes: function() {
                try {
                    var t = JSON.parse(localStorage.getItem("routes")) || !1;
                    return t && t.sort(function(t, e) {
                        return e.last_open - t.last_open
                    }), t
                } catch (t) {
                    console.log(t)
                }
            },
            getRoutesCount: function() {
                try {
                    var t = JSON.parse(localStorage.getItem("routes")) || !1;
                    return Object.keys(t).length
                } catch (t) {
                    console.log(t)
                }
            },
            setRouteInfo: function(t) {
                localStorage.setItem("routes", JSON.stringify(t))
            },
            addRoute: function(t) {
                var e = function() {
                    for (var t = JSON.parse(localStorage.getItem("routes")) || [], e = t.length;;) {
                        for (var n = "route_" + (new Date).getTime() + "_" + Math.round(1e5 * Math.random()), i = !0, o = 0; o < e; o++)
                            if (t[o].id === n) {
                                i = !1;
                                break
                            }
                        if (i) return n
                    }
                };
                try {
                    var n = e();
                    t.id = t.routeId || n;
                    var i = JSON.parse(localStorage.getItem("routes")) || [];
                    return i.unshift(t), localStorage.setItem("routes", JSON.stringify(i)), t.id
                } catch (t) {
                    return console.log(t), !1
                }
            },
            setRoute: function(t, e) {
                console.log("route opt setRoute, ", e);
                try {
                    var n = $.extend(!0, {}, e);
                    delete n.id;
                    for (var i = JSON.parse(localStorage.getItem("routes")) || [], o = 0, r = i.length; o < r; o++)
                        if (i[o].id === t) return $.extend(i[o], n), localStorage.setItem("routes", JSON.stringify(i)), !0;
                    return !1
                } catch (t) {
                    return console.log(t), !1
                }
            },
            removeRoute: function(t) {
                try {
                    var e = JSON.parse(localStorage.getItem("routes")) || [];
                    return e.splice(t, 1) != [] && (localStorage.setItem("routes", JSON.stringify(e)), !0)
                } catch (t) {
                    console.log(t)
                }
            },
            removeRouteById: function(t) {
                try {
                    for (var e = JSON.parse(localStorage.getItem("routes")) || [], n = 0; n < e.length; n++)
                        if (e[n].id == t && e.splice(n, 1) != []) return localStorage.setItem("routes", JSON.stringify(e)), !0;
                    return !1
                } catch (t) {
                    console.log(t)
                }
            },
            getPrevLocation: function() {
                return JSON.parse(localStorage.getItem("prev_latlng")) || !1
            },
            setPrevLocation: function(t) {
                localStorage.setItem("prev_latlng", JSON.stringify(t))
            },
            removeAircraft: function(t) {
                try {
                    var e = JSON.parse(localStorage.getItem("aircraft_map")) || {};
                    return e["aircraft_" + t] && (delete e["aircraft_" + t], localStorage.setItem("aircraft_map", JSON.stringify(e))), !0
                } catch (t) {
                    return console.log(t.message), !1
                }
            },
            setAircraft: function(t, e) {
                try {
                    var n = JSON.parse(localStorage.getItem("aircraft_map")) || {},
                        i = n["aircraft_" + t] || {};
                    return $.extend(i, e), n["aircraft_" + t] = i, localStorage.setItem("aircraft_map", JSON.stringify(n)), !0
                } catch (t) {
                    return console.log(t.message), !1
                }
            },
            getAircraft: function(t) {
                try {
                    var e = JSON.parse(localStorage.getItem("aircraft_map")) || {};
                    return t ? e["aircraft_" + t] || {} : e
                } catch (t) {
                    return console.log(t.message), !1
                }
            },
            getSimParamLatitude: function() {
                return JSON.parse(localStorage.getItem("simParam_Latitude"))
            },
            setSimParamLatitude: function(t) {
                localStorage.setItem("simParam_Latitude", t), console.log("set down!", localStorage.getItem("simParam_Latitude"))
            },
            getSimParamLongitude: function() {
                return JSON.parse(localStorage.getItem("simParam_Longitude"))
            },
            setSimParamLongitude: function(t) {
                localStorage.setItem("simParam_Longitude", t), console.log("set down!", localStorage.getItem("simParam_Longitude"))
            },
            getFirstShowUpgrade: function(t) {
                for (var e = JSON.parse(localStorage.getItem("first_show_upgrate") || "[]"), n = 0, i = e.length; n < i; n++)
                    if (console.log(typeof e[n].deviceId, typeof t), e[n].deviceId === t) return e[n].ifshow;
                return console.log("lstore return true!"), !0
            },
            setFirstShowUpgrade: function(t, e, n) {
                for (var i = JSON.parse(localStorage.getItem("first_show_upgrate") || "[]"), o = 0, r = 0, s = i.length; r < s; r++) i[r].deviceId === t && (i[r].version = e, i[r].ifshow = n, o = 1);
                return o || i.push({
                    deviceId: t,
                    version: e,
                    ifshow: n
                }), localStorage.setItem("first_show_upgrate", JSON.stringify(i)), localStorage.getItem("first_show_upgrate")
            },
            removeFirstShowUpgrade: function(t) {
                for (var e = JSON.parse(localStorage.getItem("first_show_upgrate") || "[]"), n = 0, i = e.length; n < i; n++)
                    if (e[n].deviceId === t) return e.splice(n, 1), void localStorage.setItem("first_show_upgrate", JSON.stringify(e))
            },
            setUpgradeF2Info: function(t, e) {
                try {
                    var n = {
                        name: t,
                        password: e
                    };
                    localStorage.setItem("upgrade_f2", JSON.stringify(n))
                } catch (t) {
                    console.error("localStorage.setItem error, funName:setUpgradeF2Info")
                }
            },
            getUpgradeF2Info: function() {
                try {
                    var t = localStorage.getItem("upgrade_f2");
                    return JSON.parse(t)
                } catch (t) {
                    console.error("localStorage.getItem error, funName:getUpgradeF2Info")
                }
            },
            removeUpgradeF2Info: function() {
                try {
                    localStorage.removeItem("upgrade_f2")
                } catch (t) {
                    console.error("localStorage.removeItem error, funName:removeUpgradeF2Info")
                }
            },
            setCalibrationNotTeachFlag: function(t, e) {
                try {
                    localStorage.setItem("calibration_not_teach_" + t, e)
                } catch (t) {
                    console.error("localStorage.setItem error, funName:setCalibrationNotTeachFlag")
                }
            },
            getCalibrationNotTeachFlag: function(t) {
                try {
                    return localStorage.getItem("calibration_not_teach_" + t)
                } catch (t) {
                    console.error("localStorage.getItem error, funName:getCalibrationNotTeachFlag")
                }
            },
            get_m600_line_no_more_remind: function() {
                try {
                    return localStorage.getItem("m600_line_no_more_remind") || ""
                } catch (t) {
                    console.error("localStorage.getItem error, funName:get_m600_line_no_more_remind")
                }
            },
            set_m600_line_no_more_remind: function(t) {
                try {
                    return localStorage.setItem("m600_line_no_more_remind", t)
                } catch (t) {
                    console.error("localStorage.getItem error, funName:set_m600_line_no_more_remind")
                }
            },
            remove_m600_line_no_more_remind: function() {
                try {
                    return localStorage.removeItem("m600_line_no_more_remind")
                } catch (t) {
                    console.error("localStorage.getItem error, funName:remove_m600_line_no_more_remind")
                }
            },
            get_m600_upgrade_no_more_remind: function(t) {
                try {
                    return localStorage.getItem("m600_upgrade_no_more_remind_" + t) || ""
                } catch (t) {
                    console.error("localStorage.getItem error, funName:m600_upgrade_no_more_remind")
                }
            },
            set_m600_upgrade_no_more_remind: function(t, e) {
                try {
                    return localStorage.setItem("m600_upgrade_no_more_remind_" + t, e)
                } catch (t) {
                    console.error("localStorage.setItem error, funName:m600_upgrade_no_more_remind")
                }
            },
            remove_m600_upgrade_no_more_remind: function(t) {
                try {
                    return localStorage.removeItem("m600_upgrade_no_more_remind_" + t)
                } catch (t) {
                    console.error("localStorage.removeItem error, funName:m600_upgrade_no_more_remind")
                }
            },
            set_video_urls: function(t) {
                try {
                    return localStorage.setItem("video_urls", JSON.stringify(t))
                } catch (t) {
                    console.error("localStorage.setItem error, funName:video_urls")
                }
            },
            get_video_urls: function() {
                try {
                    var t = localStorage.getItem("video_urls");
                    return t ? JSON.parse(t) : null
                } catch (t) {
                    console.error("localStorage.getItem error, funName:video_urls")
                }
            },
            setProjectId: function(t) {
                localStorage.setItem("projectid", t)
            },
            getProjectId: function() {
                return localStorage.getItem("projectid")
            },
            setAtUser: function(t) {
                localStorage.setItem("at_user", JSON.stringify(t))
            },
            getAtUser: function() {
                try {
                    return JSON.parse(localStorage.getItem("at_user")) || !1
                } catch (t) {
                    console.log(t)
                }
            },
            delAtUser: function() {
                localStorage.removeItem("at_user"), localStorage.removeItem("session")
            },
            setCaseListCurPage: function(t, e) {
                localStorage.setItem("case_list_page_" + t, e)
            },
            getCaseListCurPage: function(t) {
                return localStorage.getItem("case_list_page_" + t)
            },
            setSession: function(t) {
                localStorage.setItem("session", t)
            },
            getSession: function() {
                return localStorage.getItem("session")
            },
            setNewCasePath: function(t) {
                localStorage.setItem("new_case_path", t)
            },
            getNewCasePath: function() {
                return localStorage.getItem("new_case_path")
            },
            setAtTemplate: function(t) {
                localStorage.setItem("at_template", JSON.stringify(t))
            },
            getAtTemplate: function() {
                try {
                    return JSON.parse(localStorage.getItem("at_template")) || !1
                } catch (t) {
                    console.log(t)
                }
            },
            setMapInfo: function(t) {
                localStorage.setItem("map_into", JSON.stringify(t))
            },
            getMapInfo: function() {
                return JSON.parse(localStorage.getItem("map_into")) || {}
            },
            _getAircraftRouteMap: function() {
                var t = "aircraft_route_map",
                    e = localStorage.getItem(t);
                if (e) try {
                    e = JSON.parse(e)
                } catch (t) {
                    console.log("setAircraftRoute error, too large, ", t)
                } else e = {};
                return e
            },
            setAircraftRoute: function(t, e) {
                if (t && e) {
                    var n = "aircraft_route_map",
                        i = this._getAircraftRouteMap();
                    i[t] = JSON.stringify(e), localStorage.setItem(n, JSON.stringify(i))
                }
            },
            getAircraftRoute: function(t) {
                if (t) {
                    var e = this._getAircraftRouteMap(),
                        n = e[t];
                    if (n) try {
                        n = JSON.parse(n)
                    } catch (t) {
                        console.log("getAircraftRoute error, ", t)
                    }
                    return n
                }
            },
            getGmca: function() {
                return JSON.parse(localStorage.getItem("gmca")) || !1
            },
            setGmca: function(t) {
                localStorage.setItem("gmca", JSON.stringify(t))
            },
            set_report_cfg_showed: function(t) {
                localStorage.setItem("report_cfg_showed", t)
            },
            get_report_cfg_showed: function() {
                return localStorage.getItem("report_cfg_showed") || 0
            },
            ignore_upgrade_sql: function(t) {
                try {
                    var e = localStorage.getItem("ignore_upgrade_sql") || "{}";
                    return e = JSON.parse(e), e[t] = 1, localStorage.setItem("ignore_upgrade_sql", JSON.stringify(e)), !0
                } catch (t) {
                    return !1
                }
            },
            clear_ignore_upgrade_sql: function() {
                return localStorage.removeItem("ignore_upgrade_sql"), !0
            },
            if_ignore_upgrade_sql: function(t) {
                try {
                    var e = localStorage.getItem("ignore_upgrade_sql") || "{}";
                    return e = JSON.parse(e), e[t] || 0
                } catch (t) {
                    return !1
                }
            },
            set_cali_log_opitons: function(t) {
                localStorage.setItem("cali_log_opitons", JSON.stringify(t))
            },
            get_cali_log_opitons: function() {
                var t = localStorage.getItem("cali_log_opitons");
                try {
                    return JSON.parse(t)
                } catch (t) {
                    return null
                }
            },
            set_ass_version: function(t) {
                localStorage.setItem("ass_version", t)
            },
            get_ass_version: function(t) {
                var e = localStorage.getItem("ass_version");
                return e
            },
            set_system_info: function(t) {
                localStorage.setItem("system_info", JSON.stringify(t))
            },
            get_system_info: function() {
                var t = localStorage.getItem("system_info");
                try {
                    return JSON.parse(t)
                } catch (t) {
                    return null
                }
            },
            get_mobile_bind: function(t) {
                try {
                    var e = localStorage.getItem("mobile_bind"),
                        n = JSON.parse(e) || {};
                    return n[t]
                } catch (t) {
                    return
                }
            },
            update_mobile_bind: function(t, e) {
                try {
                    var n = localStorage.getItem("mobile_bind"),
                        i = JSON.parse(n) || {};
                    i[t] = e, localStorage.setItem("mobile_bind", JSON.stringify(i))
                } catch (t) {}
            }
        }
    },
    10: function(t, e, n) {
        function i(t, e) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n],
                    o = d[i.id];
                if (o) {
                    o.refs++;
                    for (var r = 0; r < o.parts.length; r++) o.parts[r](i.parts[r]);
                    for (; r < i.parts.length; r++) o.parts.push(a(i.parts[r], e))
                } else {
                    for (var s = [], r = 0; r < i.parts.length; r++) s.push(a(i.parts[r], e));
                    d[i.id] = {
                        id: i.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }

        function o(t) {
            for (var e = [], n = {}, i = 0; i < t.length; i++) {
                var o = t[i],
                    r = o[0],
                    s = o[1],
                    a = o[2],
                    l = o[3],
                    c = {
                        css: s,
                        media: a,
                        sourceMap: l
                    };
                n[r] ? n[r].parts.push(c) : e.push(n[r] = {
                    id: r,
                    parts: [c]
                })
            }
            return e
        }

        function r() {
            var t = document.createElement("style"),
                e = f();
            return t.type = "text/css", e.appendChild(t), t
        }

        function s() {
            var t = document.createElement("link"),
                e = f();
            return t.rel = "stylesheet", e.appendChild(t), t
        }

        function a(t, e) {
            var n, i, o;
            if (e.singleton) {
                var a = v++;
                n = g || (g = r()), i = l.bind(null, n, a, !1), o = l.bind(null, n, a, !0)
            } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = s(), i = u.bind(null, n), o = function() {
                n.parentNode.removeChild(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = r(), i = c.bind(null, n), o = function() {
                n.parentNode.removeChild(n)
            });
            return i(t),
                function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                        i(t = e)
                    } else o()
                }
        }

        function l(t, e, n, i) {
            var o = n ? "" : i.css;
            if (t.styleSheet) t.styleSheet.cssText = m(e, o);
            else {
                var r = document.createTextNode(o),
                    s = t.childNodes;
                s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(r, s[e]) : t.appendChild(r)
            }
        }

        function c(t, e) {
            var n = e.css,
                i = e.media;
            e.sourceMap;
            if (i && t.setAttribute("media", i), t.styleSheet) t.styleSheet.cssText = n;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n))
            }
        }

        function u(t, e) {
            var n = e.css,
                i = (e.media, e.sourceMap);
            i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var o = new Blob([n], {
                    type: "text/css"
                }),
                r = t.href;
            t.href = URL.createObjectURL(o), r && URL.revokeObjectURL(r)
        }
        var d = {},
            h = function(t) {
                var e;
                return function() {
                    return "undefined" == typeof e && (e = t.apply(this, arguments)), e
                }
            },
            p = h(function() {
                return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
            }),
            f = h(function() {
                return document.head || document.getElementsByTagName("head")[0]
            }),
            g = null,
            v = 0;
        t.exports = function(t, e) {
            e = e || {}, "undefined" == typeof e.singleton && (e.singleton = p());
            var n = o(t);
            return i(n, e),
                function(t) {
                    for (var r = [], s = 0; s < n.length; s++) {
                        var a = n[s],
                            l = d[a.id];
                        l.refs--, r.push(l)
                    }
                    if (t) {
                        var c = o(t);
                        i(c, e)
                    }
                    for (var s = 0; s < r.length; s++) {
                        var l = r[s];
                        if (0 === l.refs) {
                            for (var u = 0; u < l.parts.length; u++) l.parts[u]();
                            delete d[l.id]
                        }
                    }
                }
        };
        var m = function() {
            var t = [];
            return function(e, n) {
                return t[e] = n, t.filter(Boolean).join("\n")
            }
        }()
    },
    11: function(t, e) {
        t.exports = function() {
            var t = [];
            return t.toString = function() {
                for (var t = [], e = 0; e < this.length; e++) {
                    var n = this[e];
                    n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
                }
                return t.join("")
            }, t.i = function(e, n) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var i = {}, o = 0; o < this.length; o++) {
                    var r = this[o][0];
                    "number" == typeof r && (i[r] = !0)
                }
                for (o = 0; o < e.length; o++) {
                    var s = e[o];
                    "number" == typeof s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s))
                }
            }, t
        }
    },
    12: function(t, e, n) {
        function i() {
            b.raw = s.slice(g, l).trim(), void 0 === b.expression ? b.expression = s.slice(v, l).trim() : y !== g && o(), (0 === l || b.expression) && m.push(b)
        }

        function o() {
            var t, e = s.slice(y, l).trim();
            if (e) {
                t = {};
                var n = e.match(S);
                t.name = n[0], n.length > 1 && (t.args = n.slice(1).map(r))
            }
            t && (b.filters = b.filters || []).push(t), y = l + 1
        }

        function r(t) {
            var e = E.test(t) ? t : w.stripQuotes(t),
                n = e === !1;
            return {
                value: n ? t : e,
                dynamic: n
            }
        }
        var s, a, l, c, u, d, h, p, f, g, v, m, b, y, _, w = n(2),
            x = n(6),
            C = new x(1e3),
            k = /^[^\{\?]+$|^'[^']*'$|^"[^"]*"$/,
            S = /[^\s'"]+|'[^']*'|"[^"]*"/g,
            E = /^in$|^-?\d+/;
        e.parse = function(t) {
            var e = C.get(t);
            if (e) return e;
            for (s = t, u = d = !1, h = p = f = g = v = 0, y = 0, m = [], b = {}, _ = null, l = 0, c = s.length; l < c; l++)
                if (a = s.charCodeAt(l), u) 39 === a && (u = !u);
                else if (d) 34 === a && (d = !d);
            else if (44 !== a || f || h || p)
                if (58 !== a || b.expression || b.arg)
                    if (124 === a && 124 !== s.charCodeAt(l + 1) && 124 !== s.charCodeAt(l - 1)) void 0 === b.expression ? (y = l + 1, b.expression = s.slice(v, l).trim()) : o();
                    else switch (a) {
                        case 34:
                            d = !0;
                            break;
                        case 39:
                            u = !0;
                            break;
                        case 40:
                            f++;
                            break;
                        case 41:
                            f--;
                            break;
                        case 91:
                            p++;
                            break;
                        case 93:
                            p--;
                            break;
                        case 123:
                            h++;
                            break;
                        case 125:
                            h--
                    } else _ = s.slice(g, l).trim(), k.test(_) && (v = l + 1, b.arg = w.stripQuotes(_) || _);
            else i(), b = {}, g = v = y = l + 1;
            return 0 !== l && g === l || i(), C.put(t, m), m
        }
    },
    13: function(t, e, n) {
        function i(t, e) {
            var n = E.length;
            return E[n] = e ? t.replace(_, "\\n") : t, '"' + n + '"'
        }

        function o(t) {
            var e = t.charAt(0),
                n = t.slice(1);
            return v.test(n) ? t : (n = n.indexOf('"') > -1 ? n.replace(x, r) : n, e + "scope." + n)
        }

        function r(t, e) {
            return E[e]
        }

        function s(t, e) {
            b.test(t) && "production" !== process.env.NODE_ENV && d.warn("Avoid using reserved keywords in expression: " + t), E.length = 0;
            var n = t.replace(w, i).replace(y, "");
            n = (" " + n).replace(k, o).replace(x, r);
            var s = l(n);
            if (s) return {
                get: s,
                body: n,
                set: e ? c(n) : null
            }
        }

        function a(t) {
            var e, n;
            return t.indexOf("[") < 0 ? (n = t.split("."), n.raw = t, e = h.compileGetter(n)) : (n = h.parse(t), e = n.get), {
                get: e,
                set: function(t, e) {
                    h.set(t, n, e)
                }
            }
        }

        function l(t) {
            try {
                return new Function("scope", "return " + t + ";")
            } catch (e) {
                "production" !== process.env.NODE_ENV && d.warn("Invalid expression. Generated function body: " + t)
            }
        }

        function c(t) {
            try {
                return new Function("scope", "value", t + "=value;")
            } catch (e) {
                "production" !== process.env.NODE_ENV && d.warn("Invalid setter function body: " + t)
            }
        }

        function u(t) {
            t.set || (t.set = c(t.body))
        }
        var d = n(2),
            h = n(14),
            p = n(6),
            f = new p(1e3),
            g = "Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",
            v = new RegExp("^(" + g.replace(/,/g, "\\b|") + "\\b)"),
            m = "break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,proctected,static,interface,private,public",
            b = new RegExp("^(" + m.replace(/,/g, "\\b|") + "\\b)"),
            y = /\s/g,
            _ = /\n/g,
            w = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g,
            x = /"(\d+)"/g,
            C = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,
            k = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g,
            S = /^(true|false)$/,
            E = [];
        e.parse = function(t, n) {
            t = t.trim();
            var i = f.get(t);
            if (i) return n && u(i), i;
            var o = e.isSimplePath(t) ? a(t) : s(t, n);
            return f.put(t, o), o
        }, e.isSimplePath = function(t) {
            return C.test(t) && !S.test(t) && "Math." !== t.slice(0, 5)
        }
    },
    14: function(t, e, n) {
        function i(t) {
            if (void 0 === t) return "eof";
            var e = t.charCodeAt(0);
            switch (e) {
                case 91:
                case 93:
                case 46:
                case 34:
                case 39:
                case 48:
                    return t;
                case 95:
                case 36:
                    return "ident";
                case 32:
                case 9:
                case 10:
                case 13:
                case 160:
                case 65279:
                case 8232:
                case 8233:
                    return "ws"
            }
            return e >= 97 && e <= 122 || e >= 65 && e <= 90 ? "ident" : e >= 49 && e <= 57 ? "number" : "else"
        }

        function o(t) {
            function e() {
                var e = t[f + 1];
                if (g === _ && "'" === e || g === w && '"' === e) return f++, o = e, v[d](), !0
            }
            var n, o, r, s, a, l, c, u = [],
                f = -1,
                g = p,
                v = [];
            for (v[h] = function() {
                    void 0 !== r && (u.push(r), r = void 0)
                }, v[d] = function() {
                    void 0 === r ? r = o : r += o
                }; null != g;)
                if (f++, n = t[f], "\\" !== n || !e()) {
                    if (s = i(n), c = E[g], a = c[s] || c.else || S, a === S) return;
                    if (g = a[0], l = v[a[1]], l && (o = a[2], o = void 0 === o ? n : "*" === o ? o + n : o, l()), g === k) return u.raw = t, u
                }
        }

        function r(t) {
            return u.test(t) ? "." + t : +t === t >>> 0 ? "[" + t + "]" : "*" === t.charAt(0) ? "[o" + r(t.slice(1)) + "]" : '["' + t.replace(/"/g, '\\"') + '"]'
        }

        function s(t) {
            "production" !== process.env.NODE_ENV && a.warn('You are setting a non-existent path "' + t.raw + '" on a vm instance. Consider pre-initializing the property with the "data" option for more reliable reactivity and better performance.')
        }
        var a = n(2),
            l = n(6),
            c = new l(1e3),
            u = e.identRE = /^[$_a-zA-Z]+[\w$]*$/,
            d = 0,
            h = 1,
            p = 0,
            f = 1,
            g = 2,
            v = 3,
            m = 4,
            b = 5,
            y = 6,
            _ = 7,
            w = 8,
            x = 9,
            C = 10,
            k = 11,
            S = 12,
            E = [];
        E[p] = {
            ws: [p],
            ident: [v, d],
            "[": [m],
            eof: [k]
        }, E[f] = {
            ws: [f],
            ".": [g],
            "[": [m],
            eof: [k]
        }, E[g] = {
            ws: [g],
            ident: [v, d]
        }, E[v] = {
            ident: [v, d],
            0: [v, d],
            number: [v, d],
            ws: [f, h],
            ".": [g, h],
            "[": [m, h],
            eof: [k, h]
        }, E[m] = {
            ws: [m],
            0: [b, d],
            number: [y, d],
            "'": [_, d, ""],
            '"': [w, d, ""],
            ident: [x, d, "*"]
        }, E[b] = {
            ws: [C, h],
            "]": [f, h]
        }, E[y] = {
            0: [y, d],
            number: [y, d],
            ws: [C],
            "]": [f, h]
        }, E[_] = {
            "'": [C],
            eof: S,
            else: [_, d]
        }, E[w] = {
            '"': [C],
            eof: S,
            else: [w, d]
        }, E[x] = {
            ident: [x, d],
            0: [x, d],
            number: [x, d],
            ws: [C],
            "]": [f, h]
        }, E[C] = {
            ws: [C],
            "]": [f, h]
        }, e.compileGetter = function(t) {
            var e = "return o" + t.map(r).join("");
            return new Function("o", e)
        }, e.parse = function(t) {
            var n = c.get(t);
            return n || (n = o(t), n && (n.get = e.compileGetter(n), c.put(t, n))), n
        }, e.get = function(t, n) {
            if (n = e.parse(n)) return n.get(t)
        }, e.set = function(t, n, i) {
            var o = t;
            if ("string" == typeof n && (n = e.parse(n)), !n || !a.isObject(t)) return !1;
            for (var r, l, c = 0, u = n.length; c < u; c++) r = t, l = n[c], "*" === l.charAt(0) && (l = o[l.slice(1)]), c < u - 1 ? (t = t[l], a.isObject(t) || (s(n), t = {}, r.$add(l, t))) : a.isArray(t) ? t.$set(l, i) : l in t ? t[l] = i : (s(n), t.$add(l, i));
            return !0
        }
    },
    15: function(t, e, n) {
        function i(t, e, n, i) {
            i && r.extend(this, i);
            var o = "function" == typeof e;
            if (this.vm = t, t._watchers.push(this), this.expression = o ? e.toString() : e, this.cb = n, this.id = ++u, this.active = !0, this.dirty = this.lazy, this.deps = Object.create(null), this.newDeps = null, this.prevError = null, o) this.getter = e, this.setter = void 0;
            else {
                var s = l.parse(e, this.twoWay);
                this.getter = s.get, this.setter = s.set
            }
            this.value = this.lazy ? void 0 : this.get(), this.queued = this.shallow = !1
        }

        function o(t) {
            var e, n, i;
            for (e in t)
                if (n = t[e], r.isArray(n))
                    for (i = n.length; i--;) o(n[i]);
                else r.isObject(n) && o(n)
        }
        var r = n(2),
            s = n(3),
            a = n(16),
            l = n(13),
            c = n(147),
            u = 0;
        i.prototype.addDep = function(t) {
            var e = t.id;
            this.newDeps[e] || (this.newDeps[e] = t, this.deps[e] || (this.deps[e] = t, t.addSub(this)))
        }, i.prototype.get = function() {
            this.beforeGet();
            var t, e = this.vm;
            try {
                t = this.getter.call(e, e)
            } catch (t) {
                "production" !== process.env.NODE_ENV && s.warnExpressionErrors && r.warn('Error when evaluating expression "' + this.expression + '". ' + (s.debug ? "" : "Turn on debug mode to see stack trace."), t)
            }
            return this.deep && o(t), this.preProcess && (t = this.preProcess(t)), this.filters && (t = e._applyFilters(t, null, this.filters, !1)), this.afterGet(), t
        }, i.prototype.set = function(t) {
            var e = this.vm;
            this.filters && (t = e._applyFilters(t, this.value, this.filters, !0));
            try {
                this.setter.call(e, e, t)
            } catch (t) {
                "production" !== process.env.NODE_ENV && s.warnExpressionErrors && r.warn('Error when evaluating setter "' + this.expression + '"', t)
            }
        }, i.prototype.beforeGet = function() {
            a.target = this, this.newDeps = Object.create(null)
        }, i.prototype.afterGet = function() {
            a.target = null;
            for (var t = Object.keys(this.deps), e = t.length; e--;) {
                var n = t[e];
                this.newDeps[n] || this.deps[n].removeSub(this)
            }
            this.deps = this.newDeps
        }, i.prototype.update = function(t) {
            this.lazy ? this.dirty = !0 : this.sync || !s.async ? this.run() : (this.shallow = this.queued ? !!t && this.shallow : !!t, this.queued = !0, "production" !== process.env.NODE_ENV && s.debug && (this.prevError = new Error("[vue] async stack trace")), c.push(this))
        }, i.prototype.run = function() {
            if (this.active) {
                var t = this.get();
                if (t !== this.value || (r.isArray(t) || this.deep) && !this.shallow) {
                    var e = this.value;
                    this.value = t;
                    var n = this.prevError;
                    if ("production" !== process.env.NODE_ENV && s.debug && n) {
                        this.prevError = null;
                        try {
                            this.cb.call(this.vm, t, e)
                        } catch (t) {
                            throw r.nextTick(function() {
                                throw n
                            }, 0), t
                        }
                    } else this.cb.call(this.vm, t, e)
                }
                this.queued = this.shallow = !1
            }
        }, i.prototype.evaluate = function() {
            var t = a.target;
            this.value = this.get(), this.dirty = !1, a.target = t
        }, i.prototype.depend = function() {
            for (var t = Object.keys(this.deps), e = t.length; e--;) this.deps[t[e]].depend()
        }, i.prototype.teardown = function() {
            if (this.active) {
                this.vm._isBeingDestroyed || this.vm._watchers.$remove(this);
                for (var t = Object.keys(this.deps), e = t.length; e--;) this.deps[t[e]].removeSub(this);
                this.active = !1, this.vm = this.cb = this.value = null
            }
        }, t.exports = i
    },
    16: function(t, e, n) {
        function i() {
            this.id = r++, this.subs = []
        }
        var o = n(2),
            r = 0;
        i.target = null, i.prototype.addSub = function(t) {
            this.subs.push(t)
        }, i.prototype.removeSub = function(t) {
            this.subs.$remove(t)
        }, i.prototype.depend = function() {
            i.target.addDep(this)
        }, i.prototype.notify = function() {
            for (var t = o.toArray(this.subs), e = 0, n = t.length; e < n; e++) t[e].update()
        }, t.exports = i
    },
    17: function(t, e, n) {
        var i = n(2);
        e.append = function(t, e, n, i) {
            o(t, 1, function() {
                e.appendChild(t)
            }, n, i)
        }, e.before = function(t, e, n, r) {
            o(t, 1, function() {
                i.before(t, e)
            }, n, r)
        }, e.remove = function(t, e, n) {
            o(t, -1, function() {
                i.remove(t)
            }, e, n)
        }, e.removeThenAppend = function(t, e, n, i) {
            o(t, -1, function() {
                e.appendChild(t)
            }, n, i)
        }, e.blockAppend = function(t, n, o) {
            for (var r = i.toArray(t.childNodes), s = 0, a = r.length; s < a; s++) e.before(r[s], n, o)
        }, e.blockRemove = function(t, n, i) {
            for (var o, r = t.nextSibling; r !== n;) o = r.nextSibling, e.remove(r, i), r = o
        };
        var o = e.apply = function(t, e, n, o, r) {
            var s = t.__v_trans;
            if (!s || !s.hooks && !i.transitionEndEvent || !o._isCompiled || o.$parent && !o.$parent._isCompiled) return n(), void(r && r());
            var a = e > 0 ? "enter" : "leave";
            s[a](n, r)
        }
    },
    19: function(t, e, n) {
        t.exports = n.p + "assets/images/logo-grey.png"
    },
    20: function(t, e, n) {
        var i = n(2),
            o = n(3),
            r = n(5);
        t.exports = {
            isLiteral: !0,
            bind: function() {
                this.el.__vue__ ? "production" !== process.env.NODE_ENV && i.warn('cannot mount component "' + this.expression + '" on already mounted element: ' + this.el) : (this.anchor = i.createAnchor("v-component"), i.replace(this.el, this.anchor), this.keepAlive = null != this._checkParam("keep-alive"), this.waitForEvent = this._checkParam("wait-for"), this.refID = this._checkParam(o.prefix + "ref"), this.keepAlive && (this.cache = {}), null !== this._checkParam("inline-template") && (this.template = i.extractContent(this.el, !0)), this.pendingComponentCb = this.Component = null, this.pendingRemovals = 0, this.pendingRemovalCb = null, this._isDynamicLiteral ? this.transMode = this._checkParam("transition-mode") : this.resolveComponent(this.expression, i.bind(this.initStatic, this)))
            },
            initStatic: function() {
                var t, e = this.anchor,
                    n = this.waitForEvent;
                n && (t = {
                    created: function() {
                        this.$once(n, function() {
                            this.$before(e)
                        })
                    }
                });
                var i = this.build(t);
                this.setCurrent(i), this.waitForEvent || i.$before(e)
            },
            update: function(t) {
                this.setComponent(t)
            },
            setComponent: function(t, e) {
                this.invalidatePending(), t ? this.resolveComponent(t, i.bind(function() {
                    this.unbuild(!0);
                    var t, n = this,
                        i = this.waitForEvent;
                    i && (t = {
                        created: function() {
                            this.$once(i, function() {
                                n.waitingFor = null, n.transition(this, e)
                            })
                        }
                    });
                    var o = this.getCached(),
                        r = this.build(t);
                    !i || o ? this.transition(r, e) : this.waitingFor = r
                }, this)) : (this.unbuild(!0), this.remove(this.childVM, e), this.unsetCurrent())
            },
            resolveComponent: function(t, e) {
                var n = this;
                this.pendingComponentCb = i.cancellable(function(t) {
                    n.Component = t, e()
                }), this.vm._resolveComponent(t, this.pendingComponentCb)
            },
            invalidatePending: function() {
                this.pendingComponentCb && (this.pendingComponentCb.cancel(), this.pendingComponentCb = null)
            },
            build: function(t) {
                var e = this.getCached();
                if (e) return e;
                if (this.Component) {
                    var n = {
                        el: r.clone(this.el),
                        template: this.template,
                        _linkerCachable: !this.template,
                        _asComponent: !0,
                        _isRouterView: this._isRouterView,
                        _context: this.vm
                    };
                    t && i.extend(n, t);
                    var o = this._host || this.vm,
                        s = o.$addChild(n, this.Component);
                    return this.keepAlive && (this.cache[this.Component.cid] = s), s
                }
            },
            getCached: function() {
                return this.keepAlive && this.cache[this.Component.cid]
            },
            unbuild: function(t) {
                this.waitingFor && (this.waitingFor.$destroy(), this.waitingFor = null);
                var e = this.childVM;
                e && !this.keepAlive && e.$destroy(!1, t)
            },
            remove: function(t, e) {
                var n = this.keepAlive;
                if (t) {
                    this.pendingRemovals++, this.pendingRemovalCb = e;
                    var i = this;
                    t.$remove(function() {
                        i.pendingRemovals--, n || t._cleanup(), !i.pendingRemovals && i.pendingRemovalCb && (i.pendingRemovalCb(), i.pendingRemovalCb = null)
                    })
                } else e && e()
            },
            transition: function(t, e) {
                var n = this,
                    i = this.childVM;
                switch (this.setCurrent(t), n.transMode) {
                    case "in-out":
                        t.$before(n.anchor, function() {
                            n.remove(i, e)
                        });
                        break;
                    case "out-in":
                        n.remove(i, function() {
                            t.$before(n.anchor, e)
                        });
                        break;
                    default:
                        n.remove(i), t.$before(n.anchor, e)
                }
            },
            setCurrent: function(t) {
                this.unsetCurrent(), this.childVM = t;
                var e = t._refID || this.refID;
                e && (this.vm.$[e] = t)
            },
            unsetCurrent: function() {
                var t = this.childVM;
                this.childVM = null;
                var e = t && t._refID || this.refID;
                e && (this.vm.$[e] = null)
            },
            unbind: function() {
                if (this.invalidatePending(), this.unbuild(), this.unsetCurrent(), this.cache) {
                    for (var t in this.cache) this.cache[t].$destroy();
                    this.cache = null
                }
            }
        }
    },
    21: function(t, e, n) {
        function i(t) {
            t._isAttached || t._callHook("attached")
        }

        function o(t) {
            t._isAttached && t._callHook("detached")
        }
        var r = n(2),
            s = n(7),
            a = n(5),
            l = n(17),
            c = n(6),
            u = new c(1e3);
        t.exports = {
            bind: function() {
                var t = this.el;
                if (t.__vue__) "production" !== process.env.NODE_ENV && r.warn('v-if="' + this.expression + '" cannot be used on an instance root element.'), this.invalid = !0;
                else {
                    this.start = r.createAnchor("v-if-start"), this.end = r.createAnchor("v-if-end"), r.replace(t, this.end), r.before(this.start, this.end), r.isTemplate(t) ? this.template = a.parse(t, !0) : (this.template = document.createDocumentFragment(), this.template.appendChild(a.clone(t)));
                    var e = (this.vm.constructor.cid || "") + t.outerHTML;
                    this.linker = u.get(e), this.linker || (this.linker = s.compile(this.template, this.vm.$options, !0), u.put(e, this.linker))
                }
            },
            update: function(t) {
                this.invalid || (t ? this.unlink || this.link(a.clone(this.template), this.linker) : this.teardown())
            },
            link: function(t, e) {
                var n = this.vm;
                if (this.unlink = e(n, t, this._host), l.blockAppend(t, this.end, n), r.inDoc(n.$el)) {
                    var o = this.getContainedComponents();
                    o && o.forEach(i)
                }
            },
            teardown: function() {
                if (this.unlink) {
                    var t;
                    r.inDoc(this.vm.$el) && (t = this.getContainedComponents()), l.blockRemove(this.start, this.end, this.vm), t && t.forEach(o), this.unlink(), this.unlink = null
                }
            },
            getContainedComponents: function() {
                function t(t) {
                    for (var e, o = n; e !== i;) {
                        if (e = o.nextSibling, o === t.$el || o.contains && o.contains(t.$el)) return !0;
                        o = e
                    }
                    return !1
                }
                var e = this._host || this.vm,
                    n = this.start.nextSibling,
                    i = this.end;
                return e.$children.length && e.$children.filter(t)
            },
            unbind: function() {
                this.unlink && this.unlink()
            }
        }
    },
    22: function(t, e, n) {
        var i = n(2),
            o = n(15),
            r = n(3)._propBindingModes;
        t.exports = {
            bind: function() {
                var t = this.vm,
                    e = t._context,
                    n = this._descriptor,
                    s = n.path,
                    a = n.parentPath;
                this.parentWatcher = new o(e, a, function(e) {
                    i.assertProp(n, e) && (t[s] = e)
                }, {
                    sync: !0
                });
                var l = this.parentWatcher.value;
                if ("$data" === s ? t._data = l : i.initProp(t, n, l), n.mode === r.TWO_WAY) {
                    var c = this;
                    t.$once("hook:created", function() {
                        c.childWatcher = new o(t, s, function(t) {
                            e.$set(a, t)
                        }, {
                            sync: !0
                        })
                    })
                }
            },
            unbind: function() {
                this.parentWatcher.teardown(), this.childWatcher && this.childWatcher.teardown()
            }
        }
    },
    132: function(t, e, n) {
        var i = n(140).Router;
        t.exports = new i
    },
    133: function(t, e, n) {
        var i, o, r, i, s;
        ! function(e, n) {
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
                if (!t.document) throw new Error("jQuery requires a window with a document");
                return n(t)
            } : n(e)
        }("undefined" != typeof window ? window : this, function(t, r) {
            function s(t) {
                var e = "length" in t && t.length,
                    n = it.type(t);
                return "function" !== n && !it.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
            }

            function a(t, e, n) {
                if (it.isFunction(e)) return it.grep(t, function(t, i) {
                    return !!e.call(t, i, t) !== n
                });
                if (e.nodeType) return it.grep(t, function(t) {
                    return t === e !== n
                });
                if ("string" == typeof e) {
                    if (dt.test(e)) return it.filter(e, t, n);
                    e = it.filter(e, t)
                }
                return it.grep(t, function(t) {
                    return X.call(e, t) >= 0 !== n
                })
            }

            function l(t, e) {
                for (;
                    (t = t[e]) && 1 !== t.nodeType;);
                return t
            }

            function c(t) {
                var e = bt[t] = {};
                return it.each(t.match(mt) || [], function(t, n) {
                    e[n] = !0
                }), e
            }

            function u() {
                et.removeEventListener("DOMContentLoaded", u, !1), t.removeEventListener("load", u, !1), it.ready()
            }

            function d() {
                Object.defineProperty(this.cache = {}, 0, {
                    get: function() {
                        return {}
                    }
                }), this.expando = it.expando + d.uid++
            }

            function h(t, e, n) {
                var i;
                if (void 0 === n && 1 === t.nodeType)
                    if (i = "data-" + e.replace(kt, "-$1").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                        try {
                            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ct.test(n) ? it.parseJSON(n) : n)
                        } catch (t) {}
                        xt.set(t, e, n)
                    } else n = void 0;
                return n
            }

            function p() {
                return !0
            }

            function f() {
                return !1
            }

            function g() {
                try {
                    return et.activeElement
                } catch (t) {}
            }

            function v(t, e) {
                return it.nodeName(t, "table") && it.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
            }

            function m(t) {
                return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
            }

            function b(t) {
                var e = Ht.exec(t.type);
                return e ? t.type = e[1] : t.removeAttribute("type"), t
            }

            function y(t, e) {
                for (var n = 0, i = t.length; i > n; n++) wt.set(t[n], "globalEval", !e || wt.get(e[n], "globalEval"))
            }

            function _(t, e) {
                var n, i, o, r, s, a, l, c;
                if (1 === e.nodeType) {
                    if (wt.hasData(t) && (r = wt.access(t), s = wt.set(e, r), c = r.events)) {
                        delete s.handle, s.events = {};
                        for (o in c)
                            for (n = 0, i = c[o].length; i > n; n++) it.event.add(e, o, c[o][n])
                    }
                    xt.hasData(t) && (a = xt.access(t), l = it.extend({}, a), xt.set(e, l))
                }
            }

            function w(t, e) {
                var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
                return void 0 === e || e && it.nodeName(t, e) ? it.merge([t], n) : n
            }

            function x(t, e) {
                var n = e.nodeName.toLowerCase();
                "input" === n && Tt.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }

            function C(e, n) {
                var i, o = it(n.createElement(e)).appendTo(n.body),
                    r = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0])) ? i.display : it.css(o[0], "display");
                return o.detach(), r
            }

            function k(t) {
                var e = et,
                    n = Wt[t];
                return n || (n = C(t, e), "none" !== n && n || (zt = (zt || it("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = zt[0].contentDocument, e.write(), e.close(), n = C(t, e), zt.detach()), Wt[t] = n), n
            }

            function S(t, e, n) {
                var i, o, r, s, a = t.style;
                return n = n || Jt(t), n && (s = n.getPropertyValue(e) || n[e]), n && ("" !== s || it.contains(t.ownerDocument, t) || (s = it.style(t, e)), Ut.test(s) && Vt.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
            }

            function E(t, e) {
                return {
                    get: function() {
                        return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                    }
                }
            }

            function A(t, e) {
                if (e in t) return e;
                for (var n = e[0].toUpperCase() + e.slice(1), i = e, o = Kt.length; o--;)
                    if (e = Kt[o] + n, e in t) return e;
                return i
            }

            function T(t, e, n) {
                var i = Yt.exec(e);
                return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
            }

            function N(t, e, n, i, o) {
                for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += it.css(t, n + Et[r], !0, o)), i ? ("content" === n && (s -= it.css(t, "padding" + Et[r], !0, o)), "margin" !== n && (s -= it.css(t, "border" + Et[r] + "Width", !0, o))) : (s += it.css(t, "padding" + Et[r], !0, o), "padding" !== n && (s += it.css(t, "border" + Et[r] + "Width", !0, o)));
                return s
            }

            function D(t, e, n) {
                var i = !0,
                    o = "width" === e ? t.offsetWidth : t.offsetHeight,
                    r = Jt(t),
                    s = "border-box" === it.css(t, "boxSizing", !1, r);
                if (0 >= o || null == o) {
                    if (o = S(t, e, r), (0 > o || null == o) && (o = t.style[e]), Ut.test(o)) return o;
                    i = s && (tt.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
                }
                return o + N(t, e, n || (s ? "border" : "content"), i, r) + "px"
            }

            function O(t, e) {
                for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (r[s] = wt.get(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && At(i) && (r[s] = wt.access(i, "olddisplay", k(i.nodeName)))) : (o = At(i), "none" === n && o || wt.set(i, "olddisplay", o ? n : it.css(i, "display"))));
                for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
                return t
            }

            function $(t, e, n, i, o) {
                return new $.prototype.init(t, e, n, i, o)
            }

            function j() {
                return setTimeout(function() {
                    te = void 0
                }), te = it.now()
            }

            function F(t, e) {
                var n, i = 0,
                    o = {
                        height: t
                    };
                for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = Et[i], o["margin" + n] = o["padding" + n] = t;
                return e && (o.opacity = o.width = t), o
            }

            function P(t, e, n) {
                for (var i, o = (se[e] || []).concat(se["*"]), r = 0, s = o.length; s > r; r++)
                    if (i = o[r].call(n, e, t)) return i
            }

            function I(t, e, n) {
                var i, o, r, s, a, l, c, u, d = this,
                    h = {},
                    p = t.style,
                    f = t.nodeType && At(t),
                    g = wt.get(t, "fxshow");
                n.queue || (a = it._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || l()
                }), a.unqueued++, d.always(function() {
                    d.always(function() {
                        a.unqueued--, it.queue(t, "fx").length || a.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = it.css(t, "display"), u = "none" === c ? wt.get(t, "olddisplay") || k(t.nodeName) : c, "inline" === u && "none" === it.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                }));
                for (i in e)
                    if (o = e[i], ne.exec(o)) {
                        if (delete e[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[i]) continue;
                            f = !0
                        }
                        h[i] = g && g[i] || it.style(t, i)
                    } else c = void 0;
                if (it.isEmptyObject(h)) "inline" === ("none" === c ? k(t.nodeName) : c) && (p.display = c);
                else {
                    g ? "hidden" in g && (f = g.hidden) : g = wt.access(t, "fxshow", {}), r && (g.hidden = !f), f ? it(t).show() : d.done(function() {
                        it(t).hide()
                    }), d.done(function() {
                        var e;
                        wt.remove(t, "fxshow");
                        for (e in h) it.style(t, e, h[e])
                    });
                    for (i in h) s = P(f ? g[i] : 0, i, d), i in g || (g[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
                }
            }

            function M(t, e) {
                var n, i, o, r, s;
                for (n in t)
                    if (i = it.camelCase(n), o = e[i], r = t[n], it.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), s = it.cssHooks[i], s && "expand" in s) {
                        r = s.expand(r), delete t[i];
                        for (n in r) n in t || (t[n] = r[n], e[n] = o)
                    } else e[i] = o
            }

            function L(t, e, n) {
                var i, o, r = 0,
                    s = re.length,
                    a = it.Deferred().always(function() {
                        delete l.elem
                    }),
                    l = function() {
                        if (o) return !1;
                        for (var e = te || j(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
                        return a.notifyWith(t, [c, r, n]), 1 > r && l ? n : (a.resolveWith(t, [c]), !1)
                    },
                    c = a.promise({
                        elem: t,
                        props: it.extend({}, e),
                        opts: it.extend(!0, {
                            specialEasing: {}
                        }, n),
                        originalProperties: e,
                        originalOptions: n,
                        startTime: te || j(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(e, n) {
                            var i = it.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                            return c.tweens.push(i), i
                        },
                        stop: function(e) {
                            var n = 0,
                                i = e ? c.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; i > n; n++) c.tweens[n].run(1);
                            return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                        }
                    }),
                    u = c.props;
                for (M(u, c.opts.specialEasing); s > r; r++)
                    if (i = re[r].call(c, t, u, c.opts)) return i;
                return it.map(u, P, c), it.isFunction(c.opts.start) && c.opts.start.call(t, c), it.fx.timer(it.extend(l, {
                    elem: t,
                    anim: c,
                    queue: c.opts.queue
                })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
            }

            function R(t) {
                return function(e, n) {
                    "string" != typeof e && (n = e, e = "*");
                    var i, o = 0,
                        r = e.toLowerCase().match(mt) || [];
                    if (it.isFunction(n))
                        for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
                }
            }

            function H(t, e, n, i) {
                function o(a) {
                    var l;
                    return r[a] = !0, it.each(t[a] || [], function(t, a) {
                        var c = a(e, n, i);
                        return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
                    }), l
                }
                var r = {},
                    s = t === Ce;
                return o(e.dataTypes[0]) || !r["*"] && o("*")
            }

            function q(t, e) {
                var n, i, o = it.ajaxSettings.flatOptions || {};
                for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
                return i && it.extend(!0, t, i), t
            }

            function B(t, e, n) {
                for (var i, o, r, s, a = t.contents, l = t.dataTypes;
                    "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                if (i)
                    for (o in a)
                        if (a[o] && a[o].test(i)) {
                            l.unshift(o);
                            break
                        }
                if (l[0] in n) r = l[0];
                else {
                    for (o in n) {
                        if (!l[0] || t.converters[o + " " + l[0]]) {
                            r = o;
                            break
                        }
                        s || (s = o)
                    }
                    r = r || s
                }
                return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
            }

            function z(t, e, n, i) {
                var o, r, s, a, l, c = {},
                    u = t.dataTypes.slice();
                if (u[1])
                    for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                for (r = u.shift(); r;)
                    if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                        if ("*" === r) r = l;
                        else if ("*" !== l && l !== r) {
                    if (s = c[l + " " + r] || c["* " + r], !s)
                        for (o in c)
                            if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], u.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && t.throws) e = s(e);
                        else try {
                            e = s(e)
                        } catch (t) {
                            return {
                                state: "parsererror",
                                error: s ? t : "No conversion from " + l + " to " + r
                            }
                        }
                }
                return {
                    state: "success",
                    data: e
                }
            }

            function W(t, e, n, i) {
                var o;
                if (it.isArray(e)) it.each(e, function(e, o) {
                    n || Te.test(t) ? i(t, o) : W(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
                });
                else if (n || "object" !== it.type(e)) i(t, e);
                else
                    for (o in e) W(t + "[" + o + "]", e[o], n, i)
            }

            function V(t) {
                return it.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
            }
            var U = [],
                J = U.slice,
                G = U.concat,
                Y = U.push,
                X = U.indexOf,
                Q = {},
                Z = Q.toString,
                K = Q.hasOwnProperty,
                tt = {},
                et = t.document,
                nt = "2.1.4",
                it = function(t, e) {
                    return new it.fn.init(t, e)
                },
                ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                rt = /^-ms-/,
                st = /-([\da-z])/gi,
                at = function(t, e) {
                    return e.toUpperCase()
                };
            it.fn = it.prototype = {
                jquery: nt,
                constructor: it,
                selector: "",
                length: 0,
                toArray: function() {
                    return J.call(this)
                },
                get: function(t) {
                    return null != t ? 0 > t ? this[t + this.length] : this[t] : J.call(this)
                },
                pushStack: function(t) {
                    var e = it.merge(this.constructor(), t);
                    return e.prevObject = this, e.context = this.context, e
                },
                each: function(t, e) {
                    return it.each(this, t, e)
                },
                map: function(t) {
                    return this.pushStack(it.map(this, function(e, n) {
                        return t.call(e, n, e)
                    }))
                },
                slice: function() {
                    return this.pushStack(J.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(t) {
                    var e = this.length,
                        n = +t + (0 > t ? e : 0);
                    return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: Y,
                sort: U.sort,
                splice: U.splice
            }, it.extend = it.fn.extend = function() {
                var t, e, n, i, o, r, s = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || it.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                    if (null != (t = arguments[a]))
                        for (e in t) n = s[e], i = t[e], s !== i && (c && i && (it.isPlainObject(i) || (o = it.isArray(i))) ? (o ? (o = !1, r = n && it.isArray(n) ? n : []) : r = n && it.isPlainObject(n) ? n : {}, s[e] = it.extend(c, r, i)) : void 0 !== i && (s[e] = i));
                return s
            }, it.extend({
                expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(t) {
                    throw new Error(t)
                },
                noop: function() {},
                isFunction: function(t) {
                    return "function" === it.type(t)
                },
                isArray: Array.isArray,
                isWindow: function(t) {
                    return null != t && t === t.window
                },
                isNumeric: function(t) {
                    return !it.isArray(t) && t - parseFloat(t) + 1 >= 0
                },
                isPlainObject: function(t) {
                    return "object" === it.type(t) && !t.nodeType && !it.isWindow(t) && !(t.constructor && !K.call(t.constructor.prototype, "isPrototypeOf"))
                },
                isEmptyObject: function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                },
                type: function(t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Q[Z.call(t)] || "object" : typeof t
                },
                globalEval: function(t) {
                    var e, n = eval;
                    t = it.trim(t), t && (1 === t.indexOf("use strict") ? (e = et.createElement("script"), e.text = t, et.head.appendChild(e).parentNode.removeChild(e)) : n(t))
                },
                camelCase: function(t) {
                    return t.replace(rt, "ms-").replace(st, at)
                },
                nodeName: function(t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function(t, e, n) {
                    var i, o = 0,
                        r = t.length,
                        a = s(t);
                    if (n) {
                        if (a)
                            for (; r > o && (i = e.apply(t[o], n), i !== !1); o++);
                        else
                            for (o in t)
                                if (i = e.apply(t[o], n), i === !1) break
                    } else if (a)
                        for (; r > o && (i = e.call(t[o], o, t[o]), i !== !1); o++);
                    else
                        for (o in t)
                            if (i = e.call(t[o], o, t[o]), i === !1) break;
                    return t
                },
                trim: function(t) {
                    return null == t ? "" : (t + "").replace(ot, "")
                },
                makeArray: function(t, e) {
                    var n = e || [];
                    return null != t && (s(Object(t)) ? it.merge(n, "string" == typeof t ? [t] : t) : Y.call(n, t)), n
                },
                inArray: function(t, e, n) {
                    return null == e ? -1 : X.call(e, t, n)
                },
                merge: function(t, e) {
                    for (var n = +e.length, i = 0, o = t.length; n > i; i++) t[o++] = e[i];
                    return t.length = o, t
                },
                grep: function(t, e, n) {
                    for (var i, o = [], r = 0, s = t.length, a = !n; s > r; r++) i = !e(t[r], r), i !== a && o.push(t[r]);
                    return o
                },
                map: function(t, e, n) {
                    var i, o = 0,
                        r = t.length,
                        a = s(t),
                        l = [];
                    if (a)
                        for (; r > o; o++) i = e(t[o], o, n), null != i && l.push(i);
                    else
                        for (o in t) i = e(t[o], o, n), null != i && l.push(i);
                    return G.apply([], l)
                },
                guid: 1,
                proxy: function(t, e) {
                    var n, i, o;
                    return "string" == typeof e && (n = t[e], e = t, t = n), it.isFunction(t) ? (i = J.call(arguments, 2), o = function() {
                        return t.apply(e || this, i.concat(J.call(arguments)))
                    }, o.guid = t.guid = t.guid || it.guid++, o) : void 0
                },
                now: Date.now,
                support: tt
            }), it.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
                Q["[object " + e + "]"] = e.toLowerCase()
            });
            var lt = function(t) {
                function e(t, e, n, i) {
                    var o, r, s, a, l, c, d, p, f, g;
                    if ((e ? e.ownerDocument || e : H) !== $ && O(e), e = e || $, n = n || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return n;
                    if (!i && F) {
                        if (11 !== a && (o = bt.exec(t)))
                            if (s = o[1]) {
                                if (9 === a) {
                                    if (r = e.getElementById(s), !r || !r.parentNode) return n;
                                    if (r.id === s) return n.push(r), n
                                } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && L(e, r) && r.id === s) return n.push(r), n
                            } else {
                                if (o[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
                                if ((s = o[3]) && w.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(s)), n
                            }
                        if (w.qsa && (!P || !P.test(t))) {
                            if (p = d = R, f = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                                for (c = S(t), (d = e.getAttribute("id")) ? p = d.replace(_t, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + h(c[l]);
                                f = yt.test(t) && u(e.parentNode) || e, g = c.join(",")
                            }
                            if (g) try {
                                return Z.apply(n, f.querySelectorAll(g)), n
                            } catch (t) {} finally {
                                d || e.removeAttribute("id")
                            }
                        }
                    }
                    return A(t.replace(lt, "$1"), e, n, i)
                }

                function n() {
                    function t(n, i) {
                        return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                    var e = [];
                    return t
                }

                function i(t) {
                    return t[R] = !0, t
                }

                function o(t) {
                    var e = $.createElement("div");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function r(t, e) {
                    for (var n = t.split("|"), i = t.length; i--;) x.attrHandle[n[i]] = e
                }

                function s(t, e) {
                    var n = e && t,
                        i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || J) - (~t.sourceIndex || J);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e) return -1;
                    return t ? 1 : -1
                }

                function a(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return "input" === n && e.type === t
                    }
                }

                function l(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function c(t) {
                    return i(function(e) {
                        return e = +e, i(function(n, i) {
                            for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                        })
                    })
                }

                function u(t) {
                    return t && "undefined" != typeof t.getElementsByTagName && t
                }

                function d() {}

                function h(t) {
                    for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                    return i
                }

                function p(t, e, n) {
                    var i = e.dir,
                        o = n && "parentNode" === i,
                        r = B++;
                    return e.first ? function(e, n, r) {
                        for (; e = e[i];)
                            if (1 === e.nodeType || o) return t(e, n, r)
                    } : function(e, n, s) {
                        var a, l, c = [q, r];
                        if (s) {
                            for (; e = e[i];)
                                if ((1 === e.nodeType || o) && t(e, n, s)) return !0
                        } else
                            for (; e = e[i];)
                                if (1 === e.nodeType || o) {
                                    if (l = e[R] || (e[R] = {}), (a = l[i]) && a[0] === q && a[1] === r) return c[2] = a[2];
                                    if (l[i] = c, c[2] = t(e, n, s)) return !0
                                }
                    }
                }

                function f(t) {
                    return t.length > 1 ? function(e, n, i) {
                        for (var o = t.length; o--;)
                            if (!t[o](e, n, i)) return !1;
                        return !0
                    } : t[0]
                }

                function g(t, n, i) {
                    for (var o = 0, r = n.length; r > o; o++) e(t, n[o], i);
                    return i
                }

                function v(t, e, n, i, o) {
                    for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(r = t[a]) && (!n || n(r, i, o)) && (s.push(r), c && e.push(a));
                    return s
                }

                function m(t, e, n, o, r, s) {
                    return o && !o[R] && (o = m(o)), r && !r[R] && (r = m(r, s)), i(function(i, s, a, l) {
                        var c, u, d, h = [],
                            p = [],
                            f = s.length,
                            m = i || g(e || "*", a.nodeType ? [a] : a, []),
                            b = !t || !i && e ? m : v(m, h, t, a, l),
                            y = n ? r || (i ? t : f || o) ? [] : s : b;
                        if (n && n(b, y, a, l), o)
                            for (c = v(y, p), o(c, [], a, l), u = c.length; u--;)(d = c[u]) && (y[p[u]] = !(b[p[u]] = d));
                        if (i) {
                            if (r || t) {
                                if (r) {
                                    for (c = [], u = y.length; u--;)(d = y[u]) && c.push(b[u] = d);
                                    r(null, y = [], c, l)
                                }
                                for (u = y.length; u--;)(d = y[u]) && (c = r ? tt(i, d) : h[u]) > -1 && (i[c] = !(s[c] = d))
                            }
                        } else y = v(y === s ? y.splice(f, y.length) : y), r ? r(null, s, y, l) : Z.apply(s, y)
                    })
                }

                function b(t) {
                    for (var e, n, i, o = t.length, r = x.relative[t[0].type], s = r || x.relative[" "], a = r ? 1 : 0, l = p(function(t) {
                            return t === e
                        }, s, !0), c = p(function(t) {
                            return tt(e, t) > -1
                        }, s, !0), u = [function(t, n, i) {
                            var o = !r && (i || n !== T) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                            return e = null, o
                        }]; o > a; a++)
                        if (n = x.relative[t[a].type]) u = [p(f(u), n)];
                        else {
                            if (n = x.filter[t[a].type].apply(null, t[a].matches), n[R]) {
                                for (i = ++a; o > i && !x.relative[t[i].type]; i++);
                                return m(a > 1 && f(u), a > 1 && h(t.slice(0, a - 1).concat({
                                    value: " " === t[a - 2].type ? "*" : ""
                                })).replace(lt, "$1"), n, i > a && b(t.slice(a, i)), o > i && b(t = t.slice(i)), o > i && h(t))
                            }
                            u.push(n)
                        }
                    return f(u)
                }

                function y(t, n) {
                    var o = n.length > 0,
                        r = t.length > 0,
                        s = function(i, s, a, l, c) {
                            var u, d, h, p = 0,
                                f = "0",
                                g = i && [],
                                m = [],
                                b = T,
                                y = i || r && x.find.TAG("*", c),
                                _ = q += null == b ? 1 : Math.random() || .1,
                                w = y.length;
                            for (c && (T = s !== $ && s); f !== w && null != (u = y[f]); f++) {
                                if (r && u) {
                                    for (d = 0; h = t[d++];)
                                        if (h(u, s, a)) {
                                            l.push(u);
                                            break
                                        }
                                    c && (q = _)
                                }
                                o && ((u = !h && u) && p--, i && g.push(u))
                            }
                            if (p += f, o && f !== p) {
                                for (d = 0; h = n[d++];) h(g, m, s, a);
                                if (i) {
                                    if (p > 0)
                                        for (; f--;) g[f] || m[f] || (m[f] = X.call(l));
                                    m = v(m)
                                }
                                Z.apply(l, m), c && !i && m.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                            }
                            return c && (q = _, T = b), g
                        };
                    return o ? i(s) : s
                }
                var _, w, x, C, k, S, E, A, T, N, D, O, $, j, F, P, I, M, L, R = "sizzle" + 1 * new Date,
                    H = t.document,
                    q = 0,
                    B = 0,
                    z = n(),
                    W = n(),
                    V = n(),
                    U = function(t, e) {
                        return t === e && (D = !0), 0
                    },
                    J = 1 << 31,
                    G = {}.hasOwnProperty,
                    Y = [],
                    X = Y.pop,
                    Q = Y.push,
                    Z = Y.push,
                    K = Y.slice,
                    tt = function(t, e) {
                        for (var n = 0, i = t.length; i > n; n++)
                            if (t[n] === e) return n;
                        return -1
                    },
                    et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    nt = "[\\x20\\t\\r\\n\\f]",
                    it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    ot = it.replace("w", "w#"),
                    rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]",
                    st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
                    at = new RegExp(nt + "+", "g"),
                    lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                    ct = new RegExp("^" + nt + "*," + nt + "*"),
                    ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                    dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                    ht = new RegExp(st),
                    pt = new RegExp("^" + ot + "$"),
                    ft = {
                        ID: new RegExp("^#(" + it + ")"),
                        CLASS: new RegExp("^\\.(" + it + ")"),
                        TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + rt),
                        PSEUDO: new RegExp("^" + st),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + et + ")$", "i"),
                        needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                    },
                    gt = /^(?:input|select|textarea|button)$/i,
                    vt = /^h\d$/i,
                    mt = /^[^{]+\{\s*\[native \w/,
                    bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    yt = /[+~]/,
                    _t = /'|\\/g,
                    wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                    xt = function(t, e, n) {
                        var i = "0x" + e - 65536;
                        return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    Ct = function() {
                        O()
                    };
                try {
                    Z.apply(Y = K.call(H.childNodes), H.childNodes), Y[H.childNodes.length].nodeType
                } catch (t) {
                    Z = {
                        apply: Y.length ? function(t, e) {
                            Q.apply(t, K.call(e))
                        } : function(t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];);
                            t.length = n - 1
                        }
                    }
                }
                w = e.support = {}, k = e.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, O = e.setDocument = function(t) {
                    var e, n, i = t ? t.ownerDocument || t : H;
                    return i !== $ && 9 === i.nodeType && i.documentElement ? ($ = i, j = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), F = !k(i), w.attributes = o(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), w.getElementsByTagName = o(function(t) {
                        return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                    }), w.getElementsByClassName = mt.test(i.getElementsByClassName), w.getById = o(function(t) {
                        return j.appendChild(t).id = R, !i.getElementsByName || !i.getElementsByName(R).length
                    }), w.getById ? (x.find.ID = function(t, e) {
                        if ("undefined" != typeof e.getElementById && F) {
                            var n = e.getElementById(t);
                            return n && n.parentNode ? [n] : []
                        }
                    }, x.filter.ID = function(t) {
                        var e = t.replace(wt, xt);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete x.find.ID, x.filter.ID = function(t) {
                        var e = t.replace(wt, xt);
                        return function(t) {
                            var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), x.find.TAG = w.getElementsByTagName ? function(t, e) {
                        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var n, i = [],
                            o = 0,
                            r = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return r
                    }, x.find.CLASS = w.getElementsByClassName && function(t, e) {
                        return F ? e.getElementsByClassName(t) : void 0
                    }, I = [], P = [], (w.qsa = mt.test(i.querySelectorAll)) && (o(function(t) {
                        j.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || P.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + R + "-]").length || P.push("~="), t.querySelectorAll(":checked").length || P.push(":checked"), t.querySelectorAll("a#" + R + "+*").length || P.push(".#.+[+~]")
                    }), o(function(t) {
                        var e = i.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && P.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), P.push(",.*:")
                    })), (w.matchesSelector = mt.test(M = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && o(function(t) {
                        w.disconnectedMatch = M.call(t, "div"), M.call(t, "[s!='']:x"), I.push("!=", st)
                    }), P = P.length && new RegExp(P.join("|")), I = I.length && new RegExp(I.join("|")), e = mt.test(j.compareDocumentPosition), L = e || mt.test(j.contains) ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, U = e ? function(t, e) {
                        if (t === e) return D = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === H && L(H, t) ? -1 : e === i || e.ownerDocument === H && L(H, e) ? 1 : N ? tt(N, t) - tt(N, e) : 0 : 4 & n ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return D = !0, 0;
                        var n, o = 0,
                            r = t.parentNode,
                            a = e.parentNode,
                            l = [t],
                            c = [e];
                        if (!r || !a) return t === i ? -1 : e === i ? 1 : r ? -1 : a ? 1 : N ? tt(N, t) - tt(N, e) : 0;
                        if (r === a) return s(t, e);
                        for (n = t; n = n.parentNode;) l.unshift(n);
                        for (n = e; n = n.parentNode;) c.unshift(n);
                        for (; l[o] === c[o];) o++;
                        return o ? s(l[o], c[o]) : l[o] === H ? -1 : c[o] === H ? 1 : 0
                    }, i) : $
                }, e.matches = function(t, n) {
                    return e(t, null, null, n)
                }, e.matchesSelector = function(t, n) {
                    if ((t.ownerDocument || t) !== $ && O(t), n = n.replace(dt, "='$1']"), !(!w.matchesSelector || !F || I && I.test(n) || P && P.test(n))) try {
                        var i = M.call(t, n);
                        if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (t) {}
                    return e(n, $, null, [t]).length > 0
                }, e.contains = function(t, e) {
                    return (t.ownerDocument || t) !== $ && O(t), L(t, e)
                }, e.attr = function(t, e) {
                    (t.ownerDocument || t) !== $ && O(t);
                    var n = x.attrHandle[e.toLowerCase()],
                        i = n && G.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !F) : void 0;
                    return void 0 !== i ? i : w.attributes || !F ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }, e.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, e.uniqueSort = function(t) {
                    var e, n = [],
                        i = 0,
                        o = 0;
                    if (D = !w.detectDuplicates, N = !w.sortStable && t.slice(0), t.sort(U), D) {
                        for (; e = t[o++];) e === t[o] && (i = n.push(o));
                        for (; i--;) t.splice(n[i], 1)
                    }
                    return N = null, t
                }, C = e.getText = function(t) {
                    var e, n = "",
                        i = 0,
                        o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else
                        for (; e = t[i++];) n += C(e);
                    return n
                }, x = e.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: ft,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(wt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, n = !t[6] && t[2];
                            return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(wt, xt).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = z[t + " "];
                            return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && z(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, n, i) {
                            return function(o) {
                                var r = e.attr(o, t);
                                return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(at, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(t, e, n, i, o) {
                            var r = "nth" !== t.slice(0, 3),
                                s = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === i && 0 === o ? function(t) {
                                return !!t.parentNode
                            } : function(e, n, l) {
                                var c, u, d, h, p, f, g = r !== s ? "nextSibling" : "previousSibling",
                                    v = e.parentNode,
                                    m = a && e.nodeName.toLowerCase(),
                                    b = !l && !a;
                                if (v) {
                                    if (r) {
                                        for (; g;) {
                                            for (d = e; d = d[g];)
                                                if (a ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                            f = g = "only" === t && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [s ? v.firstChild : v.lastChild], s && b) {
                                        for (u = v[R] || (v[R] = {}), c = u[t] || [], p = c[0] === q && c[1], h = c[0] === q && c[2], d = p && v.childNodes[p]; d = ++p && d && d[g] || (h = p = 0) || f.pop();)
                                            if (1 === d.nodeType && ++h && d === e) {
                                                u[t] = [q, p, h];
                                                break
                                            }
                                    } else if (b && (c = (e[R] || (e[R] = {}))[t]) && c[0] === q) h = c[1];
                                    else
                                        for (;
                                            (d = ++p && d && d[g] || (h = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++h || (b && ((d[R] || (d[R] = {}))[t] = [q, h]), d !== e)););
                                    return h -= o, h === i || h % i === 0 && h / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, n) {
                            var o, r = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return r[R] ? r(n) : r.length > 1 ? (o = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                                for (var i, o = r(t, n), s = o.length; s--;) i = tt(t, o[s]), t[i] = !(e[i] = o[s])
                            }) : function(t) {
                                return r(t, 0, o)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: i(function(t) {
                            var e = [],
                                n = [],
                                o = E(t.replace(lt, "$1"));
                            return o[R] ? i(function(t, e, n, i) {
                                for (var r, s = o(t, null, i, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                            }) : function(t, i, r) {
                                return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                            }
                        }),
                        has: i(function(t) {
                            return function(n) {
                                return e(t, n).length > 0
                            }
                        }),
                        contains: i(function(t) {
                            return t = t.replace(wt, xt),
                                function(e) {
                                    return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                                }
                        }),
                        lang: i(function(t) {
                            return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(),
                                function(e) {
                                    var n;
                                    do
                                        if (n = F ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === j
                        },
                        focus: function(t) {
                            return t === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return t.disabled === !1
                        },
                        disabled: function(t) {
                            return t.disabled === !0
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !x.pseudos.empty(t)
                        },
                        header: function(t) {
                            return vt.test(t.nodeName)
                        },
                        input: function(t) {
                            return gt.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(t, e) {
                            return [e - 1]
                        }),
                        eq: c(function(t, e, n) {
                            return [0 > n ? n + e : n]
                        }),
                        even: c(function(t, e) {
                            for (var n = 0; e > n; n += 2) t.push(n);
                            return t
                        }),
                        odd: c(function(t, e) {
                            for (var n = 1; e > n; n += 2) t.push(n);
                            return t
                        }),
                        lt: c(function(t, e, n) {
                            for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                            return t
                        }),
                        gt: c(function(t, e, n) {
                            for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                            return t
                        })
                    }
                }, x.pseudos.nth = x.pseudos.eq;
                for (_ in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) x.pseudos[_] = a(_);
                for (_ in {
                        submit: !0,
                        reset: !0
                    }) x.pseudos[_] = l(_);
                return d.prototype = x.filters = x.pseudos, x.setFilters = new d, S = e.tokenize = function(t, n) {
                    var i, o, r, s, a, l, c, u = W[t + " "];
                    if (u) return n ? 0 : u.slice(0);
                    for (a = t, l = [], c = x.preFilter; a;) {
                        (!i || (o = ct.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ut.exec(a)) && (i = o.shift(), r.push({
                            value: i,
                            type: o[0].replace(lt, " ")
                        }), a = a.slice(i.length));
                        for (s in x.filter) !(o = ft[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                            value: i,
                            type: s,
                            matches: o
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return n ? a.length : a ? e.error(t) : W(t, l).slice(0)
                }, E = e.compile = function(t, e) {
                    var n, i = [],
                        o = [],
                        r = V[t + " "];
                    if (!r) {
                        for (e || (e = S(t)), n = e.length; n--;) r = b(e[n]), r[R] ? i.push(r) : o.push(r);
                        r = V(t, y(o, i)), r.selector = t
                    }
                    return r
                }, A = e.select = function(t, e, n, i) {
                    var o, r, s, a, l, c = "function" == typeof t && t,
                        d = !i && S(t = c.selector || t);
                    if (n = n || [], 1 === d.length) {
                        if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === e.nodeType && F && x.relative[r[1].type]) {
                            if (e = (x.find.ID(s.matches[0].replace(wt, xt), e) || [])[0], !e) return n;
                            c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                        }
                        for (o = ft.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !x.relative[a = s.type]);)
                            if ((l = x.find[a]) && (i = l(s.matches[0].replace(wt, xt), yt.test(r[0].type) && u(e.parentNode) || e))) {
                                if (r.splice(o, 1), t = i.length && h(r), !t) return Z.apply(n, i), n;
                                break
                            }
                    }
                    return (c || E(t, d))(i, e, !F, n, yt.test(t) && u(e.parentNode) || e), n
                }, w.sortStable = R.split("").sort(U).join("") === R, w.detectDuplicates = !!D, O(), w.sortDetached = o(function(t) {
                    return 1 & t.compareDocumentPosition($.createElement("div"))
                }), o(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || r("type|href|height|width", function(t, e, n) {
                    return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), w.attributes && o(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || r("value", function(t, e, n) {
                    return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
                }), o(function(t) {
                    return null == t.getAttribute("disabled")
                }) || r(et, function(t, e, n) {
                    var i;
                    return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }), e
            }(t);
            it.find = lt, it.expr = lt.selectors, it.expr[":"] = it.expr.pseudos, it.unique = lt.uniqueSort, it.text = lt.getText, it.isXMLDoc = lt.isXML, it.contains = lt.contains;
            var ct = it.expr.match.needsContext,
                ut = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                dt = /^.[^:#\[\.,]*$/;
            it.filter = function(t, e, n) {
                var i = e[0];
                return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? it.find.matchesSelector(i, t) ? [i] : [] : it.find.matches(t, it.grep(e, function(t) {
                    return 1 === t.nodeType
                }))
            }, it.fn.extend({
                find: function(t) {
                    var e, n = this.length,
                        i = [],
                        o = this;
                    if ("string" != typeof t) return this.pushStack(it(t).filter(function() {
                        for (e = 0; n > e; e++)
                            if (it.contains(o[e], this)) return !0
                    }));
                    for (e = 0; n > e; e++) it.find(t, o[e], i);
                    return i = this.pushStack(n > 1 ? it.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
                },
                filter: function(t) {
                    return this.pushStack(a(this, t || [], !1))
                },
                not: function(t) {
                    return this.pushStack(a(this, t || [], !0))
                },
                is: function(t) {
                    return !!a(this, "string" == typeof t && ct.test(t) ? it(t) : t || [], !1).length
                }
            });
            var ht, pt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                ft = it.fn.init = function(t, e) {
                    var n, i;
                    if (!t) return this;
                    if ("string" == typeof t) {
                        if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : pt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || ht).find(t) : this.constructor(e).find(t);
                        if (n[1]) {
                            if (e = e instanceof it ? e[0] : e, it.merge(this, it.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : et, !0)), ut.test(n[1]) && it.isPlainObject(e))
                                for (n in e) it.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                            return this
                        }
                        return i = et.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = et, this.selector = t, this
                    }
                    return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : it.isFunction(t) ? "undefined" != typeof ht.ready ? ht.ready(t) : t(it) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), it.makeArray(t, this))
                };
            ft.prototype = it.fn, ht = it(et);
            var gt = /^(?:parents|prev(?:Until|All))/,
                vt = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            it.extend({
                dir: function(t, e, n) {
                    for (var i = [], o = void 0 !== n;
                        (t = t[e]) && 9 !== t.nodeType;)
                        if (1 === t.nodeType) {
                            if (o && it(t).is(n)) break;
                            i.push(t)
                        }
                    return i
                },
                sibling: function(t, e) {
                    for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                    return n
                }
            }), it.fn.extend({
                has: function(t) {
                    var e = it(t, this),
                        n = e.length;
                    return this.filter(function() {
                        for (var t = 0; n > t; t++)
                            if (it.contains(this, e[t])) return !0
                    })
                },
                closest: function(t, e) {
                    for (var n, i = 0, o = this.length, r = [], s = ct.test(t) || "string" != typeof t ? it(t, e || this.context) : 0; o > i; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && it.find.matchesSelector(n, t))) {
                                r.push(n);
                                break
                            }
                    return this.pushStack(r.length > 1 ? it.unique(r) : r)
                },
                index: function(t) {
                    return t ? "string" == typeof t ? X.call(it(t), this[0]) : X.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(t, e) {
                    return this.pushStack(it.unique(it.merge(this.get(), it(t, e))))
                },
                addBack: function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }), it.each({
                parent: function(t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                },
                parents: function(t) {
                    return it.dir(t, "parentNode")
                },
                parentsUntil: function(t, e, n) {
                    return it.dir(t, "parentNode", n)
                },
                next: function(t) {
                    return l(t, "nextSibling")
                },
                prev: function(t) {
                    return l(t, "previousSibling")
                },
                nextAll: function(t) {
                    return it.dir(t, "nextSibling")
                },
                prevAll: function(t) {
                    return it.dir(t, "previousSibling")
                },
                nextUntil: function(t, e, n) {
                    return it.dir(t, "nextSibling", n)
                },
                prevUntil: function(t, e, n) {
                    return it.dir(t, "previousSibling", n)
                },
                siblings: function(t) {
                    return it.sibling((t.parentNode || {}).firstChild, t)
                },
                children: function(t) {
                    return it.sibling(t.firstChild)
                },
                contents: function(t) {
                    return t.contentDocument || it.merge([], t.childNodes)
                }
            }, function(t, e) {
                it.fn[t] = function(n, i) {
                    var o = it.map(this, e, n);
                    return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = it.filter(i, o)), this.length > 1 && (vt[t] || it.unique(o), gt.test(t) && o.reverse()), this.pushStack(o)
                }
            });
            var mt = /\S+/g,
                bt = {};
            it.Callbacks = function(t) {
                t = "string" == typeof t ? bt[t] || c(t) : it.extend({}, t);
                var e, n, i, o, r, s, a = [],
                    l = !t.once && [],
                    u = function(c) {
                        for (e = t.memory && c, n = !0, s = o || 0, o = 0, r = a.length, i = !0; a && r > s; s++)
                            if (a[s].apply(c[0], c[1]) === !1 && t.stopOnFalse) {
                                e = !1;
                                break
                            }
                        i = !1, a && (l ? l.length && u(l.shift()) : e ? a = [] : d.disable())
                    },
                    d = {
                        add: function() {
                            if (a) {
                                var n = a.length;
                                ! function e(n) {
                                    it.each(n, function(n, i) {
                                        var o = it.type(i);
                                        "function" === o ? t.unique && d.has(i) || a.push(i) : i && i.length && "string" !== o && e(i)
                                    })
                                }(arguments), i ? r = a.length : e && (o = n, u(e))
                            }
                            return this
                        },
                        remove: function() {
                            return a && it.each(arguments, function(t, e) {
                                for (var n;
                                    (n = it.inArray(e, a, n)) > -1;) a.splice(n, 1), i && (r >= n && r--, s >= n && s--)
                            }), this
                        },
                        has: function(t) {
                            return t ? it.inArray(t, a) > -1 : !(!a || !a.length)
                        },
                        empty: function() {
                            return a = [], r = 0, this
                        },
                        disable: function() {
                            return a = l = e = void 0, this
                        },
                        disabled: function() {
                            return !a
                        },
                        lock: function() {
                            return l = void 0, e || d.disable(), this
                        },
                        locked: function() {
                            return !l
                        },
                        fireWith: function(t, e) {
                            return !a || n && !l || (e = e || [], e = [t, e.slice ? e.slice() : e], i ? l.push(e) : u(e)), this
                        },
                        fire: function() {
                            return d.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!n
                        }
                    };
                return d
            }, it.extend({
                Deferred: function(t) {
                    var e = [
                            ["resolve", "done", it.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", it.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", it.Callbacks("memory")]
                        ],
                        n = "pending",
                        i = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return o.done(arguments).fail(arguments), this
                            },
                            then: function() {
                                var t = arguments;
                                return it.Deferred(function(n) {
                                    it.each(e, function(e, r) {
                                        var s = it.isFunction(t[e]) && t[e];
                                        o[r[1]](function() {
                                            var t = s && s.apply(this, arguments);
                                            t && it.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                        })
                                    }), t = null
                                }).promise()
                            },
                            promise: function(t) {
                                return null != t ? it.extend(t, i) : i
                            }
                        },
                        o = {};
                    return i.pipe = i.then, it.each(e, function(t, r) {
                        var s = r[2],
                            a = r[3];
                        i[r[1]] = s.add, a && s.add(function() {
                            n = a
                        }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                            return o[r[0] + "With"](this === o ? i : this, arguments), this
                        }, o[r[0] + "With"] = s.fireWith
                    }), i.promise(o), t && t.call(o, o), o
                },
                when: function(t) {
                    var e, n, i, o = 0,
                        r = J.call(arguments),
                        s = r.length,
                        a = 1 !== s || t && it.isFunction(t.promise) ? s : 0,
                        l = 1 === a ? t : it.Deferred(),
                        c = function(t, n, i) {
                            return function(o) {
                                n[t] = this, i[t] = arguments.length > 1 ? J.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                            }
                        };
                    if (s > 1)
                        for (e = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && it.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, e)) : --a;
                    return a || l.resolveWith(i, r), l.promise()
                }
            });
            var yt;
            it.fn.ready = function(t) {
                return it.ready.promise().done(t), this
            }, it.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(t) {
                    t ? it.readyWait++ : it.ready(!0)
                },
                ready: function(t) {
                    (t === !0 ? --it.readyWait : it.isReady) || (it.isReady = !0, t !== !0 && --it.readyWait > 0 || (yt.resolveWith(et, [it]), it.fn.triggerHandler && (it(et).triggerHandler("ready"), it(et).off("ready"))))
                }
            }), it.ready.promise = function(e) {
                return yt || (yt = it.Deferred(), "complete" === et.readyState ? setTimeout(it.ready) : (et.addEventListener("DOMContentLoaded", u, !1), t.addEventListener("load", u, !1))), yt.promise(e)
            }, it.ready.promise();
            var _t = it.access = function(t, e, n, i, o, r, s) {
                var a = 0,
                    l = t.length,
                    c = null == n;
                if ("object" === it.type(n)) {
                    o = !0;
                    for (a in n) it.access(t, e, a, n[a], !0, r, s)
                } else if (void 0 !== i && (o = !0, it.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                        return c.call(it(t), n)
                    })), e))
                    for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
            };
            it.acceptData = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            }, d.uid = 1, d.accepts = it.acceptData, d.prototype = {
                key: function(t) {
                    if (!d.accepts(t)) return 0;
                    var e = {},
                        n = t[this.expando];
                    if (!n) {
                        n = d.uid++;
                        try {
                            e[this.expando] = {
                                value: n
                            }, Object.defineProperties(t, e)
                        } catch (i) {
                            e[this.expando] = n, it.extend(t, e)
                        }
                    }
                    return this.cache[n] || (this.cache[n] = {}), n
                },
                set: function(t, e, n) {
                    var i, o = this.key(t),
                        r = this.cache[o];
                    if ("string" == typeof e) r[e] = n;
                    else if (it.isEmptyObject(r)) it.extend(this.cache[o], e);
                    else
                        for (i in e) r[i] = e[i];
                    return r
                },
                get: function(t, e) {
                    var n = this.cache[this.key(t)];
                    return void 0 === e ? n : n[e]
                },
                access: function(t, e, n) {
                    var i;
                    return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, it.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
                },
                remove: function(t, e) {
                    var n, i, o, r = this.key(t),
                        s = this.cache[r];
                    if (void 0 === e) this.cache[r] = {};
                    else {
                        it.isArray(e) ? i = e.concat(e.map(it.camelCase)) : (o = it.camelCase(e), e in s ? i = [e, o] : (i = o, i = i in s ? [i] : i.match(mt) || [])), n = i.length;
                        for (; n--;) delete s[i[n]]
                    }
                },
                hasData: function(t) {
                    return !it.isEmptyObject(this.cache[t[this.expando]] || {})
                },
                discard: function(t) {
                    t[this.expando] && delete this.cache[t[this.expando]]
                }
            };
            var wt = new d,
                xt = new d,
                Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                kt = /([A-Z])/g;
            it.extend({
                hasData: function(t) {
                    return xt.hasData(t) || wt.hasData(t)
                },
                data: function(t, e, n) {
                    return xt.access(t, e, n)
                },
                removeData: function(t, e) {
                    xt.remove(t, e)
                },
                _data: function(t, e, n) {
                    return wt.access(t, e, n)
                },
                _removeData: function(t, e) {
                    wt.remove(t, e)
                }
            }), it.fn.extend({
                data: function(t, e) {
                    var n, i, o, r = this[0],
                        s = r && r.attributes;
                    if (void 0 === t) {
                        if (this.length && (o = xt.get(r), 1 === r.nodeType && !wt.get(r, "hasDataAttrs"))) {
                            for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = it.camelCase(i.slice(5)), h(r, i, o[i])));
                            wt.set(r, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof t ? this.each(function() {
                        xt.set(this, t)
                    }) : _t(this, function(e) {
                        var n, i = it.camelCase(t);
                        if (r && void 0 === e) {
                            if (n = xt.get(r, t), void 0 !== n) return n;
                            if (n = xt.get(r, i), void 0 !== n) return n;
                            if (n = h(r, i, void 0), void 0 !== n) return n
                        } else this.each(function() {
                            var n = xt.get(this, i);
                            xt.set(this, i, e), -1 !== t.indexOf("-") && void 0 !== n && xt.set(this, t, e)
                        })
                    }, null, e, arguments.length > 1, null, !0)
                },
                removeData: function(t) {
                    return this.each(function() {
                        xt.remove(this, t)
                    })
                }
            }), it.extend({
                queue: function(t, e, n) {
                    var i;
                    return t ? (e = (e || "fx") + "queue", i = wt.get(t, e), n && (!i || it.isArray(n) ? i = wt.access(t, e, it.makeArray(n)) : i.push(n)), i || []) : void 0
                },
                dequeue: function(t, e) {
                    e = e || "fx";
                    var n = it.queue(t, e),
                        i = n.length,
                        o = n.shift(),
                        r = it._queueHooks(t, e),
                        s = function() {
                            it.dequeue(t, e)
                        };
                    "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
                },
                _queueHooks: function(t, e) {
                    var n = e + "queueHooks";
                    return wt.get(t, n) || wt.access(t, n, {
                        empty: it.Callbacks("once memory").add(function() {
                            wt.remove(t, [e + "queue", n])
                        })
                    })
                }
            }), it.fn.extend({
                queue: function(t, e) {
                    var n = 2;
                    return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? it.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                        var n = it.queue(this, t, e);
                        it._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && it.dequeue(this, t)
                    })
                },
                dequeue: function(t) {
                    return this.each(function() {
                        it.dequeue(this, t)
                    })
                },
                clearQueue: function(t) {
                    return this.queue(t || "fx", [])
                },
                promise: function(t, e) {
                    var n, i = 1,
                        o = it.Deferred(),
                        r = this,
                        s = this.length,
                        a = function() {
                            --i || o.resolveWith(r, [r])
                        };
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = wt.get(r[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                    return a(), o.promise(e)
                }
            });
            var St = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Et = ["Top", "Right", "Bottom", "Left"],
                At = function(t, e) {
                    return t = e || t, "none" === it.css(t, "display") || !it.contains(t.ownerDocument, t)
                },
                Tt = /^(?:checkbox|radio)$/i;
            ! function() {
                var t = et.createDocumentFragment(),
                    e = t.appendChild(et.createElement("div")),
                    n = et.createElement("input");
                n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), tt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", tt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
            }();
            var Nt = "undefined";
            tt.focusinBubbles = "onfocusin" in t;
            var Dt = /^key/,
                Ot = /^(?:mouse|pointer|contextmenu)|click/,
                $t = /^(?:focusinfocus|focusoutblur)$/,
                jt = /^([^.]*)(?:\.(.+)|)$/;
            it.event = {
                global: {},
                add: function(t, e, n, i, o) {
                    var r, s, a, l, c, u, d, h, p, f, g, v = wt.get(t);
                    if (v)
                        for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = it.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(e) {
                                return typeof it !== Nt && it.event.triggered !== e.type ? it.event.dispatch.apply(t, arguments) : void 0
                            }), e = (e || "").match(mt) || [""], c = e.length; c--;) a = jt.exec(e[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p && (d = it.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = it.event.special[p] || {}, u = it.extend({
                            type: p,
                            origType: g,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && it.expr.match.needsContext.test(o),
                            namespace: f.join(".")
                        }, r), (h = l[p]) || (h = l[p] = [], h.delegateCount = 0, d.setup && d.setup.call(t, i, f, s) !== !1 || t.addEventListener && t.addEventListener(p, s, !1)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), it.event.global[p] = !0)
                },
                remove: function(t, e, n, i, o) {
                    var r, s, a, l, c, u, d, h, p, f, g, v = wt.hasData(t) && wt.get(t);
                    if (v && (l = v.events)) {
                        for (e = (e || "").match(mt) || [""], c = e.length; c--;)
                            if (a = jt.exec(e[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                                for (d = it.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, h = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) u = h[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(t, u));
                                s && !h.length && (d.teardown && d.teardown.call(t, f, v.handle) !== !1 || it.removeEvent(t, p, v.handle), delete l[p])
                            } else
                                for (p in l) it.event.remove(t, p + e[c], n, i, !0);
                        it.isEmptyObject(l) && (delete v.handle, wt.remove(t, "events"))
                    }
                },
                trigger: function(e, n, i, o) {
                    var r, s, a, l, c, u, d, h = [i || et],
                        p = K.call(e, "type") ? e.type : e,
                        f = K.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = a = i = i || et, 3 !== i.nodeType && 8 !== i.nodeType && !$t.test(p + it.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[it.expando] ? e : new it.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : it.makeArray(n, [e]), d = it.event.special[p] || {}, o || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                        if (!o && !d.noBubble && !it.isWindow(i)) {
                            for (l = d.delegateType || p, $t.test(l + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                            a === (i.ownerDocument || et) && h.push(a.defaultView || a.parentWindow || t)
                        }
                        for (r = 0;
                            (s = h[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? l : d.bindType || p, u = (wt.get(s, "events") || {})[e.type] && wt.get(s, "handle"), u && u.apply(s, n), u = c && s[c], u && u.apply && it.acceptData(s) && (e.result = u.apply(s, n), e.result === !1 && e.preventDefault());
                        return e.type = p, o || e.isDefaultPrevented() || d._default && d._default.apply(h.pop(), n) !== !1 || !it.acceptData(i) || c && it.isFunction(i[p]) && !it.isWindow(i) && (a = i[c], a && (i[c] = null), it.event.triggered = p, i[p](), it.event.triggered = void 0, a && (i[c] = a)), e.result
                    }
                },
                dispatch: function(t) {
                    t = it.event.fix(t);
                    var e, n, i, o, r, s = [],
                        a = J.call(arguments),
                        l = (wt.get(this, "events") || {})[t.type] || [],
                        c = it.event.special[t.type] || {};
                    if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                        for (s = it.event.handlers.call(this, t, l), e = 0;
                            (o = s[e++]) && !t.isPropagationStopped();)
                            for (t.currentTarget = o.elem, n = 0;
                                (r = o.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, t.data = r.data, i = ((it.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, t), t.result
                    }
                },
                handlers: function(t, e) {
                    var n, i, o, r, s = [],
                        a = e.delegateCount,
                        l = t.target;
                    if (a && l.nodeType && (!t.button || "click" !== t.type))
                        for (; l !== this; l = l.parentNode || this)
                            if (l.disabled !== !0 || "click" !== t.type) {
                                for (i = [], n = 0; a > n; n++) r = e[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? it(o, this).index(l) >= 0 : it.find(o, this, null, [l]).length), i[o] && i.push(r);
                                i.length && s.push({
                                    elem: l,
                                    handlers: i
                                })
                            }
                    return a < e.length && s.push({
                        elem: this,
                        handlers: e.slice(a)
                    }), s
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(t, e) {
                        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(t, e) {
                        var n, i, o, r = e.button;
                        return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || et, i = n.documentElement, o = n.body, t.pageX = e.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                    }
                },
                fix: function(t) {
                    if (t[it.expando]) return t;
                    var e, n, i, o = t.type,
                        r = t,
                        s = this.fixHooks[o];
                    for (s || (this.fixHooks[o] = s = Ot.test(o) ? this.mouseHooks : Dt.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new it.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
                    return t.target || (t.target = et), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, r) : t
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            return this !== g() && this.focus ? (this.focus(), !1) : void 0
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === g() && this.blur ? (this.blur(), !1) : void 0
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            return "checkbox" === this.type && this.click && it.nodeName(this, "input") ? (this.click(), !1) : void 0
                        },
                        _default: function(t) {
                            return it.nodeName(t.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                },
                simulate: function(t, e, n, i) {
                    var o = it.extend(new it.Event, n, {
                        type: t,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    i ? it.event.trigger(o, null, e) : it.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
                }
            }, it.removeEvent = function(t, e, n) {
                t.removeEventListener && t.removeEventListener(e, n, !1)
            }, it.Event = function(t, e) {
                return this instanceof it.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? p : f) : this.type = t, e && it.extend(this, e), this.timeStamp = t && t.timeStamp || it.now(), void(this[it.expando] = !0)) : new it.Event(t, e)
            }, it.Event.prototype = {
                isDefaultPrevented: f,
                isPropagationStopped: f,
                isImmediatePropagationStopped: f,
                preventDefault: function() {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = p, t && t.preventDefault && t.preventDefault()
                },
                stopPropagation: function() {
                    var t = this.originalEvent;
                    this.isPropagationStopped = p, t && t.stopPropagation && t.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = p, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
                }
            }, it.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(t, e) {
                it.event.special[t] = {
                    delegateType: e,
                    bindType: e,
                    handle: function(t) {
                        var n, i = this,
                            o = t.relatedTarget,
                            r = t.handleObj;
                        return (!o || o !== i && !it.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                    }
                }
            }), tt.focusinBubbles || it.each({
                focus: "focusin",
                blur: "focusout"
            }, function(t, e) {
                var n = function(t) {
                    it.event.simulate(e, t.target, it.event.fix(t), !0)
                };
                it.event.special[e] = {
                    setup: function() {
                        var i = this.ownerDocument || this,
                            o = wt.access(i, e);
                        o || i.addEventListener(t, n, !0), wt.access(i, e, (o || 0) + 1)
                    },
                    teardown: function() {
                        var i = this.ownerDocument || this,
                            o = wt.access(i, e) - 1;
                        o ? wt.access(i, e, o) : (i.removeEventListener(t, n, !0), wt.remove(i, e))
                    }
                }
            }), it.fn.extend({
                on: function(t, e, n, i, o) {
                    var r, s;
                    if ("object" == typeof t) {
                        "string" != typeof e && (n = n || e, e = void 0);
                        for (s in t) this.on(s, e, n, t[s], o);
                        return this
                    }
                    if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = f;
                    else if (!i) return this;
                    return 1 === o && (r = i, i = function(t) {
                        return it().off(t), r.apply(this, arguments)
                    }, i.guid = r.guid || (r.guid = it.guid++)), this.each(function() {
                        it.event.add(this, t, i, n, e)
                    })
                },
                one: function(t, e, n, i) {
                    return this.on(t, e, n, i, 1)
                },
                off: function(t, e, n) {
                    var i, o;
                    if (t && t.preventDefault && t.handleObj) return i = t.handleObj, it(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" == typeof t) {
                        for (o in t) this.off(o, e, t[o]);
                        return this
                    }
                    return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = f), this.each(function() {
                        it.event.remove(this, t, n, e)
                    })
                },
                trigger: function(t, e) {
                    return this.each(function() {
                        it.event.trigger(t, e, this)
                    })
                },
                triggerHandler: function(t, e) {
                    var n = this[0];
                    return n ? it.event.trigger(t, e, n, !0) : void 0
                }
            });
            var Ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                Pt = /<([\w:]+)/,
                It = /<|&#?\w+;/,
                Mt = /<(?:script|style|link)/i,
                Lt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Rt = /^$|\/(?:java|ecma)script/i,
                Ht = /^true\/(.*)/,
                qt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                Bt = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            Bt.optgroup = Bt.option, Bt.tbody = Bt.tfoot = Bt.colgroup = Bt.caption = Bt.thead, Bt.th = Bt.td, it.extend({
                clone: function(t, e, n) {
                    var i, o, r, s, a = t.cloneNode(!0),
                        l = it.contains(t.ownerDocument, t);
                    if (!(tt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || it.isXMLDoc(t)))
                        for (s = w(a), r = w(t), i = 0, o = r.length; o > i; i++) x(r[i], s[i]);
                    if (e)
                        if (n)
                            for (r = r || w(t), s = s || w(a), i = 0, o = r.length; o > i; i++) _(r[i], s[i]);
                        else _(t, a);
                    return s = w(a, "script"), s.length > 0 && y(s, !l && w(t, "script")), a
                },
                buildFragment: function(t, e, n, i) {
                    for (var o, r, s, a, l, c, u = e.createDocumentFragment(), d = [], h = 0, p = t.length; p > h; h++)
                        if (o = t[h], o || 0 === o)
                            if ("object" === it.type(o)) it.merge(d, o.nodeType ? [o] : o);
                            else if (It.test(o)) {
                        for (r = r || u.appendChild(e.createElement("div")), s = (Pt.exec(o) || ["", ""])[1].toLowerCase(), a = Bt[s] || Bt._default, r.innerHTML = a[1] + o.replace(Ft, "<$1></$2>") + a[2], c = a[0]; c--;) r = r.lastChild;
                        it.merge(d, r.childNodes), r = u.firstChild, r.textContent = ""
                    } else d.push(e.createTextNode(o));
                    for (u.textContent = "", h = 0; o = d[h++];)
                        if ((!i || -1 === it.inArray(o, i)) && (l = it.contains(o.ownerDocument, o), r = w(u.appendChild(o), "script"), l && y(r), n))
                            for (c = 0; o = r[c++];) Rt.test(o.type || "") && n.push(o);
                    return u
                },
                cleanData: function(t) {
                    for (var e, n, i, o, r = it.event.special, s = 0; void 0 !== (n = t[s]); s++) {
                        if (it.acceptData(n) && (o = n[wt.expando], o && (e = wt.cache[o]))) {
                            if (e.events)
                                for (i in e.events) r[i] ? it.event.remove(n, i) : it.removeEvent(n, i, e.handle);
                            wt.cache[o] && delete wt.cache[o]
                        }
                        delete xt.cache[n[xt.expando]]
                    }
                }
            }), it.fn.extend({
                text: function(t) {
                    return _t(this, function(t) {
                        return void 0 === t ? it.text(this) : this.empty().each(function() {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                        })
                    }, null, t, arguments.length)
                },
                append: function() {
                    return this.domManip(arguments, function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = v(this, t);
                            e.appendChild(t)
                        }
                    })
                },
                prepend: function() {
                    return this.domManip(arguments, function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = v(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                },
                before: function() {
                    return this.domManip(arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                },
                after: function() {
                    return this.domManip(arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                },
                remove: function(t, e) {
                    for (var n, i = t ? it.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || it.cleanData(w(n)), n.parentNode && (e && it.contains(n.ownerDocument, n) && y(w(n, "script")), n.parentNode.removeChild(n));
                    return this
                },
                empty: function() {
                    for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (it.cleanData(w(t, !1)), t.textContent = "");
                    return this
                },
                clone: function(t, e) {
                    return t = null != t && t, e = null == e ? t : e, this.map(function() {
                        return it.clone(this, t, e)
                    })
                },
                html: function(t) {
                    return _t(this, function(t) {
                        var e = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                        if ("string" == typeof t && !Mt.test(t) && !Bt[(Pt.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = t.replace(Ft, "<$1></$2>");
                            try {
                                for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (it.cleanData(w(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (t) {}
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                },
                replaceWith: function() {
                    var t = arguments[0];
                    return this.domManip(arguments, function(e) {
                        t = this.parentNode, it.cleanData(w(this)), t && t.replaceChild(e, this)
                    }), t && (t.length || t.nodeType) ? this : this.remove()
                },
                detach: function(t) {
                    return this.remove(t, !0)
                },
                domManip: function(t, e) {
                    t = G.apply([], t);
                    var n, i, o, r, s, a, l = 0,
                        c = this.length,
                        u = this,
                        d = c - 1,
                        h = t[0],
                        p = it.isFunction(h);
                    if (p || c > 1 && "string" == typeof h && !tt.checkClone && Lt.test(h)) return this.each(function(n) {
                        var i = u.eq(n);
                        p && (t[0] = h.call(this, n, i.html())), i.domManip(t, e)
                    });
                    if (c && (n = it.buildFragment(t, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                        for (o = it.map(w(n, "script"), m), r = o.length; c > l; l++) s = n, l !== d && (s = it.clone(s, !0, !0), r && it.merge(o, w(s, "script"))), e.call(this[l], s, l);
                        if (r)
                            for (a = o[o.length - 1].ownerDocument, it.map(o, b), l = 0; r > l; l++) s = o[l], Rt.test(s.type || "") && !wt.access(s, "globalEval") && it.contains(a, s) && (s.src ? it._evalUrl && it._evalUrl(s.src) : it.globalEval(s.textContent.replace(qt, "")))
                    }
                    return this
                }
            }), it.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(t, e) {
                it.fn[t] = function(t) {
                    for (var n, i = [], o = it(t), r = o.length - 1, s = 0; r >= s; s++) n = s === r ? this : this.clone(!0), it(o[s])[e](n), Y.apply(i, n.get());
                    return this.pushStack(i)
                }
            });
            var zt, Wt = {},
                Vt = /^margin/,
                Ut = new RegExp("^(" + St + ")(?!px)[a-z%]+$", "i"),
                Jt = function(e) {
                    return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
                };
            ! function() {
                function e() {
                    s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", o.appendChild(r);
                    var e = t.getComputedStyle(s, null);
                    n = "1%" !== e.top, i = "4px" === e.width, o.removeChild(r)
                }
                var n, i, o = et.documentElement,
                    r = et.createElement("div"),
                    s = et.createElement("div");
                s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", tt.clearCloneStyle = "content-box" === s.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(s), t.getComputedStyle && it.extend(tt, {
                    pixelPosition: function() {
                        return e(), n
                    },
                    boxSizingReliable: function() {
                        return null == i && e(), i
                    },
                    reliableMarginRight: function() {
                        var e, n = s.appendChild(et.createElement("div"));
                        return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", o.appendChild(r), e = !parseFloat(t.getComputedStyle(n, null).marginRight), o.removeChild(r), s.removeChild(n), e
                    }
                }))
            }(), it.swap = function(t, e, n, i) {
                var o, r, s = {};
                for (r in e) s[r] = t.style[r], t.style[r] = e[r];
                o = n.apply(t, i || []);
                for (r in e) t.style[r] = s[r];
                return o
            };
            var Gt = /^(none|table(?!-c[ea]).+)/,
                Yt = new RegExp("^(" + St + ")(.*)$", "i"),
                Xt = new RegExp("^([+-])=(" + St + ")", "i"),
                Qt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Zt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Kt = ["Webkit", "O", "Moz", "ms"];
            it.extend({
                cssHooks: {
                    opacity: {
                        get: function(t, e) {
                            if (e) {
                                var n = S(t, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: "cssFloat"
                },
                style: function(t, e, n, i) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var o, r, s, a = it.camelCase(e),
                            l = t.style;
                        return e = it.cssProps[a] || (it.cssProps[a] = A(l, a)), s = it.cssHooks[e] || it.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e] : (r = typeof n, "string" === r && (o = Xt.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(it.css(t, e)), r = "number"), void(null != n && n === n && ("number" !== r || it.cssNumber[a] || (n += "px"), tt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n))))
                    }
                },
                css: function(t, e, n, i) {
                    var o, r, s, a = it.camelCase(e);
                    return e = it.cssProps[a] || (it.cssProps[a] = A(t.style, a)), s = it.cssHooks[e] || it.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = S(t, e, i)), "normal" === o && e in Zt && (o = Zt[e]), "" === n || n ? (r = parseFloat(o), n === !0 || it.isNumeric(r) ? r || 0 : o) : o
                }
            }), it.each(["height", "width"], function(t, e) {
                it.cssHooks[e] = {
                    get: function(t, n, i) {
                        return n ? Gt.test(it.css(t, "display")) && 0 === t.offsetWidth ? it.swap(t, Qt, function() {
                            return D(t, e, i)
                        }) : D(t, e, i) : void 0
                    },
                    set: function(t, n, i) {
                        var o = i && Jt(t);
                        return T(t, n, i ? N(t, e, i, "border-box" === it.css(t, "boxSizing", !1, o), o) : 0)
                    }
                }
            }), it.cssHooks.marginRight = E(tt.reliableMarginRight, function(t, e) {
                return e ? it.swap(t, {
                    display: "inline-block"
                }, S, [t, "marginRight"]) : void 0
            }), it.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(t, e) {
                it.cssHooks[t + e] = {
                    expand: function(n) {
                        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + Et[i] + e] = r[i] || r[i - 2] || r[0];
                        return o
                    }
                }, Vt.test(t) || (it.cssHooks[t + e].set = T)
            }), it.fn.extend({
                css: function(t, e) {
                    return _t(this, function(t, e, n) {
                        var i, o, r = {},
                            s = 0;
                        if (it.isArray(e)) {
                            for (i = Jt(t), o = e.length; o > s; s++) r[e[s]] = it.css(t, e[s], !1, i);
                            return r
                        }
                        return void 0 !== n ? it.style(t, e, n) : it.css(t, e)
                    }, t, e, arguments.length > 1)
                },
                show: function() {
                    return O(this, !0)
                },
                hide: function() {
                    return O(this)
                },
                toggle: function(t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                        At(this) ? it(this).show() : it(this).hide()
                    })
                }
            }), it.Tween = $, $.prototype = {
                constructor: $,
                init: function(t, e, n, i, o, r) {
                    this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (it.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var t = $.propHooks[this.prop];
                    return t && t.get ? t.get(this) : $.propHooks._default.get(this)
                },
                run: function(t) {
                    var e, n = $.propHooks[this.prop];
                    return this.options.duration ? this.pos = e = it.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
                }
            }, $.prototype.init.prototype = $.prototype, $.propHooks = {
                _default: {
                    get: function(t) {
                        var e;
                        return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = it.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                    },
                    set: function(t) {
                        it.fx.step[t.prop] ? it.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[it.cssProps[t.prop]] || it.cssHooks[t.prop]) ? it.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                    }
                }
            }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
                set: function(t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            }, it.easing = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                }
            }, it.fx = $.prototype.init, it.fx.step = {};
            var te, ee, ne = /^(?:toggle|show|hide)$/,
                ie = new RegExp("^(?:([+-])=|)(" + St + ")([a-z%]*)$", "i"),
                oe = /queueHooks$/,
                re = [I],
                se = {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e),
                            i = n.cur(),
                            o = ie.exec(e),
                            r = o && o[3] || (it.cssNumber[t] ? "" : "px"),
                            s = (it.cssNumber[t] || "px" !== r && +i) && ie.exec(it.css(n.elem, t)),
                            a = 1,
                            l = 20;
                        if (s && s[3] !== r) {
                            r = r || s[3], o = o || [], s = +i || 1;
                            do a = a || ".5", s /= a, it.style(n.elem, t, s + r); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                        }
                        return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
                    }]
                };
            it.Animation = it.extend(L, {
                    tweener: function(t, e) {
                        it.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                        for (var n, i = 0, o = t.length; o > i; i++) n = t[i], se[n] = se[n] || [], se[n].unshift(e)
                    },
                    prefilter: function(t, e) {
                        e ? re.unshift(t) : re.push(t)
                    }
                }), it.speed = function(t, e, n) {
                    var i = t && "object" == typeof t ? it.extend({}, t) : {
                        complete: n || !n && e || it.isFunction(t) && t,
                        duration: t,
                        easing: n && e || e && !it.isFunction(e) && e
                    };
                    return i.duration = it.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in it.fx.speeds ? it.fx.speeds[i.duration] : it.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                        it.isFunction(i.old) && i.old.call(this), i.queue && it.dequeue(this, i.queue)
                    }, i
                }, it.fn.extend({
                    fadeTo: function(t, e, n, i) {
                        return this.filter(At).css("opacity", 0).show().end().animate({
                            opacity: e
                        }, t, n, i)
                    },
                    animate: function(t, e, n, i) {
                        var o = it.isEmptyObject(t),
                            r = it.speed(e, n, i),
                            s = function() {
                                var e = L(this, it.extend({}, t), r);
                                (o || wt.get(this, "finish")) && e.stop(!0)
                            };
                        return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
                    },
                    stop: function(t, e, n) {
                        var i = function(t) {
                            var e = t.stop;
                            delete t.stop, e(n)
                        };
                        return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                            var e = !0,
                                o = null != t && t + "queueHooks",
                                r = it.timers,
                                s = wt.get(this);
                            if (o) s[o] && s[o].stop && i(s[o]);
                            else
                                for (o in s) s[o] && s[o].stop && oe.test(o) && i(s[o]);
                            for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                            (e || !n) && it.dequeue(this, t)
                        })
                    },
                    finish: function(t) {
                        return t !== !1 && (t = t || "fx"), this.each(function() {
                            var e, n = wt.get(this),
                                i = n[t + "queue"],
                                o = n[t + "queueHooks"],
                                r = it.timers,
                                s = i ? i.length : 0;
                            for (n.finish = !0, it.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                            for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                            delete n.finish
                        })
                    }
                }), it.each(["toggle", "show", "hide"], function(t, e) {
                    var n = it.fn[e];
                    it.fn[e] = function(t, i, o) {
                        return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(F(e, !0), t, i, o)
                    }
                }), it.each({
                    slideDown: F("show"),
                    slideUp: F("hide"),
                    slideToggle: F("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(t, e) {
                    it.fn[t] = function(t, n, i) {
                        return this.animate(e, t, n, i)
                    }
                }), it.timers = [], it.fx.tick = function() {
                    var t, e = 0,
                        n = it.timers;
                    for (te = it.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
                    n.length || it.fx.stop(), te = void 0
                }, it.fx.timer = function(t) {
                    it.timers.push(t), t() ? it.fx.start() : it.timers.pop()
                }, it.fx.interval = 13, it.fx.start = function() {
                    ee || (ee = setInterval(it.fx.tick, it.fx.interval))
                }, it.fx.stop = function() {
                    clearInterval(ee), ee = null
                }, it.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, it.fn.delay = function(t, e) {
                    return t = it.fx ? it.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                        var i = setTimeout(e, t);
                        n.stop = function() {
                            clearTimeout(i)
                        }
                    })
                },
                function() {
                    var t = et.createElement("input"),
                        e = et.createElement("select"),
                        n = e.appendChild(et.createElement("option"));
                    t.type = "checkbox", tt.checkOn = "" !== t.value, tt.optSelected = n.selected, e.disabled = !0, tt.optDisabled = !n.disabled, t = et.createElement("input"), t.value = "t", t.type = "radio", tt.radioValue = "t" === t.value
                }();
            var ae, le, ce = it.expr.attrHandle;
            it.fn.extend({
                attr: function(t, e) {
                    return _t(this, it.attr, t, e, arguments.length > 1)
                },
                removeAttr: function(t) {
                    return this.each(function() {
                        it.removeAttr(this, t)
                    })
                }
            }), it.extend({
                attr: function(t, e, n) {
                    var i, o, r = t.nodeType;
                    if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === Nt ? it.prop(t, e, n) : (1 === r && it.isXMLDoc(t) || (e = e.toLowerCase(), i = it.attrHooks[e] || (it.expr.match.bool.test(e) ? le : ae)), void 0 === n ? i && "get" in i && null !== (o = i.get(t, e)) ? o : (o = it.find.attr(t, e), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void it.removeAttr(t, e))
                },
                removeAttr: function(t, e) {
                    var n, i, o = 0,
                        r = e && e.match(mt);
                    if (r && 1 === t.nodeType)
                        for (; n = r[o++];) i = it.propFix[n] || n, it.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
                },
                attrHooks: {
                    type: {
                        set: function(t, e) {
                            if (!tt.radioValue && "radio" === e && it.nodeName(t, "input")) {
                                var n = t.value;
                                return t.setAttribute("type", e), n && (t.value = n), e
                            }
                        }
                    }
                }
            }), le = {
                set: function(t, e, n) {
                    return e === !1 ? it.removeAttr(t, n) : t.setAttribute(n, n), n
                }
            }, it.each(it.expr.match.bool.source.match(/\w+/g), function(t, e) {
                var n = ce[e] || it.find.attr;
                ce[e] = function(t, e, i) {
                    var o, r;
                    return i || (r = ce[e], ce[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, ce[e] = r), o
                }
            });
            var ue = /^(?:input|select|textarea|button)$/i;
            it.fn.extend({
                prop: function(t, e) {
                    return _t(this, it.prop, t, e, arguments.length > 1)
                },
                removeProp: function(t) {
                    return this.each(function() {
                        delete this[it.propFix[t] || t]
                    })
                }
            }), it.extend({
                propFix: {
                    for: "htmlFor",
                    class: "className"
                },
                prop: function(t, e, n) {
                    var i, o, r, s = t.nodeType;
                    if (t && 3 !== s && 8 !== s && 2 !== s) return r = 1 !== s || !it.isXMLDoc(t), r && (e = it.propFix[e] || e, o = it.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
                },
                propHooks: {
                    tabIndex: {
                        get: function(t) {
                            return t.hasAttribute("tabindex") || ue.test(t.nodeName) || t.href ? t.tabIndex : -1
                        }
                    }
                }
            }), tt.optSelected || (it.propHooks.selected = {
                get: function(t) {
                    var e = t.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null
                }
            }), it.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                it.propFix[this.toLowerCase()] = this
            });
            var de = /[\t\r\n\f]/g;
            it.fn.extend({
                addClass: function(t) {
                    var e, n, i, o, r, s, a = "string" == typeof t && t,
                        l = 0,
                        c = this.length;
                    if (it.isFunction(t)) return this.each(function(e) {
                        it(this).addClass(t.call(this, e, this.className))
                    });
                    if (a)
                        for (e = (t || "").match(mt) || []; c > l; l++)
                            if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(de, " ") : " ")) {
                                for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                                s = it.trim(i), n.className !== s && (n.className = s)
                            }
                    return this
                },
                removeClass: function(t) {
                    var e, n, i, o, r, s, a = 0 === arguments.length || "string" == typeof t && t,
                        l = 0,
                        c = this.length;
                    if (it.isFunction(t)) return this.each(function(e) {
                        it(this).removeClass(t.call(this, e, this.className))
                    });
                    if (a)
                        for (e = (t || "").match(mt) || []; c > l; l++)
                            if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(de, " ") : "")) {
                                for (r = 0; o = e[r++];)
                                    for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                                s = t ? it.trim(i) : "", n.className !== s && (n.className = s)
                            }
                    return this
                },
                toggleClass: function(t, e) {
                    var n = typeof t;
                    return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(it.isFunction(t) ? function(n) {
                        it(this).toggleClass(t.call(this, n, this.className, e), e)
                    } : function() {
                        if ("string" === n)
                            for (var e, i = 0, o = it(this), r = t.match(mt) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                        else(n === Nt || "boolean" === n) && (this.className && wt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : wt.get(this, "__className__") || "")
                    })
                },
                hasClass: function(t) {
                    for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(de, " ").indexOf(e) >= 0) return !0;
                    return !1
                }
            });
            var he = /\r/g;
            it.fn.extend({
                val: function(t) {
                    var e, n, i, o = this[0];
                    return arguments.length ? (i = it.isFunction(t), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? t.call(this, n, it(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : it.isArray(o) && (o = it.map(o, function(t) {
                            return null == t ? "" : t + ""
                        })), e = it.valHooks[this.type] || it.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                    })) : o ? (e = it.valHooks[o.type] || it.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(he, "") : null == n ? "" : n)) : void 0
                }
            }), it.extend({
                valHooks: {
                    option: {
                        get: function(t) {
                            var e = it.find.attr(t, "value");
                            return null != e ? e : it.trim(it.text(t))
                        }
                    },
                    select: {
                        get: function(t) {
                            for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                                if (n = i[l], !(!n.selected && l !== o || (tt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && it.nodeName(n.parentNode, "optgroup"))) {
                                    if (e = it(n).val(), r) return e;
                                    s.push(e)
                                }
                            return s
                        },
                        set: function(t, e) {
                            for (var n, i, o = t.options, r = it.makeArray(e), s = o.length; s--;) i = o[s], (i.selected = it.inArray(i.value, r) >= 0) && (n = !0);
                            return n || (t.selectedIndex = -1), r
                        }
                    }
                }
            }), it.each(["radio", "checkbox"], function() {
                it.valHooks[this] = {
                    set: function(t, e) {
                        return it.isArray(e) ? t.checked = it.inArray(it(t).val(), e) >= 0 : void 0
                    }
                }, tt.checkOn || (it.valHooks[this].get = function(t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                })
            }), it.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
                it.fn[e] = function(t, n) {
                    return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                }
            }), it.fn.extend({
                hover: function(t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                },
                bind: function(t, e, n) {
                    return this.on(t, null, e, n)
                },
                unbind: function(t, e) {
                    return this.off(t, null, e)
                },
                delegate: function(t, e, n, i) {
                    return this.on(e, t, n, i)
                },
                undelegate: function(t, e, n) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                }
            });
            var pe = it.now(),
                fe = /\?/;
            it.parseJSON = function(t) {
                return JSON.parse(t + "")
            }, it.parseXML = function(t) {
                var e, n;
                if (!t || "string" != typeof t) return null;
                try {
                    n = new DOMParser, e = n.parseFromString(t, "text/xml")
                } catch (t) {
                    e = void 0
                }
                return (!e || e.getElementsByTagName("parsererror").length) && it.error("Invalid XML: " + t), e
            };
            var ge = /#.*$/,
                ve = /([?&])_=[^&]*/,
                me = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                be = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                ye = /^(?:GET|HEAD)$/,
                _e = /^\/\//,
                we = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                xe = {},
                Ce = {},
                ke = "*/".concat("*"),
                Se = t.location.href,
                Ee = we.exec(Se.toLowerCase()) || [];
            it.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Se,
                    type: "GET",
                    isLocal: be.test(Ee[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": ke,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": it.parseJSON,
                        "text xml": it.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(t, e) {
                    return e ? q(q(t, it.ajaxSettings), e) : q(it.ajaxSettings, t)
                },
                ajaxPrefilter: R(xe),
                ajaxTransport: R(Ce),
                ajax: function(t, e) {
                    function n(t, e, n, s) {
                        var l, u, m, b, _, x = e;
                        2 !== y && (y = 2, a && clearTimeout(a), i = void 0, r = s || "", w.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, n && (b = B(d, w, n)), b = z(d, b, w, l), l ? (d.ifModified && (_ = w.getResponseHeader("Last-Modified"), _ && (it.lastModified[o] = _), _ = w.getResponseHeader("etag"), _ && (it.etag[o] = _)), 204 === t || "HEAD" === d.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = b.state, u = b.data, m = b.error, l = !m)) : (m = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || x) + "", l ? f.resolveWith(h, [u, x, w]) : f.rejectWith(h, [w, x, m]), w.statusCode(v), v = void 0, c && p.trigger(l ? "ajaxSuccess" : "ajaxError", [w, d, l ? u : m]), g.fireWith(h, [w, x]), c && (p.trigger("ajaxComplete", [w, d]), --it.active || it.event.trigger("ajaxStop")))
                    }
                    "object" == typeof t && (e = t, t = void 0), e = e || {};
                    var i, o, r, s, a, l, c, u, d = it.ajaxSetup({}, e),
                        h = d.context || d,
                        p = d.context && (h.nodeType || h.jquery) ? it(h) : it.event,
                        f = it.Deferred(),
                        g = it.Callbacks("once memory"),
                        v = d.statusCode || {},
                        m = {},
                        b = {},
                        y = 0,
                        _ = "canceled",
                        w = {
                            readyState: 0,
                            getResponseHeader: function(t) {
                                var e;
                                if (2 === y) {
                                    if (!s)
                                        for (s = {}; e = me.exec(r);) s[e[1].toLowerCase()] = e[2];
                                    e = s[t.toLowerCase()]
                                }
                                return null == e ? null : e
                            },
                            getAllResponseHeaders: function() {
                                return 2 === y ? r : null
                            },
                            setRequestHeader: function(t, e) {
                                var n = t.toLowerCase();
                                return y || (t = b[n] = b[n] || t, m[t] = e), this
                            },
                            overrideMimeType: function(t) {
                                return y || (d.mimeType = t), this
                            },
                            statusCode: function(t) {
                                var e;
                                if (t)
                                    if (2 > y)
                                        for (e in t) v[e] = [v[e], t[e]];
                                    else w.always(t[w.status]);
                                return this
                            },
                            abort: function(t) {
                                var e = t || _;
                                return i && i.abort(e), n(0, e), this
                            }
                        };
                    if (f.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, d.url = ((t || d.url || Se) + "").replace(ge, "").replace(_e, Ee[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = it.trim(d.dataType || "*").toLowerCase().match(mt) || [""], null == d.crossDomain && (l = we.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === Ee[1] && l[2] === Ee[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Ee[3] || ("http:" === Ee[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = it.param(d.data, d.traditional)), H(xe, d, e, w), 2 === y) return w;
                    c = it.event && d.global, c && 0 === it.active++ && it.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !ye.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (fe.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = ve.test(o) ? o.replace(ve, "$1_=" + pe++) : o + (fe.test(o) ? "&" : "?") + "_=" + pe++)), d.ifModified && (it.lastModified[o] && w.setRequestHeader("If-Modified-Since", it.lastModified[o]), it.etag[o] && w.setRequestHeader("If-None-Match", it.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + ke + "; q=0.01" : "") : d.accepts["*"]);
                    for (u in d.headers) w.setRequestHeader(u, d.headers[u]);
                    if (d.beforeSend && (d.beforeSend.call(h, w, d) === !1 || 2 === y)) return w.abort();
                    _ = "abort";
                    for (u in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) w[u](d[u]);
                    if (i = H(Ce, d, e, w)) {
                        w.readyState = 1, c && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (a = setTimeout(function() {
                            w.abort("timeout")
                        }, d.timeout));
                        try {
                            y = 1, i.send(m, n)
                        } catch (t) {
                            if (!(2 > y)) throw t;
                            n(-1, t)
                        }
                    } else n(-1, "No Transport");
                    return w
                },
                getJSON: function(t, e, n) {
                    return it.get(t, e, n, "json")
                },
                getScript: function(t, e) {
                    return it.get(t, void 0, e, "script")
                }
            }), it.each(["get", "post"], function(t, e) {
                it[e] = function(t, n, i, o) {
                    return it.isFunction(n) && (o = o || i, i = n, n = void 0), it.ajax({
                        url: t,
                        type: e,
                        dataType: o,
                        data: n,
                        success: i
                    })
                }
            }), it._evalUrl = function(t) {
                return it.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, it.fn.extend({
                wrapAll: function(t) {
                    var e;
                    return it.isFunction(t) ? this.each(function(e) {
                        it(this).wrapAll(t.call(this, e))
                    }) : (this[0] && (e = it(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                        return t
                    }).append(this)), this)
                },
                wrapInner: function(t) {
                    return this.each(it.isFunction(t) ? function(e) {
                        it(this).wrapInner(t.call(this, e))
                    } : function() {
                        var e = it(this),
                            n = e.contents();
                        n.length ? n.wrapAll(t) : e.append(t)
                    })
                },
                wrap: function(t) {
                    var e = it.isFunction(t);
                    return this.each(function(n) {
                        it(this).wrapAll(e ? t.call(this, n) : t)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        it.nodeName(this, "body") || it(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), it.expr.filters.hidden = function(t) {
                return t.offsetWidth <= 0 && t.offsetHeight <= 0
            }, it.expr.filters.visible = function(t) {
                return !it.expr.filters.hidden(t)
            };
            var Ae = /%20/g,
                Te = /\[\]$/,
                Ne = /\r?\n/g,
                De = /^(?:submit|button|image|reset|file)$/i,
                Oe = /^(?:input|select|textarea|keygen)/i;
            it.param = function(t, e) {
                var n, i = [],
                    o = function(t, e) {
                        e = it.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                    };
                if (void 0 === e && (e = it.ajaxSettings && it.ajaxSettings.traditional), it.isArray(t) || t.jquery && !it.isPlainObject(t)) it.each(t, function() {
                    o(this.name, this.value)
                });
                else
                    for (n in t) W(n, t[n], e, o);
                return i.join("&").replace(Ae, "+")
            }, it.fn.extend({
                serialize: function() {
                    return it.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var t = it.prop(this, "elements");
                        return t ? it.makeArray(t) : this
                    }).filter(function() {
                        var t = this.type;
                        return this.name && !it(this).is(":disabled") && Oe.test(this.nodeName) && !De.test(t) && (this.checked || !Tt.test(t))
                    }).map(function(t, e) {
                        var n = it(this).val();
                        return null == n ? null : it.isArray(n) ? it.map(n, function(t) {
                            return {
                                name: e.name,
                                value: t.replace(Ne, "\r\n")
                            }
                        }) : {
                            name: e.name,
                            value: n.replace(Ne, "\r\n")
                        }
                    }).get()
                }
            }), it.ajaxSettings.xhr = function() {
                try {
                    return new XMLHttpRequest
                } catch (t) {}
            };
            var $e = 0,
                je = {},
                Fe = {
                    0: 200,
                    1223: 204
                },
                Pe = it.ajaxSettings.xhr();
            t.attachEvent && t.attachEvent("onunload", function() {
                for (var t in je) je[t]()
            }), tt.cors = !!Pe && "withCredentials" in Pe, tt.ajax = Pe = !!Pe, it.ajaxTransport(function(t) {
                var e;
                return tt.cors || Pe && !t.crossDomain ? {
                    send: function(n, i) {
                        var o, r = t.xhr(),
                            s = ++$e;
                        if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (o in t.xhrFields) r[o] = t.xhrFields[o];
                        t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (o in n) r.setRequestHeader(o, n[o]);
                        e = function(t) {
                            return function() {
                                e && (delete je[s], e = r.onload = r.onerror = null, "abort" === t ? r.abort() : "error" === t ? i(r.status, r.statusText) : i(Fe[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                                    text: r.responseText
                                } : void 0, r.getAllResponseHeaders()))
                            }
                        }, r.onload = e(), r.onerror = e("error"), e = je[s] = e("abort");
                        try {
                            r.send(t.hasContent && t.data || null)
                        } catch (t) {
                            if (e) throw t
                        }
                    },
                    abort: function() {
                        e && e()
                    }
                } : void 0
            }), it.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function(t) {
                        return it.globalEval(t), t
                    }
                }
            }), it.ajaxPrefilter("script", function(t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
            }), it.ajaxTransport("script", function(t) {
                if (t.crossDomain) {
                    var e, n;
                    return {
                        send: function(i, o) {
                            e = it("<script>").prop({
                                async: !0,
                                charset: t.scriptCharset,
                                src: t.url
                            }).on("load error", n = function(t) {
                                e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                            }), et.head.appendChild(e[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }
            });
            var Ie = [],
                Me = /(=)\?(?=&|$)|\?\?/;
            it.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var t = Ie.pop() || it.expando + "_" + pe++;
                    return this[t] = !0, t
                }
            }), it.ajaxPrefilter("json jsonp", function(e, n, i) {
                var o, r, s, a = e.jsonp !== !1 && (Me.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Me.test(e.data) && "data");
                return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = it.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Me, "$1" + o) : e.jsonp !== !1 && (e.url += (fe.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                    return s || it.error(o + " was not called"), s[0]
                }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
                    s = arguments
                }, i.always(function() {
                    t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, Ie.push(o)), s && it.isFunction(r) && r(s[0]), s = r = void 0
                }), "script") : void 0
            }), it.parseHTML = function(t, e, n) {
                if (!t || "string" != typeof t) return null;
                "boolean" == typeof e && (n = e, e = !1), e = e || et;
                var i = ut.exec(t),
                    o = !n && [];
                return i ? [e.createElement(i[1])] : (i = it.buildFragment([t], e, o), o && o.length && it(o).remove(), it.merge([], i.childNodes))
            };
            var Le = it.fn.load;
            it.fn.load = function(t, e, n) {
                if ("string" != typeof t && Le) return Le.apply(this, arguments);
                var i, o, r, s = this,
                    a = t.indexOf(" ");
                return a >= 0 && (i = it.trim(t.slice(a)), t = t.slice(0, a)), it.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && it.ajax({
                    url: t,
                    type: o,
                    dataType: "html",
                    data: e
                }).done(function(t) {
                    r = arguments, s.html(i ? it("<div>").append(it.parseHTML(t)).find(i) : t)
                }).complete(n && function(t, e) {
                    s.each(n, r || [t.responseText, e, t])
                }), this
            }, it.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
                it.fn[e] = function(t) {
                    return this.on(e, t)
                }
            }), it.expr.filters.animated = function(t) {
                return it.grep(it.timers, function(e) {
                    return t === e.elem
                }).length
            };
            var Re = t.document.documentElement;
            it.offset = {
                setOffset: function(t, e, n) {
                    var i, o, r, s, a, l, c, u = it.css(t, "position"),
                        d = it(t),
                        h = {};
                    "static" === u && (t.style.position = "relative"), a = d.offset(), r = it.css(t, "top"), l = it.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), it.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + o), "using" in e ? e.using.call(t, h) : d.css(h)
                }
            }, it.fn.extend({
                offset: function(t) {
                    if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                        it.offset.setOffset(this, t, e)
                    });
                    var e, n, i = this[0],
                        o = {
                            top: 0,
                            left: 0
                        },
                        r = i && i.ownerDocument;
                    return r ? (e = r.documentElement, it.contains(e, i) ? (typeof i.getBoundingClientRect !== Nt && (o = i.getBoundingClientRect()), n = V(r), {
                        top: o.top + n.pageYOffset - e.clientTop,
                        left: o.left + n.pageXOffset - e.clientLeft
                    }) : o) : void 0
                },
                position: function() {
                    if (this[0]) {
                        var t, e, n = this[0],
                            i = {
                                top: 0,
                                left: 0
                            };
                        return "fixed" === it.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), it.nodeName(t[0], "html") || (i = t.offset()), i.top += it.css(t[0], "borderTopWidth", !0), i.left += it.css(t[0], "borderLeftWidth", !0)), {
                            top: e.top - i.top - it.css(n, "marginTop", !0),
                            left: e.left - i.left - it.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var t = this.offsetParent || Re; t && !it.nodeName(t, "html") && "static" === it.css(t, "position");) t = t.offsetParent;
                        return t || Re
                    })
                }
            }), it.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, n) {
                var i = "pageYOffset" === n;
                it.fn[e] = function(o) {
                    return _t(this, function(e, o, r) {
                        var s = V(e);
                        return void 0 === r ? s ? s[n] : e[o] : void(s ? s.scrollTo(i ? t.pageXOffset : r, i ? r : t.pageYOffset) : e[o] = r)
                    }, e, o, arguments.length, null)
                }
            }), it.each(["top", "left"], function(t, e) {
                it.cssHooks[e] = E(tt.pixelPosition, function(t, n) {
                    return n ? (n = S(t, e), Ut.test(n) ? it(t).position()[e] + "px" : n) : void 0
                })
            }), it.each({
                Height: "height",
                Width: "width"
            }, function(t, e) {
                it.each({
                    padding: "inner" + t,
                    content: e,
                    "": "outer" + t
                }, function(n, i) {
                    it.fn[i] = function(i, o) {
                        var r = arguments.length && (n || "boolean" != typeof i),
                            s = n || (i === !0 || o === !0 ? "margin" : "border");
                        return _t(this, function(e, n, i) {
                            var o;
                            return it.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? it.css(e, n, s) : it.style(e, n, i, s)
                        }, e, r ? i : void 0, r, null)
                    }
                })
            }), it.fn.size = function() {
                return this.length
            }, it.fn.andSelf = it.fn.addBack, n(139) && (i = [], !(o = function() {
                return it
            }.apply(e, i)));
            var He = t.jQuery,
                qe = t.$;
            return it.noConflict = function(e) {
                return t.$ === it && (t.$ = qe), e && t.jQuery === it && (t.jQuery = He), it
            }, typeof r === Nt && (t.jQuery = t.$ = it), it
        }), ! function(n) {
            i = [o], r = n, s = "function" == typeof r ? r.apply(e, i) : r, !(void 0 !== s && (t.exports = s))
        }(function(t) {
            function e(t) {
                return a.raw ? t : encodeURIComponent(t)
            }

            function n(t) {
                return a.raw ? t : decodeURIComponent(t)
            }

            function i(t) {
                return e(a.json ? JSON.stringify(t) : String(t))
            }

            function o(t) {
                0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                try {
                    return t = decodeURIComponent(t.replace(s, " ")), a.json ? JSON.parse(t) : t
                } catch (t) {}
            }

            function r(e, n) {
                var i = a.raw ? e : o(e);
                return t.isFunction(n) ? n(i) : i
            }
            var s = /\+/g,
                a = t.cookie = function(o, s, l) {
                    if (void 0 !== s && !t.isFunction(s)) {
                        if (l = t.extend({}, a.defaults, l), "number" == typeof l.expires) {
                            var c = l.expires,
                                u = l.expires = new Date;
                            u.setTime(+u + 864e5 * c)
                        }
                        return document.cookie = [e(o), "=", i(s), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
                    }
                    for (var d = o ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], p = 0, f = h.length; f > p; p++) {
                        var g = h[p].split("="),
                            v = n(g.shift()),
                            m = g.join("=");
                        if (o && o === v) {
                            d = r(m, s);
                            break
                        }
                        o || void 0 === (m = r(m)) || (d[v] = m)
                    }
                    return d
                };
            a.defaults = {}, t.removeCookie = function(e, n) {
                return void 0 !== t.cookie(e) && (t.cookie(e, "", t.extend({}, n, {
                    expires: -1
                })), !t.cookie(e))
            }
        })
    },
    134: function(t, e) {
        (function() {
            window.Modernizr = function(t, e, n) {
                function i(t) {
                    y.cssText = t
                }

                function o(t, e) {
                    return i(C.join(t + ";") + (e || ""))
                }

                function r(t, e) {
                    return typeof t === e
                }

                function s(t, e) {
                    return !!~("" + t).indexOf(e)
                }

                function a(t, e) {
                    for (var i in t) {
                        var o = t[i];
                        if (!s(o, "-") && y[o] !== n) return "pfx" != e || o
                    }
                    return !1
                }

                function l(t, e, i) {
                    for (var o in t) {
                        var s = e[t[o]];
                        if (s !== n) return i === !1 ? t[o] : r(s, "function") ? s.bind(i || e) : s
                    }
                    return !1
                }

                function c(t, e, n) {
                    var i = t.charAt(0).toUpperCase() + t.slice(1),
                        o = (t + " " + S.join(i + " ") + i).split(" ");
                    return r(e, "string") || r(e, "undefined") ? a(o, e) : (o = (t + " " + E.join(i + " ") + i).split(" "), l(o, e, n))
                }

                function u() {
                    f.input = function(n) {
                        for (var i = 0, o = n.length; o > i; i++) D[n[i]] = !!(n[i] in _);
                        return D.list && (D.list = !(!e.createElement("datalist") || !t.HTMLDataListElement)), D
                    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function(t) {
                        for (var i, o, r, s = 0, a = t.length; a > s; s++) _.setAttribute("type", o = t[s]), i = "text" !== _.type, i && (_.value = w, _.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && _.style.WebkitAppearance !== n ? (v.appendChild(_), r = e.defaultView, i = r.getComputedStyle && "textfield" !== r.getComputedStyle(_, null).WebkitAppearance && 0 !== _.offsetHeight, v.removeChild(_)) : /^(search|tel)$/.test(o) || (i = /^(url|email)$/.test(o) ? _.checkValidity && _.checkValidity() === !1 : _.value != w)), N[t[s]] = !!i;
                        return N
                    }("search tel url email datetime date month week time datetime-local number range color".split(" "))
                }
                var d, h, p = "2.8.3",
                    f = {},
                    g = !0,
                    v = e.documentElement,
                    m = "modernizr",
                    b = e.createElement(m),
                    y = b.style,
                    _ = e.createElement("input"),
                    w = ":)",
                    x = {}.toString,
                    C = " -webkit- -moz- -o- -ms- ".split(" "),
                    k = "Webkit Moz O ms",
                    S = k.split(" "),
                    E = k.toLowerCase().split(" "),
                    A = {
                        svg: "http://www.w3.org/2000/svg"
                    },
                    T = {},
                    N = {},
                    D = {},
                    O = [],
                    $ = O.slice,
                    j = function(t, n, i, o) {
                        var r, s, a, l, c = e.createElement("div"),
                            u = e.body,
                            d = u || e.createElement("body");
                        if (parseInt(i, 10))
                            for (; i--;) a = e.createElement("div"), a.id = o ? o[i] : m + (i + 1), c.appendChild(a);
                        return r = ["&#173;", '<style id="s', m, '">', t, "</style>"].join(""), c.id = m, (u ? c : d).innerHTML += r, d.appendChild(c), u || (d.style.background = "", d.style.overflow = "hidden", l = v.style.overflow, v.style.overflow = "hidden", v.appendChild(d)), s = n(c, t), u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d), v.style.overflow = l), !!s
                    },
                    F = function(e) {
                        var n = t.matchMedia || t.msMatchMedia;
                        if (n) return n(e) && n(e).matches || !1;
                        var i;
                        return j("@media " + e + " { #" + m + " { position: absolute; } }", function(e) {
                            i = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
                        }), i
                    },
                    P = function() {
                        function t(t, o) {
                            o = o || e.createElement(i[t] || "div"), t = "on" + t;
                            var s = t in o;
                            return s || (o.setAttribute || (o = e.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(t, ""), s = r(o[t], "function"), r(o[t], "undefined") || (o[t] = n), o.removeAttribute(t))), o = null, s
                        }
                        var i = {
                            select: "input",
                            change: "input",
                            submit: "form",
                            reset: "form",
                            error: "img",
                            load: "img",
                            abort: "img"
                        };
                        return t
                    }(),
                    I = {}.hasOwnProperty;
                h = r(I, "undefined") || r(I.call, "undefined") ? function(t, e) {
                    return e in t && r(t.constructor.prototype[e], "undefined")
                } : function(t, e) {
                    return I.call(t, e)
                }, Function.prototype.bind || (Function.prototype.bind = function(t) {
                    var e = this;
                    if ("function" != typeof e) throw new TypeError;
                    var n = $.call(arguments, 1),
                        i = function() {
                            if (this instanceof i) {
                                var o = function() {};
                                o.prototype = e.prototype;
                                var r = new o,
                                    s = e.apply(r, n.concat($.call(arguments)));
                                return Object(s) === s ? s : r
                            }
                            return e.apply(t, n.concat($.call(arguments)))
                        };
                    return i
                }), T.flexbox = function() {
                    return c("flexWrap")
                }, T.flexboxlegacy = function() {
                    return c("boxDirection")
                }, T.canvas = function() {
                    var t = e.createElement("canvas");
                    return !(!t.getContext || !t.getContext("2d"))
                }, T.canvastext = function() {
                    return !(!f.canvas || !r(e.createElement("canvas").getContext("2d").fillText, "function"))
                }, T.webgl = function() {
                    return !!t.WebGLRenderingContext
                }, T.touch = function() {
                    var n;
                    return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : j(["@media (", C.join("touch-enabled),("), m, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
                        n = 9 === t.offsetTop
                    }), n
                }, T.geolocation = function() {
                    return "geolocation" in navigator
                }, T.postmessage = function() {
                    return !!t.postMessage
                }, T.websqldatabase = function() {
                    return !!t.openDatabase
                }, T.indexedDB = function() {
                    return !!c("indexedDB", t)
                }, T.hashchange = function() {
                    return P("hashchange", t) && (e.documentMode === n || e.documentMode > 7)
                }, T.history = function() {
                    return !(!t.history || !history.pushState)
                }, T.draganddrop = function() {
                    var t = e.createElement("div");
                    return "draggable" in t || "ondragstart" in t && "ondrop" in t
                }, T.websockets = function() {
                    return "WebSocket" in t || "MozWebSocket" in t
                }, T.rgba = function() {
                    return i("background-color:rgba(150,255,150,.5)"), s(y.backgroundColor, "rgba")
                }, T.hsla = function() {
                    return i("background-color:hsla(120,40%,100%,.5)"), s(y.backgroundColor, "rgba") || s(y.backgroundColor, "hsla")
                }, T.multiplebgs = function() {
                    return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(y.background)
                }, T.backgroundsize = function() {
                    return c("backgroundSize")
                }, T.borderimage = function() {
                    return c("borderImage")
                }, T.borderradius = function() {
                    return c("borderRadius")
                }, T.boxshadow = function() {
                    return c("boxShadow")
                }, T.textshadow = function() {
                    return "" === e.createElement("div").style.textShadow
                }, T.opacity = function() {
                    return o("opacity:.55"), /^0.55$/.test(y.opacity)
                }, T.cssanimations = function() {
                    return c("animationName")
                }, T.csscolumns = function() {
                    return c("columnCount")
                }, T.cssgradients = function() {
                    var t = "background-image:",
                        e = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                        n = "linear-gradient(left top,#9f9, white);";
                    return i((t + "-webkit- ".split(" ").join(e + t) + C.join(n + t)).slice(0, -t.length)), s(y.backgroundImage, "gradient")
                }, T.cssreflections = function() {
                    return c("boxReflect")
                }, T.csstransforms = function() {
                    return !!c("transform")
                }, T.csstransforms3d = function() {
                    var t = !!c("perspective");
                    return t && "webkitPerspective" in v.style && j("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, n) {
                        t = 9 === e.offsetLeft && 3 === e.offsetHeight
                    }), t
                }, T.csstransitions = function() {
                    return c("transition")
                }, T.fontface = function() {
                    var t;
                    return j('@font-face {font-family:"font";src:url("https://")}', function(n, i) {
                        var o = e.getElementById("smodernizr"),
                            r = o.sheet || o.styleSheet,
                            s = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "";
                        t = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0])
                    }), t
                }, T.generatedcontent = function() {
                    var t;
                    return j(["#", m, "{font:0/0 a}#", m, ':after{content:"', w, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) {
                        t = e.offsetHeight >= 3
                    }), t
                }, T.video = function() {
                    var t = e.createElement("video"),
                        n = !1;
                    try {
                        (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
                    } catch (t) {}
                    return n
                }, T.audio = function() {
                    var t = e.createElement("audio"),
                        n = !1;
                    try {
                        (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
                    } catch (t) {}
                    return n
                }, T.localstorage = function() {
                    try {
                        return localStorage.setItem(m, m), localStorage.removeItem(m), !0
                    } catch (t) {
                        return !1
                    }
                }, T.sessionstorage = function() {
                    try {
                        return sessionStorage.setItem(m, m), sessionStorage.removeItem(m), !0
                    } catch (t) {
                        return !1
                    }
                }, T.webworkers = function() {
                    return !!t.Worker
                }, T.applicationcache = function() {
                    return !!t.applicationCache
                }, T.svg = function() {
                    return !!e.createElementNS && !!e.createElementNS(A.svg, "svg").createSVGRect
                }, T.inlinesvg = function() {
                    var t = e.createElement("div");
                    return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == A.svg
                }, T.smil = function() {
                    return !!e.createElementNS && /SVGAnimate/.test(x.call(e.createElementNS(A.svg, "animate")))
                }, T.svgclippaths = function() {
                    return !!e.createElementNS && /SVGClipPath/.test(x.call(e.createElementNS(A.svg, "clipPath")))
                };
                for (var M in T) h(T, M) && (d = M.toLowerCase(), f[d] = T[M](), O.push((f[d] ? "" : "no-") + d));
                return f.input || u(), f.addTest = function(t, e) {
                        if ("object" == typeof t)
                            for (var i in t) h(t, i) && f.addTest(i, t[i]);
                        else {
                            if (t = t.toLowerCase(), f[t] !== n) return f;
                            e = "function" == typeof e ? e() : e, "undefined" != typeof g && g && (v.className += " " + (e ? "" : "no-") + t), f[t] = e
                        }
                        return f
                    }, i(""), b = _ = null,
                    function(t, e) {
                        function n(t, e) {
                            var n = t.createElement("p"),
                                i = t.getElementsByTagName("head")[0] || t.documentElement;
                            return n.innerHTML = "x<style>" + e + "</style>", i.insertBefore(n.lastChild, i.firstChild)
                        }

                        function i() {
                            var t = b.elements;
                            return "string" == typeof t ? t.split(" ") : t
                        }

                        function o(t) {
                            var e = m[t[g]];
                            return e || (e = {}, v++, t[g] = v, m[v] = e), e
                        }

                        function r(t, n, i) {
                            if (n || (n = e), u) return n.createElement(t);
                            i || (i = o(n));
                            var r;
                            return r = i.cache[t] ? i.cache[t].cloneNode() : f.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t), !r.canHaveChildren || p.test(t) || r.tagUrn ? r : i.frag.appendChild(r)
                        }

                        function s(t, n) {
                            if (t || (t = e), u) return t.createDocumentFragment();
                            n = n || o(t);
                            for (var r = n.frag.cloneNode(), s = 0, a = i(), l = a.length; l > s; s++) r.createElement(a[s]);
                            return r
                        }

                        function a(t, e) {
                            e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(n) {
                                return b.shivMethods ? r(n, t, e) : e.createElem(n)
                            }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(t) {
                                return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                            }) + ");return n}")(b, e.frag)
                        }

                        function l(t) {
                            t || (t = e);
                            var i = o(t);
                            return !b.shivCSS || c || i.hasCSS || (i.hasCSS = !!n(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || a(t, i), t
                        }
                        var c, u, d = "3.7.0",
                            h = t.html5 || {},
                            p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                            f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                            g = "_html5shiv",
                            v = 0,
                            m = {};
                        ! function() {
                            try {
                                var t = e.createElement("a");
                                t.innerHTML = "<xyz></xyz>", c = "hidden" in t, u = 1 == t.childNodes.length || function() {
                                    e.createElement("a");
                                    var t = e.createDocumentFragment();
                                    return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                                }()
                            } catch (t) {
                                c = !0, u = !0
                            }
                        }();
                        var b = {
                            elements: h.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                            version: d,
                            shivCSS: h.shivCSS !== !1,
                            supportsUnknownElements: u,
                            shivMethods: h.shivMethods !== !1,
                            type: "default",
                            shivDocument: l,
                            createElement: r,
                            createDocumentFragment: s
                        };
                        t.html5 = b, l(e)
                    }(this, e), f._version = p, f._prefixes = C, f._domPrefixes = E, f._cssomPrefixes = S, f.mq = F, f.hasEvent = P, f.testProp = function(t) {
                        return a([t])
                    }, f.testAllProps = c, f.testStyles = j, f.prefixed = function(t, e, n) {
                        return e ? c(t, e, n) : c(t, "pfx")
                    }, v.className = v.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (g ? " js " + O.join(" ") : ""), f
            }(this, this.document)
        }).call(window)
    },
    135: function(t, e) {
        ! function(t, e, n, i) {
            "use strict";

            function o(t) {
                return ("string" == typeof t || t instanceof String) && (t = t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), t
            }
            var r = function(e) {
                for (var n = e.length, i = t("head"); n--;) 0 === i.has("." + e[n]).length && i.append('<meta class="' + e[n] + '" />')
            };
            r(["foundation-mq-small", "foundation-mq-small-only", "foundation-mq-medium", "foundation-mq-medium-only", "foundation-mq-large", "foundation-mq-large-only", "foundation-mq-xlarge", "foundation-mq-xlarge-only", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), t(function() {
                "undefined" != typeof FastClick && "undefined" != typeof n.body && FastClick.attach(n.body)
            });
            var s = function(e, i) {
                    if ("string" == typeof e) {
                        if (i) {
                            var o;
                            if (i.jquery) {
                                if (o = i[0], !o) return i
                            } else o = i;
                            return t(o.querySelectorAll(e))
                        }
                        return t(n.querySelectorAll(e))
                    }
                    return t(e, i)
                },
                a = function(t) {
                    var e = [];
                    return t || e.push("data"), this.namespace.length > 0 && e.push(this.namespace), e.push(this.name), e.join("-")
                },
                l = function(t) {
                    for (var e = t.split("-"), n = e.length, i = []; n--;) 0 !== n ? i.push(e[n]) : this.namespace.length > 0 ? i.push(this.namespace, e[n]) : i.push(e[n]);
                    return i.reverse().join("-")
                },
                c = function(e, n) {
                    var i = this,
                        o = function() {
                            var o = s(this),
                                r = !o.data(i.attr_name(!0) + "-init");
                            o.data(i.attr_name(!0) + "-init", t.extend({}, i.settings, n || e, i.data_options(o))), r && i.events(this)
                        };
                    return s(this.scope).is("[" + this.attr_name() + "]") ? o.call(this.scope) : s("[" + this.attr_name() + "]", this.scope).each(o), "string" == typeof e ? this[e].call(this, n) : void 0
                },
                u = function(t, e) {
                    function n() {
                        e(t[0])
                    }

                    function i() {
                        if (this.one("load", n), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                            var t = this.attr("src"),
                                e = t.match(/\?/) ? "&" : "?";
                            e += "random=" + (new Date).getTime(), this.attr("src", t + e)
                        }
                    }
                    return t.attr("src") ? void(t[0].complete || 4 === t[0].readyState ? n() : i.call(t)) : void n()
                };
            e.matchMedia || (e.matchMedia = function() {
                    var t = e.styleMedia || e.media;
                    if (!t) {
                        var i = n.createElement("style"),
                            o = n.getElementsByTagName("script")[0],
                            r = null;
                        i.type = "text/css", i.id = "matchmediajs-test", o.parentNode.insertBefore(i, o), r = "getComputedStyle" in e && e.getComputedStyle(i, null) || i.currentStyle, t = {
                            matchMedium: function(t) {
                                var e = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                                return i.styleSheet ? i.styleSheet.cssText = e : i.textContent = e, "1px" === r.width
                            }
                        }
                    }
                    return function(e) {
                        return {
                            matches: t.matchMedium(e || "all"),
                            media: e || "all"
                        }
                    }
                }()),
                function(t) {
                    function n() {
                        i && (s(n), l && t.fx.tick())
                    }
                    for (var i, o = 0, r = ["webkit", "moz"], s = e.requestAnimationFrame, a = e.cancelAnimationFrame, l = "undefined" != typeof t.fx; o < r.length && !s; o++) s = e[r[o] + "RequestAnimationFrame"], a = a || e[r[o] + "CancelAnimationFrame"] || e[r[o] + "CancelRequestAnimationFrame"];
                    s ? (e.requestAnimationFrame = s, e.cancelAnimationFrame = a, l && (t.fx.timer = function(e) {
                        e() && t.timers.push(e) && !i && (i = !0, n())
                    }, t.fx.stop = function() {
                        i = !1
                    })) : (e.requestAnimationFrame = function(t) {
                        var n = (new Date).getTime(),
                            i = Math.max(0, 16 - (n - o)),
                            r = e.setTimeout(function() {
                                t(n + i)
                            }, i);
                        return o = n + i, r
                    }, e.cancelAnimationFrame = function(t) {
                        clearTimeout(t)
                    })
                }(t), e.Foundation = {
                    name: "Foundation",
                    version: "5.5.2",
                    media_queries: {
                        small: s(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                        "small-only": s(".foundation-mq-small-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                        medium: s(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                        "medium-only": s(".foundation-mq-medium-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                        large: s(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                        "large-only": s(".foundation-mq-large-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                        xlarge: s(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                        "xlarge-only": s(".foundation-mq-xlarge-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                        xxlarge: s(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
                    },
                    stylesheet: t("<style></style>").appendTo("head")[0].sheet,
                    global: {
                        namespace: i
                    },
                    init: function(t, n, i, o, r) {
                        var a = [t, i, o, r],
                            l = [];
                        if (this.rtl = /rtl/i.test(s("html").attr("dir")), this.scope = t || this.scope, this.set_namespace(), n && "string" == typeof n && !/reflow/i.test(n)) this.libs.hasOwnProperty(n) && l.push(this.init_lib(n, a));
                        else
                            for (var c in this.libs) l.push(this.init_lib(c, n));
                        return s(e).load(function() {
                            s(e).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")
                        }), t
                    },
                    init_lib: function(e, n) {
                        return this.libs.hasOwnProperty(e) ? (this.patch(this.libs[e]), n && n.hasOwnProperty(e) ? ("undefined" != typeof this.libs[e].settings ? t.extend(!0, this.libs[e].settings, n[e]) : "undefined" != typeof this.libs[e].defaults && t.extend(!0, this.libs[e].defaults, n[e]), this.libs[e].init.apply(this.libs[e], [this.scope, n[e]])) : (n = n instanceof Array ? n : new Array(n), this.libs[e].init.apply(this.libs[e], n))) : function() {}
                    },
                    patch: function(t) {
                        t.scope = this.scope, t.namespace = this.global.namespace, t.rtl = this.rtl, t.data_options = this.utils.data_options, t.attr_name = a, t.add_namespace = l, t.bindings = c, t.S = this.utils.S
                    },
                    inherit: function(t, e) {
                        for (var n = e.split(" "), i = n.length; i--;) this.utils.hasOwnProperty(n[i]) && (t[n[i]] = this.utils[n[i]])
                    },
                    set_namespace: function() {
                        var e = this.global.namespace === i ? t(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
                        this.global.namespace = e === i || /false/i.test(e) ? "" : e
                    },
                    libs: {},
                    utils: {
                        S: s,
                        throttle: function(t, e) {
                            var n = null;
                            return function() {
                                var i = this,
                                    o = arguments;
                                null == n && (n = setTimeout(function() {
                                    t.apply(i, o), n = null
                                }, e))
                            }
                        },
                        debounce: function(t, e, n) {
                            var i, o;
                            return function() {
                                var r = this,
                                    s = arguments,
                                    a = function() {
                                        i = null, n || (o = t.apply(r, s))
                                    },
                                    l = n && !i;
                                return clearTimeout(i), i = setTimeout(a, e), l && (o = t.apply(r, s)), o
                            }
                        },
                        data_options: function(e, n) {
                            function i(t) {
                                return !isNaN(t - 0) && null !== t && "" !== t && t !== !1 && t !== !0
                            }

                            function o(e) {
                                return "string" == typeof e ? t.trim(e) : e
                            }
                            n = n || "options";
                            var r, s, a, l = {},
                                c = function(t) {
                                    var e = Foundation.global.namespace;
                                    return t.data(e.length > 0 ? e + "-" + n : n)
                                },
                                u = c(e);
                            if ("object" == typeof u) return u;
                            for (a = (u || ":").split(";"), r = a.length; r--;) s = a[r].split(":"), s = [s[0], s.slice(1).join(":")], /true/i.test(s[1]) && (s[1] = !0), /false/i.test(s[1]) && (s[1] = !1), i(s[1]) && (s[1] = -1 === s[1].indexOf(".") ? parseInt(s[1], 10) : parseFloat(s[1])), 2 === s.length && s[0].length > 0 && (l[o(s[0])] = o(s[1]));
                            return l
                        },
                        register_media: function(e, n) {
                            Foundation.media_queries[e] === i && (t("head").append('<meta class="' + n + '"/>'), Foundation.media_queries[e] = o(t("." + n).css("font-family")))
                        },
                        add_custom_rule: function(t, e) {
                            if (e === i && Foundation.stylesheet) Foundation.stylesheet.insertRule(t, Foundation.stylesheet.cssRules.length);
                            else {
                                var n = Foundation.media_queries[e];
                                n !== i && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[e] + "{ " + t + " }", Foundation.stylesheet.cssRules.length)
                            }
                        },
                        image_loaded: function(t, e) {
                            function n(t) {
                                for (var e = t.length, n = e - 1; n >= 0; n--)
                                    if (t.attr("height") === i) return !1;
                                return !0
                            }
                            var o = this,
                                r = t.length;
                            (0 === r || n(t)) && e(t), t.each(function() {
                                u(o.S(this), function() {
                                    r -= 1, 0 === r && e(t)
                                })
                            })
                        },
                        random_str: function() {
                            return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
                        },
                        match: function(t) {
                            return e.matchMedia(t).matches
                        },
                        is_small_up: function() {
                            return this.match(Foundation.media_queries.small)
                        },
                        is_medium_up: function() {
                            return this.match(Foundation.media_queries.medium)
                        },
                        is_large_up: function() {
                            return this.match(Foundation.media_queries.large)
                        },
                        is_xlarge_up: function() {
                            return this.match(Foundation.media_queries.xlarge)
                        },
                        is_xxlarge_up: function() {
                            return this.match(Foundation.media_queries.xxlarge)
                        },
                        is_small_only: function() {
                            return !(this.is_medium_up() || this.is_large_up() || this.is_xlarge_up() || this.is_xxlarge_up())
                        },
                        is_medium_only: function() {
                            return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
                        },
                        is_large_only: function() {
                            return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
                        },
                        is_xlarge_only: function() {
                            return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up()
                        },
                        is_xxlarge_only: function() {
                            return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up()
                        }
                    }
                }, t.fn.foundation = function() {
                    var t = Array.prototype.slice.call(arguments, 0);
                    return this.each(function() {
                        return Foundation.init.apply(Foundation, [this].concat(t)), this
                    })
                }
        }(jQuery, window, window.document),
        function(t, e) {
            "use strict";
            Foundation.libs.slider = {
                name: "slider",
                version: "5.5.2",
                settings: {
                    start: 0,
                    end: 100,
                    step: 1,
                    precision: null,
                    initial: null,
                    display_selector: "",
                    vertical: !1,
                    trigger_input_change: !1,
                    on_change: function() {}
                },
                cache: {},
                init: function(t, e, n) {
                    Foundation.inherit(this, "throttle"), this.bindings(e, n), this.reflow()
                },
                events: function() {
                    var n = this;
                    t(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider", "[" + n.attr_name() + "]:not(.disabled, [disabled]) .range-slider-handle", function(e) {
                        n.cache.active || (e.preventDefault(), n.set_active_slider(t(e.target)))
                    }).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider", function(i) {
                        if (n.cache.active)
                            if (i.preventDefault(), t.data(n.cache.active[0], "settings").vertical) {
                                var o = 0;
                                i.pageY || (o = e.scrollY), n.calculate_position(n.cache.active, n.get_cursor_position(i, "y") + o)
                            } else n.calculate_position(n.cache.active, n.get_cursor_position(i, "x"))
                    }).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider", function() {
                        n.remove_active_slider()
                    }).on("change.fndtn.slider", function() {
                        n.settings.on_change()
                    }), n.S(e).on("resize.fndtn.slider", n.throttle(function() {
                        n.reflow()
                    }, 300)), this.S("[" + this.attr_name() + "]").each(function() {
                        var e = t(this),
                            i = e.children(".range-slider-handle")[0],
                            o = n.initialize_settings(i);
                        "" != o.display_selector && t(o.display_selector).each(function() {
                            this.hasOwnProperty("value") && t(this).change(function() {
                                e.foundation("slider", "set_value", t(this).val())
                            })
                        })
                    })
                },
                get_cursor_position: function(t, e) {
                    var n, i = "page" + e.toUpperCase(),
                        o = "client" + e.toUpperCase();
                    return "undefined" != typeof t[i] ? n = t[i] : "undefined" != typeof t.originalEvent[o] ? n = t.originalEvent[o] : t.originalEvent.touches && t.originalEvent.touches[0] && "undefined" != typeof t.originalEvent.touches[0][o] ? n = t.originalEvent.touches[0][o] : t.currentPoint && "undefined" != typeof t.currentPoint[e] && (n = t.currentPoint[e]), n
                },
                set_active_slider: function(t) {
                    this.cache.active = t
                },
                remove_active_slider: function() {
                    this.cache.active = null
                },
                calculate_position: function(e, n) {
                    var i = this,
                        o = t.data(e[0], "settings"),
                        r = (t.data(e[0], "handle_l"), t.data(e[0], "handle_o"), t.data(e[0], "bar_l")),
                        s = t.data(e[0], "bar_o");
                    requestAnimationFrame(function() {
                        var t;
                        t = Foundation.rtl && !o.vertical ? i.limit_to((s + r - n) / r, 0, 1) : i.limit_to((n - s) / r, 0, 1), t = o.vertical ? 1 - t : t;
                        var a = i.normalized_value(t, o.start, o.end, o.step, o.precision);
                        i.set_ui(e, a)
                    })
                },
                set_ui: function(e, n) {
                    var i = t.data(e[0], "settings"),
                        o = t.data(e[0], "handle_l"),
                        r = t.data(e[0], "bar_l"),
                        s = this.normalized_percentage(n, i.start, i.end),
                        a = s * (r - o) - 1,
                        l = 100 * s,
                        c = e.parent(),
                        u = e.parent().children("input[type=hidden]");
                    Foundation.rtl && !i.vertical && (a = -a), a = i.vertical ? -a + r - o + 1 : a, this.set_translate(e, a, i.vertical), i.vertical ? e.siblings(".range-slider-active-segment").css("height", l + "%") : e.siblings(".range-slider-active-segment").css("width", l + "%"), c.attr(this.attr_name(), n).trigger("change.fndtn.slider"), u.val(n), i.trigger_input_change && u.trigger("change.fndtn.slider"), e[0].hasAttribute("aria-valuemin") || e.attr({
                        "aria-valuemin": i.start,
                        "aria-valuemax": i.end
                    }), e.attr("aria-valuenow", n), "" != i.display_selector && t(i.display_selector).each(function() {
                        this.hasAttribute("value") ? t(this).val(n) : t(this).text(n)
                    })
                },
                normalized_percentage: function(t, e, n) {
                    return Math.min(1, (t - e) / (n - e))
                },
                normalized_value: function(t, e, n, i, o) {
                    var r = n - e,
                        s = t * r,
                        a = (s - s % i) / i,
                        l = s % i,
                        c = l >= .5 * i ? i : 0;
                    return (a * i + c + e).toFixed(o)
                },
                set_translate: function(e, n, i) {
                    i ? t(e).css("-webkit-transform", "translateY(" + n + "px)").css("-moz-transform", "translateY(" + n + "px)").css("-ms-transform", "translateY(" + n + "px)").css("-o-transform", "translateY(" + n + "px)").css("transform", "translateY(" + n + "px)") : t(e).css("-webkit-transform", "translateX(" + n + "px)").css("-moz-transform", "translateX(" + n + "px)").css("-ms-transform", "translateX(" + n + "px)").css("-o-transform", "translateX(" + n + "px)").css("transform", "translateX(" + n + "px)")
                },
                limit_to: function(t, e, n) {
                    return Math.min(Math.max(t, e), n)
                },
                initialize_settings: function(e) {
                    var n, i = t.extend({}, this.settings, this.data_options(t(e).parent()));
                    return null === i.precision && (n = ("" + i.step).match(/\.([\d]*)/), i.precision = n && n[1] ? n[1].length : 0), i.vertical ? (t.data(e, "bar_o", t(e).parent().offset().top), t.data(e, "bar_l", t(e).parent().outerHeight()), t.data(e, "handle_o", t(e).offset().top), t.data(e, "handle_l", t(e).outerHeight())) : (t.data(e, "bar_o", t(e).parent().offset().left), t.data(e, "bar_l", t(e).parent().outerWidth()), t.data(e, "handle_o", t(e).offset().left), t.data(e, "handle_l", t(e).outerWidth())), t.data(e, "bar", t(e).parent()), t.data(e, "settings", i)
                },
                set_initial_position: function(e) {
                    var n = t.data(e.children(".range-slider-handle")[0], "settings"),
                        i = "number" != typeof n.initial || isNaN(n.initial) ? Math.floor(.5 * (n.end - n.start) / n.step) * n.step + n.start : n.initial,
                        o = e.children(".range-slider-handle");
                    this.set_ui(o, i)
                },
                set_value: function(e) {
                    var n = this;
                    t("[" + n.attr_name() + "]", this.scope).each(function() {
                        t(this).attr(n.attr_name(), e)
                    }), t(this.scope).attr(n.attr_name()) && t(this.scope).attr(n.attr_name(), e), n.reflow()
                },
                reflow: function() {
                    var e = this;
                    e.S("[" + this.attr_name() + "]").each(function() {
                        var n = t(this).children(".range-slider-handle")[0],
                            i = t(this).attr(e.attr_name());
                        e.initialize_settings(n), i ? e.set_ui(t(n), parseFloat(i)) : e.set_initial_position(t(this))
                    })
                }
            }
        }(jQuery, window, window.document),
        function(t, e, n, i) {
            "use strict";
            Foundation.libs.joyride = {
                name: "joyride",
                version: "5.5.2",
                defaults: {
                    expose: !1,
                    modal: !0,
                    keyboard: !0,
                    tip_location: "bottom",
                    nub_position: "auto",
                    scroll_speed: 1500,
                    scroll_animation: "linear",
                    timer: 0,
                    start_timer_on_click: !0,
                    start_offset: 0,
                    next_button: !0,
                    prev_button: !0,
                    tip_animation: "fade",
                    pause_after: [],
                    exposed: [],
                    tip_animation_fade_speed: 300,
                    cookie_monster: !1,
                    cookie_name: "joyride",
                    cookie_domain: !1,
                    cookie_expires: 365,
                    tip_container: "body",
                    abort_on_close: !0,
                    tip_location_patterns: {
                        top: ["bottom"],
                        bottom: [],
                        left: ["right", "top", "bottom"],
                        right: ["left", "top", "bottom"]
                    },
                    post_ride_callback: function() {},
                    post_step_callback: function() {},
                    pre_step_callback: function() {},
                    pre_ride_callback: function() {},
                    post_expose_callback: function() {},
                    template: {
                        link: '<a href="#close" class="joyride-close-tip">&times;</a>',
                        timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
                        tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
                        wrapper: '<div class="joyride-content-wrapper"></div>',
                        button: '<a href="#" class="small button joyride-next-tip"></a>',
                        prev_button: '<a href="#" class="small button joyride-prev-tip"></a>',
                        modal: '<div class="joyride-modal-bg"></div>',
                        expose: '<div class="joyride-expose-wrapper"></div>',
                        expose_cover: '<div class="joyride-expose-cover"></div>'
                    },
                    expose_add_class: ""
                },
                init: function(e, n, i) {
                    Foundation.inherit(this, "throttle random_str"), this.settings = this.settings || t.extend({}, this.defaults, i || n), this.bindings(n, i)
                },
                go_next: function() {
                    this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show())
                },
                go_prev: function() {
                    this.settings.$li.prev().length < 1 || (this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(null, !0), this.startTimer()) : (this.hide(), this.show(null, !0)))
                },
                events: function() {
                    var n = this;
                    t(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function(t) {
                        t.preventDefault(), this.go_next()
                    }.bind(this)).on("click.fndtn.joyride", ".joyride-prev-tip", function(t) {
                        t.preventDefault(), this.go_prev()
                    }.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function(t) {
                        t.preventDefault(), this.end(this.settings.abort_on_close)
                    }.bind(this)).on("keyup.fndtn.joyride", function(t) {
                        if (this.settings.keyboard && this.settings.riding) switch (t.which) {
                            case 39:
                                t.preventDefault(), this.go_next();
                                break;
                            case 37:
                                t.preventDefault(), this.go_prev();
                                break;
                            case 27:
                                t.preventDefault(), this.end(this.settings.abort_on_close)
                        }
                    }.bind(this)), t(e).off(".joyride").on("resize.fndtn.joyride", n.throttle(function() {
                        if (t("[" + n.attr_name() + "]").length > 0 && n.settings.$next_tip && n.settings.riding) {
                            if (n.settings.exposed.length > 0) {
                                var e = t(n.settings.exposed);
                                e.each(function() {
                                    var e = t(this);
                                    n.un_expose(e), n.expose(e)
                                })
                            }
                            n.is_phone() ? n.pos_phone() : n.pos_default(!1)
                        }
                    }, 100))
                },
                start: function() {
                    var e = this,
                        n = t("[" + this.attr_name() + "]", this.scope),
                        i = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"],
                        o = i.length;
                    !n.length > 0 || (this.settings.init || this.events(), this.settings = n.data(this.attr_name(!0) + "-init"), this.settings.$content_el = n, this.settings.$body = t(this.settings.tip_container), this.settings.body_offset = t(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused = !1, this.settings.attempts = 0, this.settings.riding = !0, "function" != typeof t.cookie && (this.settings.cookie_monster = !1), (!this.settings.cookie_monster || this.settings.cookie_monster && !t.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function(n) {
                        var r = t(this);
                        this.settings = t.extend({}, e.defaults, e.data_options(r));
                        for (var s = o; s--;) e.settings[i[s]] = parseInt(e.settings[i[s]], 10);
                        e.create({
                            $li: r,
                            index: n
                        })
                    }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")))
                },
                resume: function() {
                    this.set_li(), this.show()
                },
                tip_template: function(e) {
                    var n, i;
                    return e.tip_class = e.tip_class || "", n = t(this.settings.template.tip).addClass(e.tip_class), i = t.trim(t(e.li).html()) + this.prev_button_text(e.prev_button_text, e.index) + this.button_text(e.button_text) + this.settings.template.link + this.timer_instance(e.index), n.append(t(this.settings.template.wrapper)), n.first().attr(this.add_namespace("data-index"), e.index), t(".joyride-content-wrapper", n).append(i), n[0]
                },
                timer_instance: function(e) {
                    var n;
                    return n = 0 === e && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : t(this.settings.template.timer)[0].outerHTML
                },
                button_text: function(e) {
                    return this.settings.tip_settings.next_button ? (e = t.trim(e) || "Next", e = t(this.settings.template.button).append(e)[0].outerHTML) : e = "", e
                },
                prev_button_text: function(e, n) {
                    return this.settings.tip_settings.prev_button ? (e = t.trim(e) || "Previous", e = 0 == n ? t(this.settings.template.prev_button).append(e).addClass("disabled")[0].outerHTML : t(this.settings.template.prev_button).append(e)[0].outerHTML) : e = "", e
                },
                create: function(e) {
                    this.settings.tip_settings = t.extend({}, this.settings, this.data_options(e.$li));
                    var n = e.$li.attr(this.add_namespace("data-button")) || e.$li.attr(this.add_namespace("data-text")),
                        i = e.$li.attr(this.add_namespace("data-button-prev")) || e.$li.attr(this.add_namespace("data-prev-text")),
                        o = e.$li.attr("class"),
                        r = t(this.tip_template({
                            tip_class: o,
                            index: e.index,
                            button_text: n,
                            prev_button_text: i,
                            li: e.$li
                        }));
                    t(this.settings.tip_container).append(r)
                },
                show: function(e, n) {
                    var o = null;
                    if (this.settings.$li === i || -1 === t.inArray(this.settings.$li.index(), this.settings.pause_after))
                        if (this.settings.paused ? this.settings.paused = !1 : this.set_li(e, n), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0) {
                            if (e && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = t.extend({}, this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], !/body/i.test(this.settings.$target.selector)) {
                                var r = t(".joyride-modal-bg");
                                /pop/i.test(this.settings.tipAnimation) ? r.hide() : r.fadeOut(this.settings.tipAnimationFadeSpeed), this.scroll_to()
                            }
                            this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), o = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (o.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), setTimeout(function() {
                                o.animate({
                                    width: o.parent().width()
                                }, this.settings.timer, "linear")
                            }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tip_animation) && (o.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(), setTimeout(function() {
                                o.animate({
                                    width: o.parent().width()
                                }, this.settings.timer, "linear")
                            }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)), this.settings.$current_tip = this.settings.$next_tip
                        } else this.settings.$li && this.settings.$target.length < 1 ? this.show(e, n) : this.end();
                    else this.settings.paused = !0
                },
                is_phone: function() {
                    return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
                },
                hide: function() {
                    this.settings.modal && this.settings.expose && this.un_expose(), this.settings.modal || t(".joyride-modal-bg").hide(), this.settings.$current_tip.css("visibility", "hidden"), setTimeout(t.proxy(function() {
                        this.hide(), this.css("visibility", "visible")
                    }, this.settings.$current_tip), 0), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip)
                },
                set_li: function(t, e) {
                    t ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset), this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (this.settings.$li = e ? this.settings.$li.prev() : this.settings.$li.next(), this.set_next_tip()), this.set_target()
                },
                set_next_tip: function() {
                    this.settings.$next_tip = t(".joyride-tip-guide").eq(this.settings.$li.index()), this.settings.$next_tip.data("closed", "")
                },
                set_target: function() {
                    var e = this.settings.$li.attr(this.add_namespace("data-class")),
                        i = this.settings.$li.attr(this.add_namespace("data-id")),
                        o = function() {
                            return i ? t(n.getElementById(i)) : e ? t("." + e).first() : t("body")
                        };
                    this.settings.$target = o()
                },
                scroll_to: function() {
                    var n, i;
                    n = t(e).height() / 2, i = Math.ceil(this.settings.$target.offset().top - n + this.settings.$next_tip.outerHeight()), 0 != i && t("html, body").stop().animate({
                        scrollTop: i
                    }, this.settings.scroll_speed, "swing")
                },
                paused: function() {
                    return -1 === t.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
                },
                restart: function() {
                    this.hide(), this.settings.$li = i, this.show("init")
                },
                pos_default: function(t) {
                    var e = this.settings.$next_tip.find(".joyride-nub"),
                        n = Math.ceil(e.outerWidth() / 2),
                        i = Math.ceil(e.outerHeight() / 2),
                        o = t || !1;
                    if (o && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector)) this.settings.$li.length && this.pos_modal(e);
                    else {
                        var r = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0,
                            s = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;
                        this.bottom() ? (this.settings.$next_tip.css(this.rtl ? {
                            top: this.settings.$target.offset().top + i + this.settings.$target.outerHeight() + r,
                            left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + s
                        } : {
                            top: this.settings.$target.offset().top + i + this.settings.$target.outerHeight() + r,
                            left: this.settings.$target.offset().left + s
                        }), this.nub_position(e, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.settings.$next_tip.css(this.rtl ? {
                            top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - i + r,
                            left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
                        } : {
                            top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - i + r,
                            left: this.settings.$target.offset().left + s
                        }), this.nub_position(e, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({
                            top: this.settings.$target.offset().top + r,
                            left: this.settings.$target.outerWidth() + this.settings.$target.offset().left + n + s
                        }), this.nub_position(e, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({
                            top: this.settings.$target.offset().top + r,
                            left: this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - n + s
                        }), this.nub_position(e, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], this.settings.attempts++, this.pos_default())
                    }
                    o && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
                },
                pos_phone: function(e) {
                    var n = this.settings.$next_tip.outerHeight(),
                        i = (this.settings.$next_tip.offset(), this.settings.$target.outerHeight()),
                        o = t(".joyride-nub", this.settings.$next_tip),
                        r = Math.ceil(o.outerHeight() / 2),
                        s = e || !1;
                    o.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), s && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(o) : this.top() ? (this.settings.$next_tip.offset({
                        top: this.settings.$target.offset().top - n - r
                    }), o.addClass("bottom")) : (this.settings.$next_tip.offset({
                        top: this.settings.$target.offset().top + i + r
                    }), o.addClass("top")), s && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
                },
                pos_modal: function(t) {
                    this.center(), t.hide(), this.show_modal()
                },
                show_modal: function() {
                    if (!this.settings.$next_tip.data("closed")) {
                        var e = t(".joyride-modal-bg");
                        if (e.length < 1) {
                            var e = t(this.settings.template.modal);
                            e.appendTo("body")
                        }
                        /pop/i.test(this.settings.tip_animation) ? e.show() : e.fadeIn(this.settings.tip_animation_fade_speed)
                    }
                },
                expose: function() {
                    var n, i, o, r, s, a = "expose-" + this.random_str(6);
                    if (arguments.length > 0 && arguments[0] instanceof t) o = arguments[0];
                    else {
                        if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                        o = this.settings.$target
                    }
                    return o.length < 1 ? (e.console && console.error("element not valid", o), !1) : (n = t(this.settings.template.expose), this.settings.$body.append(n), n.css({
                        top: o.offset().top,
                        left: o.offset().left,
                        width: o.outerWidth(!0),
                        height: o.outerHeight(!0)
                    }), i = t(this.settings.template.expose_cover), r = {
                        zIndex: o.css("z-index"),
                        position: o.css("position")
                    }, s = null == o.attr("class") ? "" : o.attr("class"), o.css("z-index", parseInt(n.css("z-index")) + 1), "static" == r.position && o.css("position", "relative"), o.data("expose-css", r), o.data("orig-class", s), o.attr("class", s + " " + this.settings.expose_add_class), i.css({
                        top: o.offset().top,
                        left: o.offset().left,
                        width: o.outerWidth(!0),
                        height: o.outerHeight(!0)
                    }), this.settings.modal && this.show_modal(), this.settings.$body.append(i), n.addClass(a), i.addClass(a), o.data("expose", a), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, o), void this.add_exposed(o))
                },
                un_expose: function() {
                    var n, i, o, r, s, a = !1;
                    if (arguments.length > 0 && arguments[0] instanceof t) i = arguments[0];
                    else {
                        if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                        i = this.settings.$target
                    }
                    return i.length < 1 ? (e.console && console.error("element not valid", i), !1) : (n = i.data("expose"), o = t("." + n), arguments.length > 1 && (a = arguments[1]), a === !0 ? t(".joyride-expose-wrapper,.joyride-expose-cover").remove() : o.remove(), r = i.data("expose-css"), "auto" == r.zIndex ? i.css("z-index", "") : i.css("z-index", r.zIndex), r.position != i.css("position") && ("static" == r.position ? i.css("position", "") : i.css("position", r.position)), s = i.data("orig-class"), i.attr("class", s), i.removeData("orig-classes"), i.removeData("expose"), i.removeData("expose-z-index"), void this.remove_exposed(i))
                },
                add_exposed: function(e) {
                    this.settings.exposed = this.settings.exposed || [], e instanceof t || "object" == typeof e ? this.settings.exposed.push(e[0]) : "string" == typeof e && this.settings.exposed.push(e)
                },
                remove_exposed: function(e) {
                    var n, i;
                    for (e instanceof t ? n = e[0] : "string" == typeof e && (n = e), this.settings.exposed = this.settings.exposed || [], i = this.settings.exposed.length; i--;)
                        if (this.settings.exposed[i] == n) return void this.settings.exposed.splice(i, 1)
                },
                center: function() {
                    var n = t(e);
                    return this.settings.$next_tip.css({
                        top: (n.height() - this.settings.$next_tip.outerHeight()) / 2 + n.scrollTop(),
                        left: (n.width() - this.settings.$next_tip.outerWidth()) / 2 + n.scrollLeft()
                    }), !0
                },
                bottom: function() {
                    return /bottom/i.test(this.settings.tip_settings.tip_location)
                },
                top: function() {
                    return /top/i.test(this.settings.tip_settings.tip_location)
                },
                right: function() {
                    return /right/i.test(this.settings.tip_settings.tip_location)
                },
                left: function() {
                    return /left/i.test(this.settings.tip_settings.tip_location)
                },
                corners: function(n) {
                    var i = t(e),
                        o = i.height() / 2,
                        r = Math.ceil(this.settings.$target.offset().top - o + this.settings.$next_tip.outerHeight()),
                        s = i.width() + i.scrollLeft(),
                        a = i.height() + r,
                        l = i.height() + i.scrollTop(),
                        c = i.scrollTop();
                    return c > r && (c = 0 > r ? 0 : r), a > l && (l = a), [n.offset().top < c, s < n.offset().left + n.outerWidth(), l < n.offset().top + n.outerHeight(), i.scrollLeft() > n.offset().left]
                },
                visible: function(t) {
                    for (var e = t.length; e--;)
                        if (t[e]) return !1;
                    return !0
                },
                nub_position: function(t, e, n) {
                    t.addClass("auto" === e ? n : e)
                },
                startTimer: function() {
                    this.settings.$li.length ? this.settings.automate = setTimeout(function() {
                        this.hide(), this.show(), this.startTimer()
                    }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
                },
                end: function(e) {
                    this.settings.cookie_monster && t.cookie(this.settings.cookie_name, "ridden", {
                        expires: this.settings.cookie_expires,
                        domain: this.settings.cookie_domain
                    }), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), t(this.scope).off("keyup.joyride"), this.settings.$next_tip.data("closed", !0), this.settings.riding = !1, t(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), ("undefined" == typeof e || e === !1) && (this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip)), t(".joyride-tip-guide").remove()
                },
                off: function() {
                    t(this.scope).off(".joyride"), t(e).off(".joyride"), t(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), t(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), this.settings = {}
                },
                reflow: function() {}
            }
        }(jQuery, window, window.document),
        function(t, e) {
            "use strict";
            Foundation.libs.equalizer = {
                name: "equalizer",
                version: "5.5.2",
                settings: {
                    use_tallest: !0,
                    before_height_change: t.noop,
                    after_height_change: t.noop,
                    equalize_on_stack: !1,
                    act_on_hidden_el: !1
                },
                init: function(t, e, n) {
                    Foundation.inherit(this, "image_loaded"), this.bindings(e, n), this.reflow()
                },
                events: function() {
                    this.S(e).off(".equalizer").on("resize.fndtn.equalizer", function() {
                        this.reflow()
                    }.bind(this))
                },
                equalize: function(e) {
                    var n, i, o = !1,
                        r = e.data("equalizer"),
                        s = e.data(this.attr_name(!0) + "-init") || this.settings;
                    if (n = e.find(s.act_on_hidden_el ? r ? "[" + this.attr_name() + '-watch="' + r + '"]' : "[" + this.attr_name() + "-watch]" : r ? "[" + this.attr_name() + '-watch="' + r + '"]:visible' : "[" + this.attr_name() + "-watch]:visible"), 0 !== n.length && (s.before_height_change(), e.trigger("before-height-change.fndth.equalizer"), n.height("inherit"), s.equalize_on_stack !== !1 || (i = n.first().offset().top, n.each(function() {
                            return t(this).offset().top !== i ? (o = !0, !1) : void 0
                        }), !o))) {
                        var a = n.map(function() {
                            return t(this).outerHeight(!1)
                        }).get();
                        if (s.use_tallest) {
                            var l = Math.max.apply(null, a);
                            n.css("height", l)
                        } else {
                            var c = Math.min.apply(null, a);
                            n.css("height", c)
                        }
                        s.after_height_change(), e.trigger("after-height-change.fndtn.equalizer")
                    }
                },
                reflow: function() {
                    var e = this;
                    this.S("[" + this.attr_name() + "]", this.scope).each(function() {
                        var n = t(this),
                            i = n.data("equalizer-mq"),
                            o = !0;
                        i && (i = "is_" + i.replace(/-/g, "_"), Foundation.utils.hasOwnProperty(i) && (o = !1)), e.image_loaded(e.S("img", this), function() {
                            if (o || Foundation.utils[i]()) e.equalize(n);
                            else {
                                var t = n.find("[" + e.attr_name() + "-watch]:visible");
                                t.css("height", "auto")
                            }
                        })
                    })
                }
            }
        }(jQuery, window, window.document),
        function(t, e, n) {
            "use strict";
            Foundation.libs.dropdown = {
                name: "dropdown",
                version: "5.5.2",
                settings: {
                    active_class: "open",
                    disabled_class: "disabled",
                    mega_class: "mega",
                    align: "bottom",
                    is_hover: !1,
                    hover_timeout: 150,
                    opened: function() {},
                    closed: function() {}
                },
                init: function(e, n, i) {
                    Foundation.inherit(this, "throttle"), t.extend(!0, this.settings, n, i), this.bindings(n, i)
                },
                events: function() {
                    var i = this,
                        o = i.S;
                    o(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function(e) {
                        var n = o(this).data(i.attr_name(!0) + "-init") || i.settings;
                        (!n.is_hover || Modernizr.touch) && (e.preventDefault(), o(this).parent("[data-reveal-id]").length && e.stopPropagation(), i.toggle(t(this)))
                    }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(t) {
                        var e, n, r = o(this);
                        clearTimeout(i.timeout), r.data(i.data_attr()) ? (e = o("#" + r.data(i.data_attr())), n = r) : (e = r, n = o("[" + i.attr_name() + '="' + e.attr("id") + '"]'));
                        var s = n.data(i.attr_name(!0) + "-init") || i.settings;
                        o(t.currentTarget).data(i.data_attr()) && s.is_hover && i.closeall.call(i), s.is_hover && i.open.apply(i, [e, n])
                    }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function() {
                        var t, e = o(this);
                        if (e.data(i.data_attr())) t = e.data(i.data_attr(!0) + "-init") || i.settings;
                        else var n = o("[" + i.attr_name() + '="' + o(this).attr("id") + '"]'),
                            t = n.data(i.attr_name(!0) + "-init") || i.settings;
                        i.timeout = setTimeout(function() {
                            e.data(i.data_attr()) ? t.is_hover && i.close.call(i, o("#" + e.data(i.data_attr()))) : t.is_hover && i.close.call(i, e)
                        }.bind(this), t.hover_timeout)
                    }).on("click.fndtn.dropdown", function(e) {
                        var r = o(e.target).closest("[" + i.attr_name() + "-content]"),
                            s = r.find("a");
                        return s.length > 0 && "false" !== r.attr("aria-autoclose") && i.close.call(i, o("[" + i.attr_name() + "-content]")), e.target !== n && !t.contains(n.documentElement, e.target) || o(e.target).closest("[" + i.attr_name() + "]").length > 0 ? void 0 : !o(e.target).data("revealId") && r.length > 0 && (o(e.target).is("[" + i.attr_name() + "-content]") || t.contains(r.first()[0], e.target)) ? void e.stopPropagation() : void i.close.call(i, o("[" + i.attr_name() + "-content]"))
                    }).on("opened.fndtn.dropdown", "[" + i.attr_name() + "-content]", function() {
                        i.settings.opened.call(this)
                    }).on("closed.fndtn.dropdown", "[" + i.attr_name() + "-content]", function() {
                        i.settings.closed.call(this)
                    }), o(e).off(".dropdown").on("resize.fndtn.dropdown", i.throttle(function() {
                        i.resize.call(i)
                    }, 50)), this.resize()
                },
                close: function(e) {
                    var n = this;
                    e.each(function(i) {
                        var o = t("[" + n.attr_name() + "=" + e[i].id + "]") || t("aria-controls=" + e[i].id + "]");
                        o.attr("aria-expanded", "false"), n.S(this).hasClass(n.settings.active_class) && (n.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").attr("aria-hidden", "true").removeClass(n.settings.active_class).prev("[" + n.attr_name() + "]").removeClass(n.settings.active_class).removeData("target"), n.S(this).trigger("closed.fndtn.dropdown", [e]))
                    }), e.removeClass("f-open-" + this.attr_name(!0))
                },
                closeall: function() {
                    var e = this;
                    t.each(e.S(".f-open-" + this.attr_name(!0)), function() {
                        e.close.call(e, e.S(this))
                    })
                },
                open: function(t, e) {
                    this.css(t.addClass(this.settings.active_class), e), t.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class), t.data("target", e.get(0)).trigger("opened.fndtn.dropdown", [t, e]), t.attr("aria-hidden", "false"), e.attr("aria-expanded", "true"), t.focus(), t.addClass("f-open-" + this.attr_name(!0))
                },
                data_attr: function() {
                    return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
                },
                toggle: function(t) {
                    if (!t.hasClass(this.settings.disabled_class)) {
                        var e = this.S("#" + t.data(this.data_attr()));
                        0 !== e.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(e)), e.hasClass(this.settings.active_class) ? (this.close.call(this, e), e.data("target") !== t.get(0) && this.open.call(this, e, t)) : this.open.call(this, e, t))
                    }
                },
                resize: function() {
                    var e = this.S("[" + this.attr_name() + "-content].open"),
                        n = t(e.data("target"));
                    e.length && n.length && this.css(e, n)
                },
                css: function(t, e) {
                    var n = Math.max((e.width() - t.width()) / 2, 8),
                        i = e.data(this.attr_name(!0) + "-init") || this.settings,
                        o = t.parent().css("overflow-y") || t.parent().css("overflow");
                    if (this.clear_idx(), this.small()) {
                        var r = this.dirs.bottom.call(t, e, i);
                        t.attr("style", "").removeClass("drop-left drop-right drop-top").css({
                            position: "absolute",
                            width: "95%",
                            "max-width": "none",
                            top: r.top
                        }), t.css(Foundation.rtl ? "right" : "left", n)
                    } else if ("visible" !== o) {
                        var s = e[0].offsetTop + e[0].offsetHeight;
                        t.attr("style", "").css({
                            position: "absolute",
                            top: s
                        }), t.css(Foundation.rtl ? "right" : "left", n)
                    } else this.style(t, e, i);
                    return t
                },
                style: function(e, n, i) {
                    var o = t.extend({
                        position: "absolute"
                    }, this.dirs[i.align].call(e, n, i));
                    e.attr("style", "").css(o)
                },
                dirs: {
                    _base: function(t) {
                        var i = this.offsetParent(),
                            o = i.offset(),
                            r = t.offset();
                        r.top -= o.top, r.left -= o.left, r.missRight = !1, r.missTop = !1, r.missLeft = !1, r.leftRightFlag = !1;
                        var s;
                        s = n.getElementsByClassName("row")[0] ? n.getElementsByClassName("row")[0].clientWidth : e.innerWidth;
                        var a = (e.innerWidth - s) / 2,
                            l = s;
                        return this.hasClass("mega") || (t.offset().top <= this.outerHeight() && (r.missTop = !0, l = e.innerWidth - a, r.leftRightFlag = !0), t.offset().left + this.outerWidth() > t.offset().left + a && t.offset().left - a > this.outerWidth() && (r.missRight = !0, r.missLeft = !1), t.offset().left - this.outerWidth() <= 0 && (r.missLeft = !0, r.missRight = !1)), r
                    },
                    top: function(t, e) {
                        var n = Foundation.libs.dropdown,
                            i = n.dirs._base.call(this, t);
                        return this.addClass("drop-top"), 1 == i.missTop && (i.top = i.top + t.outerHeight() + this.outerHeight(), this.removeClass("drop-top")), 1 == i.missRight && (i.left = i.left - this.outerWidth() + t.outerWidth()), (t.outerWidth() < this.outerWidth() || n.small() || this.hasClass(e.mega_menu)) && n.adjust_pip(this, t, e, i), Foundation.rtl ? {
                            left: i.left - this.outerWidth() + t.outerWidth(),
                            top: i.top - this.outerHeight()
                        } : {
                            left: i.left,
                            top: i.top - this.outerHeight()
                        }
                    },
                    bottom: function(t, e) {
                        var n = Foundation.libs.dropdown,
                            i = n.dirs._base.call(this, t);
                        return 1 == i.missRight && (i.left = i.left - this.outerWidth() + t.outerWidth()), (t.outerWidth() < this.outerWidth() || n.small() || this.hasClass(e.mega_menu)) && n.adjust_pip(this, t, e, i), n.rtl ? {
                            left: i.left - this.outerWidth() + t.outerWidth(),
                            top: i.top + t.outerHeight()
                        } : {
                            left: i.left,
                            top: i.top + t.outerHeight()
                        }
                    },
                    left: function(t) {
                        var e = Foundation.libs.dropdown.dirs._base.call(this, t);
                        return this.addClass("drop-left"), 1 == e.missLeft && (e.left = e.left + this.outerWidth(), e.top = e.top + t.outerHeight(), this.removeClass("drop-left")), {
                            left: e.left - this.outerWidth(),
                            top: e.top
                        }
                    },
                    right: function(t, e) {
                        var n = Foundation.libs.dropdown.dirs._base.call(this, t);
                        n.missRight = 0, this.addClass("drop-right"), 1 == n.missRight ? (n.left = n.left - this.outerWidth(), n.top = n.top + t.outerHeight(), this.removeClass("drop-right")) : n.triggeredRight = !0;
                        var i = Foundation.libs.dropdown;
                        return (t.outerWidth() < this.outerWidth() || i.small() || this.hasClass(e.mega_menu)) && i.adjust_pip(this, t, e, n), {
                            left: n.left + t.outerWidth(),
                            top: n.top
                        }
                    }
                },
                adjust_pip: function(t, e, n, i) {
                    var o = Foundation.stylesheet,
                        r = 8;
                    t.hasClass(n.mega_class) ? r = i.left + e.outerWidth() / 2 - 8 : this.small() && (r += i.left - 8), this.rule_idx = o.cssRules.length;
                    var s = ".f-dropdown.open:before",
                        a = ".f-dropdown.open:after",
                        l = "left: " + r + "px;",
                        c = "left: " + (r - 1) + "px;";
                    1 == i.missRight && (r = t.outerWidth() - 23, s = ".f-dropdown.open:before", a = ".f-dropdown.open:after", l = "left: " + r + "px;", c = "left: " + (r - 1) + "px;"), 1 == i.triggeredRight && (s = ".f-dropdown.open:before", a = ".f-dropdown.open:after", l = "left:-12px;", c = "left:-14px;"), o.insertRule ? (o.insertRule([s, "{", l, "}"].join(" "), this.rule_idx), o.insertRule([a, "{", c, "}"].join(" "), this.rule_idx + 1)) : (o.addRule(s, l, this.rule_idx), o.addRule(a, c, this.rule_idx + 1))
                },
                clear_idx: function() {
                    var t = Foundation.stylesheet;
                    "undefined" != typeof this.rule_idx && (t.deleteRule(this.rule_idx), t.deleteRule(this.rule_idx), delete this.rule_idx)
                },
                small: function() {
                    return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
                },
                off: function() {
                    this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), this.S(e).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown")
                },
                reflow: function() {}
            }
        }(jQuery, window, window.document),
        function(t, e, n, i) {
            "use strict";
            Foundation.libs.clearing = {
                name: "clearing",
                version: "5.5.2",
                settings: {
                    templates: {
                        viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div><img class="clearing-preload-next" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><img class="clearing-preload-prev" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />'
                    },
                    close_selectors: ".clearing-close, div.clearing-blackout",
                    open_selectors: "",
                    skip_selector: "",
                    touch_label: "",
                    init: !1,
                    locked: !1
                },
                init: function(t, e, n) {
                    var i = this;
                    Foundation.inherit(this, "throttle image_loaded"), this.bindings(e, n), i.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(i.S("li", this.scope)) : i.S("[" + this.attr_name() + "]", this.scope).each(function() {
                        i.assemble(i.S("li", this))
                    })
                },
                events: function(i) {
                    var o = this,
                        r = o.S,
                        s = t(".scroll-container");
                    s.length > 0 && (this.scope = s), r(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li " + this.settings.open_selectors, function(t, e, n) {
                        var e = e || r(this),
                            n = n || e,
                            i = e.next("li"),
                            s = e.closest("[" + o.attr_name() + "]").data(o.attr_name(!0) + "-init"),
                            a = r(t.target);
                        t.preventDefault(), s || (o.init(), s = e.closest("[" + o.attr_name() + "]").data(o.attr_name(!0) + "-init")), n.hasClass("visible") && e[0] === n[0] && i.length > 0 && o.is_open(e) && (n = i, a = r("img", n)), o.open(a, e, n), o.update_paddles(n)
                    }).on("click.fndtn.clearing", ".clearing-main-next", function(t) {
                        o.nav(t, "next")
                    }).on("click.fndtn.clearing", ".clearing-main-prev", function(t) {
                        o.nav(t, "prev")
                    }).on("click.fndtn.clearing", this.settings.close_selectors, function(t) {
                        Foundation.libs.clearing.close(t, this)
                    }), t(n).on("keydown.fndtn.clearing", function(t) {
                        o.keydown(t)
                    }), r(e).off(".clearing").on("resize.fndtn.clearing", function() {
                        o.resize()
                    }), this.swipe_events(i)
                },
                swipe_events: function() {
                    var t = this,
                        e = t.S;
                    e(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function(t) {
                        t.touches || (t = t.originalEvent);
                        var n = {
                            start_page_x: t.touches[0].pageX,
                            start_page_y: t.touches[0].pageY,
                            start_time: (new Date).getTime(),
                            delta_x: 0,
                            is_scrolling: i
                        };
                        e(this).data("swipe-transition", n), t.stopPropagation()
                    }).on("touchmove.fndtn.clearing", ".visible-img", function(n) {
                        if (n.touches || (n = n.originalEvent), !(n.touches.length > 1 || n.scale && 1 !== n.scale)) {
                            var i = e(this).data("swipe-transition");
                            if ("undefined" == typeof i && (i = {}), i.delta_x = n.touches[0].pageX - i.start_page_x, Foundation.rtl && (i.delta_x = -i.delta_x), "undefined" == typeof i.is_scrolling && (i.is_scrolling = !!(i.is_scrolling || Math.abs(i.delta_x) < Math.abs(n.touches[0].pageY - i.start_page_y))), !i.is_scrolling && !i.active) {
                                n.preventDefault();
                                var o = i.delta_x < 0 ? "next" : "prev";
                                i.active = !0, t.nav(n, o)
                            }
                        }
                    }).on("touchend.fndtn.clearing", ".visible-img", function(t) {
                        e(this).data("swipe-transition", {}), t.stopPropagation()
                    })
                },
                assemble: function(e) {
                    var n = e.parent();
                    if (!n.parent().hasClass("carousel")) {
                        n.after('<div id="foundationClearingHolder"></div>');
                        var i = n.detach(),
                            o = "";
                        if (null != i[0]) {
                            o = i[0].outerHTML;
                            var r = this.S("#foundationClearingHolder"),
                                s = n.data(this.attr_name(!0) + "-init"),
                                a = {
                                    grid: '<div class="carousel">' + o + "</div>",
                                    viewing: s.templates.viewing
                                },
                                l = '<div class="clearing-assembled"><div>' + a.viewing + a.grid + "</div></div>",
                                c = this.settings.touch_label;
                            Modernizr.touch && (l = t(l).find(".clearing-touch-label").html(c).end()), r.after(l).remove()
                        }
                    }
                },
                open: function(e, i, o) {
                    function r() {
                        setTimeout(function() {
                            this.image_loaded(h, function() {
                                1 !== h.outerWidth() || f ? s.call(this, h) : r.call(this)
                            }.bind(this))
                        }.bind(this), 100)
                    }

                    function s(e) {
                        var n = t(e);
                        n.css("visibility", "visible"), n.trigger("imageVisible"), l.css("overflow", "hidden"), c.addClass("clearing-blackout"), u.addClass("clearing-container"), d.show(), this.fix_height(o).caption(a.S(".clearing-caption", d), a.S("img", o)).center_and_label(e, p).shift(i, o, function() {
                            o.closest("li").siblings().removeClass("visible"), o.closest("li").addClass("visible")
                        }), d.trigger("opened.fndtn.clearing")
                    }
                    var a = this,
                        l = t(n.body),
                        c = o.closest(".clearing-assembled"),
                        u = a.S("div", c).first(),
                        d = a.S(".visible-img", u),
                        h = a.S("img", d).not(e),
                        p = a.S(".clearing-touch-label", u),
                        f = !1,
                        g = {};
                    t("body").on("touchmove", function(t) {
                        t.preventDefault()
                    }), h.error(function() {
                        f = !0
                    }), this.locked() || (d.trigger("open.fndtn.clearing"), g = this.load(e), g.interchange ? h.attr("data-interchange", g.interchange).foundation("interchange", "reflow") : h.attr("src", g.src).attr("data-interchange", ""), h.css("visibility", "hidden"), r.call(this))
                },
                close: function(e, i) {
                    e.preventDefault();
                    var o, r, s = function(t) {
                            return /blackout/.test(t.selector) ? t : t.closest(".clearing-blackout")
                        }(t(i)),
                        a = t(n.body);
                    return i === e.target && s && (a.css("overflow", ""), o = t("div", s).first(), r = t(".visible-img", o), r.trigger("close.fndtn.clearing"), this.settings.prev_index = 0, t("ul[" + this.attr_name() + "]", s).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), o.removeClass("clearing-container"), r.hide(), r.trigger("closed.fndtn.clearing")), t("body").off("touchmove"), !1
                },
                is_open: function(t) {
                    return t.parent().prop("style").length > 0
                },
                keydown: function(e) {
                    var n = t(".clearing-blackout ul[" + this.attr_name() + "]"),
                        i = this.rtl ? 37 : 39,
                        o = this.rtl ? 39 : 37,
                        r = 27;
                    e.which === i && this.go(n, "next"), e.which === o && this.go(n, "prev"), e.which === r && this.S("a.clearing-close").trigger("click.fndtn.clearing")
                },
                nav: function(e, n) {
                    var i = t("ul[" + this.attr_name() + "]", ".clearing-blackout");
                    e.preventDefault(), this.go(i, n)
                },
                resize: function() {
                    var e = t("img", ".clearing-blackout .visible-img"),
                        n = t(".clearing-touch-label", ".clearing-blackout");
                    e.length && (this.center_and_label(e, n), e.trigger("resized.fndtn.clearing"))
                },
                fix_height: function(t) {
                    var e = t.parent().children(),
                        n = this;
                    return e.each(function() {
                        var t = n.S(this),
                            e = t.find("img");
                        t.height() > e.outerHeight() && t.addClass("fix-height")
                    }).closest("ul").width(100 * e.length + "%"), this
                },
                update_paddles: function(t) {
                    t = t.closest("li");
                    var e = t.closest(".carousel").siblings(".visible-img");
                    t.next().length > 0 ? this.S(".clearing-main-next", e).removeClass("disabled") : this.S(".clearing-main-next", e).addClass("disabled"), t.prev().length > 0 ? this.S(".clearing-main-prev", e).removeClass("disabled") : this.S(".clearing-main-prev", e).addClass("disabled")
                },
                center_and_label: function(t, e) {
                    return e.css(!this.rtl && e.length > 0 ? {
                        marginLeft: -(e.outerWidth() / 2),
                        marginTop: -(t.outerHeight() / 2) - e.outerHeight() - 10
                    } : {
                        marginRight: -(e.outerWidth() / 2),
                        marginTop: -(t.outerHeight() / 2) - e.outerHeight() - 10,
                        left: "auto",
                        right: "50%"
                    }), this
                },
                load: function(t) {
                    var e, n, i;
                    return "A" === t[0].nodeName ? (e = t.attr("href"), n = t.data("clearing-interchange")) : (i = t.closest("a"), e = i.attr("href"), n = i.data("clearing-interchange")), this.preload(t), {
                        src: e ? e : t.attr("src"),
                        interchange: e ? n : t.data("clearing-interchange")
                    }
                },
                preload: function(t) {
                    this.img(t.closest("li").next(), "next").img(t.closest("li").prev(), "prev")
                },
                img: function(e, n) {
                    if (e.length) {
                        var i, o, r, s = t(".clearing-preload-" + n),
                            a = this.S("a", e);
                        a.length ? (i = a.attr("href"), o = a.data("clearing-interchange")) : (r = this.S("img", e), i = r.attr("src"), o = r.data("clearing-interchange")), o ? s.attr("data-interchange", o) : (s.attr("src", i), s.attr("data-interchange", ""))
                    }
                    return this
                },
                caption: function(t, e) {
                    var n = e.attr("data-caption");
                    return n ? t.html(n).show() : t.text("").hide(), this
                },
                go: function(t, e) {
                    var n = this.S(".visible", t),
                        i = n[e]();
                    this.settings.skip_selector && 0 != i.find(this.settings.skip_selector).length && (i = i[e]()), i.length && this.S("img", i).trigger("click.fndtn.clearing", [n, i]).trigger("change.fndtn.clearing")
                },
                shift: function(t, e, n) {
                    var i, o = e.parent(),
                        r = this.settings.prev_index || e.index(),
                        s = this.direction(o, t, e),
                        a = this.rtl ? "right" : "left",
                        l = parseInt(o.css("left"), 10),
                        c = e.outerWidth(),
                        u = {};
                    e.index() === r || /skip/.test(s) ? /skip/.test(s) && (i = e.index() - this.settings.up_count, this.lock(), i > 0 ? (u[a] = -(i * c), o.animate(u, 300, this.unlock())) : (u[a] = 0, o.animate(u, 300, this.unlock()))) : /left/.test(s) ? (this.lock(), u[a] = l + c, o.animate(u, 300, this.unlock())) : /right/.test(s) && (this.lock(), u[a] = l - c, o.animate(u, 300, this.unlock())), n()
                },
                direction: function(t, e, n) {
                    var i, o = this.S("li", t),
                        r = o.outerWidth() + o.outerWidth() / 4,
                        s = Math.floor(this.S(".clearing-container").outerWidth() / r) - 1,
                        a = o.index(n);
                    return this.settings.up_count = s, i = this.adjacent(this.settings.prev_index, a) ? a > s && a > this.settings.prev_index ? "right" : a > s - 1 && a <= this.settings.prev_index && "left" : "skip", this.settings.prev_index = a, i
                },
                adjacent: function(t, e) {
                    for (var n = e + 1; n >= e - 1; n--)
                        if (n === t) return !0;
                    return !1
                },
                lock: function() {
                    this.settings.locked = !0
                },
                unlock: function() {
                    this.settings.locked = !1
                },
                locked: function() {
                    return this.settings.locked
                },
                off: function() {
                    this.S(this.scope).off(".fndtn.clearing"), this.S(e).off(".fndtn.clearing")
                },
                reflow: function() {
                    this.init()
                }
            }
        }(jQuery, window, window.document),
        function(t, e, n, i) {
            "use strict";
            var o = function() {},
                r = function(o, r) {
                    if (o.hasClass(r.slides_container_class)) return this;
                    var c, u, d, h, p, f, g = this,
                        v = o,
                        m = 0,
                        b = !1;
                    g.slides = function() {
                        return v.children(r.slide_selector)
                    }, g.slides().first().addClass(r.active_slide_class), g.update_slide_number = function(e) {
                        r.slide_number && (u.find("span:first").text(parseInt(e) + 1), u.find("span:last").text(g.slides().length)), r.bullets && (d.children().removeClass(r.bullets_active_class), t(d.children().get(e)).addClass(r.bullets_active_class))
                    }, g.update_active_link = function(e) {
                        var n = t('[data-orbit-link="' + g.slides().eq(e).attr("data-orbit-slide") + '"]');
                        n.siblings().removeClass(r.bullets_active_class), n.addClass(r.bullets_active_class)
                    }, g.build_markup = function() {
                        v.wrap('<div class="' + r.container_class + '"></div>'), c = v.parent(), v.addClass(r.slides_container_class), r.stack_on_small && c.addClass(r.stack_on_small_class), r.navigation_arrows && (c.append(t('<a href="#"><span></span></a>').addClass(r.prev_class)), c.append(t('<a href="#"><span></span></a>').addClass(r.next_class))), r.timer && (h = t("<div>").addClass(r.timer_container_class), h.append("<span>"), h.append(t("<div>").addClass(r.timer_progress_class)), h.addClass(r.timer_paused_class), c.append(h)), r.slide_number && (u = t("<div>").addClass(r.slide_number_class), u.append("<span></span> " + r.slide_number_text + " <span></span>"), c.append(u)), r.bullets && (d = t("<ol>").addClass(r.bullets_container_class), c.append(d), d.wrap('<div class="orbit-bullets-container"></div>'), g.slides().each(function(e) {
                            var n = t("<li>").attr("data-orbit-slide", e).on("click", g.link_bullet);
                            d.append(n)
                        }))
                    }, g._goto = function(e, n) {
                        if (e === m) return !1;
                        "object" == typeof f && f.restart();
                        var i = g.slides(),
                            o = "next";
                        if (b = !0, m > e && (o = "prev"), e >= i.length) {
                            if (!r.circular) return !1;
                            e = 0
                        } else if (0 > e) {
                            if (!r.circular) return !1;
                            e = i.length - 1
                        }
                        var s = t(i.get(m)),
                            a = t(i.get(e));
                        s.css("zIndex", 2), s.removeClass(r.active_slide_class), a.css("zIndex", 4).addClass(r.active_slide_class), v.trigger("before-slide-change.fndtn.orbit"), r.before_slide_change(), g.update_active_link(e);
                        var l = function() {
                            var t = function() {
                                m = e, b = !1, n === !0 && (f = g.create_timer(), f.start()), g.update_slide_number(m), v.trigger("after-slide-change.fndtn.orbit", [{
                                    slide_number: m,
                                    total_slides: i.length
                                }]), r.after_slide_change(m, i.length)
                            };
                            v.outerHeight() != a.outerHeight() && r.variable_height ? v.animate({
                                height: a.outerHeight()
                            }, 250, "linear", t) : t()
                        };
                        if (1 === i.length) return l(), !1;
                        var c = function() {
                            "next" === o && p.next(s, a, l), "prev" === o && p.prev(s, a, l)
                        };
                        a.outerHeight() > v.outerHeight() && r.variable_height ? v.animate({
                            height: a.outerHeight()
                        }, 250, "linear", c) : c()
                    }, g.next = function(t) {
                        t.stopImmediatePropagation(), t.preventDefault(), g._goto(m + 1)
                    }, g.prev = function(t) {
                        t.stopImmediatePropagation(), t.preventDefault(), g._goto(m - 1)
                    }, g.link_custom = function(e) {
                        e.preventDefault();
                        var n = t(this).attr("data-orbit-link");
                        if ("string" == typeof n && "" != (n = t.trim(n))) {
                            var i = c.find("[data-orbit-slide=" + n + "]"); - 1 != i.index() && g._goto(i.index())
                        }
                    }, g.link_bullet = function() {
                        var e = t(this).attr("data-orbit-slide");
                        if ("string" == typeof e && "" != (e = t.trim(e)))
                            if (isNaN(parseInt(e))) {
                                var n = c.find("[data-orbit-slide=" + e + "]"); - 1 != n.index() && g._goto(n.index() + 1)
                            } else g._goto(parseInt(e))
                    }, g.timer_callback = function() {
                        g._goto(m + 1, !0)
                    }, g.compute_dimensions = function() {
                        var e = t(g.slides().get(m)),
                            n = e.outerHeight();
                        r.variable_height || g.slides().each(function() {
                            t(this).outerHeight() > n && (n = t(this).outerHeight())
                        }), v.height(n)
                    }, g.create_timer = function() {
                        var t = new s(c.find("." + r.timer_container_class), r, g.timer_callback);
                        return t
                    }, g.stop_timer = function() {
                        "object" == typeof f && f.stop()
                    }, g.toggle_timer = function() {
                        var t = c.find("." + r.timer_container_class);
                        t.hasClass(r.timer_paused_class) ? ("undefined" == typeof f && (f = g.create_timer()), f.start()) : "object" == typeof f && f.stop()
                    }, g.init = function() {
                        g.build_markup(), r.timer && (f = g.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), f.start)), p = new l(r, v), "slide" === r.animation && (p = new a(r, v)), c.on("click", "." + r.next_class, g.next), c.on("click", "." + r.prev_class, g.prev), r.next_on_click && c.on("click", "." + r.slides_container_class + " [data-orbit-slide]", g.link_bullet), c.on("click", g.toggle_timer), r.swipe && c.on("touchstart.fndtn.orbit", function(t) {
                            t.touches || (t = t.originalEvent);
                            var e = {
                                start_page_x: t.touches[0].pageX,
                                start_page_y: t.touches[0].pageY,
                                start_time: (new Date).getTime(),
                                delta_x: 0,
                                is_scrolling: i
                            };
                            c.data("swipe-transition", e), t.stopPropagation()
                        }).on("touchmove.fndtn.orbit", function(t) {
                            if (t.touches || (t = t.originalEvent), !(t.touches.length > 1 || t.scale && 1 !== t.scale)) {
                                var e = c.data("swipe-transition");
                                if ("undefined" == typeof e && (e = {}), e.delta_x = t.touches[0].pageX - e.start_page_x, "undefined" == typeof e.is_scrolling && (e.is_scrolling = !!(e.is_scrolling || Math.abs(e.delta_x) < Math.abs(t.touches[0].pageY - e.start_page_y))), !e.is_scrolling && !e.active) {
                                    t.preventDefault();
                                    var n = e.delta_x < 0 ? m + 1 : m - 1;
                                    e.active = !0, g._goto(n)
                                }
                            }
                        }).on("touchend.fndtn.orbit", function(t) {
                            c.data("swipe-transition", {}), t.stopPropagation()
                        }), c.on("mouseenter.fndtn.orbit", function() {
                            r.timer && r.pause_on_hover && g.stop_timer()
                        }).on("mouseleave.fndtn.orbit", function() {
                            r.timer && r.resume_on_mouseout && f.start()
                        }), t(n).on("click", "[data-orbit-link]", g.link_custom), t(e).on("load resize", g.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), g.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), function() {
                            c.prev("." + r.preloader_class).css("display", "none"), g.update_slide_number(0), g.update_active_link(0), v.trigger("ready.fndtn.orbit")
                        })
                    }, g.init()
                },
                s = function(t, e, n) {
                    var i, o, r = this,
                        s = e.timer_speed,
                        a = t.find("." + e.timer_progress_class),
                        l = -1;
                    this.update_progress = function(t) {
                        var e = a.clone();
                        e.attr("style", ""), e.css("width", t + "%"), a.replaceWith(e), a = e
                    }, this.restart = function() {
                        clearTimeout(o), t.addClass(e.timer_paused_class), l = -1, r.update_progress(0)
                    }, this.start = function() {
                        return !t.hasClass(e.timer_paused_class) || (l = -1 === l ? s : l, t.removeClass(e.timer_paused_class), i = (new Date).getTime(), a.animate({
                            width: "100%"
                        }, l, "linear"), o = setTimeout(function() {
                            r.restart(), n()
                        }, l), void t.trigger("timer-started.fndtn.orbit"))
                    }, this.stop = function() {
                        if (t.hasClass(e.timer_paused_class)) return !0;
                        clearTimeout(o), t.addClass(e.timer_paused_class);
                        var n = (new Date).getTime();
                        l -= n - i;
                        var a = 100 - l / s * 100;
                        r.update_progress(a), t.trigger("timer-stopped.fndtn.orbit")
                    }
                },
                a = function(e) {
                    var n = e.animation_speed,
                        i = 1 === t("html[dir=rtl]").length,
                        o = i ? "marginRight" : "marginLeft",
                        r = {};
                    r[o] = "0%", this.next = function(t, e, i) {
                        t.animate({
                            marginLeft: "-100%"
                        }, n), e.animate(r, n, function() {
                            t.css(o, "100%"), i()
                        })
                    }, this.prev = function(t, e, i) {
                        t.animate({
                            marginLeft: "100%"
                        }, n), e.css(o, "-100%"), e.animate(r, n, function() {
                            t.css(o, "100%"), i()
                        })
                    }
                },
                l = function(e) {
                    var n = e.animation_speed;
                    1 === t("html[dir=rtl]").length, this.next = function(t, e, i) {
                        e.css({
                            margin: "0%",
                            opacity: "0.01"
                        }), e.animate({
                            opacity: "1"
                        }, n, "linear", function() {
                            t.css("margin", "100%"), i()
                        })
                    }, this.prev = function(t, e, i) {
                        e.css({
                            margin: "0%",
                            opacity: "0.01"
                        }), e.animate({
                            opacity: "1"
                        }, n, "linear", function() {
                            t.css("margin", "100%"), i()
                        })
                    }
                };
            Foundation.libs = Foundation.libs || {},
                Foundation.libs.orbit = {
                    name: "orbit",
                    version: "5.5.2",
                    settings: {
                        animation: "slide",
                        timer_speed: 1e4,
                        pause_on_hover: !0,
                        resume_on_mouseout: !1,
                        next_on_click: !0,
                        animation_speed: 500,
                        stack_on_small: !1,
                        navigation_arrows: !0,
                        slide_number: !0,
                        slide_number_text: "of",
                        container_class: "orbit-container",
                        stack_on_small_class: "orbit-stack-on-small",
                        next_class: "orbit-next",
                        prev_class: "orbit-prev",
                        timer_container_class: "orbit-timer",
                        timer_paused_class: "paused",
                        timer_progress_class: "orbit-progress",
                        slides_container_class: "orbit-slides-container",
                        preloader_class: "preloader",
                        slide_selector: "*",
                        bullets_container_class: "orbit-bullets",
                        bullets_active_class: "active",
                        slide_number_class: "orbit-slide-number",
                        caption_class: "orbit-caption",
                        active_slide_class: "active",
                        orbit_transition_class: "orbit-transitioning",
                        bullets: !0,
                        circular: !0,
                        timer: !0,
                        variable_height: !1,
                        swipe: !0,
                        before_slide_change: o,
                        after_slide_change: o
                    },
                    init: function(t, e, n) {
                        this.bindings(e, n)
                    },
                    events: function(t) {
                        var e = new r(this.S(t), this.S(t).data("orbit-init"));
                        this.S(t).data(this.name + "-instance", e)
                    },
                    reflow: function() {
                        var t = this;
                        if (t.S(t.scope).is("[data-orbit]")) {
                            var e = t.S(t.scope),
                                n = e.data(t.name + "-instance");
                            n.compute_dimensions()
                        } else t.S("[data-orbit]", t.scope).each(function(e, n) {
                            var i = t.S(n),
                                o = (t.data_options(i), i.data(t.name + "-instance"));
                            o.compute_dimensions()
                        })
                    }
                }
        }(jQuery, window, window.document),
        function(t) {
            "use strict";
            Foundation.libs.offcanvas = {
                name: "offcanvas",
                version: "5.5.2",
                settings: {
                    open_method: "move",
                    close_on_click: !1
                },
                init: function(t, e, n) {
                    this.bindings(e, n)
                },
                events: function() {
                    var e = this,
                        n = e.S,
                        i = "",
                        o = "",
                        r = "";
                    "move" === this.settings.open_method ? (i = "move-", o = "right", r = "left") : "overlap_single" === this.settings.open_method ? (i = "offcanvas-overlap-", o = "right", r = "left") : "overlap" === this.settings.open_method && (i = "offcanvas-overlap"), n(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function(r) {
                        e.click_toggle_class(r, i + o), "overlap" !== e.settings.open_method && n(".left-submenu").removeClass(i + o), t(".left-off-canvas-toggle").attr("aria-expanded", "true")
                    }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function(r) {
                        var s = e.get_settings(r),
                            a = n(this).parent();
                        !s.close_on_click || a.hasClass("has-submenu") || a.hasClass("back") ? n(this).parent().hasClass("has-submenu") ? (r.preventDefault(), n(this).siblings(".left-submenu").toggleClass(i + o)) : a.hasClass("back") && (r.preventDefault(), a.parent().removeClass(i + o)) : (e.hide.call(e, i + o, e.get_wrapper(r)), a.parent().removeClass(i + o)), t(".left-off-canvas-toggle").attr("aria-expanded", "true")
                    }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function(o) {
                        e.click_toggle_class(o, i + r), "overlap" !== e.settings.open_method && n(".right-submenu").removeClass(i + r), t(".right-off-canvas-toggle").attr("aria-expanded", "true")
                    }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function(o) {
                        var s = e.get_settings(o),
                            a = n(this).parent();
                        !s.close_on_click || a.hasClass("has-submenu") || a.hasClass("back") ? n(this).parent().hasClass("has-submenu") ? (o.preventDefault(), n(this).siblings(".right-submenu").toggleClass(i + r)) : a.hasClass("back") && (o.preventDefault(), a.parent().removeClass(i + r)) : (e.hide.call(e, i + r, e.get_wrapper(o)), a.parent().removeClass(i + r)), t(".right-off-canvas-toggle").attr("aria-expanded", "true")
                    }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(s) {
                        e.click_remove_class(s, i + r), n(".right-submenu").removeClass(i + r), o && (e.click_remove_class(s, i + o), n(".left-submenu").removeClass(i + r)), t(".right-off-canvas-toggle").attr("aria-expanded", "true")
                    }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(n) {
                        e.click_remove_class(n, i + r), t(".left-off-canvas-toggle").attr("aria-expanded", "false"), o && (e.click_remove_class(n, i + o), t(".right-off-canvas-toggle").attr("aria-expanded", "false"))
                    })
                },
                toggle: function(t, e) {
                    e = e || this.get_wrapper(), e.is("." + t) ? this.hide(t, e) : this.show(t, e)
                },
                show: function(t, e) {
                    e = e || this.get_wrapper(), e.trigger("open.fndtn.offcanvas"), e.addClass(t)
                },
                hide: function(t, e) {
                    e = e || this.get_wrapper(), e.trigger("close.fndtn.offcanvas"), e.removeClass(t)
                },
                click_toggle_class: function(t, e) {
                    t.preventDefault();
                    var n = this.get_wrapper(t);
                    this.toggle(e, n)
                },
                click_remove_class: function(t, e) {
                    t.preventDefault();
                    var n = this.get_wrapper(t);
                    this.hide(e, n)
                },
                get_settings: function(t) {
                    var e = this.S(t.target).closest("[" + this.attr_name() + "]");
                    return e.data(this.attr_name(!0) + "-init") || this.settings
                },
                get_wrapper: function(t) {
                    var e = this.S(t ? t.target : this.scope).closest(".off-canvas-wrap");
                    return 0 === e.length && (e = this.S(".off-canvas-wrap")), e
                },
                reflow: function() {}
            }
        }(jQuery, window, window.document),
        function(t) {
            "use strict";
            Foundation.libs.alert = {
                name: "alert",
                version: "5.5.2",
                settings: {
                    callback: function() {}
                },
                init: function(t, e, n) {
                    this.bindings(e, n)
                },
                events: function() {
                    var e = this,
                        n = this.S;
                    t(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] .close", function(t) {
                        var i = n(this).closest("[" + e.attr_name() + "]"),
                            o = i.data(e.attr_name(!0) + "-init") || e.settings;
                        t.preventDefault(), Modernizr.csstransitions ? (i.addClass("alert-close"), i.on("transitionend webkitTransitionEnd oTransitionEnd", function() {
                            n(this).trigger("close.fndtn.alert").remove(), o.callback()
                        })) : i.fadeOut(300, function() {
                            n(this).trigger("close.fndtn.alert").remove(), o.callback()
                        })
                    })
                },
                reflow: function() {}
            }
        }(jQuery, window, window.document),
        function(t, e, n, i) {
            "use strict";

            function o(t) {
                var e = /fade/i.test(t),
                    n = /pop/i.test(t);
                return {
                    animate: e || n,
                    pop: n,
                    fade: e
                }
            }
            Foundation.libs.reveal = {
                name: "reveal",
                version: "5.5.2",
                locked: !1,
                settings: {
                    animation: "fadeAndPop",
                    animation_speed: 250,
                    close_on_background_click: !0,
                    close_on_esc: !0,
                    dismiss_modal_class: "close-reveal-modal",
                    multiple_opened: !1,
                    bg_class: "reveal-modal-bg",
                    root_element: "body",
                    open: function() {},
                    opened: function() {},
                    close: function() {},
                    closed: function() {},
                    on_ajax_error: t.noop,
                    bg: t(".reveal-modal-bg"),
                    css: {
                        open: {
                            opacity: 0,
                            visibility: "visible",
                            display: "block"
                        },
                        close: {
                            opacity: 1,
                            visibility: "hidden",
                            display: "none"
                        }
                    }
                },
                init: function(e, n, i) {
                    t.extend(!0, this.settings, n, i), this.bindings(n, i)
                },
                events: function() {
                    var t = this,
                        e = t.S;
                    return e(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function(n) {
                        if (n.preventDefault(), !t.locked) {
                            var i = e(this),
                                o = i.data(t.data_attr("reveal-ajax")),
                                r = i.data(t.data_attr("reveal-replace-content"));
                            if (t.locked = !0, "undefined" == typeof o) t.open.call(t, i);
                            else {
                                var s = o === !0 ? i.attr("href") : o;
                                t.open.call(t, i, {
                                    url: s
                                }, {
                                    replaceContentSel: r
                                })
                            }
                        }
                    }), e(n).on("click.fndtn.reveal", this.close_targets(), function(n) {
                        if (n.preventDefault(), !t.locked) {
                            var i = e("[" + t.attr_name() + "].open").data(t.attr_name(!0) + "-init") || t.settings,
                                o = e(n.target)[0] === e("." + i.bg_class)[0];
                            if (o) {
                                if (!i.close_on_background_click) return;
                                n.stopPropagation()
                            }
                            t.locked = !0, t.close.call(t, o ? e("[" + t.attr_name() + "].open:not(.toback)") : e(this).closest("[" + t.attr_name() + "]"))
                        }
                    }), e("[" + t.attr_name() + "]", this.scope).length > 0 ? e(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : e(this.scope).on("open.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.close_video), !0
                },
                key_up_on: function() {
                    var t = this;
                    return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(e) {
                        var n = t.S("[" + t.attr_name() + "].open"),
                            i = n.data(t.attr_name(!0) + "-init") || t.settings;
                        i && 27 === e.which && i.close_on_esc && !t.locked && t.close.call(t, n)
                    }), !0
                },
                key_up_off: function() {
                    return this.S("body").off("keyup.fndtn.reveal"), !0
                },
                open: function(n, i) {
                    var o, r = this;
                    n ? "undefined" != typeof n.selector ? o = r.S("#" + n.data(r.data_attr("reveal-id"))).first() : (o = r.S(this.scope), i = n) : o = r.S(this.scope);
                    var s = o.data(r.attr_name(!0) + "-init");
                    if (s = s || this.settings, o.hasClass("open") && n.attr("data-reveal-id") == o.attr("id")) return r.close(o);
                    if (!o.hasClass("open")) {
                        var a = r.S("[" + r.attr_name() + "].open");
                        if ("undefined" == typeof o.data("css-top") && o.data("css-top", parseInt(o.css("top"), 10)).data("offset", this.cache_offset(o)), o.attr("tabindex", "0").attr("aria-hidden", "false"), this.key_up_on(o), o.on("open.fndtn.reveal", function(t) {
                                "fndtn.reveal" !== t.namespace
                            }), o.on("open.fndtn.reveal").trigger("open.fndtn.reveal"), a.length < 1 && this.toggle_bg(o, !0), "string" == typeof i && (i = {
                                url: i
                            }), "undefined" != typeof i && i.url) {
                            var l = "undefined" != typeof i.success ? i.success : null;
                            t.extend(i, {
                                success: function(e, n, i) {
                                    if (t.isFunction(l)) {
                                        var c = l(e, n, i);
                                        "string" == typeof c && (e = c)
                                    }
                                    "undefined" != typeof options && "undefined" != typeof options.replaceContentSel ? o.find(options.replaceContentSel).html(e) : o.html(e), r.S(o).foundation("section", "reflow"), r.S(o).children().foundation(), a.length > 0 && (s.multiple_opened ? r.to_back(a) : r.hide(a, s.css.close)), r.show(o, s.css.open)
                                }
                            }), s.on_ajax_error !== t.noop && t.extend(i, {
                                error: s.on_ajax_error
                            }), t.ajax(i)
                        } else a.length > 0 && (s.multiple_opened ? r.to_back(a) : r.hide(a, s.css.close)), this.show(o, s.css.open)
                    }
                    r.S(e).trigger("resize")
                },
                close: function(e) {
                    var e = e && e.length ? e : this.S(this.scope),
                        n = this.S("[" + this.attr_name() + "].open"),
                        i = e.data(this.attr_name(!0) + "-init") || this.settings,
                        o = this;
                    n.length > 0 && (e.removeAttr("tabindex", "0").attr("aria-hidden", "true"), this.locked = !0, this.key_up_off(e), e.trigger("close.fndtn.reveal"), (i.multiple_opened && 1 === n.length || !i.multiple_opened || e.length > 1) && (o.toggle_bg(e, !1), o.to_front(e)), i.multiple_opened ? (o.hide(e, i.css.close, i), o.to_front(t(t.makeArray(n).reverse()[1]))) : o.hide(n, i.css.close, i))
                },
                close_targets: function() {
                    var t = "." + this.settings.dismiss_modal_class;
                    return this.settings.close_on_background_click ? t + ", ." + this.settings.bg_class : t
                },
                toggle_bg: function(e, n) {
                    0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = t("<div />", {
                        class: this.settings.bg_class
                    }).appendTo("body").hide());
                    var o = this.settings.bg.filter(":visible").length > 0;
                    n != o && ((n == i ? o : !n) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
                },
                show: function(n, i) {
                    if (i) {
                        var r = n.data(this.attr_name(!0) + "-init") || this.settings,
                            s = r.root_element,
                            a = this;
                        if (0 === n.parent(s).length) {
                            var l = n.wrap('<div style="display: none;" />').parent();
                            n.on("closed.fndtn.reveal.wrapped", function() {
                                n.detach().appendTo(l), n.unwrap().unbind("closed.fndtn.reveal.wrapped")
                            }), n.detach().appendTo(s)
                        }
                        var c = o(r.animation);
                        if (c.animate || (this.locked = !1), c.pop) {
                            i.top = t(e).scrollTop() - n.data("offset") + "px";
                            var u = {
                                top: t(e).scrollTop() + n.data("css-top") + "px",
                                opacity: 1
                            };
                            return setTimeout(function() {
                                return n.css(i).animate(u, r.animation_speed, "linear", function() {
                                    a.locked = !1, n.trigger("opened.fndtn.reveal")
                                }).addClass("open")
                            }, r.animation_speed / 2)
                        }
                        if (c.fade) {
                            i.top = t(e).scrollTop() + n.data("css-top") + "px";
                            var u = {
                                opacity: 1
                            };
                            return setTimeout(function() {
                                return n.css(i).animate(u, r.animation_speed, "linear", function() {
                                    a.locked = !1, n.trigger("opened.fndtn.reveal")
                                }).addClass("open")
                            }, r.animation_speed / 2)
                        }
                        return n.css(i).show().css({
                            opacity: 1
                        }).addClass("open").trigger("opened.fndtn.reveal")
                    }
                    var r = this.settings;
                    return o(r.animation).fade ? n.fadeIn(r.animation_speed / 2) : (this.locked = !1, n.show())
                },
                to_back: function(t) {
                    t.addClass("toback")
                },
                to_front: function(t) {
                    t.removeClass("toback")
                },
                hide: function(n, i) {
                    if (i) {
                        var r = n.data(this.attr_name(!0) + "-init"),
                            s = this;
                        r = r || this.settings;
                        var a = o(r.animation);
                        if (a.animate || (this.locked = !1), a.pop) {
                            var l = {
                                top: -t(e).scrollTop() - n.data("offset") + "px",
                                opacity: 0
                            };
                            return setTimeout(function() {
                                return n.animate(l, r.animation_speed, "linear", function() {
                                    s.locked = !1, n.css(i).trigger("closed.fndtn.reveal")
                                }).removeClass("open")
                            }, r.animation_speed / 2)
                        }
                        if (a.fade) {
                            var l = {
                                opacity: 0
                            };
                            return setTimeout(function() {
                                return n.animate(l, r.animation_speed, "linear", function() {
                                    s.locked = !1, n.css(i).trigger("closed.fndtn.reveal")
                                }).removeClass("open")
                            }, r.animation_speed / 2)
                        }
                        return n.hide().css(i).removeClass("open").trigger("closed.fndtn.reveal")
                    }
                    var r = this.settings;
                    return o(r.animation).fade ? n.fadeOut(r.animation_speed / 2) : n.hide()
                },
                close_video: function(e) {
                    var n = t(".flex-video", e.target),
                        i = t("iframe", n);
                    i.length > 0 && (i.attr("data-src", i[0].src), i.attr("src", i.attr("src")), n.hide())
                },
                open_video: function(e) {
                    var n = t(".flex-video", e.target),
                        o = n.find("iframe");
                    if (o.length > 0) {
                        var r = o.attr("data-src");
                        if ("string" == typeof r) o[0].src = o.attr("data-src");
                        else {
                            var s = o[0].src;
                            o[0].src = i, o[0].src = s
                        }
                        n.show()
                    }
                },
                data_attr: function(t) {
                    return this.namespace.length > 0 ? this.namespace + "-" + t : t
                },
                cache_offset: function(t) {
                    var e = t.show().height() + parseInt(t.css("top"), 10) + t.scrollY;
                    return t.hide(), e
                },
                off: function() {
                    t(this.scope).off(".fndtn.reveal")
                },
                reflow: function() {}
            }
        }(jQuery, window, window.document),
        function(t, e) {
            "use strict";
            Foundation.libs.interchange = {
                name: "interchange",
                version: "5.5.2",
                cache: {},
                images_loaded: !1,
                nodes_loaded: !1,
                settings: {
                    load_attr: "interchange",
                    named_queries: {
                        default: "only screen",
                        small: Foundation.media_queries.small,
                        "small-only": Foundation.media_queries["small-only"],
                        medium: Foundation.media_queries.medium,
                        "medium-only": Foundation.media_queries["medium-only"],
                        large: Foundation.media_queries.large,
                        "large-only": Foundation.media_queries["large-only"],
                        xlarge: Foundation.media_queries.xlarge,
                        "xlarge-only": Foundation.media_queries["xlarge-only"],
                        xxlarge: Foundation.media_queries.xxlarge,
                        landscape: "only screen and (orientation: landscape)",
                        portrait: "only screen and (orientation: portrait)",
                        retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
                    },
                    directives: {
                        replace: function(e, n, i) {
                            if (null !== e && /IMG/.test(e[0].nodeName)) {
                                var o = e[0].src;
                                if (new RegExp(n, "i").test(o)) return;
                                return e.attr("src", n), i(e[0].src)
                            }
                            var r = e.data(this.data_attr + "-last-path"),
                                s = this;
                            if (r != n) return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(n) ? (t(e).css("background-image", "url(" + n + ")"), e.data("interchange-last-path", n), i(n)) : t.get(n, function(t) {
                                e.html(t), e.data(s.data_attr + "-last-path", n), i()
                            })
                        }
                    }
                },
                init: function(e, n, i) {
                    Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), t.extend(!0, this.settings, n, i), this.bindings(n, i), this.reflow()
                },
                get_media_hash: function() {
                    var t = "";
                    for (var e in this.settings.named_queries) t += matchMedia(this.settings.named_queries[e]).matches.toString();
                    return t
                },
                events: function() {
                    var n, i = this;
                    return t(e).off(".interchange").on("resize.fndtn.interchange", i.throttle(function() {
                        var t = i.get_media_hash();
                        t !== n && i.resize(), n = t
                    }, 50)), this
                },
                resize: function() {
                    var e = this.cache;
                    if (!this.images_loaded || !this.nodes_loaded) return void setTimeout(t.proxy(this.resize, this), 50);
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            var i = this.results(n, e[n]);
                            i && this.settings.directives[i.scenario[1]].call(this, i.el, i.scenario[0], function(t) {
                                if (arguments[0] instanceof Array) var e = arguments[0];
                                else var e = Array.prototype.slice.call(arguments, 0);
                                return function() {
                                    t.el.trigger(t.scenario[1], e)
                                }
                            }(i))
                        }
                },
                results: function(t, e) {
                    var n = e.length;
                    if (n > 0)
                        for (var i = this.S("[" + this.add_namespace("data-uuid") + '="' + t + '"]'); n--;) {
                            var o, r = e[n][2];
                            if (o = matchMedia(this.settings.named_queries.hasOwnProperty(r) ? this.settings.named_queries[r] : r), o.matches) return {
                                el: i,
                                scenario: e[n]
                            }
                        }
                    return !1
                },
                load: function(t, e) {
                    return ("undefined" == typeof this["cached_" + t] || e) && this["update_" + t](), this["cached_" + t]
                },
                update_images: function() {
                    var t = this.S("img[" + this.data_attr + "]"),
                        e = t.length,
                        n = e,
                        i = 0,
                        o = this.data_attr;
                    for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === e; n--;) {
                        if (i++, t[n]) {
                            var r = t[n].getAttribute(o) || "";
                            r.length > 0 && this.cached_images.push(t[n])
                        }
                        i === e && (this.images_loaded = !0, this.enhance("images"))
                    }
                    return this
                },
                update_nodes: function() {
                    var t = this.S("[" + this.data_attr + "]").not("img"),
                        e = t.length,
                        n = e,
                        i = 0,
                        o = this.data_attr;
                    for (this.cached_nodes = [], this.nodes_loaded = 0 === e; n--;) {
                        i++;
                        var r = t[n].getAttribute(o) || "";
                        r.length > 0 && this.cached_nodes.push(t[n]), i === e && (this.nodes_loaded = !0, this.enhance("nodes"))
                    }
                    return this
                },
                enhance: function(n) {
                    for (var i = this["cached_" + n].length; i--;) this.object(t(this["cached_" + n][i]));
                    return t(e).trigger("resize.fndtn.interchange")
                },
                convert_directive: function(t) {
                    var e = this.trim(t);
                    return e.length > 0 ? e : "replace"
                },
                parse_scenario: function(t) {
                    var e = t[0].match(/(.+),\s*(\w+)\s*$/),
                        n = t[1].match(/(.*)\)/);
                    if (e) var i = e[1],
                        o = e[2];
                    else var r = t[0].split(/,\s*$/),
                        i = r[0],
                        o = "";
                    return [this.trim(i), this.convert_directive(o), this.trim(n[1])]
                },
                object: function(t) {
                    var e = this.parse_data_attr(t),
                        n = [],
                        i = e.length;
                    if (i > 0)
                        for (; i--;) {
                            var o = e[i].split(/,\s?\(/);
                            if (o.length > 1) {
                                var r = this.parse_scenario(o);
                                n.push(r)
                            }
                        }
                    return this.store(t, n)
                },
                store: function(t, e) {
                    var n = this.random_str(),
                        i = t.data(this.add_namespace("uuid", !0));
                    return this.cache[i] ? this.cache[i] : (t.attr(this.add_namespace("data-uuid"), n), this.cache[n] = e)
                },
                trim: function(e) {
                    return "string" == typeof e ? t.trim(e) : e
                },
                set_data_attr: function(t) {
                    return t ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
                },
                parse_data_attr: function(t) {
                    for (var e = t.attr(this.attr_name()).split(/\[(.*?)\]/), n = e.length, i = []; n--;) e[n].replace(/[\W\d]+/, "").length > 4 && i.push(e[n]);
                    return i
                },
                reflow: function() {
                    this.load("images", !0), this.load("nodes", !0)
                }
            }
        }(jQuery, window, window.document),
        function(t, e) {
            "use strict";
            Foundation.libs["magellan-expedition"] = {
                name: "magellan-expedition",
                version: "5.5.2",
                settings: {
                    active_class: "active",
                    threshold: 0,
                    destination_threshold: 20,
                    throttle_delay: 30,
                    fixed_top: 0,
                    offset_by_height: !0,
                    duration: 700,
                    easing: "swing"
                },
                init: function(t, e, n) {
                    Foundation.inherit(this, "throttle"), this.bindings(e, n)
                },
                events: function() {
                    var e = this,
                        n = e.S,
                        i = e.settings;
                    e.set_expedition_position(), n(e.scope).off(".magellan").on("click.fndtn.magellan", "[" + e.add_namespace("data-magellan-arrival") + "] a[href*=#]", function(n) {
                        var i = this.hostname === location.hostname || !this.hostname,
                            o = e.filterPathname(location.pathname) === e.filterPathname(this.pathname),
                            r = this.hash.replace(/(:|\.|\/)/g, "\\$1"),
                            s = this;
                        if (i && o && r) {
                            n.preventDefault();
                            var a = t(this).closest("[" + e.attr_name() + "]"),
                                l = a.data("magellan-expedition-init"),
                                c = this.hash.split("#").join(""),
                                u = t('a[name="' + c + '"]');
                            0 === u.length && (u = t("#" + c));
                            var d = u.offset().top - l.destination_threshold + 1;
                            l.offset_by_height && (d -= a.outerHeight()), t("html, body").stop().animate({
                                scrollTop: d
                            }, l.duration, l.easing, function() {
                                history.pushState ? history.pushState(null, null, s.pathname + "#" + c) : location.hash = s.pathname + "#" + c
                            })
                        }
                    }).on("scroll.fndtn.magellan", e.throttle(this.check_for_arrivals.bind(this), i.throttle_delay))
                },
                check_for_arrivals: function() {
                    var t = this;
                    t.update_arrivals(), t.update_expedition_positions()
                },
                set_expedition_position: function() {
                    var e = this;
                    t("[" + this.attr_name() + "=fixed]", e.scope).each(function() {
                        var n, i, o = t(this),
                            r = o.data("magellan-expedition-init"),
                            s = o.attr("styles");
                        o.attr("style", ""), n = o.offset().top + r.threshold, i = parseInt(o.data("magellan-fixed-top")), isNaN(i) || (e.settings.fixed_top = i), o.data(e.data_attr("magellan-top-offset"), n), o.attr("style", s)
                    })
                },
                update_expedition_positions: function() {
                    var n = this,
                        i = t(e).scrollTop();
                    t("[" + this.attr_name() + "=fixed]", n.scope).each(function() {
                        var e = t(this),
                            o = e.data("magellan-expedition-init"),
                            r = e.attr("style"),
                            s = e.data("magellan-top-offset");
                        if (i + n.settings.fixed_top >= s) {
                            var a = e.prev("[" + n.add_namespace("data-magellan-expedition-clone") + "]");
                            0 === a.length && (a = e.clone(), a.removeAttr(n.attr_name()), a.attr(n.add_namespace("data-magellan-expedition-clone"), ""), e.before(a)), e.css({
                                position: "fixed",
                                top: o.fixed_top
                            }).addClass("fixed")
                        } else e.prev("[" + n.add_namespace("data-magellan-expedition-clone") + "]").remove(), e.attr("style", r).css("position", "").css("top", "").removeClass("fixed")
                    })
                },
                update_arrivals: function() {
                    var n = this,
                        i = t(e).scrollTop();
                    t("[" + this.attr_name() + "]", n.scope).each(function() {
                        var e = t(this),
                            o = e.data(n.attr_name(!0) + "-init"),
                            r = n.offsets(e, i),
                            s = e.find("[" + n.add_namespace("data-magellan-arrival") + "]"),
                            a = !1;
                        r.each(function(t, i) {
                            if (i.viewport_offset >= i.top_offset) {
                                var r = e.find("[" + n.add_namespace("data-magellan-arrival") + "]");
                                return r.not(i.arrival).removeClass(o.active_class), i.arrival.addClass(o.active_class), a = !0, !0
                            }
                        }), a || s.removeClass(o.active_class)
                    })
                },
                offsets: function(e, n) {
                    var i = this,
                        o = e.data(i.attr_name(!0) + "-init"),
                        r = n;
                    return e.find("[" + i.add_namespace("data-magellan-arrival") + "]").map(function() {
                        var n = t(this).data(i.data_attr("magellan-arrival")),
                            s = t("[" + i.add_namespace("data-magellan-destination") + "=" + n + "]");
                        if (s.length > 0) {
                            var a = s.offset().top - o.destination_threshold;
                            return o.offset_by_height && (a -= e.outerHeight()), a = Math.floor(a), {
                                destination: s,
                                arrival: t(this),
                                top_offset: a,
                                viewport_offset: r
                            }
                        }
                    }).sort(function(t, e) {
                        return t.top_offset < e.top_offset ? -1 : t.top_offset > e.top_offset ? 1 : 0
                    })
                },
                data_attr: function(t) {
                    return this.namespace.length > 0 ? this.namespace + "-" + t : t
                },
                off: function() {
                    this.S(this.scope).off(".magellan"), this.S(e).off(".magellan")
                },
                filterPathname: function(t) {
                    return t = t || "", t.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
                },
                reflow: function() {
                    var e = this;
                    t("[" + e.add_namespace("data-magellan-expedition-clone") + "]", e.scope).remove()
                }
            }
        }(jQuery, window, window.document),
        function(t) {
            "use strict";
            Foundation.libs.accordion = {
                name: "accordion",
                version: "5.5.2",
                settings: {
                    content_class: "content",
                    active_class: "active",
                    multi_expand: !1,
                    toggleable: !0,
                    callback: function() {}
                },
                init: function(t, e, n) {
                    this.bindings(e, n)
                },
                events: function(e) {
                    var n = this,
                        i = this.S;
                    n.create(this.S(e)), i(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > dd > a, [" + this.attr_name() + "] > li > a", function(e) {
                        var o = i(this).closest("[" + n.attr_name() + "]"),
                            r = n.attr_name() + "=" + o.attr(n.attr_name()),
                            s = o.data(n.attr_name(!0) + "-init") || n.settings,
                            a = i("#" + this.href.split("#")[1]),
                            l = t("> dd, > li", o),
                            c = l.children("." + s.content_class),
                            u = c.filter("." + s.active_class);
                        return e.preventDefault(), o.attr(n.attr_name()) && (c = c.add("[" + r + "] dd > ." + s.content_class + ", [" + r + "] li > ." + s.content_class), l = l.add("[" + r + "] dd, [" + r + "] li")), s.toggleable && a.is(u) ? (a.parent("dd, li").toggleClass(s.active_class, !1), a.toggleClass(s.active_class, !1), i(this).attr("aria-expanded", function(t, e) {
                            return "true" === e ? "false" : "true"
                        }), s.callback(a), a.triggerHandler("toggled", [o]), void o.triggerHandler("toggled", [a])) : (s.multi_expand || (c.removeClass(s.active_class), l.removeClass(s.active_class), l.children("a").attr("aria-expanded", "false")), a.addClass(s.active_class).parent().addClass(s.active_class), s.callback(a), a.triggerHandler("toggled", [o]), o.triggerHandler("toggled", [a]), void i(this).attr("aria-expanded", "true"))
                    })
                },
                create: function(e) {
                    var n = this,
                        i = e,
                        o = t("> .accordion-navigation", i),
                        r = i.data(n.attr_name(!0) + "-init") || n.settings;
                    o.children("a").attr("aria-expanded", "false"), o.has("." + r.content_class + "." + r.active_class).children("a").attr("aria-expanded", "true"), r.multi_expand && e.attr("aria-multiselectable", "true")
                },
                off: function() {},
                reflow: function() {}
            }
        }(jQuery, window, window.document),
        function(t, e, n) {
            "use strict";
            Foundation.libs.topbar = {
                name: "topbar",
                version: "5.5.2",
                settings: {
                    index: 0,
                    start_offset: 0,
                    sticky_class: "sticky",
                    custom_back_text: !0,
                    back_text: "Back",
                    mobile_show_parent_link: !0,
                    is_hover: !0,
                    scrolltop: !0,
                    sticky_on: "all",
                    dropdown_autoclose: !0
                },
                init: function(e, n, i) {
                    Foundation.inherit(this, "add_custom_rule register_media throttle");
                    var o = this;
                    o.register_media("topbar", "foundation-mq-topbar"), this.bindings(n, i), o.S("[" + this.attr_name() + "]", this.scope).each(function() {
                        var e = t(this),
                            n = e.data(o.attr_name(!0) + "-init");
                        o.S("section, .top-bar-section", this), e.data("index", 0);
                        var i = e.parent();
                        i.hasClass("fixed") || o.is_sticky(e, i, n) ? (o.settings.sticky_class = n.sticky_class, o.settings.sticky_topbar = e, e.data("height", i.outerHeight()), e.data("stickyoffset", i.offset().top)) : e.data("height", e.outerHeight()), n.assembled || o.assemble(e), n.is_hover ? o.S(".has-dropdown", e).addClass("not-click") : o.S(".has-dropdown", e).removeClass("not-click"), o.add_custom_rule(".f-topbar-fixed { padding-top: " + e.data("height") + "px }"), i.hasClass("fixed") && o.S("body").addClass("f-topbar-fixed")
                    })
                },
                is_sticky: function(t, e, n) {
                    var i = e.hasClass(n.sticky_class),
                        o = matchMedia(Foundation.media_queries.small).matches,
                        r = matchMedia(Foundation.media_queries.medium).matches,
                        s = matchMedia(Foundation.media_queries.large).matches;
                    return !(!i || "all" !== n.sticky_on) || (!(!(i && this.small() && -1 !== n.sticky_on.indexOf("small") && o) || r || s) || (!(!(i && this.medium() && -1 !== n.sticky_on.indexOf("medium") && o && r) || s) || !!(i && this.large() && -1 !== n.sticky_on.indexOf("large") && o && r && s)))
                },
                toggle: function(n) {
                    var i, o = this;
                    i = n ? o.S(n).closest("[" + this.attr_name() + "]") : o.S("[" + this.attr_name() + "]");
                    var r = i.data(this.attr_name(!0) + "-init"),
                        s = o.S("section, .top-bar-section", i);
                    o.breakpoint() && (o.rtl ? (s.css({
                        right: "0%"
                    }), t(">.name", s).css({
                        right: "100%"
                    })) : (s.css({
                        left: "0%"
                    }), t(">.name", s).css({
                        left: "100%"
                    })), o.S("li.moved", s).removeClass("moved"), i.data("index", 0), i.toggleClass("expanded").css("height", "")), r.scrolltop ? i.hasClass("expanded") ? i.parent().hasClass("fixed") && (r.scrolltop ? (i.parent().removeClass("fixed"), i.addClass("fixed"), o.S("body").removeClass("f-topbar-fixed"), e.scrollTo(0, 0)) : i.parent().removeClass("expanded")) : i.hasClass("fixed") && (i.parent().addClass("fixed"), i.removeClass("fixed"), o.S("body").addClass("f-topbar-fixed")) : (o.is_sticky(i, i.parent(), r) && i.parent().addClass("fixed"), i.parent().hasClass("fixed") && (i.hasClass("expanded") ? (i.addClass("fixed"), i.parent().addClass("expanded"), o.S("body").addClass("f-topbar-fixed")) : (i.removeClass("fixed"), i.parent().removeClass("expanded"), o.update_sticky_positioning())))
                },
                timer: null,
                events: function() {
                    var n = this,
                        i = this.S;
                    i(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function(t) {
                        t.preventDefault(), n.toggle(this)
                    }).on("click.fndtn.topbar contextmenu.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function() {
                        var e = t(this).closest("li"),
                            i = e.closest("[" + n.attr_name() + "]"),
                            o = i.data(n.attr_name(!0) + "-init");
                        if (o.dropdown_autoclose && o.is_hover) {
                            var r = t(this).closest(".hover");
                            r.removeClass("hover")
                        }!n.breakpoint() || e.hasClass("back") || e.hasClass("has-dropdown") || n.toggle()
                    }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function(e) {
                        var o = i(this),
                            r = i(e.target),
                            s = o.closest("[" + n.attr_name() + "]"),
                            a = s.data(n.attr_name(!0) + "-init");
                        return r.data("revealId") ? void n.toggle() : void(n.breakpoint() || (!a.is_hover || Modernizr.touch) && (e.stopImmediatePropagation(), o.hasClass("hover") ? (o.removeClass("hover").find("li").removeClass("hover"), o.parents("li.hover").removeClass("hover")) : (o.addClass("hover"), t(o).siblings().removeClass("hover"), "A" === r[0].nodeName && r.parent().hasClass("has-dropdown") && e.preventDefault())))
                    }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function(t) {
                        if (n.breakpoint()) {
                            t.preventDefault();
                            var e = i(this),
                                o = e.closest("[" + n.attr_name() + "]"),
                                r = o.find("section, .top-bar-section"),
                                s = (e.next(".dropdown").outerHeight(), e.closest("li"));
                            o.data("index", o.data("index") + 1), s.addClass("moved"), n.rtl ? (r.css({
                                right: -(100 * o.data("index")) + "%"
                            }), r.find(">.name").css({
                                right: 100 * o.data("index") + "%"
                            })) : (r.css({
                                left: -(100 * o.data("index")) + "%"
                            }), r.find(">.name").css({
                                left: 100 * o.data("index") + "%"
                            })), o.css("height", e.siblings("ul").outerHeight(!0) + o.data("height"))
                        }
                    }), i(e).off(".topbar").on("resize.fndtn.topbar", n.throttle(function() {
                        n.resize.call(n)
                    }, 50)).trigger("resize.fndtn.topbar").load(function() {
                        i(this).trigger("resize.fndtn.topbar")
                    }), i("body").off(".topbar").on("click.fndtn.topbar", function(t) {
                        var e = i(t.target).closest("li").closest("li.hover");
                        e.length > 0 || i("[" + n.attr_name() + "] li.hover").removeClass("hover")
                    }), i(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function(t) {
                        t.preventDefault();
                        var e = i(this),
                            o = e.closest("[" + n.attr_name() + "]"),
                            r = o.find("section, .top-bar-section"),
                            s = (o.data(n.attr_name(!0) + "-init"), e.closest("li.moved")),
                            a = s.parent();
                        o.data("index", o.data("index") - 1), n.rtl ? (r.css({
                            right: -(100 * o.data("index")) + "%"
                        }), r.find(">.name").css({
                            right: 100 * o.data("index") + "%"
                        })) : (r.css({
                            left: -(100 * o.data("index")) + "%"
                        }), r.find(">.name").css({
                            left: 100 * o.data("index") + "%"
                        })), 0 === o.data("index") ? o.css("height", "") : o.css("height", a.outerHeight(!0) + o.data("height")), setTimeout(function() {
                            s.removeClass("moved")
                        }, 300)
                    }), i(this.scope).find(".dropdown a").focus(function() {
                        t(this).parents(".has-dropdown").addClass("hover")
                    }).blur(function() {
                        t(this).parents(".has-dropdown").removeClass("hover")
                    })
                },
                resize: function() {
                    var t = this;
                    t.S("[" + this.attr_name() + "]").each(function() {
                        var e, i = t.S(this),
                            o = i.data(t.attr_name(!0) + "-init"),
                            r = i.parent("." + t.settings.sticky_class);
                        if (!t.breakpoint()) {
                            var s = i.hasClass("expanded");
                            i.css("height", "").removeClass("expanded").find("li").removeClass("hover"), s && t.toggle(i)
                        }
                        t.is_sticky(i, r, o) && (r.hasClass("fixed") ? (r.removeClass("fixed"), e = r.offset().top, t.S(n.body).hasClass("f-topbar-fixed") && (e -= i.data("height")), i.data("stickyoffset", e), r.addClass("fixed")) : (e = r.offset().top, i.data("stickyoffset", e)))
                    })
                },
                breakpoint: function() {
                    return !matchMedia(Foundation.media_queries.topbar).matches
                },
                small: function() {
                    return matchMedia(Foundation.media_queries.small).matches
                },
                medium: function() {
                    return matchMedia(Foundation.media_queries.medium).matches
                },
                large: function() {
                    return matchMedia(Foundation.media_queries.large).matches
                },
                assemble: function(e) {
                    var n = this,
                        i = e.data(this.attr_name(!0) + "-init"),
                        o = n.S("section, .top-bar-section", e);
                    o.detach(), n.S(".has-dropdown>a", o).each(function() {
                        var e, o = n.S(this),
                            r = o.siblings(".dropdown"),
                            s = o.attr("href");
                        r.find(".title.back").length || (e = t(1 == i.mobile_show_parent_link && s ? '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-medium-up"><a class="parent-link js-generated" href="' + s + '">' + o.html() + "</a></li>" : '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'), t("h5>a", e).html(1 == i.custom_back_text ? i.back_text : "&laquo; " + o.html()), r.prepend(e))
                    }), o.appendTo(e), this.sticky(), this.assembled(e)
                },
                assembled: function(e) {
                    e.data(this.attr_name(!0), t.extend({}, e.data(this.attr_name(!0)), {
                        assembled: !0
                    }))
                },
                height: function(e) {
                    var n = 0,
                        i = this;
                    return t("> li", e).each(function() {
                        n += i.S(this).outerHeight(!0)
                    }), n
                },
                sticky: function() {
                    var t = this;
                    this.S(e).on("scroll", function() {
                        t.update_sticky_positioning()
                    })
                },
                update_sticky_positioning: function() {
                    var t = "." + this.settings.sticky_class,
                        n = this.S(e),
                        i = this;
                    if (i.settings.sticky_topbar && i.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                        var o = this.settings.sticky_topbar.data("stickyoffset") + this.settings.start_offset;
                        i.S(t).hasClass("expanded") || (n.scrollTop() > o ? i.S(t).hasClass("fixed") || (i.S(t).addClass("fixed"), i.S("body").addClass("f-topbar-fixed")) : n.scrollTop() <= o && i.S(t).hasClass("fixed") && (i.S(t).removeClass("fixed"), i.S("body").removeClass("f-topbar-fixed")))
                    }
                },
                off: function() {
                    this.S(this.scope).off(".fndtn.topbar"), this.S(e).off(".fndtn.topbar")
                },
                reflow: function() {}
            }
        }(jQuery, window, window.document),
        function(t, e, n, i) {
            "use strict";
            Foundation.libs.tab = {
                name: "tab",
                version: "5.5.2",
                settings: {
                    active_class: "active",
                    callback: function() {},
                    deep_linking: !1,
                    scroll_to_content: !0,
                    is_hover: !1
                },
                default_tab_hashes: [],
                init: function(t, n, i) {
                    var o = this,
                        r = this.S;
                    r("[" + this.attr_name() + "] > .active > a", this.scope).each(function() {
                        o.default_tab_hashes.push(this.hash)
                    }), o.entry_location = e.location.href, this.bindings(n, i), this.handle_location_hash_change()
                },
                events: function() {
                    var t = this,
                        n = this.S,
                        i = function(e, i) {
                            var o = n(i).closest("[" + t.attr_name() + "]").data(t.attr_name(!0) + "-init");
                            (!o.is_hover || Modernizr.touch) && (e.preventDefault(), e.stopPropagation(), t.toggle_active_tab(n(i).parent()));
                        };
                    n(this.scope).off(".tab").on("keydown.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(t) {
                        var e = this,
                            n = t.keyCode || t.which;
                        9 == n && (t.preventDefault(), i(t, e))
                    }).on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(t) {
                        var e = this;
                        i(t, e)
                    }).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > * > a", function() {
                        var e = n(this).closest("[" + t.attr_name() + "]").data(t.attr_name(!0) + "-init");
                        e.is_hover && t.toggle_active_tab(n(this).parent())
                    }), n(e).on("hashchange.fndtn.tab", function(e) {
                        e.preventDefault(), t.handle_location_hash_change()
                    })
                },
                handle_location_hash_change: function() {
                    var e = this,
                        n = this.S;
                    n("[" + this.attr_name() + "]", this.scope).each(function() {
                        var o = n(this).data(e.attr_name(!0) + "-init");
                        if (o.deep_linking) {
                            var r;
                            if (r = o.scroll_to_content ? e.scope.location.hash : e.scope.location.hash.replace("fndtn-", ""), "" != r) {
                                var s = n(r);
                                if (s.hasClass("content") && s.parent().hasClass("tabs-content")) e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=" + r + "]").parent());
                                else {
                                    var a = s.closest(".content").attr("id");
                                    a != i && e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=#" + a + "]").parent(), r)
                                }
                            } else
                                for (var l = 0; l < e.default_tab_hashes.length; l++) e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=" + e.default_tab_hashes[l] + "]").parent())
                        }
                    })
                },
                toggle_active_tab: function(o, r) {
                    var s = this,
                        a = s.S,
                        l = o.closest("[" + this.attr_name() + "]"),
                        c = o.find("a"),
                        u = o.children("a").first(),
                        d = "#" + u.attr("href").split("#")[1],
                        h = a(d),
                        p = o.siblings(),
                        f = l.data(this.attr_name(!0) + "-init"),
                        g = function(e) {
                            var i, o = t(this),
                                r = t(this).parents("li").prev().children('[role="tab"]'),
                                s = t(this).parents("li").next().children('[role="tab"]');
                            switch (e.keyCode) {
                                case 37:
                                    i = r;
                                    break;
                                case 39:
                                    i = s;
                                    break;
                                default:
                                    i = !1
                            }
                            i.length && (o.attr({
                                tabindex: "-1",
                                "aria-selected": null
                            }), i.attr({
                                tabindex: "0",
                                "aria-selected": !0
                            }).focus()), t('[role="tabpanel"]').attr("aria-hidden", "true"), t("#" + t(n.activeElement).attr("href").substring(1)).attr("aria-hidden", null)
                        },
                        v = function(t) {
                            var n = e.location.href === s.entry_location,
                                i = f.scroll_to_content ? s.default_tab_hashes[0] : n ? e.location.hash : "fndtn-" + s.default_tab_hashes[0].replace("#", "");
                            n && t === i || (e.location.hash = t)
                        };
                    u.data("tab-content") && (d = "#" + u.data("tab-content").split("#")[1], h = a(d)), f.deep_linking && (f.scroll_to_content ? (v(r || d), r == i || r == d ? o.parent()[0].scrollIntoView() : a(d)[0].scrollIntoView()) : v(r != i ? "fndtn-" + r.replace("#", "") : "fndtn-" + d.replace("#", ""))), o.addClass(f.active_class).triggerHandler("opened"), c.attr({
                        "aria-selected": "true",
                        tabindex: 0
                    }), p.removeClass(f.active_class), p.find("a").attr({
                        "aria-selected": "false",
                        tabindex: -1
                    }), h.siblings().removeClass(f.active_class).attr({
                        "aria-hidden": "true",
                        tabindex: -1
                    }), h.addClass(f.active_class).attr("aria-hidden", "false").removeAttr("tabindex"), f.callback(o), h.triggerHandler("toggled", [h]), l.triggerHandler("toggled", [o]), c.off("keydown").on("keydown", g)
                },
                data_attr: function(t) {
                    return this.namespace.length > 0 ? this.namespace + "-" + t : t
                },
                off: function() {},
                reflow: function() {}
            }
        }(jQuery, window, window.document),
        function(t, e, n) {
            "use strict";
            Foundation.libs.abide = {
                name: "abide",
                version: "5.5.2",
                settings: {
                    live_validate: !0,
                    validate_on_blur: !0,
                    focus_on_invalid: !0,
                    error_labels: !0,
                    error_class: "error",
                    timeout: 1e3,
                    patterns: {
                        alpha: /^[a-zA-Z]+$/,
                        alpha_numeric: /^[a-zA-Z0-9]+$/,
                        integer: /^[-+]?\d+$/,
                        number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
                        card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                        cvv: /^([0-9]){3,4}$/,
                        email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
                        url: /^(https?|ftp|file|ssh):\/\/([-;:&=\+\$,\w]+@{1})?([-A-Za-z0-9\.]+)+:?(\d+)?((\/[-\+~%\/\.\w]+)?\??([-\+=&;%@\.\w]+)?#?([\w]+)?)?/,
                        domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
                        datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                        date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                        time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                        dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                        month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
                        day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
                        color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
                    },
                    validators: {
                        equalTo: function(t) {
                            var e = n.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,
                                i = t.value,
                                o = e === i;
                            return o
                        }
                    }
                },
                timer: null,
                init: function(t, e, n) {
                    this.bindings(e, n)
                },
                events: function(e) {
                    function n(t, e) {
                        clearTimeout(i.timer), i.timer = setTimeout(function() {
                            i.validate([t], e)
                        }.bind(t), r.timeout)
                    }
                    var i = this,
                        o = i.S(e).attr("novalidate", "novalidate"),
                        r = o.data(this.attr_name(!0) + "-init") || {};
                    this.invalid_attr = this.add_namespace("data-invalid"), o.off(".abide").on("submit.fndtn.abide", function(t) {
                        var e = /ajax/i.test(i.S(this).attr(i.attr_name()));
                        return i.validate(i.S(this).find("input, textarea, select").not(":hidden, [data-abide-ignore]").get(), t, e)
                    }).on("validate.fndtn.abide", function(t) {
                        "manual" === r.validate_on && i.validate([t.target], t)
                    }).on("reset", function(e) {
                        return i.reset(t(this), e)
                    }).find("input, textarea, select").not(":hidden, [data-abide-ignore]").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function(t) {
                        r.validate_on_blur && r.validate_on_blur === !0 && n(this, t), "change" === r.validate_on && n(this, t)
                    }).on("keydown.fndtn.abide", function(t) {
                        r.live_validate && r.live_validate === !0 && 9 != t.which && n(this, t), "tab" === r.validate_on && 9 === t.which ? n(this, t) : "change" === r.validate_on && n(this, t)
                    }).on("focus", function(e) {
                        navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i) && t("html, body").animate({
                            scrollTop: t(e.target).offset().top
                        }, 100)
                    })
                },
                reset: function(e) {
                    var n = this;
                    e.removeAttr(n.invalid_attr), t("[" + n.invalid_attr + "]", e).removeAttr(n.invalid_attr), t("." + n.settings.error_class, e).not("small").removeClass(n.settings.error_class), t(":input", e).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr(n.invalid_attr)
                },
                validate: function(t, e, n) {
                    for (var i = this.parse_patterns(t), o = i.length, r = this.S(t[0]).closest("form"), s = /submit/.test(e.type), a = 0; o > a; a++)
                        if (!i[a] && (s || n)) return this.settings.focus_on_invalid && t[a].focus(), r.trigger("invalid.fndtn.abide"), this.S(t[a]).closest("form").attr(this.invalid_attr, ""), !1;
                    return (s || n) && r.trigger("valid.fndtn.abide"), r.removeAttr(this.invalid_attr), !n
                },
                parse_patterns: function(t) {
                    for (var e = t.length, n = []; e--;) n.push(this.pattern(t[e]));
                    return this.check_validation_and_apply_styles(n)
                },
                pattern: function(t) {
                    var e = t.getAttribute("type"),
                        n = "string" == typeof t.getAttribute("required"),
                        i = t.getAttribute("pattern") || "";
                    return this.settings.patterns.hasOwnProperty(i) && i.length > 0 ? [t, this.settings.patterns[i], n] : i.length > 0 ? [t, new RegExp(i), n] : this.settings.patterns.hasOwnProperty(e) ? [t, this.settings.patterns[e], n] : (i = /.*/, [t, i, n])
                },
                check_validation_and_apply_styles: function(e) {
                    var n = e.length,
                        i = [],
                        o = this.S(e[0][0]).closest("[data-" + this.attr_name(!0) + "]");
                    for (o.data(this.attr_name(!0) + "-init") || {}; n--;) {
                        var r, s, a = e[n][0],
                            l = e[n][2],
                            c = a.value.trim(),
                            u = this.S(a).parent(),
                            d = a.getAttribute(this.add_namespace("data-abide-validator")),
                            h = "radio" === a.type,
                            p = "checkbox" === a.type,
                            f = this.S('label[for="' + a.getAttribute("id") + '"]'),
                            g = !l || a.value.length > 0,
                            v = [];
                        if (a.getAttribute(this.add_namespace("data-equalto")) && (d = "equalTo"), r = u.is("label") ? u.parent() : u, h && l) v.push(this.valid_radio(a, l));
                        else if (p && l) v.push(this.valid_checkbox(a, l));
                        else if (d) {
                            for (var m = d.split(" "), b = !0, y = !0, _ = 0; _ < m.length; _++) s = this.settings.validators[m[_]].apply(this, [a, l, r]), v.push(s), y = s && b, b = s;
                            y ? (this.S(a).removeAttr(this.invalid_attr), r.removeClass("error"), f.length > 0 && this.settings.error_labels && f.removeClass(this.settings.error_class).removeAttr("role"), t(a).triggerHandler("valid")) : (this.S(a).attr(this.invalid_attr, ""), r.addClass("error"), f.length > 0 && this.settings.error_labels && f.addClass(this.settings.error_class).attr("role", "alert"), t(a).triggerHandler("invalid"))
                        } else if (v.push(!!(e[n][1].test(c) && g || !l && a.value.length < 1 || t(a).attr("disabled"))), v = [v.every(function(t) {
                                return t
                            })], v[0]) this.S(a).removeAttr(this.invalid_attr), a.setAttribute("aria-invalid", "false"), a.removeAttribute("aria-describedby"), r.removeClass(this.settings.error_class), f.length > 0 && this.settings.error_labels && f.removeClass(this.settings.error_class).removeAttr("role"), t(a).triggerHandler("valid");
                        else {
                            this.S(a).attr(this.invalid_attr, ""), a.setAttribute("aria-invalid", "true");
                            var w = r.find("small." + this.settings.error_class, "span." + this.settings.error_class),
                                x = w.length > 0 ? w[0].id : "";
                            x.length > 0 && a.setAttribute("aria-describedby", x), r.addClass(this.settings.error_class), f.length > 0 && this.settings.error_labels && f.addClass(this.settings.error_class).attr("role", "alert"), t(a).triggerHandler("invalid")
                        }
                        i = i.concat(v)
                    }
                    return i
                },
                valid_checkbox: function(e, n) {
                    var e = this.S(e),
                        i = e.is(":checked") || !n || e.get(0).getAttribute("disabled");
                    return i ? (e.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class), t(e).triggerHandler("valid")) : (e.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), t(e).triggerHandler("invalid")), i
                },
                valid_radio: function(e) {
                    for (var n = e.getAttribute("name"), i = this.S(e).closest("[data-" + this.attr_name(!0) + "]").find("[name='" + n + "']"), o = i.length, r = !1, s = !1, a = 0; o > a; a++) i[a].getAttribute("disabled") ? (s = !0, r = !0) : i[a].checked ? r = !0 : s && (r = !1);
                    for (var a = 0; o > a; a++) r ? (this.S(i[a]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class), t(i[a]).triggerHandler("valid")) : (this.S(i[a]).attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), t(i[a]).triggerHandler("invalid"));
                    return r
                },
                valid_equal: function(t, e, i) {
                    var o = n.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,
                        r = t.value,
                        s = o === r;
                    return s ? (this.S(t).removeAttr(this.invalid_attr), i.removeClass(this.settings.error_class), label.length > 0 && settings.error_labels && label.removeClass(this.settings.error_class)) : (this.S(t).attr(this.invalid_attr, ""), i.addClass(this.settings.error_class), label.length > 0 && settings.error_labels && label.addClass(this.settings.error_class)), s
                },
                valid_oneof: function(t, e, n, i) {
                    var t = this.S(t),
                        o = this.S("[" + this.add_namespace("data-oneof") + "]"),
                        r = o.filter(":checked").length > 0;
                    if (r ? t.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : t.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), !i) {
                        var s = this;
                        o.each(function() {
                            s.valid_oneof.call(s, this, null, null, !0)
                        })
                    }
                    return r
                },
                reflow: function() {
                    var t = this,
                        e = t.S("[" + this.attr_name() + "]").attr("novalidate", "novalidate");
                    t.S(e).each(function(e, n) {
                        t.events(n)
                    })
                }
            }
        }(jQuery, window, window.document),
        function(t, e) {
            "use strict";
            Foundation.libs.tooltip = {
                name: "tooltip",
                version: "5.5.2",
                settings: {
                    additional_inheritable_classes: [],
                    tooltip_class: ".tooltip",
                    append_to: "body",
                    touch_close_text: "Tap To Close",
                    disable_for_touch: !1,
                    hover_delay: 200,
                    show_on: "all",
                    tip_template: function(t, e) {
                        return '<span data-selector="' + t + '" id="' + t + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '" role="tooltip">' + e + '<span class="nub"></span></span>'
                    }
                },
                cache: {},
                init: function(t, e, n) {
                    Foundation.inherit(this, "random_str"), this.bindings(e, n)
                },
                should_show: function(e) {
                    var n = t.extend({}, this.settings, this.data_options(e));
                    return "all" === n.show_on || (!(!this.small() || "small" !== n.show_on) || (!(!this.medium() || "medium" !== n.show_on) || !(!this.large() || "large" !== n.show_on)))
                },
                medium: function() {
                    return matchMedia(Foundation.media_queries.medium).matches
                },
                large: function() {
                    return matchMedia(Foundation.media_queries.large).matches
                },
                events: function(e) {
                    function n(t, e, n) {
                        t.timer || (n ? (t.timer = null, o.showTip(e)) : t.timer = setTimeout(function() {
                            t.timer = null, o.showTip(e)
                        }.bind(t), o.settings.hover_delay))
                    }

                    function i(t, e) {
                        t.timer && (clearTimeout(t.timer), t.timer = null), o.hide(e)
                    }
                    var o = this,
                        r = o.S;
                    o.create(this.S(e)), t(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function(e) {
                        var s = r(this),
                            a = t.extend({}, o.settings, o.data_options(s)),
                            l = !1;
                        if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && r(e.target).is("a")) return !1;
                        if (/mouse/i.test(e.type) && o.ie_touch(e)) return !1;
                        if (s.hasClass("open")) Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && e.preventDefault(), o.hide(s);
                        else {
                            if (a.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) return;
                            if (!a.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && (e.preventDefault(), r(a.tooltip_class + ".open").hide(), l = !0, t(".open[" + o.attr_name() + "]").length > 0)) {
                                var c = r(t(".open[" + o.attr_name() + "]")[0]);
                                o.hide(c)
                            }
                            /enter|over/i.test(e.type) ? n(this, s) : "mouseout" === e.type || "mouseleave" === e.type ? i(this, s) : n(this, s, !0)
                        }
                    }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function(e) {
                        return (!/mouse/i.test(e.type) || !o.ie_touch(e)) && void(("touch" != t(this).data("tooltip-open-event-type") || "mouseleave" != e.type) && ("mouse" == t(this).data("tooltip-open-event-type") && /MSPointerDown|touchstart/i.test(e.type) ? o.convert_to_touch(t(this)) : i(this, t(this))))
                    }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function() {
                        i(this, r(this))
                    })
                },
                ie_touch: function() {
                    return !1
                },
                showTip: function(t) {
                    var e = this.getTip(t);
                    return this.should_show(t, e) ? this.show(t) : void 0
                },
                getTip: function(e) {
                    var n = this.selector(e),
                        i = t.extend({}, this.settings, this.data_options(e)),
                        o = null;
                    return n && (o = this.S('span[data-selector="' + n + '"]' + i.tooltip_class)), "object" == typeof o && o
                },
                selector: function(t) {
                    var e = t.attr(this.attr_name()) || t.attr("data-selector");
                    return "string" != typeof e && (e = this.random_str(6), t.attr("data-selector", e).attr("aria-describedby", e)), e
                },
                create: function(n) {
                    var i = this,
                        o = t.extend({}, this.settings, this.data_options(n)),
                        r = this.settings.tip_template;
                    "string" == typeof o.tip_template && e.hasOwnProperty(o.tip_template) && (r = e[o.tip_template]);
                    var s = t(r(this.selector(n), t("<div></div>").html(n.attr("title")).html())),
                        a = this.inheritable_classes(n);
                    s.addClass(a).appendTo(o.append_to), Modernizr.touch && (s.append('<span class="tap-to-close">' + o.touch_close_text + "</span>"), s.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function() {
                        i.hide(n)
                    })), n.removeAttr("title").attr("title", "")
                },
                reposition: function(e, n, i) {
                    var o, r, s, a, l;
                    if (n.css("visibility", "hidden").show(), o = e.data("width"), r = n.children(".nub"), s = r.outerHeight(), a = r.outerHeight(), n.css(this.small() ? {
                            width: "100%"
                        } : {
                            width: o ? o : "auto"
                        }), l = function(t, e, n, i, o) {
                            return t.css({
                                top: e ? e : "auto",
                                bottom: i ? i : "auto",
                                left: o ? o : "auto",
                                right: n ? n : "auto"
                            }).end()
                        }, l(n, e.offset().top + e.outerHeight() + 10, "auto", "auto", e.offset().left), this.small()) l(n, e.offset().top + e.outerHeight() + 10, "auto", "auto", 12.5, t(this.scope).width()), n.addClass("tip-override"), l(r, -s, "auto", "auto", e.offset().left);
                    else {
                        var c = e.offset().left;
                        Foundation.rtl && (r.addClass("rtl"), c = e.offset().left + e.outerWidth() - n.outerWidth()), l(n, e.offset().top + e.outerHeight() + 10, "auto", "auto", c), r.attr("style") && r.removeAttr("style"), n.removeClass("tip-override"), i && i.indexOf("tip-top") > -1 ? (Foundation.rtl && r.addClass("rtl"), l(n, e.offset().top - n.outerHeight(), "auto", "auto", c).removeClass("tip-override")) : i && i.indexOf("tip-left") > -1 ? (l(n, e.offset().top + e.outerHeight() / 2 - n.outerHeight() / 2, "auto", "auto", e.offset().left - n.outerWidth() - s).removeClass("tip-override"), r.removeClass("rtl")) : i && i.indexOf("tip-right") > -1 && (l(n, e.offset().top + e.outerHeight() / 2 - n.outerHeight() / 2, "auto", "auto", e.offset().left + e.outerWidth() + s).removeClass("tip-override"), r.removeClass("rtl"))
                    }
                    n.css("visibility", "visible").hide()
                },
                small: function() {
                    return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
                },
                inheritable_classes: function(e) {
                    var n = t.extend({}, this.settings, this.data_options(e)),
                        i = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(n.additional_inheritable_classes),
                        o = e.attr("class"),
                        r = o ? t.map(o.split(" "), function(e) {
                            return -1 !== t.inArray(e, i) ? e : void 0
                        }).join(" ") : "";
                    return t.trim(r)
                },
                convert_to_touch: function(e) {
                    var n = this,
                        i = n.getTip(e),
                        o = t.extend({}, n.settings, n.data_options(e));
                    0 === i.find(".tap-to-close").length && (i.append('<span class="tap-to-close">' + o.touch_close_text + "</span>"), i.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function() {
                        n.hide(e)
                    })), e.data("tooltip-open-event-type", "touch")
                },
                show: function(t) {
                    var e = this.getTip(t);
                    "touch" == t.data("tooltip-open-event-type") && this.convert_to_touch(t), this.reposition(t, e, t.attr("class")), t.addClass("open"), e.fadeIn(150)
                },
                hide: function(t) {
                    var e = this.getTip(t);
                    e.fadeOut(150, function() {
                        e.find(".tap-to-close").remove(), e.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"), t.removeClass("open")
                    })
                },
                off: function() {
                    var e = this;
                    this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function(n) {
                        t("[" + e.attr_name() + "]").eq(n).attr("title", t(this).text())
                    }).remove()
                },
                reflow: function() {}
            }
        }(jQuery, window, window.document)
    },
    136: function(t, e, n) {
        var i;
        ! function() {
            "use strict";

            function o(t, e) {
                function n(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
                var i;
                if (e = e || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = e.touchBoundary || 10, this.layer = t, this.tapDelay = e.tapDelay || 200, this.tapTimeout = e.tapTimeout || 700, !o.notNeeded(t)) {
                    for (var r = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, l = 0, c = r.length; c > l; l++) a[r[l]] = n(a[r[l]], a);
                    s && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, i) {
                        var o = Node.prototype.removeEventListener;
                        "click" === e ? o.call(t, e, n.hijacked || n, i) : o.call(t, e, n, i)
                    }, t.addEventListener = function(e, n, i) {
                        var o = Node.prototype.addEventListener;
                        "click" === e ? o.call(t, e, n.hijacked || (n.hijacked = function(t) {
                            t.propagationStopped || n(t)
                        }), i) : o.call(t, e, n, i)
                    }), "function" == typeof t.onclick && (i = t.onclick, t.addEventListener("click", function(t) {
                        i(t)
                    }, !1), t.onclick = null)
                }
            }
            var r = navigator.userAgent.indexOf("Windows Phone") >= 0,
                s = navigator.userAgent.indexOf("Android") > 0 && !r,
                a = /iP(ad|hone|od)/.test(navigator.userAgent) && !r,
                l = a && /OS 4_\d(_\d)?/.test(navigator.userAgent),
                c = a && /OS [6-7]_\d/.test(navigator.userAgent),
                u = navigator.userAgent.indexOf("BB10") > 0;
            o.prototype.needsClick = function(t) {
                switch (t.nodeName.toLowerCase()) {
                    case "button":
                    case "select":
                    case "textarea":
                        if (t.disabled) return !0;
                        break;
                    case "input":
                        if (a && "file" === t.type || t.disabled) return !0;
                        break;
                    case "label":
                    case "iframe":
                    case "video":
                        return !0
                }
                return /\bneedsclick\b/.test(t.className)
            }, o.prototype.needsFocus = function(t) {
                switch (t.nodeName.toLowerCase()) {
                    case "textarea":
                        return !0;
                    case "select":
                        return !s;
                    case "input":
                        switch (t.type) {
                            case "button":
                            case "checkbox":
                            case "file":
                            case "image":
                            case "radio":
                            case "submit":
                                return !1
                        }
                        return !t.disabled && !t.readOnly;
                    default:
                        return /\bneedsfocus\b/.test(t.className)
                }
            }, o.prototype.sendClick = function(t, e) {
                var n, i;
                document.activeElement && document.activeElement !== t && document.activeElement.blur(), i = e.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n)
            }, o.prototype.determineEventType = function(t) {
                return s && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
            }, o.prototype.focus = function(t) {
                var e;
                a && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
            }, o.prototype.updateScrollParent = function(t) {
                var e, n;
                if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
                    n = t;
                    do {
                        if (n.scrollHeight > n.offsetHeight) {
                            e = n, t.fastClickScrollParent = n;
                            break
                        }
                        n = n.parentElement
                    } while (n)
                }
                e && (e.fastClickLastScrollTop = e.scrollTop)
            }, o.prototype.getTargetElementFromEventTarget = function(t) {
                return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
            }, o.prototype.onTouchStart = function(t) {
                var e, n, i;
                if (t.targetTouches.length > 1) return !0;
                if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], a) {
                    if (i = window.getSelection(), i.rangeCount && !i.isCollapsed) return !0;
                    if (!l) {
                        if (n.identifier && n.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                        this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e)
                    }
                }
                return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
            }, o.prototype.touchHasMoved = function(t) {
                var e = t.changedTouches[0],
                    n = this.touchBoundary;
                return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n
            }, o.prototype.onTouchMove = function(t) {
                return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
            }, o.prototype.findControl = function(t) {
                return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
            }, o.prototype.onTouchEnd = function(t) {
                var e, n, i, o, r, u = this.targetElement;
                if (!this.trackingClick) return !0;
                if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
                if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
                if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, c && (r = t.changedTouches[0], u = document.elementFromPoint(r.pageX - window.pageXOffset, r.pageY - window.pageYOffset) || u, u.fastClickScrollParent = this.targetElement.fastClickScrollParent), i = u.tagName.toLowerCase(), "label" === i) {
                    if (e = this.findControl(u)) {
                        if (this.focus(u), s) return !1;
                        u = e
                    }
                } else if (this.needsFocus(u)) return t.timeStamp - n > 100 || a && window.top !== window && "input" === i ? (this.targetElement = null, !1) : (this.focus(u), this.sendClick(u, t), a && "select" === i || (this.targetElement = null, t.preventDefault()), !1);
                return !(!a || l || (o = u.fastClickScrollParent, !o || o.fastClickLastScrollTop === o.scrollTop)) || (this.needsClick(u) || (t.preventDefault(), this.sendClick(u, t)), !1)
            }, o.prototype.onTouchCancel = function() {
                this.trackingClick = !1, this.targetElement = null
            }, o.prototype.onMouse = function(t) {
                return !this.targetElement || (!!t.forwardedTouchEvent || (!(t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick)) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1)))
            }, o.prototype.onClick = function(t) {
                var e;
                return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || (e = this.onMouse(t), e || (this.targetElement = null), e)
            }, o.prototype.destroy = function() {
                var t = this.layer;
                s && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
            }, o.notNeeded = function(t) {
                var e, n, i, o;
                if ("undefined" == typeof window.ontouchstart) return !0;
                if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                    if (!s) return !0;
                    if (e = document.querySelector("meta[name=viewport]")) {
                        if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                        if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
                    }
                }
                if (u && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), i[1] >= 10 && i[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
                    if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                    if (document.documentElement.scrollWidth <= window.outerWidth) return !0
                }
                return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (o = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], !!(o >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction))
            }, o.attach = function(t, e) {
                return new o(t, e)
            }, i = function() {
                return o
            }.call(e, n, e, t), !(void 0 !== i && (t.exports = i))
        }()
    },
    139: function(t, e) {
        (function(e) {
            t.exports = e
        }).call(e, {})
    },
    140: function(t, e, n) {
        ! function(t) {
            function e() {
                return "" === c.hash || "#" === c.hash
            }

            function n(t, e) {
                for (var n = 0; n < t.length; n += 1)
                    if (e(t[n], n, t) === !1) return
            }

            function i(t) {
                for (var e = [], n = 0, i = t.length; n < i; n++) e = e.concat(t[n]);
                return e
            }

            function o(t, e, n) {
                if (!t.length) return n();
                var i = 0;
                ! function o() {
                    e(t[i], function(e) {
                        e || e === !1 ? (n(e), n = function() {}) : (i += 1, i === t.length ? n() : o())
                    })
                }()
            }

            function r(t, e, n) {
                n = t;
                for (var i in e)
                    if (e.hasOwnProperty(i) && (n = e[i](t), n !== t)) break;
                return n === t ? "([._a-zA-Z0-9-%()]+)" : n
            }

            function a(t, e) {
                for (var n, i = 0, o = ""; n = t.substr(i).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/);) i = n.index + n[0].length, n[0] = n[0].replace(/^\*/, "([_.()!\\ %@&a-zA-Z0-9-]+)"), o += t.substr(0, n.index) + n[0];
                t = o += t.substr(i);
                var s, a, l = t.match(/:([^\/]+)/gi);
                if (l) {
                    a = l.length;
                    for (var c = 0; c < a; c++) s = l[c], t = "::" === s.slice(0, 2) ? s.slice(1) : t.replace(s, r(s, e))
                }
                return t
            }

            function l(t, e, n, i) {
                var o, r = 0,
                    s = 0,
                    a = 0,
                    n = (n || "(").toString(),
                    i = (i || ")").toString();
                for (o = 0; o < t.length; o++) {
                    var l = t[o];
                    if (l.indexOf(n, r) > l.indexOf(i, r) || ~l.indexOf(n, r) && !~l.indexOf(i, r) || !~l.indexOf(n, r) && ~l.indexOf(i, r)) {
                        if (s = l.indexOf(n, r), a = l.indexOf(i, r), ~s && !~a || !~s && ~a) {
                            var c = t.slice(0, (o || 1) + 1).join(e);
                            t = [c].concat(t.slice((o || 1) + 1))
                        }
                        r = (a > s ? a : s) + 1, o = 0
                    } else r = 0
                }
                return t
            }
            var c = document.location,
                u = {
                    mode: "modern",
                    hash: c.hash,
                    history: !1,
                    check: function() {
                        var t = c.hash;
                        t != this.hash && (this.hash = t, this.onHashChanged())
                    },
                    fire: function() {
                        "modern" === this.mode ? this.history === !0 ? window.onpopstate() : window.onhashchange() : this.onHashChanged()
                    },
                    init: function(t, e) {
                        function n(t) {
                            for (var e = 0, n = d.listeners.length; e < n; e++) d.listeners[e](t)
                        }
                        var i = this;
                        if (this.history = e, d.listeners || (d.listeners = []), "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7)) this.history === !0 ? setTimeout(function() {
                            window.onpopstate = n
                        }, 500) : window.onhashchange = n, this.mode = "modern";
                        else {
                            var o = document.createElement("iframe");
                            o.id = "state-frame", o.style.display = "none", document.body.appendChild(o), this.writeFrame(""), "onpropertychange" in document && "attachEvent" in document && document.attachEvent("onpropertychange", function() {
                                "location" === event.propertyName && i.check()
                            }), window.setInterval(function() {
                                i.check()
                            }, 50), this.onHashChanged = n, this.mode = "legacy"
                        }
                        return d.listeners.push(t), this.mode
                    },
                    destroy: function(t) {
                        if (d && d.listeners)
                            for (var e = d.listeners, n = e.length - 1; n >= 0; n--) e[n] === t && e.splice(n, 1)
                    },
                    setHash: function(t) {
                        return "legacy" === this.mode && this.writeFrame(t), this.history === !0 ? (window.history.pushState({}, document.title, t), this.fire()) : c.hash = "/" === t[0] ? t : "/" + t, this
                    },
                    writeFrame: function(t) {
                        var e = document.getElementById("state-frame"),
                            n = e.contentDocument || e.contentWindow.document;
                        n.open(), n.write("<script>_hash = '" + t + "'; onload = parent.listener.syncHash;<script>"), n.close()
                    },
                    syncHash: function() {
                        var t = this._hash;
                        return t != c.hash && (c.hash = t), this
                    },
                    onHashChanged: function() {}
                },
                d = t.Router = function(t) {
                    return this instanceof d ? (this.params = {}, this.routes = {}, this.methods = ["on", "once", "after", "before"], this.scope = [], this._methods = {}, this._insert = this.insert, this.insert = this.insertEx, this.historySupport = null != (null != window.history ? window.history.pushState : null), this.configure(), void this.mount(t || {})) : new d(t)
                };
            d.prototype.init = function(t) {
                var n, i = this;
                return this.handler = function(t) {
                    var e = t && t.newURL || window.location.hash,
                        n = i.history === !0 ? i.getPath() : e.replace(/.*#/, "");
                    i.dispatch("on", "/" === n.charAt(0) ? n : "/" + n)
                }, u.init(this.handler, this.history), this.history === !1 ? e() && t ? c.hash = t : e() || i.dispatch("on", "/" + c.hash.replace(/^(#\/|#|\/)/, "")) : (this.convert_hash_in_init ? (n = e() && t ? t : e() ? null : c.hash.replace(/^#/, ""), n && window.history.replaceState({}, document.title, n)) : n = this.getPath(), (n || this.run_in_init === !0) && this.handler()), this
            }, d.prototype.explode = function() {
                var t = this.history === !0 ? this.getPath() : c.hash;
                return "/" === t.charAt(1) && (t = t.slice(1)), t.slice(1, t.length).split("/")
            }, d.prototype.setRoute = function(t, e, n) {
                var i = this.explode();
                return "number" == typeof t && "string" == typeof e ? i[t] = e : "string" == typeof n ? i.splice(t, e, s) : i = [t], u.setHash(i.join("/")), i
            }, d.prototype.insertEx = function(t, e, n, i) {
                return "once" === t && (t = "on", n = function(t) {
                    var e = !1;
                    return function() {
                        if (!e) return e = !0, t.apply(this, arguments)
                    }
                }(n)), this._insert(t, e, n, i)
            }, d.prototype.getRoute = function(t) {
                var e = t;
                if ("number" == typeof t) e = this.explode()[t];
                else if ("string" == typeof t) {
                    var n = this.explode();
                    e = n.indexOf(t)
                } else e = this.explode();
                return e
            }, d.prototype.destroy = function() {
                return u.destroy(this.handler), this
            }, d.prototype.getPath = function() {
                var t = window.location.pathname;
                return "/" !== t.substr(0, 1) && (t = "/" + t), t
            };
            var h = /\?.*/;
            d.prototype.configure = function(t) {
                t = t || {};
                for (var e = 0; e < this.methods.length; e++) this._methods[this.methods[e]] = !0;
                return this.recurse = t.recurse || this.recurse || !1, this.async = t.async || !1, this.delimiter = t.delimiter || "/", this.strict = "undefined" == typeof t.strict || t.strict, this.notfound = t.notfound, this.resource = t.resource, this.history = t.html5history && this.historySupport || !1, this.run_in_init = this.history === !0 && t.run_handler_in_init !== !1, this.convert_hash_in_init = this.history === !0 && t.convert_hash_in_init !== !1, this.every = {
                    after: t.after || null,
                    before: t.before || null,
                    on: t.on || null
                }, this
            }, d.prototype.param = function(t, e) {
                ":" !== t[0] && (t = ":" + t);
                var n = new RegExp(t, "g");
                return this.params[t] = function(t) {
                    return t.replace(n, e.source || e)
                }, this
            }, d.prototype.on = d.prototype.route = function(t, e, n) {
                var i = this;
                return n || "function" != typeof e || (n = e, e = t, t = "on"), Array.isArray(e) ? e.forEach(function(e) {
                    i.on(t, e, n)
                }) : (e.source && (e = e.source.replace(/\\\//gi, "/")), Array.isArray(t) ? t.forEach(function(t) {
                    i.on(t.toLowerCase(), e, n)
                }) : (e = e.split(new RegExp(this.delimiter)), e = l(e, this.delimiter), void this.insert(t, this.scope.concat(e), n)))
            }, d.prototype.path = function(t, e) {
                var n = this.scope.length;
                t.source && (t = t.source.replace(/\\\//gi, "/")), t = t.split(new RegExp(this.delimiter)), t = l(t, this.delimiter), this.scope = this.scope.concat(t), e.call(this, this), this.scope.splice(n, t.length)
            }, d.prototype.dispatch = function(t, e, n) {
                function i() {
                    r.last = s.after, r.invoke(r.runlist(s), r, n)
                }
                var o, r = this,
                    s = this.traverse(t, e.replace(h, ""), this.routes, ""),
                    a = this._invoked;
                return this._invoked = !0, s && 0 !== s.length ? ("forward" === this.recurse && (s = s.reverse()), o = this.every && this.every.after ? [this.every.after].concat(this.last) : [this.last], o && o.length > 0 && a ? (this.async ? this.invoke(o, this, i) : (this.invoke(o, this), i()), !0) : (i(), !0)) : (this.last = [], "function" == typeof this.notfound && this.invoke([this.notfound], {
                    method: t,
                    path: e
                }, n), !1)
            }, d.prototype.invoke = function(t, e, i) {
                var r, s = this;
                this.async ? (r = function(n, i) {
                    return Array.isArray(n) ? o(n, r, i) : void("function" == typeof n && n.apply(e, (t.captures || []).concat(i)))
                }, o(t, r, function() {
                    i && i.apply(e, arguments)
                })) : (r = function(i) {
                    return Array.isArray(i) ? n(i, r) : "function" == typeof i ? i.apply(e, t.captures || []) : void("string" == typeof i && s.resource && s.resource[i].apply(e, t.captures || []))
                }, n(t, r))
            }, d.prototype.traverse = function(t, e, n, i, o) {
                function r(t) {
                    function e(t) {
                        for (var n = [], i = 0; i < t.length; i++) n[i] = Array.isArray(t[i]) ? e(t[i]) : t[i];
                        return n
                    }

                    function n(t) {
                        for (var e = t.length - 1; e >= 0; e--) Array.isArray(t[e]) ? (n(t[e]), 0 === t[e].length && t.splice(e, 1)) : o(t[e]) || t.splice(e, 1)
                    }
                    if (!o) return t;
                    var i = e(t);
                    return i.matched = t.matched, i.captures = t.captures, i.after = t.after.filter(o), n(i), i
                }
                var s, a, l, c, u = [];
                if (e === this.delimiter && n[t]) return c = [
                    [n.before, n[t]].filter(Boolean)
                ], c.after = [n.after].filter(Boolean), c.matched = !0, c.captures = [], r(c);
                for (var d in n)
                    if (n.hasOwnProperty(d) && (!this._methods[d] || this._methods[d] && "object" == typeof n[d] && !Array.isArray(n[d]))) {
                        if (s = a = i + this.delimiter + d, this.strict || (a += "[" + this.delimiter + "]?"), l = e.match(new RegExp("^" + a)), !l) continue;
                        if (l[0] && l[0] == e && n[d][t]) return c = [
                            [n[d].before, n[d][t]].filter(Boolean)
                        ], c.after = [n[d].after].filter(Boolean), c.matched = !0, c.captures = l.slice(1), this.recurse && n === this.routes && (c.push([n.before, n.on].filter(Boolean)), c.after = c.after.concat([n.after].filter(Boolean))), r(c);
                        if (c = this.traverse(t, e, n[d], s), c.matched) return c.length > 0 && (u = u.concat(c)), this.recurse && (u.push([n[d].before, n[d].on].filter(Boolean)), c.after = c.after.concat([n[d].after].filter(Boolean)), n === this.routes && (u.push([n.before, n.on].filter(Boolean)), c.after = c.after.concat([n.after].filter(Boolean)))), u.matched = !0, u.captures = c.captures, u.after = c.after, r(u)
                    }
                return !1
            }, d.prototype.insert = function(t, e, n, i) {
                var o, r, s, l, c;
                if (e = e.filter(function(t) {
                        return t && t.length > 0
                    }), i = i || this.routes, c = e.shift(), /\:|\*/.test(c) && !/\\d|\\w/.test(c) && (c = a(c, this.params)), e.length > 0) return i[c] = i[c] || {}, this.insert(t, e, n, i[c]);
                if (c || e.length || i !== this.routes) {
                    if (r = typeof i[c], s = Array.isArray(i[c]), i[c] && !s && "object" == r) switch (o = typeof i[c][t]) {
                        case "function":
                            return void(i[c][t] = [i[c][t], n]);
                        case "object":
                            return void i[c][t].push(n);
                        case "undefined":
                            return void(i[c][t] = n)
                    } else if ("undefined" == r) return l = {}, l[t] = n, void(i[c] = l);
                    throw new Error("Invalid route context: " + r)
                }
                switch (o = typeof i[t]) {
                    case "function":
                        return void(i[t] = [i[t], n]);
                    case "object":
                        return void i[t].push(n);
                    case "undefined":
                        return void(i[t] = n)
                }
            }, d.prototype.extend = function(t) {
                function e(t) {
                    i._methods[t] = !0, i[t] = function() {
                        var e = 1 === arguments.length ? [t, ""] : [t];
                        i.on.apply(i, e.concat(Array.prototype.slice.call(arguments)))
                    }
                }
                var n, i = this,
                    o = t.length;
                for (n = 0; n < o; n++) e(t[n])
            }, d.prototype.runlist = function(t) {
                var e = this.every && this.every.before ? [this.every.before].concat(i(t)) : i(t);
                return this.every && this.every.on && e.push(this.every.on), e.captures = t.captures, e.source = t.source, e
            }, d.prototype.mount = function(t, e) {
                function n(e, n) {
                    var o = e,
                        r = e.split(i.delimiter),
                        s = typeof t[e],
                        a = "" === r[0] || !i._methods[r[0]],
                        c = a ? "on" : o;
                    return a && (o = o.slice((o.match(new RegExp("^" + i.delimiter)) || [""])[0].length), r.shift()), a && "object" === s && !Array.isArray(t[e]) ? (n = n.concat(r), void i.mount(t[e], n)) : (a && (n = n.concat(o.split(i.delimiter)), n = l(n, i.delimiter)), void i.insert(c, n, t[e]))
                }
                if (t && "object" == typeof t && !Array.isArray(t)) {
                    var i = this;
                    e = e || [], Array.isArray(e) || (e = e.split(i.delimiter));
                    for (var o in t) t.hasOwnProperty(o) && n(o, e.slice(0))
                }
            }
        }(e)
    },
    141: function(t, e, n) {
        var i = n(2);
        e.$addChild = function(t, e) {
            e = e || i.Vue, t = t || {};
            var n, o = this,
                r = t._context || o,
                s = void 0 !== t.inherit ? t.inherit : e.options.inherit;
            if (s) {
                var a = r._childCtors;
                if (n = a[e.cid], !n) {
                    var l = e.options.name,
                        c = l ? i.classify(l) : "VueComponent";
                    n = new Function("return function " + c + " (options) {this.constructor = " + c + ";this._init(options) }")(), n.options = e.options, n.linker = e.linker, n.prototype = r, a[e.cid] = n
                }
            } else n = e;
            t._parent = o, t._root = o.$root;
            var u = new n(t);
            return u
        }
    },
    142: function(t, e, n) {
        var i = n(15),
            o = n(14),
            r = n(8),
            s = n(12),
            a = n(13),
            l = /[^|]\|[^|]/;
        e.$get = function(t) {
            var e = a.parse(t);
            if (e) try {
                return e.get.call(this, this)
            } catch (t) {}
        }, e.$set = function(t, e) {
            var n = a.parse(t, !0);
            n && n.set && n.set.call(this, this, e)
        }, e.$add = function(t, e) {
            this._data.$add(t, e)
        }, e.$delete = function(t) {
            this._data.$delete(t)
        }, e.$watch = function(t, e, n) {
            var o, r = this;
            "string" == typeof t && (o = s.parse(t)[0], t = o.expression);
            var a = new i(r, t, e, {
                deep: n && n.deep,
                user: !n || n.user !== !1,
                filters: o && o.filters
            });
            return n && n.immediate && e.call(r, a.value),
                function() {
                    a.teardown()
                }
        }, e.$eval = function(t) {
            if (l.test(t)) {
                var e = s.parse(t)[0],
                    n = this.$get(e.expression);
                return e.filters ? this._applyFilters(n, null, e.filters) : n
            }
            return this.$get(t)
        }, e.$interpolate = function(t) {
            var e = r.parse(t),
                n = this;
            return e ? 1 === e.length ? n.$eval(e[0].value) + "" : e.map(function(t) {
                return t.tag ? n.$eval(t.value) : t.value
            }).join("") : t
        }, e.$log = function(t) {
            var e = t ? o.get(this._data, t) : this._data;
            e && (e = JSON.parse(JSON.stringify(e))), console.log(e)
        }
    },
    143: function(t, e, n) {
        function i(t, e, n, i, s, a) {
            e = r(e);
            var l = !c.inDoc(e),
                u = i === !1 || l ? s : a,
                d = !l && !t._isAttached && !c.inDoc(t.$el);
            return t._isFragment ? o(t, e, u, n) : u(t.$el, e, t, n), d && t._callHook("attached"), t
        }

        function o(t, e, n, i) {
            for (var o, r = t._fragmentStart, s = t._fragmentEnd; o !== s;) o = r.nextSibling, n(r, e, t), r = o;
            n(s, e, t, i)
        }

        function r(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }

        function s(t, e, n, i) {
            e.appendChild(t), i && i()
        }

        function a(t, e, n, i) {
            c.before(t, e), i && i()
        }

        function l(t, e, n) {
            c.remove(t), n && n()
        }
        var c = n(2),
            u = n(17);
        e.$nextTick = function(t) {
            c.nextTick(t, this)
        }, e.$appendTo = function(t, e, n) {
            return i(this, t, e, n, s, u.append)
        }, e.$prependTo = function(t, e, n) {
            return t = r(t), t.hasChildNodes() ? this.$before(t.firstChild, e, n) : this.$appendTo(t, e, n), this
        }, e.$before = function(t, e, n) {
            return i(this, t, e, n, a, u.before)
        }, e.$after = function(t, e, n) {
            return t = r(t), t.nextSibling ? this.$before(t.nextSibling, e, n) : this.$appendTo(t.parentNode, e, n), this
        }, e.$remove = function(t, e) {
            if (!this.$el.parentNode) return t && t();
            var n = this._isAttached && c.inDoc(this.$el);
            n || (e = !1);
            var i, r = this,
                a = function() {
                    n && r._callHook("detached"), t && t()
                };
            return this._isFragment && !this._blockFragment.hasChildNodes() ? (i = e === !1 ? s : u.removeThenAppend, o(this, this._blockFragment, i, a)) : (i = e === !1 ? l : u.remove)(this.$el, this, a), this
        }
    },
    144: function(t, e, n) {
        function i(t, e, n) {
            var i = t.$parent;
            if (i && n && !r.test(e))
                for (; i;) i._eventsCount[e] = (i._eventsCount[e] || 0) + n, i = i.$parent
        }
        var o = n(2);
        e.$on = function(t, e) {
            return (this._events[t] || (this._events[t] = [])).push(e), i(this, t, 1), this
        }, e.$once = function(t, e) {
            function n() {
                i.$off(t, n), e.apply(this, arguments)
            }
            var i = this;
            return n.fn = e, this.$on(t, n), this
        }, e.$off = function(t, e) {
            var n;
            if (!arguments.length) {
                if (this.$parent)
                    for (t in this._events) n = this._events[t], n && i(this, t, -n.length);
                return this._events = {}, this
            }
            if (n = this._events[t], !n) return this;
            if (1 === arguments.length) return i(this, t, -n.length), this._events[t] = null, this;
            for (var o, r = n.length; r--;)
                if (o = n[r], o === e || o.fn === e) {
                    i(this, t, -1), n.splice(r, 1);
                    break
                }
            return this
        }, e.$emit = function(t) {
            this._eventCancelled = !1;
            var e = this._events[t];
            if (e) {
                for (var n = arguments.length - 1, i = new Array(n); n--;) i[n] = arguments[n + 1];
                n = 0, e = e.length > 1 ? o.toArray(e) : e;
                for (var r = e.length; n < r; n++) e[n].apply(this, i) === !1 && (this._eventCancelled = !0)
            }
            return this
        }, e.$broadcast = function(t) {
            if (this._eventsCount[t]) {
                for (var e = this.$children, n = 0, i = e.length; n < i; n++) {
                    var o = e[n];
                    o.$emit.apply(o, arguments), o._eventCancelled || o.$broadcast.apply(o, arguments)
                }
                return this
            }
        }, e.$dispatch = function() {
            for (var t = this.$parent; t;) t.$emit.apply(t, arguments), t = t._eventCancelled ? null : t.$parent;
            return this
        };
        var r = /^hook:/
    },
    145: function(t, e, n) {
        function i(t) {
            return new Function("return function " + o.classify(t) + " (options) { this._init(options) }")()
        }
        var o = n(2),
            r = n(3);
        e.util = o, e.config = r, e.nextTick = o.nextTick, e.compiler = n(7), e.parsers = {
            path: n(14),
            text: n(8),
            template: n(5),
            directive: n(12),
            expression: n(13)
        }, e.cid = 0;
        var s = 1;
        e.extend = function(t) {
            t = t || {};
            var e = this,
                n = i(t.name || e.options.name || "VueComponent");
            return n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n.cid = s++, n.options = o.mergeOptions(e.options, t), n.super = e, n.extend = e.extend, r._assetTypes.forEach(function(t) {
                n[t] = e[t]
            }), n
        }, e.use = function(t) {
            var e = o.toArray(arguments, 1);
            return e.unshift(this), "function" == typeof t.install ? t.install.apply(t, e) : t.apply(null, e), this
        }, e.mixin = function(t) {
            var e = o.Vue;
            e.options = o.mergeOptions(e.options, t)
        }, r._assetTypes.forEach(function(t) {
            e[t] = function(e, n) {
                return n ? ("component" === t && o.isPlainObject(n) && (n.name = e, n = o.Vue.extend(n)), void(this.options[t + "s"][e] = n)) : this.options[t + "s"][e]
            }
        })
    },
    146: function(t, e, n) {
        function i() {
            this._isAttached = !0, this._isReady = !0, this._callHook("ready")
        }
        var o = n(2),
            r = n(7);
        e.$mount = function(t) {
            return this._isCompiled ? void("production" !== process.env.NODE_ENV && o.warn("$mount() should be called only once.")) : (t = o.query(t), t || (t = document.createElement("div")), this._compile(t), this._isCompiled = !0, this._callHook("compiled"), this._initDOMHooks(), o.inDoc(this.$el) ? (this._callHook("attached"), i.call(this)) : this.$once("hook:attached", i), this)
        }, e.$destroy = function(t, e) {
            this._destroy(t, e)
        }, e.$compile = function(t, e) {
            return r.compile(t, this.$options, !0)(this, t, e)
        }
    },
    147: function(t, e, n) {
        function i() {
            l = [], c = [], u = {}, d = {}, h = p = !1
        }

        function o() {
            r(l), p = !0, r(c), i()
        }

        function r(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e],
                    i = n.id;
                u[i] = null, n.run(), "production" !== process.env.NODE_ENV && null != u[i] && (d[i] = (d[i] || 0) + 1, d[i] > a._maxUpdateCount && (t.splice(u[i], 1), s.warn("You may have an infinite update loop for watcher with expression: " + n.expression)))
            }
        }
        var s = n(2),
            a = n(3),
            l = [],
            c = [],
            u = {},
            d = {},
            h = !1,
            p = !1;
        e.push = function(t) {
            var e = t.id;
            if (null == u[e]) {
                if (p && !t.user) return void t.run();
                var n = t.user ? c : l;
                u[e] = n.length, n.push(t), h || (h = !0, s.nextTick(o))
            }
        }
    },
    148: function(t, e, n) {
        function i(t) {
            return function(e, n) {
                e._props = {};
                for (var i, s, c, u, d = t.length; d--;)
                    if (i = t[d], s = i.path, e._props[s] = i, c = i.options, null === i.raw) r.initProp(e, i, o(c));
                    else if (i.dynamic) e._context ? i.mode === l.ONE_TIME ? (u = e._context.$get(i.parentPath), r.initProp(e, i, u)) : e._bindDir("prop", n, i, a) : "production" !== process.env.NODE_ENV && r.warn("Cannot bind dynamic prop on a root instance with no parent: " + i.name + '="' + i.raw + '"');
                else {
                    var h = i.raw;
                    u = c.type === Boolean && "" === h || (h.trim() ? r.toBoolean(r.toNumber(h)) : h), r.initProp(e, i, u)
                }
            }
        }

        function o(t) {
            if (!t.hasOwnProperty("default")) return t.type !== Boolean && void 0;
            var e = t.default;
            return r.isObject(e) && "production" !== process.env.NODE_ENV && r.warn("Object/Array as default prop values will be shared across multiple instances. Use a factory function to return the default value instead."), "function" == typeof e && t.type !== Function ? e() : e
        }
        var r = n(2),
            s = n(8),
            a = n(22),
            l = n(3)._propBindingModes,
            c = n(14).identRE,
            u = /^data-/,
            d = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/,
            h = /^(true|false)$|^\d.*/;
        t.exports = function(t, e) {
            for (var n, o, a, p, f, g, v, m, b = [], y = e.length; y--;)
                if (n = e[y], o = n.name, f = r.camelize(o.replace(u, "")), c.test(f)) {
                    if (a = r.hyphenate(o), p = t.getAttribute(a), null === p && (a = "data-" + a, p = t.getAttribute(a)), g = {
                            name: o,
                            raw: p,
                            path: f,
                            options: n,
                            mode: l.ONE_WAY
                        }, null !== p) {
                        t.removeAttribute(a);
                        var _ = s.parse(p);
                        _ && (g.dynamic = !0, g.parentPath = s.tokensToExp(_), m = 1 === _.length, v = h.test(g.parentPath), v || m && _[0].oneTime ? g.mode = l.ONE_TIME : !v && m && _[0].twoWay && (d.test(g.parentPath) ? g.mode = l.TWO_WAY : "production" !== process.env.NODE_ENV && r.warn("Cannot bind two-way prop with non-settable parent path: " + g.parentPath)), "production" !== process.env.NODE_ENV && n.twoWay && g.mode !== l.TWO_WAY && r.warn('Prop "' + o + '" expects a two-way binding type.'))
                    } else n && n.required && "production" !== process.env.NODE_ENV && r.warn("Missing required prop: " + o);
                    b.push(g)
                } else "production" !== process.env.NODE_ENV && r.warn('Invalid prop key: "' + o + '". Prop keys must be valid identifiers.');
            return i(b)
        }
    },
    149: function(t, e, n) {
        function i(t, e) {
            var n = e._directives.length;
            return t(), e._directives.slice(n)
        }

        function o(t, e, n, i) {
            return function(o) {
                r(t, e, o), n && i && r(n, i)
            }
        }

        function r(t, e, n) {
            for (var i = e.length; i--;) e[i]._teardown(), n || t._directives.$remove(e[i])
        }

        function s(t, e) {
            var n = t.nodeType;
            return 1 === n && "SCRIPT" !== t.tagName ? a(t, e) : 3 === n && k.interpolate && t.data.trim() ? l(t, e) : null
        }

        function a(t, e) {
            "TEXTAREA" === t.tagName && S.parse(t.value) && t.setAttribute("value", t.value);
            var n, i = t.hasAttributes();
            return i && (n = g(t, e)), n || (n = p(t, e)), n || (n = f(t, e)), !n && i && (n = b(t.attributes, e)), n
        }

        function l(t, e) {
            var n = S.parse(t.data);
            if (!n) return null;
            for (var i, o, r = document.createDocumentFragment(), s = 0, a = n.length; s < a; s++) o = n[s], i = o.tag ? c(o, e) : document.createTextNode(o.value), r.appendChild(i);
            return u(n, r, e)
        }

        function c(t, e) {
            function n(n) {
                t.type = n, t.def = T(e, "directives", n), t.descriptor = E.parse(t.value)[0]
            }
            var i;
            return t.oneTime ? i = document.createTextNode(t.value) : t.html ? (i = document.createComment("v-html"), n("html")) : (i = document.createTextNode(" "), n("text")), i
        }

        function u(t, e) {
            return function(n, i) {
                for (var o, r, s, a = e.cloneNode(!0), l = x.toArray(a.childNodes), c = 0, u = t.length; c < u; c++) o = t[c], r = o.value, o.tag && (s = l[c], o.oneTime ? (r = n.$eval(r), o.html ? x.replace(s, A.parse(r, !0)) : s.data = r) : n._bindDir(o.type, s, o.descriptor, o.def));
                x.replace(i, a)
            }
        }

        function d(t, e) {
            for (var n, i, o, r = [], a = 0, l = t.length; a < l; a++) o = t[a], n = s(o, e), i = n && n.terminal || "SCRIPT" === o.tagName || !o.hasChildNodes() ? null : d(o.childNodes, e), r.push(n, i);
            return r.length ? h(r) : null
        }

        function h(t) {
            return function(e, n, i) {
                for (var o, r, s, a = 0, l = 0, c = t.length; a < c; l++) {
                    o = n[l], r = t[a++], s = t[a++];
                    var u = x.toArray(o.childNodes);
                    r && r(e, o, i), s && s(e, u, i)
                }
            }
        }

        function p(t, e) {
            var n = t.tagName.toLowerCase();
            if (!x.commonTagRE.test(n)) {
                var i = T(e, "elementDirectives", n);
                return i ? m(t, n, "", e, i) : void 0
            }
        }

        function f(t, e, n) {
            var i = x.checkComponent(t, e, n);
            if (i) {
                var o = function(t, e, n) {
                    t._bindDir("component", e, {
                        expression: i
                    }, N, n)
                };
                return o.terminal = !0, o
            }
        }

        function g(t, e) {
            if (null !== x.attr(t, "pre")) return v;
            for (var n, i, o = 0, r = D.length; o < r; o++)
                if (i = D[o], null !== (n = x.attr(t, i))) return m(t, i, n, e)
        }

        function v() {}

        function m(t, e, n, i, o) {
            var r = E.parse(n)[0];
            o = o || i.directives[e];
            var s = function(t, n, i) {
                t._bindDir(e, n, r, o, i)
            };
            return s.terminal = !0, s
        }

        function b(t, e) {
            for (var n, i, o, r, s, a, l = t.length, c = []; l--;) n = t[l], i = n.name, o = n.value, 0 === i.indexOf(k.prefix) ? (s = i.slice(k.prefix.length), a = T(e, "directives", s), "production" !== process.env.NODE_ENV && x.assertAsset(a, "directive", s), a && c.push({
                name: s,
                descriptors: E.parse(o),
                def: a
            })) : k.interpolate && (r = _(i, o, e), r && c.push(r));
            if (c.length) return c.sort(w), y(c)
        }

        function y(t) {
            return function(e, n, i) {
                for (var o, r, s, a = t.length; a--;)
                    if (o = t[a], o._link) o._link(e, n);
                    else
                        for (s = o.descriptors.length, r = 0; r < s; r++) e._bindDir(o.name, n, o.descriptors[r], o.def, i)
            }
        }

        function _(t, e, n) {
            var i = S.parse(e),
                o = "class" === t;
            if (i) {
                for (var r = o ? "class" : "attr", s = n.directives[r], a = i.length, l = !0; a--;) {
                    var c = i[a];
                    c.tag && !c.oneTime && (l = !1)
                }
                var u;
                return u = l ? function(n, i) {
                    i.setAttribute(t, n.$interpolate(e))
                } : function(n, a) {
                    var l = S.tokensToExp(i, n),
                        c = o ? E.parse(l)[0] : E.parse(t + ":" + l)[0];
                    o && (c._rawClass = e), n._bindDir(r, a, c, s)
                }, {
                    def: s,
                    _link: u
                }
            }
        }

        function w(t, e) {
            return t = t.def.priority || 0, e = e.def.priority || 0, t > e ? 1 : -1
        }
        var x = n(2),
            C = n(148),
            k = n(3),
            S = n(8),
            E = n(12),
            A = n(5),
            T = x.resolveAsset,
            N = n(20),
            D = ["repeat", "if"];
        e.compile = function(t, e, n) {
            var r = n || !e._asComponent ? s(t, e) : null,
                a = r && r.terminal || "SCRIPT" === t.tagName || !t.hasChildNodes() ? null : d(t.childNodes, e);
            return function(t, e, n) {
                var s = x.toArray(e.childNodes),
                    l = i(function() {
                        r && r(t, e, n), a && a(t, s, n)
                    }, t);
                return o(t, l)
            }
        }, e.compileAndLinkProps = function(t, e, n) {
            var r = C(e, n),
                s = i(function() {
                    r(t, null)
                }, t);
            return o(t, s)
        }, e.compileRoot = function(t, e) {
            var n, r, s = e._containerAttrs,
                a = e._replacerAttrs;
            return 11 !== t.nodeType && (e._asComponent ? (s && (n = b(s, e)), a && (r = b(a, e))) : r = b(t.attributes, e)),
                function(t, e) {
                    var s, a = t._context;
                    a && n && (s = i(function() {
                        n(a, e)
                    }, a));
                    var l = i(function() {
                        r && r(t, e)
                    }, t);
                    return o(t, l, a, s)
                }
        }, v.terminal = !0
    },
    150: function(t, e, n) {
        function i(t, e) {
            var n = e.template,
                i = l.parse(n, !0);
            if (i) {
                var c = i.firstChild,
                    u = c.tagName && c.tagName.toLowerCase();
                return e.replace ? (t === document.body && "production" !== process.env.NODE_ENV && s.warn("You are mounting an instance with a template to <body>. This will replace <body> entirely. You should probably use `replace: false` here."), i.childNodes.length > 1 || 1 !== c.nodeType || "component" === u || s.resolveAsset(e, "components", u) || c.hasAttribute(a.prefix + "component") || s.resolveAsset(e, "elementDirectives", u) || c.hasAttribute(a.prefix + "repeat") ? i : (e._replacerAttrs = o(c), r(t, c), c)) : (t.appendChild(i), t)
            }
            "production" !== process.env.NODE_ENV && s.warn("Invalid template option: " + n)
        }

        function o(t) {
            if (1 === t.nodeType && t.hasAttributes()) return s.toArray(t.attributes)
        }

        function r(t, e) {
            for (var n, i, o = t.attributes, r = o.length; r--;) n = o[r].name, i = o[r].value, e.hasAttribute(n) ? "class" === n && (i = e.getAttribute(n) + " " + i, e.setAttribute(n, i)) : e.setAttribute(n, i)
        }
        var s = n(2),
            a = n(3),
            l = n(5);
        e.transclude = function(t, e) {
            return e && (e._containerAttrs = o(t)), s.isTemplate(t) && (t = l.parse(t)), e && (e._asComponent && !e.template && (e.template = "<content></content>"), e.template && (e._content = s.extractContent(t), t = i(t, e))), t instanceof DocumentFragment && (s.prepend(s.createAnchor("v-start", !0), t), t.appendChild(s.createAnchor("v-end", !0))), t
        }
    },
    151: function(t, e, n) {
        function i() {}

        function o(t, e, n, i, o, r) {
            this.name = t, this.el = e, this.vm = n, this.raw = i.raw, this.expression = i.expression, this.arg = i.arg, this.filters = i.filters, this._descriptor = i, this._host = r, this._locked = !1, this._bound = !1, this._listeners = null, this._bind(o)
        }
        var r = n(2),
            s = n(3),
            a = n(15),
            l = n(8),
            c = n(13);
        o.prototype._bind = function(t) {
            if (("cloak" !== this.name || this.vm._isCompiled) && this.el && this.el.removeAttribute && this.el.removeAttribute(s.prefix + this.name), "function" == typeof t ? this.update = t : r.extend(this, t), this._watcherExp = this.expression, this._checkDynamicLiteral(), this.bind && this.bind(), this._watcherExp && (this.update || this.twoWay) && (!this.isLiteral || this._isDynamicLiteral) && !this._checkStatement()) {
                var e = this;
                this.update ? this._update = function(t, n) {
                    e._locked || e.update(t, n)
                } : this._update = i;
                var n = this._preProcess ? r.bind(this._preProcess, this) : null,
                    o = this._watcher = new a(this.vm, this._watcherExp, this._update, {
                        filters: this.filters,
                        twoWay: this.twoWay,
                        deep: this.deep,
                        preProcess: n
                    });
                null != this._initValue ? o.set(this._initValue) : this.update && this.update(o.value)
            }
            this._bound = !0
        }, o.prototype._checkDynamicLiteral = function() {
            var t = this.expression;
            if (t && this.isLiteral) {
                var e = l.parse(t);
                if (e) {
                    var n = l.tokensToExp(e);
                    this.expression = this.vm.$get(n), this._watcherExp = n, this._isDynamicLiteral = !0
                }
            }
        }, o.prototype._checkStatement = function() {
            var t = this.expression;
            if (t && this.acceptStatement && !c.isSimplePath(t)) {
                var e = c.parse(t).get,
                    n = this.vm,
                    i = function() {
                        e.call(n, n)
                    };
                return this.filters && (i = n._applyFilters(i, null, this.filters)), this.update(i), !0
            }
        }, o.prototype._checkParam = function(t) {
            var e = this.el.getAttribute(t);
            return null !== e && (this.el.removeAttribute(t), e = this.vm.$interpolate(e)), e
        }, o.prototype.set = function(t) {
            this.twoWay ? this._withLock(function() {
                this._watcher.set(t)
            }) : "production" !== process.env.NODE_ENV && r.warn("Directive.set() can only be used inside twoWaydirectives.")
        }, o.prototype._withLock = function(t) {
            var e = this;
            e._locked = !0, t.call(e), r.nextTick(function() {
                e._locked = !1
            })
        }, o.prototype.on = function(t, e) {
            r.on(this.el, t, e), (this._listeners || (this._listeners = [])).push([t, e])
        }, o.prototype._teardown = function() {
            if (this._bound) {
                this._bound = !1, this.unbind && this.unbind(), this._watcher && this._watcher.teardown();
                var t = this._listeners;
                if (t)
                    for (var e = 0; e < t.length; e++) r.off(this.el, t[e][0], t[e][1]);
                this.vm = this.el = this._watcher = this._listeners = null
            }
        }, t.exports = o
    },
    152: function(t, e) {
        var n = "http://www.w3.org/1999/xlink",
            i = /^xlink:/,
            o = {
                value: 1,
                checked: 1,
                selected: 1
            };
        t.exports = {
            priority: 850,
            update: function(t) {
                this.arg ? this.setAttr(this.arg, t) : "object" == typeof t && this.objectHandler(t)
            },
            objectHandler: function(t) {
                var e, n, i = this.cache || (this.cache = {});
                for (e in i) e in t || (this.setAttr(e, null), delete i[e]);
                for (e in t) n = t[e], n !== i[e] && (i[e] = n, this.setAttr(e, n))
            },
            setAttr: function(t, e) {
                o[t] && t in this.el ? (this.valueRemoved || (this.el.removeAttribute(t), this.valueRemoved = !0), this.el[t] = e) : null != e && e !== !1 ? i.test(t) ? this.el.setAttributeNS(n, t, e) : this.el.setAttribute(t, e) : this.el.removeAttribute(t)
            }
        }
    },
    153: function(t, e, n) {
        function i(t) {
            for (var e = {}, n = t.trim().split(/\s+/), i = n.length; i--;) e[n[i]] = !0;
            return e
        }
        var o = n(2),
            r = o.addClass,
            s = o.removeClass;
        t.exports = {
            bind: function() {
                var t = this._descriptor._rawClass;
                t && (this.prevKeys = t.trim().split(/\s+/))
            },
            update: function(t) {
                this.arg ? t ? r(this.el, this.arg) : s(this.el, this.arg) : t && "string" == typeof t ? this.handleObject(i(t)) : o.isPlainObject(t) ? this.handleObject(t) : this.cleanup()
            },
            handleObject: function(t) {
                this.cleanup(t);
                for (var e = this.prevKeys = Object.keys(t), n = 0, i = e.length; n < i; n++) {
                    var o = e[n];
                    t[o] ? r(this.el, o) : s(this.el, o)
                }
            },
            cleanup: function(t) {
                if (this.prevKeys)
                    for (var e = this.prevKeys.length; e--;) {
                        var n = this.prevKeys[e];
                        t && t.hasOwnProperty(n) || s(this.el, n)
                    }
            }
        }
    },
    154: function(t, e, n) {
        var i = n(3);
        t.exports = {
            bind: function() {
                var t = this.el;
                this.vm.$once("hook:compiled", function() {
                    t.removeAttribute(i.prefix + "cloak")
                })
            }
        }
    },
    155: function(t, e) {
        t.exports = {
            isLiteral: !0,
            bind: function() {
                this.vm.$$[this.expression] = this.el
            },
            unbind: function() {
                delete this.vm.$$[this.expression]
            }
        }
    },
    156: function(t, e, n) {
        var i = n(2),
            o = n(5);
        t.exports = {
            bind: function() {
                8 === this.el.nodeType && (this.nodes = [], this.anchor = i.createAnchor("v-html"), i.replace(this.el, this.anchor))
            },
            update: function(t) {
                t = i.toString(t), this.nodes ? this.swap(t) : this.el.innerHTML = t
            },
            swap: function(t) {
                for (var e = this.nodes.length; e--;) i.remove(this.nodes[e]);
                var n = o.parse(t, !0, !0);
                this.nodes = i.toArray(n.childNodes), i.before(n, this.anchor)
            }
        }
    },
    157: function(t, e, n) {
        e.text = n(168), e.html = n(156), e.attr = n(152), e.show = n(166), e.class = n(153), e.el = n(155), e.ref = n(164), e.cloak = n(154), e.style = n(167), e.transition = n(169), e.on = n(163), e.model = n(159), e.repeat = n(165), e.if = n(21), e._component = n(20), e._prop = n(22)
    },
    158: function(t, e, n) {
        var i = n(2);
        t.exports = {
            bind: function() {
                function t() {
                    var t = n.checked;
                    return t && null !== o && (t = e.vm.$eval(o)), t || null === r || (t = e.vm.$eval(r)), t
                }
                var e = this,
                    n = this.el,
                    o = this._checkParam("true-exp"),
                    r = this._checkParam("false-exp");
                this._matchValue = function(t) {
                    return null !== o ? i.looseEqual(t, e.vm.$eval(o)) : !!t
                }, this.on("change", function() {
                    e.set(t())
                }), n.checked && (this._initValue = t())
            },
            update: function(t) {
                this.el.checked = this._matchValue(t)
            }
        }
    },
    159: function(t, e, n) {
        var i = n(2),
            o = {
                text: n(162),
                radio: n(160),
                select: n(161),
                checkbox: n(158)
            };
        t.exports = {
            priority: 800,
            twoWay: !0,
            handlers: o,
            bind: function() {
                this.checkFilters(), this.hasRead && !this.hasWrite && "production" !== process.env.NODE_ENV && i.warn("It seems you are using a read-only filter with v-model. You might want to use a two-way filter to ensure correct behavior.");
                var t, e = this.el,
                    n = e.tagName;
                if ("INPUT" === n) t = o[e.type] || o.text;
                else if ("SELECT" === n) t = o.select;
                else {
                    if ("TEXTAREA" !== n) return void("production" !== process.env.NODE_ENV && i.warn("v-model does not support element type: " + n));
                    t = o.text
                }
                e.__v_model = this, t.bind.call(this), this.update = t.update, this._unbind = t.unbind
            },
            checkFilters: function() {
                var t = this.filters;
                if (t)
                    for (var e = t.length; e--;) {
                        var n = i.resolveAsset(this.vm.$options, "filters", t[e].name);
                        ("function" == typeof n || n.read) && (this.hasRead = !0), n.write && (this.hasWrite = !0)
                    }
            },
            unbind: function() {
                this.el.__v_model = null, this._unbind && this._unbind()
            }
        }
    },
    160: function(t, e, n) {
        var i = n(2);
        t.exports = {
            bind: function() {
                var t = this,
                    e = this.el,
                    n = null != this._checkParam("number"),
                    o = this._checkParam("exp");
                this.getValue = function() {
                    var r = e.value;
                    return n ? r = i.toNumber(r) : null !== o && (r = t.vm.$eval(o)), r
                }, this.on("change", function() {
                    t.set(t.getValue())
                }), e.checked && (this._initValue = this.getValue())
            },
            update: function(t) {
                this.el.checked = i.looseEqual(t, this.getValue())
            }
        }
    },
    161: function(t, e, n) {
        function i(t) {
            function e(t) {
                if (l.isArray(t)) {
                    for (var e = i.options.length; e--;) {
                        var s = i.options[e];
                        if (s !== r) {
                            var a = s.parentNode;
                            a === i ? a.removeChild(s) : (i.removeChild(a), e = i.options.length)
                        }
                    }
                    o(i, t), n.forceUpdate()
                } else "production" !== process.env.NODE_ENV && l.warn("Invalid options value for v-model: " + t)
            }
            var n = this,
                i = n.el,
                r = n.defaultOption = n.el.options[0],
                s = u.parse(t)[0];
            this.optionWatcher = new c(this.vm, s.expression, e, {
                deep: !0,
                filters: s.filters
            }), e(this.optionWatcher.value)
        }

        function o(t, e) {
            for (var n, i, r = 0, s = e.length; r < s; r++) n = e[r], n.options ? (i = document.createElement("optgroup"), i.label = n.label, o(i, n.options)) : (i = document.createElement("option"), "string" == typeof n || "number" == typeof n ? i.text = i.value = n : (null == n.value || l.isObject(n.value) || (i.value = n.value), i._value = n.value, i.text = n.text || "", n.disabled && (i.disabled = !0))), t.appendChild(i)
        }

        function r() {
            for (var t, e = this.el.options, n = 0, i = e.length; n < i; n++) e[n].hasAttribute("selected") && (this.multiple ? (t || (t = [])).push(e[n].value) : t = e[n].value);
            "undefined" != typeof t && (this._initValue = this.number ? l.toNumber(t) : t)
        }

        function s(t, e) {
            for (var n, i, o = e ? [] : null, r = 0, s = t.options.length; r < s; r++)
                if (n = t.options[r], n.selected) {
                    if (i = n.hasOwnProperty("_value") ? n._value : n.value, !e) return i;
                    o.push(i)
                }
            return o
        }

        function a(t, e) {
            for (var n = t.length; n--;)
                if (l.looseEqual(t[n], e)) return n;
            return -1
        }
        var l = n(2),
            c = n(15),
            u = n(12);
        t.exports = {
            bind: function() {
                var t = this,
                    e = this.el;
                this.forceUpdate = function() {
                    t._watcher && t.update(t._watcher.get())
                };
                var n = this._checkParam("options");
                n && i.call(this, n), this.number = null != this._checkParam("number"), this.multiple = e.hasAttribute("multiple"), this.on("change", function() {
                    var n = s(e, t.multiple);
                    n = t.number ? l.isArray(n) ? n.map(l.toNumber) : l.toNumber(n) : n, t.set(n)
                }), r.call(this), this.vm.$on("hook:attached", this.forceUpdate)
            },
            update: function(t) {
                var e = this.el;
                if (e.selectedIndex = -1, null == t) return void(this.defaultOption && (this.defaultOption.selected = !0));
                for (var n, i, o = this.multiple && l.isArray(t), r = e.options, s = r.length; s--;) n = r[s], i = n.hasOwnProperty("_value") ? n._value : n.value, n.selected = o ? a(t, i) > -1 : l.looseEqual(t, i)
            },
            unbind: function() {
                this.vm.$off("hook:attached", this.forceUpdate), this.optionWatcher && this.optionWatcher.teardown()
            }
        }
    },
    162: function(t, e, n) {
        var i = n(2);
        t.exports = {
            bind: function() {
                var t = this,
                    e = this.el,
                    n = "range" === e.type,
                    o = null != this._checkParam("lazy"),
                    r = null != this._checkParam("number"),
                    s = parseInt(this._checkParam("debounce"), 10),
                    a = !1;
                i.isAndroid || n || (this.on("compositionstart", function() {
                    a = !0
                }), this.on("compositionend", function() {
                    a = !1, o || t.listener()
                })), this.focused = !1, n || (this.on("focus", function() {
                    t.focused = !0
                }), this.on("blur", function() {
                    t.focused = !1, t.listener()
                })), this.listener = function() {
                    if (!a) {
                        var o = r || n ? i.toNumber(e.value) : e.value;
                        t.set(o), i.nextTick(function() {
                            t._bound && !t.focused && t.update(t._watcher.value)
                        })
                    }
                }, s && (this.listener = i.debounce(this.listener, s)), this.hasjQuery = "function" == typeof jQuery, this.hasjQuery ? (jQuery(e).on("change", this.listener), o || jQuery(e).on("input", this.listener)) : (this.on("change", this.listener), o || this.on("input", this.listener)), !o && i.isIE9 && (this.on("cut", function() {
                    i.nextTick(t.listener)
                }), this.on("keyup", function(e) {
                    46 !== e.keyCode && 8 !== e.keyCode || t.listener()
                })), (e.hasAttribute("value") || "TEXTAREA" === e.tagName && e.value.trim()) && (this._initValue = r ? i.toNumber(e.value) : e.value)
            },
            update: function(t) {
                this.el.value = i.toString(t)
            },
            unbind: function() {
                var t = this.el;
                this.hasjQuery && (jQuery(t).off("change", this.listener), jQuery(t).off("input", this.listener))
            }
        }
    },
    163: function(t, e, n) {
        var i = n(2);
        t.exports = {
            acceptStatement: !0,
            priority: 700,
            bind: function() {
                if ("IFRAME" === this.el.tagName && "load" !== this.arg) {
                    var t = this;
                    this.iframeBind = function() {
                        i.on(t.el.contentWindow, t.arg, t.handler)
                    }, this.on("load", this.iframeBind)
                }
            },
            update: function(t) {
                if ("function" != typeof t) return void("production" !== process.env.NODE_ENV && i.warn('Directive v-on="' + this.arg + ": " + this.expression + '" expects a function value, got ' + t));
                this.reset();
                var e = this.vm;
                this.handler = function(n) {
                    n.targetVM = e, e.$event = n;
                    var i = t(n);
                    return e.$event = null, i
                }, this.iframeBind ? this.iframeBind() : i.on(this.el, this.arg, this.handler)
            },
            reset: function() {
                var t = this.iframeBind ? this.el.contentWindow : this.el;
                this.handler && i.off(t, this.arg, this.handler)
            },
            unbind: function() {
                this.reset()
            }
        }
    },
    164: function(t, e, n) {
        var i = n(2);
        t.exports = {
            isLiteral: !0,
            bind: function() {
                var t = this.el.__vue__;
                return t ? void(t._refID = this.expression) : void("production" !== process.env.NODE_ENV && i.warn("v-ref should only be used on a component root element."))
            }
        }
    },
    165: function(t, e, n) {
        function i(t, e, n) {
            var i = t.$el.previousSibling;
            if (i) {
                for (;
                    (!i.__vue__ || i.__vue__.$options._repeatId !== n) && i !== e;) i = i.previousSibling;
                return i.__vue__
            }
        }

        function o(t) {
            for (var e = -1, n = new Array(t); ++e < t;) n[e] = e;
            return n
        }

        function r(t) {
            for (var e = {}, n = 0, i = t.length; n < i; n++) e[t[n].$key] = t[n];
            return e
        }

        function s(t) {
            var e = typeof t;
            return null == t || "string" === e || "number" === e || "boolean" === e
        }
        var a = n(2),
            l = n(3),
            c = a.isObject,
            u = a.isPlainObject,
            d = n(8),
            h = n(13),
            p = n(5),
            f = n(7),
            g = 0,
            v = 0,
            m = 1,
            b = 2,
            y = 3;
        t.exports = {
            bind: function() {
                "production" !== process.env.NODE_ENV && "OPTION" === this.el.tagName && this.el.parentNode && this.el.parentNode.__v_model && a.warn("Don't use v-repeat for v-model options; use the `options` param instead: http://vuejs.org/guide/forms.html#Dynamic_Select_Options");
                var t = this.expression.match(/(.*) in (.*)/);
                t && (this.arg = t[1], this._watcherExp = t[2]), this.id = "__v_repeat_" + ++g, this.start = a.createAnchor("v-repeat-start"), this.end = a.createAnchor("v-repeat-end"), a.replace(this.el, this.end), a.before(this.start, this.end), this.template = a.isTemplate(this.el) ? p.parse(this.el, !0) : this.el, this.idKey = this._checkParam("track-by");
                var e = +this._checkParam("stagger");
                this.enterStagger = +this._checkParam("enter-stagger") || e, this.leaveStagger = +this._checkParam("leave-stagger") || e, this.refID = this._checkParam(l.prefix + "ref"), this.elID = this._checkParam(l.prefix + "el"), this.checkIf(), this.checkComponent(), this.cache = Object.create(null)
            },
            checkIf: function() {
                null !== a.attr(this.el, "if") && "production" !== process.env.NODE_ENV && a.warn('Don\'t use v-if with v-repeat. Use v-show or the "filterBy" filter instead.')
            },
            checkComponent: function() {
                this.componentState = v;
                var t = this.vm.$options,
                    e = a.checkComponent(this.el, t);
                if (e) {
                    this.Component = null, this.asComponent = !0, null !== this._checkParam("inline-template") && (this.inlineTemplate = a.extractContent(this.el, !0));
                    var n = d.parse(e);
                    if (n) {
                        var i = d.tokensToExp(n);
                        this.componentGetter = h.parse(i).get
                    } else this.componentId = e, this.pendingData = null
                } else {
                    this.Component = a.Vue, this.inline = !0, this.template = f.transclude(this.template);
                    var o = a.extend({}, t);
                    o._asComponent = !1, this._linkFn = f.compile(this.template, o)
                }
            },
            resolveComponent: function() {
                this.componentState = m, this.vm._resolveComponent(this.componentId, a.bind(function(t) {
                    this.componentState !== y && (this.Component = t, this.componentState = b, this.realUpdate(this.pendingData), this.pendingData = null)
                }, this))
            },
            resolveDynamicComponent: function(t, e) {
                var n, i = Object.create(this.vm);
                for (n in t) a.define(i, n, t[n]);
                for (n in e) a.define(i, n, e[n]);
                var o = this.componentGetter.call(i, i),
                    r = a.resolveAsset(this.vm.$options, "components", o);
                return "production" !== process.env.NODE_ENV && a.assertAsset(r, "component", o), r.options ? r : ("production" !== process.env.NODE_ENV && a.warn("Async resolution is not supported for v-repeat + dynamic component. (component: " + o + ")"), a.Vue)
            },
            update: function(t) {
                if ("production" === process.env.NODE_ENV || a.isArray(t) || a.warn("v-repeat pre-converts Objects into Arrays, and v-repeat filters should always return Arrays."), this.componentId) {
                    var e = this.componentState;
                    e === v ? (this.pendingData = t, this.resolveComponent()) : e === m ? this.pendingData = t : e === b && this.realUpdate(t)
                } else this.realUpdate(t)
            },
            realUpdate: function(t) {
                this.vms = this.diff(t, this.vms), this.refID && (this.vm.$[this.refID] = this.converted ? r(this.vms) : this.vms), this.elID && (this.vm.$$[this.elID] = this.vms.map(function(t) {
                    return t.$el
                }))
            },
            diff: function(t, e) {
                var n, o, r, s, l, u, d = this.idKey,
                    h = this.converted,
                    p = this.start,
                    f = this.end,
                    g = a.inDoc(p),
                    v = this.arg,
                    m = !e,
                    b = new Array(t.length);
                for (s = 0, l = t.length; s < l; s++) n = t[s], o = h ? n.$value : n, u = !c(o), r = !m && this.getVm(o, s, h ? n.$key : null), r ? ("production" !== process.env.NODE_ENV && r._reused && a.warn('Duplicate objects found in v-repeat="' + this.expression + '": ' + JSON.stringify(o)), r._reused = !0, r.$index = s, (d || h || u) && (v ? r[v] = o : a.isPlainObject(o) ? r.$data = o : r.$value = o)) : (r = this.build(n, s, !0), r._reused = !1), b[s] = r, m && r.$before(f);
                if (m) return b;
                var y = 0,
                    _ = e.length - b.length;
                for (s = 0, l = e.length; s < l; s++) r = e[s], r._reused || (this.uncacheVm(r), r.$destroy(!1, !0), this.remove(r, y++, _, g));
                var w, x, C, k = 0;
                for (s = 0, l = b.length; s < l; s++) r = b[s], w = b[s - 1], x = w ? w._staggerCb ? w._staggerAnchor : w._fragmentEnd || w.$el : p, r._reused && !r._staggerCb ? (C = i(r, p, this.id), C !== w && this.move(r, x)) : this.insert(r, k++, x, g), r._reused = !1;
                return b
            },
            build: function(t, e, n) {
                var i = {
                    $index: e
                };
                this.converted && (i.$key = t.$key);
                var o = this.converted ? t.$value : t,
                    r = this.arg;
                r ? (t = {}, t[r] = o) : u(o) ? t = o : (t = {}, i.$value = o);
                var l = this.Component || this.resolveDynamicComponent(t, i),
                    c = this._host || this.vm,
                    d = c.$addChild({
                        el: p.clone(this.template),
                        data: t,
                        inherit: this.inline,
                        template: this.inlineTemplate,
                        _meta: i,
                        _repeat: this.inline,
                        _asComponent: this.asComponent,
                        _linkerCachable: !this.inlineTemplate && l !== a.Vue,
                        _linkFn: this._linkFn,
                        _repeatId: this.id,
                        _context: this.vm
                    }, l);
                n && this.cacheVm(o, d, e, this.converted ? i.$key : null);
                var h = this;
                return "object" === this.rawType && s(o) && d.$watch(r || "$value", function(t) {
                    h.filters && "production" !== process.env.NODE_ENV && a.warn("You seem to be mutating the $value reference of a v-repeat instance (likely through v-model) and filtering the v-repeat at the same time. This will not work properly with an Array of primitive values. Please use an Array of Objects instead."), h._withLock(function() {
                        h.converted ? h.rawValue[d.$key] = t : h.rawValue.$set(d.$index, t)
                    })
                }), d
            },
            unbind: function() {
                if (this.componentState = y, this.refID && (this.vm.$[this.refID] = null), this.vms)
                    for (var t, e = this.vms.length; e--;) t = this.vms[e], this.uncacheVm(t), t.$destroy()
            },
            cacheVm: function(t, e, n, i) {
                var o, r = this.idKey,
                    s = this.cache,
                    l = !c(t);
                i || r || l ? (o = r ? "$index" === r ? n : t[r] : i || n, s[o] ? l || "$index" === r || "production" !== process.env.NODE_ENV && a.warn("Duplicate objects with the same track-by key in v-repeat: " + o) : s[o] = e) : (o = this.id, t.hasOwnProperty(o) ? null === t[o] ? t[o] = e : "production" !== process.env.NODE_ENV && a.warn('Duplicate objects found in v-repeat="' + this.expression + '": ' + JSON.stringify(t)) : a.define(t, o, e)), e._raw = t
            },
            getVm: function(t, e, n) {
                var i = this.idKey,
                    o = !c(t);
                if (n || i || o) {
                    var r = i ? "$index" === i ? e : t[i] : n || e;
                    return this.cache[r]
                }
                return t[this.id]
            },
            uncacheVm: function(t) {
                var e = t._raw,
                    n = this.idKey,
                    i = t.$index,
                    o = t.hasOwnProperty("$key") && t.$key,
                    r = !c(e);
                if (n || o || r) {
                    var s = n ? "$index" === n ? i : e[n] : o || i;
                    this.cache[s] = null
                } else e[this.id] = null, t._raw = null
            },
            insert: function(t, e, n, i) {
                t._staggerCb && (t._staggerCb.cancel(), t._staggerCb = null);
                var o = this.getStagger(t, e, null, "enter");
                if (i && o) {
                    var r = t._staggerAnchor;
                    r || (r = t._staggerAnchor = a.createAnchor("stagger-anchor"), r.__vue__ = t), a.after(r, n);
                    var s = t._staggerCb = a.cancellable(function() {
                        t._staggerCb = null, t.$before(r), a.remove(r)
                    });
                    setTimeout(s, o)
                } else t.$after(n)
            },
            move: function(t, e) {
                t.$after(e, null, !1)
            },
            remove: function(t, e, n, i) {
                function o() {
                    t.$remove(function() {
                        t._cleanup()
                    })
                }
                if (t._staggerCb) return t._staggerCb.cancel(), void(t._staggerCb = null);
                var r = this.getStagger(t, e, n, "leave");
                if (i && r) {
                    var s = t._staggerCb = a.cancellable(function() {
                        t._staggerCb = null, o()
                    });
                    setTimeout(s, r)
                } else o()
            },
            getStagger: function(t, e, n, i) {
                i += "Stagger";
                var o = t.$el.__v_trans,
                    r = o && o.hooks,
                    s = r && (r[i] || r.stagger);
                return s ? s.call(t, e, n) : e * this[i]
            },
            _preProcess: function(t) {
                this.rawValue = t;
                var e = this.rawType = typeof t;
                if (u(t)) {
                    for (var n, i = Object.keys(t), r = i.length, s = new Array(r); r--;) n = i[r], s[r] = {
                        $key: n,
                        $value: t[n]
                    };
                    return this.converted = !0, s
                }
                return this.converted = !1, "number" === e ? t = o(t) : "string" === e && (t = a.toArray(t)), t || []
            }
        }
    },
    166: function(t, e, n) {
        var i = n(17);
        t.exports = function(t) {
            var e = this.el;
            i.apply(e, t ? 1 : -1, function() {
                e.style.display = t ? "" : "none"
            }, this.vm)
        }
    },
    167: function(t, e, n) {
        function i(t) {
            if (d[t]) return d[t];
            var e = o(t);
            return d[t] = d[e] = e, e
        }

        function o(t) {
            t = t.replace(c, "$1-$2").toLowerCase();
            var e = r.camelize(t),
                n = e.charAt(0).toUpperCase() + e.slice(1);
            if (u || (u = document.createElement("div")), e in u.style) return t;
            for (var i, o = s.length; o--;)
                if (i = a[o] + n, i in u.style) return s[o] + t
        }
        var r = n(2),
            s = ["-webkit-", "-moz-", "-ms-"],
            a = ["Webkit", "Moz", "ms"],
            l = /!important;?$/,
            c = /([a-z])([A-Z])/g,
            u = null,
            d = {};
        t.exports = {
            deep: !0,
            update: function(t) {
                this.arg ? this.setProp(this.arg, t) : "object" == typeof t ? this.objectHandler(t) : this.el.style.cssText = t
            },
            objectHandler: function(t) {
                var e, n, i = this.cache || (this.cache = {});
                for (e in i) e in t || (this.setProp(e, null), delete i[e]);
                for (e in t) n = t[e], n !== i[e] && (i[e] = n, this.setProp(e, n))
            },
            setProp: function(t, e) {
                if (t = i(t))
                    if (null != e && (e += ""), e) {
                        var n = l.test(e) ? "important" : "";
                        n && (e = e.replace(l, "").trim()), this.el.style.setProperty(t, e, n)
                    } else this.el.style.removeProperty(t)
            }
        }
    },
    168: function(t, e, n) {
        var i = n(2);
        t.exports = {
            bind: function() {
                this.attr = 3 === this.el.nodeType ? "data" : "textContent"
            },
            update: function(t) {
                this.el[this.attr] = i.toString(t)
            }
        }
    },
    169: function(t, e, n) {
        var i = n(2),
            o = n(184);
        t.exports = {
            priority: 1e3,
            isLiteral: !0,
            bind: function() {
                this._isDynamicLiteral || this.update(this.expression)
            },
            update: function(t, e) {
                var n = this.el,
                    r = this.el.__vue__ || this.vm,
                    s = i.resolveAsset(r.$options, "transitions", t);
                t = t || "v", n.__v_trans = new o(n, t, s, r), e && i.removeClass(n, e + "-transition"), i.addClass(n, t + "-transition")
            }
        }
    },
    170: function(t, e, n) {
        function i(t, e, n) {
            for (var i = document.createDocumentFragment(), o = 0, s = t.length; o < s; o++) {
                var a = t[o];
                n && !a.__v_selected ? i.appendChild(r(a)) : n || a.parentNode !== e || (a.__v_selected = !0, i.appendChild(r(a)))
            }
            return i
        }
        var o = n(2),
            r = n(5).clone;
        t.exports = {
            bind: function() {
                for (var t = this.vm, e = t; e.$options._repeat;) e = e.$parent;
                var n, o = e.$options._content;
                if (!o) return void this.fallback();
                var r = e._context,
                    s = this._checkParam("select");
                if (s) {
                    var a = o.querySelectorAll(s);
                    a.length ? (n = i(a, o), n.hasChildNodes() ? this.compile(n, r, t) : this.fallback()) : this.fallback()
                } else {
                    var l = this,
                        c = function() {
                            l.compile(i(o.childNodes, o, !0), r, t)
                        };
                    e._isCompiled ? c() : e.$once("hook:compiled", c)
                }
            },
            fallback: function() {
                this.compile(o.extractContent(this.el, !0), this.vm)
            },
            compile: function(t, e, n) {
                t && e && (this.unlink = e.$compile(t, n)), t ? o.replace(this.el, t) : o.remove(this.el)
            },
            unbind: function() {
                this.unlink && this.unlink()
            }
        }
    },
    171: function(t, e, n) {
        e.content = n(170), e.partial = n(172)
    },
    172: function(t, e, n) {
        var i = n(2),
            o = n(5),
            r = n(8),
            s = n(7),
            a = n(6),
            l = new a(1e3),
            c = n(21);
        t.exports = {
            link: c.link,
            teardown: c.teardown,
            getContainedComponents: c.getContainedComponents,
            bind: function() {
                var t = this.el;
                this.start = i.createAnchor("v-partial-start"), this.end = i.createAnchor("v-partial-end"), i.replace(t, this.end), i.before(this.start, this.end);
                var e = t.getAttribute("name"),
                    n = r.parse(e);
                n ? this.setupDynamic(n) : this.insert(e)
            },
            setupDynamic: function(t) {
                var e = this,
                    n = r.tokensToExp(t);
                this.unwatch = this.vm.$watch(n, function(t) {
                    e.teardown(), e.insert(t)
                }, {
                    immediate: !0,
                    user: !1
                })
            },
            insert: function(t) {
                var e = i.resolveAsset(this.vm.$options, "partials", t);
                if ("production" !== process.env.NODE_ENV && i.assertAsset(e, "partial", t), e) {
                    var n = o.parse(e, !0),
                        r = (this.vm.constructor.cid || "") + e,
                        s = this.compile(n, r);
                    this.link(n, s)
                }
            },
            compile: function(t, e) {
                var n = l.get(e);
                if (n) return n;
                var i = s.compile(t, this.vm.$options, !0);
                return l.put(e, i), i
            },
            unbind: function() {
                this.unlink && this.unlink(), this.unwatch && this.unwatch()
            }
        }
    },
    173: function(t, e, n) {
        function i(t, e) {
            var n;
            if (o.isPlainObject(t)) {
                var r = Object.keys(t);
                for (n = r.length; n--;)
                    if (i(t[r[n]], e)) return !0
            } else if (o.isArray(t)) {
                for (n = t.length; n--;)
                    if (i(t[n], e)) return !0
            } else if (null != t) return t.toString().toLowerCase().indexOf(e) > -1
        }
        var o = n(2),
            r = n(14);
        e.filterBy = function(t, e, n) {
            if (null == e) return t;
            if ("function" == typeof e) return t.filter(e);
            e = ("" + e).toLowerCase();
            var s = "in" === n ? 3 : 2,
                a = o.toArray(arguments, s).reduce(function(t, e) {
                    return t.concat(e)
                }, []);
            return t.filter(function(t) {
                return a.length ? a.some(function(n) {
                    return i(r.get(t, n), e)
                }) : i(t, e)
            })
        }, e.orderBy = function(t, e, n) {
            if (!e) return t;
            var i = 1;
            return arguments.length > 2 && (i = "-1" === n ? -1 : n ? -1 : 1), t.slice().sort(function(t, n) {
                return "$key" !== e && "$value" !== e && (t && "$value" in t && (t = t.$value), n && "$value" in n && (n = n.$value)), t = o.isObject(t) ? r.get(t, e) : t, n = o.isObject(n) ? r.get(n, e) : n, t === n ? 0 : t > n ? i : -i
            })
        }
    },
    174: function(t, e, n) {
        var i = n(2);
        e.json = {
            read: function(t, e) {
                return "string" == typeof t ? t : JSON.stringify(t, null, Number(e) || 2)
            },
            write: function(t) {
                try {
                    return JSON.parse(t)
                } catch (e) {
                    return t
                }
            }
        }, e.capitalize = function(t) {
            return t || 0 === t ? (t = t.toString(), t.charAt(0).toUpperCase() + t.slice(1)) : ""
        }, e.uppercase = function(t) {
            return t || 0 === t ? t.toString().toUpperCase() : ""
        }, e.lowercase = function(t) {
            return t || 0 === t ? t.toString().toLowerCase() : ""
        };
        var o = /(\d{3})(?=\d)/g;
        e.currency = function(t, e) {
            if (t = parseFloat(t), !isFinite(t) || !t && 0 !== t) return "";
            e = null != e ? e : "$";
            var n = Math.abs(t).toFixed(2),
                i = n.slice(0, -3),
                r = i.length % 3,
                s = r > 0 ? i.slice(0, r) + (i.length > 3 ? "," : "") : "",
                a = n.slice(-3),
                l = t < 0 ? "-" : "";
            return e + l + s + i.slice(r).replace(o, "$1,") + a
        }, e.pluralize = function(t) {
            var e = i.toArray(arguments, 1);
            return e.length > 1 ? e[t % 10 - 1] || e[e.length - 1] : e[0] + (1 === t ? "" : "s")
        };
        var r = {
            esc: 27,
            tab: 9,
            enter: 13,
            space: 32,
            delete: 46,
            up: 38,
            left: 37,
            right: 39,
            down: 40
        };
        e.key = function(t, e) {
            if (t) {
                var n = r[e];
                return n || (n = parseInt(e, 10)),
                    function(e) {
                        if (e.keyCode === n) return t.call(this, e)
                    }
            }
        }, e.key.keyCodes = r, e.debounce = function(t, e) {
            if (t) return e || (e = 300), i.debounce(t, e)
        }, i.extend(e, n(173))
    },
    175: function(t, e, n) {
        var i = n(2),
            o = n(151),
            r = n(7);
        e._compile = function(t) {
            var e = this.$options,
                n = this._host;
            if (e._linkFn) this._initElement(t), this._unlinkFn = e._linkFn(this, t, n);
            else {
                var o = t;
                t = r.transclude(t, e), this._initElement(t);
                var s, a = r.compileRoot(t, e),
                    l = this.constructor;
                e._linkerCachable && (s = l.linker, s || (s = l.linker = r.compile(t, e)));
                var c = a(this, t),
                    u = s ? s(this, t) : r.compile(t, e)(this, t, n);
                this._unlinkFn = function() {
                    c(), u(!0)
                }, e.replace && i.replace(o, t)
            }
            return t
        }, e._initElement = function(t) {
            t instanceof DocumentFragment ? (this._isFragment = !0, this.$el = this._fragmentStart = t.firstChild, this._fragmentEnd = t.lastChild, 3 === this._fragmentStart.nodeType && (this._fragmentStart.data = this._fragmentEnd.data = ""), this._blockFragment = t) : this.$el = t, this.$el.__vue__ = this, this._callHook("beforeCompile")
        }, e._bindDir = function(t, e, n, i, r) {
            this._directives.push(new o(t, e, this, n, i, r))
        }, e._destroy = function(t, e) {
            if (!this._isBeingDestroyed) {
                this._callHook("beforeDestroy"), this._isBeingDestroyed = !0;
                var n, i = this.$parent;
                for (i && !i._isBeingDestroyed && i.$children.$remove(this), n = this.$children.length; n--;) this.$children[n].$destroy();
                for (this._propsUnlinkFn && this._propsUnlinkFn(), this._unlinkFn && this._unlinkFn(), n = this._watchers.length; n--;) this._watchers[n].teardown();
                this.$el && (this.$el.__vue__ = null);
                var o = this;
                t && this.$el ? this.$remove(function() {
                    o._cleanup()
                }) : e || this._cleanup()
            }
        }, e._cleanup = function() {
            this._data.__ob__ && this._data.__ob__.removeVm(this), this.$el = this.$parent = this.$root = this.$children = this._watchers = this._directives = null, this._isDestroyed = !0, this._callHook("destroyed"), this.$off()
        }
    },
    176: function(t, e, n) {
        function i(t, e, n) {
            if (n) {
                var i, r, s, a;
                for (r in n)
                    if (i = n[r], c.isArray(i))
                        for (s = 0, a = i.length; s < a; s++) o(t, e, r, i[s]);
                    else o(t, e, r, i)
            }
        }

        function o(t, e, n, i, r) {
            var s = typeof i;
            if ("function" === s) t[e](n, i, r);
            else if ("string" === s) {
                var a = t.$options.methods,
                    l = a && a[i];
                l ? t[e](n, l, r) : "production" !== process.env.NODE_ENV && c.warn('Unknown method: "' + i + '" when registering callback for ' + e + ': "' + n + '".')
            } else i && "object" === s && o(t, e, n, i.handler, i)
        }

        function r() {
            this._isAttached || (this._isAttached = !0, this.$children.forEach(s))
        }

        function s(t) {
            !t._isAttached && u(t.$el) && t._callHook("attached")
        }

        function a() {
            this._isAttached && (this._isAttached = !1, this.$children.forEach(l))
        }

        function l(t) {
            t._isAttached && !u(t.$el) && t._callHook("detached")
        }
        var c = n(2),
            u = c.inDoc;
        e._initEvents = function() {
            var t = this.$options;
            i(this, "$on", t.events), i(this, "$watch", t.watch)
        }, e._initDOMHooks = function() {
            this.$on("hook:attached", r), this.$on("hook:detached", a)
        }, e._callHook = function(t) {
            var e = this.$options[t];
            if (e)
                for (var n = 0, i = e.length; n < i; n++) e[n].call(this);
            this.$emit("hook:" + t)
        }
    },
    177: function(t, e, n) {
        var i = n(2).mergeOptions;
        e._init = function(t) {
            t = t || {}, this.$el = null, this.$parent = t._parent, this.$root = t._root || this, this.$children = [], this.$ = {}, this.$$ = {}, this._watchers = [], this._directives = [], this._childCtors = {}, this._isVue = !0, this._events = {}, this._eventsCount = {}, this._eventCancelled = !1, this._isFragment = !1, this._fragmentStart = this._fragmentEnd = null, this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = !1, this._unlinkFn = null, this._context = t._context || t._parent, this.$parent && this.$parent.$children.push(this), this._reused = !1, this._staggerOp = null, t = this.$options = i(this.constructor.options, t, this), this._data = {}, this._initScope(), this._initEvents(), this._callHook("created"), t.el && this.$mount(t.el)
        }
    },
    178: function(t, e, n) {
        var i = n(2);
        e._applyFilters = function(t, e, n, o) {
            var r, s, a, l, c, u, d, h, p;
            for (u = 0, d = n.length; u < d; u++)
                if (r = n[u], s = i.resolveAsset(this.$options, "filters", r.name), "production" !== process.env.NODE_ENV && i.assertAsset(s, "filter", r.name), s && (s = o ? s.write : s.read || s, "function" == typeof s)) {
                    if (a = o ? [t, e] : [t], c = o ? 2 : 1, r.args)
                        for (h = 0, p = r.args.length; h < p; h++) l = r.args[h], a[h + c] = l.dynamic ? this.$get(l.value) : l.value;
                    t = s.apply(this, a)
                }
            return t
        }, e._resolveComponent = function(t, e) {
            var n = i.resolveAsset(this.$options, "components", t);
            if ("production" !== process.env.NODE_ENV && i.assertAsset(n, "component", t), n)
                if (n.options) e(n);
                else if (n.resolved) e(n.resolved);
            else if (n.requested) n.pendingCallbacks.push(e);
            else {
                n.requested = !0;
                var o = n.pendingCallbacks = [e];
                n(function(t) {
                    i.isPlainObject(t) && (t = i.Vue.extend(t)), n.resolved = t;
                    for (var e = 0, r = o.length; e < r; e++) o[e](t)
                }, function(e) {
                    "production" !== process.env.NODE_ENV && i.warn("Failed to resolve async component: " + t + ". " + (e ? "\nReason: " + e : ""))
                })
            }
        }
    },
    179: function(t, e, n) {
        function i() {}

        function o(t, e) {
            var n = new c(e, t, null, {
                lazy: !0
            });
            return function() {
                return n.dirty && n.evaluate(), l.target && n.depend(), n.value
            }
        }
        var r = n(2),
            s = n(7),
            a = n(181),
            l = n(16),
            c = n(15);
        e._initScope = function() {
            this._initProps(), this._initMeta(), this._initMethods(), this._initData(), this._initComputed()
        }, e._initProps = function() {
            var t = this.$options,
                e = t.el,
                n = t.props;
            n && !e && "production" !== process.env.NODE_ENV && r.warn("Props will not be compiled if no `el` option is provided at instantiation."), e = t.el = r.query(e), this._propsUnlinkFn = e && 1 === e.nodeType && n ? s.compileAndLinkProps(this, e, n) : null
        }, e._initData = function() {
            var t = this._data,
                e = this.$options.data,
                n = e && e();
            if (n) {
                this._data = n;
                for (var i in t) null === this._props[i].raw && n.hasOwnProperty(i) || n.$set(i, t[i])
            }
            var o, s, l = this._data,
                c = Object.keys(l);
            for (o = c.length; o--;) s = c[o], r.isReserved(s) || this._proxy(s);
            a.create(l, this)
        }, e._setData = function(t) {
            t = t || {};
            var e = this._data;
            this._data = t;
            var n, i, o, s = this.$options.props;
            if (s)
                for (o = s.length; o--;) i = s[o].name, "$data" === i || t.hasOwnProperty(i) || t.$set(i, e[i]);
            for (n = Object.keys(e), o = n.length; o--;) i = n[o], r.isReserved(i) || i in t || this._unproxy(i);
            for (n = Object.keys(t), o = n.length; o--;) i = n[o], this.hasOwnProperty(i) || r.isReserved(i) || this._proxy(i);
            e.__ob__.removeVm(this), a.create(t, this), this._digest()
        }, e._proxy = function(t) {
            var e = this;
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return e._data[t]
                },
                set: function(n) {
                    e._data[t] = n
                }
            })
        }, e._unproxy = function(t) {
            delete this[t]
        }, e._digest = function() {
            for (var t = this._watchers.length; t--;) this._watchers[t].update(!0);
            var e = this.$children;
            for (t = e.length; t--;) {
                var n = e[t];
                n.$options.inherit && n._digest()
            }
        }, e._initComputed = function() {
            var t = this.$options.computed;
            if (t)
                for (var e in t) {
                    var n = t[e],
                        s = {
                            enumerable: !0,
                            configurable: !0
                        };
                    "function" == typeof n ? (s.get = o(n, this), s.set = i) : (s.get = n.get ? n.cache !== !1 ? o(n.get, this) : r.bind(n.get, this) : i, s.set = n.set ? r.bind(n.set, this) : i), Object.defineProperty(this, e, s)
                }
        }, e._initMethods = function() {
            var t = this.$options.methods;
            if (t)
                for (var e in t) this[e] = r.bind(t[e], this)
        }, e._initMeta = function() {
            var t = this.$options._meta;
            if (t)
                for (var e in t) this._defineMeta(e, t[e])
        }, e._defineMeta = function(t, e) {
            var n = new l;
            Object.defineProperty(this, t, {
                get: function() {
                    return l.target && n.depend(), e
                },
                set: function(t) {
                    t !== e && (e = t, n.notify())
                }
            })
        }
    },
    180: function(t, e, n) {
        var i = n(2),
            o = Array.prototype,
            r = Object.create(o);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(t) {
            var e = o[t];
            i.define(r, t, function() {
                for (var n = arguments.length, i = new Array(n); n--;) i[n] = arguments[n];
                var o, r, s = e.apply(this, i),
                    a = this.__ob__;
                switch (t) {
                    case "push":
                        o = i;
                        break;
                    case "unshift":
                        o = i;
                        break;
                    case "splice":
                        o = i.slice(2), r = s;
                        break;
                    case "pop":
                    case "shift":
                        r = [s]
                }
                return o && a.observeArray(o), r && a.unobserveArray(r), a.notify(), s
            })
        }), i.define(o, "$set", function(t, e) {
            return t >= this.length && (this.length = t + 1), this.splice(t, 1, e)[0]
        }), i.define(o, "$remove", function(t) {
            if (this.length) return "number" != typeof t && (t = i.indexOf(this, t)), t > -1 ? this.splice(t, 1) : void 0
        }), t.exports = r
    },
    181: function(t, e, n) {
        function i(t) {
            if (this.value = t, this.dep = new l, s.define(t, "__ob__", this), s.isArray(t)) {
                var e = a.proto && s.hasProto ? o : r;
                e(t, c, u), this.observeArray(t)
            } else this.walk(t)
        }

        function o(t, e) {
            t.__proto__ = e
        }

        function r(t, e, n) {
            for (var i, o = n.length; o--;) i = n[o], s.define(t, i, e[i])
        }
        var s = n(2),
            a = n(3),
            l = n(16),
            c = n(180),
            u = Object.getOwnPropertyNames(c);
        n(182), i.create = function(t, e) {
            var n;
            return t && t.hasOwnProperty("__ob__") && t.__ob__ instanceof i ? n = t.__ob__ : !s.isArray(t) && !s.isPlainObject(t) || Object.isFrozen(t) || t._isVue || (n = new i(t)), n && e && n.addVm(e), n
        }, i.prototype.walk = function(t) {
            for (var e = Object.keys(t), n = e.length; n--;) this.convert(e[n], t[e[n]])
        }, i.prototype.observe = function(t) {
            return i.create(t)
        }, i.prototype.observeArray = function(t) {
            for (var e = t.length; e--;) {
                var n = this.observe(t[e]);
                n && (n.parents || (n.parents = [])).push(this)
            }
        }, i.prototype.unobserveArray = function(t) {
            for (var e = t.length; e--;) {
                var n = t[e] && t[e].__ob__;
                n && n.parents.$remove(this)
            }
        }, i.prototype.notify = function() {
            this.dep.notify();
            var t = this.parents;
            if (t)
                for (var e = t.length; e--;) t[e].notify()
        }, i.prototype.convert = function(t, e) {
            var n = this,
                i = n.observe(e),
                o = new l;
            Object.defineProperty(n.value, t, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return l.target && (o.depend(), i && i.dep.depend()), e
                },
                set: function(t) {
                    t !== e && (e = t, i = n.observe(t), o.notify())
                }
            })
        }, i.prototype.addVm = function(t) {
            (this.vms || (this.vms = [])).push(t)
        }, i.prototype.removeVm = function(t) {
            this.vms.$remove(t)
        }, t.exports = i
    },
    182: function(t, e, n) {
        var i = n(2),
            o = Object.prototype;
        i.define(o, "$add", function(t, e) {
            if (!this.hasOwnProperty(t)) {
                var n = this.__ob__;
                if (!n || i.isReserved(t)) return void(this[t] = e);
                if (n.convert(t, e), n.notify(), n.vms)
                    for (var o = n.vms.length; o--;) {
                        var r = n.vms[o];
                        r._proxy(t), r._digest()
                    }
            }
        }), i.define(o, "$set", function(t, e) {
            this.$add(t, e), this[t] = e
        }), i.define(o, "$delete", function(t) {
            if (this.hasOwnProperty(t)) {
                delete this[t];
                var e = this.__ob__;
                if (e && !i.isReserved(t) && (e.notify(), e.vms))
                    for (var n = e.vms.length; n--;) {
                        var o = e.vms[n];
                        o._unproxy(t), o._digest()
                    }
            }
        })
    },
    183: function(t, e, n) {
        function i() {
            for (var t = document.documentElement.offsetHeight, e = 0; e < r.length; e++) r[e]();
            return r = [], s = !1, t
        }
        var o = n(2),
            r = [],
            s = !1;
        e.push = function(t) {
            r.push(t), s || (s = !0, o.nextTick(i))
        }
    },
    184: function(t, e, n) {
        function i(t, e, n, i) {
            this.id = g++, this.el = t, this.enterClass = e + "-enter", this.leaveClass = e + "-leave", this.hooks = n, this.vm = i, this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null, this.justEntered = !1, this.entered = this.left = !1, this.typeCache = {};
            var o = this;
            ["enterNextTick", "enterDone", "leaveNextTick", "leaveDone"].forEach(function(t) {
                o[t] = r.bind(o[t], o)
            })
        }

        function o(t) {
            return "none" === t.style.display || "hidden" === t.style.visibility || t.hidden
        }
        var r = n(2),
            s = n(183),
            a = r.addClass,
            l = r.removeClass,
            c = r.transitionEndEvent,
            u = r.animationEndEvent,
            d = r.transitionProp + "Duration",
            h = r.animationProp + "Duration",
            p = 1,
            f = 2,
            g = 0,
            v = i.prototype;
        v.enter = function(t, e) {
            this.cancelPending(), this.callHook("beforeEnter"), this.cb = e, a(this.el, this.enterClass), t(), this.entered = !1, this.callHookWithCb("enter"), this.entered || (this.cancel = this.hooks && this.hooks.enterCancelled, s.push(this.enterNextTick))
        }, v.enterNextTick = function() {
            this.justEntered = !0, r.nextTick(function() {
                this.justEntered = !1
            }, this);
            var t = this.enterDone,
                e = this.getCssTransitionType(this.enterClass);
            this.pendingJsCb ? e === p && l(this.el, this.enterClass) : e === p ? (l(this.el, this.enterClass), this.setupCssCb(c, t)) : e === f ? this.setupCssCb(u, t) : t()
        }, v.enterDone = function() {
            this.entered = !0, this.cancel = this.pendingJsCb = null, l(this.el, this.enterClass), this.callHook("afterEnter"), this.cb && this.cb()
        }, v.leave = function(t, e) {
            this.cancelPending(), this.callHook("beforeLeave"), this.op = t, this.cb = e, a(this.el, this.leaveClass), this.left = !1, this.callHookWithCb("leave"), this.left || (this.cancel = this.hooks && this.hooks.leaveCancelled, this.op && !this.pendingJsCb && (this.justEntered ? this.leaveDone() : s.push(this.leaveNextTick)))
        }, v.leaveNextTick = function() {
            var t = this.getCssTransitionType(this.leaveClass);
            if (t) {
                var e = t === p ? c : u;
                this.setupCssCb(e, this.leaveDone)
            } else this.leaveDone()
        }, v.leaveDone = function() {
            this.left = !0, this.cancel = this.pendingJsCb = null, this.op(), l(this.el, this.leaveClass), this.callHook("afterLeave"), this.cb && this.cb(), this.op = null
        }, v.cancelPending = function() {
            this.op = this.cb = null;
            var t = !1;
            this.pendingCssCb && (t = !0, r.off(this.el, this.pendingCssEvent, this.pendingCssCb), this.pendingCssEvent = this.pendingCssCb = null), this.pendingJsCb && (t = !0, this.pendingJsCb.cancel(), this.pendingJsCb = null), t && (l(this.el, this.enterClass), l(this.el, this.leaveClass)), this.cancel && (this.cancel.call(this.vm, this.el), this.cancel = null)
        }, v.callHook = function(t) {
            this.hooks && this.hooks[t] && this.hooks[t].call(this.vm, this.el)
        }, v.callHookWithCb = function(t) {
            var e = this.hooks && this.hooks[t];
            e && (e.length > 1 && (this.pendingJsCb = r.cancellable(this[t + "Done"])), e.call(this.vm, this.el, this.pendingJsCb))
        }, v.getCssTransitionType = function(t) {
            if (!(!c || document.hidden || this.hooks && this.hooks.css === !1 || o(this.el))) {
                var e = this.typeCache[t];
                if (e) return e;
                var n = this.el.style,
                    i = window.getComputedStyle(this.el),
                    r = n[d] || i[d];
                if (r && "0s" !== r) e = p;
                else {
                    var s = n[h] || i[h];
                    s && "0s" !== s && (e = f)
                }
                return e && (this.typeCache[t] = e), e
            }
        }, v.setupCssCb = function(t, e) {
            this.pendingCssEvent = t;
            var n = this,
                i = this.el,
                o = this.pendingCssCb = function(s) {
                    s.target === i && (r.off(i, t, o), n.pendingCssEvent = n.pendingCssCb = null, !n.pendingJsCb && e && e())
                };
            r.on(i, t, o)
        }, t.exports = i
    },
    185: function(t, e, n) {
        function i(t) {
            return t ? t.charAt(0).toUpperCase() + t.slice(1) : "custom type"
        }

        function o(t) {
            return Object.prototype.toString.call(t).slice(8, -1)
        }
        var r = n(2);
        e.commonTagRE = /^(div|p|span|img|a|br|ul|ol|li|h1|h2|h3|h4|h5|code|pre)$/, e.checkComponent = function(t, n) {
            var i = t.tagName.toLowerCase();
            if ("component" === i) {
                var o = t.getAttribute("is");
                return t.removeAttribute("is"), o
            }
            return !e.commonTagRE.test(i) && r.resolveAsset(n, "components", i) ? i : (i = r.attr(t, "component")) ? i : void 0
        }, e.initProp = function(t, n, i) {
            if (e.assertProp(n, i)) {
                var o = n.path;
                o in t ? r.define(t, o, i, !0) : t[o] = i, t._data[o] = i
            }
        }, e.assertProp = function(t, e) {
            if (null === t.raw && !t.required) return !0;
            var n, s = t.options,
                a = s.type,
                l = !0;
            if (a && (a === String ? (n = "string", l = typeof e === n) : a === Number ? (n = "number", l = "number" == typeof e) : a === Boolean ? (n = "boolean", l = "boolean" == typeof e) : a === Function ? (n = "function", l = "function" == typeof e) : a === Object ? (n = "object", l = r.isPlainObject(e)) : a === Array ? (n = "array", l = r.isArray(e)) : l = e instanceof a), !l) return "production" !== process.env.NODE_ENV && r.warn("Invalid prop: type check failed for " + t.path + '="' + t.raw + '". Expected ' + i(n) + ", got " + o(e) + "."), !1;
            var c = s.validator;
            return !(c && !c.call(null, e)) || ("production" !== process.env.NODE_ENV && r.warn("Invalid prop: custom validator check failed for " + t.path + '="' + t.raw + '"'), !1)
        }
    },
    186: function(t, e, n) {
        if ("production" !== process.env.NODE_ENV) {
            var i = n(3),
                o = "undefined" != typeof console;
            e.log = function(t) {
                o && i.debug && console.log("[Vue info]: " + t)
            }, e.warn = function(t, e) {
                !o || i.silent && !i.debug || (console.warn("[Vue warn]: " + t), i.debug && console.warn((e || new Error("Warning Stack Trace")).stack))
            }, e.assertAsset = function(t, n, i) {
                if ("directive" === n) {
                    if ("with" === i) return void e.warn("v-with has been deprecated in ^0.12.0. Use props instead.");
                    if ("events" === i) return void e.warn("v-events has been deprecated in ^0.12.0. Pass down methods as callback props instead.")
                }
                t || e.warn("Failed to resolve " + n + ": " + i)
            }
        }
    },
    187: function(t, e, n) {
        function i(t, e) {
            e && 3 === e.nodeType && !e.data.trim() && t.removeChild(e)
        }
        var o = n(2),
            r = n(3);
        e.query = function(t) {
            if ("string" == typeof t) {
                var e = t;
                t = document.querySelector(t), t || "production" !== process.env.NODE_ENV && o.warn("Cannot find element: " + e)
            }
            return t
        }, e.inDoc = function(t) {
            var e = document.documentElement,
                n = t && t.parentNode;
            return e === t || e === n || !(!n || 1 !== n.nodeType || !e.contains(n))
        }, e.attr = function(t, e) {
            e = r.prefix + e;
            var n = t.getAttribute(e);
            return null !== n && t.removeAttribute(e), n
        }, e.before = function(t, e) {
            e.parentNode.insertBefore(t, e)
        }, e.after = function(t, n) {
            n.nextSibling ? e.before(t, n.nextSibling) : n.parentNode.appendChild(t)
        }, e.remove = function(t) {
            t.parentNode.removeChild(t)
        }, e.prepend = function(t, n) {
            n.firstChild ? e.before(t, n.firstChild) : n.appendChild(t)
        }, e.replace = function(t, e) {
            var n = t.parentNode;
            n && n.replaceChild(e, t)
        }, e.on = function(t, e, n) {
            t.addEventListener(e, n)
        }, e.off = function(t, e, n) {
            t.removeEventListener(e, n)
        }, e.addClass = function(t, e) {
            if (t.classList) t.classList.add(e);
            else {
                var n = " " + (t.getAttribute("class") || "") + " ";
                n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim())
            }
        }, e.removeClass = function(t, e) {
            if (t.classList) t.classList.remove(e);
            else {
                for (var n = " " + (t.getAttribute("class") || "") + " ", i = " " + e + " "; n.indexOf(i) >= 0;) n = n.replace(i, " ");
                t.setAttribute("class", n.trim())
            }
        }, e.extractContent = function(t, n) {
            var i, o;
            if (e.isTemplate(t) && t.content instanceof DocumentFragment && (t = t.content), t.hasChildNodes())
                for (e.trimNode(t), o = n ? document.createDocumentFragment() : document.createElement("div"); i = t.firstChild;) o.appendChild(i);
            return o
        }, e.trimNode = function(t) {
            i(t, t.firstChild), i(t, t.lastChild)
        }, e.isTemplate = function(t) {
            return t.tagName && "template" === t.tagName.toLowerCase()
        }, e.createAnchor = function(t, e) {
            return r.debug ? document.createComment(t) : document.createTextNode(e ? " " : "")
        }
    },
    188: function(t, e) {
        e.hasProto = "__proto__" in {};
        var n = e.inBrowser = "undefined" != typeof window && "[object Object]" !== Object.prototype.toString.call(window);
        if (e.isIE9 = n && navigator.userAgent.toLowerCase().indexOf("msie 9.0") > 0, e.isAndroid = n && navigator.userAgent.toLowerCase().indexOf("android") > 0, n && !e.isIE9) {
            var i = void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend,
                o = void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend;
            e.transitionProp = i ? "WebkitTransition" : "transition", e.transitionEndEvent = i ? "webkitTransitionEnd" : "transitionend", e.animationProp = o ? "WebkitAnimation" : "animation", e.animationEndEvent = o ? "webkitAnimationEnd" : "animationend"
        }
        e.nextTick = function() {
            function t() {
                i = !1;
                var t = n.slice(0);
                n = [];
                for (var e = 0; e < t.length; e++) t[e]()
            }
            var e, n = [],
                i = !1;
            if ("undefined" != typeof MutationObserver) {
                var o = 1,
                    r = new MutationObserver(t),
                    s = document.createTextNode(o);
                r.observe(s, {
                    characterData: !0
                }), e = function() {
                    o = (o + 1) % 2, s.data = o
                }
            } else e = setTimeout;
            return function(o, r) {
                var s = r ? function() {
                    o.call(r)
                } : o;
                n.push(s), i || (i = !0, e(t, 0))
            }
        }()
    },
    189: function(t, e) {
        function n(t, e) {
            return e ? e.toUpperCase() : ""
        }
        e.isReserved = function(t) {
            var e = (t + "").charCodeAt(0);
            return 36 === e || 95 === e
        }, e.toString = function(t) {
            return null == t ? "" : t.toString()
        }, e.toNumber = function(t) {
            if ("string" != typeof t) return t;
            var e = Number(t);
            return isNaN(e) ? t : e
        }, e.toBoolean = function(t) {
            return "true" === t || "false" !== t && t
        }, e.stripQuotes = function(t) {
            var e = t.charCodeAt(0),
                n = t.charCodeAt(t.length - 1);
            return e === n && (34 === e || 39 === e) && t.slice(1, -1)
        }, e.camelize = function(t) {
            return t.replace(/-(\w)/g, n)
        }, e.hyphenate = function(t) {
            return t.replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase()
        };
        var i = /(?:^|[-_\/])(\w)/g;
        e.classify = function(t) {
            return t.replace(i, n)
        }, e.bind = function(t, e) {
            return function(n) {
                var i = arguments.length;
                return i ? i > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e)
            }
        }, e.toArray = function(t, e) {
            e = e || 0;
            for (var n = t.length - e, i = new Array(n); n--;) i[n] = t[n + e];
            return i
        }, e.extend = function(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }, e.isObject = function(t) {
            return null !== t && "object" == typeof t
        };
        var o = Object.prototype.toString,
            r = "[object Object]";
        e.isPlainObject = function(t) {
            return o.call(t) === r
        }, e.isArray = Array.isArray, e.define = function(t, e, n, i) {
            Object.defineProperty(t, e, {
                value: n,
                enumerable: !!i,
                writable: !0,
                configurable: !0
            })
        }, e.debounce = function(t, e) {
            var n, i, o, r, s, a = function() {
                var l = Date.now() - r;
                l < e && l >= 0 ? n = setTimeout(a, e - l) : (n = null, s = t.apply(o, i), n || (o = i = null))
            };
            return function() {
                return o = this, i = arguments, r = Date.now(), n || (n = setTimeout(a, e)), s
            }
        }, e.indexOf = function(t, e) {
            for (var n = t.length; n--;)
                if (t[n] === e) return n;
            return -1
        }, e.cancellable = function(t) {
            var e = function() {
                if (!e.cancelled) return t.apply(this, arguments)
            };
            return e.cancel = function() {
                e.cancelled = !0
            }, e
        }, e.looseEqual = function(t, n) {
            return t == n || !(!e.isObject(t) || !e.isObject(n)) && JSON.stringify(t) === JSON.stringify(n)
        }
    },
    190: function(t, e, n) {
        function i(t, e) {
            var n, o, r;
            for (n in e) o = t[n], r = e[n], t.hasOwnProperty(n) ? l.isObject(o) && l.isObject(r) && i(o, r) : t.$add(n, r);
            return t
        }

        function o(t, e) {
            var n = Object.create(t);
            return e ? u(n, a(e)) : n
        }

        function r(t) {
            if (t.components)
                for (var e, n = t.components = a(t.components), i = Object.keys(n), o = 0, r = i.length; o < r; o++) {
                    var s = i[o];
                    l.commonTagRE.test(s) ? "production" !== process.env.NODE_ENV && l.warn("Do not use built-in HTML elements as component id: " + s) : (e = n[s], l.isPlainObject(e) && (e.id = e.id || s, n[s] = e._Ctor || (e._Ctor = l.Vue.extend(e))))
                }
        }

        function s(t) {
            var e = t.props;
            l.isPlainObject(e) ? t.props = Object.keys(e).map(function(t) {
                var n = e[t];
                return l.isPlainObject(n) || (n = {
                    type: n
                }), n.name = t, n
            }) : l.isArray(e) && (t.props = e.map(function(t) {
                return "string" == typeof t ? {
                    name: t
                } : t
            }))
        }

        function a(t) {
            if (l.isArray(t)) {
                for (var e, n = {}, i = t.length; i--;) {
                    e = t[i];
                    var o = e.id || e.options && e.options.id;
                    o ? n[o] = e : "production" !== process.env.NODE_ENV && l.warn("Array-syntax assets must provide an id field.")
                }
                return n
            }
            return t
        }
        var l = n(2),
            c = n(3),
            u = l.extend,
            d = c.optionMergeStrategies = Object.create(null);
        d.data = function(t, e, n) {
            return n ? t || e ? function() {
                var o = "function" == typeof e ? e.call(n) : e,
                    r = "function" == typeof t ? t.call(n) : void 0;
                return o ? i(o, r) : r
            } : void 0 : e ? "function" != typeof e ? ("production" !== process.env.NODE_ENV && l.warn('The "data" option should be a function that returns a per-instance value in component definitions.'), t) : t ? function() {
                return i(e.call(this), t.call(this))
            } : e : t
        }, d.el = function(t, e, n) {
            if (!n && e && "function" != typeof e) return void("production" !== process.env.NODE_ENV && l.warn('The "el" option should be a function that returns a per-instance value in component definitions.'));
            var i = e || t;
            return n && "function" == typeof i ? i.call(n) : i
        }, d.created = d.ready = d.attached = d.detached = d.beforeCompile = d.compiled = d.beforeDestroy = d.destroyed = d.props = function(t, e) {
            return e ? t ? t.concat(e) : l.isArray(e) ? e : [e] : t
        }, d.paramAttributes = function() {
            "production" !== process.env.NODE_ENV && l.warn('"paramAttributes" option has been deprecated in 0.12. Use "props" instead.')
        }, c._assetTypes.forEach(function(t) {
            d[t + "s"] = o
        }), d.watch = d.events = function(t, e) {
            if (!e) return t;
            if (!t) return e;
            var n = {};
            u(n, t);
            for (var i in e) {
                var o = n[i],
                    r = e[i];
                o && !l.isArray(o) && (o = [o]), n[i] = o ? o.concat(r) : [r]
            }
            return n
        }, d.methods = d.computed = function(t, e) {
            if (!e) return t;
            if (!t) return e;
            var n = Object.create(t);
            return u(n, e), n
        };
        var h = function(t, e) {
            return void 0 === e ? t : e
        };
        e.mergeOptions = function t(e, n, i) {
            function o(t) {
                var o = d[t] || h;
                l[t] = o(e[t], n[t], i, t)
            }
            r(n), s(n);
            var a, l = {};
            if (n.mixins)
                for (var c = 0, u = n.mixins.length; c < u; c++) e = t(e, n.mixins[c], i);
            for (a in e) o(a);
            for (a in n) e.hasOwnProperty(a) || o(a);
            return l
        }, e.resolveAsset = function(t, e, n) {
            for (var i = l.camelize(n), o = i.charAt(0).toUpperCase() + i.slice(1), r = t[e], s = r[n] || r[i] || r[o]; !s && t._parent && (!c.strict || t._repeat);) t = (t._context || t._parent).$options, r = t[e], s = r[n] || r[i] || r[o];
            return s
        }
    },
    191: function(t, e, n) {
        function i(t) {
            this._init(t)
        }
        var o = n(2),
            r = o.extend;
        r(i, n(145)), i.options = {
            replace: !0,
            directives: n(157),
            elementDirectives: n(171),
            filters: n(174),
            transitions: {},
            components: {},
            partials: {}
        };
        var s = i.prototype;
        Object.defineProperty(s, "$data", {
            get: function() {
                return this._data
            },
            set: function(t) {
                t !== this._data && this._setData(t)
            }
        }), r(s, n(177)), r(s, n(176)), r(s, n(179)), r(s, n(175)), r(s, n(178)), r(s, n(142)), r(s, n(143)), r(s, n(144)), r(s, n(141)), r(s, n(146)), t.exports = o.Vue = i
    },
    192: function(t, e) {
        t.exports = {
            run: function(t, e, n) {
                navigator.userAgent.indexOf("Mac OS X") != -1 ? $("body").addClass("mac") : $("body").addClass("pc")
            }
        }
    },
    193: function(t, e) {
        t.exports = {
            getFilter: function(t) {
                t.directive("disable", function(t) {
                    this.el.disabled = !!t
                }), t.filter("limit", function(t, e) {
                    return t.slice(0, e)
                }), t.filter("tofixed", {
                    read: function(t, e) {
                        return !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t).toFixed(e) : t
                    },
                    write: function(t, e, n) {
                        return !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t).toFixed(n) : t
                    }
                }), t.filter("abs", function(t) {
                    return t < 0 ? -t : t
                }), t.filter("flagKeyCheck", function(t, e, n) {
                    if (e) {
                        var i = [];
                        return t.forEach(function(e, o) {
                            e[n] && i.push(t[o])
                        }), i
                    }
                    return t
                }), t.filter("toradian", {
                    read: function(t) {
                        return t * Math.PI / 180
                    },
                    write: function(t) {
                        return 25
                    }
                }), t.filter("bytes", function(t, e) {
                    if (0 == t) return "0 Byte";
                    var n = 1024,
                        i = e + 1 || 3,
                        o = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
                        r = Math.floor(Math.log(t) / Math.log(n));
                    return (t / Math.pow(n, r)).toPrecision(i) + " " + o[r]
                }), t.filter("appendMark", function(t, e) {
                    var n = "zh-cn" == e ? "。" : ".";
                    return t ? t + n : t
                })
            }
        }
    },
    194: function(t, e) {
        ! function(t, e, n, i) {
            "use strict";
            t.fn.dropdown = function(o) {
                var r, s = t(this),
                    a = t(n),
                    l = s.selector || "",
                    c = "ontouchstart" in n.documentElement,
                    u = (new Date).getTime(),
                    d = [],
                    h = arguments[0],
                    p = "string" == typeof h,
                    f = [].slice.call(arguments, 1);
                return s.each(function(g) {
                    var v, m, b, y, _, w, x, C = t.isPlainObject(o) ? t.extend(!0, {}, t.fn.dropdown.settings, o) : t.extend({}, t.fn.dropdown.settings),
                        k = C.className,
                        S = C.message,
                        E = C.fields,
                        A = C.keys,
                        T = C.metadata,
                        N = C.namespace,
                        D = C.regExp,
                        O = C.selector,
                        $ = C.error,
                        j = C.templates,
                        F = "." + N,
                        P = "module-" + N,
                        I = t(this),
                        M = t(C.context),
                        L = I.find(O.text),
                        R = I.find(O.search),
                        H = I.find(O.input),
                        q = I.find(O.icon),
                        B = I.prev().find(O.text).length > 0 ? I.prev().find(O.text) : I.prev(),
                        z = I.children(O.menu),
                        W = z.find(O.item),
                        V = !1,
                        U = !1,
                        J = !1,
                        G = this,
                        Y = I.data(P);
                    x = {
                        initialize: function() {
                            x.debug("Initializing dropdown", C), x.is.alreadySetup() ? x.setup.reference() : (x.setup.layout(), x.refreshData(), x.save.defaults(), x.restore.selected(), x.create.id(), x.bind.events(), x.observeChanges(), x.instantiate())
                        },
                        instantiate: function() {
                            x.verbose("Storing instance of dropdown", x), Y = x, I.data(P, x)
                        },
                        destroy: function() {
                            x.verbose("Destroying previous dropdown", I), x.remove.tabbable(), I.off(F).removeData(P), z.off(F), a.off(b), _ && _.disconnect(), w && w.disconnect()
                        },
                        observeChanges: function() {
                            "MutationObserver" in e && (_ = new MutationObserver(function(t) {
                                x.debug("<select> modified, recreating menu"), x.setup.select()
                            }), w = new MutationObserver(function(t) {
                                x.debug("Menu modified, updating selector cache"), x.refresh()
                            }), x.has.input() && _.observe(H[0], {
                                childList: !0,
                                subtree: !0
                            }), x.has.menu() && w.observe(z[0], {
                                childList: !0,
                                subtree: !0
                            }), x.debug("Setting up mutation observer", _, w))
                        },
                        create: {
                            id: function() {
                                y = (Math.random().toString(16) + "000000000").substr(2, 8), b = "." + y, x.verbose("Creating unique id for element", y)
                            },
                            userChoice: function(e) {
                                var n, o, r;
                                return !!(e = e || x.get.userValues()) && (e = t.isArray(e) ? e : [e], t.each(e, function(e, s) {
                                    x.get.item(s) === !1 && (r = C.templates.addition(x.add.variables(S.addResult, s)), o = t("<div />").html(r).attr("data-" + T.value, s).attr("data-" + T.text, s).addClass(k.addition).addClass(k.item), n = n === i ? o : n.add(o), x.verbose("Creating user choices for value", s, o))
                                }), n)
                            },
                            userLabels: function(e) {
                                var n = x.get.userValues();
                                n && (x.debug("Adding user labels", n), t.each(n, function(t, e) {
                                    x.verbose("Adding custom user value"), x.add.label(e, e)
                                }))
                            },
                            menu: function() {
                                z = t("<div />").addClass(k.menu).appendTo(I)
                            }
                        },
                        search: function(t) {
                            t = t !== i ? t : x.get.query(), x.verbose("Searching for query", t), x.filter(t)
                        },
                        select: {
                            firstUnfiltered: function() {
                                x.verbose("Selecting first non-filtered element"), x.remove.selectedItem(), W.not(O.unselectable).eq(0).addClass(k.selected)
                            },
                            nextAvailable: function(t) {
                                t = t.eq(0);
                                var e = t.nextAll(O.item).not(O.unselectable).eq(0),
                                    n = t.prevAll(O.item).not(O.unselectable).eq(0),
                                    i = e.length > 0;
                                i ? (x.verbose("Moving selection to", e), e.addClass(k.selected)) : (x.verbose("Moving selection to", n), n.addClass(k.selected))
                            }
                        },
                        setup: {
                            api: function() {
                                var t = {
                                    debug: C.debug,
                                    on: !1
                                };
                                x.verbose("First request, initializing API"), I.api(t)
                            },
                            layout: function() {
                                I.is("select") && (x.setup.select(), x.setup.returnedObject()), x.has.menu() || x.create.menu(), x.is.search() && !x.has.search() && (x.verbose("Adding search input"), R = t("<input />").addClass(k.search).prop("autocomplete", "off").insertBefore(L)), C.allowTab && x.set.tabbable()
                            },
                            select: function() {
                                var e = x.get.selectValues();
                                x.debug("Dropdown initialized on a select", e), I.is("select") && (H = I), H.parent(O.dropdown).length > 0 ? (x.debug("UI dropdown already exists. Creating dropdown menu only"), I = H.closest(O.dropdown), x.has.menu() || x.create.menu(), z = I.children(O.menu), x.setup.menu(e)) : (x.debug("Creating entire dropdown from select"), I = t("<div />").attr("class", H.attr("class")).addClass(k.selection).addClass(k.dropdown).html(j.dropdown(e)).insertBefore(H), H.hasClass(k.multiple) && H.prop("multiple") === !1 && (x.error($.missingMultiple), H.prop("multiple", !0)), H.is("[multiple]") && x.set.multiple(), H.prop("disabled") && (x.debug("Disabling dropdown"), I.addClass(k.disabled)), H.removeAttr("class").detach().prependTo(I)), x.refresh()
                            },
                            menu: function(t) {
                                z.html(j.menu(t, E)), W = z.find(O.item)
                            },
                            reference: function() {
                                x.debug("Dropdown behavior was called on select, replacing with closest dropdown"), I = I.parent(O.dropdown), x.refresh(), x.setup.returnedObject(), p && (Y = x, x.invoke(h))
                            },
                            returnedObject: function() {
                                var t = s.slice(0, g),
                                    e = s.slice(g + 1);
                                s = t.add(I).add(e)
                            }
                        },
                        refresh: function() {
                            x.refreshSelectors(), x.refreshData()
                        },
                        refreshSelectors: function() {
                            x.verbose("Refreshing selector cache"), L = I.find(O.text), R = I.find(O.search), H = I.find(O.input), q = I.find(O.icon), B = I.prev().find(O.text).length > 0 ? I.prev().find(O.text) : I.prev(), z = I.children(O.menu), W = z.find(O.item)
                        },
                        refreshData: function() {
                            x.verbose("Refreshing cached metadata"), W.removeData(T.text).removeData(T.value), I.removeData(T.defaultText).removeData(T.defaultValue).removeData(T.placeholderText)
                        },
                        toggle: function() {
                            x.verbose("Toggling menu visibility"), x.is.active() ? x.hide() : x.show()
                        },
                        show: function(e) {
                            if (e = t.isFunction(e) ? e : function() {}, x.can.show() && !x.is.active()) {
                                if (x.debug("Showing dropdown"), x.is.multiple() && !x.has.search() && x.is.allFiltered()) return !0;
                                !x.has.message() || x.has.maxSelections() || x.has.allResultsFiltered() || x.remove.message(), C.onShow.call(G) !== !1 && x.animate.show(function() {
                                    x.can.click() && x.bind.intent(), x.set.visible(), e.call(G)
                                })
                            }
                        },
                        hide: function(e) {
                            e = t.isFunction(e) ? e : function() {}, x.is.active() && (x.debug("Hiding dropdown"), C.onHide.call(G) !== !1 && x.animate.hide(function() {
                                x.remove.visible(), e.call(G)
                            }))
                        },
                        hideOthers: function() {
                            x.verbose("Finding other dropdowns to hide"), s.not(I).has(O.menu + "." + k.visible).dropdown("hide")
                        },
                        hideMenu: function() {
                            x.verbose("Hiding menu  instantaneously"), x.remove.active(), x.remove.visible(), z.transition("hide")
                        },
                        hideSubMenus: function() {
                            var t = z.children(O.item).find(O.menu);
                            x.verbose("Hiding sub menus", t), t.transition("hide")
                        },
                        bind: {
                            events: function() {
                                c && x.bind.touchEvents(), x.bind.keyboardEvents(), x.bind.inputEvents(), x.bind.mouseEvents()
                            },
                            touchEvents: function() {
                                x.debug("Touch device detected binding additional touch events"), x.is.searchSelection() || x.is.single() && I.on("touchstart" + F, x.event.test.toggle), z.on("touchstart" + F, O.item, x.event.item.mouseenter)
                            },
                            keyboardEvents: function() {
                                x.verbose("Binding keyboard events"), I.on("keydown" + F, x.event.keydown), x.has.search() && I.on(x.get.inputEvent() + F, O.search, x.event.input), x.is.multiple() && a.on("keydown" + b, x.event.document.keydown)
                            },
                            inputEvents: function() {
                                x.verbose("Binding input change events"), I.on("change" + F, O.input, x.event.change)
                            },
                            mouseEvents: function() {
                                x.verbose("Binding mouse events"), x.is.multiple() && I.on("click" + F, O.label, x.event.label.click).on("click" + F, O.remove, x.event.remove.click), x.is.searchSelection() ? (I.on("mousedown" + F, O.menu, x.event.menu.mousedown).on("mouseup" + F, O.menu, x.event.menu.mouseup).on("click" + F, O.icon, x.event.icon.click).on("click" + F, O.search, x.show).on("focus" + F, O.search, x.event.search.focus).on("blur" + F, O.search, x.event.search.blur).on("click" + F, O.text, x.event.text.focus), x.is.multiple() && I.on("click" + F, x.event.click)) : ("click" == C.on ? I.on("click" + F, O.icon, x.event.icon.click).on("click" + F, x.event.test.toggle) : "hover" == C.on ? I.on("mouseenter" + F, x.delay.show).on("mouseleave" + F, x.delay.hide) : I.on(C.on + F, x.toggle), I.on("mousedown" + F, x.event.mousedown).on("mouseup" + F, x.event.mouseup).on("focus" + F, x.event.focus).on("blur" + F, x.event.blur)), z.on("mouseenter" + F, O.item, x.event.item.mouseenter).on("mouseleave" + F, O.item, x.event.item.mouseleave).on("click" + F, O.item, x.event.item.click)
                            },
                            intent: function() {
                                x.verbose("Binding hide intent event to document"), c && a.on("touchstart" + b, x.event.test.touch).on("touchmove" + b, x.event.test.touch), a.on("click" + b, x.event.test.hide)
                            }
                        },
                        unbind: {
                            intent: function() {
                                x.verbose("Removing hide intent event from document"), c && a.off("touchstart" + b).off("touchmove" + b), a.off("click" + b)
                            }
                        },
                        filter: function(t) {
                            var e = t !== i ? t : x.get.query(),
                                n = function() {
                                    x.is.multiple() && x.filterActive(), x.select.firstUnfiltered(), x.has.allResultsFiltered() ? C.onNoResults.call(G, e) ? C.allowAdditions || (x.verbose("All items filtered, showing message", e), x.add.message(S.noResults)) : (x.verbose("All items filtered, hiding dropdown", e), x.hideMenu()) : x.remove.message(), C.allowAdditions && x.add.userSuggestion(t), x.is.searchSelection() && x.can.show() && x.is.focusedOnSearch() && x.show()
                                };
                            C.useLabels && x.has.maxSelections() || (C.apiSettings ? x.can.useAPI() ? x.queryRemote(e, function() {
                                n()
                            }) : x.error($.noAPI) : (x.filterItems(e), n()))
                        },
                        queryRemote: function(e, n) {
                            var i = {
                                errorDuration: !1,
                                throttle: C.throttle,
                                urlData: {
                                    query: e
                                },
                                onError: function() {
                                    x.add.message(S.serverError), n()
                                },
                                onFailure: function() {
                                    x.add.message(S.serverError), n()
                                },
                                onSuccess: function(t) {
                                    x.remove.message(), x.setup.menu({
                                        values: t[E.remoteValues]
                                    }), n()
                                }
                            };
                            I.api("get request") || x.setup.api(), i = t.extend(!0, {}, i, C.apiSettings), I.api("setting", i).api("query")
                        },
                        filterItems: function(e) {
                            var n = e !== i ? e : x.get.query(),
                                o = null,
                                r = x.escape.regExp(n),
                                s = new RegExp("^" + r, "igm");
                            x.has.query() && (o = [], x.verbose("Searching for matching values", n), W.each(function() {
                                var e, i, r = t(this);
                                if ("both" == C.match || "text" == C.match) {
                                    if (e = String(x.get.choiceText(r, !1)), -1 !== e.search(s)) return o.push(this), !0;
                                    if (C.fullTextSearch && x.fuzzySearch(n, e)) return o.push(this), !0
                                }
                                if ("both" == C.match || "value" == C.match) {
                                    if (i = String(x.get.choiceValue(r, e)), -1 !== i.search(s)) return o.push(this), !0;
                                    if (C.fullTextSearch && x.fuzzySearch(n, i)) return o.push(this), !0
                                }
                            })), x.debug("Showing only matched items", n), x.remove.filteredItem(), o && W.not(o).addClass(k.filtered)
                        },
                        fuzzySearch: function(t, e) {
                            var n = e.length,
                                i = t.length;
                            if (t = t.toLowerCase(), e = e.toLowerCase(), i > n) return !1;
                            if (i === n) return t === e;
                            t: for (var o = 0, r = 0; i > o; o++) {
                                for (var s = t.charCodeAt(o); n > r;)
                                    if (e.charCodeAt(r++) === s) continue t;
                                return !1
                            }
                            return !0
                        },
                        filterActive: function() {
                            C.useLabels && W.filter("." + k.active).addClass(k.filtered)
                        },
                        focusSearch: function() {
                            x.is.search() && !x.is.focusedOnSearch() && R[0].focus()
                        },
                        forceSelection: function() {
                            var t = W.not(k.filtered).filter("." + k.selected).eq(0),
                                e = W.not(k.filtered).filter("." + k.active).eq(0),
                                n = t.length > 0 ? t : e,
                                i = n.size() > 0;
                            if (x.has.query()) {
                                if (i) return x.debug("Forcing partial selection to selected item", n), void x.event.item.click.call(n);
                                x.remove.searchTerm()
                            }
                            x.hide()
                        },
                        event: {
                            change: function() {
                                J || (x.debug("Input changed, updating selection"), x.set.selected())
                            },
                            focus: function() {
                                C.showOnFocus && !V && x.is.hidden() && !m && x.show()
                            },
                            click: function(e) {
                                var n = t(e.target);
                                n.is(I) && !x.is.focusedOnSearch() && x.focusSearch()
                            },
                            blur: function(t) {
                                m = n.activeElement === this, V || m || (x.remove.activeLabel(), x.hide())
                            },
                            mousedown: function() {
                                V = !0
                            },
                            mouseup: function() {
                                V = !1
                            },
                            search: {
                                focus: function() {
                                    V = !0, x.is.multiple() && x.remove.activeLabel(), C.showOnFocus && (x.search(), x.show())
                                },
                                blur: function(t) {
                                    m = n.activeElement === this, U || m ? m && C.forceSelection && x.forceSelection() : x.is.multiple() ? (x.remove.activeLabel(), x.hide()) : C.forceSelection ? x.forceSelection() : x.hide()
                                }
                            },
                            icon: {
                                click: function(t) {
                                    x.toggle(), t.stopPropagation()
                                }
                            },
                            text: {
                                focus: function(t) {
                                    V = !0, x.focusSearch()
                                }
                            },
                            input: function(t) {
                                (x.is.multiple() || x.is.searchSelection()) && x.set.filtered(), clearTimeout(x.timer), x.timer = setTimeout(x.search, C.delay.search)
                            },
                            label: {
                                click: function(e) {
                                    var n = t(this),
                                        i = I.find(O.label),
                                        o = i.filter("." + k.active),
                                        r = n.nextAll("." + k.active),
                                        s = n.prevAll("." + k.active),
                                        a = r.length > 0 ? n.nextUntil(r).add(o).add(n) : n.prevUntil(s).add(o).add(n);
                                    e.shiftKey ? (o.removeClass(k.active), a.addClass(k.active)) : e.ctrlKey ? n.toggleClass(k.active) : (o.removeClass(k.active), n.addClass(k.active)), C.onLabelSelect.apply(this, i.filter("." + k.active))
                                }
                            },
                            remove: {
                                click: function() {
                                    var e = t(this).parent();
                                    e.hasClass(k.active) ? x.remove.activeLabels() : x.remove.activeLabels(e)
                                }
                            },
                            test: {
                                toggle: function(t) {
                                    var e = x.is.multiple() ? x.show : x.toggle;
                                    x.determine.eventOnElement(t, e) && t.preventDefault()
                                },
                                touch: function(t) {
                                    x.determine.eventOnElement(t, function() {
                                        "touchstart" == t.type ? x.timer = setTimeout(function() {
                                            x.hide()
                                        }, C.delay.touch) : "touchmove" == t.type && clearTimeout(x.timer)
                                    }), t.stopPropagation()
                                },
                                hide: function(t) {
                                    x.determine.eventInModule(t, x.hide)
                                }
                            },
                            menu: {
                                mousedown: function() {
                                    U = !0
                                },
                                mouseup: function() {
                                    U = !1
                                }
                            },
                            item: {
                                mouseenter: function(e) {
                                    var n = t(this).children(O.menu),
                                        i = t(this).siblings(O.item).children(O.menu);
                                    n.length > 0 && (clearTimeout(x.itemTimer), x.itemTimer = setTimeout(function() {
                                        x.verbose("Showing sub-menu", n), t.each(i, function() {
                                            x.animate.hide(!1, t(this))
                                        }), x.animate.show(!1, n)
                                    }, C.delay.show), e.preventDefault())
                                },
                                mouseleave: function(e) {
                                    var n = t(this).children(O.menu);
                                    n.length > 0 && (clearTimeout(x.itemTimer), x.itemTimer = setTimeout(function() {
                                        x.verbose("Hiding sub-menu", n), x.animate.hide(!1, n)
                                    }, C.delay.hide))
                                },
                                touchend: function() {},
                                click: function(e) {
                                    var n = t(this),
                                        i = t(e ? e.target : ""),
                                        o = n.find(O.menu),
                                        r = x.get.choiceText(n),
                                        s = x.get.choiceValue(n, r),
                                        a = o.length > 0,
                                        l = o.find(i).length > 0;
                                    l || a && !C.allowCategorySelection || (C.useLabels || (x.remove.filteredItem(), x.remove.searchTerm(), x.set.scrollPosition(n)), x.determine.selectAction.call(this, r, s))
                                }
                            },
                            document: {
                                keydown: function(t) {
                                    var e = t.which,
                                        n = x.is.inObject(e, A);
                                    if (n) {
                                        var i = I.find(O.label),
                                            o = i.filter("." + k.active),
                                            r = (o.data(T.value), i.index(o)),
                                            s = i.length,
                                            a = o.length > 0,
                                            l = o.length > 1,
                                            c = 0 === r,
                                            u = r + 1 == s,
                                            d = x.is.searchSelection(),
                                            h = x.is.focusedOnSearch(),
                                            p = x.is.focused(),
                                            f = h && 0 === x.get.caretPosition();
                                        if (d && !a && !h) return;
                                        e == A.leftArrow ? !p && !f || a ? a && (t.shiftKey ? x.verbose("Adding previous label to selection") : (x.verbose("Selecting previous label"), i.removeClass(k.active)), c && !l ? o.addClass(k.active) : o.prev(O.siblingLabel).addClass(k.active).end(), t.preventDefault()) : (x.verbose("Selecting previous label"), i.last().addClass(k.active)) : e == A.rightArrow ? (p && !a && i.first().addClass(k.active), a && (t.shiftKey ? x.verbose("Adding next label to selection") : (x.verbose("Selecting next label"), i.removeClass(k.active)), u ? d ? h ? i.removeClass(k.active) : x.focusSearch() : l ? o.next(O.siblingLabel).addClass(k.active) : o.addClass(k.active) : o.next(O.siblingLabel).addClass(k.active), t.preventDefault())) : e == A.deleteKey || e == A.backspace ? a ? (x.verbose("Removing active labels"), u && d && !h && x.focusSearch(), o.last().next(O.siblingLabel).addClass(k.active), x.remove.activeLabels(o), t.preventDefault()) : f && !a && e == A.backspace && (x.verbose("Removing last label on input backspace"), o = i.last().addClass(k.active), x.remove.activeLabels(o)) : o.removeClass(k.active)
                                    }
                                }
                            },
                            keydown: function(t) {
                                var e = t.which,
                                    n = x.is.inObject(e, A);
                                if (n) {
                                    var i, o, r = W.not(O.unselectable).filter("." + k.selected).eq(0),
                                        s = z.children("." + k.active).eq(0),
                                        a = r.length > 0 ? r : s,
                                        l = a.length > 0 ? a.siblings(":not(." + k.filtered + ")").andSelf() : z.children(":not(." + k.filtered + ")"),
                                        c = a.children(O.menu),
                                        u = a.closest(O.menu),
                                        d = u.hasClass(k.visible) || u.hasClass(k.animating) || u.parent(O.menu).length > 0,
                                        h = c.length > 0,
                                        p = a.length > 0,
                                        f = a.not(O.unselectable).length > 0,
                                        g = e == A.delimiter && C.allowAdditions && x.is.multiple();
                                    if (x.is.visible()) {
                                        if ((e == A.enter || g) && (e == A.enter && p && h && !C.allowCategorySelection ? (x.verbose("Pressed enter on unselectable category, opening sub menu"), e = A.rightArrow) : f && (x.verbose("Selecting item from keyboard shortcut", a), x.event.item.click.call(a, t), x.is.searchSelection() && x.remove.searchTerm()), t.preventDefault()), e == A.leftArrow && (o = u[0] !== z[0], o && (x.verbose("Left key pressed, closing sub-menu"), x.animate.hide(!1, u), a.removeClass(k.selected), u.closest(O.item).addClass(k.selected), t.preventDefault())), e == A.rightArrow && h && (x.verbose("Right key pressed, opening sub-menu"), x.animate.show(!1, c), a.removeClass(k.selected), c.find(O.item).eq(0).addClass(k.selected), t.preventDefault()), e == A.upArrow) {
                                            if (i = p && d ? a.prevAll(O.item + ":not(" + O.unselectable + ")").eq(0) : W.eq(0), l.index(i) < 0) return x.verbose("Up key pressed but reached top of current menu"), void t.preventDefault();
                                            x.verbose("Up key pressed, changing active item"), a.removeClass(k.selected), i.addClass(k.selected), x.set.scrollPosition(i), t.preventDefault()
                                        }
                                        if (e == A.downArrow) {
                                            if (i = p && d ? i = a.nextAll(O.item + ":not(" + O.unselectable + ")").eq(0) : W.eq(0), 0 === i.length) return x.verbose("Down key pressed but reached bottom of current menu"), void t.preventDefault();
                                            x.verbose("Down key pressed, changing active item"), W.removeClass(k.selected), i.addClass(k.selected), x.set.scrollPosition(i), t.preventDefault()
                                        }
                                        e == A.pageUp && (x.scrollPage("up"), t.preventDefault()), e == A.pageDown && (x.scrollPage("down"), t.preventDefault()), e == A.escape && (x.verbose("Escape key pressed, closing dropdown"), x.hide())
                                    } else g && t.preventDefault(), e == A.downArrow && (x.verbose("Down key pressed, showing dropdown"), x.show(), t.preventDefault())
                                } else x.is.selection() && !x.is.search() && x.set.selectedLetter(String.fromCharCode(e))
                            }
                        },
                        trigger: {
                            change: function() {
                                var t = n.createEvent("HTMLEvents"),
                                    e = H[0];
                                e && (x.verbose("Triggering native change event"), t.initEvent("change", !0, !1), e.dispatchEvent(t))
                            }
                        },
                        determine: {
                            selectAction: function(e, n) {
                                x.verbose("Determining action", C.action), t.isFunction(x.action[C.action]) ? (x.verbose("Triggering preset action", C.action, e, n), x.action[C.action].call(this, e, n)) : t.isFunction(C.action) ? (x.verbose("Triggering user action", C.action, e, n), C.action.call(this, e, n)) : x.error($.action, C.action)
                            },
                            eventInModule: function(e, i) {
                                var o = t(e.target),
                                    r = o.closest(n.documentElement).length > 0,
                                    s = o.closest(I).length > 0;
                                return i = t.isFunction(i) ? i : function() {}, r && !s ? (x.verbose("Triggering event", i), i(), !0) : (x.verbose("Event occurred in dropdown, canceling callback"), !1)
                            },
                            eventOnElement: function(e, n) {
                                var i = t(e.target),
                                    o = i.closest(O.siblingLabel),
                                    r = 0 === I.find(o).length,
                                    s = 0 === i.closest(z).length;
                                return n = t.isFunction(n) ? n : function() {}, r && s ? (x.verbose("Triggering event", n), n(), !0) : (x.verbose("Event occurred in dropdown menu, canceling callback"), !1)
                            }
                        },
                        action: {
                            nothing: function() {},
                            activate: function(e, n) {
                                if (n = n !== i ? n : e, x.can.activate(t(this))) {
                                    if (x.set.selected(n, t(this)), x.is.multiple() && !x.is.allFiltered()) return;
                                    x.hideAndClear()
                                }
                            },
                            select: function(t, e) {
                                x.action.activate.call(this)
                            },
                            combo: function(e, n) {
                                n = n !== i ? n : e, x.set.selected(n, t(this)), x.hideAndClear()
                            },
                            hide: function(t, e) {
                                x.set.value(e), x.hideAndClear()
                            }
                        },
                        get: {
                            id: function() {
                                return y
                            },
                            defaultText: function() {
                                return I.data(T.defaultText)
                            },
                            defaultValue: function() {
                                return I.data(T.defaultValue)
                            },
                            placeholderText: function() {
                                return I.data(T.placeholderText) || ""
                            },
                            text: function() {
                                return L.text()
                            },
                            query: function() {
                                return t.trim(R.val())
                            },
                            searchWidth: function(t) {
                                return t * C.glyphWidth + "em"
                            },
                            selectionCount: function() {
                                var e, n = x.get.values();
                                return e = x.is.multiple() ? t.isArray(n) ? n.length : 0 : "" !== x.get.value() ? 1 : 0
                            },
                            transition: function(t) {
                                return "auto" == C.transition ? x.is.upward(t) ? "slide up" : "slide down" : C.transition
                            },
                            userValues: function() {
                                var e = x.get.values();
                                return !!e && (e = t.isArray(e) ? e : [e], t.grep(e, function(t) {
                                    return x.get.item(t) === !1
                                }))
                            },
                            uniqueArray: function(e) {
                                return t.grep(e, function(n, i) {
                                    return t.inArray(n, e) === i
                                })
                            },
                            caretPosition: function() {
                                var t, e, i = R.get(0);
                                return "selectionStart" in i ? i.selectionStart : n.selection ? (i.focus(), t = n.selection.createRange(), e = t.text.length, t.moveStart("character", -i.value.length), t.text.length - e) : void 0
                            },
                            value: function() {
                                var e = H.length > 0 ? H.val() : I.data(T.value);
                                return t.isArray(e) && 1 === e.length && "" === e[0] ? "" : e
                            },
                            values: function() {
                                var t = x.get.value();
                                return "" === t ? "" : !x.has.selectInput() && x.is.multiple() ? "string" == typeof t ? t.split(C.delimiter) : "" : t
                            },
                            remoteValues: function() {
                                var e = x.get.values(),
                                    n = !1;
                                return e && ("string" == typeof e && (e = [e]), n = {}, t.each(e, function(t, e) {
                                    var i = x.read.remoteData(e);
                                    x.verbose("Restoring value from session data", i, e), n[e] = i ? i : e
                                })), n
                            },
                            choiceText: function(e, n) {
                                return n = n !== i ? n : C.preserveHTML, e ? (e.find(O.menu).length > 0 && (x.verbose("Retreiving text of element with sub-menu"), e = e.clone(), e.find(O.menu).remove(), e.find(O.menuIcon).remove()), e.data(T.text) !== i ? e.data(T.text) : n ? t.trim(e.html()) : t.trim(e.text())) : void 0
                            },
                            choiceValue: function(e, n) {
                                return n = n || x.get.choiceText(e), !!e && (e.data(T.value) !== i ? String(e.data(T.value)) : "string" == typeof n ? t.trim(n.toLowerCase()) : String(n))
                            },
                            inputEvent: function() {
                                var t = R[0];
                                return !!t && (t.oninput !== i ? "input" : t.onpropertychange !== i ? "propertychange" : "keyup")
                            },
                            selectValues: function() {
                                var e = {};
                                return e.values = [], I.find("option").each(function() {
                                    var n = t(this),
                                        o = n.html(),
                                        r = n.attr("disabled"),
                                        s = n.attr("value") !== i ? n.attr("value") : o;
                                    "auto" === C.placeholder && "" === s ? e.placeholder = o : e.values.push({
                                        name: o,
                                        value: s,
                                        disabled: r
                                    })
                                }), C.placeholder && "auto" !== C.placeholder && (x.debug("Setting placeholder value to", C.placeholder), e.placeholder = C.placeholder), C.sortSelect ? (e.values.sort(function(t, e) {
                                    return t.name > e.name ? 1 : -1
                                }), x.debug("Retrieved and sorted values from select", e)) : x.debug("Retreived values from select", e), e
                            },
                            activeItem: function() {
                                return W.filter("." + k.active)
                            },
                            selectedItem: function() {
                                var t = W.not(O.unselectable).filter("." + k.selected);
                                return t.length > 0 ? t : W.eq(0)
                            },
                            itemWithAdditions: function(t) {
                                var e = x.get.item(t),
                                    n = x.create.userChoice(t),
                                    i = n && n.length > 0;
                                return i && (e = e.length > 0 ? e.add(n) : n), e
                            },
                            item: function(e, n) {
                                var o, r, s = !1;
                                return e = e !== i ? e : x.get.values() !== i ? x.get.values() : x.get.text(), o = r ? e.length > 0 : e !== i && null !== e, r = x.is.multiple() && t.isArray(e), n = "" === e || 0 === e || (n || !1), o && W.each(function() {
                                    var o = t(this),
                                        a = x.get.choiceText(o),
                                        l = x.get.choiceValue(o, a);
                                    if (null !== l && l !== i)
                                        if (r)(-1 !== t.inArray(String(l), e) || -1 !== t.inArray(a, e)) && (s = s ? s.add(o) : o);
                                        else if (n) {
                                        if (x.verbose("Ambiguous dropdown value using strict type check", o, e), l === e || a === e) return s = o, !0
                                    } else if (String(l) == String(e) || a == e) return x.verbose("Found select item by value", l, e), s = o, !0
                                }), s
                            }
                        },
                        check: {
                            maxSelections: function(t) {
                                return !C.maxSelections || (t = t !== i ? t : x.get.selectionCount(), t >= C.maxSelections ? (x.debug("Maximum selection count reached"), C.useLabels && (W.addClass(k.filtered), x.add.message(S.maxSelections)), !0) : (x.verbose("No longer at maximum selection count"), x.remove.message(), x.remove.filteredItem(), x.is.searchSelection() && x.filterItems(), !1))
                            }
                        },
                        restore: {
                            defaults: function() {
                                x.clear(), x.restore.defaultText(), x.restore.defaultValue()
                            },
                            defaultText: function() {
                                var t = x.get.defaultText(),
                                    e = x.get.placeholderText;
                                t === e ? (x.debug("Restoring default placeholder text", t), x.set.placeholderText(t)) : (x.debug("Restoring default text", t), x.set.text(t))
                            },
                            defaultValue: function() {
                                var t = x.get.defaultValue();
                                t !== i && (x.debug("Restoring default value", t), "" !== t ? (x.set.value(t), x.set.selected()) : (x.remove.activeItem(), x.remove.selectedItem()))
                            },
                            labels: function() {
                                C.allowAdditions && (C.useLabels || (x.error($.labels), C.useLabels = !0), x.debug("Restoring selected values"), x.create.userLabels()), x.check.maxSelections()
                            },
                            selected: function() {
                                x.restore.values(), x.is.multiple() ? (x.debug("Restoring previously selected values and labels"), x.restore.labels()) : x.debug("Restoring previously selected values")
                            },
                            values: function() {
                                x.set.initialLoad(), C.apiSettings ? C.saveRemoteData ? x.restore.remoteValues() : x.clearValue() : x.set.selected(), x.remove.initialLoad()
                            },
                            remoteValues: function() {
                                var e = x.get.remoteValues();
                                x.debug("Recreating selected from session data", e), e && (x.is.single() ? t.each(e, function(t, e) {
                                    x.set.text(e)
                                }) : t.each(e, function(t, e) {
                                    x.add.label(t, e)
                                }))
                            }
                        },
                        read: {
                            remoteData: function(t) {
                                var n;
                                return e.Storage === i ? void x.error($.noStorage) : (n = sessionStorage.getItem(t), n !== i && n)
                            }
                        },
                        save: {
                            defaults: function() {
                                x.save.defaultText(), x.save.placeholderText(), x.save.defaultValue()
                            },
                            defaultValue: function() {
                                var t = x.get.value();
                                x.verbose("Saving default value as", t), I.data(T.defaultValue, t)
                            },
                            defaultText: function() {
                                var t = x.get.text();
                                x.verbose("Saving default text as", t), I.data(T.defaultText, t)
                            },
                            placeholderText: function() {
                                var t;
                                C.placeholder !== !1 && L.hasClass(k.placeholder) && (t = x.get.text(), x.verbose("Saving placeholder text as", t), I.data(T.placeholderText, t))
                            },
                            remoteData: function(t, n) {
                                return e.Storage === i ? void x.error($.noStorage) : (x.verbose("Saving remote data to session storage", n, t), void sessionStorage.setItem(n, t))
                            }
                        },
                        clear: function() {
                            x.is.multiple() ? x.remove.labels() : (x.remove.activeItem(), x.remove.selectedItem()), x.set.placeholderText(), x.clearValue()
                        },
                        clearValue: function() {
                            x.set.value("")
                        },
                        scrollPage: function(t, e) {
                            var n, i, o, r = e || x.get.selectedItem(),
                                s = r.closest(O.menu),
                                a = s.outerHeight(),
                                l = s.scrollTop(),
                                c = W.eq(0).outerHeight(),
                                u = Math.floor(a / c),
                                d = (s.prop("scrollHeight"), "up" == t ? l - c * u : l + c * u),
                                h = W.not(O.unselectable);
                            o = "up" == t ? h.index(r) - u : h.index(r) + u, n = "up" == t ? o >= 0 : o < h.length, i = n ? h.eq(o) : "up" == t ? h.first() : h.last(), i.length > 0 && (x.debug("Scrolling page", t, i), r.removeClass(k.selected), i.addClass(k.selected), s.scrollTop(d))
                        },
                        set: {
                            filtered: function() {
                                var t = x.is.multiple(),
                                    e = x.is.searchSelection(),
                                    n = t && e,
                                    i = e ? x.get.query() : "",
                                    o = "string" == typeof i && i.length > 0,
                                    r = x.get.searchWidth(i.length),
                                    s = "" !== i;
                                t && o && (x.verbose("Adjusting input width", r, C.glyphWidth), R.css("width", r)), o || n && s ? (x.verbose("Hiding placeholder text"), L.addClass(k.filtered)) : (!t || n && !s) && (x.verbose("Showing placeholder text"), L.removeClass(k.filtered))
                            },
                            loading: function() {
                                I.addClass(k.loading)
                            },
                            placeholderText: function(t) {
                                t = t || x.get.placeholderText(), x.debug("Setting placeholder text", t), x.set.text(t), L.addClass(k.placeholder)
                            },
                            tabbable: function() {
                                x.has.search() ? (x.debug("Added tabindex to searchable dropdown"), R.val("").attr("tabindex", 0), z.attr("tabindex", -1)) : (x.debug("Added tabindex to dropdown"), I.attr("tabindex") === i && (I.attr("tabindex", 0), z.attr("tabindex", -1)))
                            },
                            initialLoad: function() {
                                x.verbose("Setting initial load"), v = !0
                            },
                            activeItem: function(t) {
                                C.allowAdditions && t.filter(O.addition).length > 0 ? t.addClass(k.filtered) : t.addClass(k.active)
                            },
                            scrollPosition: function(t, e) {
                                var n, o, r, s, a, l, c, u, d, h = 5;
                                t = t || x.get.selectedItem(), n = t.closest(O.menu), o = t && t.length > 0, e = e !== i && e, t && n.length > 0 && o && (s = t.position().top, n.addClass(k.loading), l = n.scrollTop(), a = n.offset().top, s = t.offset().top, r = l - a + s, e || (c = n.height(), d = r + h > l + c, u = l > r - h), x.debug("Scrolling to active item", r), (e || u || d) && n.scrollTop(r), n.removeClass(k.loading))
                            },
                            text: function(t) {
                                "select" !== C.action && ("combo" == C.action ? (x.debug("Changing combo button text", t, B), C.preserveHTML ? B.html(t) : B.text(t)) : (t !== x.get.placeholderText() && L.removeClass(k.placeholder), x.debug("Changing text", t, L), L.removeClass(k.filtered), C.preserveHTML ? L.html(t) : L.text(t)))
                            },
                            selectedLetter: function(e) {
                                var n, i = W.filter("." + k.selected),
                                    o = i.length > 0 && x.has.firstLetter(i, e),
                                    r = !1;
                                o && (n = i.nextAll(W).eq(0), x.has.firstLetter(n, e) && (r = n)), r || W.each(function() {
                                    return x.has.firstLetter(t(this), e) ? (r = t(this), !1) : void 0
                                }), r && (x.verbose("Scrolling to next value with letter", e), x.set.scrollPosition(r), i.removeClass(k.selected), r.addClass(k.selected))
                            },
                            direction: function(t) {
                                "auto" == C.direction ? x.is.onScreen(t) ? x.remove.upward(t) : x.set.upward(t) : "upward" == C.direction && x.set.upward(t)
                            },
                            upward: function(t) {
                                var e = t || I;
                                e.addClass(k.upward)
                            },
                            value: function(t, e, n) {
                                var o = H.length > 0,
                                    r = (!x.has.value(t), x.get.values()),
                                    s = t !== i ? String(t) : t;
                                if (o) {
                                    if (s == r && (x.verbose("Skipping value update already same value", t, r), !x.is.initialLoad())) return;
                                    x.is.single() && x.has.selectInput() && x.can.extendSelect() && (x.debug("Adding user option", t), x.add.optionValue(t)), x.debug("Updating input value", t, r), J = !0, H.val(t), C.fireOnInit === !1 && x.is.initialLoad() ? x.debug("Input native change event ignored on initial load") : x.trigger.change(), J = !1
                                } else x.verbose("Storing value in metadata", t, H), t !== r && I.data(T.value, s);
                                C.fireOnInit === !1 && x.is.initialLoad() ? x.verbose("No callback on initial load", C.onChange) : C.onChange.call(G, t, e, n)
                            },
                            active: function() {
                                I.addClass(k.active)
                            },
                            multiple: function() {
                                I.addClass(k.multiple)
                            },
                            visible: function() {
                                I.addClass(k.visible)
                            },
                            exactly: function(t, e) {
                                x.debug("Setting selected to exact values"), x.clear(), x.set.selected(t, e)
                            },
                            selected: function(e, n) {
                                var i = x.is.multiple();
                                n = C.allowAdditions ? n || x.get.itemWithAdditions(e) : n || x.get.item(e), n && (x.debug("Setting selected menu item to", n), x.is.single() ? (x.remove.activeItem(), x.remove.selectedItem()) : C.useLabels && x.remove.selectedItem(), n.each(function() {
                                    var e = t(this),
                                        o = x.get.choiceText(e),
                                        r = x.get.choiceValue(e, o),
                                        s = e.hasClass(k.filtered),
                                        a = e.hasClass(k.active),
                                        l = e.hasClass(k.addition),
                                        c = i && 1 == n.length;
                                    i ? !a || l ? (C.apiSettings && C.saveRemoteData && x.save.remoteData(o, r), C.useLabels ? (x.add.value(r, o, e), x.add.label(r, o, c), x.set.activeItem(e), x.filterActive(), x.select.nextAvailable(n)) : (x.add.value(r, o, e), x.set.text(x.add.variables(S.count)), x.set.activeItem(e))) : s || (x.debug("Selected active value, removing label"), x.remove.selected(r)) : (C.apiSettings && C.saveRemoteData && x.save.remoteData(o, r), x.set.text(o), x.set.value(r, o, e), e.addClass(k.active).addClass(k.selected))
                                }))
                            }
                        },
                        add: {
                            label: function(e, n, i) {
                                var o, r = x.is.searchSelection() ? R : L;
                                return o = t("<a />").addClass(k.label).attr("data-value", e).html(j.label(e, n)), o = C.onLabelCreate.call(o, e, n), x.has.label(e) ? void x.debug("Label already exists, skipping", e) : (C.label.variation && o.addClass(C.label.variation), void(i === !0 ? (x.debug("Animating in label", o), o.addClass(k.hidden).insertBefore(r).transition(C.label.transition, C.label.duration)) : (x.debug("Adding selection label", o), o.insertBefore(r))))
                            },
                            message: function(e) {
                                var n = z.children(O.message),
                                    i = C.templates.message(x.add.variables(e));
                                n.length > 0 ? n.html(i) : n = t("<div/>").html(i).addClass(k.message).appendTo(z)
                            },
                            optionValue: function(e) {
                                var n = H.find('option[value="' + e + '"]'),
                                    i = n.length > 0;
                                i || (_ && (_.disconnect(), x.verbose("Temporarily disconnecting mutation observer", e)), x.is.single() && (x.verbose("Removing previous user addition"), H.find("option." + k.addition).remove()), t("<option/>").prop("value", e).addClass(k.addition).html(e).appendTo(H), x.verbose("Adding user addition as an <option>", e), _ && _.observe(H[0], {
                                    childList: !0,
                                    subtree: !0
                                }))
                            },
                            userSuggestion: function(t) {
                                var e, n = z.children(O.addition),
                                    i = x.get.item(t),
                                    o = i && i.not(O.addition).length,
                                    r = n.length > 0;
                                if (!C.useLabels || !x.has.maxSelections()) {
                                    if ("" === t || o) return void n.remove();
                                    W.removeClass(k.selected), r ? (e = C.templates.addition(x.add.variables(S.addResult, t)), n.html(e).attr("data-" + T.value, t).attr("data-" + T.text, t).removeClass(k.filtered).addClass(k.selected), x.verbose("Replacing user suggestion with new value", n)) : (n = x.create.userChoice(t), n.prependTo(z).addClass(k.selected), x.verbose("Adding item choice to menu corresponding with user choice addition", n))
                                }
                            },
                            variables: function(t, e) {
                                var n, i, o = -1 !== t.search("{count}"),
                                    r = -1 !== t.search("{maxCount}"),
                                    s = -1 !== t.search("{term}");
                                return x.verbose("Adding templated variables to message", t), o && (n = x.get.selectionCount(), t = t.replace("{count}", n)), r && (n = x.get.selectionCount(), t = t.replace("{maxCount}", C.maxSelections)), s && (i = e || x.get.query(), t = t.replace("{term}", i)), t
                            },
                            value: function(e, n, i) {
                                var o, r = x.get.values();
                                return "" === e ? void x.debug("Cannot select blank values from multiselect") : (t.isArray(r) ? (o = r.concat([e]), o = x.get.uniqueArray(o)) : o = [e], x.has.selectInput() ? x.can.extendSelect() && (x.debug("Adding value to select", e, o, H), x.add.optionValue(e)) : (o = o.join(C.delimiter), x.debug("Setting hidden input to delimited value", o, H)), C.fireOnInit === !1 && x.is.initialLoad() ? x.verbose("Skipping onadd callback on initial load", C.onAdd) : C.onAdd.call(G, e, n, i), x.set.value(o, e, n, i), void x.check.maxSelections())
                            }
                        },
                        remove: {
                            active: function() {
                                I.removeClass(k.active)
                            },
                            activeLabel: function() {
                                I.find(O.label).removeClass(k.active)
                            },
                            loading: function() {
                                I.removeClass(k.loading)
                            },
                            initialLoad: function() {
                                v = !1
                            },
                            upward: function(t) {
                                var e = t || I;
                                e.removeClass(k.upward)
                            },
                            visible: function() {
                                I.removeClass(k.visible)
                            },
                            activeItem: function() {
                                W.removeClass(k.active)
                            },
                            filteredItem: function() {
                                C.useLabels && x.has.maxSelections() || (C.useLabels && x.is.multiple() ? W.not("." + k.active).removeClass(k.filtered) : W.removeClass(k.filtered))
                            },
                            optionValue: function(t) {
                                var e = H.find('option[value="' + t + '"]'),
                                    n = e.length > 0;
                                n && e.hasClass(k.addition) && (_ && (_.disconnect(), x.verbose("Temporarily disconnecting mutation observer", t)), e.remove(), x.verbose("Removing user addition as an <option>", t), _ && _.observe(H[0], {
                                    childList: !0,
                                    subtree: !0
                                }))
                            },
                            message: function() {
                                z.children(O.message).remove()
                            },
                            searchTerm: function() {
                                x.verbose("Cleared search term"), R.val(""), x.set.filtered()
                            },
                            selected: function(e, n) {
                                return !!(n = C.allowAdditions ? n || x.get.itemWithAdditions(e) : n || x.get.item(e)) && void n.each(function() {
                                    var e = t(this),
                                        n = x.get.choiceText(e),
                                        i = x.get.choiceValue(e, n);
                                    x.is.multiple() ? C.useLabels ? (x.remove.value(i, n, e), x.remove.label(i)) : (x.remove.value(i, n, e),
                                        0 === x.get.selectionCount() ? x.set.placeholderText() : x.set.text(x.add.variables(S.count))) : x.remove.value(i, n, e), e.removeClass(k.filtered).removeClass(k.active), C.useLabels && e.removeClass(k.selected)
                                })
                            },
                            selectedItem: function() {
                                W.removeClass(k.selected)
                            },
                            value: function(t, e, n) {
                                var i, o = x.get.values();
                                x.has.selectInput() ? (x.verbose("Input is <select> removing selected option", t), i = x.remove.arrayValue(t, o), x.remove.optionValue(t)) : (x.verbose("Removing from delimited values", t), i = x.remove.arrayValue(t, o), i = i.join(C.delimiter)), C.fireOnInit === !1 && x.is.initialLoad() ? x.verbose("No callback on initial load", C.onRemove) : C.onRemove.call(G, t, e, n), x.set.value(i, e, n), x.check.maxSelections()
                            },
                            arrayValue: function(e, n) {
                                return t.isArray(n) || (n = [n]), n = t.grep(n, function(t) {
                                    return e != t
                                }), x.verbose("Removed value from delimited string", e, n), n
                            },
                            label: function(t, e) {
                                var n = I.find(O.label),
                                    i = n.filter('[data-value="' + t + '"]');
                                x.verbose("Removing label", i), i.remove()
                            },
                            activeLabels: function(t) {
                                t = t || I.find(O.label).filter("." + k.active), x.verbose("Removing active label selections", t), x.remove.labels(t)
                            },
                            labels: function(e) {
                                e = e || I.find(O.label), x.verbose("Removing labels", e), e.each(function() {
                                    var e = t(this),
                                        n = e.data(T.value),
                                        o = n !== i ? String(n) : n,
                                        r = x.is.userValue(o);
                                    return C.onLabelRemove.call(e, n) === !1 ? void x.debug("Label remove callback cancelled removal") : void(r ? (x.remove.value(o), x.remove.label(o)) : x.remove.selected(o))
                                })
                            },
                            tabbable: function() {
                                x.has.search() ? (x.debug("Searchable dropdown initialized"), R.removeAttr("tabindex"), z.removeAttr("tabindex")) : (x.debug("Simple selection dropdown initialized"), I.removeAttr("tabindex"), z.removeAttr("tabindex"))
                            }
                        },
                        has: {
                            search: function() {
                                return R.length > 0
                            },
                            selectInput: function() {
                                return H.is("select")
                            },
                            firstLetter: function(t, e) {
                                var n, i;
                                return !(!t || 0 === t.length || "string" != typeof e) && (n = x.get.choiceText(t, !1), e = e.toLowerCase(), i = String(n).charAt(0).toLowerCase(), e == i)
                            },
                            input: function() {
                                return H.length > 0
                            },
                            items: function() {
                                return W.length > 0
                            },
                            menu: function() {
                                return z.length > 0
                            },
                            message: function() {
                                return 0 !== z.children(O.message).length
                            },
                            label: function(t) {
                                var e = I.find(O.label);
                                return e.filter('[data-value="' + t + '"]').length > 0
                            },
                            maxSelections: function() {
                                return C.maxSelections && x.get.selectionCount() >= C.maxSelections
                            },
                            allResultsFiltered: function() {
                                return W.filter(O.unselectable).length === W.length
                            },
                            query: function() {
                                return "" !== x.get.query()
                            },
                            value: function(e) {
                                var n = x.get.values(),
                                    i = t.isArray(n) ? n && -1 !== t.inArray(e, n) : n == e;
                                return !!i
                            }
                        },
                        is: {
                            active: function() {
                                return I.hasClass(k.active)
                            },
                            alreadySetup: function() {
                                return I.is("select") && I.parent(O.dropdown).length > 0 && 0 === I.prev().length
                            },
                            animating: function(t) {
                                return t ? t.transition && t.transition("is animating") : z.transition && z.transition("is animating")
                            },
                            disabled: function() {
                                return I.hasClass(k.disabled)
                            },
                            focused: function() {
                                return n.activeElement === I[0]
                            },
                            focusedOnSearch: function() {
                                return n.activeElement === R[0]
                            },
                            allFiltered: function() {
                                return (x.is.multiple() || x.has.search()) && !x.has.message() && x.has.allResultsFiltered()
                            },
                            hidden: function(t) {
                                return !x.is.visible(t)
                            },
                            initialLoad: function() {
                                return v
                            },
                            onScreen: function(t) {
                                var e, n = t || z,
                                    i = !0,
                                    o = {};
                                return n.addClass(k.loading), e = {
                                    context: {
                                        scrollTop: M.scrollTop(),
                                        height: M.outerHeight()
                                    },
                                    menu: {
                                        offset: n.offset(),
                                        height: n.outerHeight()
                                    }
                                }, o = {
                                    above: e.context.scrollTop <= e.menu.offset.top - e.menu.height,
                                    below: e.context.scrollTop + e.context.height >= e.menu.offset.top + e.menu.height
                                }, o.below ? (x.verbose("Dropdown can fit in context downward", o), i = !0) : o.below || o.above ? (x.verbose("Dropdown cannot fit below, opening upward", o), i = !1) : (x.verbose("Dropdown cannot fit in either direction, favoring downward", o), i = !0), n.removeClass(k.loading), i
                            },
                            inObject: function(e, n) {
                                var i = !1;
                                return t.each(n, function(t, n) {
                                    return n == e ? (i = !0, !0) : void 0
                                }), i
                            },
                            multiple: function() {
                                return I.hasClass(k.multiple)
                            },
                            single: function() {
                                return !x.is.multiple()
                            },
                            selectMutation: function(e) {
                                var n = !1;
                                return t.each(e, function(e, i) {
                                    return i.target && t(i.target).is("select") ? (n = !0, !0) : void 0
                                }), n
                            },
                            search: function() {
                                return I.hasClass(k.search)
                            },
                            searchSelection: function() {
                                return x.has.search() && 1 === R.parent(O.dropdown).length
                            },
                            selection: function() {
                                return I.hasClass(k.selection)
                            },
                            userValue: function(e) {
                                return -1 !== t.inArray(e, x.get.userValues())
                            },
                            upward: function(t) {
                                var e = t || I;
                                return e.hasClass(k.upward)
                            },
                            visible: function(t) {
                                return t ? t.hasClass(k.visible) : z.hasClass(k.visible)
                            }
                        },
                        can: {
                            activate: function(t) {
                                return !!C.useLabels || (!x.has.maxSelections() || !(!x.has.maxSelections() || !t.hasClass(k.active)))
                            },
                            click: function() {
                                return c || "click" == C.on
                            },
                            extendSelect: function() {
                                return C.allowAdditions || C.apiSettings
                            },
                            show: function() {
                                return !x.is.disabled() && (x.has.items() || x.has.message())
                            },
                            useAPI: function() {
                                return t.fn.api !== i
                            }
                        },
                        animate: {
                            show: function(e, n) {
                                var o, r = n || z,
                                    s = n ? function() {} : function() {
                                        x.hideSubMenus(), x.hideOthers(), x.set.active()
                                    };
                                e = t.isFunction(e) ? e : function() {}, x.verbose("Doing menu show animation", r), x.set.direction(n), o = x.get.transition(n), x.is.selection() && x.set.scrollPosition(x.get.selectedItem(), !0), (x.is.hidden(r) || x.is.animating(r)) && ("none" == o ? (s(), r.transition("show"), e.call(G)) : t.fn.transition !== i && I.transition("is supported") ? r.transition({
                                    animation: o + " in",
                                    debug: C.debug,
                                    verbose: C.verbose,
                                    duration: C.duration,
                                    queue: !0,
                                    onStart: s,
                                    onComplete: function() {
                                        e.call(G)
                                    }
                                }) : x.error($.noTransition, o))
                            },
                            hide: function(e, n) {
                                var o = n || z,
                                    r = (n ? .9 * C.duration : C.duration, n ? function() {} : function() {
                                        x.can.click() && x.unbind.intent(), x.remove.active()
                                    }),
                                    s = x.get.transition(n);
                                e = t.isFunction(e) ? e : function() {}, (x.is.visible(o) || x.is.animating(o)) && (x.verbose("Doing menu hide animation", o), "none" == s ? (r(), o.transition("hide"), e.call(G)) : t.fn.transition !== i && I.transition("is supported") ? o.transition({
                                    animation: s + " out",
                                    duration: C.duration,
                                    debug: C.debug,
                                    verbose: C.verbose,
                                    queue: !0,
                                    onStart: r,
                                    onComplete: function() {
                                        "auto" == C.direction && x.remove.upward(n), e.call(G)
                                    }
                                }) : x.error($.transition))
                            }
                        },
                        hideAndClear: function() {
                            x.remove.searchTerm(), x.has.maxSelections() || (x.has.search() ? x.hide(function() {
                                x.remove.filteredItem()
                            }) : x.hide())
                        },
                        delay: {
                            show: function() {
                                x.verbose("Delaying show event to ensure user intent"), clearTimeout(x.timer), x.timer = setTimeout(x.show, C.delay.show)
                            },
                            hide: function() {
                                x.verbose("Delaying hide event to ensure user intent"), clearTimeout(x.timer), x.timer = setTimeout(x.hide, C.delay.hide)
                            }
                        },
                        escape: {
                            regExp: function(t) {
                                return t = String(t), t.replace(D.escape, "\\$&")
                            }
                        },
                        setting: function(e, n) {
                            if (x.debug("Changing setting", e, n), t.isPlainObject(e)) t.extend(!0, C, e);
                            else {
                                if (n === i) return C[e];
                                C[e] = n
                            }
                        },
                        internal: function(e, n) {
                            if (t.isPlainObject(e)) t.extend(!0, x, e);
                            else {
                                if (n === i) return x[e];
                                x[e] = n
                            }
                        },
                        debug: function() {
                            C.debug && (C.performance ? x.performance.log(arguments) : (x.debug = Function.prototype.bind.call(console.info, console, C.name + ":"), x.debug.apply(console, arguments)))
                        },
                        verbose: function() {
                            C.verbose && C.debug && (C.performance ? x.performance.log(arguments) : (x.verbose = Function.prototype.bind.call(console.info, console, C.name + ":"), x.verbose.apply(console, arguments)))
                        },
                        error: function() {
                            x.error = Function.prototype.bind.call(console.error, console, C.name + ":"), x.error.apply(console, arguments)
                        },
                        performance: {
                            log: function(t) {
                                var e, n, i;
                                C.performance && (e = (new Date).getTime(), i = u || e, n = e - i, u = e, d.push({
                                    Name: t[0],
                                    Arguments: [].slice.call(t, 1) || "",
                                    Element: G,
                                    "Execution Time": n
                                })), clearTimeout(x.performance.timer), x.performance.timer = setTimeout(x.performance.display, 500)
                            },
                            display: function() {
                                var e = C.name + ":",
                                    n = 0;
                                u = !1, clearTimeout(x.performance.timer), t.each(d, function(t, e) {
                                    n += e["Execution Time"]
                                }), e += " " + n + "ms", l && (e += " '" + l + "'"), (console.group !== i || console.table !== i) && d.length > 0 && (console.groupCollapsed(e), console.table ? console.table(d) : t.each(d, function(t, e) {
                                    console.log(e.Name + ": " + e["Execution Time"] + "ms")
                                }), console.groupEnd()), d = []
                            }
                        },
                        invoke: function(e, n, o) {
                            var s, a, l, c = Y;
                            return n = n || f, o = G || o, "string" == typeof e && c !== i && (e = e.split(/[\. ]/), s = e.length - 1, t.each(e, function(n, o) {
                                var r = n != s ? o + e[n + 1].charAt(0).toUpperCase() + e[n + 1].slice(1) : e;
                                if (t.isPlainObject(c[r]) && n != s) c = c[r];
                                else {
                                    if (c[r] !== i) return a = c[r], !1;
                                    if (!t.isPlainObject(c[o]) || n == s) return c[o] !== i ? (a = c[o], !1) : (x.error($.method, e), !1);
                                    c = c[o]
                                }
                            })), t.isFunction(a) ? l = a.apply(o, n) : a !== i && (l = a), t.isArray(r) ? r.push(l) : r !== i ? r = [r, l] : l !== i && (r = l), a
                        }
                    }, p ? (Y === i && x.initialize(), x.invoke(h)) : (Y !== i && Y.invoke("destroy"), x.initialize())
                }), r !== i ? r : s
            }, t.fn.dropdown.settings = {
                debug: !1,
                verbose: !1,
                performance: !0,
                on: "click",
                action: "activate",
                apiSettings: !1,
                saveRemoteData: !0,
                throttle: 200,
                context: e,
                direction: "auto",
                keepOnScreen: !0,
                match: "both",
                fullTextSearch: !1,
                placeholder: "auto",
                preserveHTML: !0,
                sortSelect: !1,
                forceSelection: !0,
                allowAdditions: !1,
                maxSelections: !1,
                useLabels: !0,
                delimiter: ",",
                showOnFocus: !0,
                allowTab: !0,
                allowCategorySelection: !1,
                fireOnInit: !1,
                transition: "auto",
                duration: 200,
                glyphWidth: 1.0714,
                label: {
                    transition: "scale",
                    duration: 200,
                    variation: !1
                },
                delay: {
                    hide: 300,
                    show: 200,
                    search: 20,
                    touch: 50
                },
                onChange: function(t, e, n) {},
                onAdd: function(t, e, n) {},
                onRemove: function(t, e, n) {},
                onLabelSelect: function(t) {},
                onLabelCreate: function(e, n) {
                    return t(this)
                },
                onLabelRemove: function(t) {
                    return !0
                },
                onNoResults: function(t) {
                    return !0
                },
                onShow: function() {},
                onHide: function() {},
                name: "Dropdown",
                namespace: "dropdown",
                message: {
                    addResult: "Add <b>{term}</b>",
                    count: "{count} selected",
                    maxSelections: "Max {maxCount} selections",
                    noResults: "No results found.",
                    serverError: "There was an error contacting the server"
                },
                error: {
                    action: "You called a dropdown action that was not defined",
                    alreadySetup: "Once a select has been initialized behaviors must be called on the created ui dropdown",
                    labels: "Allowing user additions currently requires the use of labels.",
                    missingMultiple: "<select> requires multiple property to be set to correctly preserve multiple values",
                    method: "The method you called is not defined.",
                    noAPI: "The API module is required to load resources remotely",
                    noStorage: "Saving remote data requires session storage",
                    noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"
                },
                regExp: {
                    escape: /[-[\]{}()*+?.,\\^$|#\s]/g
                },
                metadata: {
                    defaultText: "defaultText",
                    defaultValue: "defaultValue",
                    placeholderText: "placeholder",
                    text: "text",
                    value: "value"
                },
                fields: {
                    remoteValues: "results",
                    values: "values",
                    name: "name",
                    value: "value"
                },
                keys: {
                    backspace: 8,
                    delimiter: 188,
                    deleteKey: 46,
                    enter: 13,
                    escape: 27,
                    pageUp: 33,
                    pageDown: 34,
                    leftArrow: 37,
                    upArrow: 38,
                    rightArrow: 39,
                    downArrow: 40
                },
                selector: {
                    addition: ".addition",
                    dropdown: ".ui.dropdown",
                    icon: "> .dropdown.icon",
                    input: '> input[type="hidden"], > select',
                    item: ".item",
                    label: "> .label",
                    remove: "> .label > .delete.icon",
                    siblingLabel: ".label",
                    menu: ".menu",
                    message: ".message",
                    menuIcon: ".dropdown.icon",
                    search: "input.search, .menu > .search > input",
                    text: "> .text:not(.icon)",
                    unselectable: ".disabled, .filtered"
                },
                className: {
                    active: "active",
                    addition: "addition",
                    animating: "animating",
                    disabled: "disabled",
                    dropdown: "ui dropdown",
                    filtered: "filtered",
                    hidden: "hidden transition",
                    item: "item",
                    label: "ui label",
                    loading: "loading",
                    menu: "menu",
                    message: "message",
                    multiple: "multiple",
                    placeholder: "default",
                    search: "search",
                    selected: "selected",
                    selection: "selection",
                    upward: "upward",
                    visible: "visible"
                }
            }, t.fn.dropdown.settings.templates = {
                dropdown: function(e) {
                    var n = e.placeholder || !1,
                        i = (e.values || {}, "");
                    return i += '<i class="dropdown icon"></i>', i += e.placeholder ? '<div class="default text">' + n + "</div>" : '<div class="text"></div>', i += '<div class="menu">', t.each(e.values, function(t, e) {
                        i += e.disabled ? '<div class="disabled item" data-value="' + e.value + '">' + e.name + "</div>" : '<div class="item" data-value="' + e.value + '">' + e.name + "</div>"
                    }), i += "</div>"
                },
                menu: function(e, n) {
                    var i = e[n.values] || {},
                        o = "";
                    return t.each(i, function(t, e) {
                        o += '<div class="item" data-value="' + e[n.value] + '">' + e[n.name] + "</div>"
                    }), o
                },
                label: function(t, e) {
                    return e + '<i class="delete icon"></i>'
                },
                message: function(t) {
                    return t
                },
                addition: function(t) {
                    return t
                }
            }
        }(jQuery, window, document)
    },
    195: function(t, e) {
        ! function(t, e, n, i) {
            "use strict";
            t.fn.transition = function() {
                var o, r = t(this),
                    s = r.selector || "",
                    a = (new Date).getTime(),
                    l = [],
                    c = arguments,
                    u = c[0],
                    d = [].slice.call(arguments, 1),
                    h = "string" == typeof u;
                return e.requestAnimationFrame || e.mozRequestAnimationFrame || e.webkitRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
                    setTimeout(t, 0)
                }, r.each(function(e) {
                    var p, f, g, v, m, b, y, _, w, x = t(this),
                        C = this;
                    w = {
                        initialize: function() {
                            p = w.get.settings.apply(C, c), v = p.className, g = p.error, m = p.metadata, _ = "." + p.namespace, y = "module-" + p.namespace, f = x.data(y) || w, b = w.get.animationEndEvent(), h && (h = w.invoke(u)), h === !1 && (w.verbose("Converted arguments into settings object", p), p.interval ? w.delay(p.animate) : w.animate(), w.instantiate())
                        },
                        instantiate: function() {
                            w.verbose("Storing instance of module", w), f = w, x.data(y, f)
                        },
                        destroy: function() {
                            w.verbose("Destroying previous module for", C), x.removeData(y)
                        },
                        refresh: function() {
                            w.verbose("Refreshing display type on next animation"), delete w.displayType
                        },
                        forceRepaint: function() {
                            w.verbose("Forcing element repaint");
                            var t = x.parent(),
                                e = x.next();
                            0 === e.length ? x.detach().appendTo(t) : x.detach().insertBefore(e)
                        },
                        repaint: function() {
                            w.verbose("Repainting element"), C.offsetWidth
                        },
                        delay: function(t) {
                            var n, o, s = w.get.animationDirection();
                            s || (s = w.can.transition() ? w.get.direction() : "static"), t = t !== i ? t : p.interval, n = "auto" == p.reverse && s == v.outward, o = n || 1 == p.reverse ? (r.length - e) * p.interval : e * p.interval, w.debug("Delaying animation by", o), setTimeout(w.animate, o)
                        },
                        animate: function(t) {
                            if (p = t || p, !w.is.supported()) return w.error(g.support), !1;
                            if (w.debug("Preparing animation", p.animation), w.is.animating()) {
                                if (p.queue) return !p.allowRepeats && w.has.direction() && w.is.occurring() && w.queuing !== !0 ? w.debug("Animation is currently occurring, preventing queueing same animation", p.animation) : w.queue(p.animation), !1;
                                if (!p.allowRepeats && w.is.occurring()) return w.debug("Animation is already occurring, will not execute repeated animation", p.animation), !1;
                                w.debug("New animation started, completing previous early", p.animation), f.complete()
                            }
                            w.can.animate() ? w.set.animating(p.animation) : w.error(g.noAnimation, p.animation, C)
                        },
                        reset: function() {
                            w.debug("Resetting animation to beginning conditions"), w.remove.animationCallbacks(), w.restore.conditions(), w.remove.animating()
                        },
                        queue: function(t) {
                            w.debug("Queueing animation of", t), w.queuing = !0, x.one(b + ".queue" + _, function() {
                                w.queuing = !1, w.repaint(), w.animate.apply(this, p)
                            })
                        },
                        complete: function(t) {
                            w.debug("Animation complete", p.animation), w.remove.completeCallback(), w.remove.failSafe(), w.is.looping() || (w.is.outward() ? (w.verbose("Animation is outward, hiding element"), w.restore.conditions(), w.hide()) : w.is.inward() ? (w.verbose("Animation is outward, showing element"), w.restore.conditions(), w.show()) : (w.verbose("Static animation completed"), w.restore.conditions(), p.onComplete.call(C)))
                        },
                        force: {
                            visible: function() {
                                var t = x.attr("style"),
                                    e = w.get.userStyle(),
                                    n = w.get.displayType(),
                                    o = e + "display: " + n + " !important;",
                                    r = x.css("display"),
                                    s = t === i || "" === t;
                                r !== n ? (w.verbose("Overriding default display to show element", n), x.attr("style", o)) : s && x.removeAttr("style")
                            },
                            hidden: function() {
                                var t = x.attr("style"),
                                    e = x.css("display"),
                                    n = t === i || "" === t;
                                "none" === e || w.is.hidden() ? n && x.removeAttr("style") : (w.verbose("Overriding default display to hide element"), x.css("display", "none"))
                            }
                        },
                        has: {
                            direction: function(e) {
                                var n = !1;
                                return e = e || p.animation, "string" == typeof e && (e = e.split(" "), t.each(e, function(t, e) {
                                    (e === v.inward || e === v.outward) && (n = !0)
                                })), n
                            },
                            inlineDisplay: function() {
                                var e = x.attr("style") || "";
                                return t.isArray(e.match(/display.*?;/, ""))
                            }
                        },
                        set: {
                            animating: function(t) {
                                var e;
                                w.remove.completeCallback(), t = t || p.animation, e = w.get.animationClass(t), w.save.animation(e), w.force.visible(), w.remove.hidden(), w.remove.direction(), w.start.animation(e)
                            },
                            duration: function(t, e) {
                                e = e || p.duration, e = "number" == typeof e ? e + "ms" : e, (e || 0 === e) && (w.verbose("Setting animation duration", e), x.css({
                                    "animation-duration": e
                                }))
                            },
                            direction: function(t) {
                                t = t || w.get.direction(), t == v.inward ? w.set.inward() : w.set.outward()
                            },
                            looping: function() {
                                w.debug("Transition set to loop"), x.addClass(v.looping)
                            },
                            hidden: function() {
                                x.addClass(v.transition).addClass(v.hidden)
                            },
                            inward: function() {
                                w.debug("Setting direction to inward"), x.removeClass(v.outward).addClass(v.inward)
                            },
                            outward: function() {
                                w.debug("Setting direction to outward"), x.removeClass(v.inward).addClass(v.outward)
                            },
                            visible: function() {
                                x.addClass(v.transition).addClass(v.visible)
                            }
                        },
                        start: {
                            animation: function(t) {
                                t = t || w.get.animationClass(), w.debug("Starting tween", t), x.addClass(t).one(b + ".complete" + _, w.complete), p.useFailSafe && w.add.failSafe(), w.set.duration(p.duration), p.onStart.call(C)
                            }
                        },
                        save: {
                            animation: function(t) {
                                w.cache || (w.cache = {}), w.cache.animation = t
                            },
                            displayType: function(t) {
                                "none" !== t && x.data(m.displayType, t)
                            },
                            transitionExists: function(e, n) {
                                t.fn.transition.exists[e] = n, w.verbose("Saving existence of transition", e, n)
                            }
                        },
                        restore: {
                            conditions: function() {
                                var t = w.get.currentAnimation();
                                t && (x.removeClass(t), w.verbose("Removing animation class", w.cache)), w.remove.duration()
                            }
                        },
                        add: {
                            failSafe: function() {
                                var t = w.get.duration();
                                w.timer = setTimeout(function() {
                                    x.triggerHandler(b)
                                }, t + p.failSafeDelay), w.verbose("Adding fail safe timer", w.timer)
                            }
                        },
                        remove: {
                            animating: function() {
                                x.removeClass(v.animating)
                            },
                            animationCallbacks: function() {
                                w.remove.queueCallback(), w.remove.completeCallback()
                            },
                            queueCallback: function() {
                                x.off(".queue" + _)
                            },
                            completeCallback: function() {
                                x.off(".complete" + _)
                            },
                            display: function() {
                                x.css("display", "")
                            },
                            direction: function() {
                                x.removeClass(v.inward).removeClass(v.outward)
                            },
                            duration: function() {
                                x.css("animation-duration", "")
                            },
                            failSafe: function() {
                                w.verbose("Removing fail safe timer", w.timer), w.timer && clearTimeout(w.timer)
                            },
                            hidden: function() {
                                x.removeClass(v.hidden)
                            },
                            visible: function() {
                                x.removeClass(v.visible)
                            },
                            looping: function() {
                                w.debug("Transitions are no longer looping"), w.is.looping() && (w.reset(), x.removeClass(v.looping))
                            },
                            transition: function() {
                                x.removeClass(v.visible).removeClass(v.hidden)
                            }
                        },
                        get: {
                            settings: function(e, n, i) {
                                return "object" == typeof e ? t.extend(!0, {}, t.fn.transition.settings, e) : "function" == typeof i ? t.extend({}, t.fn.transition.settings, {
                                    animation: e,
                                    onComplete: i,
                                    duration: n
                                }) : "string" == typeof n || "number" == typeof n ? t.extend({}, t.fn.transition.settings, {
                                    animation: e,
                                    duration: n
                                }) : "object" == typeof n ? t.extend({}, t.fn.transition.settings, n, {
                                    animation: e
                                }) : "function" == typeof n ? t.extend({}, t.fn.transition.settings, {
                                    animation: e,
                                    onComplete: n
                                }) : t.extend({}, t.fn.transition.settings, {
                                    animation: e
                                })
                            },
                            animationClass: function(t) {
                                var e = t || p.animation,
                                    n = w.can.transition() && !w.has.direction() ? w.get.direction() + " " : "";
                                return v.animating + " " + v.transition + " " + n + e
                            },
                            currentAnimation: function() {
                                return !(!w.cache || w.cache.animation === i) && w.cache.animation
                            },
                            currentDirection: function() {
                                return w.is.inward() ? v.inward : v.outward
                            },
                            direction: function() {
                                return w.is.hidden() || !w.is.visible() ? v.inward : v.outward
                            },
                            animationDirection: function(e) {
                                var n;
                                return e = e || p.animation, "string" == typeof e && (e = e.split(" "), t.each(e, function(t, e) {
                                    e === v.inward ? n = v.inward : e === v.outward && (n = v.outward)
                                })), !!n && n
                            },
                            duration: function(t) {
                                return t = t || p.duration, t === !1 && (t = x.css("animation-duration") || 0), "string" == typeof t ? t.indexOf("ms") > -1 ? parseFloat(t) : 1e3 * parseFloat(t) : t
                            },
                            displayType: function() {
                                return p.displayType ? p.displayType : (x.data(m.displayType) === i && w.can.transition(!0), x.data(m.displayType))
                            },
                            userStyle: function(t) {
                                return t = t || x.attr("style") || "", t.replace(/display.*?;/, "")
                            },
                            transitionExists: function(e) {
                                return t.fn.transition.exists[e]
                            },
                            animationStartEvent: function() {
                                var t, e = n.createElement("div"),
                                    o = {
                                        animation: "animationstart",
                                        OAnimation: "oAnimationStart",
                                        MozAnimation: "mozAnimationStart",
                                        WebkitAnimation: "webkitAnimationStart"
                                    };
                                for (t in o)
                                    if (e.style[t] !== i) return o[t];
                                return !1
                            },
                            animationEndEvent: function() {
                                var t, e = n.createElement("div"),
                                    o = {
                                        animation: "animationend",
                                        OAnimation: "oAnimationEnd",
                                        MozAnimation: "mozAnimationEnd",
                                        WebkitAnimation: "webkitAnimationEnd"
                                    };
                                for (t in o)
                                    if (e.style[t] !== i) return o[t];
                                return !1
                            }
                        },
                        can: {
                            transition: function(e) {
                                var n, o, r, s, a, l, c, u = p.animation,
                                    d = w.get.transitionExists(u);
                                if (d === i || e) {
                                    if (w.verbose("Determining whether animation exists"), n = x.attr("class"), o = x.prop("tagName"), r = t("<" + o + " />").addClass(n).insertAfter(x), s = r.addClass(u).removeClass(v.inward).removeClass(v.outward).addClass(v.animating).addClass(v.transition).css("animationName"), a = r.addClass(v.inward).css("animationName"), c = r.attr("class", n).removeAttr("style").removeClass(v.hidden).removeClass(v.visible).show().css("display"), w.verbose("Determining final display state", c), w.save.displayType(c), r.remove(), s != a) w.debug("Direction exists for animation", u), l = !0;
                                    else {
                                        if ("none" == s || !s) return void w.debug("No animation defined in css", u);
                                        w.debug("Static animation found", u, c), l = !1
                                    }
                                    w.save.transitionExists(u, l)
                                }
                                return d !== i ? d : l
                            },
                            animate: function() {
                                return w.can.transition() !== i
                            }
                        },
                        is: {
                            animating: function() {
                                return x.hasClass(v.animating)
                            },
                            inward: function() {
                                return x.hasClass(v.inward)
                            },
                            outward: function() {
                                return x.hasClass(v.outward)
                            },
                            looping: function() {
                                return x.hasClass(v.looping)
                            },
                            occurring: function(t) {
                                return t = t || p.animation, t = "." + t.replace(" ", "."), x.filter(t).length > 0
                            },
                            visible: function() {
                                return x.is(":visible")
                            },
                            hidden: function() {
                                return "hidden" === x.css("visibility")
                            },
                            supported: function() {
                                return b !== !1
                            }
                        },
                        hide: function() {
                            w.verbose("Hiding element"), w.is.animating() && w.reset(), C.blur(), w.remove.display(), w.remove.visible(), w.set.hidden(), w.force.hidden(), p.onHide.call(C), p.onComplete.call(C)
                        },
                        show: function(t) {
                            w.verbose("Showing element", t), w.remove.hidden(), w.set.visible(), w.force.visible(), p.onShow.call(C), p.onComplete.call(C)
                        },
                        toggle: function() {
                            w.is.visible() ? w.hide() : w.show()
                        },
                        stop: function() {
                            w.debug("Stopping current animation"), x.triggerHandler(b)
                        },
                        stopAll: function() {
                            w.debug("Stopping all animation"), w.remove.queueCallback(), x.triggerHandler(b)
                        },
                        clear: {
                            queue: function() {
                                w.debug("Clearing animation queue"), w.remove.queueCallback()
                            }
                        },
                        enable: function() {
                            w.verbose("Starting animation"), x.removeClass(v.disabled)
                        },
                        disable: function() {
                            w.debug("Stopping animation"), x.addClass(v.disabled)
                        },
                        setting: function(e, n) {
                            if (w.debug("Changing setting", e, n), t.isPlainObject(e)) t.extend(!0, p, e);
                            else {
                                if (n === i) return p[e];
                                p[e] = n
                            }
                        },
                        internal: function(e, n) {
                            if (t.isPlainObject(e)) t.extend(!0, w, e);
                            else {
                                if (n === i) return w[e];
                                w[e] = n
                            }
                        },
                        debug: function() {
                            p.debug && (p.performance ? w.performance.log(arguments) : (w.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), w.debug.apply(console, arguments)))
                        },
                        verbose: function() {
                            p.verbose && p.debug && (p.performance ? w.performance.log(arguments) : (w.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), w.verbose.apply(console, arguments)))
                        },
                        error: function() {
                            w.error = Function.prototype.bind.call(console.error, console, p.name + ":"), w.error.apply(console, arguments)
                        },
                        performance: {
                            log: function(t) {
                                var e, n, i;
                                p.performance && (e = (new Date).getTime(), i = a || e, n = e - i, a = e, l.push({
                                    Name: t[0],
                                    Arguments: [].slice.call(t, 1) || "",
                                    Element: C,
                                    "Execution Time": n
                                })), clearTimeout(w.performance.timer), w.performance.timer = setTimeout(w.performance.display, 500)
                            },
                            display: function() {
                                var e = p.name + ":",
                                    n = 0;
                                a = !1, clearTimeout(w.performance.timer), t.each(l, function(t, e) {
                                    n += e["Execution Time"]
                                }), e += " " + n + "ms", s && (e += " '" + s + "'"), r.length > 1 && (e += " (" + r.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(e), console.table ? console.table(l) : t.each(l, function(t, e) {
                                    console.log(e.Name + ": " + e["Execution Time"] + "ms")
                                }), console.groupEnd()), l = []
                            }
                        },
                        invoke: function(e, n, r) {
                            var s, a, l, c = f;
                            return n = n || d, r = C || r, "string" == typeof e && c !== i && (e = e.split(/[\. ]/), s = e.length - 1, t.each(e, function(n, o) {
                                var r = n != s ? o + e[n + 1].charAt(0).toUpperCase() + e[n + 1].slice(1) : e;
                                if (t.isPlainObject(c[r]) && n != s) c = c[r];
                                else {
                                    if (c[r] !== i) return a = c[r], !1;
                                    if (!t.isPlainObject(c[o]) || n == s) return c[o] !== i && (a = c[o], !1);
                                    c = c[o]
                                }
                            })), t.isFunction(a) ? l = a.apply(r, n) : a !== i && (l = a), t.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), a !== i && a
                        }
                    }, w.initialize()
                }), o !== i ? o : this
            }, t.fn.transition.exists = {}, t.fn.transition.settings = {
                name: "Transition",
                debug: !1,
                verbose: !1,
                performance: !0,
                namespace: "transition",
                interval: 0,
                reverse: "auto",
                onStart: function() {},
                onComplete: function() {},
                onShow: function() {},
                onHide: function() {},
                useFailSafe: !0,
                failSafeDelay: 100,
                allowRepeats: !1,
                displayType: !1,
                animation: "fade",
                duration: !1,
                queue: !0,
                metadata: {
                    displayType: "display"
                },
                className: {
                    animating: "animating",
                    disabled: "disabled",
                    hidden: "hidden",
                    inward: "in",
                    loading: "loading",
                    looping: "looping",
                    outward: "out",
                    transition: "transition",
                    visible: "visible"
                },
                error: {
                    noAnimation: "There is no css animation matching the one you specified. Please make sure your css is vendor prefixed, and you have included transition css.",
                    repeated: "That animation is already occurring, cancelling repeated animation",
                    method: "The method you called is not defined",
                    support: "This browser does not support CSS animations"
                }
            }
        }(jQuery, window, document)
    },
    196: function(t, e, n) {
        e = t.exports = n(11)(), e.push([t.id, ".login-input-ul {\n  margin: 20px 0 0; }\n\n.error-msg {\n  height: 19px; }\n\n.btn-wrap {\n  position: relative;\n  display: inline-block; }\n\n.btn-wrap .button {\n  margin: 0; }\n", ""])
    },
    197: function(t, e, n) {
        t.exports = '<div class="pop-mask login-mask active" v-on="click: hidepop">\r\n\t\t<div class="pop-box login-box" v-on="click: stopPropagation">\r\n\t\t\t<h5 class="pop-title"><img src="' + n(19) + '"></h5>\r\n\t\t\t<a class="pop-close" href="javascript:;" v-on="click: hidepop" v-if="disableclose!=1">×</a>\r\n\t\t\t<div class="pop-bd">\r\n\t\t\t\t<form id="login-form" v-on="submit: login">\r\n\t\t\t\t\t<ul class="login-input-ul">\r\n\t\t\t\t\t\t<li class="mail">\r\n\t\t\t\t\t\t\t<label for="email" class="log-label"></label>\r\n\t\t\t\t\t\t\t<input type="text" id="email" placeholder="{{t(\'g.loginaccount\',locale)}}" name="email" v-model="email" v-on="change:clearMsg,focus:adcls,blur:delcls,blur:validateEmail(email)" autofocus="autofocus"/>\r\n\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t<li class="pw">\r\n\t\t\t\t\t\t\t<label for="password" class="log-label"></label>\r\n\t\t\t\t\t\t\t<input type="password" id="password" placeholder="{{t(\'g.Password\',locale)}}" name="password" v-model="password" v-on="change:clearMsg,focus:adcls,blur:delcls" />\r\n\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t<li class="verif-code clearfix">\r\n\t\t\t\t\t\t\t<label for="verif_code" class="log-label"></label>\r\n\t\t\t\t\t\t\t<input type="text" id="verif_code" class="log-input" placeholder="{{t(\'g.verif_code\',locale)}}" name="verif_code" v-model="verif_code" />\r\n\t\t\t\t\t\t\t<img class="log-img js-verif-img" src="' + n(199) + '" width="90" height="32" v-on="click:getVerifyCode"/>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<div class="link-wrap">\r\n\t\t\t\t\t\t<a href="javascript:;" v-on="click:newindow(t(\'g.forgetpswlink\',locale))">{{t(\'g.forgetpw\',locale)}}</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="btn-wrap">\r\n\t\t\t\t\t\t<input class="button radius signinbtn" type="submit" value="{{t(\'g.SignIn\',locale)}}">\r\n\t\t\t\t\t\t<i class="loading" v-show="loading"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="reg-link" v-show="!loading&&!showError"><a href="javascript:;" v-on="click:newindow(t(\'g.signuplink\',locale))">{{t(\'g.signup\',locale)}}</a></div>\r\n\t\t\t\t\t<div class="error-msg" v-show="!loading&&showError===1"><span>{{t(\'g.logintimeout\',locale)}}</span> <a href="javascript:;" v-on="click:newindow(t(\'g.signuplink\',locale))">{{t(\'g.signup\',locale)}}</a></div>\r\n\t\t\t\t\t<div class="error-msg" v-show="!loading&&showError===2"><span>{{t(\'g.loginneterror\',locale)}}({{step_code}}-{{error_code}})</span> <a href="javascript:;" v-on="click:newindow(t(\'g.signuplink\',locale))">{{t(\'g.signup\',locale)}}</a></div>\r\n\t\t\t\t\t<div class="error-msg" v-show="!loading&&showError===3"><span>{{t(\'g.loginaccounterror\',locale)}}</span> <a href="javascript:;" v-on="click:newindow(t(\'g.signuplink\',locale))">{{t(\'g.signup\',locale)}}</a></div>\r\n\t\t\t\t\t<div class="error-msg" v-show="!loading&&showError===4"><span>{{t(\'g.loginPasswordEmpty\',locale)}}</span> <a href="javascript:;" v-on="click:newindow(t(\'g.signuplink\',locale))">{{t(\'g.signup\',locale)}}</a></div>\r\n\t\t\t\t\t<div class="error-msg" v-show="!loading&&showError===5"><span>{{t(\'g.loginVerifCodeEmpty\',locale)}}</span> <a href="javascript:;" v-on="click:newindow(t(\'g.signuplink\',locale))">{{t(\'g.signup\',locale)}}</a></div>\r\n\t\t\t\t\t<div class="error-msg" v-show="!loading&&showError===6"><span>{{t(\'g.loginemailerror\',locale)}}</span> <a href="javascript:;" v-on="click:newindow(t(\'g.signuplink\',locale))">{{t(\'g.signup\',locale)}}</a></div>\r\n\t\t\t\t\t<div class="error-msg" v-show="!loading&&showError===7"><span>{{t(\'g.loginepassworderror\',locale)}}</span> <a href="javascript:;" v-on="click:newindow(t(\'g.signuplink\',locale))">{{t(\'g.signup\',locale)}}</a></div>\r\n\t\t\t\t\t<div class="error-msg" v-show="!loading&&showError===8"><span>{{t(\'g.loginverifcodeerror\',locale)}}</span> <a href="javascript:;" v-on="click:newindow(t(\'g.signuplink\',locale))">{{t(\'g.signup\',locale)}}</a></div>\r\n\t\t\t\t\t<div class="error-msg" v-show="!loading&&showError===9"><span>{{t(\'g.login_account_freezed\',locale)}}</span> <a href="javascript:;" v-on="click:newindow(t(\'g.signuplink\',locale))">{{t(\'g.signup\',locale)}}</a></div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>'
    },
    198: function(t, e, n) {
        var i = n(196);
        "string" == typeof i && (i = [
            [t.id, i, ""]
        ]);
        n(10)(i, {});
        i.locals && (t.exports = i.locals)
    },
    199: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAeCAMAAADthUvBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUYzNTUwRkYxQUJGMTFFN0I0MkRBNTUwRDhBRDEyMDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUYzNTUxMDAxQUJGMTFFN0I0MkRBNTUwRDhBRDEyMDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRjM1NTBGRDFBQkYxMUU3QjQyREE1NTBEOEFEMTIwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRjM1NTBGRTFBQkYxMUU3QjQyREE1NTBEOEFEMTIwOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pjin1qsAAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAAHElEQVR42uzBAQ0AAADCoPdPbQ43oAAAgG8TYAAL1gABVyRiUQAAAABJRU5ErkJggg=="
    },
    200: function(t, e, n) {
        n(198), t.exports = n(201), t.exports.template = n(197)
    },
    201: function(t, e, n) {
        var i = ws.general,
            o = n(9);
        t.exports = {
            props: ["redirect", "callback", "disableclose"],
            data: function() {
                return {
                    locale: this.$root.$data.locale,
                    email: "",
                    password: "",
                    showError: 0,
                    loading: !1,
                    verif_code: "",
                    error_code: "",
                    step_code: ""
                }
            },
            mixins: [n(4)],
            translations: {
                g: global_locale
            },
            attached: function() {
                var t = this;
                t.getVerifyCode()
            },
            ready: function() {},
            methods: {
                newindow: function(t) {
                    utils.newindow(t)
                },
                login: function(t) {
                    var e = this;
                    this.t, this.locale;
                    if (t.preventDefault(), !e.validateEmail(this.email)) return 0;
                    if (!e.password) return void(e.showError = 4);
                    if (!e.verif_code) return void(e.showError = 5);
                    e.loading = !0;
                    var n = "",
                        r = /^1\d{10}$/;
                    r.test(e.email) && (n = "86"), i.login({
                        ACCOUNT: e.email,
                        PASSWORD: e.password,
                        VERIF_CODE: e.verif_code,
                        AREA_CODE: n,
                        onSuccess: function(t) {
                            if (console.log("login successfully!"), e.loading = !1, e.$parent ? e.$parent.$data.showLogin = !1 : e.$root.$data.showLogin = !1, e.$root.$data.loginAction = "email", e.$root.$data.email = e.email, o.setEmail(e.email), e.callback) console.log(e.$root), console.log(e.$parent), e.$parent[e.callback]();
                            else if (e.redirect && 0 != e.redirect) {
                                var n = e.redirect.split(":");
                                if (n.length >= 2) var i = n[0],
                                    r = n[1];
                                else var r = !1;
                                utils.directTo(i, r)
                            }
                        },
                        onFailure: function(t) {
                            if (t = t || {}, console.log("login failure!", t), e.loading = !1, 5 == t.STEP_CODE) switch (t.ERROR_CODE) {
                                case 515:
                                    e.showError = 3;
                                    break;
                                case 524:
                                case 526:
                                    e.showError = 8;
                                    break;
                                case 305:
                                    e.showError = 7;
                                    break;
                                case 502:
                                    e.showError = 6;
                                    break;
                                case 521:
                                case 523:
                                    e.showError = 9;
                                    break;
                                default:
                                    e.showError = 2
                            } else e.showError = 2;
                            e.step_code = t.STEP_CODE, e.error_code = t.ERROR_CODE, e.getVerifyCode()
                        },
                        onTimeout: function(t) {
                            console.log("login timeout!", t), e.loading = !1, e.showError = 1, e.getVerifyCode()
                        }
                    })
                },
                hidepop: function() {
                    1 != this.disableclose && (this.$parent.$data.showLogin = !1)
                },
                stopPropagation: function(t) {
                    t.stopPropagation()
                },
                clearMsg: function() {
                    this.showError = 0
                },
                validateEmail: function(t) {
                    var e = this,
                        n = /^1\d{10}$/,
                        i = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,5})+$/;
                    return i.test(t) || n.test(t) ? 1 : (setTimeout(function() {
                        e.showError = 3
                    }, 200), 0)
                },
                adcls: function(t) {
                    $(t.target).prev().addClass("focus")
                },
                delcls: function(t) {
                    $(t.target).prev().removeClass("focus")
                },
                getVerifyCode: function() {
                    var t = this;
                    i.connected ? i.getVerifyCode({
                        onSuccess: function(t) {
                            var e = t && t.DATA;
                            e && (e = "data:image/png;base64," + e, $(".js-verif-img").attr("src", e)), console.log("getVerifyCode success!", t)
                        },
                        onFailure: function(t) {
                            console.log("getVerifyCode failure!", t)
                        },
                        onTimeout: function(t) {
                            console.log("getVerifyCode timeout!", t)
                        }
                    }) : setTimeout(function() {
                        t.getVerifyCode()
                    }, 1e3)
                }
            },
            events: {
                locale: function(t) {
                    this.locale = t
                }
            }
        }
    },
    202: function(t, e) {
        t.exports = '<div class="select-wrap">\r\n  <div class="ui dropdown bottom pointing languagedp">\r\n    <select id="language" name="language" v-model="locale">\r\n      <option value="en">English</option>\r\n      <option value="zh-cn">简体中文</option>\r\n      <option value="jp">日本語</option>\r\n      <option value="it">lingua italiana</option>\r\n      <option value="de">Deutsch</option>\r\n      <option value="es">Español</option>\r\n      <option value="fr">Français</option>\r\n      <option value="nl">Nederlands</option>\r\n      <option value="pt">Português</option>\r\n      <option value="ru">русский</option>\r\n    </select>\r\n    <div class="text">Language</div>\r\n    <i class="dropdown icon"></i>\r\n    <div class="menu">\r\n      <div class="item" data-value="en">English</div>\r\n      <div class="item" data-value="zh-cn">简体中文</div>\r\n      <div class="item" data-value="jp">日本語</div>\r\n      <div class="item" data-value="it">lingua italiana</div>\r\n      <div class="item" data-value="de">Deutsch</div>\r\n      <div class="item" data-value="es">Español</div>\r\n      <div class="item" data-value="fr">Français</div>\r\n      <div class="item" data-value="nl">Nederlands</div>\r\n      <div class="item" data-value="pt">Português</div>\r\n      <div class="item" data-value="ru">русский</div>\r\n    </div>\r\n  </div>\r\n</div>'
    },
    203: function(t, e, n) {
        t.exports = n(204), t.exports.template = n(202)
    },
    204: function(t, e) {
        t.exports = {
            props: ["locale"],
            data: function() {
                return {}
            },
            ready: function() {
                $(".languagedp").dropdown({
                    transition: "slide up"
                })
            },
            methods: {}
        }
    },
    218: function(t, e) {
        t.exports = function(t, e, n) {
            return "-" == e ? t > n ? n : t : "-" == n ? t < e ? e : t : t > n ? n : t < e ? e : t
        }
    },
    296: function(t, e, n) {
        e = t.exports = n(11)(), e.push([t.id, ".com-privacy-policy {\n  padding: 0 0 13px 13px; }\n  .com-privacy-policy .privacy-policy-item .privacy-policy-txt:hover {\n    color: rgba(255, 255, 255, 0.6) !important; }\n  .com-privacy-policy .privacy-policy-item:first-child {\n    margin-bottom: 4px; }\n\n.zh-cn .com-privacy-policy .privacy-policy-item .privacy-policy-txt {\n  margin-left: -5px; }\n", ""])
    },
    298: function(t, e) {
        t.exports = "<div class=\"com-privacy-policy\">\r\n\t\t<div class=\"privacy-policy-item\">\r\n\t\t\t<a v-on='click:open_privacy_policy' href='javascript:void(0)' class='dji-clearafocus privacy-policy-txt'>{{ t('g.privacy_policy',locale) }}</a>\r\n\t\t</div>\r\n\t\t<div class=\"privacy-policy-item\">\r\n\t\t\t<a v-on='click:open_terms_of_use' href='javascript:void(0)' class='dji-clearafocus privacy-policy-txt'>{{ t('g.terms_of_use',locale) }}</a>\r\n\t\t</div>\r\n\t</div>"
    },
    299: function(t, e, n) {
        var i = n(296);
        "string" == typeof i && (i = [
            [t.id, i, ""]
        ]);
        n(10)(i, {});
        i.locals && (t.exports = i.locals)
    },
    300: function(t, e, n) {
        n(299), t.exports = n(301), t.exports.template = n(298)
    },
    301: function(t, e, n) {
        t.exports = {
            props: ["locale"],
            data: function() {
                return {}
            },
            mixins: [n(4)],
            translations: {
                g: global_locale
            },
            methods: {
                open_privacy_policy: function() {
                    var t = this;
                    "zh-cn" == t.locale ? utils.newindow("http://www.dji.com/cn/policy?country_code=cn&lang=zh-CN") : utils.newindow("http://www.dji.com/policy?country_code=us&lang=en")
                },
                open_terms_of_use: function() {
                    var t = this;
                    "zh-cn" == t.locale ? utils.newindow("privacy_policy_cn.html") : utils.newindow("privacy_policy_en.html")
                }
            }
        }
    },
    887: function(t, e) {
        t.exports = {
            syncFile: {
                "zh-cn": "下载文件",
                en: "Download"
            },
            loadFile: {
                "zh-cn": "加载文件",
                en: "Load"
            }
        }
    },
    967: function(t, e) {},
    1023: function(t, e) {
        t.exports = '<div class="frame-page {{locale}} {{view}}-wrap">\r\n\t\t<div id="main-internal" class="row">\r\n\t\t\t<div class="sidebar columns large-2 medium-2 small-2">\r\n\t\t\t\t<ul class="nav-li">\r\n\r\n\t\t\t\t\t<li class="nav-logo"><a href="./index.html#/devices/notfirst"><img v-attr="src:\'./build/assets/images/\'+activeDeviceConfig[\'navlogo\']" v-if="activeDeviceConfig[\'navlogo\']!=undefined"></a></li>\r\n\t\t\t\t\t<li class="n-flight-log" v-class="active:view==\'flight-log\'"><a href="#/flight-log"><i></i>{{t(\'g.flightLog\',locale)}}</a></li>\r\n\r\n\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class="bot-bar">\r\n\t\t\t\t\t<ul class="bot-box status-info">\r\n\t\t\t\t\t\t<!--li><span>MC {{t(\'g.Output\',locale)}}</span></li-->\r\n\t\t\t\t\t\t<li><i v-class="error:!connected"></i><!--b></b--></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<privacy-policy locale="{{@ locale}}"></privacy-policy>\r\n\r\n\t\t\t\t\t<ul class="bot-box dropdown-li">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<language-selection locale=\'{{@ locale}}\'></language-selection>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class="select-wrap">\r\n\t\t\t\t\t\t\t\t<div class="ui dropdown bottom pointing logindp" v-on="mousedown:gologinornot">\r\n\t\t\t\t\t\t\t\t\t<select id="account-menus" name="account-menus" v-model="loginAction" v-on="change:loginaction">\r\n\t\t\t\t\t\t\t\t\t\t<option value="login">{{t(\'g.accLogin\',locale)}}</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value="email">{{email}}</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value="logout">{{t(\'g.Logout\',locale)}}</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t<div class="text" v-if="loginAction==\'login\'">{{t(\'g.accLogin\',locale)}}</div>\r\n\t\t\t\t\t\t\t\t\t<div class="text" v-if="loginAction==\'email\'">{{email}}</div>\r\n\t\t\t\t\t\t\t\t\t<div class="text" v-if="loginAction==\'logout\'">{{t(\'g.Logout\',locale)}}</div>\r\n\t\t\t\t\t\t\t\t\t<i class="dropdown icon"></i>\r\n\t\t\t\t\t\t\t\t\t<div class="menu">\r\n\t\t\t\t\t\t\t\t\t\t<div class="item" data-value="email" v-if="!!email">{{email}}</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="item" data-value="logout" v-if="!!email">{{t(\'g.Logout\',locale)}}</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="disable-mask" v-if="makeDisable || activeDevice[\'NEED_UPGRADE\']"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class="main-content columns large-10 medium-10 small-10">\r\n\r\n\t\t\t\t<div class="disable-mask top-nav-disable" v-if="makeDisable"></div>\r\n\t\t\t\t<div class="disable-mask content-disable" v-if="makeContentDisable">\r\n\t\t\t\t\t<p class="disable-desc">{{t(\'g.lostconnect_desc_common\',locale)}}</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<!-- before initial ready -->\r\n\t\t\t\t<div class=\'loading-view\' v-if=\'!readReady\'>\r\n\t\t\t\t\t<template v-if="syncProgress>0">\r\n\t\t\t\t\t\t<div class="circlebar-wrap">\r\n\t\t\t\t\t\t\t<div class="circlebar" v-class="gt50style: syncProgress>=50,trans:syncProgress>=58">\r\n\t\t\t\t\t\t\t\t<div class="pie_left"><div class="left" style="transform: rotate({{syncProgress>50?Math.floor((syncProgress-50)*3.6):0|range 0 180}}deg);"></div></div>\r\n\t\t\t\t\t\t\t\t<div class="pie_right"><div class="right" style="transform: rotate({{Math.floor(syncProgress*3.6)|range 0 180}}deg);"></div></div>\r\n\t\t\t\t\t\t\t\t<div class="mask"><span class="ng-binding">{{syncProgress}}</span>%</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p class=\'bind-status\' v-cloak>{{t(\'g.Device\',locale)}}: <strong>{{activeDevice.PRODUCT_TYPE}} - {{activeDevice.DEVICE_TYPE}} ({{activeDevice.VERSION}})</strong></p>\r\n\t\t\t\t\t\t<p><span>{{t(\'g.ReadingData\',locale)}}</span></p>\r\n\t\t\t\t\t</template>\r\n\t\t\t\t\t<template v-if="syncProgress<=0">\r\n\t\t\t\t\t\t<div class="loading"></div>\r\n\t\t\t\t\t</template>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<!-- after initial ready -->\r\n\t\t\t\t<component is=\'{{view}}\'\r\n\t\t\t\t\t\t   tab=\'{{@ tab}}\'\r\n\t\t\t\t\t\t   class=\'view\'\r\n\t\t\t\t\t\t   paramters=\'{{@ paramters}}\'\r\n\t\t\t\t\t\t   locale=\'{{locale}}\'\r\n\t\t\t\t\t\t   debug=\'{{debug}}\'\r\n\t\t\t\t\t\t   simulating = \'{{@ simulating}}\'\r\n\t\t\t\t\t\t   keep-alive\r\n\t\t\t\t\t\t   v-transition=\'fade\'\r\n\t\t\t\t\t\t   transition-mode=\'out-in\'\r\n\t\t\t\t\t\t   v-if=\'readReady\'>\r\n\t\t\t\t</component>\r\n\r\n\t\t\t\t<login-popup v-if="showLogin"></login-popup>\r\n\t\t\t</div>\r\n\t\t</div>\r\n</template>'
    },
    1083: function(t, e) {
        t.exports = '<div class="content-wrap p4-content" id="flight-log">\r\n\r\n<div class="int-nav" v-show="step==0">\r\n\t<ul class="int-nav-li tabs">\r\n\t\t<li class="notclickable">\r\n\t\t\t<a href="javascript:;">{{t(\'g.FlightRecordlist\',locale)}}</a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n\r\n<div class="tabs-content" v-if="step==0" v-transition="fade" transition-mode="out-in">\r\n\r\n\t<div class="param-box content active">\r\n\t\t<div class="log-list">\r\n\t\t\t<table class="table log-list-table" v-class="nologs:!files.length">\r\n\t\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th width="25%">{{t(\'g.File\',locale)}}</th>\r\n\t\t\t\t\t<th width="25%">{{t(\'g.flightdate\',locale)}}</th>\r\n\t\t\t\t\t<th width="25%">{{t(\'g.fileSize\',locale)}}</th>\r\n\t\t\t\t\t<th width="25%">{{t(\'g.Action\',locale)}}</th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t<!--tr>\r\n\t\t\t\t\t<td width="25%">file.NAME</td>\r\n\t\t\t\t\t<td width="25%">file.DATE</td>\r\n\t\t\t\t\t<td width="25%">file.SIZE</td>\r\n\t\t\t\t\t<td width="25%">\r\n\t\t\t\t\t  <button class="button radius upbtn" v-on="click: loadFileAction(file)">{{t(\'sdcard.loadFile\',locale)}}</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t  </tr-->\r\n\t\t\t\t<tr v-repeat="file:files | orderBy \'NAME\' -1">\r\n\t\t\t\t\t<td width="25%">{{file.NAME}}</td>\r\n\t\t\t\t\t<td width="25%">{{file.DATE}}</td>\r\n\t\t\t\t\t<td width="25%">{{file.SIZE | bytes}}</td>\r\n\t\t\t\t\t<td width="25%">\r\n\t\t\t\t\t\t<button class="button radius upbtn" v-on="click: syncFile(file)" v-show="!file.IS_EXIST">{{t(\'sdcard.syncFile\',locale)}}</button>\r\n\t\t\t\t\t\t<button class="button radius upbtn" v-on="click: loadFileAction(file)" v-show="file.IS_EXIST">{{t(\'sdcard.loadFile\',locale)}}</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="no-files" v-show="!files.length&&!getfileLoading">\r\n\t\t{{t(\'g.noFightLogs\', locale)}}\r\n\t</div>\r\n\t<div class="no-files" v-show="getfileLoading">\r\n\t\t<i class="loading"></i>\r\n\t</div>\r\n\r\n</div>\r\n\r\n<div class="tabs-content graphic-content" v-if="step==1" v-transition="fade" transition-mode="out-in">\r\n\r\n\t<div class="param-box content active">\r\n\r\n\t\t<div class="off-canvas-wrap" data-offcanvas>\r\n\t\t\t<div class="inner-wrap">\r\n\t\t\t\t<nav class="tab-bar">\r\n\r\n\t\t\t\t\t<section class="left tab-bar-section">\r\n\t\t\t\t\t\t<h1 class="title">Flight Data</h1>\r\n\t\t\t\t\t</section>\r\n\r\n\t\t\t\t\t<section class="right-small">\r\n\t\t\t\t\t\t<a class="right-off-canvas-toggle menu-icon" href="#"><span></span></a>\r\n\t\t\t\t\t\t<a class="setting-icon screen" href="javascript:;" v-on="click:cmdplugin($event,\'FitWindow\')" title="Fit Window"></a>\r\n\t\t\t\t\t\t<a class="setting-icon zoomout toggleactive" href="javascript:;" v-on="click:cmdplugin($event,\'EnterNarrowMode\')" title="Zoom out"></a>\r\n\t\t\t\t\t\t<a class="setting-icon zoomin toggleactive" href="javascript:;" v-on="click:cmdplugin($event,\'EnterEnlargeMode\')" title="Zoom in"></a>\r\n\t\t\t\t\t\t<a class="setting-icon grab toggleactive" href="javascript:;" v-on="click:cmdplugin($event,\'EnterHandMode\')" title="Grab"></a>\r\n\t\t\t\t\t\t<a class="setting-icon cursor toggleactive active" href="javascript:;" v-on="click:cmdplugin($event,\'EnterArrowMode\')" title="Cursor"></a>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t</nav>\r\n\r\n\t\t\t\t<section class="main-section log-graphic">\r\n\t\t\t\t\t<object id="viewer-plugin" type="plugin/dji_viewer" width="{{viewerWidth}}" height="{{viewerHeight}}" title="viewer"></object>\r\n\t\t\t\t\t<div class="graphic-panel">\r\n\t\t\t\t\t\t<ul class="selected-labeli clearfix">\r\n\t\t\t\t\t\t\t<li v-repeat="label:selectedLabel" v-class="fade:!label.visible">\r\n\t\t\t\t\t\t\t\t<div class="colorwrap">\r\n\t\t\t\t\t\t\t\t\t<input class="jscolor" v-attr="value: label.COLOR" v-style="background-color: \'#\' + label.COLOR" v-on="change:colorChange($event,label)">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span>{{label.PARAM_NAME}}</span>\r\n\t\t\t\t\t\t\t\t<i class="tagico invisibleico" v-on="click:toggleGraphic(label)"></i>\r\n\t\t\t\t\t\t\t\t<b class="tagico del" v-on="click:delParam(label)"></b>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</section>\r\n\r\n\t\t\t\t<a class="exit-off-canvas"></a>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<aside class="right-off-canvas-menu">\r\n\t\t\t<ul class="off-canvas-list srch-row">\r\n\t\t\t\t<li class="dp-li">\r\n\t\t\t\t\t<div class="ui dropdown top pointing">\r\n\t\t\t\t\t\t<select id="language" name="language" v-model="srchtype">\r\n\t\t\t\t\t\t\t<option value="0">Group</option>\r\n\t\t\t\t\t\t\t<option value="1">Param</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t<div class="text">Group</div>\r\n\t\t\t\t\t\t<i class="dropdown icon"></i>\r\n\t\t\t\t\t\t<div class="menu right">\r\n\t\t\t\t\t\t\t<div class="item" data-value="0">Group</div>\r\n\t\t\t\t\t\t\t<div class="item" data-value="1">Param</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li v-show="srchtype==0">\r\n\t\t\t\t\t<input type="text" name="groupsrch" v-model="groupsrch" placeholder="Search Group">\r\n\t\t\t\t</li>\r\n\t\t\t\t<li v-show="srchtype==1">\r\n\t\t\t\t\t<input type="text" name="paramsrch" v-model="paramsrch" placeholder="Search Param Name">\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t\t<template v-repeat="param:param_list | filterBy groupsrch">\r\n\t\t\t\t<ul class="off-canvas-list labeli-list" v-show="$key!=\'\'">\r\n\t\t\t\t\t<li v-on="click:openContentList">\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<span class="ln">{{$key}}</span>\r\n\t\t\t\t\t\t\t<span class="arrico" v-if="param.length>0">&gt;</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<ul class="off-canvas-list pcontent-list" v-show="$key!=\'\'">\r\n\t\t\t\t\t<li v-repeat="subparam:param | filterBy paramsrch in \'name\'"><a href="javascript:;" v-on="click:readParam(subparam.name)">{{subparam.name}}</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</template>\r\n\t\t</aside>\r\n\r\n\t</div>\r\n\r\n</div>\r\n\r\n<div class="pop-mask white-mask download-mask" v-if="downingfile">\r\n\r\n\t<div class="pop-box">\r\n\t\t<a class="pop-close" href="javascript:;" v-on="click: hideDownloadMask" v-if="downloadFailed">×</a>\r\n\t\t<div class="pop-content-wrap">\r\n\t\t\t<div class="pop-desc" v-if="filedownloading">\r\n\t\t\t\t<p class="pop-tit">{{t(\'g.Downloading\',locale)}}</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="pop-desc" v-if="!filedownloading&&!downloadFailed">\r\n\t\t\t\t<p class="pop-tit">{{t(\'g.downloaded\',locale)}}</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="pop-desc" v-if="!filedownloading&&downloadFailed">\r\n\t\t\t\t<p class="pop-tit">{{t(\'g.downloadFailed\',locale)}}</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="download-list-container">\r\n\t\t\t\t<table class="table download-list">\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr v-class="failure:downloadFailed">\r\n\t\t\t\t\t\t<td width="20%">{{downloadFile.NAME}}</td>\r\n\t\t\t\t\t\t<td width="60%">\r\n\t\t\t\t\t\t\t<div class="progress-bar">\r\n\t\t\t\t\t\t\t\t<b style="width:{{downloadFile.PROGRESS}}%"></b>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td width="20%" v-if="downloadFailed">\r\n\t\t\t\t\t\t\t<button class="white-btn" v-on="click:syncFile(downloadFile)">{{t(\'g.Retry\',locale)}}</button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td width="20%" v-if="!downloadFailed">\r\n\t\t\t\t\t\t\t{{downloadFile.PROGRESS}} %\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n\r\n<div class="pop-mask white-mask download-mask" v-if="loadingfile">\r\n\r\n\t<div class="pop-box">\r\n\t\t<a class="pop-close" href="javascript:;" v-on="click: hideLoadMask" v-if="loadFailed">×</a>\r\n\t\t<div class="pop-content-wrap">\r\n\t\t\t<div class="pop-desc" v-if="fileloading">\r\n\t\t\t\t<p class="pop-tit">{{t(\'g.Loading\',locale)}}{{ACTION!=\'\'?\' - \'+ACTION:\'\'}}</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="pop-desc" v-if="!fileloading&&!loadFailed">\r\n\t\t\t\t<p class="pop-tit">{{t(\'g.loaded\',locale)}}</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="pop-desc" v-if="!fileloading&&loadFailed">\r\n\t\t\t\t<p class="pop-tit">{{t(\'g.LoadFailed\',locale)}}</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="download-list-container">\r\n\t\t\t\t<table class="table download-list">\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr v-class="failure:loadFailed">\r\n\t\t\t\t\t\t<td width="20%">{{activeFile.NAME}}</td>\r\n\t\t\t\t\t\t<td width="60%">\r\n\t\t\t\t\t\t\t<div class="progress-bar">\r\n\t\t\t\t\t\t\t\t<b style="width:{{PROGRESS}}%"></b>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td width="20%" v-if="loadFailed">\r\n\t\t\t\t\t\t\t<button class="white-btn" v-on="click:loadFileAction(activeFile)">{{t(\'g.Retry\',locale)}}</button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td width="20%" v-if="!loadFailed">\r\n\t\t\t\t\t\t\t{{PROGRESS}} %\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n\r\n</div>'
    },
    1175: function(t, e, n) {
        t.exports = n(1336), t.exports.template = n(1023)
    },
    1231: function(t, e, n) {
        t.exports = n(1396), t.exports.template = n(1083)
    },
    1336: function(t, e, n) {
        n(134);
        var i = n(133);
        window.jQuery = i, window.$ = i, n(136), n(135), n(195), n(194);
        var o = ws.general,
            r = n(9),
            s = (n(132), n(192));
        t.exports = {
            el: "#app",
            data: {
                debug: r.getDebug(),
                locale: r.getLang(),
                view: "",
                tab: "",
                activeDevice: {},
                activeDeviceConfig: {},
                makeDisable: !1,
                makeContentDisable: !1,
                email: !1,
                connected: !0,
                loginAction: this.email ? "email" : "login",
                showLogin: !1,
                CONNECT_ERROR: "",
                simulating: 0,
                initialReady: !1,
                readReady: !0,
                syncProgress: 0,
                sdcard: !1,
                range: {},
                indexs: [],
                cmdindexs: [],
                pushindexs: {},
                maxCounts: {
                    gps: 3,
                    imu: 3,
                    rc_channel: 40,
                    function: 20,
                    switch: 20,
                    button: 20
                },
                paramters: {}
            },
            mixins: [n(4)],
            translations: {
                g: global_locale,
                sdcard: n(887)
            },
            filters: {
                range: n(218)
            },
            components: {
                "language-selection": n(203),
                "login-popup": n(200),
                "flight-log": n(1231),
                "privacy-policy": n(300)
            },
            ready: function() {
                var t = this;
                utils.banDevTools(), s.run(window, t, r), i(".logindp").dropdown({
                    action: "select",
                    transition: "slide up"
                }), this.email = r.getEmail(), this.loginAction = this.email ? "email" : "login", t.initstyle(), i(window).resize(t.initstyle);
                r.getAllDevices();
                this.activeDevice = r.getActiveDevice(), this.activeDeviceConfig = r.getActiveDeviceConfig(), o.onclose = this.onclose, o.onerror = this.onerror, o.onopen = this.onopen, o.init(this), this.initparam(this.debug)
            },
            watch: {
                locale: function(t, e) {
                    r.setLang(t)
                },
                debug: function(t, e) {
                    this.initparam(t)
                }
            },
            methods: {
                newindow: function(t) {
                    utils.newindow(t)
                },
                app_ver_notify: function(t) {
                    utils.appVerNotify(t.APP_STATUS, this.t, this.locale)
                },
                initstyle: function() {
                    var t = i("#main-internal");
                    t.height(window.innerHeight), window.innerHeight <= 650 ? i(".pagetips").addClass("min") : i(".pagetips").removeClass("min"), i(".bot-bar").length > 0 && i(".nav-li").height(window.innerHeight - i(".bot-bar").height())
                },
                initparam: function(t) {},
                onopen: function() {
                    console.log("ws opened")
                },
                onclose: function() {
                    this.CONNECT_ERROR = "WebSockect is closed"
                },
                onerror: function() {
                    this.CONNECT_ERROR = "WebSockect is Error"
                },
                direct: function(t) {
                    utils.directTo(t)
                },
                loginaction: function() {
                    var t = this;
                    "login" == t.loginAction || "logout" == t.loginAction && o.logout({
                        onSuccess: function(e) {
                            t.email = !1, t.loginAction = "login", r.clearEmail(), console.log("logout successfully")
                        },
                        onFailure: function(t) {
                            console.log("logout failed")
                        },
                        onTimeout: function(t) {
                            console.log("logout timeout")
                        }
                    })
                },
                gologinornot: function(t) {
                    console.log(this.loginAction), "login" == this.loginAction && (t.preventDefault(), t.stopPropagation(), this.showLogin = !0)
                },
                device_arrival: function(t) {
                    console.log("device_arrival", t.FILE);
                    var e = !1;
                    r.addDevice(t) && t.FILE === this.activeDevice.FILE && (this.connected = !0, this.makeDisable = !1, this.makeContentDisable = !1, this.initparam(this.debug), this.$broadcast("device_arrival", t), e = !0), this.factory_enable && !e && this.$broadcast("device_arrival", t)
                },
                device_removed: function(t) {
                    console.log("device_removed", t);
                    var e = !1;
                    r.removeDevice(t) && (console.log("remove successful", t.FILE), t.FILE === this.activeDevice.FILE && (this.connected = !1, this.CONNECT_ERROR = "CONNECT ERROR", this.makeDisable = !0, this.makeContentDisable = !0, this.$broadcast("device_removed", t), e = !0)), this.factory_enable && !e && this.$broadcast("device_removed", t)
                },
                maxSidebar: function() {
                    utils.maxSidebar(function() {
                        i(window).resize()
                    })
                }
            }
        }
    },
    1396: function(t, e, n) {
        n(134);
        var i = n(133);
        window.jQuery = i, window.$ = i, n(136), n(135), n(1402);
        var o = ws.flightdata,
            r = n(9);
        t.exports = {
            props: ["paramters", "locale"],
            data: function() {
                return {
                    activeDevice: r.getActiveDevice(),
                    files: [],
                    activeFile: {},
                    downloadFile: {},
                    getfileLoading: !0,
                    loadingfile: !1,
                    downingfile: !1,
                    step: 0,
                    fileloading: !1,
                    loadFailed: !1,
                    filedownloading: !1,
                    downloadFailed: !1,
                    PROGRESS: 0,
                    ACTION: "",
                    param_list: {},
                    viewerWidth: "100%",
                    viewerHeight: 614,
                    cmdHistory: [],
                    selectedLabel: [],
                    groupsrch: "",
                    paramsrch: "",
                    srchtype: 0,
                    minSideFlag: !1
                }
            },
            mixins: [n(4)],
            translations: {
                g: global_locale,
                sdcard: n(887)
            },
            filters: {},
            detached: function() {
                i("#viewer-plugin")[0].postMessage("c;")
            },
            attached: function() {
                jsc.init()
            },
            ready: function() {
                i(document).foundation(), i(window).resize(this.resizeObject), this.resizeObject(), o.init(this)
            },
            watch: {
                step: function(t, e) {
                    var n = this;
                    1 == t ? (i(document).foundation(), i(".ui.dropdown").dropdown(), setTimeout(function() {
                        i(window).resize();
                        var t = o.url + n.activeDevice.FILE,
                            e = i("#viewer-plugin")[0];
                        e.postMessage("o;" + t), e.addEventListener("message", function(t) {
                            console.log("message"), console.log(t);
                            var e = JSON.parse(t.data);
                            e.visible = !0, "SUCCESS" == e.ERROR.toUpperCase() && (n.selectedLabel.push(e), setTimeout(function() {
                                jsc.init()
                            }, 500))
                        }, !1)
                    }, 300)) : setTimeout(function() {
                        i("#viewer-plugin")[0].postMessage("c;")
                    }, 300)
                },
                srchtype: function(t, e) {
                    1 == t ? (i(".labeli-list,.pcontent-list").addClass("active"), this.groupsrch = "") : (i(".labeli-list,.pcontent-list").removeClass("active"), this.paramsrch = "")
                }
            },
            methods: {
                resizeObject: function() {
                    var t = this,
                        e = i("#flight-log").height() - i(".tab-bar").height() - i(".graphic-panel").height();
                    t.viewerHeight = Math.floor(e), i(".log-list-table tbody").css("max-height", i("#flight-log").height() - 228)
                },
                redirect: function(t, e) {
                    utils.directTo(t, e)
                },
                back: function() {
                    utils.back()
                },
                cmdplugin: function(t, e) {
                    try {
                        var n = this,
                            o = i(t.target);
                        o.hasClass("toggleactive") && (i(".setting-icon.toggleactive").removeClass("active"), o.addClass("active"));
                        var r = utils.genSeq(n.cmdHistory),
                            s = {
                                SEQ: r,
                                OPERATION: e
                            };
                        n.cmdHistory[r] = s, i("#viewer-plugin")[0].postMessage("t;" + s.SEQ + ";" + s.OPERATION)
                    } catch (t) {
                        console.log(t)
                    }
                },
                syncFile: function(t) {
                    var e = this;
                    e.downingfile = !0, e.filedownloading = !0, e.downloadFailed = !1, e.downloadFile = t, o.SycFile({
                        FILE_NAME: t.NAME,
                        onSuccess: function(e) {
                            console.log(t.NAME, "sync success")
                        },
                        onFailure: function(t) {
                            console.log("syncFile failure", t)
                        },
                        onTimeout: function(t) {
                            console.log("syncFile time out", t)
                        }
                    })
                },
                loadFileAction: function(t) {
                    var e = this;
                    e.minSideFlag || utils.miniSidebar(function() {
                        i(window).resize(), e.minSideFlag = !0
                    }), e.loadingfile = !0, e.fileloading = !0, e.loadFailed = !1, e.activeFile = t, o.LoadFile({
                        FILE_NAME: t.NAME,
                        onSuccess: function(e) {
                            console.log(t.NAME, "loading cmd sent success")
                        },
                        onFailure: function(t) {
                            e.loadFailed = !0, e.fileloading = !1, console.log("loadFile failure", t)
                        },
                        onTimeout: function(t) {
                            e.loadFailed = !0, e.fileloading = !1, console.log("loadFile time out", t)
                        }
                    })
                },
                readParam: function(t) {
                    var e = this,
                        n = utils.genSeq(e.cmdHistory),
                        o = {
                            SEQ: n,
                            OPERATION: "ReadParam",
                            PARAM_NAME: t
                        };
                    e.cmdHistory[n] = o, i("#viewer-plugin")[0].postMessage("t;" + o.SEQ + ";" + o.OPERATION + ";" + o.PARAM_NAME)
                },
                openContentList: function(t) {
                    t.stopPropagation();
                    var e = i(t.target).parents(".labeli-list"),
                        n = e.next(".pcontent-list");
                    e.toggleClass("active"), n.toggleClass("active")
                },
                colorChange: function(t, e) {
                    var n = this,
                        o = i(t.target),
                        r = (o.parent(), utils.genSeq(n.cmdHistory)),
                        s = {
                            SEQ: r,
                            COLOR: o.val(),
                            PARAM_NAME: e.PARAM_NAME
                        };
                    n.cmdHistory[r] = s, i("#viewer-plugin")[0].postMessage("t;" + s.SEQ + ";ChangeColor;" + s.PARAM_NAME + ";" + s.COLOR), e.COLOR = o.val()
                },
                hideDownloadMask: function() {
                    this.downingfile = !1
                },
                hideLoadMask: function() {
                    this.loadingfile = !1
                },
                toggleGraphic: function(t) {
                    var e = this,
                        n = utils.genSeq(e.cmdHistory),
                        o = t.visible ? "Hide" : "Display",
                        r = {
                            SEQ: n,
                            OPERATION: o,
                            PARAM_NAME: t.PARAM_NAME
                        };
                    e.cmdHistory[n] = r, i("#viewer-plugin")[0].postMessage("t;" + r.SEQ + ";" + r.OPERATION + ";" + r.PARAM_NAME), t.visible = !t.visible
                },
                delParam: function(t) {
                    var e = this,
                        n = utils.genSeq(e.cmdHistory),
                        o = "Delete",
                        r = {
                            SEQ: n,
                            OPERATION: o,
                            PARAM_NAME: t.PARAM_NAME
                        };
                    e.cmdHistory[n] = r, i("#viewer-plugin")[0].postMessage("t;" + r.SEQ + ";" + r.OPERATION + ";" + r.PARAM_NAME);
                    var s = e.selectedLabel.indexOf(t);
                    e.selectedLabel.splice(s, 1)
                },
                flight_data_file_list: function(t) {
                    var e = this;
                    e.getfileLoading = !1, e.files = t.FILE_LIST
                },
                loadfile: function(t) {
                    var e = this;
                    e.PROGRESS = t.PROGRESS, e.ACTION = t.ACTION
                },
                loadfileresult: function(t) {
                    var e = this;
                    if (e.fileloading = !1, "SUCCESS" == t.RESULT.toUpperCase()) {
                        e.step = 1, e.loadingfile = !1;
                        for (var n in t.PARAM_LIST) {
                            var i = [];
                            t.PARAM_LIST[n].forEach(function(t, e) {
                                i.push({
                                    name: t
                                })
                            }), e.param_list.$set(n, i)
                        }
                        console.log(e.param_list)
                    } else e.loadFailed = !0
                },
                copy_file_progress: function(t) {
                    var e = this;
                    e.downingfile = !0, e.filedownloading = !0, e.downloadFailed = !1, e.downloadFile.$set("NAME", t.FILE_NAME), e.downloadFile.$set("PROGRESS", t.PROGRESS)
                },
                copy_file_result: function(t) {
                    var e = this;
                    e.filedownloading = !1, "SUCCESS" == t.RESULT.toUpperCase() ? (e.downloadFile.$set("IS_EXIST", !0), e.downingfile = !1) : e.downloadFailed = !0
                }
            },
            events: {
                device_removed: function(t) {},
                device_arrival: function(t) {}
            }
        }
    },
    1402: function(t, e) {
        "use strict";
        window.jsc || (window.jsc = function() {
            var t = {
                register: function() {
                    t.attachDOMReadyEvent(t.init), t.attachEvent(document, "mousedown", t.onDocumentMouseDown), t.attachEvent(document, "touchstart", t.onDocumentTouchStart), t.attachEvent(window, "resize", t.onWindowResize)
                },
                init: function() {
                    t.jscolor.lookupClass && t.jscolor.installByClassName(t.jscolor.lookupClass)
                },
                tryInstallOnElements: function(e, n) {
                    for (var i = new RegExp("(^|\\s)(" + n + ")(\\s*(\\{[^}]*\\})|\\s|$)", "i"), o = 0; o < e.length; o += 1)
                        if (void 0 === e[o].type || "color" != e[o].type.toLowerCase() || !t.isColorAttrSupported) {
                            var r;
                            if (!e[o].jscolor && e[o].className && (r = e[o].className.match(i))) {
                                var s = e[o],
                                    a = null,
                                    l = t.getDataAttr(s, "jscolor");
                                null !== l ? a = l : r[4] && (a = r[4]);
                                var c = {};
                                if (a) try {
                                    c = new Function("return (" + a + ")")()
                                } catch (e) {
                                    t.warn("Error parsing jscolor options: " + e + ":\n" + a)
                                }
                                s.jscolor = new t.jscolor(s, c)
                            }
                        }
                },
                isColorAttrSupported: function() {
                    var t = document.createElement("input");
                    return !(!t.setAttribute || (t.setAttribute("type", "color"), "color" != t.type.toLowerCase()))
                }(),
                isCanvasSupported: function() {
                    var t = document.createElement("canvas");
                    return !(!t.getContext || !t.getContext("2d"))
                }(),
                fetchElement: function(t) {
                    return "string" == typeof t ? document.getElementById(t) : t
                },
                isElementType: function(t, e) {
                    return t.nodeName.toLowerCase() === e.toLowerCase()
                },
                getDataAttr: function(t, e) {
                    var n = "data-" + e,
                        i = t.getAttribute(n);
                    return null !== i ? i : null
                },
                attachEvent: function(t, e, n) {
                    t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent && t.attachEvent("on" + e, n)
                },
                detachEvent: function(t, e, n) {
                    t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent && t.detachEvent("on" + e, n)
                },
                _attachedGroupEvents: {},
                attachGroupEvent: function(e, n, i, o) {
                    t._attachedGroupEvents.hasOwnProperty(e) || (t._attachedGroupEvents[e] = []), t._attachedGroupEvents[e].push([n, i, o]), t.attachEvent(n, i, o)
                },
                detachGroupEvents: function(e) {
                    if (t._attachedGroupEvents.hasOwnProperty(e)) {
                        for (var n = 0; n < t._attachedGroupEvents[e].length; n += 1) {
                            var i = t._attachedGroupEvents[e][n];
                            t.detachEvent(i[0], i[1], i[2])
                        }
                        delete t._attachedGroupEvents[e]
                    }
                },
                attachDOMReadyEvent: function(t) {
                    var e = !1,
                        n = function() {
                            e || (e = !0, t())
                        };
                    if ("complete" === document.readyState) return void setTimeout(n, 1);
                    if (document.addEventListener) document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1);
                    else if (document.attachEvent && (document.attachEvent("onreadystatechange", function() {
                            "complete" === document.readyState && (document.detachEvent("onreadystatechange", arguments.callee), n())
                        }), window.attachEvent("onload", n), document.documentElement.doScroll && window == window.top)) {
                        var i = function() {
                            if (document.body) try {
                                document.documentElement.doScroll("left"), n()
                            } catch (t) {
                                setTimeout(i, 1)
                            }
                        };
                        i()
                    }
                },
                warn: function(t) {
                    window.console && window.console.warn && window.console.warn(t)
                },
                preventDefault: function(t) {
                    t.preventDefault && t.preventDefault(), t.returnValue = !1
                },
                captureTarget: function(e) {
                    e.setCapture && (t._capturedTarget = e, t._capturedTarget.setCapture())
                },
                releaseTarget: function() {
                    t._capturedTarget && (t._capturedTarget.releaseCapture(), t._capturedTarget = null)
                },
                fireEvent: function(t, e) {
                    if (t)
                        if (document.createEvent) {
                            var n = document.createEvent("HTMLEvents");
                            n.initEvent(e, !0, !0), t.dispatchEvent(n)
                        } else if (document.createEventObject) {
                        var n = document.createEventObject();
                        t.fireEvent("on" + e, n)
                    } else t["on" + e] && t["on" + e]()
                },
                classNameToList: function(t) {
                    return t.replace(/^\s+|\s+$/g, "").split(/\s+/)
                },
                hasClass: function(t, e) {
                    return !!e && -1 != (" " + t.className.replace(/\s+/g, " ") + " ").indexOf(" " + e + " ")
                },
                setClass: function(e, n) {
                    for (var i = t.classNameToList(n), o = 0; o < i.length; o += 1) t.hasClass(e, i[o]) || (e.className += (e.className ? " " : "") + i[o])
                },
                unsetClass: function(e, n) {
                    for (var i = t.classNameToList(n), o = 0; o < i.length; o += 1) {
                        var r = new RegExp("^\\s*" + i[o] + "\\s*|\\s*" + i[o] + "\\s*$|\\s+" + i[o] + "(\\s+)", "g");
                        e.className = e.className.replace(r, "$1")
                    }
                },
                getStyle: function(t) {
                    return window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle
                },
                setStyle: function() {
                    var t = document.createElement("div"),
                        e = function(e) {
                            for (var n = 0; n < e.length; n += 1)
                                if (e[n] in t.style) return e[n]
                        },
                        n = {
                            borderRadius: e(["borderRadius", "MozBorderRadius", "webkitBorderRadius"]),
                            boxShadow: e(["boxShadow", "MozBoxShadow", "webkitBoxShadow"])
                        };
                    return function(t, e, i) {
                        switch (e.toLowerCase()) {
                            case "opacity":
                                var o = Math.round(100 * parseFloat(i));
                                t.style.opacity = i, t.style.filter = "alpha(opacity=" + o + ")";
                                break;
                            default:
                                t.style[n[e]] = i
                        }
                    }
                }(),
                setBorderRadius: function(e, n) {
                    t.setStyle(e, "borderRadius", n || "0")
                },
                setBoxShadow: function(e, n) {
                    t.setStyle(e, "boxShadow", n || "none")
                },
                getElementPos: function(e, n) {
                    var i = 0,
                        o = 0,
                        r = e.getBoundingClientRect();
                    if (i = r.left, o = r.top, !n) {
                        var s = t.getViewPos();
                        i += s[0], o += s[1]
                    }
                    return [i, o]
                },
                getElementSize: function(t) {
                    return [t.offsetWidth, t.offsetHeight]
                },
                getAbsPointerPos: function(t) {
                    t || (t = window.event);
                    var e = 0,
                        n = 0;
                    return "undefined" != typeof t.changedTouches && t.changedTouches.length ? (e = t.changedTouches[0].clientX, n = t.changedTouches[0].clientY) : "number" == typeof t.clientX && (e = t.clientX, n = t.clientY), {
                        x: e,
                        y: n
                    }
                },
                getRelPointerPos: function(t) {
                    t || (t = window.event);
                    var e = t.target || t.srcElement,
                        n = e.getBoundingClientRect(),
                        i = 0,
                        o = 0,
                        r = 0,
                        s = 0;
                    return "undefined" != typeof t.changedTouches && t.changedTouches.length ? (r = t.changedTouches[0].clientX, s = t.changedTouches[0].clientY) : "number" == typeof t.clientX && (r = t.clientX,
                        s = t.clientY), i = r - n.left, o = s - n.top, {
                        x: i,
                        y: o
                    }
                },
                getViewPos: function() {
                    var t = document.documentElement;
                    return [(window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0), (window.pageYOffset || t.scrollTop) - (t.clientTop || 0)]
                },
                getViewSize: function() {
                    var t = document.documentElement;
                    return [window.innerWidth || t.clientWidth, window.innerHeight || t.clientHeight]
                },
                redrawPosition: function() {
                    if (t.picker && t.picker.owner) {
                        var e, n, i = t.picker.owner;
                        i.fixed ? (e = t.getElementPos(i.targetElement, !0), n = [0, 0]) : (e = t.getElementPos(i.targetElement), n = t.getViewPos());
                        var o, r, s, a = t.getElementSize(i.targetElement),
                            l = t.getViewSize(),
                            c = t.getPickerOuterDims(i);
                        switch (i.position.toLowerCase()) {
                            case "left":
                                o = 1, r = 0, s = -1;
                                break;
                            case "right":
                                o = 1, r = 0, s = 1;
                                break;
                            case "top":
                                o = 0, r = 1, s = -1;
                                break;
                            default:
                                o = 0, r = 1, s = 1
                        }
                        var u = (a[r] + c[r]) / 2;
                        if (i.smartPosition) var d = [-n[o] + e[o] + c[o] > l[o] && -n[o] + e[o] + a[o] / 2 > l[o] / 2 && e[o] + a[o] - c[o] >= 0 ? e[o] + a[o] - c[o] : e[o], -n[r] + e[r] + a[r] + c[r] - u + u * s > l[r] ? -n[r] + e[r] + a[r] / 2 > l[r] / 2 && e[r] + a[r] - u - u * s >= 0 ? e[r] + a[r] - u - u * s : e[r] + a[r] - u + u * s : e[r] + a[r] - u + u * s >= 0 ? e[r] + a[r] - u + u * s : e[r] + a[r] - u - u * s];
                        else var d = [e[o], e[r] + a[r] - u + u * s];
                        var h = d[o],
                            p = d[r],
                            f = i.fixed ? "fixed" : "absolute",
                            g = (d[0] + c[0] > e[0] || d[0] < e[0] + a[0]) && d[1] + c[1] < e[1] + a[1];
                        t._drawPosition(i, h, p, f, g)
                    }
                },
                _drawPosition: function(e, n, i, o, r) {
                    var s = r ? 0 : e.shadowBlur;
                    t.picker.wrap.style.position = o, t.picker.wrap.style.left = n + "px", t.picker.wrap.style.top = i + "px", t.setBoxShadow(t.picker.boxS, e.shadow ? new t.BoxShadow(0, s, e.shadowBlur, 0, e.shadowColor) : null)
                },
                getPickerDims: function(e) {
                    var n = !!t.getSliderComponent(e),
                        i = [2 * e.insetWidth + 2 * e.padding + e.width + (n ? 2 * e.insetWidth + t.getPadToSliderPadding(e) + e.sliderSize : 0), 2 * e.insetWidth + 2 * e.padding + e.height + (e.closable ? 2 * e.insetWidth + e.padding + e.buttonHeight : 0)];
                    return i
                },
                getPickerOuterDims: function(e) {
                    var n = t.getPickerDims(e);
                    return [n[0] + 2 * e.borderWidth, n[1] + 2 * e.borderWidth]
                },
                getPadToSliderPadding: function(t) {
                    return Math.max(t.padding, 1.5 * (2 * t.pointerBorderWidth + t.pointerThickness))
                },
                getPadYComponent: function(t) {
                    switch (t.mode.charAt(1).toLowerCase()) {
                        case "v":
                            return "v"
                    }
                    return "s"
                },
                getSliderComponent: function(t) {
                    if (t.mode.length > 2) switch (t.mode.charAt(2).toLowerCase()) {
                        case "s":
                            return "s";
                        case "v":
                            return "v"
                    }
                    return null
                },
                onDocumentMouseDown: function(e) {
                    e || (e = window.event);
                    var n = e.target || e.srcElement;
                    n._jscLinkedInstance ? n._jscLinkedInstance.showOnClick && n._jscLinkedInstance.show() : n._jscControlName ? t.onControlPointerStart(e, n, n._jscControlName, "mouse") : t.picker && t.picker.owner && t.picker.owner.hide()
                },
                onDocumentTouchStart: function(e) {
                    e || (e = window.event);
                    var n = e.target || e.srcElement;
                    n._jscLinkedInstance ? n._jscLinkedInstance.showOnClick && n._jscLinkedInstance.show() : n._jscControlName ? t.onControlPointerStart(e, n, n._jscControlName, "touch") : t.picker && t.picker.owner && t.picker.owner.hide()
                },
                onWindowResize: function(e) {
                    t.redrawPosition()
                },
                onParentScroll: function(e) {
                    t.picker && t.picker.owner && t.picker.owner.hide()
                },
                _pointerMoveEvent: {
                    mouse: "mousemove",
                    touch: "touchmove"
                },
                _pointerEndEvent: {
                    mouse: "mouseup",
                    touch: "touchend"
                },
                _pointerOrigin: null,
                _capturedTarget: null,
                onControlPointerStart: function(e, n, i, o) {
                    var r = n._jscInstance;
                    t.preventDefault(e), t.captureTarget(n);
                    var s = function(r, s) {
                        t.attachGroupEvent("drag", r, t._pointerMoveEvent[o], t.onDocumentPointerMove(e, n, i, o, s)), t.attachGroupEvent("drag", r, t._pointerEndEvent[o], t.onDocumentPointerEnd(e, n, i, o))
                    };
                    if (s(document, [0, 0]), window.parent && window.frameElement) {
                        var a = window.frameElement.getBoundingClientRect(),
                            l = [-a.left, -a.top];
                        s(window.parent.window.document, l)
                    }
                    var c = t.getAbsPointerPos(e),
                        u = t.getRelPointerPos(e);
                    switch (t._pointerOrigin = {
                        x: c.x - u.x,
                        y: c.y - u.y
                    }, i) {
                        case "pad":
                            switch (t.getSliderComponent(r)) {
                                case "s":
                                    0 === r.hsv[1] && r.fromHSV(null, 100, null);
                                    break;
                                case "v":
                                    0 === r.hsv[2] && r.fromHSV(null, null, 100)
                            }
                            t.setPad(r, e, 0, 0);
                            break;
                        case "sld":
                            t.setSld(r, e, 0)
                    }
                    t.dispatchFineChange(r)
                },
                onDocumentPointerMove: function(e, n, i, o, r) {
                    return function(e) {
                        var o = n._jscInstance;
                        switch (i) {
                            case "pad":
                                e || (e = window.event), t.setPad(o, e, r[0], r[1]), t.dispatchFineChange(o);
                                break;
                            case "sld":
                                e || (e = window.event), t.setSld(o, e, r[1]), t.dispatchFineChange(o)
                        }
                    }
                },
                onDocumentPointerEnd: function(e, n, i, o) {
                    return function(e) {
                        var i = n._jscInstance;
                        t.detachGroupEvents("drag"), t.releaseTarget(), t.dispatchChange(i)
                    }
                },
                dispatchChange: function(e) {
                    e.valueElement && t.isElementType(e.valueElement, "input") && t.fireEvent(e.valueElement, "change")
                },
                dispatchFineChange: function(t) {
                    if (t.onFineChange) {
                        var e;
                        e = "string" == typeof t.onFineChange ? new Function(t.onFineChange) : t.onFineChange, e.call(t)
                    }
                },
                setPad: function(e, n, i, o) {
                    var r = t.getAbsPointerPos(n),
                        s = i + r.x - t._pointerOrigin.x - e.padding - e.insetWidth,
                        a = o + r.y - t._pointerOrigin.y - e.padding - e.insetWidth,
                        l = s * (360 / (e.width - 1)),
                        c = 100 - a * (100 / (e.height - 1));
                    switch (t.getPadYComponent(e)) {
                        case "s":
                            e.fromHSV(l, c, null, t.leaveSld);
                            break;
                        case "v":
                            e.fromHSV(l, null, c, t.leaveSld)
                    }
                },
                setSld: function(e, n, i) {
                    var o = t.getAbsPointerPos(n),
                        r = i + o.y - t._pointerOrigin.y - e.padding - e.insetWidth,
                        s = 100 - r * (100 / (e.height - 1));
                    switch (t.getSliderComponent(e)) {
                        case "s":
                            e.fromHSV(null, s, null, t.leavePad);
                            break;
                        case "v":
                            e.fromHSV(null, null, s, t.leavePad)
                    }
                },
                _vmlNS: "jsc_vml_",
                _vmlCSS: "jsc_vml_css_",
                _vmlReady: !1,
                initVML: function() {
                    if (!t._vmlReady) {
                        var e = document;
                        if (e.namespaces[t._vmlNS] || e.namespaces.add(t._vmlNS, "urn:schemas-microsoft-com:vml"), !e.styleSheets[t._vmlCSS]) {
                            var n = ["shape", "shapetype", "group", "background", "path", "formulas", "handles", "fill", "stroke", "shadow", "textbox", "textpath", "imagedata", "line", "polyline", "curve", "rect", "roundrect", "oval", "arc", "image"],
                                i = e.createStyleSheet();
                            i.owningElement.id = t._vmlCSS;
                            for (var o = 0; o < n.length; o += 1) i.addRule(t._vmlNS + "\\:" + n[o], "behavior:url(#default#VML);")
                        }
                        t._vmlReady = !0
                    }
                },
                createPalette: function() {
                    var e = {
                        elm: null,
                        draw: null
                    };
                    if (t.isCanvasSupported) {
                        var n = document.createElement("canvas"),
                            i = n.getContext("2d"),
                            o = function(t, e, o) {
                                n.width = t, n.height = e, i.clearRect(0, 0, n.width, n.height);
                                var r = i.createLinearGradient(0, 0, n.width, 0);
                                r.addColorStop(0, "#F00"), r.addColorStop(1 / 6, "#FF0"), r.addColorStop(2 / 6, "#0F0"), r.addColorStop(.5, "#0FF"), r.addColorStop(4 / 6, "#00F"), r.addColorStop(5 / 6, "#F0F"), r.addColorStop(1, "#F00"), i.fillStyle = r, i.fillRect(0, 0, n.width, n.height);
                                var s = i.createLinearGradient(0, 0, 0, n.height);
                                switch (o.toLowerCase()) {
                                    case "s":
                                        s.addColorStop(0, "rgba(255,255,255,0)"), s.addColorStop(1, "rgba(255,255,255,1)");
                                        break;
                                    case "v":
                                        s.addColorStop(0, "rgba(0,0,0,0)"), s.addColorStop(1, "rgba(0,0,0,1)")
                                }
                                i.fillStyle = s, i.fillRect(0, 0, n.width, n.height)
                            };
                        e.elm = n, e.draw = o
                    } else {
                        t.initVML();
                        var r = document.createElement("div");
                        r.style.position = "relative", r.style.overflow = "hidden";
                        var s = document.createElement(t._vmlNS + ":fill");
                        s.type = "gradient", s.method = "linear", s.angle = "90", s.colors = "16.67% #F0F, 33.33% #00F, 50% #0FF, 66.67% #0F0, 83.33% #FF0";
                        var a = document.createElement(t._vmlNS + ":rect");
                        a.style.position = "absolute", a.style.left = "-1px", a.style.top = "-1px", a.stroked = !1, a.appendChild(s), r.appendChild(a);
                        var l = document.createElement(t._vmlNS + ":fill");
                        l.type = "gradient", l.method = "linear", l.angle = "180", l.opacity = "0";
                        var c = document.createElement(t._vmlNS + ":rect");
                        c.style.position = "absolute", c.style.left = "-1px", c.style.top = "-1px", c.stroked = !1, c.appendChild(l), r.appendChild(c);
                        var o = function(t, e, n) {
                            switch (r.style.width = t + "px", r.style.height = e + "px", a.style.width = c.style.width = t + 1 + "px", a.style.height = c.style.height = e + 1 + "px", s.color = "#F00", s.color2 = "#F00", n.toLowerCase()) {
                                case "s":
                                    l.color = l.color2 = "#FFF";
                                    break;
                                case "v":
                                    l.color = l.color2 = "#000"
                            }
                        };
                        e.elm = r, e.draw = o
                    }
                    return e
                },
                createSliderGradient: function() {
                    var e = {
                        elm: null,
                        draw: null
                    };
                    if (t.isCanvasSupported) {
                        var n = document.createElement("canvas"),
                            i = n.getContext("2d"),
                            o = function(t, e, o, r) {
                                n.width = t, n.height = e, i.clearRect(0, 0, n.width, n.height);
                                var s = i.createLinearGradient(0, 0, 0, n.height);
                                s.addColorStop(0, o), s.addColorStop(1, r), i.fillStyle = s, i.fillRect(0, 0, n.width, n.height)
                            };
                        e.elm = n, e.draw = o
                    } else {
                        t.initVML();
                        var r = document.createElement("div");
                        r.style.position = "relative", r.style.overflow = "hidden";
                        var s = document.createElement(t._vmlNS + ":fill");
                        s.type = "gradient", s.method = "linear", s.angle = "180";
                        var a = document.createElement(t._vmlNS + ":rect");
                        a.style.position = "absolute", a.style.left = "-1px", a.style.top = "-1px", a.stroked = !1, a.appendChild(s), r.appendChild(a);
                        var o = function(t, e, n, i) {
                            r.style.width = t + "px", r.style.height = e + "px", a.style.width = t + 1 + "px", a.style.height = e + 1 + "px", s.color = n, s.color2 = i
                        };
                        e.elm = r, e.draw = o
                    }
                    return e
                },
                leaveValue: 1,
                leaveStyle: 2,
                leavePad: 4,
                leaveSld: 8,
                BoxShadow: function() {
                    var t = function(t, e, n, i, o, r) {
                        this.hShadow = t, this.vShadow = e, this.blur = n, this.spread = i, this.color = o, this.inset = !!r
                    };
                    return t.prototype.toString = function() {
                        var t = [Math.round(this.hShadow) + "px", Math.round(this.vShadow) + "px", Math.round(this.blur) + "px", Math.round(this.spread) + "px", this.color];
                        return this.inset && t.push("inset"), t.join(" ")
                    }, t
                }(),
                jscolor: function(e, n) {
                    function i(t, e, n) {
                        t /= 255, e /= 255, n /= 255;
                        var i = Math.min(Math.min(t, e), n),
                            o = Math.max(Math.max(t, e), n),
                            r = o - i;
                        if (0 === r) return [null, 0, 100 * o];
                        var s = t === i ? 3 + (n - e) / r : e === i ? 5 + (t - n) / r : 1 + (e - t) / r;
                        return [60 * (6 === s ? 0 : s), 100 * (r / o), 100 * o]
                    }

                    function o(t, e, n) {
                        var i = 255 * (n / 100);
                        if (null === t) return [i, i, i];
                        t /= 60, e /= 100;
                        var o = Math.floor(t),
                            r = o % 2 ? t - o : 1 - (t - o),
                            s = i * (1 - e),
                            a = i * (1 - e * r);
                        switch (o) {
                            case 6:
                            case 0:
                                return [i, a, s];
                            case 1:
                                return [a, i, s];
                            case 2:
                                return [s, i, a];
                            case 3:
                                return [s, a, i];
                            case 4:
                                return [a, s, i];
                            case 5:
                                return [i, s, a]
                        }
                    }

                    function r() {
                        t.unsetClass(f.targetElement, f.activeClass), t.picker.wrap.parentNode.removeChild(t.picker.wrap), delete t.picker.owner
                    }

                    function s() {
                        function e() {
                            var t = f.insetColor.split(/\s+/),
                                e = t.length < 2 ? t[0] : t[1] + " " + t[0] + " " + t[0] + " " + t[1];
                            n.btn.style.borderColor = e
                        }
                        f._processParentElementsInDOM(), t.picker || (t.picker = {
                            owner: null,
                            wrap: document.createElement("div"),
                            box: document.createElement("div"),
                            boxS: document.createElement("div"),
                            boxB: document.createElement("div"),
                            pad: document.createElement("div"),
                            padB: document.createElement("div"),
                            padM: document.createElement("div"),
                            padPal: t.createPalette(),
                            cross: document.createElement("div"),
                            crossBY: document.createElement("div"),
                            crossBX: document.createElement("div"),
                            crossLY: document.createElement("div"),
                            crossLX: document.createElement("div"),
                            sld: document.createElement("div"),
                            sldB: document.createElement("div"),
                            sldM: document.createElement("div"),
                            sldGrad: t.createSliderGradient(),
                            sldPtrS: document.createElement("div"),
                            sldPtrIB: document.createElement("div"),
                            sldPtrMB: document.createElement("div"),
                            sldPtrOB: document.createElement("div"),
                            btn: document.createElement("div"),
                            btnT: document.createElement("span")
                        }, t.picker.pad.appendChild(t.picker.padPal.elm), t.picker.padB.appendChild(t.picker.pad), t.picker.cross.appendChild(t.picker.crossBY), t.picker.cross.appendChild(t.picker.crossBX), t.picker.cross.appendChild(t.picker.crossLY), t.picker.cross.appendChild(t.picker.crossLX), t.picker.padB.appendChild(t.picker.cross), t.picker.box.appendChild(t.picker.padB), t.picker.box.appendChild(t.picker.padM), t.picker.sld.appendChild(t.picker.sldGrad.elm), t.picker.sldB.appendChild(t.picker.sld), t.picker.sldB.appendChild(t.picker.sldPtrOB), t.picker.sldPtrOB.appendChild(t.picker.sldPtrMB), t.picker.sldPtrMB.appendChild(t.picker.sldPtrIB), t.picker.sldPtrIB.appendChild(t.picker.sldPtrS), t.picker.box.appendChild(t.picker.sldB), t.picker.box.appendChild(t.picker.sldM), t.picker.btn.appendChild(t.picker.btnT), t.picker.box.appendChild(t.picker.btn), t.picker.boxB.appendChild(t.picker.box), t.picker.wrap.appendChild(t.picker.boxS), t.picker.wrap.appendChild(t.picker.boxB));
                        var n = t.picker,
                            i = !!t.getSliderComponent(f),
                            o = t.getPickerDims(f),
                            r = 2 * f.pointerBorderWidth + f.pointerThickness + 2 * f.crossSize,
                            s = t.getPadToSliderPadding(f),
                            c = Math.min(f.borderRadius, Math.round(f.padding * Math.PI)),
                            u = "crosshair";
                        n.wrap.style.clear = "both", n.wrap.style.width = o[0] + 2 * f.borderWidth + "px", n.wrap.style.height = o[1] + 2 * f.borderWidth + "px", n.wrap.style.zIndex = f.zIndex, n.box.style.width = o[0] + "px", n.box.style.height = o[1] + "px", n.boxS.style.position = "absolute", n.boxS.style.left = "0", n.boxS.style.top = "0", n.boxS.style.width = "100%", n.boxS.style.height = "100%", t.setBorderRadius(n.boxS, c + "px"), n.boxB.style.position = "relative", n.boxB.style.border = f.borderWidth + "px solid", n.boxB.style.borderColor = f.borderColor, n.boxB.style.background = f.backgroundColor, t.setBorderRadius(n.boxB, c + "px"), n.padM.style.background = n.sldM.style.background = "#FFF", t.setStyle(n.padM, "opacity", "0"), t.setStyle(n.sldM, "opacity", "0"), n.pad.style.position = "relative", n.pad.style.width = f.width + "px", n.pad.style.height = f.height + "px", n.padPal.draw(f.width, f.height, t.getPadYComponent(f)), n.padB.style.position = "absolute", n.padB.style.left = f.padding + "px", n.padB.style.top = f.padding + "px", n.padB.style.border = f.insetWidth + "px solid", n.padB.style.borderColor = f.insetColor, n.padM._jscInstance = f, n.padM._jscControlName = "pad", n.padM.style.position = "absolute", n.padM.style.left = "0", n.padM.style.top = "0", n.padM.style.width = f.padding + 2 * f.insetWidth + f.width + s / 2 + "px", n.padM.style.height = o[1] + "px", n.padM.style.cursor = u, n.cross.style.position = "absolute", n.cross.style.left = n.cross.style.top = "0", n.cross.style.width = n.cross.style.height = r + "px", n.crossBY.style.position = n.crossBX.style.position = "absolute", n.crossBY.style.background = n.crossBX.style.background = f.pointerBorderColor, n.crossBY.style.width = n.crossBX.style.height = 2 * f.pointerBorderWidth + f.pointerThickness + "px", n.crossBY.style.height = n.crossBX.style.width = r + "px", n.crossBY.style.left = n.crossBX.style.top = Math.floor(r / 2) - Math.floor(f.pointerThickness / 2) - f.pointerBorderWidth + "px", n.crossBY.style.top = n.crossBX.style.left = "0", n.crossLY.style.position = n.crossLX.style.position = "absolute", n.crossLY.style.background = n.crossLX.style.background = f.pointerColor, n.crossLY.style.height = n.crossLX.style.width = r - 2 * f.pointerBorderWidth + "px", n.crossLY.style.width = n.crossLX.style.height = f.pointerThickness + "px", n.crossLY.style.left = n.crossLX.style.top = Math.floor(r / 2) - Math.floor(f.pointerThickness / 2) + "px", n.crossLY.style.top = n.crossLX.style.left = f.pointerBorderWidth + "px", n.sld.style.overflow = "hidden", n.sld.style.width = f.sliderSize + "px", n.sld.style.height = f.height + "px", n.sldGrad.draw(f.sliderSize, f.height, "#000", "#000"), n.sldB.style.display = i ? "block" : "none", n.sldB.style.position = "absolute", n.sldB.style.right = f.padding + "px", n.sldB.style.top = f.padding + "px", n.sldB.style.border = f.insetWidth + "px solid", n.sldB.style.borderColor = f.insetColor, n.sldM._jscInstance = f, n.sldM._jscControlName = "sld", n.sldM.style.display = i ? "block" : "none", n.sldM.style.position = "absolute", n.sldM.style.right = "0", n.sldM.style.top = "0", n.sldM.style.width = f.sliderSize + s / 2 + f.padding + 2 * f.insetWidth + "px", n.sldM.style.height = o[1] + "px", n.sldM.style.cursor = "default", n.sldPtrIB.style.border = n.sldPtrOB.style.border = f.pointerBorderWidth + "px solid " + f.pointerBorderColor, n.sldPtrOB.style.position = "absolute", n.sldPtrOB.style.left = -(2 * f.pointerBorderWidth + f.pointerThickness) + "px", n.sldPtrOB.style.top = "0", n.sldPtrMB.style.border = f.pointerThickness + "px solid " + f.pointerColor, n.sldPtrS.style.width = f.sliderSize + "px", n.sldPtrS.style.height = v + "px", n.btn.style.display = f.closable ? "block" : "none", n.btn.style.position = "absolute", n.btn.style.left = f.padding + "px", n.btn.style.bottom = f.padding + "px", n.btn.style.padding = "0 15px", n.btn.style.height = f.buttonHeight + "px", n.btn.style.border = f.insetWidth + "px solid", e(), n.btn.style.color = f.buttonColor, n.btn.style.font = "12px sans-serif", n.btn.style.textAlign = "center";
                        try {
                            n.btn.style.cursor = "pointer"
                        } catch (t) {
                            n.btn.style.cursor = "hand"
                        }
                        n.btn.onmousedown = function() {
                            f.hide()
                        }, n.btnT.style.lineHeight = f.buttonHeight + "px", n.btnT.innerHTML = "", n.btnT.appendChild(document.createTextNode(f.closeText)), a(), l(), t.picker.owner && t.picker.owner !== f && t.unsetClass(t.picker.owner.targetElement, f.activeClass), t.picker.owner = f, t.isElementType(g, "body") ? t.redrawPosition() : t._drawPosition(f, 0, 0, "relative", !1), n.wrap.parentNode != g && g.appendChild(n.wrap), t.setClass(f.targetElement, f.activeClass)
                    }

                    function a() {
                        switch (t.getPadYComponent(f)) {
                            case "s":
                                var e = 1;
                                break;
                            case "v":
                                var e = 2
                        }
                        var n = Math.round(f.hsv[0] / 360 * (f.width - 1)),
                            i = Math.round((1 - f.hsv[e] / 100) * (f.height - 1)),
                            r = 2 * f.pointerBorderWidth + f.pointerThickness + 2 * f.crossSize,
                            s = -Math.floor(r / 2);
                        switch (t.picker.cross.style.left = n + s + "px", t.picker.cross.style.top = i + s + "px", t.getSliderComponent(f)) {
                            case "s":
                                var a = o(f.hsv[0], 100, f.hsv[2]),
                                    l = o(f.hsv[0], 0, f.hsv[2]),
                                    c = "rgb(" + Math.round(a[0]) + "," + Math.round(a[1]) + "," + Math.round(a[2]) + ")",
                                    u = "rgb(" + Math.round(l[0]) + "," + Math.round(l[1]) + "," + Math.round(l[2]) + ")";
                                t.picker.sldGrad.draw(f.sliderSize, f.height, c, u);
                                break;
                            case "v":
                                var d = o(f.hsv[0], f.hsv[1], 100),
                                    c = "rgb(" + Math.round(d[0]) + "," + Math.round(d[1]) + "," + Math.round(d[2]) + ")",
                                    u = "#000";
                                t.picker.sldGrad.draw(f.sliderSize, f.height, c, u)
                        }
                    }

                    function l() {
                        var e = t.getSliderComponent(f);
                        if (e) {
                            switch (e) {
                                case "s":
                                    var n = 1;
                                    break;
                                case "v":
                                    var n = 2
                            }
                            var i = Math.round((1 - f.hsv[n] / 100) * (f.height - 1));
                            t.picker.sldPtrOB.style.top = i - (2 * f.pointerBorderWidth + f.pointerThickness) - Math.floor(v / 2) + "px"
                        }
                    }

                    function c() {
                        return t.picker && t.picker.owner === f
                    }

                    function u() {
                        f.importColor()
                    }
                    this.value = null, this.valueElement = e, this.styleElement = e, this.required = !0, this.refine = !0, this.hash = !1, this.uppercase = !0, this.onFineChange = null, this.activeClass = "jscolor-active", this.minS = 0, this.maxS = 100, this.minV = 0, this.maxV = 100, this.hsv = [0, 0, 100], this.rgb = [255, 255, 255], this.width = 181, this.height = 101, this.showOnClick = !0, this.mode = "HSV", this.position = "bottom", this.smartPosition = !0, this.sliderSize = 16, this.crossSize = 8, this.closable = !1, this.closeText = "Close", this.buttonColor = "#000000", this.buttonHeight = 18, this.padding = 12, this.backgroundColor = "#FFFFFF", this.borderWidth = 1, this.borderColor = "#BBBBBB", this.borderRadius = 8, this.insetWidth = 1, this.insetColor = "#BBBBBB", this.shadow = !0, this.shadowBlur = 15, this.shadowColor = "rgba(0,0,0,0.2)", this.pointerColor = "#4C4C4C", this.pointerBorderColor = "#FFFFFF", this.pointerBorderWidth = 1, this.pointerThickness = 2, this.zIndex = 1e3, this.container = null;
                    for (var d in n) n.hasOwnProperty(d) && (this[d] = n[d]);
                    if (this.hide = function() {
                            c() && r()
                        }, this.show = function() {
                            s()
                        }, this.redraw = function() {
                            c() && s()
                        }, this.importColor = function() {
                            this.valueElement && t.isElementType(this.valueElement, "input") ? this.refine ? !this.required && /^\s*$/.test(this.valueElement.value) ? (this.valueElement.value = "", this.styleElement && (this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage, this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor, this.styleElement.style.color = this.styleElement._jscOrigStyle.color), this.exportColor(t.leaveValue | t.leaveStyle)) : this.fromString(this.valueElement.value) || this.exportColor() : this.fromString(this.valueElement.value, t.leaveValue) || (this.styleElement && (this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage, this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor, this.styleElement.style.color = this.styleElement._jscOrigStyle.color), this.exportColor(t.leaveValue | t.leaveStyle)) : this.exportColor()
                        }, this.exportColor = function(e) {
                            if (!(e & t.leaveValue) && this.valueElement) {
                                var n = this.toString();
                                this.uppercase && (n = n.toUpperCase()), this.hash && (n = "#" + n), t.isElementType(this.valueElement, "input") ? this.valueElement.value = n : this.valueElement.innerHTML = n
                            }
                            e & t.leaveStyle || this.styleElement && (this.styleElement.style.backgroundImage = "none", this.styleElement.style.backgroundColor = "#" + this.toString(), this.styleElement.style.color = this.isLight() ? "#000" : "#FFF"), e & t.leavePad || !c() || a(), e & t.leaveSld || !c() || l()
                        }, this.fromHSV = function(t, e, n, i) {
                            if (null !== t) {
                                if (isNaN(t)) return !1;
                                t = Math.max(0, Math.min(360, t))
                            }
                            if (null !== e) {
                                if (isNaN(e)) return !1;
                                e = Math.max(0, Math.min(100, this.maxS, e), this.minS)
                            }
                            if (null !== n) {
                                if (isNaN(n)) return !1;
                                n = Math.max(0, Math.min(100, this.maxV, n), this.minV)
                            }
                            this.rgb = o(null === t ? this.hsv[0] : this.hsv[0] = t, null === e ? this.hsv[1] : this.hsv[1] = e, null === n ? this.hsv[2] : this.hsv[2] = n), this.exportColor(i)
                        }, this.fromRGB = function(t, e, n, r) {
                            if (null !== t) {
                                if (isNaN(t)) return !1;
                                t = Math.max(0, Math.min(255, t))
                            }
                            if (null !== e) {
                                if (isNaN(e)) return !1;
                                e = Math.max(0, Math.min(255, e))
                            }
                            if (null !== n) {
                                if (isNaN(n)) return !1;
                                n = Math.max(0, Math.min(255, n))
                            }
                            var s = i(null === t ? this.rgb[0] : t, null === e ? this.rgb[1] : e, null === n ? this.rgb[2] : n);
                            null !== s[0] && (this.hsv[0] = Math.max(0, Math.min(360, s[0]))), 0 !== s[2] && (this.hsv[1] = null === s[1] ? null : Math.max(0, this.minS, Math.min(100, this.maxS, s[1]))), this.hsv[2] = null === s[2] ? null : Math.max(0, this.minV, Math.min(100, this.maxV, s[2]));
                            var a = o(this.hsv[0], this.hsv[1], this.hsv[2]);
                            this.rgb[0] = a[0], this.rgb[1] = a[1], this.rgb[2] = a[2], this.exportColor(r)
                        }, this.fromString = function(t, e) {
                            var n;
                            if (n = t.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i)) return 6 === n[1].length ? this.fromRGB(parseInt(n[1].substr(0, 2), 16), parseInt(n[1].substr(2, 2), 16), parseInt(n[1].substr(4, 2), 16), e) : this.fromRGB(parseInt(n[1].charAt(0) + n[1].charAt(0), 16), parseInt(n[1].charAt(1) + n[1].charAt(1), 16), parseInt(n[1].charAt(2) + n[1].charAt(2), 16), e), !0;
                            if (n = t.match(/^\W*rgba?\(([^)]*)\)\W*$/i)) {
                                var i, o, r, s = n[1].split(","),
                                    a = /^\s*(\d*)(\.\d+)?\s*$/;
                                if (s.length >= 3 && (i = s[0].match(a)) && (o = s[1].match(a)) && (r = s[2].match(a))) {
                                    var l = parseFloat((i[1] || "0") + (i[2] || "")),
                                        c = parseFloat((o[1] || "0") + (o[2] || "")),
                                        u = parseFloat((r[1] || "0") + (r[2] || ""));
                                    return this.fromRGB(l, c, u, e), !0
                                }
                            }
                            return !1
                        }, this.toString = function() {
                            return (256 | Math.round(this.rgb[0])).toString(16).substr(1) + (256 | Math.round(this.rgb[1])).toString(16).substr(1) + (256 | Math.round(this.rgb[2])).toString(16).substr(1)
                        }, this.toHEXString = function() {
                            return "#" + this.toString().toUpperCase()
                        }, this.toRGBString = function() {
                            return "rgb(" + Math.round(this.rgb[0]) + "," + Math.round(this.rgb[1]) + "," + Math.round(this.rgb[2]) + ")"
                        }, this.isLight = function() {
                            return .213 * this.rgb[0] + .715 * this.rgb[1] + .072 * this.rgb[2] > 127.5
                        }, this._processParentElementsInDOM = function() {
                            if (!this._linkedElementsProcessed) {
                                this._linkedElementsProcessed = !0;
                                var e = this.targetElement;
                                do {
                                    var n = t.getStyle(e);
                                    n && "fixed" === n.position.toLowerCase() && (this.fixed = !0), e !== this.targetElement && (e._jscEventsAttached || (t.attachEvent(e, "scroll", t.onParentScroll), e._jscEventsAttached = !0))
                                } while ((e = e.parentNode) && !t.isElementType(e, "body"))
                            }
                        }, "string" == typeof e) {
                        var h = e,
                            p = document.getElementById(h);
                        p ? this.targetElement = p : t.warn("Could not find target element with ID '" + h + "'")
                    } else e ? this.targetElement = e : t.warn("Invalid target element: '" + e + "'");
                    if (this.targetElement._jscLinkedInstance) return void t.warn("Cannot link jscolor twice to the same element. Skipping.");
                    this.targetElement._jscLinkedInstance = this, this.valueElement = t.fetchElement(this.valueElement), this.styleElement = t.fetchElement(this.styleElement);
                    var f = this,
                        g = this.container ? t.fetchElement(this.container) : document.getElementsByTagName("body")[0],
                        v = 3;
                    if (t.isElementType(this.targetElement, "button"))
                        if (this.targetElement.onclick) {
                            var m = this.targetElement.onclick;
                            this.targetElement.onclick = function(t) {
                                return m.call(this, t), !1
                            }
                        } else this.targetElement.onclick = function() {
                            return !1
                        };
                    if (this.valueElement && t.isElementType(this.valueElement, "input")) {
                        var b = function() {
                            f.fromString(f.valueElement.value, t.leaveValue), t.dispatchFineChange(f)
                        };
                        t.attachEvent(this.valueElement, "keyup", b), t.attachEvent(this.valueElement, "input", b), t.attachEvent(this.valueElement, "blur", u), this.valueElement.setAttribute("autocomplete", "off")
                    }
                    this.styleElement && (this.styleElement._jscOrigStyle = {
                        backgroundImage: this.styleElement.style.backgroundImage,
                        backgroundColor: this.styleElement.style.backgroundColor,
                        color: this.styleElement.style.color
                    }), this.value ? this.fromString(this.value) || this.exportColor() : this.importColor()
                }
            };
            return t.jscolor.lookupClass = "jscolor", t.jscolor.installByClassName = function(e) {
                var n = document.getElementsByTagName("input"),
                    i = document.getElementsByTagName("button");
                t.tryInstallOnElements(n, e), t.tryInstallOnElements(i, e)
            }, t.register(), t
        }())
    }
});