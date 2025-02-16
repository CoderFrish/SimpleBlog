import { createApp } from 'vue'
import app from '@/app.vue'
import elementui from 'element-plus'
import meta from "@/meta/meta.ts";
import router from "@/router/router.ts";
import titlebox from "@/component/titlebox.vue"

import 'element-plus/dist/index.css'
import '@/style/global.css'
import type {article} from "@/vite-env.ts";

const element = createApp(app);

/* apply vue plugin */
element.use(elementui)
element.use(router)
element.use(meta)

/* register vue compnent */
element.component("title-box", titlebox)

element.mount('#app')

export const title = "Frish2021的博客"
export const articles: article[] = [
    {
        title: "第一个文章",
        time: "2025/2/15 - 14:58",
        description: "这是我第一个博客文章",
        category: "测试"
    },
    {
        title: "第二个文章",
        time: "2025/2/16 - 14:58",
        description: "这是我第二个博客文章",
        category: "测试"
    },
    {
        title: "第三个文章",
        time: "2025/2/17 - 14:58",
        description: "这是我第三个博客文章, <h1>Hello World!!</h1>",
        category: "测试"
    }
]
