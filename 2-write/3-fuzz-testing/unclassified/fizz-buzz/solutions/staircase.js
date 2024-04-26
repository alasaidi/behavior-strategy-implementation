export const staircase = (max = 0) => {
  let countUp = 0;
  const result = [];

  while (++countUp <= max) {
    result.push(
      countUp % 15 === 0
        ? "FizzBuzz"
        : countUp % 3 === 0
        ? "Fizz"
        : countUp % 5 === 0
        ? "Buzz"
        : countUp
    );
  }

  return result;
};
