import {SET_TITLE} from "../names/names";

export function setTitle(title){
    return {
        type: SET_TITLE,
        title
    }
}
