
import { AddCoupon, AddCouponData, AddReviewData, AllCouponResponse, CancelOrderData, CartAddResponse, CartData, CartInitResponse, CategoryResponse, CheckOutData, CheckOutResponse, DeleteCartResponse, OrderDetailsResponse, OrderHistoryResponse, PopularProductResponse, SingleProductResponse, SubCategoryData, SubCategoryProductData, SubCategoryProductResponse, SubCategoryResponse, WishListData, WishListResponse } from "../Models/E_shopModel";
import HttpClient from "../Utils/HttpClient";
import Storage from "../Utils/Storage";


const getCategories =() : Promise<CategoryResponse> => {
    let endpoint='user/product/get-category'
    return HttpClient.get(endpoint)
}

const getSingleProduct = (data : string) : Promise<SingleProductResponse> => {
    let endpoint = 'user/product/single/' + data
    console.log('data>>>',data)
    return HttpClient.get(endpoint)
}

const addToCart = (data:CartData) : Promise<CartAddResponse> => {
    let endpoint = 'user/product/cart'
    return HttpClient.post(endpoint,data)
} 

const getAllCart = () : Promise<CartInitResponse> => {
    let endpoint = 'user/product/view-cart'
    return HttpClient.post(endpoint,{})
} 

const deleteCart = (data : string) : Promise<DeleteCartResponse> => {
    let endpoint = 'user/product/delete-cart/' + data
    console.log('data>>>',data)
    return HttpClient.post(endpoint,{})
}

const addToWishList = (data: WishListData) : Promise<CheckOutResponse> => {
    let endpoint = 'user/product/wishlist'
    return HttpClient.post(endpoint,data)
}

const getAllWishList = () : Promise<WishListResponse> => {
    let endpoint='user/product/wishlist'
    return HttpClient.get(endpoint)
}

// const deleteWishList = (data: string) : Promise<DeleteCartResponse> =>{
//     let endpoint = 'user/product/wishlist/' + data
// }
const deleteWishList = (data : string) : Promise<DeleteCartResponse> => {
    let endpoint = 'user/product/wishlist/' + data
    console.log('data>>>',data)
    return HttpClient.deletee(endpoint)
}

const checkOut = (data : CheckOutData) : Promise<CheckOutResponse> =>{
    let endpoint = 'user/checkout'
    return HttpClient.post(endpoint,data)
}

const orderHistory = () : Promise<OrderHistoryResponse> =>{
    let endpoint= 'user/checkout/order-product'
    return HttpClient.get(endpoint)
}

const orderDetails = (data:string) : Promise<OrderDetailsResponse> => {
    let endpoint= `user/checkout/order-product-single/${data}`
    return HttpClient.get(endpoint)
}

const getSubCategory = (data: SubCategoryData) : Promise<SubCategoryResponse> =>{
    let endpoint = 'user/product/get-subcategory'
    return HttpClient.post(endpoint,data)
}

const getSubCategoryProduct = (data: SubCategoryProductData) : Promise<SubCategoryProductResponse> =>{
    let endpoint = 'user/product/category-product'
    return HttpClient.post(endpoint,data)
}

const getAllCoupon = () : Promise<AllCouponResponse> => {
    let endpoint= 'user/get-all-coupon'
    return HttpClient.get(endpoint)
}

const addCoupon = (data:string) : Promise<AddCoupon> => {
    let endpoint= `user/coupon/${data}`
    return HttpClient.get(endpoint)
}

const addRating = (data:AddReviewData) : Promise<CheckOutResponse> => {
    let endpoint = 'user/rating'
    return HttpClient.post(endpoint,data)
}

const getPopularProduct = () : Promise<PopularProductResponse> => {
    let endpoint= 'user/product/popular-product'
    return HttpClient.get(endpoint)
}

const cancelOrder = (data:CancelOrderData,id:string) : Promise<CheckOutResponse> => {
    let endpoint = `user/checkout/update/${id}`
    return HttpClient.put(endpoint,data)

}

const E_shopService ={
    getCategories,
    getSubCategory,
    getSubCategoryProduct,
    getSingleProduct,
    addToCart,
    getAllCart,
    deleteCart,
    checkOut,
    orderHistory,
    addToWishList,
    getAllWishList,
    deleteWishList,
    getAllCoupon,
    addCoupon,
    orderDetails,
    cancelOrder,
    addRating,
    getPopularProduct
}

export default E_shopService;