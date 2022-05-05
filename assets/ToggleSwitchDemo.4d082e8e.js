import{_ as p,T as u}from"./index.2f688c4f.js";import{D as m}from"./deviceType.9a00222c.js";import{s as o,f as s,o as _,c as f,a as e,g as l,F as w,j as v}from"./vendor.54853348.js";const T={name:"ToggleSwitchDemo",components:{ToggleSwitch:u,DataTable:m},setup(){const r=o(()=>`
<ToggleSwitch
  id="demo-toggle-switch"
  :checked="false"
  :toggle-props="toggleProps"
  @toggle-switch="toggleSwitchEvent"
/>
      `),c=o(()=>`
import { ToggleSwitch } from "air-vue";
      `),a=o(()=>`
const toggleProps = computed(() => {
  return {
    label: "Toggle Switch",
  };
});
const toggleSwitchEvent = (event) => {
  // Do something with the event
  document.querySelector("#" + event.id + "-value").innerHTML = event.state;
};
      `),t=o(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"id",type:"String",required:"true",default:"-",description:"identify the component"},{name:"checked",type:"Boolean",required:"true",default:"false",description:"default checked state"},{name:"toggle-props",type:"Object",required:"false",default:"-",description:"label for the switch"},{name:"toggle-switch",type:"<Event>",required:"true",default:"-",description:"received state when event is triggered"}]})),g=o(()=>({label:"Toggle Switch"}));return{insertCode:r,importCode:c,templateCode:a,tableProps:t,toggleProps:g,toggleSwitchEvent:n=>{document.querySelector("#"+n.id+"-value").innerHTML=n.state}}}},S=e("h3",null,"Toggle Switch",-1),b=e("p",null,"Toggle Switch is used to toggle.",-1),y=e("h5",null,"Demo:",-1),D={class:"demo-wrapper"},q=e("div",null,[v(" This is the value return from Toggle: "),e("span",{id:"demo-toggle-switch-value"})],-1),E=e("h5",null,"Usage:",-1),C=e("h6",null,"Insert component:",-1),P=e("h6",null,"Import:",-1),j=e("h6",null,"Apply in template\uFF1A",-1);function k(r,c,a,t,g,d){const n=s("ToggleSwitch"),h=s("DataTable"),i=s("highlightjs");return _(),f(w,null,[S,b,y,e("div",D,[l(n,{id:"demo-toggle-switch",checked:!0,"toggle-props":t.toggleProps,onToggleSwitch:t.toggleSwitchEvent},null,8,["toggle-props","onToggleSwitch"]),q]),l(h,{"table-props":t.tableProps},null,8,["table-props"]),E,C,l(i,{language:"html",code:t.insertCode},null,8,["code"]),P,l(i,{language:"js",code:t.importCode},null,8,["code"]),j,l(i,{language:"js",code:t.templateCode},null,8,["code"])],64)}var H=p(T,[["render",k]]);export{H as default};
