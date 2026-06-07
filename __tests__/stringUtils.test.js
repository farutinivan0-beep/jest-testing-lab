const { capitalize, reverse, isPalindrome } = require('../src/stringUtils');

describe("String Utilities", () => {

  describe("capitalize()", () => {
    test("should make first letter uppercase", () => {
      expect(capitalize("hello")).toBe("Hello");
      expect(capitalize("WORLD")).toBe("World");
      expect(capitalize("jEsT")).toBe("Jest");
    });

    test("should handle empty string", () => {
      expect(capitalize("")).toBe("");
    });

    test("should handle single character", () => {
      expect(capitalize("a")).toBe("A");
      expect(capitalize("Z")).toBe("Z");
    });
  });

  describe("reverse()", () => {
    test("should reverse a string", () => {
      expect(reverse("hello")).toBe("olleh");
      expect(reverse("Jest")).toBe("tseJ");
    });

    test("should handle palindrome strings", () => {
      expect(reverse("racecar")).toBe("racecar");
    });

    test("should handle empty string", () => {
      expect(reverse("")).toBe("");
    });
  });

  describe("isPalindrome()", () => {
    test("should detect simple palindromes", () => {
      expect(isPalindrome("racecar")).toBe(true);
      expect(isPalindrome("level")).toBe(true);
      expect(isPalindrome("hello")).toBe(false);
    });

    test("should ignore case and punctuation", () => {
      expect(isPalindrome("A man, a plan, a canal: panama")).toBe(true);
      expect(isPalindrome("Was it a car or a cat I saw?")).toBe(true);
    });

    test("should handle empty string", () => {
      expect(isPalindrome("")).toBe(true);
    });
  });
});