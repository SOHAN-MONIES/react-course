// const [firstName,lastName,...leftout] = ["SOHAN", "MONIES","IS"];
// console.log(firstName,lastName,leftout);

// const { name, age, salary: sal } = {
//     name: "SOHAN",
//     age: 21,
//     salary: 20000
// }
// console.log(name, age,sal);

const evenNumbers = [2, 4, 6];
const oddNumbers = [1, 3, 5];
const numbers = [...evenNumbers, ...oddNumbers]
console.log(numbers);