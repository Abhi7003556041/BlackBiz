import { BookCourseData, BookCourseResponse, BookMarkData, CategoryWiseVideoResponse, GetAllBannerResponse, GetAllCategories, GetAllMentors, GetBookedCourse, GetSingleCourse, RatingData, ReviewResponse, WatchLessonData } from "../Models/LearningModal";
import HttpClient from "../Utils/HttpClient";

const getAllBanner = () : Promise<GetAllBannerResponse> => {
    let endpoint = 'user/learning/get-banner'
    return HttpClient.get(endpoint)
}

const getAllCategories = () : Promise<GetAllCategories> => {
    let endpoint = 'user/learning/get-all-category'
    return HttpClient.get(endpoint)
}

const CategoryWiseVideo = (data:string) : Promise<CategoryWiseVideoResponse> => {
    let endpoint = `user/learning/get-all-video-category/${data}`
    return HttpClient.get(endpoint)
}

const allVideo = () : Promise<CategoryWiseVideoResponse> => {
    let endpoint = 'user/learning/all-course'
    return HttpClient.get(endpoint)
}

const getAllMentors = () : Promise<GetAllMentors> => {
    let endpoint = 'user/learning/all-mentors'
    return HttpClient.get(endpoint)
}

const getSingleCourse = (data:string) : Promise<GetSingleCourse> => {
    let endpoint = `user/learning/get-single-video/${data}`
    return HttpClient.get(endpoint)
}

const getWatchedVideo = (data:WatchLessonData) : Promise<BookCourseResponse> => {
    let endpoint = 'user/learning/lesson/watch-lesson'
    return HttpClient.post(endpoint,data)
}

const bookCourse = (data:BookCourseData) : Promise<BookCourseResponse> => {
    let endpoint = 'user/learning/book-course'
    return HttpClient.post(endpoint,data)
}

const addRating = (data:RatingData) : Promise<BookCourseResponse> => {
    let endpoint = 'user/learning/course/add-rating'
    return HttpClient.post(endpoint,data)
}

const getReview = (data:string) : Promise<ReviewResponse> => {
    let endpoint = `user/learning/course/get-review/${data}`
    return HttpClient.get(endpoint)
}

const getBookedCourses = () : Promise<GetBookedCourse> => {
    let endpoint = 'user/learning/get-booked-courses'
    return HttpClient.get(endpoint)
}

const addBookMark = (data:BookMarkData) : Promise<BookCourseResponse> => {
    let endpoint = 'user/learning/course/add-remove-bookmarks'
    return HttpClient.post(endpoint,data)
}

const getAllBookMark = () : Promise<CategoryWiseVideoResponse> => {
    let endpoint = 'user/learning/course/get-bookmarks'
    return HttpClient.get(endpoint)
}

const LearningServices = {
    getAllBanner,
    getAllCategories,
    CategoryWiseVideo,
    allVideo,
    getSingleCourse,
    bookCourse,
    addRating,
    getAllMentors,
    getBookedCourses,
    getReview,
    getAllBookMark,
    addBookMark,
    getWatchedVideo
}

export default LearningServices;