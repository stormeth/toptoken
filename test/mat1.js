var MyAdvancedToken = artifacts.require("./MyAdvancedToken.sol");

contract('MyAdvancedToken', function(accounts) {

    var owner = {}
    var bob = {}
    var pete = {}
    var minter = {};

    before("Setup the scenario", function() {
        owner.address = accounts[0]
        bob.address = accounts[1];
        pete.address = accounts[2]
        minter.address = accounts[3]
        return owner,bob,pete,minter;
    });

  function printAddresses() {
      console.log("owner = ", owner.address);
      console.log("bob = ", bob.address);
      console.log("pete = ", pete.address);
      console.log("minter = ", minter.address)
  }

  function showBalances() {
      //printAddresses()
      people = [owner,bob,pete,minter]
      people.forEach(function(s) {
          return MyAdvancedToken.deployed().then(function(instance) {
            return instance.getBalance.call(s.address);
          }).then(function(balance) {
            console.log(balance)
            //assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
          });

      })
  }

  it("1st test", function() {
      showBalances()
  });


  it("2nd test", function() {
      return MyAdvancedToken.new(5000,'samuel',100,'sam',minter.address)
      .then(function(instance) {
          return instance.getBalance.call(bob.address);
      }).then(function(balance) {
          console.log(balance);
      });
  });

});
