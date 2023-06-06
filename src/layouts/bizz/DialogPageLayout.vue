<script lang="ts" setup>
defineProps<{
  title: string;
}>();

const { getQDialogComponentHeight } = useRectQDialogComponentGlobalSessionStorage();
</script>

<template>
  <q-dialog full-width full-height persistent>
    <q-layout view="hHh LpR fFf" container class="bg-white">
      <q-header>
        <q-bar>
          <span class="text-body2">{{ title }}</span>
          <q-space />
          <q-btn v-close-popup dense flat icon="close" />
        </q-bar>
      </q-header>
      <q-page-container>
        <q-page>
          <slot />
        </q-page>
      </q-page-container>
    </q-layout>
  </q-dialog>
</template>
