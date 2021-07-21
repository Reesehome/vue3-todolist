import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

let app = createApp(App);
// console.log(app.config)
// app.config.devtools = true;
app.use(router)

app.mount('#app');
