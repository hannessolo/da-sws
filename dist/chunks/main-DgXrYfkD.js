const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../fonts/fonts.css","../lazy/lazy.css","./delayed-qsWSOEKH.js","./aem-CkpPMh2a.js"])))=>i.map(i=>d[i]);
import{s as g,j as E,k as _,l as L,m as S,n as v,_ as r,d as T,a as k,e as I,f as P,h as u,o as c,b as m,c as p,g as f,w as C}from"./aem-CkpPMh2a.js";const B=window.location.hostname.includes("adobeaemcloud.com"),q=()=>{if(!B)return!1;try{if(window.self!==window.top){const e=window.top.location.href;return e.includes("ui#")&&e.includes("universal-editor")}}catch(e){console.error("Error checking Universal Editor mode: Possible cross-origin issue.",e)}return!1};function A(e,o,t){t||(t=[...e.attributes].map(({nodeName:a})=>a)),t.forEach(a=>{const n=e.getAttribute(a);n&&(o.setAttribute(a,n),e.removeAttribute(a))})}function D(e,o){A(e,o,[...e.attributes].map(({nodeName:t})=>t).filter(t=>t.startsWith("data-aue-")||t.startsWith("data-richtext-")))}async function w(){await r(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url);try{window.location.hostname.includes("localhost")||sessionStorage.setItem("fonts-loaded","true")}catch{}}function h(){const e=document.createElement("div");return e.classList.add("nsw-container"),e}function y(e){const o=document.createElement("div");return o.classList.add("nsw-layout"),o.append(e),o}function x(){const e=document.createElement("aside");return e.classList.add("nsw-layout__sidebar","nsw-layout__sidebar--desktop"),e}function b(e,o){const t=c("breadcrumb","");t&&(e.insertBefore(t,o),m(t),p(t))}function O(e){if(u("template")!=="page-template"||document.body.classList.contains("page-template-loaded"))return;document.body.classList.add("page-template-loaded"),e.classList.add("nsw-layout__main");const t=h(),a=y(e);t.append(a);const n=x();a.prepend(n),document.body.insertBefore(t,document.querySelector("footer")),b(t,a);const s=c("sidebar","");s&&(n.appendChild(s),m(s),p(s))}function M(e){if(u("template")!=="search-template"||document.body.classList.contains("search-template-loaded"))return;document.body.classList.add("search-template-loaded");const t=e.querySelector("div")||e.appendChild(document.createElement("div"));if(t){const s=c("search","");s&&t.append(s)}const a=h(),n=y(e);a.append(n),b(a,n),document.body.insertBefore(a,document.querySelector("footer"))}const F=e=>{if(q())return!1;try{const o=e.querySelectorAll("ul li a"),t=new Set;o.forEach(a=>{const n=a.querySelector("span.icon");if(n&&n.dataset.icon==="east"){const s=a.closest("li"),i=s==null?void 0:s.closest("ul");if(s&&i){const d=a.textContent.trim().replace(n.textContent.trim(),"").trim();if(d.length>0){a.innerHTML="";const l=document.createElement("span");l.textContent=d,a.appendChild(l),a.appendChild(n)}t.add(i)}}}),t.forEach(a=>{if(a.classList.add("linklist"),!a.parentElement.classList.contains("nsw-link-list")){const n=document.createElement("div");n.className="nsw-link-list",D(a,n),a.parentNode.insertBefore(n,a),n.appendChild(a)}})}catch(o){console.error("Error in decorateLinklist:",o)}};async function R(e){if(!window.isErrorPage)return;const{errorpagetheme:o}=await f()||{};o&&e.closest("body").classList.add(o)}function U(e){O(e),M(e),T(e),k(e),I(e),P(e),F(e),R(e)}async function V(e){document.documentElement.lang="en",E();const o=e.querySelector("main");o&&(U(o),document.body.classList.add("appear"),await _(o.querySelector(".section"),C));try{(window.innerWidth>=900||sessionStorage.getItem("fonts-loaded"))&&w()}catch{}}async function N(e){const o=e.querySelector("main");await L(o);const{hash:t}=window.location,a=t?e.getElementById(t.substring(1)):!1;t&&a&&a.scrollIntoView(),S(e.querySelector("header")),v(e.querySelector("footer")),r(()=>Promise.resolve({}),__vite__mapDeps([1]),import.meta.url),w()}function H(){window.setTimeout(()=>r(()=>import("./delayed-qsWSOEKH.js"),__vite__mapDeps([2,3]),import.meta.url),3e3)}async function W(){var e;typeof process<"u"&&((e=process==null?void 0:process.env)!=null&&e.VITEST)||(window.isErrorPage&&g("404",{source:document.referrer}),await V(document),await N(document),H())}async function z(){if(window.searchData=window.searchData||{},Object.keys(window.searchData).length===0){const o=(await f()).pagesindexurl,t=await fetch(o);window.searchData=JSON.parse(await t.text()).data}return window.searchData}W();export{B as I,U as d,z as f,D as m};
//# sourceMappingURL=main-DgXrYfkD.js.map
