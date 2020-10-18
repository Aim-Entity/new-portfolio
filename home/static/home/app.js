function main() {
  cover()
  svg()
  boxes()
}

function cover(){
  var tl = gsap.timeline({
    defaults: { duration: 0.7, ease: Back.easeOut.config(2), opacity: 0 },
  });
  var tl2 = gsap.timeline({ defaults: { duration: 1.5, delay: 1 } });
  var tl3 = gsap.timeline({ defaults: { duration: 1.5 } });

  tl.from(".card-bg", { delay: 1, scale: 0.2, transformOrigin: "center" }, "=.2")
  .from(".card-top", { scaleY: 0, transformOrigin: "top" })
  .from(".icon", { scale: 0.2, transformOrigin: "center" }, "-=.7")
  .from(".blip1", { scaleX: 0 })
  .from(".blip2", { scaleX: 0 }, "-=.2")
  .from(".blip3", { scaleX: 0 }, "-=.3")
  .from(".blip4", { scaleX: 0 }, "-=.5")
  .from(".blip5", { scaleX: 0 }, "-=.7");

  tl2.to(".whole-card", { y: 10, repeat: -1, yoyo: true })
  tl3.from(".main-content", { opacity: 0, y: 40, stagger: 0.3 });
  
};

function svg(){
  ptl = gsap.timeline({ defaults: { duration: 1.5, delay: 1 } });
  ptl2 = gsap.timeline({ defaults: { duration: 1.5, delay: 1 } });

  ptl.to(".paper", { y: 10, repeat: -1, yoyo: true });
  ptl2.to(".par-line", { scale:0.75, repeat: -1, yoyo: true, stagger: 0.55 })
      // .to(".par-line2", { scale:0.75, repeat: -1, yoyo: true })
      // .to(".par-line3", { scale:0.75, repeat: -1, yoyo: true })
      // .to(".par-line4", { scale:0.75, repeat: -1, yoyo: true })
      // .to(".par-line5", { scale:0.75, repeat: -1, yoyo: true })
      // .to(".par-line6", { scale:0.75, repeat: -1, yoyo: true })
};

function boxes() {
  let containers = document.querySelectorAll(".s5-box")
  var tl2 = gsap.timeline({ defaults: { duration: 1 } });

  for(let i = 0; i < containers.length; i++){
    containers[i].addEventListener("mouseenter", e => {
      tl2.to(e.target, { y: -10, transform: "rotate(2deg)" })
    })

    containers[i].addEventListener("mouseout", e => {
      tl2.to(e.target, { y: 10, transform: "rotate(0deg)"})
    })
  }
}

main()