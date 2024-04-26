// #todo

"use strict";

/**
 * removes all odd numbers from an array of numbers
 * does not modify the argument (no side-effects)
 * @param {number[]} arrayOfNumbers - the array of numbers to filter
 * @returns {number[]} an array with only even numbers
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
  describe(
    solution.name + "removes all odd numbers from an array of numbers",
    () => {
      describe("removes all odd numbers from an emapty array", () => {
        it("empty erray return emapty array", () => {
          expect(solution([])).toEqual([]);
        });

        it("return an emapty array if all are odd numbers ", () => {
          expect(solution([1, 3, 5, 7])).toEqual([]);
        });
      });
    }
  );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfNumbers is not an array"); } const b = a.some(a => "number" != typeof a); if (b) { throw new TypeError("arrayOfNumbers does not contain only numbers"); } const c = a.filter(a => 0 == a % 2); return c }
