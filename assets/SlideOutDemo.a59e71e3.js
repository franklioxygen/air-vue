import{_ as b,a as C}from"./index.b7942227.js";import{C as w}from"./CustomizedButton.9c631b85.js";/* empty css                                                                 */import{r as f,B as O,o as _,c as D,a as n,C as h,v as B,x as E,D as r,F as P,s as p,f as y,g as i,w as S,E as g,G as k,j as v,t as x,i as A,H as T,e as I}from"./vendor.54853348.js";const L={name:"SlideOut",props:{expanded:{type:Boolean,default:!1},side:{type:String,default:"right"},backable:{type:Boolean,default:!1}},emits:["back-screen"],setup(t,{emit:o}){let d=f({status:t.expanded,side:t.side});const e=()=>{new Promise(a=>{d.side=t.side,a()}).then(()=>{setTimeout(()=>{d.status=!d.status},10)})},s=()=>{o("back-screen")};return O(()=>t.expanded,()=>{e()}),{slideoutExpanded:d,toggleSlideout:e,backScreen:s}}},N={class:"control-bar"},V={class:"slideout-body-container"};function j(t,o,d,e,s,a){return _(),D(P,null,[n("div",{class:h(["slide-out-shade",e.slideoutExpanded.status?"expanded":""]),onClick:o[0]||(o[0]=l=>e.toggleSlideout())},null,2),n("div",{class:h(["slide-out-wrapper",e.slideoutExpanded.status?"expanded":"",e.slideoutExpanded.side])},[n("div",N,[B(n("div",{class:"icon-back",onClick:o[1]||(o[1]=l=>e.backScreen())},null,512),[[E,d.backable]]),n("div",{class:"icon-close",onClick:o[2]||(o[2]=l=>e.toggleSlideout())})]),n("div",V,[n("h4",null,[r(t.$slots,"title",{},void 0,!0)]),n("div",null,[r(t.$slots,"content",{},void 0,!0)]),n("div",null,[r(t.$slots,"customComponent",{},void 0,!0)])])],2)],64)}var R=b(L,[["render",j],["__scopeId","data-v-066e4d31"]]);const z={name:"SlideOutDemo",components:{SlideOut:R,CustomizedButton:w},setup(){let t=f({title:"Default Slideout Title",content:"Default Slideout Content"}),o=f({components:[{}]});const d=()=>{o.components=[{}],t.title=null,t.content=null,t.side=void 0,t.expanded=!t.expanded},e=()=>{d(),t.title="Slideout Title",t.content="Slideout Content"},s=()=>{d(),t.side="left",o.components.unshift({key:"dummy-component-2",component:g(k(()=>C(()=>import("./DynamicLoadDummy-2.67e5a1f6.js"),["assets/DynamicLoadDummy-2.67e5a1f6.js","assets/DynamicLoadDummy-2.f617a68e.css","assets/index.b7942227.js","assets/index.55543177.css","assets/vendor.54853348.js"])))})},a=()=>{o.components.unshift({key:"dummy-component-1",component:g(k(()=>C(()=>import("./DynamicLoadDummy-1.21666867.js"),["assets/DynamicLoadDummy-1.21666867.js","assets/index.b7942227.js","assets/index.55543177.css","assets/vendor.54853348.js"])))})},l=()=>{o.components.shift()},m=p(()=>`
<SlideOut
  :expanded="slideoutProps.expanded"
  :backable="dynamicComponent.components.length > 2"
  :side="slideoutProps.side"
  @back-screen="backScreen"
>
  <!-- normal named slideout slots (optional)-->
  <template #title>
    {{ slideoutProps.title }}
  </template>
  <template #content>
    {{ slideoutProps.content }}
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
</SlideOut>
      `),c=p(()=>`
import { SlideOut } from "air-vue";
      `),u=p(()=>`
// define named slots slideout example
let slideoutProps = reactive({
  title: "Default Slideout Title",
  content: "Default Slideout Content",
});

// define dynamic component slideout example
let dynamicComponent = reactive({
  components: [{}],
});

// toggle slideout and initial it
const toggleSlideout = () => {
  dynamicComponent.components = [{}];
  slideoutProps.title = null;
  slideoutProps.content = null;
  slideoutProps.side = undefined;
  slideoutProps.expanded = !slideoutProps.expanded;
};

// this is how to apply a normal named slots slideout
// open from right is default
const loadDefaultSlideout = () => {
  toggleSlideout();
  slideoutProps.title = "Slideout Title";
  slideoutProps.content = "Slideout Content";
};

// this is how to load dynamic component slideout
const loadMultiScreenSlideout = () => {
  toggleSlideout();
  // open from left side (optional)
  slideoutProps.side = "left";
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

// this is how to add screen in a existing slideout
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
      `);return{slideoutProps:t,dynamicComponent:o,toggleSlideout:d,loadDefaultSlideout:e,loadMultiScreenSlideout:s,addScreen:a,backScreen:l,insertCode:m,importCode:c,templateCode:u}}},M=n("h3",null,"Slide Out",-1),F=n("p",null," Slide Out is to open a slideout from right or left side. It can load asynchronous and with multi screens. ",-1),G=n("h5",null,"Demo:",-1),H={class:"demo-wrapper"},U=n("h5",null,"Usage:",-1),q=n("h6",null,"Insert component:",-1),J=n("h6",null,"Import:",-1),K=n("h6",null,"Apply in template\uFF1A",-1);function Q(t,o,d,e,s,a){const l=y("SlideOut"),m=y("CustomizedButton"),c=y("highlightjs");return _(),D(P,null,[M,F,G,n("div",H,[i(l,{expanded:e.slideoutProps.expanded,backable:e.dynamicComponent.components.length>2,side:e.slideoutProps.side,onBackScreen:e.backScreen},{title:S(()=>[v(x(e.slideoutProps.title),1)]),content:S(()=>[v(x(e.slideoutProps.content),1)]),customComponent:S(()=>[e.dynamicComponent.components.length>1?(_(),A(T(e.dynamicComponent.components[0].component),{key:e.dynamicComponent.components[0].key,onAddScreen:e.addScreen},null,8,["onAddScreen"])):I("",!0)]),_:1},8,["expanded","backable","side","onBackScreen"]),i(m,{"button-text":"Default Slide Out",width:"300px",level:"av-btn-primary",onClickButton:o[0]||(o[0]=u=>e.loadDefaultSlideout())}),i(m,{"button-text":"Dynamic Component Slide Out",width:"300px",level:"av-btn-primary",onClickButton:o[1]||(o[1]=u=>e.loadMultiScreenSlideout())})]),U,q,i(c,{language:"html",code:e.insertCode},null,8,["code"]),J,i(c,{language:"js",code:e.importCode},null,8,["code"]),K,i(c,{language:"js",code:e.templateCode},null,8,["code"])],64)}var $=b(z,[["render",Q]]);export{$ as default};
