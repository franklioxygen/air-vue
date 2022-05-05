import{_ as u}from"./index.2f688c4f.js";import{D as S}from"./deviceType.9a00222c.js";import{s,o as p,c as m,a as t,v as b,z as v,A as f,y,f as h,g as i,F as g,j as w}from"./vendor.54853348.js";const B={name:"SearchBar",props:{id:{type:String,required:!0},width:{type:String,default:""},searchProps:{type:Object,required:!0}},emits:["submit-search"],setup(o,{emit:r}){let n="";const e=s(()=>o.width!==null?`width: ${o.width}`:"");return{keyword:n,searchStyle:e,submitSearchEmit:l=>{r("submit-search",{id:o.id,keyword:l})}}}},D=["placeholder"];function E(o,r,n,e,c,l){return p(),m("div",{class:"search-wrapper",style:y(e.searchStyle)},[t("div",{class:"icon-search icons",onClick:r[0]||(r[0]=a=>e.submitSearchEmit(e.keyword))}),b(t("input",{type:"text","onUpdate:modelValue":r[1]||(r[1]=a=>e.keyword=a),class:"search-input",placeholder:n.searchProps.placeholder,onKeyup:r[2]||(r[2]=f(a=>e.submitSearchEmit(e.keyword),["enter"]))},null,40,D),[[v,e.keyword]])],4)}var k=u(B,[["render",E],["__scopeId","data-v-4aff81b6"]]);const q={name:"SearchBarDemo",components:{SearchBar:k,DataTable:S},setup(){const o=s(()=>`
<SearchBar
  id="demo-search-bar"
  width="200px"
  :search-props="searchProps"
  @submit-search="submitSearchEvent"
/>
      `),r=s(()=>`
import { SearchBar } from "air-vue";
      `),n=s(()=>`
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
      `),e=s(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"id",type:"String",required:"true",default:"-",description:"identify the component"},{name:"width",type:"String",required:"false",default:"100%",description:"width of the component"},{name:"search-props",type:"Object",required:"true",default:"-",description:"placeholder for the search"},{name:"submit-search",type:"<Event>",required:"true",default:"-",description:"received data when event is triggered"}]})),c=s(()=>({placeholder:"Search Something"}));return{insertCode:o,importCode:r,templateCode:n,tableProps:e,searchProps:c,submitSearchEvent:a=>{document.querySelector("#"+a.id+"-value").innerHTML=a.keyword}}}},x=t("h3",null,"Search Bar",-1),P=t("p",null,"Search Bar is used to search.",-1),T=t("h5",null,"Demo:",-1),C={class:"demo-wrapper"},j=t("div",null,[w(" This is the value return from Search: "),t("span",{id:"demo-search-bar-value"})],-1),N=t("h5",null,"Usage:",-1),V=t("h6",null,"Insert component:",-1),H=t("h6",null,"Import:",-1),I=t("h6",null,"Apply in template\uFF1A",-1);function M(o,r,n,e,c,l){const a=h("SearchBar"),_=h("DataTable"),d=h("highlightjs");return p(),m(g,null,[x,P,T,t("div",C,[i(a,{id:"demo-search-bar",width:"200px","search-props":e.searchProps,onSubmitSearch:e.submitSearchEvent},null,8,["search-props","onSubmitSearch"]),j]),i(_,{"table-props":e.tableProps},null,8,["table-props"]),N,V,i(d,{language:"html",code:e.insertCode},null,8,["code"]),H,i(d,{language:"js",code:e.importCode},null,8,["code"]),I,i(d,{language:"js",code:e.templateCode},null,8,["code"])],64)}var K=u(q,[["render",M]]);export{K as default};
