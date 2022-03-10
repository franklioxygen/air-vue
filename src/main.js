import { createApp } from "vue";
import App from "./App.vue";
import FoundationCss from "foundation-sites/dist/css/foundation.min.css";
import FoundationJs from "foundation-sites";
import router from "./router";
import "./assets/base.css";

const app = createApp(App);
app.use(FoundationCss);
app.use(FoundationJs);
app.use(router);
app.mount("#app");
