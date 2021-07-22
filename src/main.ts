import { createApp } from "vue";
import App from "./App.vue";
// import ElementPlus from "element-plus";
import router from "./router/index";

import "element-plus/packages/theme-chalk/src/base.scss";

let app = createApp(App);
// console.log(app.config)
// app.config.devtools = true;
app.use(router)
    // .use(ElementPlus) // 不需要全局引入
    .mount("#app");
