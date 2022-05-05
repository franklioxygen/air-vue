import{_ as v,a as u}from"./index.44d55d6b.js";import"./deviceType.f861e0a5.js";import{s as d,r as p,d as y,o as b,c as m,a,F as g,h as w,C,y as P,t as V,D as f,p as k,b as D,E as T,G as _,f as h,g as r,w as x,i as S,H as I}from"./vendor.54853348.js";const q={name:"TabView",props:{id:{type:String,required:!0},isDynamic:{type:Boolean,default:!1},tabsProps:{type:Object,default:()=>({})}},emits:["change-tab"],setup(t,{emit:l}){let o=d(()=>`width: ${100/t.tabsProps.tabs.length}%;`),e=p({index:t.tabsProps.activeTab}),s=(c,i)=>{l("change-tab",{id:t.id,index:c}),e.index=c,t.isDynamic||(document.querySelector(`#${i} .av-tab-content .av-tab-plain-content`).innerHTML=t.tabsProps.tabs[c].content)};return y(()=>{s(e.index,t.id)}),{tabTitleStyle:o,currentActiveTab:e,changeTab:s}}},A=t=>(k("data-v-7734a51a"),t=t(),D(),t),E=["id"],j={class:"av-tabs"},B=["onClick"],L={class:"av-tab-content"},N=A(()=>a("div",{class:"av-tab-plain-content"},null,-1));function R(t,l,o,e,s,c){return b(),m("div",{class:"tab-view-wrapper",id:o.id},[a("ul",j,[(b(!0),m(g,null,w(o.tabsProps.tabs,(i,n)=>(b(),m("li",{class:C(["av-tab-title",{active:n===e.currentActiveTab.index}]),key:n,style:P(e.tabTitleStyle),onClick:Y=>e.changeTab(n,o.id)},V(i.title),15,B))),128))]),a("div",L,[N,a("div",null,[f(t.$slots,"customComponent",{},void 0,!0)])])],8,E)}var O=v(q,[["render",R],["__scopeId","data-v-7734a51a"]]);const U={name:"TabViewDemo",components:{TabView:O},setup(){const t=d(()=>`
<!-- normal tab view-->
<p>This is a normal Tab View:</p>
<TabView
  id="demo-tab-view-1"
  :tabs-props="demo1TabsProps"
  @change-tab="tab1Change"
>
</TabView>
<!-- dynamic tab view-->
<p>This is a dynamic component Tab View:</p>
<TabView
  id="demo-tab-view-2"
  :isDynamic="true"
  :tabs-props="demo2TabsProps"
  @change-tab="tab2Change"
>
  <template #customComponent>
    <component
      :is="demo2TabsProps.tabs[demo2TabsProps.activeTab].content"
      :key="demo2TabsProps.tabs[demo2TabsProps.activeTab].key"
    />
  </template>
</TabView>
      `),l=d(()=>`
import { TabView } from "air-vue";
      `),o=d(()=>`
let demo1TabsProps = reactive({
  activeTab: 0, // default active tab
  tabs: [
    {
      title: "Tab 1",
      content: 'Sed malesuada gravida ex, nec tincidunt nunc tempor quis. 
        Nunc sapien orci, accumsan non mollis congue, scelerisque 
        at metus. Donec porta euismod convallis. Ut suscipit dolor 
        risus, sed ultricies tellus pellentesque et.',
      key: "tab-1",
    },
    ...
  ],
});
let demo2TabsProps = reactive({
  activeTab: 1,  // default active tab
  tabs: [
    {
      title: "Tab 1",
      content: markRaw(
        defineAsyncComponent(() => import("./dummy/DynamicLoadDummy-0.vue"))
      ),
      key: "tab-1",
    },
    ...
  ],
});
const tab1Change = (event) => {
  demo1TabsProps.activeTab = event.index;
};
const tab2Change = (event) => {
  demo2TabsProps.activeTab = event.index;
};
      `);let e=p({activeTab:0,tabs:[{title:"Tab 1",content:`Sed malesuada gravida ex, nec tincidunt nunc tempor quis. 
            Nunc sapien orci, accumsan non mollis congue, scelerisque 
            at metus. Donec porta euismod convallis. Ut suscipit dolor 
            risus, sed ultricies tellus pellentesque et.`,key:"tab-1"},{title:"Tab 2",content:"Tab-2-content",key:"tab-2"},{title:"Tab 3",content:"Tab-3-content",key:"tab-3"}]}),s=p({activeTab:1,tabs:[{title:"Tab 1",content:T(_(()=>u(()=>import("./DynamicLoadDummy-0.d057f6b8.js"),["assets/DynamicLoadDummy-0.d057f6b8.js","assets/index.44d55d6b.js","assets/index.032e4782.css","assets/vendor.54853348.js"]))),key:"tab-1"},{title:"Tab 2",content:T(_(()=>u(()=>import("./DynamicLoadDummy-1.b4bc81e8.js"),["assets/DynamicLoadDummy-1.b4bc81e8.js","assets/index.44d55d6b.js","assets/index.032e4782.css","assets/vendor.54853348.js"]))),key:"tab-2"}]});return{insertCode:t,importCode:l,templateCode:o,demo1TabsProps:e,demo2TabsProps:s,tab1Change:n=>{e.activeTab=n.index},tab2Change:n=>{s.activeTab=n.index}}}},z=a("h3",null,"Tab View",-1),F=a("p",null," Tab View display tabs of content. It can load asynchronous and with multi screens. ",-1),H=a("h5",null,"Demo:",-1),M={class:"demo-wrapper"},$=a("p",null,"This is a normal Tab View:",-1),G=a("p",null,"This is a dynamic component Tab View:",-1),J=a("h5",null,"Usage:",-1),K=a("h6",null,"Insert component:",-1),Q=a("h6",null,"Import:",-1),W=a("h6",null,"Apply in template\uFF1A",-1);function X(t,l,o,e,s,c){const i=h("TabView"),n=h("highlightjs");return b(),m(g,null,[z,F,H,a("div",M,[$,r(i,{id:"demo-tab-view-1","tabs-props":e.demo1TabsProps,onChangeTab:e.tab1Change},null,8,["tabs-props","onChangeTab"]),G,r(i,{id:"demo-tab-view-2",isDynamic:!0,"tabs-props":e.demo2TabsProps,onChangeTab:e.tab2Change},{customComponent:x(()=>[(b(),S(I(e.demo2TabsProps.tabs[e.demo2TabsProps.activeTab].content),{key:e.demo2TabsProps.tabs[e.demo2TabsProps.activeTab].key}))]),_:1},8,["tabs-props","onChangeTab"])]),J,K,r(n,{language:"html",code:e.insertCode},null,8,["code"]),Q,r(n,{language:"js",code:e.importCode},null,8,["code"]),W,r(n,{language:"js",code:e.templateCode},null,8,["code"])],64)}var ae=v(U,[["render",X]]);export{ae as default};
