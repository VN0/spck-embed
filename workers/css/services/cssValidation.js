!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","../parser/cssNodes","vscode-languageserver-types","./lintRules","./lint"],e)}(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("../parser/cssNodes"),i=e("vscode-languageserver-types"),r=e("./lintRules"),o=e("./lint"),s=function(){function e(){}return e.prototype.configure=function(e){this.settings=e},e.prototype.doValidation=function(e,t,s){if(void 0===s&&(s=this.settings),s&&!1===s.validate)return[];var a=[];return a.push.apply(a,n.ParseErrorCollector.entries(t)),a.push.apply(a,o.LintVisitor.entries(t,e,new r.LintConfigurationSettings(s&&s.lint))),a.filter(function(e){return e.getLevel()!==n.Level.Ignore}).map(function(t){var r=i.Range.create(e.positionAt(t.getOffset()),e.positionAt(t.getOffset()+t.getLength()));return{code:t.getRule().id,source:e.languageId,message:t.getMessage(),severity:t.getLevel()===n.Level.Warning?i.DiagnosticSeverity.Warning:i.DiagnosticSeverity.Error,range:r}})},e}();t.CSSValidation=s});