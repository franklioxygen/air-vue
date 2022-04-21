import{_ as V}from"./index.ae7c253e.js";/* empty css                                                                 */import{s as o,r as f,d as q,o as v,c as h,a as t,y,C as b,t as B,e as C,f as E,g as m,F as T}from"./vendor.54853348.js";const L={name:"SlideBar",props:{id:{type:String,required:!0},defaultSlideValue:{type:Number,default:0,required:!0},maxSlideValue:{type:Number,default:100,required:!1},rangeType:{type:String,default:"percentage",required:!1},textPosition:{type:String,default:"float-text"}},emits:["slide-change"],setup(e,{emit:u}){const a=o(()=>e.defaultSlideValue!==null?`width: ${e.defaultSlideValue}%;`:""),l=o(()=>e.defaultSlideValue!==null?`left:${e.defaultSlideValue}% `:"");let i=f({number:e.rangeType==="percentage"?e.defaultSlideValue+"%":e.defaultSlideValue+"/"+e.maxSlideValue});const n=o(()=>document.querySelector("#"+e.id));let s=f({value:!1}),d=f({value:0}),w=o(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"mobile":"desktop"),S=r=>{let c=w.value==="mobile"?r.touches[0].pageX-40:r.offsetX;if(s.value&&c>=-1&&c<=d.value+1){n.value.children[0].style.left=c+"px",n.value.children[1].style.width=c+"px";let _=Math.round(c/d.value*e.maxSlideValue);i.number=e.rangeType==="percentage"?_+"%":_+"/"+e.maxSlideValue,u("slide-change",{id:e.id,number:Math.round(_)})}};const x=r=>(d.value=n.value.offsetWidth,s.value=!0,S(r),!1),p=r=>{r.preventDefault(),S(r)},g=()=>{s.value=!1};return q(()=>{n.value.addEventListener("mousedown",x),n.value.addEventListener("touchstart",x),n.value.parentElement.parentElement.addEventListener("mousemove",p),n.value.parentElement.parentElement.addEventListener("touchmove",p),document.addEventListener("mouseleave",g),document.addEventListener("mouseup",g),document.addEventListener("touchend",g)}),{currentValue:i,liquidStyle:a,ballStyle:l}}},D={class:"slide-wrapper"},P=["id"];function M(e,u,a,l,i,n){return v(),h("div",D,[t("div",{class:"tube",id:a.id},[t("span",{class:"ball",style:y(l.ballStyle)},[a.textPosition==="float-text"?(v(),h("div",{key:0,class:b(["text-percentage",a.textPosition])},B(l.currentValue.number),3)):C("",!0)],4),t("div",{class:"liquid",style:y(l.liquidStyle)},null,4)],8,P),a.textPosition==="fixed-text"?(v(),h("div",{key:0,class:b(["text-percentage",a.textPosition])},B(l.currentValue.number),3)):C("",!0)])}var k=V(L,[["render",M],["__scopeId","data-v-8d9daab0"]]);const N={name:"SlideBarDemo",components:{SlideBar:k},setup(){const e=o(()=>`
<!-- normal slide bar -->
<p>This is a normal Slide Bar with default percentage:</p>
<div id="range-slider-1-value"></div>
<SlideBar
  id="range-slider-1"
  :default-slide-value="80"
  text-position="float-text"
  @slide-change="slideChangeEvent"
/>
<!-- fixed text slide bar  with custom number-->
<p>This is a fixed text Slide Bar with custom number:</p>
<div id="range-slider-2-value"></div>
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
      `),a=o(()=>`
const slideChangeEvent = (event) => {
  // Do something with the event
  document.querySelector("#" + event.id + "-value").innerHTML =
    event.number;
};
      `);return{insertCode:e,importCode:u,templateCode:a,slideChangeEvent:i=>{document.querySelector("#"+i.id+"-value").innerHTML=i.number}}}},j=t("h3",null,"Slide Bar",-1),I=t("p",null,"Slide Bar is used to slide value.",-1),A=t("h5",null,"Demo:",-1),X={class:"demo-wrapper"},z=t("p",null,"This is a normal Slide Bar with default percentage:",-1),F=t("div",{id:"range-slider-1-value"},null,-1),H=t("p",null,"This is a fixed text Slide Bar with custom number:",-1),O=t("div",{id:"range-slider-2-value"},null,-1),W=t("h5",null,"Usage:",-1),U=t("h6",null,"Insert component:",-1),G=t("h6",null,"Import:",-1),J=t("h6",null,"Apply in template\uFF1A",-1);function K(e,u,a,l,i,n){const s=E("SlideBar"),d=E("highlightjs");return v(),h(T,null,[j,I,A,t("div",X,[z,F,m(s,{id:"range-slider-1","default-slide-value":80,"text-position":"float-text",onSlideChange:l.slideChangeEvent},null,8,["onSlideChange"]),H,O,m(s,{id:"range-slider-2","default-slide-value":0,"max-slide-value":256,"range-type":"number","text-position":"fixed-text",onSlideChange:l.slideChangeEvent},null,8,["onSlideChange"])]),W,U,m(d,{language:"html",code:l.insertCode},null,8,["code"]),G,m(d,{language:"js",code:l.importCode},null,8,["code"]),J,m(d,{language:"js",code:l.templateCode},null,8,["code"])],64)}var Z=V(N,[["render",K]]);export{Z as default};
