import {BASE_URL, PORT} from "../config/config";
import * as axios from "axios";

const instans = axios.create({
    withCredentials: true,
    baseURL: BASE_URL + PORT,
    headers: {
        'Content-Type': 'application/json'
    }
})
export const listPageAPI = {
        getData: () => {
            return instans.get("/posts")
        }
}