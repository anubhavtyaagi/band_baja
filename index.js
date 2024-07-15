for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
   var buttoninnerhtml = this.innerHTML;
   makesound(buttoninnerhtml);
   addAnimation(buttoninnerhtml);
});
}

document.addEventListener("keydown",function(event){
  makesound(event.key);
  addAnimation(event.key);
});

function makesound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;

      case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

      case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

      case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

      case "j":
      var tom5 = new Audio("sounds/kick-bass.mp3");
      tom5.play();
      break;

      case "k":
      var tom6 = new Audio("sounds/snare.mp3");
      tom6.play();
      break;

      case "l":
      var tom7 = new Audio("sounds/tom-1.mp3");
      tom7.play();
      break;

    default:
      console.log(buttoninnerhtml);
      break;
   }
}

function addAnimation(currentKey)
{
  var activatedKey = document.querySelector("."+currentKey);
  activatedKey.classList.add("pressed");

  setTimeout( function(){
    activatedKey.classList.remove("pressed");
  } , 200)
}



//var audio = new Audio("sounds/tom-1.mp3");
 //   audio.play();