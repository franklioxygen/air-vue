import { createApp } from "vue";
import App from "./App.vue";
import FoundationCss from "foundation-sites/dist/css/foundation.min.css";
import FoundationJs from "foundation-sites";
import router from "./router";
import "highlight.js/styles/stackoverflow-light.css";
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import "./src/assets/base.scss";

const app = createApp(App);
app.use(FoundationCss);
app.use(FoundationJs);
app.use(hljsVuePlugin);
app.use(router);
app.mount("#app");
