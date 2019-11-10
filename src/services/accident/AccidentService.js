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
        this.sendMeDoctor()
        this.sendMeFriend()
    }
}
