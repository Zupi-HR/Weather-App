(()=>{"use strict";var e={722:(e,n,t)=>{t.d(n,{A:()=>a});var r=t(601),o=t.n(r),i=t(314),s=t.n(i)()(o());s.push([e.id,"/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\nul {\n  list-style-type: none;\n}\n",""]);const a=s},365:(e,n,t)=>{t.d(n,{A:()=>p});var r=t(601),o=t.n(r),i=t(314),s=t.n(i),a=t(417),c=t.n(a),d=new URL(t(576),t.b),l=s()(o()),u=c()(d);l.push([e.id,`body {\n  background: no-repeat url(${u});\n  height: 100vh;\n}\n\nmain {\n  display: grid;\n  height: 100%;\n  grid-template-rows: repeat(3, 1fr);\n}\n\nheader {\n  display: flex;\n  background-color: rgb(40, 40, 40);\n  align-items: center;\n  height: 100px;\n  gap: 50px;\n  justify-content: center;\n}\n\n.input-container {\n  display: flex;\n}\n\ninput {\n  width: 400px;\n}\n\n#btn-submit {\n  height: 30px;\n  background-color: rgb(224, 155, 27);\n  border: none;\n  border-radius: 0px 5px 5px 0px;\n  outline: none;\n  width: 100px;\n}\n\n.temp-btn {\n  padding: 5px 50px;\n  font-size: 16px;\n}\n\n.error {\n  display: block;\n  width: 100%;\n  padding: 0;\n  visibility: hidden;\n  font-size: 80%;\n  color: red;\n  font-weight: bold;\n  border-radius: 0 0 5px 5px;\n\n  box-sizing: border-box;\n}\n\n.error.active {\n  padding: 0.3rem;\n}\n\n#output {\n  width: 50%;\n  justify-self: center;\n  margin: auto;\n}\n\n.currentUnit {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.weather-info {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.condition-icon {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.weather-icon {\n  width: 60px;\n}\n\n.temperature-value {\n  font-size: 60px;\n}\n\n.temperature-unit {\n  display: inline-block;\n  font-size: 20px;\n  vertical-align: top;\n}\n\n.weather-details {\n  border-left: 2px solid white;\n  padding: 10px 20px;\n  font-weight: bold;\n}\n`,""]);const p=l},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var c=e[a],d=r.base?c[0]+r.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=a,n.splice(a,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=t(i[s]);n[a].references--}for(var c=r(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},576:(e,n,t)=>{e.exports=t.p+"8c85c5718e23890d591d.jpeg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),i=t(825),s=t.n(i),a=t(659),c=t.n(a),d=t(56),l=t.n(d),u=t(540),p=t.n(u),f=t(113),h=t.n(f),v=t(722),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=p(),o()(v.A,g),v.A&&v.A.locals&&v.A.locals;var m=t(365),b={};b.styleTagTransform=h(),b.setAttributes=l(),b.insert=c().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=p(),o()(m.A,b),m.A&&m.A.locals&&m.A.locals;const y=new class{constructor(){}async fetchData(e,n){try{const t=await fetch(` https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}?unitGroup=${n}&key=SP98US4D2FXTM36BTL9WZC26K&contentType=json`,{mode:"cors"});if(!t.ok)throw new Error(`${t.status}: Location not found!`);console.log(t);const r=await t.json();return console.log(r),this.processData(r)}catch(e){return e}}processData(e){return{location:e.resolvedAddress,currentCondition:e.currentConditions.conditions,icon:e.currentConditions.icon,temperature:e.currentConditions.temp,feelsLike:e.currentConditions.feelslike,wind:e.currentConditions.windspeed,uvIndex:e.currentConditions.uvindex}}},w=t.p+"41dfabd0c7568b07d400.svg",x=t.p+"915669c60fdc91ebc9dc.svg",C=t.p+"9f58273146466ca7034f.svg",S=t.p+"cdb34500c878ffef039c.svg",T=t.p+"16d1d890c1fd70c7961c.svg",E=t.p+"2f25a96172e6e967c359.svg",A=t.p+"173fae26cc0bdb5b2eed.svg",I=t.p+"b9734e205daec1628c2b.svg",U=t.p+"1b86343992084b4a6878.svg",k=t.p+"c87aeec760927f1ee555.svg",L=t.p+"1f3928ecc65fd5c7c058.svg",$=t.p+"1875d48e5b401946171f.svg",M=t.p+"9a211502a3873a9ffbbd.svg",D=t.p+"0d240fe3a6eb4c822031.svg",j=t.p+"d219b72d17e17cbce417.svg",N=t.p+"732a57002dce98fe396f.svg",P=t.p+"addc1e8351b15d18b7bb.svg",q=t.p+"2e9ae693dee5fdda6831.svg",F=t.p+"e5fb3f4bf7865f11b7fd.svg",z=t.p+"519367db791426b4585c.svg",R=t.p+"1f9fd4d2ee82c4c1e58c.svg",V=t.p+"5195e076b638f307f894.svg",W=document.querySelector("input"),_=document.querySelector(".error"),B=document.getElementById("output");console.log(_);const H={"clear-day":w,"clear-night":x,cloudy:C,fog:S,hail:T,"partly-cloudy-day":E,"partly-cloudy-night":A,"rain-snow-showers-day":I,"rain-snow-showers-night":U,"rain-snow":k,rain:L,"showers-day":$,"showers-night":M,sleet:D,"snow-showers-day":j,"snow-showers-night":N,snow:P,"thunder-rain":q,"thunder-showers-day":F,"thunder-showers-night":z,thunder:R,wind:V};W.addEventListener("input",(()=>{W.setCustomValidity("")}));const O=new class{constructor(){}async handleFormSubmit(e){if(this.clearInputError(),W.validity.valueMissing)W.setCustomValidity("Please enter the name of a city");else{W.setCustomValidity(""),W.blur();const n=await y.fetchData(W.value.trim(),e);if(console.log(n),n instanceof Error)return void this.showInputError(n);this.renderWeatherData(n,e)}W.reportValidity(),W.value=""}renderWeatherData(e,n){const t="us"===n?"F":"C",r="us"===n?"MPH":"KMH";B.innerHTML=`\n      <h1 class="location-name">${e.location}</h1>\n      <div class="condition-icon">\n         <img class="weather-icon" src="${H[e.icon]}">\n        <h2 class="current-condition">${e.currentCondition}</h2>\n    </div>\n      <div class="weather-info">\n        <div class="temperature-display">\n          <span class="temperature-value">${e.temperature}</span>\n          <span class="temperature-unit">&deg;${t}</span>\n        </div>\n        <div class="weather-details">\n          <p class="feels-like">Feels like: ${e.feelsLike}</p>\n          <p>WIND: ${e.wind} ${r}</p>\n          <p>UV INDEX: ${e.uvIndex}</p>\n        </div>\n      </div>\n      `}showInputError(e){_.style.visibility="visible",_.classList.add("active"),_.textContent=e}clearInputError(){_.textContent="",_.classList.remove("active"),_.style.visibility="hidden"}};new class{form=document.querySelector("form");tempBTN=document.querySelector(".temp-btn");celsius=document.querySelector(".celsius");fahrenheit=document.querySelector(".fahrenheit");currentUnit="metric";constructor(){this.tempBTN.addEventListener("click",this.changeCurrentUnit.bind(this)),this.form.addEventListener("submit",(e=>{e.preventDefault(),O.handleFormSubmit(this.currentUnit)}))}changeCurrentUnit(){if(this.celsius.classList.toggle("currentUnit"),this.fahrenheit.classList.toggle("currentUnit"),this.currentUnit=this.celsius.classList.contains("currentUnit")?"metric":"us",document.contains(document.querySelector(".location-name"))){const e=document.querySelector(".location-name").textContent;y.fetchData(e,this.currentUnit).then((e=>O.renderWeatherData(e,this.currentUnit)))}}}})();