import{_ as p}from"./index.80fe6262.js";import{C as B}from"./CustomizedButton.187c1083.js";import"./deviceType.f861e0a5.js";import{s as n,f as a,o as _,c as b,a as t,g as e,F as v,j as u}from"./vendor.54853348.js";const h={name:"CustomizedButtonDemo",components:{CustomizedButton:B},setup(){const c=n(()=>`
<!-- Primary Button -->
<CustomizedButton
  id="demo-customized-button-1"
  button-text="Primary Button"
  width="180px"
  level="av-btn-primary"
  @click-button="clickButtonEvent"
/>
<!-- Secondary Button -->
<CustomizedButton
  id="demo-customized-button-2"
  button-text="Secondary Button"
  width="180px"
  level="av-btn-secondary"
  @click-button="clickButtonEvent"
/>
<!-- Disabled Button -->
<CustomizedButton
  id="demo-customized-button-3"
  button-text="Disabled Button"
  :button-props="disabledButtonProps"
  @click-button="clickButtonEvent"
/>
      `),s=n(()=>`
import { CustomizedButton } from "air-vue";
      `),r=n(()=>`
const disabledButtonProps = computed(() => {
  return {
    disabled: true, // optional
  };
});
const clickButtonEvent = (event) => {
  // Do something with the event
  document.querySelector("#" + event.id + "-value").innerHTML =
    parseInt(document.querySelector("#" + event.id + "-value").innerHTML) + 1;
};
      `),o=n(()=>({disabled:!0}));return{insertCode:c,importCode:s,templateCode:r,disabledButtonProps:o,clickButtonEvent:i=>{document.querySelector("#"+i.id+"-value").innerHTML=parseInt(document.querySelector("#"+i.id+"-value").innerHTML)+1}}}},C=t("h3",null,"Customized Button",-1),k=t("p",null," Customized Button is used to be clicked. It will emit and event once button clicked. ",-1),z=t("h5",null,"Demo:",-1),y={class:"demo-wrapper"},g=t("div",null,[u(" Button clicked: "),t("span",{id:"demo-customized-button-1-value"},"0"),u(" times. ")],-1),x=t("br",null,null,-1),f=t("div",null,[u(" Button clicked: "),t("span",{id:"demo-customized-button-2-value"},"0"),u(" times. ")],-1),E=t("br",null,null,-1),D=t("h5",null,"Usage:",-1),w=t("h6",null,"Insert component:",-1),P=t("h6",null,"Import:",-1),S=t("h6",null,"Apply in template\uFF1A",-1);function j(c,s,r,o,m,i){const d=a("CustomizedButton"),l=a("highlightjs");return _(),b(v,null,[C,k,z,t("div",y,[e(d,{id:"demo-customized-button-1","button-text":"Primary Button",width:"180px",level:"av-btn-primary",onClickButton:o.clickButtonEvent},null,8,["onClickButton"]),g,x,e(d,{id:"demo-customized-button-2","button-text":"Secondary Button",width:"180px",level:"av-btn-secondary",onClickButton:o.clickButtonEvent},null,8,["onClickButton"]),f,E,e(d,{id:"demo-customized-button-3","button-text":"Disabled Button","button-props":o.disabledButtonProps,onClickButton:o.clickButtonEvent},null,8,["button-props","onClickButton"])]),D,w,e(l,{language:"html",code:o.insertCode},null,8,["code"]),P,e(l,{language:"js",code:o.importCode},null,8,["code"]),S,e(l,{language:"js",code:o.templateCode},null,8,["code"])],64)}var L=p(h,[["render",j]]);export{L as default};
