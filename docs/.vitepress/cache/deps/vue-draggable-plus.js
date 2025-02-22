import {
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  isProxy,
  isRef,
  nextTick,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  toRefs,
  unref,
  watch
} from "./chunk-FNEGEEL4.js";
import "./chunk-JVSYCCQQ.js";
import "./chunk-MTI3AIJG.js";

// ../node_modules/.pnpm/vue-draggable-plus@0.6.0_@types+sortablejs@1.15.8/node_modules/vue-draggable-plus/dist/vue-draggable-plus.js
var rn = Object.defineProperty;
var Ne = Object.getOwnPropertySymbols;
var vt = Object.prototype.hasOwnProperty;
var bt = Object.prototype.propertyIsEnumerable;
var mt = (t, e, n) => (e in t ? rn(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : (t[e] = n));
var fe = (t, e) => {
  for (var n in e || (e = {})) vt.call(e, n) && mt(t, n, e[n]);
  if (Ne) for (var n of Ne(e)) bt.call(e, n) && mt(t, n, e[n]);
  return t;
};
var Ve = (t, e) => {
  var n = {};
  for (var o in t) vt.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
  if (t != null && Ne) for (var o of Ne(t)) e.indexOf(o) < 0 && bt.call(t, o) && (n[o] = t[o]);
  return n;
};
var Bt = "[vue-draggable-plus]: ";
function gn(t) {
  console.warn(Bt + t);
}
function mn(t) {
  console.error(Bt + t);
}
function wt(t, e, n) {
  return n >= 0 && n < t.length && t.splice(n, 0, t.splice(e, 1)[0]), t;
}
function vn(t) {
  return t.replace(/-(\w)/g, (e, n) => (n ? n.toUpperCase() : ""));
}
function bn(t) {
  return Object.keys(t).reduce((e, n) => (typeof t[n] != "undefined" && (e[vn(n)] = t[n]), e), {});
}
function Et(t, e) {
  return Array.isArray(t) && t.splice(e, 1), t;
}
function St(t, e, n) {
  return Array.isArray(t) && t.splice(e, 0, n), t;
}
function yn(t) {
  return typeof t == "undefined";
}
function wn(t) {
  return typeof t == "string";
}
function Dt(t, e, n) {
  const o = t.children[n];
  t.insertBefore(e, o);
}
function qe(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function En(t, e = document) {
  var o;
  let n = null;
  return (
    typeof (e == null ? void 0 : e.querySelector) == "function"
      ? (n = (o = e == null ? void 0 : e.querySelector) == null ? void 0 : o.call(e, t))
      : (n = document.querySelector(t)),
    n || gn(`Element not found: ${t}`),
    n
  );
}
function Sn(t, e, n = null) {
  return function (...o) {
    return t.apply(n, o), e.apply(n, o);
  };
}
function Dn(t, e) {
  const n = fe({}, t);
  return (
    Object.keys(e).forEach(o => {
      n[o] ? (n[o] = Sn(t[o], e[o])) : (n[o] = e[o]);
    }),
    n
  );
}
function _n(t) {
  return t instanceof HTMLElement;
}
function _t(t, e) {
  Object.keys(t).forEach(n => {
    e(n, t[n]);
  });
}
function Tn(t) {
  return (
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 && // uppercase letter
    (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97)
  );
}
var Cn = Object.assign;
function Tt(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(t, r).enumerable;
      })),
      n.push.apply(n, o);
  }
  return n;
}
function te(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Tt(Object(n), true).forEach(function (o) {
          On(t, o, n[o]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Tt(Object(n)).forEach(function (o) {
            Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
          });
  }
  return t;
}
function Xe(t) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Xe = function (e) {
          return typeof e;
        })
      : (Xe = function (e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }),
    Xe(t)
  );
}
function On(t, e, n) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        })
      : (t[e] = n),
    t
  );
}
function re() {
  return (
    (re =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    re.apply(this, arguments)
  );
}
function In(t, e) {
  if (t == null) return {};
  var n = {},
    o = Object.keys(t),
    r,
    i;
  for (i = 0; i < o.length; i++) (r = o[i]), !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
function An(t, e) {
  if (t == null) return {};
  var n = In(t, e),
    o,
    r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (r = 0; r < i.length; r++)
      (o = i[r]), !(e.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (n[o] = t[o]);
  }
  return n;
}
var xn = "1.15.2";
function oe(t) {
  if (typeof window != "undefined" && window.navigator) return !!navigator.userAgent.match(t);
}
var ie = oe(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Ae = oe(/Edge/i);
var Ct = oe(/firefox/i);
var _e = oe(/safari/i) && !oe(/chrome/i) && !oe(/android/i);
var kt = oe(/iP(ad|od|hone)/i);
var Ht = oe(/chrome/i) && oe(/android/i);
var Lt = {
  capture: false,
  passive: false
};
function D(t, e, n) {
  t.addEventListener(e, n, !ie && Lt);
}
function S(t, e, n) {
  t.removeEventListener(e, n, !ie && Lt);
}
function Le(t, e) {
  if (e) {
    if ((e[0] === ">" && (e = e.substring(1)), t))
      try {
        if (t.matches) return t.matches(e);
        if (t.msMatchesSelector) return t.msMatchesSelector(e);
        if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
      } catch (n) {
        return false;
      }
    return false;
  }
}
function Nn(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Z(t, e, n, o) {
  if (t) {
    n = n || document;
    do {
      if ((e != null && (e[0] === ">" ? t.parentNode === n && Le(t, e) : Le(t, e))) || (o && t === n)) return t;
      if (t === n) break;
    } while ((t = Nn(t)));
  }
  return null;
}
var Ot = /\s+/g;
function V(t, e, n) {
  if (t && e)
    if (t.classList) t.classList[n ? "add" : "remove"](e);
    else {
      var o = (" " + t.className + " ").replace(Ot, " ").replace(" " + e + " ", " ");
      t.className = (o + (n ? " " + e : "")).replace(Ot, " ");
    }
}
function h2(t, e, n) {
  var o = t && t.style;
  if (o) {
    if (n === void 0)
      return (
        document.defaultView && document.defaultView.getComputedStyle
          ? (n = document.defaultView.getComputedStyle(t, ""))
          : t.currentStyle && (n = t.currentStyle),
        e === void 0 ? n : n[e]
      );
    !(e in o) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), (o[e] = n + (typeof n == "string" ? "" : "px"));
  }
}
function ye(t, e) {
  var n = "";
  if (typeof t == "string") n = t;
  else
    do {
      var o = h2(t, "transform");
      o && o !== "none" && (n = o + " " + n);
    } while (!e && (t = t.parentNode));
  var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return r && new r(n);
}
function Wt(t, e, n) {
  if (t) {
    var o = t.getElementsByTagName(e),
      r = 0,
      i = o.length;
    if (n) for (; r < i; r++) n(o[r], r);
    return o;
  }
  return [];
}
function ee() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function M(t, e, n, o, r) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var i, a, l, s, u, d, f;
    if (
      (t !== window && t.parentNode && t !== ee()
        ? ((i = t.getBoundingClientRect()),
          (a = i.top),
          (l = i.left),
          (s = i.bottom),
          (u = i.right),
          (d = i.height),
          (f = i.width))
        : ((a = 0),
          (l = 0),
          (s = window.innerHeight),
          (u = window.innerWidth),
          (d = window.innerHeight),
          (f = window.innerWidth)),
      (e || n) && t !== window && ((r = r || t.parentNode), !ie))
    )
      do
        if (r && r.getBoundingClientRect && (h2(r, "transform") !== "none" || (n && h2(r, "position") !== "static"))) {
          var m = r.getBoundingClientRect();
          (a -= m.top + parseInt(h2(r, "border-top-width"))),
            (l -= m.left + parseInt(h2(r, "border-left-width"))),
            (s = a + i.height),
            (u = l + i.width);
          break;
        }
      while ((r = r.parentNode));
    if (o && t !== window) {
      var y = ye(r || t),
        b = y && y.a,
        E = y && y.d;
      y && ((a /= E), (l /= b), (f /= b), (d /= E), (s = a + d), (u = l + f));
    }
    return {
      top: a,
      left: l,
      bottom: s,
      right: u,
      width: f,
      height: d
    };
  }
}
function It(t, e, n) {
  for (var o = ue(t, true), r = M(t)[e]; o; ) {
    var i = M(o)[n],
      a = void 0;
    if (((a = r >= i), !a)) return o;
    if (o === ee()) break;
    o = ue(o, false);
  }
  return false;
}
function we(t, e, n, o) {
  for (var r = 0, i = 0, a = t.children; i < a.length; ) {
    if (a[i].style.display !== "none" && a[i] !== p.ghost && (o || a[i] !== p.dragged) && Z(a[i], n.draggable, t, false)) {
      if (r === e) return a[i];
      r++;
    }
    i++;
  }
  return null;
}
function dt(t, e) {
  for (var n = t.lastElementChild; n && (n === p.ghost || h2(n, "display") === "none" || (e && !Le(n, e))); )
    n = n.previousElementSibling;
  return n || null;
}
function K(t, e) {
  var n = 0;
  if (!t || !t.parentNode) return -1;
  for (; (t = t.previousElementSibling); ) t.nodeName.toUpperCase() !== "TEMPLATE" && t !== p.clone && (!e || Le(t, e)) && n++;
  return n;
}
function At(t) {
  var e = 0,
    n = 0,
    o = ee();
  if (t)
    do {
      var r = ye(t),
        i = r.a,
        a = r.d;
      (e += t.scrollLeft * i), (n += t.scrollTop * a);
    } while (t !== o && (t = t.parentNode));
  return [e, n];
}
function Pn(t, e) {
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      for (var o in e) if (e.hasOwnProperty(o) && e[o] === t[n][o]) return Number(n);
    }
  return -1;
}
function ue(t, e) {
  if (!t || !t.getBoundingClientRect) return ee();
  var n = t,
    o = false;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var r = h2(n);
      if (
        (n.clientWidth < n.scrollWidth && (r.overflowX == "auto" || r.overflowX == "scroll")) ||
        (n.clientHeight < n.scrollHeight && (r.overflowY == "auto" || r.overflowY == "scroll"))
      ) {
        if (!n.getBoundingClientRect || n === document.body) return ee();
        if (o || e) return n;
        o = true;
      }
    }
  while ((n = n.parentNode));
  return ee();
}
function Mn(t, e) {
  if (t && e) for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
function Ke(t, e) {
  return (
    Math.round(t.top) === Math.round(e.top) &&
    Math.round(t.left) === Math.round(e.left) &&
    Math.round(t.height) === Math.round(e.height) &&
    Math.round(t.width) === Math.round(e.width)
  );
}
var Te;
function Gt(t, e) {
  return function () {
    if (!Te) {
      var n = arguments,
        o = this;
      n.length === 1 ? t.call(o, n[0]) : t.apply(o, n),
        (Te = setTimeout(function () {
          Te = void 0;
        }, e));
    }
  };
}
function Fn() {
  clearTimeout(Te), (Te = void 0);
}
function jt(t, e, n) {
  (t.scrollLeft += e), (t.scrollTop += n);
}
function zt(t) {
  var e = window.Polymer,
    n = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(true) : n ? n(t).clone(true)[0] : t.cloneNode(true);
}
function Ut(t, e, n) {
  var o = {};
  return (
    Array.from(t.children).forEach(function (r) {
      var i, a, l, s;
      if (!(!Z(r, e.draggable, t, false) || r.animated || r === n)) {
        var u = M(r);
        (o.left = Math.min((i = o.left) !== null && i !== void 0 ? i : 1 / 0, u.left)),
          (o.top = Math.min((a = o.top) !== null && a !== void 0 ? a : 1 / 0, u.top)),
          (o.right = Math.max((l = o.right) !== null && l !== void 0 ? l : -1 / 0, u.right)),
          (o.bottom = Math.max((s = o.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom));
      }
    }),
    (o.width = o.right - o.left),
    (o.height = o.bottom - o.top),
    (o.x = o.left),
    (o.y = o.top),
    o
  );
}
var q = "Sortable" + /* @__PURE__ */ new Date().getTime();
function Rn() {
  var t = [],
    e;
  return {
    captureAnimationState: function () {
      if (((t = []), !!this.options.animation)) {
        var o = [].slice.call(this.el.children);
        o.forEach(function (r) {
          if (!(h2(r, "display") === "none" || r === p.ghost)) {
            t.push({
              target: r,
              rect: M(r)
            });
            var i = te({}, t[t.length - 1].rect);
            if (r.thisAnimationDuration) {
              var a = ye(r, true);
              a && ((i.top -= a.f), (i.left -= a.e));
            }
            r.fromRect = i;
          }
        });
      }
    },
    addAnimationState: function (o) {
      t.push(o);
    },
    removeAnimationState: function (o) {
      t.splice(
        Pn(t, {
          target: o
        }),
        1
      );
    },
    animateAll: function (o) {
      var r = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof o == "function" && o();
        return;
      }
      var i = false,
        a = 0;
      t.forEach(function (l) {
        var s = 0,
          u = l.target,
          d = u.fromRect,
          f = M(u),
          m = u.prevFromRect,
          y = u.prevToRect,
          b = l.rect,
          E = ye(u, true);
        E && ((f.top -= E.f), (f.left -= E.e)),
          (u.toRect = f),
          u.thisAnimationDuration &&
            Ke(m, f) &&
            !Ke(d, f) && // Make sure animatingRect is on line between toRect & fromRect
            (b.top - f.top) / (b.left - f.left) === (d.top - f.top) / (d.left - f.left) &&
            (s = Yn(b, m, y, r.options)),
          Ke(f, d) || ((u.prevFromRect = d), (u.prevToRect = f), s || (s = r.options.animation), r.animate(u, b, f, s)),
          s &&
            ((i = true),
            (a = Math.max(a, s)),
            clearTimeout(u.animationResetTimer),
            (u.animationResetTimer = setTimeout(function () {
              (u.animationTime = 0),
                (u.prevFromRect = null),
                (u.fromRect = null),
                (u.prevToRect = null),
                (u.thisAnimationDuration = null);
            }, s)),
            (u.thisAnimationDuration = s));
      }),
        clearTimeout(e),
        i
          ? (e = setTimeout(function () {
              typeof o == "function" && o();
            }, a))
          : typeof o == "function" && o(),
        (t = []);
    },
    animate: function (o, r, i, a) {
      if (a) {
        h2(o, "transition", ""), h2(o, "transform", "");
        var l = ye(this.el),
          s = l && l.a,
          u = l && l.d,
          d = (r.left - i.left) / (s || 1),
          f = (r.top - i.top) / (u || 1);
        (o.animatingX = !!d),
          (o.animatingY = !!f),
          h2(o, "transform", "translate3d(" + d + "px," + f + "px,0)"),
          (this.forRepaintDummy = Xn(o)),
          h2(o, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")),
          h2(o, "transform", "translate3d(0,0,0)"),
          typeof o.animated == "number" && clearTimeout(o.animated),
          (o.animated = setTimeout(function () {
            h2(o, "transition", ""), h2(o, "transform", ""), (o.animated = false), (o.animatingX = false), (o.animatingY = false);
          }, a));
      }
    }
  };
}
function Xn(t) {
  return t.offsetWidth;
}
function Yn(t, e, n, o) {
  return (
    (Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) /
      Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2))) *
    o.animation
  );
}
var ge = [];
var Je = {
  initializeByDefault: true
};
var xe = {
  mount: function (e) {
    for (var n in Je) Je.hasOwnProperty(n) && !(n in e) && (e[n] = Je[n]);
    ge.forEach(function (o) {
      if (o.pluginName === e.pluginName) throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }),
      ge.push(e);
  },
  pluginEvent: function (e, n, o) {
    var r = this;
    (this.eventCanceled = false),
      (o.cancel = function () {
        r.eventCanceled = true;
      });
    var i = e + "Global";
    ge.forEach(function (a) {
      n[a.pluginName] &&
        (n[a.pluginName][i] &&
          n[a.pluginName][i](
            te(
              {
                sortable: n
              },
              o
            )
          ),
        n.options[a.pluginName] &&
          n[a.pluginName][e] &&
          n[a.pluginName][e](
            te(
              {
                sortable: n
              },
              o
            )
          ));
    });
  },
  initializePlugins: function (e, n, o, r) {
    ge.forEach(function (l) {
      var s = l.pluginName;
      if (!(!e.options[s] && !l.initializeByDefault)) {
        var u = new l(e, n, e.options);
        (u.sortable = e), (u.options = e.options), (e[s] = u), re(o, u.defaults);
      }
    });
    for (var i in e.options)
      if (e.options.hasOwnProperty(i)) {
        var a = this.modifyOption(e, i, e.options[i]);
        typeof a != "undefined" && (e.options[i] = a);
      }
  },
  getEventProperties: function (e, n) {
    var o = {};
    return (
      ge.forEach(function (r) {
        typeof r.eventProperties == "function" && re(o, r.eventProperties.call(n[r.pluginName], e));
      }),
      o
    );
  },
  modifyOption: function (e, n, o) {
    var r;
    return (
      ge.forEach(function (i) {
        e[i.pluginName] &&
          i.optionListeners &&
          typeof i.optionListeners[n] == "function" &&
          (r = i.optionListeners[n].call(e[i.pluginName], o));
      }),
      r
    );
  }
};
function Bn(t) {
  var e = t.sortable,
    n = t.rootEl,
    o = t.name,
    r = t.targetEl,
    i = t.cloneEl,
    a = t.toEl,
    l = t.fromEl,
    s = t.oldIndex,
    u = t.newIndex,
    d = t.oldDraggableIndex,
    f = t.newDraggableIndex,
    m = t.originalEvent,
    y = t.putSortable,
    b = t.extraEventProperties;
  if (((e = e || (n && n[q])), !!e)) {
    var E,
      k = e.options,
      H = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !ie && !Ae
      ? (E = new CustomEvent(o, {
          bubbles: true,
          cancelable: true
        }))
      : ((E = document.createEvent("Event")), E.initEvent(o, true, true)),
      (E.to = a || n),
      (E.from = l || n),
      (E.item = r || n),
      (E.clone = i),
      (E.oldIndex = s),
      (E.newIndex = u),
      (E.oldDraggableIndex = d),
      (E.newDraggableIndex = f),
      (E.originalEvent = m),
      (E.pullMode = y ? y.lastPutMode : void 0);
    var F = te(te({}, b), xe.getEventProperties(o, e));
    for (var A in F) E[A] = F[A];
    n && n.dispatchEvent(E), k[H] && k[H].call(e, E);
  }
}
var kn = ["evt"];
var G = function (e, n) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = o.evt,
    i = An(o, kn);
  xe.pluginEvent.bind(p)(
    e,
    n,
    te(
      {
        dragEl: c,
        parentEl: I,
        ghostEl: g,
        rootEl: C,
        nextEl: pe,
        lastDownEl: Ye,
        cloneEl: O,
        cloneHidden: se,
        dragStarted: Ee,
        putSortable: X,
        activeSortable: p.active,
        originalEvent: r,
        oldIndex: be,
        oldDraggableIndex: Ce,
        newIndex: $,
        newDraggableIndex: le,
        hideGhostForTarget: Kt,
        unhideGhostForTarget: Jt,
        cloneNowHidden: function () {
          se = true;
        },
        cloneNowShown: function () {
          se = false;
        },
        dispatchSortableEvent: function (l) {
          W({
            sortable: n,
            name: l,
            originalEvent: r
          });
        }
      },
      i
    )
  );
};
function W(t) {
  Bn(
    te(
      {
        putSortable: X,
        cloneEl: O,
        targetEl: c,
        rootEl: C,
        oldIndex: be,
        oldDraggableIndex: Ce,
        newIndex: $,
        newDraggableIndex: le
      },
      t
    )
  );
}
var c;
var I;
var g;
var C;
var pe;
var Ye;
var O;
var se;
var be;
var $;
var Ce;
var le;
var Pe;
var X;
var ve = false;
var We = false;
var Ge = [];
var de;
var J;
var Ze;
var Qe;
var xt;
var Nt;
var Ee;
var me;
var Oe;
var Ie = false;
var Me = false;
var Be;
var B;
var et = [];
var at = false;
var je = [];
var Ue = typeof document != "undefined";
var Fe = kt;
var Pt = Ae || ie ? "cssFloat" : "float";
var Hn = Ue && !Ht && !kt && "draggable" in document.createElement("div");
var Vt = (function () {
  if (Ue) {
    if (ie) return false;
    var t = document.createElement("x");
    return (t.style.cssText = "pointer-events:auto"), t.style.pointerEvents === "auto";
  }
})();
var $t = function (e, n) {
  var o = h2(e),
    r =
      parseInt(o.width) -
      parseInt(o.paddingLeft) -
      parseInt(o.paddingRight) -
      parseInt(o.borderLeftWidth) -
      parseInt(o.borderRightWidth),
    i = we(e, 0, n),
    a = we(e, 1, n),
    l = i && h2(i),
    s = a && h2(a),
    u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + M(i).width,
    d = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + M(a).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid") return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (i && l.float && l.float !== "none") {
    var f = l.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === f) ? "vertical" : "horizontal";
  }
  return i &&
    (l.display === "block" ||
      l.display === "flex" ||
      l.display === "table" ||
      l.display === "grid" ||
      (u >= r && o[Pt] === "none") ||
      (a && o[Pt] === "none" && u + d > r))
    ? "vertical"
    : "horizontal";
};
var Ln = function (e, n, o) {
  var r = o ? e.left : e.top,
    i = o ? e.right : e.bottom,
    a = o ? e.width : e.height,
    l = o ? n.left : n.top,
    s = o ? n.right : n.bottom,
    u = o ? n.width : n.height;
  return r === l || i === s || r + a / 2 === l + u / 2;
};
var Wn = function (e, n) {
  var o;
  return (
    Ge.some(function (r) {
      var i = r[q].options.emptyInsertThreshold;
      if (!(!i || dt(r))) {
        var a = M(r),
          l = e >= a.left - i && e <= a.right + i,
          s = n >= a.top - i && n <= a.bottom + i;
        if (l && s) return (o = r);
      }
    }),
    o
  );
};
var qt = function (e) {
  function n(i, a) {
    return function (l, s, u, d) {
      var f = l.options.group.name && s.options.group.name && l.options.group.name === s.options.group.name;
      if (i == null && (a || f)) return true;
      if (i == null || i === false) return false;
      if (a && i === "clone") return i;
      if (typeof i == "function") return n(i(l, s, u, d), a)(l, s, u, d);
      var m = (a ? l : s).options.group.name;
      return i === true || (typeof i == "string" && i === m) || (i.join && i.indexOf(m) > -1);
    };
  }
  var o = {},
    r = e.group;
  (!r || Xe(r) != "object") &&
    (r = {
      name: r
    }),
    (o.name = r.name),
    (o.checkPull = n(r.pull, true)),
    (o.checkPut = n(r.put)),
    (o.revertClone = r.revertClone),
    (e.group = o);
};
var Kt = function () {
  !Vt && g && h2(g, "display", "none");
};
var Jt = function () {
  !Vt && g && h2(g, "display", "");
};
Ue &&
  !Ht &&
  document.addEventListener(
    "click",
    function (t) {
      if (We)
        return (
          t.preventDefault(),
          t.stopPropagation && t.stopPropagation(),
          t.stopImmediatePropagation && t.stopImmediatePropagation(),
          (We = false),
          false
        );
    },
    true
  );
