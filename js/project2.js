
console.log('helium')
let helium = document.querySelector('.helium')
console.log(helium)

let newBalloon



let inflateTimer
let inflateSize = 1

helium.addEventListener('mousedown',function(){
	newBalloon = document.createElement('div')
	let i = Math.floor(1 + Math.random() * 6)
	newBalloon.classList.add('balloon0' + i)
	document.body.appendChild(newBalloon)

	let heliumBox = helium.getClientRects()[0]

	newBalloon.style.top = heliumBox.top - 100 + 'px'
	newBalloon.style.left = heliumBox.left + 'px'

	inflateSize = 1
	inflateTimer = setTimeout(inflate,16)
})

function inflate(){
	inflateSize += 0.1
	if(inflateSize > 10){
		newBalloon.classList.add('boom')
		clearTimeout(inflateTimer)
	} else {
		newBalloon.style.transform = 'scale('+inflateSize+')'
		
		inflateTimer = setTimeout(inflate,16)
	}
}

document.addEventListener('mouseup',function(){
	

	clearTimeout(inflateTimer)
	if(inflateSize < 2){
		console.log('deflated')
		newBalloon.classList.add('deflated')
		newDeflated = document.createElement('div')
		let i = Math.floor(1 + Math.random() * 6)
		newDeflated.classList.add('deflated0' + i)
		document.body.appendChild(newDeflated)
	} else {


		newBalloon.classList.add('fly')
		setTimeout(function(){
			newBalloon.style.top = '-200px'

		},1)
	}
	
})