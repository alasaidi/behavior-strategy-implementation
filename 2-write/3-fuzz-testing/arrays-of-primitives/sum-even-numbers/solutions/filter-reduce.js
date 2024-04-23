export const filterReduce = (arr) =>
  arr
    
    .filter((num) => num % 2 === 0) // keep the even numbers
    .reduce((sum, next) => sum + next, 0); // add all the even numbers
