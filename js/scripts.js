$(function() {
  $(".jumbotron a").click(function() {
    $(".survey").show();
  });

  $(".survey form").submit(function(event) {
    event.preventDefault();

    var firstName = $("input#first").val();
    var lastName = $("input#last").val();
    var answers = ["q1", "q2", "q3", "q4"];

    var newAnswers = [];
    newAnswers.push(answers[0], answers[1], answers[2]);
      alert(newAnswers);


    newAnswers.forEach(function(newAnswer) {
      var userInput = $("input#" + newAnswer).val();
      $("." + newAnswer).text(userInput);
    });


    $(".survey").hide();
    $(".reveal").show();
    $(".reveal #firstname").text(firstName).show();
    $(".reveal #lastname").text(lastName).show();

    if (answers === "") {
      alert("Please complete form");
      $("input#").addClass("is-invalid");
    };
  });
});
