import {
  computed,
  inject,
  isRef,
  onUnmounted,
  provide,
  ref,
  shallowRef,
  watch,
  watchEffect
} from "./chunk-GQRJDRKQ.js";

// ../node_modules/.pnpm/vue-request@2.0.4_@vue+composition-api@1.7.2_vue@3.5.4_typescript@5.6.2___vue@3.5.4_typescript@5.6.2_/node_modules/vue-request/dist/index.es.js
var GLOBAL_OPTIONS = {};
var GLOBAL_OPTIONS_PROVIDE_KEY = Symbol("GLOBAL_OPTIONS_PROVIDE_KEY");
var setGlobalOptions = (config) => {
  Object.keys(config).forEach((key) => {
    GLOBAL_OPTIONS[key] = config[key];
  });
};
var getGlobalOptions = () => {
  return GLOBAL_OPTIONS;
};
var definePlugin = (options) => {
  return options;
};
var objectToString = Object.prototype.toString;
var toTypeString = (val) => objectToString.call(val);
var isPlainObject = (val) => toTypeString(val) === "[object Object]";
var isArray = (val) => Array.isArray(val);
var isObject = (val) => val !== null && typeof val === "object";
var isFunction = (fn) => fn instanceof Function;
var isNil = (val) => val === null || val === void 0;
var isServer = typeof window === "undefined";
var isDocumentVisibility = () => {
  var _window$document;
  if (isServer || isNil((_window$document = window.document) === null || _window$document === void 0 ? void 0 : _window$document.visibilityState)) return true;
  return window.document.visibilityState === "visible";
};
var isOnline = () => {
  var _ref, _window$navigator;
  return (_ref = !isServer && ((_window$navigator = window.navigator) === null || _window$navigator === void 0 ? void 0 : _window$navigator.onLine)) !== null && _ref !== void 0 ? _ref : true;
};
var resolvedPromise = () => new Promise(() => {
});
var get = function(source, path) {
  let defaultValue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
  const paths = path.replace(/\[(\d+)\]/g, ".$1").split(".");
  let result = source;
  for (const p of paths) {
    result = Object(result)[p];
    if (result === void 0) {
      return defaultValue;
    }
  }
  return result;
};
function omit(object, keys) {
  const result = Object.assign({}, object);
  for (const key of keys) {
    delete result[key];
  }
  return result;
}
var warning = function(message) {
  let throwError = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const msg = `Warning: [vue-request] ${message}`;
  if (throwError) {
    return new Error(msg);
  } else {
    console.error(msg);
  }
};
var refToRaw = (value) => {
  return isRef(value) ? value.value : value;
};
var shallowCopy = (value) => {
  if (isObject(value)) {
    return Object.assign(isArray(value) ? [] : {}, value);
  } else {
    return value;
  }
};
var CACHE_MAP = /* @__PURE__ */ new Map();
var getCache = (cacheKey) => {
  if (isNil(cacheKey)) return;
  const data = CACHE_MAP.get(cacheKey);
  return data;
};
var setCache = (cacheKey, cacheTime, data) => {
  const oldCache = CACHE_MAP.get(cacheKey);
  if (oldCache !== null && oldCache !== void 0 && oldCache.timer) {
    clearTimeout(oldCache.timer);
  }
  const timer = setTimeout(() => CACHE_MAP.delete(cacheKey), cacheTime);
  CACHE_MAP.set(cacheKey, {
    ...data,
    timer
  });
};
var clearCache = (cacheKey) => {
  if (cacheKey) {
    var _CACHE_MAP$get;
    const timer = (_CACHE_MAP$get = CACHE_MAP.get(cacheKey)) === null || _CACHE_MAP$get === void 0 ? void 0 : _CACHE_MAP$get.timer;
    timer && clearTimeout(timer);
    CACHE_MAP.delete(cacheKey);
  } else {
    CACHE_MAP.forEach((i) => i.timer && clearTimeout(i.timer));
    CACHE_MAP.clear();
  }
};
function debounce(func, wait, options) {
  let lastArgs, lastThis, maxWait, result, timerId, lastCallTime;
  let lastInvokeTime = 0;
  let leading = false;
  let maxing = false;
  let trailing = true;
  const useRAF = !wait && wait !== 0 && typeof window.requestAnimationFrame === "function";
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  wait = +wait || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    const args = lastArgs;
    const thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function startTimer(pendingFunc, wait2) {
    if (useRAF) {
      window.cancelAnimationFrame(timerId);
      return window.requestAnimationFrame(pendingFunc);
    }
    return setTimeout(pendingFunc, wait2);
  }
  function cancelTimer(id) {
    if (useRAF) {
      return window.cancelAnimationFrame(id);
    }
    clearTimeout(id);
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = startTimer(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;
    return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = startTimer(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      cancelTimer(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(Date.now());
  }
  function pending() {
    return timerId !== void 0;
  }
  function debounced() {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    lastArgs = args;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        timerId = startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = startTimer(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  debounced.pending = pending;
  return debounced;
}
function baseMerge(origin, target) {
  for (const key in target) {
    if (target[key] === void 0) {
      continue;
    }
    if (!isObject(target[key]) || // `target[key]` is not an object
    !isObject(origin[key]) || // `target[key]` is not an object
    !(key in origin)) {
      origin[key] = target[key];
      continue;
    }
    if (isPlainObject(target[key]) || isArray(target[key])) {
      baseMerge(origin[key], target[key]);
    }
  }
}
function merge(origin) {
  const result = Object.assign({}, origin);
  for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    others[_key - 1] = arguments[_key];
  }
  if (!others.length) return result;
  for (const item of others) {
    baseMerge(result, item);
  }
  return result;
}
function throttle(func, wait, options) {
  let leading = true;
  let trailing = true;
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    leading,
    trailing,
    maxWait: wait
  });
}
var useDebouncePlugin = definePlugin((queryInstance, _ref) => {
  let {
    debounceInterval,
    debounceOptions,
    manual
  } = _ref;
  const initialAutoRunFlag = ref(false);
  const debouncedRun = ref();
  const debounceOptionsRef = computed(() => debounceOptions);
  const debounceIntervalRef = computed(() => refToRaw(debounceInterval));
  const originRunRef = ref(queryInstance.context.runAsync);
  if (!manual) {
    initialAutoRunFlag.value = true;
  }
  watchEffect((onInvalidate) => {
    if (isNil(debounceIntervalRef.value)) return;
    debouncedRun.value = debounce((callback) => callback(), debounceIntervalRef.value, debounceOptionsRef.value);
    queryInstance.context.runAsync = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return new Promise((resolve, reject) => {
        if (initialAutoRunFlag.value) {
          initialAutoRunFlag.value = false;
          originRunRef.value(...args).then(resolve).catch(reject);
        } else {
          debouncedRun.value(() => {
            originRunRef.value(...args).then(resolve).catch(reject);
          });
        }
      });
    };
    onInvalidate(() => {
      var _debouncedRun$value;
      (_debouncedRun$value = debouncedRun.value) === null || _debouncedRun$value === void 0 ? void 0 : _debouncedRun$value.cancel();
      queryInstance.context.runAsync = originRunRef.value;
    });
  });
  return {
    onCancel() {
      var _debouncedRun$value2;
      (_debouncedRun$value2 = debouncedRun.value) === null || _debouncedRun$value2 === void 0 ? void 0 : _debouncedRun$value2.cancel();
    }
  };
});
var useErrorRetryPlugin = definePlugin((queryInstance, _ref) => {
  let {
    errorRetryCount = 0,
    errorRetryInterval = 0
  } = _ref;
  const retryTimer = ref();
  const retriedCount = ref(0);
  const errorRetryCountRef = computed(() => refToRaw(errorRetryCount));
  const errorRetryIntervalRef = computed(() => refToRaw(errorRetryInterval));
  let isRetrying = false;
  const resetRetriedCount = () => {
    retriedCount.value = 0;
  };
  const actualErrorRetryInterval = computed(() => {
    if (errorRetryIntervalRef.value) return errorRetryIntervalRef.value;
    const baseTime = 1e3;
    const minCoefficient = 1;
    const maxCoefficient = 9;
    const coefficient = Math.floor(Math.random() * 2 ** Math.min(retriedCount.value, maxCoefficient) + minCoefficient);
    return baseTime * coefficient;
  });
  const errorRetryHooks = () => {
    let timerId;
    const isInfiniteRetry = errorRetryCountRef.value === -1;
    const hasRetryCount = retriedCount.value < errorRetryCountRef.value;
    if (isInfiniteRetry || hasRetryCount) {
      if (!isInfiniteRetry) retriedCount.value += 1;
      timerId = setTimeout(() => {
        isRetrying = true;
        queryInstance.context.refresh();
      }, actualErrorRetryInterval.value);
    }
    return () => timerId && clearTimeout(timerId);
  };
  const clearTimer = () => {
    if (retryTimer.value) {
      retryTimer.value();
    }
  };
  return {
    onBefore() {
      if (!isRetrying) {
        resetRetriedCount();
      }
      isRetrying = false;
      clearTimer();
    },
    onSuccess() {
      resetRetriedCount();
    },
    onError() {
      retryTimer.value = errorRetryHooks();
    },
    onCancel() {
      resetRetriedCount();
      clearTimer();
    }
  };
});
var useReadyPlugin = definePlugin((queryInstance, _ref) => {
  let {
    ready = ref(true),
    manual,
    defaultParams = []
  } = _ref;
  watch(ready, (val) => {
    if (!manual && val) {
      queryInstance.context.run(...defaultParams);
    }
  }, {
    flush: "sync"
  });
  return {
    onBefore() {
      const readyFlag = isFunction(ready) ? ready() : ready.value;
      if (!readyFlag) {
        queryInstance.loading.value = false;
        return {
          isBreak: true
        };
      }
    }
  };
});
var useRefreshDepsPlugin = definePlugin((queryInstance, _ref) => {
  let {
    refreshDeps,
    refreshDepsAction,
    manual
  } = _ref;
  if (refreshDeps === void 0 || isArray(refreshDeps) && refreshDeps.length === 0) return {};
  const deps = isArray(refreshDeps) ? refreshDeps : [refreshDeps];
  watch(deps, () => {
    if (refreshDepsAction) {
      refreshDepsAction();
    } else {
      !manual && queryInstance.context.refresh();
    }
  });
  return {};
});
var useThrottlePlugin = definePlugin((queryInstance, _ref) => {
  let {
    throttleInterval,
    throttleOptions
  } = _ref;
  const throttledRun = ref();
  const throttleIntervalRef = computed(() => refToRaw(throttleInterval));
  const throttleOptionsRef = computed(() => throttleOptions);
  const originRunRef = ref(queryInstance.context.runAsync);
  watchEffect((onInvalidate) => {
    if (isNil(throttleInterval)) return {};
    throttledRun.value = throttle((callback) => callback(), throttleIntervalRef.value, throttleOptionsRef.value);
    queryInstance.context.runAsync = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return new Promise((resolve, reject) => {
        throttledRun.value(() => {
          originRunRef.value(...args).then(resolve).catch(reject);
        });
      });
    };
    onInvalidate(() => {
      var _throttledRun$value;
      (_throttledRun$value = throttledRun.value) === null || _throttledRun$value === void 0 ? void 0 : _throttledRun$value.cancel();
      queryInstance.context.runAsync = originRunRef.value;
    });
  });
  return {
    onCancel() {
      var _throttledRun$value2;
      (_throttledRun$value2 = throttledRun.value) === null || _throttledRun$value2 === void 0 ? void 0 : _throttledRun$value2.cancel();
    }
  };
});
var setStateBind = (oldState, publicCb) => {
  return (newState) => {
    Object.keys(newState).forEach((key) => {
      oldState[key].value = newState[key];
    });
    publicCb.forEach((fun) => fun(oldState));
  };
};
var composeMiddleware = (middleArray, hook) => {
  return () => {
    let next = hook;
    for (let i = middleArray.length; i-- > 0; ) {
      next = middleArray[i](next);
    }
    return next();
  };
};
var createQuery = (service, config, initialState) => {
  var _initialState$loading, _initialState$data;
  const {
    initialData,
    onSuccess,
    onError,
    onBefore,
    onAfter
  } = config;
  const loading = ref((_initialState$loading = initialState === null || initialState === void 0 ? void 0 : initialState.loading) !== null && _initialState$loading !== void 0 ? _initialState$loading : false);
  const data = shallowRef((_initialState$data = initialState === null || initialState === void 0 ? void 0 : initialState.data) !== null && _initialState$data !== void 0 ? _initialState$data : initialData);
  const error = shallowRef(initialState === null || initialState === void 0 ? void 0 : initialState.error);
  const params = ref(initialState === null || initialState === void 0 ? void 0 : initialState.params);
  const plugins = ref([]);
  const status = shallowRef("pending");
  const context = {};
  const setState = setStateBind({
    status,
    loading,
    data,
    error,
    params
  }, []);
  const emit = function(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (event === "onQuery") {
      const queryFn = plugins.value.map((i) => i.onQuery).filter(Boolean);
      return {
        servicePromise: composeMiddleware(queryFn, args[0])()
      };
    } else {
      const res = plugins.value.map((i) => {
        var _i$event;
        return (_i$event = i[event]) === null || _i$event === void 0 ? void 0 : _i$event.call(i, ...args);
      });
      return Object.assign({}, ...res);
    }
  };
  const count = ref(0);
  context.runAsync = async function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    setState({
      loading: true,
      params: args,
      status: "pending"
    });
    count.value += 1;
    const currentCount = count.value;
    const {
      isBreak,
      breakResult = resolvedPromise()
    } = emit("onBefore", args);
    if (isBreak) {
      setState({
        status: "settled"
      });
      return breakResult;
    }
    onBefore === null || onBefore === void 0 ? void 0 : onBefore(args);
    try {
      const serviceWrapper = () => new Promise((resolve) => resolve(service(...params.value)));
      let {
        servicePromise
      } = emit("onQuery", serviceWrapper);
      if (!servicePromise) {
        servicePromise = serviceWrapper();
      }
      const res = await servicePromise;
      if (currentCount !== count.value) return resolvedPromise();
      setState({
        data: res,
        loading: false,
        error: void 0,
        status: "settled"
      });
      emit("onSuccess", res, args);
      onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(res, args);
      if (currentCount === count.value) {
        emit("onAfter", args, res, void 0);
      }
      onAfter === null || onAfter === void 0 ? void 0 : onAfter(args);
      return res;
    } catch (error2) {
      if (currentCount !== count.value) return resolvedPromise();
      setState({
        loading: false,
        error: error2,
        status: "settled"
      });
      emit("onError", error2, args);
      onError === null || onError === void 0 ? void 0 : onError(error2, args);
      if (currentCount === count.value) {
        emit("onAfter", args, void 0, error2);
      }
      onAfter === null || onAfter === void 0 ? void 0 : onAfter(args);
      throw error2;
    }
  };
  context.run = function() {
    context.runAsync(...arguments).catch((error2) => {
      if (!onError) {
        console.error(error2);
      }
    });
  };
  context.cancel = () => {
    count.value += 1;
    setState({
      loading: false
    });
    emit("onCancel");
  };
  context.refresh = () => {
    context.run(...params.value || []);
  };
  context.refreshAsync = () => {
    return context.runAsync(...params.value || []);
  };
  context.mutate = (x) => {
    const mutateData = isFunction(x) ? x(data.value) : x;
    const _mutateData = shallowCopy(mutateData);
    setState({
      data: _mutateData
    });
    emit("onMutate", _mutateData);
  };
  return {
    status,
    loading,
    data,
    error,
    params,
    plugins,
    context
  };
};
function useQuery(service) {
  let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let plugins = arguments.length > 2 ? arguments[2] : void 0;
  const injectedGlobalOptions = inject(GLOBAL_OPTIONS_PROVIDE_KEY, {});
  const config = {
    ...getGlobalOptions(),
    ...injectedGlobalOptions,
    ...options
  };
  const {
    manual = false,
    defaultParams = []
  } = config;
  const queryInstance = createQuery(service, config);
  queryInstance.plugins.value = plugins.map((i) => i(queryInstance, config));
  if (!manual) {
    const params = queryInstance.params.value || defaultParams;
    queryInstance.context.run(...params);
  }
  onUnmounted(() => {
    queryInstance.context.cancel();
  });
  return {
    loading: queryInstance.loading,
    data: queryInstance.data,
    error: queryInstance.error,
    params: queryInstance.params,
    cancel: queryInstance.context.cancel,
    refresh: queryInstance.context.refresh,
    refreshAsync: queryInstance.context.refreshAsync,
    mutate: queryInstance.context.mutate,
    run: queryInstance.context.run,
    runAsync: queryInstance.context.runAsync
  };
}
function useLoadMore(service, options) {
  const {
    isNoMore,
    ...restOptions
  } = options !== null && options !== void 0 ? options : {};
  const data = shallowRef();
  const dataList = computed(() => {
    var _data$value;
    return ((_data$value = data.value) === null || _data$value === void 0 ? void 0 : _data$value.list) || [];
  });
  const loadingMore = ref(false);
  const isTriggerByLoadMore = ref(false);
  const count = ref(0);
  const {
    runAsync,
    run,
    cancel: _cancel,
    ...rest
  } = useQuery(async (lastData) => {
    const currentCount = count.value;
    const currentData = await service(lastData);
    if (currentCount === count.value) {
      if (lastData) {
        data.value = {
          ...currentData,
          list: [...lastData.list, ...currentData.list]
        };
      } else {
        data.value = currentData;
      }
    }
    return currentData;
  }, {
    ...restOptions,
    defaultParams: [],
    refreshDepsAction: () => {
      if (restOptions !== null && restOptions !== void 0 && restOptions.refreshDepsAction) {
        restOptions.refreshDepsAction();
      } else {
        refresh();
      }
    },
    onError: (error) => {
      var _restOptions$onError;
      restOptions === null || restOptions === void 0 ? void 0 : (_restOptions$onError = restOptions.onError) === null || _restOptions$onError === void 0 ? void 0 : _restOptions$onError.call(restOptions, error);
    },
    onSuccess: (data2) => {
      var _restOptions$onSucces;
      restOptions === null || restOptions === void 0 ? void 0 : (_restOptions$onSucces = restOptions.onSuccess) === null || _restOptions$onSucces === void 0 ? void 0 : _restOptions$onSucces.call(restOptions, data2);
    },
    onBefore: () => {
      var _restOptions$onBefore;
      count.value += 1;
      if (isTriggerByLoadMore.value) {
        isTriggerByLoadMore.value = false;
        loadingMore.value = true;
      }
      restOptions === null || restOptions === void 0 ? void 0 : (_restOptions$onBefore = restOptions.onBefore) === null || _restOptions$onBefore === void 0 ? void 0 : _restOptions$onBefore.call(restOptions);
    },
    onAfter: () => {
      var _restOptions$onAfter;
      loadingMore.value = false;
      isTriggerByLoadMore.value = false;
      restOptions === null || restOptions === void 0 ? void 0 : (_restOptions$onAfter = restOptions.onAfter) === null || _restOptions$onAfter === void 0 ? void 0 : _restOptions$onAfter.call(restOptions);
    }
  }, [useErrorRetryPlugin, useDebouncePlugin, useThrottlePlugin, useRefreshDepsPlugin, useReadyPlugin]);
  const noMore = computed(() => {
    return isNoMore && isFunction(isNoMore) ? isNoMore(data.value) : false;
  });
  const loadMore = () => {
    loadMoreAsync().catch(() => {
    });
  };
  const loadMoreAsync = () => {
    if (noMore.value) {
      return Promise.reject(warning("No more data. You need to ignore this error by checking if `noMore` is false before calling `loadMoreAsync`", true));
    }
    isTriggerByLoadMore.value = true;
    return runAsync(data.value);
  };
  const refresh = () => run();
  const refreshAsync = () => runAsync();
  const cancel = () => {
    count.value += 1;
    _cancel();
    loadingMore.value = false;
  };
  const mutate = (x) => {
    const mutateData = isFunction(x) ? x(data.value) : x;
    const _mutateData = shallowCopy(mutateData);
    data.value = _mutateData;
  };
  return {
    data,
    dataList,
    loadingMore,
    noMore,
    cancel,
    mutate,
    refresh,
    refreshAsync,
    loadMore,
    loadMoreAsync,
    ...omit(rest, ["refresh", "refreshAsync", "mutate", "params", "data"])
  };
}
var cacheQuery = /* @__PURE__ */ new Map();
var setCacheQuery = (cacheKey, query) => {
  cacheQuery.set(cacheKey, query);
  query.then((res) => {
    cacheQuery.delete(cacheKey);
    return res;
  }).catch(() => {
    cacheQuery.delete(cacheKey);
  });
};
var getCacheQuery = (cacheKey) => {
  return cacheQuery.get(cacheKey);
};
var listeners = /* @__PURE__ */ new Map();
var trigger = (key, data) => {
  if (listeners.has(key)) {
    listeners.get(key).forEach((item) => item(data));
  }
};
var subscribe = (key, listener) => {
  if (!listeners.has(key)) {
    listeners.set(key, [listener]);
  } else {
    listeners.get(key).push(listener);
  }
  return () => {
    const index = listeners.get(key).indexOf(listener);
    listeners.get(key).splice(index, 1);
  };
};
var useCachePlugin = definePlugin((queryInstance, _ref) => {
  let {
    cacheKey: customCacheKey,
    cacheTime = 6e5,
    staleTime = 0,
    getCache: customGetCache,
    setCache: customSetCache
  } = _ref;
  if (!customCacheKey) return {};
  const cacheKey = isFunction(customCacheKey) ? customCacheKey : () => customCacheKey;
  const unSubscribe = ref(() => {
  });
  let currentQuery;
  const _getCache = (key) => {
    if (customGetCache) {
      return customGetCache(key);
    } else {
      return getCache(key);
    }
  };
  const _setCache = (key, time, cacheData) => {
    if (customSetCache) {
      customSetCache(key, cacheData);
    } else {
      setCache(key, time, cacheData);
    }
    trigger(key, cacheData.data);
  };
  const isFresh = (time) => staleTime === -1 || time + staleTime > (/* @__PURE__ */ new Date()).getTime();
  const hasProp = (object, prop) => Object.prototype.hasOwnProperty.call(object, prop);
  const subscribeCache = (params) => {
    const _cacheKey2 = cacheKey(params);
    return subscribe(_cacheKey2, (data) => {
      queryInstance.data.value = data;
    });
  };
  const _cacheKey = cacheKey();
  const cache = _getCache(_cacheKey);
  if (cache && hasProp(cache, "data")) {
    queryInstance.data.value = cache.data;
    queryInstance.params.value = cache.params;
  }
  if (_cacheKey) {
    unSubscribe.value = subscribeCache();
  }
  onUnmounted(() => {
    unSubscribe.value();
  });
  return {
    onBefore(params) {
      const _cacheKey2 = cacheKey(params);
      const cache2 = _getCache(_cacheKey2);
      if (!cache2 || !hasProp(cache2, "data")) {
        return {};
      }
      if (isFresh(cache2.time)) {
        queryInstance.data.value = cache2.data;
        queryInstance.loading.value = false;
        return {
          isBreak: true,
          breakResult: cache2.data
        };
      } else {
        queryInstance.data.value = cache2.data;
      }
    },
    onQuery(service) {
      const params = queryInstance.params.value;
      const _cacheKey2 = cacheKey(params);
      let servicePromise = getCacheQuery(_cacheKey2);
      if (servicePromise && servicePromise !== currentQuery) {
        return () => servicePromise;
      }
      servicePromise = service();
      currentQuery = servicePromise;
      setCacheQuery(_cacheKey2, servicePromise);
      return () => servicePromise;
    },
    onSuccess(data, params) {
      const _cacheKey2 = cacheKey(params);
      if (_cacheKey2) {
        unSubscribe.value();
        _setCache(_cacheKey2, cacheTime, {
          data,
          params,
          time: (/* @__PURE__ */ new Date()).getTime()
        });
        unSubscribe.value = subscribeCache(params);
      }
    },
    onMutate(data) {
      const _cacheKey2 = cacheKey(queryInstance.params.value);
      if (_cacheKey2) {
        unSubscribe.value();
        _setCache(_cacheKey2, cacheTime, {
          data,
          params: queryInstance.params.value,
          time: (/* @__PURE__ */ new Date()).getTime()
        });
        unSubscribe.value = subscribeCache(queryInstance.params.value);
      }
    }
  };
});
function setTimeoutPromise(duration) {
  let timerId, stop;
  class Timer extends Promise {
    constructor(fn) {
      super(fn);
      this.cancel = () => {
        stop();
        clearTimeout(timerId);
      };
    }
  }
  return new Timer((resolve) => {
    stop = resolve;
    timerId = setTimeout(stop, duration);
  });
}
function getCurrentTime() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var useLoadingDelayPlugin = definePlugin((queryInstance, _ref) => {
  let {
    loadingDelay = 0,
    loadingKeep = 0
  } = _ref;
  const delayLoadingTimer = ref(() => {
  });
  const loadingDelayRef = computed(() => refToRaw(loadingDelay));
  const loadingKeepRef = computed(() => refToRaw(loadingKeep));
  let startTime = 0;
  let timeoutPromise = {};
  const delayLoading = () => {
    let timerId;
    if (loadingDelayRef.value) {
      timerId = setTimeout(() => {
        if (queryInstance.status.value === "pending") {
          queryInstance.loading.value = true;
        }
      }, loadingDelayRef.value);
    }
    return () => timerId && clearTimeout(timerId);
  };
  return {
    onBefore() {
      queryInstance.loading.value = !loadingDelayRef.value;
      delayLoadingTimer.value();
      delayLoadingTimer.value = delayLoading();
      startTime = getCurrentTime();
    },
    onQuery(service) {
      if (!loadingKeepRef.value) return () => service();
      timeoutPromise = setTimeoutPromise(loadingKeepRef.value + loadingDelayRef.value);
      const _service = async () => {
        try {
          const res = await service();
          if (getCurrentTime() - startTime <= loadingDelayRef.value) {
            timeoutPromise.cancel();
          }
          return Promise.resolve(res);
        } catch (error) {
          if (getCurrentTime() - startTime <= loadingDelayRef.value) {
            timeoutPromise.cancel();
          }
          return Promise.reject(error);
        }
      };
      const servicePromise = Promise.allSettled([_service(), timeoutPromise]).then((res) => {
        const result = res[0];
        if (result.status === "fulfilled") {
          return result.value;
        } else {
          return Promise.reject(result.reason);
        }
      });
      return () => servicePromise;
    },
    onCancel() {
      delayLoadingTimer.value();
    },
    onAfter() {
      delayLoadingTimer.value();
    }
  };
});
var _window;
var FOCUS_LISTENER = /* @__PURE__ */ new Set();
var VISIBLE_LISTENER = /* @__PURE__ */ new Set();
var RECONNECT_LISTENER = /* @__PURE__ */ new Set();
var subscriber = (listenerType, event) => {
  let listeners2;
  switch (listenerType) {
    case "FOCUS_LISTENER":
      listeners2 = FOCUS_LISTENER;
      break;
    case "RECONNECT_LISTENER":
      listeners2 = RECONNECT_LISTENER;
      break;
    case "VISIBLE_LISTENER":
      listeners2 = VISIBLE_LISTENER;
      break;
  }
  if (listeners2.has(event)) return;
  listeners2.add(event);
  return () => {
    listeners2.delete(event);
  };
};
var observer = (listeners2) => {
  listeners2.forEach((event) => {
    event();
  });
};
if (!isServer && (_window = window) !== null && _window !== void 0 && _window.addEventListener) {
  window.addEventListener("visibilitychange", () => {
    if (isDocumentVisibility()) {
      observer(VISIBLE_LISTENER);
    }
  }, false);
  window.addEventListener("focus", () => observer(FOCUS_LISTENER), false);
  window.addEventListener("online", () => observer(RECONNECT_LISTENER), false);
}
var usePollingPlugin = definePlugin((queryInstance, _ref) => {
  let {
    pollingInterval,
    pollingWhenHidden = false,
    pollingWhenOffline = false,
    errorRetryCount = 0
  } = _ref;
  const pollingTimer = ref();
  const stopPollingWhenHiddenOrOffline = ref(false);
  const pollingIntervalRef = computed(() => refToRaw(pollingInterval));
  const errorRetryCountRef = computed(() => refToRaw(errorRetryCount));
  const unsubscribeList = [];
  const addUnsubscribeList = (event) => {
    event && unsubscribeList.push(event);
  };
  const isKeepPolling = () => {
    return (
      // pollingWhenHidden = true or pollingWhenHidden = false and document is visibility
      (pollingWhenHidden || isDocumentVisibility()) && // pollingWhenOffline = true or pollingWhenOffline = false and is online
      (pollingWhenOffline || isOnline())
    );
  };
  const polling = (pollingFunc) => {
    if (queryInstance.error.value && errorRetryCountRef.value !== 0) return;
    let timerId;
    if (!isNil(pollingIntervalRef.value) && pollingIntervalRef.value >= 0) {
      if (isKeepPolling()) {
        timerId = setTimeout(pollingFunc, pollingIntervalRef.value);
      } else {
        stopPollingWhenHiddenOrOffline.value = true;
        return;
      }
    }
    return () => timerId && clearTimeout(timerId);
  };
  const rePolling = () => {
    if (stopPollingWhenHiddenOrOffline.value && isKeepPolling()) {
      queryInstance.context.refresh();
      stopPollingWhenHiddenOrOffline.value = false;
    }
  };
  watch(pollingIntervalRef, () => {
    if (pollingTimer.value) {
      pollingTimer.value();
      pollingTimer.value = polling(() => queryInstance.context.refresh());
    }
  });
  if (!pollingWhenHidden) {
    addUnsubscribeList(subscriber("VISIBLE_LISTENER", rePolling));
  }
  if (!pollingWhenOffline) {
    addUnsubscribeList(subscriber("RECONNECT_LISTENER", rePolling));
  }
  onUnmounted(() => {
    unsubscribeList.forEach((unsubscribe) => unsubscribe());
  });
  return {
    onBefore() {
      var _pollingTimer$value;
      (_pollingTimer$value = pollingTimer.value) === null || _pollingTimer$value === void 0 ? void 0 : _pollingTimer$value.call(pollingTimer);
    },
    onCancel() {
      var _pollingTimer$value2;
      (_pollingTimer$value2 = pollingTimer.value) === null || _pollingTimer$value2 === void 0 ? void 0 : _pollingTimer$value2.call(pollingTimer);
    },
    onAfter() {
      pollingTimer.value = polling(() => queryInstance.context.refresh());
    }
  };
});
var limitTrigger = (fn, timeInterval) => {
  let running = false;
  return function() {
    if (running) return;
    running = true;
    fn(...arguments);
    setTimeout(() => {
      running = false;
    }, timeInterval);
  };
};
var useRefreshOnWindowFocus = definePlugin((queryInstance, _ref) => {
  let {
    refreshOnWindowFocus = false,
    refocusTimespan = 5e3
  } = _ref;
  const refreshOnWindowFocusRef = computed(() => refToRaw(refreshOnWindowFocus));
  const refocusTimespanRef = computed(() => refToRaw(refocusTimespan));
  const unsubscribeList = [];
  const addUnsubscribeList = (event) => {
    event && unsubscribeList.push(event);
  };
  const unsubscribe = () => {
    unsubscribeList.forEach((fn) => fn());
  };
  watchEffect(() => {
    unsubscribe();
    if (refreshOnWindowFocusRef.value) {
      const limitRefresh = limitTrigger(queryInstance.context.refresh, refocusTimespanRef.value);
      addUnsubscribeList(subscriber("VISIBLE_LISTENER", limitRefresh));
      addUnsubscribeList(subscriber("FOCUS_LISTENER", limitRefresh));
    }
  });
  onUnmounted(() => {
    unsubscribe();
  });
  return {};
});
function useRequest(service, options, plugins) {
  return useQuery(service, options, [...plugins || [], useLoadingDelayPlugin, useErrorRetryPlugin, useDebouncePlugin, usePollingPlugin, useThrottlePlugin, useRefreshOnWindowFocus, useRefreshDepsPlugin, useReadyPlugin, useCachePlugin]);
}
function usePagination(service) {
  let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const defaultPaginationOptions = {
    currentKey: "current",
    pageSizeKey: "pageSize",
    totalKey: "total",
    totalPageKey: "totalPage"
  };
  const injectedGlobalOptions = inject(GLOBAL_OPTIONS_PROVIDE_KEY, {});
  const {
    pagination,
    ...restOptions
  } = options;
  const {
    currentKey,
    pageSizeKey,
    totalKey,
    totalPageKey
  } = merge(defaultPaginationOptions, getGlobalOptions().pagination || {}, injectedGlobalOptions.pagination || {}, pagination || {});
  const finallyOptions = merge({
    defaultParams: [{
      [currentKey]: 1,
      [pageSizeKey]: 10
    }]
  }, restOptions);
  const {
    data,
    params,
    run,
    ...rest
  } = useRequest(service, finallyOptions);
  const paging = (paginationParams) => {
    const [oldPaginationParams, ...restParams] = params.value || [];
    const newPaginationParams = {
      ...oldPaginationParams,
      ...paginationParams
    };
    const mergerParams = [newPaginationParams, ...restParams];
    run(...mergerParams);
  };
  const changeCurrent = (current2) => {
    paging({
      [currentKey]: current2
    });
  };
  const changePageSize = (pageSize2) => {
    paging({
      [pageSizeKey]: pageSize2
    });
  };
  const changePagination = (current2, pageSize2) => {
    paging({
      [currentKey]: current2,
      [pageSizeKey]: pageSize2
    });
  };
  const total = computed(() => get(data.value, totalKey, 0));
  const current = computed({
    get: () => {
      var _params$value$0$curre, _params$value, _params$value$;
      return (
        // @ts-ignore
        (_params$value$0$curre = (_params$value = params.value) === null || _params$value === void 0 ? void 0 : (_params$value$ = _params$value[0]) === null || _params$value$ === void 0 ? void 0 : _params$value$[currentKey]) !== null && _params$value$0$curre !== void 0 ? _params$value$0$curre : finallyOptions.defaultParams[0][currentKey]
      );
    },
    set: (val) => {
      changeCurrent(val);
    }
  });
  const pageSize = computed({
    get: () => {
      var _params$value$0$pageS, _params$value2, _params$value2$;
      return (
        // @ts-ignore
        (_params$value$0$pageS = (_params$value2 = params.value) === null || _params$value2 === void 0 ? void 0 : (_params$value2$ = _params$value2[0]) === null || _params$value2$ === void 0 ? void 0 : _params$value2$[pageSizeKey]) !== null && _params$value$0$pageS !== void 0 ? _params$value$0$pageS : finallyOptions.defaultParams[0][pageSizeKey]
      );
    },
    set: (val) => {
      changePageSize(val);
    }
  });
  const totalPage = computed(() => get(data.value, totalPageKey, Math.ceil(total.value / pageSize.value)));
  return {
    data,
    params,
    current,
    pageSize,
    total,
    totalPage,
    run,
    changeCurrent,
    changePageSize,
    changePagination,
    ...rest
  };
}
var useRequestProvider = (config) => {
  provide(GLOBAL_OPTIONS_PROVIDE_KEY, config);
};

export {
  setGlobalOptions,
  definePlugin,
  clearCache,
  useLoadMore,
  useRequest,
  usePagination,
  useRequestProvider
};
//# sourceMappingURL=chunk-WWXVCJHY.js.map
