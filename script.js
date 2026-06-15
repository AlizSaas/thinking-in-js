function bankAccount(initalBalance) {
    var balance = initalBalance;

    return  function () {
        return balance;
    }


}

var account = bankAccount(100);
console.log(account()); // 100