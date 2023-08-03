import axios from "axios";

export default axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    params: {
        //Authorization: "Token 1efbfcd8b31cb84e33c52744f4dd3836c909a599"
    },
})