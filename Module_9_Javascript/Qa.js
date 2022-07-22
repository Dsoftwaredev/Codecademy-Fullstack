// getting started with Javascript

console.log('Daniel');
console.log('Maton-Walker');
console.log('Birmingham');
console.log('Libra');

let car = 'BMW';
let make = 'M5';

console.log(`My favourite car is ${car} which is an ${make}`);

console.log("%cThis is now the end of the exercises.","color: red;font-family:fantasy; font-style: Bold; background-color: black;padding: 10px");

//Variables

let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar;
console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`);

//Arrays

let darthVader = {
    allegiance: "Empire",
    weapon: "lightsaber",
    sith: true
};

console.log(darthVader);

console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Is Darth Vader a sith? ${darthVader.sith}`);
console.log(`Is Darth Vader a Jedi? ${darthVader.sith ? "false" : "true"}`);


let myArray = ["hello",'everyone'];
 console.log(myArray.length);
 myArray.push("goodbye");
 console.log(myArray.length);
 myArray.shift();
 for(let eachElement of myArray) {
     console.log(eachElement);
 }

 let a = 100;
while (a < 200) {
  a++;
  console.log(a);
}

let b = 100;
while (b <= 200) {
  if (b % 2 == 0) {
    console.log("-");
  } else {
    console.log("*");
  }
  b++;
}

for (let c = 0; c < 10; c++) {
    for (let c = 1; c <= 10; c++) {
      console.log(c);
    }
 }  