let element3 = document.querySelector("#element-3");
let element4 = document.querySelector("#element-4");
let element5 = document.querySelector("#element-5");
let element6 = document.querySelector("#element-6");
let element7 = document.querySelector("#element-7");
let element8 = document.querySelector("#element-8");
let element9 = document.querySelector("#element-9");
let element10 = document.querySelector("#element-10");

let element14 = document.querySelector("#element-14");
let element15 = document.querySelector("#element-15");
let element16 = document.querySelector("#element-16");
let element17 = document.querySelector("#element-17");
let element18 = document.querySelector("#element-18");
let element19 = document.querySelector("#element-19");
let element20 = document.querySelector("#element-20");
let element21 = document.querySelector("#element-21");
let element22 = document.querySelector("#element-22");
let element23 = document.querySelector("#element-23");
let element24 = document.querySelector("#element-24");
let element25 = document.querySelector("#element-25");
let element26 = document.querySelector("#element-26");
let element27 = document.querySelector("#element-27");
let element28 = document.querySelector("#element-28");
let element29 = document.querySelector("#element-29");
let element30 = document.querySelector("#element-30");
let element31 = document.querySelector("#element-31");
let element32 = document.querySelector("#element-32");
let element33 = document.querySelector("#element-33");
let element35 = document.querySelector("#element-35");
let element36 = document.querySelector("#element-36");
let element37 = document.querySelector("#element-37");
let element38 = document.querySelector("#element-38");
let element39 = document.querySelector("#element-39");
let element40 = document.querySelector("#element-40");
let element41 = document.querySelector("#element-41");
let element42 = document.querySelector("#element-42");
let element43 = document.querySelector("#element-43");
let element44 = document.querySelector("#element-44");
let element45 = document.querySelector("#element-45");
let element46 = document.querySelector("#element-46");
let element47 = document.querySelector("#element-47");
let element48 = document.querySelector("#element-48");
let element49 = document.querySelector("#element-49");
let element50 = document.querySelector("#element-50");


element3.addEventListener("click", function() {
  element3.animate(
    [
      {
        opacity: 0,
        marginLeft: getComputedStyle(this).marginLeft,
        fontSize: "100px",
        borderWidth: getComputedStyle(this).borderWidth
      },
      {
        opacity: 0.4,
        marginLeft: "25px",
        fontSize: "5px",
        borderWidth: "10px"
      }
    ],
    {
      duration: 200,
      iterations: 1,
      fill: "forwards"
    }
  );
});

// element6.addEventListener("pointermove", function(e) {
//   var xPos = e.pageX - 125;
//   var yPos = e.pageY - 125;

//   this.style.position = "absolute";
//   this.style.top = yPos + "px";
//   this.style.left = xPos + "px";
// });

element4.addEventListener("click", function() {
  this.classList.add("gradient-background");
});

element9.addEventListener("click", function() {
  this.classList.add("backgroundBlue")
});

element8.addEventListener("click", function(){
 this.animate(
    [
      {
        opacity: 1
      },
      {
        opacity: 0,
      }
    ],
    {
      duration: 200,
      iterations: 1,
      fill: "forwards"
    }
  );

});
          

let element10scroll = 100

element10.addEventListener('mousewheel',function(event){
  console.log(event)
  
  element10scroll += event.deltaY
  console.log(element10scroll)
  event.preventDefault()
  event.stopPropagation()
  
  if(element10scroll > 400){
    element10scroll = 400
  }
  if(element10scroll < 20){
    element10scroll = 20
  }
  
  
  element10.style.transform = 'scale(' + element10scroll/100 + ')'
  
})

element14.addEventListener("click", function() {
  this.classList.add("shape")
});

element15.addEventListener("click", function() {
  this.classList.add("pulse")
});

element16.addEventListener("click", function() {
  this.classList.add("rubberBand")
});
element17.addEventListener("click", function() {
  this.classList.add("jelly")
});
element18.addEventListener("click", function() {
  this.classList.add("jump")
});
element19.addEventListener("click", function() {
  this.classList.add("folding")

});
element20.addEventListener("click", function() {
  this.classList.add("smack")

});
element21.addEventListener("click", function() {
  this.classList.add("swirl")

});
element22.addEventListener("click", function() {
  this.classList.add("slideIn")
});
element23.addEventListener("click", function() {
  this.classList.add("bounceIn")
});
element24.addEventListener("click", function() {
  this.classList.add("rollIn")
});
element25.addEventListener("click", function() {
  this.classList.add("fadeIn")
});
element26.addEventListener("click", function() {
  this.classList.add("flicker")
});
element27.addEventListener("click", function() {
  this.classList.add("disappear")
});
element28.addEventListener("click", function() {
  this.classList.add("scramble")
});
element29.addEventListener("click", function() {
  this.classList.add("popUp")
});
element30.addEventListener("click", function() {
  this.classList.add("colorChange")
});
element31.addEventListener("click", function() {
  this.classList.add("resize")
});
element32.addEventListener("click", function() {
  this.classList.add("flipOver")
});
element33.addEventListener("click", function() {
  this.classList.add("slit")
});

dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

element35.addEventListener("click", function() {
  this.classList.add("puff")
});
element36.addEventListener("click", function() {
  this.classList.add("flipIn")
});
element37.addEventListener("click", function() {
  this.classList.add("shadowPop")
});
element38.addEventListener("click", function() {
  this.classList.add("shadows")
});
element39.addEventListener("click", function() {
  this.classList.add("shake")
});
element40.addEventListener("click", function() {
  this.classList.add("earth")
});
element41.addEventListener("click", function() {
  this.classList.add("pulse")
});
element42.addEventListener("click", function() {
  this.classList.add("spring")
});
element43.addEventListener("click", function() {
  this.classList.add("blink")
});
element44.addEventListener("click", function() {
  this.classList.add("wobble")
});
element45.addEventListener("click", function() {
  this.classList.add("crazy")
});

element46.addEventListener("click", function() {
  this.classList.add("rotating")
});

element47.addEventListener("click", function() {
  this.classList.add("flipping")
});
element48.addEventListener("click", function() {
  this.classList.add("disappearing")
});

element49.addEventListener("click", function() {
  this.classList.add("moving")
});
element50.addEventListener("click", function() {
  this.classList.add("slow")
});

