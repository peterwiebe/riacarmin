import { bind } from 'decko';
import Circle from './shapes/circle';

// TODO: Move to class 
function addEventListeners() {
  window.addEventListener('resize', () => console.log('I am a different window now'));
  window.addEventListener('scroll', () => console.log('Not lookling any more'));
}

// function scrollCheck() {
//   if(document.body.scrollTop > height) animateHeader = false;
//   else animateHeader = true;
// }

// function resize() {
//   if (window.innerWidth < 599) {
//       width = window.innerWidth;
//   }
//   else {
//       width = window.innerWidth / 2;
//   }
//   height = window.innerHeight;
//   coverAnimation.style.height = height+'px';
//   canvas.width = width;
//   canvas.height = height;
// }



export default class Animation {
  constructor(parent, canvas) {
    this.parent = parent;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.center = {};
    this.circles = [];
  }

  initCanvas() {
    this.canvas.width = this.parent.offsetWidth / 2;
    this.canvas.height = window.innerHeight;
    this.center = {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2 - 40
    }

    addEventListeners();
  }

  generateCircles() {
    for (var x = 0; x < 480; x++) {
      setTimeout(() => {
        const circle = new Circle(this.center.x, this.center.y, 10, this.canvas, this.ctx);
        circle.init();
        this.circles.push(circle);
      }, x * 400);
    }

  }

  @bind
  initAnimation() {
    requestAnimationFrame(this.initAnimation);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.circles.length; i++) {
      this.circles[i].draw();
    }
  }

  cover() {
    this.initCanvas();
    this.generateCircles();
    this.initAnimation();
  }
};
