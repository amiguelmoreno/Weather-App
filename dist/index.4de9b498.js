// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2Rsls":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2751c5c64de9b498";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4pp4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _helpers = require("./helpers");
var _loadingSvg = require("url:../img/loading.svg");
var _loadingSvgDefault = parcelHelpers.interopDefault(_loadingSvg);
var _01NPng = require("url:/img/icons/01n.png");
var _01DPng = require("url:/img/icons/01d.png");
var _02DPng = require("url:/img/icons/02d.png");
var _02NPng = require("url:/img/icons/02n.png");
var _06DPng = require("url:/img/icons/06d.png");
var _06NPng = require("url:/img/icons/06n.png");
var _12DPng = require("url:/img/icons/12d.png");
var _12NPng = require("url:/img/icons/12n.png");
var _13DPng = require("url:/img/icons/13d.png");
var _15DPng = require("url:/img/icons/15d.png");
var _15NPng = require("url:/img/icons/15n.png");
var _16DPng = require("url:/img/icons/16d.png");
var _nightWebp = require("url:/img/night.webp");
var _dayWebp = require("url:/img/day.webp");
"use strict";
class WeatherApp {
    #form = document.querySelector(".nav__form");
    #parentEl = document.querySelector(".container");
    _coords;
    _country;
    _dayTime;
    _date;
    _weather;
    _temp;
    _iconSrc;
    constructor(){
        this.#parentEl.innerHTML = "";
        document.getElementById("search").focus();
        this.addHandlerCity();
    }
    clear() {
        this._city = undefined;
        this._coords = undefined;
        this._country = undefined;
        this.#parentEl.innerHTML = "";
        this._dayTime = undefined;
        this._date = undefined;
        this._weather = undefined;
        this._temp = undefined;
    }
    loadingAnimation() {
        const html = `
      <div class="spinner">
        <svg>
          <use href="${(0, _loadingSvgDefault.default)}#icon-loader"></use>
        </svg>
      </div>
    `;
        this.#parentEl.insertAdjacentHTML("afterbegin", html);
    }
    addHandlerCity() {
        this.#form.addEventListener("submit", (e)=>{
            e.preventDefault();
            this.clear();
            this.loadingAnimation();
            this.getCityName();
        });
    }
    getCityName() {
        const searchInput = document.querySelector("#search");
        if (searchInput.value.includes(",")) {
            this._city = searchInput.value.split(",")[0].trim().toLowerCase();
            this._country = searchInput.value.split(",")[1].trim().toUpperCase();
        } else this._city = searchInput.value.toLowerCase();
        document.getElementById("search").value = "";
        this.getCityCoords();
    }
    async getCityCoords() {
        try {
            const data = await (0, _helpers.getJSON)(`http://api.openweathermap.org/geo/1.0/direct?q=${this._city}&limit=5&appid=6d0850fc6b667c6f0c704ffa0c1c9eeb`);
            let filterCity = data.filter((city)=>city.name.toLowerCase() == this._city || city.state?.toLowerCase() == this._city);
            if (this._country) filterCity = filterCity.filter((el)=>el.country.toUpperCase() === this._country);
            else this._country = filterCity[0].country;
            if (filterCity.length === 0) throw new Error(`${"City not found \uD83C\uDF0D"}`);
            this._coords = [
                filterCity[0].lat,
                filterCity[0].lon
            ];
            this.getCityWeather();
        } catch (err) {
            this.clear();
            console.error(err);
            throw err;
        }
    }
    async getCityWeather() {
        try {
            const data = await (0, _helpers.getJSON)(`https://api.openweathermap.org/data/2.5/weather?lat=${this._coords[0]}&lon=${this._coords[1]}&appid=6d0850fc6b667c6f0c704ffa0c1c9eeb`);
            this._date = new Date().toLocaleDateString("en-GB");
            this._dayTime = data.dt >= data.sys.sunrise && data.dt <= data.sys.sunset ? "day" : "night";
            this._weather = data.weather[0];
            this._temp = data.main.temp - 273.15;
            console.log(data);
            this.getIconSrc();
            this.generateCard();
        } catch (err) {
            this.clear();
            console.error(err);
            throw err;
        }
    }
    getIconSrc() {
        switch(this._weather.icon.slice(0, 2)){
            case "01":
            case "35":
                if (this._dayTime === "day") return _01DPng;
                else return _01NPng;
                break;
            case "01":
            case "02":
            case "03":
            case "04":
            case "05":
            case "34":
            case "35":
            case "36":
                if (this._dayTime === "day") return _02DPng;
                else return _02NPng;
                break;
            case "06":
            case "07":
            case "08":
            case "09":
            case "11":
            case "37":
            case "38":
            case "50":
                if (this._dayTime === "day") return _06DPng;
                else return _06NPng;
                break;
            case "12":
            case "10":
            case "18":
            case "39":
            case "40":
                if (this._dayTime === "day") return _12DPng;
                else return _12NPng;
                break;
            case "13":
            case "14":
                return _13DPng;
            case "15":
            case "41":
            case "42":
                if (this._dayTime === "day") return _15DPng;
                else return _15NPng;
                break;
            case "16":
            case "17":
                if (this._dayTime === "day") return _16DPng;
                break;
            default:
                return _02DPng;
        }
    }
    generateCard() {
        this.getIconSrc();
        const html = `
        <div class="card">
            <div class="card__place">
                <p class="card__city">${this._city[0].toUpperCase() + this._city.substring(1)}</p>
                <span class="card__country">${this._country}</span>
            </div>
            <div class="card__temperature">
            <p class="card__degrees">${this._temp.toFixed(0)}</p>
            <span>°C</span>
            </div>
            <div class="card__condition">
                <img src=${this.getIconSrc()} alt="cielo" />
            </div>
            <div class="card__condition-text">${this._weather.description.toUpperCase()}</div>
        </div>      
        `;
        this.changeDesign();
        this.#parentEl.innerHTML = html;
    }
    changeDesign() {
        if (this._dayTime === "night") {
            console.log("color changed");
            document.body.style.backgroundImage = `url(${_nightWebp})`;
        } else document.body.style.backgroundImage = `url(${_dayWebp})`;
    }
}
// GEOCODING API
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
// WEATHER API
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const generateWeather = new WeatherApp();

},{"./helpers":"6s1be","url:../img/loading.svg":"k0vMH","url:/img/icons/01n.png":"vClYS","url:/img/icons/01d.png":"dQpxK","url:/img/icons/02d.png":"eF3xp","url:/img/icons/02n.png":"7N19N","url:/img/icons/06d.png":"6YFxC","url:/img/icons/06n.png":"58p5S","url:/img/icons/12d.png":"87eJv","url:/img/icons/12n.png":"dpUmw","url:/img/icons/13d.png":"3brsn","url:/img/icons/15d.png":"ffhPT","url:/img/icons/15n.png":"2qtBZ","url:/img/icons/16d.png":"gbEaA","url:/img/night.webp":"1yV9K","url:/img/day.webp":"1O0JG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6s1be":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const getJSON = async function(url) {
    try {
        const res = await Promise.race([
            fetch(url),
            timeout(10)
        ]);
        const data = await res.json();
        if (!res.ok) {
            displayError("Data is not available, page fallen \uD83D\uDCA5");
            throw new Error("Data is not available, page fallen \uD83D\uDCA5");
        }
        if (data.length === 0) {
            displayError("City not found \uD83C\uDF0D");
            throw new Error("City not found \uD83C\uDF0D");
        }
        return data;
    } catch (err) {
        throw err;
    }
};
function displayError(err) {
    console.log("function fasdfa");
    document.querySelector(".error__message").innerHTML = `${err}`;
    document.querySelector(".error__message").classList.add("error__message-active");
    setTimeout(()=>document.querySelector(".error__message").classList.remove("error__message-active"), 2000);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"k0vMH":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("3ninf") + "loading.3313ddbb.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"vClYS":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("3ninf") + "01n.eacebf06.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dQpxK":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("3ninf") + "01d.440de5f8.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"eF3xp":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("3ninf") + "02d.12fa92f1.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7N19N":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("3ninf") + "02n.d48970be.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6YFxC":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("3ninf") + "06d.316e3737.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"58p5S":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("3ninf") + "06n.17855475.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"87eJv":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("3ninf") + "12d.54c9f17f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dpUmw":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("3ninf") + "12n.3bd17b4f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3brsn":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("3ninf") + "13d.38b82c2a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"ffhPT":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("3ninf") + "15d.f49504e3.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2qtBZ":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("3ninf") + "15n.52dcb7e5.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gbEaA":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("3ninf") + "16d.da753212.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1yV9K":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("3ninf") + "night.f78f2e49.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1O0JG":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("3ninf") + "day.13ac6f81.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["2Rsls","4pp4s"], "4pp4s", "parcelRequirebbde")

//# sourceMappingURL=index.4de9b498.js.map
