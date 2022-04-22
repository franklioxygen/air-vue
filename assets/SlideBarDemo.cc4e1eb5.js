import{_ as q}from"./index.482c4abd.js";import{i as y}from"./deviceType.a084d7fc.js";import{s as o,r as f,d as w,o as h,c as v,a as t,y as b,C,t as B,e as E,f as V,g as m,F as D}from"./vendor.54853348.js";const T={name:"SlideBar",props:{id:{type:String,required:!0},defaultSlideValue:{type:Number,default:0,required:!0},maxSlideValue:{type:Number,default:100,required:!1},rangeType:{type:String,default:"percentage",required:!1},textPosition:{type:String,default:"float-text"}},emits:["slide-change"],setup(e,{emit:u}){const n=o(()=>e.defaultSlideValue!==null?`width: ${e.defaultSlideValue}%;`:""),l=o(()=>e.defaultSlideValue!==null?`left:${e.defaultSlideValue}% `:"");let d=f({number:e.rangeType==="percentage"?e.defaultSlideValue+"%":e.defaultSlideValue+"/"+e.maxSlideValue});const a=o(()=>document.querySelector("#"+e.id));let s=f({value:!1}),r=f({value:0}),S=i=>{const L=y?i.targetTouches[0].pageX-i.target.getBoundingClientRect().left:null;let c=y?L:i.offsetX;if(s.value&&c>=0&&c<=r.value){a.value.children[0].style.left=c+"px",a.value.children[1].style.width=c+"px";let _=Math.round(c/r.value*e.maxSlideValue);d.number=e.rangeType==="percentage"?_+"%":_+"/"+e.maxSlideValue,u("slide-change",{id:e.id,number:Math.round(_)})}};const x=i=>(r.value=a.value.offsetWidth,s.value=!0,document.querySelector("#app").classList.add("disable-select"),S(i),!1),p=i=>{i.preventDefault(),S(i)},g=()=>{document.querySelector("#app").classList.remove("disable-select"),s.value=!1};return w(()=>{a.value.addEventListener("mousedown",x),a.value.addEventListener("touchstart",x),a.value.parentElement.parentElement.addEventListener("mousemove",p),a.value.parentElement.parentElement.addEventListener("touchmove",p),document.addEventListener("mouseleave",g),document.addEventListener("mouseup",g),document.addEventListener("touchend",g)}),{currentValue:d,liquidStyle:n,ballStyle:l}}},M={class:"slide-wrapper"},N=["id"];function P(e,u,n,l,d,a){return h(),v("div",M,[t("div",{class:"tube",id:n.id},[t("span",{class:"ball",style:b(l.ballStyle)},[n.textPosition==="float-text"?(h(),v("div",{key:0,class:C(["text-percentage",n.textPosition])},B(l.currentValue.number),3)):E("",!0)],4),t("div",{class:"liquid",style:b(l.liquidStyle)},null,4)],8,N),n.textPosition==="fixed-text"?(h(),v("div",{key:0,class:C(["text-percentage",n.textPosition])},B(l.currentValue.number),3)):E("",!0)])}var j=q(T,[["render",P],["__scopeId","data-v-3c949172"]]);const k={name:"SlideBarDemo",components:{SlideBar:j},setup(){const e=o(()=>`
<!-- normal slide bar -->
<SlideBar
  id="range-slider-1"
  :default-slide-value="80"
  text-position="float-text"
  @slide-change="slideChangeEvent"
/>
<!-- fixed text slide bar  with custom number-->
<SlideBar
  id="range-slider-2"
  :default-slide-value="0"
  :max-slide-value="256"
  range-type="number"
  text-position="fixed-text"
  @slide-change="slideChangeEvent"
/>
      `),u=o(()=>`
import { SlideBar } from "air-vue"";
      `),n=o(()=>`
const slideChangeEvent = (event) => {
  // Do something with the event
  document.querySelector("#" + event.id + "-value").innerHTML =
    event.number;
};
      `);return{insertCode:e,importCode:u,templateCode:n,slideChangeEvent:d=>{document.querySelector("#"+d.id+"-value").innerHTML=d.number}}}},X=t("h3",null,"Slide Bar",-1),I=t("p",null,"Slide Bar is used to slide value.",-1),z=t("h5",null,"Demo:",-1),F={class:"demo-wrapper"},H=t("p",null,"This is a normal Slide Bar with default percentage:",-1),W=t("span",{id:"range-slider-1-value"},null,-1),A=t("p",null,"This is a fixed text Slide Bar with custom number:",-1),O=t("span",{id:"range-slider-2-value"},null,-1),R=t("h5",null,"Usage:",-1),U=t("h6",null,"Insert component:",-1),G=t("h6",null,"Import:",-1),J=t("h6",null,"Apply in template\uFF1A",-1);function K(e,u,n,l,d,a){const s=V("SlideBar"),r=V("highlightjs");return h(),v(D,null,[X,I,z,t("div",F,[H,W,m(s,{id:"range-slider-1","default-slide-value":80,"text-position":"float-text",onSlideChange:l.slideChangeEvent},null,8,["onSlideChange"]),A,O,m(s,{id:"range-slider-2","default-slide-value":0,"max-slide-value":256,"range-type":"number","text-position":"fixed-text",onSlideChange:l.slideChangeEvent},null,8,["onSlideChange"])]),R,U,m(r,{language:"html",code:l.insertCode},null,8,["code"]),G,m(r,{language:"js",code:l.importCode},null,8,["code"]),J,m(r,{language:"js",code:l.templateCode},null,8,["code"])],64)}var $=q(k,[["render",K]]);export{$ as default};
