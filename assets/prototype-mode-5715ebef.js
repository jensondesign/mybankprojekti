(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.head.insertAdjacentHTML("beforeend",`<style>.clickable-area {
  cursor: pointer !important;
  background-color: lightblue !important;
  opacity: 0.8 !important;
  border-inline: 1px dashed black !important;
}
</style>`);document.documentElement.addEventListener("click",()=>{const o=r=>{r.classList.add("clickable-area"),setTimeout(()=>{r.classList.remove("clickable-area")},1e3)};setTimeout(()=>{[...document.querySelectorAll("a")].filter(r=>!r.getAttribute("href").startsWith("#")).forEach(o),document.querySelectorAll("form input[type=submit]").forEach(o)},200)});
