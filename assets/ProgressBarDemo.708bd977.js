import{_ as p}from"./index.8e2831b8.js";import{s as a,o as l,c as i,a as e,y as d,C as g,t as _,e as P,p as v,b as y,r as f,d as B,f as m,g as o,F as C}from"./vendor.54853348.js";const S={name:"ProgressBar",props:{currentProgress:{type:Number,default:0,required:!0},textPosition:{type:String,default:""}},setup(r){const n=a(()=>r.currentProgress!==null?`width: ${r.currentProgress}%;`:""),s=a(()=>r.currentProgress!==null?`left:${r.currentProgress}% `:"");return{liquidStyle:n,ballStyle:s}}},b=r=>(v("data-v-1d17c1c8"),r=r(),y(),r),I={class:"progress-wrapper"},D=b(()=>e("div",{class:"tube"},null,-1));function T(r,n,s,t,h,x){return l(),i("div",I,[D,e("div",{class:"liquid",style:d(t.liquidStyle)},null,4),e("div",{class:"ball",style:d(t.ballStyle)},[s.textPosition==="float-text"?(l(),i("div",{key:0,class:g(["text-percentage",s.textPosition])},_(s.currentProgress)+"% ",3)):P("",!0)],4),s.textPosition==="fixed-text"?(l(),i("div",{key:0,class:g(["text-percentage",s.textPosition])},_(s.currentProgress)+"% ",3)):P("",!0)])}var j=p(S,[["render",T],["__scopeId","data-v-1d17c1c8"]]);const k={name:"ProgressBarDemo",components:{ProgressBar:j},setup(){const r=a(()=>`
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
      `),n=a(()=>`
import ProgressBar from "../components/ProgressBar.vue";
      `),s=a(()=>`
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
      `);let t=f({value:0});return B(()=>{setInterval(function(){t.value+=10,t.value>100&&(t.value=0)},1e3)}),{insertCode:r,importCode:n,templateCode:s,dynamicProgress:t}}},q=e("h3",null,"Progress Bar",-1),w=e("p",null,"Progress Bar is used to display progress.",-1),N=e("h5",null,"Demo:",-1),V={class:"demo-wrapper"},z=e("p",null,"This is a normal Progress Bar:",-1),F=e("p",null,"This is a float text Progress Bar:",-1),M=e("p",null,"This is a fixed text Progress Bar:",-1),$=e("h5",null,"Usage:",-1),A=e("h6",null,"Insert component:",-1),E=e("h6",null,"Import:",-1),U=e("h6",null,"Apply in template\uFF1A",-1);function G(r,n,s,t,h,x){const c=m("ProgressBar"),u=m("highlightjs");return l(),i(C,null,[q,w,N,e("div",V,[z,o(c,{currentProgress:80}),F,o(c,{currentProgress:60,textPosition:"float-text"}),M,o(c,{currentProgress:t.dynamicProgress.value,displayText:!0,textPosition:"fixed-text"},null,8,["currentProgress"])]),$,A,o(u,{language:"html",code:t.insertCode},null,8,["code"]),E,o(u,{language:"js",code:t.importCode},null,8,["code"]),U,o(u,{language:"js",code:t.templateCode},null,8,["code"])],64)}var K=p(k,[["render",G]]);export{K as default};
