<template>
  <RouterLink :to="`/projects/${id}`" class="card project">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  id: string
}>()
</script>

<style scoped>
.project {
  padding: 2rem;
  display: block;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

h2 {
  margin-bottom: 1rem;
}

p {
  color: var(--muted);
  line-height: 1.8;
}
</style>