import{_ as b}from"./index.2f688c4f.js";import{D as C}from"./deviceType.9a00222c.js";import{o as l,c as d,a as e,F as _,h as f,t as g,y,s as o,f as i,g as n}from"./vendor.54853348.js";const B={name:"BreadCrumb",props:{breadCrumbProps:{type:Object,required:!0}}},v={class:"bread-crumb-wrapper"},D=["href","target"];function P(u,m,a,r,c,h){return l(),d("div",v,[e("ul",null,[(l(!0),d(_,null,f(a.breadCrumbProps,(t,s)=>(l(),d("li",{key:s},[e("a",{href:t.url,target:t.target?t.target:"_parent"},g(t.name),9,D),e("span",{style:y(`display:${s===a.breadCrumbProps.length-1?"none":"inline-block"}`)},"/",4)]))),128))])])}var k=b(B,[["render",P],["__scopeId","data-v-095fb8fd"]]);const $={name:"BreadCrumbDemo",components:{BreadCrumb:k,DataTable:C},setup(){const u=o(()=>`
<BreadCrumb :bread-crumb-props="breadCrumbProps" />
      `),m=o(()=>`
import { BreadCrumb } from "air-vue";
      `),a=o(()=>`
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
      `),r=o(()=>[{name:"Home",url:"#",target:"_blank"},{name:"Components",url:"#"},{name:"Bread Crumb",url:"#"}]),c=o(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"bread-crumb-props",type:"Array",required:"true",default:"-",description:"page hierarchy"}]}));return{insertCode:u,importCode:m,templateCode:a,breadCrumbProps:r,tableProps:c}}},j=e("h3",null,"Bread Crumb",-1),q=e("p",null,"Bread Crumb is used to display page hierarchy",-1),x=e("h5",null,"Demo:",-1),T={class:"demo-wrapper"},H=e("h5",null,"Usage:",-1),I=e("h6",null,"Insert component:",-1),N=e("h6",null,"Import:",-1),w=e("h6",null,"Apply in template\uFF1A",-1);function A(u,m,a,r,c,h){const t=i("BreadCrumb"),s=i("DataTable"),p=i("highlightjs");return l(),d(_,null,[j,q,x,e("div",T,[n(t,{"bread-crumb-props":r.breadCrumbProps},null,8,["bread-crumb-props"]),n(s,{"table-props":r.tableProps},null,8,["table-props"])]),H,I,n(p,{language:"html",code:r.insertCode},null,8,["code"]),N,n(p,{language:"js",code:r.importCode},null,8,["code"]),w,n(p,{language:"js",code:r.templateCode},null,8,["code"])],64)}var V=b($,[["render",A]]);export{V as default};
