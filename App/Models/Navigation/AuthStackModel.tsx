import { LoginResponseData, RegisterResponseData } from "../AuthModel"

export type AuthStackModel = { 
    LandingPage: undefined,
    GetStart: undefined,
    SignIn: undefined,
    OtpVerification: undefined,
    LoginSuccessPage: LoginResponseData | RegisterResponseData,
    ForgetPassword: undefined,
    Register:undefined
}