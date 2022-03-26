import{_ as D,a as u}from"./index.7b3dd353.js";import{r as C,B as w,o as f,c as b,a as t,C as k,v as E,x as A,D as p,F as x,s as r,f as v,g as m,w as y,E as _,G as S,j as h,t as g,i as B,H as L,e as N}from"./vendor.ebe7cf86.js";const R={name:"slideoutTemplate",props:{expanded:{type:Boolean,default:!1},id:{type:String,default:"slideout-id",required:!0},backable:{type:Boolean,default:!1}},emits:["back-screen"],setup(n,{emit:o}){let l=C({value:n.expanded});const e=()=>{l.value=!l.value},a=()=>{o("back-screen")};return w(()=>n.expanded,()=>{l.value=!l.value}),{slideoutExpanded:l,toggleSlideout:e,backScreen:a}}},V={class:"control-bar"};function I(n,o,l,e,a,c){return f(),b(x,null,[t("div",{class:k(["slideoutTemplate-shade",e.slideoutExpanded.value?"expanded":""]),onClick:o[0]||(o[0]=d=>e.toggleSlideout())},null,2),t("div",{class:k(["slideoutTemplate-wrapper",e.slideoutExpanded.value?"expanded":""]),ref:"wrapper"},[t("div",V,[E(t("div",{class:"icon-back",onClick:o[1]||(o[1]=d=>e.backScreen())},null,512),[[A,l.backable]]),t("div",{class:"icon-close",onClick:o[2]||(o[2]=d=>e.toggleSlideout())})]),t("h3",null,[p(n.$slots,"title",{},void 0,!0)]),t("div",null,[p(n.$slots,"content",{},void 0,!0)]),t("div",null,[p(n.$slots,"customComponent",{},void 0,!0)])],2)],64)}var j=D(R,[["render",I],["__scopeId","data-v-4a89e3fa"]]);const M={name:"SlideoutTemplateDemo",components:{SlideoutTemplate:j},setup(){let n=C({expanded:!1,id:"default-slideout",title:"Default Slideout Title",content:"Default Slideout Content"}),o=C({components:[{}]});const l=()=>{o.components=[{}],n.title=null,n.content=null,n.expanded=!n.expanded},e=()=>{l(),n.title="Slideout Title",n.content="Slideout Content"},a=()=>{l(),o.components.unshift({id:"dummy-component-1",component:_(S(()=>u(()=>import("./DynamicLoadDummy-1.c8d3f8dd.js"),["assets/DynamicLoadDummy-1.c8d3f8dd.js","assets/index.7b3dd353.js","assets/index.65060611.css","assets/vendor.ebe7cf86.js"])))})},c=()=>{l(),o.components.unshift({key:"dummy-component-2",component:_(S(()=>u(()=>import("./DynamicLoadDummy-2.45ff39c6.js"),["assets/DynamicLoadDummy-2.45ff39c6.js","assets/index.7b3dd353.js","assets/index.65060611.css","assets/vendor.ebe7cf86.js"])))})},d=()=>{o.components.unshift({key:"dummy-component-1",component:_(S(()=>u(()=>import("./DynamicLoadDummy-1.c8d3f8dd.js"),["assets/DynamicLoadDummy-1.c8d3f8dd.js","assets/index.7b3dd353.js","assets/index.65060611.css","assets/vendor.ebe7cf86.js"])))})},i=()=>{o.components.shift()},s=r(()=>`
<SlideoutTemplate
  :expanded="slideoutProps.expanded"
  :id="slideoutProps.id"
  :backable="dynamicComponent.components.length > 2"
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
      `),T=r(()=>`
import SlideoutTemplate from "../components/SlideoutTemplate.vue";
      `),P=r(()=>`
// define named slots slideout
let slideoutProps = reactive({
  expanded: false,
  id: "default-slideout",
  title: "Default Slideout Title",
  content: "Default Slideout Content",
});

// define dynamic component slideout 
let dynamicComponent = reactive({
  components: [{}],
});

// toggle slideout and initial it
const toggleSlideout = () => {
  dynamicComponent.components = [{}];
  slideoutProps.title = null;
  slideoutProps.content = null;
  slideoutProps.expanded = !slideoutProps.expanded;
};

// this is how to apply a normal named slots slideout
const loadDefaultSlideout = () => {
  toggleSlideout();
  slideoutProps.title = "Slideout Title";
  slideoutProps.content = "Slideout Content";
};

// this is how to apply a dynamic component slideout
const loadDynamicSlideout = () => {
  toggleSlideout();
  dynamicComponent.components.unshift({
    id: "dummy-component-1",
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

// this is same to dynamic component slideout, but it has multi screen
const loadMultiScreenSlideout = () => {
  toggleSlideout();
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
      `);return{slideoutProps:n,dynamicComponent:o,toggleSlideout:l,loadDefaultSlideout:e,loadDynamicSlideout:a,loadMultiScreenSlideout:c,addScreen:d,backScreen:i,insertCode:s,importCode:T,templateCode:P}}},O=t("h3",null,"Slideout Template",-1),F=t("p",null,"SlideoutTemplate",-1),q=t("h5",null,"Demo:",-1),z={class:"demo-wrapper"},G=t("br",null,null,-1),H=t("br",null,null,-1),U=t("br",null,null,-1),J=t("h5",null,"Usage:",-1),K=t("h6",null,"Insert component:",-1),Q=t("h6",null,"Import:",-1),W=t("h6",null,"Apply in template\uFF1A",-1);function X(n,o,l,e,a,c){const d=v("SlideoutTemplate"),i=v("highlightjs");return f(),b(x,null,[O,F,q,t("div",z,[m(d,{expanded:e.slideoutProps.expanded,id:e.slideoutProps.id,backable:e.dynamicComponent.components.length>2,onBackScreen:e.backScreen},{title:y(()=>[h(g(e.slideoutProps.title),1)]),content:y(()=>[h(g(e.slideoutProps.content),1)]),customComponent:y(()=>[e.dynamicComponent.components.length>1?(f(),B(L(e.dynamicComponent.components[0].component),{key:e.dynamicComponent.components[0].key,onAddScreen:e.addScreen},null,8,["onAddScreen"])):N("",!0)]),_:1},8,["expanded","id","backable","onBackScreen"]),t("span",{onClick:o[0]||(o[0]=s=>e.loadDefaultSlideout())},"Click to load default slideout"),G,t("span",{onClick:o[1]||(o[1]=s=>e.loadDynamicSlideout())}," Click to load dynamic component slideout "),H,t("span",{onClick:o[2]||(o[2]=s=>e.loadMultiScreenSlideout())}," Click to load Multi Screen slideout "),U]),J,K,m(i,{language:"html",code:e.insertCode},null,8,["code"]),Q,m(i,{language:"js",code:e.importCode},null,8,["code"]),W,m(i,{language:"js",code:e.templateCode},null,8,["code"])],64)}var $=D(M,[["render",X]]);export{$ as default};
