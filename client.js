const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

function bonusCalculator(inputEmployee) {
  console.log("calculating bonus");
  console.log("calculating bonus");
  Number(inputEmployee.annualSalary);
  let bonus = 0;
  if ((inputEmployee.reviewRating) <= 2) {
    bonus = 0
  } else if (inputEmployee.reviewRating = 3) {
    bonus = .04 * inputEmployee.annualSalary

  } else if (inputEmployee.reviewRating = 4) {
    bonus = .04 * inputEmployee.annualSalary

  } else if (inputEmployee.reviewRating = 5) {
    bonus = .04 * inputEmployee.annualSalary
  } else {
    console.log("something is wrong")
  }


  if ((inputEmployee.employeeNumber >= 9999)) {
    bonus = bonus + (.05 * inputEmployee.annualSalary);
  }
  if (inputEmployee.annualSalary > 65000) {
    bonus = bonus - (.05 * inputEmployee.annualSalary)
  }
  if (bonus <= 0) {
    bonus = 0;
  }
  if ((bonus/inputEmployee.annualSalary) > .13) {
    let bonus = inputEmployee.annualSalary*.13
  }
  console.log(bonus);
  return Number(bonus)
}
// ### Individual Bonus calculation
//Those who have a rating of a 2 or below should not receive a bonus.
//Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
//Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
//Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
//If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
//and should receive an additional 5%.
//However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
//No bonus can be above 13% or below 0% total.
//## Function Logic

//Write a declared function that takes in one **Employee** object (as an argument to the function), and returns a new **object** with the following properties:

function makeObject(inputEmployee) {
  console.log("running makeObject");
  let bonus = bonusCalculator(inputEmployee);
 

  return {
    name: inputEmployee.name,
    totalSalary: Number(inputEmployee.annualSalary),
    //something was messed up so I added this to see it easier
    bonusPercentage: bonus/inputEmployee.annualSalary,
    totalCompensation: Number(inputEmployee.annualSalary) + bonus,
    totalBonus: Math.round(bonus)
  }
}

//* The `name` property should contain the employee's name.
//* The `bonusPercentage` property should contain the bonus percentage the employee is to receive. 
//See section below for calculation instructions.
//* The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)
//* The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.

function loop() {
  newArray = [];
  for (let i = 0; i < employees.length; i++) {
    console.log(employees[i]);
    newArray.push(makeObject(employees[i]));
  }
  return newArray
}
console.log(loop(employees))



