(() => {
  const TARGET_DATE = new Date("2025-12-20T09:00:00+08:00");

  function updateRemainingDays(remainingSpan) {
    if (!remainingSpan) return;
    const diff = TARGET_DATE.getTime() - Date.now();
    const days = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
    remainingSpan.textContent = days;
  }

  function activatePanel(panels, key) {
    panels.forEach((panel) => {
      if (panel.dataset.panel === key) {
        panel.classList.add("is-visible");
      } else {
        panel.classList.remove("is-visible");
      }
    });
  }

  function initStudyTabs() {
    const remainingSpan = document.querySelector("[data-remaining]");
    const tabs = document.querySelectorAll(".tab");
    const panels = document.querySelectorAll(".tips-panel");

    if (!tabs.length || !panels.length) return;

    const defaultTab =
      document.querySelector(".tab.is-active")?.dataset.tab || tabs[0].dataset.tab;
    activatePanel(panels, defaultTab);
    updateRemainingDays(remainingSpan);

    tabs.forEach((tab) => {
      tab.type = "button";
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("is-active"));
        tab.classList.add("is-active");
        activatePanel(panels, tab.dataset.tab);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initStudyTabs);
  } else {
    initStudyTabs();
  }
})();

