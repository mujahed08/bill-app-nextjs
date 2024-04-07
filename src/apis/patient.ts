import axiosApi from "./axiosApi";
import { baseUrl } from "./constants";

export const patientUrl = `${baseUrl}/api/v2/patient`;
export const patientPrescriptionsUrl = `${baseUrl}/api/v2/patient-prescription`;


export const patientApiGet = async () => {
    return axiosApi.get(patientUrl).then(response => {
        //console.log(`SUCCESS: ${prescribeUrl}`)
        //console.log(response.data)
        return Promise.resolve(response.data);
    }).catch(error => {
        //console.log(`FAILED: ${prescribeUrl}`)
        //console.log(error)
        return Promise.reject(error);
    });
}

export const getPatientPrescriptionsApi = async (patient_id:number) => {
    return axiosApi.get(`${patientPrescriptionsUrl}?patient_id=${patient_id}`).then(response => {
        //console.log(`SUCCESS: ${prescribeUrl}`)
        //console.log(response.data)
        return Promise.resolve(response.data);
    }).catch(error => {
        //console.log(`FAILED: ${prescribeUrl}`)
        //console.log(error)
        return Promise.reject(error);
    });
}