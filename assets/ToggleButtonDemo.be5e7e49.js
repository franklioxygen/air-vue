import{x as d,d as v,o as i,c as p,a as t,t as h,p as B,b,n as u,r as _,h as r,F as k}from"./vendor.75353d22.js";import{_ as m}from"./index.f7df140e.js";const f={name:"ToggleButton",props:{checked:{type:Boolean,default:!1},toggleProps:{type:Object,required:!1}},emits:["toggle-button"],setup(n,{emit:l}){let o=d({state:n.checked}),e=()=>{o.state=!o.state,s(o.state),c()};const s=g=>{l("toggle-button",g)},c=()=>{document.getElementsByClassName("button-box")[0].classList.toggle("active"),document.getElementById("checkbox").checked=!document.getElementById("checkbox").checked};return v(()=>{o.state===!0&&c()}),{currentState:o,toggleState:e,toggleButtonEmit:s}}},T=n=>(B("data-v-b14fe492"),n=n(),b(),n),x={class:"toggle-wrapper"},E=["checked"],y=T(()=>t("div",{class:"button-bar"},null,-1)),C=[y],V={class:"toggle-label"};function I(n,l,o,e,s,c){return i(),p("div",x,[t("input",{type:"checkbox",name:"mode",id:"checkbox",checked:o.checked},null,8,E),t("div",{class:"button-box",onClick:l[0]||(l[0]=g=>e.toggleState())},C),t("div",V,h(o.toggleProps.label),1)])}var S=m(f,[["render",I],["__scopeId","data-v-b14fe492"]]);const D={name:"ToggleButtonDemo",components:{ToggleButton:S},setup(){const n=d({value:!1});let l=d({returnValue:n.value});const o=u(()=>({label:"Toggle Button"})),e=u(()=>`
<ToggleButton
  :checked="checked.value"
  :toggle-props="toggleProps"
  @toggle-button="toggleButtonEvent"
/>
      `),s=u(()=>`
import ToggleButton from "../components/ToggleButton.vue";
      `),c=u(()=>`
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
      `);return{toggleEventReturnValue:l,checked:n,toggleProps:o,insertCode:e,importCode:s,templateCode:c,toggleButtonEvent:a=>{l.returnValue=a}}}},P=t("h3",null,"Toggle Button",-1),$=t("p",null,"Toggle Button is used to toggle.",-1),j=t("h5",null,"Demo:",-1),w={class:"demo-wrapper"},N=t("h5",null,"Usage:",-1),R=t("h6",null,"Insert component:",-1),F=t("h6",null,"Import:",-1),q=t("h6",null,"Apply in template\uFF1A",-1);function A(n,l,o,e,s,c){const g=_("ToggleButton"),a=_("highlightjs");return i(),p(k,null,[P,$,j,t("div",w,[r(g,{checked:e.checked.value,"toggle-props":e.toggleProps,onToggleButton:e.toggleButtonEvent},null,8,["checked","toggle-props","onToggleButton"]),t("div",null," This is the value return from Toggle: "+h(e.toggleEventReturnValue.returnValue),1)]),N,R,r(a,{language:"html",code:e.insertCode},null,8,["code"]),F,r(a,{language:"js",code:e.importCode},null,8,["code"]),q,r(a,{language:"js",code:e.templateCode},null,8,["code"])],64)}var O=m(D,[["render",A]]);export{O as default};
