export default class App {

    constructor() {
        
        this.uploader = document.querySelector('#uploader');
        this.container = document.querySelector('#canvas-container');
        this.resContainer = document.querySelector('#result-container');

        this.base64 = null;
        this.canvas = null;
        this.canvasCtx = null;

        this.bindEvent();
        this.initCanvas();
    }

    bindEvent() {
        this.uploader.addEventListener('change', (e) => {
            this.clearCanvas();
            let reader = new FileReader();
            let file = e.target.files[0];
            reader.onload = (ee) => {
                this.base64 = ee.target.result;
                this.drawCanvas();
            };
            reader.readAsDataURL(file);
        });
    }

    initCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.container.clientWidth;
        this.canvas.height = this.container.clientHeight;
        this.container.appendChild(this.canvas);
        this.canvasCtx = this.canvas.getContext('2d');

        this.res = document.createElement('canvas');
        this.res.width = this.resContainer.clientWidth;
        this.res.height = this.resContainer.clientHeight;
        this.resContainer.appendChild(this.res);
        this.resCtx = this.res.getContext('2d');
    }

    drawCanvas() {
        const image = new Image();
        image.onload = () => {
            this.canvasCtx.drawImage(image, 0, 0);
            this.processData();
        };
        image.src = this.base64;
    }

    clearCanvas() {
        this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.resCtx.clearRect(0, 0, this.res.width, this.res.height);
    }

    processData() {
        const dataObj = this.canvasCtx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        const dataArr = dataObj.data;
        for (let i = 0; i < dataArr.length; i+=4) {
            let black = (dataArr[i] + dataArr[i + 1] + dataArr[i + 2]) / 3;
            if (black > 100) {
                black = 255;
            } else {
                black = 0;
            }
            dataArr[i] = dataArr[i + 1] = dataArr[i + 2] = black;
        }
        this.resCtx.putImageData(dataObj, 0, 0);
    }
}

