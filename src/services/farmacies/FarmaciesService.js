import {FARM_DATA} from "../data/farm_data";

class FarmaciesService {
    loadJson(){
        return FARM_DATA
    }
}

export default new FarmaciesService()
