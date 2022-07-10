import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://api-chat-app123.herokuapp.com/"
})
