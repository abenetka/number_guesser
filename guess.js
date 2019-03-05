$(document).ready(function(){
  function setGuess() {
    var minRange = $("#minRange").val();
    var maxRange =$("#maxRange").val();
    var min = parseInt(minRange);
    var max = parseInt(maxRange);
    if (isNaN(min) || isNaN(max)) {
      $(".guessAlert").text("Please enter a number");
    }
    else{
      $(".rangeAlert").text(`Your number range is ${min} to ${max}`)
      var compNum = Math.floor((Math.random() * (max - min + 1) + min));
    }
    return compNum
  };

  var guessDiff = function(x, y) {
    return Math.round(x - y);
  };

  var lowOrHigh = function(computerGuess) {
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
  };

  $("#submitRangeButton").click(function() {
      event.preventDefault();
      const computerGuess = setGuess()
    $("#submitButton").click(function() {
      event.preventDefault();
      lowOrHigh(computerGuess);
      $(".guessDescrip").show()
      $(".guessAlert").show()
      $('#resetButton').show()
    });
  });

  $('#resetButton').click(function() {
    location.reload();
  });

});
