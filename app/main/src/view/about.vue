<script setup lang="ts">
import { title } from '@/main';
import {onMounted} from "vue";
import {useMeta} from "vue-meta";

onMounted(() => {
  useMeta({
    title: `${title} - 关于`
  })
})
</script>

<template>
  <el-container>
    <el-header />

    <el-main>
      <div style="line-height: 30px; max-width: clamp(600px, 60vw, 75rem); width: 100%;">
        <h1 style="font-size: 2em; margin-bottom: 5px;"># 关于我</h1>
        <span style="color: rgba(79,79,79,0.73)">最后编辑：2025/2/15 - 16:05</span>
        <el-divider />
        <span>一名来自中国广东的学生。</span> <br>
        <span>主要写java和kotlin的一些小玩意，Java和Kotlin是跳着学的。</span>
        <h3>Top languages</h3>
        <el-image src="https://github-readme-stats.vercel.app/api/top-langs/?username=CoderFrish&layout=compact&locale=cn"/>
        <h3>Programming Language</h3>
        <el-image src="https://img.shields.io/badge/-Java-blue?style=for-the-badge&logo=OpenJDK&logoColor=white"/>
        <el-image src="https://img.shields.io/badge/-Kotlin-blue?style=for-the-badge&logo=kotlin&logoColor=white"/>
        <el-image src="https://img.shields.io/badge/-Groovy-blue?style=for-the-badge&logo=apachegroovy&logoColor=white"/>
        <el-image src="https://img.shields.io/badge/-JavaScript-blue?style=for-the-badge&logo=javascript&logoColor=white"/>
        <el-image src="https://img.shields.io/badge/-TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=white"/>
        <h3>Tools</h3>
        <el-image src="https://img.shields.io/badge/-IntelliJ_IDEA-black?style=for-the-badge&logo=intellijidea&logoColor=white"/>
        <el-image src="https://img.shields.io/badge/-Visual_Studio_Code-black?style=for-the-badge&logo=materialdesignicons&logoColor=white"/>
        <el-image src="https://img.shields.io/badge/-Gradle-black?style=for-the-badge&logo=gradle&logoColor=white"/>
        <el-image src="https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logo=node.js&logoColor=white"/>
        <el-image src="https://img.shields.io/badge/-NPM-black?style=for-the-badge&logo=npm&logoColor=white"/>
        <el-image src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logo=vite&logoColor=white"/>
        <el-image src="https://img.shields.io/badge/-Git-black?style=for-the-badge&logo=git&logoColor=white"/>
        <el-image src="https://img.shields.io/badge/Github-black?style=for-the-badge&logo=github&logoColor=white"/>
        <el-image src="https://img.shields.io/badge/Paint.NET-black?style=for-the-badge&logo=materialdesignicons&logoColor=white"/>
        <h3>Framework</h3>
        <el-image src="https://img.shields.io/badge/Springboot-green?style=for-the-badge&logo=springboot&logoColor=white"/>
        <el-image src="https://img.shields.io/badge/Netty-green?style=for-the-badge&logo=vue.js&logoColor=white"/>
        <h3>Stats</h3>
        <el-image src="https://github-readme-stats.vercel.app/api?username=CoderFrish&show_icons=true&locale=cn"/>
        <el-divider />
<!--        <el-empty description="此人尚未写过介绍。。。" />-->
      </div>
    </el-main>
  </el-container>
</template>
