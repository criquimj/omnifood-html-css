// Get copyright date for footer
const copyrightYearElement = document.querySelector(".year");
const currentYear = new Date().getFullYear();
copyrightYearElement.textContent = currentYear;

// Make mobile nav toggle
const mobileNavButton = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
mobileNavButton.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  })
);

// Sticky Navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);
    const bodyEl = document.querySelector("body");
    if (!ent.isIntersecting) bodyEl.classList.add("sticky");
    if (ent.isIntersecting) bodyEl.classList.remove("sticky");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);
