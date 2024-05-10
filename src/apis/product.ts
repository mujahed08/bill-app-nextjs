import axios from "axios";
import { baseUrl } from "./constants";

export const product_url = `${baseUrl}/api/products`;

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

