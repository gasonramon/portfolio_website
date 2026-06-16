<template>
  <div class="terminal">
    <div class="topbar">
      <div class="dot red"></div>
      <div class="dot yellow"></div>
      <div class="dot green"></div>

      <span>
        profile.json
      </span>
    </div>

    <div class="content">
      <pre>
{
  "name": "Jason Leijdekker",

  "occupation":
    "Software Engineering Student",

  "focus": [
    "Python",
    "Docker",
    "Rust",
    "Java"
  ],
  "interests": [
    "Backend Systems",
    "Software Development"
  ]
}
      </pre>
    </div>
  </div>
</template>

<style scoped>
.terminal {
  background: rgba(13, 23, 34, 0.85);

  border: 1px solid var(--border);

  border-radius: 24px;

  overflow: hidden;

  backdrop-filter: blur(10px);
}

.topbar {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 1rem 1.25rem;

  border-bottom: 1px solid var(--border);

  background: rgba(255, 255, 255, 0.02);
}

.topbar span {
  margin-left: auto;

  color: var(--muted);

  font-size: 0.85rem;
}

.dot {
  width: 12px;
  height: 12px;

  border-radius: 999px;
}

.red {
  background: #ff5f56;
}

.yellow {
  background: #ffbd2e;
}

.green {
  background: #27c93f;
}

.content {
  padding: 1.5rem;
}

pre {
  margin: 0;

  color: var(--muted);

  line-height: 1.8;

  font-size: 0.95rem;

  white-space: pre-wrap;
}
</style>