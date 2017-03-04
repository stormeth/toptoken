var TestUtils = require('./testutils')

var MyAdvancedToken = artifacts.require("./MyAdvancedToken.sol");

contract('MyAdvancedToken', function(accounts) {

    var owner = {}
    var bob = {}
    var pete = {}
    var minter = {};

    before("Setup the scenario", function() {
        owner.address = accounts[0]
        owner.whoami = 'owner'
        bob.address = accounts[1];
        bob.whoami = 'bob'
        pete.address = accounts[2]
        pete.whoami = 'pete'
        minter.address = accounts[3]
        minter.whoami = 'minter'
        return owner, bob, pete, minter;
    });

    it("1st test", function() {
        var people = [owner, bob, pete, minter]
        TestUtils.showBalances(people)
    });


    it("2nd test", function() {
        return MyAdvancedToken.new(5000, 'samuel', 100, 'sam', minter.address)
            .then(function(instance) {
                return instance.getBalance.call(bob.address);
            }).then(function(balance) {
                TestUtils.showBalance(minter);
            });
    });

});
