import{_ as m}from"./index.80fe6262.js";import"./deviceType.f861e0a5.js";import{s as r,o as c,c as u,a as o,t as w,v,x as D,F as h,h as y,y as S,p as f,b as g,f as _,g as i,j as b}from"./vendor.54853348.js";const E={name:"DropdownSelect",props:{id:{type:String,required:!0},width:{type:String,default:""},dropdownProps:{type:Object,required:!0}},emits:["apply-dropdown"],setup(t,{emit:d}){return{dropdownStyle:r(()=>t.width!==null?`width: ${t.width}`:""),applyDropdownEmit:a=>{d("apply-dropdown",{id:t.id,value:a.target.value})}}}},P=t=>(f("data-v-03e729c0"),t=t(),g(),t),x={class:"dropdown-title"},C=["value","selected"],I=P(()=>o("span",{class:"icons icon-dropdown"},null,-1));function O(t,d,n,e,a,s){return c(),u("div",{class:"dropdown-wrapper",style:S(e.dropdownStyle)},[o("span",x,w(n.dropdownProps.title),1),o("select",{class:"dropdown",onChange:d[0]||(d[0]=(...l)=>e.applyDropdownEmit&&e.applyDropdownEmit(...l))},[v(o("option",{value:"invalid",disabled:"",selected:"true"},w(n.dropdownProps.placeholder),513),[[D,n.dropdownProps.default===!1]]),(c(!0),u(h,null,y(n.dropdownProps.options,(l,p)=>(c(),u("option",{key:p,value:l.value,selected:n.dropdownProps.default===p},w(l.label),9,C))),128))],32),I],4)}var j=m(E,[["render",O],["__scopeId","data-v-03e729c0"]]);const T={name:"DropdownSelectDemo",components:{DropdownSelect:j},setup(){const t=r(()=>`
<DropdownSelect
  id="demo-dropdown-select"
  width="200px"
  :dropdown-props="dropdownProps"
  @apply-dropdown="applyDropdownEvent"
/>
      `),d=r(()=>`
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
      `),e=r(()=>({title:"Demo Dropdown Title",default:!1,placeholder:"Select an option",options:[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}]}));return{insertCode:t,importCode:d,templateCode:n,dropdownProps:e,applyDropdownEvent:s=>{document.querySelector("#"+s.id+"-value").innerHTML=s.value}}}},k=o("h3",null,"Dropdown Select",-1),q=o("p",null," Dropdown Select is used to pick an option from list. It will emit and event once option picked. ",-1),A=o("h5",null,"Demo:",-1),B={class:"demo-wrapper"},L=o("div",null,[b(" This is the value return from Dropdown: "),o("span",{id:"demo-dropdown-select-value"})],-1),N=o("h5",null,"Usage:",-1),V=o("h6",null,"Insert component:",-1),F=o("h6",null,"Import:",-1),H=o("h6",null,"Apply in template\uFF1A",-1);function M(t,d,n,e,a,s){const l=_("DropdownSelect"),p=_("highlightjs");return c(),u(h,null,[k,q,A,o("div",B,[i(l,{id:"demo-dropdown-select",width:"200px","dropdown-props":e.dropdownProps,onApplyDropdown:e.applyDropdownEvent},null,8,["dropdown-props","onApplyDropdown"]),L]),N,V,i(p,{language:"html",code:e.insertCode},null,8,["code"]),F,i(p,{language:"js",code:e.importCode},null,8,["code"]),H,i(p,{language:"js",code:e.templateCode},null,8,["code"])],64)}var G=m(T,[["render",M]]);export{G as default};
