// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract SendEther {  

    mapping(address => uint) public balances;

    function sendMeMoney() public payable {
        if (msg.value < 500) {
            revert();
        }
        balances[msg.sender] += msg.value;
    }

    function balanceOf() public view returns (uint) {
        return address(this).balance;
    }


}
