import{_ as u}from"./index.f7df140e.js";import{n as d,o as l,c as i,s as S,x as k,r as _,a as o,h as t,F as h,e as v}from"./vendor.75353d22.js";const f={name:"SearchBar",props:{width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:"0.25rem"}},setup(e){return{skeletonStyle:d(()=>({width:e.width,height:e.height,borderRadius:e.borderRadius}))}}};function y(e,r,s,a,p,m){return l(),i("div",{class:"skeleton-wrapper",style:S(a.skeletonStyle)},null,4)}var x=u(f,[["render",y],["__scopeId","data-v-486ee129"]]);const L={name:"DropdownSelectDemo",components:{SkeletonLoader:x},setup(){let e=k({returnValue:"keyword"});const r=d(()=>`
<SkeletonLoader width="50px" height="50px" borderRadius="50%" />
      `),s=d(()=>`
import SkeletonLoader from "../components/SkeletonLoader.vue";
      `);return{searchEventReturnValue:e,insertCode:r,importCode:s}}},w=o("h3",null,"Skeleton Loader",-1),$=o("p",null,"Skeleton Loader is used as placeholder on data loading.",-1),R=o("h5",null,"Demo:",-1),b={class:"demo-wrapper"},C=o("h5",null,"Usage:",-1),D=o("h6",null,"Insert component:",-1),B=o("h6",null,"Import:",-1);function V(e,r,s,a,p,m){const n=_("SkeletonLoader"),c=_("highlightjs");return l(),i(h,null,[w,$,R,o("div",b,[t(n),t(n,{height:"4rem"}),t(n,{width:"200px",height:"2rem"}),t(n,{width:"50px",height:"50px",borderRadius:"50%"}),(l(),i(h,null,v(4,(j,g)=>t(n,{key:g,width:"60px",height:"2rem"})),64))]),C,D,t(c,{language:"html",code:a.insertCode},null,8,["code"]),B,t(c,{language:"js",code:a.importCode},null,8,["code"])],64)}var F=u(L,[["render",V]]);export{F as default};
