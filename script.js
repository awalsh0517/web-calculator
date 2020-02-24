
 function total () {
  var field1 = document.getElementById("number1").value;
  var field2 = document.getElementById("number2").value;
  var result = parseFloat(field1) + parseFloat(field2);

  if (!isNaN(result)) {
      document.getElementById("answer").innerHTML = "The answer is " + result;
  }
}
