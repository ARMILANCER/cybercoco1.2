class Train {
    constructor() {
        this.trainCloseIm = new Image();
        this.trainOpenIm = null;
        this.init();
    }

    init() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 1478;
        this.canvas.height = 840;

        this.loadImage("Image/trainC.png", this.trainCloseIm);
    }

    loadImage(src, image) {
        image.onload = () => {
            this.drawImage(image);
        };
        image.src = src;
    }

    drawImage(image) {
        this.ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
    }
}
const train = new Train();
document.body.appendChild(train.canvas);
