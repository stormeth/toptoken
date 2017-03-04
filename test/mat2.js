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
            }).then(function(tx1) {
                assert(1,1,'1 not 1')
                //console.log(tx1)
            }).then(MyAdvancedToken.deployed().then(function(instance2) {
                return instance2.getBalance.call(bob.address);
            }).then(function(balance1) {
                console.log(balance1);
            }).then(MyAdvancedToken.deployed().then(function(instance3) {
                return instance3.getBalance.call(bob.address);
            }).then(function(balance2) {
                console.log(balance2);
            })
        ))

    })

});
