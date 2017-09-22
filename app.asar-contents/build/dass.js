! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "./build/", t(0)
}({
    0: function(e, t, n) {
        dass = n(1400)
    },
    9: function(e, t) {
        e.exports = {
            init: function() {},
            addDevice: function(e, t) {
                try {
                    console.log("lstore addDevice:", e);
                    for (var n = JSON.parse(localStorage.getItem("devices") || "[]"), r = 0, o = n.length; r < o; r++)
                        if (n[r].FILE === e.FILE) return void(JSON.stringify(n[r]) !== JSON.stringify(e) ? (t ? $.extend(n[r], e) : n[r] = e, localStorage.setItem("devices", JSON.stringify(n)), console.log("lstore.addDevice: update device status")) : console.log("lstore.addDevice: same file!"));
                    return console.log("lstore.addDevice: add a new device!"), n.push(e), localStorage.setItem("devices", JSON.stringify(n)), !0
                } catch (e) {
                    console.log(e)
                }
            },
            clearDevice: function() {
                console.log("lstore.clearDevice");
                try {
                    localStorage.setItem("devices", []), this.setActiveDevice({}, {})
                } catch (e) {
                    console.log(e)
                }
            },
            removeDevice: function(e) {
                try {
                    for (var t = JSON.parse(localStorage.getItem("devices") || "[]"), n = 0, r = t.length; n < r; n++)
                        if (t[n].FILE === e.FILE) return console.log("device.FILE", e.FILE), t.splice(n, 1), localStorage.setItem("devices", JSON.stringify(t)), !0;
                    return !1
                } catch (e) {
                    console.log(e)
                }
            },
            getAllDevices: function() {
                try {
                    return JSON.parse(localStorage.getItem("devices") || "[]")
                } catch (e) {
                    console.log(e)
                }
            },
            setActiveDevice: function(e, t) {
                try {
                    console.log("setting active_device", JSON.stringify(e)), localStorage.setItem("active_device", JSON.stringify(e)), this.setActiveDeviceConfig(t)
                } catch (e) {
                    console.log(e)
                }
            },
            setActiveDevice2: function(e) {
                try {
                    console.log("setting active_device", JSON.stringify(e)), localStorage.setItem("active_device", JSON.stringify(e))
                } catch (e) {
                    console.log(e)
                }
            },
            setActiveDeviceConfig: function(e) {
                try {
                    localStorage.setItem("active_device_config", JSON.stringify(e))
                } catch (e) {
                    console.log(e)
                }
            },
            removeActiveDevice: function() {
                try {
                    localStorage.removeItem("active_device"), this.removeActiveDeviceConfig()
                } catch (e) {
                    console.log(e)
                }
            },
            removeActiveDeviceConfig: function(e) {
                try {
                    localStorage.removeItem("active_device_config")
                } catch (e) {
                    console.log(e)
                }
            },
            getActiveDevice: function() {
                try {
                    return JSON.parse(localStorage.getItem("active_device")) || {}
                } catch (e) {
                    console.log(e)
                }
            },
            getActiveDeviceConfig: function() {
                try {
                    return JSON.parse(localStorage.getItem("active_device_config")) || {}
                } catch (e) {
                    console.log(e)
                }
            },
            setActiveFirmware: function(e) {
                localStorage.setItem("active_firmware", JSON.stringify(e))
            },
            getActiveFirmware: function() {
                try {
                    return JSON.parse(localStorage.getItem("active_firmware")) || {}
                } catch (e) {
                    console.log(e)
                }
            },
            setActiveHardware: function(e) {
                localStorage.setItem("active_hardware", JSON.stringify(e))
            },
            getEmail: function() {
                return localStorage.getItem("email") || !1
            },
            setEmail: function(e) {
                localStorage.setItem("email", e)
            },
            clearEmail: function(e) {
                localStorage.removeItem("email")
            },
            getLang: function() {
                var e = localStorage.getItem("locale") || "en";
                return window.ipcRenderer || utils.initElectron(), window.ipcRenderer.send("set-locale", e), e
            },
            setLang: function(e) {
                localStorage.setItem("locale", e), window.ipcRenderer || utils.initElectron(), window.ipcRenderer.send("set-locale", e)
            },
            getDebug: function() {
                return localStorage.getItem("debug") || 0
            },
            setDebug: function(e) {
                localStorage.setItem("debug", e)
            },
            clearDebug: function() {
                try {
                    localStorage.removeItem("debug")
                } catch (e) {
                    console.error("localStorage.removeItem error, funName:clearDebug")
                }
            },
            getDebugEnabled: function() {
                try {
                    return JSON.parse(localStorage.getItem("debug_enabled")) || !1
                } catch (e) {
                    console.log(e)
                }
            },
            setDebugEnabled: function(e) {
                localStorage.setItem("debug_enabled", e)
            },
            getFactoryEnabled: function() {
                try {
                    return JSON.parse(localStorage.getItem("factory_enabled")) || !1
                } catch (e) {
                    console.log(e)
                }
            },
            setFactoryEnabled: function(e) {
                localStorage.setItem("factory_enabled", e || !1)
            },
            getTestServerEnabled: function() {
                try {
                    return JSON.parse(localStorage.getItem("test_server_enabled")) || !1
                } catch (e) {
                    console.log(e)
                }
            },
            setTestServerEnabled: function(e) {
                localStorage.setItem("test_server_enabled", e || !1)
            },
            setbackupdate: function() {
                localStorage.setItem("backupdate", Date.now())
            },
            setbackupdate: function() {
                localStorage.setItem("backupdate", Date.now())
            },
            backup: function(e) {
                localStorage.setItem("backupdate", Date.now()), localStorage.setItem("backup", JSON.stringify(e))
            },
            getbackup: function() {
                try {
                    return JSON.parse(localStorage.getItem("backup")) || {}
                } catch (e) {
                    console.log(e)
                }
            },
            getbackupdate: function() {
                return localStorage.getItem("backupdate") || ""
            },
            getUpgradeStatus: function() {
                try {
                    return localStorage.getItem("upgrade_status") || 0
                } catch (e) {
                    console.log(e)
                }
            },
            setUpgradeStatus: function(e) {
                localStorage.setItem("upgrade_status", e || 0)
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
            setdownloadPath: function(e) {
                localStorage.setItem("downloadPath", e)
            },
            getSortRoutesDateFlag: function() {
                return localStorage.getItem("has_sort_routes_date")
            },
            setSortRoutesDateFlag: function(e) {
                return localStorage.setItem("has_sort_routes_date", e)
            },
            getAllRoutes: function() {
                try {
                    var e = JSON.parse(localStorage.getItem("routes")) || !1;
                    return e && e.sort(function(e, t) {
                        return t.last_open - e.last_open
                    }), e
                } catch (e) {
                    console.log(e)
                }
            },
            getRoutesCount: function() {
                try {
                    var e = JSON.parse(localStorage.getItem("routes")) || !1;
                    return Object.keys(e).length
                } catch (e) {
                    console.log(e)
                }
            },
            setRouteInfo: function(e) {
                localStorage.setItem("routes", JSON.stringify(e))
            },
            addRoute: function(e) {
                var t = function() {
                    for (var e = JSON.parse(localStorage.getItem("routes")) || [], t = e.length;;) {
                        for (var n = "route_" + (new Date).getTime() + "_" + Math.round(1e5 * Math.random()), r = !0, o = 0; o < t; o++)
                            if (e[o].id === n) {
                                r = !1;
                                break
                            }
                        if (r) return n
                    }
                };
                try {
                    var n = t();
                    e.id = e.routeId || n;
                    var r = JSON.parse(localStorage.getItem("routes")) || [];
                    return r.unshift(e), localStorage.setItem("routes", JSON.stringify(r)), e.id
                } catch (e) {
                    return console.log(e), !1
                }
            },
            setRoute: function(e, t) {
                console.log("route opt setRoute, ", t);
                try {
                    var n = $.extend(!0, {}, t);
                    delete n.id;
                    for (var r = JSON.parse(localStorage.getItem("routes")) || [], o = 0, i = r.length; o < i; o++)
                        if (r[o].id === e) return $.extend(r[o], n), localStorage.setItem("routes", JSON.stringify(r)), !0;
                    return !1
                } catch (e) {
                    return console.log(e), !1
                }
            },
            removeRoute: function(e) {
                try {
                    var t = JSON.parse(localStorage.getItem("routes")) || [];
                    return t.splice(e, 1) != [] && (localStorage.setItem("routes", JSON.stringify(t)), !0)
                } catch (e) {
                    console.log(e)
                }
            },
            removeRouteById: function(e) {
                try {
                    for (var t = JSON.parse(localStorage.getItem("routes")) || [], n = 0; n < t.length; n++)
                        if (t[n].id == e && t.splice(n, 1) != []) return localStorage.setItem("routes", JSON.stringify(t)), !0;
                    return !1
                } catch (e) {
                    console.log(e)
                }
            },
            getPrevLocation: function() {
                return JSON.parse(localStorage.getItem("prev_latlng")) || !1
            },
            setPrevLocation: function(e) {
                localStorage.setItem("prev_latlng", JSON.stringify(e))
            },
            removeAircraft: function(e) {
                try {
                    var t = JSON.parse(localStorage.getItem("aircraft_map")) || {};
                    return t["aircraft_" + e] && (delete t["aircraft_" + e], localStorage.setItem("aircraft_map", JSON.stringify(t))), !0
                } catch (e) {
                    return console.log(e.message), !1
                }
            },
            setAircraft: function(e, t) {
                try {
                    var n = JSON.parse(localStorage.getItem("aircraft_map")) || {},
                        r = n["aircraft_" + e] || {};
                    return $.extend(r, t), n["aircraft_" + e] = r, localStorage.setItem("aircraft_map", JSON.stringify(n)), !0
                } catch (e) {
                    return console.log(e.message), !1
                }
            },
            getAircraft: function(e) {
                try {
                    var t = JSON.parse(localStorage.getItem("aircraft_map")) || {};
                    return e ? t["aircraft_" + e] || {} : t
                } catch (e) {
                    return console.log(e.message), !1
                }
            },
            getSimParamLatitude: function() {
                return JSON.parse(localStorage.getItem("simParam_Latitude"))
            },
            setSimParamLatitude: function(e) {
                localStorage.setItem("simParam_Latitude", e), console.log("set down!", localStorage.getItem("simParam_Latitude"))
            },
            getSimParamLongitude: function() {
                return JSON.parse(localStorage.getItem("simParam_Longitude"))
            },
            setSimParamLongitude: function(e) {
                localStorage.setItem("simParam_Longitude", e), console.log("set down!", localStorage.getItem("simParam_Longitude"))
            },
            getFirstShowUpgrade: function(e) {
                for (var t = JSON.parse(localStorage.getItem("first_show_upgrate") || "[]"), n = 0, r = t.length; n < r; n++)
                    if (console.log(typeof t[n].deviceId, typeof e), t[n].deviceId === e) return t[n].ifshow;
                return console.log("lstore return true!"), !0
            },
            setFirstShowUpgrade: function(e, t, n) {
                for (var r = JSON.parse(localStorage.getItem("first_show_upgrate") || "[]"), o = 0, i = 0, a = r.length; i < a; i++) r[i].deviceId === e && (r[i].version = t, r[i].ifshow = n, o = 1);
                return o || r.push({
                    deviceId: e,
                    version: t,
                    ifshow: n
                }), localStorage.setItem("first_show_upgrate", JSON.stringify(r)), localStorage.getItem("first_show_upgrate")
            },
            removeFirstShowUpgrade: function(e) {
                for (var t = JSON.parse(localStorage.getItem("first_show_upgrate") || "[]"), n = 0, r = t.length; n < r; n++)
                    if (t[n].deviceId === e) return t.splice(n, 1), void localStorage.setItem("first_show_upgrate", JSON.stringify(t))
            },
            setUpgradeF2Info: function(e, t) {
                try {
                    var n = {
                        name: e,
                        password: t
                    };
                    localStorage.setItem("upgrade_f2", JSON.stringify(n))
                } catch (e) {
                    console.error("localStorage.setItem error, funName:setUpgradeF2Info")
                }
            },
            getUpgradeF2Info: function() {
                try {
                    var e = localStorage.getItem("upgrade_f2");
                    return JSON.parse(e)
                } catch (e) {
                    console.error("localStorage.getItem error, funName:getUpgradeF2Info")
                }
            },
            removeUpgradeF2Info: function() {
                try {
                    localStorage.removeItem("upgrade_f2")
                } catch (e) {
                    console.error("localStorage.removeItem error, funName:removeUpgradeF2Info")
                }
            },
            setCalibrationNotTeachFlag: function(e, t) {
                try {
                    localStorage.setItem("calibration_not_teach_" + e, t)
                } catch (e) {
                    console.error("localStorage.setItem error, funName:setCalibrationNotTeachFlag")
                }
            },
            getCalibrationNotTeachFlag: function(e) {
                try {
                    return localStorage.getItem("calibration_not_teach_" + e)
                } catch (e) {
                    console.error("localStorage.getItem error, funName:getCalibrationNotTeachFlag")
                }
            },
            get_m600_line_no_more_remind: function() {
                try {
                    return localStorage.getItem("m600_line_no_more_remind") || ""
                } catch (e) {
                    console.error("localStorage.getItem error, funName:get_m600_line_no_more_remind")
                }
            },
            set_m600_line_no_more_remind: function(e) {
                try {
                    return localStorage.setItem("m600_line_no_more_remind", e)
                } catch (e) {
                    console.error("localStorage.getItem error, funName:set_m600_line_no_more_remind")
                }
            },
            remove_m600_line_no_more_remind: function() {
                try {
                    return localStorage.removeItem("m600_line_no_more_remind")
                } catch (e) {
                    console.error("localStorage.getItem error, funName:remove_m600_line_no_more_remind")
                }
            },
            get_m600_upgrade_no_more_remind: function(e) {
                try {
                    return localStorage.getItem("m600_upgrade_no_more_remind_" + e) || ""
                } catch (e) {
                    console.error("localStorage.getItem error, funName:m600_upgrade_no_more_remind")
                }
            },
            set_m600_upgrade_no_more_remind: function(e, t) {
                try {
                    return localStorage.setItem("m600_upgrade_no_more_remind_" + e, t)
                } catch (e) {
                    console.error("localStorage.setItem error, funName:m600_upgrade_no_more_remind")
                }
            },
            remove_m600_upgrade_no_more_remind: function(e) {
                try {
                    return localStorage.removeItem("m600_upgrade_no_more_remind_" + e)
                } catch (e) {
                    console.error("localStorage.removeItem error, funName:m600_upgrade_no_more_remind")
                }
            },
            set_video_urls: function(e) {
                try {
                    return localStorage.setItem("video_urls", JSON.stringify(e))
                } catch (e) {
                    console.error("localStorage.setItem error, funName:video_urls")
                }
            },
            get_video_urls: function() {
                try {
                    var e = localStorage.getItem("video_urls");
                    return e ? JSON.parse(e) : null
                } catch (e) {
                    console.error("localStorage.getItem error, funName:video_urls")
                }
            },
            setProjectId: function(e) {
                localStorage.setItem("projectid", e)
            },
            getProjectId: function() {
                return localStorage.getItem("projectid")
            },
            setAtUser: function(e) {
                localStorage.setItem("at_user", JSON.stringify(e))
            },
            getAtUser: function() {
                try {
                    return JSON.parse(localStorage.getItem("at_user")) || !1
                } catch (e) {
                    console.log(e)
                }
            },
            delAtUser: function() {
                localStorage.removeItem("at_user"), localStorage.removeItem("session")
            },
            setCaseListCurPage: function(e, t) {
                localStorage.setItem("case_list_page_" + e, t)
            },
            getCaseListCurPage: function(e) {
                return localStorage.getItem("case_list_page_" + e)
            },
            setSession: function(e) {
                localStorage.setItem("session", e)
            },
            getSession: function() {
                return localStorage.getItem("session")
            },
            setNewCasePath: function(e) {
                localStorage.setItem("new_case_path", e)
            },
            getNewCasePath: function() {
                return localStorage.getItem("new_case_path")
            },
            setAtTemplate: function(e) {
                localStorage.setItem("at_template", JSON.stringify(e))
            },
            getAtTemplate: function() {
                try {
                    return JSON.parse(localStorage.getItem("at_template")) || !1
                } catch (e) {
                    console.log(e)
                }
            },
            setMapInfo: function(e) {
                localStorage.setItem("map_into", JSON.stringify(e))
            },
            getMapInfo: function() {
                return JSON.parse(localStorage.getItem("map_into")) || {}
            },
            _getAircraftRouteMap: function() {
                var e = "aircraft_route_map",
                    t = localStorage.getItem(e);
                if (t) try {
                    t = JSON.parse(t)
                } catch (e) {
                    console.log("setAircraftRoute error, too large, ", e)
                } else t = {};
                return t
            },
            setAircraftRoute: function(e, t) {
                if (e && t) {
                    var n = "aircraft_route_map",
                        r = this._getAircraftRouteMap();
                    r[e] = JSON.stringify(t), localStorage.setItem(n, JSON.stringify(r))
                }
            },
            getAircraftRoute: function(e) {
                if (e) {
                    var t = this._getAircraftRouteMap(),
                        n = t[e];
                    if (n) try {
                        n = JSON.parse(n)
                    } catch (e) {
                        console.log("getAircraftRoute error, ", e)
                    }
                    return n
                }
            },
            getGmca: function() {
                return JSON.parse(localStorage.getItem("gmca")) || !1
            },
            setGmca: function(e) {
                localStorage.setItem("gmca", JSON.stringify(e))
            },
            set_report_cfg_showed: function(e) {
                localStorage.setItem("report_cfg_showed", e)
            },
            get_report_cfg_showed: function() {
                return localStorage.getItem("report_cfg_showed") || 0
            },
            ignore_upgrade_sql: function(e) {
                try {
                    var t = localStorage.getItem("ignore_upgrade_sql") || "{}";
                    return t = JSON.parse(t), t[e] = 1, localStorage.setItem("ignore_upgrade_sql", JSON.stringify(t)), !0
                } catch (e) {
                    return !1
                }
            },
            clear_ignore_upgrade_sql: function() {
                return localStorage.removeItem("ignore_upgrade_sql"), !0
            },
            if_ignore_upgrade_sql: function(e) {
                try {
                    var t = localStorage.getItem("ignore_upgrade_sql") || "{}";
                    return t = JSON.parse(t), t[e] || 0
                } catch (e) {
                    return !1
                }
            },
            set_cali_log_opitons: function(e) {
                localStorage.setItem("cali_log_opitons", JSON.stringify(e))
            },
            get_cali_log_opitons: function() {
                var e = localStorage.getItem("cali_log_opitons");
                try {
                    return JSON.parse(e)
                } catch (e) {
                    return null
                }
            },
            set_ass_version: function(e) {
                localStorage.setItem("ass_version", e)
            },
            get_ass_version: function(e) {
                var t = localStorage.getItem("ass_version");
                return t
            },
            set_system_info: function(e) {
                localStorage.setItem("system_info", JSON.stringify(e))
            },
            get_system_info: function() {
                var e = localStorage.getItem("system_info");
                try {
                    return JSON.parse(e)
                } catch (e) {
                    return null
                }
            },
            get_mobile_bind: function(e) {
                try {
                    var t = localStorage.getItem("mobile_bind"),
                        n = JSON.parse(t) || {};
                    return n[e]
                } catch (e) {
                    return
                }
            },
            update_mobile_bind: function(e, t) {
                try {
                    var n = localStorage.getItem("mobile_bind"),
                        r = JSON.parse(n) || {};
                    r[e] = t, localStorage.setItem("mobile_bind", JSON.stringify(r))
                } catch (e) {}
            }
        }
    },
    133: function(e, t, n) {
        var r, o, i, o, a;
        ! function(t, n) {
            "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(t)
        }("undefined" != typeof window ? window : this, function(e, r) {
            function i(e) {
                var t = "length" in e && e.length,
                    n = re.type(e);
                return "function" !== n && !re.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
            }

            function s(e, t, n) {
                if (re.isFunction(t)) return re.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n
                });
                if (t.nodeType) return re.grep(e, function(e) {
                    return e === t !== n
                });
                if ("string" == typeof t) {
                    if (de.test(t)) return re.filter(t, e, n);
                    t = re.filter(t, e)
                }
                return re.grep(e, function(e) {
                    return Y.call(t, e) >= 0 !== n
                })
            }

            function c(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }

            function l(e) {
                var t = ye[e] = {};
                return re.each(e.match(ve) || [], function(e, n) {
                    t[n] = !0
                }), t
            }

            function u() {
                te.removeEventListener("DOMContentLoaded", u, !1), e.removeEventListener("load", u, !1), re.ready()
            }

            function d() {
                Object.defineProperty(this.cache = {}, 0, {
                    get: function() {
                        return {}
                    }
                }), this.expando = re.expando + d.uid++
            }

            function p(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(ke, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                        try {
                            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : we.test(n) ? re.parseJSON(n) : n)
                        } catch (e) {}
                        Se.set(e, t, n)
                    } else n = void 0;
                return n
            }

            function g() {
                return !0
            }

            function f() {
                return !1
            }

            function h() {
                try {
                    return te.activeElement
                } catch (e) {}
            }

            function m(e, t) {
                return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function v(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function y(e) {
                var t = Me.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function _(e, t) {
                for (var n = 0, r = e.length; r > n; n++) xe.set(e[n], "globalEval", !t || xe.get(t[n], "globalEval"))
            }

            function b(e, t) {
                var n, r, o, i, a, s, c, l;
                if (1 === t.nodeType) {
                    if (xe.hasData(e) && (i = xe.access(e), a = xe.set(t, i), l = i.events)) {
                        delete a.handle, a.events = {};
                        for (o in l)
                            for (n = 0, r = l[o].length; r > n; n++) re.event.add(t, o, l[o][n])
                    }
                    Se.hasData(e) && (s = Se.access(e), c = re.extend({}, s), Se.set(t, c))
                }
            }

            function x(e, t) {
                var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], n) : n
            }

            function S(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && Te.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }

            function w(t, n) {
                var r, o = re(n.createElement(t)).appendTo(n.body),
                    i = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(o[0])) ? r.display : re.css(o[0], "display");
                return o.detach(), i
            }

            function k(e) {
                var t = te,
                    n = Be[e];
                return n || (n = w(e, t), "none" !== n && n || ($e = ($e || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = $e[0].contentDocument, t.write(), t.close(), n = w(e, t), $e.detach()), Be[e] = n), n
            }

            function L(e, t, n) {
                var r, o, i, a, s = e.style;
                return n = n || ze(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || re.contains(e.ownerDocument, e) || (a = re.style(e, t)), Ue.test(a) && Ge.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
            }

            function N(e, t) {
                return {
                    get: function() {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }

            function C(e, t) {
                if (t in e) return t;
                for (var n = t[0].toUpperCase() + t.slice(1), r = t, o = Ze.length; o--;)
                    if (t = Ze[o] + n, t in e) return t;
                return r
            }

            function T(e, t, n) {
                var r = Xe.exec(t);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
            }

            function I(e, t, n, r, o) {
                for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > i; i += 2) "margin" === n && (a += re.css(e, n + Ne[i], !0, o)), r ? ("content" === n && (a -= re.css(e, "padding" + Ne[i], !0, o)), "margin" !== n && (a -= re.css(e, "border" + Ne[i] + "Width", !0, o))) : (a += re.css(e, "padding" + Ne[i], !0, o), "padding" !== n && (a += re.css(e, "border" + Ne[i] + "Width", !0, o)));
                return a
            }

            function E(e, t, n) {
                var r = !0,
                    o = "width" === t ? e.offsetWidth : e.offsetHeight,
                    i = ze(e),
                    a = "border-box" === re.css(e, "boxSizing", !1, i);
                if (0 >= o || null == o) {
                    if (o = L(e, t, i), (0 > o || null == o) && (o = e.style[t]), Ue.test(o)) return o;
                    r = a && (ee.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
                }
                return o + I(e, t, n || (a ? "border" : "content"), r, i) + "px"
            }

            function D(e, t) {
                for (var n, r, o, i = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (i[a] = xe.get(r, "olddisplay"), n = r.style.display, t ? (i[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ce(r) && (i[a] = xe.access(r, "olddisplay", k(r.nodeName)))) : (o = Ce(r), "none" === n && o || xe.set(r, "olddisplay", o ? n : re.css(r, "display"))));
                for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[a] || "" : "none"));
                return e
            }

            function O(e, t, n, r, o) {
                return new O.prototype.init(e, t, n, r, o)
            }

            function A() {
                return setTimeout(function() {
                    et = void 0
                }), et = re.now()
            }

            function j(e, t) {
                var n, r = 0,
                    o = {
                        height: e
                    };
                for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Ne[r], o["margin" + n] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e), o
            }

            function R(e, t, n) {
                for (var r, o = (at[t] || []).concat(at["*"]), i = 0, a = o.length; a > i; i++)
                    if (r = o[i].call(n, t, e)) return r
            }

            function P(e, t, n) {
                var r, o, i, a, s, c, l, u, d = this,
                    p = {},
                    g = e.style,
                    f = e.nodeType && Ce(e),
                    h = xe.get(e, "fxshow");
                n.queue || (s = re._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, c = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || c()
                }), s.unqueued++, d.always(function() {
                    d.always(function() {
                        s.unqueued--, re.queue(e, "fx").length || s.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [g.overflow, g.overflowX, g.overflowY], l = re.css(e, "display"), u = "none" === l ? xe.get(e, "olddisplay") || k(e.nodeName) : l, "inline" === u && "none" === re.css(e, "float") && (g.display = "inline-block")), n.overflow && (g.overflow = "hidden", d.always(function() {
                    g.overflow = n.overflow[0], g.overflowX = n.overflow[1], g.overflowY = n.overflow[2]
                }));
                for (r in t)
                    if (o = t[r], nt.exec(o)) {
                        if (delete t[r], i = i || "toggle" === o, o === (f ? "hide" : "show")) {
                            if ("show" !== o || !h || void 0 === h[r]) continue;
                            f = !0
                        }
                        p[r] = h && h[r] || re.style(e, r)
                    } else l = void 0;
                if (re.isEmptyObject(p)) "inline" === ("none" === l ? k(e.nodeName) : l) && (g.display = l);
                else {
                    h ? "hidden" in h && (f = h.hidden) : h = xe.access(e, "fxshow", {}), i && (h.hidden = !f), f ? re(e).show() : d.done(function() {
                        re(e).hide()
                    }), d.done(function() {
                        var t;
                        xe.remove(e, "fxshow");
                        for (t in p) re.style(e, t, p[t])
                    });
                    for (r in p) a = R(f ? h[r] : 0, r, d), r in h || (h[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
                }
            }

            function F(e, t) {
                var n, r, o, i, a;
                for (n in e)
                    if (r = re.camelCase(n), o = t[r], i = e[n], re.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), a = re.cssHooks[r], a && "expand" in a) {
                        i = a.expand(i), delete e[r];
                        for (n in i) n in e || (e[n] = i[n], t[n] = o)
                    } else t[r] = o
            }

            function q(e, t, n) {
                var r, o, i = 0,
                    a = it.length,
                    s = re.Deferred().always(function() {
                        delete c.elem
                    }),
                    c = function() {
                        if (o) return !1;
                        for (var t = et || A(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, i = 1 - r, a = 0, c = l.tweens.length; c > a; a++) l.tweens[a].run(i);
                        return s.notifyWith(e, [l, i, n]), 1 > i && c ? n : (s.resolveWith(e, [l]), !1)
                    },
                    l = s.promise({
                        elem: e,
                        props: re.extend({}, t),
                        opts: re.extend(!0, {
                            specialEasing: {}
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: et || A(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = re.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                            return l.tweens.push(r), r
                        },
                        stop: function(t) {
                            var n = 0,
                                r = t ? l.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; r > n; n++) l.tweens[n].run(1);
                            return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                        }
                    }),
                    u = l.props;
                for (F(u, l.opts.specialEasing); a > i; i++)
                    if (r = it[i].call(l, e, u, l.opts)) return r;
                return re.map(u, R, l), re.isFunction(l.opts.start) && l.opts.start.call(e, l), re.fx.timer(re.extend(c, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
            }

            function H(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, o = 0,
                        i = t.toLowerCase().match(ve) || [];
                    if (re.isFunction(n))
                        for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function M(e, t, n, r) {
                function o(s) {
                    var c;
                    return i[s] = !0, re.each(e[s] || [], function(e, s) {
                        var l = s(t, n, r);
                        return "string" != typeof l || a || i[l] ? a ? !(c = l) : void 0 : (t.dataTypes.unshift(l), o(l), !1)
                    }), c
                }
                var i = {},
                    a = e === wt;
                return o(t.dataTypes[0]) || !i["*"] && o("*")
            }

            function J(e, t) {
                var n, r, o = re.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
                return r && re.extend(!0, e, r), e
            }

            function W(e, t, n) {
                for (var r, o, i, a, s = e.contents, c = e.dataTypes;
                    "*" === c[0];) c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                    for (o in s)
                        if (s[o] && s[o].test(r)) {
                            c.unshift(o);
                            break
                        }
                if (c[0] in n) i = c[0];
                else {
                    for (o in n) {
                        if (!c[0] || e.converters[o + " " + c[0]]) {
                            i = o;
                            break
                        }
                        a || (a = o)
                    }
                    i = i || a
                }
                return i ? (i !== c[0] && c.unshift(i), n[i]) : void 0
            }

            function $(e, t, n, r) {
                var o, i, a, s, c, l = {},
                    u = e.dataTypes.slice();
                if (u[1])
                    for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                for (i = u.shift(); i;)
                    if (e.responseFields[i] && (n[e.responseFields[i]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = i, i = u.shift())
                        if ("*" === i) i = c;
                        else if ("*" !== c && c !== i) {
                    if (a = l[c + " " + i] || l["* " + i], !a)
                        for (o in l)
                            if (s = o.split(" "), s[1] === i && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                                a === !0 ? a = l[o] : l[o] !== !0 && (i = s[0], u.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e.throws) t = a(t);
                        else try {
                            t = a(t)
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: a ? e : "No conversion from " + c + " to " + i
                            }
                        }
                }
                return {
                    state: "success",
                    data: t
                }
            }

            function B(e, t, n, r) {
                var o;
                if (re.isArray(t)) re.each(t, function(t, o) {
                    n || Tt.test(e) ? r(e, o) : B(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, r)
                });
                else if (n || "object" !== re.type(t)) r(e, t);
                else
                    for (o in t) B(e + "[" + o + "]", t[o], n, r)
            }

            function G(e) {
                return re.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }
            var U = [],
                z = U.slice,
                V = U.concat,
                X = U.push,
                Y = U.indexOf,
                K = {},
                Q = K.toString,
                Z = K.hasOwnProperty,
                ee = {},
                te = e.document,
                ne = "2.1.4",
                re = function(e, t) {
                    return new re.fn.init(e, t)
                },
                oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                ie = /^-ms-/,
                ae = /-([\da-z])/gi,
                se = function(e, t) {
                    return t.toUpperCase()
                };
            re.fn = re.prototype = {
                jquery: ne,
                constructor: re,
                selector: "",
                length: 0,
                toArray: function() {
                    return z.call(this)
                },
                get: function(e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : z.call(this)
                },
                pushStack: function(e) {
                    var t = re.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function(e, t) {
                    return re.each(this, e, t)
                },
                map: function(e) {
                    return this.pushStack(re.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(z.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: X,
                sort: U.sort,
                splice: U.splice
            }, re.extend = re.fn.extend = function() {
                var e, t, n, r, o, i, a = arguments[0] || {},
                    s = 1,
                    c = arguments.length,
                    l = !1;
                for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || re.isFunction(a) || (a = {}), s === c && (a = this, s--); c > s; s++)
                    if (null != (e = arguments[s]))
                        for (t in e) n = a[t], r = e[t], a !== r && (l && r && (re.isPlainObject(r) || (o = re.isArray(r))) ? (o ? (o = !1, i = n && re.isArray(n) ? n : []) : i = n && re.isPlainObject(n) ? n : {}, a[t] = re.extend(l, i, r)) : void 0 !== r && (a[t] = r));
                return a
            }, re.extend({
                expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === re.type(e)
                },
                isArray: Array.isArray,
                isWindow: function(e) {
                    return null != e && e === e.window
                },
                isNumeric: function(e) {
                    return !re.isArray(e) && e - parseFloat(e) + 1 >= 0
                },
                isPlainObject: function(e) {
                    return "object" === re.type(e) && !e.nodeType && !re.isWindow(e) && !(e.constructor && !Z.call(e.constructor.prototype, "isPrototypeOf"))
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? K[Q.call(e)] || "object" : typeof e
                },
                globalEval: function(e) {
                    var t, n = eval;
                    e = re.trim(e), e && (1 === e.indexOf("use strict") ? (t = te.createElement("script"), t.text = e, te.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                },
                camelCase: function(e) {
                    return e.replace(ie, "ms-").replace(ae, se)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t, n) {
                    var r, o = 0,
                        a = e.length,
                        s = i(e);
                    if (n) {
                        if (s)
                            for (; a > o && (r = t.apply(e[o], n), r !== !1); o++);
                        else
                            for (o in e)
                                if (r = t.apply(e[o], n), r === !1) break
                    } else if (s)
                        for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
                    else
                        for (o in e)
                            if (r = t.call(e[o], o, e[o]), r === !1) break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(oe, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (i(Object(e)) ? re.merge(n, "string" == typeof e ? [e] : e) : X.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : Y.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, o = e.length; n > r; r++) e[o++] = t[r];
                    return e.length = o, e
                },
                grep: function(e, t, n) {
                    for (var r, o = [], i = 0, a = e.length, s = !n; a > i; i++) r = !t(e[i], i), r !== s && o.push(e[i]);
                    return o
                },
                map: function(e, t, n) {
                    var r, o = 0,
                        a = e.length,
                        s = i(e),
                        c = [];
                    if (s)
                        for (; a > o; o++) r = t(e[o], o, n), null != r && c.push(r);
                    else
                        for (o in e) r = t(e[o], o, n), null != r && c.push(r);
                    return V.apply([], c)
                },
                guid: 1,
                proxy: function(e, t) {
                    var n, r, o;
                    return "string" == typeof t && (n = e[t], t = e, e = n), re.isFunction(e) ? (r = z.call(arguments, 2), o = function() {
                        return e.apply(t || this, r.concat(z.call(arguments)))
                    }, o.guid = e.guid = e.guid || re.guid++, o) : void 0
                },
                now: Date.now,
                support: ee
            }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                K["[object " + t + "]"] = t.toLowerCase()
            });
            var ce = function(e) {
                function t(e, t, n, r) {
                    var o, i, a, s, c, l, d, g, f, h;
                    if ((t ? t.ownerDocument || t : M) !== O && D(t), t = t || O, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                    if (!r && j) {
                        if (11 !== s && (o = ye.exec(e)))
                            if (a = o[1]) {
                                if (9 === s) {
                                    if (i = t.getElementById(a), !i || !i.parentNode) return n;
                                    if (i.id === a) return n.push(i), n
                                } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && q(t, i) && i.id === a) return n.push(i), n
                            } else {
                                if (o[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                                if ((a = o[3]) && x.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(a)), n
                            }
                        if (x.qsa && (!R || !R.test(e))) {
                            if (g = d = H, f = t, h = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                for (l = L(e), (d = t.getAttribute("id")) ? g = d.replace(be, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", c = l.length; c--;) l[c] = g + p(l[c]);
                                f = _e.test(e) && u(t.parentNode) || t, h = l.join(",")
                            }
                            if (h) try {
                                return Q.apply(n, f.querySelectorAll(h)), n
                            } catch (e) {} finally {
                                d || t.removeAttribute("id")
                            }
                        }
                    }
                    return C(e.replace(ce, "$1"), t, n, r)
                }

                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > S.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }
                    var t = [];
                    return e
                }

                function r(e) {
                    return e[H] = !0, e
                }

                function o(e) {
                    var t = O.createElement("div");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function i(e, t) {
                    for (var n = e.split("|"), r = e.length; r--;) S.attrHandle[n[r]] = t
                }

                function a(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || z) - (~e.sourceIndex || z);
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function c(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function l(e) {
                    return r(function(t) {
                        return t = +t, r(function(n, r) {
                            for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                        })
                    })
                }

                function u(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function d() {}

                function p(e) {
                    for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                    return r
                }

                function g(e, t, n) {
                    var r = t.dir,
                        o = n && "parentNode" === r,
                        i = W++;
                    return t.first ? function(t, n, i) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || o) return e(t, n, i)
                    } : function(t, n, a) {
                        var s, c, l = [J, i];
                        if (a) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || o) {
                                    if (c = t[H] || (t[H] = {}), (s = c[r]) && s[0] === J && s[1] === i) return l[2] = s[2];
                                    if (c[r] = l, l[2] = e(t, n, a)) return !0
                                }
                    }
                }

                function f(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var o = e.length; o--;)
                            if (!e[o](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function h(e, n, r) {
                    for (var o = 0, i = n.length; i > o; o++) t(e, n[o], r);
                    return r
                }

                function m(e, t, n, r, o) {
                    for (var i, a = [], s = 0, c = e.length, l = null != t; c > s; s++)(i = e[s]) && (!n || n(i, r, o)) && (a.push(i), l && t.push(s));
                    return a
                }

                function v(e, t, n, o, i, a) {
                    return o && !o[H] && (o = v(o)), i && !i[H] && (i = v(i, a)), r(function(r, a, s, c) {
                        var l, u, d, p = [],
                            g = [],
                            f = a.length,
                            v = r || h(t || "*", s.nodeType ? [s] : s, []),
                            y = !e || !r && t ? v : m(v, p, e, s, c),
                            _ = n ? i || (r ? e : f || o) ? [] : a : y;
                        if (n && n(y, _, s, c), o)
                            for (l = m(_, g), o(l, [], s, c), u = l.length; u--;)(d = l[u]) && (_[g[u]] = !(y[g[u]] = d));
                        if (r) {
                            if (i || e) {
                                if (i) {
                                    for (l = [], u = _.length; u--;)(d = _[u]) && l.push(y[u] = d);
                                    i(null, _ = [], l, c)
                                }
                                for (u = _.length; u--;)(d = _[u]) && (l = i ? ee(r, d) : p[u]) > -1 && (r[l] = !(a[l] = d))
                            }
                        } else _ = m(_ === a ? _.splice(f, _.length) : _), i ? i(null, a, _, c) : Q.apply(a, _)
                    })
                }

                function y(e) {
                    for (var t, n, r, o = e.length, i = S.relative[e[0].type], a = i || S.relative[" "], s = i ? 1 : 0, c = g(function(e) {
                            return e === t
                        }, a, !0), l = g(function(e) {
                            return ee(t, e) > -1
                        }, a, !0), u = [function(e, n, r) {
                            var o = !i && (r || n !== T) || ((t = n).nodeType ? c(e, n, r) : l(e, n, r));
                            return t = null, o
                        }]; o > s; s++)
                        if (n = S.relative[e[s].type]) u = [g(f(u), n)];
                        else {
                            if (n = S.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                                for (r = ++s; o > r && !S.relative[e[r].type]; r++);
                                return v(s > 1 && f(u), s > 1 && p(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(ce, "$1"), n, r > s && y(e.slice(s, r)), o > r && y(e = e.slice(r)), o > r && p(e))
                            }
                            u.push(n)
                        }
                    return f(u)
                }

                function _(e, n) {
                    var o = n.length > 0,
                        i = e.length > 0,
                        a = function(r, a, s, c, l) {
                            var u, d, p, g = 0,
                                f = "0",
                                h = r && [],
                                v = [],
                                y = T,
                                _ = r || i && S.find.TAG("*", l),
                                b = J += null == y ? 1 : Math.random() || .1,
                                x = _.length;
                            for (l && (T = a !== O && a); f !== x && null != (u = _[f]); f++) {
                                if (i && u) {
                                    for (d = 0; p = e[d++];)
                                        if (p(u, a, s)) {
                                            c.push(u);
                                            break
                                        }
                                    l && (J = b)
                                }
                                o && ((u = !p && u) && g--, r && h.push(u))
                            }
                            if (g += f, o && f !== g) {
                                for (d = 0; p = n[d++];) p(h, v, a, s);
                                if (r) {
                                    if (g > 0)
                                        for (; f--;) h[f] || v[f] || (v[f] = Y.call(c));
                                    v = m(v)
                                }
                                Q.apply(c, v), l && !r && v.length > 0 && g + n.length > 1 && t.uniqueSort(c)
                            }
                            return l && (J = b, T = y), h
                        };
                    return o ? r(a) : a
                }
                var b, x, S, w, k, L, N, C, T, I, E, D, O, A, j, R, P, F, q, H = "sizzle" + 1 * new Date,
                    M = e.document,
                    J = 0,
                    W = 0,
                    $ = n(),
                    B = n(),
                    G = n(),
                    U = function(e, t) {
                        return e === t && (E = !0), 0
                    },
                    z = 1 << 31,
                    V = {}.hasOwnProperty,
                    X = [],
                    Y = X.pop,
                    K = X.push,
                    Q = X.push,
                    Z = X.slice,
                    ee = function(e, t) {
                        for (var n = 0, r = e.length; r > n; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ne = "[\\x20\\t\\r\\n\\f]",
                    re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    oe = re.replace("w", "w#"),
                    ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
                    ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
                    se = new RegExp(ne + "+", "g"),
                    ce = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                    le = new RegExp("^" + ne + "*," + ne + "*"),
                    ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                    de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                    pe = new RegExp(ae),
                    ge = new RegExp("^" + oe + "$"),
                    fe = {
                        ID: new RegExp("^#(" + re + ")"),
                        CLASS: new RegExp("^\\.(" + re + ")"),
                        TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + ie),
                        PSEUDO: new RegExp("^" + ae),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    },
                    he = /^(?:input|select|textarea|button)$/i,
                    me = /^h\d$/i,
                    ve = /^[^{]+\{\s*\[native \w/,
                    ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    _e = /[+~]/,
                    be = /'|\\/g,
                    xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                    Se = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    we = function() {
                        D()
                    };
                try {
                    Q.apply(X = Z.call(M.childNodes), M.childNodes), X[M.childNodes.length].nodeType
                } catch (e) {
                    Q = {
                        apply: X.length ? function(e, t) {
                            K.apply(e, Z.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }
                x = t.support = {}, k = t.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, D = t.setDocument = function(e) {
                    var t, n, r = e ? e.ownerDocument || e : M;
                    return r !== O && 9 === r.nodeType && r.documentElement ? (O = r, A = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), j = !k(r), x.attributes = o(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), x.getElementsByTagName = o(function(e) {
                        return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
                    }), x.getElementsByClassName = ve.test(r.getElementsByClassName), x.getById = o(function(e) {
                        return A.appendChild(e).id = H, !r.getElementsByName || !r.getElementsByName(H).length
                    }), x.getById ? (S.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && j) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, S.filter.ID = function(e) {
                        var t = e.replace(xe, Se);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete S.find.ID, S.filter.ID = function(e) {
                        var t = e.replace(xe, Se);
                        return function(e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), S.find.TAG = x.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, r = [],
                            o = 0,
                            i = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return i
                    }, S.find.CLASS = x.getElementsByClassName && function(e, t) {
                        return j ? t.getElementsByClassName(e) : void 0
                    }, P = [], R = [], (x.qsa = ve.test(r.querySelectorAll)) && (o(function(e) {
                        A.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || R.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || R.push("~="), e.querySelectorAll(":checked").length || R.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || R.push(".#.+[+~]")
                    }), o(function(e) {
                        var t = r.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && R.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), R.push(",.*:")
                    })), (x.matchesSelector = ve.test(F = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && o(function(e) {
                        x.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), P.push("!=", ae)
                    }), R = R.length && new RegExp(R.join("|")), P = P.length && new RegExp(P.join("|")), t = ve.test(A.compareDocumentPosition), q = t || ve.test(A.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, U = t ? function(e, t) {
                        if (e === t) return E = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === M && q(M, e) ? -1 : t === r || t.ownerDocument === M && q(M, t) ? 1 : I ? ee(I, e) - ee(I, t) : 0 : 4 & n ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return E = !0, 0;
                        var n, o = 0,
                            i = e.parentNode,
                            s = t.parentNode,
                            c = [e],
                            l = [t];
                        if (!i || !s) return e === r ? -1 : t === r ? 1 : i ? -1 : s ? 1 : I ? ee(I, e) - ee(I, t) : 0;
                        if (i === s) return a(e, t);
                        for (n = e; n = n.parentNode;) c.unshift(n);
                        for (n = t; n = n.parentNode;) l.unshift(n);
                        for (; c[o] === l[o];) o++;
                        return o ? a(c[o], l[o]) : c[o] === M ? -1 : l[o] === M ? 1 : 0
                    }, r) : O
                }, t.matches = function(e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function(e, n) {
                    if ((e.ownerDocument || e) !== O && D(e), n = n.replace(de, "='$1']"), !(!x.matchesSelector || !j || P && P.test(n) || R && R.test(n))) try {
                        var r = F.call(e, n);
                        if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (e) {}
                    return t(n, O, null, [e]).length > 0
                }, t.contains = function(e, t) {
                    return (e.ownerDocument || e) !== O && D(e), q(e, t)
                }, t.attr = function(e, t) {
                    (e.ownerDocument || e) !== O && D(e);
                    var n = S.attrHandle[t.toLowerCase()],
                        r = n && V.call(S.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
                    return void 0 !== r ? r : x.attributes || !j ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, t.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function(e) {
                    var t, n = [],
                        r = 0,
                        o = 0;
                    if (E = !x.detectDuplicates, I = !x.sortStable && e.slice(0), e.sort(U), E) {
                        for (; t = e[o++];) t === e[o] && (r = n.push(o));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return I = null, e
                }, w = t.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += w(t);
                    return n
                }, S = t.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: fe,
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
                        ATTR: function(e) {
                            return e[1] = e[1].replace(xe, Se), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, Se), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = L(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(xe, Se).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = $[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && $(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, n, r) {
                            return function(o) {
                                var i = t.attr(o, e);
                                return null == i ? "!=" === n : !n || (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n && (i === r || i.slice(0, r.length + 1) === r + "-"))
                            }
                        },
                        CHILD: function(e, t, n, r, o) {
                            var i = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === o ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, c) {
                                var l, u, d, p, g, f, h = i !== a ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    y = !c && !s;
                                if (m) {
                                    if (i) {
                                        for (; h;) {
                                            for (d = t; d = d[h];)
                                                if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            f = h = "only" === e && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [a ? m.firstChild : m.lastChild], a && y) {
                                        for (u = m[H] || (m[H] = {}), l = u[e] || [], g = l[0] === J && l[1], p = l[0] === J && l[2], d = g && m.childNodes[g]; d = ++g && d && d[h] || (p = g = 0) || f.pop();)
                                            if (1 === d.nodeType && ++p && d === t) {
                                                u[e] = [J, g, p];
                                                break
                                            }
                                    } else if (y && (l = (t[H] || (t[H] = {}))[e]) && l[0] === J) p = l[1];
                                    else
                                        for (;
                                            (d = ++g && d && d[h] || (p = g = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[H] || (d[H] = {}))[e] = [J, p]), d !== t)););
                                    return p -= o, p === r || p % r === 0 && p / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, n) {
                            var o, i = S.pseudos[e] || S.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return i[H] ? i(n) : i.length > 1 ? (o = [e, e, "", n], S.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                for (var r, o = i(e, n), a = o.length; a--;) r = ee(e, o[a]), e[r] = !(t[r] = o[a])
                            }) : function(e) {
                                return i(e, 0, o)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: r(function(e) {
                            var t = [],
                                n = [],
                                o = N(e.replace(ce, "$1"));
                            return o[H] ? r(function(e, t, n, r) {
                                for (var i, a = o(e, null, r, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                            }) : function(e, r, i) {
                                return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: r(function(e) {
                            return function(n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: r(function(e) {
                            return e = e.replace(xe, Se),
                                function(t) {
                                    return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                                }
                        }),
                        lang: r(function(e) {
                            return ge.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, Se).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === A
                        },
                        focus: function(e) {
                            return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !S.pseudos.empty(e)
                        },
                        header: function(e) {
                            return me.test(e.nodeName)
                        },
                        input: function(e) {
                            return he.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: l(function() {
                            return [0]
                        }),
                        last: l(function(e, t) {
                            return [t - 1]
                        }),
                        eq: l(function(e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: l(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: l(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: l(function(e, t, n) {
                            for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: l(function(e, t, n) {
                            for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }, S.pseudos.nth = S.pseudos.eq;
                for (b in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) S.pseudos[b] = s(b);
                for (b in {
                        submit: !0,
                        reset: !0
                    }) S.pseudos[b] = c(b);
                return d.prototype = S.filters = S.pseudos, S.setFilters = new d, L = t.tokenize = function(e, n) {
                    var r, o, i, a, s, c, l, u = B[e + " "];
                    if (u) return n ? 0 : u.slice(0);
                    for (s = e, c = [], l = S.preFilter; s;) {
                        (!r || (o = le.exec(s))) && (o && (s = s.slice(o[0].length) || s), c.push(i = [])), r = !1, (o = ue.exec(s)) && (r = o.shift(), i.push({
                            value: r,
                            type: o[0].replace(ce, " ")
                        }), s = s.slice(r.length));
                        for (a in S.filter) !(o = fe[a].exec(s)) || l[a] && !(o = l[a](o)) || (r = o.shift(), i.push({
                            value: r,
                            type: a,
                            matches: o
                        }), s = s.slice(r.length));
                        if (!r) break
                    }
                    return n ? s.length : s ? t.error(e) : B(e, c).slice(0)
                }, N = t.compile = function(e, t) {
                    var n, r = [],
                        o = [],
                        i = G[e + " "];
                    if (!i) {
                        for (t || (t = L(e)), n = t.length; n--;) i = y(t[n]), i[H] ? r.push(i) : o.push(i);
                        i = G(e, _(o, r)), i.selector = e
                    }
                    return i
                }, C = t.select = function(e, t, n, r) {
                    var o, i, a, s, c, l = "function" == typeof e && e,
                        d = !r && L(e = l.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if (i = d[0] = d[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && x.getById && 9 === t.nodeType && j && S.relative[i[1].type]) {
                            if (t = (S.find.ID(a.matches[0].replace(xe, Se), t) || [])[0], !t) return n;
                            l && (t = t.parentNode), e = e.slice(i.shift().value.length)
                        }
                        for (o = fe.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !S.relative[s = a.type]);)
                            if ((c = S.find[s]) && (r = c(a.matches[0].replace(xe, Se), _e.test(i[0].type) && u(t.parentNode) || t))) {
                                if (i.splice(o, 1), e = r.length && p(i), !e) return Q.apply(n, r), n;
                                break
                            }
                    }
                    return (l || N(e, d))(r, t, !j, n, _e.test(e) && u(t.parentNode) || t), n
                }, x.sortStable = H.split("").sort(U).join("") === H, x.detectDuplicates = !!E, D(), x.sortDetached = o(function(e) {
                    return 1 & e.compareDocumentPosition(O.createElement("div"))
                }), o(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || i("type|href|height|width", function(e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), x.attributes && o(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || i("value", function(e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), o(function(e) {
                    return null == e.getAttribute("disabled")
                }) || i(te, function(e, t, n) {
                    var r;
                    return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), t
            }(e);
            re.find = ce, re.expr = ce.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ce.uniqueSort, re.text = ce.getText, re.isXMLDoc = ce.isXML, re.contains = ce.contains;
            var le = re.expr.match.needsContext,
                ue = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                de = /^.[^:#\[\.,]*$/;
            re.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? re.find.matchesSelector(r, e) ? [r] : [] : re.find.matches(e, re.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }, re.fn.extend({
                find: function(e) {
                    var t, n = this.length,
                        r = [],
                        o = this;
                    if ("string" != typeof e) return this.pushStack(re(e).filter(function() {
                        for (t = 0; n > t; t++)
                            if (re.contains(o[t], this)) return !0
                    }));
                    for (t = 0; n > t; t++) re.find(e, o[t], r);
                    return r = this.pushStack(n > 1 ? re.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
                },
                filter: function(e) {
                    return this.pushStack(s(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(s(this, e || [], !0))
                },
                is: function(e) {
                    return !!s(this, "string" == typeof e && le.test(e) ? re(e) : e || [], !1).length
                }
            });
            var pe, ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                fe = re.fn.init = function(e, t) {
                    var n, r;
                    if (!e) return this;
                    if ("string" == typeof e) {
                        if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ge.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                        if (n[1]) {
                            if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), ue.test(n[1]) && re.isPlainObject(t))
                                for (n in t) re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                            return this
                        }
                        return r = te.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = te, this.selector = e, this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
                };
            fe.prototype = re.fn, pe = re(te);
            var he = /^(?:parents|prev(?:Until|All))/,
                me = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            re.extend({
                dir: function(e, t, n) {
                    for (var r = [], o = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (o && re(e).is(n)) break;
                            r.push(e)
                        }
                    return r
                },
                sibling: function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
            }), re.fn.extend({
                has: function(e) {
                    var t = re(e, this),
                        n = t.length;
                    return this.filter(function() {
                        for (var e = 0; n > e; e++)
                            if (re.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    for (var n, r = 0, o = this.length, i = [], a = le.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; o > r; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
                                i.push(n);
                                break
                            }
                    return this.pushStack(i.length > 1 ? re.unique(i) : i)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? Y.call(re(e), this[0]) : Y.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(re.unique(re.merge(this.get(), re(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), re.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return re.dir(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return re.dir(e, "parentNode", n)
                },
                next: function(e) {
                    return c(e, "nextSibling")
                },
                prev: function(e) {
                    return c(e, "previousSibling")
                },
                nextAll: function(e) {
                    return re.dir(e, "nextSibling")
                },
                prevAll: function(e) {
                    return re.dir(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return re.dir(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return re.dir(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return re.sibling((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return re.sibling(e.firstChild)
                },
                contents: function(e) {
                    return e.contentDocument || re.merge([], e.childNodes)
                }
            }, function(e, t) {
                re.fn[e] = function(n, r) {
                    var o = re.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = re.filter(r, o)), this.length > 1 && (me[e] || re.unique(o), he.test(e) && o.reverse()), this.pushStack(o)
                }
            });
            var ve = /\S+/g,
                ye = {};
            re.Callbacks = function(e) {
                e = "string" == typeof e ? ye[e] || l(e) : re.extend({}, e);
                var t, n, r, o, i, a, s = [],
                    c = !e.once && [],
                    u = function(l) {
                        for (t = e.memory && l, n = !0, a = o || 0, o = 0, i = s.length, r = !0; s && i > a; a++)
                            if (s[a].apply(l[0], l[1]) === !1 && e.stopOnFalse) {
                                t = !1;
                                break
                            }
                        r = !1, s && (c ? c.length && u(c.shift()) : t ? s = [] : d.disable())
                    },
                    d = {
                        add: function() {
                            if (s) {
                                var n = s.length;
                                ! function t(n) {
                                    re.each(n, function(n, r) {
                                        var o = re.type(r);
                                        "function" === o ? e.unique && d.has(r) || s.push(r) : r && r.length && "string" !== o && t(r)
                                    })
                                }(arguments), r ? i = s.length : t && (o = n, u(t))
                            }
                            return this
                        },
                        remove: function() {
                            return s && re.each(arguments, function(e, t) {
                                for (var n;
                                    (n = re.inArray(t, s, n)) > -1;) s.splice(n, 1), r && (i >= n && i--, a >= n && a--)
                            }), this
                        },
                        has: function(e) {
                            return e ? re.inArray(e, s) > -1 : !(!s || !s.length)
                        },
                        empty: function() {
                            return s = [], i = 0, this
                        },
                        disable: function() {
                            return s = c = t = void 0, this
                        },
                        disabled: function() {
                            return !s
                        },
                        lock: function() {
                            return c = void 0, t || d.disable(), this
                        },
                        locked: function() {
                            return !c
                        },
                        fireWith: function(e, t) {
                            return !s || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? c.push(t) : u(t)), this
                        },
                        fire: function() {
                            return d.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!n
                        }
                    };
                return d
            }, re.extend({
                Deferred: function(e) {
                    var t = [
                            ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", re.Callbacks("memory")]
                        ],
                        n = "pending",
                        r = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return o.done(arguments).fail(arguments), this
                            },
                            then: function() {
                                var e = arguments;
                                return re.Deferred(function(n) {
                                    re.each(t, function(t, i) {
                                        var a = re.isFunction(e[t]) && e[t];
                                        o[i[1]](function() {
                                            var e = a && a.apply(this, arguments);
                                            e && re.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[i[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? re.extend(e, r) : r
                            }
                        },
                        o = {};
                    return r.pipe = r.then, re.each(t, function(e, i) {
                        var a = i[2],
                            s = i[3];
                        r[i[1]] = a.add, s && a.add(function() {
                            n = s
                        }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function() {
                            return o[i[0] + "With"](this === o ? r : this, arguments), this
                        }, o[i[0] + "With"] = a.fireWith
                    }), r.promise(o), e && e.call(o, o), o
                },
                when: function(e) {
                    var t, n, r, o = 0,
                        i = z.call(arguments),
                        a = i.length,
                        s = 1 !== a || e && re.isFunction(e.promise) ? a : 0,
                        c = 1 === s ? e : re.Deferred(),
                        l = function(e, n, r) {
                            return function(o) {
                                n[e] = this, r[e] = arguments.length > 1 ? z.call(arguments) : o, r === t ? c.notifyWith(n, r) : --s || c.resolveWith(n, r)
                            }
                        };
                    if (a > 1)
                        for (t = new Array(a), n = new Array(a), r = new Array(a); a > o; o++) i[o] && re.isFunction(i[o].promise) ? i[o].promise().done(l(o, r, i)).fail(c.reject).progress(l(o, n, t)) : --s;
                    return s || c.resolveWith(r, i), c.promise()
                }
            });
            var _e;
            re.fn.ready = function(e) {
                return re.ready.promise().done(e), this
            }, re.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? re.readyWait++ : re.ready(!0)
                },
                ready: function(e) {
                    (e === !0 ? --re.readyWait : re.isReady) || (re.isReady = !0, e !== !0 && --re.readyWait > 0 || (_e.resolveWith(te, [re]), re.fn.triggerHandler && (re(te).triggerHandler("ready"), re(te).off("ready"))))
                }
            }), re.ready.promise = function(t) {
                return _e || (_e = re.Deferred(), "complete" === te.readyState ? setTimeout(re.ready) : (te.addEventListener("DOMContentLoaded", u, !1), e.addEventListener("load", u, !1))), _e.promise(t)
            }, re.ready.promise();
            var be = re.access = function(e, t, n, r, o, i, a) {
                var s = 0,
                    c = e.length,
                    l = null == n;
                if ("object" === re.type(n)) {
                    o = !0;
                    for (s in n) re.access(e, t, s, n[s], !0, i, a)
                } else if (void 0 !== r && (o = !0, re.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                        return l.call(re(e), n)
                    })), t))
                    for (; c > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return o ? e : l ? t.call(e) : c ? t(e[0], n) : i
            };
            re.acceptData = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            }, d.uid = 1, d.accepts = re.acceptData, d.prototype = {
                key: function(e) {
                    if (!d.accepts(e)) return 0;
                    var t = {},
                        n = e[this.expando];
                    if (!n) {
                        n = d.uid++;
                        try {
                            t[this.expando] = {
                                value: n
                            }, Object.defineProperties(e, t)
                        } catch (r) {
                            t[this.expando] = n, re.extend(e, t)
                        }
                    }
                    return this.cache[n] || (this.cache[n] = {}), n
                },
                set: function(e, t, n) {
                    var r, o = this.key(e),
                        i = this.cache[o];
                    if ("string" == typeof t) i[t] = n;
                    else if (re.isEmptyObject(i)) re.extend(this.cache[o], t);
                    else
                        for (r in t) i[r] = t[r];
                    return i
                },
                get: function(e, t) {
                    var n = this.cache[this.key(e)];
                    return void 0 === t ? n : n[t]
                },
                access: function(e, t, n) {
                    var r;
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, re.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, r, o, i = this.key(e),
                        a = this.cache[i];
                    if (void 0 === t) this.cache[i] = {};
                    else {
                        re.isArray(t) ? r = t.concat(t.map(re.camelCase)) : (o = re.camelCase(t), t in a ? r = [t, o] : (r = o, r = r in a ? [r] : r.match(ve) || [])), n = r.length;
                        for (; n--;) delete a[r[n]]
                    }
                },
                hasData: function(e) {
                    return !re.isEmptyObject(this.cache[e[this.expando]] || {})
                },
                discard: function(e) {
                    e[this.expando] && delete this.cache[e[this.expando]]
                }
            };
            var xe = new d,
                Se = new d,
                we = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                ke = /([A-Z])/g;
            re.extend({
                hasData: function(e) {
                    return Se.hasData(e) || xe.hasData(e)
                },
                data: function(e, t, n) {
                    return Se.access(e, t, n)
                },
                removeData: function(e, t) {
                    Se.remove(e, t)
                },
                _data: function(e, t, n) {
                    return xe.access(e, t, n)
                },
                _removeData: function(e, t) {
                    xe.remove(e, t)
                }
            }), re.fn.extend({
                data: function(e, t) {
                    var n, r, o, i = this[0],
                        a = i && i.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = Se.get(i), 1 === i.nodeType && !xe.get(i, "hasDataAttrs"))) {
                            for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = re.camelCase(r.slice(5)), p(i, r, o[r])));
                            xe.set(i, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof e ? this.each(function() {
                        Se.set(this, e)
                    }) : be(this, function(t) {
                        var n, r = re.camelCase(e);
                        if (i && void 0 === t) {
                            if (n = Se.get(i, e), void 0 !== n) return n;
                            if (n = Se.get(i, r), void 0 !== n) return n;
                            if (n = p(i, r, void 0), void 0 !== n) return n
                        } else this.each(function() {
                            var n = Se.get(this, r);
                            Se.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && Se.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        Se.remove(this, e)
                    })
                }
            }), re.extend({
                queue: function(e, t, n) {
                    var r;
                    return e ? (t = (t || "fx") + "queue", r = xe.get(e, t), n && (!r || re.isArray(n) ? r = xe.access(e, t, re.makeArray(n)) : r.push(n)), r || []) : void 0
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = re.queue(e, t),
                        r = n.length,
                        o = n.shift(),
                        i = re._queueHooks(e, t),
                        a = function() {
                            re.dequeue(e, t)
                        };
                    "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return xe.get(e, n) || xe.access(e, n, {
                        empty: re.Callbacks("once memory").add(function() {
                            xe.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), re.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = re.queue(this, e, t);
                        re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        re.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, r = 1,
                        o = re.Deferred(),
                        i = this,
                        a = this.length,
                        s = function() {
                            --r || o.resolveWith(i, [i])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = xe.get(i[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                    return s(), o.promise(t)
                }
            });
            var Le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Ne = ["Top", "Right", "Bottom", "Left"],
                Ce = function(e, t) {
                    return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
                },
                Te = /^(?:checkbox|radio)$/i;
            ! function() {
                var e = te.createDocumentFragment(),
                    t = e.appendChild(te.createElement("div")),
                    n = te.createElement("input");
                n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ee.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ee.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            var Ie = "undefined";
            ee.focusinBubbles = "onfocusin" in e;
            var Ee = /^key/,
                De = /^(?:mouse|pointer|contextmenu)|click/,
                Oe = /^(?:focusinfocus|focusoutblur)$/,
                Ae = /^([^.]*)(?:\.(.+)|)$/;
            re.event = {
                global: {},
                add: function(e, t, n, r, o) {
                    var i, a, s, c, l, u, d, p, g, f, h, m = xe.get(e);
                    if (m)
                        for (n.handler && (i = n, n = i.handler, o = i.selector), n.guid || (n.guid = re.guid++), (c = m.events) || (c = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                                return typeof re !== Ie && re.event.triggered !== t.type ? re.event.dispatch.apply(e, arguments) : void 0
                            }), t = (t || "").match(ve) || [""], l = t.length; l--;) s = Ae.exec(t[l]) || [], g = h = s[1], f = (s[2] || "").split(".").sort(), g && (d = re.event.special[g] || {}, g = (o ? d.delegateType : d.bindType) || g, d = re.event.special[g] || {}, u = re.extend({
                            type: g,
                            origType: h,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && re.expr.match.needsContext.test(o),
                            namespace: f.join(".")
                        }, i), (p = c[g]) || (p = c[g] = [], p.delegateCount = 0, d.setup && d.setup.call(e, r, f, a) !== !1 || e.addEventListener && e.addEventListener(g, a, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), re.event.global[g] = !0)
                },
                remove: function(e, t, n, r, o) {
                    var i, a, s, c, l, u, d, p, g, f, h, m = xe.hasData(e) && xe.get(e);
                    if (m && (c = m.events)) {
                        for (t = (t || "").match(ve) || [""], l = t.length; l--;)
                            if (s = Ae.exec(t[l]) || [], g = h = s[1], f = (s[2] || "").split(".").sort(), g) {
                                for (d = re.event.special[g] || {}, g = (r ? d.delegateType : d.bindType) || g, p = c[g] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--;) u = p[i], !o && h !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (p.splice(i, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                                a && !p.length && (d.teardown && d.teardown.call(e, f, m.handle) !== !1 || re.removeEvent(e, g, m.handle), delete c[g])
                            } else
                                for (g in c) re.event.remove(e, g + t[l], n, r, !0);
                        re.isEmptyObject(c) && (delete m.handle, xe.remove(e, "events"))
                    }
                },
                trigger: function(t, n, r, o) {
                    var i, a, s, c, l, u, d, p = [r || te],
                        g = Z.call(t, "type") ? t.type : t,
                        f = Z.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (a = s = r = r || te, 3 !== r.nodeType && 8 !== r.nodeType && !Oe.test(g + re.event.triggered) && (g.indexOf(".") >= 0 && (f = g.split("."), g = f.shift(), f.sort()), l = g.indexOf(":") < 0 && "on" + g, t = t[re.expando] ? t : new re.Event(g, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : re.makeArray(n, [t]), d = re.event.special[g] || {}, o || !d.trigger || d.trigger.apply(r, n) !== !1)) {
                        if (!o && !d.noBubble && !re.isWindow(r)) {
                            for (c = d.delegateType || g, Oe.test(c + g) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                            s === (r.ownerDocument || te) && p.push(s.defaultView || s.parentWindow || e)
                        }
                        for (i = 0;
                            (a = p[i++]) && !t.isPropagationStopped();) t.type = i > 1 ? c : d.bindType || g, u = (xe.get(a, "events") || {})[t.type] && xe.get(a, "handle"), u && u.apply(a, n), u = l && a[l], u && u.apply && re.acceptData(a) && (t.result = u.apply(a, n), t.result === !1 && t.preventDefault());
                        return t.type = g, o || t.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !re.acceptData(r) || l && re.isFunction(r[g]) && !re.isWindow(r) && (s = r[l], s && (r[l] = null), re.event.triggered = g, r[g](), re.event.triggered = void 0, s && (r[l] = s)), t.result
                    }
                },
                dispatch: function(e) {
                    e = re.event.fix(e);
                    var t, n, r, o, i, a = [],
                        s = z.call(arguments),
                        c = (xe.get(this, "events") || {})[e.type] || [],
                        l = re.event.special[e.type] || {};
                    if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                        for (a = re.event.handlers.call(this, e, c), t = 0;
                            (o = a[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = o.elem, n = 0;
                                (i = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((re.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return l.postDispatch && l.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, o, i, a = [],
                        s = t.delegateCount,
                        c = e.target;
                    if (s && c.nodeType && (!e.button || "click" !== e.type))
                        for (; c !== this; c = c.parentNode || this)
                            if (c.disabled !== !0 || "click" !== e.type) {
                                for (r = [], n = 0; s > n; n++) i = t[n], o = i.selector + " ", void 0 === r[o] && (r[o] = i.needsContext ? re(o, this).index(c) >= 0 : re.find(o, this, null, [c]).length), r[o] && r.push(i);
                                r.length && a.push({
                                    elem: c,
                                    handlers: r
                                })
                            }
                    return s < t.length && a.push({
                        elem: this,
                        handlers: t.slice(s)
                    }), a
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, t) {
                        var n, r, o, i = t.button;
                        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || te, r = n.documentElement, o = n.body, e.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
                    }
                },
                fix: function(e) {
                    if (e[re.expando]) return e;
                    var t, n, r, o = e.type,
                        i = e,
                        a = this.fixHooks[o];
                    for (a || (this.fixHooks[o] = a = De.test(o) ? this.mouseHooks : Ee.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new re.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];
                    return e.target || (e.target = te), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, i) : e
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            return this !== h() && this.focus ? (this.focus(), !1) : void 0
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === h() && this.blur ? (this.blur(), !1) : void 0
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            return "checkbox" === this.type && this.click && re.nodeName(this, "input") ? (this.click(), !1) : void 0
                        },
                        _default: function(e) {
                            return re.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function(e, t, n, r) {
                    var o = re.extend(new re.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    r ? re.event.trigger(o, null, t) : re.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
                }
            }, re.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            }, re.Event = function(e, t) {
                return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? g : f) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
            }, re.Event.prototype = {
                isDefaultPrevented: f,
                isPropagationStopped: f,
                isImmediatePropagationStopped: f,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = g, e && e.preventDefault && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = g, e && e.stopPropagation && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = g, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, re.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                re.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this,
                            o = e.relatedTarget,
                            i = e.handleObj;
                        return (!o || o !== r && !re.contains(r, o)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), ee.focusinBubbles || re.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    re.event.simulate(t, e.target, re.event.fix(e), !0)
                };
                re.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this,
                            o = xe.access(r, t);
                        o || r.addEventListener(e, n, !0), xe.access(r, t, (o || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this,
                            o = xe.access(r, t) - 1;
                        o ? xe.access(r, t, o) : (r.removeEventListener(e, n, !0), xe.remove(r, t))
                    }
                }
            }), re.fn.extend({
                on: function(e, t, n, r, o) {
                    var i, a;
                    if ("object" == typeof e) {
                        "string" != typeof t && (n = n || t, t = void 0);
                        for (a in e) this.on(a, t, n, e[a], o);
                        return this
                    }
                    if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = f;
                    else if (!r) return this;
                    return 1 === o && (i = r, r = function(e) {
                        return re().off(e), i.apply(this, arguments)
                    }, r.guid = i.guid || (i.guid = re.guid++)), this.each(function() {
                        re.event.add(this, e, r, n, t)
                    })
                },
                one: function(e, t, n, r) {
                    return this.on(e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r, o;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, re(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (o in e) this.off(o, t, e[o]);
                        return this
                    }
                    return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = f), this.each(function() {
                        re.event.remove(this, e, n, t)
                    })
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        re.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    return n ? re.event.trigger(e, t, n, !0) : void 0
                }
            });
            var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                Re = /<([\w:]+)/,
                Pe = /<|&#?\w+;/,
                Fe = /<(?:script|style|link)/i,
                qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
                He = /^$|\/(?:java|ecma)script/i,
                Me = /^true\/(.*)/,
                Je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                We = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            We.optgroup = We.option, We.tbody = We.tfoot = We.colgroup = We.caption = We.thead, We.th = We.td, re.extend({
                clone: function(e, t, n) {
                    var r, o, i, a, s = e.cloneNode(!0),
                        c = re.contains(e.ownerDocument, e);
                    if (!(ee.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                        for (a = x(s), i = x(e), r = 0, o = i.length; o > r; r++) S(i[r], a[r]);
                    if (t)
                        if (n)
                            for (i = i || x(e), a = a || x(s), r = 0, o = i.length; o > r; r++) b(i[r], a[r]);
                        else b(e, s);
                    return a = x(s, "script"), a.length > 0 && _(a, !c && x(e, "script")), s
                },
                buildFragment: function(e, t, n, r) {
                    for (var o, i, a, s, c, l, u = t.createDocumentFragment(), d = [], p = 0, g = e.length; g > p; p++)
                        if (o = e[p], o || 0 === o)
                            if ("object" === re.type(o)) re.merge(d, o.nodeType ? [o] : o);
                            else if (Pe.test(o)) {
                        for (i = i || u.appendChild(t.createElement("div")), a = (Re.exec(o) || ["", ""])[1].toLowerCase(), s = We[a] || We._default, i.innerHTML = s[1] + o.replace(je, "<$1></$2>") + s[2], l = s[0]; l--;) i = i.lastChild;
                        re.merge(d, i.childNodes), i = u.firstChild, i.textContent = ""
                    } else d.push(t.createTextNode(o));
                    for (u.textContent = "", p = 0; o = d[p++];)
                        if ((!r || -1 === re.inArray(o, r)) && (c = re.contains(o.ownerDocument, o), i = x(u.appendChild(o), "script"), c && _(i), n))
                            for (l = 0; o = i[l++];) He.test(o.type || "") && n.push(o);
                    return u
                },
                cleanData: function(e) {
                    for (var t, n, r, o, i = re.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                        if (re.acceptData(n) && (o = n[xe.expando], o && (t = xe.cache[o]))) {
                            if (t.events)
                                for (r in t.events) i[r] ? re.event.remove(n, r) : re.removeEvent(n, r, t.handle);
                            xe.cache[o] && delete xe.cache[o]
                        }
                        delete Se.cache[n[Se.expando]]
                    }
                }
            }), re.fn.extend({
                text: function(e) {
                    return be(this, function(e) {
                        return void 0 === e ? re.text(this) : this.empty().each(function() {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return this.domManip(arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = m(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function() {
                    return this.domManip(arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = m(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return this.domManip(arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return this.domManip(arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                remove: function(e, t) {
                    for (var n, r = e ? re.filter(e, this) : this, o = 0; null != (n = r[o]); o++) t || 1 !== n.nodeType || re.cleanData(x(n)), n.parentNode && (t && re.contains(n.ownerDocument, n) && _(x(n, "script")), n.parentNode.removeChild(n));
                    return this
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (re.cleanData(x(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function() {
                        return re.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return be(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Fe.test(e) && !We[(Re.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = e.replace(je, "<$1></$2>");
                            try {
                                for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (re.cleanData(x(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = arguments[0];
                    return this.domManip(arguments, function(t) {
                        e = this.parentNode, re.cleanData(x(this)), e && e.replaceChild(t, this)
                    }), e && (e.length || e.nodeType) ? this : this.remove()
                },
                detach: function(e) {
                    return this.remove(e, !0)
                },
                domManip: function(e, t) {
                    e = V.apply([], e);
                    var n, r, o, i, a, s, c = 0,
                        l = this.length,
                        u = this,
                        d = l - 1,
                        p = e[0],
                        g = re.isFunction(p);
                    if (g || l > 1 && "string" == typeof p && !ee.checkClone && qe.test(p)) return this.each(function(n) {
                        var r = u.eq(n);
                        g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
                    });
                    if (l && (n = re.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                        for (o = re.map(x(n, "script"), v), i = o.length; l > c; c++) a = n, c !== d && (a = re.clone(a, !0, !0), i && re.merge(o, x(a, "script"))), t.call(this[c], a, c);
                        if (i)
                            for (s = o[o.length - 1].ownerDocument, re.map(o, y), c = 0; i > c; c++) a = o[c], He.test(a.type || "") && !xe.access(a, "globalEval") && re.contains(s, a) && (a.src ? re._evalUrl && re._evalUrl(a.src) : re.globalEval(a.textContent.replace(Je, "")))
                    }
                    return this
                }
            }), re.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                re.fn[e] = function(e) {
                    for (var n, r = [], o = re(e), i = o.length - 1, a = 0; i >= a; a++) n = a === i ? this : this.clone(!0), re(o[a])[t](n), X.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var $e, Be = {},
                Ge = /^margin/,
                Ue = new RegExp("^(" + Le + ")(?!px)[a-z%]+$", "i"),
                ze = function(t) {
                    return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
                };
            ! function() {
                function t() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", o.appendChild(i);
                    var t = e.getComputedStyle(a, null);
                    n = "1%" !== t.top, r = "4px" === t.width, o.removeChild(i)
                }
                var n, r, o = te.documentElement,
                    i = te.createElement("div"),
                    a = te.createElement("div");
                a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ee.clearCloneStyle = "content-box" === a.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(a), e.getComputedStyle && re.extend(ee, {
                    pixelPosition: function() {
                        return t(), n
                    },
                    boxSizingReliable: function() {
                        return null == r && t(), r
                    },
                    reliableMarginRight: function() {
                        var t, n = a.appendChild(te.createElement("div"));
                        return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", o.appendChild(i), t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(i), a.removeChild(n), t
                    }
                }))
            }(), re.swap = function(e, t, n, r) {
                var o, i, a = {};
                for (i in t) a[i] = e.style[i], e.style[i] = t[i];
                o = n.apply(e, r || []);
                for (i in t) e.style[i] = a[i];
                return o
            };
            var Ve = /^(none|table(?!-c[ea]).+)/,
                Xe = new RegExp("^(" + Le + ")(.*)$", "i"),
                Ye = new RegExp("^([+-])=(" + Le + ")", "i"),
                Ke = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Qe = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Ze = ["Webkit", "O", "Moz", "ms"];
            re.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = L(e, "opacity");
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
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, i, a, s = re.camelCase(t),
                            c = e.style;
                        return t = re.cssProps[s] || (re.cssProps[s] = C(c, s)), a = re.cssHooks[t] || re.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : c[t] : (i = typeof n, "string" === i && (o = Ye.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(re.css(e, t)), i = "number"), void(null != n && n === n && ("number" !== i || re.cssNumber[s] || (n += "px"), ee.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (c[t] = n))))
                    }
                },
                css: function(e, t, n, r) {
                    var o, i, a, s = re.camelCase(t);
                    return t = re.cssProps[s] || (re.cssProps[s] = C(e.style, s)), a = re.cssHooks[t] || re.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = L(e, t, r)), "normal" === o && t in Qe && (o = Qe[t]), "" === n || n ? (i = parseFloat(o), n === !0 || re.isNumeric(i) ? i || 0 : o) : o
                }
            }), re.each(["height", "width"], function(e, t) {
                re.cssHooks[t] = {
                    get: function(e, n, r) {
                        return n ? Ve.test(re.css(e, "display")) && 0 === e.offsetWidth ? re.swap(e, Ke, function() {
                            return E(e, t, r)
                        }) : E(e, t, r) : void 0
                    },
                    set: function(e, n, r) {
                        var o = r && ze(e);
                        return T(e, n, r ? I(e, t, r, "border-box" === re.css(e, "boxSizing", !1, o), o) : 0)
                    }
                }
            }), re.cssHooks.marginRight = N(ee.reliableMarginRight, function(e, t) {
                return t ? re.swap(e, {
                    display: "inline-block"
                }, L, [e, "marginRight"]) : void 0
            }), re.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                re.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + Ne[r] + t] = i[r] || i[r - 2] || i[0];
                        return o
                    }
                }, Ge.test(e) || (re.cssHooks[e + t].set = T)
            }), re.fn.extend({
                css: function(e, t) {
                    return be(this, function(e, t, n) {
                        var r, o, i = {},
                            a = 0;
                        if (re.isArray(t)) {
                            for (r = ze(e), o = t.length; o > a; a++) i[t[a]] = re.css(e, t[a], !1, r);
                            return i
                        }
                        return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
                    }, e, t, arguments.length > 1)
                },
                show: function() {
                    return D(this, !0)
                },
                hide: function() {
                    return D(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        Ce(this) ? re(this).show() : re(this).hide()
                    })
                }
            }), re.Tween = O, O.prototype = {
                constructor: O,
                init: function(e, t, n, r, o, i) {
                    this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (re.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = O.propHooks[this.prop];
                    return e && e.get ? e.get(this) : O.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = O.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
                }
            }, O.prototype.init.prototype = O.prototype, O.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                    },
                    set: function(e) {
                        re.fx.step[e.prop] ? re.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[re.cssProps[e.prop]] || re.cssHooks[e.prop]) ? re.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, re.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }
            }, re.fx = O.prototype.init, re.fx.step = {};
            var et, tt, nt = /^(?:toggle|show|hide)$/,
                rt = new RegExp("^(?:([+-])=|)(" + Le + ")([a-z%]*)$", "i"),
                ot = /queueHooks$/,
                it = [P],
                at = {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t),
                            r = n.cur(),
                            o = rt.exec(t),
                            i = o && o[3] || (re.cssNumber[e] ? "" : "px"),
                            a = (re.cssNumber[e] || "px" !== i && +r) && rt.exec(re.css(n.elem, e)),
                            s = 1,
                            c = 20;
                        if (a && a[3] !== i) {
                            i = i || a[3], o = o || [], a = +r || 1;
                            do s = s || ".5", a /= s, re.style(n.elem, e, a + i); while (s !== (s = n.cur() / r) && 1 !== s && --c)
                        }
                        return o && (a = n.start = +a || +r || 0, n.unit = i, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
                    }]
                };
            re.Animation = re.extend(q, {
                    tweener: function(e, t) {
                        re.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                        for (var n, r = 0, o = e.length; o > r; r++) n = e[r], at[n] = at[n] || [], at[n].unshift(t)
                    },
                    prefilter: function(e, t) {
                        t ? it.unshift(e) : it.push(e)
                    }
                }), re.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? re.extend({}, e) : {
                        complete: n || !n && t || re.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !re.isFunction(t) && t
                    };
                    return r.duration = re.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in re.fx.speeds ? re.fx.speeds[r.duration] : re.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                        re.isFunction(r.old) && r.old.call(this), r.queue && re.dequeue(this, r.queue)
                    }, r
                }, re.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(Ce).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var o = re.isEmptyObject(e),
                            i = re.speed(t, n, r),
                            a = function() {
                                var t = q(this, re.extend({}, e), i);
                                (o || xe.get(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a, o || i.queue === !1 ? this.each(a) : this.queue(i.queue, a)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                o = null != e && e + "queueHooks",
                                i = re.timers,
                                a = xe.get(this);
                            if (o) a[o] && a[o].stop && r(a[o]);
                            else
                                for (o in a) a[o] && a[o].stop && ot.test(o) && r(a[o]);
                            for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                            (t || !n) && re.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return e !== !1 && (e = e || "fx"), this.each(function() {
                            var t, n = xe.get(this),
                                r = n[e + "queue"],
                                o = n[e + "queueHooks"],
                                i = re.timers,
                                a = r ? r.length : 0;
                            for (n.finish = !0, re.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                            for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), re.each(["toggle", "show", "hide"], function(e, t) {
                    var n = re.fn[t];
                    re.fn[t] = function(e, r, o) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(j(t, !0), e, r, o)
                    }
                }), re.each({
                    slideDown: j("show"),
                    slideUp: j("hide"),
                    slideToggle: j("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, t) {
                    re.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }), re.timers = [], re.fx.tick = function() {
                    var e, t = 0,
                        n = re.timers;
                    for (et = re.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                    n.length || re.fx.stop(), et = void 0
                }, re.fx.timer = function(e) {
                    re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
                }, re.fx.interval = 13, re.fx.start = function() {
                    tt || (tt = setInterval(re.fx.tick, re.fx.interval))
                }, re.fx.stop = function() {
                    clearInterval(tt), tt = null
                }, re.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, re.fn.delay = function(e, t) {
                    return e = re.fx ? re.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                        var r = setTimeout(t, e);
                        n.stop = function() {
                            clearTimeout(r)
                        }
                    })
                },
                function() {
                    var e = te.createElement("input"),
                        t = te.createElement("select"),
                        n = t.appendChild(te.createElement("option"));
                    e.type = "checkbox", ee.checkOn = "" !== e.value, ee.optSelected = n.selected, t.disabled = !0, ee.optDisabled = !n.disabled, e = te.createElement("input"), e.value = "t", e.type = "radio", ee.radioValue = "t" === e.value
                }();
            var st, ct, lt = re.expr.attrHandle;
            re.fn.extend({
                attr: function(e, t) {
                    return be(this, re.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        re.removeAttr(this, e)
                    })
                }
            }), re.extend({
                attr: function(e, t, n) {
                    var r, o, i = e.nodeType;
                    if (e && 3 !== i && 8 !== i && 2 !== i) return typeof e.getAttribute === Ie ? re.prop(e, t, n) : (1 === i && re.isXMLDoc(e) || (t = t.toLowerCase(), r = re.attrHooks[t] || (re.expr.match.bool.test(t) ? ct : st)), void 0 === n ? r && "get" in r && null !== (o = r.get(e, t)) ? o : (o = re.find.attr(e, t), null == o ? void 0 : o) : null !== n ? r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void re.removeAttr(e, t))
                },
                removeAttr: function(e, t) {
                    var n, r, o = 0,
                        i = t && t.match(ve);
                    if (i && 1 === e.nodeType)
                        for (; n = i[o++];) r = re.propFix[n] || n, re.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!ee.radioValue && "radio" === t && re.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                }
            }), ct = {
                set: function(e, t, n) {
                    return t === !1 ? re.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = lt[t] || re.find.attr;
                lt[t] = function(e, t, r) {
                    var o, i;
                    return r || (i = lt[t], lt[t] = o, o = null != n(e, t, r) ? t.toLowerCase() : null, lt[t] = i), o
                }
            });
            var ut = /^(?:input|select|textarea|button)$/i;
            re.fn.extend({
                prop: function(e, t) {
                    return be(this, re.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[re.propFix[e] || e]
                    })
                }
            }), re.extend({
                propFix: {
                    for: "htmlFor",
                    class: "className"
                },
                prop: function(e, t, n) {
                    var r, o, i, a = e.nodeType;
                    if (e && 3 !== a && 8 !== a && 2 !== a) return i = 1 !== a || !re.isXMLDoc(e), i && (t = re.propFix[t] || t, o = re.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            return e.hasAttribute("tabindex") || ut.test(e.nodeName) || e.href ? e.tabIndex : -1
                        }
                    }
                }
            }), ee.optSelected || (re.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                }
            }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                re.propFix[this.toLowerCase()] = this
            });
            var dt = /[\t\r\n\f]/g;
            re.fn.extend({
                addClass: function(e) {
                    var t, n, r, o, i, a, s = "string" == typeof e && e,
                        c = 0,
                        l = this.length;
                    if (re.isFunction(e)) return this.each(function(t) {
                        re(this).addClass(e.call(this, t, this.className))
                    });
                    if (s)
                        for (t = (e || "").match(ve) || []; l > c; c++)
                            if (n = this[c], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(dt, " ") : " ")) {
                                for (i = 0; o = t[i++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                a = re.trim(r), n.className !== a && (n.className = a)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, o, i, a, s = 0 === arguments.length || "string" == typeof e && e,
                        c = 0,
                        l = this.length;
                    if (re.isFunction(e)) return this.each(function(t) {
                        re(this).removeClass(e.call(this, t, this.className))
                    });
                    if (s)
                        for (t = (e || "").match(ve) || []; l > c; c++)
                            if (n = this[c], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(dt, " ") : "")) {
                                for (i = 0; o = t[i++];)
                                    for (; r.indexOf(" " + o + " ") >= 0;) r = r.replace(" " + o + " ", " ");
                                a = e ? re.trim(r) : "", n.className !== a && (n.className = a)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(re.isFunction(e) ? function(n) {
                        re(this).toggleClass(e.call(this, n, this.className, t), t)
                    } : function() {
                        if ("string" === n)
                            for (var t, r = 0, o = re(this), i = e.match(ve) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else(n === Ie || "boolean" === n) && (this.className && xe.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : xe.get(this, "__className__") || "")
                    })
                },
                hasClass: function(e) {
                    for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(dt, " ").indexOf(t) >= 0) return !0;
                    return !1
                }
            });
            var pt = /\r/g;
            re.fn.extend({
                val: function(e) {
                    var t, n, r, o = this[0];
                    return arguments.length ? (r = re.isFunction(e), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = r ? e.call(this, n, re(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : re.isArray(o) && (o = re.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })), t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    })) : o ? (t = re.valHooks[o.type] || re.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(pt, "") : null == n ? "" : n)) : void 0
                }
            }), re.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = re.find.attr(e, "value");
                            return null != t ? t : re.trim(re.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, a = i ? null : [], s = i ? o + 1 : r.length, c = 0 > o ? s : i ? o : 0; s > c; c++)
                                if (n = r[c], !(!n.selected && c !== o || (ee.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = re(n).val(), i) return t;
                                    a.push(t)
                                }
                            return a
                        },
                        set: function(e, t) {
                            for (var n, r, o = e.options, i = re.makeArray(t), a = o.length; a--;) r = o[a], (r.selected = re.inArray(r.value, i) >= 0) && (n = !0);
                            return n || (e.selectedIndex = -1), i
                        }
                    }
                }
            }), re.each(["radio", "checkbox"], function() {
                re.valHooks[this] = {
                    set: function(e, t) {
                        return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) >= 0 : void 0
                    }
                }, ee.checkOn || (re.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                re.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), re.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                },
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            });
            var gt = re.now(),
                ft = /\?/;
            re.parseJSON = function(e) {
                return JSON.parse(e + "")
            }, re.parseXML = function(e) {
                var t, n;
                if (!e || "string" != typeof e) return null;
                try {
                    n = new DOMParser, t = n.parseFromString(e, "text/xml")
                } catch (e) {
                    t = void 0
                }
                return (!t || t.getElementsByTagName("parsererror").length) && re.error("Invalid XML: " + e), t
            };
            var ht = /#.*$/,
                mt = /([?&])_=[^&]*/,
                vt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                yt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                _t = /^(?:GET|HEAD)$/,
                bt = /^\/\//,
                xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                St = {},
                wt = {},
                kt = "*/".concat("*"),
                Lt = e.location.href,
                Nt = xt.exec(Lt.toLowerCase()) || [];
            re.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Lt,
                    type: "GET",
                    isLocal: yt.test(Nt[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": kt,
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
                        "text json": re.parseJSON,
                        "text xml": re.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? J(J(e, re.ajaxSettings), t) : J(re.ajaxSettings, e)
                },
                ajaxPrefilter: H(St),
                ajaxTransport: H(wt),
                ajax: function(e, t) {
                    function n(e, t, n, a) {
                        var c, u, v, y, b, S = t;
                        2 !== _ && (_ = 2, s && clearTimeout(s), r = void 0, i = a || "", x.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, n && (y = W(d, x, n)), y = $(d, y, x, c), c ? (d.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (re.lastModified[o] = b), b = x.getResponseHeader("etag"), b && (re.etag[o] = b)), 204 === e || "HEAD" === d.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = y.state, u = y.data, v = y.error, c = !v)) : (v = S, (e || !S) && (S = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || S) + "", c ? f.resolveWith(p, [u, S, x]) : f.rejectWith(p, [x, S, v]), x.statusCode(m), m = void 0, l && g.trigger(c ? "ajaxSuccess" : "ajaxError", [x, d, c ? u : v]), h.fireWith(p, [x, S]), l && (g.trigger("ajaxComplete", [x, d]), --re.active || re.event.trigger("ajaxStop")))
                    }
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var r, o, i, a, s, c, l, u, d = re.ajaxSetup({}, t),
                        p = d.context || d,
                        g = d.context && (p.nodeType || p.jquery) ? re(p) : re.event,
                        f = re.Deferred(),
                        h = re.Callbacks("once memory"),
                        m = d.statusCode || {},
                        v = {},
                        y = {},
                        _ = 0,
                        b = "canceled",
                        x = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (2 === _) {
                                    if (!a)
                                        for (a = {}; t = vt.exec(i);) a[t[1].toLowerCase()] = t[2];
                                    t = a[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return 2 === _ ? i : null
                            },
                            setRequestHeader: function(e, t) {
                                var n = e.toLowerCase();
                                return _ || (e = y[n] = y[n] || e, v[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return _ || (d.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (2 > _)
                                        for (t in e) m[t] = [m[t], e[t]];
                                    else x.always(e[x.status]);
                                return this
                            },
                            abort: function(e) {
                                var t = e || b;
                                return r && r.abort(t), n(0, t), this
                            }
                        };
                    if (f.promise(x).complete = h.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || Lt) + "").replace(ht, "").replace(bt, Nt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = re.trim(d.dataType || "*").toLowerCase().match(ve) || [""], null == d.crossDomain && (c = xt.exec(d.url.toLowerCase()), d.crossDomain = !(!c || c[1] === Nt[1] && c[2] === Nt[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (Nt[3] || ("http:" === Nt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = re.param(d.data, d.traditional)), M(St, d, t, x), 2 === _) return x;
                    l = re.event && d.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !_t.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (ft.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = mt.test(o) ? o.replace(mt, "$1_=" + gt++) : o + (ft.test(o) ? "&" : "?") + "_=" + gt++)), d.ifModified && (re.lastModified[o] && x.setRequestHeader("If-Modified-Since", re.lastModified[o]), re.etag[o] && x.setRequestHeader("If-None-Match", re.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + kt + "; q=0.01" : "") : d.accepts["*"]);
                    for (u in d.headers) x.setRequestHeader(u, d.headers[u]);
                    if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === _)) return x.abort();
                    b = "abort";
                    for (u in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) x[u](d[u]);
                    if (r = M(wt, d, t, x)) {
                        x.readyState = 1, l && g.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                            x.abort("timeout")
                        }, d.timeout));
                        try {
                            _ = 1, r.send(v, n)
                        } catch (e) {
                            if (!(2 > _)) throw e;
                            n(-1, e)
                        }
                    } else n(-1, "No Transport");
                    return x
                },
                getJSON: function(e, t, n) {
                    return re.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return re.get(e, void 0, t, "script")
                }
            }), re.each(["get", "post"], function(e, t) {
                re[t] = function(e, n, r, o) {
                    return re.isFunction(n) && (o = o || r, r = n, n = void 0), re.ajax({
                        url: e,
                        type: t,
                        dataType: o,
                        data: n,
                        success: r
                    })
                }
            }), re._evalUrl = function(e) {
                return re.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, re.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return re.isFunction(e) ? this.each(function(t) {
                        re(this).wrapAll(e.call(this, t))
                    }) : (this[0] && (t = re(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this)
                },
                wrapInner: function(e) {
                    return this.each(re.isFunction(e) ? function(t) {
                        re(this).wrapInner(e.call(this, t))
                    } : function() {
                        var t = re(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = re.isFunction(e);
                    return this.each(function(n) {
                        re(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), re.expr.filters.hidden = function(e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0
            }, re.expr.filters.visible = function(e) {
                return !re.expr.filters.hidden(e)
            };
            var Ct = /%20/g,
                Tt = /\[\]$/,
                It = /\r?\n/g,
                Et = /^(?:submit|button|image|reset|file)$/i,
                Dt = /^(?:input|select|textarea|keygen)/i;
            re.param = function(e, t) {
                var n, r = [],
                    o = function(e, t) {
                        t = re.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function() {
                    o(this.name, this.value)
                });
                else
                    for (n in e) B(n, e[n], t, o);
                return r.join("&").replace(Ct, "+")
            }, re.fn.extend({
                serialize: function() {
                    return re.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = re.prop(this, "elements");
                        return e ? re.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !re(this).is(":disabled") && Dt.test(this.nodeName) && !Et.test(e) && (this.checked || !Te.test(e))
                    }).map(function(e, t) {
                        var n = re(this).val();
                        return null == n ? null : re.isArray(n) ? re.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(It, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(It, "\r\n")
                        }
                    }).get()
                }
            }), re.ajaxSettings.xhr = function() {
                try {
                    return new XMLHttpRequest
                } catch (e) {}
            };
            var Ot = 0,
                At = {},
                jt = {
                    0: 200,
                    1223: 204
                },
                Rt = re.ajaxSettings.xhr();
            e.attachEvent && e.attachEvent("onunload", function() {
                for (var e in At) At[e]()
            }), ee.cors = !!Rt && "withCredentials" in Rt, ee.ajax = Rt = !!Rt, re.ajaxTransport(function(e) {
                var t;
                return ee.cors || Rt && !e.crossDomain ? {
                    send: function(n, r) {
                        var o, i = e.xhr(),
                            a = ++Ot;
                        if (i.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (o in e.xhrFields) i[o] = e.xhrFields[o];
                        e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (o in n) i.setRequestHeader(o, n[o]);
                        t = function(e) {
                            return function() {
                                t && (delete At[a], t = i.onload = i.onerror = null, "abort" === e ? i.abort() : "error" === e ? r(i.status, i.statusText) : r(jt[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? {
                                    text: i.responseText
                                } : void 0, i.getAllResponseHeaders()))
                            }
                        }, i.onload = t(), i.onerror = t("error"), t = At[a] = t("abort");
                        try {
                            i.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t) throw e
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                } : void 0
            }), re.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function(e) {
                        return re.globalEval(e), e
                    }
                }
            }), re.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), re.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var t, n;
                    return {
                        send: function(r, o) {
                            t = re("<script>").prop({
                                async: !0,
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                            }), te.head.appendChild(t[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }
            });
            var Pt = [],
                Ft = /(=)\?(?=&|$)|\?\?/;
            re.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Pt.pop() || re.expando + "_" + gt++;
                    return this[e] = !0, e
                }
            }), re.ajaxPrefilter("json jsonp", function(t, n, r) {
                var o, i, a, s = t.jsonp !== !1 && (Ft.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ft.test(t.data) && "data");
                return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ft, "$1" + o) : t.jsonp !== !1 && (t.url += (ft.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                    return a || re.error(o + " was not called"), a[0]
                }, t.dataTypes[0] = "json", i = e[o], e[o] = function() {
                    a = arguments
                }, r.always(function() {
                    e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, Pt.push(o)), a && re.isFunction(i) && i(a[0]), a = i = void 0
                }), "script") : void 0
            }), re.parseHTML = function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || te;
                var r = ue.exec(e),
                    o = !n && [];
                return r ? [t.createElement(r[1])] : (r = re.buildFragment([e], t, o), o && o.length && re(o).remove(), re.merge([], r.childNodes))
            };
            var qt = re.fn.load;
            re.fn.load = function(e, t, n) {
                if ("string" != typeof e && qt) return qt.apply(this, arguments);
                var r, o, i, a = this,
                    s = e.indexOf(" ");
                return s >= 0 && (r = re.trim(e.slice(s)), e = e.slice(0, s)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && re.ajax({
                    url: e,
                    type: o,
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    i = arguments, a.html(r ? re("<div>").append(re.parseHTML(e)).find(r) : e)
                }).complete(n && function(e, t) {
                    a.each(n, i || [e.responseText, t, e])
                }), this
            }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                re.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), re.expr.filters.animated = function(e) {
                return re.grep(re.timers, function(t) {
                    return e === t.elem
                }).length
            };
            var Ht = e.document.documentElement;
            re.offset = {
                setOffset: function(e, t, n) {
                    var r, o, i, a, s, c, l, u = re.css(e, "position"),
                        d = re(e),
                        p = {};
                    "static" === u && (e.style.position = "relative"), s = d.offset(), i = re.css(e, "top"), c = re.css(e, "left"), l = ("absolute" === u || "fixed" === u) && (i + c).indexOf("auto") > -1, l ? (r = d.position(), a = r.top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(c) || 0), re.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : d.css(p)
                }
            }, re.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                        re.offset.setOffset(this, e, t)
                    });
                    var t, n, r = this[0],
                        o = {
                            top: 0,
                            left: 0
                        },
                        i = r && r.ownerDocument;
                    return i ? (t = i.documentElement, re.contains(t, r) ? (typeof r.getBoundingClientRect !== Ie && (o = r.getBoundingClientRect()), n = G(i), {
                        top: o.top + n.pageYOffset - t.clientTop,
                        left: o.left + n.pageXOffset - t.clientLeft
                    }) : o) : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n = this[0],
                            r = {
                                top: 0,
                                left: 0
                            };
                        return "fixed" === re.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (r = e.offset()), r.top += re.css(e[0], "borderTopWidth", !0), r.left += re.css(e[0], "borderLeftWidth", !0)), {
                            top: t.top - r.top - re.css(n, "marginTop", !0),
                            left: t.left - r.left - re.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent || Ht; e && !re.nodeName(e, "html") && "static" === re.css(e, "position");) e = e.offsetParent;
                        return e || Ht
                    })
                }
            }), re.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(t, n) {
                var r = "pageYOffset" === n;
                re.fn[t] = function(o) {
                    return be(this, function(t, o, i) {
                        var a = G(t);
                        return void 0 === i ? a ? a[n] : t[o] : void(a ? a.scrollTo(r ? e.pageXOffset : i, r ? i : e.pageYOffset) : t[o] = i)
                    }, t, o, arguments.length, null)
                }
            }), re.each(["top", "left"], function(e, t) {
                re.cssHooks[t] = N(ee.pixelPosition, function(e, n) {
                    return n ? (n = L(e, t), Ue.test(n) ? re(e).position()[t] + "px" : n) : void 0
                })
            }), re.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                re.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, r) {
                    re.fn[r] = function(r, o) {
                        var i = arguments.length && (n || "boolean" != typeof r),
                            a = n || (r === !0 || o === !0 ? "margin" : "border");
                        return be(this, function(t, n, r) {
                            var o;
                            return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? re.css(t, n, a) : re.style(t, n, r, a)
                        }, t, i ? r : void 0, i, null)
                    }
                })
            }), re.fn.size = function() {
                return this.length
            }, re.fn.andSelf = re.fn.addBack, n(139) && (o = [], !(a = function() {
                return re
            }.apply(t, o)));
            var Mt = e.jQuery,
                Jt = e.$;
            return re.noConflict = function(t) {
                return e.$ === re && (e.$ = Jt), t && e.jQuery === re && (e.jQuery = Mt), re
            }, typeof r === Ie && (e.jQuery = e.$ = re), re
        }), ! function(n) {
            o = [a], r = n, i = "function" == typeof r ? r.apply(t, o) : r, !(void 0 !== i && (e.exports = i))
        }(function(e) {
            function t(e) {
                return s.raw ? e : encodeURIComponent(e)
            }

            function n(e) {
                return s.raw ? e : decodeURIComponent(e)
            }

            function r(e) {
                return t(s.json ? JSON.stringify(e) : String(e))
            }

            function o(e) {
                0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                try {
                    return e = decodeURIComponent(e.replace(a, " ")), s.json ? JSON.parse(e) : e
                } catch (e) {}
            }

            function i(t, n) {
                var r = s.raw ? t : o(t);
                return e.isFunction(n) ? n(r) : r
            }
            var a = /\+/g,
                s = e.cookie = function(o, a, c) {
                    if (void 0 !== a && !e.isFunction(a)) {
                        if (c = e.extend({}, s.defaults, c), "number" == typeof c.expires) {
                            var l = c.expires,
                                u = c.expires = new Date;
                            u.setTime(+u + 864e5 * l)
                        }
                        return document.cookie = [t(o), "=", r(a), c.expires ? "; expires=" + c.expires.toUTCString() : "", c.path ? "; path=" + c.path : "", c.domain ? "; domain=" + c.domain : "", c.secure ? "; secure" : ""].join("")
                    }
                    for (var d = o ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], g = 0, f = p.length; f > g; g++) {
                        var h = p[g].split("="),
                            m = n(h.shift()),
                            v = h.join("=");
                        if (o && o === m) {
                            d = i(v, a);
                            break
                        }
                        o || void 0 === (v = i(v)) || (d[m] = v)
                    }
                    return d
                };
            s.defaults = {}, e.removeCookie = function(t, n) {
                return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, n, {
                    expires: -1
                })), !e.cookie(t))
            }
        })
    },
    139: function(e, t) {
        (function(t) {
            e.exports = t
        }).call(t, {})
    },
    475: function(e, t) {
        e.exports = {
            Lb_dm3xx_sky_LB2_ENC: {
                id: "LB2_ENC",
                ico: "LB2_ENC",
                redirect: "lb2",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["lb2", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-lb2.png",
                intupgrade: !1
            },
            Lb_mcu_sky_hg300: {
                id: "hg300",
                ico: "hg300",
                redirect: "hg300",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["hg300", "#/upgrade"],
                checkLogin: !0,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Lb_dm3xx_sky_Battery_charge_hub: {
                id: "battery_charge_hub",
                ico: "battery_charge_hub",
                redirect: "battery_charge_hub",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["battery_charge_hub", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            D68013_ground_P3_2014_RX: {
                ico: "COMM_DEV_REMOTE_RADIO",
                redirect: "usb",
                hash: "#/livevideo",
                upgradable: !1,
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Dm368_ground_LB2_DEC: {
                ico: "COMM_DEV_REMOTE_RADIO",
                redirect: "usb",
                hash: "#/livevideo",
                upgradable: !1,
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            RemoteController_RC: {
                id: "RC",
                ico: "RC",
                redirect: "rc",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["rc", "#/upgrade"],
                checkLogin: !0,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Ofdm_ground_WM610_A7_1549: {
                id: "RC",
                ico: "RC",
                redirect: "rc",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["rc", "#/upgrade"],
                checkLogin: !0,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Ofdm_ground_WM610_A7_1765: {
                id: "RC",
                ico: "RC",
                redirect: "rc",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["rc", "#/upgrade"],
                checkLogin: !0,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Controller_ai900v2: {
                id: "ai900v2",
                ico: "a3",
                redirect: "a3",
                hash: "#/dashboard",
                upgradable: !1,
                upgradeLink: ["a3", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-a3.png",
                intupgrade: !0,
                no_sdk_hw_port: !0
            },
            Controller_ai900v3: {
                id: "ai900v2",
                ico: "a3",
                redirect: "a3",
                hash: "#/dashboard",
                upgradable: !1,
                upgradeLink: ["a3", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-a3.png",
                intupgrade: !0,
                no_sdk_hw_port: !0
            },
            Controller_ai900v3_agr: {
                id: "ai900v3_agr",
                ico: "a3",
                redirect: "a3_agr",
                hash: "#/dashboard",
                upgradable: !1,
                upgradeLink: ["a3_agr", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-a3.png",
                intupgrade: !0,
                no_sdk_hw_port: !0
            },
            Controller_am603_agr: {
                id: "am603_agr",
                ico: "n3",
                redirect: "n3_agr",
                hash: "#/dashboard",
                upgradable: !1,
                upgradeLink: ["n3_agr", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-n3.png",
                intupgrade: !0,
                no_sdk_hw_port: !0
            },
            Controller_ag400v3: {
                id: "ag400v3",
                ico: "mg",
                redirect: "mg",
                hash: "#/dashboard",
                upgradable: !1,
                upgradeLink: ["mg", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-mg.png",
                intupgrade: !0,
                no_sdk_hw_port: !0
            },
            Controller_am603: {
                id: "am603",
                ico: "n3",
                redirect: "n3",
                hash: "#/dashboard",
                upgradable: !1,
                upgradeLink: ["n3", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-n3.png",
                intupgrade: !0,
                no_sdk_hw_port: !0
            },
            GND_wm22x_rc: {
                id: "GND",
                ico: "littlepilot220",
                redirect: "GND",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["GND", "#/upgrade"],
                checkLogin: !0,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            GLASS_wm22x_gl: {
                id: "GLASS",
                ico: "glass",
                redirect: "GLASS",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["GLASS", "#/upgrade"],
                checkLogin: !0,
                navlogo: "intlogo-glass.png",
                intupgrade: !0
            },
            GND_wm220_rc: {
                id: "GND",
                ico: "littlepilot220",
                redirect: "GND",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["GND", "#/upgrade"],
                checkLogin: !0,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            GND_wm222_rc: {
                id: "GND",
                ico: "littlepilot220",
                redirect: "GND",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["GND", "#/upgrade"],
                checkLogin: !0,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            GLASS_wm220_gl: {
                id: "GLASS",
                ico: "glass",
                redirect: "GLASS",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["GLASS", "#/upgrade"],
                checkLogin: !0,
                navlogo: "intlogo-glass.png",
                intupgrade: !0
            },
            LittlePilot_wm220: {
                id: "wm220",
                ico: "littlepilot220",
                redirect: "littlepilot",
                upgradeLink: ["littlepilot", "#/upgrade"],
                hash: "#/upgrade",
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            GND_wm221_rc: {
                id: "GND",
                ico: "littlepilot221",
                redirect: "GND",
                upgradeLink: ["GND", "#/upgrade"],
                hash: "#/upgrade",
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            GLASS_wm221_gl: {
                id: "GLASS",
                ico: "glass",
                redirect: "littlepilot",
                upgradeLink: ["littlepilot", "#/upgrade"],
                hash: "#/upgrade",
                checkLogin: !1,
                navlogo: "intlogo-glass.png",
                intupgrade: !0
            },
            LittlePilot_wm221: {
                id: "wm220",
                ico: "littlepilot221",
                redirect: "littlepilot",
                upgradeLink: ["littlepilot", "#/upgrade"],
                hash: "#/upgrade",
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            LittlePilot_wm222: {
                id: "wm220",
                ico: "littlepilot221",
                redirect: "littlepilot",
                upgradeLink: ["littlepilot", "#/upgrade"],
                hash: "#/upgrade",
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Aircraft_wm230: {
                id: "wm230",
                ico: "littlepilot220",
                redirect: "littlepilot",
                upgradeLink: ["littlepilot", "#/upgrade"],
                hash: "#/upgrade",
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Aircraft_wm240: {
                id: "wm240",
                ico: "littlepilot220",
                redirect: "littlepilot",
                upgradeLink: ["littlepilot", "#/upgrade"],
                hash: "#/upgrade",
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            MM_wm100a: {
                ico: "wm100",
                id: "wm100",
                redirect: "wm100",
                hash: "#/upgrade",
                upgradeLink: ["wm100", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-wm100.png",
                intupgrade: !0
            },
            MM_wm100b: {
                ico: "wm100",
                id: "wm100",
                redirect: "wm100",
                hash: "#/upgrade",
                upgradeLink: ["wm100", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-wm100.png",
                intupgrade: !0
            },
            Wifi_ground_9342: {
                ico: "wm100",
                id: "wm100-rc",
                redirect: "wm100-rc",
                hash: "#/upgrade",
                upgradeLink: ["wm100-rc", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-wm100.png",
                intupgrade: !0
            },
            P4P_wm331: {
                id: "wm331",
                ico: "p4p",
                redirect: "p4",
                hash: "#/upgrade",
                upgradeLink: ["p4", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-p4p.png",
                intupgrade: !0
            },
            P4A_wm332: {
                id: "wm332",
                ico: "p4a",
                redirect: "p4",
                hash: "#/upgrade",
                upgradeLink: ["p4", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-p4a.png",
                intupgrade: !0
            },
            Phantom4_wm330: {
                id: "wm330",
                ico: "p4",
                redirect: "p4",
                hash: "#/upgrade",
                upgradeLink: ["p4", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-p4.png",
                intupgrade: !0
            },
            Controller_wm610: {
                ico: "inspire",
                redirect: "a3",
                hash: "#/dashboard",
                upgradable: !0,
                upgradeLink: ["index", "#/frame-upgrade/upgrade-controller"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Controller_wm620: {
                ico: "inspire",
                redirect: "a3",
                hash: "#/dashboard",
                upgradable: !0,
                upgradeLink: ["index", "#/frame-upgrade/upgrade-controller"],
                checkLogin: !1,
                navlogo: "intlogo-in2.png",
                intupgrade: !0
            },
            M210_pm410: {
                id: "m210",
                ico: "m210",
                redirect: "m210",
                hash: "#/upgrade",
                upgradeLink: ["m210", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Aircraft_pm930: {
                id: "pm930",
                ico: "pm930",
                redirect: "pm930",
                hash: "#/upgrade",
                upgradeLink: ["pm930", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            INSPIRE2_wm620: {
                id: "INSPIRE2",
                ico: "inspire",
                redirect: "inspire2",
                hash: "#/upgrade",
                upgradeLink: ["inspire2", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-in2.png",
                intupgrade: !0
            },
            INSPIRE2_SSD: {
                id: "ssd",
                ico: "",
                redirect: "ssd",
                hash: "#/upgrade",
                upgradeLink: ["ssd", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Controller_tp1406: {
                id: "tp1406",
                ico: "",
                redirect: "m100",
                hash: "",
                upgradable: !1,
                upgradeLink: ["m100", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-m100.png",
                intupgrade: !0,
                no_sdk_hw_port: !0
            },
            Controller_pm820: {
                id: "pm820",
                ico: "m600",
                redirect: "m600",
                hash: "",
                upgradable: !1,
                upgradeLink: ["m600", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-m600.png",
                intupgrade: !0
            },
            Controller_pm820v3: {
                id: "pm820",
                ico: "m600",
                redirect: "m600",
                hash: "",
                upgradable: !1,
                upgradeLink: ["m600", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-m600.png",
                intupgrade: !0
            },
            Controller_pm820v3pro: {
                id: "pm820pro",
                ico: "m600pro",
                redirect: "m600",
                hash: "",
                upgradable: !1,
                upgradeLink: ["m600", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-m600pro.png",
                intupgrade: !0
            },
            Controller_USBSTOR: {
                ico: "sdcard",
                redirect: "sdcard",
                hash: "",
                upgradable: !1,
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !1
            },
            Rtk_cvt_zd900: {
                id: "zd900",
                ico: "zd900",
                redirect: "zd900",
                hash: "",
                upgradable: !1,
                upgradeLink: ["zd900", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-rtk.png",
                intupgrade: !0
            },
            Sig_cvt_rd300: {
                id: "rd300",
                ico: "rd300",
                redirect: "rd300",
                hash: "",
                upgradable: !1,
                upgradeLink: ["rd300", "#/upgrade"],
                checkLogin: !1,
                navlogo: "",
                intupgrade: !0
            },
            iOSD_iOSD: {
                id: "iOSD",
                ico: "iOSD",
                redirect: "iOSD",
                hash: "#/sdcard",
                upgradable: !1,
                upgradeLink: ["iOSD", "#/sdcard"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !1
            },
            Remote_radio_wm331_watch: {
                id: "watch",
                ico: "",
                redirect: "watch",
                hash: "#upgrade",
                upgradable: !0,
                upgradeLink: ["watch", "#/upgrade"],
                checkLogin: !0,
                navlogo: "",
                intupgrade: !0
            },
            remote_radio: {
                ico: "remote_radio",
                redirect: "remoteradio",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["remoteradio", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            serial: {
                id: "hil",
                ico: "hil",
                redirect: "hil",
                hash: "#/settings",
                upgradable: !1,
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !1,
                newindow: !0
            },
            can: {
                id: "hil",
                ico: "hil",
                redirect: "hil",
                hash: "#/settings",
                upgradable: !1,
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !1,
                newindow: !0
            },
            esc: {
                id: "ZM300_ESC_V1",
                ico: "esc",
                redirect: "esc",
                hash: "#/settings-15",
                upgradable: !0,
                upgradeLink: ["esc", "#/upgrade-controller"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Esc_EM100_ESC_V1: {
                id: "EM100_ESC_V1",
                ico: "esc-snail",
                redirect: "esc_em100",
                hash: "#/settings",
                upgradable: !0,
                upgradeLink: ["esc_em100", "#/upgrade-controller"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Esc_EM4000_ESC: {
                id: "EM4000_ESC",
                ico: "esc",
                redirect: "esc_em4000",
                hash: "#/upgrade-controller",
                upgradable: !0,
                upgradeLink: ["esc_em4000", "#/upgrade-controller"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Esc_EM105_ESC_V1: {
                id: "Esc_EM105_ESC_V1",
                ico: "esc",
                redirect: "esc_em105",
                hash: "#/upgrade-controller",
                upgradable: !0,
                upgradeLink: ["esc_em105", "#/upgrade-controller"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            controller: {
                ico: "",
                redirect: "a3",
                hash: "#/dashboard",
                upgradable: !1,
                upgradeLink: ["a3", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            imu: {
                ico: "homeimu",
                redirect: "imu",
                hash: "#/factory",
                upgradable: !1,
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !1
            },
            Center_board_hg910: {
                id: "hg910",
                ico: "hg910",
                redirect: "hg910",
                hash: "#/upgrade",
                upgradable: !1,
                checkLogin: !1,
                navlogo: "intlogo-hg910.png",
                intupgrade: !0
            },
            Remote_radio_RC: {
                id: "hg910-rc",
                ico: "hg910",
                redirect: "hg910-rc",
                hash: "#/upgrade",
                upgradable: !1,
                checkLogin: !1,
                navlogo: "intlogo-hg910.png",
                intupgrade: !0
            },
            Ofdm_ground_WM331_A7_LPC1: {
                ico: "p4p",
                redirect: "p4p-rc",
                hash: "#/basicsetup",
                upgradable: !1,
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            ROBMASTER_rm172: {
                id: "rm172",
                ico: "",
                redirect: "rm172",
                upgradeLink: ["rm172", "#/upgrade"],
                hash: "#/upgrade",
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            GND_rm172_rc: {
                id: "rm172_rc",
                ico: "",
                redirect: "rm172-rc",
                upgradeLink: ["rm172-rc", "#/upgrade"],
                hash: "#/upgrade",
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Ofdm_ground_RC_IDA_AG_1549: {
                id: "datalink3_rc",
                ico: "datalink3_rc",
                redirect: "datalink3_rc",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["datalink3_rc", "#/upgrade"],
                checkLogin: !0,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Lb_mcu_sky_AIR_ROUTING_1549: {
                id: "datalink3_receiver",
                ico: "datalink3_receiver",
                redirect: "datalink3_receiver",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["datalink3_receiver", "#/upgrade"],
                checkLogin: !0,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Last_ADSB_MCU: {
                id: "ads-b",
                ico: "ads-b",
                redirect: "ads-b",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["ads-b", "#/upgrade"],
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            "Lb_mcu_sky_SWR-60GT-1549-CHN": {
                id: "swr_60g",
                ico: "swr_60g",
                redirect: "swr_60g",
                hash: "#/upgrade",
                upgradable: !0,
                upgradeLink: ["swr_60g", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            "Lb_mcu_sky_SWR-60GT-1549-JPN": {
                id: "swr_60g",
                ico: "swr_60g",
                redirect: "swr_60g",
                hash: "#/upgrade",
                upgradable: !0,
                upgradeLink: ["swr_60g", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            "Lb_mcu_sky_SWR-60GR-1549-CHN": {
                id: "swr_60g_recv",
                ico: "swr_60g",
                redirect: "swr_60g_recv",
                hash: "#/upgrade",
                upgradable: !0,
                upgradeLink: ["swr_60g_recv", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            "Lb_mcu_sky_SWR-60GR-1549-JPN": {
                id: "swr_60g_recv",
                ico: "swr_60g",
                redirect: "swr_60g_recv",
                hash: "#/upgrade",
                upgradable: !0,
                upgradeLink: ["swr_60g_recv", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            AGFlight_ag405: {
                id: "ag405",
                ico: "ag405",
                redirect: "ag405",
                hash: "#/upgrade",
                upgradeLink: ["ag405", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-ag405.png",
                intupgrade: !0
            },
            AGFlight_ag410: {
                id: "ag410",
                ico: "ag410",
                redirect: "ag410",
                hash: "#/upgrade",
                upgradeLink: ["ag410", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-ag410.png",
                intupgrade: !0
            },
            Center_board_bsp_device: {
                ico: "bsp-device",
                redirect: "bsp-device",
                hash: "#/parameters",
                upgradable: !1,
                upgradeLink: ["bsp-device", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0,
                no_sdk_hw_port: !0
            },
            Sig_cvt_SP_CB: {
                ico: "bsp-device",
                redirect: "bsp-device",
                hash: "#/parameters",
                upgradable: !1,
                upgradeLink: ["bsp-device", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0,
                no_sdk_hw_port: !0
            },
            Camera_OM_HG200: {
                id: "hg200",
                ico: "hg200",
                redirect: "hg200",
                hash: "#/upgrade",
                upgradable: !1,
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Pmu_RTK_300: {
                id: "rtk300",
                ico: "zd900",
                redirect: "rtk300",
                hash: "#/upgrade",
                upgradeLink: ["rtk300", "#/upgrade"],
                upgradable: !1,
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Pmu_RTK_200: {
                id: "rtk200",
                ico: "zd900",
                redirect: "rtk200",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["rtk200", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Controller_am603_fw: {
                id: "ai900v2",
                ico: "a3",
                redirect: "am603_fw",
                hash: "#/dashboard",
                upgradable: !1,
                upgradeLink: ["am603_fw", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-a3.png",
                intupgrade: !0,
                no_sdk_hw_port: !0
            },
            NetPlatform_DMSerial: {
                id: "dm-serial-net",
                ico: "",
                redirect: "dm-serial",
                hash: "",
                upgradable: !1,
                upgradeLink: ["dm-serial", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Dm368_ground_TP1703_CORE: {
                id: "dm-serial",
                ico: "",
                redirect: "dm-serial",
                hash: "",
                upgradable: !1,
                upgradeLink: ["dm-serial", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Rtk_cvt_ag405rtk: {
                id: "ag405rtk",
                ico: "zd900",
                redirect: "ag405rtk",
                hash: "",
                upgradable: !1,
                upgradeLink: ["ag405rtk", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo-mg1s-rtk.png",
                intupgrade: !0
            },
            Lb_mcu_sky_RTK_AGENT_1549: {
                id: "datalink3_receiver",
                ico: "datalink3_receiver",
                redirect: "datalink3_receiver",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["datalink3_receiver", "#/upgrade"],
                checkLogin: !0,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            "Remote_radio_DATALINK-PRO-AG": {
                ico: "remote_radio",
                redirect: "remoteradio",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["remoteradio", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Ofdm_ground_ag410_3288_rc: {
                id: "ag410-rc",
                redirect: "ag410-rc",
                hash: "#/upgrade",
                upgradeLink: ["ag410-rc", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            LittlePilot_wm220_b: {
                id: "wm220",
                ico: "littlepilot220",
                redirect: "littlepilot",
                upgradeLink: ["littlepilot", "#/upgrade"],
                hash: "#/upgrade",
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Xu_battery_station: {
                id: "battery_charge_hub",
                ico: "battery_charge_hub",
                redirect: "battery_charge_hub",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["battery_charge_hub", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            GLASS_zv811_gl: {
                id: "GLASS",
                ico: "glass",
                redirect: "GLASS",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["GLASS", "#/upgrade"],
                checkLogin: !0,
                navlogo: "intlogo-glass.png",
                intupgrade: !0
            },
            ZvGlass_zv811: {
                id: "zv811",
                ico: "zv811",
                redirect: "zv811",
                hash: "#/upgrade",
                upgradable: !1,
                upgradeLink: ["zv811", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            Remote_radio_WM230_407: {
                ico: "wm230",
                id: "wm230-rc",
                redirect: "wm230-rc",
                hash: "#/upgrade",
                upgradeLink: ["wm230-rc", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            GND_ag410_bs: {
                id: "ag410-bs",
                redirect: "ag410-bs",
                hash: "#/upgrade",
                upgradeLink: ["ag410-bs", "#/upgrade"],
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            },
            default: {
                ico: "",
                redirect: "",
                hash: "",
                upgradable: !1,
                checkLogin: !1,
                navlogo: "intlogo.png",
                intupgrade: !0
            }
        }
    },
    1400: function(e, t, n) {
        var r = n(133),
            o = n(9),
            i = {};
        i.report = function() {
            var e = {},
                t = {};
            return e.deviceTypes = n(475), t.demo = function() {
                var e = [{
                        type: "test",
                        eventvalue: "2"
                    }],
                    t = utils.generate_signature2(JSON.stringify(e)),
                    n = {
                        appid: 551781,
                        sign: t
                    };
                r.ajax({
                    url: "http://statistical-report.djiservice.org/api/report/web",
                    type: "POST",
                    contentType: "application/json",
                    dataType: "JSON",
                    headers: n,
                    data: JSON.stringify(e),
                    success: function(e, t, n) {
                        console.debug("report success", e)
                    },
                    error: function(e, t, n) {
                        console.debug("report error")
                    }
                })
            }, t.report_backup_recover = function(t, n, o) {
                n ? n instanceof Function && (o = n, n = {}) : (o = function() {}, n = {}), r.extend(t, {
                    type: "ass_backup_recover"
                }), e.report([t], n, o)
            }, t.report_device_param = function(t, n, o) {
                n ? n instanceof Function && (o = n, n = {}) : (o = function() {}, n = {}), t.info_id = t.info_id + "", t.info_val = t.info_val + "", r.extend(t, {
                    type: "ass_common_device_param"
                }), e.report([t], n, o)
            }, t.report_user_opt = function(t, n, o) {
                n ? n instanceof Function && (o = n, n = {}) : (o = function() {}, n = {}), "string" == typeof t ? t = {
                    type: "ass_common_user_opt",
                    opt_id: t
                } : r.extend(t, {
                    type: "ass_common_user_opt"
                }), e.report([t], n, o)
            }, e.get_comm_data = function(t, n) {
                var i = t.device || o.getActiveDevice() || {},
                    a = e.getConfig(i) || {},
                    s = o.get_system_info() || {},
                    c = {
                        aircraft_type: a.id || "",
                        product_type: i.PRODUCT_TYPE || "",
                        device_type: i.DEVICE_TYPE || "",
                        firmware_version: i.VERSION || "",
                        assistant_version: o.get_ass_version() || "",
                        os_type: s.os_type || "",
                        os_version: s.os_version || "",
                        controller_version: "",
                        lang: o.getLang(),
                        user_name: o.getEmail() || "",
                        sn: "",
                        debug: utils.getDebug()
                    };
                "hg910" == a.id ? e.get_data_ronin2(i, function(e) {
                    n(r.extend(c, e))
                }) : e.get_data(i, function(e) {
                    n(r.extend(c, e))
                })
            }, e.get_data = function(e, t) {
                var n = ws.controller,
                    r = function(e) {
                        var t = {
                                sn: "",
                                controller_version: ""
                            },
                            r = 2;
                        n.getInfo({
                            onSuccess: function(n) {
                                t.sn = n.SN || "", --r || e(t), console.log("getInfo successfully!")
                            },
                            onFailure: function(n) {
                                --r || e(t), console.log("getInfo failure!")
                            },
                            onTimeout: function(n) {
                                --r || e(t), console.log("getInfo timeout!")
                            }
                        }), n.getControllerVer({
                            onSuccess: function(n) {
                                t.controller_version = n.APP_VER || "", --r || e(t), console.log("getControllerVer successfully!")
                            },
                            onFailure: function(n) {
                                --r || e(t), console.log("getControllerVer failure!")
                            },
                            onTimeout: function(n) {
                                --r || e(t), console.log("getControllerVer timeout!")
                            }
                        })
                    };
                if (0 == n.readyState) e.FILE ? (n.onopen = function() {
                    setTimeout(function() {
                        var o = n.readyState;
                        if (1 == o) r(function(e) {
                            t(e)
                        });
                        else {
                            var i = {
                                sn: e.HARDWARE_ID || "",
                                controller_version: ""
                            };
                            t(i)
                        }
                    }, 1e3)
                }, n.init({
                    activeDevice: e
                })) : t();
                else if (1 == n.readyState) r(function(e) {
                    t(e)
                });
                else {
                    var o = {
                        sn: e.HARDWARE_ID || "",
                        controller_version: ""
                    };
                    t(o)
                }
            }, e.get_data_ronin2 = function(e, t) {
                var n = ws.ronin2,
                    r = function(e) {
                        n.getInfo({
                            onSuccess: function(t) {
                                e({
                                    sn: t.SN || ""
                                }), console.log("getInfo successfully!")
                            },
                            onFailure: function(t) {
                                e({
                                    sn: ""
                                }), console.log("getInfo failure!")
                            },
                            onTimeout: function(t) {
                                e({
                                    sn: ""
                                }), console.log("getInfo timeout!")
                            }
                        })
                    };
                n.app ? r(function(e) {
                    t(e)
                }) : e.FILE ? n.init({
                    activeDevice: e,
                    onopen: function() {
                        r(function(e) {
                            t(e)
                        })
                    }
                }) : t()
            }, e.report = function(t, n, o) {
                o = o || function() {};
                var i = 3,
                    a = function() {
                        var e = utils.generate_signature2(JSON.stringify(t)),
                            n = {
                                appid: 551781,
                                sign: e
                            };
                        r.ajax({
                            url: "http://statistical-report.djiservice.org/api/report/web",
                            type: "POST",
                            contentType: "application/json",
                            dataType: "JSON",
                            headers: n,
                            data: JSON.stringify(t),
                            success: function(e, n, r) {
                                o(null), console.debug("report success", t)
                            },
                            error: function(e, n, r) {
                                --i && a(), 0 == i && o("report error", n), console.debug("report error", t)
                            }
                        })
                    };
                e.get_comm_data(n, function(e) {
                    for (var n = 0, o = t.length; n < o; n++) r.extend(t[n], e);
                    a()
                })
            }, e.getConfig = function(e) {
                var t = this,
                    n = "",
                    r = e.PRODUCT_TYPE + "_" + e.DEVICE_TYPE;
                return n = t.deviceTypes[r] ? t.deviceTypes[r] : t.deviceTypes[e.PRODUCT_TYPE.toLowerCase()] ? t.deviceTypes[e.PRODUCT_TYPE.toLowerCase()] : t.deviceTypes.default
            }, t
        }(), e.exports = i
    }
});