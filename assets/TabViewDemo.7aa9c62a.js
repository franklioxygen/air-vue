import{_ as y,a as _}from"./index.5623d7dc.js";import{D as w}from"./deviceType.c4ba19d5.js";import{s as b,r as T,d as C,o as m,c as u,a,F as g,h as P,C as V,y as D,t as k,D as q,p as S,b as x,E as h,G as v,f as p,g as l,w as I,i as E,H as A}from"./vendor.d9b9588d.js";import{F as B}from"./FooterMessage.1f52ea86.js";const j={name:"TabView",props:{id:{type:String,required:!0},isDynamic:{type:Boolean,default:!1},tabsProps:{type:Object,default:()=>({})}},emits:["change-tab"],setup(t,{emit:d}){let n=b(()=>`width: ${100/t.tabsProps.tabs.length}%;`),e=T({index:t.tabsProps.activeTab}),i=(o,c)=>{d("change-tab",{id:t.id,index:o}),e.index=o,t.isDynamic||(document.querySelector(`#${c} .av-tab-content .av-tab-plain-content`).innerHTML=t.tabsProps.tabs[o].content)};return C(()=>{i(e.index,t.id)}),{tabTitleStyle:n,currentActiveTab:e,changeTab:i}}},F=t=>(S("data-v-7734a51a"),t=t(),x(),t),L=["id"],M={class:"av-tabs"},N=["onClick"],R={class:"av-tab-content"},O=F(()=>a("div",{class:"av-tab-plain-content"},null,-1));function H(t,d,n,e,i,o){return m(),u("div",{class:"tab-view-wrapper",id:n.id},[a("ul",M,[(m(!0),u(g,null,P(n.tabsProps.tabs,(c,r)=>(m(),u("li",{class:V(["av-tab-title",{active:r===e.currentActiveTab.index}]),key:r,style:D(e.tabTitleStyle),onClick:s=>e.changeTab(r,n.id)},k(c.title),15,N))),128))]),a("div",R,[O,a("div",null,[q(t.$slots,"customComponent",{},void 0,!0)])])],8,L)}var U=y(j,[["render",H],["__scopeId","data-v-7734a51a"]]);const z={name:"TabViewDemo",components:{TabView:U,DataTable:w,FooterMessage:B},setup(){const t=b(()=>`
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
  :is-dynamic="true"
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
      `),d=b(()=>`
import { TabView } from "air-vue";
      `),n=b(()=>`
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
      `),e=b(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"id",type:"String",required:"true",default:"-",description:"identifier of the tab view"},{name:"tabs-props",type:"Object",required:"true",default:"-",description:"tab contents"},{name:"is-dynamic",type:"Boolean",required:"false",default:"false",description:"whether to use dynamic component"},{name:"change-tab",type:"<Event>",required:"true",default:"-",description:"load content of the tab"}]}));let i=T({activeTab:0,tabs:[{title:"Tab 1",content:`Sed malesuada gravida ex, nec tincidunt nunc tempor quis. 
            Nunc sapien orci, accumsan non mollis congue, scelerisque 
            at metus. Donec porta euismod convallis. Ut suscipit dolor 
            risus, sed ultricies tellus pellentesque et.`,key:"tab-1"},{title:"Tab 2",content:"Tab-2-content",key:"tab-2"},{title:"Tab 3",content:"Tab-3-content",key:"tab-3"}]}),o=T({activeTab:1,tabs:[{title:"Tab 1",content:h(v(()=>_(()=>import("./DynamicLoadDummy-0.57b37b70.js"),["assets/DynamicLoadDummy-0.57b37b70.js","assets/index.5623d7dc.js","assets/index.c131fdea.css","assets/vendor.d9b9588d.js"]))),key:"tab-1"},{title:"Tab 2",content:h(v(()=>_(()=>import("./DynamicLoadDummy-1.d244ebaa.js"),["assets/DynamicLoadDummy-1.d244ebaa.js","assets/index.5623d7dc.js","assets/index.c131fdea.css","assets/vendor.d9b9588d.js"]))),key:"tab-2"}]});return{insertCode:t,importCode:d,templateCode:n,tableProps:e,demo1TabsProps:i,demo2TabsProps:o,tab1Change:s=>{i.activeTab=s.index},tab2Change:s=>{o.activeTab=s.index}}}},G=a("h3",null,"Tab View",-1),$=a("p",null," Tab View display tabs of content. It can load asynchronous and with multi screens. ",-1),J=a("h5",null,"Demo:",-1),K={class:"demo-wrapper"},Q=a("p",null,"This is a normal Tab View:",-1),W=a("p",null,"This is a dynamic component Tab View:",-1),X=a("h5",null,"Usage:",-1),Y=a("h6",null,"Insert component:",-1),Z=a("h6",null,"Import:",-1),ee=a("h6",null,"Apply in template\uFF1A",-1);function te(t,d,n,e,i,o){const c=p("TabView"),r=p("DataTable"),s=p("highlightjs"),f=p("FooterMessage");return m(),u(g,null,[G,$,J,a("div",K,[Q,l(c,{id:"demo-tab-view-1","tabs-props":e.demo1TabsProps,onChangeTab:e.tab1Change},null,8,["tabs-props","onChangeTab"]),W,l(c,{id:"demo-tab-view-2","is-dynamic":!0,"tabs-props":e.demo2TabsProps,onChangeTab:e.tab2Change},{customComponent:I(()=>[(m(),E(A(e.demo2TabsProps.tabs[e.demo2TabsProps.activeTab].content),{key:e.demo2TabsProps.tabs[e.demo2TabsProps.activeTab].key}))]),_:1},8,["tabs-props","onChangeTab"])]),l(r,{"table-props":e.tableProps},null,8,["table-props"]),X,Y,l(s,{language:"html",code:e.insertCode},null,8,["code"]),Z,l(s,{language:"js",code:e.importCode},null,8,["code"]),ee,l(s,{language:"js",code:e.templateCode},null,8,["code"]),l(f)],64)}var ie=y(z,[["render",te]]);export{ie as default};
