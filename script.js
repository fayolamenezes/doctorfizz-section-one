gsap.registerPlugin(ScrollTrigger);

// Animate the circle's scale as user scrolls
gsap.to(".circle-mask", {
  width: "3000px",
  height: "3000px",
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true
  }
});
