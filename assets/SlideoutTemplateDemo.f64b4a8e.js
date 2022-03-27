import{_ as x,a as C}from"./index.9a542061.js";import{r as _,B as P,o as S,c as b,a as o,C as k,v as w,x as E,j as y,t as f,D as u,F as D,s as p,f as h,g as s,w as r,E as g,G as v,i as B,H as A,e as L}from"./vendor.ebe7cf86.js";const N={name:"slideoutTemplate",props:{expanded:{type:Boolean,default:!1},side:{type:String,default:"right"},backable:{type:Boolean,default:!1}},emits:["back-screen"],setup(t,{emit:n}){let l=_({status:t.expanded,side:t.side});const e=()=>{l.status=!l.status,l.side=t.side,console.log(l.side,t.side)},a=()=>{n("back-screen")};return P(()=>t.expanded,()=>{e()}),{slideoutExpanded:l,toggleSlideout:e,backScreen:a}}},V={class:"control-bar"};function j(t,n,l,e,a,c){return S(),b(D,null,[o("div",{class:k(["slideoutTemplate-shade",e.slideoutExpanded.status?"expanded":""]),onClick:n[0]||(n[0]=d=>e.toggleSlideout())},null,2),o("div",{class:k(["slideoutTemplate-wrapper",[e.slideoutExpanded.status?"expanded":"",e.slideoutExpanded.side]]),ref:"wrapper"},[o("div",V,[w(o("div",{class:"icon-back",onClick:n[1]||(n[1]=d=>e.backScreen())},null,512),[[E,l.backable]]),o("div",{class:"icon-close",onClick:n[2]||(n[2]=d=>e.toggleSlideout())}),y(" "+f(e.slideoutExpanded.side),1)]),o("h3",null,[u(t.$slots,"title",{},void 0,!0)]),o("div",null,[u(t.$slots,"content",{},void 0,!0)]),o("div",null,[u(t.$slots,"customComponent",{},void 0,!0)])],2)],64)}var I=x(N,[["render",j],["__scopeId","data-v-ceda73c4"]]);const R={name:"SlideoutTemplateDemo",components:{SlideoutTemplate:I},setup(){let t=_({expanded:!1,title:"Default Slideout Title",content:"Default Slideout Content"}),n=_({components:[{}]});const l=()=>{n.components=[{}],t.title=null,t.content=null,t.side=void 0,t.expanded=!t.expanded},e=()=>{l(),t.title="Slideout Title",t.content="Slideout Content"},a=()=>{l(),t.side="left",n.components.unshift({key:"dummy-component-2",component:g(v(()=>C(()=>import("./DynamicLoadDummy-2.75faf539.js"),["assets/DynamicLoadDummy-2.75faf539.js","assets/index.9a542061.js","assets/index.65060611.css","assets/vendor.ebe7cf86.js"])))})},c=()=>{n.components.unshift({key:"dummy-component-1",component:g(v(()=>C(()=>import("./DynamicLoadDummy-1.82101249.js"),["assets/DynamicLoadDummy-1.82101249.js","assets/index.9a542061.js","assets/index.65060611.css","assets/vendor.ebe7cf86.js"])))})},d=()=>{n.components.shift()},i=p(()=>`
<SlideoutTemplate
  :expanded="slideoutProps.expanded"
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
      `),m=p(()=>`
import SlideoutTemplate from "../components/SlideoutTemplate.vue";
      `),T=p(()=>`
// define example named slots slideout
let slideoutProps = reactive({
  expanded: false,
  title: "Default Slideout Title",
  content: "Default Slideout Content",
});

// define example dynamic component slideout 
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

// this is how to load dynamic component slideout
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
      `);return{slideoutProps:t,dynamicComponent:n,toggleSlideout:l,loadDefaultSlideout:e,loadMultiScreenSlideout:a,addScreen:c,backScreen:d,insertCode:i,importCode:m,templateCode:T}}},M=o("h3",null,"Slideout Template",-1),F=o("p",null,"SlideoutTemplate",-1),O=o("h5",null,"Demo:",-1),z={class:"demo-wrapper"},G=o("br",null,null,-1),H=o("br",null,null,-1),U=o("h5",null,"Usage:",-1),q=o("h6",null,"Insert component:",-1),J=o("h6",null,"Import:",-1),K=o("h6",null,"Apply in template\uFF1A",-1);function Q(t,n,l,e,a,c){const d=h("SlideoutTemplate"),i=h("highlightjs");return S(),b(D,null,[M,F,O,o("div",z,[s(d,{expanded:e.slideoutProps.expanded,backable:e.dynamicComponent.components.length>2,side:e.slideoutProps.side,onBackScreen:e.backScreen},{title:r(()=>[y(f(e.slideoutProps.title),1)]),content:r(()=>[y(f(e.slideoutProps.content),1)]),customComponent:r(()=>[e.dynamicComponent.components.length>1?(S(),B(A(e.dynamicComponent.components[0].component),{key:e.dynamicComponent.components[0].key,onAddScreen:e.addScreen},null,8,["onAddScreen"])):L("",!0)]),_:1},8,["expanded","backable","side","onBackScreen"]),o("span",{onClick:n[0]||(n[0]=m=>e.loadDefaultSlideout())},"Click to load default slideout"),G,o("span",{onClick:n[1]||(n[1]=m=>e.loadMultiScreenSlideout())}," Click to load Multi Screen slideout "),H]),U,q,s(i,{language:"html",code:e.insertCode},null,8,["code"]),J,s(i,{language:"js",code:e.importCode},null,8,["code"]),K,s(i,{language:"js",code:e.templateCode},null,8,["code"])],64)}var Y=x(R,[["render",Q]]);export{Y as default};
