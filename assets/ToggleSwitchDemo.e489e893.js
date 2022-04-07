import{_ as d,T as _}from"./index.4c4601d4.js";import{s as l,r as h,f as u,o as p,c as m,a as t,g as n,t as v,F as w}from"./vendor.54853348.js";const S={name:"ToggleSwitchDemo",components:{ToggleSwitch:_},setup(){const c=l(()=>`
<ToggleSwitch
  id="demo-toggle-switch"
  :checked="checked.value"
  :toggle-props="toggleProps"
  @toggle-switch="toggleButtonEvent"
/>
      `),s=l(()=>`
import ToggleSwitch from "../components/ToggleSwitch.vue";
      `),r=l(()=>`
const checked = reactive({
    value: false,
});
const toggleProps = computed(() => {
    return {
        label: "Toggle Switch",
    };
});
const toggleSwitchEvent = (event) => {
    // Do something with the event
    toggleEventReturnValue.returnValue = event;
};
      `),e=h({value:!1});let g=h({returnValue:e.value});const a=l(()=>({label:"Toggle Switch"}));return{toggleEventReturnValue:g,checked:e,toggleProps:a,insertCode:c,importCode:s,templateCode:r,toggleSwitchEvent:o=>{g.returnValue=o}}}},T=t("h3",null,"Toggle Switch",-1),f=t("p",null,"Toggle Switch is used to toggle.",-1),k=t("h5",null,"Demo:",-1),E={class:"demo-wrapper"},V=t("h5",null,"Usage:",-1),C=t("h6",null,"Insert component:",-1),D=t("h6",null,"Import:",-1),j=t("h6",null,"Apply in template\uFF1A",-1);function x(c,s,r,e,g,a){const i=u("ToggleSwitch"),o=u("highlightjs");return p(),m(w,null,[T,f,k,t("div",E,[n(i,{id:"demo-toggle-switch",checked:e.checked.value,"toggle-props":e.toggleProps,onToggleSwitch:e.toggleSwitchEvent},null,8,["checked","toggle-props","onToggleSwitch"]),t("div",null," This is the value return from Toggle: "+v(e.toggleEventReturnValue.returnValue),1)]),V,C,n(o,{language:"html",code:e.insertCode},null,8,["code"]),D,n(o,{language:"js",code:e.importCode},null,8,["code"]),j,n(o,{language:"js",code:e.templateCode},null,8,["code"])],64)}var P=d(S,[["render",x]]);export{P as default};
