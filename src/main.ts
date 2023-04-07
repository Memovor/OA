import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { useElementPlus } from "@/plugins/element-plus";

// 引入重置样式
import "./style/reset.scss";
// 导入公共样式
import "./style/index.scss";
// 导入tailwind.css，防止vite热更新慢
import "./style/tailwind.css";
// 引入element-plus样式
import "element-plus/dist/index.css";
// 导入字体图标
import "./assets/iconfont/iconfont.js";
import "./assets/iconfont/iconfont.css";

const app = createApp(App);

// 按需引入element-plus
useElementPlus(app);

app.use(router).mount("#app");
