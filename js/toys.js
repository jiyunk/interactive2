console.log('hello?')

let typewrittenThings = document.querySelectorAll('.typewriter')
console.log(typewrittenThings)


window.addEventListener('scroll', function(){
	let scrollPos = window.scrollY + window.innerHeight/2
	console.log(scrollPos)
	for(let counter = 0; counter < typewrittenThings.length; counter ++){
		if(typewrittenThings[counter].offsetTop < scrollPos){
			typewrittenThings[counter].classList.add('playing')
		} else {
			typewrittenThings[counter].classList.remove('playing')
		}
	}

})

 
