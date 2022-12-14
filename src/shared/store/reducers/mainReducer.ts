import {InitialStateType, MainActionTypes, MainReducerActionTypes} from "../types/mainTypes";

const initialState: InitialStateType = {
    documents: [],
    chosenDocuments: [],
    isCancel: false
}

const mainReducer = (state = initialState, action: MainReducerActionTypes): InitialStateType => {
    switch (action.type) {
        case MainActionTypes.SET_DOCS:
            if (state.documents.find(item => item.id === action.payload.id)) {
                return {
                    ...state,
                    documents: state.documents.map(item => {
                        if (item.id === action.payload.id) {
                            return {...item}
                        } else {
                            return item
                        }
                    })

                }
            } else {
                return {
                    ...state,
                    documents: [...state.documents, {...action.payload}]
                }
            }
        case MainActionTypes.SET_CHOSEN_DOCS:
            return {...state, chosenDocuments: action.payload}
        case MainActionTypes.SET_CANCEL:
            return {...state, isCancel: action.payload}
        default:
            return state
    }
}

export default mainReducer
