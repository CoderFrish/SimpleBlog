import { createApp } from 'vue'
import app from '@/app.vue'
import elementui from 'element-plus'
import meta from "@/meta/meta.ts";
import router from "@/router/router.ts";
import titlebox from "@/component/titlebox.vue"

import 'element-plus/dist/index.css'
import '@/style.css'
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
        title: "传统计算的工作原理",
        time: "2025/2/15 - 14:58",
        description: "传统计算机基于经典物理学原理，依赖二进制数字（0和1）来表示和处理信息。这些信息单位称为“比特”（bit）。在传统计算中，比特只能处于0或1的状态，并通过一系列逻辑操作来处理和计算数据。\n" +
            "\n" +
            "传统计算的核心优势在于其稳定性和可靠性，经过几十年的发展，已形成了成熟的硬件和软件生态。然而，当处理问题的规模增大、计算复杂度提高时，传统计算机的性能往往会达到瓶颈，特别是在模拟量子现象、大规模数据分析以及优化问题等领域。",
        category: "技术"
    },
    {
        title: "量子计算与传统计算的对比",
        time: "2025/2/16 - 14:58",
        description: "随着计算科学的飞速发展，量子计算逐渐成为了未来计算技术的重要方向。量子计算不仅在理论上突破了传统计算的局限，还可能彻底改变我们解决复杂问题的方式。然而，传统计算与量子计算之间有着显著的差异，了解这些差异对于我们理解未来计算的潜力至关重要。",
        category: "技术"
    },
    {
        title: "量子计算的工作原理",
        time: "2025/2/17 - 14:58",
        description: "量子计算机基于量子力学原理，其核心思想是利用“量子比特”（qubit）来进行数据处理。量子比特与经典比特的最大区别在于它可以同时处于多种状态，称为“叠加态”。这一特性使得量子计算机能够在某些任务上进行大规模并行计算，从而在理论上提供比传统计算机更高的计算能力。\n" +
            "\n" +
            "量子计算的另一个重要特性是“量子纠缠”。通过量子纠缠，量子比特之间可以在不同的计算过程中保持相互关联，使得信息可以跨越较大的距离同时进行处理。量子计算利用这些特性来处理一些经典计算无法高效解决的复杂问题，如量子化学模拟、优化问题、密码破解等。",
        category: "技术"
    }
]
