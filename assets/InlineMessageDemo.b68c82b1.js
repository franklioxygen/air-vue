import{_}from"./index.1d7aaf13.js";import{r as v,o as f,c as x,a as t,C as p,t as M,j as y,I,s as u,f as m,g as a,F as h}from"./vendor.54853348.js";import{C}from"./CustomizedButton.812359ef.js";const P={name:"InlineMessage",props:{expanded:{type:Boolean,default:!1},type:{type:String,default:"info"},content:{type:String,default:""}},emits:["close-msg"],setup(n){const e=v({status:n.expanded?"expanded":"collapsed",content:n.content}),o=()=>{new Promise(l=>{s(),l()}).then(()=>{setTimeout(()=>{e.status="expanded",e.content=n.content},300)})},s=()=>{e.content="",e.status="collapsed"};return{messageProps:e,openMsg:o,closeMsg:s}}};function b(n,e,o,s,l,r){return f(),x("div",{class:p(["inline-msg-wrapper",s.messageProps.status])},[t("div",{class:p(["icons-msg","icons",o.type])},null,2),t("div",{class:p(["inline-msg-content",s.messageProps.status])},[t("div",{class:p(["msg-type-name",o.type])},M(o.type),3),y(" "+M(s.messageProps.content),1)],2),t("div",{class:p(["icon-close icons",s.messageProps.status]),onClick:e[0]||(e[0]=i=>s.closeMsg())},null,2)],2)}var B=_(P,[["render",b],["__scopeId","data-v-5fa1f13b"]]);const S={name:"InlineMessageDemo",components:{InlineMessage:B,CustomizedButton:C},setup(){let n=v({type:"",content:"",expanded:!1});const e=I(),o=()=>{e.value.openMsg(),n.type="success",n.content=`
        This is a Success Message. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Vestibulum eu pharetra turpis, 
        ut congue ipsum. Nunc tincidunt ipsum ullamcorper ornare 
        fringilla. Mauris et accumsan elit, at lacinia erat. 
        Phasellus id interdum tortor. Morbi ac nunc dolor. 
        Vivamus consequat eleifend nulla in aliquam. Proin 
        facilisis faucibus sem sit amet placerat.`},s=()=>{e.value.openMsg(),n.type="warning",n.content="This is a Warning Message."},l=()=>{e.value.openMsg(),n.type="failed",n.content="This is a Failed Message."},r=()=>{e.value.openMsg(),n.type="info",n.content="This is a Info Message."},i=u(()=>`
<InlineMessage
    :type="messageProps.type"
    :content="messageProps.content"
    :expanded="messageProps.expanded"
    ref="exampleInlineMessage"
/>
      `),g=u(()=>`
import InlineMessage from "../components/InlineMessage.vue";
      `),c=u(()=>`
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
      `);return{messageProps:n,insertCode:i,importCode:g,templateCode:c,exampleInlineMessage:e,popSuccessMessage:o,popWarningMessage:s,popFailedMessage:l,popInfoMessage:r}}},w=t("h3",null,"Inline Message",-1),k=t("p",null,"Inline Message is to display message to user.",-1),T=t("h5",null,"Demo:",-1),F={class:"demo-wrapper"},j=t("h5",null,"Usage:",-1),D=t("h6",null,"Insert component:",-1),V=t("h6",null,"Import:",-1),z=t("h6",null,"Apply in template\uFF1A",-1);function N(n,e,o,s,l,r){const i=m("CustomizedButton"),g=m("InlineMessage"),c=m("highlightjs");return f(),x(h,null,[w,k,T,t("div",F,[a(i,{"button-text":"Success Message",width:"200px",level:"vu-btn-primary",onClickButton:e[0]||(e[0]=d=>s.popSuccessMessage())}),a(i,{"button-text":"Warning Message",width:"200px",level:"vu-btn-primary",onClickButton:e[1]||(e[1]=d=>s.popWarningMessage())}),a(i,{"button-text":"Failed Message",width:"200px",level:"vu-btn-primary",onClickButton:e[2]||(e[2]=d=>s.popFailedMessage())}),a(i,{"button-text":"Info Message",width:"200px",level:"vu-btn-primary",onClickButton:e[3]||(e[3]=d=>s.popInfoMessage())}),a(g,{type:s.messageProps.type,content:s.messageProps.content,expanded:s.messageProps.expanded,ref:"exampleInlineMessage"},null,8,["type","content","expanded"])]),j,D,a(c,{language:"html",code:s.insertCode},null,8,["code"]),V,a(c,{language:"js",code:s.importCode},null,8,["code"]),z,a(c,{language:"js",code:s.templateCode},null,8,["code"])],64)}var E=_(S,[["render",N]]);export{E as default};
