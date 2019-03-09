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
      //jquery alert
      $(".lastGuess").text("Your last guess was");
      //jquery to display the user's last guess
      $(".previousGuess").text(enterGuess);
      //jquery alert
      $(".guessAlert").text("BOOM, You win!");
      //calls function to change the range if they win
      updateRange(startMin, startMax);
    }
  };
// jQuery function to make sure the DOM is ready to run the code
$(document).ready(function(){
  //jquery click functionfor submit range button
  $("#submitRangeButton").click(function() {
    //prevents default action from being triggered
      event.preventDefault();
      //sets const variable for min that won't be reassigned
      const startMin = min();
      //sets const variable for max that won't be reassigned
      const startMax = max();
      //sets computer guess to a method call
      const computerGuess = setGuess();
      //jquery function to hide the section where user can enter in a range
      $(".range-container").hide();
      //jquery click functionfor submit button
    $("#submitButton").click(function() {
      //prevents default action from being triggered
      event.preventDefault();
      //pass in the needed variables into the lowhigh function
      lowOrHigh(computerGuess, startMin, startMax);
      //jquery to show alerts
      $(".guessDescrip").show()
      $(".guessAlert").show()
      $('#resetButton').show()
    });
  });
  //jquery to click the reset button
  $('#resetButton').click(function() {
//reloads the page
    location.reload();
  });
});