var he = function (e) {
  if (c) {
    e = e.touches ? e.touches[0] : e;
    var n = Wn(e.clientX, e.clientY);
    if (n) {
      var o = {};
      for (var r in e) e.hasOwnProperty(r) && (o[r] = e[r]);
      (o.target = o.rootEl = n), (o.preventDefault = void 0), (o.stopPropagation = void 0), n[q]._onDragOver(o);
    }
  }
};
var Gn = function (e) {
  c && c.parentNode[q]._isOutsideThisEl(e.target);
};
function p(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  (this.el = t), (this.options = e = re({}, e)), (t[q] = this);
  var n = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function () {
      return $t(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function (a, l) {
      a.setData("Text", l.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: p.supportPointer !== false && "PointerEvent" in window && !_e,
    emptyInsertThreshold: 5
  };
  xe.initializePlugins(this, t, n);
  for (var o in n) !(o in e) && (e[o] = n[o]);
  qt(e);
  for (var r in this) r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  (this.nativeDraggable = e.forceFallback ? false : Hn),
    this.nativeDraggable && (this.options.touchStartThreshold = 1),
    e.supportPointer
      ? D(t, "pointerdown", this._onTapStart)
      : (D(t, "mousedown", this._onTapStart), D(t, "touchstart", this._onTapStart)),
    this.nativeDraggable && (D(t, "dragover", this), D(t, "dragenter", this)),
    Ge.push(this.el),
    e.store && e.store.get && this.sort(e.store.get(this) || []),
    re(this, Rn());
}
p.prototype =
  /** @lends Sortable.prototype */
  {
    constructor: p,
    _isOutsideThisEl: function (e) {
      !this.el.contains(e) && e !== this.el && (me = null);
    },
    _getDirection: function (e, n) {
      return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, c) : this.options.direction;
    },
    _onTapStart: function (e) {
      if (e.cancelable) {
        var n = this,
          o = this.el,
          r = this.options,
          i = r.preventOnFilter,
          a = e.type,
          l = (e.touches && e.touches[0]) || (e.pointerType && e.pointerType === "touch" && e),
          s = (l || e).target,
          u = (e.target.shadowRoot && ((e.path && e.path[0]) || (e.composedPath && e.composedPath()[0]))) || s,
          d = r.filter;
        if (
          (Jn(o),
          !c &&
            !((/mousedown|pointerdown/.test(a) && e.button !== 0) || r.disabled) &&
            !u.isContentEditable &&
            !(!this.nativeDraggable && _e && s && s.tagName.toUpperCase() === "SELECT") &&
            ((s = Z(s, r.draggable, o, false)), !(s && s.animated) && Ye !== s))
        ) {
          if (((be = K(s)), (Ce = K(s, r.draggable)), typeof d == "function")) {
            if (d.call(this, e, s, this)) {
              W({
                sortable: n,
                rootEl: u,
                name: "filter",
                targetEl: s,
                toEl: o,
                fromEl: o
              }),
                G("filter", n, {
                  evt: e
                }),
                i && e.cancelable && e.preventDefault();
              return;
            }
          } else if (
            d &&
            ((d = d.split(",").some(function (f) {
              if (((f = Z(u, f.trim(), o, false)), f))
                return (
                  W({
                    sortable: n,
                    rootEl: f,
                    name: "filter",
                    targetEl: s,
                    fromEl: o,
                    toEl: o
                  }),
                  G("filter", n, {
                    evt: e
                  }),
                  true
                );
            })),
            d)
          ) {
            i && e.cancelable && e.preventDefault();
            return;
          }
          (r.handle && !Z(u, r.handle, o, false)) || this._prepareDragStart(e, l, s);
        }
      }
    },
    _prepareDragStart: function (e, n, o) {
      var r = this,
        i = r.el,
        a = r.options,
        l = i.ownerDocument,
        s;
      if (o && !c && o.parentNode === i) {
        var u = M(o);
        if (
          ((C = i),
          (c = o),
          (I = c.parentNode),
          (pe = c.nextSibling),
          (Ye = o),
          (Pe = a.group),
          (p.dragged = c),
          (de = {
            target: c,
            clientX: (n || e).clientX,
            clientY: (n || e).clientY
          }),
          (xt = de.clientX - u.left),
          (Nt = de.clientY - u.top),
          (this._lastX = (n || e).clientX),
          (this._lastY = (n || e).clientY),
          (c.style["will-change"] = "all"),
          (s = function () {
            if (
              (G("delayEnded", r, {
                evt: e
              }),
              p.eventCanceled)
            ) {
              r._onDrop();
              return;
            }
            r._disableDelayedDragEvents(),
              !Ct && r.nativeDraggable && (c.draggable = true),
              r._triggerDragStart(e, n),
              W({
                sortable: r,
                name: "choose",
                originalEvent: e
              }),
              V(c, a.chosenClass, true);
          }),
          a.ignore.split(",").forEach(function (d) {
            Wt(c, d.trim(), tt);
          }),
          D(l, "dragover", he),
          D(l, "mousemove", he),
          D(l, "touchmove", he),
          D(l, "mouseup", r._onDrop),
          D(l, "touchend", r._onDrop),
          D(l, "touchcancel", r._onDrop),
          Ct && this.nativeDraggable && ((this.options.touchStartThreshold = 4), (c.draggable = true)),
          G("delayStart", this, {
            evt: e
          }),
          a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Ae || ie)))
        ) {
          if (p.eventCanceled) {
            this._onDrop();
            return;
          }
          D(l, "mouseup", r._disableDelayedDrag),
            D(l, "touchend", r._disableDelayedDrag),
            D(l, "touchcancel", r._disableDelayedDrag),
            D(l, "mousemove", r._delayedDragTouchMoveHandler),
            D(l, "touchmove", r._delayedDragTouchMoveHandler),
            a.supportPointer && D(l, "pointermove", r._delayedDragTouchMoveHandler),
            (r._dragStartTimer = setTimeout(s, a.delay));
        } else s();
      }
    },
    _delayedDragTouchMoveHandler: function (e) {
      var n = e.touches ? e.touches[0] : e;
      Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >=
        Math.floor(this.options.touchStartThreshold / ((this.nativeDraggable && window.devicePixelRatio) || 1)) &&
        this._disableDelayedDrag();
    },
    _disableDelayedDrag: function () {
      c && tt(c), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
    },
    _disableDelayedDragEvents: function () {
      var e = this.el.ownerDocument;
      S(e, "mouseup", this._disableDelayedDrag),
        S(e, "touchend", this._disableDelayedDrag),
        S(e, "touchcancel", this._disableDelayedDrag),
        S(e, "mousemove", this._delayedDragTouchMoveHandler),
        S(e, "touchmove", this._delayedDragTouchMoveHandler),
        S(e, "pointermove", this._delayedDragTouchMoveHandler);
    },
    _triggerDragStart: function (e, n) {
      (n = n || (e.pointerType == "touch" && e)),
        !this.nativeDraggable || n
          ? this.options.supportPointer
            ? D(document, "pointermove", this._onTouchMove)
            : n
              ? D(document, "touchmove", this._onTouchMove)
              : D(document, "mousemove", this._onTouchMove)
          : (D(c, "dragend", this), D(C, "dragstart", this._onDragStart));
      try {
        document.selection
          ? ke(function () {
              document.selection.empty();
            })
          : window.getSelection().removeAllRanges();
      } catch (o) {}
    },
    _dragStarted: function (e, n) {
      if (((ve = false), C && c)) {
        G("dragStarted", this, {
          evt: n
        }),
          this.nativeDraggable && D(document, "dragover", Gn);
        var o = this.options;
        !e && V(c, o.dragClass, false),
          V(c, o.ghostClass, true),
          (p.active = this),
          e && this._appendGhost(),
          W({
            sortable: this,
            name: "start",
            originalEvent: n
          });
      } else this._nulling();
    },
    _emulateDragOver: function () {
      if (J) {
        (this._lastX = J.clientX), (this._lastY = J.clientY), Kt();
        for (
          var e = document.elementFromPoint(J.clientX, J.clientY), n = e;
          e && e.shadowRoot && ((e = e.shadowRoot.elementFromPoint(J.clientX, J.clientY)), e !== n);

        )
          n = e;
        if ((c.parentNode[q]._isOutsideThisEl(e), n))
          do {
            if (n[q]) {
              var o = void 0;
              if (
                ((o = n[q]._onDragOver({
                  clientX: J.clientX,
                  clientY: J.clientY,
                  target: e,
                  rootEl: n
                })),
                o && !this.options.dragoverBubble)
              )
                break;
            }
            e = n;
          } while ((n = n.parentNode));
        Jt();
      }
    },
    _onTouchMove: function (e) {
      if (de) {
        var n = this.options,
          o = n.fallbackTolerance,
          r = n.fallbackOffset,
          i = e.touches ? e.touches[0] : e,
          a = g && ye(g, true),
          l = g && a && a.a,
          s = g && a && a.d,
          u = Fe && B && At(B),
          d = (i.clientX - de.clientX + r.x) / (l || 1) + (u ? u[0] - et[0] : 0) / (l || 1),
          f = (i.clientY - de.clientY + r.y) / (s || 1) + (u ? u[1] - et[1] : 0) / (s || 1);
        if (!p.active && !ve) {
          if (o && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < o) return;
          this._onDragStart(e, true);
        }
        if (g) {
          a
            ? ((a.e += d - (Ze || 0)), (a.f += f - (Qe || 0)))
            : (a = {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                e: d,
                f
              });
          var m = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
          h2(g, "webkitTransform", m),
            h2(g, "mozTransform", m),
            h2(g, "msTransform", m),
            h2(g, "transform", m),
            (Ze = d),
            (Qe = f),
            (J = i);
        }
        e.cancelable && e.preventDefault();
      }
    },
    _appendGhost: function () {
      if (!g) {
        var e = this.options.fallbackOnBody ? document.body : C,
          n = M(c, true, Fe, true, e),
          o = this.options;
        if (Fe) {
          for (B = e; h2(B, "position") === "static" && h2(B, "transform") === "none" && B !== document; ) B = B.parentNode;
          B !== document.body && B !== document.documentElement
            ? (B === document && (B = ee()), (n.top += B.scrollTop), (n.left += B.scrollLeft))
            : (B = ee()),
            (et = At(B));
        }
        (g = c.cloneNode(true)),
          V(g, o.ghostClass, false),
          V(g, o.fallbackClass, true),
          V(g, o.dragClass, true),
          h2(g, "transition", ""),
          h2(g, "transform", ""),
          h2(g, "box-sizing", "border-box"),
          h2(g, "margin", 0),
          h2(g, "top", n.top),
          h2(g, "left", n.left),
          h2(g, "width", n.width),
          h2(g, "height", n.height),
          h2(g, "opacity", "0.8"),
          h2(g, "position", Fe ? "absolute" : "fixed"),
          h2(g, "zIndex", "100000"),
          h2(g, "pointerEvents", "none"),
          (p.ghost = g),
          e.appendChild(g),
          h2(g, "transform-origin", (xt / parseInt(g.style.width)) * 100 + "% " + (Nt / parseInt(g.style.height)) * 100 + "%");
      }
    },
    _onDragStart: function (e, n) {
      var o = this,
        r = e.dataTransfer,
        i = o.options;
      if (
        (G("dragStart", this, {
          evt: e
        }),
        p.eventCanceled)
      ) {
        this._onDrop();
        return;
      }
      G("setupClone", this),
        p.eventCanceled ||
          ((O = zt(c)),
          O.removeAttribute("id"),
          (O.draggable = false),
          (O.style["will-change"] = ""),
          this._hideClone(),
          V(O, this.options.chosenClass, false),
          (p.clone = O)),
        (o.cloneId = ke(function () {
          G("clone", o),
            !p.eventCanceled &&
              (o.options.removeCloneOnHide || C.insertBefore(O, c),
              o._hideClone(),
              W({
                sortable: o,
                name: "clone"
              }));
        })),
        !n && V(c, i.dragClass, true),
        n
          ? ((We = true), (o._loopId = setInterval(o._emulateDragOver, 50)))
          : (S(document, "mouseup", o._onDrop),
            S(document, "touchend", o._onDrop),
            S(document, "touchcancel", o._onDrop),
            r && ((r.effectAllowed = "move"), i.setData && i.setData.call(o, r, c)),
            D(document, "drop", o),
            h2(c, "transform", "translateZ(0)")),
        (ve = true),
        (o._dragStartId = ke(o._dragStarted.bind(o, n, e))),
        D(document, "selectstart", o),
        (Ee = true),
        _e && h2(document.body, "user-select", "none");
    },
    // Returns true - if no further action is needed (either inserted or another condition)
    _onDragOver: function (e) {
      var n = this.el,
        o = e.target,
        r,
        i,
        a,
        l = this.options,
        s = l.group,
        u = p.active,
        d = Pe === s,
        f = l.sort,
        m = X || u,
        y,
        b = this,
        E = false;
      if (at) return;
      function k(ce, nn) {
        G(
          ce,
          b,
          te(
            {
              evt: e,
              isOwner: d,
              axis: y ? "vertical" : "horizontal",
              revert: a,
              dragRect: r,
              targetRect: i,
              canSort: f,
              fromSortable: m,
              target: o,
              completed: F,
              onMove: function (gt, on) {
                return Re(C, n, c, r, gt, M(gt), e, on);
              },
              changed: A
            },
            nn
          )
        );
      }
      function H() {
        k("dragOverAnimationCapture"), b.captureAnimationState(), b !== m && m.captureAnimationState();
      }
      function F(ce) {
        return (
          k("dragOverCompleted", {
            insertion: ce
          }),
          ce &&
            (d ? u._hideClone() : u._showClone(b),
            b !== m && (V(c, X ? X.options.ghostClass : u.options.ghostClass, false), V(c, l.ghostClass, true)),
            X !== b && b !== p.active ? (X = b) : b === p.active && X && (X = null),
            m === b && (b._ignoreWhileAnimating = o),
            b.animateAll(function () {
              k("dragOverAnimationComplete"), (b._ignoreWhileAnimating = null);
            }),
            b !== m && (m.animateAll(), (m._ignoreWhileAnimating = null))),
          ((o === c && !c.animated) || (o === n && !o.animated)) && (me = null),
          !l.dragoverBubble && !e.rootEl && o !== document && (c.parentNode[q]._isOutsideThisEl(e.target), !ce && he(e)),
          !l.dragoverBubble && e.stopPropagation && e.stopPropagation(),
          (E = true)
        );
      }
      function A() {
        ($ = K(c)),
          (le = K(c, l.draggable)),
          W({
            sortable: b,
            name: "change",
            toEl: n,
            newIndex: $,
            newDraggableIndex: le,
            originalEvent: e
          });
      }
      if (
        (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(),
        (o = Z(o, l.draggable, n, true)),
        k("dragOver"),
        p.eventCanceled)
      )
        return E;
      if (c.contains(e.target) || (o.animated && o.animatingX && o.animatingY) || b._ignoreWhileAnimating === o) return F(false);
      if (
        ((We = false),
        u &&
          !l.disabled &&
          (d
            ? f || (a = I !== C)
            : X === this || ((this.lastPutMode = Pe.checkPull(this, u, c, e)) && s.checkPut(this, u, c, e))))
      ) {
        if (((y = this._getDirection(e, o) === "vertical"), (r = M(c)), k("dragOverValid"), p.eventCanceled)) return E;
        if (a)
          return (
            (I = C),
            H(),
            this._hideClone(),
            k("revert"),
            p.eventCanceled || (pe ? C.insertBefore(c, pe) : C.appendChild(c)),
            F(true)
          );
        var L = dt(n, l.draggable);
        if (!L || (Vn(e, y, this) && !L.animated)) {
          if (L === c) return F(false);
          if ((L && n === e.target && (o = L), o && (i = M(o)), Re(C, n, c, r, o, i, e, !!o) !== false))
            return H(), L && L.nextSibling ? n.insertBefore(c, L.nextSibling) : n.appendChild(c), (I = n), A(), F(true);
        } else if (L && Un(e, y, this)) {
          var ne = we(n, 0, l, true);
          if (ne === c) return F(false);
          if (((o = ne), (i = M(o)), Re(C, n, c, r, o, i, e, false) !== false))
            return H(), n.insertBefore(c, ne), (I = n), A(), F(true);
        } else if (o.parentNode === n) {
          i = M(o);
          var j = 0,
            Q,
            v = c.parentNode !== n,
            w = !Ln((c.animated && c.toRect) || r, (o.animated && o.toRect) || i, y),
            x = y ? "top" : "left",
            N = It(o, "top", "top") || It(c, "top", "top"),
            _ = N ? N.scrollTop : void 0;
          me !== o && ((Q = i[x]), (Ie = false), (Me = (!w && l.invertSwap) || v)),
            (j = $n(
              e,
              o,
              i,
              y,
              w ? 1 : l.swapThreshold,
              l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold,
              Me,
              me === o
            ));
          var T;
          if (j !== 0) {
            var R = K(c);
            do (R -= j), (T = I.children[R]);
            while (T && (h2(T, "display") === "none" || T === g));
          }
          if (j === 0 || T === o) return F(false);
          (me = o), (Oe = j);
          var Y = o.nextElementSibling,
            z = false;
          z = j === 1;
          var ae = Re(C, n, c, r, o, i, e, z);
          if (ae !== false)
            return (
              (ae === 1 || ae === -1) && (z = ae === 1),
              (at = true),
              setTimeout(zn, 30),
              H(),
              z && !Y ? n.appendChild(c) : o.parentNode.insertBefore(c, z ? Y : o),
              N && jt(N, 0, _ - N.scrollTop),
              (I = c.parentNode),
              Q !== void 0 && !Me && (Be = Math.abs(Q - M(o)[x])),
              A(),
              F(true)
            );
        }
        if (n.contains(c)) return F(false);
      }
      return false;
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function () {
      S(document, "mousemove", this._onTouchMove),
        S(document, "touchmove", this._onTouchMove),
        S(document, "pointermove", this._onTouchMove),
        S(document, "dragover", he),
        S(document, "mousemove", he),
        S(document, "touchmove", he);
    },
    _offUpEvents: function () {
      var e = this.el.ownerDocument;
      S(e, "mouseup", this._onDrop),
        S(e, "touchend", this._onDrop),
        S(e, "pointerup", this._onDrop),
        S(e, "touchcancel", this._onDrop),
        S(document, "selectstart", this);
    },
    _onDrop: function (e) {
      var n = this.el,
        o = this.options;
      if (
        (($ = K(c)),
        (le = K(c, o.draggable)),
        G("drop", this, {
          evt: e
        }),
        (I = c && c.parentNode),
        ($ = K(c)),
        (le = K(c, o.draggable)),
        p.eventCanceled)
      ) {
        this._nulling();
        return;
      }
      (ve = false),
        (Me = false),
        (Ie = false),
        clearInterval(this._loopId),
        clearTimeout(this._dragStartTimer),
        lt(this.cloneId),
        lt(this._dragStartId),
        this.nativeDraggable && (S(document, "drop", this), S(n, "dragstart", this._onDragStart)),
        this._offMoveEvents(),
        this._offUpEvents(),
        _e && h2(document.body, "user-select", ""),
        h2(c, "transform", ""),
        e &&
          (Ee && (e.cancelable && e.preventDefault(), !o.dropBubble && e.stopPropagation()),
          g && g.parentNode && g.parentNode.removeChild(g),
          (C === I || (X && X.lastPutMode !== "clone")) && O && O.parentNode && O.parentNode.removeChild(O),
          c &&
            (this.nativeDraggable && S(c, "dragend", this),
            tt(c),
            (c.style["will-change"] = ""),
            Ee && !ve && V(c, X ? X.options.ghostClass : this.options.ghostClass, false),
            V(c, this.options.chosenClass, false),
            W({
              sortable: this,
              name: "unchoose",
              toEl: I,
              newIndex: null,
              newDraggableIndex: null,
              originalEvent: e
            }),
            C !== I
              ? ($ >= 0 &&
                  (W({
                    rootEl: I,
                    name: "add",
                    toEl: I,
                    fromEl: C,
                    originalEvent: e
                  }),
                  W({
                    sortable: this,
                    name: "remove",
                    toEl: I,
                    originalEvent: e
                  }),
                  W({
                    rootEl: I,
                    name: "sort",
                    toEl: I,
                    fromEl: C,
                    originalEvent: e
                  }),
                  W({
                    sortable: this,
                    name: "sort",
                    toEl: I,
                    originalEvent: e
                  })),
                X && X.save())
              : $ !== be &&
                $ >= 0 &&
                (W({
                  sortable: this,
                  name: "update",
                  toEl: I,
                  originalEvent: e
                }),
                W({
                  sortable: this,
                  name: "sort",
                  toEl: I,
                  originalEvent: e
                })),
            p.active &&
              (($ == null || $ === -1) && (($ = be), (le = Ce)),
              W({
                sortable: this,
                name: "end",
                toEl: I,
                originalEvent: e
              }),
              this.save()))),
        this._nulling();
    },
    _nulling: function () {
      G("nulling", this),
        (C =
          c =
          I =
          g =
          pe =
          O =
          Ye =
          se =
          de =
          J =
          Ee =
          $ =
          le =
          be =
          Ce =
          me =
          Oe =
          X =
          Pe =
          p.dragged =
          p.ghost =
          p.clone =
          p.active =
            null),
        je.forEach(function (e) {
          e.checked = true;
        }),
        (je.length = Ze = Qe = 0);
    },
    handleEvent: function (e) {
      switch (e.type) {
        case "drop":
        case "dragend":
          this._onDrop(e);
          break;
        case "dragenter":
        case "dragover":
          c && (this._onDragOver(e), jn(e));
          break;
        case "selectstart":
          e.preventDefault();
          break;
      }
    },
    /**
     * Serializes the item into an array of string.
     * @returns {String[]}
     */
    toArray: function () {
      for (var e = [], n, o = this.el.children, r = 0, i = o.length, a = this.options; r < i; r++)
        (n = o[r]), Z(n, a.draggable, this.el, false) && e.push(n.getAttribute(a.dataIdAttr) || Kn(n));
      return e;
    },
    /**
     * Sorts the elements according to the array.
     * @param  {String[]}  order  order of the items
     */
    sort: function (e, n) {
      var o = {},
        r = this.el;
      this.toArray().forEach(function (i, a) {
        var l = r.children[a];
        Z(l, this.options.draggable, r, false) && (o[i] = l);
      }, this),
        n && this.captureAnimationState(),
        e.forEach(function (i) {
          o[i] && (r.removeChild(o[i]), r.appendChild(o[i]));
        }),
        n && this.animateAll();
    },
    /**
     * Save the current sorting
     */
    save: function () {
      var e = this.options.store;
      e && e.set && e.set(this);
    },
    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     * @param   {HTMLElement}  el
     * @param   {String}       [selector]  default: `options.draggable`
     * @returns {HTMLElement|null}
     */
    closest: function (e, n) {
      return Z(e, n || this.options.draggable, this.el, false);
    },
    /**
     * Set/get option
     * @param   {string} name
     * @param   {*}      [value]
     * @returns {*}
     */
    option: function (e, n) {
      var o = this.options;
      if (n === void 0) return o[e];
      var r = xe.modifyOption(this, e, n);
      typeof r != "undefined" ? (o[e] = r) : (o[e] = n), e === "group" && qt(o);
    },
    /**
     * Destroy
     */
    destroy: function () {
      G("destroy", this);
      var e = this.el;
      (e[q] = null),
        S(e, "mousedown", this._onTapStart),
        S(e, "touchstart", this._onTapStart),
        S(e, "pointerdown", this._onTapStart),
        this.nativeDraggable && (S(e, "dragover", this), S(e, "dragenter", this)),
        Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function (n) {
          n.removeAttribute("draggable");
        }),
        this._onDrop(),
        this._disableDelayedDragEvents(),
        Ge.splice(Ge.indexOf(this.el), 1),
        (this.el = e = null);
    },
    _hideClone: function () {
      if (!se) {
        if ((G("hideClone", this), p.eventCanceled)) return;
        h2(O, "display", "none"), this.options.removeCloneOnHide && O.parentNode && O.parentNode.removeChild(O), (se = true);
      }
    },
    _showClone: function (e) {
      if (e.lastPutMode !== "clone") {
        this._hideClone();
        return;
      }
      if (se) {
        if ((G("showClone", this), p.eventCanceled)) return;
        c.parentNode == C && !this.options.group.revertClone
          ? C.insertBefore(O, c)
          : pe
            ? C.insertBefore(O, pe)
            : C.appendChild(O),
          this.options.group.revertClone && this.animate(c, O),
          h2(O, "display", ""),
          (se = false);
      }
    }
  };
