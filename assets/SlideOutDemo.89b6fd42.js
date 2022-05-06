import{_ as D,a as h}from"./index.34817873.js";import{C as B}from"./CustomizedButton.cea7bf16.js";import{D as E}from"./deviceType.b60ca1f3.js";import{r as _,B as T,o as b,c as P,a as n,C,v as q,x as A,D as y,F as O,s as u,f as m,g as d,w as S,E as g,G as k,j as v,t as x,i as j,H as F,e as I}from"./vendor.54853348.js";import{F as M}from"./FooterMessage.e59c754a.js";const R={name:"SlideOut",props:{expanded:{type:Boolean,default:!1},side:{type:String,default:"right"},backable:{type:Boolean,default:!1}},emits:["back-screen"],setup(t,{emit:o}){let l=_({status:t.expanded,side:t.side});const e=()=>{new Promise(a=>{l.side=t.side,a()}).then(()=>{setTimeout(()=>{l.status=!l.status},10)})},s=()=>{o("back-screen")};return T(()=>t.expanded,()=>{e()}),{slideoutExpanded:l,toggleSlideout:e,backScreen:s}}},V={class:"control-bar"},N={class:"slideout-body-container"};function z(t,o,l,e,s,a){return b(),P(O,null,[n("div",{class:C(["slide-out-shade",e.slideoutExpanded.status?"expanded":""]),onClick:o[0]||(o[0]=i=>e.toggleSlideout())},null,2),n("div",{class:C(["slide-out-wrapper",e.slideoutExpanded.status?"expanded":"",e.slideoutExpanded.side])},[n("div",V,[q(n("div",{class:"icon-back",onClick:o[1]||(o[1]=i=>e.backScreen())},null,512),[[A,l.backable]]),n("div",{class:"icon-close",onClick:o[2]||(o[2]=i=>e.toggleSlideout())})]),n("div",N,[n("h4",null,[y(t.$slots,"title",{},void 0,!0)]),n("div",null,[y(t.$slots,"content",{},void 0,!0)]),n("div",null,[y(t.$slots,"customComponent",{},void 0,!0)])])],2)],64)}var L=D(R,[["render",z],["__scopeId","data-v-066e4d31"]]);const G={name:"SlideOutDemo",components:{SlideOut:L,CustomizedButton:B,DataTable:E,FooterMessage:M},setup(){let t=_({title:"Default Slideout Title",content:"Default Slideout Content"}),o=_({components:[{}]});const l=()=>{o.components=[{}],t.title=null,t.content=null,t.side=void 0,t.expanded=!t.expanded},e=()=>{l(),t.title="Slideout Title",t.content="Slideout Content"},s=()=>{l(),t.side="left",o.components.unshift({key:"dummy-component-2",component:g(k(()=>h(()=>import("./DynamicLoadDummy-2.bc8ae4e5.js"),["assets/DynamicLoadDummy-2.bc8ae4e5.js","assets/DynamicLoadDummy-2.f617a68e.css","assets/index.34817873.js","assets/index.90fbf703.css","assets/vendor.54853348.js"])))})},a=()=>{o.components.unshift({key:"dummy-component-1",component:g(k(()=>h(()=>import("./DynamicLoadDummy-1.1753809a.js"),["assets/DynamicLoadDummy-1.1753809a.js","assets/index.34817873.js","assets/index.90fbf703.css","assets/vendor.54853348.js"])))})},i=()=>{o.components.shift()},r=u(()=>`
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
      `),p=u(()=>`
import { SlideOut } from "air-vue";
      `),c=u(()=>`
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
          "./dummy/DynamicLoadDummy-1.vue"
        )
      )
    ),
  });
};
const backScreen = () => {
  dynamicComponent.components.shift();
};
      `),f=u(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"expanded",type:"Boolean",required:"false",default:"false",description:"slideout is expanded or not"},{name:"backable",type:"Boolean",required:"false",default:"false",description:"is backable or not"},{name:"slide",type:"String",required:"false",default:"right",description:"slide direction"},{name:"back-screen",type:"<Event>",required:"true if backable",default:"-",description:"emit change content if back screen"},{name:"slideoutProps",type:"Object",required:"false",default:"-",description:"slideout content in template"},{name:"dynamicComponent",type:"Object",required:"false",default:"-",description:"slideout content in template"}]}));return{slideoutProps:t,dynamicComponent:o,toggleSlideout:l,loadDefaultSlideout:e,loadMultiScreenSlideout:s,addScreen:a,backScreen:i,insertCode:r,importCode:p,templateCode:c,tableProps:f}}},H=n("h3",null,"Slide Out",-1),U=n("p",null," Slide Out is to open a slideout from right or left side. It can load asynchronous and with multi screens. ",-1),J=n("h5",null,"Demo:",-1),K={class:"demo-wrapper"},Q=n("h5",null,"Usage:",-1),W=n("h6",null,"Insert component:",-1),X=n("h6",null,"Import:",-1),Y=n("h6",null,"Apply in template\uFF1A",-1);function Z(t,o,l,e,s,a){const i=m("SlideOut"),r=m("CustomizedButton"),p=m("DataTable"),c=m("highlightjs"),f=m("FooterMessage");return b(),P(O,null,[H,U,J,n("div",K,[d(i,{expanded:e.slideoutProps.expanded,backable:e.dynamicComponent.components.length>2,side:e.slideoutProps.side,onBackScreen:e.backScreen},{title:S(()=>[v(x(e.slideoutProps.title),1)]),content:S(()=>[v(x(e.slideoutProps.content),1)]),customComponent:S(()=>[e.dynamicComponent.components.length>1?(b(),j(F(e.dynamicComponent.components[0].component),{key:e.dynamicComponent.components[0].key,onAddScreen:e.addScreen},null,8,["onAddScreen"])):I("",!0)]),_:1},8,["expanded","backable","side","onBackScreen"]),d(r,{id:"default-slideout-button","button-text":"Default Slide Out",width:"300px",level:"av-btn-primary",onClickButton:o[0]||(o[0]=w=>e.loadDefaultSlideout())}),d(r,{id:"dynamic-component-slideout-button","button-text":"Dynamic Component Slide Out",width:"300px",level:"av-btn-primary",onClickButton:o[1]||(o[1]=w=>e.loadMultiScreenSlideout())})]),d(p,{"table-props":e.tableProps},null,8,["table-props"]),Q,W,d(c,{language:"html",code:e.insertCode},null,8,["code"]),X,d(c,{language:"js",code:e.importCode},null,8,["code"]),Y,d(c,{language:"js",code:e.templateCode},null,8,["code"]),d(f)],64)}var le=D(G,[["render",Z]]);export{le as default};
