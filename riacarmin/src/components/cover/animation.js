import { TweenMax, Elastic } from "gsap";

const duration = 0.5;

export default {
  show(target, callback) {
    return TweenMax.fromTo(
      target,
      duration,
      {
        opacity: 0,
        height: 0,
        onComplete() {
          callback();
        },
        ease: Elastic.easeOut.config(0.25, 1)
      },
      {
        height: "100%",
        opacity: 1
      }
    );
  }
};
