import{_ as f}from"./index.43206649.js";import{D as y}from"./deviceType.3fcb4f7a.js";import{d as V,o as p,c as m,a as e,F as g,h as b,t as A,j as q,D,s as l,r as v,f as u,g as t,w as h}from"./vendor.54853348.js";import{F as k}from"./FooterMessage.c0bea262.js";const x={name:"AccordionView",props:{id:{type:String,required:!0},expands:{type:Array,default:()=>[]},accordionsProps:{type:Object,default:()=>({})}},setup(i){let d=(o,n)=>`${n}-${o}`,c=(o,n)=>{document.querySelector(`#${n+"-accordion-"+o}`).classList.toggle("active")};return V(()=>{Array.from(document.querySelectorAll(`#${i.id} .av-accordions`)[0].children).forEach((o,n)=>{i.expands.includes(n)&&o.classList.add("active")})}),{accordionId:d,toggleActive:c}}},P=["id"],C={class:"av-accordions"},T=["id"],$=["onClick"],I=["id"];function S(i,d,c,o,n,_){return p(),m("div",{class:"accordion-view-wrapper",id:c.id},[e("div",C,[(p(!0),m(g,null,b(c.accordionsProps.accordions,(s,r)=>(p(),m("div",{id:c.id+"-accordion-"+r,class:"av-accordion",key:r},[e("div",{class:"av-accordion-title",onClick:a=>o.toggleActive(r,c.id)},A(s.title),9,$),e("div",{id:c.id+"-accordion-"+r,class:"av-accordion-content"},[q(A(s.content)+" ",1),D(i.$slots,s.key,{},void 0,!0)],8,I)],8,T))),128))])],8,P)}var j=f(x,[["render",S],["__scopeId","data-v-b60deef8"]]);const N={name:"AccordionViewDemo",components:{AccordionView:j,DataTable:y,FooterMessage:k},setup(){const i=l(()=>`
<!-- normal accordion view-->
<p>This is a Accordion View:</p>
<AccordionView
  id="demo-accordions-view-1"
  :accordions-props="demo1AccordionsProps"
>
</AccordionView>
<!-- slot accordion view-->
<p>This is a slot Accordion View with default expanded items:</p>
<AccordionView
  :expands="[1, 2]"
  id="demo-accordions-view-2"
  :accordions-props="demo2AccordionsProps"
>
  <!-- template name should match accordion key in props -->
  <template #accordion-1>
    <div>
      <h4>I'm Accordion 1</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        facilisis, erat eget consectetur aliquet, nisl nunc consectetur
        nisi, sed tincidunt nisl nunc eget nisl.
      </p>
    </div>
  </template>
  ...
</AccordionView>
      `),d=l(()=>`
import { AccordionView } from "air-vue";
      `),c=l(()=>`
let demo1AccordionsProps = reactive({
  accordions: [
    {
      title: "Accordion 1",
      content: 'Sed malesuada gravida ex, nec tincidunt nunc tempor quis. 
        Nunc sapien orci, accumsan non mollis congue, scelerisque 
        at metus. Donec porta euismod convallis. Ut suscipit dolor 
        risus, sed ultricies tellus pellentesque et.',
      key: "accordion-1",
    },
    ...
  ],
});
let demo2AccordionsProps = reactive({
  accordions: [
    {
      title: "Accordion 1",
      content: null,
      key: "accordion-1",
    },
    ...
  ],
});
      `),o=l(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"id",type:"String",required:"true",default:"-",description:"identifier of the accordion"},{name:"accordion-props",type:"Object",required:"true",default:"-",description:"accordion contents"},{name:"expands",type:"Array",required:"false",default:"-",description:"which accordions are expanded"}]}));let n=v({accordions:[{title:"Accordion 1",content:`Sed malesuada gravida ex, nec tincidunt nunc tempor quis. 
            Nunc sapien orci, accumsan non mollis congue, scelerisque 
            at metus. Donec porta euismod convallis. Ut suscipit dolor 
            risus, sed ultricies tellus pellentesque et.`,key:"accordion-1"},{title:"Accordion 2",content:"Accordion-2-content",key:"accordion-2"},{title:"Accordion 3",content:"Accordion-3-content",key:"accordion-3"}]}),_=v({accordions:[{title:"Accordion 1",content:null,key:"accordion-1"},{title:"Accordion 2",content:null,key:"accordion-2"},{title:"Accordion 3",content:null,key:"accordion-3"}]});return{insertCode:i,importCode:d,templateCode:c,tableProps:o,demo1AccordionsProps:n,demo2AccordionsProps:_}}},F=e("h3",null,"Accordion",-1),L=e("p",null,"Accordion display accordions of content.",-1),B=e("h5",null,"Demo:",-1),M={class:"demo-wrapper"},E=e("p",null,"This is a Accordion View:",-1),U=e("p",null,"This is a slot Accordion View with default expanded items:",-1),O=e("div",null,[e("h4",null,"I'm Accordion 1"),e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, erat eget consectetur aliquet, nisl nunc consectetur nisi, sed tincidunt nisl nunc eget nisl. ")],-1),G=e("div",null,[e("h4",null,"I'm Accordion 2"),e("p",null," Donec facilisis, erat eget consectetur aliquet, nisl nunc consectetur nisi, sed tincidunt nisl nunc eget nisl. ")],-1),H=e("div",null,[e("h4",null,"I'm Accordion 3"),e("p",null,"Nisl nunc consectetur nisi, sed tincidunt nisl nunc eget nisl.")],-1),R=e("h5",null,"Usage:",-1),z=e("h6",null,"Insert component:",-1),J=e("h6",null,"Import:",-1),K=e("h6",null,"Apply in template\uFF1A",-1);function Q(i,d,c,o,n,_){const s=u("AccordionView"),r=u("DataTable"),a=u("highlightjs"),w=u("FooterMessage");return p(),m(g,null,[F,L,B,e("div",M,[E,t(s,{id:"demo-accordions-view-1","accordions-props":o.demo1AccordionsProps},null,8,["accordions-props"]),U,t(s,{expands:[1,2],id:"demo-accordions-view-2","accordions-props":o.demo2AccordionsProps},{"accordion-1":h(()=>[O]),"accordion-2":h(()=>[G]),"accordion-3":h(()=>[H]),_:1},8,["accordions-props"])]),t(r,{"table-props":o.tableProps},null,8,["table-props"]),R,z,t(a,{language:"html",code:o.insertCode},null,8,["code"]),J,t(a,{language:"js",code:o.importCode},null,8,["code"]),K,t(a,{language:"js",code:o.templateCode},null,8,["code"]),t(w)],64)}var ee=f(N,[["render",Q]]);export{ee as default};
