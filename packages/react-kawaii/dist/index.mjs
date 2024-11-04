function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = function(cb, mod) {
    return function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
// ../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
    "../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js": function(exports) {
        "use strict";
        var l = Symbol.for("react.element");
        var n = Symbol.for("react.portal");
        var p = Symbol.for("react.fragment");
        var q = Symbol.for("react.strict_mode");
        var r = Symbol.for("react.profiler");
        var t = Symbol.for("react.provider");
        var u = Symbol.for("react.context");
        var v = Symbol.for("react.forward_ref");
        var w = Symbol.for("react.suspense");
        var x = Symbol.for("react.memo");
        var y = Symbol.for("react.lazy");
        var z = Symbol.iterator;
        function A(a) {
            if (null === a || "object" !== typeof a) return null;
            a = z && a[z] || a["@@iterator"];
            return "function" === typeof a ? a : null;
        }
        var B = {
            isMounted: function isMounted() {
                return false;
            },
            enqueueForceUpdate: function enqueueForceUpdate() {},
            enqueueReplaceState: function enqueueReplaceState() {},
            enqueueSetState: function enqueueSetState() {}
        };
        var C = Object.assign;
        var D = {};
        function E(a, b, e) {
            this.props = a;
            this.context = b;
            this.refs = D;
            this.updater = e || B;
        }
        E.prototype.isReactComponent = {};
        E.prototype.setState = function(a, b) {
            if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, a, b, "setState");
        };
        E.prototype.forceUpdate = function(a) {
            this.updater.enqueueForceUpdate(this, a, "forceUpdate");
        };
        function F() {}
        F.prototype = E.prototype;
        function G(a, b, e) {
            this.props = a;
            this.context = b;
            this.refs = D;
            this.updater = e || B;
        }
        var H = G.prototype = new F();
        H.constructor = G;
        C(H, E.prototype);
        H.isPureReactComponent = true;
        var I = Array.isArray;
        var J = Object.prototype.hasOwnProperty;
        var K = {
            current: null
        };
        var L = {
            key: true,
            ref: true,
            __self: true,
            __source: true
        };
        function M(a, b, e) {
            var d, c = {}, k = null, h = null;
            if (null != b) for(d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
            var g = arguments.length - 2;
            if (1 === g) c.children = e;
            else if (1 < g) {
                for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
                c.children = f;
            }
            if (a && a.defaultProps) for(d in g = a.defaultProps, g)void 0 === c[d] && (c[d] = g[d]);
            return {
                $$typeof: l,
                type: a,
                key: k,
                ref: h,
                props: c,
                _owner: K.current
            };
        }
        function N(a, b) {
            return {
                $$typeof: l,
                type: a.type,
                key: b,
                ref: a.ref,
                props: a.props,
                _owner: a._owner
            };
        }
        function O(a) {
            return "object" === typeof a && null !== a && a.$$typeof === l;
        }
        function escape(a) {
            var b = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + a.replace(/[=:]/g, function(a2) {
                return b[a2];
            });
        }
        var P = /\/+/g;
        function Q(a, b) {
            return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
        }
        function R(a, b, e, d, c) {
            var k = typeof a === "undefined" ? "undefined" : _type_of(a);
            if ("undefined" === k || "boolean" === k) a = null;
            var h = false;
            if (null === a) h = true;
            else switch(k){
                case "string":
                case "number":
                    h = true;
                    break;
                case "object":
                    switch(a.$$typeof){
                        case l:
                        case n:
                            h = true;
                    }
            }
            if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
                return a2;
            })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
            h = 0;
            d = "" === d ? "." : d + ":";
            if (I(a)) for(var g = 0; g < a.length; g++){
                k = a[g];
                var f = d + Q(k, g);
                h += R(k, b, e, f, c);
            }
            else if (f = A(a), "function" === typeof f) for(a = f.call(a), g = 0; !(k = a.next()).done;)k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
            else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
            return h;
        }
        function S(a, b, e) {
            if (null == a) return a;
            var d = [], c = 0;
            R(a, d, "", "", function(a2) {
                return b.call(e, a2, c++);
            });
            return d;
        }
        function T(a) {
            if (-1 === a._status) {
                var b = a._result;
                b = b();
                b.then(function(b2) {
                    if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
                }, function(b2) {
                    if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
                });
                -1 === a._status && (a._status = 0, a._result = b);
            }
            if (1 === a._status) return a._result.default;
            throw a._result;
        }
        var U = {
            current: null
        };
        var V = {
            transition: null
        };
        var W = {
            ReactCurrentDispatcher: U,
            ReactCurrentBatchConfig: V,
            ReactCurrentOwner: K
        };
        function X() {
            throw Error("act(...) is not supported in production builds of React.");
        }
        exports.Children = {
            map: S,
            forEach: function forEach(a, b, e) {
                S(a, function() {
                    b.apply(this, arguments);
                }, e);
            },
            count: function count(a) {
                var b = 0;
                S(a, function() {
                    b++;
                });
                return b;
            },
            toArray: function toArray(a) {
                return S(a, function(a2) {
                    return a2;
                }) || [];
            },
            only: function only(a) {
                if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
                return a;
            }
        };
        exports.Component = E;
        exports.Fragment = p;
        exports.Profiler = r;
        exports.PureComponent = G;
        exports.StrictMode = q;
        exports.Suspense = w;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
        exports.act = X;
        exports.cloneElement = function(a, b, e) {
            if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
            var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
            if (null != b) {
                void 0 !== b.ref && (k = b.ref, h = K.current);
                void 0 !== b.key && (c = "" + b.key);
                if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
                for(f in b)J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
            }
            var f = arguments.length - 2;
            if (1 === f) d.children = e;
            else if (1 < f) {
                g = Array(f);
                for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
                d.children = g;
            }
            return {
                $$typeof: l,
                type: a.type,
                key: c,
                ref: k,
                props: d,
                _owner: h
            };
        };
        exports.createContext = function(a) {
            a = {
                $$typeof: u,
                _currentValue: a,
                _currentValue2: a,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
            };
            a.Provider = {
                $$typeof: t,
                _context: a
            };
            return a.Consumer = a;
        };
        exports.createElement = M;
        exports.createFactory = function(a) {
            var b = M.bind(null, a);
            b.type = a;
            return b;
        };
        exports.createRef = function() {
            return {
                current: null
            };
        };
        exports.forwardRef = function(a) {
            return {
                $$typeof: v,
                render: a
            };
        };
        exports.isValidElement = O;
        exports.lazy = function(a) {
            return {
                $$typeof: y,
                _payload: {
                    _status: -1,
                    _result: a
                },
                _init: T
            };
        };
        exports.memo = function(a, b) {
            return {
                $$typeof: x,
                type: a,
                compare: void 0 === b ? null : b
            };
        };
        exports.startTransition = function(a) {
            var b = V.transition;
            V.transition = {};
            try {
                a();
            } finally{
                V.transition = b;
            }
        };
        exports.unstable_act = X;
        exports.useCallback = function(a, b) {
            return U.current.useCallback(a, b);
        };
        exports.useContext = function(a) {
            return U.current.useContext(a);
        };
        exports.useDebugValue = function() {};
        exports.useDeferredValue = function(a) {
            return U.current.useDeferredValue(a);
        };
        exports.useEffect = function(a, b) {
            return U.current.useEffect(a, b);
        };
        exports.useId = function() {
            return U.current.useId();
        };
        exports.useImperativeHandle = function(a, b, e) {
            return U.current.useImperativeHandle(a, b, e);
        };
        exports.useInsertionEffect = function(a, b) {
            return U.current.useInsertionEffect(a, b);
        };
        exports.useLayoutEffect = function(a, b) {
            return U.current.useLayoutEffect(a, b);
        };
        exports.useMemo = function(a, b) {
            return U.current.useMemo(a, b);
        };
        exports.useReducer = function(a, b, e) {
            return U.current.useReducer(a, b, e);
        };
        exports.useRef = function(a) {
            return U.current.useRef(a);
        };
        exports.useState = function(a) {
            return U.current.useState(a);
        };
        exports.useSyncExternalStore = function(a, b, e) {
            return U.current.useSyncExternalStore(a, b, e);
        };
        exports.useTransition = function() {
            return U.current.useTransition();
        };
        exports.version = "18.3.1";
    }
});
// ../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
    "../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.development.js": function(exports, module) {
        "use strict";
        if (process.env.NODE_ENV !== "production") {
            (function() {
                "use strict";
                if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
                }
                var ReactVersion = "18.3.1";
                var REACT_ELEMENT_TYPE = Symbol.for("react.element");
                var REACT_PORTAL_TYPE = Symbol.for("react.portal");
                var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
                var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
                var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
                var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
                var REACT_CONTEXT_TYPE = Symbol.for("react.context");
                var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
                var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
                var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
                var REACT_MEMO_TYPE = Symbol.for("react.memo");
                var REACT_LAZY_TYPE = Symbol.for("react.lazy");
                var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
                var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
                var FAUX_ITERATOR_SYMBOL = "@@iterator";
                function getIteratorFn(maybeIterable) {
                    if (maybeIterable === null || typeof maybeIterable !== "object") {
                        return null;
                    }
                    var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
                    if (typeof maybeIterator === "function") {
                        return maybeIterator;
                    }
                    return null;
                }
                var ReactCurrentDispatcher = {
                    /**
           * @internal
           * @type {ReactComponent}
           */ current: null
                };
                var ReactCurrentBatchConfig = {
                    transition: null
                };
                var ReactCurrentActQueue = {
                    current: null,
                    // Used to reproduce behavior of `batchedUpdates` in legacy mode.
                    isBatchingLegacy: false,
                    didScheduleLegacyUpdate: false
                };
                var ReactCurrentOwner = {
                    /**
           * @internal
           * @type {ReactComponent}
           */ current: null
                };
                var ReactDebugCurrentFrame = {};
                var currentExtraStackFrame = null;
                function setExtraStackFrame(stack) {
                    {
                        currentExtraStackFrame = stack;
                    }
                }
                {
                    ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
                        {
                            currentExtraStackFrame = stack;
                        }
                    };
                    ReactDebugCurrentFrame.getCurrentStack = null;
                    ReactDebugCurrentFrame.getStackAddendum = function() {
                        var stack = "";
                        if (currentExtraStackFrame) {
                            stack += currentExtraStackFrame;
                        }
                        var impl = ReactDebugCurrentFrame.getCurrentStack;
                        if (impl) {
                            stack += impl() || "";
                        }
                        return stack;
                    };
                }
                var enableScopeAPI = false;
                var enableCacheElement = false;
                var enableTransitionTracing = false;
                var enableLegacyHidden = false;
                var enableDebugTracing = false;
                var ReactSharedInternals = {
                    ReactCurrentDispatcher: ReactCurrentDispatcher,
                    ReactCurrentBatchConfig: ReactCurrentBatchConfig,
                    ReactCurrentOwner: ReactCurrentOwner
                };
                {
                    ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
                    ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
                }
                function warn(format) {
                    {
                        {
                            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                                args[_key - 1] = arguments[_key];
                            }
                            printWarning("warn", format, args);
                        }
                    }
                }
                function error(format) {
                    {
                        {
                            for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                                args[_key2 - 1] = arguments[_key2];
                            }
                            printWarning("error", format, args);
                        }
                    }
                }
                function printWarning(level, format, args) {
                    {
                        var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
                        var stack = ReactDebugCurrentFrame2.getStackAddendum();
                        if (stack !== "") {
                            format += "%s";
                            args = args.concat([
                                stack
                            ]);
                        }
                        var argsWithFormat = args.map(function(item) {
                            return String(item);
                        });
                        argsWithFormat.unshift("Warning: " + format);
                        Function.prototype.apply.call(console[level], console, argsWithFormat);
                    }
                }
                var didWarnStateUpdateForUnmountedComponent = {};
                function warnNoop(publicInstance, callerName) {
                    {
                        var _constructor = publicInstance.constructor;
                        var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
                        var warningKey = componentName + "." + callerName;
                        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                            return;
                        }
                        error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
                        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
                    }
                }
                var ReactNoopUpdateQueue = {
                    /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */ isMounted: function isMounted(publicInstance) {
                        return false;
                    },
                    /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */ enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
                        warnNoop(publicInstance, "forceUpdate");
                    },
                    /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */ enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
                        warnNoop(publicInstance, "replaceState");
                    },
                    /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */ enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
                        warnNoop(publicInstance, "setState");
                    }
                };
                var assign = Object.assign;
                var emptyObject = {};
                {
                    Object.freeze(emptyObject);
                }
                function Component(props, context, updater) {
                    this.props = props;
                    this.context = context;
                    this.refs = emptyObject;
                    this.updater = updater || ReactNoopUpdateQueue;
                }
                Component.prototype.isReactComponent = {};
                Component.prototype.setState = function(partialState, callback) {
                    if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
                        throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    }
                    this.updater.enqueueSetState(this, partialState, callback, "setState");
                };
                Component.prototype.forceUpdate = function(callback) {
                    this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
                };
                {
                    var deprecatedAPIs = {
                        isMounted: [
                            "isMounted",
                            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
                        ],
                        replaceState: [
                            "replaceState",
                            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
                        ]
                    };
                    var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
                        Object.defineProperty(Component.prototype, methodName, {
                            get: function get() {
                                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                                return void 0;
                            }
                        });
                    };
                    for(var fnName in deprecatedAPIs){
                        if (deprecatedAPIs.hasOwnProperty(fnName)) {
                            defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
                        }
                    }
                }
                function ComponentDummy() {}
                ComponentDummy.prototype = Component.prototype;
                function PureComponent(props, context, updater) {
                    this.props = props;
                    this.context = context;
                    this.refs = emptyObject;
                    this.updater = updater || ReactNoopUpdateQueue;
                }
                var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
                pureComponentPrototype.constructor = PureComponent;
                assign(pureComponentPrototype, Component.prototype);
                pureComponentPrototype.isPureReactComponent = true;
                function createRef() {
                    var refObject = {
                        current: null
                    };
                    {
                        Object.seal(refObject);
                    }
                    return refObject;
                }
                var isArrayImpl = Array.isArray;
                function isArray(a) {
                    return isArrayImpl(a);
                }
                function typeName(value) {
                    {
                        var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
                        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
                        return type;
                    }
                }
                function willCoercionThrow(value) {
                    {
                        try {
                            testStringCoercion(value);
                            return false;
                        } catch (e) {
                            return true;
                        }
                    }
                }
                function testStringCoercion(value) {
                    return "" + value;
                }
                function checkKeyStringCoercion(value) {
                    {
                        if (willCoercionThrow(value)) {
                            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                            return testStringCoercion(value);
                        }
                    }
                }
                function getWrappedName(outerType, innerType, wrapperName) {
                    var displayName = outerType.displayName;
                    if (displayName) {
                        return displayName;
                    }
                    var functionName = innerType.displayName || innerType.name || "";
                    return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
                }
                function getContextName(type) {
                    return type.displayName || "Context";
                }
                function getComponentNameFromType(type) {
                    if (type == null) {
                        return null;
                    }
                    {
                        if (typeof type.tag === "number") {
                            error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
                        }
                    }
                    if (typeof type === "function") {
                        return type.displayName || type.name || null;
                    }
                    if (typeof type === "string") {
                        return type;
                    }
                    switch(type){
                        case REACT_FRAGMENT_TYPE:
                            return "Fragment";
                        case REACT_PORTAL_TYPE:
                            return "Portal";
                        case REACT_PROFILER_TYPE:
                            return "Profiler";
                        case REACT_STRICT_MODE_TYPE:
                            return "StrictMode";
                        case REACT_SUSPENSE_TYPE:
                            return "Suspense";
                        case REACT_SUSPENSE_LIST_TYPE:
                            return "SuspenseList";
                    }
                    if (typeof type === "object") {
                        switch(type.$$typeof){
                            case REACT_CONTEXT_TYPE:
                                var context = type;
                                return getContextName(context) + ".Consumer";
                            case REACT_PROVIDER_TYPE:
                                var provider = type;
                                return getContextName(provider._context) + ".Provider";
                            case REACT_FORWARD_REF_TYPE:
                                return getWrappedName(type, type.render, "ForwardRef");
                            case REACT_MEMO_TYPE:
                                var outerName = type.displayName || null;
                                if (outerName !== null) {
                                    return outerName;
                                }
                                return getComponentNameFromType(type.type) || "Memo";
                            case REACT_LAZY_TYPE:
                                {
                                    var lazyComponent = type;
                                    var payload = lazyComponent._payload;
                                    var init = lazyComponent._init;
                                    try {
                                        return getComponentNameFromType(init(payload));
                                    } catch (x) {
                                        return null;
                                    }
                                }
                        }
                    }
                    return null;
                }
                var hasOwnProperty = Object.prototype.hasOwnProperty;
                var RESERVED_PROPS = {
                    key: true,
                    ref: true,
                    __self: true,
                    __source: true
                };
                var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
                {
                    didWarnAboutStringRefs = {};
                }
                function hasValidRef(config) {
                    {
                        if (hasOwnProperty.call(config, "ref")) {
                            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                            if (getter && getter.isReactWarning) {
                                return false;
                            }
                        }
                    }
                    return config.ref !== void 0;
                }
                function hasValidKey(config) {
                    {
                        if (hasOwnProperty.call(config, "key")) {
                            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                            if (getter && getter.isReactWarning) {
                                return false;
                            }
                        }
                    }
                    return config.key !== void 0;
                }
                function defineKeyPropWarningGetter(props, displayName) {
                    var warnAboutAccessingKey = function warnAboutAccessingKey() {
                        {
                            if (!specialPropKeyWarningShown) {
                                specialPropKeyWarningShown = true;
                                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                            }
                        }
                    };
                    warnAboutAccessingKey.isReactWarning = true;
                    Object.defineProperty(props, "key", {
                        get: warnAboutAccessingKey,
                        configurable: true
                    });
                }
                function defineRefPropWarningGetter(props, displayName) {
                    var warnAboutAccessingRef = function warnAboutAccessingRef() {
                        {
                            if (!specialPropRefWarningShown) {
                                specialPropRefWarningShown = true;
                                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                            }
                        }
                    };
                    warnAboutAccessingRef.isReactWarning = true;
                    Object.defineProperty(props, "ref", {
                        get: warnAboutAccessingRef,
                        configurable: true
                    });
                }
                function warnIfStringRefCannotBeAutoConverted(config) {
                    {
                        if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                            if (!didWarnAboutStringRefs[componentName]) {
                                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                                didWarnAboutStringRefs[componentName] = true;
                            }
                        }
                    }
                }
                var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
                    var element = {
                        // This tag allows us to uniquely identify this as a React Element
                        $$typeof: REACT_ELEMENT_TYPE,
                        // Built-in properties that belong on the element
                        type: type,
                        key: key,
                        ref: ref,
                        props: props,
                        // Record the component responsible for creating this element.
                        _owner: owner
                    };
                    {
                        element._store = {};
                        Object.defineProperty(element._store, "validated", {
                            configurable: false,
                            enumerable: false,
                            writable: true,
                            value: false
                        });
                        Object.defineProperty(element, "_self", {
                            configurable: false,
                            enumerable: false,
                            writable: false,
                            value: self
                        });
                        Object.defineProperty(element, "_source", {
                            configurable: false,
                            enumerable: false,
                            writable: false,
                            value: source
                        });
                        if (Object.freeze) {
                            Object.freeze(element.props);
                            Object.freeze(element);
                        }
                    }
                    return element;
                };
                function createElement(type, config, children) {
                    var propName;
                    var props = {};
                    var key = null;
                    var ref = null;
                    var self = null;
                    var source = null;
                    if (config != null) {
                        if (hasValidRef(config)) {
                            ref = config.ref;
                            {
                                warnIfStringRefCannotBeAutoConverted(config);
                            }
                        }
                        if (hasValidKey(config)) {
                            {
                                checkKeyStringCoercion(config.key);
                            }
                            key = "" + config.key;
                        }
                        self = config.__self === void 0 ? null : config.__self;
                        source = config.__source === void 0 ? null : config.__source;
                        for(propName in config){
                            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                                props[propName] = config[propName];
                            }
                        }
                    }
                    var childrenLength = arguments.length - 2;
                    if (childrenLength === 1) {
                        props.children = children;
                    } else if (childrenLength > 1) {
                        var childArray = Array(childrenLength);
                        for(var i = 0; i < childrenLength; i++){
                            childArray[i] = arguments[i + 2];
                        }
                        {
                            if (Object.freeze) {
                                Object.freeze(childArray);
                            }
                        }
                        props.children = childArray;
                    }
                    if (type && type.defaultProps) {
                        var defaultProps = type.defaultProps;
                        for(propName in defaultProps){
                            if (props[propName] === void 0) {
                                props[propName] = defaultProps[propName];
                            }
                        }
                    }
                    {
                        if (key || ref) {
                            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                            if (key) {
                                defineKeyPropWarningGetter(props, displayName);
                            }
                            if (ref) {
                                defineRefPropWarningGetter(props, displayName);
                            }
                        }
                    }
                    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
                }
                function cloneAndReplaceKey(oldElement, newKey) {
                    var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
                    return newElement;
                }
                function cloneElement(element, config, children) {
                    if (element === null || element === void 0) {
                        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
                    }
                    var propName;
                    var props = assign({}, element.props);
                    var key = element.key;
                    var ref = element.ref;
                    var self = element._self;
                    var source = element._source;
                    var owner = element._owner;
                    if (config != null) {
                        if (hasValidRef(config)) {
                            ref = config.ref;
                            owner = ReactCurrentOwner.current;
                        }
                        if (hasValidKey(config)) {
                            {
                                checkKeyStringCoercion(config.key);
                            }
                            key = "" + config.key;
                        }
                        var defaultProps;
                        if (element.type && element.type.defaultProps) {
                            defaultProps = element.type.defaultProps;
                        }
                        for(propName in config){
                            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                                if (config[propName] === void 0 && defaultProps !== void 0) {
                                    props[propName] = defaultProps[propName];
                                } else {
                                    props[propName] = config[propName];
                                }
                            }
                        }
                    }
                    var childrenLength = arguments.length - 2;
                    if (childrenLength === 1) {
                        props.children = children;
                    } else if (childrenLength > 1) {
                        var childArray = Array(childrenLength);
                        for(var i = 0; i < childrenLength; i++){
                            childArray[i] = arguments[i + 2];
                        }
                        props.children = childArray;
                    }
                    return ReactElement(element.type, key, ref, self, source, owner, props);
                }
                function isValidElement(object) {
                    return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
                }
                var SEPARATOR = ".";
                var SUBSEPARATOR = ":";
                function escape(key) {
                    var escapeRegex = /[=:]/g;
                    var escaperLookup = {
                        "=": "=0",
                        ":": "=2"
                    };
                    var escapedString = key.replace(escapeRegex, function(match) {
                        return escaperLookup[match];
                    });
                    return "$" + escapedString;
                }
                var didWarnAboutMaps = false;
                var userProvidedKeyEscapeRegex = /\/+/g;
                function escapeUserProvidedKey(text) {
                    return text.replace(userProvidedKeyEscapeRegex, "$&/");
                }
                function getElementKey(element, index) {
                    if (typeof element === "object" && element !== null && element.key != null) {
                        {
                            checkKeyStringCoercion(element.key);
                        }
                        return escape("" + element.key);
                    }
                    return index.toString(36);
                }
                function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
                    var type = typeof children === "undefined" ? "undefined" : _type_of(children);
                    if (type === "undefined" || type === "boolean") {
                        children = null;
                    }
                    var invokeCallback = false;
                    if (children === null) {
                        invokeCallback = true;
                    } else {
                        switch(type){
                            case "string":
                            case "number":
                                invokeCallback = true;
                                break;
                            case "object":
                                switch(children.$$typeof){
                                    case REACT_ELEMENT_TYPE:
                                    case REACT_PORTAL_TYPE:
                                        invokeCallback = true;
                                }
                        }
                    }
                    if (invokeCallback) {
                        var _child = children;
                        var mappedChild = callback(_child);
                        var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
                        if (isArray(mappedChild)) {
                            var escapedChildKey = "";
                            if (childKey != null) {
                                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                            }
                            mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                                return c;
                            });
                        } else if (mappedChild != null) {
                            if (isValidElement(mappedChild)) {
                                {
                                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                                        checkKeyStringCoercion(mappedChild.key);
                                    }
                                }
                                mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
                                // traverseAllChildren used to do for objects as children
                                escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                                (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                                // eslint-disable-next-line react-internal/safe-string-coercion
                                escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
                            }
                            array.push(mappedChild);
                        }
                        return 1;
                    }
                    var child;
                    var nextName;
                    var subtreeCount = 0;
                    var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
                    if (isArray(children)) {
                        for(var i = 0; i < children.length; i++){
                            child = children[i];
                            nextName = nextNamePrefix + getElementKey(child, i);
                            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                        }
                    } else {
                        var iteratorFn = getIteratorFn(children);
                        if (typeof iteratorFn === "function") {
                            var iterableChildren = children;
                            {
                                if (iteratorFn === iterableChildren.entries) {
                                    if (!didWarnAboutMaps) {
                                        warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                                    }
                                    didWarnAboutMaps = true;
                                }
                            }
                            var iterator = iteratorFn.call(iterableChildren);
                            var step;
                            var ii = 0;
                            while(!(step = iterator.next()).done){
                                child = step.value;
                                nextName = nextNamePrefix + getElementKey(child, ii++);
                                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                            }
                        } else if (type === "object") {
                            var childrenString = String(children);
                            throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
                        }
                    }
                    return subtreeCount;
                }
                function mapChildren(children, func, context) {
                    if (children == null) {
                        return children;
                    }
                    var result = [];
                    var count = 0;
                    mapIntoArray(children, result, "", "", function(child) {
                        return func.call(context, child, count++);
                    });
                    return result;
                }
                function countChildren(children) {
                    var n = 0;
                    mapChildren(children, function() {
                        n++;
                    });
                    return n;
                }
                function forEachChildren(children, forEachFunc, forEachContext) {
                    mapChildren(children, function() {
                        forEachFunc.apply(this, arguments);
                    }, forEachContext);
                }
                function toArray(children) {
                    return mapChildren(children, function(child) {
                        return child;
                    }) || [];
                }
                function onlyChild(children) {
                    if (!isValidElement(children)) {
                        throw new Error("React.Children.only expected to receive a single React element child.");
                    }
                    return children;
                }
                function createContext(defaultValue) {
                    var context = {
                        $$typeof: REACT_CONTEXT_TYPE,
                        // As a workaround to support multiple concurrent renderers, we categorize
                        // some renderers as primary and others as secondary. We only expect
                        // there to be two concurrent renderers at most: React Native (primary) and
                        // Fabric (secondary); React DOM (primary) and React ART (secondary).
                        // Secondary renderers store their context values on separate fields.
                        _currentValue: defaultValue,
                        _currentValue2: defaultValue,
                        // Used to track how many concurrent renderers this context currently
                        // supports within in a single renderer. Such as parallel server rendering.
                        _threadCount: 0,
                        // These are circular
                        Provider: null,
                        Consumer: null,
                        // Add these to use same hidden class in VM as ServerContext
                        _defaultValue: null,
                        _globalName: null
                    };
                    context.Provider = {
                        $$typeof: REACT_PROVIDER_TYPE,
                        _context: context
                    };
                    var hasWarnedAboutUsingNestedContextConsumers = false;
                    var hasWarnedAboutUsingConsumerProvider = false;
                    var hasWarnedAboutDisplayNameOnConsumer = false;
                    {
                        var Consumer = {
                            $$typeof: REACT_CONTEXT_TYPE,
                            _context: context
                        };
                        Object.defineProperties(Consumer, {
                            Provider: {
                                get: function get() {
                                    if (!hasWarnedAboutUsingConsumerProvider) {
                                        hasWarnedAboutUsingConsumerProvider = true;
                                        error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                                    }
                                    return context.Provider;
                                },
                                set: function set(_Provider) {
                                    context.Provider = _Provider;
                                }
                            },
                            _currentValue: {
                                get: function get() {
                                    return context._currentValue;
                                },
                                set: function set(_currentValue) {
                                    context._currentValue = _currentValue;
                                }
                            },
                            _currentValue2: {
                                get: function get() {
                                    return context._currentValue2;
                                },
                                set: function set(_currentValue2) {
                                    context._currentValue2 = _currentValue2;
                                }
                            },
                            _threadCount: {
                                get: function get() {
                                    return context._threadCount;
                                },
                                set: function set(_threadCount) {
                                    context._threadCount = _threadCount;
                                }
                            },
                            Consumer: {
                                get: function get() {
                                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                                        hasWarnedAboutUsingNestedContextConsumers = true;
                                        error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                                    }
                                    return context.Consumer;
                                }
                            },
                            displayName: {
                                get: function get() {
                                    return context.displayName;
                                },
                                set: function set(displayName) {
                                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                                        warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                                        hasWarnedAboutDisplayNameOnConsumer = true;
                                    }
                                }
                            }
                        });
                        context.Consumer = Consumer;
                    }
                    {
                        context._currentRenderer = null;
                        context._currentRenderer2 = null;
                    }
                    return context;
                }
                var Uninitialized = -1;
                var Pending = 0;
                var Resolved = 1;
                var Rejected = 2;
                function lazyInitializer(payload) {
                    if (payload._status === Uninitialized) {
                        var ctor = payload._result;
                        var thenable = ctor();
                        thenable.then(function(moduleObject2) {
                            if (payload._status === Pending || payload._status === Uninitialized) {
                                var resolved = payload;
                                resolved._status = Resolved;
                                resolved._result = moduleObject2;
                            }
                        }, function(error2) {
                            if (payload._status === Pending || payload._status === Uninitialized) {
                                var rejected = payload;
                                rejected._status = Rejected;
                                rejected._result = error2;
                            }
                        });
                        if (payload._status === Uninitialized) {
                            var pending = payload;
                            pending._status = Pending;
                            pending._result = thenable;
                        }
                    }
                    if (payload._status === Resolved) {
                        var moduleObject = payload._result;
                        {
                            if (moduleObject === void 0) {
                                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
                            }
                        }
                        {
                            if (!("default" in moduleObject)) {
                                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                            }
                        }
                        return moduleObject.default;
                    } else {
                        throw payload._result;
                    }
                }
                function lazy(ctor) {
                    var payload = {
                        // We use these fields to store the result.
                        _status: Uninitialized,
                        _result: ctor
                    };
                    var lazyType = {
                        $$typeof: REACT_LAZY_TYPE,
                        _payload: payload,
                        _init: lazyInitializer
                    };
                    {
                        var defaultProps;
                        var propTypes;
                        Object.defineProperties(lazyType, {
                            defaultProps: {
                                configurable: true,
                                get: function get() {
                                    return defaultProps;
                                },
                                set: function set(newDefaultProps) {
                                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                                    defaultProps = newDefaultProps;
                                    Object.defineProperty(lazyType, "defaultProps", {
                                        enumerable: true
                                    });
                                }
                            },
                            propTypes: {
                                configurable: true,
                                get: function get() {
                                    return propTypes;
                                },
                                set: function set(newPropTypes) {
                                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                                    propTypes = newPropTypes;
                                    Object.defineProperty(lazyType, "propTypes", {
                                        enumerable: true
                                    });
                                }
                            }
                        });
                    }
                    return lazyType;
                }
                function forwardRef(render) {
                    {
                        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                            error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
                        } else if (typeof render !== "function") {
                            error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render === "undefined" ? "undefined" : _type_of(render));
                        } else {
                            if (render.length !== 0 && render.length !== 2) {
                                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                            }
                        }
                        if (render != null) {
                            if (render.defaultProps != null || render.propTypes != null) {
                                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                            }
                        }
                    }
                    var elementType = {
                        $$typeof: REACT_FORWARD_REF_TYPE,
                        render: render
                    };
                    {
                        var ownName;
                        Object.defineProperty(elementType, "displayName", {
                            enumerable: false,
                            configurable: true,
                            get: function get() {
                                return ownName;
                            },
                            set: function set(name) {
                                ownName = name;
                                if (!render.name && !render.displayName) {
                                    render.displayName = name;
                                }
                            }
                        });
                    }
                    return elementType;
                }
                var REACT_MODULE_REFERENCE;
                {
                    REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
                }
                function isValidElementType(type) {
                    if (typeof type === "string" || typeof type === "function") {
                        return true;
                    }
                    if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
                        return true;
                    }
                    if (typeof type === "object" && type !== null) {
                        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
                        // types supported by any Flight configuration anywhere since
                        // we don't know which Flight build this will end up being used
                        // with.
                        type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                            return true;
                        }
                    }
                    return false;
                }
                function memo(type, compare) {
                    {
                        if (!isValidElementType(type)) {
                            error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type === "undefined" ? "undefined" : _type_of(type));
                        }
                    }
                    var elementType = {
                        $$typeof: REACT_MEMO_TYPE,
                        type: type,
                        compare: compare === void 0 ? null : compare
                    };
                    {
                        var ownName;
                        Object.defineProperty(elementType, "displayName", {
                            enumerable: false,
                            configurable: true,
                            get: function get() {
                                return ownName;
                            },
                            set: function set(name) {
                                ownName = name;
                                if (!type.name && !type.displayName) {
                                    type.displayName = name;
                                }
                            }
                        });
                    }
                    return elementType;
                }
                function resolveDispatcher() {
                    var dispatcher = ReactCurrentDispatcher.current;
                    {
                        if (dispatcher === null) {
                            error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
                        }
                    }
                    return dispatcher;
                }
                function useContext(Context) {
                    var dispatcher = resolveDispatcher();
                    {
                        if (Context._context !== void 0) {
                            var realContext = Context._context;
                            if (realContext.Consumer === Context) {
                                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                            } else if (realContext.Provider === Context) {
                                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                            }
                        }
                    }
                    return dispatcher.useContext(Context);
                }
                function useState(initialState) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useState(initialState);
                }
                function useReducer(reducer, initialArg, init) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useReducer(reducer, initialArg, init);
                }
                function useRef(initialValue) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useRef(initialValue);
                }
                function useEffect(create, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useEffect(create, deps);
                }
                function useInsertionEffect(create, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useInsertionEffect(create, deps);
                }
                function useLayoutEffect(create, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useLayoutEffect(create, deps);
                }
                function useCallback(callback, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useCallback(callback, deps);
                }
                function useMemo(create, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useMemo(create, deps);
                }
                function useImperativeHandle(ref, create, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useImperativeHandle(ref, create, deps);
                }
                function useDebugValue(value, formatterFn) {
                    {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useDebugValue(value, formatterFn);
                    }
                }
                function useTransition() {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useTransition();
                }
                function useDeferredValue(value) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useDeferredValue(value);
                }
                function useId() {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useId();
                }
                function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
                }
                var disabledDepth = 0;
                var prevLog;
                var prevInfo;
                var prevWarn;
                var prevError;
                var prevGroup;
                var prevGroupCollapsed;
                var prevGroupEnd;
                function disabledLog() {}
                disabledLog.__reactDisabledLog = true;
                function disableLogs() {
                    {
                        if (disabledDepth === 0) {
                            prevLog = console.log;
                            prevInfo = console.info;
                            prevWarn = console.warn;
                            prevError = console.error;
                            prevGroup = console.group;
                            prevGroupCollapsed = console.groupCollapsed;
                            prevGroupEnd = console.groupEnd;
                            var props = {
                                configurable: true,
                                enumerable: true,
                                value: disabledLog,
                                writable: true
                            };
                            Object.defineProperties(console, {
                                info: props,
                                log: props,
                                warn: props,
                                error: props,
                                group: props,
                                groupCollapsed: props,
                                groupEnd: props
                            });
                        }
                        disabledDepth++;
                    }
                }
                function reenableLogs() {
                    {
                        disabledDepth--;
                        if (disabledDepth === 0) {
                            var props = {
                                configurable: true,
                                enumerable: true,
                                writable: true
                            };
                            Object.defineProperties(console, {
                                log: assign({}, props, {
                                    value: prevLog
                                }),
                                info: assign({}, props, {
                                    value: prevInfo
                                }),
                                warn: assign({}, props, {
                                    value: prevWarn
                                }),
                                error: assign({}, props, {
                                    value: prevError
                                }),
                                group: assign({}, props, {
                                    value: prevGroup
                                }),
                                groupCollapsed: assign({}, props, {
                                    value: prevGroupCollapsed
                                }),
                                groupEnd: assign({}, props, {
                                    value: prevGroupEnd
                                })
                            });
                        }
                        if (disabledDepth < 0) {
                            error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
                        }
                    }
                }
                var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
                var prefix;
                function describeBuiltInComponentFrame(name, source, ownerFn) {
                    {
                        if (prefix === void 0) {
                            try {
                                throw Error();
                            } catch (x) {
                                var match = x.stack.trim().match(/\n( *(at )?)/);
                                prefix = match && match[1] || "";
                            }
                        }
                        return "\n" + prefix + name;
                    }
                }
                var reentry = false;
                var componentFrameCache;
                {
                    var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
                    componentFrameCache = new PossiblyWeakMap();
                }
                function describeNativeComponentFrame(fn, construct) {
                    if (!fn || reentry) {
                        return "";
                    }
                    {
                        var frame = componentFrameCache.get(fn);
                        if (frame !== void 0) {
                            return frame;
                        }
                    }
                    var control;
                    reentry = true;
                    var previousPrepareStackTrace = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    var previousDispatcher;
                    {
                        previousDispatcher = ReactCurrentDispatcher$1.current;
                        ReactCurrentDispatcher$1.current = null;
                        disableLogs();
                    }
                    try {
                        if (construct) {
                            var Fake = function Fake() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function set() {
                                    throw Error();
                                }
                            });
                            if (typeof Reflect === "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x) {
                                    control = x;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x) {
                                control = x;
                            }
                            fn();
                        }
                    } catch (sample) {
                        if (sample && control && typeof sample.stack === "string") {
                            var sampleLines = sample.stack.split("\n");
                            var controlLines = control.stack.split("\n");
                            var s = sampleLines.length - 1;
                            var c = controlLines.length - 1;
                            while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]){
                                c--;
                            }
                            for(; s >= 1 && c >= 0; s--, c--){
                                if (sampleLines[s] !== controlLines[c]) {
                                    if (s !== 1 || c !== 1) {
                                        do {
                                            s--;
                                            c--;
                                            if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                                var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                                                if (fn.displayName && _frame.includes("<anonymous>")) {
                                                    _frame = _frame.replace("<anonymous>", fn.displayName);
                                                }
                                                {
                                                    if (typeof fn === "function") {
                                                        componentFrameCache.set(fn, _frame);
                                                    }
                                                }
                                                return _frame;
                                            }
                                        }while (s >= 1 && c >= 0);
                                    }
                                    break;
                                }
                            }
                        }
                    } finally{
                        reentry = false;
                        {
                            ReactCurrentDispatcher$1.current = previousDispatcher;
                            reenableLogs();
                        }
                        Error.prepareStackTrace = previousPrepareStackTrace;
                    }
                    var name = fn ? fn.displayName || fn.name : "";
                    var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
                    {
                        if (typeof fn === "function") {
                            componentFrameCache.set(fn, syntheticFrame);
                        }
                    }
                    return syntheticFrame;
                }
                function describeFunctionComponentFrame(fn, source, ownerFn) {
                    {
                        return describeNativeComponentFrame(fn, false);
                    }
                }
                function shouldConstruct(Component2) {
                    var prototype = Component2.prototype;
                    return !!(prototype && prototype.isReactComponent);
                }
                function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
                    if (type == null) {
                        return "";
                    }
                    if (typeof type === "function") {
                        {
                            return describeNativeComponentFrame(type, shouldConstruct(type));
                        }
                    }
                    if (typeof type === "string") {
                        return describeBuiltInComponentFrame(type);
                    }
                    switch(type){
                        case REACT_SUSPENSE_TYPE:
                            return describeBuiltInComponentFrame("Suspense");
                        case REACT_SUSPENSE_LIST_TYPE:
                            return describeBuiltInComponentFrame("SuspenseList");
                    }
                    if (typeof type === "object") {
                        switch(type.$$typeof){
                            case REACT_FORWARD_REF_TYPE:
                                return describeFunctionComponentFrame(type.render);
                            case REACT_MEMO_TYPE:
                                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                            case REACT_LAZY_TYPE:
                                {
                                    var lazyComponent = type;
                                    var payload = lazyComponent._payload;
                                    var init = lazyComponent._init;
                                    try {
                                        return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                                    } catch (x) {}
                                }
                        }
                    }
                    return "";
                }
                var loggedTypeFailures = {};
                var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
                function setCurrentlyValidatingElement(element) {
                    {
                        if (element) {
                            var owner = element._owner;
                            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
                        } else {
                            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
                        }
                    }
                }
                function checkPropTypes(typeSpecs, values, location, componentName, element) {
                    {
                        var has = Function.call.bind(hasOwnProperty);
                        for(var typeSpecName in typeSpecs){
                            if (has(typeSpecs, typeSpecName)) {
                                var error$1 = void 0;
                                try {
                                    if (typeof typeSpecs[typeSpecName] !== "function") {
                                        var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _type_of(typeSpecs[typeSpecName]) + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                                        err.name = "Invariant Violation";
                                        throw err;
                                    }
                                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                                } catch (ex) {
                                    error$1 = ex;
                                }
                                if (error$1 && !_instanceof(error$1, Error)) {
                                    setCurrentlyValidatingElement(element);
                                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1 === "undefined" ? "undefined" : _type_of(error$1));
                                    setCurrentlyValidatingElement(null);
                                }
                                if (_instanceof(error$1, Error) && !(error$1.message in loggedTypeFailures)) {
                                    loggedTypeFailures[error$1.message] = true;
                                    setCurrentlyValidatingElement(element);
                                    error("Failed %s type: %s", location, error$1.message);
                                    setCurrentlyValidatingElement(null);
                                }
                            }
                        }
                    }
                }
                function setCurrentlyValidatingElement$1(element) {
                    {
                        if (element) {
                            var owner = element._owner;
                            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                            setExtraStackFrame(stack);
                        } else {
                            setExtraStackFrame(null);
                        }
                    }
                }
                var propTypesMisspellWarningShown;
                {
                    propTypesMisspellWarningShown = false;
                }
                function getDeclarationErrorAddendum() {
                    if (ReactCurrentOwner.current) {
                        var name = getComponentNameFromType(ReactCurrentOwner.current.type);
                        if (name) {
                            return "\n\nCheck the render method of `" + name + "`.";
                        }
                    }
                    return "";
                }
                function getSourceInfoErrorAddendum(source) {
                    if (source !== void 0) {
                        var fileName = source.fileName.replace(/^.*[\\\/]/, "");
                        var lineNumber = source.lineNumber;
                        return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
                    }
                    return "";
                }
                function getSourceInfoErrorAddendumForProps(elementProps) {
                    if (elementProps !== null && elementProps !== void 0) {
                        return getSourceInfoErrorAddendum(elementProps.__source);
                    }
                    return "";
                }
                var ownerHasKeyUseWarning = {};
                function getCurrentComponentErrorInfo(parentType) {
                    var info = getDeclarationErrorAddendum();
                    if (!info) {
                        var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
                        if (parentName) {
                            info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                        }
                    }
                    return info;
                }
                function validateExplicitKey(element, parentType) {
                    if (!element._store || element._store.validated || element.key != null) {
                        return;
                    }
                    element._store.validated = true;
                    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
                    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                        return;
                    }
                    ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
                    var childOwner = "";
                    if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
                        childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
                    }
                    {
                        setCurrentlyValidatingElement$1(element);
                        error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
                        setCurrentlyValidatingElement$1(null);
                    }
                }
                function validateChildKeys(node, parentType) {
                    if (typeof node !== "object") {
                        return;
                    }
                    if (isArray(node)) {
                        for(var i = 0; i < node.length; i++){
                            var child = node[i];
                            if (isValidElement(child)) {
                                validateExplicitKey(child, parentType);
                            }
                        }
                    } else if (isValidElement(node)) {
                        if (node._store) {
                            node._store.validated = true;
                        }
                    } else if (node) {
                        var iteratorFn = getIteratorFn(node);
                        if (typeof iteratorFn === "function") {
                            if (iteratorFn !== node.entries) {
                                var iterator = iteratorFn.call(node);
                                var step;
                                while(!(step = iterator.next()).done){
                                    if (isValidElement(step.value)) {
                                        validateExplicitKey(step.value, parentType);
                                    }
                                }
                            }
                        }
                    }
                }
                function validatePropTypes(element) {
                    {
                        var type = element.type;
                        if (type === null || type === void 0 || typeof type === "string") {
                            return;
                        }
                        var propTypes;
                        if (typeof type === "function") {
                            propTypes = type.propTypes;
                        } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
                        // Inner props are checked in the reconciler.
                        type.$$typeof === REACT_MEMO_TYPE)) {
                            propTypes = type.propTypes;
                        } else {
                            return;
                        }
                        if (propTypes) {
                            var name = getComponentNameFromType(type);
                            checkPropTypes(propTypes, element.props, "prop", name, element);
                        } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                            propTypesMisspellWarningShown = true;
                            var _name = getComponentNameFromType(type);
                            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
                        }
                        if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                            error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
                        }
                    }
                }
                function validateFragmentProps(fragment) {
                    {
                        var keys = Object.keys(fragment.props);
                        for(var i = 0; i < keys.length; i++){
                            var key = keys[i];
                            if (key !== "children" && key !== "key") {
                                setCurrentlyValidatingElement$1(fragment);
                                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                                setCurrentlyValidatingElement$1(null);
                                break;
                            }
                        }
                        if (fragment.ref !== null) {
                            setCurrentlyValidatingElement$1(fragment);
                            error("Invalid attribute `ref` supplied to `React.Fragment`.");
                            setCurrentlyValidatingElement$1(null);
                        }
                    }
                }
                function createElementWithValidation(type, props, children) {
                    var validType = isValidElementType(type);
                    if (!validType) {
                        var info = "";
                        if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                            info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                        }
                        var sourceInfo = getSourceInfoErrorAddendumForProps(props);
                        if (sourceInfo) {
                            info += sourceInfo;
                        } else {
                            info += getDeclarationErrorAddendum();
                        }
                        var typeString;
                        if (type === null) {
                            typeString = "null";
                        } else if (isArray(type)) {
                            typeString = "array";
                        } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                            typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                            info = " Did you accidentally export a JSX literal instead of a component?";
                        } else {
                            typeString = typeof type === "undefined" ? "undefined" : _type_of(type);
                        }
                        {
                            error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
                        }
                    }
                    var element = createElement.apply(this, arguments);
                    if (element == null) {
                        return element;
                    }
                    if (validType) {
                        for(var i = 2; i < arguments.length; i++){
                            validateChildKeys(arguments[i], type);
                        }
                    }
                    if (type === REACT_FRAGMENT_TYPE) {
                        validateFragmentProps(element);
                    } else {
                        validatePropTypes(element);
                    }
                    return element;
                }
                var didWarnAboutDeprecatedCreateFactory = false;
                function createFactoryWithValidation(type) {
                    var validatedFactory = createElementWithValidation.bind(null, type);
                    validatedFactory.type = type;
                    {
                        if (!didWarnAboutDeprecatedCreateFactory) {
                            didWarnAboutDeprecatedCreateFactory = true;
                            warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
                        }
                        Object.defineProperty(validatedFactory, "type", {
                            enumerable: false,
                            get: function get() {
                                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                                Object.defineProperty(this, "type", {
                                    value: type
                                });
                                return type;
                            }
                        });
                    }
                    return validatedFactory;
                }
                function cloneElementWithValidation(element, props, children) {
                    var newElement = cloneElement.apply(this, arguments);
                    for(var i = 2; i < arguments.length; i++){
                        validateChildKeys(arguments[i], newElement.type);
                    }
                    validatePropTypes(newElement);
                    return newElement;
                }
                function startTransition(scope, options) {
                    var prevTransition = ReactCurrentBatchConfig.transition;
                    ReactCurrentBatchConfig.transition = {};
                    var currentTransition = ReactCurrentBatchConfig.transition;
                    {
                        ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
                    }
                    try {
                        scope();
                    } finally{
                        ReactCurrentBatchConfig.transition = prevTransition;
                        {
                            if (prevTransition === null && currentTransition._updatedFibers) {
                                var updatedFibersCount = currentTransition._updatedFibers.size;
                                if (updatedFibersCount > 10) {
                                    warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                                }
                                currentTransition._updatedFibers.clear();
                            }
                        }
                    }
                }
                var didWarnAboutMessageChannel = false;
                var enqueueTaskImpl = null;
                function enqueueTask(task) {
                    if (enqueueTaskImpl === null) {
                        try {
                            var requireString = ("require" + Math.random()).slice(0, 7);
                            var nodeRequire = module && module[requireString];
                            enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
                        } catch (_err) {
                            enqueueTaskImpl = function enqueueTaskImpl(callback) {
                                {
                                    if (didWarnAboutMessageChannel === false) {
                                        didWarnAboutMessageChannel = true;
                                        if (typeof MessageChannel === "undefined") {
                                            error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                                        }
                                    }
                                }
                                var channel = new MessageChannel();
                                channel.port1.onmessage = callback;
                                channel.port2.postMessage(void 0);
                            };
                        }
                    }
                    return enqueueTaskImpl(task);
                }
                var actScopeDepth = 0;
                var didWarnNoAwaitAct = false;
                function act(callback) {
                    {
                        var prevActScopeDepth = actScopeDepth;
                        actScopeDepth++;
                        if (ReactCurrentActQueue.current === null) {
                            ReactCurrentActQueue.current = [];
                        }
                        var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
                        var result;
                        try {
                            ReactCurrentActQueue.isBatchingLegacy = true;
                            result = callback();
                            if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                                var queue = ReactCurrentActQueue.current;
                                if (queue !== null) {
                                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                                    flushActQueue(queue);
                                }
                            }
                        } catch (error2) {
                            popActScope(prevActScopeDepth);
                            throw error2;
                        } finally{
                            ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
                        }
                        if (result !== null && typeof result === "object" && typeof result.then === "function") {
                            var thenableResult = result;
                            var wasAwaited = false;
                            var thenable = {
                                then: function then(resolve, reject) {
                                    wasAwaited = true;
                                    thenableResult.then(function(returnValue2) {
                                        popActScope(prevActScopeDepth);
                                        if (actScopeDepth === 0) {
                                            recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                                        } else {
                                            resolve(returnValue2);
                                        }
                                    }, function(error2) {
                                        popActScope(prevActScopeDepth);
                                        reject(error2);
                                    });
                                }
                            };
                            {
                                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                                    Promise.resolve().then(function() {}).then(function() {
                                        if (!wasAwaited) {
                                            didWarnNoAwaitAct = true;
                                            error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                                        }
                                    });
                                }
                            }
                            return thenable;
                        } else {
                            var returnValue = result;
                            popActScope(prevActScopeDepth);
                            if (actScopeDepth === 0) {
                                var _queue = ReactCurrentActQueue.current;
                                if (_queue !== null) {
                                    flushActQueue(_queue);
                                    ReactCurrentActQueue.current = null;
                                }
                                var _thenable = {
                                    then: function then(resolve, reject) {
                                        if (ReactCurrentActQueue.current === null) {
                                            ReactCurrentActQueue.current = [];
                                            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                        } else {
                                            resolve(returnValue);
                                        }
                                    }
                                };
                                return _thenable;
                            } else {
                                var _thenable2 = {
                                    then: function then(resolve, reject) {
                                        resolve(returnValue);
                                    }
                                };
                                return _thenable2;
                            }
                        }
                    }
                }
                function popActScope(prevActScopeDepth) {
                    {
                        if (prevActScopeDepth !== actScopeDepth - 1) {
                            error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
                        }
                        actScopeDepth = prevActScopeDepth;
                    }
                }
                function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
                    {
                        var queue = ReactCurrentActQueue.current;
                        if (queue !== null) {
                            try {
                                flushActQueue(queue);
                                enqueueTask(function() {
                                    if (queue.length === 0) {
                                        ReactCurrentActQueue.current = null;
                                        resolve(returnValue);
                                    } else {
                                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                    }
                                });
                            } catch (error2) {
                                reject(error2);
                            }
                        } else {
                            resolve(returnValue);
                        }
                    }
                }
                var isFlushing = false;
                function flushActQueue(queue) {
                    {
                        if (!isFlushing) {
                            isFlushing = true;
                            var i = 0;
                            try {
                                for(; i < queue.length; i++){
                                    var callback = queue[i];
                                    do {
                                        callback = callback(true);
                                    }while (callback !== null);
                                }
                                queue.length = 0;
                            } catch (error2) {
                                queue = queue.slice(i + 1);
                                throw error2;
                            } finally{
                                isFlushing = false;
                            }
                        }
                    }
                }
                var createElement$1 = createElementWithValidation;
                var cloneElement$1 = cloneElementWithValidation;
                var createFactory = createFactoryWithValidation;
                var Children = {
                    map: mapChildren,
                    forEach: forEachChildren,
                    count: countChildren,
                    toArray: toArray,
                    only: onlyChild
                };
                exports.Children = Children;
                exports.Component = Component;
                exports.Fragment = REACT_FRAGMENT_TYPE;
                exports.Profiler = REACT_PROFILER_TYPE;
                exports.PureComponent = PureComponent;
                exports.StrictMode = REACT_STRICT_MODE_TYPE;
                exports.Suspense = REACT_SUSPENSE_TYPE;
                exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
                exports.act = act;
                exports.cloneElement = cloneElement$1;
                exports.createContext = createContext;
                exports.createElement = createElement$1;
                exports.createFactory = createFactory;
                exports.createRef = createRef;
                exports.forwardRef = forwardRef;
                exports.isValidElement = isValidElement;
                exports.lazy = lazy;
                exports.memo = memo;
                exports.startTransition = startTransition;
                exports.unstable_act = act;
                exports.useCallback = useCallback;
                exports.useContext = useContext;
                exports.useDebugValue = useDebugValue;
                exports.useDeferredValue = useDeferredValue;
                exports.useEffect = useEffect;
                exports.useId = useId;
                exports.useImperativeHandle = useImperativeHandle;
                exports.useInsertionEffect = useInsertionEffect;
                exports.useLayoutEffect = useLayoutEffect;
                exports.useMemo = useMemo;
                exports.useReducer = useReducer;
                exports.useRef = useRef;
                exports.useState = useState;
                exports.useSyncExternalStore = useSyncExternalStore;
                exports.useTransition = useTransition;
                exports.version = ReactVersion;
                if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
                }
            })();
        }
    }
});
// ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var require_react = __commonJS({
    "../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js": function(exports, module) {
        "use strict";
        if (process.env.NODE_ENV === "production") {
            module.exports = require_react_production_min();
        } else {
            module.exports = require_react_development();
        }
    }
});
// ../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js
var require_react_jsx_runtime_production_min = __commonJS({
    "../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js": function(exports) {
        "use strict";
        var f = require_react();
        var k = Symbol.for("react.element");
        var l = Symbol.for("react.fragment");
        var m = Object.prototype.hasOwnProperty;
        var n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
        var p = {
            key: true,
            ref: true,
            __self: true,
            __source: true
        };
        function q(c, a, g) {
            var b, d = {}, e = null, h = null;
            void 0 !== g && (e = "" + g);
            void 0 !== a.key && (e = "" + a.key);
            void 0 !== a.ref && (h = a.ref);
            for(b in a)m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
            if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
            return {
                $$typeof: k,
                type: c,
                key: e,
                ref: h,
                props: d,
                _owner: n.current
            };
        }
        exports.Fragment = l;
        exports.jsx = q;
        exports.jsxs = q;
    }
});
// ../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
    "../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.development.js": function(exports) {
        "use strict";
        if (process.env.NODE_ENV !== "production") {
            (function() {
                "use strict";
                var React = require_react();
                var REACT_ELEMENT_TYPE = Symbol.for("react.element");
                var REACT_PORTAL_TYPE = Symbol.for("react.portal");
                var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
                var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
                var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
                var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
                var REACT_CONTEXT_TYPE = Symbol.for("react.context");
                var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
                var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
                var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
                var REACT_MEMO_TYPE = Symbol.for("react.memo");
                var REACT_LAZY_TYPE = Symbol.for("react.lazy");
                var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
                var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
                var FAUX_ITERATOR_SYMBOL = "@@iterator";
                function getIteratorFn(maybeIterable) {
                    if (maybeIterable === null || typeof maybeIterable !== "object") {
                        return null;
                    }
                    var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
                    if (typeof maybeIterator === "function") {
                        return maybeIterator;
                    }
                    return null;
                }
                var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
                function error(format) {
                    {
                        {
                            for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                                args[_key2 - 1] = arguments[_key2];
                            }
                            printWarning("error", format, args);
                        }
                    }
                }
                function printWarning(level, format, args) {
                    {
                        var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
                        var stack = ReactDebugCurrentFrame2.getStackAddendum();
                        if (stack !== "") {
                            format += "%s";
                            args = args.concat([
                                stack
                            ]);
                        }
                        var argsWithFormat = args.map(function(item) {
                            return String(item);
                        });
                        argsWithFormat.unshift("Warning: " + format);
                        Function.prototype.apply.call(console[level], console, argsWithFormat);
                    }
                }
                var enableScopeAPI = false;
                var enableCacheElement = false;
                var enableTransitionTracing = false;
                var enableLegacyHidden = false;
                var enableDebugTracing = false;
                var REACT_MODULE_REFERENCE;
                {
                    REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
                }
                function isValidElementType(type) {
                    if (typeof type === "string" || typeof type === "function") {
                        return true;
                    }
                    if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
                        return true;
                    }
                    if (typeof type === "object" && type !== null) {
                        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
                        // types supported by any Flight configuration anywhere since
                        // we don't know which Flight build this will end up being used
                        // with.
                        type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                            return true;
                        }
                    }
                    return false;
                }
                function getWrappedName(outerType, innerType, wrapperName) {
                    var displayName = outerType.displayName;
                    if (displayName) {
                        return displayName;
                    }
                    var functionName = innerType.displayName || innerType.name || "";
                    return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
                }
                function getContextName(type) {
                    return type.displayName || "Context";
                }
                function getComponentNameFromType(type) {
                    if (type == null) {
                        return null;
                    }
                    {
                        if (typeof type.tag === "number") {
                            error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
                        }
                    }
                    if (typeof type === "function") {
                        return type.displayName || type.name || null;
                    }
                    if (typeof type === "string") {
                        return type;
                    }
                    switch(type){
                        case REACT_FRAGMENT_TYPE:
                            return "Fragment";
                        case REACT_PORTAL_TYPE:
                            return "Portal";
                        case REACT_PROFILER_TYPE:
                            return "Profiler";
                        case REACT_STRICT_MODE_TYPE:
                            return "StrictMode";
                        case REACT_SUSPENSE_TYPE:
                            return "Suspense";
                        case REACT_SUSPENSE_LIST_TYPE:
                            return "SuspenseList";
                    }
                    if (typeof type === "object") {
                        switch(type.$$typeof){
                            case REACT_CONTEXT_TYPE:
                                var context = type;
                                return getContextName(context) + ".Consumer";
                            case REACT_PROVIDER_TYPE:
                                var provider = type;
                                return getContextName(provider._context) + ".Provider";
                            case REACT_FORWARD_REF_TYPE:
                                return getWrappedName(type, type.render, "ForwardRef");
                            case REACT_MEMO_TYPE:
                                var outerName = type.displayName || null;
                                if (outerName !== null) {
                                    return outerName;
                                }
                                return getComponentNameFromType(type.type) || "Memo";
                            case REACT_LAZY_TYPE:
                                {
                                    var lazyComponent = type;
                                    var payload = lazyComponent._payload;
                                    var init = lazyComponent._init;
                                    try {
                                        return getComponentNameFromType(init(payload));
                                    } catch (x) {
                                        return null;
                                    }
                                }
                        }
                    }
                    return null;
                }
                var assign = Object.assign;
                var disabledDepth = 0;
                var prevLog;
                var prevInfo;
                var prevWarn;
                var prevError;
                var prevGroup;
                var prevGroupCollapsed;
                var prevGroupEnd;
                function disabledLog() {}
                disabledLog.__reactDisabledLog = true;
                function disableLogs() {
                    {
                        if (disabledDepth === 0) {
                            prevLog = console.log;
                            prevInfo = console.info;
                            prevWarn = console.warn;
                            prevError = console.error;
                            prevGroup = console.group;
                            prevGroupCollapsed = console.groupCollapsed;
                            prevGroupEnd = console.groupEnd;
                            var props = {
                                configurable: true,
                                enumerable: true,
                                value: disabledLog,
                                writable: true
                            };
                            Object.defineProperties(console, {
                                info: props,
                                log: props,
                                warn: props,
                                error: props,
                                group: props,
                                groupCollapsed: props,
                                groupEnd: props
                            });
                        }
                        disabledDepth++;
                    }
                }
                function reenableLogs() {
                    {
                        disabledDepth--;
                        if (disabledDepth === 0) {
                            var props = {
                                configurable: true,
                                enumerable: true,
                                writable: true
                            };
                            Object.defineProperties(console, {
                                log: assign({}, props, {
                                    value: prevLog
                                }),
                                info: assign({}, props, {
                                    value: prevInfo
                                }),
                                warn: assign({}, props, {
                                    value: prevWarn
                                }),
                                error: assign({}, props, {
                                    value: prevError
                                }),
                                group: assign({}, props, {
                                    value: prevGroup
                                }),
                                groupCollapsed: assign({}, props, {
                                    value: prevGroupCollapsed
                                }),
                                groupEnd: assign({}, props, {
                                    value: prevGroupEnd
                                })
                            });
                        }
                        if (disabledDepth < 0) {
                            error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
                        }
                    }
                }
                var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
                var prefix;
                function describeBuiltInComponentFrame(name, source, ownerFn) {
                    {
                        if (prefix === void 0) {
                            try {
                                throw Error();
                            } catch (x) {
                                var match = x.stack.trim().match(/\n( *(at )?)/);
                                prefix = match && match[1] || "";
                            }
                        }
                        return "\n" + prefix + name;
                    }
                }
                var reentry = false;
                var componentFrameCache;
                {
                    var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
                    componentFrameCache = new PossiblyWeakMap();
                }
                function describeNativeComponentFrame(fn, construct) {
                    if (!fn || reentry) {
                        return "";
                    }
                    {
                        var frame = componentFrameCache.get(fn);
                        if (frame !== void 0) {
                            return frame;
                        }
                    }
                    var control;
                    reentry = true;
                    var previousPrepareStackTrace = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    var previousDispatcher;
                    {
                        previousDispatcher = ReactCurrentDispatcher.current;
                        ReactCurrentDispatcher.current = null;
                        disableLogs();
                    }
                    try {
                        if (construct) {
                            var Fake = function Fake() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function set() {
                                    throw Error();
                                }
                            });
                            if (typeof Reflect === "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x) {
                                    control = x;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x) {
                                control = x;
                            }
                            fn();
                        }
                    } catch (sample) {
                        if (sample && control && typeof sample.stack === "string") {
                            var sampleLines = sample.stack.split("\n");
                            var controlLines = control.stack.split("\n");
                            var s = sampleLines.length - 1;
                            var c = controlLines.length - 1;
                            while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]){
                                c--;
                            }
                            for(; s >= 1 && c >= 0; s--, c--){
                                if (sampleLines[s] !== controlLines[c]) {
                                    if (s !== 1 || c !== 1) {
                                        do {
                                            s--;
                                            c--;
                                            if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                                var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                                                if (fn.displayName && _frame.includes("<anonymous>")) {
                                                    _frame = _frame.replace("<anonymous>", fn.displayName);
                                                }
                                                {
                                                    if (typeof fn === "function") {
                                                        componentFrameCache.set(fn, _frame);
                                                    }
                                                }
                                                return _frame;
                                            }
                                        }while (s >= 1 && c >= 0);
                                    }
                                    break;
                                }
                            }
                        }
                    } finally{
                        reentry = false;
                        {
                            ReactCurrentDispatcher.current = previousDispatcher;
                            reenableLogs();
                        }
                        Error.prepareStackTrace = previousPrepareStackTrace;
                    }
                    var name = fn ? fn.displayName || fn.name : "";
                    var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
                    {
                        if (typeof fn === "function") {
                            componentFrameCache.set(fn, syntheticFrame);
                        }
                    }
                    return syntheticFrame;
                }
                function describeFunctionComponentFrame(fn, source, ownerFn) {
                    {
                        return describeNativeComponentFrame(fn, false);
                    }
                }
                function shouldConstruct(Component) {
                    var prototype = Component.prototype;
                    return !!(prototype && prototype.isReactComponent);
                }
                function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
                    if (type == null) {
                        return "";
                    }
                    if (typeof type === "function") {
                        {
                            return describeNativeComponentFrame(type, shouldConstruct(type));
                        }
                    }
                    if (typeof type === "string") {
                        return describeBuiltInComponentFrame(type);
                    }
                    switch(type){
                        case REACT_SUSPENSE_TYPE:
                            return describeBuiltInComponentFrame("Suspense");
                        case REACT_SUSPENSE_LIST_TYPE:
                            return describeBuiltInComponentFrame("SuspenseList");
                    }
                    if (typeof type === "object") {
                        switch(type.$$typeof){
                            case REACT_FORWARD_REF_TYPE:
                                return describeFunctionComponentFrame(type.render);
                            case REACT_MEMO_TYPE:
                                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                            case REACT_LAZY_TYPE:
                                {
                                    var lazyComponent = type;
                                    var payload = lazyComponent._payload;
                                    var init = lazyComponent._init;
                                    try {
                                        return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                                    } catch (x) {}
                                }
                        }
                    }
                    return "";
                }
                var hasOwnProperty = Object.prototype.hasOwnProperty;
                var loggedTypeFailures = {};
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                function setCurrentlyValidatingElement(element) {
                    {
                        if (element) {
                            var owner = element._owner;
                            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                            ReactDebugCurrentFrame.setExtraStackFrame(stack);
                        } else {
                            ReactDebugCurrentFrame.setExtraStackFrame(null);
                        }
                    }
                }
                function checkPropTypes(typeSpecs, values, location, componentName, element) {
                    {
                        var has = Function.call.bind(hasOwnProperty);
                        for(var typeSpecName in typeSpecs){
                            if (has(typeSpecs, typeSpecName)) {
                                var error$1 = void 0;
                                try {
                                    if (typeof typeSpecs[typeSpecName] !== "function") {
                                        var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _type_of(typeSpecs[typeSpecName]) + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                                        err.name = "Invariant Violation";
                                        throw err;
                                    }
                                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                                } catch (ex) {
                                    error$1 = ex;
                                }
                                if (error$1 && !_instanceof(error$1, Error)) {
                                    setCurrentlyValidatingElement(element);
                                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1 === "undefined" ? "undefined" : _type_of(error$1));
                                    setCurrentlyValidatingElement(null);
                                }
                                if (_instanceof(error$1, Error) && !(error$1.message in loggedTypeFailures)) {
                                    loggedTypeFailures[error$1.message] = true;
                                    setCurrentlyValidatingElement(element);
                                    error("Failed %s type: %s", location, error$1.message);
                                    setCurrentlyValidatingElement(null);
                                }
                            }
                        }
                    }
                }
                var isArrayImpl = Array.isArray;
                function isArray(a) {
                    return isArrayImpl(a);
                }
                function typeName(value) {
                    {
                        var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
                        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
                        return type;
                    }
                }
                function willCoercionThrow(value) {
                    {
                        try {
                            testStringCoercion(value);
                            return false;
                        } catch (e) {
                            return true;
                        }
                    }
                }
                function testStringCoercion(value) {
                    return "" + value;
                }
                function checkKeyStringCoercion(value) {
                    {
                        if (willCoercionThrow(value)) {
                            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                            return testStringCoercion(value);
                        }
                    }
                }
                var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
                var RESERVED_PROPS = {
                    key: true,
                    ref: true,
                    __self: true,
                    __source: true
                };
                var specialPropKeyWarningShown;
                var specialPropRefWarningShown;
                var didWarnAboutStringRefs;
                {
                    didWarnAboutStringRefs = {};
                }
                function hasValidRef(config) {
                    {
                        if (hasOwnProperty.call(config, "ref")) {
                            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                            if (getter && getter.isReactWarning) {
                                return false;
                            }
                        }
                    }
                    return config.ref !== void 0;
                }
                function hasValidKey(config) {
                    {
                        if (hasOwnProperty.call(config, "key")) {
                            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                            if (getter && getter.isReactWarning) {
                                return false;
                            }
                        }
                    }
                    return config.key !== void 0;
                }
                function warnIfStringRefCannotBeAutoConverted(config, self) {
                    {
                        if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
                            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                            if (!didWarnAboutStringRefs[componentName]) {
                                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                                didWarnAboutStringRefs[componentName] = true;
                            }
                        }
                    }
                }
                function defineKeyPropWarningGetter(props, displayName) {
                    {
                        var warnAboutAccessingKey = function warnAboutAccessingKey() {
                            if (!specialPropKeyWarningShown) {
                                specialPropKeyWarningShown = true;
                                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                            }
                        };
                        warnAboutAccessingKey.isReactWarning = true;
                        Object.defineProperty(props, "key", {
                            get: warnAboutAccessingKey,
                            configurable: true
                        });
                    }
                }
                function defineRefPropWarningGetter(props, displayName) {
                    {
                        var warnAboutAccessingRef = function warnAboutAccessingRef() {
                            if (!specialPropRefWarningShown) {
                                specialPropRefWarningShown = true;
                                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                            }
                        };
                        warnAboutAccessingRef.isReactWarning = true;
                        Object.defineProperty(props, "ref", {
                            get: warnAboutAccessingRef,
                            configurable: true
                        });
                    }
                }
                var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
                    var element = {
                        // This tag allows us to uniquely identify this as a React Element
                        $$typeof: REACT_ELEMENT_TYPE,
                        // Built-in properties that belong on the element
                        type: type,
                        key: key,
                        ref: ref,
                        props: props,
                        // Record the component responsible for creating this element.
                        _owner: owner
                    };
                    {
                        element._store = {};
                        Object.defineProperty(element._store, "validated", {
                            configurable: false,
                            enumerable: false,
                            writable: true,
                            value: false
                        });
                        Object.defineProperty(element, "_self", {
                            configurable: false,
                            enumerable: false,
                            writable: false,
                            value: self
                        });
                        Object.defineProperty(element, "_source", {
                            configurable: false,
                            enumerable: false,
                            writable: false,
                            value: source
                        });
                        if (Object.freeze) {
                            Object.freeze(element.props);
                            Object.freeze(element);
                        }
                    }
                    return element;
                };
                function jsxDEV(type, config, maybeKey, source, self) {
                    {
                        var propName;
                        var props = {};
                        var key = null;
                        var ref = null;
                        if (maybeKey !== void 0) {
                            {
                                checkKeyStringCoercion(maybeKey);
                            }
                            key = "" + maybeKey;
                        }
                        if (hasValidKey(config)) {
                            {
                                checkKeyStringCoercion(config.key);
                            }
                            key = "" + config.key;
                        }
                        if (hasValidRef(config)) {
                            ref = config.ref;
                            warnIfStringRefCannotBeAutoConverted(config, self);
                        }
                        for(propName in config){
                            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                                props[propName] = config[propName];
                            }
                        }
                        if (type && type.defaultProps) {
                            var defaultProps = type.defaultProps;
                            for(propName in defaultProps){
                                if (props[propName] === void 0) {
                                    props[propName] = defaultProps[propName];
                                }
                            }
                        }
                        if (key || ref) {
                            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                            if (key) {
                                defineKeyPropWarningGetter(props, displayName);
                            }
                            if (ref) {
                                defineRefPropWarningGetter(props, displayName);
                            }
                        }
                        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
                    }
                }
                var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
                var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
                function setCurrentlyValidatingElement$1(element) {
                    {
                        if (element) {
                            var owner = element._owner;
                            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
                        } else {
                            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
                        }
                    }
                }
                var propTypesMisspellWarningShown;
                {
                    propTypesMisspellWarningShown = false;
                }
                function isValidElement(object) {
                    {
                        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
                    }
                }
                function getDeclarationErrorAddendum() {
                    {
                        if (ReactCurrentOwner$1.current) {
                            var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
                            if (name) {
                                return "\n\nCheck the render method of `" + name + "`.";
                            }
                        }
                        return "";
                    }
                }
                function getSourceInfoErrorAddendum(source) {
                    {
                        if (source !== void 0) {
                            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
                            var lineNumber = source.lineNumber;
                            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
                        }
                        return "";
                    }
                }
                var ownerHasKeyUseWarning = {};
                function getCurrentComponentErrorInfo(parentType) {
                    {
                        var info = getDeclarationErrorAddendum();
                        if (!info) {
                            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
                            if (parentName) {
                                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                            }
                        }
                        return info;
                    }
                }
                function validateExplicitKey(element, parentType) {
                    {
                        if (!element._store || element._store.validated || element.key != null) {
                            return;
                        }
                        element._store.validated = true;
                        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
                        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                            return;
                        }
                        ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
                        var childOwner = "";
                        if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
                            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
                        }
                        setCurrentlyValidatingElement$1(element);
                        error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
                        setCurrentlyValidatingElement$1(null);
                    }
                }
                function validateChildKeys(node, parentType) {
                    {
                        if (typeof node !== "object") {
                            return;
                        }
                        if (isArray(node)) {
                            for(var i = 0; i < node.length; i++){
                                var child = node[i];
                                if (isValidElement(child)) {
                                    validateExplicitKey(child, parentType);
                                }
                            }
                        } else if (isValidElement(node)) {
                            if (node._store) {
                                node._store.validated = true;
                            }
                        } else if (node) {
                            var iteratorFn = getIteratorFn(node);
                            if (typeof iteratorFn === "function") {
                                if (iteratorFn !== node.entries) {
                                    var iterator = iteratorFn.call(node);
                                    var step;
                                    while(!(step = iterator.next()).done){
                                        if (isValidElement(step.value)) {
                                            validateExplicitKey(step.value, parentType);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                function validatePropTypes(element) {
                    {
                        var type = element.type;
                        if (type === null || type === void 0 || typeof type === "string") {
                            return;
                        }
                        var propTypes;
                        if (typeof type === "function") {
                            propTypes = type.propTypes;
                        } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
                        // Inner props are checked in the reconciler.
                        type.$$typeof === REACT_MEMO_TYPE)) {
                            propTypes = type.propTypes;
                        } else {
                            return;
                        }
                        if (propTypes) {
                            var name = getComponentNameFromType(type);
                            checkPropTypes(propTypes, element.props, "prop", name, element);
                        } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                            propTypesMisspellWarningShown = true;
                            var _name = getComponentNameFromType(type);
                            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
                        }
                        if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                            error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
                        }
                    }
                }
                function validateFragmentProps(fragment) {
                    {
                        var keys = Object.keys(fragment.props);
                        for(var i = 0; i < keys.length; i++){
                            var key = keys[i];
                            if (key !== "children" && key !== "key") {
                                setCurrentlyValidatingElement$1(fragment);
                                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                                setCurrentlyValidatingElement$1(null);
                                break;
                            }
                        }
                        if (fragment.ref !== null) {
                            setCurrentlyValidatingElement$1(fragment);
                            error("Invalid attribute `ref` supplied to `React.Fragment`.");
                            setCurrentlyValidatingElement$1(null);
                        }
                    }
                }
                var didWarnAboutKeySpread = {};
                function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
                    {
                        var validType = isValidElementType(type);
                        if (!validType) {
                            var info = "";
                            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                            }
                            var sourceInfo = getSourceInfoErrorAddendum(source);
                            if (sourceInfo) {
                                info += sourceInfo;
                            } else {
                                info += getDeclarationErrorAddendum();
                            }
                            var typeString;
                            if (type === null) {
                                typeString = "null";
                            } else if (isArray(type)) {
                                typeString = "array";
                            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                                info = " Did you accidentally export a JSX literal instead of a component?";
                            } else {
                                typeString = typeof type === "undefined" ? "undefined" : _type_of(type);
                            }
                            error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
                        }
                        var element = jsxDEV(type, props, key, source, self);
                        if (element == null) {
                            return element;
                        }
                        if (validType) {
                            var children = props.children;
                            if (children !== void 0) {
                                if (isStaticChildren) {
                                    if (isArray(children)) {
                                        for(var i = 0; i < children.length; i++){
                                            validateChildKeys(children[i], type);
                                        }
                                        if (Object.freeze) {
                                            Object.freeze(children);
                                        }
                                    } else {
                                        error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                                    }
                                } else {
                                    validateChildKeys(children, type);
                                }
                            }
                        }
                        {
                            if (hasOwnProperty.call(props, "key")) {
                                var componentName = getComponentNameFromType(type);
                                var keys = Object.keys(props).filter(function(k) {
                                    return k !== "key";
                                });
                                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                                    var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                                    error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                                    didWarnAboutKeySpread[componentName + beforeExample] = true;
                                }
                            }
                        }
                        if (type === REACT_FRAGMENT_TYPE) {
                            validateFragmentProps(element);
                        } else {
                            validatePropTypes(element);
                        }
                        return element;
                    }
                }
                function jsxWithValidationStatic(type, props, key) {
                    {
                        return jsxWithValidation(type, props, key, true);
                    }
                }
                function jsxWithValidationDynamic(type, props, key) {
                    {
                        return jsxWithValidation(type, props, key, false);
                    }
                }
                var jsx18 = jsxWithValidationDynamic;
                var jsxs18 = jsxWithValidationStatic;
                exports.Fragment = REACT_FRAGMENT_TYPE;
                exports.jsx = jsx18;
                exports.jsxs = jsxs18;
            })();
        }
    }
});
// ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
    "../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js": function(exports, module) {
        "use strict";
        if (process.env.NODE_ENV === "production") {
            module.exports = require_react_jsx_runtime_production_min();
        } else {
            module.exports = require_react_jsx_runtime_development();
        }
    }
});
// src/constants/index.ts
var MOODS = [
    "sad",
    "shocked",
    "happy",
    "blissful",
    "lovestruck",
    "excited",
    "ko"
];
var DEFAULT_PROPS = {
    size: 240,
    mood: "blissful",
    color: "#FFD882"
};
var PROPS_DATA = [
    {
        name: "size",
        type: "number | string",
        description: "Size of the SVG in px.",
        default: DEFAULT_PROPS.size
    },
    {
        name: "color",
        type: "string",
        description: "Color of the SVG.",
        default: DEFAULT_PROPS.color
    },
    {
        name: "mood",
        type: "KawaiiMood",
        description: "Mood of the Kawaii face. Choose one of: ".concat(MOODS.map(function(mood) {
            return '"'.concat(mood, '"');
        }).join(", ")),
        default: DEFAULT_PROPS.mood
    }
];
// src/utils/getFaceScale.ts
var getFaceScale = function(size) {
    return size / 66;
};
// src/components/common/face/paths.ts
var paths = {
    defs: "M1.45656876,3.14684877 C1.45656876,3.14684877 1.45656876,3.14684877 1.45656876,3.14684877 L0,3.14685315 C0,2.31818182 0.346033696,1.50734266 0.949429952,0.922027972 C1.55390756,0.335664336 2.38979521,0 3.2440659,0 L25.9525272,0 C26.8067979,0 27.6416041,0.335664336 28.2460818,0.922027972 C28.8505594,1.50734266 29.1965931,2.31818182 29.1965931,3.14685315 C29.1890236,5.85734266 28.240675,8.44825175 26.7127199,10.6814685 C25.1771954,12.9104895 23.0317865,14.8122378 20.4040931,16.0227273 C18.6544603,16.8251748 16.6809868,17.3087413 14.5982965,17.3076923 C11.4666916,17.3076923 8.61299495,16.2241259 6.33025392,14.5951049 C4.0399434,12.9587413 2.264358,10.779021 1.16245695,8.33811189 C0.431460764,6.70909091 0.0010813553,4.95314685 0,3.14685315 L1.45656896,3.14685315 Z",
    tongue: "M9.59865983,9.95467851 C9.59865983,9.95467851 9.59865983,9.95467851 9.59865983,9.95467851 L9,9.95467851 C9,9.66740582 9.14222222,9.38631493 9.39022222,9.18340586 C9.63866667,8.98013316 10.3333333,8 15,8 C19.6666667,8 20.3608889,8.98013316 20.6093333,9.18340586 C20.8577778,9.38631493 21,9.66740582 21,9.95467851 C20.9968889,10.8943148 20.6071111,11.7924965 19.9791111,12.5666783 C19.348,13.3394055 18.4662222,13.9986781 17.3862222,14.4183144 C16.6671111,14.6964962 15.856,14.8641326 15,14.8637689 C13.7128889,14.8637689 12.54,14.4881326 11.6017778,13.9234054 C10.6604444,13.3561327 9.93066667,12.6004964 9.47777778,11.7543147 C9.17733333,11.1895875 9.00044444,10.5808603 9,9.95467851 L9.59865983,9.95467851 Z",
    happy: "M6,1.9999998 C6.00066667,3.14799969 6.26599997,4.26466625 6.7166666,5.29933281 C7.39599986,6.85066599 8.49066642,8.23599919 9.90199962,9.27666575 C11.3099995,10.311999 13.0693326,10.9999989 14.9999991,10.9999989 C16.283999,11.0006656 17.5006655,10.6939989 18.5793321,10.1833323 C20.1993319,9.41466574 21.5219985,8.20599919 22.468665,6.788666 C23.4106649,5.36999947 23.9953316,3.72333297 23.9999982,1.9999998 C23.9999982,0.895333245 23.104665,0 21.9999984,0 C20.8953319,0 19.9999986,0.895333245 19.9999986,1.9999998 C20.0006653,2.51933308 19.8739986,3.11066636 19.6166653,3.7006663 C19.233332,4.58733288 18.5526654,5.4513328 17.7299988,6.0519994 C16.9033323,6.65733268 15.9686657,6.99999931 14.9999991,6.99999931 C14.3513325,6.99999931 13.7259992,6.84799932 13.1299993,6.56666602 C12.2373327,6.14866606 11.4226661,5.4193328 10.8599995,4.57066622 C10.2919996,3.7246663 9.99533294,2.77733306 9.99999961,1.9999998 C9.99999961,0.895333245 9.10466636,0 7.9999998,0 C6.89533325,0 6,0.895333245 6,1.9999998",
    sad: "M6,1.9999998 C6.00066667,3.14799969 6.26599997,4.26466625 6.7166666,5.29933281 C7.39599986,6.85066599 8.49066642,8.23599919 9.90199962,9.27666575 C11.3099995,10.311999 13.0693326,10.9999989 14.9999991,10.9999989 C16.283999,11.0006656 17.5006655,10.6939989 18.5793321,10.1833323 C20.1993319,9.41466574 21.5219985,8.20599919 22.468665,6.788666 C23.4106649,5.36999947 23.9953316,3.72333297 23.9999982,1.9999998 C23.9999982,0.895333245 23.104665,7.10542736e-15 21.9999984,7.10542736e-15 C20.8953319,7.10542736e-15 19.9999986,0.895333245 19.9999986,1.9999998 C20.0006653,2.51933308 19.8739986,3.11066636 19.6166653,3.7006663 C19.233332,4.58733288 18.5526654,5.4513328 17.7299988,6.0519994 C16.9033323,6.65733268 15.9686657,6.99999931 14.9999991,6.99999931 C14.3513325,6.99999931 13.7259992,6.84799932 13.1299993,6.56666602 C12.2373327,6.14866606 11.4226661,5.4193328 10.8599995,4.57066622 C10.2919996,3.7246663 9.99533294,2.77733306 9.99999961,1.9999998 C9.99999961,0.895333245 9.10466636,7.10542736e-15 7.9999998,7.10542736e-15 C6.89533325,7.10542736e-15 6,0.895333245 6,1.9999998",
    bliss1: "M11.3298651,9.72876106 C9.83321993,9.72876106 8.62018766,8.55758439 8.62018766,7.11258087 C8.62018766,6.27104292 7.91115541,5.58647579 7.03954249,5.58647579 C6.16883282,5.58647579 5.45889734,6.27104292 5.45889734,7.11258087 C5.45889734,8.55758439 4.2467683,9.72876106 2.74921991,9.72876106 C1.25257476,9.72876106 0.0395424927,8.55758439 0.0395424927,7.11258087 C0.0395424927,3.38626826 3.18005862,0.354115435 7.03954249,0.354115435 C10.8999296,0.354115435 14.0395425,3.38626826 14.0395425,7.11258087 C14.0395425,8.55758439 12.8274135,9.72876106 11.3298651,9.72876106",
    bliss2: "M57.3298651,9.72876106 C55.8332199,9.72876106 54.6201877,8.55758439 54.6201877,7.11258087 C54.6201877,6.27104292 53.9111554,5.58647579 53.0395425,5.58647579 C52.1688328,5.58647579 51.4588973,6.27104292 51.4588973,7.11258087 C51.4588973,8.55758439 50.2467683,9.72876106 48.7492199,9.72876106 C47.2525748,9.72876106 46.0395425,8.55758439 46.0395425,7.11258087 C46.0395425,3.38626826 49.1800586,0.354115435 53.0395425,0.354115435 C56.8999296,0.354115435 60.0395425,3.38626826 60.0395425,7.11258087 C60.0395425,8.55758439 58.8274135,9.72876106 57.3298651,9.72876106",
    lovestruck1: "M11.980165,2.98190092 C11.8050001,1.25390423 10.4403753,0.000206846623 8.73257491,0.000206846623 C7.5948106,0.000206846623 6.55305237,0.548970938 5.96686143,1.42848278 C5.38597852,0.537594374 4.38691529,0 3.26738291,0 C1.55981331,0 0.194957712,1.25369738 0.0200235653,2.98169407 C0.00617653522,3.05802048 -0.0505962882,3.45971662 0.12203002,4.11479988 C0.370814995,5.05967525 0.945466744,5.91912297 1.78344285,6.59964836 C1.78344285,6.59964836 4.36682268,10 5.96409202,10 C7.56136137,10 10.216515,6.59985521 10.216515,6.59985521 C11.0544911,5.91912297 11.6291428,5.0598821 11.8779278,4.11479988 C12.0505541,3.45992347 11.9937813,3.05822732 11.980165,2.98190092 Z",
    lovestruck2: "M62.980165,2.98190092 C62.8050001,1.25390423 61.4403753,0.000206846623 59.7325749,0.000206846623 C58.5948106,0.000206846623 57.5530524,0.548970938 56.9668614,1.42848278 C56.3859785,0.537594374 55.3869153,0 54.2673829,0 C52.5598133,0 51.1949577,1.25369738 51.0200236,2.98169407 C51.0061765,3.05802048 50.9494037,3.45971662 51.12203,4.11479988 C51.370815,5.05967525 51.9454667,5.91912297 52.7834428,6.59964836 C52.7834428,6.59964836 55.3668227,10 56.964092,10 C58.5613614,10 61.216515,6.59985521 61.216515,6.59985521 C62.0544911,5.91912297 62.6291428,5.0598821 62.8779278,4.11479988 C63.0505541,3.45992347 62.9937813,3.05822732 62.980165,2.98190092 Z",
    shocked1: "M5.29976191,8.12776191 L7.18533333,10.0133333 C7.576,10.404 8.088,10.5993333 8.6,10.5993333 C9.11133333,10.5993333 9.62333333,10.404 10.014,10.0133333 C10.7953333,9.23266667 10.7953333,7.966 10.014,7.18533333 L8.12814284,5.29966667 L10.014,3.414 C10.7953333,2.63333333 10.7953333,1.36666667 10.014,0.586 C9.23266667,-0.195333333 7.96666667,-0.195333333 7.18533333,0.586 L5.29976191,2.47157143 L3.414,0.586 C2.63266667,-0.195333333 1.36733333,-0.195333333 0.586,0.586 C-0.195333333,1.36666667 -0.195333333,2.63333333 0.586,3.414 L2.47166667,5.29966667 L0.586,7.18533333 C-0.195333333,7.966 -0.195333333,9.23266667 0.586,10.0133333 C0.976666667,10.404 1.488,10.5993333 2,10.5993333 C2.512,10.5993333 3.02333333,10.404 3.414,10.0133333 L5.29976191,8.12776191 Z",
    shocked2: "M51.2997619,8.12776191 L53.1853333,10.0133333 C53.576,10.404 54.088,10.5993333 54.6,10.5993333 C55.1113333,10.5993333 55.6233333,10.404 56.014,10.0133333 C56.7953333,9.23266667 56.7953333,7.966 56.014,7.18533333 L54.1281428,5.29966667 L56.014,3.414 C56.7953333,2.63333333 56.7953333,1.36666667 56.014,0.586 C55.2326667,-0.195333333 53.9666667,-0.195333333 53.1853333,0.586 L51.2997619,2.47157143 L49.414,0.586 C48.6326667,-0.195333333 47.3673333,-0.195333333 46.586,0.586 C45.8046667,1.36666667 45.8046667,2.63333333 46.586,3.414 L48.4716667,5.29966667 L46.586,7.18533333 C45.8046667,7.966 45.8046667,9.23266667 46.586,10.0133333 C46.9766667,10.404 47.488,10.5993333 48,10.5993333 C48.512,10.5993333 49.0233333,10.404 49.414,10.0133333 L51.2997619,8.12776191 Z",
    ko1: "M52.9142136,5.03553391 L50.4393398,2.56066017 C49.8535534,1.97487373 49.8535534,1.02512627 50.4393398,0.439339828 C51.0251263,-0.146446609 51.9748737,-0.146446609 52.5606602,0.439339828 L55.0355339,2.91421356 L57.5104076,0.439339828 C58.0961941,-0.146446609 59.0459415,-0.146446609 59.631728,0.439339828 C60.2175144,1.02512627 60.2175144,1.97487373 59.631728,2.56066017 L57.1568542,5.03553391 L59.631728,7.51040764 C60.2175144,8.09619408 60.2175144,9.04594155 59.631728,9.63172798 C59.0459415,10.2175144 58.0961941,10.2175144 57.5104076,9.63172798 L55.0355339,7.15685425 L52.5606602,9.63172798 C51.9748737,10.2175144 51.0251263,10.2175144 50.4393398,9.63172798 C49.8535534,9.04594155 49.8535534,8.09619408 50.4393398,7.51040764 L52.9142136,5.03553391 Z",
    ko2: "M2.91421356,5.03553391 L0.439339828,2.56066017 C-0.146446609,1.97487373 -0.146446609,1.02512627 0.439339828,0.439339828 C1.02512627,-0.146446609 1.97487373,-0.146446609 2.56066017,0.439339828 L5.03553391,2.91421356 L7.51040764,0.439339828 C8.09619408,-0.146446609 9.04594155,-0.146446609 9.63172798,0.439339828 C10.2175144,1.02512627 10.2175144,1.97487373 9.63172798,2.56066017 L7.15685425,5.03553391 L9.63172798,7.51040764 C10.2175144,8.09619408 10.2175144,9.04594155 9.63172798,9.63172798 C9.04594155,10.2175144 8.09619408,10.2175144 7.51040764,9.63172798 L5.03553391,7.15685425 L2.56066017,9.63172798 C1.97487373,10.2175144 1.02512627,10.2175144 0.439339828,9.63172798 C-0.146446609,9.04594155 -0.146446609,8.09619408 0.439339828,7.51040764 L2.91421356,5.03553391 Z"
};
var paths_default = paths;
// src/components/common/face/index.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Face = function(_param) {
    var _param_mood = _param.mood, mood = _param_mood === void 0 ? "blissful" : _param_mood, uniqueId = _param.uniqueId, transform = _param.transform, rest = _object_without_properties(_param, [
        "mood",
        "uniqueId",
        "transform"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", _object_spread_props(_object_spread({
        id: "kawaii-face",
        transform: transform
    }, rest), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                    d: paths_default.defs,
                    id: "kawaii-face__path-1"
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
                id: "kawaii-face__mouth",
                transform: "translate(18.000000, 16.000000)",
                children: [
                    (mood === "blissful" || mood === "lovestruck" || mood === "excited") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
                        id: "kawaii-face__mouth__joy",
                        transform: "translate(0.000000, 1.000000)",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mask", {
                                id: "kawaii-face__mask-2-".concat(uniqueId),
                                fill: "white",
                                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("use", {
                                    xlinkHref: "#kawaii-face__path-1"
                                })
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("use", {
                                id: "Combined-Shape",
                                fill: "#000000",
                                xlinkHref: "#kawaii-face__path-1"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                                d: paths_default.tongue,
                                id: "kawaii-face__tongue",
                                fill: "#E74144",
                                mask: "url(#kawaii-face__mask-2-".concat(uniqueId),
                                transform: "translate(15.000000, 11.431885) scale(1, -1)\n            translate(-15.000000, -11.431885)"
                            })
                        ]
                    }),
                    mood === "happy" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                        d: paths_default.happy,
                        id: "kawaii-face__mouth__happy",
                        fill: "#000000"
                    }),
                    mood === "shocked" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
                        id: "kawaii-face__mouth__shocked",
                        cx: "15",
                        cy: "14",
                        rx: "9",
                        ry: "10",
                        fill: "#000000"
                    }),
                    (mood === "sad" || mood === "ko") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                        d: paths_default.sad,
                        id: "kawaii-face__mouth__sad",
                        fill: "#000000",
                        transform: "translate(14.999999, 5.500000) scale(1, -1) translate(-14.999999, -5.500000)"
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
                id: "kawaii-face__blush",
                transform: "translate(0.000000, 15.000000)",
                fill: "#000000",
                opacity: "0.2",
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
                        cx: "3",
                        cy: "3",
                        r: "3"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
                        cx: "63",
                        cy: "3",
                        r: "3"
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
                id: "kawaii-face__eyes",
                transform: "translate(2.000000, 0.000000)",
                fill: "#000000",
                children: [
                    mood === "blissful" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
                        id: "kawaii-face__eyes__arc",
                        transform: "translate(1.000000, 0.000000)",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                                d: paths_default.bliss1
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                                d: paths_default.bliss2
                            })
                        ]
                    }),
                    (mood === "happy" || mood === "sad" || mood === "shocked" || mood === "excited") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
                        id: "kawaii-face__eyes__circle",
                        transform: "translate(1.000000, 2.000000)",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
                                cx: "4.5",
                                cy: "4.5",
                                r: "4.5"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
                                cx: "56.5",
                                cy: "4.5",
                                r: "4.5"
                            })
                        ]
                    }),
                    mood === "lovestruck" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
                        id: "kawaii-face__eyes__heart",
                        transform: "translate(0.000000, 2.000000)",
                        fillRule: "nonzero",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                                d: paths_default.lovestruck1,
                                id: "Shape"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                                d: paths_default.lovestruck2,
                                id: "Shape"
                            })
                        ]
                    }),
                    mood === "ko" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
                        id: "kawaii-face__eyes__ko",
                        transform: "translate(1.500000, 1.000000)",
                        fillRule: "nonzero",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                                d: paths_default.ko1,
                                id: "Cross"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                                d: paths_default.ko2,
                                id: "Cross"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
