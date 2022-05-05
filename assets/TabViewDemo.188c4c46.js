import{_ as y,a as _}from"./index.2f688c4f.js";import{D as f}from"./deviceType.9a00222c.js";import{s as b,r as T,d as w,o as m,c as p,a,F as g,h as C,C as P,y as V,t as D,D as k,p as q,b as S,E as h,G as v,f as u,g as r,w as x,i as I,H as E}from"./vendor.54853348.js";const A={name:"TabView",props:{id:{type:String,required:!0},isDynamic:{type:Boolean,default:!1},tabsProps:{type:Object,default:()=>({})}},emits:["change-tab"],setup(t,{emit:d}){let n=b(()=>`width: ${100/t.tabsProps.tabs.length}%;`),e=T({index:t.tabsProps.activeTab}),i=(o,c)=>{d("change-tab",{id:t.id,index:o}),e.index=o,t.isDynamic||(document.querySelector(`#${c} .av-tab-content .av-tab-plain-content`).innerHTML=t.tabsProps.tabs[o].content)};return w(()=>{i(e.index,t.id)}),{tabTitleStyle:n,currentActiveTab:e,changeTab:i}}},B=t=>(q("data-v-7734a51a"),t=t(),S(),t),j=["id"],L={class:"av-tabs"},N=["onClick"],R={class:"av-tab-content"},O=B(()=>a("div",{class:"av-tab-plain-content"},null,-1));function H(t,d,n,e,i,o){return m(),p("div",{class:"tab-view-wrapper",id:n.id},[a("ul",L,[(m(!0),p(g,null,C(n.tabsProps.tabs,(c,l)=>(m(),p("li",{class:P(["av-tab-title",{active:l===e.currentActiveTab.index}]),key:l,style:V(e.tabTitleStyle),onClick:s=>e.changeTab(l,n.id)},D(c.title),15,N))),128))]),a("div",R,[O,a("div",null,[k(t.$slots,"customComponent",{},void 0,!0)])])],8,j)}var U=y(A,[["render",H],["__scopeId","data-v-7734a51a"]]);const z={name:"TabViewDemo",components:{TabView:U,DataTable:f},setup(){const t=b(()=>`
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
            risus, sed ultricies tellus pellentesque et.`,key:"tab-1"},{title:"Tab 2",content:"Tab-2-content",key:"tab-2"},{title:"Tab 3",content:"Tab-3-content",key:"tab-3"}]}),o=T({activeTab:1,tabs:[{title:"Tab 1",content:h(v(()=>_(()=>import("./DynamicLoadDummy-0.169cc036.js"),["assets/DynamicLoadDummy-0.169cc036.js","assets/index.2f688c4f.js","assets/index.90fbf703.css","assets/vendor.54853348.js"]))),key:"tab-1"},{title:"Tab 2",content:h(v(()=>_(()=>import("./DynamicLoadDummy-1.e7091d88.js"),["assets/DynamicLoadDummy-1.e7091d88.js","assets/index.2f688c4f.js","assets/index.90fbf703.css","assets/vendor.54853348.js"]))),key:"tab-2"}]});return{insertCode:t,importCode:d,templateCode:n,tableProps:e,demo1TabsProps:i,demo2TabsProps:o,tab1Change:s=>{i.activeTab=s.index},tab2Change:s=>{o.activeTab=s.index}}}},F=a("h3",null,"Tab View",-1),G=a("p",null," Tab View display tabs of content. It can load asynchronous and with multi screens. ",-1),M=a("h5",null,"Demo:",-1),$={class:"demo-wrapper"},J=a("p",null,"This is a normal Tab View:",-1),K=a("p",null,"This is a dynamic component Tab View:",-1),Q=a("h5",null,"Usage:",-1),W=a("h6",null,"Insert component:",-1),X=a("h6",null,"Import:",-1),Y=a("h6",null,"Apply in template\uFF1A",-1);function Z(t,d,n,e,i,o){const c=u("TabView"),l=u("DataTable"),s=u("highlightjs");return m(),p(g,null,[F,G,M,a("div",$,[J,r(c,{id:"demo-tab-view-1","tabs-props":e.demo1TabsProps,onChangeTab:e.tab1Change},null,8,["tabs-props","onChangeTab"]),K,r(c,{id:"demo-tab-view-2","is-dynamic":!0,"tabs-props":e.demo2TabsProps,onChangeTab:e.tab2Change},{customComponent:x(()=>[(m(),I(E(e.demo2TabsProps.tabs[e.demo2TabsProps.activeTab].content),{key:e.demo2TabsProps.tabs[e.demo2TabsProps.activeTab].key}))]),_:1},8,["tabs-props","onChangeTab"])]),r(l,{"table-props":e.tableProps},null,8,["table-props"]),Q,W,r(s,{language:"html",code:e.insertCode},null,8,["code"]),X,r(s,{language:"js",code:e.importCode},null,8,["code"]),Y,r(s,{language:"js",code:e.templateCode},null,8,["code"])],64)}var ne=y(z,[["render",Z]]);export{ne as default};
