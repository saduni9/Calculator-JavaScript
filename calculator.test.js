const { calculate } = require("./calculator");

//DOM elements 
document.querySelector = jest.fn();
document.querySelectorAll = jest.fn();
document.querySelectorAll.mockReturnValue([
  { dataset: { value: "AC" } },
  { dataset: { value: "DEL" } },
  { dataset: { value: "+" } },
  { dataset: { value: "*" } },
  { dataset: { value: "%" } },
  { dataset: { value: "-" } },
  { dataset: { value: "=" } },
  
  
  
]);

const displayMock = { value: "" };
document.querySelector.mockReturnValue(displayMock);

//  test cases Jest
describe("calculate function", () => {
  let displayValue = "";
  displayMock.value = displayValue;

  beforeEach(() => {
    displayValue = "";
    displayMock.value = displayValue;
  });

  it("should handle AC button click correctly", () => {
    displayValue = "123";
    calculate("AC");
    expect(displayMock.value).toBe("");
  });

  it("should handle DEL button click correctly", () => {
    displayValue = "123";
    calculate("DEL");
    expect(displayMock.value).toBe("12");
  });

  it("should handle addition correctly", () => {
    displayValue = "2+3";
    calculate("=");
    expect(displayMock.value).toBe("5");
  });

  it("should handle subtraction correctly", () => {
    displayValue = "10-4";
    calculate("=");
    expect(displayMock.value).toBe("6");
  });

  it("should handle multiplication correctly", () => {
    displayValue = "6*2";
    calculate("=");
    expect(displayMock.value).toBe("12");
  });

  it("should handle division correctly", () => {
    displayValue = "20/4";
    calculate("=");
    expect(displayMock.value).toBe("5");
  });

  it("should handle percentage calculation correctly", () => {
    displayValue = "25%";
    calculate("=");
    expect(displayMock.value).toBe("0.25");
  });

  it("should handle invalid input gracefully", () => {
    displayValue = "123";
    calculate("*"); // Invalid input
    expect(displayMock.value).toBe("123");
  });

  it("should handle invalid input gracefully", () => {
    displayValue = "123";
    calculate("+"); // Invalid input
    expect(displayMock.value).toBe("123");
  });


  
});
