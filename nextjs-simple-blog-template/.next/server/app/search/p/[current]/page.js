"use strict";(()=>{var e={};e.id=575,e.ids=[575],e.modules={55403:e=>{e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},14300:e=>{e.exports=require("buffer")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},71017:e=>{e.exports=require("path")},85477:e=>{e.exports=require("punycode")},12781:e=>{e.exports=require("stream")},71576:e=>{e.exports=require("string_decoder")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},34017:(e,t,r)=>{r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>d,tree:()=>l});var a=r(67096),s=r(16132),n=r(37284),i=r.n(n),o=r(32564),p={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(p[e]=()=>o[e]);r.d(t,p);let l=["",{children:["search",{children:["p",{children:["[current]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,23499)),"C:\\Users\\mnwka\\OneDrive\\ドキュメント\\React\\microCMS\\0223official_simple_template\\nextjs-simple-blog-template\\app\\search\\p\\[current]\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,13950)),"C:\\Users\\mnwka\\OneDrive\\ドキュメント\\React\\microCMS\\0223official_simple_template\\nextjs-simple-blog-template\\app\\search\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,37828)),"C:\\Users\\mnwka\\OneDrive\\ドキュメント\\React\\microCMS\\0223official_simple_template\\nextjs-simple-blog-template\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,44293)),"C:\\Users\\mnwka\\OneDrive\\ドキュメント\\React\\microCMS\\0223official_simple_template\\nextjs-simple-blog-template\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\mnwka\\OneDrive\\ドキュメント\\React\\microCMS\\0223official_simple_template\\nextjs-simple-blog-template\\app\\search\\p\\[current]\\page.tsx"],u="/search/p/[current]/page",m={require:r,loadChunk:()=>Promise.resolve()},d=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/search/p/[current]/page",pathname:"/search/p/[current]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},23499:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Page,revalidate:()=>p});var a=r(4656),s=r(6079),n=r(47537),i=r(16009),o=r(82198);let p=60;async function Page({params:e,searchParams:t}){let r=parseInt(e.current,10),p=await (0,s.gp)({limit:n.V,offset:n.V*(r-1),q:t.q});return(0,a.jsxs)(a.Fragment,{children:[a.jsx(o.Z,{articles:p.contents}),a.jsx(i.Z,{totalCount:p.totalCount,current:r,basePath:"/search",q:t.q})]})}}};var t=require("../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[126,766,568,977,110,14,71],()=>__webpack_exec__(34017));module.exports=r})();