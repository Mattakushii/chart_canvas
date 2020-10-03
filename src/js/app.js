import Canvas from "./components/Canvas"

class Chart {
    constructor(options) {
        this.canvas = options.canvas;
        this.Canvas = new Canvas({
            width: 800,
            height: 500,
            canvas: this.canvas,
        });

    }
}


const canvas = document.getElementById('canvas');
const chart = new Chart({canvas: canvas});