import {InitialStateType, MainActionTypes, MainReducerActionTypes} from "../types/mainTypes";

const initialState: InitialStateType = {
    documents: [],
    documents2: {}
}

const mainReducer = (state = initialState, action: MainReducerActionTypes): InitialStateType => {
    switch (action.type) {
        case MainActionTypes.SET_DOCS1:
            return { ...state, documents: [...state.documents, action.payload]}
        default:
            return state
    }
}

export default mainReducer