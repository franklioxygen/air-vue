/* empty css                                                                 */import{_ as p}from"./index.b60dd402.js";import{s as u,o as l,c as a,a as r,y as _,F as y,h as f,C as P,t as h,e as m,p as B,b as x,r as S,d as C,f as v,g as i}from"./vendor.54853348.js";const b={name:"ProgressBar",props:{currentProgress:{type:Number,default:0,required:!0},textPosition:{type:String,default:""},sections:{type:Array,default:()=>[]}},setup(t){const d=u(()=>t.currentProgress!==null?`width: ${t.currentProgress}%;`:""),e=u(()=>t.currentProgress!==null?`left:${t.currentProgress}% `:"");return{liquidStyle:d,ballStyle:e,sectionDotStyle:n=>{if(n!==0&&n!==t.sections.length-1)return`left: ${100*(n/(t.sections.length-1))}%;`},sectionStyle:n=>{if(n!==0&&n!==t.sections.length-1)return`left: ${100*(n/(t.sections.length-1))}%;`}}}},k=t=>(B("data-v-78cd01dd"),t=t(),x(),t),D={class:"progress-wrapper"},I=k(()=>r("div",{class:"tube"},null,-1)),T={class:"section-indicator"},j={key:0,class:"section-names"};function q(t,d,e,s,g,n){return l(),a("div",D,[I,r("div",{class:"liquid",style:_(s.liquidStyle)},null,4),r("div",T,[(l(!0),a(y,null,f(e.sections,(c,o)=>(l(),a("div",{key:o,style:_(s.sectionDotStyle(o)),class:P(["section-dot",o===e.sections.length-1?"last":"",o===0?"first":"",e.currentProgress/100>o/e.sections.length?"passed":""])},null,6))),128))]),e.sections.length!==0?(l(),a("ul",j,[(l(!0),a(y,null,f(e.sections,(c,o)=>(l(),a("li",{key:o,style:_(s.sectionStyle(o)),class:P([o===e.sections.length-1?"last":"",o===0?"first":""])},h(c),7))),128))])):m("",!0),r("div",{class:"ball",style:_(s.ballStyle)},[e.textPosition==="float-text"&&e.sections.length===0?(l(),a("div",{key:0,class:P(["text-percentage",e.textPosition])},h(e.currentProgress)+"% ",3)):m("",!0)],4),e.textPosition==="fixed-text"&&e.sections.length===0?(l(),a("div",{key:1,class:P(["text-percentage",e.textPosition])},h(e.currentProgress)+"% ",3)):m("",!0)])}var w=p(b,[["render",q],["__scopeId","data-v-78cd01dd"]]);const N={name:"ProgressBarDemo",components:{ProgressBar:w},setup(){const t=u(()=>`
<!-- normal progress bar -->
<ProgressBar :currentProgress="80" />
<!-- float text progress bar -->
<ProgressBar :currentProgress="60" textPosition="float-text" />
<!-- fixed text progress bar -->
<ProgressBar
    :currentProgress="dynamicProgress.value"
    textPosition="fixed-text"
/>
<!-- sectional progress bar -->
<ProgressBar :currentProgress="40" :sections="progressSections" />
      `),d=u(()=>`
import ProgressBar from "../src/components/ProgressBar.vue";
      `),e=u(()=>`
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
      `);let s=S({value:0});C(()=>{setInterval(function(){s.value+=10,s.value>100&&(s.value=0)},1e3)});let g=u(()=>["Preparing","Chopped","Cooked","On Table","Eat"]);return{insertCode:t,importCode:d,templateCode:e,progressSections:g,dynamicProgress:s}}},E=r("h3",null,"Progress Bar",-1),V=r("p",null,"Progress Bar is used to display progress.",-1),z=r("h5",null,"Demo:",-1),A={class:"demo-wrapper"},F=r("p",null,"This is a normal Progress Bar:",-1),M=r("p",null,"This is a float text Progress Bar:",-1),O=r("p",null,"This is a fixed text Progress Bar:",-1),L=r("p",null,"This is a sectional Progress Bar:",-1),U=r("h5",null,"Usage:",-1),G=r("h6",null,"Insert component:",-1),H=r("h6",null,"Import:",-1),J=r("h6",null,"Apply in template\uFF1A",-1);function K(t,d,e,s,g,n){const c=v("ProgressBar"),o=v("highlightjs");return l(),a(y,null,[E,V,z,r("div",A,[F,i(c,{currentProgress:80}),M,i(c,{currentProgress:60,textPosition:"float-text"}),O,i(c,{currentProgress:s.dynamicProgress.value,textPosition:"fixed-text"},null,8,["currentProgress"]),L,i(c,{currentProgress:40,sections:s.progressSections},null,8,["sections"])]),U,G,i(o,{language:"html",code:s.insertCode},null,8,["code"]),H,i(o,{language:"js",code:s.importCode},null,8,["code"]),J,i(o,{language:"js",code:s.templateCode},null,8,["code"])],64)}var X=p(N,[["render",K]]);export{X as default};
