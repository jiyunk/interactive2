window.addEventListener('resize',pageResized)


function pageResized(){
  
  let windowPercentOfScreen = (1 - (window.innerHeight / window.screen.height)) * 100
  
  let colorFromScreenHeight = 'hsl(0,0%,' + windowPercentOfScreen + '%)'
  document.body.style.color = colorFromScreenHeight
  
}

pageResized()
