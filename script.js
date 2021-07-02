
function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * rate / 100) * years;
  var year = new Date().getFullYear() + parseInt(years);
  var result = "\n If you deposit " + principal + ",\n at an interest rate of " + rate + "%. \n You will receive an amount of " + interest + ", \n in the year " + year + "\n\n";
  if (validate(principal))
    document.getElementById("result").innerText=result;
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function validate(number) {
  if (number <= 0) {
    alert("Enter a positive number.");
    return false;
  }
  else
    return true;
}
