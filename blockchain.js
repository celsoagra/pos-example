const Block = require('./block');

class Blockchain{
    constructor(){
        this.chain = [Block.genesis()];
    }

    addBlock(data){
        const block = Block.createBlock(this.chain[this.chain.length-1],data);
        this.chain.push(block);
        
        return block;
    }

    replaceChain(newChain){
        if(newChain.length <= this.chain.length){
            console.log("Recieved chain is not longer than the current chain");
            return;
        }else if(!this.isValidChain(newChain)){
            console.log("Recieved chain is invalid");
            return;
        }
        
        console.log("Replacing the current chain with new chain");
        this.chain = newChain; 
    }
}

module.exports = Blockchain;