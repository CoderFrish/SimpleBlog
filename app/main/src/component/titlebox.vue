<script setup lang="ts">
defineProps({
  main: {
    type: String
  },
  sub: {
    type: String
  }
})
</script>

<template>
  <div style="height: 100%;">
    <div class="text-box" style="align-items: end;">
      <span class="main-title">{{ main }}</span>
    </div>

    <div class="text-box" style="align-items: start;">
      <span class="sub-title">{{ sub }}</span>
    </div>
  </div>
</template>

<style scoped>
.text-box {
  width: 100%;
  height: calc(100% / 2);
  display: flex;
  justify-content: center;
}

.main-title {
  font-size: 2em;
  color: aliceblue;
}

.sub-title {
  font-size: 1.2em;
  color: aliceblue;
}
</style>
