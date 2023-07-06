// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract SendEther {

    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function invest() public payable {}

    function transferMoney() public {
        payable(owner).transfer(0.5 ether);
    }

    function sendMoney() public {
        bool success = payable(owner).send(0.5 ether);
        require(success, "Transfer failed!");
    }

    function callSendEther() public {
        (bool success, ) = payable(owner).call{value: 0.5 ether}("");
        require(success, "Transfer failed!");
    }

}
