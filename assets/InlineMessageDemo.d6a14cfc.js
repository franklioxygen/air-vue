import{_ as f}from"./index.ae7c253e.js";import{C as y}from"./CustomizedButton.e39284f1.js";/* empty css                                                                 */import{r as _,o as v,c as x,a as t,C as p,t as M,j as h,I,s as m,f as u,g as a,F as C}from"./vendor.54853348.js";const P={name:"InlineMessage",props:{expanded:{type:Boolean,default:!1},type:{type:String,default:"info"},content:{type:String,default:""}},emits:["close-msg"],setup(n){const e=_({status:n.expanded?"expanded":"collapsed",content:n.content}),o=()=>{new Promise(l=>{s(),l()}).then(()=>{setTimeout(()=>{e.status="expanded",e.content=n.content},300)})},s=()=>{e.content="",e.status="collapsed"};return{messageProps:e,openMsg:o,closeMsg:s}}};function b(n,e,o,s,l,r){return v(),x("div",{class:p(["inline-msg-wrapper",s.messageProps.status])},[t("div",{class:p(["icons-msg","icons",o.type])},null,2),t("div",{class:p(["inline-msg-content",s.messageProps.status])},[t("div",{class:p(["msg-type-name",o.type])},M(o.type),3),h(" "+M(s.messageProps.content),1)],2),t("div",{class:p(["icon-close icons",s.messageProps.status]),onClick:e[0]||(e[0]=i=>s.closeMsg())},null,2)],2)}var B=f(P,[["render",b],["__scopeId","data-v-5fa1f13b"]]);const S={name:"InlineMessageDemo",components:{InlineMessage:B,CustomizedButton:y},setup(){let n=_({type:"",content:"",expanded:!1});const e=I(),o=()=>{e.value.openMsg(),n.type="success",n.content=`
        This is a Success Message. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Vestibulum eu pharetra turpis, 
        ut congue ipsum. Nunc tincidunt ipsum ullamcorper ornare 
        fringilla. Mauris et accumsan elit, at lacinia erat. 
        Phasellus id interdum tortor. Morbi ac nunc dolor. 
        Vivamus consequat eleifend nulla in aliquam. Proin 
        facilisis faucibus sem sit amet placerat.`},s=()=>{e.value.openMsg(),n.type="warning",n.content="This is a Warning Message."},l=()=>{e.value.openMsg(),n.type="failed",n.content="This is a Failed Message."},r=()=>{e.value.openMsg(),n.type="info",n.content="This is a Info Message."},i=m(()=>`
<InlineMessage
    :type="messageProps.type"
    :content="messageProps.content"
    :expanded="messageProps.expanded"
    ref="exampleInlineMessage"
/>
      `),d=m(()=>`
import { InlineMessage } from "air-vue";
      `),c=m(()=>`
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
      `);return{messageProps:n,insertCode:i,importCode:d,templateCode:c,exampleInlineMessage:e,popSuccessMessage:o,popWarningMessage:s,popFailedMessage:l,popInfoMessage:r}}},w=t("h3",null,"Inline Message",-1),k=t("p",null,"Inline Message is to display message to user.",-1),T=t("h5",null,"Demo:",-1),F={class:"demo-wrapper"},j=t("h5",null,"Usage:",-1),D=t("h6",null,"Insert component:",-1),V=t("h6",null,"Import:",-1),z=t("h6",null,"Apply in template\uFF1A",-1);function N(n,e,o,s,l,r){const i=u("CustomizedButton"),d=u("InlineMessage"),c=u("highlightjs");return v(),x(C,null,[w,k,T,t("div",F,[a(i,{"button-text":"Success Message",width:"200px",level:"av-btn-primary",onClickButton:e[0]||(e[0]=g=>s.popSuccessMessage())}),a(i,{"button-text":"Warning Message",width:"200px",level:"av-btn-primary",onClickButton:e[1]||(e[1]=g=>s.popWarningMessage())}),a(i,{"button-text":"Failed Message",width:"200px",level:"av-btn-primary",onClickButton:e[2]||(e[2]=g=>s.popFailedMessage())}),a(i,{"button-text":"Info Message",width:"200px",level:"av-btn-primary",onClickButton:e[3]||(e[3]=g=>s.popInfoMessage())}),a(d,{type:s.messageProps.type,content:s.messageProps.content,expanded:s.messageProps.expanded,ref:"exampleInlineMessage"},null,8,["type","content","expanded"])]),j,D,a(c,{language:"html",code:s.insertCode},null,8,["code"]),V,a(c,{language:"js",code:s.importCode},null,8,["code"]),z,a(c,{language:"js",code:s.templateCode},null,8,["code"])],64)}var L=f(S,[["render",N]]);export{L as default};
