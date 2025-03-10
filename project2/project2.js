// Isaiah Stranathan 03/09/2025

// Initialize name variable
let myName = "Isaiah Stranathan";

// Set paragraph 1 to display Isaiah Stranathan
let para1 = document.getElementById("p1");
para1.textContent = myName;

// Initialize two number variables
let n1 = 5;  // Example value
let n2 = 10; // Example value

// Calculate and display the sum of n1 and n2 in paragraph 2
let numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

// Calculate and display the multiplication of n1 and n2 in paragraph 3
let numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

// Concatenate a number with the string variable in paragraph 4
let myNameAddNum = myName + n1;
document.getElementById("p4").textContent = myNameAddNum;

// Multiply a string with a number (will result in NaN) in paragraph 5
let myNameMultNum = myName * n1;
document.getElementById("p5").textContent = myNameMultNum; // Will show NaN

// Compare your age with the product of n1 and n2 in paragraph 6
let age = 25; // Example age
let ageCompare = age > (n1 * n2);
document.getElementById("p6").textContent = ageCompare;

// Change the values of n1 and n2
n1 = 8; 
n2 = 12;

// Refresh page and observe changes
