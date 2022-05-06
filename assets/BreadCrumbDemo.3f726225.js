import{_ as b}from"./index.34817873.js";import{D as f}from"./deviceType.b60ca1f3.js";import{o as d,c as u,a as e,F as _,h as g,t as y,y as B,s as n,f as l,g as a}from"./vendor.54853348.js";import{F as v}from"./FooterMessage.e59c754a.js";const D={name:"BreadCrumb",props:{breadCrumbProps:{type:Object,required:!0}}},P={class:"bread-crumb-wrapper"},k=["href","target"];function F(m,c,o,r,p,h){return d(),u("div",P,[e("ul",null,[(d(!0),u(_,null,g(o.breadCrumbProps,(t,s)=>(d(),u("li",{key:s},[e("a",{href:t.url,target:t.target?t.target:"_parent"},y(t.name),9,k),e("span",{style:B(`display:${s===o.breadCrumbProps.length-1?"none":"inline-block"}`)},"/",4)]))),128))])])}var $=b(D,[["render",F],["__scopeId","data-v-095fb8fd"]]);const j={name:"BreadCrumbDemo",components:{BreadCrumb:$,DataTable:f,FooterMessage:v},setup(){const m=n(()=>`
<BreadCrumb :bread-crumb-props="breadCrumbProps" />
      `),c=n(()=>`
import { BreadCrumb } from "air-vue";
      `),o=n(()=>`
const breadCrumbProps = computed(() => {
  return [
    {
      name: "Home",
      url: "#",
      target: "_blank", //target default is parent
    },
    {
      name: "Components",
      url: "#",
    },
    {
      name: "Bread Crumb",
      url: "#",
    },
  ];
});
      `),r=n(()=>[{name:"Home",url:"#",target:"_blank"},{name:"Components",url:"#"},{name:"Bread Crumb",url:"#"}]),p=n(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"bread-crumb-props",type:"Array",required:"true",default:"-",description:"page hierarchy"}]}));return{insertCode:m,importCode:c,templateCode:o,breadCrumbProps:r,tableProps:p}}},q=e("h3",null,"Bread Crumb",-1),x=e("p",null,"Bread Crumb is used to display page hierarchy",-1),T=e("h5",null,"Demo:",-1),H={class:"demo-wrapper"},I=e("h5",null,"Usage:",-1),M=e("h6",null,"Insert component:",-1),N=e("h6",null,"Import:",-1),w=e("h6",null,"Apply in template\uFF1A",-1);function A(m,c,o,r,p,h){const t=l("BreadCrumb"),s=l("DataTable"),i=l("highlightjs"),C=l("FooterMessage");return d(),u(_,null,[q,x,T,e("div",H,[a(t,{"bread-crumb-props":r.breadCrumbProps},null,8,["bread-crumb-props"]),a(s,{"table-props":r.tableProps},null,8,["table-props"])]),I,M,a(i,{language:"html",code:r.insertCode},null,8,["code"]),N,a(i,{language:"js",code:r.importCode},null,8,["code"]),w,a(i,{language:"js",code:r.templateCode},null,8,["code"]),a(C)],64)}var G=b(j,[["render",A]]);export{G as default};
