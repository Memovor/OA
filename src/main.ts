import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { useElementPlus } from "@/plugins/element-plus";

// 导入公共样式
import "./styles/index.scss";

// 引入element-plus样式
import "element-plus/dist/index.css";

const app = createApp(App);

// 按需引入element-plus
useElementPlus(app);

app.use(router).mount("#app");
