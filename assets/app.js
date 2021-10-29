


let a = document.querySelectorAll(".navbar li a");
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

let controller = new ScrollMagic.Controller({
  addIndicators: true
});

//Add first scrollmagic scene

// Add timeline
let tl2 = anime.timeline({
  autoplay: false
}); 

// NAIMATION MOCKUP MCBOOK 
let s2a1 = {
  targets: '#two .elem img',
  opacity: [0, 1],
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
  offset: 50,
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


const test = new Letterize({
        targets: ".animate-me"
      });

      const animation = anime.timeline({
        targets: test.listAll,
        delay: anime.stagger(100, {
          grid: [test.list[0].length, test.list.length],
          from: "center"
        }),
        loop: false
      });

      animation
        .add({
          scale: 0.5
        })
        .add({
          letterSpacing: "10px"
        })
        .add({
          scale: 1
        })
        .add({
          opacity: [1, 0.5, 0]
        })
        .add({
          letterSpacing: "6px"
        });




