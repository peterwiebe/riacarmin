export default class Stick {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.speed = 1;
    this.dx = (Math.random() + -0.5);
    this.dy = (Math.random() + -0.5);
    this.alpha = 1;
    this.rotation = Math.PI / 4;
    this.ctx = ctx;
  }

  init() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate(this.rotation);
    this.ctx.fillStyle = `rgba(220, 10, 83, ${this.alpha})`;
    this.ctx.fillRect(-4, -12, 8, 24);
    this.ctx.restore();

  }
  draw() {
    this.x += this.dx * this.speed;
    this.y += this.dy * this.speed;
    this.rotation += .01;
    this.speed = Math.sqrt(this.speed);
    this.alpha -= .0025;
    this.init();
  }
}
