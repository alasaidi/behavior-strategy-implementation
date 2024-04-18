// #todo

"use strict";

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
  // the main test suite for the function
  describe(solution.name + ": reverses a string", () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution()).toEqual("");
    });
    it('an empty string -> ""', () => {
      expect(solution("")).toEqual("");
    });
    it("a string with all capital letters", () => {
      expect(solution("ASDF")).toEqual("FDSA");
    });
    // write at least 5 more tests ...
     it('should return ala for ala', () => {
      expect(solution("ala")).toEqual("ala");
    });
    it("should return olleh for hello", () => {
      expect(solution("hello")).toEqual("olleh");
    });
     it('should return roujnob for bonjour', () => {
      expect(solution("bonjour")).toEqual("ruojnob");
    });
    it("should return idias for saidi", () => {
      expect(solution("saidi")).toEqual("idias");
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
