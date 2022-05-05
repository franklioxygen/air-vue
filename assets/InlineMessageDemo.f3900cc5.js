import{_ as y}from"./index.2f688c4f.js";import{C as h}from"./CustomizedButton.f2a85b4f.js";import{D as b}from"./deviceType.9a00222c.js";import{r as _,o as v,c as x,a as t,C as p,t as M,j as I,I as P,s as c,f as d,g as a,F as C}from"./vendor.54853348.js";const B={name:"InlineMessage",props:{expanded:{type:Boolean,default:!1},type:{type:String,default:"info"},content:{type:String,default:""}},emits:["close-msg"],setup(n){const e=_({status:n.expanded?"expanded":"collapsed",content:n.content}),o=()=>{new Promise(l=>{s(),l()}).then(()=>{setTimeout(()=>{e.status="expanded",e.content=n.content},300)})},s=()=>{e.content="",e.status="collapsed"};return{messageProps:e,openMsg:o,closeMsg:s}}};function S(n,e,o,s,l,m){return v(),x("div",{class:p(["inline-msg-wrapper",s.messageProps.status])},[t("div",{class:p(["icons-msg","icons",o.type])},null,2),t("div",{class:p(["inline-msg-content",s.messageProps.status])},[t("div",{class:p(["msg-type-name",o.type])},M(o.type),3),I(" "+M(s.messageProps.content),1)],2),t("div",{class:p(["icon-close icons",s.messageProps.status]),onClick:e[0]||(e[0]=i=>s.closeMsg())},null,2)],2)}var w=y(B,[["render",S],["__scopeId","data-v-5fa1f13b"]]);const D={name:"InlineMessageDemo",components:{InlineMessage:w,CustomizedButton:h,DataTable:b},setup(){let n=_({type:"",content:"",expanded:!1});const e=P(),o=()=>{e.value.openMsg(),n.type="success",n.content=`
        This is a Success Message. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Vestibulum eu pharetra turpis, 
        ut congue ipsum. Nunc tincidunt ipsum ullamcorper ornare 
        fringilla. Mauris et accumsan elit, at lacinia erat. 
        Phasellus id interdum tortor. Morbi ac nunc dolor. 
        Vivamus consequat eleifend nulla in aliquam. Proin 
        facilisis faucibus sem sit amet placerat.`},s=()=>{e.value.openMsg(),n.type="warning",n.content="This is a Warning Message."},l=()=>{e.value.openMsg(),n.type="failed",n.content="This is a Failed Message."},m=()=>{e.value.openMsg(),n.type="info",n.content="This is a Info Message."},i=c(()=>`
<InlineMessage
    :type="messageProps.type"
    :content="messageProps.content"
    :expanded="messageProps.expanded"
    ref="exampleInlineMessage"
/>
      `),u=c(()=>`
import { InlineMessage } from "air-vue";
      `),g=c(()=>`
let messageProps = reactive({
    type: "",
    content: "",
    expanded: false,
});
const exampleInlineMessage = ref();
const popSuccessMessage = () => {
    exampleInlineMessage.value.openMsg();
    messageProps.type = "success";
    messageProps.content = "This is a Success Message.";
};
...
      `),r=c(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"type",type:"String",required:"true",default:"info",description:"message type, include success, warning, failed, info"},{name:"content",type:"String",required:"true",default:"",description:"content of message"},{name:"expanded",type:"Boolean",required:"false",default:"false",description:"whether message is expanded"},{name:"ref",type:"String",required:"true",default:"",description:"identifier of message"}]}));return{messageProps:n,insertCode:i,importCode:u,templateCode:g,tableProps:r,exampleInlineMessage:e,popSuccessMessage:o,popWarningMessage:s,popFailedMessage:l,popInfoMessage:m}}},T=t("h3",null,"Inline Message",-1),q=t("p",null,"Inline Message is to display message to user.",-1),k=t("h5",null,"Demo:",-1),F={class:"demo-wrapper"},j=t("h5",null,"Usage:",-1),N=t("h6",null,"Insert component:",-1),V=t("h6",null,"Import:",-1),z=t("h6",null,"Apply in template\uFF1A",-1);function W(n,e,o,s,l,m){const i=d("CustomizedButton"),u=d("InlineMessage"),g=d("DataTable"),r=d("highlightjs");return v(),x(C,null,[T,q,k,t("div",F,[a(i,{id:"demo-inline-success-message","button-text":"Success Message",width:"200px",level:"av-btn-primary",onClickButton:e[0]||(e[0]=f=>s.popSuccessMessage())}),a(i,{id:"demo-inline-warning-message","button-text":"Warning Message",width:"200px",level:"av-btn-primary",onClickButton:e[1]||(e[1]=f=>s.popWarningMessage())}),a(i,{id:"demo-inline-failed-message","button-text":"Failed Message",width:"200px",level:"av-btn-primary",onClickButton:e[2]||(e[2]=f=>s.popFailedMessage())}),a(i,{id:"demo-inline-info-message","button-text":"Info Message",width:"200px",level:"av-btn-primary",onClickButton:e[3]||(e[3]=f=>s.popInfoMessage())}),a(u,{type:s.messageProps.type,content:s.messageProps.content,expanded:s.messageProps.expanded,ref:"exampleInlineMessage"},null,8,["type","content","expanded"])]),a(g,{"table-props":s.tableProps},null,8,["table-props"]),j,N,a(r,{language:"html",code:s.insertCode},null,8,["code"]),V,a(r,{language:"js",code:s.importCode},null,8,["code"]),z,a(r,{language:"js",code:s.templateCode},null,8,["code"])],64)}var L=y(D,[["render",W]]);export{L as default};
