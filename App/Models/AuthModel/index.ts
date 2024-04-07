export type LoginData = {
    email: string, 
    password: string
}

export type RegisterData = {
    firstname: string,
    lastname: string,
    password: string,
    email: string,
    mobile: string,
    under_refer?:string | ''
}

export type LoginResponseData = {
    token: string,
    src:boolean
}

export type RegisterResponseData = {
    token: string,
    src:boolean
}


export type ProfileResponseData={
    _id:string,
    firstname:string,
    lastname:string,
    email:string,
    under_refer:boolean,
    token:string,
    status:boolean,
    refer_code:string,
    total_ref:number,
    mobile:string,
    image:string
}

export type LoginResponse = {
    status: boolean,
    message?: string,
    data?: LoginResponseData | null,
    error: any  
}



export type RegisterResponse = {
    status: boolean,
    message: string,
    data?: RegisterResponseData | null,
    error?: any,

}

export type ProfileResponse = {
    success: boolean,
    message:string,
    data:ProfileResponseData | null
}

