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

    function printAddresses() {
        console.log(owner.whoami, " ", owner.address);
        console.log(bob.whoami, " ", bob.address);
        console.log(pete.whoami, " ", pete.address);
        console.log(minter.whoami, " ", minter.address)
    }

    function showBalance(s) {
        return MyAdvancedToken.deployed().then(function(instance) {
            return instance.getBalance.call(s.address);
        }).then(function(balance) {
            console.log(s.whoami, " ", balance)
        });
    }

    function showBalances() {
        printAddresses()
        people = [owner, bob, pete, minter]
        people.forEach(function(s) {
            showBalance(s)
        })
    }

    it("1st test", function() {
        showBalances()
    });


    it("2nd test", function() {
        return MyAdvancedToken.new(5000, 'samuel', 100, 'sam', minter.address)
            .then(function(instance) {
                return instance.getBalance.call(bob.address);
            }).then(function(balance) {
                showBalance(minter);
            });
    });

});
