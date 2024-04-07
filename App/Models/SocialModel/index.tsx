import { GetALLPodcastData } from "../PodcastModel"

export type GetAllPost = {
    status:boolean,
    message:string,
    data: Array<PostResponseData>

}

export type GetSinglePost = {
    status:boolean,
    message:string,
    data: PostResponseData

}

export type PostResponseData = {
    _id:string,
    title:string,
    image:Array<string>,
    created_on:string,
    userData: UserData,
    likes: Array<LikesData>,
    comments: Array<CommentsData>,
    selfLike: number
}

export type LikesData = {
    _id:string,
    created_on:string,
    userData:UserData
}


export type CommentsData = {
    _id:string,
   
    created_on:string,
    comment:string,
    userData:UserData
}

export type UserData = {
    _id:string,
    firstname:string,
    lastname:string,
    email:string,
    mobile:string,
    image:string
}

export type SinglePostData = {
    _id:string,
    data:PostResponseData
}
export type singlePostData = {
    _id:string,
}

export type Createpost = {
    userimg:string,
    fname:string,
    lname:string
}

export type AddLikeData = {
    post_id:string
}

export type AddCommentData = {
    post_id:string,
    comment:string,
}

export type AddLikeResponseData = {
    acknowledged:boolean,
    deletedCount: number
}

export type AddLikeResponse = {
    status:boolean,
    message:string,
    data : AddLikeResponseData | null
}

export type AddCommentResponse = {
    status:boolean,
    message:string,
    data : AddCommentResponseData | null
}

export type AddCommentResponseData = {
    post_id:string,
    comment:string,
    user_id:string,
    created_on:string,
    updated_on:string,
    is_deleted: boolean,
    status:boolean,
    _id:string,
    __v:number
}

export type CommentDeleteResponse = {
    status:boolean,
    message:string,
}

export type CreatePostData = {
    title:string,
    image?:string | null,
    isPublish:boolean
}

export type CreatePostResponse = {
    status:boolean,
    message:string,
    error?:string
}

export type ReportPostData = {
    post_id:string,
    report:string
}

export type UpdatePostData = {
    title:string,
    isPublish:boolean,
    
}

export type AllPodcastData = {
    data:Array<GetALLPodcastData>,
    item:GetALLPodcastData
}

export type SharePostPointData = {
    loyaltyType:string,
    points:number
}





