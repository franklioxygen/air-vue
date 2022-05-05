import{_ as f}from"./index.2f688c4f.js";import{D as w}from"./deviceType.9a00222c.js";import{d as y,o as u,c as p,a as e,F as g,h as V,t as A,j as b,D as q,s as l,r as v,f as _,g as d,w as h}from"./vendor.54853348.js";const D={name:"AccordionView",props:{id:{type:String,required:!0},expands:{type:Array,default:()=>[]},accordionsProps:{type:Object,default:()=>({})}},setup(i){let r=(o,n)=>`${n}-${o}`,c=(o,n)=>{document.querySelector(`#${n+"-accordion-"+o}`).classList.toggle("active")};return y(()=>{Array.from(document.querySelectorAll(`#${i.id} .av-accordions`)[0].children).forEach((o,n)=>{i.expands.includes(n)&&o.classList.add("active")})}),{accordionId:r,toggleActive:c}}},k=["id"],x={class:"av-accordions"},P=["id"],C=["onClick"],T=["id"];function $(i,r,c,o,n,m){return u(),p("div",{class:"accordion-view-wrapper",id:c.id},[e("div",x,[(u(!0),p(g,null,V(c.accordionsProps.accordions,(t,s)=>(u(),p("div",{id:c.id+"-accordion-"+s,class:"av-accordion",key:s},[e("div",{class:"av-accordion-title",onClick:a=>o.toggleActive(s,c.id)},A(t.title),9,C),e("div",{id:c.id+"-accordion-"+s,class:"av-accordion-content"},[b(A(t.content)+" ",1),q(i.$slots,t.key,{},void 0,!0)],8,T)],8,P))),128))])],8,k)}var I=f(D,[["render",$],["__scopeId","data-v-b60deef8"]]);const S={name:"AccordionViewDemo",components:{AccordionView:I,DataTable:w},setup(){const i=l(()=>`
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
      `),r=l(()=>`
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
            risus, sed ultricies tellus pellentesque et.`,key:"accordion-1"},{title:"Accordion 2",content:"Accordion-2-content",key:"accordion-2"},{title:"Accordion 3",content:"Accordion-3-content",key:"accordion-3"}]}),m=v({accordions:[{title:"Accordion 1",content:null,key:"accordion-1"},{title:"Accordion 2",content:null,key:"accordion-2"},{title:"Accordion 3",content:null,key:"accordion-3"}]});return{insertCode:i,importCode:r,templateCode:c,tableProps:o,demo1AccordionsProps:n,demo2AccordionsProps:m}}},j=e("h3",null,"Accordion",-1),N=e("p",null,"Accordion display accordions of content.",-1),L=e("h5",null,"Demo:",-1),B={class:"demo-wrapper"},E=e("p",null,"This is a Accordion View:",-1),U=e("p",null,"This is a slot Accordion View with default expanded items:",-1),F=e("div",null,[e("h4",null,"I'm Accordion 1"),e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, erat eget consectetur aliquet, nisl nunc consectetur nisi, sed tincidunt nisl nunc eget nisl. ")],-1),O=e("div",null,[e("h4",null,"I'm Accordion 2"),e("p",null," Donec facilisis, erat eget consectetur aliquet, nisl nunc consectetur nisi, sed tincidunt nisl nunc eget nisl. ")],-1),G=e("div",null,[e("h4",null,"I'm Accordion 3"),e("p",null,"Nisl nunc consectetur nisi, sed tincidunt nisl nunc eget nisl.")],-1),H=e("h5",null,"Usage:",-1),M=e("h6",null,"Insert component:",-1),R=e("h6",null,"Import:",-1),z=e("h6",null,"Apply in template\uFF1A",-1);function J(i,r,c,o,n,m){const t=_("AccordionView"),s=_("DataTable"),a=_("highlightjs");return u(),p(g,null,[j,N,L,e("div",B,[E,d(t,{id:"demo-accordions-view-1","accordions-props":o.demo1AccordionsProps},null,8,["accordions-props"]),U,d(t,{expands:[1,2],id:"demo-accordions-view-2","accordions-props":o.demo2AccordionsProps},{"accordion-1":h(()=>[F]),"accordion-2":h(()=>[O]),"accordion-3":h(()=>[G]),_:1},8,["accordions-props"])]),d(s,{"table-props":o.tableProps},null,8,["table-props"]),H,M,d(a,{language:"html",code:o.insertCode},null,8,["code"]),R,d(a,{language:"js",code:o.importCode},null,8,["code"]),z,d(a,{language:"js",code:o.templateCode},null,8,["code"])],64)}var X=f(S,[["render",J]]);export{X as default};
