<template>
  <section class="page">
    <div class="container">
      <h1 class="title">
        Projects
      </h1>

      <div class="grid">
        <Projectcard
          v-for="project in projects"
          :key="project.id"
          :id="project.id"
          :title="project.title"
          :description="project.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Projectcard from '../components/Projectcard.vue'
import projectsData from '../data/projects.json'

const projects = projectsData
</script>

<style scoped>
.page {
  padding: 8rem 0;
}

.title {
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: 3rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}
</style>