import{n as s,o as d,c as m,a as t,q as _,y as S,z as v,s as y,x as g,r as u,h as l,t as w,F as b}from"./vendor.75353d22.js";import{_ as p}from"./index.f7df140e.js";const B={name:"SearchBar",props:{width:{type:String,default:""},searchProps:{type:Object,required:!0}},emits:["submit-search"],setup(o,{emit:r}){let n="";const e=s(()=>o.width!==null?`width: ${o.width}`:"");return{keyword:n,searchStyle:e,submitSearchEmit:h=>{r("submit-search",h)}}}},f=["placeholder"];function E(o,r,n,e,c,h){return d(),m("div",{class:"search-wrapper",style:y(e.searchStyle)},[t("div",{class:"icon-search icons",onClick:r[0]||(r[0]=a=>e.submitSearchEmit(e.keyword))}),_(t("input",{type:"text","onUpdate:modelValue":r[1]||(r[1]=a=>e.keyword=a),class:"search-input",placeholder:n.searchProps.placeholder,onKeyup:r[2]||(r[2]=v(a=>e.submitSearchEmit(e.keyword),["enter"]))},null,40,f),[[S,e.keyword]])],4)}var x=p(B,[["render",E],["__scopeId","data-v-5357de32"]]);const V={name:"DropdownSelectDemo",components:{SearchBar:x},setup(){let o=g({returnValue:"keyword"});const r=s(()=>`
<SearchBar
  width="200px"
  :search-props="searchProps"
  @submit-search="submitSearchEvent"
/>
      `),n=s(()=>`
import SearchBar from "../components/SearchBar.vue";
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
      `),c=s(()=>({placeholder:"Search Something"}));return{searchEventReturnValue:o,insertCode:r,importCode:n,templateCode:e,searchProps:c,submitSearchEvent:a=>{o.returnValue=a}}}},k=t("h3",null,"Search Bar",-1),C=t("p",null,"Search Bar is used to search.",-1),D=t("h5",null,"Demo:",-1),P={class:"demo-wrapper"},j=t("h5",null,"Usage:",-1),I=t("h6",null,"Insert component:",-1),R=t("h6",null,"Import:",-1),q=t("h6",null,"Apply in template\uFF1A",-1);function z(o,r,n,e,c,h){const a=u("SearchBar"),i=u("highlightjs");return d(),m(b,null,[k,C,D,t("div",P,[l(a,{width:"200px","search-props":e.searchProps,onSubmitSearch:e.submitSearchEvent},null,8,["search-props","onSubmitSearch"]),t("div",null," This is the value return from Search: "+w(e.searchEventReturnValue.returnValue),1)]),j,I,l(i,{language:"html",code:e.insertCode},null,8,["code"]),R,l(i,{language:"js",code:e.importCode},null,8,["code"]),q,l(i,{language:"js",code:e.templateCode},null,8,["code"])],64)}var N=p(V,[["render",z]]);export{N as default};
