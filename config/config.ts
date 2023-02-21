import { defineConfig } from "umi";
import routes from "./routes"
import proxyConf from "./proxy";
export default defineConfig({
  routes: routes,
  npmClient: 'npm',
  // mock: false, // NOTE: 如果使用代理，就关闭mock
  // proxy: proxyConf.proxy // 先不是用代理
  history:{
    type:"hash"
  },
  plugins: ["@umijs/plugins/dist/dva"], // 加载dva插件
  dva:{}, // 开启dva
});
