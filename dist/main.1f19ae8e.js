// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
console.log(123); // const regexp1 = new RegExp("^abc")
// // new RegExp(표현식)
// const regexp2 = new RegExp("^abc", "gi")
// // new RegExp(표현식, 플래그)
// const regexp1 = /^abc/;
// // /표현식/
// const regexp2 = /^abc/gi
// 표현식/플래그
// 정규표현식
// const str = `
// 010-1234-5678
// hello@gmail.com;
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// `
// 대소문자 따져서 검색
// 생성자 방식
// const regexp = new RegExp('the', 'g')
// 리터럴 방식
// const regexp = /the/g
// console.log(str.match(regexp))
// // 대소문자 안가리고 검색
// // 생성자 방식
// // const regexp2 = new RegExp('the', 'gi')
// // 리터럴 방식
// const regexp2 = /the/gi
// console.log(str.match(regexp2))
// test(): boolean 값으로 반환
// const regexp = /fox/gi
// console.log(regexp.test(str))
// // replace 문자 대체
// console.log(str.replace(regexp, 'AAA'))
// ====================================
// 플래그
// const regexp = /the/
// console.log(str.match(regexp))
// const regexp2 = /the/g
// console.log(str.match(regexp2))
// const regexp3 = /the/gi
// console.log(str.match(regexp3))
// // 백슬래시 기호 이용 (일반적인 문자로 변환)
// // 마침표로 끝나는 부분을 찾아줌
// console.log(str.match(/\.$/gim))
// ============================
// 패턴

var str = "\n010-1234-5678\nthesecon@gmail.com;\nhttps://www.omdbapi.com/?apikey=7035c60c&s=frozen\nThe quick brown fox jumps over the lazy dog.\nabbcccdddd\nhttp\nd"; // console.log(
//   // d로 끝나는 부분을 찾는다.
//   str.match(/d$/gm)
// )
// console.log(
//   // t로 시작하는 부분을 찾는다.
//   str.match(/^t/gm)
// )
// console.log(
//   // h로 시작하고 p로 끝나는 문자를 찾는다 4자리
//   str.match(/h..p/g)
// )
// console.log(
//   // fox 또는 dog라는 값을 반환
//   str.match(/fox|dog/g)
// )
// console.log(
//   // s가 없거나 s가 있는 http로 시작하는 문자를 찾는다.
//   str.match(/https?/g)
// )
// // d가 2번 반복되는 곳을 찾는다.
// console.log(
//   str.match(/d{2}/)
// )
// // d가 2번 이상 반복되는 곳을 찾는다.
// console.log(
//   str.match(/d{2,}/)
// )
// // 2글자 이상 3글자 이하인 단어 검색
// // 숫자나 알파벳이 아닌 것을 구분자로 선언
// console.log(
//   str.match(/\b\w{2,3}\b/g)
// )
// f 또는 o 또는 x 출력
// console.log(
//   str.match(/[fox]/g)
// )
// // f 또는 o 또는 x 출력 연속 되는 문자 출력
// console.log(
//   str.match(/[fox]{1,}/g)
// )
// // 0부터 9까지 연속되는 숫자 출력
// console.log(
//   str.match(/[0-9]{1,}/g)
// )
// // 모든 문자 출력
// console.log(
//   str.match(/\w/g)
// )
// // f로 시작하는 모든 영단어를 출력
// console.log(
//   str.match(/\bf\w{1,}\b/g)
// )
// // 연속된 숫자 모두 출력
// console.log(
//   str.match(/\d{1,}/g)
// )
// // 공백 문자 출력
// console.log(
//   str.match(/\s/g)
// )
// // 공백문자 활용
// const h = `  the hello world !
// `
// //  공백문자 제거
// console.log(
//   h.replace(/\s/g, '')
// )
// @앞쪽 일치 출력

console.log(str.match(/.{1,}(?=@)/g)); // @ 뒤쪽 일치 출력 

console.log(str.match(/(?<=@).{1,}/g));
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61314" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map