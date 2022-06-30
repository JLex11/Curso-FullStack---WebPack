(()=>{var e={254:(e,t,n)=>{const o=new(n(287)),{format:r}=n(257);e.exports=class{async renderBooks(){console.log("rendering books");const e=await o.getBooks(),t=document.getElementById("books-cards-container"),n=document.createDocumentFragment();t.innerHTML="",e.forEach((e=>{const t=document.createElement("div");t.classList.add("card"),t.innerHTML=`\n        <div class="card-body">\n          <div class="card-image">\n            <img src="${e.imagePath}" alt="${e.title}">\n          </div>\n          <div class="card-info">\n            <h5 class="card-title">${e.title}</h5>\n            <p class="card-text">${e.author}</p>\n            <p class="card-isbn">${e.isbn}</p>\n            <a href="#" class="delete-card-btn" _id="${e._id}">Delete</a>\n          </div>\n        </div>\n        <div class="card-footer">\n            <span>${r(e.create_at)}</span>\n        </div>\n      `,n.appendChild(t)})),t.appendChild(n)}async addANewbook(e){await o.postBook(e),this.clearBookForm(),this.renderBooks()}clearBookForm(){document.getElementById("book-form").reset()}renderMsg(e,t){}async deleteBook(e){o.deleteBook(e),this.renderBooks()}}},287:e=>{e.exports=class{constructor(){this.URL="http://localhost:3000/api/books"}async getBooks(){return(await fetch(this.URL)).json()}async postBook(e){const t=await fetch(this.URL,{method:"POST",body:e}),n=await t.json();console.log(n)}async deleteBook(e){const t=await fetch(`${this.URL}/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"}});await t.json()}}},416:(e,t,n)=>{"use strict";n.r(t)},257:(e,t,n)=>{"use strict";n.r(t),n.d(t,{cancel:()=>b,format:()=>f,register:()=>s,render:()=>k});var o=["second","minute","hour","day","week","month","year"],r=["秒","分钟","小时","天","周","个月","年"],a={},s=function(e,t){a[e]=t},c=function(e){return a[e]||a.en_US},i=[60,60,24,7,365/7/12,12];function d(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}function l(e,t){for(var n=e<0?1:0,o=e=Math.abs(e),r=0;e>=i[r]&&r<i.length;r++)e/=i[r];return(e=Math.floor(e))>(0==(r*=2)?9:1)&&(r+=1),t(e,r,o)[n].replace("%s",e.toString())}function u(e,t){return(+(t?d(t):new Date)-+d(e))/1e3}var f=function(e,t,n){return l(u(e,n&&n.relativeDate),c(t))},p="timeago-id";function h(e){return parseInt(e.getAttribute(p))}var m={},v=function(e){clearTimeout(e),delete m[e]};function g(e,t,n,o){v(h(e));var r=o.relativeDate,a=o.minInterval,s=u(t,r);e.innerText=l(s,n);var c=setTimeout((function(){g(e,t,n,o)}),Math.min(1e3*Math.max(function(e){for(var t=1,n=0,o=Math.abs(e);e>=i[n]&&n<i.length;n++)e/=i[n],t*=i[n];return o=(o%=t)?t-o:t,Math.ceil(o)}(s),a||1),2147483647));m[c]=0,function(e,t){e.setAttribute(p,t)}(e,c)}function b(e){e?v(h(e)):Object.keys(m).forEach(v)}function k(e,t,n){var o=e.length?e:[e];return o.forEach((function(e){g(e,function(e){return e.getAttribute("datetime")}(e),c(t),n||{})})),o}s("en_US",(function(e,t){if(0===t)return["just now","right now"];var n=o[Math.floor(t/2)];return e>1&&(n+="s"),[e+" "+n+" ago","in "+e+" "+n]})),s("zh_CN",(function(e,t){if(0===t)return["刚刚","片刻后"];var n=r[~~(t/2)];return[e+" "+n+"前",e+" "+n+"后"]}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n(416);const e=new(n(254));addEventListener("DOMContentLoaded",(()=>{e.renderBooks()}));const t=document.getElementById("book-form");t.addEventListener("submit",(n=>{n.preventDefault();const o=new FormData(t);e.addANewbook(o)})),document.getElementById("books-cards-container").addEventListener("click",(t=>{t.preventDefault(),t.target.classList.contains("delete-card-btn")&&e.deleteBook(t.target.getAttribute("_id"))}))})()})();
//# sourceMappingURL=bundle.js.map