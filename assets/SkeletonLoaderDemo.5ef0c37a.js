/* empty css                                                                 */import{_}from"./index.b60dd402.js";import{s as d,o as l,c as i,y as S,r as k,f as h,a as o,g as t,F as u,h as f}from"./vendor.54853348.js";const y={name:"SearchBar",props:{width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:"0.25rem"}},setup(e){return{skeletonStyle:d(()=>({width:e.width,height:e.height,borderRadius:e.borderRadius}))}}};function v(e,r,a,s,p,m){return l(),i("div",{class:"skeleton-wrapper",style:S(s.skeletonStyle)},null,4)}var w=_(y,[["render",v],["__scopeId","data-v-486ee129"]]);const x={name:"DropdownSelectDemo",components:{SkeletonLoader:w},setup(){let e=k({returnValue:"keyword"});const r=d(()=>`
<SkeletonLoader width="50px" height="50px" borderRadius="50%" />
      `),a=d(()=>`
import SkeletonLoader from "../src/components/SkeletonLoader.vue";
      `);return{searchEventReturnValue:e,insertCode:r,importCode:a}}},L=o("h3",null,"Skeleton Loader",-1),$=o("p",null,"Skeleton Loader is used as placeholder on data loading.",-1),R=o("h5",null,"Demo:",-1),b={class:"demo-wrapper"},C=o("h5",null,"Usage:",-1),D=o("h6",null,"Insert component:",-1),B=o("h6",null,"Import:",-1);function V(e,r,a,s,p,m){const n=h("SkeletonLoader"),c=h("highlightjs");return l(),i(u,null,[L,$,R,o("div",b,[t(n),t(n,{height:"4rem"}),t(n,{width:"200px",height:"2rem"}),t(n,{width:"50px",height:"50px",borderRadius:"50%"}),(l(),i(u,null,f(4,(j,g)=>t(n,{key:g,width:"60px",height:"2rem"})),64))]),C,D,t(c,{language:"html",code:s.insertCode},null,8,["code"]),B,t(c,{language:"js",code:s.importCode},null,8,["code"])],64)}var N=_(x,[["render",V]]);export{N as default};
