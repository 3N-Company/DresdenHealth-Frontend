import axios from 'axios'
import {BASE_URL, MESSAGE_DOCTOR, MESSAGE_FRIENDS} from "../../constants/api";

class AccidentService {

    message = "Help required, emergency"

    sendMeFriend(){
        return axios.post(`${BASE_URL}${MESSAGE_FRIENDS}`, {message: this.message})
    }

    sendMeDoctor(){
        return axios.post(`${BASE_URL}${MESSAGE_DOCTOR}`, {message: this.message})
    }

    send(){
        const config = {
            headers: {
                'Content-Type': 'text/plain'
            },
            withCredentials: true
        }
        return axios.all([
            axios.post(`${BASE_URL}${MESSAGE_FRIENDS}`, this.message, config),
            axios.post(`${BASE_URL}${MESSAGE_DOCTOR}`, this.message, config)
        ])
    }
}

export default new AccidentService()
