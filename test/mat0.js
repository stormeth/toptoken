var MyAdvancedToken = artifacts.require("./MyAdvancedToken.sol");

contract('Mat0', function(accounts) {

    var bob = {}
    var minter = {};

    before("Setup the scenario", function() {
        bob.address = accounts[0]
        minter.address = accounts[1];
        return bob, minter;
    });

    it("1st test", function() {
        return MyAdvancedToken.deployed().then(function(instance) {
            return instance.getBalance.call(accounts[0]);
        }).then(function(balance) {
            console.log(balance)
            //assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
        });
    });


    it("2nd test", function() {
        return MyAdvancedToken.new(5000, 'samuel', 100, 'sam', minter.address)
            .then(function(instance) {
                return instance.getBalance.call(bob.address);
            }).then(function(balance) {
                console.log(balance);
            });
    });

    it("3rd test", function() {
        return MyAdvancedToken.new(5000, 'samuel', 100, 'sam', minter.address)
            .then(function(instance) {
                return instance.getBalance.call(bob.address);
            }).catch()
    });

    it("4th test", function() {
        return MyAdvancedToken.new(5000, 'samuel', 100, 'sam', minter.address)
            .then(function(instance1) {
                return instance1.transfer(bob.address, 1000);
            }).then(function(instance2) {
                console.log(instance2)
            });
    })

    it("5th test", function() {
        var mat = MyAdvancedToken.new(5000, 'samuel', 100, 'sam', minter.address)
            .then(function(instance1) {
                return instance1.transfer(bob.address, 1000);
            }).then(function(instance2) {
                assert(1, 1, "one is not one")
            });

        return MyAdvancedToken.deployed().then(function(instance) {
            return instance.getBalance.call(accounts[0]);
        }).then(function(balance) {
            console.log(balance)
            //assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
        });

    })


});