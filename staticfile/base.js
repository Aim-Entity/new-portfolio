function main() {
  hamburger();
}

function hamburger() {
  let burger = document.querySelector(".hamburger");
  var tl = gsap.timeline({ defaults: { duration: 1.5 } });
  let state = 0;

  burger.addEventListener("click", (e) => {
    if (state == 0) {
      anime
        .timeline({
          easing: "easeOutExpo",
        })

        .add({
          targets: ".side-nav",
          translateX: ["0%", "-100%"],
          duration: 500,
        });
      state += 1;
    } else {
      anime
        .timeline({
          easing: "easeOutExpo",
        })

        .add({
          targets: ".side-nav",
          translateX: ["-100%", "0%"],
          duration: 1000,
        });

      state = 0;
    }
  });
}

main();
