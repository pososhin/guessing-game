class GuessingGame {
    constructor() { }
    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.current = this.min + Math.floor((this.max - this.min + 1) / 2)
    }
    guess() {
        return this.current;
    }
    lower() {
        this.setRange(this.min, this.current);
    }
    greater() {
        this.setRange(this.current, this.max);
    }
}
module.exports = GuessingGame;
