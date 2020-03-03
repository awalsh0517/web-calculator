function total() {
  var result;
  var field1 = document.getElementById('number1').value;
  var field2 = document.getElementById('number2').value;
  var symbolName = document.getElementById('symbol').value;

  if (symbolName === 'add') {
    result = parseFloat(field1) + parseFloat(field2);
  } else if (symbolName === 'subtract') {
    result = parseFloat(field1) - parseFloat(field2);
  } else if (symbolName === 'multiply') {
    result = parseFloat(field1) * parseFloat(field2);
  } else if (symbolName === 'divide') {
    result = parseFloat(field1) / parseFloat(field2);
  }

  document.getElementById('answer').innerHTML = 'The answer is ' + result;
}

function symbolChange() {
  document.getElementById('calculate').innerHTML = document.getElementById('symbol').value.toUpperCase() || 'CALCULATE';
}
