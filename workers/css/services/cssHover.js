!function(e){if("object"==typeof module&&"object"==typeof module.exports){var r=e(require,exports);void 0!==r&&(module.exports=r)}else"function"==typeof define&&define.amd&&define(["require","exports","../parser/cssNodes","./languageFacts","vscode-languageserver-types","./selectorPrinting"],e)}(function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=e("../parser/cssNodes"),n=e("./languageFacts"),o=e("vscode-languageserver-types"),i=e("./selectorPrinting"),s=function(){function e(){}return e.prototype.doHover=function(e,r,s){function a(r){return o.Range.create(e.positionAt(r.offset),e.positionAt(r.end))}for(var c=e.offsetAt(r),f=t.getNodePath(s,c),u=0;u<f.length;u++){var l=f[u];if(l instanceof t.Selector)return{contents:i.selectorToMarkedString(l),range:a(l)};if(l instanceof t.SimpleSelector)return{contents:i.simpleSelectorToMarkedString(l),range:a(l)};if(l instanceof t.Declaration){var g=l.getFullPropertyName(),p=n.getProperties()[g];if(p){var d=[];p.description&&d.push(o.MarkedString.fromPlainText(p.description));var v=n.getBrowserLabel(p.browsers);if(v&&d.push(o.MarkedString.fromPlainText(v)),d.length)return{contents:d,range:a(l)}}}}return null},e}();r.CSSHover=s});