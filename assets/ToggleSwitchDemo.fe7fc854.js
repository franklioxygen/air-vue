import{_ as u,T as m}from"./index.34817873.js";import{D as _}from"./deviceType.b60ca1f3.js";import{s as l,f as s,o as f,c as w,a as e,g as o,F as v,j as T}from"./vendor.54853348.js";import{F as S}from"./FooterMessage.e59c754a.js";const b={name:"ToggleSwitchDemo",components:{ToggleSwitch:m,DataTable:_,FooterMessage:S},setup(){const i=l(()=>`
<ToggleSwitch
  id="demo-toggle-switch"
  :checked="false"
  :toggle-props="toggleProps"
  @toggle-switch="toggleSwitchEvent"
/>
      `),c=l(()=>`
import { ToggleSwitch } from "air-vue";
      `),a=l(()=>`
const toggleProps = computed(() => {
  return {
    label: "Toggle Switch",
  };
});
const toggleSwitchEvent = (event) => {
  // Do something with the event
  document.querySelector("#" + event.id + "-value").innerHTML = event.state;
};
      `),t=l(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"id",type:"String",required:"true",default:"-",description:"identify the component"},{name:"checked",type:"Boolean",required:"true",default:"false",description:"default checked state"},{name:"toggle-props",type:"Object",required:"false",default:"-",description:"label for the switch"},{name:"toggle-switch",type:"<Event>",required:"true",default:"-",description:"received state when event is triggered"}]})),g=l(()=>({label:"Toggle Switch"}));return{insertCode:i,importCode:c,templateCode:a,tableProps:t,toggleProps:g,toggleSwitchEvent:n=>{document.querySelector("#"+n.id+"-value").innerHTML=n.state}}}},y=e("h3",null,"Toggle Switch",-1),D=e("p",null,"Toggle Switch is used to toggle.",-1),q=e("h5",null,"Demo:",-1),E={class:"demo-wrapper"},C=e("div",null,[T(" This is the value return from Toggle: "),e("span",{id:"demo-toggle-switch-value"})],-1),P=e("h5",null,"Usage:",-1),j=e("h6",null,"Insert component:",-1),k=e("h6",null,"Import:",-1),F=e("h6",null,"Apply in template\uFF1A",-1);function x(i,c,a,t,g,d){const n=s("ToggleSwitch"),p=s("DataTable"),r=s("highlightjs"),h=s("FooterMessage");return f(),w(v,null,[y,D,q,e("div",E,[o(n,{id:"demo-toggle-switch",checked:!0,"toggle-props":t.toggleProps,onToggleSwitch:t.toggleSwitchEvent},null,8,["toggle-props","onToggleSwitch"]),C]),o(p,{"table-props":t.tableProps},null,8,["table-props"]),P,j,o(r,{language:"html",code:t.insertCode},null,8,["code"]),k,o(r,{language:"js",code:t.importCode},null,8,["code"]),F,o(r,{language:"js",code:t.templateCode},null,8,["code"]),o(h)],64)}var V=u(b,[["render",x]]);export{V as default};
