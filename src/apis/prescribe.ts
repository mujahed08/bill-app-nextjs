import axiosApi from "./axiosApi";
import { baseUrl } from "./constants";

export const prescribeUrl = `${baseUrl}/api/v2/patient`;
export const prescribeUrlGet = `${baseUrl}/api/v2/prescribe`;
export const prescribeFollowUpUrl = `${baseUrl}/api/v2/patient`;

export const prescribeApi = async (payload:any) => {
    return axiosApi.post(prescribeUrl, payload).then(response => {
        //console.log(`SUCCESS: ${prescribeUrl}`)
        //console.log(response.data)
        return Promise.resolve(response.data);
    }).catch(error => {
        //console.log(`FAILED: ${prescribeUrl}`)
        //console.log(error)
        return Promise.reject(error);
    });
}

export const prescribeApiGet = async () => {
    return axiosApi.get(prescribeUrlGet).then(response => {
        //console.log(`SUCCESS: ${prescribeUrl}`)
        //console.log(response.data)
        return Promise.resolve(response.data);
    }).catch(error => {
        //console.log(`FAILED: ${prescribeUrl}`)
        //console.log(error)
        return Promise.reject(error);
    });
}

export const prescribeFollowUpApi = async (payload:any) => {
    return axiosApi.put(prescribeFollowUpUrl, payload).then(response => {
        //console.log(`SUCCESS: ${prescribeUrl}`)
        //console.log(response.data)
        return Promise.resolve(response.data);
    }).catch(error => {
        //console.log(`FAILED: ${prescribeUrl}`)
        //console.log(error)
        return Promise.reject(error);
    });
}