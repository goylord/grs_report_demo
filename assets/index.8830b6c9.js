import{r as e,o as t,c as i,a as r,b as n,d as o,e as s,f as d}from"./vendor.133e39ba.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const u={};u.render=function(r,n){const o=e("router-view");return t(),i(o)};const l={},c={"../views/designer/index.vue":()=>{return e=()=>import("./index.d6758980.js"),(t=["assets/index.d6758980.js","assets/index.bac581ce.css","assets/vendor.133e39ba.js"])&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in l)return;l[e]=!0;const t=e.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${i}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e())):e();var e,t}};console.log(c);const a=e=>`../views/${e}.vue`,f=r({history:n(),routes:[{path:"/",name:"designer",component:(g="designer/index",console.log(a(g)),c[a(g)])}]});var g;const m=o({state:{widgetList:[],widgetConfig:{},screenConfig:{},uuid:""},mutations:{ADD_WIDGET(e,t){e.widgetList.push(t)},REMOVE_WIDGET(e,t){e.widgetList=e.widgetList.filter((e=>e.uuid!==t))},GET_WIEGET(e,t){const i=e.widgetList.filter((e=>e.uuid!==t));return i.length>0?i[0]:e.widgetList[0]},SET_WIDGET_CONFIG(e,t){e.widgetConfig[t.uuid]||(e.widgetConfig[t.uuid]={}),e.widgetConfig[t.uuid][t.propsName]=t.value},SET_SCREEN_CONFIG(e,t){e.screenConfig=t},SET_DEFAULT_WIDGET_CONFIG(e,t){e.widgetConfig[t.uuid]=t.defaultValues,console.log(e)},SET_UUID(e,t){e.uuid=t}}});s(u).use(f).use(m).use(d,{size:"small"}).mount("#app");
