/**
 * Leaflet vector features drag functionality
 * @author Alexander Milevski <info@w8r.name>
 * @preserve
 */
L.Path.include({
    _transform: function(t) {
        if (this._renderer) {
            if (t) {
                this._renderer.transformPath(this, t)
            } else {
                this._renderer._resetTransformPath(this);
                this._update()
            }
        }
        return this
    },
    _onMouseClick: function(t) {
        if (this.dragging && this.dragging.moved() || this._map.dragging && this._map.dragging.moved()) {
            return
        }
        this._fireMouseEvent(t)
    }
});
L.Handler.PathDrag = L.Handler.extend({
    statics: {
        DRAGGING_CLS: "leaflet-path-draggable"
    },
    initialize: function(t) {
        this._path = t;
        this._matrix = null;
        this._startPoint = null;
        this._dragStartPoint = null;
        this._mapDraggingWasEnabled = false
    },
    addHooks: function() {
        this._path.on("mousedown", this._onDragStart, this);
        this._path.options.className = this._path.options.className ? this._path.options.className + " " + L.Handler.PathDrag.DRAGGING_CLS : L.Handler.PathDrag.DRAGGING_CLS;
        if (this._path._path) {
            L.DomUtil.addClass(this._path._path, L.Handler.PathDrag.DRAGGING_CLS)
        }
    },
    removeHooks: function() {
        this._path.off("mousedown", this._onDragStart, this);
        this._path.options.className = this._path.options.className.replace(new RegExp("\\s+" + L.Handler.PathDrag.DRAGGING_CLS), "");
        if (this._path._path) {
            L.DomUtil.removeClass(this._path._path, L.Handler.PathDrag.DRAGGING_CLS)
        }
    },
    moved: function() {
        return this._path._dragMoved
    },
    _onDragStart: function(t) {
        var a = t.originalEvent._simulated ? "touchstart" : t.originalEvent.type;
        this._mapDraggingWasEnabled = false;
        this._startPoint = t.containerPoint.clone();
        this._dragStartPoint = t.containerPoint.clone();
        this._matrix = [1, 0, 0, 1, 0, 0];
        L.DomEvent.stop(t.originalEvent);
        L.DomUtil.addClass(this._path._renderer._container, "leaflet-interactive");
        L.DomEvent.on(document, L.Draggable.MOVE[a], this._onDrag, this).on(document, L.Draggable.END[a], this._onDragEnd, this);
        if (this._path._map.dragging.enabled()) {
            this._path._map.dragging._draggable._onUp(t);
            this._path._map.dragging.disable();
            this._mapDraggingWasEnabled = true
        }
        this._path._dragMoved = false;
        if (this._path._popup) {
            this._path._popup._close()
        }
        this._replaceCoordGetters(t)
    },
    _onDrag: function(t) {
        L.DomEvent.stop(t);
        var a = t.touches && t.touches.length >= 1 ? t.touches[0] : t;
        var i = this._path._map.mouseEventToContainerPoint(a);
        var n = i.x;
        var e = i.y;
        var r = n - this._startPoint.x;
        var s = e - this._startPoint.y;
        if (!this._path._dragMoved && (r || s)) {
            this._path._dragMoved = true;
            this._path.fire("dragstart", t);
            this._path.bringToFront()
        }
        this._matrix[4] += r;
        this._matrix[5] += s;
        this._startPoint.x = n;
        this._startPoint.y = e;
        this._path.fire("predrag", t);
        this._path._transform(this._matrix);
        this._path.fire("drag", t)
    },
    _onDragEnd: function(t) {
        L.DomEvent.stop(t);
        L.DomEvent._fakeStop({
            type: "click"
        });
        var a = this._path._map.mouseEventToContainerPoint(t);
        if (this.moved()) {
            this._transformPoints(this._matrix);
            this._path._updatePath();
            this._path._project();
            this._path._transform(null)
        }
        L.DomEvent.off(document, "mousemove touchmove", this._onDrag, this).off(document, "mouseup touchend", this._onDragEnd, this);
        this._restoreCoordGetters();
        this._path.fire("dragend", {
            distance: Math.sqrt(L.LineUtil._sqDist(this._dragStartPoint, a))
        });
        this._matrix = null;
        this._startPoint = null;
        this._dragStartPoint = null;
        if (this._mapDraggingWasEnabled) {
            this._path._map.dragging.enable()
        }
    },
    _transformPoints: function(t, a) {
        var i = this._path;
        var n, e, r;
        var s = L.point(t[4], t[5]);
        var o = i._map.options.crs;
        var h = o.transformation;
        var _ = o.scale(i._map.getZoom());
        var g = o.projection;
        var d = h.untransform(s, _).subtract(h.untransform(L.point(0, 0), _));
        var p = !a;
        i._bounds = new L.LatLngBounds;
        if (i._point) {
            a = g.unproject(g.project(i._latlng)._add(d));
            if (p) {
                i._latlng = a;
                i._point._add(s)
            }
        } else if (i._rings || i._parts) {
            var l = i._rings || i._parts;
            var f = i._latlngs;
            a = a || f;
            if (!L.Util.isArray(f[0])) {
                f = [f];
                a = [a]
            }
            for (n = 0, e = l.length; n < e; n++) {
                a[n] = a[n] || [];
                for (var u = 0, m = l[n].length; u < m; u++) {
                    r = f[n][u];
                    a[n][u] = g.unproject(g.project(r)._add(d));
                    if (p) {
                        i._bounds.extend(f[n][u]);
                        l[n][u]._add(s)
                    }
                }
            }
        }
        return a
    },
    _replaceCoordGetters: function() {
        if (this._path.getLatLng) {
            this._path.getLatLng_ = this._path.getLatLng;
            this._path.getLatLng = L.Util.bind(function() {
                return this.dragging._transformPoints(this.dragging._matrix, {})
            }, this._path)
        } else if (this._path.getLatLngs) {
            this._path.getLatLngs_ = this._path.getLatLngs;
            this._path.getLatLngs = L.Util.bind(function() {
                return this.dragging._transformPoints(this.dragging._matrix, [])
            }, this._path)
        }
    },
    _restoreCoordGetters: function() {
        if (this._path.getLatLng_) {
            this._path.getLatLng = this._path.getLatLng_;
            delete this._path.getLatLng_
        } else if (this._path.getLatLngs_) {
            this._path.getLatLngs = this._path.getLatLngs_;
            delete this._path.getLatLngs_
        }
    }
});
L.Handler.PathDrag.makeDraggable = function(t) {
    t.dragging = new L.Handler.PathDrag(t);
    return t
};
L.Path.prototype.makeDraggable = function() {
    return L.Handler.PathDrag.makeDraggable(this)
};
L.Path.addInitHook(function() {
    if (this.options.draggable) {
        this.options.interactive = true;
        if (this.dragging) {
            this.dragging.enable()
        } else {
            L.Handler.PathDrag.makeDraggable(this);
            this.dragging.enable()
        }
    } else if (this.dragging) {
        this.dragging.disable()
    }
});
L.SVG.include({
    _resetTransformPath: function(t) {
        t._path.setAttributeNS(null, "transform", "")
    },
    transformPath: function(t, a) {
        t._path.setAttributeNS(null, "transform", "matrix(" + a.join(" ") + ")")
    }
});
L.SVG.include(!L.Browser.vml ? {} : {
    _resetTransformPath: function(t) {
        if (t._skew) {
            t._skew.on = false;
            t._path.removeChild(t._skew);
            t._skew = null
        }
    },
    transformPath: function(t, a) {
        var i = t._skew;
        if (!i) {
            i = L.SVG.create("skew");
            t._path.appendChild(i);
            i.style.behavior = "url(#default#VML)";
            t._skew = i
        }
        var n = a[0].toFixed(8) + " " + a[1].toFixed(8) + " " + a[2].toFixed(8) + " " + a[3].toFixed(8) + " 0 0";
        var e = Math.floor(a[4]).toFixed() + ", " + Math.floor(a[5]).toFixed() + "";
        var r = this._path.style;
        var s = parseFloat(r.left);
        var o = parseFloat(r.top);
        var h = parseFloat(r.width);
        var _ = parseFloat(r.height);
        if (isNaN(s)) {
            s = 0
        }
        if (isNaN(o)) {
            o = 0
        }
        if (isNaN(h) || !h) {
            h = 1
        }
        if (isNaN(_) || !_) {
            _ = 1
        }
        var g = (-s / h - .5).toFixed(8) + " " + (-o / _ - .5).toFixed(8);
        i.on = "f";
        i.matrix = n;
        i.origin = g;
        i.offset = e;
        i.on = true
    }
});
L.Util.trueFn = function() {
    return true
};
L.Canvas.include({
    _resetTransformPath: function(t) {
        if (!this._containerCopy) {
            return
        }
        delete this._containerCopy;
        if (t._containsPoint_) {
            t._containsPoint = t._containsPoint_;
            delete t._containsPoint_;
            this._requestRedraw(t);
            this._draw(true)
        }
    },
    transformPath: function(t, a) {
        var i = this._containerCopy;
        var n = this._ctx;
        var e = L.Browser.retina ? 2 : 1;
        var r = this._bounds;
        var s = r.getSize();
        var o = r.min;
        if (!i) {
            i = this._containerCopy = document.createElement("canvas");
            document.body.appendChild(i);
            i.width = e * s.x;
            i.height = e * s.y;
            t._removed = true;
            this._redraw();
            i.getContext("2d").translate(e * r.min.x, e * r.min.y);
            i.getContext("2d").drawImage(this._container, 0, 0);
            this._initPath(t);
            t._containsPoint_ = t._containsPoint;
            t._containsPoint = L.Util.trueFn
        }
        n.save();
        n.clearRect(o.x, o.y, s.x * e, s.y * e);
        n.setTransform(1, 0, 0, 1, 0, 0);
        n.restore();
        n.save();
        n.drawImage(this._containerCopy, 0, 0, s.x, s.y);
        n.transform.apply(n, a);
        var h = this._layers;
        this._layers = {};
        this._initPath(t);
        t._updatePath();
        this._layers = h;
        n.restore()
    }
});