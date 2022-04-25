import{_ as m}from"./index.80fe6262.js";import"./deviceType.f861e0a5.js";import{s as c,o as u,c as p,a as r,v as _,z as S,A as v,y,f as l,g as i,F as b,j as g}from"./vendor.54853348.js";const w={name:"SearchBar",props:{id:{type:String,required:!0},width:{type:String,default:""},searchProps:{type:Object,required:!0}},emits:["submit-search"],setup(o,{emit:t}){let a="";const e=c(()=>o.width!==null?`width: ${o.width}`:"");return{keyword:a,searchStyle:e,submitSearchEmit:s=>{t("submit-search",{id:o.id,keyword:s})}}}},f=["placeholder"];function B(o,t,a,e,h,s){return u(),p("div",{class:"search-wrapper",style:y(e.searchStyle)},[r("div",{class:"icon-search icons",onClick:t[0]||(t[0]=n=>e.submitSearchEmit(e.keyword))}),_(r("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=n=>e.keyword=n),class:"search-input",placeholder:a.searchProps.placeholder,onKeyup:t[2]||(t[2]=v(n=>e.submitSearchEmit(e.keyword),["enter"]))},null,40,f),[[S,e.keyword]])],4)}var k=m(w,[["render",B],["__scopeId","data-v-4aff81b6"]]);const x={name:"SearchBarDemo",components:{SearchBar:k},setup(){const o=c(()=>`
<SearchBar
  id="demo-search-bar"
  width="200px"
  :search-props="searchProps"
  @submit-search="submitSearchEvent"
/>
      `),t=c(()=>`
import { SearchBar } from "air-vue";
      `),a=c(()=>`
const searchProps = computed(() => {
  return {
    placeholder: "Search Something", // optional
  };
});
const submitSearchEvent = (event) => {
  // Do something with the event
  document.querySelector("#" + event.id + "-value").innerHTML =
    event.keyword;
};
      `),e=c(()=>({placeholder:"Search Something"}));return{insertCode:o,importCode:t,templateCode:a,searchProps:e,submitSearchEvent:s=>{document.querySelector("#"+s.id+"-value").innerHTML=s.keyword}}}},E=r("h3",null,"Search Bar",-1),C=r("p",null,"Search Bar is used to search.",-1),j=r("h5",null,"Demo:",-1),D={class:"demo-wrapper"},P=r("div",null,[g(" This is the value return from Search: "),r("span",{id:"demo-search-bar-value"})],-1),T=r("h5",null,"Usage:",-1),q=r("h6",null,"Insert component:",-1),V=r("h6",null,"Import:",-1),I=r("h6",null,"Apply in template\uFF1A",-1);function M(o,t,a,e,h,s){const n=l("SearchBar"),d=l("highlightjs");return u(),p(b,null,[E,C,j,r("div",D,[i(n,{id:"demo-search-bar",width:"200px","search-props":e.searchProps,onSubmitSearch:e.submitSearchEvent},null,8,["search-props","onSubmitSearch"]),P]),T,q,i(d,{language:"html",code:e.insertCode},null,8,["code"]),V,i(d,{language:"js",code:e.importCode},null,8,["code"]),I,i(d,{language:"js",code:e.templateCode},null,8,["code"])],64)}var F=m(x,[["render",M]]);export{F as default};
