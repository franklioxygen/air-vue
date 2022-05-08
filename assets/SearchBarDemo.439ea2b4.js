import{_ as u}from"./index.43206649.js";import{D as b}from"./deviceType.3fcb4f7a.js";import{s as i,o as p,c as m,a as t,v as f,z as v,A as y,y as g,f as d,g as s,F as w,j as B}from"./vendor.54853348.js";import{F as D}from"./FooterMessage.c0bea262.js";const E={name:"SearchBar",props:{id:{type:String,required:!0},width:{type:String,default:""},searchProps:{type:Object,required:!0}},emits:["submit-search"],setup(a,{emit:r}){let n="";const e=i(()=>a.width!==null?`width: ${a.width}`:"");return{keyword:n,searchStyle:e,submitSearchEmit:l=>{r("submit-search",{id:a.id,keyword:l})}}}},k=["placeholder"];function q(a,r,n,e,c,l){return p(),m("div",{class:"search-wrapper",style:g(e.searchStyle)},[t("div",{class:"icon-search icons",onClick:r[0]||(r[0]=o=>e.submitSearchEmit(e.keyword))}),f(t("input",{type:"text","onUpdate:modelValue":r[1]||(r[1]=o=>e.keyword=o),class:"search-input",placeholder:n.searchProps.placeholder,onKeyup:r[2]||(r[2]=y(o=>e.submitSearchEmit(e.keyword),["enter"]))},null,40,k),[[v,e.keyword]])],4)}var x=u(E,[["render",q],["__scopeId","data-v-4aff81b6"]]);const P={name:"SearchBarDemo",components:{SearchBar:x,DataTable:b,FooterMessage:D},setup(){const a=i(()=>`
<SearchBar
  id="demo-search-bar"
  width="200px"
  :search-props="searchProps"
  @submit-search="submitSearchEvent"
/>
      `),r=i(()=>`
import { SearchBar } from "air-vue";
      `),n=i(()=>`
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
      `),e=i(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"id",type:"String",required:"true",default:"-",description:"identify the component"},{name:"width",type:"String",required:"false",default:"100%",description:"width of the component"},{name:"search-props",type:"Object",required:"true",default:"-",description:"placeholder for the search"},{name:"submit-search",type:"<Event>",required:"true",default:"-",description:"received data when event is triggered"}]})),c=i(()=>({placeholder:"Search Something"}));return{insertCode:a,importCode:r,templateCode:n,tableProps:e,searchProps:c,submitSearchEvent:o=>{document.querySelector("#"+o.id+"-value").innerHTML=o.keyword}}}},T=t("h3",null,"Search Bar",-1),C=t("p",null,"Search Bar is used to search.",-1),j=t("h5",null,"Demo:",-1),F={class:"demo-wrapper"},M=t("div",null,[B(" This is the value return from Search: "),t("span",{id:"demo-search-bar-value"})],-1),N=t("h5",null,"Usage:",-1),V=t("h6",null,"Insert component:",-1),H=t("h6",null,"Import:",-1),I=t("h6",null,"Apply in template\uFF1A",-1);function z(a,r,n,e,c,l){const o=d("SearchBar"),_=d("DataTable"),h=d("highlightjs"),S=d("FooterMessage");return p(),m(w,null,[T,C,j,t("div",F,[s(o,{id:"demo-search-bar",width:"200px","search-props":e.searchProps,onSubmitSearch:e.submitSearchEvent},null,8,["search-props","onSubmitSearch"]),M]),s(_,{"table-props":e.tableProps},null,8,["table-props"]),N,V,s(h,{language:"html",code:e.insertCode},null,8,["code"]),H,s(h,{language:"js",code:e.importCode},null,8,["code"]),I,s(h,{language:"js",code:e.templateCode},null,8,["code"]),s(S)],64)}var U=u(P,[["render",z]]);export{U as default};
