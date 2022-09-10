const speed = 0.02 
export default class Paddle {
    constructor(paddleElem) {
        this.paddleElm = paddleElem
        this.reset()
    }

    get position() {
        return parseFloat(
            getComputedStyle(this.paddleElm).getPropertyValue("--position")
        )
    }
    set position(getPropertyValue) {
        this.paddleElm.style.setProperty("--position", value)
    }
    reset() {
        return this.paddleElm.getBoundingClientRect()
    }
    reset() {
        this.position = 50
    }
    update(delta, ballheight) {
        this.position += SPEED * delta * (ballHeight - this.position)
    }
}