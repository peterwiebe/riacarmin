export default class Stick {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.speed = 1;
    this.dx = (Math.random() + -0.5);
    this.dy = (Math.random() + -0.5);
    this.alpha = .8;
    this.ctx = ctx;
  }

  init() {
    this.ctx.beginPath();
    this.ctx.fillStyle = `rgba(220, 10, 83, ${this.alpha})`;
    this.ctx.rect(this.x, this.y, 8, 24);
    this.ctx.fill();
  }
  draw() {
    this.x += this.dx * this.speed;
    this.y += this.dy * this.speed;
    this.speed = Math.sqrt(this.speed);
    this.alpha -= .0015;
    this.init();
  }
}
