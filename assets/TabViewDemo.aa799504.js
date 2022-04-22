import{_ as h,a as u}from"./index.482c4abd.js";import"./deviceType.a084d7fc.js";import{s as d,r as p,d as g,o as r,c as m,a,F as y,h as w,C,y as P,t as k,D as f,p as V,b as D,E as T,G as _,f as v,g as b,w as x,i as S,H as I}from"./vendor.54853348.js";const q={name:"TabView",props:{id:{type:String,required:!0},isDynamic:{type:Boolean,default:!1},tabsProps:{type:Object,default:()=>({})}},emits:["change-tab"],setup(t,{emit:l}){let o=d(()=>`width: ${100/t.tabsProps.tabs.length}%;`),e=p({index:t.tabsProps.activeTab}),s=(c,i)=>{l("change-tab",{id:t.id,index:c}),e.index=c,t.isDynamic||(document.querySelector(`#${i} .av-tab-content .av-tab-plain-content`).innerHTML=t.tabsProps.tabs[c].content)};return g(()=>{s(e.index,t.id)}),{tabTitleStyle:o,currentActiveTab:e,changeTab:s}}},A=t=>(V("data-v-7734a51a"),t=t(),D(),t),E=["id"],L={class:"av-tabs"},j=["onClick"],B={class:"av-tab-content"},R=A(()=>a("div",{class:"av-tab-plain-content"},null,-1));function N(t,l,o,e,s,c){return r(),m("div",{class:"tab-view-wrapper",id:o.id},[a("ul",L,[(r(!0),m(y,null,w(o.tabsProps.tabs,(i,n)=>(r(),m("li",{class:C(["av-tab-title",{active:n===e.currentActiveTab.index}]),key:n,style:P(e.tabTitleStyle),onClick:Y=>e.changeTab(n,o.id)},k(i.title),15,j))),128))]),a("div",B,[R,a("div",null,[f(t.$slots,"customComponent",{},void 0,!0)])])],8,E)}var O=h(q,[["render",N],["__scopeId","data-v-7734a51a"]]);const U={name:"TabViewDemo",components:{TabView:O},setup(){const t=d(()=>`
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
    {
      title: "Tab 2",
      content: "Tab-2-content",
      key: "tab-2",
    },
    {
      title: "Tab 3",
      content: "Tab-3-content",
      key: "tab-3",
    },
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
    {
      title: "Tab 2",
      content: markRaw(
        defineAsyncComponent(() => import("./dummy/DynamicLoadDummy-1.vue"))
      ),
      key: "tab-2",
    },
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
            risus, sed ultricies tellus pellentesque et.`,key:"tab-1"},{title:"Tab 2",content:"Tab-2-content",key:"tab-2"},{title:"Tab 3",content:"Tab-3-content",key:"tab-3"}]}),s=p({activeTab:1,tabs:[{title:"Tab 1",content:T(_(()=>u(()=>import("./DynamicLoadDummy-0.5603a213.js"),["assets/DynamicLoadDummy-0.5603a213.js","assets/index.482c4abd.js","assets/index.05bfa1d8.css","assets/vendor.54853348.js"]))),key:"tab-1"},{title:"Tab 2",content:T(_(()=>u(()=>import("./DynamicLoadDummy-1.26d4a3c8.js"),["assets/DynamicLoadDummy-1.26d4a3c8.js","assets/index.482c4abd.js","assets/index.05bfa1d8.css","assets/vendor.54853348.js"]))),key:"tab-2"}]});return{insertCode:t,importCode:l,templateCode:o,demo1TabsProps:e,demo2TabsProps:s,tab1Change:n=>{e.activeTab=n.index},tab2Change:n=>{s.activeTab=n.index}}}},z=a("h3",null,"Tab View",-1),F=a("p",null," Tab View display tabs of content. It can load asynchronous and with multi screens. ",-1),H=a("h5",null,"Demo:",-1),M={class:"demo-wrapper"},$=a("p",null,"This is a normal Tab View:",-1),G=a("p",null,"This is a dynamic component Tab View:",-1),J=a("h5",null,"Usage:",-1),K=a("h6",null,"Insert component:",-1),Q=a("h6",null,"Import:",-1),W=a("h6",null,"Apply in template\uFF1A",-1);function X(t,l,o,e,s,c){const i=v("TabView"),n=v("highlightjs");return r(),m(y,null,[z,F,H,a("div",M,[$,b(i,{id:"demo-tab-view-1","tabs-props":e.demo1TabsProps,onChangeTab:e.tab1Change},null,8,["tabs-props","onChangeTab"]),G,b(i,{id:"demo-tab-view-2",isDynamic:!0,"tabs-props":e.demo2TabsProps,onChangeTab:e.tab2Change},{customComponent:x(()=>[(r(),S(I(e.demo2TabsProps.tabs[e.demo2TabsProps.activeTab].content),{key:e.demo2TabsProps.tabs[e.demo2TabsProps.activeTab].key}))]),_:1},8,["tabs-props","onChangeTab"])]),J,K,b(n,{language:"html",code:e.insertCode},null,8,["code"]),Q,b(n,{language:"js",code:e.importCode},null,8,["code"]),W,b(n,{language:"js",code:e.templateCode},null,8,["code"])],64)}var ae=h(U,[["render",X]]);export{ae as default};
