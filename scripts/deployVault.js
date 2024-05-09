const { ethers } = require("hardhat");

async function main() {
  const [signer] = await ethers.getSigners();

  const passwordBytes32 = await ethers.encodeBytes32String(
    process.env["SECRET_PASSWORD"]
  );

  const VaultFactory = await ethers.getContractFactory("Vault", signer);
  const contractVault = await VaultFactory.deploy(passwordBytes32);
  await contractVault.waitForDeployment();

  console.log("Vault Contract address: ", await contractVault.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
