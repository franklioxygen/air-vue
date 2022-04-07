import{_ as h}from"./index.6a579aae.js";import{o as g,c as _,F as f,h as T,a as e,C as p,t as x,p as w,b as C,r as b,I as F,s as M,f as v,g as c}from"./vendor.54853348.js";import{C as I}from"./CustomizedButton.1cbea469.js";const D={name:"ToastMessage",props:{messagesWrapper:{type:Object,default:()=>({})}},emits:["remove-msg-from-array"],setup(l,{emit:n}){const d=()=>new Promise(t=>{requestAnimationFrame(t)}),a=t=>document.querySelector(t)===null?d().then(()=>a(t)):Promise.resolve(!0),m=(t,r)=>{a(`#${t}`).then(()=>{const i=document.getElementById(t),o=i.querySelector(".count-down");i.classList.remove("collapsed"),i.classList.add("expanded"),r!==0&&(s(o,r),setTimeout(()=>{o.textContent="",u(t)},r+1e3))})},u=t=>{const r=document.getElementById(t);new Promise(i=>{r.classList.remove("expanded"),r.classList.add("collapsed"),i()}).then(()=>{setTimeout(()=>{n("remove-msg-from-array",t)},300)})},s=(t,r)=>{let i=r/1e3+1;const o=setInterval(()=>{i--,t.textContent=`Closing in ${i}s.`,i<=0&&clearInterval(o)},1e3)};return{openMsg:m,closeMsg:u}}},B=l=>(w("data-v-4f138d28"),l=l(),C(),l),S={class:"toast-msgs-wrapper"},W=["id"],$=B(()=>e("div",{class:"count-down"},null,-1)),k=["innerHTML"],A=["onClick"];function L(l,n,d,a,m,u){return g(),_("div",S,[(g(!0),_(f,null,T(d.messagesWrapper.messages,s=>(g(),_("div",{key:s},[e("div",{class:p(["toast-msg","collapsed",s.status]),id:s.id},[e("div",{class:p(["icons-msg","icons",s.type])},null,2),$,e("div",{class:p(["toast-msg-content",s.status])},[e("div",{class:p(["msg-type-name",s.type])},x(s.type),3),e("div",{innerHTML:s.content},null,8,k)],2),e("div",{class:p(["icon-close icons",s.status]),onClick:t=>a.closeMsg(s.id)},null,10,A)],10,W)]))),128))])}var j=h(D,[["render",L],["__scopeId","data-v-4f138d28"]]);const q={name:"ToastMessageDemo",components:{ToastMessage:j,CustomizedButton:I},setup(){let l=b({messages:[]});const n=F(),d=()=>{const o="msg-"+Date.now();n.value.openMsg(o,0),l.messages.push({id:o,type:"success",content:`
        This is a Success Message. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Vestibulum eu pharetra turpis, 
        ut congue ipsum. Nunc tincidunt ipsum ullamcorper ornare 
        fringilla. Mauris et accumsan elit, at lacinia erat. 
        Phasellus id interdum tortor. Morbi ac nunc dolor. 
        Vivamus consequat eleifend nulla in aliquam. Proin 
        facilisis faucibus sem sit amet placerat.`})},a=()=>{const o="msg-"+Date.now();n.value.openMsg(o,0),l.messages.push({id:o,type:"warning",content:"This is a Warning Message. For more information, please visit <a>read more</a>."})},m=()=>{const o="msg-"+Date.now();n.value.openMsg(o,1e4),l.messages.push({id:o,type:"failed",content:"This is a Failed Message."})},u=()=>{const o="msg-"+Date.now();n.value.openMsg(o,0),l.messages.push({id:o,type:"info",content:"This is a Info Message."})},s=o=>{l.messages=l.messages.filter(y=>y.id!==o)},t=M(()=>`
<ToastMessage
    :messagesWrapper="toastMessages"
    ref="exampleToastMessage"
    @remove-msg-from-array="removeMsgFromArray"
/>
      `),r=M(()=>`
import ToastMessage from "../components/ToastMessage.vue";
      `),i=M(()=>`
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
  exampleToastMessage.value.openMsg(id, 10000); // duration in milliseconds
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
      `);return{toastMessages:l,insertCode:t,importCode:r,templateCode:i,exampleToastMessage:n,popSuccessMessage:d,popWarningMessage:a,popFailedMessage:m,popInfoMessage:u,removeMsgFromArray:s}}},P=e("h3",null,"Toast Message",-1),z=e("p",null,"Toast Message is to display message to user.",-1),E=e("h5",null,"Demo:",-1),N={class:"demo-wrapper"},V=e("span",null,"Multiple lines message:",-1),H=e("br",null,null,-1),O=e("br",null,null,-1),R=e("span",null,"Message with html code:",-1),U=e("br",null,null,-1),G=e("br",null,null,-1),J=e("span",null,"Delay close message:",-1),K=e("br",null,null,-1),Q=e("br",null,null,-1),X=e("span",null,"Normal Message:",-1),Y=e("br",null,null,-1),Z=e("br",null,null,-1),ee=e("h5",null,"Usage:",-1),se=e("h6",null,"Insert component:",-1),te=e("h6",null,"Import:",-1),oe=e("h6",null,"Apply in template\uFF1A",-1);function ne(l,n,d,a,m,u){const s=v("CustomizedButton"),t=v("ToastMessage"),r=v("highlightjs");return g(),_(f,null,[P,z,E,e("div",N,[V,H,c(s,{"button-text":"Success Message",width:"200px",level:"vu-btn-primary",onClickButton:n[0]||(n[0]=i=>a.popSuccessMessage())}),O,R,U,c(s,{"button-text":"Warning Message",width:"200px",level:"vu-btn-primary",onClickButton:n[1]||(n[1]=i=>a.popWarningMessage())}),G,J,K,c(s,{"button-text":"Failed Message",width:"200px",level:"vu-btn-primary",onClickButton:n[2]||(n[2]=i=>a.popFailedMessage())}),Q,X,Y,c(s,{"button-text":"Info Message",width:"200px",level:"vu-btn-primary",onClickButton:n[3]||(n[3]=i=>a.popInfoMessage())}),Z,c(t,{messagesWrapper:a.toastMessages,ref:"exampleToastMessage",onRemoveMsgFromArray:a.removeMsgFromArray},null,8,["messagesWrapper","onRemoveMsgFromArray"])]),ee,se,c(r,{language:"html",code:a.insertCode},null,8,["code"]),te,c(r,{language:"js",code:a.importCode},null,8,["code"]),oe,c(r,{language:"js",code:a.templateCode},null,8,["code"])],64)}var re=h(q,[["render",ne]]);export{re as default};
