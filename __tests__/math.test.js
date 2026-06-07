const { add, subtract, multiply, divide, isEven } = require('../src/math');

describe("Math Functions", () => {

  describe("add()", () => {
    test("should add two positive numbers correctly", () => {
      expect(add(2, 3)).toBe(5);
      expect(add(10, 5)).toBe(15);
    });

    test("should handle negative numbers", () => {
      expect(add(-2, 3)).toBe(1);
      expect(add(-5, -7)).toBe(-12);
    });

    test("should add zero correctly", () => {
      expect(add(5, 0)).toBe(5);
      expect(add(0, 0)).toBe(0);
    });
  });

  describe("subtract()", () => {
    test("should subtract two numbers correctly", () => {
      expect(subtract(10, 3)).toBe(7);
      expect(subtract(5, 5)).toBe(0);
    });

    test("should handle negative results", () => {
      expect(subtract(3, 10)).toBe(-7);
    });
  });

  describe("multiply()", () => {
    test("should multiply two numbers correctly", () => {
      expect(multiply(4, 5)).toBe(20);
      expect(multiply(-3, 4)).toBe(-12);
    });

    test("should multiply by zero", () => {
      expect(multiply(100, 0)).toBe(0);
    });
  });

  describe("divide()", () => {
    test("should divide two numbers correctly", () => {
      expect(divide(10, 2)).toBe(5);
      expect(divide(7, 2)).toBe(3.5);
    });

    test("should throw error when dividing by zero", () => {
      expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
    });
  });

  describe("isEven()", () => {
    test("should return true for even numbers", () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(-4)).toBe(true);
    });

    test("should return false for odd numbers", () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(7)).toBe(false);
      expect(isEven(-3)).toBe(false);
    });
  });
});