import{C as m}from"./CustomizedButton.3d41fd6c.js";import{_ as p}from"./index.5a3dee3a.js";import{r as _,s as e,f as d,o as B,c as b,a as t,g as n,t as v,F as C}from"./vendor.54853348.js";const h={name:"CustomizedButtonDemo",components:{CustomizedButton:m},setup(){let u=_({clickCounter:0});const s=e(()=>`
<CustomizedButton
  button-text="Primary Button"
  width="180px"
  level="vu-btn-primary"
  @click-button="clickButtonEvent"
/>
<div>
  Button clicked:
  {{ buttonEventReturnValue.clickCounter }} times.
</div>
<CustomizedButton
  button-text="Secondary Button"
  width="180px"
  level="vu-btn-secondary"
/>
<CustomizedButton
  button-text="Disabled Button"
  :button-props="disabledButtonProps"
  @click-button="clickButtonEvent"
/>
      `),i=e(()=>`
import CustomizedButton from "../components/CustomizedButton.vue";
      `),o=e(()=>`
const disabledButtonProps = computed(() => {
    return {
    disabled: true, // optional
    };
});
const clickButtonEvent = () => {
    buttonEventReturnValue.clickCounter += 1;
};
      `),r=e(()=>({disabled:!0}));return{buttonEventReturnValue:u,insertCode:s,importCode:i,templateCode:o,disabledButtonProps:r,clickButtonEvent:()=>{u.clickCounter+=1}}}},k=t("h3",null,"Customized Button",-1),g=t("p",null," Customized Button is used to be clicked. It will emit and event once button clicked. ",-1),x=t("h5",null,"Demo:",-1),z={class:"demo-wrapper"},y=t("br",null,null,-1),E=t("br",null,null,-1),f=t("h5",null,"Usage:",-1),D=t("h6",null,"Insert component:",-1),w=t("h6",null,"Import:",-1),P=t("h6",null,"Apply in template\uFF1A",-1);function V(u,s,i,o,r,a){const l=d("CustomizedButton"),c=d("highlightjs");return B(),b(C,null,[k,g,x,t("div",z,[n(l,{"button-text":"Primary Button",width:"180px",level:"vu-btn-primary",onClickButton:o.clickButtonEvent},null,8,["onClickButton"]),t("div",null," Button clicked: "+v(o.buttonEventReturnValue.clickCounter)+" times. ",1),y,n(l,{"button-text":"Secondary Button",width:"180px",level:"vu-btn-secondary"}),E,n(l,{"button-text":"Disabled Button","button-props":o.disabledButtonProps,onClickButton:o.clickButtonEvent},null,8,["button-props","onClickButton"])]),f,D,n(c,{language:"html",code:o.insertCode},null,8,["code"]),w,n(c,{language:"js",code:o.importCode},null,8,["code"]),P,n(c,{language:"js",code:o.templateCode},null,8,["code"])],64)}var S=p(h,[["render",V]]);export{S as default};
