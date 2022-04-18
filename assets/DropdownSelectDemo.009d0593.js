/* empty css                                                                 */import{_ as h}from"./index.f51c2341.js";import{s as a,o as i,c,a as e,t as u,v,x as D,F as m,h as y,y as S,p as f,b as g,r as E,f as _,g as s}from"./vendor.54853348.js";const b={name:"DropdownSelect",props:{width:{type:String,default:""},dropdownProps:{type:Object,required:!0}},emits:["apply-dropdown"],setup(t,{emit:r}){return{dropdownStyle:a(()=>t.width!==null?`width: ${t.width}`:""),applyDropdownEmit:l=>{r("apply-dropdown",l.target.value)}}}},P=t=>(f("data-v-deb6417c"),t=t(),g(),t),x={class:"dropdown-title"},V=["value","selected"],C=P(()=>e("span",{class:"icons icon-dropdown"},null,-1));function I(t,r,n,o,l,w){return i(),c("div",{class:"dropdown-wrapper",style:S(o.dropdownStyle)},[e("span",x,u(n.dropdownProps.title),1),e("select",{class:"dropdown",onChange:r[0]||(r[0]=(...p)=>o.applyDropdownEmit&&o.applyDropdownEmit(...p))},[v(e("option",{value:"invalid",disabled:"",selected:"true"},u(n.dropdownProps.placeholder),513),[[D,n.dropdownProps.default===!1]]),(i(!0),c(m,null,y(n.dropdownProps.options,(p,d)=>(i(),c("option",{key:d,value:p.value,selected:n.dropdownProps.default===d},u(p.label),9,V))),128))],32),C],4)}var O=h(b,[["render",I],["__scopeId","data-v-deb6417c"]]);const j={name:"DropdownSelectDemo",components:{DropdownSelect:O},setup(){let t=E({returnValue:" select one"});const r=a(()=>`
<DropdownSelect
  width="200px"
  :dropdown-props="dropdownProps"
  @apply-dropdown="applyDropdownEvent"
/>
      `),n=a(()=>`
import { DropdownSelect } from "air-vue";
      `),o=a(()=>`
<DropdownSelect
  width="200px"
  :dropdown-props="dropdownProps"
  @apply-dropdown="applyDropdownEvent"
/>

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
const applyDropdown = (event) => {
  // Do something with the event
  dropdownEventReturnValue.returnValue = event;
};
      `),l=a(()=>({title:"Demo Dropdown Title",default:!1,placeholder:"Select an option",options:[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}]}));return{dropdownEventReturnValue:t,insertCode:r,importCode:n,templateCode:o,dropdownProps:l,applyDropdownEvent:p=>{t.returnValue=p}}}},k=e("h3",null,"Dropdown Select",-1),A=e("p",null," Dropdown Select is used to pick an option from list. It will emit and event once option picked. ",-1),B=e("h5",null,"Demo:",-1),R={class:"demo-wrapper"},T=e("h5",null,"Usage:",-1),q=e("h6",null,"Insert component:",-1),F=e("h6",null,"Import:",-1),N=e("h6",null,"Apply in template\uFF1A",-1);function z(t,r,n,o,l,w){const p=_("DropdownSelect"),d=_("highlightjs");return i(),c(m,null,[k,A,B,e("div",R,[s(p,{width:"200px","dropdown-props":o.dropdownProps,onApplyDropdown:o.applyDropdownEvent},null,8,["dropdown-props","onApplyDropdown"]),e("div",null," This is the value return from Dropdown: "+u(o.dropdownEventReturnValue.returnValue),1)]),T,q,s(d,{language:"html",code:o.insertCode},null,8,["code"]),F,s(d,{language:"js",code:o.importCode},null,8,["code"]),N,s(d,{language:"js",code:o.templateCode},null,8,["code"])],64)}var H=h(j,[["render",z]]);export{H as default};