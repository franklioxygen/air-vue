import{_ as b,a as f}from"./index.22d1b009.js";import{C as D}from"./CustomizedButton.fd1ced1e.js";/* empty css                                                                 */import{r as g,s as r,B as x,o as v,c as P,a as t,C as _,v as O,x as B,D as u,y as T,F as S,f as h,g as m,w as y,E as C,G as M,j as k,t as w,i as A,H as E,e as I}from"./vendor.54853348.js";const V={name:"ModalOverlay",props:{opened:{type:Boolean,default:!1},backable:{type:Boolean,default:!1},height:{type:String,default:"400"},width:{type:String,default:"400"}},emits:["back-screen"],setup(o,{emit:n}){let a=g({status:o.opened}),e=r(()=>`height: ${o.height}px; 
      width: ${o.width}px; 
      top: calc(50% - ${o.height/2}px); 
      left: calc(50% - ${o.width/2}px);`);const d=()=>{new Promise(l=>{l()}).then(()=>{setTimeout(()=>{a.status=!a.status},10)})},s=()=>{n("back-screen")};return x(()=>o.opened,()=>{d()}),{modalOpened:a,modalStyle:e,toggleModal:d,backScreen:s}}},j={class:"control-bar"},z={class:"modal-body-container"};function R(o,n,a,e,d,s){return v(),P(S,null,[t("div",{class:_(["modal-overlay-shade",e.modalOpened.status?"opened":""]),onClick:n[0]||(n[0]=l=>e.toggleModal())},null,2),t("div",{class:_(["modal-overlay-wrapper",e.modalOpened.status?"opened":""]),style:T(e.modalStyle)},[t("div",j,[O(t("div",{class:"icon-back",onClick:n[1]||(n[1]=l=>e.backScreen())},null,512),[[B,a.backable]]),t("div",{class:"icon-close",onClick:n[2]||(n[2]=l=>e.toggleModal())})]),t("div",z,[t("h4",null,[u(o.$slots,"title",{},void 0,!0)]),t("div",null,[u(o.$slots,"content",{},void 0,!0)]),t("div",null,[u(o.$slots,"customComponent",{},void 0,!0)])])],6)],64)}var L=b(V,[["render",R],["__scopeId","data-v-d25a8804"]]);const N={name:"ModalOverlayDemo",components:{ModalOverlay:L,CustomizedButton:D},setup(){let o=g({title:"Default modal Title",content:"Default modal Content"}),n=g({components:[{}]});const a=()=>{n.components=[{}],o.title=null,o.content=null,o.height=void 0,o.width=void 0,o.opened=!o.opened},e=()=>{a(),o.title="Modal Title",o.content="Modal Content"},d=()=>{a(),o.height="400",o.width="600",n.components.unshift({key:"dummy-component-2",component:C(M(()=>f(()=>import("./DynamicLoadDummy-2.293b1088.js"),["assets/DynamicLoadDummy-2.293b1088.js","assets/DynamicLoadDummy-2.f617a68e.css","assets/index.22d1b009.js","assets/index.10adfc42.css","assets/vendor.54853348.js"])))})},s=()=>{n.components.unshift({key:"dummy-component-1",component:C(M(()=>f(()=>import("./DynamicLoadDummy-1.8dbe502e.js"),["assets/DynamicLoadDummy-1.8dbe502e.js","assets/index.22d1b009.js","assets/index.10adfc42.css","assets/vendor.54853348.js"])))})},l=()=>{n.components.shift()},c=r(()=>`
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
      `);return{modalProps:o,dynamicComponent:n,toggleModal:a,loadDefaultModal:e,loadMultiScreenModal:d,addScreen:s,backScreen:l,insertCode:c,importCode:i,templateCode:p}}},F=t("h3",null,"Modal Overlay",-1),G=t("p",null," Modal Overlay is to open a modal on center of screen. It can load asynchronous and with multi screens. ",-1),H=t("h5",null,"Demo:",-1),U={class:"demo-wrapper"},$=t("h5",null,"Usage:",-1),q=t("h6",null,"Insert component:",-1),J=t("h6",null,"Import:",-1),K=t("h6",null,"Apply in template\uFF1A",-1);function Q(o,n,a,e,d,s){const l=h("ModalOverlay"),c=h("CustomizedButton"),i=h("highlightjs");return v(),P(S,null,[F,G,H,t("div",U,[m(l,{opened:e.modalProps.opened,backable:e.dynamicComponent.components.length>2,height:e.modalProps.height,width:e.modalProps.width,onBackScreen:e.backScreen},{title:y(()=>[k(w(e.modalProps.title),1)]),content:y(()=>[k(w(e.modalProps.content),1)]),customComponent:y(()=>[e.dynamicComponent.components.length>1?(v(),A(E(e.dynamicComponent.components[0].component),{key:e.dynamicComponent.components[0].key,onAddScreen:e.addScreen},null,8,["onAddScreen"])):I("",!0)]),_:1},8,["opened","backable","height","width","onBackScreen"]),m(c,{"button-text":"Default Modal",width:"300px",level:"av-btn-primary",onClickButton:n[0]||(n[0]=p=>e.loadDefaultModal())}),m(c,{"button-text":"Dynamic component Modal",width:"300px",level:"av-btn-primary",onClickButton:n[1]||(n[1]=p=>e.loadMultiScreenModal())})]),$,q,m(i,{language:"html",code:e.insertCode},null,8,["code"]),J,m(i,{language:"js",code:e.importCode},null,8,["code"]),K,m(i,{language:"js",code:e.templateCode},null,8,["code"])],64)}var ee=b(N,[["render",Q]]);export{ee as default};
