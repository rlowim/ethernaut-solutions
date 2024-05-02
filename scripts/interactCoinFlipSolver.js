const { ethers } = require("hardhat");

const coinFlipContractAddr = process.env["CONTRACT_COINFLIP_ADDRESS"];
const coinFlipContractArtifact = require("../artifacts/contracts/CoinFlip.sol/CoinFlip.json");

const coinFlipSolverContractAddr = process.env["CONTRACT_SOLVER_ADDRESS"];
const coinFlipSolverContractArtifact = require("../artifacts/contracts/CoinFlipSolver.sol/CoinFlipSolver.json");

async function main() {
  const [signer] = await ethers.getSigners();
  console.log("Signer address: ", await signer.getAddress());

  const coinFlipContract = new ethers.Contract(
    coinFlipContractAddr,
    coinFlipContractArtifact.abi,
    signer
  );
  const coinFlipSolverContract = new ethers.Contract(
    coinFlipSolverContractAddr,
    coinFlipSolverContractArtifact.abi,
    signer
  );

  console.log(
    "coinFlipContract address: ",
    await coinFlipContract.getAddress()
  );
  console.log(
    "coinFlipSolverContract address: ",
    await coinFlipSolverContract.getAddress()
  );

  const setCoinFlipAddr = await coinFlipSolverContract.setCoinFlipAddress(
    coinFlipContractAddr
  );
  await setCoinFlipAddr.wait();

  for (let i = 0; i < 10; i++) {
    const tx = await coinFlipSolverContract.coinFlip();
    await tx.wait();
    console.log("Tx completed!");
  }
  console.log(
    "Consecutive wins: ",
    await coinFlipSolverContract.getConsecutiveWins()
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
