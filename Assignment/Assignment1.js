/*Prabin and Ram comparing their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height)

(mass in kg and height in meter).

Your tasks:
1.Store Prabin's and Ram's mass and height in variables
2.Calculate both their BMIs using the formula
3.Create a Boolean variable 'prabinHigherBMI' containing information about whether Prabin has a higher BMI than Ram.
You need to calculate BIM
Test data:
1.2022 Data: Prabin weights 78 kg and is 1.70 m tall. Ram weights 92 kg and is 1.92 m tall.
2.2020 Data: Prabin weights 95 kg and is 1.69 m tall. Ram weights 85 kg and is 1.95 m tall.
*/

let prabinMass = 86;
let ramMass = 70;

let prabinHeight = 150;
let ramHeight = 142;

let prabinsBMI = prabinMass / (prabinHeight * prabinHeight)
let ramBMI = ramMass / (ramMass * ramMass)

let prabinHigherBMi = prabinsBMI > ramBMI;

console.log(`The BMI of prabin is ${prabinsBMI}.`);
console.log(`The BMI of ram is ${ramBMI}.`);

switch (prabinHigherBMi) {
    case true:
        console.log(`Prabin has higher BMI than ram.`);
        break;
    case false:
        console.log(`Ram has higher BMI than prabin.`);
        break;
}
