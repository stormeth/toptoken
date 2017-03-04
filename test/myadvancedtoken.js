var MyAdvancedToken = artifacts.require("./MyAdvancedToken.sol");

contract('MyAdvancedToken', function(accounts) {
  it("1st test", function() {
    return MyAdvancedToken.deployed().then(function(instance) {
      return instance.getBalance.call(accounts[0]);
    }).then(function(balance) {
      console.log(balance)
      //assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
    });
  });
});
