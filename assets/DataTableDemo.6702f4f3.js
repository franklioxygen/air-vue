import{_ as c}from"./index.44d55d6b.js";import"./deviceType.f861e0a5.js";import{D as m}from"./DataTable.f3df26c5.js";import{s as t,f as r,o as p,c as _,a as e,g as o,F as b}from"./vendor.54853348.js";const h={name:"DataTableDemo",components:{DataTable:m},setup(){const n=t(()=>`
<DataTable :table-props="tableProps" />
      `),s=t(()=>`
import { DataTable } from "air-vue";
      `),i=t(()=>`
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
      `),a=t(()=>({title:"Demo Data Table Title",tableHead:[{label:"Product Name",field:"name"},{label:"Price($)",field:"price"},{label:"Weight(kg)",field:"weight"},{label:"Dimensions(w x h x d)",field:"dimensions"}],tableBody:[{name:"Apple",price:"1.00",weight:"1.23",dimensions:"3x2x3"},{name:"Pear",price:"2.00",weight:"2.10",dimensions:"4x3x3"},{name:"Banana",price:"0.50",weight:"0.76",dimensions:"3x8x3"}]}));return{insertCode:n,importCode:s,templateCode:i,tableProps:a}}},u=e("h3",null,"Data Table",-1),g=e("p",null,"Data Table is used to display data in a table.",-1),D=e("h5",null,"Demo:",-1),f={class:"demo-wrapper"},x=e("h5",null,"Usage:",-1),T=e("h6",null,"Insert component:",-1),w=e("h6",null,"Import:",-1),P=e("h6",null,"Apply in template\uFF1A",-1);function v(n,s,i,a,C,y){const d=r("DataTable"),l=r("highlightjs");return p(),_(b,null,[u,g,D,e("div",f,[o(d,{"table-props":a.tableProps},null,8,["table-props"])]),x,T,o(l,{language:"html",code:a.insertCode},null,8,["code"]),w,o(l,{language:"js",code:a.importCode},null,8,["code"]),P,o(l,{language:"js",code:a.templateCode},null,8,["code"])],64)}var A=c(h,[["render",v]]);export{A as default};
