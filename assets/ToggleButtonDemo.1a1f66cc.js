import{_,T as p}from"./index.9a542061.js";import{s as n,r as d,f as i,o as h,c as m,a as t,g as l,t as v,F as B}from"./vendor.ebe7cf86.js";const T={name:"ToggleButtonDemo",components:{ToggleButton:p},setup(){const s=n(()=>`
<ToggleButton
  id="demo-toggle-button"
  :checked="checked.value"
  :toggle-props="toggleProps"
  @toggle-button="toggleButtonEvent"
/>
      `),u=n(()=>`
import ToggleButton from "../components/ToggleButton.vue";
      `),r=n(()=>`
const checked = reactive({
    value: false,
});
const toggleProps = computed(() => {
    return {
        label: "Toggle Button",
    };
});
const toggleButtonEvent = (event) => {
    // Do something with the event
    toggleEventReturnValue.returnValue = event;
};
      `),e=d({value:!1});let g=d({returnValue:e.value});const c=n(()=>({label:"Toggle Button"}));return{toggleEventReturnValue:g,checked:e,toggleProps:c,insertCode:s,importCode:u,templateCode:r,toggleButtonEvent:o=>{g.returnValue=o}}}},f=t("h3",null,"Toggle Button",-1),k=t("p",null,"Toggle Button is used to toggle.",-1),E=t("h5",null,"Demo:",-1),V={class:"demo-wrapper"},C=t("h5",null,"Usage:",-1),D=t("h6",null,"Insert component:",-1),b=t("h6",null,"Import:",-1),j=t("h6",null,"Apply in template\uFF1A",-1);function x(s,u,r,e,g,c){const a=i("ToggleButton"),o=i("highlightjs");return h(),m(B,null,[f,k,E,t("div",V,[l(a,{id:"demo-toggle-button",checked:e.checked.value,"toggle-props":e.toggleProps,onToggleButton:e.toggleButtonEvent},null,8,["checked","toggle-props","onToggleButton"]),t("div",null," This is the value return from Toggle: "+v(e.toggleEventReturnValue.returnValue),1)]),C,D,l(o,{language:"html",code:e.insertCode},null,8,["code"]),b,l(o,{language:"js",code:e.importCode},null,8,["code"]),j,l(o,{language:"js",code:e.templateCode},null,8,["code"])],64)}var R=_(T,[["render",x]]);export{R as default};
