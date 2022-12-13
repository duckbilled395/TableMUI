import {Dispatch} from 'redux'
import {MainActionTypes, MainAPITypes, MainObjectType, MainReducerActionTypes, SetDocs1Type} from "../types/mainTypes";
import {docsAPI} from "../../API/api";

export const setDocs1 = (docs: MainObjectType): SetDocs1Type => ({
    type: MainActionTypes.SET_DOCS1,
    payload: docs,
})

export const requestDocs = (url: MainAPITypes) => {
    return async (dispatch: Dispatch<MainReducerActionTypes>) => {
        let responseObj = await docsAPI.getDocs(url)
        dispatch(setDocs1(responseObj.response))
        dispatch(setDocs1(responseObj.response))
        dispatch(setDocs1(responseObj.response))
    }
}