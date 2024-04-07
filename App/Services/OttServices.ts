import {  CategoryWiseVideoResponse, FeaturedVideoResponse, GetAllBannerResponse, GetAllCategory, ReviewData, ReviewResponse, WatchListData, WatchListResponse } from "../Models/OttModel"
import HttpClient from "../Utils/HttpClient"


const getAllBanner = () : Promise<GetAllBannerResponse> => {
    let endpoint = 'user/ott/get-all-banner'
    return HttpClient.get(endpoint)
}

const getAllCategories = () : Promise<GetAllCategory> => {
    let endpoint = 'user/ott/get-category'
    return HttpClient.get(endpoint)
}

const CategoryWiseVideo = (data:string) : Promise<CategoryWiseVideoResponse> => {
    let endpoint = `user/ott/get-all-video-category/${data}`
    return HttpClient.get(endpoint)
}

const getAllFeaturedVideo = () : Promise<FeaturedVideoResponse> => {
    let endpoint = 'user/ott/featured-video'
    return HttpClient.get(endpoint)
}

const addWatchList = (data:WatchListData) : Promise<WatchListResponse> => {
    let endpoint = 'user/ott/watchlist'
    return HttpClient.post(endpoint,data)
}

const getWatchList = () : Promise<CategoryWiseVideoResponse> => {
    let endpoint = 'user/ott/watchlist'
    return HttpClient.get(endpoint)
}

const addLike = (data:WatchListData) : Promise<WatchListResponse> => {
    let endpoint = 'user/ott/likevideo'
    return HttpClient.post(endpoint,data)
}

const addReview = (data:ReviewData) : Promise<WatchListResponse> => {
    let endpoint = 'user/ott/reviews'
    return HttpClient.post(endpoint,data)
}

const getAllReview = (data:string) : Promise<ReviewResponse> => {
    let endpoint = `user/ott/reviews/${data}`
    return HttpClient.get(endpoint)
}

const OttServices ={
    getAllBanner,
    getAllCategories,
    CategoryWiseVideo,
    getAllFeaturedVideo,
    addWatchList,
    getWatchList,
    addLike,
    addReview,
    getAllReview
}

export default OttServices;