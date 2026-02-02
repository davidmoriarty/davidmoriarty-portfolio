document.addEventListener("click", (e) => {
  const el = e.target?.closest?.("[data-resume-print]");
  if (!el) return;

  e.preventDefault();
  window.print();
});
