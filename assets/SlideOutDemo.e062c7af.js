import{_ as b,a as C}from"./index.4082a964.js";import{r as S,B as w,o as f,c as D,a as n,C as h,v as O,x as B,D as r,F as P,s as p,f as _,g as i,w as y,E as v,G as g,j as k,t as x,i as E,H as A,e as T}from"./vendor.54853348.js";import{C as I}from"./CustomizedButton.6eb61ff8.js";const L={name:"SlideOut",props:{expanded:{type:Boolean,default:!1},side:{type:String,default:"right"},backable:{type:Boolean,default:!1}},emits:["back-screen"],setup(t,{emit:o}){let d=S({status:t.expanded,side:t.side});const e=()=>{new Promise(a=>{d.side=t.side,a()}).then(()=>{setTimeout(()=>{d.status=!d.status},10)})},s=()=>{o("back-screen")};return w(()=>t.expanded,()=>{e()}),{slideoutExpanded:d,toggleSlideout:e,backScreen:s}}},N={class:"control-bar"},V={class:"slideout-body-container"};function j(t,o,d,e,s,a){return f(),D(P,null,[n("div",{class:h(["slide-out-shade",e.slideoutExpanded.status?"expanded":""]),onClick:o[0]||(o[0]=l=>e.toggleSlideout())},null,2),n("div",{class:h(["slide-out-wrapper",e.slideoutExpanded.status?"expanded":"",e.slideoutExpanded.side])},[n("div",N,[O(n("div",{class:"icon-back",onClick:o[1]||(o[1]=l=>e.backScreen())},null,512),[[B,d.backable]]),n("div",{class:"icon-close",onClick:o[2]||(o[2]=l=>e.toggleSlideout())})]),n("div",V,[n("h4",null,[r(t.$slots,"title",{},void 0,!0)]),n("div",null,[r(t.$slots,"content",{},void 0,!0)]),n("div",null,[r(t.$slots,"customComponent",{},void 0,!0)])])],2)],64)}var R=b(L,[["render",j],["__scopeId","data-v-066e4d31"]]);const z={name:"SlideOutDemo",components:{SlideOut:R,CustomizedButton:I},setup(){let t=S({title:"Default Slideout Title",content:"Default Slideout Content"}),o=S({components:[{}]});const d=()=>{o.components=[{}],t.title=null,t.content=null,t.side=void 0,t.expanded=!t.expanded},e=()=>{d(),t.title="Slideout Title",t.content="Slideout Content"},s=()=>{d(),t.side="left",o.components.unshift({key:"dummy-component-2",component:v(g(()=>C(()=>import("./DynamicLoadDummy-2.21b35e3f.js"),["assets/DynamicLoadDummy-2.21b35e3f.js","assets/DynamicLoadDummy-2.1280577f.css","assets/index.4082a964.js","assets/index.0e85b7ef.css","assets/vendor.54853348.js"])))})},a=()=>{o.components.unshift({key:"dummy-component-1",component:v(g(()=>C(()=>import("./DynamicLoadDummy-1.999d2321.js"),["assets/DynamicLoadDummy-1.999d2321.js","assets/index.4082a964.js","assets/index.0e85b7ef.css","assets/vendor.54853348.js"])))})},l=()=>{o.components.shift()},m=p(()=>`
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
import SlideOut from "../components/SlideOut.vue";
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
      `);return{slideoutProps:t,dynamicComponent:o,toggleSlideout:d,loadDefaultSlideout:e,loadMultiScreenSlideout:s,addScreen:a,backScreen:l,insertCode:m,importCode:c,templateCode:u}}},M=n("h3",null,"Slide Out",-1),F=n("p",null," Slide Out is to open a slideout from right or left side. It can load asynchronous and with multi screens. ",-1),G=n("h5",null,"Demo:",-1),H={class:"demo-wrapper"},U=n("h5",null,"Usage:",-1),q=n("h6",null,"Insert component:",-1),J=n("h6",null,"Import:",-1),K=n("h6",null,"Apply in template\uFF1A",-1);function Q(t,o,d,e,s,a){const l=_("SlideOut"),m=_("CustomizedButton"),c=_("highlightjs");return f(),D(P,null,[M,F,G,n("div",H,[i(l,{expanded:e.slideoutProps.expanded,backable:e.dynamicComponent.components.length>2,side:e.slideoutProps.side,onBackScreen:e.backScreen},{title:y(()=>[k(x(e.slideoutProps.title),1)]),content:y(()=>[k(x(e.slideoutProps.content),1)]),customComponent:y(()=>[e.dynamicComponent.components.length>1?(f(),E(A(e.dynamicComponent.components[0].component),{key:e.dynamicComponent.components[0].key,onAddScreen:e.addScreen},null,8,["onAddScreen"])):T("",!0)]),_:1},8,["expanded","backable","side","onBackScreen"]),i(m,{"button-text":"Default Slide Out",width:"300px",level:"av-btn-primary",onClickButton:o[0]||(o[0]=u=>e.loadDefaultSlideout())}),i(m,{"button-text":"Dynamic Component Slide Out",width:"300px",level:"av-btn-primary",onClickButton:o[1]||(o[1]=u=>e.loadMultiScreenSlideout())})]),U,q,i(c,{language:"html",code:e.insertCode},null,8,["code"]),J,i(c,{language:"js",code:e.importCode},null,8,["code"]),K,i(c,{language:"js",code:e.templateCode},null,8,["code"])],64)}var Z=b(z,[["render",Q]]);export{Z as default};
