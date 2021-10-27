var a = document.querySelectorAll(".navbar li a");
for (let i = 0, length = a.length; i < length; i++) {
  a[i].onclick = function() {
    var b = document.querySelector(".navbar li.active");
    if (b) b.classList.remove("active");
    this.parentNode.classList.add('active');
  };
}

// Color palette variables
let dark = '#252525';
let mid = '#888';
let light = 'rgba(255, 255, 255, 0.4)';

// Add scrollmagic controller
let controller = new ScrollMagic.Controller();

//------------------
//TIMELINE 1
//------------------

// Add timeline
let tl1 = anime.timeline({autoplay: false});

// Add animations
let s1a1 = {
  targets: '#one .elem',
  opacity: 1,
  translateX: {
    value: [250, 0],
    duration: 100
  },
  rotate: {
    value: [90, 0],
    duration: 1200,
    easing: 'easeInOutSine'
  },
  scale: {
    value: [2, 1.5],
    duration: 1100,
    delay: 800,
    easing: 'easeInOutQuart'
  },
//   color: [light, dark],
  duration: 3000,
  delay: 0,
  easing: 'easeInOutSine'
};

let s1a2 = {
  targets: '#one .elem .blocks > div',
  backgroundColor: [light, dark],
  borderRadius: function(el) { return anime.random(2, 10); },
  delay: function(el) { return anime.random(0, 800); }
};

let s1a3 = {
  targets: '#one .rectangle',
  opacity: [0,1],
  translateX: {
    value: ['-100vw', '0vw'],
    duration: 500,
  },
  translateY: {
    value: [-100, 0],
    duration: 1500,
  },
  easing: 'easeInOutSine',
  duration: 2000
};

// Add children
tl1.add(s1a3).add(s1a1, '-=1600').add(s1a2, '-=1300');

// Get section height
let oneHeight = document.getElementById("one").clientHeight;
console.log('oneHeight: ' + oneHeight);


//Add first scrollmagic scene
let scene1 = new ScrollMagic.Scene({
  triggerElement: "#one",
  triggerHook: 0.5,
  reverse: false
})



// Add timeline
let tl2 = anime.timeline({autoplay: false});

// Add animations

// NAIMATION MOCKUP MCBOOK 
let s2a1 = {
  targets: '#two .elem img',
  opacity: [0.2, 1],
  scale: [3,1],
  duration: 10000,
  delay: 0,
  easing: 'easeInOutSine'
};

let s2a2 = {
  targets: '#two .elem img',
  scale: 1,
  duration: 4000,
};

// Add children
tl2.add(s2a1).add(s2a2);

// Get section height
let twoHeight = document.getElementById("two").clientHeight;
console.log('twoHeight: ' + twoHeight);

//------------------
//SCENE 2
//------------------

//Add second scrollmagic scene
let scene2 = new ScrollMagic.Scene({
  triggerElement: "#two",
  duration: 3000,
  triggerHook: 0,
})

// Trigger animation timeline
//Use scroll position to play animation
.on("progress", function (event) {
  tl2.seek(tl2.duration * event.progress);
})

.setPin('#two')
.addTo(controller);




