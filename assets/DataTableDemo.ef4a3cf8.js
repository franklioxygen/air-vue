import{_}from"./index.b7942227.js";/* empty css                                                                 */import{s as i,o as a,c as l,a as e,t as b,F as p,h as m,y,f as u,g as c}from"./vendor.54853348.js";const x={name:"DataTable",props:{width:{type:String,default:"100%"},tableProps:{type:Object,required:!0}},setup(s){return{tableStyle:i(()=>s.width!==null?`width: ${s.width}`:"")}}},T={class:"table-title"},w={class:"table"};function P(s,d,n,t,h,g){return a(),l("div",{class:"table-wrapper",style:y(t.tableStyle)},[e("span",T,b(n.tableProps.title),1),e("table",w,[e("thead",null,[e("tr",null,[(a(!0),l(p,null,m(n.tableProps.tableHead,(r,o)=>(a(),l("th",{key:o},b(r.label),1))),128))])]),e("tbody",null,[(a(!0),l(p,null,m(n.tableProps.tableBody,(r,o)=>(a(),l("tr",{key:o},[(a(!0),l(p,null,m(n.tableProps.tableHead,(f,D)=>(a(),l("td",{key:D},b(r[f.field]),1))),128))]))),128))])])],4)}var v=_(x,[["render",P],["__scopeId","data-v-6c0b4d75"]]);const k={name:"DataTableDemo",components:{DataTable:v},setup(){const s=i(()=>`
<DataTable :table-props="tableProps" />
      `),d=i(()=>`
import { DataTable } from "air-vue";
      `),n=i(()=>`
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
      `),t=i(()=>({title:"Demo Data Table Title",tableHead:[{label:"Product Name",field:"name"},{label:"Price($)",field:"price"},{label:"Weight(kg)",field:"weight"},{label:"Dimensions(w x h x d)",field:"dimensions"}],tableBody:[{name:"Apple",price:"1.00",weight:"1.23",dimensions:"3x2x3"},{name:"Pear",price:"2.00",weight:"2.10",dimensions:"4x3x3"},{name:"Banana",price:"0.50",weight:"0.76",dimensions:"3x8x3"}]}));return{insertCode:s,importCode:d,templateCode:n,tableProps:t}}},B=e("h3",null,"Data Table",-1),C=e("p",null,"Data Table is used to display data in a table.",-1),S=e("h5",null,"Demo:",-1),$={class:"demo-wrapper"},j=e("h5",null,"Usage:",-1),H=e("h6",null,"Insert component:",-1),N=e("h6",null,"Import:",-1),A=e("h6",null,"Apply in template\uFF1A",-1);function I(s,d,n,t,h,g){const r=u("DataTable"),o=u("highlightjs");return a(),l(p,null,[B,C,S,e("div",$,[c(r,{"table-props":t.tableProps},null,8,["table-props"])]),j,H,c(o,{language:"html",code:t.insertCode},null,8,["code"]),N,c(o,{language:"js",code:t.importCode},null,8,["code"]),A,c(o,{language:"js",code:t.templateCode},null,8,["code"])],64)}var q=_(k,[["render",I]]);export{q as default};
