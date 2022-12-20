const prompt = require("prompt-promise")
const ethers = require("ethers")

//need to revist this
//block number, gas price, chain id
var provider = new ethers.providers.InfuraProvider();

var address = "0x02E725B7e99091Bd4cCBf15228384e160eCdf78f";

provider.getBalance(address).then(function(balance) {

    var etherString = ethers.utils.formatEther(balance);

    console.log("Balance: " + etherString);
});
provider.on('block', function(blockNumber) {
    console.log('New Block: ' + blockNumber);
});
provider.getTransactionCount(address).then(function(transactionCount) {
    console.log("Total Transactions Ever Send: " + transactionCount);
});

// provider.resolveName('nieldiamondhands.eth').then(function(address) {
//     console.log(address);
// });



// https://docs.ethers.org/v3/api-providers.html#events