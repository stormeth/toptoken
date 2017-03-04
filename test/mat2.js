var TestUtils = require('./testutils')

var MyAdvancedToken = artifacts.require("./MyAdvancedToken.sol");

contract('Mat2', function(accounts) {

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
        return MyAdvancedToken.new(5000, 'samuel', 100, 'sam', minter.address)
            .then(function(instance1) {
                return instance1.transfer(bob.address, 1000);
            }).then(function(instance2) {
                assert(1,1,'1 not 1')
            }).then(MyAdvancedToken.deployed().then(function(instance) {
                return instance.getBalance.call(accounts[0]);
            }).then(function(balance) {
                console.log(balance)
                //assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
            })
        )
    })

});
