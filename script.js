gsap.registerPlugin(ScrollTrigger);

const hero = document.querySelector(".hero-section");

gsap.to(hero, {
  scrollTrigger: {
    trigger: ".spacer",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    markers: false,
    onUpdate: (self) => {
      if (self.progress === 1) {
        hero.style.position = "relative";
        hero.style.pointerEvents = "auto";
      } else {
        hero.style.position = "fixed";
        hero.style.pointerEvents = "none";
      }
    }
  },
  clipPath: "circle(150% at center)",
  webkitClipPath: "circle(150% at center)"
});
