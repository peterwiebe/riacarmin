export default class Circle {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.speed = 1;
    this.dx = (Math.random() + -0.5);
    this.dy = (Math.random() + -0.5);
    this.rad = 1 + Math.random() * 10;
    this.alpha = .8;
    this.ctx = ctx;
  }
  init() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = `rgba(0, 155, 183, ${this.alpha})`;
    this.ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
    this.ctx.stroke();
  }

  draw() {
    this.x += this.dx * this.speed;
    this.y += this.dy * this.speed;
    this.speed = Math.sqrt(this.speed);
    this.alpha -= .0015;
    this.init();
  }
}
