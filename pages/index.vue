<template>
    <div>
        <h1>Home View</h1>
        <p>This is the home view.</p>
        <h2>Title: {{ note.title }}</h2>
        <p>Content: {{ note.content }}</p>
    </div>
</template>

<script lang="ts" setup>
import NoteService from '../services/NoteService';
import { ref, type Ref } from 'vue';

// Definir a interface para o objeto note
interface Note {
  title: string;
  content: string;
}

// Tipar o ref com a interface Note
const note: Ref<Note> = ref({
  title: 'loading...',
  content: 'loading...'
});

const noteService = new NoteService();

onMounted(async () => {
  note.value = await noteService.getNote();
});
</script>

<style scoped lang="scss">
</style>