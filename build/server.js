!function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";var r=n(1);(new(function(e){return e&&e.__esModule?e:{default:e}}(r).default)).listen(8080)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(2),a=r(i),s=n(3),f=r(s),c=n(4),l=r(c),p=n(5),d=r(p),h=n(6),v=r(h),x=function(){function e(){u(this,e),this.app=(0,a.default)(),this.app.use((0,l.default)()),this.app.use((0,d.default)()),this.app.use(v.default.json()),this.app.use(v.default.urlencoded({extended:!0})),this.app.use(a.default.static(__dirname+"/static/")),this.log=new f.default("Server")}return o(e,[{key:"listen",value:function(e,t){var n=this;t=t||"0.0.0.0",this.app.listen(e,t,function(){return n.log.info("Server listening on "+t+":"+e)})}}]),e}();t.default=x},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("delogger")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("cookie-parser")},function(e,t){e.exports=require("body-parser")}]);