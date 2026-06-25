<template>
  <nav class="nav">
    <div class="container nav-inner">
      <RouterLink to="/" class="logo">
        jasonleijdekker.com
      </RouterLink>

      <div class="links">
        <RouterLink to="/">
          Home
        </RouterLink>

        <RouterLink to="/projects">
          Projects
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 100;

  background: rgba(7, 16, 24, 0.8);
  backdrop-filter: blur(12px);

  border-bottom: 1px solid var(--border);
}

.nav-inner {
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-weight: 800;
  color: var(--accent);

  letter-spacing: -0.04em;
}

.links {
  display: flex;
  gap: 2rem;
}

.links a {
  color: var(--muted);
  transition: 0.2s ease;
}

.links a:hover,
.router-link-active {
  color: var(--text);
}
</style>