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
// Retirement plan calculation

let retirement_current_age = document.getElementById("retirement_current_age");
let expected_retirement_age = document.getElementById(
  "expected_retirement_age"
);

let retirement_monthly_contribution = document.getElementById(
  "retirement_monthly_contribution"
);
let retirement_return_rate = document.getElementById("retirment_return_rate");

let retirement_current_age_value = document.getElementById(
  "retirement_current_age_value"
);

let expected_retirement_age_value = document.getElementById(
  "expected_retirement_age_value"
);
let retirement_monthly_contribution_value = document.getElementById(
  "retirement_monthly_contribution_value"
);

let retirement_return_rate_value = document.getElementById(
  "retirment_return_rate_value"
);

let future_value_retirement = document.getElementById(
  "future_value_retirement"
);

let futureValue;
retirement_current_age.value = 30;
retirement_current_age_value.textContent = retirement_current_age.value;

retirement_current_age.addEventListener("input", () => {
  retirement_current_age_value.textContent = retirement_current_age.value;
  futureValue = Number(
    calculateRetirementPlanValue(
      retirement_current_age.value,
      expected_retirement_age.value,
      retirement_monthly_contribution.value,
      retirement_return_rate.value
    )
  );
  future_value_retirement.textContent = `Rs ${Math.round(
    futureValue.toFixed(2).toLocaleString("en-US")
  )}`;
});

expected_retirement_age.value = 60;
expected_retirement_age_value.textContent = expected_retirement_age.value;

expected_retirement_age.addEventListener("input", () => {
  expected_retirement_age_value.textContent = expected_retirement_age.value;
  futureValue = Number(
    calculateRetirementPlanValue(
      retirement_current_age.value,
      expected_retirement_age.value,
      retirement_monthly_contribution.value,
      retirement_return_rate.value
    )
  );
  future_value_retirement.textContent = `Rs ${Math.round(
    futureValue.toFixed(2).toLocaleString("en-US")
  )}`;
});

retirement_monthly_contribution.value = 5000;
retirement_monthly_contribution_value.textContent =
  retirement_monthly_contribution.value;

retirement_monthly_contribution.addEventListener("input", () => {
  retirement_monthly_contribution_value.textContent =
    retirement_monthly_contribution.value;
  futureValue = Number(
    calculateRetirementPlanValue(
      retirement_current_age.value,
      expected_retirement_age.value,
      retirement_monthly_contribution.value,
      retirement_return_rate.value
    )
  );
  future_value_retirement.textContent = `Rs ${Math.round(
    futureValue.toFixed(2).toLocaleString("en-US")
  )}`;
});

retirement_return_rate.value = 12;
retirement_return_rate_value.textContent = retirement_return_rate.value;

retirement_return_rate.addEventListener("input", () => {
  retirement_return_rate_value.textContent = retirement_return_rate.value;
  futureValue = Number(
    calculateRetirementPlanValue(
      retirement_current_age.value,
      expected_retirement_age.value,
      retirement_monthly_contribution.value,
      retirement_return_rate.value
    )
  );
  future_value_retirement.textContent = `Rs ${Math.round(
    futureValue.toFixed(2).toLocaleString("en-US")
  )}`;
});

futureValue = Number(
  calculateRetirementPlanValue(
    retirement_current_age.value,
    expected_retirement_age.value,
    retirement_monthly_contribution.value,
    retirement_return_rate.value
  )
);

future_value_retirement.textContent = `Rs ${Math.round(
  futureValue.toFixed(2).toLocaleString("en-US")
)}`;

function calculateRetirementPlanValue(
  currentAge,
  retirementAge,
  periodicContribution,
  rateOfReturn,
  compoundingPeriodsPerYear = 12
) {
  // Convert annual rate of return to decimal
  let r = rateOfReturn / 100;

  // Calculate the total number of years until retirement
  let yearsUntilRetirement = retirementAge - currentAge;

  // Calculate future value of a series (retirement plan)
  let n = compoundingPeriodsPerYear;
  let t = yearsUntilRetirement;

  let futureValue =
    periodicContribution * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));

  return futureValue.toFixed(2); // Round to two decimal places
}

// Example usage:
let currentAge = 35; // Replace with your current age
let retirementAge = 60; // Replace with your expected retirement age
let periodicContribution = 5000; // Replace with your monthly or yearly contribution
let rateOfReturn = 8; // Replace with your expected annual rate of return
let compoundingPeriodsPerYear = 12; // For monthly contributions

let result = calculateRetirementPlanValue(
  currentAge,
  retirementAge,
  periodicContribution,
  rateOfReturn,
  compoundingPeriodsPerYear
);
console.log("Future Value of Retirement Plan: Rs" + result);

//  Dream House

let dream;

function calculateDreamHomeValue(
  periodicContribution,
  rateOfReturn,
  yearsUntilPurchase,
  compoundingPeriodsPerYear = 12
) {
  // Convert annual rate of return to decimal
  let r = rateOfReturn / 100;

  // Calculate future value of a series (dream home planning)
  let n = compoundingPeriodsPerYear;
  let t = yearsUntilPurchase;

  let futureValue =
    periodicContribution * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));

  return futureValue.toFixed(2); // Round to two decimal places
}

// Example usage:
let dreamperiodicContribution = 1000; // Replace with your monthly or yearly contribution
let dreamrateOfReturn = 6; // Replace with your expected annual rate of return
let yearsUntilPurchase = 5; // Replace with the number of years until you plan to purchase your dream home
let dreamCompoundingPeriodsPerYear = 12; // For monthly contributions

let dreamresult = calculateDreamHomeValue(
  dreamperiodicContribution,
  dreamrateOfReturn,
  dreamyearsUntilPurchase,
  dreamcompoundingPeriodsPerYear
);
console.log("Future Value for Dream Home: $" + result);
