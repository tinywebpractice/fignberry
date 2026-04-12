document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll("[data-drawer-trigger]");

  triggers.forEach((trigger, index) => {
    const panelId = trigger.getAttribute("data-drawer-target");
    const panel = document.getElementById(panelId);

    if (!panel) {
      return;
    }

    if (!trigger.id) {
      trigger.id = `drawer-trigger-${index + 1}`;
    }

    trigger.setAttribute("aria-controls", panelId);
    trigger.setAttribute("aria-expanded", "false");
    panel.hidden = true;
    panel.setAttribute("role", "region");
    panel.setAttribute("aria-labelledby", trigger.id);

    trigger.addEventListener("click", () => {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen;
    });
  });
});
