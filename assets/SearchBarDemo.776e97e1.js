/* empty css                                                                 */import{_ as d}from"./index.03d29681.js";import{s,o as m,c as p,a as t,v as _,z as S,A as v,y,r as g,f as u,g as l,t as w,F as b}from"./vendor.54853348.js";const f={name:"SearchBar",props:{width:{type:String,default:""},searchProps:{type:Object,required:!0}},emits:["submit-search"],setup(a,{emit:r}){let n="";const e=s(()=>a.width!==null?`width: ${a.width}`:"");return{keyword:n,searchStyle:e,submitSearchEmit:h=>{r("submit-search",h)}}}},B=["placeholder"];function E(a,r,n,e,c,h){return m(),p("div",{class:"search-wrapper",style:y(e.searchStyle)},[t("div",{class:"icon-search icons",onClick:r[0]||(r[0]=o=>e.submitSearchEmit(e.keyword))}),_(t("input",{type:"text","onUpdate:modelValue":r[1]||(r[1]=o=>e.keyword=o),class:"search-input",placeholder:n.searchProps.placeholder,onKeyup:r[2]||(r[2]=v(o=>e.submitSearchEmit(e.keyword),["enter"]))},null,40,B),[[S,e.keyword]])],4)}var V=d(f,[["render",E],["__scopeId","data-v-5357de32"]]);const k={name:"SearchBarDemo",components:{SearchBar:V},setup(){let a=g({returnValue:"keyword"});const r=s(()=>`
<SearchBar
  width="200px"
  :search-props="searchProps"
  @submit-search="submitSearchEvent"
/>
      `),n=s(()=>`
import { SearchBar } from "air-vue";
      `),e=s(()=>`
const searchProps = computed(() => {
    return {
        placeholder: "Search Something", // optional
    };
});
const submitSearch = (event) => {
    // Do something with the event
    searchEventReturnValue.returnValue = event;
};
      `),c=s(()=>({placeholder:"Search Something"}));return{searchEventReturnValue:a,insertCode:r,importCode:n,templateCode:e,searchProps:c,submitSearchEvent:o=>{a.returnValue=o}}}},x=t("h3",null,"Search Bar",-1),C=t("p",null,"Search Bar is used to search.",-1),D=t("h5",null,"Demo:",-1),P={class:"demo-wrapper"},j=t("h5",null,"Usage:",-1),I=t("h6",null,"Insert component:",-1),R=t("h6",null,"Import:",-1),z=t("h6",null,"Apply in template\uFF1A",-1);function A(a,r,n,e,c,h){const o=u("SearchBar"),i=u("highlightjs");return m(),p(b,null,[x,C,D,t("div",P,[l(o,{width:"200px","search-props":e.searchProps,onSubmitSearch:e.submitSearchEvent},null,8,["search-props","onSubmitSearch"]),t("div",null," This is the value return from Search: "+w(e.searchEventReturnValue.returnValue),1)]),j,I,l(i,{language:"html",code:e.insertCode},null,8,["code"]),R,l(i,{language:"js",code:e.importCode},null,8,["code"]),z,l(i,{language:"js",code:e.templateCode},null,8,["code"])],64)}var T=d(k,[["render",A]]);export{T as default};
