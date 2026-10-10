// Extras only. The content is already in the page: node tools/build.mjs puts
// it there from site/content.json, so the page shows it without JavaScript,
// and search engines and AI agents read all of it.

// Fallback for browsers without animation-timeline: scroll()
if (!CSS.supports("animation-timeline", "scroll()")) {
  const progress = document.querySelector("#progress");
  if (progress) {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0) {
        const scrolled = window.scrollY;
        const progressPercentage = Math.min(Math.max(scrolled / scrollable, 0), 1);
        progress.style.transform = `scaleX(${progressPercentage})`;
      }
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    updateProgress();
  }
}
