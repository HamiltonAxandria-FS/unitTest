const creditCard = require('./creditCard');

describe('creditCard function', () => {
  test('should obscure a valid credit card', () => {
    const result = creditCard("1234567890123456");
    expect(result).toBe("************3456");
  });

  test('should return "Invalid Credit Card" for invalid credit card length', () => {
    const result = creditCard("1234567890");
    expect(result).toBe("Invalid Credit Card");
  });

  test('should return "Invalid Credit Card" for invalid credit card length', () => {
    const result = creditCard("12345678901234567890");
    expect(result).toBe("Invalid Credit Card");
  });

  test('should return "Invalid Credit Card" for an empty string', () => {
    const result = creditCard("");
    expect(result).toBe("Invalid Credit Card");
  });
});
