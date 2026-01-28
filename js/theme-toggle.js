(() => {
  const root = document.documentElement;
  const body = document.body;
  const buttons = document.querySelectorAll("[data-set-theme]");

  const setTheme = (theme) => {
    body.setAttribute("data-theme", theme);

    buttons.forEach((btn) => {
      const isActive = btn.dataset.setTheme === theme;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    try {
      localStorage.setItem("theme", theme);
    } catch {}
  };
    // Load saved theme
  try {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  } catch {}

  // Click handlers
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setTheme(btn.dataset.setTheme));
  });
})();
