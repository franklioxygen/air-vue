import{_ as h}from"./index.3325a937.js";import{o as u,c as M,F as f,h as T,a as n,C as d,t as x,p as C,b as w,r as F,I,s as v,f as _,g as c}from"./vendor.54853348.js";import{C as b}from"./CustomizedButton.fdf2b7db.js";const D={name:"ToastMessage",props:{messagesWrapper:{type:Object,default:()=>({})}},emits:["remove-msg-from-array"],setup(i,{emit:o}){const p=()=>new Promise(s=>{requestAnimationFrame(s)}),a=s=>document.querySelector(s)===null?p().then(()=>a(s)):Promise.resolve(!0),g=(s,l)=>{a(`#${s}`).then(()=>{const r=document.getElementById(s),t=r.querySelector(".count-down");r.classList.add("expanded"),r.classList.remove("collapsed"),l!==0&&(e(t,l),setTimeout(()=>{t.textContent="",m(s)},l+1e3))})},m=s=>{o("remove-msg-from-array",s)},e=(s,l)=>{let r=l/1e3+1;const t=setInterval(()=>{r--,s.textContent=`Closing in ${r}s.`,r<=0&&clearInterval(t)},1e3)};return{openMsg:g,closeMsg:m}}},S=i=>(C("data-v-289f28e4"),i=i(),w(),i),B={class:"toast-msgs-wrapper"},W=["id"],$=S(()=>n("div",{class:"count-down"},null,-1)),k=["innerHTML"],A=["onClick"];function L(i,o,p,a,g,m){return u(),M("div",B,[(u(!0),M(f,null,T(p.messagesWrapper.messages,(e,s)=>(u(),M("div",{key:s},[n("div",{class:d(["toast-msg","collapsed",e.status]),id:e.id},[n("div",{class:d(["icons-msg","icons",e.type])},null,2),$,n("div",{class:d(["toast-msg-content",e.status])},[n("div",{class:d(["msg-type-name",e.type])},x(e.type),3),n("div",{innerHTML:e.content},null,8,k)],2),n("div",{class:d(["icon-close icons",e.status]),onClick:l=>a.closeMsg(e.id)},null,10,A)],10,W)]))),128))])}var j=h(D,[["render",L],["__scopeId","data-v-289f28e4"]]);const q={name:"ToastMessageDemo",components:{ToastMessage:j,CustomizedButton:b},setup(){let i=F({messages:[]});const o=I(),p=()=>{const t="msg-"+Date.now();o.value.openMsg(t,0),i.messages.push({id:t,type:"success",content:`
        This is a Success Message. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Vestibulum eu pharetra turpis, 
        ut congue ipsum. Nunc tincidunt ipsum ullamcorper ornare 
        fringilla. Mauris et accumsan elit, at lacinia erat. 
        Phasellus id interdum tortor. Morbi ac nunc dolor. 
        Vivamus consequat eleifend nulla in aliquam. Proin 
        facilisis faucibus sem sit amet placerat.`})},a=()=>{const t="msg-"+Date.now();o.value.openMsg(t,0),i.messages.push({id:t,type:"warning",content:"This is a Warning Message. For more information, please visit <a>read more</a>."})},g=()=>{const t="msg-"+Date.now();o.value.openMsg(t,2e4),i.messages.push({id:t,type:"failed",content:"This is a Failed Message."})},m=()=>{const t="msg-"+Date.now();o.value.openMsg(t,0),i.messages.push({id:t,type:"info",content:"This is a Info Message."})},e=t=>{i.messages=i.messages.filter(y=>y.id!==t)},s=v(()=>`
<ToastMessage
    :messagesWrapper="toastMessages"
    ref="exampleToastMessage"
    @remove-msg-from-array="removeMsgFromArray"
/>
      `),l=v(()=>`
import ToastMessage from "../components/ToastMessage.vue";
      `),r=v(()=>`
let toastMessages = reactive({
  messages: [],
});
const exampleToastMessage = ref();
const popSuccessMessage = () => {
  const id = "msg-" + Date.now();
  exampleToastMessage.value.openMsg(id, 0);
  toastMessages.messages.push({
    id: id,
    type: "success",
    content: 'This is a Success Message.',
  });
};
const popWarningMessage = () => {
  const id = "msg-" + Date.now();
  exampleToastMessage.value.openMsg(id, 0); // 0 duration is infinite
  toastMessages.messages.push({
    id: id,
    type: "warning",
    content:
      "This is a Warning Message. For more information, please visit <a>read more</a>.",
  });
};
const popFailedMessage = () => {
  const id = "msg-" + Date.now();
  exampleToastMessage.value.openMsg(id, 20000); // duration in milliseconds
  toastMessages.messages.push({
    id: id,
    type: "failed",
    content: "This is a Failed Message.",
  });
};
const removeMsgFromArray = (id) => {
  toastMessages.messages = toastMessages.messages.filter(
    (message) => message.id !== id
  );
};
      `);return{toastMessages:i,insertCode:s,importCode:l,templateCode:r,exampleToastMessage:o,popSuccessMessage:p,popWarningMessage:a,popFailedMessage:g,popInfoMessage:m,removeMsgFromArray:e}}},z=n("h3",null,"Toast Message",-1),P=n("p",null,"Toast Message is to display message to user.",-1),V=n("h5",null,"Demo:",-1),E={class:"demo-wrapper"},N=n("h5",null,"Usage:",-1),H=n("h6",null,"Insert component:",-1),O=n("h6",null,"Import:",-1),R=n("h6",null,"Apply in template\uFF1A",-1);function U(i,o,p,a,g,m){const e=_("CustomizedButton"),s=_("ToastMessage"),l=_("highlightjs");return u(),M(f,null,[z,P,V,n("div",E,[c(e,{"button-text":"Success Message",width:"200px",level:"vu-btn-primary",onClickButton:o[0]||(o[0]=r=>a.popSuccessMessage())}),c(e,{"button-text":"Warning Message",width:"200px",level:"vu-btn-primary",onClickButton:o[1]||(o[1]=r=>a.popWarningMessage())}),c(e,{"button-text":"Failed Message",width:"200px",level:"vu-btn-primary",onClickButton:o[2]||(o[2]=r=>a.popFailedMessage())}),c(e,{"button-text":"Info Message",width:"200px",level:"vu-btn-primary",onClickButton:o[3]||(o[3]=r=>a.popInfoMessage())}),c(s,{messagesWrapper:a.toastMessages,ref:"exampleToastMessage",onRemoveMsgFromArray:a.removeMsgFromArray},null,8,["messagesWrapper","onRemoveMsgFromArray"])]),N,H,c(l,{language:"html",code:a.insertCode},null,8,["code"]),O,c(l,{language:"js",code:a.importCode},null,8,["code"]),R,c(l,{language:"js",code:a.templateCode},null,8,["code"])],64)}var Q=h(q,[["render",U]]);export{Q as default};
