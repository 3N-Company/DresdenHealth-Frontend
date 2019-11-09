import {produce} from "immer";

const initialState = {}

function modify(draftState, action) {
}

export function appReducer(state = initialState, action) {

    return produce(
        state,
        draftState => modify(draftState, action)
    )
}


