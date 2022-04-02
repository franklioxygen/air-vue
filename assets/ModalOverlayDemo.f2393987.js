import{_ as w,a as _}from"./index.36b0c546.js";import{r as h,s as i,B as S,o as y,c as b,a as n,C as g,v as O,x,D as p,y as T,F as P,f as v,g as c,w as u,E as f,G as C,j as k,t as M,i as B,H as A,e as E}from"./vendor.ebe7cf86.js";const I={name:"ModalOverlay",props:{opened:{type:Boolean,default:!1},backable:{type:Boolean,default:!1},height:{type:String,default:"400"},width:{type:String,default:"400"}},emits:["back-screen"],setup(o,{emit:t}){let a=h({status:o.opened}),e=i(()=>`height: ${o.height}px; 
      width: ${o.width}px; 
      top: calc(50% - ${o.height/2}px); 
      left: calc(50% - ${o.width/2}px);`);const d=()=>{new Promise(l=>{l()}).then(()=>{new Promise(l=>{setTimeout(()=>{a.status=!a.status,l()},10)})})},m=()=>{t("back-screen")};return S(()=>o.opened,()=>{d()}),{modalOpened:a,modalStyle:e,toggleModal:d,backScreen:m}}},L={class:"control-bar"},N={class:"modal-body-container"};function V(o,t,a,e,d,m){return y(),b(P,null,[n("div",{class:g(["modal-overlay-shade",e.modalOpened.status?"opened":""]),onClick:t[0]||(t[0]=l=>e.toggleModal())},null,2),n("div",{class:g(["modal-overlay-wrapper",e.modalOpened.status?"opened":""]),style:T(e.modalStyle)},[n("div",L,[O(n("div",{class:"icon-back",onClick:t[1]||(t[1]=l=>e.backScreen())},null,512),[[x,a.backable]]),n("div",{class:"icon-close",onClick:t[2]||(t[2]=l=>e.toggleModal())})]),n("div",N,[n("h4",null,[p(o.$slots,"title",{},void 0,!0)]),n("div",null,[p(o.$slots,"content",{},void 0,!0)]),n("div",null,[p(o.$slots,"customComponent",{},void 0,!0)])])],6)],64)}var j=w(I,[["render",V],["__scopeId","data-v-1bb163b3"]]);const R={name:"ModalOverlayDemo",components:{ModalOverlay:j},setup(){let o=h({title:"Default modal Title",content:"Default modal Content"}),t=h({components:[{}]});const a=()=>{t.components=[{}],o.title=null,o.content=null,o.height=void 0,o.width=void 0,o.opened=!o.opened},e=()=>{a(),o.title="Modal Title",o.content="Modal Content"},d=()=>{a(),o.height="400",o.width="600",t.components.unshift({key:"dummy-component-2",component:f(C(()=>_(()=>import("./DynamicLoadDummy-2.df019876.js"),["assets/DynamicLoadDummy-2.df019876.js","assets/DynamicLoadDummy-2.1280577f.css","assets/index.36b0c546.js","assets/index.0a52a665.css","assets/vendor.ebe7cf86.js"])))})},m=()=>{t.components.unshift({key:"dummy-component-1",component:f(C(()=>_(()=>import("./DynamicLoadDummy-1.ccee4ee8.js"),["assets/DynamicLoadDummy-1.ccee4ee8.js","assets/index.36b0c546.js","assets/index.0a52a665.css","assets/vendor.ebe7cf86.js"])))})},l=()=>{t.components.shift()},s=i(()=>`
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
      `),r=i(()=>`
import ModalTemplate from "../components/ModalTemplate.vue";
      `),D=i(()=>`
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
          /* webpackChunkName: "DynamicLoadDummy" */
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
          /* webpackChunkName: "DynamicLoadDummy" */
          "./dummy/DynamicLoadDummy-1.vue"
        )
      )
    ),
  });
};
const backScreen = () => {
  dynamicComponent.components.shift();
};
      `);return{modalProps:o,dynamicComponent:t,toggleModal:a,loadDefaultModal:e,loadMultiScreenModal:d,addScreen:m,backScreen:l,insertCode:s,importCode:r,templateCode:D}}},z=n("h3",null,"Modal Overlay",-1),F=n("p",null," Modal Overlay is to open a modal on center of screen. It can load asynchronous and with multi screens. ",-1),G=n("h5",null,"Demo:",-1),H={class:"demo-wrapper"},U=n("br",null,null,-1),$=n("br",null,null,-1),q=n("h5",null,"Usage:",-1),J=n("h6",null,"Insert component:",-1),K=n("h6",null,"Import:",-1),Q=n("h6",null,"Apply in template\uFF1A",-1);function W(o,t,a,e,d,m){const l=v("ModalOverlay"),s=v("highlightjs");return y(),b(P,null,[z,F,G,n("div",H,[c(l,{opened:e.modalProps.opened,backable:e.dynamicComponent.components.length>2,height:e.modalProps.height,width:e.modalProps.width,onBackScreen:e.backScreen},{title:u(()=>[k(M(e.modalProps.title),1)]),content:u(()=>[k(M(e.modalProps.content),1)]),customComponent:u(()=>[e.dynamicComponent.components.length>1?(y(),B(A(e.dynamicComponent.components[0].component),{key:e.dynamicComponent.components[0].key,onAddScreen:e.addScreen},null,8,["onAddScreen"])):E("",!0)]),_:1},8,["opened","backable","height","width","onBackScreen"]),n("span",{onClick:t[0]||(t[0]=r=>e.loadDefaultModal())},"Click to load default modal"),U,n("span",{onClick:t[1]||(t[1]=r=>e.loadMultiScreenModal())}," Click to load dynamic component modal with multi screen in default size"),$]),q,J,c(s,{language:"html",code:e.insertCode},null,8,["code"]),K,c(s,{language:"js",code:e.importCode},null,8,["code"]),Q,c(s,{language:"js",code:e.templateCode},null,8,["code"])],64)}var Z=w(R,[["render",W]]);export{Z as default};
