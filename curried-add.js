function curriedAdd(total) {
  let balance = 0;

  const update = function (updateNum) {
    if (updateNum) {
      balance+=updateNum;
      return update;
    } else {
      return balance;
    }
  }

  return update(total);

}

module.exports = { curriedAdd };
