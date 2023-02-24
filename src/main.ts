import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/style/reset.css";
import { store, key } from "./store";
import router from "./router/index";

createApp(App).mount("#app");
createApp(App).use(router).mount("#app");
createApp(App).use(store, key).use(router).mount("#app");
