$(document).ready(function(){

  function setGuess() {
    var minRange = $("#minRange").val();
    var maxRange =$("#maxRange").val();
    var min = parseInt(minRange);
    var max = parseInt(maxRange);
    if (isNaN(min) || isNaN(max)) {
      $(".guessAlert").text("Please enter a number");
    }
    else {
      $(".rangeAlert").text(`Your number range is ${min} to ${max}`)
      var compNum = Math.floor((Math.random() * (max - min + 1) + min));
    }
    return compNum
  };
  function min() {
    var minRange = $("#minRange").val();
    var min = parseInt(minRange);
    return min
  };

  function max() {
    var maxRange =$("#maxRange").val();
    var max = parseInt(maxRange);
    return max
  };

  function updateRange(startMin, startMax) {
    var newMin = (startMin += 10);
    var newMax = (startMax -= 10);
  };

  var guessDiff = function(x, y) {
    return Math.round(x - y);
  };

  var lowOrHigh = function(computerGuess, startMin, startMax) {
    var enterGuess = $("#enterGuess").val();
    var diffTotal = guessDiff(enterGuess, computerGuess);
    if (isNaN(enterGuess) || enterGuess === "") {
      $(".guessAlert").text("Please enter a number");
    }
    else if (diffTotal < 0) {
      $(".lastGuess").text("Your last guess was");
      $(".previousGuess").text(enterGuess);
      $(".guessAlert").text("That's too low");
    }
    else if (diffTotal > 0) {
      $(".lastGuess").text("Your last guess was");
      $(".previousGuess").text(enterGuess);
      $(".guessAlert").text("That's too high");
    }
    else {
      $(".lastGuess").text("Your last guess was");
      $(".previousGuess").text(enterGuess);
      $(".guessAlert").text("BOOM, You win!");
      updateRange(startMin, startMax)
    }
  };

  $("#submitRangeButton").click(function() {
      event.preventDefault();
      const startMin = min();
      const startMax = max();
      const computerGuess = setGuess();
    $("#submitButton").click(function() {
      event.preventDefault();
      lowOrHigh(computerGuess, startMin, startMax);
      $(".guessDescrip").show()
      $(".guessAlert").show()
      $('#resetButton').show()
    });
  });

  $('#resetButton').click(function() {
    location.reload();
  });

});
