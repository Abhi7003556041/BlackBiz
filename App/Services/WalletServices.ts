import { CashBackHistory, CashBackReward } from "../Models/LoyaltyModal"
import HttpClient from "../Utils/HttpClient"

const getWallet = () : Promise<CashBackReward> =>{
    let endpoint = 'user/my-wallet'
    return HttpClient.get(endpoint)
}

const getWalletHistory = () : Promise<CashBackHistory> =>{
    let endpoint = 'user/my-wallet-history'
    return HttpClient.get(endpoint)
}
const WalletService = {
    getWallet,
    getWalletHistory
}

export default WalletService;