const colors = ["green", "blue", "red"];

const bicycle = {
  color: "blue",
  size: "small",
  ride() {
    console.log("you began to pedal.");
  },
};
bicycle.color = "red";
bicycle.size = "large";
//console.log(bicycle.color);

class Dog {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  bark() {
    console.log(`The ${this.color} dog, named ${this.name} began to bark`);
  }
}

class Sheperd extends Dog {
  constructor(name, color) {
    super(name, color);
  }
  run() {
    console.log(`The Sheperd ran!`);
  }
}

let dog1 = new Dog("Oliver", "Black");
let dog2 = new Dog("Bosco", "White");
let shep1 = new Sheperd("Rosco", "Black and Brown");

async function myFunction() {
  console.log("Hello World!");
}

myFunction().then(
  function (value) {
    //code if successful
  },
  function (error) {
    //code if there is an error
  }
);

const myPromise = new Promise(function (res, rej) {
  setTimeout(function () {
    res("Keep up the good work!");
  }, 3000);
});

myPromise.then(function (value) {
  console.log(value);
});

async function myDisplay() {
  let myPromise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("You are doing great!");
    }, 5000);
  });
  console.log(await myPromise);
}

myDisplay();
