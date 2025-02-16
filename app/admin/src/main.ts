import { createApp } from 'vue'
import app from '@/app.vue'
import elementui from 'element-plus'
import router from "@/router/router.ts";

import '@/style/global.css'
import 'element-plus/dist/index.css'

export const title = "Frish2021的博客"
const element = createApp(app);

/* apply vue plugin */
element.use(elementui)
element.use(router)

document.title = `${title} - 管理员`
element.mount('#app')
