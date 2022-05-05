import{_ as b}from"./index.2f688c4f.js";import{D as x}from"./deviceType.9a00222c.js";import{s as d,o as l,c as a,a as s,y as _,F as P,h as v,C as p,t as f,e as h,p as B,b as S,r as C,d as D,f as y,g as i}from"./vendor.54853348.js";const T={name:"ProgressBar",props:{currentProgress:{type:Number,default:0},textPosition:{type:String,default:"fixed-text"},sections:{type:Array,default:()=>[]}},setup(t){const g=d(()=>t.currentProgress!==null?`width: ${t.currentProgress}%;`:""),e=d(()=>t.currentProgress!==null?`left:${t.currentProgress}% `:"");return{liquidStyle:g,ballStyle:e,sectionDotStyle:n=>{if(n!==0&&n!==t.sections.length-1)return`left: ${100*(n/(t.sections.length-1))}%;`},sectionStyle:n=>{if(n!==0&&n!==t.sections.length-1)return`left: ${100*(n/(t.sections.length-1))}%;`}}}},k=t=>(B("data-v-611ac746"),t=t(),S(),t),q={class:"progress-wrapper"},I=k(()=>s("div",{class:"tube"},null,-1)),N={class:"section-indicator"},j={key:0,class:"section-names"};function w(t,g,e,r,c,n){return l(),a("div",q,[I,s("div",{class:"liquid",style:_(r.liquidStyle)},null,4),s("div",N,[(l(!0),a(P,null,v(e.sections,(u,o)=>(l(),a("div",{key:o,style:_(r.sectionDotStyle(o)),class:p(["section-dot",o===e.sections.length-1?"last":"",o===0?"first":"",e.currentProgress/100>o/e.sections.length?"passed":""])},null,6))),128))]),e.sections.length!==0?(l(),a("ul",j,[(l(!0),a(P,null,v(e.sections,(u,o)=>(l(),a("li",{key:o,style:_(r.sectionStyle(o)),class:p([o===e.sections.length-1?"last":"",o===0?"first":""])},f(u),7))),128))])):h("",!0),s("div",{class:"ball",style:_(r.ballStyle)},[e.textPosition==="float-text"&&e.sections.length===0?(l(),a("div",{key:0,class:p(["text-percentage",e.textPosition])},f(e.currentProgress)+"% ",3)):h("",!0)],4),e.textPosition==="fixed-text"&&e.sections.length===0?(l(),a("div",{key:1,class:p(["text-percentage",e.textPosition])},f(e.currentProgress)+"% ",3)):h("",!0)])}var E=b(T,[["render",w],["__scopeId","data-v-611ac746"]]);const A={name:"ProgressBarDemo",components:{ProgressBar:E,DataTable:x},setup(){const t=d(()=>`
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
      `),r=d(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"current-progress",type:"Number",required:"false",default:"0",description:"current progress of bar"},{name:"text-position",type:"String",required:"false",default:"fixed-text",description:"text position of bar"},{name:"sections",type:"Array",required:"false",default:"-",description:"sections of progress"}]}));let c=C({value:0});D(()=>{setInterval(function(){c.value+=10,c.value>100&&(c.value=0)},1e3)});let n=d(()=>["Preparing","Chopped","Cooked","On Table","Eat"]);return{insertCode:t,importCode:g,templateCode:e,tableProps:r,progressSections:n,dynamicProgress:c}}},V=s("h3",null,"Progress Bar",-1),z=s("p",null,"Progress Bar is used to display progress.",-1),F=s("h5",null,"Demo:",-1),M={class:"demo-wrapper"},O=s("p",null,"This is a normal Progress Bar:",-1),G=s("p",null,"This is a float text Progress Bar:",-1),H=s("p",null,"This is a fixed text Progress Bar:",-1),L=s("p",null,"This is a sectional Progress Bar:",-1),R=s("h5",null,"Usage:",-1),U=s("h6",null,"Insert component:",-1),J=s("h6",null,"Import:",-1),K=s("h6",null,"Apply in template\uFF1A",-1);function Q(t,g,e,r,c,n){const u=y("ProgressBar"),o=y("DataTable"),m=y("highlightjs");return l(),a(P,null,[V,z,F,s("div",M,[O,i(u,{"current-progress":80}),G,i(u,{"current-progress":60,"text-position":"float-text"}),H,i(u,{"current-progress":r.dynamicProgress.value,"text-position":"fixed-text"},null,8,["current-progress"]),L,i(u,{"current-progress":40,sections:r.progressSections},null,8,["sections"])]),i(o,{"table-props":r.tableProps},null,8,["table-props"]),R,U,i(m,{language:"html",code:r.insertCode},null,8,["code"]),J,i(m,{language:"js",code:r.importCode},null,8,["code"]),K,i(m,{language:"js",code:r.templateCode},null,8,["code"])],64)}var Z=b(A,[["render",Q]]);export{Z as default};
