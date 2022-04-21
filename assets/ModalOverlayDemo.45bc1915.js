import{_ as b,a as f}from"./index.252a51ef.js";import{C as D}from"./CustomizedButton.c4d2a06c.js";import"./deviceType.c94b9e4a.js";import{r as g,s as r,B as x,o as v,c as P,a as t,C as _,v as O,x as B,D as u,y as T,F as S,f as h,g as m,w as y,E as C,G as M,j as k,t as w,i as A,H as E,e as I}from"./vendor.54853348.js";const V={name:"ModalOverlay",props:{opened:{type:Boolean,default:!1},backable:{type:Boolean,default:!1},height:{type:String,default:"400"},width:{type:String,default:"400"}},emits:["back-screen"],setup(e,{emit:n}){let a=g({status:e.opened}),o=r(()=>`height: ${e.height}px; 
      width: ${e.width}px; 
      top: calc(50% - ${e.height/2}px); 
      left: calc(50% - ${e.width/2}px);`);const d=()=>{new Promise(l=>{l()}).then(()=>{setTimeout(()=>{a.status=!a.status},10)})},s=()=>{n("back-screen")};return x(()=>e.opened,()=>{d()}),{modalOpened:a,modalStyle:o,toggleModal:d,backScreen:s}}},j={class:"control-bar"},z={class:"modal-body-container"};function R(e,n,a,o,d,s){return v(),P(S,null,[t("div",{class:_(["modal-overlay-shade",o.modalOpened.status?"opened":""]),onClick:n[0]||(n[0]=l=>o.toggleModal())},null,2),t("div",{class:_(["modal-overlay-wrapper",o.modalOpened.status?"opened":""]),style:T(o.modalStyle)},[t("div",j,[O(t("div",{class:"icon-back",onClick:n[1]||(n[1]=l=>o.backScreen())},null,512),[[B,a.backable]]),t("div",{class:"icon-close",onClick:n[2]||(n[2]=l=>o.toggleModal())})]),t("div",z,[t("h4",null,[u(e.$slots,"title",{},void 0,!0)]),t("div",null,[u(e.$slots,"content",{},void 0,!0)]),t("div",null,[u(e.$slots,"customComponent",{},void 0,!0)])])],6)],64)}var L=b(V,[["render",R],["__scopeId","data-v-d25a8804"]]);const N={name:"ModalOverlayDemo",components:{ModalOverlay:L,CustomizedButton:D},setup(){let e=g({title:"Default modal Title",content:"Default modal Content"}),n=g({components:[{}]});const a=()=>{n.components=[{}],e.title=null,e.content=null,e.height=void 0,e.width=void 0,e.opened=!e.opened},o=()=>{a(),e.title="Modal Title",e.content="Modal Content"},d=()=>{a(),e.height="400",e.width="600",n.components.unshift({key:"dummy-component-2",component:C(M(()=>f(()=>import("./DynamicLoadDummy-2.b83e9d48.js"),["assets/DynamicLoadDummy-2.b83e9d48.js","assets/DynamicLoadDummy-2.f617a68e.css","assets/index.252a51ef.js","assets/index.05bfa1d8.css","assets/vendor.54853348.js"])))})},s=()=>{n.components.unshift({key:"dummy-component-1",component:C(M(()=>f(()=>import("./DynamicLoadDummy-1.f7ea9e87.js"),["assets/DynamicLoadDummy-1.f7ea9e87.js","assets/index.252a51ef.js","assets/index.05bfa1d8.css","assets/vendor.54853348.js"])))})},l=()=>{n.components.shift()},c=r(()=>`
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
      `),i=r(()=>`
import { ModalTemplate } from "air-vue";
      `),p=r(()=>`
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
      `);return{modalProps:e,dynamicComponent:n,toggleModal:a,loadDefaultModal:o,loadMultiScreenModal:d,addScreen:s,backScreen:l,insertCode:c,importCode:i,templateCode:p}}},F=t("h3",null,"Modal Overlay",-1),G=t("p",null," Modal Overlay is to open a modal on center of screen. It can load asynchronous and with multi screens. ",-1),H=t("h5",null,"Demo:",-1),U={class:"demo-wrapper"},$=t("h5",null,"Usage:",-1),q=t("h6",null,"Insert component:",-1),J=t("h6",null,"Import:",-1),K=t("h6",null,"Apply in template\uFF1A",-1);function Q(e,n,a,o,d,s){const l=h("ModalOverlay"),c=h("CustomizedButton"),i=h("highlightjs");return v(),P(S,null,[F,G,H,t("div",U,[m(l,{opened:o.modalProps.opened,backable:o.dynamicComponent.components.length>2,height:o.modalProps.height,width:o.modalProps.width,onBackScreen:o.backScreen},{title:y(()=>[k(w(o.modalProps.title),1)]),content:y(()=>[k(w(o.modalProps.content),1)]),customComponent:y(()=>[o.dynamicComponent.components.length>1?(v(),A(E(o.dynamicComponent.components[0].component),{key:o.dynamicComponent.components[0].key,onAddScreen:o.addScreen},null,8,["onAddScreen"])):I("",!0)]),_:1},8,["opened","backable","height","width","onBackScreen"]),m(c,{id:"default-modal-button","button-text":"Default Modal",width:"300px",level:"av-btn-primary",onClickButton:n[0]||(n[0]=p=>o.loadDefaultModal())}),m(c,{id:"dynamic-component-modal-button","button-text":"Dynamic component Modal",width:"300px",level:"av-btn-primary",onClickButton:n[1]||(n[1]=p=>o.loadMultiScreenModal())})]),$,q,m(i,{language:"html",code:o.insertCode},null,8,["code"]),J,m(i,{language:"js",code:o.importCode},null,8,["code"]),K,m(i,{language:"js",code:o.templateCode},null,8,["code"])],64)}var oo=b(N,[["render",Q]]);export{oo as default};
