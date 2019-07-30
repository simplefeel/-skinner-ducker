!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("lodash/mapValues"),require("lodash/set"),require("lodash/get"),require("lodash/isNumber"),require("lodash/isString"),require("lodash/isArray"),require("lodash/isDate"),require("lodash/isBoolean"),require("manba")):"function"==typeof define&&define.amd?define(["lodash/mapValues","lodash/set","lodash/get","lodash/isNumber","lodash/isString","lodash/isArray","lodash/isDate","lodash/isBoolean","manba"],t):(e=e||self,e.ducker=t(e._mapValues,e._set,e._get,e._isNumber,e._isString,e._isArray,e._isDate,e._isBoolean,e._manba))}(this,function(e,t,r,a,n,u,o,i,s){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(r,!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,a=a&&a.hasOwnProperty("default")?a.default:a,n=n&&n.hasOwnProperty("default")?n.default:n,u=u&&u.hasOwnProperty("default")?u.default:u,o=o&&o.hasOwnProperty("default")?o.default:o,i=i&&i.hasOwnProperty("default")?i.default:i,s=s&&s.hasOwnProperty("default")?s.default:s;var y={S:10,B:100,Q:1e3,w:1e4};return function(){function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l(this,f),this._attributes=h({},e)}return c(f,[{key:"parse",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(this._attributes,function(e,n){var u=e.property,o=new e.type,i=e.unit,s=r(a,u);s&&(s=t.compose(s,o,i));var l=s||t.getDefaultValue(e.value,e.type);t.set(n,l)}),this}},{key:"traverse",value:function(){var r=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!a)return this;var n={};return e(this._attributes,function(e,u){var o=e.property,i=e.unit,s=new e.type,l=a[u];if(l){var f=r.discompose(l,i,u,s);t(n,o,f)}}),n}},{key:"compose",value:function(e,t,r){return r&&(e/=y[r]),o(t)&&(e=s(parseFloat(e)).format("l")),e}},{key:"discompose",value:function(e,t,r,a){return o(a)&&(e=s(e).time()),t&&(e*=y[t]),e||this.get(r)}},{key:"set",value:function(e,t){this[e]=t}},{key:"get",value:function(e,t){return this[e]}},{key:"getDefaultValue",value:function(e,t){return e||this.setDefaultValue(t)}},{key:"setDefaultValue",value:function(e){var t="",r=new e;return a(r)?t=0:n(r)?t="":u(r)?t=[]:i(r)?t=!0:o(r)&&(t=Date.now()),t}}]),f}()});