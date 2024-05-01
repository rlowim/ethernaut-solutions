# ethernaut-solutions

[https://ethernaut.openzeppelin.com/](https://ethernaut.openzeppelin.com/)

## CoinFlip

> This is a coin flipping game where you need to build up your winning streak by guessing the outcome of a coin flip. To complete this level you'll need to use your psychic abilities to guess the correct outcome 10 times in a row.

### Usage

#### Deploy the CoinFlipSolver contract on the Sepolia network

You can create a file named _CoinFlipSolver.sol_ in the _contracts_ folder in the [Remix IDE](http://remix.ethereum.org/) and copy the contents of _CoinFlipSolver.sol_ file from this repo or download the file to your local machine and upload it to the appropriate location in the Remix folder structure.

After opening it in editor, you can compile it and deploy on the Sepolia network.

> You need to remember about proper configuration of your Metamask wallet in order to use the Sepolia network (sample instruction [here](https://support.metamask.io/managing-my-wallet/using-metamask/how-to-view-testnets-in-metamask/)) and get some Sepolia ETH (for example from [here](https://www.alchemy.com/faucets/ethereum-sepolia)).

> In [Remix IDE](http://remix.ethereum.org/), select the appropriate Solidity compiler (^0.8.0) and select the environment as _Injected Provider - MetaMask_.

#### Set the CoinFlip contract instance address

Once deployed, you need to set the address of your Coin Flip contract instance using `setCoinFlipAddress(address _coinFlipContractAddr)` function.

#### Calculate the result and submit your guess to the CoinFlip contract

To do this, use the `coinFlip()` function.

#### Check the number of consecutive wins

Use the `getConsecutiveWins()` function.

## License

This project is licensed under the terms of the MIT License (see the file LICENSE).
