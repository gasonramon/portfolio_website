<template>
  <div class="card project">
    <RouterLink :to="`/projects/${id}`" class="card-content">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </RouterLink>
    
      v-if="link"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="demo-link"
      @click.stop
    <a>
      Live Demo →
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  id: string
  link?: string
}>()
</script>

<style scoped>
.project {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.card-content {
  display: block;
  text-decoration: none;
  flex: 1;
}

h2 {
  margin-bottom: 1rem;
}

p {
  color: var(--muted);
  line-height: 1.8;
}

.demo-link {
  display: inline-block;
  margin-top: 1.25rem;
  font-size: 0.875rem;
  color: var(--accent, #646cff);
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.demo-link:hover {
  opacity: 0.75;
}
</style>