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
    $(".guessAlert").text("That's too low");
    $(".previousGuess").text(enterGuess);
  }
  else if (diffTotal > 0) {
    $(".guessAlert").text("That's too high");
    $(".previousGuess").text(enterGuess);
  }
  else {
    $(".guessAlert").text("BOOM, You win!");
    $(".previousGuess").text(enterGuess);
  }
}

$(document).ready(function(){
  $("#submitButton").click(function(enterGuess) {
    event.preventDefault();
    lowOrHigh();
    $(".guessAlert").show()
    $('#resetButton').show()
  });

  $('#resetButton').click(function() {
    location.reload();
});
});
