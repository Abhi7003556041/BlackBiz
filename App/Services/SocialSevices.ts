import { ImageOrVideo } from 'react-native-image-crop-picker'
import { AddCommentData, AddCommentResponse, AddLikeData, AddLikeResponse, CommentDeleteResponse, CreatePostData, CreatePostResponse, GetAllPost, GetSinglePost, ReportPostData, SharePostPointData, singlePostData, SinglePostData, UpdatePostData } from '../Models/SocialModel/index'
import HttpClient from "../Utils/HttpClient"

const getAllPost =() : Promise<GetAllPost> => {
    let endpoint='user/post/get-all'
    return HttpClient.get(endpoint)
}

const getSinglePost = (data:singlePostData) : Promise<GetSinglePost> =>{
    let endpoint = `user/post/single/${data._id}`
    return HttpClient.get(endpoint)
}

const addPost = (data:CreatePostData) : Promise<CreatePostResponse> => {
    let endpoint = 'user/post'
    return HttpClient.post(endpoint,data)
}

const uploadFile = (data:ImageOrVideo) : Promise<any> =>{
    let endpoint = 'user/post/imageUpload'
    // console.log('data service',data)
    return HttpClient.singleFileUpload(endpoint,data)
}

const addLike = (data:AddLikeData) : Promise<AddLikeResponse> => {
    let endpoint = 'user/post/like'
    return HttpClient.post(endpoint,data)
}

const addComment = (data:AddCommentData) : Promise<AddCommentResponse> => {
    let endpoint = 'user/post/comment'
    return HttpClient.post(endpoint,data)
} 

const postReport = (data:ReportPostData) : Promise<CommentDeleteResponse> => {
    let endpoint = 'user/post/create-report'
    return HttpClient.post(endpoint,data)
}

const updatePost = (data:UpdatePostData,id:string) : Promise<CommentDeleteResponse> => {
    let endpoint = `user/post/update/${id}`
    return HttpClient.put(endpoint,data)
}

const deleteComment = (data:singlePostData) : Promise<CommentDeleteResponse> =>{
    let endpoint = `user/post/comment/delete/${data._id}`
    return HttpClient.deletee(endpoint)
}

const deletePost = (data:SinglePostData) : Promise<CommentDeleteResponse> =>{
    let endpoint = `user/post/${data._id}`
    return HttpClient.deletee(endpoint)
}

const sharePostPoint = (data:SharePostPointData) : Promise<CommentDeleteResponse> => {
    let endpoint = 'user/loyality/add-loyality'
    return HttpClient.post(endpoint,data)
}

const SocialService = {
    getAllPost,
    getSinglePost,
    addLike,
    addComment,
    deleteComment,
    addPost,
    postReport,
    uploadFile,
    deletePost,
    updatePost,
    sharePostPoint
}

export default SocialService;