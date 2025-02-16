<script setup lang="ts">
import {Files, House, User} from "@element-plus/icons-vue";

const path = window.location.pathname
</script>

<template>
  <metainfo />

  <el-affix style="width: 100%; position: absolute; z-index: 100;">
    <el-menu :default-active="path" mode="horizontal" class="el-menu" :router="true">
      <el-menu-item index="/">
        <template #title>
          <el-icon> <House /> </el-icon> 主页
        </template>
      </el-menu-item>

      <el-menu-item index="/about">
        <template #title>
          <el-icon> <User /> </el-icon> 关于
        </template>
      </el-menu-item>

      <el-menu-item index="/archives">
        <template #title>
          <el-icon> <Files /> </el-icon> 归档
        </template>
      </el-menu-item>
    </el-menu>
  </el-affix>

  <router-view />

  <el-footer>
    <el-text style="font-size: .5em">
      Copyright&copy; 2025 Frish2021, Power by&nbsp;
      <a href="https://github.com/CoderFrish/SimpleBlog" style="font-size: .5em;" class="el-link">Simpleblog</a>.
    </el-text>
  </el-footer>

  <el-backtop :visibility-height="60" style="margin: 20px;"/>
</template>
