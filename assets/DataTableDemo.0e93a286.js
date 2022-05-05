import{_ as c}from"./index.2f688c4f.js";import{D as m}from"./deviceType.9a00222c.js";import{s as a,f as p,o as b,c as u,a as e,g as l,F as _}from"./vendor.54853348.js";const h={name:"DataTableDemo",components:{DataTable:m},setup(){const n=a(()=>`
<DataTable :table-props="tableProps" />
      `),i=a(()=>`
import { DataTable } from "air-vue";
      `),s=a(()=>`
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
      `),t=a(()=>({title:"Demo Data Table Title",tableHead:[{label:"Product Name",field:"name"},{label:"Price($)",field:"price"},{label:"Weight(kg)",field:"weight"},{label:"Dimensions(w x h x d)",field:"dimensions"}],tableBody:[{name:"Apple",price:"1.00",weight:"1.23",dimensions:"3x2x3"},{name:"Pear",price:"2.00",weight:"2.10",dimensions:"4x3x3"},{name:"Banana",price:"0.50",weight:"0.76",dimensions:"3x8x3"}]})),r=a(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"table-props",type:"Object",required:"true",default:"-",description:"table head and content"}]}));return{insertCode:n,importCode:i,templateCode:s,tableProps:t,tablePropsGuide:r}}},f=e("h3",null,"Data Table",-1),g=e("p",null,"Data Table is used to display data in a table.",-1),D=e("h5",null,"Demo:",-1),x={class:"demo-wrapper"},T=e("h5",null,"Usage:",-1),P=e("h6",null,"Insert component:",-1),y=e("h6",null,"Import:",-1),w=e("h6",null,"Apply in template\uFF1A",-1);function v(n,i,s,t,r,B){const d=p("DataTable"),o=p("highlightjs");return b(),u(_,null,[f,g,D,e("div",x,[l(d,{"table-props":t.tableProps},null,8,["table-props"]),l(d,{"table-props":t.tablePropsGuide},null,8,["table-props"])]),T,P,l(o,{language:"html",code:t.insertCode},null,8,["code"]),y,l(o,{language:"js",code:t.importCode},null,8,["code"]),w,l(o,{language:"js",code:t.templateCode},null,8,["code"])],64)}var k=c(h,[["render",v]]);export{k as default};
