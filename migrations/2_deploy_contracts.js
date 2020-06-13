const StockCoin = artifacts.require("StockCoin");

module.exports = function (deployer) {
  deployer.deploy(StockCoin);
};
