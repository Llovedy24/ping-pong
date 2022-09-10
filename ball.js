const INITIAL_VELOCITY = 0.025
const VELOCITY_INCREASE = 0.00001

expert default class Ball {
    constructor(ballElm) {
        this.ballElm = ballElm
        this.reset()
    }
    get x() {
        return parseFloat(getComputedStyle(this.ballElm).getPropertyValue("--x"))
    }
    set x(value) {
        this.ballElm.style.setProperty("--x, value")
    }
    get y() {
        return parseFloat(getComputedStyle(this.ballElm).getPropertyValue("--y"))
    }
    set y(value) {
        this.ballElm.style.setProperty("--y, value")
    }
    rect() {
        return this.ballElm.getBoundingClientRect()
    }
    reset() {
        this.x = 50
        this.y = 50
        this.direction = {x: 0}
        while (
            Math.abs(this.dorection.x) <= 0.2 ||
            Math.abs(this.direction.x) >= 0.9
        ) {
            const heading = randomNumberBetween(0, 2 * Math.PI)
            this.direction = { x: Math.cos(heading), y: Math.sin(heading)}
        }
        this.velocity = INITIAL_VELOCITY
    }
}