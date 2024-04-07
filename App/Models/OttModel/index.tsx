

export type GetAllBannerResponse = {
    status:boolean,
    message:string,
    data:Array<GetAllBannerResponseData>
}

export type GetAllBannerResponseData = {
    _id:string,
    videos:string,
    title:string,
    image:string,
    createdOn:string,
    updatedOn:string,
    status:boolean
}

export type GetAllCategory = {
    status:boolean,
    message:string,
    data:Array<GetAllCategoryData>
}

export type GetAllCategoryData = {
    _id:string,
    name:string,
    description:string,
    image:string
}

export type CategoryData = {
    _id:string,
    name:string
}

export type SingleCategoryData = {
    data:CategoryWiseVideoResponseData,
    catId:string
}

export type SingleVideo = {
    videourl:string,
    src?:string,
    courseId?:string,
    lessionId?:string
}

export type CategoryWiseVideoResponse = {
    status:boolean,
    message:string,
    data:Array<CategoryWiseVideoResponseData>
}

export type CategoryWiseVideoResponseData = {
    _id:string,
    type:string,
    name:string,
    description:string,
    director:string,
    category:Array<CatData>,
    genre:Array<GenereData>,
    cast:string,
    date:string,
    uploadTrailer:string,
    uploadVideo:string,
    thumbline:string,
    priority:string,
    priceType:string,
    suitableForChildren:string,
    createdOn:string,
    updatedOn:string,
    trendingStatus:boolean
}

export type CatData = {
    categoryID:string,
    categoryName:string,
    _id:string
}

export type GenereData = {
    genreID:string,
    genreName:string,
    _id:string
}

export type FeaturedVideoResponse = {
    status:boolean,
    message:string,
    data:Array<FeaturedVideoResponseData>
}

export type FeaturedVideoResponseData = {
    _id:string,
    name:string,
    description:string,
    image:string,
    createdOn:string,
    updatedOn:string,
    categoryVideos:Array<CategoryWiseVideoResponseData>

}

export type WatchListData = {
    videoId:string
}

export type WatchListResponse = {
    status:boolean,
    message:string
}

export type ReviewData = {
    videoId:string,
    rating:number,
    review:string
}

export type ReviewResponse = {
    status:boolean,
    message:string,
    data:{
        userReview:Array<ReviewResponseData>,
        avgRating:number
    }
}

export type ReviewResponseData = {
    rating:number,
    review:string,
    createdOn:string,
    userdata:UserData
}

export type UserData = {
    _id:string,
    firstname:string,
    lastname:string,
    email:string,
    image:string
}