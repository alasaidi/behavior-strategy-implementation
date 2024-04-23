import { countCharacters } from "./count-characters.js";

describe("countCharacters", () => {
    it("should return an empty object for an empty string", () => {
        expect(countCharacters("")).toEqual({});
    });

    it("should count characters in a string", () => {
        expect(countCharacters("hi")).toEqual({ h: 1, i: 1 });
        expect(countCharacters("hiiii")).toEqual({ h: 1, i: 4 });
    });

    it("should handle special characters and spaces", () => {
        expect(countCharacters("Hello, world!")).toEqual({
            H: 1,
            e: 1,
            l: 3,
            o: 2,
            ",": 1,
            " ": 1,
            w: 1,
            r: 1,
            d: 1,
            "!": 1,
        });
    });

    it("should handle case sensitivity", () => {
        expect(countCharacters("Hello")).toEqual({ H: 1, e: 1, l: 2, o: 1 });
        expect(countCharacters("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 });
    });
});
