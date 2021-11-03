window.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          document
            .querySelector(`.programme-link a[href="#${id}"]`)
            .parentElement.classList.add("programme-link--active");
        } else {
          document
            .querySelector(`.programme-link a[href="#${id}"]`)
            .parentElement.classList.remove("programme-link--active");
        }
      });
    },
    {
      rootMargin: "-50% 0px -49%",
    }
  );

  // Track all sections that have an `id` applied
  document.querySelectorAll("section[id]").forEach((section) => {
    observer.observe(section);
  });
});
