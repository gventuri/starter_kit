const StockCoin = artifacts.require("StockCoin");

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised).should();

contract("StockCoin", (accounts) => {
  let stockCoin;

  before(async () => {
    stockCoin = await StockCoin.deployed();
  });

  describe("deployment", async () => {
    it("deploys successfully", async () => {
      const address = await stockCoin.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    it("has a name", async () => {
      const name = await stockCoin.name();
      assert.equal(name, "StockCoin");
    });
  });
});
