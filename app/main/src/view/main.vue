<script setup lang="ts">
import {onMounted} from "vue";
import {useMeta} from "vue-meta";
import {articles, title} from "@/main.ts";

import TitleBox from "@/component/titlebox.vue";
import {Document, Folder} from "@element-plus/icons-vue";

onMounted(() => {
  useMeta({
    title: `${title}`
  })
})
</script>

<template>
  <el-container>
    <el-header class="el-header-main">
      <title-box main="Frish2021的博客" sub="「Hello World!!」"/>
    </el-header>

    <el-main>
      <div style="line-height: 30px; max-width: clamp(600px, 70vw, 75rem); width: 100%;">
        <el-empty v-if="articles.length <= 0" description="此人未发布过文章。。。"/>

        <div v-for="article in articles" style="margin-bottom: 20px;">
          <el-divider />
          <div style="display: flex; align-items: center;">
            <el-icon style="font-size: 1.2em"><Document /></el-icon>
            <el-link :underline="false" :href="`/article/${article.title}`" type="primary" style="margin-left: 5px; font-size: 1.2em">{{ article.title }}</el-link>
            <div style="flex-grow: 1"/>
            <span style="margin-left: 5px; color: rgba(119,119,119,0.74); font-size: .5em">{{ article.time }}</span>
          </div>

          <div style="font-size: 0.8em">
            {{ article.description }}
          </div>

          <div style="display: flex; align-items: center; color: rgba(97,97,97,0.64)">
            <el-icon size="15px"><Folder /></el-icon>
            <span style="margin-left: 4px; font-size: 0.8em;">{{ article.category }}</span>
          </div>
        </div>

        <el-pagination v-if="articles.length > 0" layout="prev, pager, next" :total="1" class="el-pagination-main"/>
      </div>
    </el-main>
  </el-container>
</template>

<style>
.el-header-main {
  height: 100vh !important;
  background-image: url("/background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
