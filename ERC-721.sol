// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyERC721 is ERC721URIStorage {
    
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    
    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
    }
    
    function mintToken(string memory jsonURI) external returns (uint256) {
        uint256 newTokenId = _tokenIdCounter.current();
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, jsonURI);
        _tokenIdCounter.increment();
        return newTokenId;
    }
    
}