function jn(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Re(t, e, n, o, r, i, a, l) {
  var s,
    u = t[q],
    d = u.options.onMove,
    f;
  return (
    window.CustomEvent && !ie && !Ae
      ? (s = new CustomEvent("move", {
          bubbles: true,
          cancelable: true
        }))
      : ((s = document.createEvent("Event")), s.initEvent("move", true, true)),
    (s.to = e),
    (s.from = t),
    (s.dragged = n),
    (s.draggedRect = o),
    (s.related = r || e),
    (s.relatedRect = i || M(e)),
    (s.willInsertAfter = l),
    (s.originalEvent = a),
    t.dispatchEvent(s),
    d && (f = d.call(u, s, a)),
    f
  );
}
function tt(t) {
  t.draggable = false;
}
function zn() {
  at = false;
}
function Un(t, e, n) {
  var o = M(we(n.el, 0, n.options, true)),
    r = Ut(n.el, n.options, g),
    i = 10;
  return e
    ? t.clientX < r.left - i || (t.clientY < o.top && t.clientX < o.right)
    : t.clientY < r.top - i || (t.clientY < o.bottom && t.clientX < o.left);
}
function Vn(t, e, n) {
  var o = M(dt(n.el, n.options.draggable)),
    r = Ut(n.el, n.options, g),
    i = 10;
  return e
    ? t.clientX > r.right + i || (t.clientY > o.bottom && t.clientX > o.left)
    : t.clientY > r.bottom + i || (t.clientX > o.right && t.clientY > o.top);
}
function $n(t, e, n, o, r, i, a, l) {
  var s = o ? t.clientY : t.clientX,
    u = o ? n.height : n.width,
    d = o ? n.top : n.left,
    f = o ? n.bottom : n.right,
    m = false;
  if (!a) {
    if (l && Be < u * r) {
      if ((!Ie && (Oe === 1 ? s > d + (u * i) / 2 : s < f - (u * i) / 2) && (Ie = true), Ie)) m = true;
      else if (Oe === 1 ? s < d + Be : s > f - Be) return -Oe;
    } else if (s > d + (u * (1 - r)) / 2 && s < f - (u * (1 - r)) / 2) return qn(e);
  }
  return (m = m || a), m && (s < d + (u * i) / 2 || s > f - (u * i) / 2) ? (s > d + u / 2 ? 1 : -1) : 0;
}
function qn(t) {
  return K(c) < K(t) ? 1 : -1;
}
function Kn(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, o = 0; n--; ) o += e.charCodeAt(n);
  return o.toString(36);
}
function Jn(t) {
  je.length = 0;
  for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
    var o = e[n];
    o.checked && je.push(o);
  }
}
function ke(t) {
  return setTimeout(t, 0);
}
function lt(t) {
  return clearTimeout(t);
}
Ue &&
  D(document, "touchmove", function (t) {
    (p.active || ve) && t.cancelable && t.preventDefault();
  });
