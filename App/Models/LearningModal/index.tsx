import { UserData } from "../OttModel"

export type GetAllBannerResponse = {
    status:boolean,
    message:string,
    data:Array<GetAllBannerResponseData>
}

export type GetAllBannerResponseData = {
    _id:string,
    image:string
}

export type GetAllCategories = {
    status:boolean,
    message:string,
    data:Array<GetAllCategoriesData>
}

export type GetAllCategoriesData = {
    _id:string,
    name:string,
    description:string,
    image:string
}

export type CategoryWiseVideoResponse = {
    status:boolean,
    message:string,
    data:Array<CategoryWiseVideoResponseData>
}

export type CategoryWiseVideoResponseData = {
    _id:string,
    courseName:string,
    courseType:string,
    description:string,
    courseCategory:Array<CatData>,
    lecturer:Array<LecturerData>,
    interest:string,
    date:string,
    uplodVideo:string,
    thumbline:string,
    priority:string,
    createdBy:string,
    status:boolean,
    price:string,
    avgrating:number,
    bookmarks:number,
    totalBuyCount:number
}

export type CatData = {
    categoryID:string,
    categoryName:string,
    _id:string
}

export type LecturerData = {
    _id: string,
    name:string,
    about:string,
    workExperience:string,
    profilePicture:string
}

export type EnrollPageData = {
    _id:string
}

export type GetSingleCourse = {
    status:boolean,
    message:string,
    data:GetSingleCourseData
}

export type GetSingleCourseData = {
    _id:string,
    courseName:string,
    courseType:string,
    description:string,
    courseCategory:Array<CatData>,
    lecturer:Array<LecturerData> ,
    interest:string,
    date:string,
    uplodVideo:string,
    thumbline:string,
    priority:string,
    createdOn:string,
    price:string,
    status:boolean,
    allLessons:AllLessons,
    avgrating:number,
    ratingCount:number,
    bookmarks:number,
    selfBuyCount:number,
    totalBuyCount:number
}

export type AllLessons = {
    _id:string,
    courseID:string,
    lessonInfo:Array<AllLessonsInfo>,
    status:boolean
}

export type AllLessonsInfo = {
    lessonName:string,
    lessonDescription:string,
    uploadVideo:string,
    lessonTime:string,
    _id:string
}

export type BookCourseData = {
    courseID:string
}
export type BookMarkData = {
    courseId:string
}

export type BookCourseResponse = {
    status:boolean,
    message:string
}

export type RatingData = {
    courseID:string,
    rating:number,
    review:string
}

export type ReviewResponse = {
    status:boolean,
    message:string,
    data:Array<ReviewResponseData>
}

export type ReviewResponseData = {
    _id:string,
    rating:number,
    review:string,
    createdOn:string,
    userData:UserData
}

export type GetAllMentors = {
    status:boolean,
    message:string,
    data:Array<GetAllMentorsData>
}

export type GetAllMentorsData = {
    _id:string,
    name:string,
    about:string,
    workExperience:string,
    interest:string,
    profilePicture:string,
    createdOn:string
}

export type GetBookedCourse = {
    status:boolean,
    message:string,
    data:Array<BookedCourseResponse>
}

export type BookedCourseResponse = {
    _id:string,
    courseID:string,
    createdOn:string,
    coursdata:BookedCourseResponseData,
    totalLesson:number,
    watchLesson:number
}

export type BookedCourseResponseData = {
    _id:string,
    courseName:string,
    courseType:string,
    description:string,
    uplodVideo:string,
    thumbline:string,
    price:string
}

export type WatchLessonData = {
    courseId:string,
    lessionId:string
}