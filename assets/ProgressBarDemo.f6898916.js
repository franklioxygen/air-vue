import{_ as b}from"./index.43206649.js";import{D as B}from"./deviceType.3fcb4f7a.js";import{s as d,o as l,c as i,a as s,y as _,F as P,h as v,C as p,t as h,e as y,p as S,b as C,r as D,d as T,f as m,g as a}from"./vendor.54853348.js";import{F as k}from"./FooterMessage.c0bea262.js";const q={name:"ProgressBar",props:{currentProgress:{type:Number,default:0},textPosition:{type:String,default:"fixed-text"},sections:{type:Array,default:()=>[]}},setup(t){const g=d(()=>t.currentProgress!==null?`width: ${t.currentProgress}%;`:""),e=d(()=>t.currentProgress!==null?`left:${t.currentProgress}% `:"");return{liquidStyle:g,ballStyle:e,sectionDotStyle:n=>{if(n!==0&&n!==t.sections.length-1)return`left: ${100*(n/(t.sections.length-1))}%;`},sectionStyle:n=>{if(n!==0&&n!==t.sections.length-1)return`left: ${100*(n/(t.sections.length-1))}%;`}}}},I=t=>(S("data-v-611ac746"),t=t(),C(),t),F={class:"progress-wrapper"},N=I(()=>s("div",{class:"tube"},null,-1)),M={class:"section-indicator"},j={key:0,class:"section-names"};function w(t,g,e,r,c,n){return l(),i("div",F,[N,s("div",{class:"liquid",style:_(r.liquidStyle)},null,4),s("div",M,[(l(!0),i(P,null,v(e.sections,(u,o)=>(l(),i("div",{key:o,style:_(r.sectionDotStyle(o)),class:p(["section-dot",o===e.sections.length-1?"last":"",o===0?"first":"",e.currentProgress/100>o/e.sections.length?"passed":""])},null,6))),128))]),e.sections.length!==0?(l(),i("ul",j,[(l(!0),i(P,null,v(e.sections,(u,o)=>(l(),i("li",{key:o,style:_(r.sectionStyle(o)),class:p([o===e.sections.length-1?"last":"",o===0?"first":""])},h(u),7))),128))])):y("",!0),s("div",{class:"ball",style:_(r.ballStyle)},[e.textPosition==="float-text"&&e.sections.length===0?(l(),i("div",{key:0,class:p(["text-percentage",e.textPosition])},h(e.currentProgress)+"% ",3)):y("",!0)],4),e.textPosition==="fixed-text"&&e.sections.length===0?(l(),i("div",{key:1,class:p(["text-percentage",e.textPosition])},h(e.currentProgress)+"% ",3)):y("",!0)])}var E=b(q,[["render",w],["__scopeId","data-v-611ac746"]]);const A={name:"ProgressBarDemo",components:{ProgressBar:E,DataTable:B,FooterMessage:k},setup(){const t=d(()=>`
<!-- normal progress bar -->
<ProgressBar :current-progress="80" />
<!-- float text progress bar -->
<ProgressBar :current-progress="60" text-position="float-text" />
<!-- fixed text progress bar -->
<ProgressBar
    :current-progress="dynamicProgress.value"
    text-position="fixed-text"
/>
<!-- sectional progress bar -->
<ProgressBar :current-progress="40" :sections="progressSections" />
      `),g=d(()=>`
import { ProgressBar } from "air-vue"";
      `),e=d(()=>`
// this is for dynamic progress
let dynamicProgress = reactive({
    value: 0,
});
onMounted(() => {
    setInterval(function () {
    dynamicProgress.value += 10;
    dynamicProgress.value > 100 ? (dynamicProgress.value = 0) : null;
    }, 1000);
});
// this is for sectional progress
let progressSections = computed(() => {
    return ["Preparing", "Chopped", "Cooked", "On Table", "Eat"];
});
      `),r=d(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"current-progress",type:"Number",required:"false",default:"0",description:"current progress of bar"},{name:"text-position",type:"String",required:"false",default:"fixed-text",description:"text position of bar"},{name:"sections",type:"Array",required:"false",default:"-",description:"sections of progress"}]}));let c=D({value:0});T(()=>{setInterval(function(){c.value+=10,c.value>100&&(c.value=0)},1e3)});let n=d(()=>["Preparing","Chopped","Cooked","On Table","Eat"]);return{insertCode:t,importCode:g,templateCode:e,tableProps:r,progressSections:n,dynamicProgress:c}}},V=s("h3",null,"Progress Bar",-1),z=s("p",null,"Progress Bar is used to display progress.",-1),O=s("h5",null,"Demo:",-1),G={class:"demo-wrapper"},H=s("p",null,"This is a normal Progress Bar:",-1),L=s("p",null,"This is a float text Progress Bar:",-1),R=s("p",null,"This is a fixed text Progress Bar:",-1),U=s("p",null,"This is a sectional Progress Bar:",-1),J=s("h5",null,"Usage:",-1),K=s("h6",null,"Insert component:",-1),Q=s("h6",null,"Import:",-1),W=s("h6",null,"Apply in template\uFF1A",-1);function X(t,g,e,r,c,n){const u=m("ProgressBar"),o=m("DataTable"),f=m("highlightjs"),x=m("FooterMessage");return l(),i(P,null,[V,z,O,s("div",G,[H,a(u,{"current-progress":80}),L,a(u,{"current-progress":60,"text-position":"float-text"}),R,a(u,{"current-progress":r.dynamicProgress.value,"text-position":"fixed-text"},null,8,["current-progress"]),U,a(u,{"current-progress":40,sections:r.progressSections},null,8,["sections"])]),a(o,{"table-props":r.tableProps},null,8,["table-props"]),J,K,a(f,{language:"html",code:r.insertCode},null,8,["code"]),Q,a(f,{language:"js",code:r.importCode},null,8,["code"]),W,a(f,{language:"js",code:r.templateCode},null,8,["code"]),a(x)],64)}var te=b(A,[["render",X]]);export{te as default};
