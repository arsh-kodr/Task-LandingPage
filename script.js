
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray([
  ".main1", ".main2", ".main3", ".main4", ".main5", "footer"
]).forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 90%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });
});


gsap.from(".nav h3, .navlinks a", {
  opacity: 0,
  y: -20,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
});


gsap.from(".middleTop h1, .middleTop p, #btn", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2,
  delay: 0.5,
  ease: "power2.out"
});


document.querySelectorAll("button, #btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.05, duration: 0.2 });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.2 });
  });
});
