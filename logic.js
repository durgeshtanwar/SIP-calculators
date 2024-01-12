let investment = document.getElementById("investment");

let returnRate = document.getElementById("returnRate");

let period = document.getElementById("period");

let investmentvalue = document.getElementById("investment-value");

let returnValue = document.getElementById("return-value");

let periodValue = document.getElementById("period-value");

let investedAmount = document.getElementById("investedAmount");

let estimatedValue = document.getElementById("estimatedReturn");

let totalValue = document.getElementById("totalValue");

returnRate.value = 12;
returnValue.innerHTML = `${returnRate.value}%`;

period.value = 10;
periodValue.innerHTML = `${period.value}yr`;

investment.value = 5000;
investmentvalue.innerHTML = `₹${investment.value}`;

let sipsAmount = investment.value; // Replace with your SIP amount
let rateOfReturns = returnRate.value; // Replace with your expected annual rate of return
let numbersOfMonths = period.value * 12; // Replace with the number of months (SIP tenure)
let total = 0;
// event listners

investment.addEventListener("input", () => {
  investmentvalue.innerHTML = asMoney(investment.value);
  sipsAmount = investment.value;
  investedAmount.innerHTML = asMoney(Number(sipsAmount * numbersOfMonths));
  total = calculateSIP(
    +investment.value,
    +returnRate.value,
    +period.value * 12
  );
  totalValue.innerHTML = asMoney(total);
  estimatedValue.innerHTML = asMoney(
    total - Number(sipsAmount * numbersOfMonths)
  );
});

returnRate.addEventListener("input", () => {
  returnValue.innerHTML = asMoney(returnRate.value, " ", "%");
  sipsAmount = investment.value;
  investedAmount.innerHTML = asMoney(Number(sipsAmount * numbersOfMonths));
  total = calculateSIP(
    +investment.value,
    +returnRate.value,
    +period.value * 12
  );
  totalValue.innerHTML = asMoney(total);
  estimatedValue.innerHTML = asMoney(
    total - Number(sipsAmount * numbersOfMonths)
  );
});

period.addEventListener("input", () => {
  periodValue.innerHTML = asMoney(period.value, " ", "yr");
  sipsAmount = investment.value;
  numbersOfMonths = period.value * 12;
  investedAmount.innerHTML = sipsAmount * numbersOfMonths;
  total = calculateSIP(
    +investment.value,
    +returnRate.value,
    +period.value * 12
  );
  totalValue.innerHTML = asMoney(total);
  estimatedValue.innerHTML = asMoney(
    total - Number(sipsAmount * numbersOfMonths)
  );
});

//et totalInvestedValue = sipsAmount * numbersOfMonths;

//investedAmount.textContent = totalInvestedValue;

// function to calculate things

function asMoney(value, prefix = "₹", suffix = " ") {
  return (
    prefix +
    parseFloat(value).toLocaleString("en-US", { maximumFractionDigits: 2 }) +
    suffix
  );
}

// main calculations
function calculateSIP(sipAmount, rateOfReturn, numberOfMonths) {
  // Convert annual rate of return to monthly rate
  let monthlyRate = rateOfReturn / 12 / 100;
  console.log(monthlyRate);
  console.log(sipAmount, rateOfReturn, numberOfMonths);
  // Calculate future value using the alternative SIP formula
  let futureValue =
    sipAmount *
    (((Math.pow(1 + monthlyRate, numberOfMonths) - 1) / monthlyRate) *
      (1 + monthlyRate));
  console.log(futureValue.toFixed(2));
  return Math.round(futureValue.toFixed(2)); // Round to two decimal places
}

// Example usage:
// console.log(calculateSIP(1000, 12, 12));
