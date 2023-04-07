import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import DefineOptions from "unplugin-vue-define-options/vite";

/** 路径查找 */
const pathResolve = (dir: string): string => {
    return resolve(__dirname, ".", dir);
};

/** 设置别名 */
const alias: Record<string, string> = {
    "@": pathResolve("src"),
    "@build": pathResolve("build")
};

export default defineConfig({
    plugins: [vue(), DefineOptions()],
    css: {
        postcss: {
            plugins: [require("tailwindcss"), require("autoprefixer")]
        }
    },
    resolve: {
        alias
    },
    // 服务端渲染
    server: {
        // 是否开启 https
        https: false,
        // 端口号
        port: 7916,
        host: "0.0.0.0",
        // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
        proxy: {}
    }
});
