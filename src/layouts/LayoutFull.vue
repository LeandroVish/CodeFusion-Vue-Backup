<script setup>
  import { useLayout } from '@/composables/layout.js';
  const { layout } = useLayout();
</script>
<template>
  <component :is="layout" />
</template>