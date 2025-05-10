const {performOperation} = require('../js/calculator.js')

describe("performOperation", () => {
  test("dd two numbers", () => {
    expect(performOperation(3, 5, "+")).toBe(8);
  });

  test("subtract two numbers", () => {
    expect(performOperation(10, 5, "-")).toBe(5);
  });

  test("multiply two numbers", () => {
    expect(performOperation(3, 5, "*")).toBe(15);
  });

  test("divide two numbers", () => {
    expect(performOperation(10, 2, "/")).toBe(5);
  });

  test("throw an error for division by zero", () => {
    expect(() => performOperation(10, 0, "/")).toThrow(
      "분자,분모가 0으로 들어올 수 없습니다"
    );
  });

  test("throw an error for unsupported operators", () => {
    expect(() => performOperation(3, 5, "%")).toThrow(
      "지원하지 않는 연산자입니다"
    );
  });
});
