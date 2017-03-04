var MyAdvancedToken = artifacts.require("./MyAdvancedToken.sol");

var TestUtils = {

    printAddresses: function() {
        console.log(owner.whoami, " ", owner.address);
        console.log(bob.whoami, " ", bob.address);
        console.log(pete.whoami, " ", pete.address);
        console.log(minter.whoami, " ", minter.address)
    },

    showBalance: function(s) {
        return MyAdvancedToken.deployed().then(function(instance) {
            return instance.getBalance.call(s.address);
        }).then(function(balance) {
            console.log(s.whoami, " ", balance)
        });
    },

    showBalances: function(people) {
        people.forEach(function(s) {
            TestUtils.showBalance(s)
        })
    }
}

module.exports = TestUtils