export default class App {

    constructor() {
        
        this.uploader = document.querySelector('#uploader');
        this.container = document.querySelector('#canvas-container');

        this.base64 = '';
        this.canvas = null;
        this.canvasCtx = null;

        this.bindEvent();
        this.initCanvas();
    }

    bindEvent() {
        let self = this;
        this.uploader.addEventListener('change', (e) => {
            let reader = new FileReader();
            let file = e.target.files[0];
            reader.onload = (ee) => {
                self.base64 = ee.target.result;
                self.drawCanvas();
            };
            reader.readAsDataURL(file);
        });
    }

    initCanvas() {
        this.canvas = document.createElement('canvas');
        this.container.appendChild(this.canvas);
        this.canvasCtx = this.canvas.getContext('2d');
    }

    drawCanvas() {

        const image = new Image();
        image.onload = () => {
            this.canvasCtx.drawImage(image, 0, 0);
        };
        image.src = this.base64;
    }
}

