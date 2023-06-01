<script lang="ts" setup>
defineProps<{
  id: string;
  src: string;
}>();
</script>

<template>
  <div>
    <img :id="id" :src="src" alt="Input Image" style="max-width: 100%" />
  </div>
</template>
