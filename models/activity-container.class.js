class Activity {
    constructor(header, step) {
        this._header = header,
        this._step = step
    }

    // getters
    get header() {
        return this._header;
    }

    get step() {
        return this._step;
    }
}