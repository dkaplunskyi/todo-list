(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>u});var r=t(601),a=t.n(r),o=t(314),i=t.n(o),c=t(417),s=t.n(c),p=new URL(t(345),t.b),l=i()(a()),d=s()(p);l.push([e.id,`@font-face {\n  font-family: open-sans;\n  src: url(${d});\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: minmax(max-content, 200px) 1fr;\n  grid-template-rows: 1fr 40px;\n  grid-template-areas:\n    'aside main'\n    'footer footer';\n  font-family: open-sans;\n}\n\naside {\n  grid-area: aside;\n  padding: 20px;\n  border-right: 1px solid #f1f1f1;\n}\n\naside ul {\n  list-style: none;\n  /* font-family: open-sans; */\n}\n\naside ul li {\n  padding: 3px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n}\n\naside ul li:hover,\n.active {\n  font-weight: 900;\n  transform: translateX(10px);\n}\n\naside ul li:first-child,\naside ul li:nth-child(5),\naside ul li:last-child {\n  margin-bottom: 10px;\n}\n\n\naside ul .nav-img,\nfooter .new-project-btn img {\n  width: 20px;\n}\n\nmain {\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n}\n\nmain .wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  width: 50%;\n  padding: 40px 0;\n}\n\nmain .wrapper input {\n  border: none;\n  outline: none;\n  border-bottom: 1px solid rgb(108, 192, 253);\n  padding: 10px 0;\n  font-size: 1.5rem;\n}\n\nmain .wrapper input:active {\n  border: none;\n  outline: none;\n}\n\nmain .wrapper input#project-title::placeholder {\n  font-size: 1.5rem;\n  font-family: open-sans;\n}\n\nmain .wrapper input#project-notes::placeholder {\n  font-size: 0.8rem;\n  font-family: open-sans;\n}\n\nmain .wrapper .submit {\n  border: none;\n  padding: 10px 40px;\n  color: white;\n  background-color: rgb(16, 197, 25);\n  border-radius: 15px;\n  align-self: center;\n  transition: all 0.2s;\n  font-family: open-sans;\n}\n\nmain .wrapper .submit:hover {\n  transform: scale(1.1);\n}\n\nmain .wrapper .cancel {\n  border: none;\n  padding: 10px 40px;\n  color: #e81919;\n  border-radius: 15px;\n  align-self: center;\n  transition: all 0.2s;\n  font-family: open-sans;\n}\n\nmain .wrapper .btn-wrapper {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n}\n\nfooter {\n  grid-area: footer;\n  display: flex;\n  border-top: 1px solid #f1f1f1;\n}\n\nfooter .new-project-btn {\n  font-family: open-sans;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n  width: 200px;\n  border: none;\n  background-color: white;\n  border-right: 1px solid #f1f1f1;\n  transition: all 0.2s;\n}\n\nfooter .new-project-btn:hover {\n  font-size: 1rem;\n}`,""]);const u=l},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<e.length;p++){var l=[].concat(e[p]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],p=r.base?s[0]+r.base:s[0],l=o[p]||0,d="".concat(p," ").concat(l);o[p]=l+1;var u=t(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),p=0;p<o.length;p++){var l=t(o[p]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},345:(e,n,t)=>{e.exports=t.p+"b8cc747a58ffa52b7ff9.ttf"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),a=t.n(r),o=t(825),i=t.n(o),c=t(659),s=t.n(c),p=t(56),l=t.n(p),d=t(540),u=t.n(d),m=t(113),f=t.n(m),g=t(208),b={};b.styleTagTransform=f(),b.setAttributes=l(),b.insert=s().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=u(),a()(g.A,b),g.A&&g.A.locals&&g.A.locals;const h=t.p+"ff56fe35b9ef464312ba.png",v=t.p+"6e759c405e19117a6a62.png",x=t.p+"a01ee9ea6c2d93b2fdf3.png",y=t.p+"bb82e68326fc95d5b88a.png",w=t.p+"d5e269f53b0c7a22247c.png",j=t.p+"21bcf2a2f55a50eaf9fa.png",E=t.p+"2427060a4329361e0a85.png",C=t.p+"81175267d01e48eed0d1.png";class O{constructor(e,n){this.name=e,this.note=n}}const N=[];!function(){const e=document.createElement("aside"),n=document.createElement("main"),t=document.createElement("footer");e.append(function(){const e=document.createElement("ul"),n=Object.assign(document.createElement("img"),{className:"nav-img",src:h}),t=Object.assign(document.createElement("img"),{className:"nav-img",src:v}),r=Object.assign(document.createElement("img"),{className:"nav-img",src:x}),a=Object.assign(document.createElement("img"),{className:"nav-img",src:y}),o=Object.assign(document.createElement("img"),{className:"nav-img",src:w}),i=Object.assign(document.createElement("img"),{className:"nav-img",src:j}),c=Object.assign(document.createElement("img"),{className:"nav-img",src:E}),s=Object.assign(document.createElement("li"),{textContent:"Inbox"}),p=Object.assign(document.createElement("li"),{textContent:"Today"}),l=Object.assign(document.createElement("li"),{textContent:"Upcoming"}),d=Object.assign(document.createElement("li"),{textContent:"Anytime"}),u=Object.assign(document.createElement("li"),{textContent:"Someday"}),m=Object.assign(document.createElement("li"),{textContent:"Logbook"}),f=Object.assign(document.createElement("li"),{textContent:"Trash"});return s.prepend(n),p.prepend(t),l.prepend(r),d.prepend(a),u.prepend(o),m.prepend(i),f.prepend(c),e.append(s,p,l,d,u,m,f),e}()),t.append(function(){const e=document.createElement("button");e.textContent="Add project",e.classList.add("new-project-btn");const n=document.createElement("img");return n.src=C,e.prepend(n),e.addEventListener("click",(()=>{})),e}()),n.append(),document.body.append(e,n,t)}();const S=document.querySelector("main");document.querySelector(".new-project-btn").addEventListener("click",(()=>{S.hasChildNodes()||S.append(function(){const e=document.createElement("div");e.classList.add("wrapper");const n=Object.assign(document.createElement("input"),{name:"project-title",id:"project-title",placeholder:"Title:"}),t=Object.assign(document.createElement("input"),{name:"project-notes",id:"project-notes",placeholder:"Notes:"}),r=Object.assign(document.createElement("div"),{className:"btn-wrapper"}),a=Object.assign(document.createElement("button"),{className:"submit",textContent:"Save"}),o=Object.assign(document.createElement("button"),{className:"cancel",textContent:"cancel"});return o.addEventListener("click",(()=>{const e=document.querySelector("main");for(;e.hasChildNodes();)e.removeChild(e.firstChild)})),a.addEventListener("click",(()=>{N.push(new O(n.value,t.value));const e=document.querySelector("aside"),r=document.createElement("div");r.textContent=n.value,e.appendChild(r)})),r.append(o,a),e.append(n,t,r),e}())}))})();