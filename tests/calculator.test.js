const { performOperation } = require("../js/calculator.js");

describe("performOperation", () => {
  test("더하기", () => {
    expect(performOperation(3, 5, "+")).toBe(8);
  });

  test("빼기", () => {
    expect(performOperation(10, 5, "-")).toBe(5);
  });

  test("곱하기", () => {
    expect(performOperation(3, 5, "*")).toBe(15);
  });

  test("나누기", () => {
    expect(performOperation(10, 2, "/")).toBe(5);
  });

  test("0으로 나눌 수 없습니다", () => {
    expect(() => performOperation(10, 0, "/")).toThrow(
      "0으로 나눌 수 없습니다"
    );
  });
});
