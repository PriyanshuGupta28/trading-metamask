const InvestmentContract = artifacts.require("InvestmentContract");

module.exports = function (deployer) {
  deployer.deploy(InvestmentContract);
  // deployer.link(InvestmentContract);
};
