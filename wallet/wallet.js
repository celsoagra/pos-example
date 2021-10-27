const ChainUtil = require("../chain-util");
const Transaction = require("../transaction");
const {INITAL_BALANCE} = require('../config');

class Wallet {

    constructor(secret) {
      this.balance = INITAL_BALANCE;
      this.keyPair = ChainUtil.genKeyPair(secret);
      this.publicKey = this.keyPair.getPublic("hex");
    }
  
    toString() {
      return `Wallet - 
          publicKey: ${this.publicKey.toString()}
          balance  : ${this.balance}`;
    }

    sign(dataHash){
        return this.keyPair.sign(dataHash).toHex();
    }
    
    createTransaction(to, amount, type, blockchain, transactionPool) {
        let transaction = Transaction.newTransaction(this, to, amount,                                                                                                    type);
        transactionPool.addTransaction(transaction);
        return transaction;
    }
}

module.exports = Wallet;