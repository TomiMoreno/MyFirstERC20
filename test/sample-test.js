const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MafiaToken", function () {
  it("Should allocate total supply to token creator", async function () {
    const MafiaToken = await ethers.getContractFactory("MafiaToken");
    const mafiaToken = await MafiaToken.deploy("10000");
    await mafiaToken.deployed();

    expect(await mafiaToken.totalSupply()).to.equal("Hello, world!");

    const setGreetingTx = await mafiaToken.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await MafiaToken.greet()).to.equal("Hola, mundo!");
  });
});
