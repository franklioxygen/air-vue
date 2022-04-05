import{_ as m}from"./index.c92380f1.js";import{s,o as p,c as _,a as o,t as b,C as B,y as v,r as C,f as a,g as l,F as h}from"./vendor.ebe7cf86.js";const k={name:"CustomizedButton",props:{buttonText:{type:String,default:"Click me",required:!0},width:{type:String,default:""},buttonProps:{type:Object,required:!0}},emits:["click-button"],setup(r,{emit:n}){return{buttonStyle:s(()=>({width:r.width})),clickButtonEmit:()=>{n("click-button")}}}},y={class:"button-wrapper"},P=["disabled"];function x(r,n,e,t,i,d){return p(),_("div",y,[o("button",{class:B(["vu-button",e.buttonProps.level]),style:v(t.buttonStyle),onClick:n[0]||(n[0]=(...u)=>t.clickButtonEmit&&t.clickButtonEmit(...u)),disabled:e.buttonProps.disabled},b(e.buttonText),15,P)])}var g=m(k,[["render",x],["__scopeId","data-v-5d147358"]]);const z={name:"CustomizedButtonDemo",components:{CustomizedButton:g},setup(){let r=C({clickCounter:0});const n=s(()=>`
<CustomizedButton
    buttonText="Primary Button"
    width="180px"
    :buttonProps="primaryButtonProps"
    @click-button="clickButtonEvent"
/>
<div>
    Button clicked:
    {{ buttonEventReturnValue.clickCounter }} times.
</div>

<CustomizedButton
    buttonText="Secondary Button"
    width="180px"
    :buttonProps="secondaryButtonProps"
/>

<CustomizedButton
    buttonText="Disabled Button"
    :buttonProps="disabledButtonProps"
    @click-button="clickButtonEvent"
/>
      `),e=s(()=>`
import CustomizedButton from "../components/CustomizedButton.vue";
      `),t=s(()=>`
const primaryButtonProps = computed(() => {
    return {
    level: "vu-btn-primary",
    };
});
const secondaryButtonProps = computed(() => {
    return {
    level: "vu-btn-secondary",
    };
});
const disabledButtonProps = computed(() => {
    return {
    disabled: true, // required false or index
    };
});
const clickButtonEvent = () => {
    buttonEventReturnValue.clickCounter += 1;
};
      `),i=s(()=>({level:"vu-btn-primary"})),d=s(()=>({level:"vu-btn-secondary"})),u=s(()=>({disabled:!0}));return{buttonEventReturnValue:r,insertCode:n,importCode:e,templateCode:t,primaryButtonProps:i,secondaryButtonProps:d,disabledButtonProps:u,clickButtonEvent:()=>{r.clickCounter+=1}}}},E=o("h3",null,"Customized Button",-1),f=o("p",null," Customized Button is used to be clicked. It will emit and event once button clicked. ",-1),w=o("h5",null,"Demo:",-1),S={class:"demo-wrapper"},T=o("br",null,null,-1),D=o("br",null,null,-1),V=o("br",null,null,-1),j=o("br",null,null,-1),I=o("h5",null,"Usage:",-1),R=o("h6",null,"Insert component:",-1),q=o("h6",null,"Import:",-1),F=o("h6",null,"Apply in template\uFF1A",-1);function N(r,n,e,t,i,d){const u=a("CustomizedButton"),c=a("highlightjs");return p(),_(h,null,[E,f,w,o("div",S,[l(u,{buttonText:"Primary Button",width:"180px",buttonProps:t.primaryButtonProps,onClickButton:t.clickButtonEvent},null,8,["buttonProps","onClickButton"]),o("div",null," Button clicked: "+b(t.buttonEventReturnValue.clickCounter)+" times. ",1),T,D,l(u,{buttonText:"Secondary Button",width:"180px",buttonProps:t.secondaryButtonProps},null,8,["buttonProps"]),V,j,l(u,{buttonText:"Disabled Button",buttonProps:t.disabledButtonProps,onClickButton:t.clickButtonEvent},null,8,["buttonProps","onClickButton"])]),I,R,l(c,{language:"html",code:t.insertCode},null,8,["code"]),q,l(c,{language:"js",code:t.importCode},null,8,["code"]),F,l(c,{language:"js",code:t.templateCode},null,8,["code"])],64)}var U=m(z,[["render",N]]);export{U as default};