p.utils = {
  on: D,
  off: S,
  css: h2,
  find: Wt,
  is: function (e, n) {
    return !!Z(e, n, e, false);
  },
  extend: Mn,
  throttle: Gt,
  closest: Z,
  toggleClass: V,
  clone: zt,
  index: K,
  nextTick: ke,
  cancelNextTick: lt,
  detectDirection: $t,
  getChild: we
};
p.get = function (t) {
  return t[q];
};
p.mount = function () {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
  e[0].constructor === Array && (e = e[0]),
    e.forEach(function (o) {
      if (!o.prototype || !o.prototype.constructor)
        throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
      o.utils && (p.utils = te(te({}, p.utils), o.utils)), xe.mount(o);
    });
};
p.create = function (t, e) {
  return new p(t, e);
};
p.version = xn;
var P = [];
var Se;
var st;
var ut = false;
var nt;
var ot;
var ze;
var De;
function Zn() {
  function t() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    };
    for (var e in this) e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this));
  }
  return (
    (t.prototype = {
      dragStarted: function (n) {
        var o = n.originalEvent;
        this.sortable.nativeDraggable
          ? D(document, "dragover", this._handleAutoScroll)
          : this.options.supportPointer
            ? D(document, "pointermove", this._handleFallbackAutoScroll)
            : o.touches
              ? D(document, "touchmove", this._handleFallbackAutoScroll)
              : D(document, "mousemove", this._handleFallbackAutoScroll);
      },
      dragOverCompleted: function (n) {
        var o = n.originalEvent;
        !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
      },
      drop: function () {
        this.sortable.nativeDraggable
          ? S(document, "dragover", this._handleAutoScroll)
          : (S(document, "pointermove", this._handleFallbackAutoScroll),
            S(document, "touchmove", this._handleFallbackAutoScroll),
            S(document, "mousemove", this._handleFallbackAutoScroll)),
          Mt(),
          He(),
          Fn();
      },
      nulling: function () {
        (ze = st = Se = ut = De = nt = ot = null), (P.length = 0);
      },
      _handleFallbackAutoScroll: function (n) {
        this._handleAutoScroll(n, true);
      },
      _handleAutoScroll: function (n, o) {
        var r = this,
          i = (n.touches ? n.touches[0] : n).clientX,
          a = (n.touches ? n.touches[0] : n).clientY,
          l = document.elementFromPoint(i, a);
        if (((ze = n), o || this.options.forceAutoScrollFallback || Ae || ie || _e)) {
          rt(n, this.options, l, o);
          var s = ue(l, true);
          ut &&
            (!De || i !== nt || a !== ot) &&
            (De && Mt(),
            (De = setInterval(function () {
              var u = ue(document.elementFromPoint(i, a), true);
              u !== s && ((s = u), He()), rt(n, r.options, u, o);
            }, 10)),
            (nt = i),
            (ot = a));
        } else {
          if (!this.options.bubbleScroll || ue(l, true) === ee()) {
            He();
            return;
          }
          rt(n, this.options, ue(l, false), false);
        }
      }
    }),
    re(t, {
      pluginName: "scroll",
      initializeByDefault: true
    })
  );
}
function He() {
  P.forEach(function (t) {
    clearInterval(t.pid);
  }),
    (P = []);
}
function Mt() {
  clearInterval(De);
}
var rt = Gt(function (t, e, n, o) {
  if (e.scroll) {
    var r = (t.touches ? t.touches[0] : t).clientX,
      i = (t.touches ? t.touches[0] : t).clientY,
      a = e.scrollSensitivity,
      l = e.scrollSpeed,
      s = ee(),
      u = false,
      d;
    st !== n && ((st = n), He(), (Se = e.scroll), (d = e.scrollFn), Se === true && (Se = ue(n, true)));
    var f = 0,
      m = Se;
    do {
      var y = m,
        b = M(y),
        E = b.top,
        k = b.bottom,
        H = b.left,
        F = b.right,
        A = b.width,
        L = b.height,
        ne = void 0,
        j = void 0,
        Q = y.scrollWidth,
        v = y.scrollHeight,
        w = h2(y),
        x = y.scrollLeft,
        N = y.scrollTop;
      y === s
        ? ((ne = A < Q && (w.overflowX === "auto" || w.overflowX === "scroll" || w.overflowX === "visible")),
          (j = L < v && (w.overflowY === "auto" || w.overflowY === "scroll" || w.overflowY === "visible")))
        : ((ne = A < Q && (w.overflowX === "auto" || w.overflowX === "scroll")),
          (j = L < v && (w.overflowY === "auto" || w.overflowY === "scroll")));
      var _ = ne && (Math.abs(F - r) <= a && x + A < Q) - (Math.abs(H - r) <= a && !!x),
        T = j && (Math.abs(k - i) <= a && N + L < v) - (Math.abs(E - i) <= a && !!N);
      if (!P[f]) for (var R = 0; R <= f; R++) P[R] || (P[R] = {});
      (P[f].vx != _ || P[f].vy != T || P[f].el !== y) &&
        ((P[f].el = y),
        (P[f].vx = _),
        (P[f].vy = T),
        clearInterval(P[f].pid),
        (_ != 0 || T != 0) &&
          ((u = true),
          (P[f].pid = setInterval(
            function () {
              o && this.layer === 0 && p.active._onTouchMove(ze);
              var Y = P[this.layer].vy ? P[this.layer].vy * l : 0,
                z = P[this.layer].vx ? P[this.layer].vx * l : 0;
              (typeof d == "function" && d.call(p.dragged.parentNode[q], z, Y, t, ze, P[this.layer].el) !== "continue") ||
                jt(P[this.layer].el, z, Y);
            }.bind({
              layer: f
            }),
            24
          )))),
        f++;
    } while (e.bubbleScroll && m !== s && (m = ue(m, false)));
    ut = u;
  }
}, 30);
var Zt = function (e) {
  var n = e.originalEvent,
    o = e.putSortable,
    r = e.dragEl,
    i = e.activeSortable,
    a = e.dispatchSortableEvent,
    l = e.hideGhostForTarget,
    s = e.unhideGhostForTarget;
  if (n) {
    var u = o || i;
    l();
    var d = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
      f = document.elementFromPoint(d.clientX, d.clientY);
    s(),
      u &&
        !u.el.contains(f) &&
        (a("spill"),
        this.onSpill({
          dragEl: r,
          putSortable: o
        }));
  }
};
function ht() {}
ht.prototype = {
  startIndex: null,
  dragStart: function (e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function (e) {
    var n = e.dragEl,
      o = e.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var r = we(this.sortable.el, this.startIndex, this.options);
    r ? this.sortable.el.insertBefore(n, r) : this.sortable.el.appendChild(n), this.sortable.animateAll(), o && o.animateAll();
  },
  drop: Zt
};
re(ht, {
  pluginName: "revertOnSpill"
});
function pt() {}
pt.prototype = {
  onSpill: function (e) {
    var n = e.dragEl,
      o = e.putSortable,
      r = o || this.sortable;
    r.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), r.animateAll();
  },
  drop: Zt
};
re(pt, {
  pluginName: "removeOnSpill"
});
p.mount(new Zn());
p.mount(pt, ht);
function Qn(t) {
  return t == null ? t : JSON.parse(JSON.stringify(t));
}
function eo(t) {
  getCurrentInstance() && onUnmounted(t);
}
function to(t) {
  getCurrentInstance() ? onMounted(t) : nextTick(t);
}
var Qt = null;
var en = null;
function Ft(t = null, e = null) {
  (Qt = t), (en = e);
}
function no() {
  return {
    data: Qt,
    clonedData: en
  };
}
var Rt = Symbol("cloneElement");
function tn(...t) {
  var j, Q;
  const e = (j = getCurrentInstance()) == null ? void 0 : j.proxy;
  let n = null;
  const o = t[0];
  let [, r, i] = t;
  Array.isArray(unref(r)) || ((i = r), (r = null));
  let a = null;
  const { immediate: l = true, clone: s = Qn, customUpdate: u } = (Q = unref(i)) != null ? Q : {};
  function d(v) {
    var R;
    const { from: w, oldIndex: x, item: N } = v;
    n = Array.from(w.childNodes);
    const _ = unref((R = unref(r)) == null ? void 0 : R[x]),
      T = s(_);
    Ft(_, T), (N[Rt] = T);
  }
  function f(v) {
    const w = v.item[Rt];
    if (!yn(w)) {
      if ((qe(v.item), isRef(r))) {
        const x = [...unref(r)];
        r.value = St(x, v.newDraggableIndex, w);
        return;
      }
      St(unref(r), v.newDraggableIndex, w);
    }
  }
  function m(v) {
    const { from: w, item: x, oldIndex: N, oldDraggableIndex: _, pullMode: T, clone: R } = v;
    if ((Dt(w, x, N), T === "clone")) {
      qe(R);
      return;
    }
    if (isRef(r)) {
      const Y = [...unref(r)];
      r.value = Et(Y, _);
      return;
    }
    Et(unref(r), _);
  }
  function y(v) {
    if (u) {
      u(v);
      return;
    }
    const { from: w, item: x, oldIndex: N, oldDraggableIndex: _, newDraggableIndex: T } = v;
    if ((qe(x), Dt(w, x, N), isRef(r))) {
      const R = [...unref(r)];
      r.value = wt(R, _, T);
      return;
    }
    wt(unref(r), _, T);
  }
  function b(v) {
    const { newIndex: w, oldIndex: x, from: N, to: _ } = v;
    let T = null;
    const R = w === x && N === _;
    try {
      if (R) {
        let Y = null;
        n == null ||
          n.some((z, ae) => {
            if (Y && (n == null ? void 0 : n.length) !== _.childNodes.length) return N.insertBefore(Y, z.nextSibling), true;
            const ce = _.childNodes[ae];
            Y = _ == null ? void 0 : _.replaceChild(z, ce);
          });
      }
    } catch (Y) {
      T = Y;
    } finally {
      n = null;
    }
    nextTick(() => {
      if ((Ft(), T)) throw T;
    });
  }
  const E = {
    onUpdate: y,
    onStart: d,
    onAdd: f,
    onRemove: m,
    onEnd: b
  };
  function k(v) {
    const w = unref(o);
    return (
      v || (v = wn(w) ? En(w, e == null ? void 0 : e.$el) : w), v && !_n(v) && (v = v.$el), v || mn("Root element not found"), v
    );
  }
  function H() {
    var N;
    const _ = (N = unref(i)) != null ? N : {},
      { immediate: v, clone: w } = _,
      x = Ve(_, ["immediate", "clone"]);
    return (
      _t(x, (T, R) => {
        Tn(T) &&
          (x[T] = (Y, ...z) => {
            const ae = no();
            return Cn(Y, ae), R(Y, ...z);
          });
      }),
      Dn(r === null ? {} : E, x)
    );
  }
  const F = v => {
    (v = k(v)), a && A.destroy(), (a = new p(v, H()));
  };
  watch(
    () => i,
    () => {
      a &&
        _t(H(), (v, w) => {
          a == null || a.option(v, w);
        });
    },
    { deep: true }
  );
  const A = {
      option: (v, w) => (a == null ? void 0 : a.option(v, w)),
      destroy: () => {
        a == null || a.destroy(), (a = null);
      },
      save: () => (a == null ? void 0 : a.save()),
      toArray: () => (a == null ? void 0 : a.toArray()),
      closest: (...v) => (a == null ? void 0 : a.closest(...v))
    },
    L = () => (A == null ? void 0 : A.option("disabled", true)),
    ne = () => (A == null ? void 0 : A.option("disabled", false));
  return (
    to(() => {
      l && F();
    }),
    eo(A.destroy),
    fe({ start: F, pause: L, resume: ne }, A)
  );
}
var ct = ["update", "start", "add", "remove", "choose", "unchoose", "end", "sort", "filter", "clone", "move", "change"];
var oo = [
  "clone",
  "animation",
  "ghostClass",
  "group",
  "sort",
  "disabled",
  "store",
  "handle",
  "draggable",
  "swapThreshold",
  "invertSwap",
  "invertedSwapThreshold",
  "removeCloneOnHide",
  "direction",
  "chosenClass",
  "dragClass",
  "ignore",
  "filter",
  "preventOnFilter",
  "easing",
  "setData",
  "dropBubble",
  "dragoverBubble",
  "dataIdAttr",
  "delay",
  "delayOnTouchOnly",
  "touchStartThreshold",
  "forceFallback",
  "fallbackClass",
  "fallbackOnBody",
  "fallbackTolerance",
  "fallbackOffset",
  "supportPointer",
  "emptyInsertThreshold",
  "scroll",
  "forceAutoScrollFallback",
  "scrollSensitivity",
  "scrollSpeed",
  "bubbleScroll",
  "modelValue",
  "tag",
  "target",
  "customUpdate",
  ...ct.map(t => `on${t.replace(/^\S/, e => e.toUpperCase())}`)
];
var lo = defineComponent({
  name: "VueDraggable",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: oo,
  emits: ["update:modelValue", ...ct],
  setup(t, { slots: e, emit: n, expose: o, attrs: r }) {
    const i = ct.reduce((d, f) => {
        const m = `on${f.replace(/^\S/, y => y.toUpperCase())}`;
        return (d[m] = (...y) => n(f, ...y)), d;
      }, {}),
      a = computed(() => {
        const y = toRefs(t),
          { modelValue: d } = y,
          f = Ve(y, ["modelValue"]),
          m = Object.entries(f).reduce((b, [E, k]) => {
            const H = unref(k);
            return H !== void 0 && (b[E] = H), b;
          }, {});
        return fe(fe({}, i), bn(fe(fe({}, r), m)));
      }),
      l = computed({
        get: () => t.modelValue,
        set: d => n("update:modelValue", d)
      }),
      s = ref(),
      u = reactive(tn(t.target || s, l, a));
    return (
      o(u),
      () => {
        var d;
        return h(t.tag || "div", { ref: s }, (d = e == null ? void 0 : e.default) == null ? void 0 : d.call(e, u));
      }
    );
  }
});
var Xt = {
  mounted: "mounted",
  unmounted: "unmounted"
};
var it = /* @__PURE__ */ new WeakMap();
var so = {
  [Xt.mounted](t, e) {
    const n = isProxy(e.value) ? [e.value] : e.value,
      [o, r] = n,
      i = tn(t, o, r);
    it.set(t, i.destroy);
  },
  [Xt.unmounted](t) {
    var e;
    (e = it.get(t)) == null || e(), it.delete(t);
  }
};
export { lo as VueDraggable, tn as useDraggable, so as vDraggable };
/*! Bundled license information:

vue-draggable-plus/dist/vue-draggable-plus.js:
  (**!
   * Sortable 1.15.2
   * @author	RubaXa   <trash@rubaxa.org>
   * @author	owenm    <owen23355@gmail.com>
   * @license MIT
   *)
*/
//# sourceMappingURL=vue-draggable-plus.js.map
