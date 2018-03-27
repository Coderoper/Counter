
$(document).ready(function() {
	$("#formOne").submit(function(event){
		event.preventDefault();
    //user defined number to count to
   	var CountTo = parseInt($("input#CountTo").val());
    //user defined number to count by
    var CountBy = parseInt($("input#CountBy").val());
    //var total is set to 0 to initialize the count
    var total = 0; console.log();
    // variable i is initialization value
    //variable CountTo is condition parameter
    //variable CountBy is the step value
      if (CountTo == "NaN" || CountBy == "NaN") {
      	alert("Your left something blank! Please enter a number to run the counter");
      } else {
        for ( var i = 0; i < CountTo; i	+= CountBy) {
        total += CountBy;
        $("#results").append(total + ", ");
        }
      }
	});
});
