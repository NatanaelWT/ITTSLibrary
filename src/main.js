import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes.js";
import "./assets/main.css";
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";

createApp(App).use(router).use(VueChartkick).mount("#app");
