
var pattern = [];
var userClick = [];
var level=0;



$("#level-title").click(startGame);

$(".btn").click(function(){

  //userClick=[];
  var clickedButton = $(this).attr("id");
  animatePress(clickedButton);
  playSound(clickedButton);
  userClick.push(clickedButton);
  /*console.log(userClick.length);
  console.log(level);
  console.log(pattern);
  */
  checkClick(userClick.length-1);

});

function startGame(){
  level=0;
  pattern=[];
  createPattern();
}

function checkClick(l){
/*
  var patternFlag=0;
  for(var i=0;i<level;i++){
    if(pattern[i]===userClick[i]){
      patternFlag=1;
    }
    else{
      patternFlag=0;
      break;
    }
  }
  */
    if(pattern[l]===userClick[l]){
      if(userClick.length===pattern.length){
        setTimeout(createPattern,1200);
      }
    }
    else{
        $("h1").text("Game over");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
          $("body").removeClass("game-over");
          $("h1").html("<u>Click here to restart<u>");
        },2000);


    }
}

 function displayLevel(){
    $("h1").html("Level "+level);
 }

    function createPattern(){
    userClick = [];
    level++;
    displayLevel();
    var randnumber = Math.floor(Math.random()*4)+1;
    switch(randnumber){
      case 1:
            pattern.push("red");
            animatePress("red");
            playSound("red");
            break;
      case 2:
            pattern.push("green");
            animatePress("green");
            playSound("green");
            break;
      case 3:
            pattern.push("blue");
            animatePress("blue");
            playSound("blue");
            break;
      case 4:
            pattern.push("yellow");
            animatePress("yellow");
            playSound("yellow");
            break;
        default:
    }
  }


function playSound(color){
  var audio= new Audio("sounds/"+color+".mp3");
  audio.play();
}

function animatePress(button){
  $("#"+button).addClass("pressed");
  setTimeout(function(){
    $("#"+button).removeClass("pressed");
  },100)
}
