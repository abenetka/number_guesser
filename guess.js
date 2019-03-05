//difference between Computer and User guess
var guessDiff = function(x, y) {
  return Math.round(x - y);
};
//Random Number
var computerGuess = Math.floor((Math.random() * 5) + 1);
//Number of attempts
var numAttempted = 1;
//Low or High
var lowOrHigh = function() {
  var enterGuess = $("#enterGuess").val();
  var diffTotal = guessDiff(enterGuess, computerGuess);
  if (isNaN(enterGuess) || enterGuess === "") {
    $(".guessAlert").text("Please enter a number");
  }
  else if (diffTotal < 0) {
    $(".guessDecrip").text("Your last guess was");
    $(".previousGuess").text(enterGuess);
    $(".guessAlert").text("That's too low");
  }
  else if (diffTotal > 0) {
    $(".guessDecrip").text("Your last guess was");
    $(".previousGuess").text(enterGuess);
    $(".guessAlert").text("That's too high");
  }
  else {
    $(".guessDecrip").text("Your last guess was");
    $(".previousGuess").text(enterGuess);
    $(".guessAlert").text("BOOM, You win!");
  }
}

$(document).ready(function(){
  $("#submitButton").click(function(enterGuess) {
    $('#resetButton').prop("disabled", false);
    event.preventDefault();
    lowOrHigh();
    $(".guessDescrip").show()
    $(".guessAlert").show()
    $('#resetButton').show()
  });

  $('#resetButton').click(function() {
    location.reload();
});
});
