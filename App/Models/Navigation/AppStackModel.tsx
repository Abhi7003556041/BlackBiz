import { Address, Cart, CategoryDetails, OrderHistoryResponseData, PaymentModel, SubCategoryDetails, ViewSingleProduct } from "../E_shopModel"
import { BookCourseData, EnrollPageData } from "../LearningModal"
import { CategoryData, CategoryWiseVideoResponseData, SingleCategoryData, SingleVideo } from "../OttModel"
import { AllEpisode, AllPodcast, GetALLPodcastData } from "../PodcastModel"
import {  AllPodcastData, Createpost, SinglePostData } from "../SocialModel"

export type AppStackModel = {
    Home: undefined,
    Profile:undefined,
    ToMobileTransfer: undefined,
    TransferToBank: undefined,
    Passbook: undefined,
    Wallet: undefined,
    Recharge: undefined,
    MobileRecharge: undefined,
    CableTv: undefined,
    Newsindex: undefined,
    Fullnews: undefined,
    Scan: undefined,
    PaymentSection: undefined,

    // ********podcast*************//
    PodcastHome: undefined,
    Trending: undefined,
    NewUpdates: AllPodcastData,
    Episode:  AllPodcastData,
    PlayPodcast: AllPodcast,
    Discover: undefined,
    SearchPodcast:  undefined,
    SearchPodcastInList: undefined,
    MyLibrary: undefined,
    WishlistSocial:undefined
    // ****************************//

    // ********Business*************//
    BusinessIndex: undefined,
    watchList:  undefined,
    MyProfile: undefined,
    StartTrading: undefined,
    SeeAllNews:  undefined,
    SeeAllAnalysisBlog: undefined
    // ********************************//

    LearningIndex: undefined,
    Bookmark: undefined,
    Topmentor: undefined,
    MostPopularCourses: undefined,
    LearningSearch: undefined,
    SelectOperator: undefined,
    DthRecharge: undefined,
    EducationFeesPayUsingCrad: undefined,
    CreditCardPayment: undefined,
    MentorProfile: undefined,

    EnrolPage: EnrollPageData,
    ManageNotification: undefined,
    FAQ: undefined,
    PayBroadBandBills: undefined,
    OperatorBills: undefined,
    Search: undefined,
    Notification: undefined,

    //suman adds
    SelectPayment: undefined,
    ConfirmPayment: undefined,
    Successful: undefined,
    MyCourses: undefined,
    OngoingCourses: BookCourseData,
    CompletedCourses: undefined,
    Vedio: undefined,
    Ottindex: undefined,
    EnglishWebSeries: undefined,
    VedioPlay: SingleCategoryData,func:()=>void,
    VideoPlayer:SingleVideo,
    WebSerise:CategoryData,
    Featured:undefined,
    OttWatchList:undefined
    // ********EShop**************//
    Eshop_Index: undefined,
    ViewProduct: ViewSingleProduct,
    Payment: {addressData: PaymentModel,total:number, discount?:string,coupon?:string},
    MyCart:  undefined,
    SubCategory: CategoryDetails,
    SubCategoryProduct:SubCategoryDetails,
    Wishlist:undefined
    AddAddress:Address
    OrderHistory:undefined
    OrderDetails:{data: OrderHistoryResponseData}
    // **************Social***********//
    Social_Index:undefined,
    SinglePost:SinglePostData,
    CreatePost:Createpost,
    OrderSuccessFull:undefined
    // **************Loyality***********//
    LoyalityHome:undefined,
    WalletIndex:undefined,
    MyRewards:undefined,
}