export type CategoryDetails = {
    CatId : string,
    name : string
}

export type SubCategoryDetails = {
    CatId : string,
    SubCatId: string
}
export type ViewSingleProduct = {
    ProductId: string,
    remoteUserId: string
}

export type Cart = {
    product_id: string,
    qty: string,
    price : string
}

export type Address = {
    data:Array<CartAddResponseData>,
    total:number,
    discount:string,
    coupon: string
}

export type PaymentModel = {
    name:string,
    mobile:string,
    altmobile:string,
    address:string,
    landmark:string,
    pin:string,
    
}

export type SubCategoryData = {
    cat_id : string
}

export type SubCategoryProductData = {
    cat_id : string,
    sub_cat_id : string
}

export type CategoryResponseData = {
    _id : string,
    name : string,
    img : string,
    
}

export type SubCategoryResponseData = {
    _id : any,
    name : string,
    img : string,
    category_id : string,
    categories: DataSub | null
}

export type DataSub = {
    _id : string,
    name : string,
    img : string,
}

export type CategoryResponse = {
    status:boolean,
    message:string,
    data:Array<CategoryResponseData> | null
}

export type SubCategoryResponse = {
    status : boolean,
    message : string,
    data : Array<SubCategoryResponseData> | null
}

export type SubProData = {
    _id:string,
    name:string,
    desc:string,
    sell_price:string,
    purchase_price:string,
    discount:string,
    img: Array<ImgData>,
    own_product:boolean,
    product_url:string,
    cartCount: number,
    wishlistCount: number,
    avgRating:number

}

export type ImgData = {
    preview:string
}

export type SubCategoryProductResponse = {
    status:boolean,
    message:string,
    data: Array<SubProData> | null
}

export type SingleProData = {
    _id:string,
    name:string,
    desc:string,
    sell_price:string,
    purchase_price:string,
    discount:string,
    img: Array<ImgData>,
    sizeStatus:boolean,
    size: Array<string>,
    color: Array<string>,
    own_product: boolean,
    product_url:string,
    cartCount: number,
    wishlistCount: number,
    avgRating:number
}

export type SingleProductResponse = {
    status: boolean,
    message: string,
    data: SingleProData | null
}

export type CartData = {
    product_id: string,
    qty: string,
    color:string,
    size:string,
    referUserId?: string
}



export type CartAddResponseData = {
    _id: string,
    qty: string,
    color:string,
    size:string,
    productId:string,
    productName:string,
    productDesc:string,
    sellPrice:string,
    referUserId?: string
    productImg:Array<ImgData>
}

export type PaymentResponseData = {
    cartId: string,
    qty: string,
    color:string,
    size:string,
    productId:string,
    productName:string,
    productDesc:string,
    sellPrice:string,
    productImg:Array<ImgData>
}

export type CartAddResponse = {
    status:boolean,
    success: boolean,
    message: string,
    data : CartAddResponseData
}

export type CartInitResponse = {
    status:boolean,
    success: boolean,
    message: string,
    data : Array<CartAddResponseData>
}

export type DeleteCartResponse = {
    status:boolean,
    message:string
}

export type CheckOutData = {
    name:string,
    mobile:string,
    altmobile:string,
    address:string,
    landmark:string,
    pin:string,
    orderNote:string,
    total: number,
    paymentType:string,
    couponId?:string,
    discountPrice?:string
    cartData: Array<PaymentResponseData>
}

// export type CheckOutResponseData = {
//     name:string,
//     mobile:string,
//     altmobile:string,
//     address:string,
//     landmark:string,
//     pin:string,
//     orderStatus:string,
//     orderNote:string,
//     total: number,
//     cartData: Array<>
// }

export type CheckOutResponse = {
    status:boolean,
    message:string,
    
}

export type CartHistoryData = {
    productId:string,
    productName:string,
    productDesc:string,
    qty:string,
    color:string,
    size:string,
    sellPrice:number,
    productImg:Array<ImgData>


}

export type OrderHistoryResponseData = {
    _id:string,
    orderID:string,
    productId:string,
    productName:string,
    productDesc:string,
    color:string,
    quantity:number,
    price:number,
    size:string,
    productImg:Array<ImgData>,
    orderStatus:string,
    createdOn:string

}

export type OrderDetailsResponseData = {
    _id:string,
    orderID:string,
    productId:string,
    productName:string,
    productDesc:string,
    color:string,
    quantity:number,
    price:number,
    size:string,
    productImg:Array<ImgData>,
    orderStatus:string,
    isAttempt:boolean,
    selfRated?: {rating:number}
}

export type OrderDetailsCheckOutData = {
    _id:string,
    name:string,
    couponId:string,
    discountPrice:number,
    mobile:string,
    altNo:string,
    address:string,
    landmark:string,
    pin:string,
    orderStatus:string,
    orderNote:string,
    total:number,
    paymentType:string,
    userId:string,
    createdOn:string,
    updatedOn:string,
    productData:Array<OrderDetailsResponseData>
}

export type OrderHistoryResponse = {
    status:boolean,
    message:string,
    data:Array<OrderHistoryResponseData>

}

export type OrderDetailsResponse = {
    status:boolean,
    message:string,
    data:OrderDetailsCheckOutData
}

export type WishListData = {
    ProductId:string
}

export type WishListResponseData = {
    _id: string,  
    productName:string,
    productDesc:string,
    sellPrice:string,
    purchasePrice:string,
    discount:string,
    images:Array<ImgData>
}

export type WishListResponse = {
    status: boolean,
    message: string,
    data: WishListResponseData | null
}

export type AllCouponResponse = {
    status: boolean,
    message: string,
    data:Array<AllCouponResponseData>
}

export type AllCouponResponseData = {
    _id:string,
    title:string,
    percentageDiscount:number,
    validity:string,
    couponCode:string
}

export type AddCoupon = {
    status: boolean,
    message: string,
    data: AddCouponResponse
}

export type AddCouponData = {
    couponCode:string
}


export type AddCouponResponse = {
    _id:string,
    title:string,
    percentageDiscount:number,
    validity:string,
    couponCode:string,
    createdOn:string
}

export type CancelOrderData = {
    orderID:string,
    price:number
}

export type AddReviewData = {
    ProductId:string,
    review:string,
    rating:number
}

export type PopularProductResponse ={
    status: boolean,
    message: string,
    data: Array<PopularProductResponseData>
}

export type PopularProductResponseData= {
    _id:string,
    avgRat:number,
    productData: PopularProductResponseProdata
}

export type PopularProductResponseProdata ={
    _id:string,
    name:string,
    cat_id:string,
    sub_cat_id:string,
    sell_price:string,
    purchase_price:string,
    discount:string,
    img:Array<ImgData>,
    sizeStatus:boolean,
    size:Array<string>,
    color:Array<string>,
    own_product:boolean,
    product_url:string,
    status:boolean
}