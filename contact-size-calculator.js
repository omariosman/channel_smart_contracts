function getContractSize(bytecode) {
    if (bytecode.startsWith("0x")) {
        bytecode = bytecode.slice(2);
    }
    const sizeInBytes = bytecode.length / 2;
    return sizeInBytes;
}

const contractSize = getContractSize("60806040523480156200001157600080fd5b506040518060400160405280600d81526020017f48656c6c6f2c20576f726c64210000000000000000000000000000000000000081525060009081620000589190620002d9565b50620003c0565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620000e157607f821691505b602082108103620000f757620000f662000099565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001617fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000122565b6200016d868362000122565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620001ba620001b4620001ae8462000185565b6200018f565b62000185565b9050919050565b6000819050919050565b620001d68362000199565b620001ee620001e582620001c1565b8484546200012f565b825550505050565b600090565b62000205620001f6565b62000212818484620001cb565b505050565b5b818110156200023a576200022e600082620001fb565b60018101905062000218565b5050565b601f82111562000289576200025381620000fd565b6200025e8462000112565b810160208510156200026e578190505b620002866200027d8562000112565b83018262000217565b50505b505050565b600082821c905092915050565b6000620002ae600019846008026200028e565b1980831691505092915050565b6000620002c983836200029b565b9150826002028217905092915050565b620002e4826200005f565b67ffffffffffffffff8111156200030057620002ff6200006a565b5b6200030c8254620000c8565b620003198282856200023e565b600060209050601f8311600181146200035157600084156200033c578287015190505b620003488582620002bb565b865550620003b8565b601f1984166200036186620000fd565b60005b828110156200038b5784890151825560018201915060208501945060208101905062000364565b86831015620003ab5784890151620003a7601f8916826200029b565b8355505b6001600288020188555050505b505050505050565b61073380620003d06000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063a413686214610046578063cfae321714610062578063ef690cc014610080575b600080fd5b610060600480360381019061005b919061032b565b61009e565b005b61006a6100b1565b60405161007791906103f3565b60405180910390f35b610088610143565b60405161009591906103f3565b60405180910390f35b80600090816100ad919061062b565b5050565b6060600080546100c090610444565b80601f01602080910402602001604051908101604052809291908181526020018280546100ec90610444565b80156101395780601f1061010e57610100808354040283529160200191610139565b820191906000526020600020905b81548152906001019060200180831161011c57829003601f168201915b5050505050905090565b6000805461015090610444565b80601f016020809104026020016040519081016040528092919081815260200182805461017c90610444565b80156101c95780601f1061019e576101008083540402835291602001916101c9565b820191906000526020600020905b8154815290600101906020018083116101ac57829003601f168201915b505050505081565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610238826101ef565b810181811067ffffffffffffffff8211171561025757610256610200565b5b80604052505050565b600061026a6101d1565b9050610276828261022f565b919050565b600067ffffffffffffffff82111561029657610295610200565b5b61029f826101ef565b9050602081019050919050565b82818337600083830152505050565b60006102ce6102c98461027b565b610260565b9050828152602081018484840111156102ea576102e96101ea565b5b6102f58482856102ac565b509392505050565b600082601f830112610312576103116101e5565b5b81356103228482602086016102bb565b91505092915050565b600060208284031215610341576103406101db565b5b600082013567ffffffffffffffff81111561035f5761035e6101e0565b5b61036b848285016102fd565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156103ae578082015181840152602081019050610393565b60008484015250505050565b60006103c582610374565b6103cf818561037f565b93506103df818560208601610390565b6103e8816101ef565b840191505092915050565b6000602082019050818103600083015261040d81846103ba565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061045c57607f821691505b60208210810361046f5761046e610415565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026104d77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261049a565b6104e1868361049a565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600061052861052361051e846104f9565b610503565b6104f9565b9050919050565b6000819050919050565b6105428361050d565b61055661054e8261052f565b8484546104a7565b825550505050565b600090565b61056b61055e565b610576818484610539565b505050565b5b8181101561059a5761058f600082610563565b60018101905061057c565b5050565b601f8211156105df576105b081610475565b6105b98461048a565b810160208510156105c8578190505b6105dc6105d48561048a565b83018261057b565b50505b505050565b600082821c905092915050565b6000610602600019846008026105e4565b1980831691505092915050565b600061061b83836105f1565b9150826002028217905092915050565b61063482610374565b67ffffffffffffffff81111561064d5761064c610200565b5b6106578254610444565b61066282828561059e565b600060209050601f8311600181146106955760008415610683578287015190505b61068d858261060f565b8655506106f5565b601f1984166106a386610475565b60005b828110156106cb578489015182556001820191506020850194506020810190506106a6565b868310156106e857848901516106e4601f8916826105f1565b8355505b6001600288020188555050505b50505050505056fea26469706673582212202432fdff700565483670b9dcc57c053e6e8c8d518acddb23b5ffb90989b2b66864736f6c63430008130033");
console.log(`Contract Size: ${contractSize}`);

