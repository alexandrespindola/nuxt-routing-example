<template>
        <div>
            <h1>Project</h1>
            <h2>{{ projectId }}</h2>
        </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'projects',
})
const route = useRoute()
const projectId = route.params.id
</script>

<style scoped lang="scss"></style>