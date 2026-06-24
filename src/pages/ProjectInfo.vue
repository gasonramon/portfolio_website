<template>
  <main class="detail-page">
    <RouterLink to="/projects" class="back-link">← Back to Projects</RouterLink>

    <template v-if="project">
      <header class="detail-header">
        <span class="detail-tag">{{ project.tag }}</span>
        <h1>{{ project.title }}</h1>
        <p class="detail-lead">{{ project.description }}</p>
      </header>
      <section class="detail-body">
        <h2>Overview</h2>
        <p>{{ project.overview }}</p>

        <h2>Key Features</h2>
        <ul class="feature-list">
          <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
        </ul>

        <h2>Tech Stack</h2>
        <div class="tech-stack">
          <span v-for="tech in project.stack" :key="tech" class="tech-pill">{{ tech }}</span>
        </div>

        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="demo-button"
        >
          View Live Demo →
        </a>
      </section>
    </template>

    <div v-else class="not-found">
      <h2>Project not found</h2>
      <p>No project exists with id "{{ id }}".</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import projectsData from '../data/projects.json'

const route = useRoute()
const id = computed(() => route.params.id)

const project = computed(() =>
  projectsData.find((p) => p.id === String(id.value))
)
</script>

<style scoped>
.detail-page {
  max-width: 760px;
  margin: 0 auto;
  padding: 2rem;
}

.back-link {
  display: inline-block;
  margin-bottom: 2rem;
  color: var(--muted);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.back-link:hover {
  color: var(--color-text);
}

.detail-header {
  margin-bottom: 2rem;
}

.detail-tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary, #4f8ef7);
  margin-bottom: 0.5rem;
}

.detail-header h1 {
  font-size: 2.25rem;
  margin: 0.25rem 0 1rem;
}

.detail-lead {
  font-size: 1.1rem;
  color: var(--muted);
  line-height: 1.7;
}

.detail-body h2 {
  font-size: 1.15rem;
  margin: 2rem 0 0.75rem;
}

.detail-body p {
  color: var(--muted);
  line-height: 1.8;
}

.feature-list {
  padding-left: 1.25rem;
  color: var(--muted);
  line-height: 2;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.tech-pill {
  padding: 0.3rem 0.75rem;
  border-radius: 6px;
  background: var(--color-surface, #f120);
  font-size: 0.85rem;
  font-weight: 500;
}

.demo-button {
  display: inline-block;
  margin-top: 2.5rem;
  padding: 0.65rem 1.5rem;
  border-radius: 8px;
  background: var(--color-primary, #4f8ef7);
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: opacity 0.2s ease;
}

.demo-button:hover {
  opacity: 0.85;
}

.not-found {
  margin-top: 4rem;
  text-align: center;
  color: var(--muted);
}
</style>