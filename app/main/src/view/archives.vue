<script setup lang="ts">
import {onMounted} from "vue";
import {useMeta} from "vue-meta";
import {articles, title} from "@/main.ts";
import {Search} from "@element-plus/icons-vue";

onMounted(() => {
  useMeta({
    title: `${title} - 归档`
  })
})
</script>

<template>
  <el-container>
    <el-header />

    <el-main>
      <div style="line-height: 30px; max-width: clamp(600px, 60vw, 75rem); width: 100%;">
        <h1 style="font-size: 2em"># 归档</h1>
        <el-input style="width: calc(100% - 10px); margin-top: 12px; margin-bottom: 5px; margin-left: 0.5%" placeholder="输入你想搜索的文章名称。">
          <template #prefix>
            <el-icon class="el-input__icon"><Search /></el-icon>
          </template>

          <template #append>
            <el-button type="primary">搜索</el-button>
          </template>
        </el-input>
        <el-divider />
        <el-empty v-if="articles.length <= 0" description="此人未发布过文章。。。"/>
        <el-timeline v-if="articles.length > 0" style="max-width: 100%">
          <el-timeline-item v-for = "article in articles" :timestamp="article.time" placement="top">
            <el-link :underline="false" :href="`/article/${article.title}`" type="primary">{{ article.title }}</el-link>
          </el-timeline-item>
        </el-timeline>

        <el-pagination v-if="articles.length > 0" layout="prev, pager, next" :total="10"/>
        <el-divider />
      </div>
    </el-main>
  </el-container>
</template>
