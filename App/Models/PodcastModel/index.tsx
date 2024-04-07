export type GetALLPodcast = {
    status:boolean,
    message:string,
    data:Array<GetALLPodcastData>
}

export type GetSinglePodcust = {
    status:boolean,
    message:string,
    data:GetALLPodcastData
}

export type GetALLPodcastData = {
    _id:string,
    type:string,
    name:string,
    description:string,
    director:string,
    category: Array<CategoryData>,
    genre:Array<CategoryData>,
    presnter:string,
    date:string,
    audio:string,
    duration:string,
    thumbline:string,
    priority:string,
    priceType:string,
    suitableForChildren:string
    popularStatus:boolean,
    wishlistCount:number
}

export type CategoryData = {
    _id:string,
    name:string
}

export type AllEpisode = {
    data: GetALLPodcastData
}

export type AllPodcast = {
    data: Array<GetALLPodcastData>,
    item : GetALLPodcastData
}

export type AddWishList = {
    ProductId:string
}

export type GetWishList= {
    status:boolean,
    message:string
}
