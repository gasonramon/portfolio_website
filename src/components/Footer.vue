<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div>
        © 2026 Jason Leijdekker
      </div>

      <div class="footer-links">
        <a href="#">
          GitHub
        </a>

        <a href="#">
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);

  padding: 2rem 0;

  margin-top: 4rem;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--muted);
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  transition: 0.2s ease;
}

.footer-links a:hover {
  color: var(--text);
}

@media (max-width: 700px) {
  .footer-inner {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>