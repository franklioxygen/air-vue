import{_}from"./index.34817873.js";import{C as b}from"./CustomizedButton.cea7bf16.js";import{D as I}from"./deviceType.b60ca1f3.js";import{r as y,o as v,c as x,a as t,C as p,t as M,j as P,I as C,s as d,f as c,g as a,F as B}from"./vendor.54853348.js";import{F as S}from"./FooterMessage.e59c754a.js";const w={name:"InlineMessage",props:{expanded:{type:Boolean,default:!1},type:{type:String,default:"info"},content:{type:String,default:""}},emits:["close-msg"],setup(n){const e=y({status:n.expanded?"expanded":"collapsed",content:n.content}),o=()=>{new Promise(l=>{s(),l()}).then(()=>{setTimeout(()=>{e.status="expanded",e.content=n.content},300)})},s=()=>{e.content="",e.status="collapsed"};return{messageProps:e,openMsg:o,closeMsg:s}}};function D(n,e,o,s,l,m){return v(),x("div",{class:p(["inline-msg-wrapper",s.messageProps.status])},[t("div",{class:p(["icons-msg","icons",o.type])},null,2),t("div",{class:p(["inline-msg-content",s.messageProps.status])},[t("div",{class:p(["msg-type-name",o.type])},M(o.type),3),P(" "+M(s.messageProps.content),1)],2),t("div",{class:p(["icon-close icons",s.messageProps.status]),onClick:e[0]||(e[0]=i=>s.closeMsg())},null,2)],2)}var T=_(w,[["render",D],["__scopeId","data-v-5fa1f13b"]]);const F={name:"InlineMessageDemo",components:{InlineMessage:T,CustomizedButton:b,DataTable:I,FooterMessage:S},setup(){let n=y({type:"",content:"",expanded:!1});const e=C(),o=()=>{e.value.openMsg(),n.type="success",n.content=`
        This is a Success Message. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Vestibulum eu pharetra turpis, 
        ut congue ipsum. Nunc tincidunt ipsum ullamcorper ornare 
        fringilla. Mauris et accumsan elit, at lacinia erat. 
        Phasellus id interdum tortor. Morbi ac nunc dolor. 
        Vivamus consequat eleifend nulla in aliquam. Proin 
        facilisis faucibus sem sit amet placerat.`},s=()=>{e.value.openMsg(),n.type="warning",n.content="This is a Warning Message."},l=()=>{e.value.openMsg(),n.type="failed",n.content="This is a Failed Message."},m=()=>{e.value.openMsg(),n.type="info",n.content="This is a Info Message."},i=d(()=>`
<InlineMessage
    :type="messageProps.type"
    :content="messageProps.content"
    :expanded="messageProps.expanded"
    ref="exampleInlineMessage"
/>
      `),g=d(()=>`
import { InlineMessage } from "air-vue";
      `),u=d(()=>`
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
      `),r=d(()=>({title:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"type",type:"String",required:"true",default:"info",description:"message type, include success, warning, failed, info"},{name:"content",type:"String",required:"true",default:"",description:"content of message"},{name:"expanded",type:"Boolean",required:"false",default:"false",description:"whether message is expanded"},{name:"ref",type:"String",required:"true",default:"",description:"identifier of message"}]}));return{messageProps:n,insertCode:i,importCode:g,templateCode:u,tableProps:r,exampleInlineMessage:e,popSuccessMessage:o,popWarningMessage:s,popFailedMessage:l,popInfoMessage:m}}},q=t("h3",null,"Inline Message",-1),k=t("p",null,"Inline Message is to display message to user.",-1),j=t("h5",null,"Demo:",-1),N={class:"demo-wrapper"},V=t("h5",null,"Usage:",-1),z=t("h6",null,"Insert component:",-1),W=t("h6",null,"Import:",-1),E=t("h6",null,"Apply in template\uFF1A",-1);function A(n,e,o,s,l,m){const i=c("CustomizedButton"),g=c("InlineMessage"),u=c("DataTable"),r=c("highlightjs"),h=c("FooterMessage");return v(),x(B,null,[q,k,j,t("div",N,[a(i,{id:"demo-inline-success-message","button-text":"Success Message",width:"200px",level:"av-btn-primary",onClickButton:e[0]||(e[0]=f=>s.popSuccessMessage())}),a(i,{id:"demo-inline-warning-message","button-text":"Warning Message",width:"200px",level:"av-btn-primary",onClickButton:e[1]||(e[1]=f=>s.popWarningMessage())}),a(i,{id:"demo-inline-failed-message","button-text":"Failed Message",width:"200px",level:"av-btn-primary",onClickButton:e[2]||(e[2]=f=>s.popFailedMessage())}),a(i,{id:"demo-inline-info-message","button-text":"Info Message",width:"200px",level:"av-btn-primary",onClickButton:e[3]||(e[3]=f=>s.popInfoMessage())}),a(g,{type:s.messageProps.type,content:s.messageProps.content,expanded:s.messageProps.expanded,ref:"exampleInlineMessage"},null,8,["type","content","expanded"])]),a(u,{"table-props":s.tableProps},null,8,["table-props"]),V,z,a(r,{language:"html",code:s.insertCode},null,8,["code"]),W,a(r,{language:"js",code:s.importCode},null,8,["code"]),E,a(r,{language:"js",code:s.templateCode},null,8,["code"]),a(h)],64)}var J=_(F,[["render",A]]);export{J as default};
