(()=>{var e={};e.id=83,e.ids=[83],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},14300:e=>{"use strict";e.exports=require("buffer")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},5e4:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>p,routeModule:()=>d,tree:()=>c});var i=r(67096),s=r(16132),a=r(37284),n=r.n(a),l=r(32564),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let c=["",{children:["articles",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,16075)),"C:\\Users\\mnwka\\OneDrive\\ドキュメント\\React\\microCMS\\0223official_simple_template\\nextjs-simple-blog-template\\app\\articles\\[slug]\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,37828)),"C:\\Users\\mnwka\\OneDrive\\ドキュメント\\React\\microCMS\\0223official_simple_template\\nextjs-simple-blog-template\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,44293)),"C:\\Users\\mnwka\\OneDrive\\ドキュメント\\React\\microCMS\\0223official_simple_template\\nextjs-simple-blog-template\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["C:\\Users\\mnwka\\OneDrive\\ドキュメント\\React\\microCMS\\0223official_simple_template\\nextjs-simple-blog-template\\app\\articles\\[slug]\\page.tsx"],m="/articles/[slug]/page",u={require:r,loadChunk:()=>Promise.resolve()},d=new i.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/articles/[slug]/page",pathname:"/articles/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},22517:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,46686,23)),Promise.resolve().then(r.t.bind(r,30614,23)),Promise.resolve().then(r.t.bind(r,6800,23))},12933:e=>{e.exports={container:"page_container__d8IHE",main:"page_main__TJnGF"}},5900:e=>{e.exports={main:"Article_main__I1Dce",subContent:"Article_subContent__ZTdRM",content:"Article_content__m_nzR",description:"Article_description__v_Qu6",meta:"Article_meta__noYqu",writer:"Article_writer__HQfyM",writerIcon:"Article_writerIcon__ivA_V",writerName:"Article_writerName__CM3Wv",thumbnail:"Article_thumbnail__5rpq1",title:"Article_title__M_e36"}},25685:e=>{e.exports={wrapper:"Profile_wrapper__ZHsHG",icon:"Profile_icon__83Kqp",content:"Profile_content___5hOn",name:"Profile_name__szATv",profile:"Profile_profile__Vybv0"}},16075:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Page,generateMetadata:()=>generateMetadata,revalidate:()=>_});var i=r(4656),s=r(6079),a=r(98854),n=r(90388),l=r(5900),o=r.n(l),c=r(28516),p=r(25685),m=r.n(p);function Profile({writer:e}){return e?(0,i.jsxs)("div",{className:m().wrapper,children:[(0,i.jsxs)("picture",{children:[i.jsx("source",{type:"image/webp",srcSet:`${e?.image?.url}?fm=webp&fit=crop&96&h=96 1x, ${e?.image?.url}?fm=webp&fit=crop&w=96&h=96&dpr=2 2x`}),i.jsx("img",{src:e?.image?.url,alt:"",className:m().icon,width:e?.image?.width,height:e?.image?.height})]}),(0,i.jsxs)("div",{className:m().content,children:[i.jsx("p",{className:m().name,children:e?.name}),i.jsx("p",{className:m().profile,children:e?.profile})]})]}):null}function Article({data:e}){return(0,i.jsxs)("main",{className:o().main,children:[(0,i.jsxs)("picture",{children:[i.jsx("source",{type:"image/webp",media:"(max-width: 640px)",srcSet:`${e.thumbnail?.url}?fm=webp&w=414 1x, ${e.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}),i.jsx("source",{type:"image/webp",srcSet:`${e.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504 1x, ${e.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504&dpr=2 2x`}),i.jsx("img",{src:e.thumbnail?.url,alt:"",className:o().thumbnail,width:100,height:e.thumbnail?.height})]}),(0,i.jsxs)("div",{className:o().subContent,children:[i.jsx("h1",{className:o().title,children:e.title}),i.jsx(n.Z,{date:e.publishedAt||e.createdAt}),i.jsx(c.Z,{tags:e.tags})]}),i.jsx("div",{className:o().content,dangerouslySetInnerHTML:{__html:`${(0,a.cW)(e.content)}`}}),i.jsx(Profile,{writer:e.writer})]})}var u=r(12933),d=r.n(u);let _=60;async function generateMetadata({params:e,searchParams:t}){let r=await (0,s.Nm)(e.slug,{draftKey:t.dk});return{title:r.title,description:r.description,openGraph:{title:r.title,description:r.description,images:[r?.thumbnail?.url||""]}}}async function Page({params:e,searchParams:t}){let r=await (0,s.Nm)(e.slug,{draftKey:t.dk});return i.jsx(i.Fragment,{children:i.jsx("div",{className:d().main,children:i.jsx(Article,{data:r})})})}}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[126,766,568,977,110],()=>__webpack_exec__(5e4));module.exports=r})();