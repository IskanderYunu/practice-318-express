// Right now, we don't have a database, so we are mocking it up
// by using an array
// soon, we will learn how to access a database to store our data structures
//UPDATED
const fruits = [
  {
    name: "apple",
    color: "red",
    readyToEat: true,
  },
  {
    name: "pear",
    color: "green",
    readyToEat: false,
  },
  {
    name: "banana",
    color: "green",
    readyToEat: false,
  },
  {
    name: "grapes",
    color: "purple",
    readyToEat: true,
  },
];

module.exports = fruits;
