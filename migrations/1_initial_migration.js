const Unitroller = artifacts.require("Unitroller");

module.exports = function (deployer) {
  deployer.deploy(Unitroller);
};
