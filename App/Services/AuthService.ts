import { LoginData, LoginResponse, ProfileResponse, RegisterData, RegisterResponse } from "../Models/AuthModel";
import HttpClient from "../Utils/HttpClient";
import Storage from "../Utils/Storage";

const login = (data: LoginData): Promise<LoginResponse> => {
    let endpoint = 'user/login'
    return HttpClient.post(endpoint, data)
}

const register = (data: RegisterData): Promise<RegisterResponse> => {
    let endpoint = 'user/register'
    return HttpClient.post(endpoint, data)
}

const getProfile = ():Promise<ProfileResponse> =>{
    let endpoint = 'user'
    return HttpClient.get(endpoint)
}

const getAccount = () => {
    return Storage.get('Account');
}

const setAccount = (data: any) => {
    return Storage.set('Account', data);
}

// const logout = () => {
//     return Storage.set('Account', null);
// }
const getToken = () => {
    return Storage.get('Token');
}

const setToken = (data: string) => {
    return Storage.set('Token', data);
}

const AuthService = {
    login,
    register,
    getAccount,
    setAccount,
    getToken,
    setToken,
    getProfile,
    // logout
}

export default AuthService;