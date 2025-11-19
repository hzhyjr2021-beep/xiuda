(() => {
  const TARGET_DATE = new Date("2025-12-20T09:00:00+08:00");

  const formatValue = (value) => String(value).padStart(2, "0");

  function updateCountdown() {
    const daysEl = document.querySelector("[data-days]");
    const hoursEl = document.querySelector("[data-hours]");
    const minutesEl = document.querySelector("[data-minutes]");
    const secondsEl = document.querySelector("[data-seconds]");

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    const now = Date.now();
    let diff = TARGET_DATE.getTime() - now;
    diff = Math.max(diff, 0);

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.textContent = formatValue(days);
    hoursEl.textContent = formatValue(hours);
    minutesEl.textContent = formatValue(minutes);
    secondsEl.textContent = formatValue(seconds);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      updateCountdown();
      setInterval(updateCountdown, 1000);
    });
  } else {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
})();

