import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import axios from "./assets/intercept";

import "element-plus/packages/theme-chalk/src/base.scss";

let app = createApp(App);
// console.log(app.config)
// app.config.devtools = true;
app.config.globalProperties.$axios = axios

app.use(router)
    // .use(ElementPlus) // 不需要全局引入
    .mount("#app");
