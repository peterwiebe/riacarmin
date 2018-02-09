import { bind } from 'decko';
import Circle from './shapes/circle';
import Stick from './shapes/stick';

export default class Animation {
  constructor(parent, canvas) {
    this.isAnimated = true;
    this.parent = parent;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.center = {};
    this.circles = [];
    this.sticks = [];
  }

  addEventListeners() {
    window.addEventListener('resize', () => {
      console.log('I am a different window now')
      this.initCanvas();
      console.log(this.canvas.width);
    });
    window.addEventListener('scroll', () => {
      console.log('Not looking any more')
      console.log(this.isAnimated);
      this.scrollCheck()
    });
  }

  scrollCheck() {
    this.isAnimated = document.body.scrollTop > this.canvas.height;
  }

  initCanvas() {
    this.canvas.width = this.parent.offsetWidth < 599 ? this.parent.offsetWidth : this.parent.offsetWidth / 2;
    this.canvas.height = window.innerHeight;
    this.center = {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2 - 40
    }
  }

  generateCircles() {
    for (var x = 0; x < 480; x++) {
      setTimeout(() => {
        const circle = new Circle(this.center.x, this.center.y, this.ctx);
        const stick = new Stick(this.center.x, this.center.y, this.ctx);
        circle.init();
        stick.init();
        this.circles.push(circle);
        this.sticks.push(stick);
      }, x * Math.random() * 1600);
    }

  }

  @bind
  initAnimation() {
    requestAnimationFrame(this.initAnimation);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.sticks.length; i++) {
      this.sticks[i].draw();
    }
    for (let i = 0; i < this.circles.length; i++) {
      this.circles[i].draw();
    }
  }

  cover() {
    this.addEventListeners();
    this.initCanvas();
    this.generateCircles();
    this.initAnimation();
  }
};
