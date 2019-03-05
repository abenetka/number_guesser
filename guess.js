$(document).ready(function(){

  // var minRange = $("minRange").val()
  // var maxRange =$("maxRange").val()
  var enterGuess = $("#enterGuess").val();
  //difference between Computer and User guess
  var setGuess = function() {
    var minRange = $("#minRange").val();
    var maxRange =$("#maxRange").val();
    var min = parseInt(minRange);
    var max = parseInt(maxRange);
    if (isNaN(min) && isNaN(max)) {
      var computerGuess = Math.floor((Math.random() * 100) + 1);
    }
    else {
      var computerGuess = Math.floor((Math.random() * (minGuess - maxGuess + 1) + minGuess));
    }
    return computerGuess
    debugger;
  };

  var guessDiff = function(x, y) {
    return Math.round(x - y);
  };

  var lowOrHigh = function() {
    // var enterGuess = $("#enterGuess").val();
    // var computerGuess = Math.floor((Math.random() * 100) + 1);
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

  $("#submitRangeButton").click(function(minRange, maxRange) {
      setGuess();
      // event.preventDefault();
  });

  $("#submitButton").click(function(enterGuess) {
      // $('#resetButton').prop("disabled", false);
      event.preventDefault();
      setGuess();
      debugger;
      computerGuess
      lowOrHigh();
      $(".guessDescrip").show()
      $(".guessAlert").show()
      $('#resetButton').show()
    });

  $('#resetButton').click(function() {
    location.reload();
  });

});






//Low or High

// var rangeLowOrHigh = function() {
  //   var computerRangeGuess = Math.floor((Math.random() * (minGuess - maxGuess + 1) + minGuess));
  //   var enterGuess = $("#enterGuess").val();
  //   var diffRangeTotal = guessDiff(enterGuess, computerRangeGuess);
  //
  //   if (isNaN(enterGuess) || enterGuess === "") {
    //     $(".guessAlert").text("Please enter a number");
    //   }
    //   else if (diffRangeTotal < 0) {
      //     $(".guessDecrip").text("Your last guess was");
      //     $(".previousGuess").text(enterGuess);
      //     $(".guessAlert").text("That's too low");
      //   }
      //   else if (diffRangeTotal > 0) {
        //     $(".guessDecrip").text("Your last guess was");
        //     $(".previousGuess").text(enterGuess);
        //     $(".guessAlert").text("That's too high");
        //   }
        //   else {
          //     $(".guessDecrip").text("Your last guess was");
          //     $(".previousGuess").text(enterGuess);
          //     $(".guessAlert").text("BOOM, You win!");
          //   }
          // }
