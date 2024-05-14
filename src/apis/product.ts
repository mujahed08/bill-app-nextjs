import axios from "axios";
import { baseUrl } from "./constants";

export const product_url = `${baseUrl}/products`;
export const create_product_url=`${baseUrl}/products`

export const get_products = async () => {
    return axios.get(product_url).then(response => {
        console.log(`SUCCESS: ${product_url}`)
        //console.log(response.data)
        return Promise.resolve(response.data);
    }).catch(error => {
        console.log(`FAILED: ${product_url}`)
        console.log(error)
        return Promise.reject(error);
    });
}

export const create_product = async (payload:any) => {
    return axios.post(create_product_url, payload).then(response => {
        console.log(`SUCCESS: ${create_product_url}`)
        //console.log(response.data)
        return Promise.resolve(response.data);
    }).catch(error => {
        console.log(`FAILED: ${create_product_url}`)
        console.log(error)
        return Promise.reject(error);
    });
}