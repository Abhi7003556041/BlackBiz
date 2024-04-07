import HttpClient from "../Utils/HttpClient"
import {AddWishList, GetALLPodcast, GetSinglePodcust, GetWishList} from '../Models/PodcastModel/index'
import { SinglePostData } from "../Models/SocialModel"

const getAllPodcast = () : Promise<GetALLPodcast> => {
    let endpoint = 'user/podcast/get-all'
    return HttpClient.get(endpoint)
}

const getPopularPodcast =() : Promise<GetALLPodcast> => {
    let endpoint = 'user/podcast/popular-podcast'
    return HttpClient.get(endpoint)
}

const getSinglePodcast = (data:string) : Promise<GetSinglePodcust> =>{
    let endpoint = `user/podcast/get-single-podcast/${data}`
    return HttpClient.get(endpoint)
}

const addWishList = (data:AddWishList) : Promise<GetWishList> => {
    let endpoint = 'user/podcast/wishlist-add'
    return HttpClient.post(endpoint,data)
}

const getAllWishList = () : Promise<GetALLPodcast> => {
    let endpoint = 'user/podcast/wishlist-get'
    return HttpClient.get(endpoint)
}
const deleteWishList = (data:string) : Promise<GetWishList> =>{
    let endpoint = `user/podcast/wishlist-delete/${data}`
    return HttpClient.deletee(endpoint)
}

const PodcastServices ={
    getAllPodcast,
    getSinglePodcast,
    addWishList,
    getAllWishList,
    deleteWishList,
    getPopularPodcast
}

export default PodcastServices;