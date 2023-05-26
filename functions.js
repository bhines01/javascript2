function myDisplayer(message) {
  document.getElementById("demo").innerHTML = message;
}

function myfirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 20, myDisplayer);
