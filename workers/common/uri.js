var __extends=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();!function(t){if("object"==typeof module&&"object"==typeof module.exports){var e=t(require,exports);void 0!==e&&(module.exports=e)}else"function"==typeof define&&define.amd&&define("vscode-uri",["require","exports"],t)}((function(t,e){"use strict";var r,o;if(Object.defineProperty(e,"__esModule",{value:!0}),"object"==typeof process)o="win32"===process.platform;else if("object"==typeof navigator){var n=navigator.userAgent;o=n.indexOf("Windows")>=0}var i=/^\w[\w\d+.-]*$/,h=/^\//,s=/^\/\//;var a="/",u=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,f=function(){function t(t,e,r,o,n,u){void 0===u&&(u=!1),"object"==typeof t?(this.scheme=t.scheme||"",this.authority=t.authority||"",this.path=t.path||"",this.query=t.query||"",this.fragment=t.fragment||""):(this.scheme=function(t,e){return t||e?t:"file"}(t,u),this.authority=e||"",this.path=function(t,e){switch(t){case"https":case"http":case"file":e?e[0]!==a&&(e=a+e):e=a}return e}(this.scheme,r||""),this.query=o||"",this.fragment=n||"",function(t,e){if(!t.scheme&&e)throw new Error('[UriError]: Scheme is missing: {scheme: "", authority: "'+t.authority+'", path: "'+t.path+'", query: "'+t.query+'", fragment: "'+t.fragment+'"}');if(t.scheme&&!i.test(t.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(t.path)if(t.authority){if(!h.test(t.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(s.test(t.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}(this,u))}return t.isUri=function(e){return e instanceof t||!!e&&("string"==typeof e.authority&&"string"==typeof e.fragment&&"string"==typeof e.path&&"string"==typeof e.query&&"string"==typeof e.scheme&&"function"==typeof e.fsPath&&"function"==typeof e.with&&"function"==typeof e.toString)},Object.defineProperty(t.prototype,"fsPath",{get:function(){return l(this)},enumerable:!0,configurable:!0}),t.prototype.with=function(t){if(!t)return this;var e=t.scheme,r=t.authority,o=t.path,n=t.query,i=t.fragment;return void 0===e?e=this.scheme:null===e&&(e=""),void 0===r?r=this.authority:null===r&&(r=""),void 0===o?o=this.path:null===o&&(o=""),void 0===n?n=this.query:null===n&&(n=""),void 0===i?i=this.fragment:null===i&&(i=""),e===this.scheme&&r===this.authority&&o===this.path&&n===this.query&&i===this.fragment?this:new p(e,r,o,n,i)},t.parse=function(t,e){void 0===e&&(e=!1);var r=u.exec(t);return r?new p(r[2]||"",decodeURIComponent(r[4]||""),decodeURIComponent(r[5]||""),decodeURIComponent(r[7]||""),decodeURIComponent(r[9]||""),e):new p("","","","","")},t.file=function(t){var e="";if(o&&(t=t.replace(/\\/g,a)),t[0]===a&&t[1]===a){var r=t.indexOf(a,2);-1===r?(e=t.substring(2),t=a):(e=t.substring(2,r),t=t.substring(r)||a)}return new p("file",e,t,"","")},t.from=function(t){return new p(t.scheme,t.authority,t.path,t.query,t.fragment)},t.prototype.toString=function(t){return void 0===t&&(t=!1),v(this,t)},t.prototype.toJSON=function(){return this},t.revive=function(e){if(e){if(e instanceof t)return e;var r=new p(e);return r._formatted=e.external,r._fsPath=e._sep===c?e.fsPath:null,r}return e},t}();e.URI=f;var c=o?1:void 0,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._formatted=null,e._fsPath=null,e}return __extends(e,t),Object.defineProperty(e.prototype,"fsPath",{get:function(){return this._fsPath||(this._fsPath=l(this)),this._fsPath},enumerable:!0,configurable:!0}),e.prototype.toString=function(t){return void 0===t&&(t=!1),t?v(this,!0):(this._formatted||(this._formatted=v(this,!1)),this._formatted)},e.prototype.toJSON=function(){var t={$mid:1};return this._fsPath&&(t.fsPath=this._fsPath,t._sep=c),this._formatted&&(t.external=this._formatted),this.path&&(t.path=this.path),this.scheme&&(t.scheme=this.scheme),this.authority&&(t.authority=this.authority),this.query&&(t.query=this.query),this.fragment&&(t.fragment=this.fragment),t},e}(f),d=((r={})[58]="%3A",r[47]="%2F",r[63]="%3F",r[35]="%23",r[91]="%5B",r[93]="%5D",r[64]="%40",r[33]="%21",r[36]="%24",r[38]="%26",r[39]="%27",r[40]="%28",r[41]="%29",r[42]="%2A",r[43]="%2B",r[44]="%2C",r[59]="%3B",r[61]="%3D",r[32]="%20",r);function m(t,e){for(var r=void 0,o=-1,n=0;n<t.length;n++){var i=t.charCodeAt(n);if(i>=97&&i<=122||i>=65&&i<=90||i>=48&&i<=57||45===i||46===i||95===i||126===i||e&&47===i)-1!==o&&(r+=encodeURIComponent(t.substring(o,n)),o=-1),void 0!==r&&(r+=t.charAt(n));else{void 0===r&&(r=t.substr(0,n));var h=d[i];void 0!==h?(-1!==o&&(r+=encodeURIComponent(t.substring(o,n)),o=-1),r+=h):-1===o&&(o=n)}}return-1!==o&&(r+=encodeURIComponent(t.substring(o))),void 0!==r?r:t}function y(t){for(var e=void 0,r=0;r<t.length;r++){var o=t.charCodeAt(r);35===o||63===o?(void 0===e&&(e=t.substr(0,r)),e+=d[o]):void 0!==e&&(e+=t[r])}return void 0!==e?e:t}function l(t){var e;return e=t.authority&&t.path.length>1&&"file"===t.scheme?"//"+t.authority+t.path:47===t.path.charCodeAt(0)&&(t.path.charCodeAt(1)>=65&&t.path.charCodeAt(1)<=90||t.path.charCodeAt(1)>=97&&t.path.charCodeAt(1)<=122)&&58===t.path.charCodeAt(2)?t.path[1].toLowerCase()+t.path.substr(2):t.path,o&&(e=e.replace(/\//g,"\\")),e}function v(t,e){var r=e?y:m,o="",n=t.scheme,i=t.authority,h=t.path,s=t.query,u=t.fragment;if(n&&(o+=n,o+=":"),(i||"file"===n)&&(o+=a,o+=a),i){var f=i.indexOf("@");if(-1!==f){var c=i.substr(0,f);i=i.substr(f+1),-1===(f=c.indexOf(":"))?o+=r(c,!1):(o+=r(c.substr(0,f),!1),o+=":",o+=r(c.substr(f+1),!1)),o+="@"}-1===(f=(i=i.toLowerCase()).indexOf(":"))?o+=r(i,!1):(o+=r(i.substr(0,f),!1),o+=i.substr(f))}if(h){if(h.length>=3&&47===h.charCodeAt(0)&&58===h.charCodeAt(2))(p=h.charCodeAt(1))>=65&&p<=90&&(h="/"+String.fromCharCode(p+32)+":"+h.substr(3));else if(h.length>=2&&58===h.charCodeAt(1)){var p;(p=h.charCodeAt(0))>=65&&p<=90&&(h=String.fromCharCode(p+32)+":"+h.substr(2))}o+=r(h,!0)}return s&&(o+="?",o+=r(s,!1)),u&&(o+="#",o+=e?u:m(u,!1)),o}}));