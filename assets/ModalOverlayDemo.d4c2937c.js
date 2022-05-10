import{_ as P,a as _}from"./index.5623d7dc.js";import{C as B}from"./CustomizedButton.9b9289e1.js";import{D as x}from"./deviceType.c4ba19d5.js";import{r as g,s as r,B as T,o as v,c as D,a as n,C as b,v as q,x as A,D as y,y as E,F as S,f as c,g as d,w as f,E as C,G as k,j as M,t as w,i as j,H as F,e as I}from"./vendor.d9b9588d.js";import{F as R}from"./FooterMessage.1f52ea86.js";const V={name:"ModalOverlay",props:{opened:{type:Boolean,default:!1},backable:{type:Boolean,default:!1},height:{type:String,default:"400"},width:{type:String,default:"400"}},emits:["back-screen"],setup(o,{emit:t}){let a=g({status:o.opened}),e=r(()=>`height: ${o.height}px; 
      width: ${o.width}px; 
      top: calc(50% - ${o.height/2}px); 
      left: calc(50% - ${o.width/2}px);`);const i=()=>{new Promise(l=>{l()}).then(()=>{setTimeout(()=>{a.status=!a.status},10)})},m=()=>{t("back-screen")};return T(()=>o.opened,()=>{i()}),{modalOpened:a,modalStyle:e,toggleModal:i,backScreen:m}}},z={class:"control-bar"},N={class:"modal-body-container"};function L(o,t,a,e,i,m){return v(),D(S,null,[n("div",{class:b(["modal-overlay-shade",e.modalOpened.status?"opened":""]),onClick:t[0]||(t[0]=l=>e.toggleModal())},null,2),n("div",{class:b(["modal-overlay-wrapper",e.modalOpened.status?"opened":""]),style:E(e.modalStyle)},[n("div",z,[q(n("div",{class:"icon-back",onClick:t[1]||(t[1]=l=>e.backScreen())},null,512),[[A,a.backable]]),n("div",{class:"icon-close",onClick:t[2]||(t[2]=l=>e.toggleModal())})]),n("div",N,[n("h4",null,[y(o.$slots,"title",{},void 0,!0)]),n("div",null,[y(o.$slots,"content",{},void 0,!0)]),n("div",null,[y(o.$slots,"customComponent",{},void 0,!0)])])],6)],64)}var G=P(V,[["render",L],["__scopeId","data-v-d25a8804"]]);const H={name:"ModalOverlayDemo",components:{ModalOverlay:G,CustomizedButton:B,DataTable:x,FooterMessage:R},setup(){let o=g({title:"Default modal Title",content:"Default modal Content"}),t=g({components:[{}]});const a=()=>{t.components=[{}],o.title=null,o.content=null,o.height=void 0,o.width=void 0,o.opened=!o.opened},e=()=>{a(),o.title="Modal Title",o.content="Modal Content"},i=()=>{a(),o.height="400",o.width="600",t.components.unshift({key:"dummy-component-2",component:C(k(()=>_(()=>import("./DynamicLoadDummy-2.bb3b6ef5.js"),["assets/DynamicLoadDummy-2.bb3b6ef5.js","assets/DynamicLoadDummy-2.f617a68e.css","assets/index.5623d7dc.js","assets/index.c131fdea.css","assets/vendor.d9b9588d.js"])))})},m=()=>{t.components.unshift({key:"dummy-component-1",component:C(k(()=>_(()=>import("./DynamicLoadDummy-1.d244ebaa.js"),["assets/DynamicLoadDummy-1.d244ebaa.js","assets/index.5623d7dc.js","assets/index.c131fdea.css","assets/vendor.d9b9588d.js"])))})},l=()=>{t.components.shift()},p=r(()=>`
<ModalOverlay
  :opened="modalProps.opened"
  :backable="dynamicComponent.components.length > 2"
  :height="modalProps.height"
  :width="modalProps.width"
  @back-screen="backScreen"
>
  <!-- normal named Modal slots (optional)-->
  <template #title>
    {{ modalProps.title }}
  </template>
  <template #content>
    {{ modalProps.content }}
  </template>
  <!-- load dynamic component slot (optional)-->
  <template #customComponent>
    <component
      v-if="dynamicComponent.components.length > 1"
      :is="dynamicComponent.components[0].component"
      :key="dynamicComponent.components[0].key"
      @add-screen="addScreen"
    />
  </template>
</ModalOverlay>
      `),u=r(()=>`
import { ModalTemplate } from "air-vue";
      `),s=r(()=>`
// define named slots modal example
let modalProps = reactive({
  title: "Default modal Title",
  content: "Default modal Content",
});
// define dynamic component modal example
let dynamicComponent = reactive({
  components: [{}],
});
// toggle modal and initial it
const toggleModal = () => {
  dynamicComponent.components = [{}];
  modalProps.title = null;
  modalProps.content = null;
  modalProps.height = undefined;
  modalProps.width = undefined;
  modalProps.opened = !modalProps.opened;
};
// this is how to apply a normal named slots modal
// open from right is default
const loadDefaultModal = () => {
  toggleModal();
  modalProps.title = "Modal Title";
  modalProps.content = "Modal Content";
};
// this is how to load dynamic component Modal
const loadMultiScreenModal = () => {
  toggleModal();
  modalProps.height = "400";
  modalProps.width = "600";
  dynamicComponent.components.unshift({
    key: "dummy-component-2",
    component: markRaw(
      defineAsyncComponent(() =>
        import(
          "./dummy/DynamicLoadDummy-2.vue"
        )
      )
    ),
  });
};
// this is how to add screen in a existing Modal
const addScreen = () => {
  dynamicComponent.components.unshift({
    key: "dummy-component-1",
    component: markRaw(
      defineAsyncComponent(() =>
        import(
          "./dummy/DynamicLoadDummy-1.vue"
        )
      )
    ),
  });
};
const backScreen = () => {
  dynamicComponent.components.shift();
};
      `),h=r(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"opened",type:"Boolean",required:"false",default:"false",description:"modal is opened or not"},{name:"backable",type:"Boolean",required:"false",default:"false",description:"is backable or not"},{name:"height",type:"String",required:"false",default:"400",description:"modal height"},{name:"width",type:"String",required:"false",default:"400",description:"modal width"},{name:"back-screen",type:"<Event>",required:"true if backable",default:"-",description:"emit change content if back screen"},{name:"modalProps",type:"Object",required:"false",default:"-",description:"modal content in template"},{name:"dynamicComponent",type:"Object",required:"false",default:"-",description:"modal content in template"}]}));return{modalProps:o,dynamicComponent:t,toggleModal:a,loadDefaultModal:e,loadMultiScreenModal:i,addScreen:m,backScreen:l,insertCode:p,importCode:u,templateCode:s,tableProps:h}}},U=n("h3",null,"Modal Overlay",-1),J=n("p",null," Modal Overlay is to open a modal on center of screen. It can load asynchronous and with multi screens. ",-1),K=n("h5",null,"Demo:",-1),Q={class:"demo-wrapper"},W=n("h5",null,"Usage:",-1),X=n("h6",null,"Insert component:",-1),Y=n("h6",null,"Import:",-1),Z=n("h6",null,"Apply in template\uFF1A",-1);function $(o,t,a,e,i,m){const l=c("ModalOverlay"),p=c("CustomizedButton"),u=c("DataTable"),s=c("highlightjs"),h=c("FooterMessage");return v(),D(S,null,[U,J,K,n("div",Q,[d(l,{opened:e.modalProps.opened,backable:e.dynamicComponent.components.length>2,height:e.modalProps.height,width:e.modalProps.width,onBackScreen:e.backScreen},{title:f(()=>[M(w(e.modalProps.title),1)]),content:f(()=>[M(w(e.modalProps.content),1)]),customComponent:f(()=>[e.dynamicComponent.components.length>1?(v(),j(F(e.dynamicComponent.components[0].component),{key:e.dynamicComponent.components[0].key,onAddScreen:e.addScreen},null,8,["onAddScreen"])):I("",!0)]),_:1},8,["opened","backable","height","width","onBackScreen"]),d(p,{id:"default-modal-button","button-text":"Default Modal",width:"300px",level:"av-btn-primary",onClickButton:t[0]||(t[0]=O=>e.loadDefaultModal())}),d(p,{id:"dynamic-component-modal-button","button-text":"Dynamic component Modal",width:"300px",level:"av-btn-primary",onClickButton:t[1]||(t[1]=O=>e.loadMultiScreenModal())})]),d(u,{"table-props":e.tableProps},null,8,["table-props"]),W,X,d(s,{language:"html",code:e.insertCode},null,8,["code"]),Y,d(s,{language:"js",code:e.importCode},null,8,["code"]),Z,d(s,{language:"js",code:e.templateCode},null,8,["code"]),d(h)],64)}var le=P(H,[["render",$]]);export{le as default};
