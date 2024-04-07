import axios from "axios";
import { baseUrl } from "./constants";

export const loginUrl = `${baseUrl}/api/v1/login`;
export const signupUrl = `${baseUrl}/api/v1/signup`;

export const login = async (payload:any) => {
    return axios.post(loginUrl, payload).then(response => {
        console.log(`SUCCESS: ${loginUrl}`)
        //console.log(response.data)
        return Promise.resolve(response.data);
    }).catch(error => {
        console.log(`FAILED: ${loginUrl}`)
        console.log(error)
        return Promise.reject(error);
    });
}


export const signup = async (payload:any) => {
    return axios.post(signupUrl, payload).then(response => {
        console.log(`SUCCESS: ${signupUrl}`)
        //console.log(response.data)
        return Promise.resolve(response.data);
    }).catch(error => {
        console.log(`FAILED: ${signupUrl}`)
        console.log(error)
        return Promise.reject(error);
    });
}