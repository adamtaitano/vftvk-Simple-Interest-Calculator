
function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * rate / 100) * years;
  var year = new Date().getFullYear() + parseInt(years);
  var first = "If you deposit";
  var second = ",\n at an interest rate of ";
  var third = "\n You will receive an amount of ";
  var fourth = ",\n in the year";
  if (validate(principal)) {
    document.getElementById("deposit").innerText=first;
    document.getElementById("deposit-amt").innerText=principal;
    document.getElementById("interest").innerText=second;
    document.getElementById("interest-amt").innerText=rate+"%.";
    document.getElementById("amount").innerText=third;
    document.getElementById("amount-amt").innerText=interest;
    document.getElementById("year").innerText=fourth;
    document.getElementById("year-amt").innerText=year;
  }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function validate(number) {
  if (number <= 0) {
    alert("Enter a positive number.");
    document.getElementById("principal").focus();
    return false;
  }
  else
    return true;
}
