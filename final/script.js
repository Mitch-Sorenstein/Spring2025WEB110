function calculateAddition(num) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
      result += `${i} + ${num} = ${i + num}<br>`;
    }
    document.getElementById("addition").innerHTML = result;
  }
  
  function calculateSubtraction(num) {
    let result = "";
    let i = 1;
    while (i <= 10) {
      result += `${i} - ${num} = ${i - num}<br>`;
      i++;
    }
    document.getElementById("subtraction").innerHTML = result;
  }
  
  function calculateMultiplication(num) {
    let result = "";
    let i = 1;
    do {
      result += `${i} × ${num} = ${i * num}<br>`;
      i++;
    } while (i <= 10);
    document.getElementById("multiplication").innerHTML = result;
  }
  
  function calculateDivision(num) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
      result += `${i} ÷ ${num} = ${(i / num).toFixed(2)}<br>`;
    }
    document.getElementById("division").innerHTML = result;
  }
  
  function runAllCalculations() {
    const inputVal = parseFloat(document.getElementById("num").value);
    if (!isNaN(inputVal)) {
      calculateAddition(inputVal);
      calculateSubtraction(inputVal);
      calculateMultiplication(inputVal);
      calculateDivision(inputVal);
    } else {
      alert("Please enter a valid number.");
    }
  }
  
  document.getElementById("calculateBtn").addEventListener("click", runAllCalculations);
  