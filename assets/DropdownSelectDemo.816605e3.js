import{_ as h}from"./index.2f688c4f.js";import{D}from"./deviceType.9a00222c.js";import{s as r,o as s,c,a as e,t as w,v as f,x as y,F as v,h as S,y as b,p as g,b as P,f as m,g as a,j as E}from"./vendor.54853348.js";const q={name:"DropdownSelect",props:{id:{type:String,required:!0},width:{type:String,default:""},dropdownProps:{type:Object,required:!0}},emits:["apply-dropdown"],setup(t,{emit:l}){return{dropdownStyle:r(()=>t.width!==null?`width: ${t.width}`:""),applyDropdownEmit:p=>{l("apply-dropdown",{id:t.id,value:p.target.value})}}}},T=t=>(g("data-v-03e729c0"),t=t(),P(),t),x={class:"dropdown-title"},C=["value","selected"],O=T(()=>e("span",{class:"icons icon-dropdown"},null,-1));function j(t,l,n,o,p,_){return s(),c("div",{class:"dropdown-wrapper",style:b(o.dropdownStyle)},[e("span",x,w(n.dropdownProps.title),1),e("select",{class:"dropdown",onChange:l[0]||(l[0]=(...d)=>o.applyDropdownEmit&&o.applyDropdownEmit(...d))},[f(e("option",{value:"invalid",disabled:"",selected:"true"},w(n.dropdownProps.placeholder),513),[[y,n.dropdownProps.default===!1]]),(s(!0),c(v,null,S(n.dropdownProps.options,(d,i)=>(s(),c("option",{key:i,value:d.value,selected:n.dropdownProps.default===i},w(d.label),9,C))),128))],32),O],4)}var I=h(q,[["render",j],["__scopeId","data-v-03e729c0"]]);const k={name:"DropdownSelectDemo",components:{DropdownSelect:I,DataTable:D},setup(){const t=r(()=>`
<DropdownSelect
  id="demo-dropdown-select"
  width="200px"
  :dropdown-props="dropdownProps"
  @apply-dropdown="applyDropdownEvent"
/>
      `),l=r(()=>`
import { DropdownSelect } from "air-vue";
      `),n=r(()=>`
const dropdownProps = computed(() => {
  return {
    title: "Demo Dropdown Title", //optional
    default: false, // required false or index
    placeholder: "Select an option", // optional
    options: [
      {
        label: "Option 1",
        value: 1,
      },
      {
        label: "Option 2",
        value: 2,
      },
      {
        label: "Option 3",
        value: 3,
      },
    ],
  };
});
const applyDropdownEvent = (event) => {
  // Do something with the event
  document.querySelector("#" + event.id + "-value").innerHTML = event.value;
};
      `),o=r(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"id",type:"String",required:"true",default:"-",description:"identify the component"},{name:"width",type:"String",required:"false",default:"100%",description:"width of the component"},{name:"dropdown-props",type:"Object",required:"true",default:"-",description:"options for the dropdown"},{name:"apply-dropdown",type:"<Event>",required:"true",default:"-",description:"received data when event is triggered"}]})),p=r(()=>({title:"Demo Dropdown Title",default:!1,placeholder:"Select an option",options:[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}]}));return{insertCode:t,importCode:l,templateCode:n,tableProps:o,dropdownProps:p,applyDropdownEvent:d=>{document.querySelector("#"+d.id+"-value").innerHTML=d.value}}}},B=e("h3",null,"Dropdown Select",-1),N=e("p",null," Dropdown Select is used to pick an option from list. It will emit and event once option picked. ",-1),A=e("h5",null,"Demo:",-1),H={class:"demo-wrapper"},L=e("div",null,[E(" This is the value return from Dropdown: "),e("span",{id:"demo-dropdown-select-value"})],-1),V=e("h5",null,"Usage:",-1),F=e("h6",null,"Insert component:",-1),M=e("h6",null,"Import:",-1),z=e("h6",null,"Apply in template\uFF1A",-1);function G(t,l,n,o,p,_){const d=m("DropdownSelect"),i=m("DataTable"),u=m("highlightjs");return s(),c(v,null,[B,N,A,e("div",H,[a(d,{id:"demo-dropdown-select",width:"200px","dropdown-props":o.dropdownProps,onApplyDropdown:o.applyDropdownEvent},null,8,["dropdown-props","onApplyDropdown"]),L]),a(i,{"table-props":o.tableProps},null,8,["table-props"]),V,F,a(u,{language:"html",code:o.insertCode},null,8,["code"]),M,a(u,{language:"js",code:o.importCode},null,8,["code"]),z,a(u,{language:"js",code:o.templateCode},null,8,["code"])],64)}var K=h(k,[["render",G]]);export{K as default};
