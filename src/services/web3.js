import Web3 from 'web3'

export class Web3PokerService {
  constructor(provider) {
    this.web3 = new Web3(provider)
    this.contract = null
  }

  async initContract(abi, address) {
    this.contract = new this.web3.eth.Contract(abi, address)
  }

  async buyChips(amount) {
    return this.contract.methods.buyChips().send({
      value: this.web3.utils.toWei(amount.toString(), 'ether'),
      from: this.web3.eth.defaultAccount
    })
  }

  async cashOut(amount) {
    return this.contract.methods.cashOut(
      this.web3.utils.toWei(amount.toString(), 'ether')
    ).send({ from: this.web3.eth.defaultAccount })
  }
}