// src/components/Astronaut.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var Astronaut = function() {
    var _param = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_PROPS;
    var _param_size = _param.size, size = _param_size === void 0 ? 240 : _param_size, _param_mood = _param.mood, mood = _param_mood === void 0 ? "blissful" : _param_mood, _param_color = _param.color, color = _param_color === void 0 ? "#A6E191" : _param_color, props = _object_without_properties(_param, [
        "size",
        "mood",
        "color"
    ]);
    var figmaFaceScale = getFaceScale(40.5);
    var figmaFaceXYPosition = "99.82 67.77";
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", _object_spread_props(_object_spread({
        width: size,
        height: size,
        viewBox: "0 0 240 240",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M46.9407 156.016C46.3921 155.817 45.6607 155.551 45.1785 155.168L43.8528 163.362C43.5709 164.706 44.5853 165.902 45.7489 166.118C47.0953 166.402 48.2916 165.391 48.3242 164.164L49.5672 156.766C48.8357 156.5 47.855 156.349 46.9407 156.016Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M31.3877 164.61C31.5706 164.676 31.5706 164.676 31.7534 164.743C32.8506 165.142 34.0305 164.745 34.6117 163.717C36.8703 159.788 40.1596 156.44 44.3969 154.471C43.1332 153.391 42.4344 151.897 42.1677 150.354C37.3655 152.738 33.1956 156.798 30.4222 161.573C29.9074 162.418 30.2405 163.779 31.3877 164.61Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M66.6732 129.112L85.2967 111.514L89.4873 115.931L73.2563 131.508L66.6732 129.112Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M49.2623 145.086L54.4173 150.268C57.477 153.241 62.3468 152.947 65.0211 149.582L73.6917 138.277C75.7347 135.509 75.5333 131.511 73.0723 129.169L70.7941 126.894C68.3995 124.369 64.3439 124.133 61.7022 126.27L50.2712 134.918C46.5824 137.087 46.2026 142.113 49.2623 145.086Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                opacity: 0.2,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M49.2623 145.086L54.4173 150.268C57.477 153.241 62.3468 152.947 65.0211 149.582L73.6917 138.277C75.7347 135.509 75.5333 131.511 73.0723 129.169L70.7941 126.894C68.3995 124.369 64.3439 124.133 61.7022 126.27L50.2712 134.918C46.5824 137.087 46.2026 142.113 49.2623 145.086Z",
                fill: "black"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M46.9407 156.016C50.7784 157.413 55.0191 155.442 56.4125 151.614C57.8059 147.785 55.8244 143.549 51.9867 142.153C48.149 140.756 43.9083 142.727 42.5149 146.555C41.1215 150.384 43.103 154.62 46.9407 156.016Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M192.036 156.016C192.584 155.817 193.316 155.551 193.798 155.168L195.123 163.362C195.405 164.706 194.391 165.902 193.227 166.118C191.881 166.402 190.685 165.391 190.652 164.164L189.409 156.766C190.141 156.5 191.121 156.349 192.036 156.016Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M207.589 164.61C207.406 164.676 207.406 164.676 207.223 164.743C206.126 165.142 204.946 164.745 204.365 163.717C202.106 159.788 198.817 156.44 194.579 154.471C195.843 153.391 196.542 151.897 196.809 150.354C201.611 152.738 205.781 156.798 208.554 161.573C209.069 162.418 208.736 163.779 207.589 164.61Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M172.303 129.112L153.68 111.514L149.489 115.931L165.72 131.508L172.303 129.112Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M189.714 145.086L184.559 150.268C181.499 153.241 176.629 152.947 173.955 149.582L165.285 138.277C163.242 135.509 163.443 131.511 165.904 129.169L168.182 126.894C170.577 124.369 174.632 124.133 177.274 126.27L188.705 134.918C192.394 137.087 192.774 142.113 189.714 145.086Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                opacity: 0.2,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M189.714 145.086L184.559 150.268C181.499 153.241 176.629 152.947 173.955 149.582L165.285 138.277C163.242 135.509 163.443 131.511 165.904 129.169L168.182 126.894C170.577 124.369 174.632 124.133 177.274 126.27L188.705 134.918C192.394 137.087 192.774 142.113 189.714 145.086Z",
                fill: "black"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M192.036 156.016C188.198 157.413 183.957 155.442 182.564 151.614C181.17 147.785 183.152 143.549 186.99 142.153C190.827 140.756 195.068 142.727 196.461 146.555C197.855 150.384 195.873 154.62 192.036 156.016Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", {
                x: 134.854,
                y: 169.797,
                width: 6.82929,
                height: 35.8538,
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M151.131 217.375C150.448 206.676 144.984 198.253 138.155 198.253C131.326 198.253 125.635 206.676 125.179 217.375H151.131Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                opacity: 0.2,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M151.131 217.375C150.448 206.676 144.984 198.253 138.155 198.253C131.326 198.253 125.635 206.676 125.179 217.375H151.131Z",
                fill: "black"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M150.675 217.033H125.407C123.358 217.033 121.765 218.627 121.765 220.676V220.676C121.765 222.724 123.358 224.318 125.407 224.318H150.675C152.724 224.318 154.318 222.724 154.318 220.676V220.676C154.09 218.627 152.496 217.033 150.675 217.033Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", {
                x: 97.2929,
                y: 169.797,
                width: 6.82929,
                height: 35.8538,
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M113.569 217.375C112.886 206.676 107.423 198.253 100.594 198.253C93.7645 198.253 88.0734 206.676 87.6181 217.375H113.569Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                opacity: 0.2,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M113.569 217.375C112.886 206.676 107.423 198.253 100.594 198.253C93.7645 198.253 88.0734 206.676 87.6181 217.375H113.569Z",
                fill: "black"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M113.114 217.033H87.8458C85.797 217.033 84.2035 218.627 84.2035 220.676V220.676C84.2035 222.724 85.797 224.318 87.8458 224.318H113.114C115.163 224.318 116.756 222.724 116.756 220.676V220.676C116.756 218.627 115.163 217.033 113.114 217.033Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M120.028 186.87C119.667 186.871 119.307 186.871 118.947 186.87C106.604 186.828 95.1682 181.213 87.5715 171.466C79.9266 161.657 77.2779 149.122 80.3064 137.077L91.8232 91.2614C99.946 96.0278 109.401 98.7661 119.487 98.7661C129.574 98.7661 139.031 96.0274 147.154 91.2604L158.67 137.078C161.698 149.123 159.05 161.657 151.404 171.466C143.808 181.213 132.371 186.827 120.028 186.87Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M165.751 23.5154L141.605 59.5874L138.763 57.7041L162.909 21.6321L165.751 23.5154Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M76.5085 21.8504L100.654 57.9225L97.8126 59.8058L73.6668 23.7338L76.5085 21.8504Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M164.351 30.0889C168.437 30.0889 171.749 26.7765 171.749 22.6905C171.749 18.6044 168.437 15.2921 164.351 15.2921C160.266 15.2921 156.954 18.6044 156.954 22.6905C156.954 26.7765 160.266 30.0889 164.351 30.0889Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M75.194 30.0889C79.2794 30.0889 82.5913 26.7765 82.5913 22.6905C82.5913 18.6044 79.2794 15.2921 75.194 15.2921C71.1086 15.2921 67.7967 18.6044 67.7967 22.6905C67.7967 26.7765 71.1086 30.0889 75.194 30.0889Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                opacity: 0.2,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M164.351 30.0889C168.437 30.0889 171.749 26.7765 171.749 22.6905C171.749 18.6044 168.437 15.2921 164.351 15.2921C160.266 15.2921 156.954 18.6044 156.954 22.6905C156.954 26.7765 160.266 30.0889 164.351 30.0889Z",
                fill: "black"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                opacity: 0.2,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M75.194 30.0889C79.2794 30.0889 82.5913 26.7765 82.5913 22.6905C82.5913 18.6044 79.2794 15.2921 75.194 15.2921C71.1086 15.2921 67.7967 18.6044 67.7967 22.6905C67.7967 26.7765 71.1086 30.0889 75.194 30.0889Z",
                fill: "black"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M119.773 125.879C148.048 125.879 170.97 102.954 170.97 74.674C170.97 46.3944 148.048 23.4692 119.773 23.4692C91.4972 23.4692 68.5753 46.3944 68.5753 74.674C68.5753 102.954 91.4972 125.879 119.773 125.879Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M119.986 98.1114C153.293 98.1114 153.293 91.1804 153.293 74.9363C153.293 58.6922 146.288 53.0873 119.986 53.0873C93.6844 53.0873 86.6793 58.6922 86.6793 74.9363C86.6793 91.1804 86.6793 98.1114 119.986 98.1114Z",
                fill: "#ECDBCA"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("mask", {
                id: "mask0_3_508",
                style: {
                    maskType: "luminance"
                },
                maskUnits: "userSpaceOnUse",
                x: 86,
                y: 53,
                width: 68,
                height: 46,
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M119.986 98.1114C153.293 98.1114 153.293 91.1804 153.293 74.9363C153.293 58.6922 146.288 53.0873 119.986 53.0873C93.6844 53.0873 86.6793 58.6922 86.6793 74.9363C86.6793 91.1804 86.6793 98.1114 119.986 98.1114Z",
                    fill: "white"
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", {
                mask: "url(#mask0_3_508)"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("mask", {
                id: "mask1_3_508",
                style: {
                    maskType: "luminance"
                },
                maskUnits: "userSpaceOnUse",
                x: 111,
                y: 78,
                width: 19,
                height: 11,
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M112.034 83.2307C111.584 82.2472 111.32 81.1872 111.319 80.0967C111.319 79.5964 111.532 79.1069 111.903 78.7536C112.274 78.3996 112.789 78.197 113.314 78.197H127.279C127.804 78.197 128.318 78.3996 128.69 78.7536C129.061 79.1069 129.274 79.5964 129.274 80.0967C129.269 81.733 128.686 83.2972 127.747 84.6453C126.802 85.991 125.483 87.1391 123.867 87.8699C122.791 88.3543 121.577 88.6462 120.296 88.6456C118.371 88.6456 116.616 87.9914 115.212 87.008C113.803 86.0201 112.711 84.7042 112.034 83.2307Z",
                    fill: "white"
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Face, {
                mood: mood,
                transform: "translate(".concat(figmaFaceXYPosition, ") scale(").concat(figmaFaceScale, ")")
            })
        ]
    }));
};
// src/components/Backpack.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var Backpack = function() {
    var _param = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_PROPS;
    var _param_size = _param.size, size = _param_size === void 0 ? 240 : _param_size, _param_mood = _param.mood, mood = _param_mood === void 0 ? "blissful" : _param_mood, _param_color = _param.color, color = _param_color === void 0 ? "#A6E191" : _param_color, props = _object_without_properties(_param, [
        "size",
        "mood",
        "color"
    ]);
    var figmaFaceScale = getFaceScale(50.73);
    var figmaFaceXYPosition = "94.67 106.5";
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _object_spread_props(_object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 240 240",
        fill: "none"
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "M163.776 49.844v33.53l-10.668-11.371 10.668-22.159Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                fill: "#fff",
                d: "M163.776 49.844v33.53l-10.668-11.371 10.668-22.159Z",
                opacity: 0.4
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "m156.71 71.943 7.066-22.73-16.152-3.94-5.946 18.967 15.032 7.703ZM76.144 49.844v33.53l10.668-11.371-10.668-22.159Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                fill: "#fff",
                d: "M76.144 49.844v33.53l10.668-11.371-10.668-22.159Z",
                opacity: 0.4
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "m83.21 71.943-7.066-22.73 16.153-3.94 5.946 18.967-15.032 7.703Zm33.321-30.609h7.62L120.341 36l-3.81 5.334Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                fill: "#121212",
                d: "M116.531 41.334h7.62L120.341 36l-3.81 5.334Z",
                opacity: 0.14
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "M113.442 61.275h-9.865s3.561-11.134 6.348-15.126c.918-1.316 2.129-2.318 3.251-3.246.704-.583 1.374-1.137 1.915-1.722.772-.834 1.446-1.612 2.039-2.295 1.437-1.658 2.391-2.758 3.083-2.758.305 0 .038.337-.509 1.027-.997 1.258-2.926 3.69-4.019 7.397-1.2 4.07-2.243 16.723-2.243 16.723Zm13.81.762h9.854s-3.557-11.38-6.341-15.461c-.918-1.346-2.127-2.37-3.248-3.318-.703-.596-1.372-1.162-1.913-1.76a71.211 71.211 0 0 1-2.294-2.698c-1.302-1.588-2.191-2.672-2.841-2.672-.311 0-.024.386.549 1.156 1.011 1.358 2.913 3.914 3.993 7.66 1.199 4.16 2.241 17.093 2.241 17.093Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "M119.96 55.698c29.39 0 52.961 26.34 52.961 58.833v71.645c0 10.834-7.905 16.591-17.654 16.591H84.653c-9.75 0-17.653-5.757-17.653-16.591v-71.645c0-32.493 23.57-58.833 52.96-58.833Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                fill: "#121212",
                d: "M172.921 176.339v10.28c0 10.703-7.905 16.391-17.654 16.391H84.653c-9.75 0-17.653-5.688-17.653-16.391v-10.28h105.921Z",
                opacity: 0.07
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("mask", {
                id: "Backpack_svg__a",
                width: 23,
                height: 14,
                x: 108,
                y: 122,
                maskUnits: "userSpaceOnUse",
                style: {
                    maskType: "luminance"
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M109.402 128.981c-.562-1.252-.893-2.602-.894-3.99 0-.637.266-1.26.73-1.71a2.55 2.55 0 0 1 1.764-.709h17.455c.657 0 1.298.258 1.763.709.465.45.731 1.073.731 1.71-.006 2.083-.735 4.075-1.91 5.791a12.004 12.004 0 0 1-4.849 4.106 10.693 10.693 0 0 1-4.463.988c-2.407 0-4.6-.833-6.355-2.085a12.014 12.014 0 0 1-3.972-4.81Z",
                    clipRule: "evenodd"
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                fill: "#121212",
                fillRule: "evenodd",
                d: "M172.921 114.482c0-32.325-23.571-58.528-52.961-58.528-29.39 0-52.96 26.203-52.96 58.528v4.572c0-32.325 23.57-58.528 52.96-58.528s52.961 26.203 52.961 58.528v-4.572Z",
                clipRule: "evenodd",
                opacity: 0.07
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "M85.614 139.763h69.608c8.554 0 8.554 5.852 8.554 5.852v38.301s0 6.14-7.749 6.14H85.68c-9.771 0-8.66-5.997-8.66-5.997v-38.714s0-5.582 8.594-5.582Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                fill: "#121212",
                d: "M85.614 139.763h69.608c8.554 0 8.554 5.852 8.554 5.852v38.301s0 6.14-7.749 6.14H85.68c-9.771 0-8.66-5.997-8.66-5.997v-38.714s0-5.582 8.594-5.582Z",
                opacity: 0.14
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                fill: "#33363B",
                d: "M76.906 154.241h86.87v2.286h-86.87z",
                opacity: 0.408
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                fill: "#555D67",
                d: "M76.906 151.955h86.87v2.286h-86.87z",
                opacity: 0.408
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                fill: "#6D727A",
                d: "M159.204 151.955h4.572v4.572h-4.572z",
                opacity: 0.587
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                fill: "#49505A",
                fillRule: "evenodd",
                d: "M162.469 153.479h-1.559l-.307 6.858h2.286l-.42-6.858Zm-.342 5.334h-.762v.762h.762v-.762Z",
                clipRule: "evenodd",
                opacity: 0.746
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                fill: "#FFFDFD",
                d: "M137.429 170.024h21.361v14.241h-21.361z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                fill: "#121212",
                d: "M138.319 170.914H157.9v12.46h-19.581z",
                opacity: 0.298
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                fill: "#fff",
                d: "M139.209 171.804h17.801v10.68h-17.801z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Face, {
                mood: mood,
                transform: "translate(".concat(figmaFaceXYPosition, ") scale(").concat(figmaFaceScale, ")")
            })
        ]
    }));
};
// src/components/Browser.tsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var Browser = function() {
    var _param = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_PROPS;
    var _param_size = _param.size, size = _param_size === void 0 ? 240 : _param_size, _param_mood = _param.mood, mood = _param_mood === void 0 ? "blissful" : _param_mood, _param_color = _param.color, color = _param_color === void 0 ? "#A6E191" : _param_color, props = _object_without_properties(_param, [
        "size",
        "mood",
        "color"
    ]);
    var figmaFaceScale = getFaceScale(52.78);
    var figmaFaceXYPosition = "93.58 115.38";
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", _object_spread_props(_object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 240 240",
        fill: "none"
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", {
                fill: color,
                d: "M199.67 122.166V83.164c-.002-9.99-8.186-18.166-18.191-18.164l-123.292.004C48.184 65.004 40 73.18 40 83.17v73.614l.044-.008c.322 2.904 2.829 18.249 19.777 18.249 18.72 0 115.623 1.102 122.23 0 6.608-1.101 17.619-3.303 17.619-18.721v-34.138Z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", {
                fill: "#121212",
                d: "M182.131 175.025c6.607-1.101 17.619-3.303 17.619-18.721v-73.14c-.002-9.99-8.186-18.166-18.192-18.164h-8.339c9.956.057 18.081 8.21 18.083 18.164v73.14c0 15.418-11.012 17.62-17.619 18.721-2.012.336-12.394.467-26.391.487 18.14.023 32.44-.087 34.839-.487Z",
                opacity: 0.1
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", {
                fill: "#111",
                d: "M40.078 83.164c0-9.984 8.18-18.16 18.18-18.16L181.51 65c10.002-.002 18.183 8.173 18.185 18.164"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", {
                fill: "#fff",
                d: "M175.121 76.433a2.717 2.717 0 0 0 2.719-2.715c0-1.5-1.217-2.716-2.719-2.716a2.718 2.718 0 0 0-2.719 2.716c0 1.5 1.218 2.715 2.719 2.715Zm8.973 0a2.718 2.718 0 0 0 2.719-2.715c0-1.5-1.218-2.716-2.719-2.716a2.717 2.717 0 0 0-2.719 2.716c0 1.5 1.217 2.715 2.719 2.715Z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", {
                width: 116.585,
                height: 8.448,
                x: 50.419,
                y: 69.506,
                fill: "#fff",
                rx: 4.224
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("mask", {
                id: "Browser_svg__a",
                width: 25,
                height: 15,
                x: 107,
                y: 128,
                maskUnits: "userSpaceOnUse",
                style: {
                    maskType: "luminance"
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M108.909 135.649c-.584-1.303-.929-2.707-.929-4.152 0-.662.276-1.311.759-1.779a2.653 2.653 0 0 1 1.835-.737h18.161c.684 0 1.351.268 1.835.737.483.468.76 1.117.76 1.779-.006 2.168-.765 4.24-1.987 6.026a12.5 12.5 0 0 1-5.045 4.272 11.124 11.124 0 0 1-4.643 1.028c-2.505 0-4.787-.867-6.613-2.17a12.5 12.5 0 0 1-4.133-5.004Z",
                    clipRule: "evenodd"
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Face, {
                mood: mood,
                transform: "translate(".concat(figmaFaceXYPosition, ") scale(").concat(figmaFaceScale, ")")
            })
        ]
    }));
};
// src/components/Cat.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var Cat = function() {
    var _param = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_PROPS;
    var _param_size = _param.size, size = _param_size === void 0 ? 240 : _param_size, _param_mood = _param.mood, mood = _param_mood === void 0 ? "blissful" : _param_mood, _param_color = _param.color, color = _param_color === void 0 ? "#A6E191" : _param_color, rest = _object_without_properties(_param, [
        "size",
        "mood",
        "color"
    ]);
    var figmaFaceScale = getFaceScale(51.67);
    var figmaFaceXYPosition = "93.83 86.36";
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("svg", _object_spread_props(_object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 240 240",
        fill: "none"
    }, rest), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                fill: color,
                d: "m106.135 177.521 2.49 3.974s-6.063 5.22-13.53 6.746c-5.381 1.124-24.533 2.569-24.533-16.783 0-19.353 13.49-22.565 7.388-6.224 0 0-2.208 6.866.642 11.484 2.851 4.617 11.002 8.712 18.39 4.898l9.153-4.095Z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                fill: "#121212",
                d: "m106.135 177.521 2.49 3.974s-6.063 5.22-13.53 6.746c-5.381 1.124-24.533 2.569-24.533-16.783 0-19.353 13.49-22.565 7.388-6.224 0 0-2.208 6.866.642 11.484 2.851 4.617 11.002 8.712 18.39 4.898l9.153-4.095Z",
                opacity: 0.25
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                fill: color,
                d: "M117.98 185.551c-1.165 6.183-3.333 13.249-.121 19.191.522.964-1.485 1.165-1.967 1.245-1.124.121-2.489-.361-3.092-1.405-3.412-6.304.081-14.254 1.366-20.878.16-.884 4.055.522 3.814 1.847Zm4.135 8.351c-.2 3.814.803 7.588 2.088 11.122.683 1.846 5.139.682 4.497-1.125-1.164-3.252-2.128-6.665-2.048-10.118.081-2.529.803-4.938 1.767-7.267.883-2.208-3.252-2.128-3.935-.441h-.401c-1.004 2.529-1.847 5.099-1.968 7.829Zm14.736-56.492s21.882 40.432 1.565 42.198Zm-33.125 0s-21.882 40.432-1.565 42.198Z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                fill: "#121212",
                d: "M136.851 137.41s21.882 40.432 1.565 42.198Zm-33.125 0s-21.882 40.432-1.565 42.198Z",
                opacity: 0.25
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                fill: color,
                d: "M120.068 137.41h16.702s17.586 51.553-4.818 51.272h-11.884"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                fill: color,
                d: "M120.349 137.41h-16.582s-17.586 51.553 4.818 51.272h11.804m35.653-130.609c-6.584-4.537-11.282-16.341-11.282-16.341l-4.175 3.654s1.204-13.893-2.088-10.6c-3.293 3.292-12.326 10.439-12.326 10.439s1.646-8.793 0-7.147c-1.606 1.606-8.352 15.498-21.481 25.897 7.428-5.822 17.225-11.282 29.711-16.622 8.432 3.613 15.619 7.106 21.641 10.72Z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                fill: color,
                d: "M146.447 52.452s17.264-6.143 19.633-5.26c2.329.884 5.581 10.239 0 19.353"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "M120.148 138.124a1.247 1.247 0 0 0-.12.009v-.012c-.248-.004-.646.002-1.179.009-9.629.139-63.1.911-59.57-43.761 3.67-46.43 56.727-49.083 60.749-49.218v-.006l.12.002.12-.002v.006c4.022.135 57.078 2.788 60.748 49.218 3.531 44.672-49.941 43.9-59.569 43.761-.533-.007-.931-.013-1.179-.009v.012a1.274 1.274 0 0 0-.12-.009Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                fill: color,
                d: "M94.13 52.13s-17.264-6.142-19.633-5.259c-2.329.883-5.581 10.238 0 19.353m-10.024 45.55c-4.515-2.924-9.022-4.717-9.022-4.717l3.653-4.176s-13.892 1.204-10.6-2.088c3.293-3.292 10.44-12.326 10.44-12.326s-8.793 1.646-7.147 0c1.089-1.089 7.825-4.54 15.291-10.742 1.828-1.517-2.777 7.592-3.597 16.976-.771 8.827 2.335 17.95.982 17.073Zm103.735 6.565c4.537-6.585 16.341-11.282 16.341-11.282l-3.653-4.176s13.892 1.204 10.599-2.088c-3.292-3.292-10.439-12.326-10.439-12.326s8.793 1.646 7.147 0c-1.606-1.606-15.498-8.351-25.897-21.48 5.822 7.427 11.282 17.224 16.622 29.71-3.613 8.432-7.106 15.619-10.72 21.642Z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                fill: color,
                d: "M84.936 57.752c6.625-4.497 11.282-16.301 11.282-16.301l4.176 3.653s-1.205-13.892 2.088-10.6c3.292 3.293 12.326 10.44 12.326 10.44s-1.646-8.793 0-7.147c1.606 1.606 8.351 15.498 21.48 25.897-7.427-5.822-17.224-11.282-29.711-16.622-8.431 3.613-15.578 7.106-21.64 10.68Z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                fill: color,
                d: "M84.936 57.752c6.625-4.497 11.282-16.301 11.282-16.301l4.176 3.653s-1.205-13.892 2.088-10.6c3.292 3.293 12.326 10.44 12.326 10.44s-1.646-8.793 0-7.147c1.606 1.606 8.351 15.498 21.48 25.897-7.427-5.822-17.224-11.282-29.711-16.622-8.431 3.613-15.578 7.106-21.64 10.68Z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                fill: "#121212",
                d: "M155.521 54.178s14.654-7.026 10.238 7.027Zm-69.581-.281s-14.655-7.026-10.24 7.027Z",
                opacity: 0.25
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                fill: "#121212",
                fillRule: "evenodd",
                d: "M119.857 144.778c-5.54-.282-9.353-2.048-9.353-2.048-13.121 42.476 9.057 40.183 9.352 40.151.254.032 22.436 2.327 9.353-40.151 0 0-3.813 1.766-9.352 2.048Z",
                clipRule: "evenodd",
                opacity: 0.25
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("mask", {
                id: "Cat_svg__a",
                width: 24,
                height: 15,
                x: 107,
                y: 99,
                maskUnits: "userSpaceOnUse",
                style: {
                    maskType: "luminance"
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M108.832 106.197c-.572-1.275-.909-2.65-.91-4.064 0-.649.271-1.284.744-1.742a2.595 2.595 0 0 1 1.796-.722h17.779c.669 0 1.323.263 1.796.722a2.44 2.44 0 0 1 .744 1.742c-.006 2.122-.748 4.15-1.945 5.899a12.236 12.236 0 0 1-4.939 4.182 10.913 10.913 0 0 1-4.545 1.006c-2.452 0-4.686-.849-6.474-2.124a12.242 12.242 0 0 1-4.046-4.899Z",
                    clipRule: "evenodd"
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                id: "kawaii-cat_nose",
                d: "M123.53 94.6778C122.766 93.0292 117.165 92.9341 116.571 94.6778C116.203 95.8191 118.721 98.1651 119.994 98.1017C121.295 98.0066 123.983 95.6606 123.53 94.6778Z",
                fill: "#121212"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Face, {
                mood: mood,
                transform: "translate(".concat(figmaFaceXYPosition, ") scale(").concat(figmaFaceScale, ")")
            })
        ]
    }));
};
// src/components/Chocolate.tsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var Chocolate = function() {
    var _param = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_PROPS;
    var _param_size = _param.size, size = _param_size === void 0 ? 240 : _param_size, _param_mood = _param.mood, mood = _param_mood === void 0 ? "blissful" : _param_mood, _param_color = _param.color, color = _param_color === void 0 ? "#A6E191" : _param_color, props = _object_without_properties(_param, [
        "size",
        "mood",
        "color"
    ]);
    var figmaFaceScale = getFaceScale(53.99);
    var figmaFaceXYPosition = "93 156.26";
    var chocolateFillColor = "#8C6A57";
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", _object_spread_props(_object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 240 240",
        fill: "none"
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", {
                d: "M166.389 201.19a4 4 0 0 1-4 4H78a4 4 0 0 1-4-4V39a4 4 0 0 1 4-4h84.389a4 4 0 0 1 4 4v162.19Z",
                fill: chocolateFillColor
            }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M86.156 41.483h-3.673a2 2 0 0 0-2 2v23.555a2 2 0 0 0 2 2h32.47a2 2 0 0 0 2-2V43.483a2 2 0 0 0-2-2H86.157Zm22.313 21.072a2 2 0 0 0 2-2V49.966a2 2 0 0 0-2-2H88.967a2 2 0 0 0-2 2v10.587a2 2 0 0 0 2 2h19.502ZM129.109 41.483h-3.673a2 2 0 0 0-2 2v23.555a2 2 0 0 0 2 2h32.469a2 2 0 0 0 2-2V43.483a2 2 0 0 0-2-2h-28.796Zm22.313 21.072a2 2 0 0 0 2-2V49.966a2 2 0 0 0-2-2h-19.503a2 2 0 0 0-2 2v10.587a2 2 0 0 0 2 2h19.503ZM86.156 75.521h-3.673a2 2 0 0 0-2 2v23.555a2 2 0 0 0 2 2h32.47a2 2 0 0 0 2-2V77.521a2 2 0 0 0-2-2H86.157Zm22.313 21.071a2 2 0 0 0 2-2V84.005a2 2 0 0 0-2-2H88.967a2 2 0 0 0-2 2v10.587a2 2 0 0 0 2 2h19.502ZM129.109 75.521h-3.673a2 2 0 0 0-2 2v23.555a2 2 0 0 0 2 2h32.469a2 2 0 0 0 2-2V77.521a2 2 0 0 0-2-2h-28.796Zm22.313 21.071a2 2 0 0 0 2-2V84.005a2 2 0 0 0-2-2h-19.503a2 2 0 0 0-2 2v10.587a2 2 0 0 0 2 2h19.503ZM86.156 109.559h-3.673a2 2 0 0 0-2 2v23.555a2 2 0 0 0 2 2h32.47a2 2 0 0 0 2-2v-23.555a2 2 0 0 0-2-2H86.157Zm22.313 21.071a2 2 0 0 0 2-2v-10.587a2 2 0 0 0-2-2H88.967a2 2 0 0 0-2 2v10.587a2 2 0 0 0 2 2h19.502ZM129.109 109.559h-3.673a2 2 0 0 0-2 2v23.555a2 2 0 0 0 2 2h32.469a2 2 0 0 0 2-2v-23.555a2 2 0 0 0-2-2h-28.796Zm22.313 21.071a2 2 0 0 0 2-2v-10.587a2 2 0 0 0-2-2h-19.503a2 2 0 0 0-2 2v10.587a2 2 0 0 0 2 2h19.503Z",
                fill: "#fff",
                fillOpacity: 0.1
            }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", {
                d: "m74 136.303 92.389-26.339V202a4 4 0 0 1-4 4H78a4 4 0 0 1-4-4v-65.697Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", {
                d: "M74 136.316h82.911l9.478-26.352L74 136.316Z",
                fill: color
            }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", {
                d: "M74 136.316h82.911l9.478-26.352L74 136.316Z",
                fill: "#000",
                fillOpacity: 0.15
            }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Face, {
                mood: mood,
                transform: "translate(".concat(figmaFaceXYPosition, ") scale(").concat(figmaFaceScale, ")")
            })
        ]
    }));
};
// src/components/CreditCard.tsx
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var CreditCard = function() {
    var _param = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_PROPS;
    var _param_size = _param.size, size = _param_size === void 0 ? 240 : _param_size, _param_mood = _param.mood, mood = _param_mood === void 0 ? "blissful" : _param_mood, _param_color = _param.color, color = _param_color === void 0 ? "#A6E191" : _param_color, props = _object_without_properties(_param, [
        "size",
        "mood",
        "color"
    ]);
    var figmaFaceScale = getFaceScale(54.33);
    var figmaFaceXYPosition = "93.33 121.1";
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("svg", _object_spread_props(_object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 240 240",
        fill: "none"
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", {
                fill: color,
                d: "M192.959 178.722H48.041c-4.994 0-9.041-4.036-9.041-9.017V70.017C39 65.037 43.047 61 48.04 61h144.92c4.994 0 9.041 4.036 9.041 9.017v99.688c0 4.981-4.047 9.017-9.041 9.017"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", {
                fill: "#000",
                fillRule: "evenodd",
                d: "M183.904 178.722h9.055c4.994 0 9.041-4.036 9.041-9.017V70.017c0-4.98-4.047-9.017-9.041-9.017h-9.055c4.994 0 9.04 4.036 9.04 9.017v99.688c0 4.981-4.046 9.017-9.04 9.017Z",
                clipRule: "evenodd",
                opacity: 0.1
            }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", {
                fill: "#000",
                d: "M39 74.995h163v22.227H39V74.995Z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Face, {
                mood: mood,
                transform: "translate(".concat(figmaFaceXYPosition, ") scale(").concat(figmaFaceScale, ")")
            })
        ]
    }));
};
// src/components/Cyborg.tsx
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var Cyborg = function() {
    var _param = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_PROPS;
    var _param_size = _param.size, size = _param_size === void 0 ? 240 : _param_size, _param_mood = _param.mood, mood = _param_mood === void 0 ? "blissful" : _param_mood, _param_color = _param.color, color = _param_color === void 0 ? "#A6E191" : _param_color, props = _object_without_properties(_param, [
        "size",
        "mood",
        "color"
    ]);
    var figmaFaceScale = getFaceScale(50.24);
    var figmaFaceXYPosition = "94.66 77.2";
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("svg", _object_spread_props(_object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 240 240",
        fill: "none"
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "M27.303 156.086c-.672-.244-1.567-.57-2.157-1.038l-1.619 10.018c-.344 1.643.898 3.105 2.322 3.371 1.648.347 3.112-.888 3.15-2.389l1.518-9.044c-.895-.326-2.095-.511-3.214-.918ZM8.272 166.585l.448.163c1.343.489 2.787.005 3.498-1.252 2.762-4.803 6.786-8.895 11.97-11.301-1.546-1.321-2.402-3.148-2.73-5.035-5.876 2.913-10.977 7.875-14.369 13.712-.63 1.033-.221 2.697 1.183 3.713ZM51.44 123.2l22.783-21.508 5.131 5.403-19.857 19.038-8.058-2.933Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "m30.139 142.723 6.311 6.338c3.746 3.636 9.706 3.28 12.977-.833l10.606-13.818c2.5-3.384 2.251-8.273-.762-11.137l-2.79-2.783c-2.931-3.088-7.895-3.379-11.127-.767l-13.986 10.568c-4.513 2.65-4.975 8.796-1.23 12.432Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
                fill: "#000",
                fillRule: "evenodd",
                d: "m30.139 142.723 6.311 6.338c3.746 3.636 9.706 3.28 12.977-.833l10.606-13.818c2.5-3.384 2.251-8.273-.762-11.137l-2.79-2.783c-2.931-3.088-7.895-3.379-11.127-.767l-13.986 10.568c-4.513 2.65-4.975 8.796-1.23 12.432Z",
                clipRule: "evenodd",
                opacity: 0.2
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "M27.303 156.086c4.697 1.71 9.886-.698 11.59-5.378 1.703-4.681-.724-9.861-5.422-11.57-4.697-1.71-9.886.698-11.59 5.378-1.703 4.68.724 9.86 5.422 11.57Zm184.545 0c.672-.244 1.567-.57 2.158-1.038l1.618 10.018c.344 1.643-.898 3.105-2.322 3.371-1.648.347-3.111-.888-3.151-2.389l-1.517-9.044c.895-.326 2.095-.511 3.214-.918Zm19.031 10.499-.448.163c-1.343.489-2.787.005-3.497-1.252-2.763-4.803-6.787-8.895-11.972-11.301 1.548-1.321 2.404-3.148 2.731-5.035 5.876 2.913 10.977 7.875 14.369 13.712.63 1.033.221 2.697-1.183 3.713ZM187.712 123.2l-22.784-21.508-5.131 5.403 19.857 19.038 8.058-2.933Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "m209.013 142.723-6.312 6.338c-3.746 3.636-9.706 3.28-12.977-.833l-10.606-13.818c-2.499-3.384-2.251-8.273.762-11.137l2.79-2.783c2.932-3.088 7.895-3.379 11.127-.767l13.986 10.568c4.513 2.65 4.976 8.796 1.23 12.432Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
                fill: "#000",
                fillRule: "evenodd",
                d: "m209.013 142.723-6.312 6.338c-3.746 3.636-9.706 3.28-12.977-.833l-10.606-13.818c-2.499-3.384-2.251-8.273.762-11.137l2.79-2.783c2.932-3.088 7.895-3.379 11.127-.767l13.986 10.568c4.513 2.65 4.976 8.796 1.23 12.432Z",
                clipRule: "evenodd",
                opacity: 0.2
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "M211.848 156.086c-4.697 1.71-9.886-.698-11.589-5.378-1.704-4.681.723-9.861 5.421-11.57 4.697-1.71 9.886.698 11.59 5.378 1.703 4.68-.724 9.86-5.422 11.57Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
                fill: color,
                d: "M138.495 166.555h8.317v20.1h-8.317z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "M158.318 200.933c-.832-13.03-7.486-23.288-15.803-23.288s-15.248 10.258-15.803 23.288h31.606Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
                fill: "#000",
                fillRule: "evenodd",
                d: "M158.318 200.933c-.832-13.03-7.486-23.288-15.803-23.288s-15.248 10.258-15.803 23.288h31.606Z",
                clipRule: "evenodd",
                opacity: 0.2
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "M157.763 200.517H126.99c-2.495 0-4.436 1.941-4.436 4.436s1.941 4.436 4.436 4.436h30.773c2.495 0 4.436-1.941 4.436-4.436-.277-2.495-2.218-4.436-4.436-4.436Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
                fill: color,
                d: "M92.751 166.555h8.317v20.1h-8.317z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "M112.573 200.933c-.831-13.03-7.485-23.288-15.802-23.288s-15.249 10.258-15.803 23.288h31.605Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
                fill: "#000",
                fillRule: "evenodd",
                d: "M112.573 200.933c-.831-13.03-7.485-23.288-15.802-23.288s-15.249 10.258-15.803 23.288h31.605Z",
                clipRule: "evenodd",
                opacity: 0.2
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "M112.019 200.517H81.245c-2.495 0-4.436 1.941-4.436 4.436s1.941 4.436 4.436 4.436h30.774c2.495 0 4.436-1.941 4.436-4.436s-1.941-4.436-4.436-4.436Zm-46.498-93.193c-1.085 24.411 1.464 64.531 54.26 64.531 52.779 0 55.344-39.602 54.262-64.212.428-7.837-.045-15.237-.415-21.022-.19-2.967-.353-5.509-.353-7.467 0-30.158-23.95-49.154-53.494-49.154-29.543 0-53.493 18.996-53.493 49.154 0 1.848-.159 4.284-.346 7.152-.371 5.706-.854 13.122-.42 21.018Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
                fill: "#121212",
                fillRule: "evenodd",
                d: "M115.021 171.741c48.146-2.34 50.521-40.255 49.473-64.098.428-7.837-.046-15.237-.416-21.022-.189-2.967-.352-5.509-.352-7.467 0-28.515-21.412-47.052-48.719-48.986a67.574 67.574 0 0 1 4.774-.168c29.544 0 53.494 18.996 53.494 49.154 0 1.958.163 4.5.353 7.466.37 5.786.843 13.186.415 21.023 1.082 24.61-1.483 64.212-54.262 64.212-1.634 0-3.22-.039-4.76-.114Z",
                clipRule: "evenodd",
                opacity: 0.1
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
                fill: "#ECDBCA",
                fillRule: "evenodd",
                d: "M119.4 113.457c40.959 0 40.959-8.499 40.959-28.418 0-19.92-8.614-26.793-40.959-26.793-32.344 0-40.959 6.873-40.959 26.793 0 19.919 0 28.418 40.959 28.418Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("mask", {
                id: "Cyborg_svg__a",
                width: 23,
                height: 14,
                x: 108,
                y: 89,
                maskUnits: "userSpaceOnUse",
                style: {
                    maskType: "luminance"
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M109.247 96.172c-.556-1.22-.884-2.535-.885-3.888 0-.62.264-1.227.723-1.666a2.55 2.55 0 0 1 1.747-.69h17.287c.651 0 1.286.251 1.746.69.461.439.724 1.046.724 1.666-.006 2.03-.728 3.97-1.891 5.643a11.853 11.853 0 0 1-4.803 4 10.732 10.732 0 0 1-4.419.962c-2.384 0-4.557-.811-6.295-2.031-1.743-1.226-3.095-2.858-3.934-4.686Z",
                    clipRule: "evenodd"
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Face, {
                mood: mood,
                transform: "translate(".concat(figmaFaceXYPosition, ") scale(").concat(figmaFaceScale, ")")
            })
        ]
    }));
};
// src/components/File.tsx
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var File = function() {
    var _param = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_PROPS;
    var _param_size = _param.size, size = _param_size === void 0 ? 240 : _param_size, _param_mood = _param.mood, mood = _param_mood === void 0 ? "blissful" : _param_mood, _param_color = _param.color, color = _param_color === void 0 ? "#A6E191" : _param_color, props = _object_without_properties(_param, [
        "size",
        "mood",
        "color"
    ]);
    var figmaFaceScale = getFaceScale(52);
    var figmaFaceXYPosition = "94 123";
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("svg", _object_spread_props(_object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 240 240",
        fill: "none"
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "M85.599 51C78.64 51 73 56.64 73 63.599v113.1c0 6.958 5.641 12.599 12.599 12.599h68.81c6.957 0 12.598-5.641 12.598-12.599V83.151c0-.413-.164-.809-.456-1.1l-30.594-30.595",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", {
                fill: "#000",
                fillRule: "evenodd",
                d: "M135.501 51v20.465c0 6.098 4.943 11.04 11.041 11.04h20.464L135.501 51",
                clipRule: "evenodd",
                opacity: 0.2
            }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", {
                fill: "#000",
                fillRule: "evenodd",
                d: "M167.007 82.506h-8.177c.006.301.023.6.023.903v93.231c0 6.986-5.723 12.648-12.784 12.648h8.217c7.061 0 12.784-5.662 12.784-12.648V83.41c0-.302-.004-.603-.01-.904h-.053Z",
                clipRule: "evenodd",
                opacity: 0.104
            }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Face, {
                mood: mood,
                transform: "translate(".concat(figmaFaceXYPosition, ") scale(").concat(figmaFaceScale, ")")
            })
        ]
    }));
};
// src/components/Folder.tsx
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var Folder = function() {
    var _param = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_PROPS;
    var _param_size = _param.size, size = _param_size === void 0 ? 240 : _param_size, _param_mood = _param.mood, mood = _param_mood === void 0 ? "blissful" : _param_mood, _param_color = _param.color, color = _param_color === void 0 ? "#A6E191" : _param_color, props = _object_without_properties(_param, [
        "size",
        "mood",
        "color"
    ]);
    var figmaFaceScale = getFaceScale(52);
    var figmaFaceXYPosition = "94 116";
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("svg", _object_spread_props(_object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 240 240",
        fill: "none"
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
                fill: color,
                d: "M69.88 82.612c-8.58-.036-11.55 6.564-11.55 12.834-.33 14.19-.33 60.72-.33 60.72 0 6.6 2.97 13.2 10.23 13.49h101.64c8.052.027 12.857-5.669 12.87-13.49v-45.87c0-5.28-.33-14.52-.33-14.52.33-6.6-4.29-12.87-13.53-13.2 0 0-64.35.036-64.35 0 0 0-22.44.036-22.44 0H69.88v.036Z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
                fill: "#000",
                d: "M169.33 82.706c8 0 7 8 7 15v61c0 6-3 11-10 11 3 0 3.54-.05 3.54-.05 8.052.027 12.857-5.669 12.87-13.49v-45.87c0-5.28-.33-14.52-.33-14.52.33-6.6-4.29-12.87-13.08-13.07Z",
                opacity: 0.1
            }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
                fill: color,
                d: "M58.33 95.446v.99c0-10.23 5.94-13.86 11.22-13.695h7.92c-1.32 0 35.97-.165 36.63 0-1.32-1.485-6.141-6.696-8.128-8.702-2.409-2.436-2.835-3.996-6.392-4.003H75.16c-5.296 0-9.57-.66-13.5 3.643-3.79 3.89-3 8.567-3.33 12.527v9.24Z",
                opacity: 0.6
            }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Face, {
                mood: mood,
                transform: "translate(".concat(figmaFaceXYPosition, ") scale(").concat(figmaFaceScale, ")")
            })
        ]
    }));
};
// src/components/Ghost.tsx
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var Ghost = function() {
    var _param = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_PROPS;
    var _param_size = _param.size, size = _param_size === void 0 ? 240 : _param_size, _param_mood = _param.mood, mood = _param_mood === void 0 ? "blissful" : _param_mood, _param_color = _param.color, color = _param_color === void 0 ? "#A6E191" : _param_color, props = _object_without_properties(_param, [
        "size",
        "mood",
        "color"
    ]);
    var figmaFaceScale = getFaceScale(62.06);
    var figmaFaceXYPosition = "89.09 99.3";
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("svg", _object_spread_props(_object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 240 240",
        fill: "none"
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "M118.241 41.032C84.925 42.164 59 74.852 59 112.904v71.716c0 7.632 5.484 13.84 12.224 13.84s12.223-6.208 12.223-13.839c0-2.544 1.828-4.613 4.075-4.613 2.246 0 4.074 2.069 4.074 4.613 0 7.631 5.483 13.839 12.224 13.839 3.265 0 6.334-1.44 8.643-4.053 2.309-2.614 3.58-6.09 3.58-9.786 0-2.55 1.822-4.613 4.075-4.613 2.246 0 4.074 2.069 4.074 4.613 0 7.631 5.484 13.839 12.224 13.839s12.223-6.208 12.223-13.839c0-2.544 1.828-4.613 4.075-4.613 2.246 0 4.074 2.069 4.074 4.613 0 7.631 5.484 13.839 12.224 13.839s12.223-6.208 12.223-13.839v-74.425c0-38.577-28.038-70.35-62.994-69.164Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                fill: "#121212",
                fillOpacity: 0.1,
                fillRule: "evenodd",
                d: "M163.84 197.16c4.163-2.21 7.052-7 7.052-12.539v-74.425c0-35.354-23.548-64.993-54.389-68.786a4.724 4.724 0 0 1 1.738-.378c34.956-1.186 62.994 30.587 62.994 69.164v74.425c0 7.631-5.483 13.839-12.223 13.839-1.848 0-3.6-.466-5.172-1.3Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Face, {
                mood: mood,
                transform: "translate(".concat(figmaFaceXYPosition, ") scale(").concat(figmaFaceScale, ")")
            })
        ]
    }));
};
// src/components/HumanCat.tsx
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var HumanCat = function() {
    var _param = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_PROPS;
    var _param_size = _param.size, size = _param_size === void 0 ? 240 : _param_size, _param_mood = _param.mood, mood = _param_mood === void 0 ? "blissful" : _param_mood, _param_color = _param.color, color = _param_color === void 0 ? "#A6E191" : _param_color, props = _object_without_properties(_param, [
        "size",
        "mood",
        "color"
    ]);
    var figmaFaceScale = getFaceScale(46.29);
    var figmaFaceXYPosition = "93.2 77.66";
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("svg", _object_spread_props(_object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 240 240",
        fill: "none"
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", {
                fill: color,
                d: "M131.512 169.581a6.26 6.26 0 0 1 0-12.52c17.908 0 19.715-7.544 22.994-21.238 2.977-12.425 6.68-27.887 25.461-37.166a6.26 6.26 0 0 1 5.545 11.225c-13.518 6.679-16.099 17.452-18.831 28.858-1.754 7.321-3.567 14.892-8.512 20.794-5.664 6.76-14.383 10.047-26.657 10.047Z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", {
                fill: "#000",
                fillRule: "evenodd",
                d: "M131.512 169.581a6.26 6.26 0 0 1 0-12.52c17.908 0 19.715-7.544 22.994-21.238 2.977-12.425 6.68-27.887 25.461-37.166a6.26 6.26 0 0 1 5.545 11.225c-13.518 6.679-16.099 17.452-18.831 28.858-1.754 7.321-3.567 14.892-8.512 20.794-5.664 6.76-14.383 10.047-26.657 10.047Z",
                clipRule: "evenodd",
                opacity: 0.2
            }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", {
                fill: color,
                d: "m90.362 137.922-15.68 9.445c-4.516 2.719-10.416 1.28-13.152-3.211a9.414 9.414 0 0 1-1.111-7.206 9.464 9.464 0 0 1 4.34-5.875l32.224-19.411-6.62 26.258Zm82.305 6.235c-2.735 4.49-8.635 5.929-13.15 3.211l-16.394-9.876-6.62-26.257 32.936 19.84a9.465 9.465 0 0 1 4.34 5.875c.61 2.47.215 5.03-1.112 7.207Z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", {
                fill: "#000",
                fillRule: "evenodd",
                d: "m90.362 137.922-15.68 9.445c-4.516 2.719-10.416 1.28-13.152-3.211a9.414 9.414 0 0 1-1.111-7.206 9.464 9.464 0 0 1 4.34-5.875l32.224-19.411-6.62 26.258Zm82.305 6.235c-2.735 4.49-8.635 5.929-13.15 3.211l-16.394-9.876-6.62-26.257 32.936 19.84a9.465 9.465 0 0 1 4.34 5.875c.61 2.47.215 5.03-1.112 7.207Z",
                clipRule: "evenodd",
                opacity: 0.15
            }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", {
                fill: color,
                d: "M106.305 193.299c-.635 4.596-4.63 8.062-9.292 8.062-.43 0-.868-.029-1.29-.085-5.129-.697-8.73-5.413-8.027-10.519l4.879-35.774c4.736 5.567 10.676 9.776 17.304 12.37l-3.574 25.946Zm37.752 4.375a9.336 9.336 0 0 1-6.194 3.6 9.902 9.902 0 0 1-1.303.087c-4.659 0-8.652-3.466-9.286-8.061l-3.58-25.946c6.622-2.591 12.557-6.794 17.291-12.353l4.892 35.764a9.221 9.221 0 0 1-1.82 6.909Z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", {
                fill: "#000",
                fillRule: "evenodd",
                d: "M106.305 193.299c-.635 4.596-4.63 8.062-9.292 8.062-.43 0-.868-.029-1.29-.085-5.129-.697-8.73-5.413-8.027-10.519l4.879-35.774c4.736 5.567 10.676 9.776 17.304 12.37l-3.574 25.946Zm37.752 4.375a9.336 9.336 0 0 1-6.194 3.6 9.902 9.902 0 0 1-1.303.087c-4.659 0-8.652-3.466-9.286-8.061l-3.58-25.946c6.622-2.591 12.557-6.794 17.291-12.353l4.892 35.764a9.221 9.221 0 0 1-1.82 6.909Z",
                clipRule: "evenodd",
                opacity: 0.15
            }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", {
                fill: color,
                d: "M117.263 183.469h-.81c-9.246-.032-17.812-4.244-23.502-11.556-5.727-7.359-7.71-16.762-5.442-25.798l8.627-34.371a40.772 40.772 0 0 0 20.722 5.63 40.768 40.768 0 0 0 20.724-5.631l8.627 34.372c2.268 9.037.284 18.439-5.443 25.798-5.69 7.312-14.257 11.524-23.503 11.556Zm21.224-136.514s8.427-9.379 23.802-7.77c2.304.242 4.211 1.913 4.703 4.179 1.379 6.35 2.848 20.13-5.872 33.197l-22.633-29.606Z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", {
                fill: "#121212",
                d: "M138.487 46.955s8.427-9.379 23.802-7.77c2.304.242 4.211 1.913 4.703 4.179 1.379 6.35 2.848 20.13-5.872 33.197l-22.633-29.606Z",
                opacity: 0.1
            }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", {
                fill: color,
                d: "M94.57 46.955s-8.427-9.379-23.801-7.77c-2.306.242-4.212 1.913-4.704 4.179-1.378 6.35-2.848 20.13 5.872 33.197L94.57 46.955Z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", {
                fill: "#121212",
                d: "M153.982 71.793c5.944-8.906 5.955-18.268 5.063-24.202l-.212-.001c-8.943 0-13.913 5.05-13.964 5.106l9.113 19.097Zm-74.908 0c-5.944-8.906-5.954-18.268-5.063-24.202l.214-.001c8.942 0 13.913 5.05 13.963 5.106l-9.114 19.097Z",
                opacity: 0.25
            }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", {
                fill: color,
                d: "M116.699 125.9c30.336 0 54.928-12.845 54.928-35.864 0-23.018-16.025-47.494-54.928-47.494-38.904 0-54.928 24.476-54.928 47.494 0 23.019 24.592 35.864 54.928 35.864Z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", {
                fill: color,
                d: "M64.952 99.891c-3.55-2.302-7.094-3.714-7.094-3.714l2.873-3.287s-10.923.949-8.334-1.643c2.589-2.592 8.208-9.703 8.208-9.703s-6.914 1.296-5.62 0c.857-.857 6.153-3.574 12.024-8.456 1.436-1.194-2.184 5.977-2.829 13.363-.606 6.95 1.836 14.13.772 13.44Zm103.813 0c3.55-2.302 7.094-3.714 7.094-3.714l-2.873-3.287s10.923.949 8.334-1.643c-2.588-2.592-8.207-9.703-8.207-9.703s6.913 1.296 5.619 0c-.856-.857-6.153-3.574-12.023-8.456-1.437-1.194 2.183 5.977 2.828 13.363.607 6.95-1.836 14.13-.772 13.44Z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", {
                fill: "#ECDBCA",
                fillRule: "evenodd",
                d: "M115.841 116.322c22.054 0 39.933-9.286 39.933-25.926s-11.65-34.1-39.933-34.1-39.932 17.46-39.932 34.1 17.878 25.926 39.932 25.926Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Face, {
                mood: mood,
                transform: "translate(".concat(figmaFaceXYPosition, ") scale(").concat(figmaFaceScale, ")")
            })
        ]
    }));
};
// src/components/HumanDinosaur.tsx
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var HumanDinosaur = function() {
    var _param = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_PROPS;
    var _param_size = _param.size, size = _param_size === void 0 ? 240 : _param_size, _param_mood = _param.mood, mood = _param_mood === void 0 ? "blissful" : _param_mood, _param_color = _param.color, color = _param_color === void 0 ? "#A6E191" : _param_color, props = _object_without_properties(_param, [
        "size",
        "mood",
        "color"
    ]);
    var figmaFaceScale = getFaceScale(46.89);
    var figmaFaceXYPosition = "97.66 123.76";
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("svg", _object_spread_props(_object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 240 240",
        fill: "none"
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "M135.802 69.07s3.396-12.178 11.471-12.719c8.075-.54 5.299 20.809 5.299 20.809m-2.286 3.568s8.95-12.496 15.957-9.5c7.007 2.998.256 22.566.256 22.566m-5.054 3.399s12.405-7.388 17.266-2.147c4.861 5.24-8.336 19.579-8.336 19.579m-6.192 4.473s10.646-6.384 14.775-1.927c4.129 4.458-7.23 16.792-7.23 16.792m-4.62 3.072s10.928-1.754 12.839 3.256c1.91 5.011-11.627 11.412-11.627 11.412m-6.431 8.555s11.198-5.647 14.479-1.44c3.282 4.207-4.102 12.984-4.102 12.984",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "M173.198 169.198s11.198-5.647 14.48-1.44c3.282 4.208-4.102 12.984-4.102 12.984",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
                fill: "#121212",
                d: "M135.802 69.07s3.396-12.178 11.471-12.719c8.075-.54 5.299 20.809 5.299 20.809m-2.286 3.568s8.95-12.496 15.957-9.5c7.007 2.998.256 22.566.256 22.566m-5.054 3.399s12.405-7.388 17.266-2.147c4.861 5.24-8.336 19.579-8.336 19.579m-6.192 4.473s10.646-6.384 14.775-1.927c4.129 4.458-7.23 16.792-7.23 16.792m-4.62 3.072s10.928-1.754 12.839 3.256c1.91 5.011-11.627 11.412-11.627 11.412m-6.431 8.555s11.198-5.647 14.479-1.44c3.282 4.207-4.102 12.984-4.102 12.984",
                opacity: 0.25
            }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
                fill: "#121212",
                d: "M173.198 169.198s11.198-5.647 14.48-1.44c3.282 4.208-4.102 12.984-4.102 12.984",
                opacity: 0.25
            }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "M161.147 150.228s11.581 17.934 30.948 25.393c4.373 1.684 3.425 7.18-3.727 7.18H144.57l16.577-32.573Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
                fill: "#121212",
                d: "M161.147 150.228s11.581 17.934 30.948 25.393c4.373 1.684 3.425 7.18-3.727 7.18H144.57l16.577-32.573Z",
                opacity: 0.1
            }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "M120.14 186.71c61.968 0 50.259-58.48 50.259-74.693 0-28.516-22.502-46.48-50.259-46.48-27.758 0-50.26 17.963-50.26 46.48 0 15.489-11.708 74.693 50.26 74.693Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
                fill: "#000",
                fillRule: "evenodd",
                d: "M102.876 99.414a5.212 5.212 0 1 0 0-10.424 5.212 5.212 0 0 0 0 10.424Zm35.179 0a5.212 5.212 0 1 0 0-10.424 5.212 5.212 0 0 0 0 10.424Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
                fill: "#ECDBCA",
                fillRule: "evenodd",
                d: "M120.577 158.384c38.548 0 38.548-7.954 38.548-26.593 0-18.64-8.107-25.071-38.548-25.071-30.44 0-38.548 6.431-38.548 25.071 0 18.639 0 26.593 38.548 26.593Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("mask", {
                id: "HumanDinosaur_svg__a",
                width: 78,
                height: 53,
                x: 82,
                y: 106,
                maskUnits: "userSpaceOnUse",
                style: {
                    maskType: "luminance"
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M120.577 158.384c38.548 0 38.548-7.954 38.548-26.593 0-18.64-8.107-25.071-38.548-25.071-30.44 0-38.548 6.431-38.548 25.071 0 18.639 0 26.593 38.548 26.593Z",
                    clipRule: "evenodd"
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("g", {
                fill: "#fff",
                fillRule: "evenodd",
                clipRule: "evenodd",
                mask: "url(#HumanDinosaur_svg__a)",
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
                        d: "M92.082 161.887s4.326-12.205 7.802-12.205 7.802 12.205 7.802 12.205H92.082Zm15.093 1.625s4.326-12.204 7.802-12.204 7.802 12.204 7.802 12.204h-15.604Z"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
                        d: "M120.228 163.512s4.326-12.204 7.803-12.204c3.476 0 7.802 12.204 7.802 12.204h-15.605Z"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
                        d: "M134.913 161.887s4.326-12.205 7.802-12.205c3.477 0 7.803 12.205 7.803 12.205h-15.605Zm-42.831-55.718s4.326 12.204 7.802 12.204 7.802-12.204 7.802-12.204H92.082Z"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
                        d: "M107.175 104.949s4.326 12.204 7.802 12.204 7.802-12.204 7.802-12.204h-15.604Z"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
                        d: "M120.228 104.949s4.326 12.204 7.803 12.204c3.476 0 7.802-12.204 7.802-12.204h-15.605Z"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
                        d: "M134.913 106.169s4.326 12.204 7.802 12.204c3.477 0 7.803-12.204 7.803-12.204h-15.605Z"
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Face, {
                mood: mood,
                transform: "translate(".concat(figmaFaceXYPosition, ") scale(").concat(figmaFaceScale, ")")
            })
        ]
    }));
};
// src/components/IceCream.tsx
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var IceCream = function() {
    var _param = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_PROPS;
    var _param_size = _param.size, size = _param_size === void 0 ? 240 : _param_size, _param_mood = _param.mood, mood = _param_mood === void 0 ? "blissful" : _param_mood, _param_color = _param.color, color = _param_color === void 0 ? "#A6E191" : _param_color, props = _object_without_properties(_param, [
        "size",
        "mood",
        "color"
    ]);
    var figmaFaceScale = getFaceScale(53.99);
    var figmaFaceXYPosition = "93.38 96.26";
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("svg", _object_spread_props(_object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 240 240",
        fill: "none"
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", {
                fill: "#FCCB7E",
                d: "M121.311 209.66h-3.243c-3.566 0-6.484-2.887-6.484-6.416v-25.662h16.211v25.662c0 3.529-2.918 6.416-6.484 6.416Z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", {
                fill: color,
                d: "M122.163 30h-3.55C95.175 30 76 48.971 76 72.16v92.809c0 6.954 5.697 12.59 12.726 12.59h63.324c7.03 0 12.726-5.636 12.726-12.59V72.16c0-23.189-19.175-42.16-42.613-42.16Z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", {
                fill: "#000",
                fillRule: "evenodd",
                d: "M144.074 177.559h8.18c7.03 0 12.726-5.636 12.726-12.59V72.16c0-23.189-19.174-42.16-42.613-42.16h-3.55c-.776 0-1.548.02-2.315.062 22.373 1.2 40.298 19.677 40.298 42.098v92.809c0 6.954-5.696 12.59-12.726 12.59Z",
                clipRule: "evenodd",
                opacity: 0.1
            }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Face, {
                mood: mood,
                transform: "translate(".concat(figmaFaceXYPosition, ") scale(").concat(figmaFaceScale, ")")
            })
        ]
    }));
};
// src/components/Mug.tsx
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var Mug = function() {
    var _param = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_PROPS;
    var _param_size = _param.size, size = _param_size === void 0 ? 240 : _param_size, _param_mood = _param.mood, mood = _param_mood === void 0 ? "blissful" : _param_mood, _param_color = _param.color, color = _param_color === void 0 ? "#A6E191" : _param_color, props = _object_without_properties(_param, [
        "size",
        "mood",
        "color"
    ]);
    var figmaFaceScale = getFaceScale(53.95);
    var figmaFaceXYPosition = "93.03 107.33";
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("svg", _object_spread_props(_object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 240 240",
        fill: "none"
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "M66.953 91.194H49.379C41.45 91.194 35 97.314 35 104.839c0 17.795 14.127 32.491 32.29 34.588C69.498 154.968 83.53 167 100.503 167h41.538c18.501 0 33.55-14.283 33.55-31.839V77.548c0-2.512-2.146-4.548-4.793-4.548H71.746c-2.646 0-4.793 2.036-4.793 4.548v13.646Zm-.713 9.096v29.896c-12.694-2.157-22.367-12.689-22.367-25.347 0-2.508 2.15-4.549 4.793-4.549H66.24Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("path", {
                fill: "#000",
                fillRule: "evenodd",
                d: "M121.643 73h-.086v94h.086V73Zm42.338 0c2.301 0 4.168 2.036 4.168 4.548v57.613c0 17.556-13.087 31.839-29.175 31.839h2.837c18.627 0 33.78-14.283 33.78-31.839V77.548c0-2.512-2.161-4.548-4.826-4.548h-6.784Z",
                clipRule: "evenodd",
                opacity: 0.1
            }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Face, {
                mood: mood,
                transform: "translate(".concat(figmaFaceXYPosition, ") scale(").concat(figmaFaceScale, ")")
            })
        ]
    }));
};
// src/components/Planet.tsx
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var Planet = function() {
    var _param = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_PROPS;
    var _param_size = _param.size, size = _param_size === void 0 ? 240 : _param_size, _param_mood = _param.mood, mood = _param_mood === void 0 ? "blissful" : _param_mood, _param_color = _param.color, color = _param_color === void 0 ? "#A6E191" : _param_color, props = _object_without_properties(_param, [
        "size",
        "mood",
        "color"
    ]);
    var figmaFaceScale = getFaceScale(66);
    var figmaFaceXYPosition = "87 110";
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("svg", _object_spread_props(_object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 240 240",
        fill: "none"
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", {
                fill: color,
                fillRule: "evenodd",
                d: "M120 187c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z",
                clipRule: "evenodd"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", {
                fill: "#000",
                fillRule: "evenodd",
                d: "M114.5 186.777c1.814.148 3.648.223 5.5.223 37.003 0 67-29.997 67-67s-29.997-67-67-67c-1.852 0-3.686.075-5.5.222C148.93 56.02 176 84.85 176 120c0 35.151-27.07 63.98-61.5 66.777Z",
                clipRule: "evenodd",
                opacity: 0.1
            }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Face, {
                mood: mood,
                transform: "translate(".concat(figmaFaceXYPosition, ") scale(").concat(figmaFaceScale, ")")
            })
        ]
    }));
};
// src/components/SpeechBubble.tsx
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var SpeechBubble = function() {
    var _param = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_PROPS;
    var _param_size = _param.size, size = _param_size === void 0 ? 240 : _param_size, _param_mood = _param.mood, mood = _param_mood === void 0 ? "blissful" : _param_mood, _param_color = _param.color, color = _param_color === void 0 ? "#A6E191" : _param_color, props = _object_without_properties(_param, [
        "size",
        "mood",
        "color"
    ]);
    var figmaFaceScale = getFaceScale(56.77);
    var figmaFaceXYPosition = "91.61 108.57";
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("svg", _object_spread_props(_object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 240 240",
        fill: "none"
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", {
                fill: color,
                d: "M199.986 85.631c-.002-9.147-8.202-16.633-18.227-16.631l-123.536.004C48.2 69.004 40 76.49 40 85.637v67.402l.044-.007c.323 2.659 2.835 16.71 19.816 16.71h30.48l-.084 18.618s.069 1.555.417 1.998c.348.444 1.225 1.523 3.203 1.623 1.978.1 2.01-.228 2.36-.267.35-.038 5.519-3.611 5.519-3.611l25.756-18.361s51.382.524 54.821 0c6.621-1.009 17.654-3.025 17.654-17.142V85.632Z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", {
                fill: "#121212",
                d: "M182.364 169.191c6.608-1.003 17.622-3.009 17.622-17.048V85.54c-.002-9.097-8.188-16.542-18.195-16.54h-8.341c9.958.052 18.084 7.476 18.086 16.54v66.603c0 14.039-11.014 16.045-17.622 17.048-2.012.305-12.396.424-26.397.443 18.144.02 32.448-.079 34.847-.443Z",
                opacity: 0.07
            }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Face, {
                mood: mood,
                transform: "translate(".concat(figmaFaceXYPosition, ") scale(").concat(figmaFaceScale, ")")
            })
        ]
    }));
};
export { Astronaut, Backpack, Browser, Cat, Chocolate, CreditCard, Cyborg, DEFAULT_PROPS, File, Folder, Ghost, HumanCat, HumanDinosaur, IceCream, MOODS, Mug, PROPS_DATA, Planet, SpeechBubble }; /*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ 
