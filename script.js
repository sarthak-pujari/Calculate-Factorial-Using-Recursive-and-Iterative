function isValidInput(num) {
    return Number.isInteger(num) && num >= 0;
  }
  
  function iterativeFactorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  function recursiveFactorial(n) {
    if (n <= 1) return 1;
    return n * recursiveFactorial(n - 1);
  }
  
  function calculateFactorial() {
    const numberInput = document.getElementById('numberInput').value;
    const method = document.getElementById('method').value;
    const resultDiv = document.getElementById('result');
  
    const num = Number(numberInput);
    if (!isValidInput(num)) {
      resultDiv.innerText = 'Please enter a valid non-negative integer.';
      return;
    }
  
    let result;
    if (method === 'iterative') {
      result = iterativeFactorial(num);
    } else {
      result = recursiveFactorial(num);
    }
  
    resultDiv.innerText = `Factorial of ${num} (${method}) is: ${result}`;
  }
  