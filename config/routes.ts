export default [
    { path: "/", component: "index", title:"首页" },
    { path: "/docs", component: "docs", title:"个人中心" },
    // 重定向
    { path: '/information', redirect: '/information/news' },
    // 子路由
    {
        path: "/information", 
        component:"@/pages/information/index",
        routes: [
            { path: "news", component:"@/pages/information/news", title:"资讯" },
            { path: "hots", component:"@/pages/information/hots", title:"热点" },
        ]
    },
    { path: "/user/:id", component: "user", title:"用户" },
    { path: "/about", component: "about", title:"关于" },
    { path: "/abouts", component: "about", title:"关于" },
]