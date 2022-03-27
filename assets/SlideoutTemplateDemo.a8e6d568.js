import{_ as x,a as S}from"./index.eabab480.js";import{r as _,B as P,o as y,c as b,a as t,C as f,v as w,x as E,D as u,F as D,s as p,f as h,g as a,w as r,E as C,G as k,j as g,t as v,i as B,H as A,e as I}from"./vendor.ebe7cf86.js";const L={name:"slideoutTemplate",props:{expanded:{type:Boolean,default:!1},side:{type:String,default:"right"},backable:{type:Boolean,default:!1}},emits:["back-screen"],setup(o,{emit:n}){let l=_({status:o.expanded,side:o.side});const e=()=>{l.status=!l.status,l.side=o.side},i=()=>{n("back-screen")};return P(()=>o.expanded,()=>{e()}),{slideoutExpanded:l,toggleSlideout:e,backScreen:i}}},N={class:"control-bar"};function V(o,n,l,e,i,c){return y(),b(D,null,[t("div",{class:f(["slideoutTemplate-shade",e.slideoutExpanded.status?"expanded":""]),onClick:n[0]||(n[0]=d=>e.toggleSlideout())},null,2),t("div",{class:f(["slideoutTemplate-wrapper",[e.slideoutExpanded.status?"expanded":"",e.slideoutExpanded.side]])},[t("div",N,[w(t("div",{class:"icon-back",onClick:n[1]||(n[1]=d=>e.backScreen())},null,512),[[E,l.backable]]),t("div",{class:"icon-close",onClick:n[2]||(n[2]=d=>e.toggleSlideout())})]),t("h3",null,[u(o.$slots,"title",{},void 0,!0)]),t("div",null,[u(o.$slots,"content",{},void 0,!0)]),t("div",null,[u(o.$slots,"customComponent",{},void 0,!0)])],2)],64)}var j=x(L,[["render",V],["__scopeId","data-v-4ef6232d"]]);const R={name:"SlideoutTemplateDemo",components:{SlideoutTemplate:j},setup(){let o=_({title:"Default Slideout Title",content:"Default Slideout Content"}),n=_({components:[{}]});const l=()=>{n.components=[{}],o.title=null,o.content=null,o.side=void 0,o.expanded=!o.expanded},e=()=>{l(),o.title="Slideout Title",o.content="Slideout Content"},i=()=>{l(),o.side="left",n.components.unshift({key:"dummy-component-2",component:C(k(()=>S(()=>import("./DynamicLoadDummy-2.393ecfa7.js"),["assets/DynamicLoadDummy-2.393ecfa7.js","assets/index.eabab480.js","assets/index.65060611.css","assets/vendor.ebe7cf86.js"])))})},c=()=>{n.components.unshift({key:"dummy-component-1",component:C(k(()=>S(()=>import("./DynamicLoadDummy-1.fa10ec5b.js"),["assets/DynamicLoadDummy-1.fa10ec5b.js","assets/index.eabab480.js","assets/index.65060611.css","assets/vendor.ebe7cf86.js"])))})},d=()=>{n.components.shift()},s=p(()=>`
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
      `),T=p(()=>`
// define named slots slideout example
let slideoutProps = reactive({
  expanded: false,
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
      `);return{slideoutProps:o,dynamicComponent:n,toggleSlideout:l,loadDefaultSlideout:e,loadMultiScreenSlideout:i,addScreen:c,backScreen:d,insertCode:s,importCode:m,templateCode:T}}},M=t("h3",null,"Slideout Template",-1),F=t("p",null," Slideout Template is to open a slideout from right or left side. It can load asynchronous and with multi screens. ",-1),O=t("h5",null,"Demo:",-1),z={class:"demo-wrapper"},G=t("br",null,null,-1),H=t("br",null,null,-1),U=t("h5",null,"Usage:",-1),q=t("h6",null,"Insert component:",-1),J=t("h6",null,"Import:",-1),K=t("h6",null,"Apply in template\uFF1A",-1);function Q(o,n,l,e,i,c){const d=h("SlideoutTemplate"),s=h("highlightjs");return y(),b(D,null,[M,F,O,t("div",z,[a(d,{expanded:e.slideoutProps.expanded,backable:e.dynamicComponent.components.length>2,side:e.slideoutProps.side,onBackScreen:e.backScreen},{title:r(()=>[g(v(e.slideoutProps.title),1)]),content:r(()=>[g(v(e.slideoutProps.content),1)]),customComponent:r(()=>[e.dynamicComponent.components.length>1?(y(),B(A(e.dynamicComponent.components[0].component),{key:e.dynamicComponent.components[0].key,onAddScreen:e.addScreen},null,8,["onAddScreen"])):I("",!0)]),_:1},8,["expanded","backable","side","onBackScreen"]),t("span",{onClick:n[0]||(n[0]=m=>e.loadDefaultSlideout())},"Click to load default slideout"),G,t("span",{onClick:n[1]||(n[1]=m=>e.loadMultiScreenSlideout())}," Click to load dynamic component slideout with multi screen"),H]),U,q,a(s,{language:"html",code:e.insertCode},null,8,["code"]),J,a(s,{language:"js",code:e.importCode},null,8,["code"]),K,a(s,{language:"js",code:e.templateCode},null,8,["code"])],64)}var Y=x(R,[["render",Q]]);export{Y as default};