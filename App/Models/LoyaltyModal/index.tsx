export type LoyaltyHistoryResponse = {
    status:boolean,
    message:string,
    data:Array<LoyaltyHistoryResponseData>
}

export type LoyaltyHistoryResponseData = {
    loyaltyType:string,
    points:number,
    operation:string,
    createdOn:string
}

export type LoyaltyPointResponse = {
    status:boolean,
    message:string,
    data: LoyaltyPointResponseData
}

export type LoyaltyPointResponseData = {
    points:number,
    updatedOn:string
}

export type ScratchCardResponse = {
    status:boolean,
    message:string,
    data: Array<ScratchCardResponseData>
}

export type ScratchCardResponseData = {
    _id:string,
    scratchName:string,
    giftName:string,
    loyaltyPoint:string,
    expiryDate:string,
    giftImage:string
}

export type ScratchDoneData = {
    scrachCardId:string,
    points:number
}

export type ScratchDoneResponse = {
    status:boolean,
    message:string
}

export type RewardResponse = {
    status:boolean,
    message:string,
    data: Array<RewardResponseData>
}

export type RewardResponseData = {
    _id:string,
    scratchCardData: ScratchCardData
}

export type ScratchCardData = {
    _id:string,
    scratchName:string,
    giftName:string,
    giftImage:string
}

export type CashBackReward = {
    status:boolean,
    message:string,
    data: CashBackRewardResponse
}

export type CashBackRewardResponse = {
    _id:string,
    wallet:number
}
export type ImgData = {
    preview:string
}

export type CashBackHistory = {
    status:boolean,
    message:string,
    data:Array<CashBackHistoryResponse>
}

export type CashBackHistoryResponse = {
    _id:string,
    wallet:number,
    createdOn:string,
    productsData: CashBackHistoryResponseData
}

export type CashBackHistoryResponseData = {
    _id:string,
    name:string,
    desc:string,
    img:Array<ImgData>,
    categoriesData: CategoryData
}

export type CategoryData = {
    _id:string,
    name:string,
    img:string
}