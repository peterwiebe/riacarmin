export default class Circle {
  constructor(x, y, rad, canvas, c) {
    this.x = x;
    this.y = y;
    this.speed = 1;
    this.dx = (Math.random() + -0.5);
    this.dy = (Math.random() + -0.5);
    this.rad = rad;
    this.alpha = .8;
    this.canvas = canvas;
    this.c = c;
  }
  init() {
    this.c.beginPath();
    this.c.fillStyle = `rgba(0, 170, 183, ${this.alpha})`;
    this.c.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
    this.c.fill();
  }

  draw() {
    this.x += this.dx * this.speed;
    this.y += this.dy * this.speed;
    this.speed = Math.sqrt(this.speed);
    this.alpha -= .0015;
    this.init();
  }
}
