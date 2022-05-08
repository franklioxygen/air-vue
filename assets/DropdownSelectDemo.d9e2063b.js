import{_ as h}from"./index.43206649.js";import{D}from"./deviceType.3fcb4f7a.js";import{s as p,o as c,c as u,a as e,t as m,v as y,x as S,F as v,h as g,y as b,p as P,b as E,f as i,g as l,j as q}from"./vendor.54853348.js";import{F as T}from"./FooterMessage.c0bea262.js";const x={name:"DropdownSelect",props:{id:{type:String,required:!0},width:{type:String,default:""},dropdownProps:{type:Object,required:!0}},emits:["apply-dropdown"],setup(t,{emit:r}){return{dropdownStyle:p(()=>t.width!==null?`width: ${t.width}`:""),applyDropdownEmit:a=>{r("apply-dropdown",{id:t.id,value:a.target.value})}}}},C=t=>(P("data-v-03e729c0"),t=t(),E(),t),O={class:"dropdown-title"},j=["value","selected"],I=C(()=>e("span",{class:"icons icon-dropdown"},null,-1));function F(t,r,n,o,a,_){return c(),u("div",{class:"dropdown-wrapper",style:b(o.dropdownStyle)},[e("span",O,m(n.dropdownProps.title),1),e("select",{class:"dropdown",onChange:r[0]||(r[0]=(...d)=>o.applyDropdownEmit&&o.applyDropdownEmit(...d))},[y(e("option",{value:"invalid",disabled:"",selected:"true"},m(n.dropdownProps.placeholder),513),[[S,n.dropdownProps.default===!1]]),(c(!0),u(v,null,g(n.dropdownProps.options,(d,s)=>(c(),u("option",{key:s,value:d.value,selected:n.dropdownProps.default===s},m(d.label),9,j))),128))],32),I],4)}var k=h(x,[["render",F],["__scopeId","data-v-03e729c0"]]);const M={name:"DropdownSelectDemo",components:{DropdownSelect:k,DataTable:D,FooterMessage:T},setup(){const t=p(()=>`
<DropdownSelect
  id="demo-dropdown-select"
  width="200px"
  :dropdown-props="dropdownProps"
  @apply-dropdown="applyDropdownEvent"
/>
      `),r=p(()=>`
import { DropdownSelect } from "air-vue";
      `),n=p(()=>`
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
      `),o=p(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"id",type:"String",required:"true",default:"-",description:"identify the component"},{name:"width",type:"String",required:"false",default:"100%",description:"width of the component"},{name:"dropdown-props",type:"Object",required:"true",default:"-",description:"options for the dropdown"},{name:"apply-dropdown",type:"<Event>",required:"true",default:"-",description:"received data when event is triggered"}]})),a=p(()=>({title:"Demo Dropdown Title",default:!1,placeholder:"Select an option",options:[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}]}));return{insertCode:t,importCode:r,templateCode:n,tableProps:o,dropdownProps:a,applyDropdownEvent:d=>{document.querySelector("#"+d.id+"-value").innerHTML=d.value}}}},B=e("h3",null,"Dropdown Select",-1),N=e("p",null," Dropdown Select is used to pick an option from list. It will emit and event once option picked. ",-1),A=e("h5",null,"Demo:",-1),H={class:"demo-wrapper"},L=e("div",null,[q(" This is the value return from Dropdown: "),e("span",{id:"demo-dropdown-select-value"})],-1),V=e("h5",null,"Usage:",-1),z=e("h6",null,"Insert component:",-1),G=e("h6",null,"Import:",-1),R=e("h6",null,"Apply in template\uFF1A",-1);function U(t,r,n,o,a,_){const d=i("DropdownSelect"),s=i("DataTable"),w=i("highlightjs"),f=i("FooterMessage");return c(),u(v,null,[B,N,A,e("div",H,[l(d,{id:"demo-dropdown-select",width:"200px","dropdown-props":o.dropdownProps,onApplyDropdown:o.applyDropdownEvent},null,8,["dropdown-props","onApplyDropdown"]),L]),l(s,{"table-props":o.tableProps},null,8,["table-props"]),V,z,l(w,{language:"html",code:o.insertCode},null,8,["code"]),G,l(w,{language:"js",code:o.importCode},null,8,["code"]),R,l(w,{language:"js",code:o.templateCode},null,8,["code"]),l(f)],64)}var X=h(M,[["render",U]]);export{X as default};
