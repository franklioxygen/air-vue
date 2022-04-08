import{_ as p}from"./index.1d7aaf13.js";import{s as u,o as l,c as a,a as r,y as _,F as y,h as f,C as P,t as h,e as m,p as B,b as x,r as S,d as b,f as v,g as i}from"./vendor.54853348.js";const C={name:"ProgressBar",props:{currentProgress:{type:Number,default:0,required:!0},textPosition:{type:String,default:""},sections:{type:Array,default:()=>[]}},setup(s){const g=u(()=>s.currentProgress!==null?`width: ${s.currentProgress}%;`:""),e=u(()=>s.currentProgress!==null?`left:${s.currentProgress}% `:"");return{liquidStyle:g,ballStyle:e,sectionDotStyle:n=>{if(n!==0&&n!==s.sections.length-1)return`left: ${100*(n/(s.sections.length-1))}%;`},sectionStyle:n=>{if(n!==0&&n!==s.sections.length-1)return`left: ${100*(n/(s.sections.length-1))}%;`}}}},k=s=>(B("data-v-eb31701c"),s=s(),x(),s),T={class:"progress-wrapper"},D=k(()=>r("div",{class:"tube"},null,-1)),I={class:"section-indicator"},j={key:0,class:"section-names"};function q(s,g,e,t,d,n){return l(),a("div",T,[D,r("div",{class:"liquid",style:_(t.liquidStyle)},null,4),r("div",I,[(l(!0),a(y,null,f(e.sections,(c,o)=>(l(),a("div",{key:o,style:_(t.sectionDotStyle(o)),class:P(["section-dot",o===e.sections.length-1?"last":"",o===0?"first":"",e.currentProgress/100>o/e.sections.length?"passed":""])},null,6))),128))]),e.sections.length!==0?(l(),a("ul",j,[(l(!0),a(y,null,f(e.sections,(c,o)=>(l(),a("li",{key:o,style:_(t.sectionStyle(o)),class:P([o===e.sections.length-1?"last":"",o===0?"first":""])},h(c),7))),128))])):m("",!0),r("div",{class:"ball",style:_(t.ballStyle)},[e.textPosition==="float-text"&&e.sections.length===0?(l(),a("div",{key:0,class:P(["text-percentage",e.textPosition])},h(e.currentProgress)+"% ",3)):m("",!0)],4),e.textPosition==="fixed-text"&&e.sections.length===0?(l(),a("div",{key:1,class:P(["text-percentage",e.textPosition])},h(e.currentProgress)+"% ",3)):m("",!0)])}var w=p(C,[["render",q],["__scopeId","data-v-eb31701c"]]);const N={name:"ProgressBarDemo",components:{ProgressBar:w},setup(){const s=u(()=>`
<!-- normal progress bar -->
<ProgressBar :currentProgress="80" />
<!-- float text progress bar -->
<ProgressBar :currentProgress="60" textPosition="float-text" />
<!-- fixed text progress bar -->
<ProgressBar
    :currentProgress="dynamicProgress.value"
    :displayText="true"
    textPosition="fixed-text"
/>
<!-- sectional progress bar -->
<p>This is a sectional Progress Bar:</p>
<ProgressBar :currentProgress="40" :sections="progressSections" />
      `),g=u(()=>`
import ProgressBar from "../components/ProgressBar.vue";
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
      `);let t=S({value:0});b(()=>{setInterval(function(){t.value+=10,t.value>100&&(t.value=0)},1e3)});let d=u(()=>["Preparing","Chopped","Cooked","On Table","Eat"]);return{insertCode:s,importCode:g,templateCode:e,progressSections:d,dynamicProgress:t}}},E=r("h3",null,"Progress Bar",-1),V=r("p",null,"Progress Bar is used to display progress.",-1),z=r("h5",null,"Demo:",-1),A={class:"demo-wrapper"},F=r("p",null,"This is a normal Progress Bar:",-1),M=r("p",null,"This is a float text Progress Bar:",-1),O=r("p",null,"This is a fixed text Progress Bar:",-1),L=r("p",null,"This is a sectional Progress Bar:",-1),U=r("h5",null,"Usage:",-1),G=r("h6",null,"Insert component:",-1),H=r("h6",null,"Import:",-1),J=r("h6",null,"Apply in template\uFF1A",-1);function K(s,g,e,t,d,n){const c=v("ProgressBar"),o=v("highlightjs");return l(),a(y,null,[E,V,z,r("div",A,[F,i(c,{currentProgress:80}),M,i(c,{currentProgress:60,textPosition:"float-text"}),O,i(c,{currentProgress:t.dynamicProgress.value,displayText:!0,textPosition:"fixed-text"},null,8,["currentProgress"]),L,i(c,{currentProgress:40,sections:t.progressSections},null,8,["sections"])]),U,G,i(o,{language:"html",code:t.insertCode},null,8,["code"]),H,i(o,{language:"js",code:t.importCode},null,8,["code"]),J,i(o,{language:"js",code:t.templateCode},null,8,["code"])],64)}var W=p(N,[["render",K]]);export{W as default};
