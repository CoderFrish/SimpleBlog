<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted} from "vue";
import {useMeta} from "vue-meta";
import {title} from "@/main.ts";

const params = useRoute().params
const article = params.article

onMounted(() => {
  useMeta({
    title: `${title} - ${article}`
  })
})
</script>

<template>
  <el-container>
    <el-header />

    <el-main>
      <div style="line-height: 30px; max-width: clamp(600px, 60vw, 75rem); width: 100%;">
        <h1 style="font-size: 2.3em; margin-bottom: 15px;"># 第一篇文章</h1>
        <span style="color: rgba(79,79,79,0.73)">发布于：2025/2/15 - 14:58</span>
        <div style="flex-grow: 1" />
        <span style="color: rgba(79,79,79,0.73)">作者：Frish2021</span>
        <el-divider />
        这是我第一个文章！！！ <br>
        Hello World!!

        <pre>
          <code>
            public class Main {
              public static void main(String[] args) {
                System.out.println("Hello World!!");
              }
            }
          </code>
        </pre>
        <el-divider />
      </div>
    </el-main>
  </el-container>
</template>
