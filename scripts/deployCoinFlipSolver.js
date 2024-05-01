const { ethers } = require("hardhat");

async function main() {
  const [signer] = await ethers.getSigners();
  console.log("Signer address: ", signer.address);
  const CoinFlipSolverFactory = await ethers.getContractFactory(
    "CoinFlipSolver",
    signer
  );
  const coinFlipSolver = await CoinFlipSolverFactory.deploy();
  await coinFlipSolver.waitForDeployment();
  console.log(
    "CoinFlipSolver Contract address: ",
    await coinFlipSolver.getAddress()
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
