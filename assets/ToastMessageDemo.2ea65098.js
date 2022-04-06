import{_ as f}from"./index.f51650be.js";import{o as d,c as M,F as y,h as x,a,C as p,t as h,j as C,r as w,I as F,s as _,f as v,g as i}from"./vendor.54853348.js";import{C as b}from"./CustomizedButton.1b4a69a7.js";const B={name:"ToastMessage",props:{messagesWrapper:{type:Object,default:()=>({})}},emits:["remove-msg-from-array"],setup(n,{emit:s}){const c=()=>new Promise(e=>{requestAnimationFrame(e)}),t=e=>document.querySelector(e)===null?c().then(()=>t(e)):Promise.resolve(!0);return{openMsg:e=>{t(`#${e}`).then(()=>{const r=document.getElementById(e);r.classList.add("expanded"),r.classList.remove("collapsed")})},closeMsg:e=>{s("remove-msg-from-array",e)}}}},k={class:"toast-msgs-wrapper"},D=["id"],A=["onClick"];function I(n,s,c,t,g,u){return d(),M("div",k,[(d(!0),M(y,null,x(c.messagesWrapper.messages,(e,r)=>(d(),M("div",{key:r},[a("div",{class:p(["toast-msg","collapsed",e.status]),id:e.id},[a("div",{class:p(["icons-msg","icons",e.type])},null,2),a("div",{class:p(["toast-msg-content",e.status])},[a("div",{class:p(["msg-type-name",e.type])},h(e.type),3),C(" "+h(e.content),1)],2),a("div",{class:p(["icon-close icons",e.status]),onClick:l=>t.closeMsg(e.id)},null,10,A)],10,D)]))),128))])}var W=f(B,[["render",I],["__scopeId","data-v-22cccff0"]]);const S={name:"ToastMessageDemo",components:{ToastMessage:W,CustomizedButton:b},setup(){let n=w({messages:[]});const s=F(),c=()=>{const o="msg-"+Date.now();s.value.openMsg(o),n.messages.push({id:o,type:"success",content:`
        This is a Success Message. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Vestibulum eu pharetra turpis, 
        ut congue ipsum. Nunc tincidunt ipsum ullamcorper ornare 
        fringilla. Mauris et accumsan elit, at lacinia erat. 
        Phasellus id interdum tortor. Morbi ac nunc dolor. 
        Vivamus consequat eleifend nulla in aliquam. Proin 
        facilisis faucibus sem sit amet placerat.`})},t=()=>{const o="msg-"+Date.now();s.value.openMsg(o),n.messages.push({id:o,type:"warning",content:"This is a Warning Message."})},g=()=>{const o="msg-"+Date.now();s.value.openMsg(o),n.messages.push({id:o,type:"failed",content:"This is a Failed Message."})},u=()=>{const o="msg-"+Date.now();s.value.openMsg(o),n.messages.push({id:o,type:"info",content:"This is a Info Message."})},e=o=>{n.messages=n.messages.filter(T=>T.id!==o)},r=_(()=>`
<ToastMessage
    :messagesWrapper="toastMessages"
    ref="exampleToastMessage"
    @remove-msg-from-array="removeMsgFromArray"
/>
      `),l=_(()=>`
import ToastMessage from "../components/ToastMessage.vue";
      `),m=_(()=>`
let toastMessages = reactive({
    messages: [],
});
const exampleToastMessage = ref();
const popSuccessMessage = () => {
    const id = "msg-" + Date.now();
    exampleToastMessage.value.openMsg(id);
    toastMessages.messages.push({
    id: id,
    type: "success",
    content: "This is a Success Message.",
    });
};
const removeMsgFromArray = (id) => {
    toastMessages.messages = toastMessages.messages.filter(
    (message) => message.id !== id
    );
};
      `);return{toastMessages:n,insertCode:r,importCode:l,templateCode:m,exampleToastMessage:s,popSuccessMessage:c,popWarningMessage:t,popFailedMessage:g,popInfoMessage:u,removeMsgFromArray:e}}},$=a("h3",null,"Toast Message",-1),j=a("p",null,"Toast Message is to display message to user.",-1),V=a("h5",null,"Demo:",-1),q={class:"demo-wrapper"},z=a("h5",null,"Usage:",-1),L=a("h6",null,"Insert component:",-1),N=a("h6",null,"Import:",-1),P=a("h6",null,"Apply in template\uFF1A",-1);function E(n,s,c,t,g,u){const e=v("CustomizedButton"),r=v("ToastMessage"),l=v("highlightjs");return d(),M(y,null,[$,j,V,a("div",q,[i(e,{"button-text":"Success Message",width:"200px",level:"vu-btn-primary",onClickButton:s[0]||(s[0]=m=>t.popSuccessMessage())}),i(e,{"button-text":"Warning Message",width:"200px",level:"vu-btn-primary",onClickButton:s[1]||(s[1]=m=>t.popWarningMessage())}),i(e,{"button-text":"Failed Message",width:"200px",level:"vu-btn-primary",onClickButton:s[2]||(s[2]=m=>t.popFailedMessage())}),i(e,{"button-text":"Info Message",width:"200px",level:"vu-btn-primary",onClickButton:s[3]||(s[3]=m=>t.popInfoMessage())}),i(r,{messagesWrapper:t.toastMessages,ref:"exampleToastMessage",onRemoveMsgFromArray:t.removeMsgFromArray},null,8,["messagesWrapper","onRemoveMsgFromArray"])]),z,L,i(l,{language:"html",code:t.insertCode},null,8,["code"]),N,i(l,{language:"js",code:t.importCode},null,8,["code"]),P,i(l,{language:"js",code:t.templateCode},null,8,["code"])],64)}var G=f(S,[["render",E]]);export{G as default};
