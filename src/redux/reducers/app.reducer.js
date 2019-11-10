import {produce} from "immer";
import {SET_TITLE} from "../names/names";

const initialState = {
    header: {
        title: ""
    }
}

function modify(draftState, action) {
    switch (action.type) {
        case SET_TITLE:
            draftState.header.title = action.title
    }
}

export function appReducer(state = initialState, action) {

    return produce(
        state,
        draftState => modify(draftState, action)
    )
}


