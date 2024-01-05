window.onload = () => {
  document.body.classList.remove("container");

  //     setInterval(() => {
  //
  //     }, 1000);
  //   }
  //   document.getElementById("foobar").play();

  myPlay();
};
// var sample = document.getElementById("foobar");
// sample.play();

// window.onload=function(){
//         document.getElementById("foobar").play();
//       }
function myPlay() {
  var audio = new Audio("./mp3/Midnight Rain X Daylight by Taylor Swift.mp3");
  audio.loop = true;
  audio.play();
}
