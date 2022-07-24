import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";
import "./app.css";

const app = createApp(App);
// store.actions.initializeWeather();

app.mount("#app");

import "./app.css";
