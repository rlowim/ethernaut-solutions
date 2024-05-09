const { ethers } = require("hardhat");

const vaultContractAddr = process.env["CONTRACT_VAULT_ADDRESS"];
const vaultContractArtifact = require("../artifacts/contracts/Vault.sol/Vault.json");

async function main() {
  const [signer] = await ethers.getSigners();

  const vaultContract = new ethers.Contract(
    vaultContractAddr,
    vaultContractArtifact.abi,
    signer
  );
  console.log("Signer address: ", signer.address);
  console.log("Contract Vault address: ", await vaultContract.getAddress());

  console.log("Is the vault locked? ", await vaultContract.locked());
  const passwd = await ethers.provider.getStorage(vaultContractAddr, 1);
  const tx = await vaultContract.unlock(passwd);
  await tx.wait();

  console.log("Is the vault locked? ", await vaultContract.locked());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
