import{_ as b}from"./index.2f688c4f.js";import{C as B}from"./CustomizedButton.f2a85b4f.js";import{D as _}from"./deviceType.9a00222c.js";import{s as i,f as d,o as v,c as h,a as t,g as o,F as f,j as l}from"./vendor.54853348.js";const k={name:"CustomizedButtonDemo",components:{CustomizedButton:B,DataTable:_},setup(){const s=i(()=>`
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
      `),c=i(()=>`
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
      `),e=i(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"id",type:"String",required:"true",default:"-",description:"identifier of the button"},{name:"button-text",type:"String",required:"true",default:"-",description:"text on button"},{name:"width",type:"string",required:"false",default:"200px",description:"width of the button"},{name:"level",type:"String",required:"false",default:"",description:"button level"},{name:"disabled",type:"Boolean",required:"false",default:"false",description:"button disabled"},{name:"click-button",type:"<Event>",required:"true",default:"-",description:"event when button clicked"}]})),r=i(()=>({disabled:!0}));return{insertCode:s,importCode:c,templateCode:a,tableProps:e,disabledButtonProps:r,clickButtonEvent:n=>{document.querySelector("#"+n.id+"-value").innerHTML=parseInt(document.querySelector("#"+n.id+"-value").innerHTML)+1}}}},y=t("h3",null,"Customized Button",-1),C=t("p",null," Customized Button is used to be clicked. It will emit and event once button clicked. ",-1),z=t("h5",null,"Demo:",-1),g={class:"demo-wrapper"},x=t("div",null,[l(" Button clicked: "),t("span",{id:"demo-customized-button-1-value"},"0"),l(" times. ")],-1),D=t("br",null,null,-1),q=t("div",null,[l(" Button clicked: "),t("span",{id:"demo-customized-button-2-value"},"0"),l(" times. ")],-1),E=t("br",null,null,-1),w=t("h5",null,"Usage:",-1),P=t("h6",null,"Insert component:",-1),S=t("h6",null,"Import:",-1),T=t("h6",null,"Apply in template\uFF1A",-1);function j(s,c,a,e,r,m){const n=d("CustomizedButton"),p=d("DataTable"),u=d("highlightjs");return v(),h(f,null,[y,C,z,t("div",g,[o(n,{id:"demo-customized-button-1","button-text":"Primary Button",width:"180px",level:"av-btn-primary",onClickButton:e.clickButtonEvent},null,8,["onClickButton"]),x,D,o(n,{id:"demo-customized-button-2","button-text":"Secondary Button",width:"180px",level:"av-btn-secondary",onClickButton:e.clickButtonEvent},null,8,["onClickButton"]),q,E,o(n,{id:"demo-customized-button-3","button-text":"Disabled Button",disabled:e.disabledButtonProps,onClickButton:e.clickButtonEvent},null,8,["disabled","onClickButton"])]),o(p,{"table-props":e.tableProps},null,8,["table-props"]),w,P,o(u,{language:"html",code:e.insertCode},null,8,["code"]),S,o(u,{language:"js",code:e.importCode},null,8,["code"]),T,o(u,{language:"js",code:e.templateCode},null,8,["code"])],64)}var N=b(k,[["render",j]]);export{N as default};
