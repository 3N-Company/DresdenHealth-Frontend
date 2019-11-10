import axios from 'axios'
import {BASE_URL, LOGIN_URL} from "../../constants/api";

class AuthService {
    buildAuthHeader(data) {
        return {"Authorization": "Basic " + btoa(data.email + ":" + data.password)}
    }

    login(data) {
        return axios.get(`${BASE_URL}${LOGIN_URL}`, {
            headers: {...this.buildAuthHeader(data)}
        })
    }

}

export default new AuthService()
