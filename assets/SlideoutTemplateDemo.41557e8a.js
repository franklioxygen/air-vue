import{_ as x,a as S}from"./index.14e09776.js";import{r as _,B as T,o as y,c as b,a as t,C as f,v as w,x as E,D as u,F as D,s as p,f as h,g as c,w as r,E as C,G as k,j as g,t as v,i as B,H as A,e as I}from"./vendor.ebe7cf86.js";const L={name:"SlideoutTemplate",props:{expanded:{type:Boolean,default:!1},side:{type:String,default:"right"},backable:{type:Boolean,default:!1}},emits:["back-screen"],setup(o,{emit:n}){let l=_({status:o.expanded,side:o.side});const e=()=>{new Promise(d=>{l.side=o.side,d()}).then(()=>{new Promise(d=>{setTimeout(()=>{l.status=!l.status,d()},10)})})},s=()=>{n("back-screen")};return T(()=>o.expanded,()=>{e()}),{slideoutExpanded:l,toggleSlideout:e,backScreen:s}}},N={class:"control-bar"},V={class:"slideout-body-container"};function j(o,n,l,e,s,d){return y(),b(D,null,[t("div",{class:f(["slideout-template-shade",e.slideoutExpanded.status?"expanded":""]),onClick:n[0]||(n[0]=i=>e.toggleSlideout())},null,2),t("div",{class:f(["slideout-template-wrapper",e.slideoutExpanded.status?"expanded":"",e.slideoutExpanded.side])},[t("div",N,[w(t("div",{class:"icon-back",onClick:n[1]||(n[1]=i=>e.backScreen())},null,512),[[E,l.backable]]),t("div",{class:"icon-close",onClick:n[2]||(n[2]=i=>e.toggleSlideout())})]),t("div",V,[t("h4",null,[u(o.$slots,"title",{},void 0,!0)]),t("div",null,[u(o.$slots,"content",{},void 0,!0)]),t("div",null,[u(o.$slots,"customComponent",{},void 0,!0)])])],2)],64)}var R=x(L,[["render",j],["__scopeId","data-v-43214c6a"]]);const M={name:"SlideoutTemplateDemo",components:{SlideoutTemplate:R},setup(){let o=_({title:"Default Slideout Title",content:"Default Slideout Content"}),n=_({components:[{}]});const l=()=>{n.components=[{}],o.title=null,o.content=null,o.side=void 0,o.expanded=!o.expanded},e=()=>{l(),o.title="Slideout Title",o.content="Slideout Content"},s=()=>{l(),o.side="left",n.components.unshift({key:"dummy-component-2",component:C(k(()=>S(()=>import("./DynamicLoadDummy-2.bd874c6b.js"),["assets/DynamicLoadDummy-2.bd874c6b.js","assets/DynamicLoadDummy-2.1280577f.css","assets/index.14e09776.js","assets/index.bd7f0766.css","assets/vendor.ebe7cf86.js"])))})},d=()=>{n.components.unshift({key:"dummy-component-1",component:C(k(()=>S(()=>import("./DynamicLoadDummy-1.73543b44.js"),["assets/DynamicLoadDummy-1.73543b44.js","assets/index.14e09776.js","assets/index.bd7f0766.css","assets/vendor.ebe7cf86.js"])))})},i=()=>{n.components.shift()},a=p(()=>`
<SlideoutTemplate
  :expanded="slideoutProps.expanded"
  :backable="dynamicComponent.components.length > 2"
  :side="slideoutProps.side"
  @back-screen="backScreen"
>
  <!-- normal title content slideout slots (optional)-->
  <template #title>
    {{ slideoutProps.title }}
  </template>
  <template #content>
    {{ slideoutProps.content }}
  </template>
  <!-- dynamic load component slot (optional)-->
  <template #customComponent>
    <component
      v-if="dynamicComponent.components.length > 1"
      :is="dynamicComponent.components[0].component"
      :key="dynamicComponent.components[0].key"
      @add-screen="addScreen"
    />
  </template>
</SlideoutTemplate>
      `),m=p(()=>`
import SlideoutTemplate from "../components/SlideoutTemplate.vue";
      `),P=p(()=>`
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
      `);return{slideoutProps:o,dynamicComponent:n,toggleSlideout:l,loadDefaultSlideout:e,loadMultiScreenSlideout:s,addScreen:d,backScreen:i,insertCode:a,importCode:m,templateCode:P}}},F=t("h3",null,"Slideout Template",-1),O=t("p",null," Slideout Template is to open a slideout from right or left side. It can load asynchronous and with multi screens. ",-1),z=t("h5",null,"Demo:",-1),G={class:"demo-wrapper"},H=t("br",null,null,-1),U=t("br",null,null,-1),q=t("h5",null,"Usage:",-1),J=t("h6",null,"Insert component:",-1),K=t("h6",null,"Import:",-1),Q=t("h6",null,"Apply in template\uFF1A",-1);function W(o,n,l,e,s,d){const i=h("SlideoutTemplate"),a=h("highlightjs");return y(),b(D,null,[F,O,z,t("div",G,[c(i,{expanded:e.slideoutProps.expanded,backable:e.dynamicComponent.components.length>2,side:e.slideoutProps.side,onBackScreen:e.backScreen},{title:r(()=>[g(v(e.slideoutProps.title),1)]),content:r(()=>[g(v(e.slideoutProps.content),1)]),customComponent:r(()=>[e.dynamicComponent.components.length>1?(y(),B(A(e.dynamicComponent.components[0].component),{key:e.dynamicComponent.components[0].key,onAddScreen:e.addScreen},null,8,["onAddScreen"])):I("",!0)]),_:1},8,["expanded","backable","side","onBackScreen"]),t("span",{onClick:n[0]||(n[0]=m=>e.loadDefaultSlideout())},"Click to load default slideout"),H,t("span",{onClick:n[1]||(n[1]=m=>e.loadMultiScreenSlideout())}," Click to load dynamic component slideout with multi screen"),U]),q,J,c(a,{language:"html",code:e.insertCode},null,8,["code"]),K,c(a,{language:"js",code:e.importCode},null,8,["code"]),Q,c(a,{language:"js",code:e.templateCode},null,8,["code"])],64)}var Z=x(M,[["render",W]]);export{Z as default};
