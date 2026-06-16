<template>
  <section class="page">
    <div class="container contact">
      <h1 class="section-title">
        Contact
      </h1>

      <p class="section-subtitle">
        Interested in collaborating,
        talking tech, or discussing game systems?
      </p>

      <a
        href="mailto:your@email.com"
        class="mail"
      >
        your@email.com
      </a>

      <div class="socials">
        <a href="#">
          GitHub
        </a>

        <a href="#">
          LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  text-align: center;
}

.mail {
  display: inline-block;

  font-size: clamp(2rem, 5vw, 4rem);

  font-weight: 800;

  color: var(--accent);

  margin-bottom: 2rem;
}

.socials {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.socials a {
  color: var(--muted);
}

.socials a:hover {
  color: var(--text);
}
</style>