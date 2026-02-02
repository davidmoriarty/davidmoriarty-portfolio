// src/scripts/resume-print.ts
function onReady(fn: () => void) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn, { once: true });
  } else {
    fn();
  }
}

onReady(() => {
  const btn = document.querySelector<HTMLButtonElement>("[data-resume-print]");
  if (!btn) return;

  btn.addEventListener("click", () => {
    window.print();
  });
});
