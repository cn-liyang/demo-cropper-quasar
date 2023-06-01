<script lang="ts" setup>
defineProps<{
  id: string;
  src: string;
}>();
</script>

<template>
  <CardLayout style="max-width: 256px; max-height: 256px">
    <img :id="id" :src="src" alt="Input Image" />
  </CardLayout>
</template>
