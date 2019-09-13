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
})({"../assets/js/slickSlideShow.js":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded", function () {
  var FEImages = [{
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/javascript-icon_jtcjxj.svg",
    "title": "Javascript",
    "level": "5"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216207/portfolio/icon/html-icon_n8noau.svg",
    "title": "HTML",
    "level": "4"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/css-icon_fn1xzn.svg",
    "title": "CSS",
    "level": "5"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/reactjs-icon_fqle9v.svg",
    "title": "React",
    "level": "3"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/bootstrap-icon_icpl6k.svg",
    "title": "Bootstrap",
    "level": "4"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/sass-lang-icon_fy1j3t.svg",
    "title": "Sass",
    "level": "4"
  }];
  var BEImages = [{
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/nodejs-icon_zvoh2h",
    "title": "Node.js",
    "level": "3"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/expressjs-icon_eb4l78",
    "title": "Express.js",
    "level": "3"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/rest-api-icon_mhahrw",
    "title": "API",
    "level": "5"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/graphql-icon_ynzsyd",
    "title": "GraphQL",
    "level": "3"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/test-icon_sbvkvc",
    "title": "Unit Test",
    "level": "3"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/socketio-icon_opelgs",
    "title": "Socket io",
    "level": "3"
  }];
  var DbImages = [{
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/mongodb-icon_pey8dl",
    "title": "MongoDb",
    "level": "4"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/firebase-icon_z34oqk",
    "title": "Firebase",
    "level": "3"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/redis-icon_qm2cud",
    "title": "Redis",
    "level": "3"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/mysql-icon_crpgcy",
    "title": "Mysql",
    "level": "2"
  }];
  var programmingLanguages = [{
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/javascript-icon_jtcjxj",
    "title": "Javascript",
    "level": "5"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/typescript-icon_iye2lw",
    "title": "Typescript",
    "level": "3"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/python-icon_x3o4nk",
    "title": "Python",
    "level": "3"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/php-icon_wp940l",
    "title": "PHP",
    "level": "2"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/java-icon_cv13bv",
    "title": "Java",
    "level": "1"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/c-icon_kxhs6b",
    "title": "C",
    "level": "1"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/c_-icon_ifd7qi",
    "title": "C++",
    "level": "1"
  }];
  var othersImages = [{
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/git-icon_eligi0",
    "title": "Git",
    "level": "4"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/npm-icon_d4jocz",
    "title": "NPM",
    "level": "4"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/linux-icon_mggtzg",
    "title": "Linux",
    "level": "4"
  }, {
    "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/heroku-icon_jio3mm",
    "title": "Heroku",
    "level": "3"
  }];

  var renderIcons = function renderIcons(data, container) {
    _.forEach(data, function (val, index) {
      var imgSrc = "<img class=\"skills__icon\" src=".concat(val.img, ">");
      var imgTitle = "<p>".concat(val.title, "</p>");
      container.append("\n            <div \n                class=\"skills__icon-wrapper level-".concat(val.level, "\" \n                title=\"level: ").concat(val.level, "\">\n                ").concat(imgSrc, " \n                ").concat(imgTitle, "\n            </div>"));
    });
  };

  var addEventToSlider = function addEventToSlider(containerClass) {
    $(containerClass).slick({
      dots: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 5000,
      variableWidth: true,
      prevArrow: false,
      nextArrow: false,
      infinite: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        } // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object

      }]
    });
  };
  /* Add slider event to elements with slick*/
  // BE


  renderIcons(BEImages, $('#be'));
  addEventToSlider('.skills__be'); // FE

  renderIcons(FEImages, $('#fe'));
  addEventToSlider('.skills__fe'); // DB

  renderIcons(DbImages, $('#db'));
  addEventToSlider('.skills__db'); // Languages

  renderIcons(programmingLanguages, $('#cl'));
  addEventToSlider('.skills__cl'); // OTHERS

  renderIcons(othersImages, $('#others'));
  addEventToSlider('.skills__others');
});
},{}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "41777" + '/');

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
      } else {
        window.location.reload();
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
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../assets/js/slickSlideShow.js"], null)
//# sourceMappingURL=/slickSlideShow.3031e0f0.js.map