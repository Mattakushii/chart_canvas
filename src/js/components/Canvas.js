export default class Canvas {
    constructor(options) {
        this.width = options.width;
        this.height = options.height;
        this.canvas = options.canvas;


        this.canvas.width = options.width;
        this.canvas.height = options.height;


        this.ctx = this.canvas.getContext('2d');
    }


}