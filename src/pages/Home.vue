<template>
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <div class="badge">
          Software Engineering Student
        </div>

        <h1>
          Jason
          <span>Leijdekker</span>
        </h1>

        <p>
          Building automation systems,
          web applications, and gameplay
          experiments with Vue, Python,
          Docker, PostgreSQL, and Godot.
        </p>

        <div class="actions">
          <RouterLink
            to="/projects"
            class="btn btn-primary"
          >
            View Projects
          </RouterLink>
        </div>
      </div>

      <Terminalmock />
    </div>
  </section>
</template>

<script setup lang="ts">
import Terminalmock from '../components/Terminalmock.vue'
</script>

<style scoped>
.hero {
  min-height: calc(100vh - 72px);

  display: flex;
  align-items: center;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;
}

.badge {
  display: inline-flex;

  padding: 0.5rem 1rem;

  margin-bottom: 2rem;

  border-radius: 999px;

  background: rgba(77, 226, 197, 0.08);

  border: 1px solid rgba(77, 226, 197, 0.15);

  color: var(--accent);
}

h1 {
  font-size: clamp(3rem, 8vw, 6rem);

  line-height: 0.95;

  letter-spacing: -0.06em;

  margin-bottom: 1.5rem;
}

h1 span {
  display: block;
  color: var(--accent2);
}

p {
  color: var(--muted);

  line-height: 1.8;

  max-width: 600px;

  margin-bottom: 2rem;
}

.actions {
  display: flex;
  gap: 1rem;
}

@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
}
</style>