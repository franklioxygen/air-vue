import{_ as h}from"./index.43206649.js";import{C as T}from"./CustomizedButton.784a2752.js";import{D as w}from"./deviceType.3fcb4f7a.js";import{o as v,c as f,F as y,h as x,a as e,C as g,t as C,p as F,b as D,r as I,I as B,s as _,f as M,g as c}from"./vendor.54853348.js";import{F as S}from"./FooterMessage.c0bea262.js";const k={name:"ToastMessage",props:{messagesWrapper:{type:Object,default:()=>({})}},emits:["remove-msg-from-array"],setup(r,{emit:o}){const m=()=>new Promise(t=>{requestAnimationFrame(t)}),a=t=>document.querySelector(t)===null?m().then(()=>a(t)):Promise.resolve(!0),u=(t,l)=>{a(`#${t}`).then(()=>{const i=document.getElementById(t),d=i.querySelector(".count-down");i.classList.remove("collapsed"),i.classList.add("expanded"),l!==0&&(s(d,l),setTimeout(()=>{d.textContent="",p(t)},l+1e3))})},p=t=>{const l=document.getElementById(t);new Promise(i=>{try{l.classList.remove("expanded"),l.classList.add("collapsed"),i()}catch{i()}}).then(()=>{setTimeout(()=>{o("remove-msg-from-array",t)},300)})},s=(t,l)=>{let i=l/1e3+1;const d=setInterval(()=>{i--,t.textContent=`Closing in ${i}s.`,i<=0&&clearInterval(d)},1e3)};return{openMsg:u,closeMsg:p}}},q=r=>(F("data-v-1fe8f6e6"),r=r(),D(),r),$={class:"toast-msgs-wrapper"},A=["id"],L=q(()=>e("div",{class:"count-down"},null,-1)),P=["innerHTML"],W=["onClick"];function j(r,o,m,a,u,p){return v(),f("div",$,[(v(!0),f(y,null,x(m.messagesWrapper.messages,s=>(v(),f("div",{key:s},[e("div",{class:g(["toast-msg","collapsed",s.status]),id:s.id},[e("div",{class:g(["icons-msg","icons",s.type])},null,2),L,e("div",{class:g(["toast-msg-content",s.status])},[e("div",{class:g(["msg-type-name",s.type])},C(s.type),3),e("div",{innerHTML:s.content},null,8,P)],2),e("div",{class:g(["icon-close icons",s.status]),onClick:t=>a.closeMsg(s.id)},null,10,W)],10,A)]))),128))])}var E=h(k,[["render",j],["__scopeId","data-v-1fe8f6e6"]]);const N={name:"ToastMessageDemo",components:{ToastMessage:E,CustomizedButton:T,DataTable:w,FooterMessage:S},setup(){let r=I({messages:[]});const o=B(),m=()=>{const n="msg-"+Date.now();o.value.openMsg(n,0),r.messages.push({id:n,type:"success",content:`
        This is a Success Message. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Vestibulum eu pharetra turpis, 
        ut congue ipsum. Nunc tincidunt ipsum ullamcorper ornare 
        fringilla. Mauris et accumsan elit, at lacinia erat. 
        Phasellus id interdum tortor. Morbi ac nunc dolor. 
        Vivamus consequat eleifend nulla in aliquam. Proin 
        facilisis faucibus sem sit amet placerat.`})},a=()=>{const n="msg-"+Date.now();o.value.openMsg(n,0),r.messages.push({id:n,type:"warning",content:"This is a Warning Message. For more information, please visit <a>read more</a>."})},u=()=>{const n="msg-"+Date.now();o.value.openMsg(n,1e4),r.messages.push({id:n,type:"failed",content:"This is a Failed Message."})},p=()=>{const n="msg-"+Date.now();o.value.openMsg(n,0),r.messages.push({id:n,type:"info",content:"This is a Info Message."})},s=n=>{r.messages=r.messages.filter(b=>b.id!==n)},t=_(()=>`
<ToastMessage
    :messages-wrapper="toastMessages"
    ref="exampleToastMessage"
    @remove-msg-from-array="removeMsgFromArray"
/>
      `),l=_(()=>`
import { ToastMessage } from "air-vue";
      `),i=_(()=>`
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
      `),d=_(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"messages-wrapper",type:"Object",required:"true",default:"-",description:"messages"},{name:"ref",type:"String",required:"true",default:"",description:"identifier of message"},{name:"remove-msg-from-array",type:"<Event>",required:"true",default:"-",description:"trigger remove message event"}]}));return{toastMessages:r,insertCode:t,importCode:l,templateCode:i,tableProps:d,exampleToastMessage:o,popSuccessMessage:m,popWarningMessage:a,popFailedMessage:u,popInfoMessage:p,removeMsgFromArray:s}}},z=e("h3",null,"Toast Message",-1),V=e("p",null,"Toast Message is to display message to user.",-1),H=e("h5",null,"Demo:",-1),O={class:"demo-wrapper"},R=e("span",null,"Multiple lines message:",-1),G=e("br",null,null,-1),U=e("br",null,null,-1),J=e("span",null,"Message with html code:",-1),K=e("br",null,null,-1),Q=e("br",null,null,-1),X=e("span",null,"Delay close message:",-1),Y=e("br",null,null,-1),Z=e("br",null,null,-1),ee=e("span",null,"Normal Message:",-1),se=e("br",null,null,-1),te=e("br",null,null,-1),oe=e("h5",null,"Usage:",-1),ae=e("h6",null,"Insert component:",-1),ne=e("h6",null,"Import:",-1),ie=e("h6",null,"Apply in template\uFF1A",-1);function re(r,o,m,a,u,p){const s=M("CustomizedButton"),t=M("ToastMessage"),l=M("DataTable"),i=M("highlightjs"),d=M("FooterMessage");return v(),f(y,null,[z,V,H,e("div",O,[R,G,c(s,{id:"demo-toast-success-message","button-text":"Success Message",width:"200px",level:"av-btn-primary",onClickButton:o[0]||(o[0]=n=>a.popSuccessMessage())}),U,J,K,c(s,{id:"demo-toast-warning-message","button-text":"Warning Message",width:"200px",level:"av-btn-primary",onClickButton:o[1]||(o[1]=n=>a.popWarningMessage())}),Q,X,Y,c(s,{id:"demo-toast-failed-message","button-text":"Failed Message",width:"200px",level:"av-btn-primary",onClickButton:o[2]||(o[2]=n=>a.popFailedMessage())}),Z,ee,se,c(s,{id:"demo-toast-info-message","button-text":"Info Message",width:"200px",level:"av-btn-primary",onClickButton:o[3]||(o[3]=n=>a.popInfoMessage())}),te,c(t,{"messages-wrapper":a.toastMessages,ref:"exampleToastMessage",onRemoveMsgFromArray:a.removeMsgFromArray},null,8,["messages-wrapper","onRemoveMsgFromArray"])]),c(l,{"table-props":a.tableProps},null,8,["table-props"]),oe,ae,c(i,{language:"html",code:a.insertCode},null,8,["code"]),ne,c(i,{language:"js",code:a.importCode},null,8,["code"]),ie,c(i,{language:"js",code:a.templateCode},null,8,["code"]),c(d)],64)}var ue=h(N,[["render",re]]);export{ue as default};
