import { bind } from "decko"
import Circle from "./shapes/circle"
import Stick from "./shapes/stick"

export default class Animation {
  constructor(parent, canvas) {
    this.isAnimated = true
    this.parent = parent
    this.canvas = canvas
    this.ctx = this.canvas.getContext(`2d`)
    this.center = {}
    this.circles = []
    this.sticks = []
  }

  addEventListeners() {
    window.addEventListener(`resize`, () => {
      this.initCanvas()
    })
    window.addEventListener(`scroll`, () => {
      this.scrollCheck()
    })
  }

  scrollCheck() {
    this.isAnimated = document.body.scrollTop > this.canvas.height
  }

  initCanvas() {
    const r = window.devicePixelRatio ? window.devicePixelRatio : 1
    const w =
      this.parent.offsetWidth < 599
        ? this.parent.offsetWidth
        : this.parent.offsetWidth / 2
    const h = window.innerHeight
    this.canvas.width = w * r
    this.canvas.height = h * r
    this.canvas.style.width = `${w}px`
    this.canvas.style.height = `${h}px`
    this.center = {
      x: w / 2,
      y: h / 2 - 40 / r
    }
    this.ctx.scale(r, r)
  }

  generateCircles() {
    for (let x = 0; x < 480; x += 1) {
      setTimeout(() => {
        const circle = new Circle(this.center.x, this.center.y, this.ctx)
        const stick = new Stick(this.center.x, this.center.y, this.ctx)
        circle.init()
        stick.init()
        this.circles.push(circle)
        this.sticks.push(stick)
      }, x * Math.random() * 1600)
    }
  }

  @bind
  initAnimation() {
    requestAnimationFrame(this.initAnimation)
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    for (let i = 0; i < this.sticks.length; i += 1) {
      this.sticks[i].draw()
    }
    for (let i = 0; i < this.circles.length; i += 1) {
      this.circles[i].draw()
    }
  }

  cover() {
    this.addEventListeners()
    this.initCanvas()
    this.generateCircles()
    this.initAnimation()
  }
}
