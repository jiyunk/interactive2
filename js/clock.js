
let timeEl = document.querySelector('#time')
let koreaEl = document.querySelector('#koreaTime')

let grad1 = document.querySelector('#grad')
let grad2 = document.querySelector('#grad02')

// run getTime once on load

getTime();

// call getTime every 1 second going forward

setInterval(function() {
  getTime();
}, 1000);


// set up time getting function

function getTime(){
  
  // get the date object
  
  let d = new Date();


  let koreaOffset = 9 * 60

  sfOffset = d.getTimezoneOffset();
  
  let UTC = new Date((d.getTime() + (sfOffset * 60 * 1000)));

  

  let korea = new Date((UTC.getTime() + (koreaOffset * 60 * 1000)));  
  // get hours, minutes, and seconds from the date object
  
  

  let h = addZeroIfNeeded(d.getHours());
  let m = addZeroIfNeeded(d.getMinutes());
  let s = addZeroIfNeeded(d.getSeconds());

  // let meridan = 'am'

  // if(h > 12){
  // h = h - 12
  // meridan = 'pm'
  // }

  // update the clock's text with our time vars
  
 
  let timeText = h + ":" + m + ":" + s
  timeEl.innerText = timeText

  grad2.setAttribute('class','')
  grad2.classList.add('phase-' + Math.floor(h/4))



  h = addZeroIfNeeded(korea.getHours());
  m = addZeroIfNeeded(korea.getMinutes());
  s = addZeroIfNeeded(korea.getSeconds());



  grad1.setAttribute('class','')
  grad1.classList.add('phase-' + Math.floor(h/4))


  timeText = h + ":" + m + ":" + s
  koreaEl.innerText = timeText



  // rotate secondHand based on the second value
  
  // s ranges from 0 to 60, so to turn it into degrees
  // we need to multiply s by 6
  
  
}

// add a zero to times below 10

function addZeroIfNeeded(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}



