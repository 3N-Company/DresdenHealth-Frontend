import axios from 'axios'
import {BASE_URL, LOGIN_URL} from "../../constants/api";

class AuthService {

    login(data) {
        return axios.get(`${BASE_URL}${LOGIN_URL}`, {
            headers: {"Authorization": "Basic " + btoa(data.email + ":" + data.password)}
        })
    }

}

export default new AuthService()
