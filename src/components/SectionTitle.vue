<template>
  <div class="section">
    <span class="eyebrow">
      {{ eyebrow }}
    </span>

    <h2>
      {{ title }}
    </h2>

    <p v-if="description">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()
</script>

<style scoped>
.section {
  margin-bottom: 4rem;
}

.eyebrow {
  display: inline-block;

  margin-bottom: 1rem;

  color: var(--accent);

  font-size: 0.9rem;

  text-transform: uppercase;

  letter-spacing: 0.15em;
}

h2 {
  font-size: clamp(2rem, 5vw, 4rem);

  line-height: 1;

  letter-spacing: -0.05em;

  margin-bottom: 1rem;
}

p {
  color: var(--muted);

  max-width: 700px;

  line-height: 1.8;
}
</style>