import{_}from"./index.43206649.js";import{C as B}from"./CustomizedButton.784a2752.js";import{D as v}from"./deviceType.3fcb4f7a.js";import{s as i,f as l,o as h,c as f,a as t,g as o,F as k,j as u}from"./vendor.54853348.js";import{F as y}from"./FooterMessage.c0bea262.js";const C={name:"CustomizedButtonDemo",components:{CustomizedButton:B,DataTable:v,FooterMessage:y},setup(){const s=i(()=>`
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
  :disabled="disabledButtonProps"
  @click-button="clickButtonEvent"
/>
      `),r=i(()=>`
import { CustomizedButton } from "air-vue";
      `),a=i(()=>`
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
      `),e=i(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"id",type:"String",required:"true",default:"-",description:"identifier of the button"},{name:"button-text",type:"String",required:"true",default:"-",description:"text on button"},{name:"width",type:"string",required:"false",default:"200px",description:"width of the button"},{name:"level",type:"String",required:"false",default:"",description:"button level"},{name:"disabled",type:"Boolean",required:"false",default:"false",description:"button disabled"},{name:"click-button",type:"<Event>",required:"true",default:"-",description:"event when button clicked"}]})),c=i(()=>({disabled:!0}));return{insertCode:s,importCode:r,templateCode:a,tableProps:e,disabledButtonProps:c,clickButtonEvent:n=>{document.querySelector("#"+n.id+"-value").innerHTML=parseInt(document.querySelector("#"+n.id+"-value").innerHTML)+1}}}},g=t("h3",null,"Customized Button",-1),z=t("p",null," Customized Button is used to be clicked. It will emit and event once button clicked. ",-1),x=t("h5",null,"Demo:",-1),D={class:"demo-wrapper"},q=t("div",null,[u(" Button clicked: "),t("span",{id:"demo-customized-button-1-value"},"0"),u(" times. ")],-1),E=t("br",null,null,-1),w=t("div",null,[u(" Button clicked: "),t("span",{id:"demo-customized-button-2-value"},"0"),u(" times. ")],-1),P=t("br",null,null,-1),S=t("h5",null,"Usage:",-1),T=t("h6",null,"Insert component:",-1),M=t("h6",null,"Import:",-1),F=t("h6",null,"Apply in template\uFF1A",-1);function j(s,r,a,e,c,m){const n=l("CustomizedButton"),p=l("DataTable"),d=l("highlightjs"),b=l("FooterMessage");return h(),f(k,null,[g,z,x,t("div",D,[o(n,{id:"demo-customized-button-1","button-text":"Primary Button",width:"180px",level:"av-btn-primary",onClickButton:e.clickButtonEvent},null,8,["onClickButton"]),q,E,o(n,{id:"demo-customized-button-2","button-text":"Secondary Button",width:"180px",level:"av-btn-secondary",onClickButton:e.clickButtonEvent},null,8,["onClickButton"]),w,P,o(n,{id:"demo-customized-button-3","button-text":"Disabled Button",disabled:e.disabledButtonProps,onClickButton:e.clickButtonEvent},null,8,["disabled","onClickButton"])]),o(p,{"table-props":e.tableProps},null,8,["table-props"]),S,T,o(d,{language:"html",code:e.insertCode},null,8,["code"]),M,o(d,{language:"js",code:e.importCode},null,8,["code"]),F,o(d,{language:"js",code:e.templateCode},null,8,["code"]),o(b)],64)}var A=_(C,[["render",j]]);export{A as default};
