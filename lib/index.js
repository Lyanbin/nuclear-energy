const gm = require('gm');

const resizeX = 256;
const resizeY = 256;

const oriImg = gm('./lena512.bmp');
oriImg.blur(5, 5)
	.resize(resizeX, resizeY)
	.autoOrient()
	.write('./result.bmp', (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('well done!');
		}
	});
console.log('================\n')
console.log(oriImg.channel('Gray'));