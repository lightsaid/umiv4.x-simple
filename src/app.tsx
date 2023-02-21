/*
运行时配置
运行时配置和配置的区别是他跑在浏览器端，基于此，我们可以在这里写函数、tsx、import 浏览器端依赖等等，注意不要引入 node 依赖。
*/

import { defineApp, matchRoutes } from 'umi';
// export default defineApp({
//     layout: () => {
//         return {
//             title: 'umi',
//         };
//     },
// });

// 路由拦截
export function onRouteChange({ clientRoutes, location }) {
    const route = matchRoutes(clientRoutes, location.pathname)?.pop()?.route;
    console.log("route: ", route)
    if (route) {
        document.title = route?.title || '';
    }
}