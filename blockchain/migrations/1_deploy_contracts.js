const InvestmentContract = artifacts.require("InvestmentContract");

module.exports = function (deployer) {
  deployer.deploy(InvestmentContract);
  // deployer.deploy(MetaMask);
  // deployer.link(InvestmentContract);
};
