import{_ as A}from"./index.44d55d6b.js";import"./deviceType.f861e0a5.js";import{d as w,o as a,c as l,a as o,F as v,h as f,t as m,j as y,D as V,s as u,r as _,f as h,g as r,w as p}from"./vendor.54853348.js";const k={name:"AccordionView",props:{id:{type:String,required:!0},expands:{type:Array,default:()=>[]},accordionsProps:{type:Object,default:()=>({})}},setup(t){let d=(e,n)=>`${n}-${e}`,c=(e,n)=>{document.querySelector(`#${n+"-accordion-"+e}`).classList.toggle("active")};return w(()=>{Array.from(document.querySelectorAll(`#${t.id} .av-accordions`)[0].children).forEach((e,n)=>{t.expands.includes(n)&&e.classList.add("active")})}),{accordionId:d,toggleActive:c}}},q=["id"],x={class:"av-accordions"},D=["id"],C=["onClick"],P=["id"];function $(t,d,c,e,n,g){return a(),l("div",{class:"accordion-view-wrapper",id:c.id},[o("div",x,[(a(!0),l(v,null,f(c.accordionsProps.accordions,(s,i)=>(a(),l("div",{id:c.id+"-accordion-"+i,class:"av-accordion",key:i},[o("div",{class:"av-accordion-title",onClick:J=>e.toggleActive(i,c.id)},m(s.title),9,C),o("div",{id:c.id+"-accordion-"+i,class:"av-accordion-content"},[y(m(s.content)+" ",1),V(t.$slots,s.key,{},void 0,!0)],8,P)],8,D))),128))])],8,q)}var I=A(k,[["render",$],["__scopeId","data-v-b60deef8"]]);const S={name:"AccordionViewDemo",components:{AccordionView:I},setup(){const t=u(()=>`
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
      `),d=u(()=>`
import { AccordionView } from "air-vue";
      `),c=u(()=>`
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
      `);let e=_({accordions:[{title:"Accordion 1",content:`Sed malesuada gravida ex, nec tincidunt nunc tempor quis. 
            Nunc sapien orci, accumsan non mollis congue, scelerisque 
            at metus. Donec porta euismod convallis. Ut suscipit dolor 
            risus, sed ultricies tellus pellentesque et.`,key:"accordion-1"},{title:"Accordion 2",content:"Accordion-2-content",key:"accordion-2"},{title:"Accordion 3",content:"Accordion-3-content",key:"accordion-3"}]}),n=_({accordions:[{title:"Accordion 1",content:null,key:"accordion-1"},{title:"Accordion 2",content:null,key:"accordion-2"},{title:"Accordion 3",content:null,key:"accordion-3"}]});return{insertCode:t,importCode:d,templateCode:c,demo1AccordionsProps:e,demo2AccordionsProps:n}}},j=o("h3",null,"Accordion",-1),N=o("p",null,"Accordion display accordions of content.",-1),L=o("h5",null,"Demo:",-1),T={class:"demo-wrapper"},B=o("p",null,"This is a Accordion View:",-1),U=o("p",null,"This is a slot Accordion View with default expanded items:",-1),b=o("div",null,[o("h4",null,"I'm Accordion 1"),o("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, erat eget consectetur aliquet, nisl nunc consectetur nisi, sed tincidunt nisl nunc eget nisl. ")],-1),E=o("div",null,[o("h4",null,"I'm Accordion 2"),o("p",null," Donec facilisis, erat eget consectetur aliquet, nisl nunc consectetur nisi, sed tincidunt nisl nunc eget nisl. ")],-1),F=o("div",null,[o("h4",null,"I'm Accordion 3"),o("p",null,"Nisl nunc consectetur nisi, sed tincidunt nisl nunc eget nisl.")],-1),M=o("h5",null,"Usage:",-1),O=o("h6",null,"Insert component:",-1),z=o("h6",null,"Import:",-1),G=o("h6",null,"Apply in template\uFF1A",-1);function H(t,d,c,e,n,g){const s=h("AccordionView"),i=h("highlightjs");return a(),l(v,null,[j,N,L,o("div",T,[B,r(s,{id:"demo-accordions-view-1","accordions-props":e.demo1AccordionsProps},null,8,["accordions-props"]),U,r(s,{expands:[1,2],id:"demo-accordions-view-2","accordions-props":e.demo2AccordionsProps},{"accordion-1":p(()=>[b]),"accordion-2":p(()=>[E]),"accordion-3":p(()=>[F]),_:1},8,["accordions-props"])]),M,O,r(i,{language:"html",code:e.insertCode},null,8,["code"]),z,r(i,{language:"js",code:e.importCode},null,8,["code"]),G,r(i,{language:"js",code:e.templateCode},null,8,["code"])],64)}var W=A(S,[["render",H]]);export{W as default};
