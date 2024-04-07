import axiosApi from "./axiosApi";
import { baseUrl } from "./constants";

export const medicineUrl = `${baseUrl}/api/v2/medicine`;

export const medicineApiGet = async () => {
    return axiosApi.get(medicineUrl).then(response => {
        //console.log(`SUCCESS: ${prescribeUrl}`)
        //console.log(response.data)
        return Promise.resolve(response.data);
    }).catch(error => {
        //console.log(`FAILED: ${prescribeUrl}`)
        //console.log(error)
        return Promise.reject(error);
    });
}