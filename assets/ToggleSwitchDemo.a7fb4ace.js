import{_ as d,T as p}from"./index.80fe6262.js";import"./deviceType.f861e0a5.js";import{s as o,f as r,o as u,c as _,a as e,g as l,F as m,j as w}from"./vendor.54853348.js";const S={name:"ToggleSwitchDemo",components:{ToggleSwitch:p},setup(){const c=o(()=>`
<ToggleSwitch
  id="demo-toggle-switch"
  :checked="false"
  :toggle-props="toggleProps"
  @toggle-switch="toggleSwitchEvent"
/>
      `),s=o(()=>`
import { ToggleSwitch } from "air-vue";
      `),i=o(()=>`
const toggleProps = computed(() => {
  return {
    label: "Toggle Switch",
  };
});
const toggleSwitchEvent = (event) => {
  // Do something with the event
  document.querySelector("#" + event.id + "-value").innerHTML = event.state;
};
      `);return{toggleProps:o(()=>({label:"Toggle Switch"})),insertCode:c,importCode:s,templateCode:i,toggleSwitchEvent:n=>{document.querySelector("#"+n.id+"-value").innerHTML=n.state}}}},v=e("h3",null,"Toggle Switch",-1),T=e("p",null,"Toggle Switch is used to toggle.",-1),f=e("h5",null,"Demo:",-1),C={class:"demo-wrapper"},E=e("div",null,[w(" This is the value return from Toggle: "),e("span",{id:"demo-toggle-switch-value"})],-1),j=e("h5",null,"Usage:",-1),x=e("h6",null,"Insert component:",-1),y=e("h6",null,"Import:",-1),D=e("h6",null,"Apply in template\uFF1A",-1);function P(c,s,i,t,h,n){const a=r("ToggleSwitch"),g=r("highlightjs");return u(),_(m,null,[v,T,f,e("div",C,[l(a,{id:"demo-toggle-switch",checked:!0,"toggle-props":t.toggleProps,onToggleSwitch:t.toggleSwitchEvent},null,8,["toggle-props","onToggleSwitch"]),E]),j,x,l(g,{language:"html",code:t.insertCode},null,8,["code"]),y,l(g,{language:"js",code:t.importCode},null,8,["code"]),D,l(g,{language:"js",code:t.templateCode},null,8,["code"])],64)}var V=d(S,[["render",P]]);export{V as default};
