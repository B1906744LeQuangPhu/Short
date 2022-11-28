import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import "./assets/main.css";
import "./assets/test.js";

import router from "./router";


createApp(App).use(router).mount("#app");