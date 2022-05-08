import{_ as m}from"./index.43206649.js";import{D as b}from"./deviceType.3fcb4f7a.js";import{s as l,f as n,o as u,c as _,a as e,g as a,F as h}from"./vendor.54853348.js";import{F as f}from"./FooterMessage.c0bea262.js";const g={name:"DataTableDemo",components:{DataTable:b,FooterMessage:f},setup(){const s=l(()=>`
<DataTable :table-props="tableProps" />
      `),i=l(()=>`
import { DataTable } from "air-vue";
      `),r=l(()=>`
const tableProps = computed(() => {
return {
  title: "Demo Data Table Title", //optional
  tableHead: [
    {
      label: "Product Name",
      field: "name",
    },
    {
      label: "Price($)",
      field: "price",
    },
    {
      label: "Weight(kg)",
      field: "weight",
    },
    {
      label: "Dimensions(w x h x d)",
      field: "dimensions",
    },
  ],
  tableBody: [
    { name: "Apple", price: "1.00", weight: "1.23", dimensions: "3x2x3" },
    ...
  ],
};
});
      `),t=l(()=>({title:"Demo Data Table Title",tableHead:[{label:"Product Name",field:"name"},{label:"Price($)",field:"price"},{label:"Weight(kg)",field:"weight"},{label:"Dimensions(w x h x d)",field:"dimensions"}],tableBody:[{name:"Apple",price:"1.00",weight:"1.23",dimensions:"3x2x3"},{name:"Pear",price:"2.00",weight:"2.10",dimensions:"4x3x3"},{name:"Banana",price:"0.50",weight:"0.76",dimensions:"3x8x3"}]})),d=l(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"table-props",type:"Object",required:"true",default:"-",description:"table head and content"}]}));return{insertCode:s,importCode:i,templateCode:r,tableProps:t,tablePropsGuide:d}}},D=e("h3",null,"Data Table",-1),x=e("p",null,"Data Table is used to display data in a table.",-1),T=e("h5",null,"Demo:",-1),P={class:"demo-wrapper"},y=e("h5",null,"Usage:",-1),w=e("h6",null,"Insert component:",-1),v=e("h6",null,"Import:",-1),B=e("h6",null,"Apply in template\uFF1A",-1);function C(s,i,r,t,d,F){const p=n("DataTable"),o=n("highlightjs"),c=n("FooterMessage");return u(),_(h,null,[D,x,T,e("div",P,[a(p,{"table-props":t.tableProps},null,8,["table-props"]),a(p,{"table-props":t.tablePropsGuide},null,8,["table-props"])]),y,w,a(o,{language:"html",code:t.insertCode},null,8,["code"]),v,a(o,{language:"js",code:t.importCode},null,8,["code"]),B,a(o,{language:"js",code:t.templateCode},null,8,["code"]),a(c)],64)}var A=m(g,[["render",C]]);export{A as default};
