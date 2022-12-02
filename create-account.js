function createAccount(startingPin, amount) {
  let pin = startingPin;
  let balance = amount || 0;
  const checkPin = function (pinAttempt) {
    return pinAttempt === pin;
  }
  return {
    checkBalance(pinAttempt) {
      if (!checkPin(pinAttempt)) return "Invalid PIN."
      else return `$${balance}`;
    },
    deposit(pinAttempt, depAmount) {
      if (!checkPin(pinAttempt)) return "Invalid PIN."
      else {
        balance += depAmount;
        return `Succesfully deposited $${depAmount}. Current balance: $${balance}.`
      }
    },
    withdraw(pinAttempt, wdwAmount) {
      if (!checkPin(pinAttempt)) return "Invalid PIN."
      if (wdwAmount > balance) return "Withdrawal amount exceeds account balance. Transaction cancelled."
      else {
        balance -= wdwAmount;
        return `Succesfully withdrew $${wdwAmount}. Current balance: $${balance}.`
      }

    },
    changePin(pinAttempt, newPin) {
      if (!checkPin(pinAttempt)) return "Invalid PIN."
      else {
        pin = newPin
        return "PIN successfully changed!";
      }
    }
  }
}

module.exports = { createAccount };
