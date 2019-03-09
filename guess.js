//
//function to determine the computer's guess
  function setGuess() {
    //jquery syntax and let to grab minimum range input value
    let minRange = $("#minRange").val();
    //jquery syntax and let to grab max range input value
    let maxRange =$("#maxRange").val();
    //turns string to integer and assigns to variable
    let min = parseInt(minRange);
    //turns string to integer and assigns to variable
    let max = parseInt(maxRange);
    //conditional to set range
    //checks if the variables are numbers
    if (isNaN(min) || isNaN(max)) {
      //jquery alert
      $(".guessAlert").text("Please enter a number");
    }
    else {
      //jquery alert with string interpolation of min/max
      $(".rangeAlert").text(`Your number range is ${min} to ${max}`)
      //let to set computer guess based on min and max
      let compNum = Math.floor((Math.random() * (max - min + 1) + min));
    }
    //return the compNum when this function is called
    return compNum
  };
// defining function to set the min so can pass into other functions and reassign values
  function min() {
    //jquery syntax and let to grab minimum range input value
    let minRange = $("#minRange").val();
    //turns string to integer and assigns to variable
    let min = parseInt(minRange);
    //return min value so can be assigned in user wins
    return min
  };
  // defining function to set the max so can pass into other functions and reassign values
  function max() {
    //jquery syntax and let to grab minimum range input value
    let maxRange =$("#maxRange").val();
    //turns string to integer and assigns to variable
    let max = parseInt(maxRange);
    //return min value so can be assigned in user wins
    return max
  };
// defining function to updateRange in a user wins
  function updateRange(startMin, startMax)
    //let to assign new variable within function, minus 10 for minimum
    let newMin = parseInt(startMin) - 10;
    //let to assign new variable within function,plus 10 for maximum
    let newMax = parseInt(startMax) + 10;
    //pass in newMin to jquery
    $("minRange").val(newMin);
    //pass in newMax to jquery
    $("maxRange").val(newMax);
    //new computer guess on winning values
    computerGuess = Math.floor((Math.random() * (newMax - newMin + 1) + newMin));
    //jquery alert with string interpolation for
    $(".rangeAlert").text(`Your new number range is ${newMin} to ${newMax}`);
  };
// defining function to calculate difference between computer guess and user guess
  let guessDiff = function(x, y) {
    //return the difference between 2 numbers and rounded
    return Math.round(x - y);
  };
// function to determine if the guess is correct or not
// passes in const variables
  let lowOrHigh = function(computerGuess, startMin, startMax) {
    //jquery to get guess
    let enterGuess = $("#enterGuess").val();
    //calls guessDiff function and passes guesses in
    let diffTotal = guessDiff(enterGuess, computerGuess);
    //conditional to check if guess is a number or nothing entered in field
    if (isNaN(enterGuess) || enterGuess === "") {
      //jquery alert
      $(".guessAlert").text("Please enter a number");
    }
    //conditional for difference < 0
    else if (diffTotal < 0) {
      //jquery alert
      $(".lastGuess").text("Your last guess was");
      //jquery to display the user's last guess
      $(".previousGuess").text(enterGuess);
      //jquery alert
      $(".guessAlert").text("That's too low");
    }
    // conditional for a guess too high
    else if (diffTotal > 0) {
      //jquery alert
      $(".lastGuess").text("Your last guess was");
      //jquery to display the user's last guess
      $(".previousGuess").text(enterGuess);
      //jquery alert
      $(".guessAlert").text("That's too high");
    }
    else {
      $(".lastGuess").text("Your last guess was");
      $(".previousGuess").text(enterGuess);
      $(".guessAlert").text("BOOM, You win!");
      updateRange(startMin, startMax);
    }
  };

$(document).ready(function(){
  $("#submitRangeButton").click(function() {
      event.preventDefault();
      const startMin = min();
      const startMax = max();
      const computerGuess = setGuess();
      $("#submitRangeButton").prop("disabled", true);
      $("#submitButton").prop("disabled", false);
      $(".range-container").hide();

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
