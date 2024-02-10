function creditCard(cardNumber) {
    
    if (!(cardNumber.length >= 12 && cardNumber.length <= 16)) {
      return "Invalid Credit Card";
    }

    const obscuredNumber = "*".repeat(cardNumber.length - 4) + cardNumber.slice(-4);
    return obscuredNumber;
  }
  
  module.exports = creditCard;
  