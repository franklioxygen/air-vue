import{_ as f}from"./index.2f688c4f.js";import{C as T}from"./CustomizedButton.f2a85b4f.js";import{D as w}from"./deviceType.9a00222c.js";import{o as v,c as h,F as y,h as x,a as e,C as g,t as C,p as D,b as F,r as I,I as B,s as _,f as M,g as d}from"./vendor.54853348.js";const S={name:"ToastMessage",props:{messagesWrapper:{type:Object,default:()=>({})}},emits:["remove-msg-from-array"],setup(i,{emit:o}){const m=()=>new Promise(t=>{requestAnimationFrame(t)}),a=t=>document.querySelector(t)===null?m().then(()=>a(t)):Promise.resolve(!0),u=(t,r)=>{a(`#${t}`).then(()=>{const n=document.getElementById(t),c=n.querySelector(".count-down");n.classList.remove("collapsed"),n.classList.add("expanded"),r!==0&&(s(c,r),setTimeout(()=>{c.textContent="",p(t)},r+1e3))})},p=t=>{const r=document.getElementById(t);new Promise(n=>{try{r.classList.remove("expanded"),r.classList.add("collapsed"),n()}catch{n()}}).then(()=>{setTimeout(()=>{o("remove-msg-from-array",t)},300)})},s=(t,r)=>{let n=r/1e3+1;const c=setInterval(()=>{n--,t.textContent=`Closing in ${n}s.`,n<=0&&clearInterval(c)},1e3)};return{openMsg:u,closeMsg:p}}},k=i=>(D("data-v-1fe8f6e6"),i=i(),F(),i),q={class:"toast-msgs-wrapper"},$=["id"],A=k(()=>e("div",{class:"count-down"},null,-1)),L=["innerHTML"],P=["onClick"];function W(i,o,m,a,u,p){return v(),h("div",q,[(v(!0),h(y,null,x(m.messagesWrapper.messages,s=>(v(),h("div",{key:s},[e("div",{class:g(["toast-msg","collapsed",s.status]),id:s.id},[e("div",{class:g(["icons-msg","icons",s.type])},null,2),A,e("div",{class:g(["toast-msg-content",s.status])},[e("div",{class:g(["msg-type-name",s.type])},C(s.type),3),e("div",{innerHTML:s.content},null,8,L)],2),e("div",{class:g(["icon-close icons",s.status]),onClick:t=>a.closeMsg(s.id)},null,10,P)],10,$)]))),128))])}var j=f(S,[["render",W],["__scopeId","data-v-1fe8f6e6"]]);const E={name:"ToastMessageDemo",components:{ToastMessage:j,CustomizedButton:T,DataTable:w},setup(){let i=I({messages:[]});const o=B(),m=()=>{const l="msg-"+Date.now();o.value.openMsg(l,0),i.messages.push({id:l,type:"success",content:`
        This is a Success Message. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Vestibulum eu pharetra turpis, 
        ut congue ipsum. Nunc tincidunt ipsum ullamcorper ornare 
        fringilla. Mauris et accumsan elit, at lacinia erat. 
        Phasellus id interdum tortor. Morbi ac nunc dolor. 
        Vivamus consequat eleifend nulla in aliquam. Proin 
        facilisis faucibus sem sit amet placerat.`})},a=()=>{const l="msg-"+Date.now();o.value.openMsg(l,0),i.messages.push({id:l,type:"warning",content:"This is a Warning Message. For more information, please visit <a>read more</a>."})},u=()=>{const l="msg-"+Date.now();o.value.openMsg(l,1e4),i.messages.push({id:l,type:"failed",content:"This is a Failed Message."})},p=()=>{const l="msg-"+Date.now();o.value.openMsg(l,0),i.messages.push({id:l,type:"info",content:"This is a Info Message."})},s=l=>{i.messages=i.messages.filter(b=>b.id!==l)},t=_(()=>`
<ToastMessage
    :messages-wrapper="toastMessages"
    ref="exampleToastMessage"
    @remove-msg-from-array="removeMsgFromArray"
/>
      `),r=_(()=>`
import { ToastMessage } from "air-vue";
      `),n=_(()=>`
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
      `),c=_(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"messages-wrapper",type:"Object",required:"true",default:"-",description:"messages"},{name:"ref",type:"String",required:"true",default:"",description:"identifier of message"},{name:"remove-msg-from-array",type:"<Event>",required:"true",default:"-",description:"trigger remove message event"}]}));return{toastMessages:i,insertCode:t,importCode:r,templateCode:n,tableProps:c,exampleToastMessage:o,popSuccessMessage:m,popWarningMessage:a,popFailedMessage:u,popInfoMessage:p,removeMsgFromArray:s}}},N=e("h3",null,"Toast Message",-1),z=e("p",null,"Toast Message is to display message to user.",-1),V=e("h5",null,"Demo:",-1),H={class:"demo-wrapper"},O=e("span",null,"Multiple lines message:",-1),R=e("br",null,null,-1),G=e("br",null,null,-1),U=e("span",null,"Message with html code:",-1),J=e("br",null,null,-1),K=e("br",null,null,-1),Q=e("span",null,"Delay close message:",-1),X=e("br",null,null,-1),Y=e("br",null,null,-1),Z=e("span",null,"Normal Message:",-1),ee=e("br",null,null,-1),se=e("br",null,null,-1),te=e("h5",null,"Usage:",-1),oe=e("h6",null,"Insert component:",-1),ae=e("h6",null,"Import:",-1),ne=e("h6",null,"Apply in template\uFF1A",-1);function ie(i,o,m,a,u,p){const s=M("CustomizedButton"),t=M("ToastMessage"),r=M("DataTable"),n=M("highlightjs");return v(),h(y,null,[N,z,V,e("div",H,[O,R,d(s,{id:"demo-toast-success-message","button-text":"Success Message",width:"200px",level:"av-btn-primary",onClickButton:o[0]||(o[0]=c=>a.popSuccessMessage())}),G,U,J,d(s,{id:"demo-toast-warning-message","button-text":"Warning Message",width:"200px",level:"av-btn-primary",onClickButton:o[1]||(o[1]=c=>a.popWarningMessage())}),K,Q,X,d(s,{id:"demo-toast-failed-message","button-text":"Failed Message",width:"200px",level:"av-btn-primary",onClickButton:o[2]||(o[2]=c=>a.popFailedMessage())}),Y,Z,ee,d(s,{id:"demo-toast-info-message","button-text":"Info Message",width:"200px",level:"av-btn-primary",onClickButton:o[3]||(o[3]=c=>a.popInfoMessage())}),se,d(t,{"messages-wrapper":a.toastMessages,ref:"exampleToastMessage",onRemoveMsgFromArray:a.removeMsgFromArray},null,8,["messages-wrapper","onRemoveMsgFromArray"])]),d(r,{"table-props":a.tableProps},null,8,["table-props"]),te,oe,d(n,{language:"html",code:a.insertCode},null,8,["code"]),ae,d(n,{language:"js",code:a.importCode},null,8,["code"]),ne,d(n,{language:"js",code:a.templateCode},null,8,["code"])],64)}var me=f(E,[["render",ie]]);export{me as default};
