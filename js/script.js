const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const downloadBtn = document.getElementById('download-btn')

const image = new Image()
image.src = 'images/Certificate.png'
image.onload = function () {
	drawImage()
}

function drawImage() {
	
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '40px monotype corsiva'
	ctx.fillStyle = '#29e'
	ctx.fillText(nameInput.value, 100, 180)
}


nameInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/png')
	downloadBtn.download = 'Certificate - ' + nameInput.value
})

