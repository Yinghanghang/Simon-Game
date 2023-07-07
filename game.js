
var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ['red', 'blue', 'green', 'yellow'];
var level = 0;
var started = false;

function nextSequence(){
    var randomNumber = Math.floor(Math.random(0,1) * 4); 
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // $("#" + randomChosenColour).fadeOut(200, function() {
    //     $("#" + randomChosenColour).fadeIn(200, function(){
           
    //     })
    // })    

    level += 1;
    $("h1").text("Level " + level);

    setTimeout(function() { $("#" + randomChosenColour).fadeOut(200, function() {
      $("#" + randomChosenColour).fadeIn(200, function(){ })
    }) }, 200);

}

function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3"); 
    audio.play();
  }

  function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        document.querySelector('.pressed').classList.remove('pressed');
      }, 100);
  }

$(".btn").click(function(){   
    var userChosenColour =  $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);    
    checkAnswer(userClickedPattern.length - 1);
  });

$(document).keypress(function(event){
    if(!started){
      nextSequence();
      started = true;  
    }   
 });

 function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
        if(gamePattern.length == userClickedPattern.length){
            setTimeout(function() {nextSequence()}, 1000);
            userClickedPattern = [];
        }
    }else {
        playSound("wrong");
        $("h1").html("Game Over<br>Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function() {$("body").removeClass("game-over")}, 200);
        startOver();
    }
 }

 function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false; 
 }









