const { ethers } = require("hardhat");

async function main() {
  const [signer] = await ethers.getSigners();

  const ForceSolverContractFactory = await ethers.getContractFactory(
    "ForceSolver",
    signer
  );
  const forceSolverContract = await ForceSolverContractFactory.deploy();
  forceSolverContract.waitForDeployment();

  console.log("Signer address: ", await signer.address);
  console.log(
    "ForceSolver Contract address: ",
    await forceSolverContract.getAddress()
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
