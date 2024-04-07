import { LoyaltyHistoryResponse, LoyaltyPointResponse, RewardResponse, ScratchCardResponse, ScratchDoneData, ScratchDoneResponse } from "../Models/LoyaltyModal"
import HttpClient from "../Utils/HttpClient"

const getLoyaltyHistory = () : Promise<LoyaltyHistoryResponse> =>{
    let endpoint = 'user/loyality/history'
    return HttpClient.get(endpoint)
}

const getLoyaltyPoint = () : Promise<LoyaltyPointResponse> => {
    let endpoint = 'user/loyality/myPoint'
    return HttpClient.get(endpoint)
}

const getAllScratchCard = () : Promise<ScratchCardResponse> => {
    let endpoint = 'user/loyality/scarch-card'
    return HttpClient.get(endpoint)
}

const onScratchCmplt = (data:ScratchDoneData) : Promise<ScratchDoneResponse> => {
    let endpoint = 'user/loyality/add-scarch'
    return HttpClient.post(endpoint,data)
}

const getRewards = () : Promise<RewardResponse> => {
    let endpoint = 'user/loyality/get-reward'
    return HttpClient.get(endpoint)
}
const LoyaltyService = {
    getLoyaltyHistory,
    getLoyaltyPoint,
    getAllScratchCard,
    onScratchCmplt,
    getRewards
}
export default LoyaltyService;