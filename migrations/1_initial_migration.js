const BloodSupply = artifacts.require("BloodSupply");

module.exports = async function (deployer, network, accounts) {
  try {
    // Deploy BloodSupply contract
    await deployer.deploy(BloodSupply);
    const bloodSupplyInstance = await BloodSupply.deployed();
    console.log("BloodSupply Contract Address:", bloodSupplyInstance.address);
  } catch (error) {
    console.error("Error deploying BloodSupply contract:", error);
  }
};
