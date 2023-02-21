export default {
    proxy: {
        '/api': {
            'target': 'http://localhost:8000',
            'changeOrigin': true, // 发送请求头中host设置为target
            // 'pathRewrite': { '^/api': '' },
        }
    }
}