function Gs(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
function Js(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Zs = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ol = Symbol.for("react.element"),
  $d = Symbol.for("react.portal"),
  Vd = Symbol.for("react.fragment"),
  Hd = Symbol.for("react.strict_mode"),
  Wd = Symbol.for("react.profiler"),
  Qd = Symbol.for("react.provider"),
  Kd = Symbol.for("react.context"),
  Yd = Symbol.for("react.forward_ref"),
  Xd = Symbol.for("react.suspense"),
  Gd = Symbol.for("react.memo"),
  Jd = Symbol.for("react.lazy"),
  xa = Symbol.iterator;
function Zd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xa && e[xa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var qs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  bs = Object.assign,
  ec = {};
function ur(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ec),
    (this.updater = n || qs);
}
ur.prototype.isReactComponent = {};
ur.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ur.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function tc() {}
tc.prototype = ur.prototype;
function pu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ec),
    (this.updater = n || qs);
}
var hu = (pu.prototype = new tc());
hu.constructor = pu;
bs(hu, ur.prototype);
hu.isPureReactComponent = !0;
var Ca = Array.isArray,
  nc = Object.prototype.hasOwnProperty,
  mu = { current: null },
  rc = { key: !0, ref: !0, __self: !0, __source: !0 };
function lc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      nc.call(t, r) && !rc.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: ol,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: mu.current,
  };
}
function qd(e, t) {
  return {
    $$typeof: ol,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function vu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ol;
}
function bd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Pa = /\/+/g;
function Bo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? bd("" + e.key)
    : t.toString(36);
}
function Fl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ol:
          case $d:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Bo(i, 0) : r),
      Ca(l)
        ? ((n = ""),
          e != null && (n = e.replace(Pa, "$&/") + "/"),
          Fl(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (vu(l) &&
            (l = qd(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Pa, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Ca(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + Bo(o, u);
      i += Fl(o, t, n, a, l);
    }
  else if (((a = Zd(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Bo(o, u++)), (i += Fl(o, t, n, a, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return i;
}
function yl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Fl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function ep(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Oe = { current: null },
  Ul = { transition: null },
  tp = {
    ReactCurrentDispatcher: Oe,
    ReactCurrentBatchConfig: Ul,
    ReactCurrentOwner: mu,
  };
W.Children = {
  map: yl,
  forEach: function (e, t, n) {
    yl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      yl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      yl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!vu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
W.Component = ur;
W.Fragment = Vd;
W.Profiler = Wd;
W.PureComponent = pu;
W.StrictMode = Hd;
W.Suspense = Xd;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tp;
W.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = bs({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = mu.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      nc.call(t, a) &&
        !rc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: ol, type: e.type, key: l, ref: o, props: r, _owner: i };
};
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: Kd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Qd, _context: e }),
    (e.Consumer = e)
  );
};
W.createElement = lc;
W.createFactory = function (e) {
  var t = lc.bind(null, e);
  return (t.type = e), t;
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (e) {
  return { $$typeof: Yd, render: e };
};
W.isValidElement = vu;
W.lazy = function (e) {
  return { $$typeof: Jd, _payload: { _status: -1, _result: e }, _init: ep };
};
W.memo = function (e, t) {
  return { $$typeof: Gd, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function (e) {
  var t = Ul.transition;
  Ul.transition = {};
  try {
    e();
  } finally {
    Ul.transition = t;
  }
};
W.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
W.useCallback = function (e, t) {
  return Oe.current.useCallback(e, t);
};
W.useContext = function (e) {
  return Oe.current.useContext(e);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (e) {
  return Oe.current.useDeferredValue(e);
};
W.useEffect = function (e, t) {
  return Oe.current.useEffect(e, t);
};
W.useId = function () {
  return Oe.current.useId();
};
W.useImperativeHandle = function (e, t, n) {
  return Oe.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function (e, t) {
  return Oe.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function (e, t) {
  return Oe.current.useLayoutEffect(e, t);
};
W.useMemo = function (e, t) {
  return Oe.current.useMemo(e, t);
};
W.useReducer = function (e, t, n) {
  return Oe.current.useReducer(e, t, n);
};
W.useRef = function (e) {
  return Oe.current.useRef(e);
};
W.useState = function (e) {
  return Oe.current.useState(e);
};
W.useSyncExternalStore = function (e, t, n) {
  return Oe.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function () {
  return Oe.current.useTransition();
};
W.version = "18.2.0";
Zs.exports = W;
var _ = Zs.exports;
const np = Js(_),
  rp = Gs({ __proto__: null, default: np }, [_]);
var oc = { exports: {} },
  Ke = {},
  ic = { exports: {} },
  uc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, j) {
    var B = D.length;
    D.push(j);
    e: for (; 0 < B; ) {
      var X = (B - 1) >>> 1,
        b = D[X];
      if (0 < l(b, j)) (D[X] = j), (D[B] = b), (B = X);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var j = D[0],
      B = D.pop();
    if (B !== j) {
      D[0] = B;
      e: for (var X = 0, b = D.length, dt = b >>> 1; X < dt; ) {
        var ke = 2 * (X + 1) - 1,
          rt = D[ke],
          De = ke + 1,
          zt = D[De];
        if (0 > l(rt, B))
          De < b && 0 > l(zt, rt)
            ? ((D[X] = zt), (D[De] = B), (X = De))
            : ((D[X] = rt), (D[ke] = B), (X = ke));
        else if (De < b && 0 > l(zt, B)) (D[X] = zt), (D[De] = B), (X = De);
        else break e;
      }
    }
    return j;
  }
  function l(D, j) {
    var B = D.sortIndex - j.sortIndex;
    return B !== 0 ? B : D.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
    s = [],
    c = 1,
    p = null,
    m = 3,
    E = !1,
    S = !1,
    w = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(D) {
    for (var j = n(s); j !== null; ) {
      if (j.callback === null) r(s);
      else if (j.startTime <= D)
        r(s), (j.sortIndex = j.expirationTime), t(a, j);
      else break;
      j = n(s);
    }
  }
  function x(D) {
    if (((w = !1), h(D), !S))
      if (n(a) !== null) (S = !0), Dt(L);
      else {
        var j = n(s);
        j !== null && ne(x, j.startTime - D);
      }
  }
  function L(D, j) {
    (S = !1), w && ((w = !1), d(T), (T = -1)), (E = !0);
    var B = m;
    try {
      for (
        h(j), p = n(a);
        p !== null && (!(p.expirationTime > j) || (D && !Y()));

      ) {
        var X = p.callback;
        if (typeof X == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var b = X(p.expirationTime <= j);
          (j = e.unstable_now()),
            typeof b == "function" ? (p.callback = b) : p === n(a) && r(a),
            h(j);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var dt = !0;
      else {
        var ke = n(s);
        ke !== null && ne(x, ke.startTime - j), (dt = !1);
      }
      return dt;
    } finally {
      (p = null), (m = B), (E = !1);
    }
  }
  var v = !1,
    P = null,
    T = -1,
    O = 5,
    U = -1;
  function Y() {
    return !(e.unstable_now() - U < O);
  }
  function me() {
    if (P !== null) {
      var D = e.unstable_now();
      U = D;
      var j = !0;
      try {
        j = P(!0, D);
      } finally {
        j ? pe() : ((v = !1), (P = null));
      }
    } else v = !1;
  }
  var pe;
  if (typeof f == "function")
    pe = function () {
      f(me);
    };
  else if (typeof MessageChannel < "u") {
    var Xe = new MessageChannel(),
      Rn = Xe.port2;
    (Xe.port1.onmessage = me),
      (pe = function () {
        Rn.postMessage(null);
      });
  } else
    pe = function () {
      C(me, 0);
    };
  function Dt(D) {
    (P = D), v || ((v = !0), pe());
  }
  function ne(D, j) {
    T = C(function () {
      D(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || E || ((S = !0), Dt(L));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (O = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (D) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = m;
      }
      var B = m;
      m = j;
      try {
        return D();
      } finally {
        m = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, j) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var B = m;
      m = D;
      try {
        return j();
      } finally {
        m = B;
      }
    }),
    (e.unstable_scheduleCallback = function (D, j, B) {
      var X = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? X + B : X))
          : (B = X),
        D)
      ) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return (
        (b = B + b),
        (D = {
          id: c++,
          callback: j,
          priorityLevel: D,
          startTime: B,
          expirationTime: b,
          sortIndex: -1,
        }),
        B > X
          ? ((D.sortIndex = B),
            t(s, D),
            n(a) === null &&
              D === n(s) &&
              (w ? (d(T), (T = -1)) : (w = !0), ne(x, B - X)))
          : ((D.sortIndex = b), t(a, D), S || E || ((S = !0), Dt(L))),
        D
      );
    }),
    (e.unstable_shouldYield = Y),
    (e.unstable_wrapCallback = function (D) {
      var j = m;
      return function () {
        var B = m;
        m = j;
        try {
          return D.apply(this, arguments);
        } finally {
          m = B;
        }
      };
    });
})(uc);
ic.exports = uc;
var lp = ic.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ac = _,
  Qe = lp;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var sc = new Set(),
  Br = {};
function Cn(e, t) {
  qn(e, t), qn(e + "Capture", t);
}
function qn(e, t) {
  for (Br[e] = t, e = 0; e < t.length; e++) sc.add(t[e]);
}
var Pt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  mi = Object.prototype.hasOwnProperty,
  op =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _a = {},
  Ra = {};
function ip(e) {
  return mi.call(Ra, e)
    ? !0
    : mi.call(_a, e)
      ? !1
      : op.test(e)
        ? (Ra[e] = !0)
        : ((_a[e] = !0), !1);
}
function up(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ap(e, t, n, r) {
  if (t === null || typeof t > "u" || up(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Fe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  _e[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  _e[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  _e[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  _e[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  _e[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  _e[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  _e[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var yu = /[\-:]([a-z])/g;
function gu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yu, gu);
    _e[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yu, gu);
    _e[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(yu, gu);
  _e[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  _e[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new Fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  _e[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function wu(e, t, n, r) {
  var l = _e.hasOwnProperty(t) ? _e[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ap(t, n, l, r) && (n = null),
    r || l === null
      ? ip(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Tt = ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gl = Symbol.for("react.element"),
  zn = Symbol.for("react.portal"),
  Mn = Symbol.for("react.fragment"),
  Su = Symbol.for("react.strict_mode"),
  vi = Symbol.for("react.profiler"),
  cc = Symbol.for("react.provider"),
  fc = Symbol.for("react.context"),
  Eu = Symbol.for("react.forward_ref"),
  yi = Symbol.for("react.suspense"),
  gi = Symbol.for("react.suspense_list"),
  ku = Symbol.for("react.memo"),
  jt = Symbol.for("react.lazy"),
  dc = Symbol.for("react.offscreen"),
  La = Symbol.iterator;
function pr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (La && e[La]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ue = Object.assign,
  $o;
function _r(e) {
  if ($o === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      $o = (t && t[1]) || "";
    }
  return (
    `
` +
    $o +
    e
  );
}
var Vo = !1;
function Ho(e, t) {
  if (!e || Vo) return "";
  Vo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var a =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Vo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? _r(e) : "";
}
function sp(e) {
  switch (e.tag) {
    case 5:
      return _r(e.type);
    case 16:
      return _r("Lazy");
    case 13:
      return _r("Suspense");
    case 19:
      return _r("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ho(e.type, !1)), e;
    case 11:
      return (e = Ho(e.type.render, !1)), e;
    case 1:
      return (e = Ho(e.type, !0)), e;
    default:
      return "";
  }
}
function wi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mn:
      return "Fragment";
    case zn:
      return "Portal";
    case vi:
      return "Profiler";
    case Su:
      return "StrictMode";
    case yi:
      return "Suspense";
    case gi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case fc:
        return (e.displayName || "Context") + ".Consumer";
      case cc:
        return (e._context.displayName || "Context") + ".Provider";
      case Eu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ku:
        return (
          (t = e.displayName || null), t !== null ? t : wi(e.type) || "Memo"
        );
      case jt:
        (t = e._payload), (e = e._init);
        try {
          return wi(e(t));
        } catch {}
    }
  return null;
}
function cp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return wi(t);
    case 8:
      return t === Su ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function qt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function pc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function fp(e) {
  var t = pc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function wl(e) {
  e._valueTracker || (e._valueTracker = fp(e));
}
function hc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = pc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Yl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Si(e, t) {
  var n = t.checked;
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ta(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = qt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function mc(e, t) {
  (t = t.checked), t != null && wu(e, "checked", t, !1);
}
function Ei(e, t) {
  mc(e, t);
  var n = qt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ki(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ki(e, t.type, qt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Na(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ki(e, t, n) {
  (t !== "number" || Yl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Rr = Array.isArray;
function Kn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + qt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function xi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return ue({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Da(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Rr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: qt(n) };
}
function vc(e, t) {
  var n = qt(t.value),
    r = qt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function za(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function yc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ci(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? yc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Sl,
  gc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Sl = Sl || document.createElement("div"),
          Sl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Sl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function $r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Nr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  dp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nr).forEach(function (e) {
  dp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Nr[t] = Nr[e]);
  });
});
function wc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Nr.hasOwnProperty(e) && Nr[e])
      ? ("" + t).trim()
      : t + "px";
}
function Sc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = wc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var pp = ue(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Pi(e, t) {
  if (t) {
    if (pp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function _i(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ri = null;
function xu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Li = null,
  Yn = null,
  Xn = null;
function Ma(e) {
  if ((e = al(e))) {
    if (typeof Li != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = ko(t)), Li(e.stateNode, e.type, t));
  }
}
function Ec(e) {
  Yn ? (Xn ? Xn.push(e) : (Xn = [e])) : (Yn = e);
}
function kc() {
  if (Yn) {
    var e = Yn,
      t = Xn;
    if (((Xn = Yn = null), Ma(e), t)) for (e = 0; e < t.length; e++) Ma(t[e]);
  }
}
function xc(e, t) {
  return e(t);
}
function Cc() {}
var Wo = !1;
function Pc(e, t, n) {
  if (Wo) return e(t, n);
  Wo = !0;
  try {
    return xc(e, t, n);
  } finally {
    (Wo = !1), (Yn !== null || Xn !== null) && (Cc(), kc());
  }
}
function Vr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ko(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var Ti = !1;
if (Pt)
  try {
    var hr = {};
    Object.defineProperty(hr, "passive", {
      get: function () {
        Ti = !0;
      },
    }),
      window.addEventListener("test", hr, hr),
      window.removeEventListener("test", hr, hr);
  } catch {
    Ti = !1;
  }
function hp(e, t, n, r, l, o, i, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var Dr = !1,
  Xl = null,
  Gl = !1,
  Ni = null,
  mp = {
    onError: function (e) {
      (Dr = !0), (Xl = e);
    },
  };
function vp(e, t, n, r, l, o, i, u, a) {
  (Dr = !1), (Xl = null), hp.apply(mp, arguments);
}
function yp(e, t, n, r, l, o, i, u, a) {
  if ((vp.apply(this, arguments), Dr)) {
    if (Dr) {
      var s = Xl;
      (Dr = !1), (Xl = null);
    } else throw Error(R(198));
    Gl || ((Gl = !0), (Ni = s));
  }
}
function Pn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function _c(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Oa(e) {
  if (Pn(e) !== e) throw Error(R(188));
}
function gp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Pn(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Oa(l), e;
        if (o === r) return Oa(l), t;
        o = o.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function Rc(e) {
  return (e = gp(e)), e !== null ? Lc(e) : null;
}
function Lc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Lc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Tc = Qe.unstable_scheduleCallback,
  Fa = Qe.unstable_cancelCallback,
  wp = Qe.unstable_shouldYield,
  Sp = Qe.unstable_requestPaint,
  de = Qe.unstable_now,
  Ep = Qe.unstable_getCurrentPriorityLevel,
  Cu = Qe.unstable_ImmediatePriority,
  Nc = Qe.unstable_UserBlockingPriority,
  Jl = Qe.unstable_NormalPriority,
  kp = Qe.unstable_LowPriority,
  Dc = Qe.unstable_IdlePriority,
  go = null,
  yt = null;
function xp(e) {
  if (yt && typeof yt.onCommitFiberRoot == "function")
    try {
      yt.onCommitFiberRoot(go, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var st = Math.clz32 ? Math.clz32 : _p,
  Cp = Math.log,
  Pp = Math.LN2;
function _p(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Cp(e) / Pp) | 0)) | 0;
}
var El = 64,
  kl = 4194304;
function Lr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Zl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Lr(u)) : ((o &= i), o !== 0 && (r = Lr(o)));
  } else (i = n & ~l), i !== 0 ? (r = Lr(i)) : o !== 0 && (r = Lr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - st(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Rp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Lp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - st(o),
      u = 1 << i,
      a = l[i];
    a === -1
      ? (!(u & n) || u & r) && (l[i] = Rp(u, t))
      : a <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Di(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function zc() {
  var e = El;
  return (El <<= 1), !(El & 4194240) && (El = 64), e;
}
function Qo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function il(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - st(t)),
    (e[t] = n);
}
function Tp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - st(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Pu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - st(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var G = 0;
function Mc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Oc,
  _u,
  Fc,
  Uc,
  Ic,
  zi = !1,
  xl = [],
  Wt = null,
  Qt = null,
  Kt = null,
  Hr = new Map(),
  Wr = new Map(),
  Bt = [],
  Np =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Ua(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wt = null;
      break;
    case "dragenter":
    case "dragleave":
      Qt = null;
      break;
    case "mouseover":
    case "mouseout":
      Kt = null;
      break;
    case "pointerover":
    case "pointerout":
      Hr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wr.delete(t.pointerId);
  }
}
function mr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = al(t)), t !== null && _u(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Dp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Wt = mr(Wt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Qt = mr(Qt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Kt = mr(Kt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Hr.set(o, mr(Hr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Wr.set(o, mr(Wr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function jc(e) {
  var t = cn(e.target);
  if (t !== null) {
    var n = Pn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = _c(n)), t !== null)) {
          (e.blockedOn = t),
            Ic(e.priority, function () {
              Fc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Il(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Mi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ri = r), n.target.dispatchEvent(r), (Ri = null);
    } else return (t = al(n)), t !== null && _u(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ia(e, t, n) {
  Il(e) && n.delete(t);
}
function zp() {
  (zi = !1),
    Wt !== null && Il(Wt) && (Wt = null),
    Qt !== null && Il(Qt) && (Qt = null),
    Kt !== null && Il(Kt) && (Kt = null),
    Hr.forEach(Ia),
    Wr.forEach(Ia);
}
function vr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    zi ||
      ((zi = !0),
      Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, zp)));
}
function Qr(e) {
  function t(l) {
    return vr(l, e);
  }
  if (0 < xl.length) {
    vr(xl[0], e);
    for (var n = 1; n < xl.length; n++) {
      var r = xl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Wt !== null && vr(Wt, e),
      Qt !== null && vr(Qt, e),
      Kt !== null && vr(Kt, e),
      Hr.forEach(t),
      Wr.forEach(t),
      n = 0;
    n < Bt.length;
    n++
  )
    (r = Bt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Bt.length && ((n = Bt[0]), n.blockedOn === null); )
    jc(n), n.blockedOn === null && Bt.shift();
}
var Gn = Tt.ReactCurrentBatchConfig,
  ql = !0;
function Mp(e, t, n, r) {
  var l = G,
    o = Gn.transition;
  Gn.transition = null;
  try {
    (G = 1), Ru(e, t, n, r);
  } finally {
    (G = l), (Gn.transition = o);
  }
}
function Op(e, t, n, r) {
  var l = G,
    o = Gn.transition;
  Gn.transition = null;
  try {
    (G = 4), Ru(e, t, n, r);
  } finally {
    (G = l), (Gn.transition = o);
  }
}
function Ru(e, t, n, r) {
  if (ql) {
    var l = Mi(e, t, n, r);
    if (l === null) ti(e, t, r, bl, n), Ua(e, r);
    else if (Dp(l, e, t, n, r)) r.stopPropagation();
    else if ((Ua(e, r), t & 4 && -1 < Np.indexOf(e))) {
      for (; l !== null; ) {
        var o = al(l);
        if (
          (o !== null && Oc(o),
          (o = Mi(e, t, n, r)),
          o === null && ti(e, t, r, bl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ti(e, t, r, null, n);
  }
}
var bl = null;
function Mi(e, t, n, r) {
  if (((bl = null), (e = xu(r)), (e = cn(e)), e !== null))
    if (((t = Pn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = _c(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (bl = e), null;
}
function Ac(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Ep()) {
        case Cu:
          return 1;
        case Nc:
          return 4;
        case Jl:
        case kp:
          return 16;
        case Dc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Vt = null,
  Lu = null,
  jl = null;
function Bc() {
  if (jl) return jl;
  var e,
    t = Lu,
    n = t.length,
    r,
    l = "value" in Vt ? Vt.value : Vt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (jl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Al(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Cl() {
  return !0;
}
function ja() {
  return !1;
}
function Ye(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Cl
        : ja),
      (this.isPropagationStopped = ja),
      this
    );
  }
  return (
    ue(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Cl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Cl));
      },
      persist: function () {},
      isPersistent: Cl,
    }),
    t
  );
}
var ar = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Tu = Ye(ar),
  ul = ue({}, ar, { view: 0, detail: 0 }),
  Fp = Ye(ul),
  Ko,
  Yo,
  yr,
  wo = ue({}, ul, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Nu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== yr &&
            (yr && e.type === "mousemove"
              ? ((Ko = e.screenX - yr.screenX), (Yo = e.screenY - yr.screenY))
              : (Yo = Ko = 0),
            (yr = e)),
          Ko);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Yo;
    },
  }),
  Aa = Ye(wo),
  Up = ue({}, wo, { dataTransfer: 0 }),
  Ip = Ye(Up),
  jp = ue({}, ul, { relatedTarget: 0 }),
  Xo = Ye(jp),
  Ap = ue({}, ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bp = Ye(Ap),
  $p = ue({}, ar, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Vp = Ye($p),
  Hp = ue({}, ar, { data: 0 }),
  Ba = Ye(Hp),
  Wp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Qp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Kp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Yp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Kp[e]) ? !!t[e] : !1;
}
function Nu() {
  return Yp;
}
var Xp = ue({}, ul, {
    key: function (e) {
      if (e.key) {
        var t = Wp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Al(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Qp[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Nu,
    charCode: function (e) {
      return e.type === "keypress" ? Al(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Al(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Gp = Ye(Xp),
  Jp = ue({}, wo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  $a = Ye(Jp),
  Zp = ue({}, ul, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Nu,
  }),
  qp = Ye(Zp),
  bp = ue({}, ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  eh = Ye(bp),
  th = ue({}, wo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  nh = Ye(th),
  rh = [9, 13, 27, 32],
  Du = Pt && "CompositionEvent" in window,
  zr = null;
Pt && "documentMode" in document && (zr = document.documentMode);
var lh = Pt && "TextEvent" in window && !zr,
  $c = Pt && (!Du || (zr && 8 < zr && 11 >= zr)),
  Va = " ",
  Ha = !1;
function Vc(e, t) {
  switch (e) {
    case "keyup":
      return rh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Hc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var On = !1;
function oh(e, t) {
  switch (e) {
    case "compositionend":
      return Hc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ha = !0), Va);
    case "textInput":
      return (e = t.data), e === Va && Ha ? null : e;
    default:
      return null;
  }
}
function ih(e, t) {
  if (On)
    return e === "compositionend" || (!Du && Vc(e, t))
      ? ((e = Bc()), (jl = Lu = Vt = null), (On = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return $c && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var uh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Wa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!uh[e.type] : t === "textarea";
}
function Wc(e, t, n, r) {
  Ec(r),
    (t = eo(t, "onChange")),
    0 < t.length &&
      ((n = new Tu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Mr = null,
  Kr = null;
function ah(e) {
  tf(e, 0);
}
function So(e) {
  var t = In(e);
  if (hc(t)) return e;
}
function sh(e, t) {
  if (e === "change") return t;
}
var Qc = !1;
if (Pt) {
  var Go;
  if (Pt) {
    var Jo = "oninput" in document;
    if (!Jo) {
      var Qa = document.createElement("div");
      Qa.setAttribute("oninput", "return;"),
        (Jo = typeof Qa.oninput == "function");
    }
    Go = Jo;
  } else Go = !1;
  Qc = Go && (!document.documentMode || 9 < document.documentMode);
}
function Ka() {
  Mr && (Mr.detachEvent("onpropertychange", Kc), (Kr = Mr = null));
}
function Kc(e) {
  if (e.propertyName === "value" && So(Kr)) {
    var t = [];
    Wc(t, Kr, e, xu(e)), Pc(ah, t);
  }
}
function ch(e, t, n) {
  e === "focusin"
    ? (Ka(), (Mr = t), (Kr = n), Mr.attachEvent("onpropertychange", Kc))
    : e === "focusout" && Ka();
}
function fh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return So(Kr);
}
function dh(e, t) {
  if (e === "click") return So(t);
}
function ph(e, t) {
  if (e === "input" || e === "change") return So(t);
}
function hh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ft = typeof Object.is == "function" ? Object.is : hh;
function Yr(e, t) {
  if (ft(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!mi.call(t, l) || !ft(e[l], t[l])) return !1;
  }
  return !0;
}
function Ya(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xa(e, t) {
  var n = Ya(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ya(n);
  }
}
function Yc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Yc(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Xc() {
  for (var e = window, t = Yl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Yl(e.document);
  }
  return t;
}
function zu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function mh(e) {
  var t = Xc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Yc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && zu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Xa(n, o));
        var i = Xa(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var vh = Pt && "documentMode" in document && 11 >= document.documentMode,
  Fn = null,
  Oi = null,
  Or = null,
  Fi = !1;
function Ga(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Fi ||
    Fn == null ||
    Fn !== Yl(r) ||
    ((r = Fn),
    "selectionStart" in r && zu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Or && Yr(Or, r)) ||
      ((Or = r),
      (r = eo(Oi, "onSelect")),
      0 < r.length &&
        ((t = new Tu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Fn))));
}
function Pl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Un = {
    animationend: Pl("Animation", "AnimationEnd"),
    animationiteration: Pl("Animation", "AnimationIteration"),
    animationstart: Pl("Animation", "AnimationStart"),
    transitionend: Pl("Transition", "TransitionEnd"),
  },
  Zo = {},
  Gc = {};
Pt &&
  ((Gc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Un.animationend.animation,
    delete Un.animationiteration.animation,
    delete Un.animationstart.animation),
  "TransitionEvent" in window || delete Un.transitionend.transition);
function Eo(e) {
  if (Zo[e]) return Zo[e];
  if (!Un[e]) return e;
  var t = Un[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Gc) return (Zo[e] = t[n]);
  return e;
}
var Jc = Eo("animationend"),
  Zc = Eo("animationiteration"),
  qc = Eo("animationstart"),
  bc = Eo("transitionend"),
  ef = new Map(),
  Ja =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function en(e, t) {
  ef.set(e, t), Cn(t, [e]);
}
for (var qo = 0; qo < Ja.length; qo++) {
  var bo = Ja[qo],
    yh = bo.toLowerCase(),
    gh = bo[0].toUpperCase() + bo.slice(1);
  en(yh, "on" + gh);
}
en(Jc, "onAnimationEnd");
en(Zc, "onAnimationIteration");
en(qc, "onAnimationStart");
en("dblclick", "onDoubleClick");
en("focusin", "onFocus");
en("focusout", "onBlur");
en(bc, "onTransitionEnd");
qn("onMouseEnter", ["mouseout", "mouseover"]);
qn("onMouseLeave", ["mouseout", "mouseover"]);
qn("onPointerEnter", ["pointerout", "pointerover"]);
qn("onPointerLeave", ["pointerout", "pointerover"]);
Cn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Cn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Cn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Cn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Cn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Tr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  wh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));
function Za(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), yp(r, t, void 0, e), (e.currentTarget = null);
}
function tf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
          Za(l, u, s), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          Za(l, u, s), (o = a);
        }
    }
  }
  if (Gl) throw ((e = Ni), (Gl = !1), (Ni = null), e);
}
function ee(e, t) {
  var n = t[Bi];
  n === void 0 && (n = t[Bi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (nf(t, e, 2, !1), n.add(r));
}
function ei(e, t, n) {
  var r = 0;
  t && (r |= 4), nf(n, e, r, t);
}
var _l = "_reactListening" + Math.random().toString(36).slice(2);
function Xr(e) {
  if (!e[_l]) {
    (e[_l] = !0),
      sc.forEach(function (n) {
        n !== "selectionchange" && (wh.has(n) || ei(n, !1, e), ei(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_l] || ((t[_l] = !0), ei("selectionchange", !1, t));
  }
}
function nf(e, t, n, r) {
  switch (Ac(t)) {
    case 1:
      var l = Mp;
      break;
    case 4:
      l = Op;
      break;
    default:
      l = Ru;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ti ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function ti(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = cn(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Pc(function () {
    var s = o,
      c = xu(n),
      p = [];
    e: {
      var m = ef.get(e);
      if (m !== void 0) {
        var E = Tu,
          S = e;
        switch (e) {
          case "keypress":
            if (Al(n) === 0) break e;
          case "keydown":
          case "keyup":
            E = Gp;
            break;
          case "focusin":
            (S = "focus"), (E = Xo);
            break;
          case "focusout":
            (S = "blur"), (E = Xo);
            break;
          case "beforeblur":
          case "afterblur":
            E = Xo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            E = Aa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = Ip;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = qp;
            break;
          case Jc:
          case Zc:
          case qc:
            E = Bp;
            break;
          case bc:
            E = eh;
            break;
          case "scroll":
            E = Fp;
            break;
          case "wheel":
            E = nh;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = Vp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = $a;
        }
        var w = (t & 4) !== 0,
          C = !w && e === "scroll",
          d = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var f = s, h; f !== null; ) {
          h = f;
          var x = h.stateNode;
          if (
            (h.tag === 5 &&
              x !== null &&
              ((h = x),
              d !== null && ((x = Vr(f, d)), x != null && w.push(Gr(f, x, h)))),
            C)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((m = new E(m, S, null, n, c)), p.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (E = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Ri &&
            (S = n.relatedTarget || n.fromElement) &&
            (cn(S) || S[_t]))
        )
          break e;
        if (
          (E || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          E
            ? ((S = n.relatedTarget || n.toElement),
              (E = s),
              (S = S ? cn(S) : null),
              S !== null &&
                ((C = Pn(S)), S !== C || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((E = null), (S = s)),
          E !== S)
        ) {
          if (
            ((w = Aa),
            (x = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = $a),
              (x = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (C = E == null ? m : In(E)),
            (h = S == null ? m : In(S)),
            (m = new w(x, f + "leave", E, n, c)),
            (m.target = C),
            (m.relatedTarget = h),
            (x = null),
            cn(c) === s &&
              ((w = new w(d, f + "enter", S, n, c)),
              (w.target = h),
              (w.relatedTarget = C),
              (x = w)),
            (C = x),
            E && S)
          )
            t: {
              for (w = E, d = S, f = 0, h = w; h; h = Dn(h)) f++;
              for (h = 0, x = d; x; x = Dn(x)) h++;
              for (; 0 < f - h; ) (w = Dn(w)), f--;
              for (; 0 < h - f; ) (d = Dn(d)), h--;
              for (; f--; ) {
                if (w === d || (d !== null && w === d.alternate)) break t;
                (w = Dn(w)), (d = Dn(d));
              }
              w = null;
            }
          else w = null;
          E !== null && qa(p, m, E, w, !1),
            S !== null && C !== null && qa(p, C, S, w, !0);
        }
      }
      e: {
        if (
          ((m = s ? In(s) : window),
          (E = m.nodeName && m.nodeName.toLowerCase()),
          E === "select" || (E === "input" && m.type === "file"))
        )
          var L = sh;
        else if (Wa(m))
          if (Qc) L = ph;
          else {
            L = fh;
            var v = ch;
          }
        else
          (E = m.nodeName) &&
            E.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (L = dh);
        if (L && (L = L(e, s))) {
          Wc(p, L, n, c);
          break e;
        }
        v && v(e, m, s),
          e === "focusout" &&
            (v = m._wrapperState) &&
            v.controlled &&
            m.type === "number" &&
            ki(m, "number", m.value);
      }
      switch (((v = s ? In(s) : window), e)) {
        case "focusin":
          (Wa(v) || v.contentEditable === "true") &&
            ((Fn = v), (Oi = s), (Or = null));
          break;
        case "focusout":
          Or = Oi = Fn = null;
          break;
        case "mousedown":
          Fi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Fi = !1), Ga(p, n, c);
          break;
        case "selectionchange":
          if (vh) break;
        case "keydown":
        case "keyup":
          Ga(p, n, c);
      }
      var P;
      if (Du)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        On
          ? Vc(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        ($c &&
          n.locale !== "ko" &&
          (On || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && On && (P = Bc())
            : ((Vt = c),
              (Lu = "value" in Vt ? Vt.value : Vt.textContent),
              (On = !0))),
        (v = eo(s, T)),
        0 < v.length &&
          ((T = new Ba(T, e, null, n, c)),
          p.push({ event: T, listeners: v }),
          P ? (T.data = P) : ((P = Hc(n)), P !== null && (T.data = P)))),
        (P = lh ? oh(e, n) : ih(e, n)) &&
          ((s = eo(s, "onBeforeInput")),
          0 < s.length &&
            ((c = new Ba("onBeforeInput", "beforeinput", null, n, c)),
            p.push({ event: c, listeners: s }),
            (c.data = P)));
    }
    tf(p, t);
  });
}
function Gr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function eo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Vr(e, n)),
      o != null && r.unshift(Gr(e, o, l)),
      (o = Vr(e, t)),
      o != null && r.push(Gr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Dn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qa(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      l
        ? ((a = Vr(n, o)), a != null && i.unshift(Gr(n, a, u)))
        : l || ((a = Vr(n, o)), a != null && i.push(Gr(n, a, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Sh = /\r\n?/g,
  Eh = /\u0000|\uFFFD/g;
function ba(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Sh,
      `
`,
    )
    .replace(Eh, "");
}
function Rl(e, t, n) {
  if (((t = ba(t)), ba(e) !== t && n)) throw Error(R(425));
}
function to() {}
var Ui = null,
  Ii = null;
function ji(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ai = typeof setTimeout == "function" ? setTimeout : void 0,
  kh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  es = typeof Promise == "function" ? Promise : void 0,
  xh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof es < "u"
        ? function (e) {
            return es.resolve(null).then(e).catch(Ch);
          }
        : Ai;
function Ch(e) {
  setTimeout(function () {
    throw e;
  });
}
function ni(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Qr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Qr(t);
}
function Yt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ts(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var sr = Math.random().toString(36).slice(2),
  vt = "__reactFiber$" + sr,
  Jr = "__reactProps$" + sr,
  _t = "__reactContainer$" + sr,
  Bi = "__reactEvents$" + sr,
  Ph = "__reactListeners$" + sr,
  _h = "__reactHandles$" + sr;
function cn(e) {
  var t = e[vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[_t] || n[vt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ts(e); e !== null; ) {
          if ((n = e[vt])) return n;
          e = ts(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function al(e) {
  return (
    (e = e[vt] || e[_t]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function In(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function ko(e) {
  return e[Jr] || null;
}
var $i = [],
  jn = -1;
function tn(e) {
  return { current: e };
}
function te(e) {
  0 > jn || ((e.current = $i[jn]), ($i[jn] = null), jn--);
}
function q(e, t) {
  jn++, ($i[jn] = e.current), (e.current = t);
}
var bt = {},
  Ne = tn(bt),
  je = tn(!1),
  yn = bt;
function bn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ae(e) {
  return (e = e.childContextTypes), e != null;
}
function no() {
  te(je), te(Ne);
}
function ns(e, t, n) {
  if (Ne.current !== bt) throw Error(R(168));
  q(Ne, t), q(je, n);
}
function rf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(R(108, cp(e) || "Unknown", l));
  return ue({}, n, r);
}
function ro(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || bt),
    (yn = Ne.current),
    q(Ne, e),
    q(je, je.current),
    !0
  );
}
function rs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = rf(e, t, yn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      te(je),
      te(Ne),
      q(Ne, e))
    : te(je),
    q(je, n);
}
var St = null,
  xo = !1,
  ri = !1;
function lf(e) {
  St === null ? (St = [e]) : St.push(e);
}
function Rh(e) {
  (xo = !0), lf(e);
}
function nn() {
  if (!ri && St !== null) {
    ri = !0;
    var e = 0,
      t = G;
    try {
      var n = St;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (St = null), (xo = !1);
    } catch (l) {
      throw (St !== null && (St = St.slice(e + 1)), Tc(Cu, nn), l);
    } finally {
      (G = t), (ri = !1);
    }
  }
  return null;
}
var An = [],
  Bn = 0,
  lo = null,
  oo = 0,
  Ze = [],
  qe = 0,
  gn = null,
  Et = 1,
  kt = "";
function an(e, t) {
  (An[Bn++] = oo), (An[Bn++] = lo), (lo = e), (oo = t);
}
function of(e, t, n) {
  (Ze[qe++] = Et), (Ze[qe++] = kt), (Ze[qe++] = gn), (gn = e);
  var r = Et;
  e = kt;
  var l = 32 - st(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - st(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Et = (1 << (32 - st(t) + l)) | (n << l) | r),
      (kt = o + e);
  } else (Et = (1 << o) | (n << l) | r), (kt = e);
}
function Mu(e) {
  e.return !== null && (an(e, 1), of(e, 1, 0));
}
function Ou(e) {
  for (; e === lo; )
    (lo = An[--Bn]), (An[Bn] = null), (oo = An[--Bn]), (An[Bn] = null);
  for (; e === gn; )
    (gn = Ze[--qe]),
      (Ze[qe] = null),
      (kt = Ze[--qe]),
      (Ze[qe] = null),
      (Et = Ze[--qe]),
      (Ze[qe] = null);
}
var We = null,
  He = null,
  le = !1,
  at = null;
function uf(e, t) {
  var n = be(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ls(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (We = e), (He = Yt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (We = e), (He = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = gn !== null ? { id: Et, overflow: kt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (We = e),
            (He = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Vi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Hi(e) {
  if (le) {
    var t = He;
    if (t) {
      var n = t;
      if (!ls(e, t)) {
        if (Vi(e)) throw Error(R(418));
        t = Yt(n.nextSibling);
        var r = We;
        t && ls(e, t)
          ? uf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (We = e));
      }
    } else {
      if (Vi(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (We = e);
    }
  }
}
function os(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  We = e;
}
function Ll(e) {
  if (e !== We) return !1;
  if (!le) return os(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ji(e.type, e.memoizedProps))),
    t && (t = He))
  ) {
    if (Vi(e)) throw (af(), Error(R(418)));
    for (; t; ) uf(e, t), (t = Yt(t.nextSibling));
  }
  if ((os(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              He = Yt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      He = null;
    }
  } else He = We ? Yt(e.stateNode.nextSibling) : null;
  return !0;
}
function af() {
  for (var e = He; e; ) e = Yt(e.nextSibling);
}
function er() {
  (He = We = null), (le = !1);
}
function Fu(e) {
  at === null ? (at = [e]) : at.push(e);
}
var Lh = Tt.ReactCurrentBatchConfig;
function ot(e, t) {
  if (e && e.defaultProps) {
    (t = ue({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var io = tn(null),
  uo = null,
  $n = null,
  Uu = null;
function Iu() {
  Uu = $n = uo = null;
}
function ju(e) {
  var t = io.current;
  te(io), (e._currentValue = t);
}
function Wi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jn(e, t) {
  (uo = e),
    (Uu = $n = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ie = !0), (e.firstContext = null));
}
function tt(e) {
  var t = e._currentValue;
  if (Uu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), $n === null)) {
      if (uo === null) throw Error(R(308));
      ($n = e), (uo.dependencies = { lanes: 0, firstContext: e });
    } else $n = $n.next = e;
  return t;
}
var fn = null;
function Au(e) {
  fn === null ? (fn = [e]) : fn.push(e);
}
function sf(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Au(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Rt(e, r)
  );
}
function Rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var At = !1;
function Bu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function cf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function xt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Xt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), K & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Rt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Au(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Rt(e, n)
  );
}
function Bl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Pu(e, n);
  }
}
function is(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ao(e, t, n, r) {
  var l = e.updateQueue;
  At = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), i === null ? (o = s) : (i.next = s), (i = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (u = c.lastBaseUpdate),
      u !== i &&
        (u === null ? (c.firstBaseUpdate = s) : (u.next = s),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var p = l.baseState;
    (i = 0), (c = s = a = null), (u = o);
    do {
      var m = u.lane,
        E = u.eventTime;
      if ((r & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: E,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            w = u;
          switch (((m = t), (E = n), w.tag)) {
            case 1:
              if (((S = w.payload), typeof S == "function")) {
                p = S.call(E, p, m);
                break e;
              }
              p = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = w.payload),
                (m = typeof S == "function" ? S.call(E, p, m) : S),
                m == null)
              )
                break e;
              p = ue({}, p, m);
              break e;
            case 2:
              At = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (E = {
          eventTime: E,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          c === null ? ((s = c = E), (a = p)) : (c = c.next = E),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = p),
      (l.baseState = a),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = c),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Sn |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function us(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(R(191, l));
        l.call(r);
      }
    }
}
var ff = new ac.Component().refs;
function Qi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Co = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Pn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      l = Jt(e),
      o = xt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Xt(e, o, l)),
      t !== null && (ct(t, e, l, r), Bl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      l = Jt(e),
      o = xt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Xt(e, o, l)),
      t !== null && (ct(t, e, l, r), Bl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Me(),
      r = Jt(e),
      l = xt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Xt(e, l, r)),
      t !== null && (ct(t, e, r, n), Bl(t, e, r));
  },
};
function as(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Yr(n, r) || !Yr(l, o)
        : !0
  );
}
function df(e, t, n) {
  var r = !1,
    l = bt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = tt(o))
      : ((l = Ae(t) ? yn : Ne.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? bn(e, l) : bt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Co),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function ss(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Co.enqueueReplaceState(t, t.state, null);
}
function Ki(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = ff), Bu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = tt(o))
    : ((o = Ae(t) ? yn : Ne.current), (l.context = bn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Qi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Co.enqueueReplaceState(l, l.state, null),
      ao(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function gr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === ff && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Tl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function cs(e) {
  var t = e._init;
  return t(e._payload);
}
function pf(e) {
  function t(d, f) {
    if (e) {
      var h = d.deletions;
      h === null ? ((d.deletions = [f]), (d.flags |= 16)) : h.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function l(d, f) {
    return (d = Zt(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, f, h) {
    return (
      (d.index = h),
      e
        ? ((h = d.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((d.flags |= 2), f) : h)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, f, h, x) {
    return f === null || f.tag !== 6
      ? ((f = ci(h, d.mode, x)), (f.return = d), f)
      : ((f = l(f, h)), (f.return = d), f);
  }
  function a(d, f, h, x) {
    var L = h.type;
    return L === Mn
      ? c(d, f, h.props.children, x, h.key)
      : f !== null &&
          (f.elementType === L ||
            (typeof L == "object" &&
              L !== null &&
              L.$$typeof === jt &&
              cs(L) === f.type))
        ? ((x = l(f, h.props)), (x.ref = gr(d, f, h)), (x.return = d), x)
        : ((x = Kl(h.type, h.key, h.props, null, d.mode, x)),
          (x.ref = gr(d, f, h)),
          (x.return = d),
          x);
  }
  function s(d, f, h, x) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = fi(h, d.mode, x)), (f.return = d), f)
      : ((f = l(f, h.children || [])), (f.return = d), f);
  }
  function c(d, f, h, x, L) {
    return f === null || f.tag !== 7
      ? ((f = vn(h, d.mode, x, L)), (f.return = d), f)
      : ((f = l(f, h)), (f.return = d), f);
  }
  function p(d, f, h) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = ci("" + f, d.mode, h)), (f.return = d), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case gl:
          return (
            (h = Kl(f.type, f.key, f.props, null, d.mode, h)),
            (h.ref = gr(d, null, f)),
            (h.return = d),
            h
          );
        case zn:
          return (f = fi(f, d.mode, h)), (f.return = d), f;
        case jt:
          var x = f._init;
          return p(d, x(f._payload), h);
      }
      if (Rr(f) || pr(f))
        return (f = vn(f, d.mode, h, null)), (f.return = d), f;
      Tl(d, f);
    }
    return null;
  }
  function m(d, f, h, x) {
    var L = f !== null ? f.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return L !== null ? null : u(d, f, "" + h, x);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case gl:
          return h.key === L ? a(d, f, h, x) : null;
        case zn:
          return h.key === L ? s(d, f, h, x) : null;
        case jt:
          return (L = h._init), m(d, f, L(h._payload), x);
      }
      if (Rr(h) || pr(h)) return L !== null ? null : c(d, f, h, x, null);
      Tl(d, h);
    }
    return null;
  }
  function E(d, f, h, x, L) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (d = d.get(h) || null), u(f, d, "" + x, L);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case gl:
          return (d = d.get(x.key === null ? h : x.key) || null), a(f, d, x, L);
        case zn:
          return (d = d.get(x.key === null ? h : x.key) || null), s(f, d, x, L);
        case jt:
          var v = x._init;
          return E(d, f, h, v(x._payload), L);
      }
      if (Rr(x) || pr(x)) return (d = d.get(h) || null), c(f, d, x, L, null);
      Tl(f, x);
    }
    return null;
  }
  function S(d, f, h, x) {
    for (
      var L = null, v = null, P = f, T = (f = 0), O = null;
      P !== null && T < h.length;
      T++
    ) {
      P.index > T ? ((O = P), (P = null)) : (O = P.sibling);
      var U = m(d, P, h[T], x);
      if (U === null) {
        P === null && (P = O);
        break;
      }
      e && P && U.alternate === null && t(d, P),
        (f = o(U, f, T)),
        v === null ? (L = U) : (v.sibling = U),
        (v = U),
        (P = O);
    }
    if (T === h.length) return n(d, P), le && an(d, T), L;
    if (P === null) {
      for (; T < h.length; T++)
        (P = p(d, h[T], x)),
          P !== null &&
            ((f = o(P, f, T)), v === null ? (L = P) : (v.sibling = P), (v = P));
      return le && an(d, T), L;
    }
    for (P = r(d, P); T < h.length; T++)
      (O = E(P, d, T, h[T], x)),
        O !== null &&
          (e && O.alternate !== null && P.delete(O.key === null ? T : O.key),
          (f = o(O, f, T)),
          v === null ? (L = O) : (v.sibling = O),
          (v = O));
    return (
      e &&
        P.forEach(function (Y) {
          return t(d, Y);
        }),
      le && an(d, T),
      L
    );
  }
  function w(d, f, h, x) {
    var L = pr(h);
    if (typeof L != "function") throw Error(R(150));
    if (((h = L.call(h)), h == null)) throw Error(R(151));
    for (
      var v = (L = null), P = f, T = (f = 0), O = null, U = h.next();
      P !== null && !U.done;
      T++, U = h.next()
    ) {
      P.index > T ? ((O = P), (P = null)) : (O = P.sibling);
      var Y = m(d, P, U.value, x);
      if (Y === null) {
        P === null && (P = O);
        break;
      }
      e && P && Y.alternate === null && t(d, P),
        (f = o(Y, f, T)),
        v === null ? (L = Y) : (v.sibling = Y),
        (v = Y),
        (P = O);
    }
    if (U.done) return n(d, P), le && an(d, T), L;
    if (P === null) {
      for (; !U.done; T++, U = h.next())
        (U = p(d, U.value, x)),
          U !== null &&
            ((f = o(U, f, T)), v === null ? (L = U) : (v.sibling = U), (v = U));
      return le && an(d, T), L;
    }
    for (P = r(d, P); !U.done; T++, U = h.next())
      (U = E(P, d, T, U.value, x)),
        U !== null &&
          (e && U.alternate !== null && P.delete(U.key === null ? T : U.key),
          (f = o(U, f, T)),
          v === null ? (L = U) : (v.sibling = U),
          (v = U));
    return (
      e &&
        P.forEach(function (me) {
          return t(d, me);
        }),
      le && an(d, T),
      L
    );
  }
  function C(d, f, h, x) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Mn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case gl:
          e: {
            for (var L = h.key, v = f; v !== null; ) {
              if (v.key === L) {
                if (((L = h.type), L === Mn)) {
                  if (v.tag === 7) {
                    n(d, v.sibling),
                      (f = l(v, h.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  v.elementType === L ||
                  (typeof L == "object" &&
                    L !== null &&
                    L.$$typeof === jt &&
                    cs(L) === v.type)
                ) {
                  n(d, v.sibling),
                    (f = l(v, h.props)),
                    (f.ref = gr(d, v, h)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, v);
                break;
              } else t(d, v);
              v = v.sibling;
            }
            h.type === Mn
              ? ((f = vn(h.props.children, d.mode, x, h.key)),
                (f.return = d),
                (d = f))
              : ((x = Kl(h.type, h.key, h.props, null, d.mode, x)),
                (x.ref = gr(d, f, h)),
                (x.return = d),
                (d = x));
          }
          return i(d);
        case zn:
          e: {
            for (v = h.key; f !== null; ) {
              if (f.key === v)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  n(d, f.sibling),
                    (f = l(f, h.children || [])),
                    (f.return = d),
                    (d = f);
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            (f = fi(h, d.mode, x)), (f.return = d), (d = f);
          }
          return i(d);
        case jt:
          return (v = h._init), C(d, f, v(h._payload), x);
      }
      if (Rr(h)) return S(d, f, h, x);
      if (pr(h)) return w(d, f, h, x);
      Tl(d, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = l(f, h)), (f.return = d), (d = f))
          : (n(d, f), (f = ci(h, d.mode, x)), (f.return = d), (d = f)),
        i(d))
      : n(d, f);
  }
  return C;
}
var tr = pf(!0),
  hf = pf(!1),
  sl = {},
  gt = tn(sl),
  Zr = tn(sl),
  qr = tn(sl);
function dn(e) {
  if (e === sl) throw Error(R(174));
  return e;
}
function $u(e, t) {
  switch ((q(qr, t), q(Zr, e), q(gt, sl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ci(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ci(t, e));
  }
  te(gt), q(gt, t);
}
function nr() {
  te(gt), te(Zr), te(qr);
}
function mf(e) {
  dn(qr.current);
  var t = dn(gt.current),
    n = Ci(t, e.type);
  t !== n && (q(Zr, e), q(gt, n));
}
function Vu(e) {
  Zr.current === e && (te(gt), te(Zr));
}
var oe = tn(0);
function so(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var li = [];
function Hu() {
  for (var e = 0; e < li.length; e++)
    li[e]._workInProgressVersionPrimary = null;
  li.length = 0;
}
var $l = Tt.ReactCurrentDispatcher,
  oi = Tt.ReactCurrentBatchConfig,
  wn = 0,
  ie = null,
  ve = null,
  Se = null,
  co = !1,
  Fr = !1,
  br = 0,
  Th = 0;
function Re() {
  throw Error(R(321));
}
function Wu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ft(e[n], t[n])) return !1;
  return !0;
}
function Qu(e, t, n, r, l, o) {
  if (
    ((wn = o),
    (ie = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    ($l.current = e === null || e.memoizedState === null ? Mh : Oh),
    (e = n(r, l)),
    Fr)
  ) {
    o = 0;
    do {
      if (((Fr = !1), (br = 0), 25 <= o)) throw Error(R(301));
      (o += 1),
        (Se = ve = null),
        (t.updateQueue = null),
        ($l.current = Fh),
        (e = n(r, l));
    } while (Fr);
  }
  if (
    (($l.current = fo),
    (t = ve !== null && ve.next !== null),
    (wn = 0),
    (Se = ve = ie = null),
    (co = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function Ku() {
  var e = br !== 0;
  return (br = 0), e;
}
function mt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Se === null ? (ie.memoizedState = Se = e) : (Se = Se.next = e), Se;
}
function nt() {
  if (ve === null) {
    var e = ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ve.next;
  var t = Se === null ? ie.memoizedState : Se.next;
  if (t !== null) (Se = t), (ve = e);
  else {
    if (e === null) throw Error(R(310));
    (ve = e),
      (e = {
        memoizedState: ve.memoizedState,
        baseState: ve.baseState,
        baseQueue: ve.baseQueue,
        queue: ve.queue,
        next: null,
      }),
      Se === null ? (ie.memoizedState = Se = e) : (Se = Se.next = e);
  }
  return Se;
}
function el(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ii(e) {
  var t = nt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = ve,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      a = null,
      s = o;
    do {
      var c = s.lane;
      if ((wn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var p = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = p), (i = r)) : (a = a.next = p),
          (ie.lanes |= c),
          (Sn |= c);
      }
      s = s.next;
    } while (s !== null && s !== o);
    a === null ? (i = r) : (a.next = u),
      ft(r, t.memoizedState) || (Ie = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ie.lanes |= o), (Sn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ui(e) {
  var t = nt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    ft(o, t.memoizedState) || (Ie = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function vf() {}
function yf(e, t) {
  var n = ie,
    r = nt(),
    l = t(),
    o = !ft(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Ie = !0)),
    (r = r.queue),
    Yu(Sf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      tl(9, wf.bind(null, n, r, l, t), void 0, null),
      Ee === null)
    )
      throw Error(R(349));
    wn & 30 || gf(n, t, l);
  }
  return l;
}
function gf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ie.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function wf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ef(t) && kf(e);
}
function Sf(e, t, n) {
  return n(function () {
    Ef(t) && kf(e);
  });
}
function Ef(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ft(e, n);
  } catch {
    return !0;
  }
}
function kf(e) {
  var t = Rt(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function fs(e) {
  var t = mt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: el,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = zh.bind(null, ie, e)),
    [t.memoizedState, e]
  );
}
function tl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ie.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function xf() {
  return nt().memoizedState;
}
function Vl(e, t, n, r) {
  var l = mt();
  (ie.flags |= e),
    (l.memoizedState = tl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Po(e, t, n, r) {
  var l = nt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ve !== null) {
    var i = ve.memoizedState;
    if (((o = i.destroy), r !== null && Wu(r, i.deps))) {
      l.memoizedState = tl(t, n, o, r);
      return;
    }
  }
  (ie.flags |= e), (l.memoizedState = tl(1 | t, n, o, r));
}
function ds(e, t) {
  return Vl(8390656, 8, e, t);
}
function Yu(e, t) {
  return Po(2048, 8, e, t);
}
function Cf(e, t) {
  return Po(4, 2, e, t);
}
function Pf(e, t) {
  return Po(4, 4, e, t);
}
function _f(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Rf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Po(4, 4, _f.bind(null, t, e), n)
  );
}
function Xu() {}
function Lf(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Tf(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Nf(e, t, n) {
  return wn & 21
    ? (ft(n, t) || ((n = zc()), (ie.lanes |= n), (Sn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n));
}
function Nh(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = oi.transition;
  oi.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), (oi.transition = r);
  }
}
function Df() {
  return nt().memoizedState;
}
function Dh(e, t, n) {
  var r = Jt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    zf(e))
  )
    Mf(t, n);
  else if (((n = sf(e, t, n, r)), n !== null)) {
    var l = Me();
    ct(n, e, r, l), Of(n, t, r);
  }
}
function zh(e, t, n) {
  var r = Jt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (zf(e)) Mf(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), ft(u, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), Au(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = sf(e, t, l, r)),
      n !== null && ((l = Me()), ct(n, e, r, l), Of(n, t, r));
  }
}
function zf(e) {
  var t = e.alternate;
  return e === ie || (t !== null && t === ie);
}
function Mf(e, t) {
  Fr = co = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Of(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Pu(e, n);
  }
}
var fo = {
    readContext: tt,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useInsertionEffect: Re,
    useLayoutEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useMutableSource: Re,
    useSyncExternalStore: Re,
    useId: Re,
    unstable_isNewReconciler: !1,
  },
  Mh = {
    readContext: tt,
    useCallback: function (e, t) {
      return (mt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: tt,
    useEffect: ds,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Vl(4194308, 4, _f.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Vl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Vl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = mt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = mt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Dh.bind(null, ie, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = mt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: fs,
    useDebugValue: Xu,
    useDeferredValue: function (e) {
      return (mt().memoizedState = e);
    },
    useTransition: function () {
      var e = fs(!1),
        t = e[0];
      return (e = Nh.bind(null, e[1])), (mt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ie,
        l = mt();
      if (le) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), Ee === null)) throw Error(R(349));
        wn & 30 || gf(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        ds(Sf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        tl(9, wf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = mt(),
        t = Ee.identifierPrefix;
      if (le) {
        var n = kt,
          r = Et;
        (n = (r & ~(1 << (32 - st(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = br++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Th++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Oh = {
    readContext: tt,
    useCallback: Lf,
    useContext: tt,
    useEffect: Yu,
    useImperativeHandle: Rf,
    useInsertionEffect: Cf,
    useLayoutEffect: Pf,
    useMemo: Tf,
    useReducer: ii,
    useRef: xf,
    useState: function () {
      return ii(el);
    },
    useDebugValue: Xu,
    useDeferredValue: function (e) {
      var t = nt();
      return Nf(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = ii(el)[0],
        t = nt().memoizedState;
      return [e, t];
    },
    useMutableSource: vf,
    useSyncExternalStore: yf,
    useId: Df,
    unstable_isNewReconciler: !1,
  },
  Fh = {
    readContext: tt,
    useCallback: Lf,
    useContext: tt,
    useEffect: Yu,
    useImperativeHandle: Rf,
    useInsertionEffect: Cf,
    useLayoutEffect: Pf,
    useMemo: Tf,
    useReducer: ui,
    useRef: xf,
    useState: function () {
      return ui(el);
    },
    useDebugValue: Xu,
    useDeferredValue: function (e) {
      var t = nt();
      return ve === null ? (t.memoizedState = e) : Nf(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = ui(el)[0],
        t = nt().memoizedState;
      return [e, t];
    },
    useMutableSource: vf,
    useSyncExternalStore: yf,
    useId: Df,
    unstable_isNewReconciler: !1,
  };
function rr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += sp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ai(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Yi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Uh = typeof WeakMap == "function" ? WeakMap : Map;
function Ff(e, t, n) {
  (n = xt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ho || ((ho = !0), (ru = r)), Yi(e, t);
    }),
    n
  );
}
function Uf(e, t, n) {
  (n = xt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Yi(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Yi(e, t),
          typeof r != "function" &&
            (Gt === null ? (Gt = new Set([this])) : Gt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ps(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Uh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Jh.bind(null, e, t, n)), t.then(e, e));
}
function hs(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ms(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = xt(-1, 1)), (t.tag = 2), Xt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ih = Tt.ReactCurrentOwner,
  Ie = !1;
function ze(e, t, n, r) {
  t.child = e === null ? hf(t, null, n, r) : tr(t, e.child, n, r);
}
function vs(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Jn(t, l),
    (r = Qu(e, t, n, r, o, l)),
    (n = Ku()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Lt(e, t, l))
      : (le && n && Mu(t), (t.flags |= 1), ze(e, t, r, l), t.child)
  );
}
function ys(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !na(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), If(e, t, o, r, l))
      : ((e = Kl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Yr), n(i, r) && e.ref === t.ref)
    )
      return Lt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Zt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function If(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Yr(o, r) && e.ref === t.ref)
      if (((Ie = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ie = !0);
      else return (t.lanes = e.lanes), Lt(e, t, l);
  }
  return Xi(e, t, n, r, l);
}
function jf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        q(Hn, Ve),
        (Ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          q(Hn, Ve),
          (Ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        q(Hn, Ve),
        (Ve |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      q(Hn, Ve),
      (Ve |= r);
  return ze(e, t, l, n), t.child;
}
function Af(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Xi(e, t, n, r, l) {
  var o = Ae(n) ? yn : Ne.current;
  return (
    (o = bn(t, o)),
    Jn(t, l),
    (n = Qu(e, t, n, r, o, l)),
    (r = Ku()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Lt(e, t, l))
      : (le && r && Mu(t), (t.flags |= 1), ze(e, t, n, l), t.child)
  );
}
function gs(e, t, n, r, l) {
  if (Ae(n)) {
    var o = !0;
    ro(t);
  } else o = !1;
  if ((Jn(t, l), t.stateNode === null))
    Hl(e, t), df(t, n, r), Ki(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = tt(s))
      : ((s = Ae(n) ? yn : Ne.current), (s = bn(t, s)));
    var c = n.getDerivedStateFromProps,
      p =
        typeof c == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || a !== s) && ss(t, i, r, s)),
      (At = !1);
    var m = t.memoizedState;
    (i.state = m),
      ao(t, r, i, l),
      (a = t.memoizedState),
      u !== r || m !== a || je.current || At
        ? (typeof c == "function" && (Qi(t, n, c, r), (a = t.memoizedState)),
          (u = At || as(t, n, u, r, m, a, s))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = s),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      cf(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : ot(t.type, u)),
      (i.props = s),
      (p = t.pendingProps),
      (m = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = tt(a))
        : ((a = Ae(n) ? yn : Ne.current), (a = bn(t, a)));
    var E = n.getDerivedStateFromProps;
    (c =
      typeof E == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== p || m !== a) && ss(t, i, r, a)),
      (At = !1),
      (m = t.memoizedState),
      (i.state = m),
      ao(t, r, i, l);
    var S = t.memoizedState;
    u !== p || m !== S || je.current || At
      ? (typeof E == "function" && (Qi(t, n, E, r), (S = t.memoizedState)),
        (s = At || as(t, n, s, r, m, S, a) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, S, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, S, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (i.props = r),
        (i.state = S),
        (i.context = a),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Gi(e, t, n, r, o, l);
}
function Gi(e, t, n, r, l, o) {
  Af(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && rs(t, n, !1), Lt(e, t, o);
  (r = t.stateNode), (Ih.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = tr(t, e.child, null, o)), (t.child = tr(t, null, u, o)))
      : ze(e, t, u, o),
    (t.memoizedState = r.state),
    l && rs(t, n, !0),
    t.child
  );
}
function Bf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ns(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ns(e, t.context, !1),
    $u(e, t.containerInfo);
}
function ws(e, t, n, r, l) {
  return er(), Fu(l), (t.flags |= 256), ze(e, t, n, r), t.child;
}
var Ji = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $f(e, t, n) {
  var r = t.pendingProps,
    l = oe.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    q(oe, l & 1),
    e === null)
  )
    return (
      Hi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Lo(i, r, 0, null)),
              (e = vn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Zi(n)),
              (t.memoizedState = Ji),
              e)
            : Gu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return jh(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Zt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = Zt(u, o)) : ((o = vn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Zi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ji),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Zt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Gu(e, t) {
  return (
    (t = Lo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Nl(e, t, n, r) {
  return (
    r !== null && Fu(r),
    tr(t, e.child, null, n),
    (e = Gu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function jh(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ai(Error(R(422)))), Nl(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Lo({ mode: "visible", children: r.children }, l, 0, null)),
          (o = vn(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && tr(t, e.child, null, i),
          (t.child.memoizedState = Zi(i)),
          (t.memoizedState = Ji),
          o);
  if (!(t.mode & 1)) return Nl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(R(419))), (r = ai(o, r, void 0)), Nl(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), Ie || u)) {
    if (((r = Ee), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Rt(e, l), ct(r, e, l, -1));
    }
    return ta(), (r = ai(Error(R(421)))), Nl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Zh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (He = Yt(l.nextSibling)),
      (We = t),
      (le = !0),
      (at = null),
      e !== null &&
        ((Ze[qe++] = Et),
        (Ze[qe++] = kt),
        (Ze[qe++] = gn),
        (Et = e.id),
        (kt = e.overflow),
        (gn = t)),
      (t = Gu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ss(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Wi(e.return, t, n);
}
function si(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Vf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ze(e, t, r.children, n), (r = oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ss(e, n, t);
        else if (e.tag === 19) Ss(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((q(oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && so(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          si(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && so(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        si(t, !0, n, null, o);
        break;
      case "together":
        si(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Hl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Lt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Sn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Zt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Zt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ah(e, t, n) {
  switch (t.tag) {
    case 3:
      Bf(t), er();
      break;
    case 5:
      mf(t);
      break;
    case 1:
      Ae(t.type) && ro(t);
      break;
    case 4:
      $u(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      q(io, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (q(oe, oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? $f(e, t, n)
            : (q(oe, oe.current & 1),
              (e = Lt(e, t, n)),
              e !== null ? e.sibling : null);
      q(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Vf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        q(oe, oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), jf(e, t, n);
  }
  return Lt(e, t, n);
}
var Hf, qi, Wf, Qf;
Hf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
qi = function () {};
Wf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), dn(gt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Si(e, l)), (r = Si(e, r)), (o = []);
        break;
      case "select":
        (l = ue({}, l, { value: void 0 })),
          (r = ue({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = xi(e, l)), (r = xi(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = to);
    }
    Pi(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var u = l[s];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Br.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = a);
        else
          s === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (o = o || []).push(s, a))
            : s === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (o = o || []).push(s, "" + a)
              : s !== "suppressContentEditableWarning" &&
                s !== "suppressHydrationWarning" &&
                (Br.hasOwnProperty(s)
                  ? (a != null && s === "onScroll" && ee("scroll", e),
                    o || u === a || (o = []))
                  : (o = o || []).push(s, a));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Qf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function wr(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Bh(e, t, n) {
  var r = t.pendingProps;
  switch ((Ou(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Le(t), null;
    case 1:
      return Ae(t.type) && no(), Le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        nr(),
        te(je),
        te(Ne),
        Hu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ll(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), at !== null && (iu(at), (at = null)))),
        qi(e, t),
        Le(t),
        null
      );
    case 5:
      Vu(t);
      var l = dn(qr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Wf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Le(t), null;
        }
        if (((e = dn(gt.current)), Ll(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[vt] = t), (r[Jr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Tr.length; l++) ee(Tr[l], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee("error", r), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              Ta(r, o), ee("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ee("invalid", r);
              break;
            case "textarea":
              Da(r, o), ee("invalid", r);
          }
          Pi(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Rl(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Rl(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Br.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  ee("scroll", r);
            }
          switch (n) {
            case "input":
              wl(r), Na(r, o, !0);
              break;
            case "textarea":
              wl(r), za(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = to);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = yc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[vt] = t),
            (e[Jr] = r),
            Hf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = _i(n, r)), n)) {
              case "dialog":
                ee("cancel", e), ee("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Tr.length; l++) ee(Tr[l], e);
                l = r;
                break;
              case "source":
                ee("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), (l = r);
                break;
              case "details":
                ee("toggle", e), (l = r);
                break;
              case "input":
                Ta(e, r), (l = Si(e, r)), ee("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ue({}, r, { value: void 0 })),
                  ee("invalid", e);
                break;
              case "textarea":
                Da(e, r), (l = xi(e, r)), ee("invalid", e);
                break;
              default:
                l = r;
            }
            Pi(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === "style"
                  ? Sc(e, a)
                  : o === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && gc(e, a))
                    : o === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && $r(e, a)
                        : typeof a == "number" && $r(e, "" + a)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Br.hasOwnProperty(o)
                          ? a != null && o === "onScroll" && ee("scroll", e)
                          : a != null && wu(e, o, a, i));
              }
            switch (n) {
              case "input":
                wl(e), Na(e, r, !1);
                break;
              case "textarea":
                wl(e), za(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + qt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Kn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Kn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = to);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Le(t), null;
    case 6:
      if (e && t.stateNode != null) Qf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = dn(qr.current)), dn(gt.current), Ll(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[vt] = t),
            (o = r.nodeValue !== n) && ((e = We), e !== null))
          )
            switch (e.tag) {
              case 3:
                Rl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Rl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[vt] = t),
            (t.stateNode = r);
      }
      return Le(t), null;
    case 13:
      if (
        (te(oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && He !== null && t.mode & 1 && !(t.flags & 128))
          af(), er(), (t.flags |= 98560), (o = !1);
        else if (((o = Ll(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(R(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(R(317));
            o[vt] = t;
          } else
            er(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Le(t), (o = !1);
        } else at !== null && (iu(at), (at = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || oe.current & 1 ? ye === 0 && (ye = 3) : ta())),
          t.updateQueue !== null && (t.flags |= 4),
          Le(t),
          null);
    case 4:
      return (
        nr(), qi(e, t), e === null && Xr(t.stateNode.containerInfo), Le(t), null
      );
    case 10:
      return ju(t.type._context), Le(t), null;
    case 17:
      return Ae(t.type) && no(), Le(t), null;
    case 19:
      if ((te(oe), (o = t.memoizedState), o === null)) return Le(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) wr(o, !1);
        else {
          if (ye !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = so(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    wr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return q(oe, (oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            de() > lr &&
            ((t.flags |= 128), (r = !0), wr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = so(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              wr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !le)
            )
              return Le(t), null;
          } else
            2 * de() - o.renderingStartTime > lr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), wr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = de()),
          (t.sibling = null),
          (n = oe.current),
          q(oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Le(t), null);
    case 22:
    case 23:
      return (
        ea(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ve & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function $h(e, t) {
  switch ((Ou(t), t.tag)) {
    case 1:
      return (
        Ae(t.type) && no(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        nr(),
        te(je),
        te(Ne),
        Hu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Vu(t), null;
    case 13:
      if (
        (te(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        er();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(oe), null;
    case 4:
      return nr(), null;
    case 10:
      return ju(t.type._context), null;
    case 22:
    case 23:
      return ea(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Dl = !1,
  Te = !1,
  Vh = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function Vn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        se(e, t, r);
      }
    else n.current = null;
}
function bi(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var Es = !1;
function Hh(e, t) {
  if (((Ui = ql), (e = Xc()), zu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            a = -1,
            s = 0,
            c = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var E;
              p !== n || (l !== 0 && p.nodeType !== 3) || (u = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (a = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (E = p.firstChild) !== null;

            )
              (m = p), (p = E);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++s === l && (u = i),
                m === o && ++c === r && (a = i),
                (E = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = E;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ii = { focusedElem: e, selectionRange: n }, ql = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var w = S.memoizedProps,
                    C = S.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : ot(t.type, w),
                      C,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (x) {
          se(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (S = Es), (Es = !1), S;
}
function Ur(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && bi(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function _o(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function eu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Kf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Kf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[vt], delete t[Jr], delete t[Bi], delete t[Ph], delete t[_h])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Yf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ks(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Yf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function tu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = to));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (tu(e, t, n), e = e.sibling; e !== null; ) tu(e, t, n), (e = e.sibling);
}
function nu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (nu(e, t, n), e = e.sibling; e !== null; ) nu(e, t, n), (e = e.sibling);
}
var Ce = null,
  it = !1;
function Ut(e, t, n) {
  for (n = n.child; n !== null; ) Xf(e, t, n), (n = n.sibling);
}
function Xf(e, t, n) {
  if (yt && typeof yt.onCommitFiberUnmount == "function")
    try {
      yt.onCommitFiberUnmount(go, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Te || Vn(n, t);
    case 6:
      var r = Ce,
        l = it;
      (Ce = null),
        Ut(e, t, n),
        (Ce = r),
        (it = l),
        Ce !== null &&
          (it
            ? ((e = Ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ce.removeChild(n.stateNode));
      break;
    case 18:
      Ce !== null &&
        (it
          ? ((e = Ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? ni(e.parentNode, n)
              : e.nodeType === 1 && ni(e, n),
            Qr(e))
          : ni(Ce, n.stateNode));
      break;
    case 4:
      (r = Ce),
        (l = it),
        (Ce = n.stateNode.containerInfo),
        (it = !0),
        Ut(e, t, n),
        (Ce = r),
        (it = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Te &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && bi(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Ut(e, t, n);
      break;
    case 1:
      if (
        !Te &&
        (Vn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          se(n, t, u);
        }
      Ut(e, t, n);
      break;
    case 21:
      Ut(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Te = (r = Te) || n.memoizedState !== null), Ut(e, t, n), (Te = r))
        : Ut(e, t, n);
      break;
    default:
      Ut(e, t, n);
  }
}
function xs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Vh()),
      t.forEach(function (r) {
        var l = qh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function lt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (Ce = u.stateNode), (it = !1);
              break e;
            case 3:
              (Ce = u.stateNode.containerInfo), (it = !0);
              break e;
            case 4:
              (Ce = u.stateNode.containerInfo), (it = !0);
              break e;
          }
          u = u.return;
        }
        if (Ce === null) throw Error(R(160));
        Xf(o, i, l), (Ce = null), (it = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (s) {
        se(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Gf(t, e), (t = t.sibling);
}
function Gf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((lt(t, e), ht(e), r & 4)) {
        try {
          Ur(3, e, e.return), _o(3, e);
        } catch (w) {
          se(e, e.return, w);
        }
        try {
          Ur(5, e, e.return);
        } catch (w) {
          se(e, e.return, w);
        }
      }
      break;
    case 1:
      lt(t, e), ht(e), r & 512 && n !== null && Vn(n, n.return);
      break;
    case 5:
      if (
        (lt(t, e),
        ht(e),
        r & 512 && n !== null && Vn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          $r(l, "");
        } catch (w) {
          se(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && mc(l, o),
              _i(u, i);
            var s = _i(u, o);
            for (i = 0; i < a.length; i += 2) {
              var c = a[i],
                p = a[i + 1];
              c === "style"
                ? Sc(l, p)
                : c === "dangerouslySetInnerHTML"
                  ? gc(l, p)
                  : c === "children"
                    ? $r(l, p)
                    : wu(l, c, p, s);
            }
            switch (u) {
              case "input":
                Ei(l, o);
                break;
              case "textarea":
                vc(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var E = o.value;
                E != null
                  ? Kn(l, !!o.multiple, E, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Kn(l, !!o.multiple, o.defaultValue, !0)
                      : Kn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Jr] = o;
          } catch (w) {
            se(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((lt(t, e), ht(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          se(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (lt(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Qr(t.containerInfo);
        } catch (w) {
          se(e, e.return, w);
        }
      break;
    case 4:
      lt(t, e), ht(e);
      break;
    case 13:
      lt(t, e),
        ht(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (qu = de())),
        r & 4 && xs(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Te = (s = Te) || c), lt(t, e), (Te = s)) : lt(t, e),
        ht(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (z = e, c = e.child; c !== null; ) {
            for (p = z = c; z !== null; ) {
              switch (((m = z), (E = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ur(4, m, m.return);
                  break;
                case 1:
                  Vn(m, m.return);
                  var S = m.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (w) {
                      se(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Vn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Ps(p);
                    continue;
                  }
              }
              E !== null ? ((E.return = m), (z = E)) : Ps(p);
            }
            c = c.sibling;
          }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                (l = p.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = p.stateNode),
                      (a = p.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = wc("display", i)));
              } catch (w) {
                se(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (c === null)
              try {
                p.stateNode.nodeValue = s ? "" : p.memoizedProps;
              } catch (w) {
                se(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            c === p && (c = null), (p = p.return);
          }
          c === p && (c = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      lt(t, e), ht(e), r & 4 && xs(e);
      break;
    case 21:
      break;
    default:
      lt(t, e), ht(e);
  }
}
function ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Yf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && ($r(l, ""), (r.flags &= -33));
          var o = ks(e);
          nu(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = ks(e);
          tu(e, u, i);
          break;
        default:
          throw Error(R(161));
      }
    } catch (a) {
      se(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Wh(e, t, n) {
  (z = e), Jf(e);
}
function Jf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Dl;
      if (!i) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || Te;
        u = Dl;
        var s = Te;
        if (((Dl = i), (Te = a) && !s))
          for (z = l; z !== null; )
            (i = z),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? _s(l)
                : a !== null
                  ? ((a.return = i), (z = a))
                  : _s(l);
        for (; o !== null; ) (z = o), Jf(o), (o = o.sibling);
        (z = l), (Dl = u), (Te = s);
      }
      Cs(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (z = o)) : Cs(e);
  }
}
function Cs(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Te || _o(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Te)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ot(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && us(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                us(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var p = c.dehydrated;
                    p !== null && Qr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Te || (t.flags & 512 && eu(t));
      } catch (m) {
        se(t, t.return, m);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Ps(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function _s(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _o(4, t);
          } catch (a) {
            se(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              se(t, l, a);
            }
          }
          var o = t.return;
          try {
            eu(t);
          } catch (a) {
            se(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            eu(t);
          } catch (a) {
            se(t, i, a);
          }
      }
    } catch (a) {
      se(t, t.return, a);
    }
    if (t === e) {
      z = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (z = u);
      break;
    }
    z = t.return;
  }
}
var Qh = Math.ceil,
  po = Tt.ReactCurrentDispatcher,
  Ju = Tt.ReactCurrentOwner,
  et = Tt.ReactCurrentBatchConfig,
  K = 0,
  Ee = null,
  he = null,
  Pe = 0,
  Ve = 0,
  Hn = tn(0),
  ye = 0,
  nl = null,
  Sn = 0,
  Ro = 0,
  Zu = 0,
  Ir = null,
  Ue = null,
  qu = 0,
  lr = 1 / 0,
  wt = null,
  ho = !1,
  ru = null,
  Gt = null,
  zl = !1,
  Ht = null,
  mo = 0,
  jr = 0,
  lu = null,
  Wl = -1,
  Ql = 0;
function Me() {
  return K & 6 ? de() : Wl !== -1 ? Wl : (Wl = de());
}
function Jt(e) {
  return e.mode & 1
    ? K & 2 && Pe !== 0
      ? Pe & -Pe
      : Lh.transition !== null
        ? (Ql === 0 && (Ql = zc()), Ql)
        : ((e = G),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ac(e.type))),
          e)
    : 1;
}
function ct(e, t, n, r) {
  if (50 < jr) throw ((jr = 0), (lu = null), Error(R(185)));
  il(e, n, r),
    (!(K & 2) || e !== Ee) &&
      (e === Ee && (!(K & 2) && (Ro |= n), ye === 4 && $t(e, Pe)),
      Be(e, r),
      n === 1 && K === 0 && !(t.mode & 1) && ((lr = de() + 500), xo && nn()));
}
function Be(e, t) {
  var n = e.callbackNode;
  Lp(e, t);
  var r = Zl(e, e === Ee ? Pe : 0);
  if (r === 0)
    n !== null && Fa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Fa(n), t === 1))
      e.tag === 0 ? Rh(Rs.bind(null, e)) : lf(Rs.bind(null, e)),
        xh(function () {
          !(K & 6) && nn();
        }),
        (n = null);
    else {
      switch (Mc(r)) {
        case 1:
          n = Cu;
          break;
        case 4:
          n = Nc;
          break;
        case 16:
          n = Jl;
          break;
        case 536870912:
          n = Dc;
          break;
        default:
          n = Jl;
      }
      n = ld(n, Zf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Zf(e, t) {
  if (((Wl = -1), (Ql = 0), K & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (Zn() && e.callbackNode !== n) return null;
  var r = Zl(e, e === Ee ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vo(e, r);
  else {
    t = r;
    var l = K;
    K |= 2;
    var o = bf();
    (Ee !== e || Pe !== t) && ((wt = null), (lr = de() + 500), mn(e, t));
    do
      try {
        Xh();
        break;
      } catch (u) {
        qf(e, u);
      }
    while (!0);
    Iu(),
      (po.current = o),
      (K = l),
      he !== null ? (t = 0) : ((Ee = null), (Pe = 0), (t = ye));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Di(e)), l !== 0 && ((r = l), (t = ou(e, l)))), t === 1)
    )
      throw ((n = nl), mn(e, 0), $t(e, r), Be(e, de()), n);
    if (t === 6) $t(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Kh(l) &&
          ((t = vo(e, r)),
          t === 2 && ((o = Di(e)), o !== 0 && ((r = o), (t = ou(e, o)))),
          t === 1))
      )
        throw ((n = nl), mn(e, 0), $t(e, r), Be(e, de()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          sn(e, Ue, wt);
          break;
        case 3:
          if (
            ($t(e, r), (r & 130023424) === r && ((t = qu + 500 - de()), 10 < t))
          ) {
            if (Zl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Me(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ai(sn.bind(null, e, Ue, wt), t);
            break;
          }
          sn(e, Ue, wt);
          break;
        case 4:
          if (($t(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - st(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = de() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Qh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ai(sn.bind(null, e, Ue, wt), r);
            break;
          }
          sn(e, Ue, wt);
          break;
        case 5:
          sn(e, Ue, wt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Be(e, de()), e.callbackNode === n ? Zf.bind(null, e) : null;
}
function ou(e, t) {
  var n = Ir;
  return (
    e.current.memoizedState.isDehydrated && (mn(e, t).flags |= 256),
    (e = vo(e, t)),
    e !== 2 && ((t = Ue), (Ue = n), t !== null && iu(t)),
    e
  );
}
function iu(e) {
  Ue === null ? (Ue = e) : Ue.push.apply(Ue, e);
}
function Kh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!ft(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function $t(e, t) {
  for (
    t &= ~Zu,
      t &= ~Ro,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - st(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Rs(e) {
  if (K & 6) throw Error(R(327));
  Zn();
  var t = Zl(e, 0);
  if (!(t & 1)) return Be(e, de()), null;
  var n = vo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Di(e);
    r !== 0 && ((t = r), (n = ou(e, r)));
  }
  if (n === 1) throw ((n = nl), mn(e, 0), $t(e, t), Be(e, de()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    sn(e, Ue, wt),
    Be(e, de()),
    null
  );
}
function bu(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    (K = n), K === 0 && ((lr = de() + 500), xo && nn());
  }
}
function En(e) {
  Ht !== null && Ht.tag === 0 && !(K & 6) && Zn();
  var t = K;
  K |= 1;
  var n = et.transition,
    r = G;
  try {
    if (((et.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (et.transition = n), (K = t), !(K & 6) && nn();
  }
}
function ea() {
  (Ve = Hn.current), te(Hn);
}
function mn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), kh(n)), he !== null))
    for (n = he.return; n !== null; ) {
      var r = n;
      switch ((Ou(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && no();
          break;
        case 3:
          nr(), te(je), te(Ne), Hu();
          break;
        case 5:
          Vu(r);
          break;
        case 4:
          nr();
          break;
        case 13:
          te(oe);
          break;
        case 19:
          te(oe);
          break;
        case 10:
          ju(r.type._context);
          break;
        case 22:
        case 23:
          ea();
      }
      n = n.return;
    }
  if (
    ((Ee = e),
    (he = e = Zt(e.current, null)),
    (Pe = Ve = t),
    (ye = 0),
    (nl = null),
    (Zu = Ro = Sn = 0),
    (Ue = Ir = null),
    fn !== null)
  ) {
    for (t = 0; t < fn.length; t++)
      if (((n = fn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    fn = null;
  }
  return e;
}
function qf(e, t) {
  do {
    var n = he;
    try {
      if ((Iu(), ($l.current = fo), co)) {
        for (var r = ie.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        co = !1;
      }
      if (
        ((wn = 0),
        (Se = ve = ie = null),
        (Fr = !1),
        (br = 0),
        (Ju.current = null),
        n === null || n.return === null)
      ) {
        (ye = 1), (nl = t), (he = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          a = t;
        if (
          ((t = Pe),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var s = a,
            c = u,
            p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var E = hs(i);
          if (E !== null) {
            (E.flags &= -257),
              ms(E, i, u, o, t),
              E.mode & 1 && ps(o, s, t),
              (t = E),
              (a = s);
            var S = t.updateQueue;
            if (S === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ps(o, s, t), ta();
              break e;
            }
            a = Error(R(426));
          }
        } else if (le && u.mode & 1) {
          var C = hs(i);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              ms(C, i, u, o, t),
              Fu(rr(a, u));
            break e;
          }
        }
        (o = a = rr(a, u)),
          ye !== 4 && (ye = 2),
          Ir === null ? (Ir = [o]) : Ir.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = Ff(o, a, t);
              is(o, d);
              break e;
            case 1:
              u = a;
              var f = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Gt === null || !Gt.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = Uf(o, u, t);
                is(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      td(n);
    } catch (L) {
      (t = L), he === n && n !== null && (he = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function bf() {
  var e = po.current;
  return (po.current = fo), e === null ? fo : e;
}
function ta() {
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4),
    Ee === null || (!(Sn & 268435455) && !(Ro & 268435455)) || $t(Ee, Pe);
}
function vo(e, t) {
  var n = K;
  K |= 2;
  var r = bf();
  (Ee !== e || Pe !== t) && ((wt = null), mn(e, t));
  do
    try {
      Yh();
      break;
    } catch (l) {
      qf(e, l);
    }
  while (!0);
  if ((Iu(), (K = n), (po.current = r), he !== null)) throw Error(R(261));
  return (Ee = null), (Pe = 0), ye;
}
function Yh() {
  for (; he !== null; ) ed(he);
}
function Xh() {
  for (; he !== null && !wp(); ) ed(he);
}
function ed(e) {
  var t = rd(e.alternate, e, Ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? td(e) : (he = t),
    (Ju.current = null);
}
function td(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = $h(n, t)), n !== null)) {
        (n.flags &= 32767), (he = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ye = 6), (he = null);
        return;
      }
    } else if (((n = Bh(n, t, Ve)), n !== null)) {
      he = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      he = t;
      return;
    }
    he = t = e;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function sn(e, t, n) {
  var r = G,
    l = et.transition;
  try {
    (et.transition = null), (G = 1), Gh(e, t, n, r);
  } finally {
    (et.transition = l), (G = r);
  }
  return null;
}
function Gh(e, t, n, r) {
  do Zn();
  while (Ht !== null);
  if (K & 6) throw Error(R(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Tp(e, o),
    e === Ee && ((he = Ee = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zl ||
      ((zl = !0),
      ld(Jl, function () {
        return Zn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = et.transition), (et.transition = null);
    var i = G;
    G = 1;
    var u = K;
    (K |= 4),
      (Ju.current = null),
      Hh(e, n),
      Gf(n, e),
      mh(Ii),
      (ql = !!Ui),
      (Ii = Ui = null),
      (e.current = n),
      Wh(n),
      Sp(),
      (K = u),
      (G = i),
      (et.transition = o);
  } else e.current = n;
  if (
    (zl && ((zl = !1), (Ht = e), (mo = l)),
    (o = e.pendingLanes),
    o === 0 && (Gt = null),
    xp(n.stateNode),
    Be(e, de()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ho) throw ((ho = !1), (e = ru), (ru = null), e);
  return (
    mo & 1 && e.tag !== 0 && Zn(),
    (o = e.pendingLanes),
    o & 1 ? (e === lu ? jr++ : ((jr = 0), (lu = e))) : (jr = 0),
    nn(),
    null
  );
}
function Zn() {
  if (Ht !== null) {
    var e = Mc(mo),
      t = et.transition,
      n = G;
    try {
      if (((et.transition = null), (G = 16 > e ? 16 : e), Ht === null))
        var r = !1;
      else {
        if (((e = Ht), (Ht = null), (mo = 0), K & 6)) throw Error(R(331));
        var l = K;
        for (K |= 4, z = e.current; z !== null; ) {
          var o = z,
            i = o.child;
          if (z.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (z = s; z !== null; ) {
                  var c = z;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ur(8, c, o);
                  }
                  var p = c.child;
                  if (p !== null) (p.return = c), (z = p);
                  else
                    for (; z !== null; ) {
                      c = z;
                      var m = c.sibling,
                        E = c.return;
                      if ((Kf(c), c === s)) {
                        z = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = E), (z = m);
                        break;
                      }
                      z = E;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var w = S.child;
                if (w !== null) {
                  S.child = null;
                  do {
                    var C = w.sibling;
                    (w.sibling = null), (w = C);
                  } while (w !== null);
                }
              }
              z = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (z = i);
          else
            e: for (; z !== null; ) {
              if (((o = z), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ur(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (z = d);
                break e;
              }
              z = o.return;
            }
        }
        var f = e.current;
        for (z = f; z !== null; ) {
          i = z;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (z = h);
          else
            e: for (i = f; z !== null; ) {
              if (((u = z), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _o(9, u);
                  }
                } catch (L) {
                  se(u, u.return, L);
                }
              if (u === i) {
                z = null;
                break e;
              }
              var x = u.sibling;
              if (x !== null) {
                (x.return = u.return), (z = x);
                break e;
              }
              z = u.return;
            }
        }
        if (
          ((K = l), nn(), yt && typeof yt.onPostCommitFiberRoot == "function")
        )
          try {
            yt.onPostCommitFiberRoot(go, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (G = n), (et.transition = t);
    }
  }
  return !1;
}
function Ls(e, t, n) {
  (t = rr(n, t)),
    (t = Ff(e, t, 1)),
    (e = Xt(e, t, 1)),
    (t = Me()),
    e !== null && (il(e, 1, t), Be(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) Ls(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ls(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Gt === null || !Gt.has(r)))
        ) {
          (e = rr(n, e)),
            (e = Uf(t, e, 1)),
            (t = Xt(t, e, 1)),
            (e = Me()),
            t !== null && (il(t, 1, e), Be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Jh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ee === e &&
      (Pe & n) === n &&
      (ye === 4 || (ye === 3 && (Pe & 130023424) === Pe && 500 > de() - qu)
        ? mn(e, 0)
        : (Zu |= n)),
    Be(e, t);
}
function nd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = kl), (kl <<= 1), !(kl & 130023424) && (kl = 4194304))
      : (t = 1));
  var n = Me();
  (e = Rt(e, t)), e !== null && (il(e, t, n), Be(e, n));
}
function Zh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), nd(e, n);
}
function qh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), nd(e, n);
}
var rd;
rd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || je.current) Ie = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ie = !1), Ah(e, t, n);
      Ie = !!(e.flags & 131072);
    }
  else (Ie = !1), le && t.flags & 1048576 && of(t, oo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Hl(e, t), (e = t.pendingProps);
      var l = bn(t, Ne.current);
      Jn(t, n), (l = Qu(null, t, r, e, l, n));
      var o = Ku();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ae(r) ? ((o = !0), ro(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Bu(t),
            (l.updater = Co),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ki(t, r, e, n),
            (t = Gi(null, t, r, !0, o, n)))
          : ((t.tag = 0), le && o && Mu(t), ze(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Hl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = em(r)),
          (e = ot(r, e)),
          l)
        ) {
          case 0:
            t = Xi(null, t, r, e, n);
            break e;
          case 1:
            t = gs(null, t, r, e, n);
            break e;
          case 11:
            t = vs(null, t, r, e, n);
            break e;
          case 14:
            t = ys(null, t, r, ot(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ot(r, l)),
        Xi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ot(r, l)),
        gs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Bf(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          cf(e, t),
          ao(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = rr(Error(R(423)), t)), (t = ws(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = rr(Error(R(424)), t)), (t = ws(e, t, r, n, l));
            break e;
          } else
            for (
              He = Yt(t.stateNode.containerInfo.firstChild),
                We = t,
                le = !0,
                at = null,
                n = hf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((er(), r === l)) {
            t = Lt(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        mf(t),
        e === null && Hi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        ji(r, l) ? (i = null) : o !== null && ji(r, o) && (t.flags |= 32),
        Af(e, t),
        ze(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Hi(t), null;
    case 13:
      return $f(e, t, n);
    case 4:
      return (
        $u(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = tr(t, null, r, n)) : ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ot(r, l)),
        vs(e, t, r, l, n)
      );
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          q(io, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (ft(o.value, i)) {
            if (o.children === l.children && !je.current) {
              t = Lt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = xt(-1, n & -n)), (a.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (s.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Wi(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(R(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Wi(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ze(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Jn(t, n),
        (l = tt(l)),
        (r = r(l)),
        (t.flags |= 1),
        ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ot(r, t.pendingProps)),
        (l = ot(r.type, l)),
        ys(e, t, r, l, n)
      );
    case 15:
      return If(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ot(r, l)),
        Hl(e, t),
        (t.tag = 1),
        Ae(r) ? ((e = !0), ro(t)) : (e = !1),
        Jn(t, n),
        df(t, r, l),
        Ki(t, r, l, n),
        Gi(null, t, r, !0, e, n)
      );
    case 19:
      return Vf(e, t, n);
    case 22:
      return jf(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function ld(e, t) {
  return Tc(e, t);
}
function bh(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function be(e, t, n, r) {
  return new bh(e, t, n, r);
}
function na(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function em(e) {
  if (typeof e == "function") return na(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Eu)) return 11;
    if (e === ku) return 14;
  }
  return 2;
}
function Zt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = be(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Kl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) na(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Mn:
        return vn(n.children, l, o, t);
      case Su:
        (i = 8), (l |= 8);
        break;
      case vi:
        return (
          (e = be(12, n, t, l | 2)), (e.elementType = vi), (e.lanes = o), e
        );
      case yi:
        return (e = be(13, n, t, l)), (e.elementType = yi), (e.lanes = o), e;
      case gi:
        return (e = be(19, n, t, l)), (e.elementType = gi), (e.lanes = o), e;
      case dc:
        return Lo(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case cc:
              i = 10;
              break e;
            case fc:
              i = 9;
              break e;
            case Eu:
              i = 11;
              break e;
            case ku:
              i = 14;
              break e;
            case jt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = be(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function vn(e, t, n, r) {
  return (e = be(7, e, r, t)), (e.lanes = n), e;
}
function Lo(e, t, n, r) {
  return (
    (e = be(22, e, r, t)),
    (e.elementType = dc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ci(e, t, n) {
  return (e = be(6, e, null, t)), (e.lanes = n), e;
}
function fi(e, t, n) {
  return (
    (t = be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function tm(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Qo(0)),
    (this.expirationTimes = Qo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Qo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ra(e, t, n, r, l, o, i, u, a) {
  return (
    (e = new tm(e, t, n, u, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = be(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bu(o),
    e
  );
}
function nm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: zn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function od(e) {
  if (!e) return bt;
  e = e._reactInternals;
  e: {
    if (Pn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ae(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ae(n)) return rf(e, n, t);
  }
  return t;
}
function id(e, t, n, r, l, o, i, u, a) {
  return (
    (e = ra(n, r, !0, e, l, o, i, u, a)),
    (e.context = od(null)),
    (n = e.current),
    (r = Me()),
    (l = Jt(n)),
    (o = xt(r, l)),
    (o.callback = t ?? null),
    Xt(n, o, l),
    (e.current.lanes = l),
    il(e, l, r),
    Be(e, r),
    e
  );
}
function To(e, t, n, r) {
  var l = t.current,
    o = Me(),
    i = Jt(l);
  return (
    (n = od(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = xt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Xt(l, t, i)),
    e !== null && (ct(e, l, i, o), Bl(e, l, i)),
    i
  );
}
function yo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ts(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function la(e, t) {
  Ts(e, t), (e = e.alternate) && Ts(e, t);
}
function rm() {
  return null;
}
var ud =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function oa(e) {
  this._internalRoot = e;
}
No.prototype.render = oa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  To(e, t, null, null);
};
No.prototype.unmount = oa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    En(function () {
      To(null, e, null, null);
    }),
      (t[_t] = null);
  }
};
function No(e) {
  this._internalRoot = e;
}
No.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Uc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Bt.length && t !== 0 && t < Bt[n].priority; n++);
    Bt.splice(n, 0, e), n === 0 && jc(e);
  }
};
function ia(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Do(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ns() {}
function lm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = yo(i);
        o.call(s);
      };
    }
    var i = id(t, r, e, 0, null, !1, !1, "", Ns);
    return (
      (e._reactRootContainer = i),
      (e[_t] = i.current),
      Xr(e.nodeType === 8 ? e.parentNode : e),
      En(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var s = yo(a);
      u.call(s);
    };
  }
  var a = ra(e, 0, !1, null, null, !1, !1, "", Ns);
  return (
    (e._reactRootContainer = a),
    (e[_t] = a.current),
    Xr(e.nodeType === 8 ? e.parentNode : e),
    En(function () {
      To(t, a, n, r);
    }),
    a
  );
}
function zo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = yo(i);
        u.call(a);
      };
    }
    To(t, i, e, l);
  } else i = lm(n, t, e, l, r);
  return yo(i);
}
Oc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Lr(t.pendingLanes);
        n !== 0 &&
          (Pu(t, n | 1), Be(t, de()), !(K & 6) && ((lr = de() + 500), nn()));
      }
      break;
    case 13:
      En(function () {
        var r = Rt(e, 1);
        if (r !== null) {
          var l = Me();
          ct(r, e, 1, l);
        }
      }),
        la(e, 1);
  }
};
_u = function (e) {
  if (e.tag === 13) {
    var t = Rt(e, 134217728);
    if (t !== null) {
      var n = Me();
      ct(t, e, 134217728, n);
    }
    la(e, 134217728);
  }
};
Fc = function (e) {
  if (e.tag === 13) {
    var t = Jt(e),
      n = Rt(e, t);
    if (n !== null) {
      var r = Me();
      ct(n, e, t, r);
    }
    la(e, t);
  }
};
Uc = function () {
  return G;
};
Ic = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
Li = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ei(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ko(r);
            if (!l) throw Error(R(90));
            hc(r), Ei(r, l);
          }
        }
      }
      break;
    case "textarea":
      vc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Kn(e, !!n.multiple, t, !1);
  }
};
xc = bu;
Cc = En;
var om = { usingClientEntryPoint: !1, Events: [al, In, ko, Ec, kc, bu] },
  Sr = {
    findFiberByHostInstance: cn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  im = {
    bundleType: Sr.bundleType,
    version: Sr.version,
    rendererPackageName: Sr.rendererPackageName,
    rendererConfig: Sr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Tt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Rc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Sr.findFiberByHostInstance || rm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ml = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ml.isDisabled && Ml.supportsFiber)
    try {
      (go = Ml.inject(im)), (yt = Ml);
    } catch {}
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = om;
Ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ia(t)) throw Error(R(200));
  return nm(e, t, null, n);
};
Ke.createRoot = function (e, t) {
  if (!ia(e)) throw Error(R(299));
  var n = !1,
    r = "",
    l = ud;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ra(e, 1, !1, null, null, n, !1, r, l)),
    (e[_t] = t.current),
    Xr(e.nodeType === 8 ? e.parentNode : e),
    new oa(t)
  );
};
Ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = Rc(t)), (e = e === null ? null : e.stateNode), e;
};
Ke.flushSync = function (e) {
  return En(e);
};
Ke.hydrate = function (e, t, n) {
  if (!Do(t)) throw Error(R(200));
  return zo(null, e, t, !0, n);
};
Ke.hydrateRoot = function (e, t, n) {
  if (!ia(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = ud;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = id(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[_t] = t.current),
    Xr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new No(t);
};
Ke.render = function (e, t, n) {
  if (!Do(t)) throw Error(R(200));
  return zo(null, e, t, !1, n);
};
Ke.unmountComponentAtNode = function (e) {
  if (!Do(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (En(function () {
        zo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[_t] = null);
        });
      }),
      !0)
    : !1;
};
Ke.unstable_batchedUpdates = bu;
Ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Do(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return zo(e, t, n, !1, r);
};
Ke.version = "18.2.0-next-9e3b772b8-20220608";
function ad() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ad);
    } catch (e) {
      console.error(e);
    }
}
ad(), (oc.exports = Ke);
var sd = oc.exports;
const um = Js(sd),
  am = Gs({ __proto__: null, default: um }, [sd]);
/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ce() {
  return (
    (ce = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ce.apply(this, arguments)
  );
}
var fe;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(fe || (fe = {}));
const Ds = "popstate";
function sm(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return rl(
      "",
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : xn(l);
  }
  return fm(t, n, null, e);
}
function V(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function kn(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function cm() {
  return Math.random().toString(36).substr(2, 8);
}
function zs(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function rl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ce(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Nt(t) : t,
      { state: n, key: (t && t.key) || r || cm() },
    )
  );
}
function xn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Nt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function fm(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = fe.Pop,
    a = null,
    s = c();
  s == null && ((s = 0), i.replaceState(ce({}, i.state, { idx: s }), ""));
  function c() {
    return (i.state || { idx: null }).idx;
  }
  function p() {
    u = fe.Pop;
    let C = c(),
      d = C == null ? null : C - s;
    (s = C), a && a({ action: u, location: w.location, delta: d });
  }
  function m(C, d) {
    u = fe.Push;
    let f = rl(w.location, C, d);
    n && n(f, C), (s = c() + 1);
    let h = zs(f, s),
      x = w.createHref(f);
    try {
      i.pushState(h, "", x);
    } catch (L) {
      if (L instanceof DOMException && L.name === "DataCloneError") throw L;
      l.location.assign(x);
    }
    o && a && a({ action: u, location: w.location, delta: 1 });
  }
  function E(C, d) {
    u = fe.Replace;
    let f = rl(w.location, C, d);
    n && n(f, C), (s = c());
    let h = zs(f, s),
      x = w.createHref(f);
    i.replaceState(h, "", x),
      o && a && a({ action: u, location: w.location, delta: 0 });
  }
  function S(C) {
    let d = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof C == "string" ? C : xn(C);
    return (
      V(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          f,
      ),
      new URL(f, d)
    );
  }
  let w = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(C) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Ds, p),
        (a = C),
        () => {
          l.removeEventListener(Ds, p), (a = null);
        }
      );
    },
    createHref(C) {
      return t(l, C);
    },
    createURL: S,
    encodeLocation(C) {
      let d = S(C);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: m,
    replace: E,
    go(C) {
      return i.go(C);
    },
  };
  return w;
}
var ae;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ae || (ae = {}));
const dm = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function pm(e) {
  return e.index === !0;
}
function uu(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, o],
        u = typeof l.id == "string" ? l.id : i.join("-");
      if (
        (V(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route",
        ),
        V(
          !r[u],
          'Found a route id collision on id "' +
            u +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        pm(l))
      ) {
        let a = ce({}, l, t(l), { id: u });
        return (r[u] = a), a;
      } else {
        let a = ce({}, l, t(l), { id: u, children: void 0 });
        return (
          (r[u] = a), l.children && (a.children = uu(l.children, t, i, r)), a
        );
      }
    })
  );
}
function Wn(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Nt(t) : t,
    l = _n(r.pathname || "/", n);
  if (l == null) return null;
  let o = fd(e);
  hm(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = xm(o[u], _m(l));
  return i;
}
function cd(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function fd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let a = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (V(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let s = Ct([r, a.relativePath]),
      c = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (V(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".'),
      ),
      fd(o.children, t, c, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: Em(s, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let a of dd(o.path)) l(o, i, a);
    }),
    t
  );
}
function dd(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = dd(r.join("/")),
    u = [];
  return (
    u.push(...i.map((a) => (a === "" ? o : [o, a].join("/")))),
    l && u.push(...i),
    u.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function hm(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : km(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const mm = /^:[\w-]+$/,
  vm = 3,
  ym = 2,
  gm = 1,
  wm = 10,
  Sm = -2,
  Ms = (e) => e === "*";
function Em(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ms) && (r += Sm),
    t && (r += ym),
    n
      .filter((l) => !Ms(l))
      .reduce((l, o) => l + (mm.test(o) ? vm : o === "" ? gm : wm), r)
  );
}
function km(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function xm(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      a = i === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      c = Cm(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        s,
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let p = u.route;
    o.push({
      params: r,
      pathname: Ct([l, c.pathname]),
      pathnameBase: Nm(Ct([l, c.pathnameBase])),
      route: p,
    }),
      c.pathnameBase !== "/" && (l = Ct([l, c.pathnameBase]));
  }
  return o;
}
function Cm(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Pm(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((s, c, p) => {
      let { paramName: m, isOptional: E } = c;
      if (m === "*") {
        let w = u[p] || "";
        i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const S = u[p];
      return E && !S ? (s[m] = void 0) : (s[m] = Rm(S || "", m)), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Pm(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    kn(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, u, a) => (
            r.push({ paramName: u, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (l += "\\/*$")
        : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function _m(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      kn(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function Rm(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      kn(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ")."),
      ),
      e
    );
  }
}
function _n(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Lm(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Nt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Tm(n, t)) : t,
    search: Dm(r),
    hash: zm(l),
  };
}
function Tm(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function di(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function pd(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function ua(e, t) {
  let n = pd(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function aa(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Nt(e))
    : ((l = ce({}, e)),
      V(
        !l.pathname || !l.pathname.includes("?"),
        di("?", "pathname", "search", l),
      ),
      V(
        !l.pathname || !l.pathname.includes("#"),
        di("#", "pathname", "hash", l),
      ),
      V(!l.search || !l.search.includes("#"), di("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    u;
  if (i == null) u = n;
  else {
    let p = t.length - 1;
    if (!r && i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) m.shift(), (p -= 1);
      l.pathname = m.join("/");
    }
    u = p >= 0 ? t[p] : "/";
  }
  let a = Lm(l, u),
    s = i && i !== "/" && i.endsWith("/"),
    c = (o || i === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (s || c) && (a.pathname += "/"), a;
}
const Ct = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Nm = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Dm = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  zm = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class sa {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function hd(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const md = ["post", "put", "patch", "delete"],
  Mm = new Set(md),
  Om = ["get", ...md],
  Fm = new Set(Om),
  Um = new Set([301, 302, 303, 307, 308]),
  Im = new Set([307, 308]),
  pi = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  jm = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Er = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  vd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Am = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  yd = "remix-router-transitions";
function Bm(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  V(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let y = e.detectErrorBoundary;
    l = (g) => ({ hasErrorBoundary: y(g) });
  } else l = Am;
  let o = {},
    i = uu(e.routes, l, void 0, o),
    u,
    a = e.basename || "/",
    s = ce(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future,
    ),
    c = null,
    p = new Set(),
    m = null,
    E = null,
    S = null,
    w = e.hydrationData != null,
    C = Wn(i, e.history.location, a),
    d = null;
  if (C == null) {
    let y = Je(404, { pathname: e.history.location.pathname }),
      { matches: g, route: k } = $s(i);
    (C = g), (d = { [k.id]: y });
  }
  let f,
    h = C.some((y) => y.route.lazy),
    x = C.some((y) => y.route.loader);
  if (h) f = !1;
  else if (!x) f = !0;
  else if (s.v7_partialHydration) {
    let y = e.hydrationData ? e.hydrationData.loaderData : null,
      g = e.hydrationData ? e.hydrationData.errors : null;
    f = C.every(
      (k) =>
        k.route.loader &&
        k.route.loader.hydrate !== !0 &&
        ((y && y[k.route.id] !== void 0) || (g && g[k.route.id] !== void 0)),
    );
  } else f = e.hydrationData != null;
  let L,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: C,
      initialized: f,
      navigation: pi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || d,
      fetchers: new Map(),
      blockers: new Map(),
    },
    P = fe.Pop,
    T = !1,
    O,
    U = !1,
    Y = new Map(),
    me = null,
    pe = !1,
    Xe = !1,
    Rn = [],
    Dt = [],
    ne = new Map(),
    D = 0,
    j = -1,
    B = new Map(),
    X = new Set(),
    b = new Map(),
    dt = new Map(),
    ke = new Set(),
    rt = new Map(),
    De = new Map(),
    zt = !1;
  function _d() {
    if (
      ((c = e.history.listen((y) => {
        let { action: g, location: k, delta: N } = y;
        if (zt) {
          zt = !1;
          return;
        }
        kn(
          De.size === 0 || N != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let M = Sa({
          currentLocation: v.location,
          nextLocation: k,
          historyAction: g,
        });
        if (M && N != null) {
          (zt = !0),
            e.history.go(N * -1),
            hl(M, {
              state: "blocked",
              location: k,
              proceed() {
                hl(M, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  e.history.go(N);
              },
              reset() {
                let H = new Map(v.blockers);
                H.set(M, Er), $e({ blockers: H });
              },
            });
          return;
        }
        return on(g, k);
      })),
      n)
    ) {
      Zm(t, Y);
      let y = () => qm(t, Y);
      t.addEventListener("pagehide", y),
        (me = () => t.removeEventListener("pagehide", y));
    }
    return v.initialized || on(fe.Pop, v.location, { initialHydration: !0 }), L;
  }
  function Rd() {
    c && c(),
      me && me(),
      p.clear(),
      O && O.abort(),
      v.fetchers.forEach((y, g) => pl(g)),
      v.blockers.forEach((y, g) => wa(g));
  }
  function Ld(y) {
    return p.add(y), () => p.delete(y);
  }
  function $e(y, g) {
    g === void 0 && (g = {}), (v = ce({}, v, y));
    let k = [],
      N = [];
    s.v7_fetcherPersist &&
      v.fetchers.forEach((M, H) => {
        M.state === "idle" && (ke.has(H) ? N.push(H) : k.push(H));
      }),
      [...p].forEach((M) =>
        M(v, {
          deletedFetchers: N,
          unstable_viewTransitionOpts: g.viewTransitionOpts,
          unstable_flushSync: g.flushSync === !0,
        }),
      ),
      s.v7_fetcherPersist &&
        (k.forEach((M) => v.fetchers.delete(M)), N.forEach((M) => pl(M)));
  }
  function cr(y, g, k) {
    var N, M;
    let { flushSync: H } = k === void 0 ? {} : k,
      A =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        ut(v.navigation.formMethod) &&
        v.navigation.state === "loading" &&
        ((N = y.state) == null ? void 0 : N._isRedirect) !== !0,
      I;
    g.actionData
      ? Object.keys(g.actionData).length > 0
        ? (I = g.actionData)
        : (I = null)
      : A
        ? (I = v.actionData)
        : (I = null);
    let F = g.loaderData
        ? Bs(v.loaderData, g.loaderData, g.matches || [], g.errors)
        : v.loaderData,
      Q = v.blockers;
    Q.size > 0 && ((Q = new Map(Q)), Q.forEach((Z, xe) => Q.set(xe, Er)));
    let ge =
      T === !0 ||
      (v.navigation.formMethod != null &&
        ut(v.navigation.formMethod) &&
        ((M = y.state) == null ? void 0 : M._isRedirect) !== !0);
    u && ((i = u), (u = void 0)),
      pe ||
        P === fe.Pop ||
        (P === fe.Push
          ? e.history.push(y, y.state)
          : P === fe.Replace && e.history.replace(y, y.state));
    let $;
    if (P === fe.Pop) {
      let Z = Y.get(v.location.pathname);
      Z && Z.has(y.pathname)
        ? ($ = { currentLocation: v.location, nextLocation: y })
        : Y.has(y.pathname) &&
          ($ = { currentLocation: y, nextLocation: v.location });
    } else if (U) {
      let Z = Y.get(v.location.pathname);
      Z
        ? Z.add(y.pathname)
        : ((Z = new Set([y.pathname])), Y.set(v.location.pathname, Z)),
        ($ = { currentLocation: v.location, nextLocation: y });
    }
    $e(
      ce({}, g, {
        actionData: I,
        loaderData: F,
        historyAction: P,
        location: y,
        initialized: !0,
        navigation: pi,
        revalidation: "idle",
        restoreScrollPosition: ka(y, g.matches || v.matches),
        preventScrollReset: ge,
        blockers: Q,
      }),
      { viewTransitionOpts: $, flushSync: H === !0 },
    ),
      (P = fe.Pop),
      (T = !1),
      (U = !1),
      (pe = !1),
      (Xe = !1),
      (Rn = []),
      (Dt = []);
  }
  async function pa(y, g) {
    if (typeof y == "number") {
      e.history.go(y);
      return;
    }
    let k = au(
        v.location,
        v.matches,
        a,
        s.v7_prependBasename,
        y,
        s.v7_relativeSplatPath,
        g == null ? void 0 : g.fromRouteId,
        g == null ? void 0 : g.relative,
      ),
      {
        path: N,
        submission: M,
        error: H,
      } = Os(s.v7_normalizeFormMethod, !1, k, g),
      A = v.location,
      I = rl(v.location, N, g && g.state);
    I = ce({}, I, e.history.encodeLocation(I));
    let F = g && g.replace != null ? g.replace : void 0,
      Q = fe.Push;
    F === !0
      ? (Q = fe.Replace)
      : F === !1 ||
        (M != null &&
          ut(M.formMethod) &&
          M.formAction === v.location.pathname + v.location.search &&
          (Q = fe.Replace));
    let ge =
        g && "preventScrollReset" in g ? g.preventScrollReset === !0 : void 0,
      $ = (g && g.unstable_flushSync) === !0,
      Z = Sa({ currentLocation: A, nextLocation: I, historyAction: Q });
    if (Z) {
      hl(Z, {
        state: "blocked",
        location: I,
        proceed() {
          hl(Z, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: I,
          }),
            pa(y, g);
        },
        reset() {
          let xe = new Map(v.blockers);
          xe.set(Z, Er), $e({ blockers: xe });
        },
      });
      return;
    }
    return await on(Q, I, {
      submission: M,
      pendingError: H,
      preventScrollReset: ge,
      replace: g && g.replace,
      enableViewTransition: g && g.unstable_viewTransition,
      flushSync: $,
    });
  }
  function Td() {
    if (
      (Oo(),
      $e({ revalidation: "loading" }),
      v.navigation.state !== "submitting")
    ) {
      if (v.navigation.state === "idle") {
        on(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      on(P || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
      });
    }
  }
  async function on(y, g, k) {
    O && O.abort(),
      (O = null),
      (P = y),
      (pe = (k && k.startUninterruptedRevalidation) === !0),
      jd(v.location, v.matches),
      (T = (k && k.preventScrollReset) === !0),
      (U = (k && k.enableViewTransition) === !0);
    let N = u || i,
      M = k && k.overrideNavigation,
      H = Wn(N, g, a),
      A = (k && k.flushSync) === !0;
    if (!H) {
      let xe = Je(404, { pathname: g.pathname }),
        { matches: Ge, route: we } = $s(N);
      Fo(),
        cr(
          g,
          { matches: Ge, loaderData: {}, errors: { [we.id]: xe } },
          { flushSync: A },
        );
      return;
    }
    if (
      v.initialized &&
      !Xe &&
      Qm(v.location, g) &&
      !(k && k.submission && ut(k.submission.formMethod))
    ) {
      cr(g, { matches: H }, { flushSync: A });
      return;
    }
    O = new AbortController();
    let I = xr(e.history, g, O.signal, k && k.submission),
      F,
      Q;
    if (k && k.pendingError) Q = { [Ar(H).route.id]: k.pendingError };
    else if (k && k.submission && ut(k.submission.formMethod)) {
      let xe = await Nd(I, g, k.submission, H, {
        replace: k.replace,
        flushSync: A,
      });
      if (xe.shortCircuited) return;
      (F = xe.pendingActionData),
        (Q = xe.pendingActionError),
        (M = hi(g, k.submission)),
        (A = !1),
        (I = new Request(I.url, { signal: I.signal }));
    }
    let {
      shortCircuited: ge,
      loaderData: $,
      errors: Z,
    } = await Dd(
      I,
      g,
      H,
      M,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      k && k.initialHydration === !0,
      A,
      F,
      Q,
    );
    ge ||
      ((O = null),
      cr(
        g,
        ce({ matches: H }, F ? { actionData: F } : {}, {
          loaderData: $,
          errors: Z,
        }),
      ));
  }
  async function Nd(y, g, k, N, M) {
    M === void 0 && (M = {}), Oo();
    let H = Gm(g, k);
    $e({ navigation: H }, { flushSync: M.flushSync === !0 });
    let A,
      I = cu(N, g);
    if (!I.route.action && !I.route.lazy)
      A = {
        type: ae.error,
        error: Je(405, {
          method: y.method,
          pathname: g.pathname,
          routeId: I.route.id,
        }),
      };
    else if (
      ((A = await kr("action", y, I, N, o, l, a, s.v7_relativeSplatPath)),
      y.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (hn(A)) {
      let F;
      return (
        M && M.replace != null
          ? (F = M.replace)
          : (F = A.location === v.location.pathname + v.location.search),
        await fr(v, A, { submission: k, replace: F }),
        { shortCircuited: !0 }
      );
    }
    if (Qn(A)) {
      let F = Ar(N, I.route.id);
      return (
        (M && M.replace) !== !0 && (P = fe.Push),
        { pendingActionData: {}, pendingActionError: { [F.route.id]: A.error } }
      );
    }
    if (pn(A)) throw Je(400, { type: "defer-action" });
    return { pendingActionData: { [I.route.id]: A.data } };
  }
  async function Dd(y, g, k, N, M, H, A, I, F, Q, ge) {
    let $ = N || hi(g, M),
      Z = M || H || Ws($),
      xe = u || i,
      [Ge, we] = Fs(
        e.history,
        v,
        k,
        Z,
        g,
        s.v7_partialHydration && I === !0,
        Xe,
        Rn,
        Dt,
        ke,
        b,
        X,
        xe,
        a,
        Q,
        ge,
      );
    if (
      (Fo(
        (J) =>
          !(k && k.some((re) => re.route.id === J)) ||
          (Ge && Ge.some((re) => re.route.id === J)),
      ),
      (j = ++D),
      Ge.length === 0 && we.length === 0)
    ) {
      let J = ya();
      return (
        cr(
          g,
          ce(
            { matches: k, loaderData: {}, errors: ge || null },
            Q ? { actionData: Q } : {},
            J ? { fetchers: new Map(v.fetchers) } : {},
          ),
          { flushSync: F },
        ),
        { shortCircuited: !0 }
      );
    }
    if (!pe && (!s.v7_partialHydration || !I)) {
      we.forEach((re) => {
        let pt = v.fetchers.get(re.key),
          vl = Cr(void 0, pt ? pt.data : void 0);
        v.fetchers.set(re.key, vl);
      });
      let J = Q || v.actionData;
      $e(
        ce(
          { navigation: $ },
          J
            ? Object.keys(J).length === 0
              ? { actionData: null }
              : { actionData: J }
            : {},
          we.length > 0 ? { fetchers: new Map(v.fetchers) } : {},
        ),
        { flushSync: F },
      );
    }
    we.forEach((J) => {
      ne.has(J.key) && Ot(J.key), J.controller && ne.set(J.key, J.controller);
    });
    let Ln = () => we.forEach((J) => Ot(J.key));
    O && O.signal.addEventListener("abort", Ln);
    let {
      results: Uo,
      loaderResults: Tn,
      fetcherResults: Ft,
    } = await ha(v.matches, k, Ge, we, y);
    if (y.signal.aborted) return { shortCircuited: !0 };
    O && O.signal.removeEventListener("abort", Ln),
      we.forEach((J) => ne.delete(J.key));
    let un = Vs(Uo);
    if (un) {
      if (un.idx >= Ge.length) {
        let J = we[un.idx - Ge.length].key;
        X.add(J);
      }
      return await fr(v, un.result, { replace: A }), { shortCircuited: !0 };
    }
    let { loaderData: Io, errors: jo } = As(v, k, Ge, Tn, ge, we, Ft, rt);
    rt.forEach((J, re) => {
      J.subscribe((pt) => {
        (pt || J.done) && rt.delete(re);
      });
    });
    let Ao = ya(),
      Nn = ga(j),
      ml = Ao || Nn || we.length > 0;
    return ce(
      { loaderData: Io, errors: jo },
      ml ? { fetchers: new Map(v.fetchers) } : {},
    );
  }
  function zd(y, g, k, N) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    ne.has(y) && Ot(y);
    let M = (N && N.unstable_flushSync) === !0,
      H = u || i,
      A = au(
        v.location,
        v.matches,
        a,
        s.v7_prependBasename,
        k,
        s.v7_relativeSplatPath,
        g,
        N == null ? void 0 : N.relative,
      ),
      I = Wn(H, A, a);
    if (!I) {
      dr(y, g, Je(404, { pathname: A }), { flushSync: M });
      return;
    }
    let {
      path: F,
      submission: Q,
      error: ge,
    } = Os(s.v7_normalizeFormMethod, !0, A, N);
    if (ge) {
      dr(y, g, ge, { flushSync: M });
      return;
    }
    let $ = cu(I, F);
    if (((T = (N && N.preventScrollReset) === !0), Q && ut(Q.formMethod))) {
      Md(y, g, F, $, I, M, Q);
      return;
    }
    b.set(y, { routeId: g, path: F }), Od(y, g, F, $, I, M, Q);
  }
  async function Md(y, g, k, N, M, H, A) {
    if ((Oo(), b.delete(y), !N.route.action && !N.route.lazy)) {
      let re = Je(405, { method: A.formMethod, pathname: k, routeId: g });
      dr(y, g, re, { flushSync: H });
      return;
    }
    let I = v.fetchers.get(y);
    Mt(y, Jm(A, I), { flushSync: H });
    let F = new AbortController(),
      Q = xr(e.history, k, F.signal, A);
    ne.set(y, F);
    let ge = D,
      $ = await kr("action", Q, N, M, o, l, a, s.v7_relativeSplatPath);
    if (Q.signal.aborted) {
      ne.get(y) === F && ne.delete(y);
      return;
    }
    if (s.v7_fetcherPersist && ke.has(y)) {
      if (hn($) || Qn($)) {
        Mt(y, It(void 0));
        return;
      }
    } else {
      if (hn($))
        if ((ne.delete(y), j > ge)) {
          Mt(y, It(void 0));
          return;
        } else
          return X.add(y), Mt(y, Cr(A)), fr(v, $, { fetcherSubmission: A });
      if (Qn($)) {
        dr(y, g, $.error);
        return;
      }
    }
    if (pn($)) throw Je(400, { type: "defer-action" });
    let Z = v.navigation.location || v.location,
      xe = xr(e.history, Z, F.signal),
      Ge = u || i,
      we =
        v.navigation.state !== "idle"
          ? Wn(Ge, v.navigation.location, a)
          : v.matches;
    V(we, "Didn't find any matches after fetcher action");
    let Ln = ++D;
    B.set(y, Ln);
    let Uo = Cr(A, $.data);
    v.fetchers.set(y, Uo);
    let [Tn, Ft] = Fs(
      e.history,
      v,
      we,
      A,
      Z,
      !1,
      Xe,
      Rn,
      Dt,
      ke,
      b,
      X,
      Ge,
      a,
      { [N.route.id]: $.data },
      void 0,
    );
    Ft.filter((re) => re.key !== y).forEach((re) => {
      let pt = re.key,
        vl = v.fetchers.get(pt),
        Bd = Cr(void 0, vl ? vl.data : void 0);
      v.fetchers.set(pt, Bd),
        ne.has(pt) && Ot(pt),
        re.controller && ne.set(pt, re.controller);
    }),
      $e({ fetchers: new Map(v.fetchers) });
    let un = () => Ft.forEach((re) => Ot(re.key));
    F.signal.addEventListener("abort", un);
    let {
      results: Io,
      loaderResults: jo,
      fetcherResults: Ao,
    } = await ha(v.matches, we, Tn, Ft, xe);
    if (F.signal.aborted) return;
    F.signal.removeEventListener("abort", un),
      B.delete(y),
      ne.delete(y),
      Ft.forEach((re) => ne.delete(re.key));
    let Nn = Vs(Io);
    if (Nn) {
      if (Nn.idx >= Tn.length) {
        let re = Ft[Nn.idx - Tn.length].key;
        X.add(re);
      }
      return fr(v, Nn.result);
    }
    let { loaderData: ml, errors: J } = As(
      v,
      v.matches,
      Tn,
      jo,
      void 0,
      Ft,
      Ao,
      rt,
    );
    if (v.fetchers.has(y)) {
      let re = It($.data);
      v.fetchers.set(y, re);
    }
    ga(Ln),
      v.navigation.state === "loading" && Ln > j
        ? (V(P, "Expected pending action"),
          O && O.abort(),
          cr(v.navigation.location, {
            matches: we,
            loaderData: ml,
            errors: J,
            fetchers: new Map(v.fetchers),
          }))
        : ($e({
            errors: J,
            loaderData: Bs(v.loaderData, ml, we, J),
            fetchers: new Map(v.fetchers),
          }),
          (Xe = !1));
  }
  async function Od(y, g, k, N, M, H, A) {
    let I = v.fetchers.get(y);
    Mt(y, Cr(A, I ? I.data : void 0), { flushSync: H });
    let F = new AbortController(),
      Q = xr(e.history, k, F.signal);
    ne.set(y, F);
    let ge = D,
      $ = await kr("loader", Q, N, M, o, l, a, s.v7_relativeSplatPath);
    if (
      (pn($) && ($ = (await Sd($, Q.signal, !0)) || $),
      ne.get(y) === F && ne.delete(y),
      !Q.signal.aborted)
    ) {
      if (ke.has(y)) {
        Mt(y, It(void 0));
        return;
      }
      if (hn($))
        if (j > ge) {
          Mt(y, It(void 0));
          return;
        } else {
          X.add(y), await fr(v, $);
          return;
        }
      if (Qn($)) {
        dr(y, g, $.error);
        return;
      }
      V(!pn($), "Unhandled fetcher deferred data"), Mt(y, It($.data));
    }
  }
  async function fr(y, g, k) {
    let {
      submission: N,
      fetcherSubmission: M,
      replace: H,
    } = k === void 0 ? {} : k;
    g.revalidate && (Xe = !0);
    let A = rl(y.location, g.location, { _isRedirect: !0 });
    if ((V(A, "Expected a location on the redirect navigation"), n)) {
      let Z = !1;
      if (g.reloadDocument) Z = !0;
      else if (vd.test(g.location)) {
        const xe = e.history.createURL(g.location);
        Z = xe.origin !== t.location.origin || _n(xe.pathname, a) == null;
      }
      if (Z) {
        H ? t.location.replace(g.location) : t.location.assign(g.location);
        return;
      }
    }
    O = null;
    let I = H === !0 ? fe.Replace : fe.Push,
      { formMethod: F, formAction: Q, formEncType: ge } = y.navigation;
    !N && !M && F && Q && ge && (N = Ws(y.navigation));
    let $ = N || M;
    if (Im.has(g.status) && $ && ut($.formMethod))
      await on(I, A, {
        submission: ce({}, $, { formAction: g.location }),
        preventScrollReset: T,
      });
    else {
      let Z = hi(A, N);
      await on(I, A, {
        overrideNavigation: Z,
        fetcherSubmission: M,
        preventScrollReset: T,
      });
    }
  }
  async function ha(y, g, k, N, M) {
    let H = await Promise.all([
        ...k.map((F) => kr("loader", M, F, g, o, l, a, s.v7_relativeSplatPath)),
        ...N.map((F) =>
          F.matches && F.match && F.controller
            ? kr(
                "loader",
                xr(e.history, F.path, F.controller.signal),
                F.match,
                F.matches,
                o,
                l,
                a,
                s.v7_relativeSplatPath,
              )
            : { type: ae.error, error: Je(404, { pathname: F.path }) },
        ),
      ]),
      A = H.slice(0, k.length),
      I = H.slice(k.length);
    return (
      await Promise.all([
        Hs(
          y,
          k,
          A,
          A.map(() => M.signal),
          !1,
          v.loaderData,
        ),
        Hs(
          y,
          N.map((F) => F.match),
          I,
          N.map((F) => (F.controller ? F.controller.signal : null)),
          !0,
        ),
      ]),
      { results: H, loaderResults: A, fetcherResults: I }
    );
  }
  function Oo() {
    (Xe = !0),
      Rn.push(...Fo()),
      b.forEach((y, g) => {
        ne.has(g) && (Dt.push(g), Ot(g));
      });
  }
  function Mt(y, g, k) {
    k === void 0 && (k = {}),
      v.fetchers.set(y, g),
      $e(
        { fetchers: new Map(v.fetchers) },
        { flushSync: (k && k.flushSync) === !0 },
      );
  }
  function dr(y, g, k, N) {
    N === void 0 && (N = {});
    let M = Ar(v.matches, g);
    pl(y),
      $e(
        { errors: { [M.route.id]: k }, fetchers: new Map(v.fetchers) },
        { flushSync: (N && N.flushSync) === !0 },
      );
  }
  function ma(y) {
    return (
      s.v7_fetcherPersist &&
        (dt.set(y, (dt.get(y) || 0) + 1), ke.has(y) && ke.delete(y)),
      v.fetchers.get(y) || jm
    );
  }
  function pl(y) {
    let g = v.fetchers.get(y);
    ne.has(y) && !(g && g.state === "loading" && B.has(y)) && Ot(y),
      b.delete(y),
      B.delete(y),
      X.delete(y),
      ke.delete(y),
      v.fetchers.delete(y);
  }
  function Fd(y) {
    if (s.v7_fetcherPersist) {
      let g = (dt.get(y) || 0) - 1;
      g <= 0 ? (dt.delete(y), ke.add(y)) : dt.set(y, g);
    } else pl(y);
    $e({ fetchers: new Map(v.fetchers) });
  }
  function Ot(y) {
    let g = ne.get(y);
    V(g, "Expected fetch controller: " + y), g.abort(), ne.delete(y);
  }
  function va(y) {
    for (let g of y) {
      let k = ma(g),
        N = It(k.data);
      v.fetchers.set(g, N);
    }
  }
  function ya() {
    let y = [],
      g = !1;
    for (let k of X) {
      let N = v.fetchers.get(k);
      V(N, "Expected fetcher: " + k),
        N.state === "loading" && (X.delete(k), y.push(k), (g = !0));
    }
    return va(y), g;
  }
  function ga(y) {
    let g = [];
    for (let [k, N] of B)
      if (N < y) {
        let M = v.fetchers.get(k);
        V(M, "Expected fetcher: " + k),
          M.state === "loading" && (Ot(k), B.delete(k), g.push(k));
      }
    return va(g), g.length > 0;
  }
  function Ud(y, g) {
    let k = v.blockers.get(y) || Er;
    return De.get(y) !== g && De.set(y, g), k;
  }
  function wa(y) {
    v.blockers.delete(y), De.delete(y);
  }
  function hl(y, g) {
    let k = v.blockers.get(y) || Er;
    V(
      (k.state === "unblocked" && g.state === "blocked") ||
        (k.state === "blocked" && g.state === "blocked") ||
        (k.state === "blocked" && g.state === "proceeding") ||
        (k.state === "blocked" && g.state === "unblocked") ||
        (k.state === "proceeding" && g.state === "unblocked"),
      "Invalid blocker state transition: " + k.state + " -> " + g.state,
    );
    let N = new Map(v.blockers);
    N.set(y, g), $e({ blockers: N });
  }
  function Sa(y) {
    let { currentLocation: g, nextLocation: k, historyAction: N } = y;
    if (De.size === 0) return;
    De.size > 1 && kn(!1, "A router only supports one blocker at a time");
    let M = Array.from(De.entries()),
      [H, A] = M[M.length - 1],
      I = v.blockers.get(H);
    if (
      !(I && I.state === "proceeding") &&
      A({ currentLocation: g, nextLocation: k, historyAction: N })
    )
      return H;
  }
  function Fo(y) {
    let g = [];
    return (
      rt.forEach((k, N) => {
        (!y || y(N)) && (k.cancel(), g.push(N), rt.delete(N));
      }),
      g
    );
  }
  function Id(y, g, k) {
    if (((m = y), (S = g), (E = k || null), !w && v.navigation === pi)) {
      w = !0;
      let N = ka(v.location, v.matches);
      N != null && $e({ restoreScrollPosition: N });
    }
    return () => {
      (m = null), (S = null), (E = null);
    };
  }
  function Ea(y, g) {
    return (
      (E &&
        E(
          y,
          g.map((N) => cd(N, v.loaderData)),
        )) ||
      y.key
    );
  }
  function jd(y, g) {
    if (m && S) {
      let k = Ea(y, g);
      m[k] = S();
    }
  }
  function ka(y, g) {
    if (m) {
      let k = Ea(y, g),
        N = m[k];
      if (typeof N == "number") return N;
    }
    return null;
  }
  function Ad(y) {
    (o = {}), (u = uu(y, l, void 0, o));
  }
  return (
    (L = {
      get basename() {
        return a;
      },
      get future() {
        return s;
      },
      get state() {
        return v;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: _d,
      subscribe: Ld,
      enableScrollRestoration: Id,
      navigate: pa,
      fetch: zd,
      revalidate: Td,
      createHref: (y) => e.history.createHref(y),
      encodeLocation: (y) => e.history.encodeLocation(y),
      getFetcher: ma,
      deleteFetcher: Fd,
      dispose: Rd,
      getBlocker: Ud,
      deleteBlocker: wa,
      _internalFetchControllers: ne,
      _internalActiveDeferreds: rt,
      _internalSetRoutes: Ad,
    }),
    L
  );
}
function $m(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function au(e, t, n, r, l, o, i, u) {
  let a, s;
  if (i) {
    a = [];
    for (let p of t)
      if ((a.push(p), p.route.id === i)) {
        s = p;
        break;
      }
  } else (a = t), (s = t[t.length - 1]);
  let c = aa(l || ".", ua(a, o), _n(e.pathname, n) || e.pathname, u === "path");
  return (
    l == null && ((c.search = e.search), (c.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      s &&
      s.route.index &&
      !ca(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : Ct([n, c.pathname])),
    xn(c)
  );
}
function Os(e, t, n, r) {
  if (!r || !$m(r)) return { path: n };
  if (r.formMethod && !Xm(r.formMethod))
    return { path: n, error: Je(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: Je(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    i = e ? o.toUpperCase() : o.toLowerCase(),
    u = wd(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!ut(i)) return l();
      let m =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((E, S) => {
                let [w, C] = S;
                return (
                  "" +
                  E +
                  w +
                  "=" +
                  C +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: u,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!ut(i)) return l();
      try {
        let m = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: u,
            formEncType: r.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  V(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let a, s;
  if (r.formData) (a = su(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (a = su(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (a = r.body), (s = js(a));
  else if (r.body == null) (a = new URLSearchParams()), (s = new FormData());
  else
    try {
      (a = new URLSearchParams(r.body)), (s = js(a));
    } catch {
      return l();
    }
  let c = {
    formMethod: i,
    formAction: u,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (ut(c.formMethod)) return { path: n, submission: c };
  let p = Nt(n);
  return (
    t && p.search && ca(p.search) && a.append("index", ""),
    (p.search = "?" + a),
    { path: xn(p), submission: c }
  );
}
function Vm(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Fs(e, t, n, r, l, o, i, u, a, s, c, p, m, E, S, w) {
  let C = w ? Object.values(w)[0] : S ? Object.values(S)[0] : void 0,
    d = e.createURL(t.location),
    f = e.createURL(l),
    h = w ? Object.keys(w)[0] : void 0,
    L = Vm(n, h).filter((P, T) => {
      let { route: O } = P;
      if (O.lazy) return !0;
      if (O.loader == null) return !1;
      if (o)
        return O.loader.hydrate
          ? !0
          : t.loaderData[O.id] === void 0 &&
              (!t.errors || t.errors[O.id] === void 0);
      if (
        Hm(t.loaderData, t.matches[T], P) ||
        u.some((me) => me === P.route.id)
      )
        return !0;
      let U = t.matches[T],
        Y = P;
      return Us(
        P,
        ce(
          {
            currentUrl: d,
            currentParams: U.params,
            nextUrl: f,
            nextParams: Y.params,
          },
          r,
          {
            actionResult: C,
            defaultShouldRevalidate:
              i ||
              d.pathname + d.search === f.pathname + f.search ||
              d.search !== f.search ||
              gd(U, Y),
          },
        ),
      );
    }),
    v = [];
  return (
    c.forEach((P, T) => {
      if (o || !n.some((pe) => pe.route.id === P.routeId) || s.has(T)) return;
      let O = Wn(m, P.path, E);
      if (!O) {
        v.push({
          key: T,
          routeId: P.routeId,
          path: P.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let U = t.fetchers.get(T),
        Y = cu(O, P.path),
        me = !1;
      p.has(T)
        ? (me = !1)
        : a.includes(T)
          ? (me = !0)
          : U && U.state !== "idle" && U.data === void 0
            ? (me = i)
            : (me = Us(
                Y,
                ce(
                  {
                    currentUrl: d,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: f,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  { actionResult: C, defaultShouldRevalidate: i },
                ),
              )),
        me &&
          v.push({
            key: T,
            routeId: P.routeId,
            path: P.path,
            matches: O,
            match: Y,
            controller: new AbortController(),
          });
    }),
    [L, v]
  );
}
function Hm(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function gd(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Us(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Is(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  V(l, "No route found in manifest");
  let o = {};
  for (let i in r) {
    let a = l[i] !== void 0 && i !== "hasErrorBoundary";
    kn(
      !a,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.'),
    ),
      !a && !dm.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, ce({}, t(l), { lazy: void 0 }));
}
async function kr(e, t, n, r, l, o, i, u, a) {
  a === void 0 && (a = {});
  let s,
    c,
    p,
    m = (w) => {
      let C,
        d = new Promise((f, h) => (C = h));
      return (
        (p = () => C()),
        t.signal.addEventListener("abort", p),
        Promise.race([
          w({ request: t, params: n.params, context: a.requestContext }),
          d,
        ])
      );
    };
  try {
    let w = n.route[e];
    if (n.route.lazy)
      if (w) {
        let C,
          d = await Promise.all([
            m(w).catch((f) => {
              C = f;
            }),
            Is(n.route, o, l),
          ]);
        if (C) throw C;
        c = d[0];
      } else if ((await Is(n.route, o, l), (w = n.route[e]), w)) c = await m(w);
      else if (e === "action") {
        let C = new URL(t.url),
          d = C.pathname + C.search;
        throw Je(405, { method: t.method, pathname: d, routeId: n.route.id });
      } else return { type: ae.data, data: void 0 };
    else if (w) c = await m(w);
    else {
      let C = new URL(t.url),
        d = C.pathname + C.search;
      throw Je(404, { pathname: d });
    }
    V(
      c !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (w) {
    (s = ae.error), (c = w);
  } finally {
    p && t.signal.removeEventListener("abort", p);
  }
  if (Ym(c)) {
    let w = c.status;
    if (Um.has(w)) {
      let d = c.headers.get("Location");
      if (
        (V(
          d,
          "Redirects returned/thrown from loaders/actions must have a Location header",
        ),
        !vd.test(d))
      )
        d = au(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, d, u);
      else if (!a.isStaticRequest) {
        let f = new URL(t.url),
          h = d.startsWith("//") ? new URL(f.protocol + d) : new URL(d),
          x = _n(h.pathname, i) != null;
        h.origin === f.origin && x && (d = h.pathname + h.search + h.hash);
      }
      if (a.isStaticRequest) throw (c.headers.set("Location", d), c);
      return {
        type: ae.redirect,
        status: w,
        location: d,
        revalidate: c.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: c.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (a.isRouteRequest)
      throw { type: s === ae.error ? ae.error : ae.data, response: c };
    let C;
    try {
      let d = c.headers.get("Content-Type");
      d && /\bapplication\/json\b/.test(d)
        ? c.body == null
          ? (C = null)
          : (C = await c.json())
        : (C = await c.text());
    } catch (d) {
      return { type: ae.error, error: d };
    }
    return s === ae.error
      ? { type: s, error: new sa(w, c.statusText, C), headers: c.headers }
      : { type: ae.data, data: C, statusCode: c.status, headers: c.headers };
  }
  if (s === ae.error) return { type: s, error: c };
  if (Km(c)) {
    var E, S;
    return {
      type: ae.deferred,
      deferredData: c,
      statusCode: (E = c.init) == null ? void 0 : E.status,
      headers:
        ((S = c.init) == null ? void 0 : S.headers) &&
        new Headers(c.init.headers),
    };
  }
  return { type: ae.data, data: c };
}
function xr(e, t, n, r) {
  let l = e.createURL(wd(t)).toString(),
    o = { signal: n };
  if (r && ut(r.formMethod)) {
    let { formMethod: i, formEncType: u } = r;
    (o.method = i.toUpperCase()),
      u === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": u })),
          (o.body = JSON.stringify(r.json)))
        : u === "text/plain"
          ? (o.body = r.text)
          : u === "application/x-www-form-urlencoded" && r.formData
            ? (o.body = su(r.formData))
            : (o.body = r.formData);
  }
  return new Request(l, o);
}
function su(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function js(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Wm(e, t, n, r, l) {
  let o = {},
    i = null,
    u,
    a = !1,
    s = {};
  return (
    n.forEach((c, p) => {
      let m = t[p].route.id;
      if (
        (V(!hn(c), "Cannot handle redirect results in processLoaderData"),
        Qn(c))
      ) {
        let E = Ar(e, m),
          S = c.error;
        r && ((S = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[E.route.id] == null && (i[E.route.id] = S),
          (o[m] = void 0),
          a || ((a = !0), (u = hd(c.error) ? c.error.status : 500)),
          c.headers && (s[m] = c.headers);
      } else
        pn(c)
          ? (l.set(m, c.deferredData), (o[m] = c.deferredData.data))
          : (o[m] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !a &&
            (u = c.statusCode),
          c.headers && (s[m] = c.headers);
    }),
    r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: u || 200, loaderHeaders: s }
  );
}
function As(e, t, n, r, l, o, i, u) {
  let { loaderData: a, errors: s } = Wm(t, n, r, l, u);
  for (let c = 0; c < o.length; c++) {
    let { key: p, match: m, controller: E } = o[c];
    V(
      i !== void 0 && i[c] !== void 0,
      "Did not find corresponding fetcher result",
    );
    let S = i[c];
    if (!(E && E.signal.aborted))
      if (Qn(S)) {
        let w = Ar(e.matches, m == null ? void 0 : m.route.id);
        (s && s[w.route.id]) || (s = ce({}, s, { [w.route.id]: S.error })),
          e.fetchers.delete(p);
      } else if (hn(S)) V(!1, "Unhandled fetcher revalidation redirect");
      else if (pn(S)) V(!1, "Unhandled fetcher deferred data");
      else {
        let w = It(S.data);
        e.fetchers.set(p, w);
      }
  }
  return { loaderData: a, errors: s };
}
function Bs(e, t, n, r) {
  let l = ce({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function Ar(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function $s(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Je(e, t) {
  let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    u = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        l && n && r
          ? (u =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
            ? (u = "defer() is not supported in actions")
            : o === "invalid-body" && (u = "Unable to encode submission body"))
      : e === 403
        ? ((i = "Forbidden"),
          (u = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((i = "Not Found"), (u = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((i = "Method Not Allowed"),
            l && n && r
              ? (u =
                  "You made a " +
                  l.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
    new sa(e || 500, i, new Error(u), !0)
  );
}
function Vs(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (hn(n)) return { result: n, idx: t };
  }
}
function wd(e) {
  let t = typeof e == "string" ? Nt(e) : e;
  return xn(ce({}, t, { hash: "" }));
}
function Qm(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function pn(e) {
  return e.type === ae.deferred;
}
function Qn(e) {
  return e.type === ae.error;
}
function hn(e) {
  return (e && e.type) === ae.redirect;
}
function Km(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Ym(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Xm(e) {
  return Fm.has(e.toLowerCase());
}
function ut(e) {
  return Mm.has(e.toLowerCase());
}
async function Hs(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let u = n[i],
      a = t[i];
    if (!a) continue;
    let s = e.find((p) => p.route.id === a.route.id),
      c = s != null && !gd(s, a) && (o && o[a.route.id]) !== void 0;
    if (pn(u) && (l || c)) {
      let p = r[i];
      V(p, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Sd(u, p, l).then((m) => {
          m && (n[i] = m || n[i]);
        });
    }
  }
}
async function Sd(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: ae.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: ae.error, error: l };
      }
    return { type: ae.data, data: e.deferredData.data };
  }
}
function ca(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function cu(e, t) {
  let n = typeof t == "string" ? Nt(t).search : t.search;
  if (e[e.length - 1].route.index && ca(n || "")) return e[e.length - 1];
  let r = pd(e);
  return r[r.length - 1];
}
function Ws(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function hi(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Gm(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Cr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Jm(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function It(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Zm(e, t) {
  try {
    let n = e.sessionStorage.getItem(yd);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(l, new Set(o || []));
    }
  } catch {}
}
function qm(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(yd, JSON.stringify(n));
    } catch (r) {
      kn(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          r +
          ").",
      );
    }
  }
}
/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ll() {
  return (
    (ll = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ll.apply(this, arguments)
  );
}
const cl = _.createContext(null),
  fa = _.createContext(null),
  rn = _.createContext(null),
  Mo = _.createContext(null),
  ln = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ed = _.createContext(null);
function bm(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  fl() || V(!1);
  let { basename: r, navigator: l } = _.useContext(rn),
    { hash: o, pathname: i, search: u } = xd(e, { relative: n }),
    a = i;
  return (
    r !== "/" && (a = i === "/" ? r : Ct([r, i])),
    l.createHref({ pathname: a, search: u, hash: o })
  );
}
function fl() {
  return _.useContext(Mo) != null;
}
function dl() {
  return fl() || V(!1), _.useContext(Mo).location;
}
function kd(e) {
  _.useContext(rn).static || _.useLayoutEffect(e);
}
function ev() {
  let { isDataRoute: e } = _.useContext(ln);
  return e ? mv() : tv();
}
function tv() {
  fl() || V(!1);
  let e = _.useContext(cl),
    { basename: t, future: n, navigator: r } = _.useContext(rn),
    { matches: l } = _.useContext(ln),
    { pathname: o } = dl(),
    i = JSON.stringify(ua(l, n.v7_relativeSplatPath)),
    u = _.useRef(!1);
  return (
    kd(() => {
      u.current = !0;
    }),
    _.useCallback(
      function (s, c) {
        if ((c === void 0 && (c = {}), !u.current)) return;
        if (typeof s == "number") {
          r.go(s);
          return;
        }
        let p = aa(s, JSON.parse(i), o, c.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : Ct([t, p.pathname])),
          (c.replace ? r.replace : r.push)(p, c.state, c);
      },
      [t, r, i, o, e],
    )
  );
}
const nv = _.createContext(null);
function rv(e) {
  let t = _.useContext(ln).outlet;
  return t && _.createElement(nv.Provider, { value: e }, t);
}
function xd(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = _.useContext(rn),
    { matches: l } = _.useContext(ln),
    { pathname: o } = dl(),
    i = JSON.stringify(ua(l, r.v7_relativeSplatPath));
  return _.useMemo(() => aa(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function lv(e, t, n, r) {
  fl() || V(!1);
  let { navigator: l } = _.useContext(rn),
    { matches: o } = _.useContext(ln),
    i = o[o.length - 1],
    u = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : "/";
  i && i.route;
  let s = dl(),
    c;
  if (t) {
    var p;
    let C = typeof t == "string" ? Nt(t) : t;
    a === "/" || ((p = C.pathname) != null && p.startsWith(a)) || V(!1),
      (c = C);
  } else c = s;
  let m = c.pathname || "/",
    E = a === "/" ? m : m.slice(a.length) || "/",
    S = Wn(e, { pathname: E }),
    w = sv(
      S &&
        S.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, u, C.params),
            pathname: Ct([
              a,
              l.encodeLocation
                ? l.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === "/"
                ? a
                : Ct([
                    a,
                    l.encodeLocation
                      ? l.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          }),
        ),
      o,
      n,
      r,
    );
  return t && w
    ? _.createElement(
        Mo.Provider,
        {
          value: {
            location: ll(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: fe.Pop,
          },
        },
        w,
      )
    : w;
}
function ov() {
  let e = hv(),
    t = hd(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return _.createElement(
    _.Fragment,
    null,
    _.createElement("h2", null, "Unexpected Application Error!"),
    _.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? _.createElement("pre", { style: l }, n) : null,
    null,
  );
}
const iv = _.createElement(ov, null);
class uv extends _.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? _.createElement(
          ln.Provider,
          { value: this.props.routeContext },
          _.createElement(Ed.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function av(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = _.useContext(cl);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    _.createElement(ln.Provider, { value: t }, r)
  );
}
function sv(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    u = (l = n) == null ? void 0 : l.errors;
  if (u != null) {
    let c = i.findIndex(
      (p) => p.route.id && (u == null ? void 0 : u[p.route.id]),
    );
    c >= 0 || V(!1), (i = i.slice(0, Math.min(i.length, c + 1)));
  }
  let a = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < i.length; c++) {
      let p = i[c];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (s = c),
        p.route.id)
      ) {
        let { loaderData: m, errors: E } = n,
          S =
            p.route.loader &&
            m[p.route.id] === void 0 &&
            (!E || E[p.route.id] === void 0);
        if (p.route.lazy || S) {
          (a = !0), s >= 0 ? (i = i.slice(0, s + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((c, p, m) => {
    let E,
      S = !1,
      w = null,
      C = null;
    n &&
      ((E = u && p.route.id ? u[p.route.id] : void 0),
      (w = p.route.errorElement || iv),
      a &&
        (s < 0 && m === 0
          ? (vv("route-fallback", !1), (S = !0), (C = null))
          : s === m &&
            ((S = !0), (C = p.route.hydrateFallbackElement || null))));
    let d = t.concat(i.slice(0, m + 1)),
      f = () => {
        let h;
        return (
          E
            ? (h = w)
            : S
              ? (h = C)
              : p.route.Component
                ? (h = _.createElement(p.route.Component, null))
                : p.route.element
                  ? (h = p.route.element)
                  : (h = c),
          _.createElement(av, {
            match: p,
            routeContext: { outlet: c, matches: d, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
      ? _.createElement(uv, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: E,
          children: f(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var Cd = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Cd || {}),
  or = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(or || {});
function cv(e) {
  let t = _.useContext(cl);
  return t || V(!1), t;
}
function da(e) {
  let t = _.useContext(fa);
  return t || V(!1), t;
}
function fv(e) {
  let t = _.useContext(ln);
  return t || V(!1), t;
}
function Pd(e) {
  let t = fv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || V(!1), n.route.id;
}
function dv() {
  return da(or.UseNavigation).navigation;
}
function pv() {
  let { matches: e, loaderData: t } = da(or.UseMatches);
  return _.useMemo(() => e.map((n) => cd(n, t)), [e, t]);
}
function hv() {
  var e;
  let t = _.useContext(Ed),
    n = da(or.UseRouteError),
    r = Pd(or.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function mv() {
  let { router: e } = cv(Cd.UseNavigateStable),
    t = Pd(or.UseNavigateStable),
    n = _.useRef(!1);
  return (
    kd(() => {
      n.current = !0;
    }),
    _.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, ll({ fromRouteId: t }, o)));
      },
      [e, t],
    )
  );
}
const Qs = {};
function vv(e, t, n) {
  !t && !Qs[e] && (Qs[e] = !0);
}
function Av(e) {
  return rv(e.context);
}
function yv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = fe.Pop,
    navigator: o,
    static: i = !1,
    future: u,
  } = e;
  fl() && V(!1);
  let a = t.replace(/^\/*/, "/"),
    s = _.useMemo(
      () => ({
        basename: a,
        navigator: o,
        static: i,
        future: ll({ v7_relativeSplatPath: !1 }, u),
      }),
      [a, u, o, i],
    );
  typeof r == "string" && (r = Nt(r));
  let {
      pathname: c = "/",
      search: p = "",
      hash: m = "",
      state: E = null,
      key: S = "default",
    } = r,
    w = _.useMemo(() => {
      let C = _n(c, a);
      return C == null
        ? null
        : {
            location: { pathname: C, search: p, hash: m, state: E, key: S },
            navigationType: l,
          };
    }, [a, c, p, m, E, S, l]);
  return w == null
    ? null
    : _.createElement(
        rn.Provider,
        { value: s },
        _.createElement(Mo.Provider, { children: n, value: w }),
      );
}
new Promise(() => {});
function gv(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: _.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: _.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: _.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ir() {
  return (
    (ir = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ir.apply(this, arguments)
  );
}
function wv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Sv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ev(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Sv(e);
}
const kv = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
  "unstable_viewTransition",
];
function Bv(e, t) {
  return Bm({
    basename: t == null ? void 0 : t.basename,
    future: ir({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: sm({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || xv(),
    routes: e,
    mapRouteProperties: gv,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function xv() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = ir({}, t, { errors: Cv(t.errors) })), t;
}
function Cv(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new sa(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == "function")
          try {
            let i = new o(l.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = l;
  return n;
}
const Pv = _.createContext({ isTransitioning: !1 }),
  _v = _.createContext(new Map()),
  Rv = "startTransition",
  Ks = rp[Rv],
  Lv = "flushSync",
  Ys = am[Lv];
function Tv(e) {
  Ks ? Ks(e) : e();
}
function Pr(e) {
  Ys ? Ys(e) : e();
}
class Nv {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function $v(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = _.useState(n.state),
    [i, u] = _.useState(),
    [a, s] = _.useState({ isTransitioning: !1 }),
    [c, p] = _.useState(),
    [m, E] = _.useState(),
    [S, w] = _.useState(),
    C = _.useRef(new Map()),
    { v7_startTransition: d } = r || {},
    f = _.useCallback(
      (P) => {
        d ? Tv(P) : P();
      },
      [d],
    ),
    h = _.useCallback(
      (P, T) => {
        let {
          deletedFetchers: O,
          unstable_flushSync: U,
          unstable_viewTransitionOpts: Y,
        } = T;
        O.forEach((pe) => C.current.delete(pe)),
          P.fetchers.forEach((pe, Xe) => {
            pe.data !== void 0 && C.current.set(Xe, pe.data);
          });
        let me =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!Y || me) {
          U ? Pr(() => o(P)) : f(() => o(P));
          return;
        }
        if (U) {
          Pr(() => {
            m && (c && c.resolve(), m.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Y.currentLocation,
                nextLocation: Y.nextLocation,
              });
          });
          let pe = n.window.document.startViewTransition(() => {
            Pr(() => o(P));
          });
          pe.finished.finally(() => {
            Pr(() => {
              p(void 0), E(void 0), u(void 0), s({ isTransitioning: !1 });
            });
          }),
            Pr(() => E(pe));
          return;
        }
        m
          ? (c && c.resolve(),
            m.skipTransition(),
            w({
              state: P,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }))
          : (u(P),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }));
      },
      [n.window, m, c, C, f],
    );
  _.useLayoutEffect(() => n.subscribe(h), [n, h]),
    _.useEffect(() => {
      a.isTransitioning && !a.flushSync && p(new Nv());
    }, [a]),
    _.useEffect(() => {
      if (c && i && n.window) {
        let P = i,
          T = c.promise,
          O = n.window.document.startViewTransition(async () => {
            f(() => o(P)), await T;
          });
        O.finished.finally(() => {
          p(void 0), E(void 0), u(void 0), s({ isTransitioning: !1 });
        }),
          E(O);
      }
    }, [f, i, c, n.window]),
    _.useEffect(() => {
      c && i && l.location.key === i.location.key && c.resolve();
    }, [c, m, l.location, i]),
    _.useEffect(() => {
      !a.isTransitioning &&
        S &&
        (u(S.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: S.currentLocation,
          nextLocation: S.nextLocation,
        }),
        w(void 0));
    }, [a.isTransitioning, S]),
    _.useEffect(() => {}, []);
  let x = _.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (P) => n.navigate(P),
        push: (P, T, O) =>
          n.navigate(P, {
            state: T,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
        replace: (P, T, O) =>
          n.navigate(P, {
            replace: !0,
            state: T,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
      }),
      [n],
    ),
    L = n.basename || "/",
    v = _.useMemo(
      () => ({ router: n, navigator: x, static: !1, basename: L }),
      [n, x, L],
    );
  return _.createElement(
    _.Fragment,
    null,
    _.createElement(
      cl.Provider,
      { value: v },
      _.createElement(
        fa.Provider,
        { value: l },
        _.createElement(
          _v.Provider,
          { value: C.current },
          _.createElement(
            Pv.Provider,
            { value: a },
            _.createElement(
              yv,
              {
                basename: L,
                location: l.location,
                navigationType: l.historyAction,
                navigator: x,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              l.initialized || n.future.v7_partialHydration
                ? _.createElement(Dv, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function Dv(e) {
  let { routes: t, future: n, state: r } = e;
  return lv(t, void 0, r, n);
}
const zv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Mv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Vv = _.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: u,
        target: a,
        to: s,
        preventScrollReset: c,
        unstable_viewTransition: p,
      } = t,
      m = wv(t, kv),
      { basename: E } = _.useContext(rn),
      S,
      w = !1;
    if (typeof s == "string" && Mv.test(s) && ((S = s), zv))
      try {
        let h = new URL(window.location.href),
          x = s.startsWith("//") ? new URL(h.protocol + s) : new URL(s),
          L = _n(x.pathname, E);
        x.origin === h.origin && L != null
          ? (s = L + x.search + x.hash)
          : (w = !0);
      } catch {}
    let C = bm(s, { relative: l }),
      d = Uv(s, {
        replace: i,
        state: u,
        target: a,
        preventScrollReset: c,
        relative: l,
        unstable_viewTransition: p,
      });
    function f(h) {
      r && r(h), h.defaultPrevented || d(h);
    }
    return _.createElement(
      "a",
      ir({}, m, { href: S || C, onClick: w || o ? r : f, ref: n, target: a }),
    );
  });
function Hv(e) {
  let { getKey: t, storageKey: n } = e;
  return Iv({ getKey: t, storageKey: n }), null;
}
var fu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(fu || (fu = {}));
var du;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(du || (du = {}));
function Ov(e) {
  let t = _.useContext(cl);
  return t || V(!1), t;
}
function Fv(e) {
  let t = _.useContext(fa);
  return t || V(!1), t;
}
function Uv(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    a = ev(),
    s = dl(),
    c = xd(e, { relative: i });
  return _.useCallback(
    (p) => {
      if (Ev(p, n)) {
        p.preventDefault();
        let m = r !== void 0 ? r : xn(s) === xn(c);
        a(e, {
          replace: m,
          state: l,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: u,
        });
      }
    },
    [s, a, c, r, l, n, e, o, i, u],
  );
}
const Xs = "react-router-scroll-positions";
let Ol = {};
function Iv(e) {
  let { getKey: t, storageKey: n } = e === void 0 ? {} : e,
    { router: r } = Ov(fu.UseScrollRestoration),
    { restoreScrollPosition: l, preventScrollReset: o } = Fv(
      du.UseScrollRestoration,
    ),
    { basename: i } = _.useContext(rn),
    u = dl(),
    a = pv(),
    s = dv();
  _.useEffect(
    () => (
      (window.history.scrollRestoration = "manual"),
      () => {
        window.history.scrollRestoration = "auto";
      }
    ),
    [],
  ),
    jv(
      _.useCallback(() => {
        if (s.state === "idle") {
          let c = (t ? t(u, a) : null) || u.key;
          Ol[c] = window.scrollY;
        }
        try {
          sessionStorage.setItem(n || Xs, JSON.stringify(Ol));
        } catch {}
        window.history.scrollRestoration = "auto";
      }, [n, t, s.state, u, a]),
    ),
    typeof document < "u" &&
      (_.useLayoutEffect(() => {
        try {
          let c = sessionStorage.getItem(n || Xs);
          c && (Ol = JSON.parse(c));
        } catch {}
      }, [n]),
      _.useLayoutEffect(() => {
        let c =
            t && i !== "/"
              ? (m, E) =>
                  t(ir({}, m, { pathname: _n(m.pathname, i) || m.pathname }), E)
              : t,
          p =
            r == null
              ? void 0
              : r.enableScrollRestoration(Ol, () => window.scrollY, c);
        return () => p && p();
      }, [r, i, t]),
      _.useLayoutEffect(() => {
        if (l !== !1) {
          if (typeof l == "number") {
            window.scrollTo(0, l);
            return;
          }
          if (u.hash) {
            let c = document.getElementById(
              decodeURIComponent(u.hash.slice(1)),
            );
            if (c) {
              c.scrollIntoView();
              return;
            }
          }
          o !== !0 && window.scrollTo(0, 0);
        }
      }, [u, l, o]));
}
function jv(e, t) {
  let { capture: n } = t || {};
  _.useEffect(() => {
    let r = n != null ? { capture: n } : void 0;
    return (
      window.addEventListener("pagehide", e, r),
      () => {
        window.removeEventListener("pagehide", e, r);
      }
    );
  }, [e, n]);
}
export {
  Vv as L,
  Av as O,
  $v as R,
  Hv as S,
  sd as a,
  Bv as c,
  Js as g,
  _ as r,
};
