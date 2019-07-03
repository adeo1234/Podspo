$(document).ready(function() {

//hover over tiled images
  $(".hoverfade").hover(function() {
    $(this).stop().animate({opacity: "0.5"}, 'slow');
  },
  function() {
    $(this).stop().animate({opacity: "1"}, 'slow');
  });

//alert button
  $("#submit").click(function() {
    alert("Thanks, you are now subscribed!");
  });

});

//Quiz

function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var correct = 0;

  if (question1 == "Comedy") {
    correct++;
  }
  if (question2 == "Under 35") {
    correct++;
  }
  if (question3 == "750,000") {
    correct++;
  }
  if (question4 == "Tablet") {
    correct++;
  }
  if (question5 == "At home") {
    correct++;
  }
  if (question6 == "6") {
    correct++;
  }
  if (question7 == "Desert Island Discs") {
    correct++;
  }

var messages = ["You really need to do better", "Better luck next tim", "We cant all be winners", "Good try", "Keep going", "Almost there", "So close", "Great job!", "You are amazing!"];

var pictures = ["images/clap.gif", "images/try.gif", "images/help.gif", "images/meh.jpeg", "images/next.gif", "images/lose.gif", "images/win.gif", "images/sparkles.gif", "images/Winner.gif"];

var range;

  if (correct < 2) {
    range = 2;
  }

  if (correct > 2 && correct < 5) {
    range = 1;
  }

  if (correct > 5) {
    range = 0;
  }

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("message").innerHTML = messages[correct];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
document.getElementById("picture").src = pictures[correct];
}
