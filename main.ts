import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/github.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '../mock/index.js'
import './style.css'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block: any) => {
        hljs.highlightBlock(block)
    })
})
    .use(router)
    .use(ElementPlus)
    .mount('#app')
