<script setup>
import LargeMenu from '@/components/templates/Large/LargeMenu.vue';
</script>
<template>
    <div >
        <header>
            <LargeMenu />
        </header>
        <main>
            <RouterView />
        </main>
    </div>
</template>

<style scoped>

</style>