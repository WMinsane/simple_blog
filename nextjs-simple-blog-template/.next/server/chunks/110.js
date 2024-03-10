exports.id=110,exports.ids=[110],exports.modules={31024:t=>{t.exports={date:"Date_date__Jlt7B"}},91934:t=>{t.exports={tag:"TagListItem_tag__Rx2fJ"}},20181:t=>{t.exports={tags:"TagList_tags__f2Gbi"}},90388:(t,e,a)=>{"use strict";a.d(e,{Z:()=>PublishedDate});var s=a(4656),i=a(58639),r=a.n(i),n=a(98854),o=a(31024),l=a.n(o);function PublishedDate({date:t}){return(0,s.jsxs)("span",{className:l().date,children:[s.jsx(r(),{src:"/clock.svg",alt:"",width:16,height:16,priority:!0}),(0,n.p6)(t)]})}},28516:(t,e,a)=>{"use strict";a.d(e,{Z:()=>TagList});var s=a(4656),i=a(24353),r=a.n(i),n=a(91934),o=a.n(n);function TagListItem({tag:t,hasLink:e=!0}){return e?(0,s.jsxs)(r(),{href:`/tags/${t.id}`,className:o().tag,children:["#",t.name]}):(0,s.jsxs)("span",{className:o().tag,children:["#",t.name]})}var l=a(20181),g=a.n(l);function TagList({tags:t,hasLink:e=!0}){return t?s.jsx(s.Fragment,{children:s.jsx("ul",{className:g().tags,children:t.map(t=>s.jsx("li",{children:s.jsx(TagListItem,{tag:t,hasLink:e})},t.id))})}):null}},6079:(t,e,a)=>{"use strict";a.d(e,{Nm:()=>getDetail,gp:()=>getList,h1:()=>getTag,kV:()=>getTagList,xU:()=>getMonthList});var s=a(96918),i=a(41412);if(!process.env.MICROCMS_SERVICE_DOMAIN)throw Error("MICROCMS_SERVICE_DOMAIN is required");if(!process.env.MICROCMS_API_KEY)throw Error("MICROCMS_API_KEY is required");let r=(0,s.e)({serviceDomain:process.env.MICROCMS_SERVICE_DOMAIN,apiKey:process.env.MICROCMS_API_KEY}),getList=async t=>{let e=await r.getList({endpoint:"blog",queries:t}).catch(i.notFound);return e},getDetail=async(t,e)=>{let a=await r.getListDetail({endpoint:"blog",contentId:t,queries:e}).catch(i.notFound);return a},getTagList=async t=>{let e=await r.getList({endpoint:"tags",queries:t}).catch(i.notFound);return e},getTag=async(t,e)=>{let a=await r.getListDetail({endpoint:"tags",contentId:t,queries:e}).catch(i.notFound);return a},getMonthList=async()=>{let t=await r.get({endpoint:"blog",queries:{fields:"publishedAt",limit:100}});return t.contents}},98854:(t,e,a)=>{"use strict";a.d(e,{Oz:()=>groupByMonth,cW:()=>formatRichText,p6:()=>formatDate});var s=a(50125),i=a(9345),r=a(13365),n=a(62814);a(76596);let formatDate=t=>{let e=new Date(t),a=(0,i.Z)(e,"Asia/Tokyo");return(0,s.Z)(a,"yyyy/MM/dd")},formatToMonth=t=>{let e=new Date(t),a=(0,i.Z)(e,"Asia/Tokyo");return(0,s.Z)(a,"yyyy/MM")},groupByMonth=t=>{let e=t.reduce((t,e)=>{e.publishedAt=formatToMonth(e.publishedAt);let a=t.find(t=>t.publishedAt===e.publishedAt);return a?a.count++:t.push({publishedAt:e.publishedAt,count:1}),t},[]);return e},formatRichText=t=>{let e=r.ZP.load(t),highlight=(t,e)=>{if(!e)return n.Z.highlightAuto(t);try{return n.Z.highlight(t,{language:e?.replace(/^language-/,"")||""})}catch(e){return n.Z.highlightAuto(t)}};return e("pre code").each((t,a)=>{let s=e(a).attr("class"),i=highlight(e(a).text(),s);e(a).html(i.value)}),e.html()}}};