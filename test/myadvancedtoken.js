var MyAdvancedToken = artifacts.require("./MyAdvancedToken.sol");

contract('MyAdvancedToken', function(accounts) {

    var minter = {};

    before("Setup the scenario", function() {
        minter.address = accounts[1];
        return minter;
    });

  it("1st test", function() {
    return MyAdvancedToken.deployed().then(function(instance) {
      return instance.getBalance.call(accounts[0]);
    }).then(function(balance) {
      console.log(balance)
      //assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
    });
  });

  it("2nd test", function(done) {
      return MyAdvancedToken.new(5000,'samuel',100,'sam',minter.address)
      .then(function(instance) {
          return instance.getBalance.call(accounts[0]);
      }).then(function(balance) {
          console.log(balance);
      });
  });

});
