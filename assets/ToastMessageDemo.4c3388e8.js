import{_ as h}from"./index.4c4601d4.js";import{o as d,c as M,F as f,h as T,a as o,C as p,t as x,r as C,I as F,s as _,f as v,g as i}from"./vendor.54853348.js";import{C as w}from"./CustomizedButton.9d9cafea.js";const b={name:"ToastMessage",props:{messagesWrapper:{type:Object,default:()=>({})}},emits:["remove-msg-from-array"],setup(n,{emit:s}){const l=()=>new Promise(e=>{requestAnimationFrame(e)}),t=e=>document.querySelector(e)===null?l().then(()=>t(e)):Promise.resolve(!0);return{openMsg:e=>{t(`#${e}`).then(()=>{const r=document.getElementById(e);r.classList.add("expanded"),r.classList.remove("collapsed")})},closeMsg:e=>{s("remove-msg-from-array",e)}}}},B={class:"toast-msgs-wrapper"},k=["id"],D=["innerHTML"],A=["onClick"];function I(n,s,l,t,g,u){return d(),M("div",B,[(d(!0),M(f,null,T(l.messagesWrapper.messages,(e,r)=>(d(),M("div",{key:r},[o("div",{class:p(["toast-msg","collapsed",e.status]),id:e.id},[o("div",{class:p(["icons-msg","icons",e.type])},null,2),o("div",{class:p(["toast-msg-content",e.status])},[o("div",{class:p(["msg-type-name",e.type])},x(e.type),3),o("div",{innerHTML:e.content},null,8,D)],2),o("div",{class:p(["icon-close icons",e.status]),onClick:c=>t.closeMsg(e.id)},null,10,A)],10,k)]))),128))])}var W=h(b,[["render",I],["__scopeId","data-v-44fddf62"]]);const $={name:"ToastMessageDemo",components:{ToastMessage:W,CustomizedButton:w},setup(){let n=C({messages:[]});const s=F(),l=()=>{const a="msg-"+Date.now();s.value.openMsg(a),n.messages.push({id:a,type:"success",content:`
        This is a Success Message. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Vestibulum eu pharetra turpis, 
        ut congue ipsum. Nunc tincidunt ipsum ullamcorper ornare 
        fringilla. Mauris et accumsan elit, at lacinia erat. 
        Phasellus id interdum tortor. Morbi ac nunc dolor. 
        Vivamus consequat eleifend nulla in aliquam. Proin 
        facilisis faucibus sem sit amet placerat.`})},t=()=>{const a="msg-"+Date.now();s.value.openMsg(a),n.messages.push({id:a,type:"warning",content:"This is a Warning Message. For more information, please visit <a>read more</a>."})},g=()=>{const a="msg-"+Date.now();s.value.openMsg(a),n.messages.push({id:a,type:"failed",content:"This is a Failed Message."})},u=()=>{const a="msg-"+Date.now();s.value.openMsg(a),n.messages.push({id:a,type:"info",content:"This is a Info Message."})},e=a=>{n.messages=n.messages.filter(y=>y.id!==a)},r=_(()=>`
<ToastMessage
    :messagesWrapper="toastMessages"
    ref="exampleToastMessage"
    @remove-msg-from-array="removeMsgFromArray"
/>
      `),c=_(()=>`
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
      `);return{toastMessages:n,insertCode:r,importCode:c,templateCode:m,exampleToastMessage:s,popSuccessMessage:l,popWarningMessage:t,popFailedMessage:g,popInfoMessage:u,removeMsgFromArray:e}}},S=o("h3",null,"Toast Message",-1),L=o("p",null,"Toast Message is to display message to user.",-1),j=o("h5",null,"Demo:",-1),q={class:"demo-wrapper"},z=o("h5",null,"Usage:",-1),P=o("h6",null,"Insert component:",-1),V=o("h6",null,"Import:",-1),E=o("h6",null,"Apply in template\uFF1A",-1);function N(n,s,l,t,g,u){const e=v("CustomizedButton"),r=v("ToastMessage"),c=v("highlightjs");return d(),M(f,null,[S,L,j,o("div",q,[i(e,{"button-text":"Success Message",width:"200px",level:"vu-btn-primary",onClickButton:s[0]||(s[0]=m=>t.popSuccessMessage())}),i(e,{"button-text":"Warning Message",width:"200px",level:"vu-btn-primary",onClickButton:s[1]||(s[1]=m=>t.popWarningMessage())}),i(e,{"button-text":"Failed Message",width:"200px",level:"vu-btn-primary",onClickButton:s[2]||(s[2]=m=>t.popFailedMessage())}),i(e,{"button-text":"Info Message",width:"200px",level:"vu-btn-primary",onClickButton:s[3]||(s[3]=m=>t.popInfoMessage())}),i(r,{messagesWrapper:t.toastMessages,ref:"exampleToastMessage",onRemoveMsgFromArray:t.removeMsgFromArray},null,8,["messagesWrapper","onRemoveMsgFromArray"])]),z,P,i(c,{language:"html",code:t.insertCode},null,8,["code"]),V,i(c,{language:"js",code:t.importCode},null,8,["code"]),E,i(c,{language:"js",code:t.templateCode},null,8,["code"])],64)}var U=h($,[["render",N]]);export{U as default};
