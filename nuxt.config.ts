export default defineNuxtConfig({
    serverMiddleware: [
        { path: '/api', handler: '~/middleware/proxy.js' },
    ],
    css: [
        'vuetify/styles/main.sass',
        '@mdi/font/css/materialdesignicons.css'
    ],
    build: {
        transpile: ['vuetify']
    },
    server: {
    port: process.env.PORT || 3000, // 设置端口号
    },
})

