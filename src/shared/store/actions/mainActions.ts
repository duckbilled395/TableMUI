import {Dispatch} from 'redux'
import {
    MainActionTypes,
    MainAPITypes,
    MainObjectType,
    MainReducerActionTypes, SetCancelType,
    SetChosenDocsType,
    SetDocsType
} from "../types/mainTypes";
import {docsAPI} from "../../API/api";
import {GridSelectionModel} from "@mui/x-data-grid";

export const setDocs = (docs: MainObjectType): SetDocsType => ({
    type: MainActionTypes.SET_DOCS,
    payload: docs,
})

export const setChosenDocs = (chosenDocs: number[] | string[] | GridSelectionModel): SetChosenDocsType => ({
    type: MainActionTypes.SET_CHOSEN_DOCS,
    payload: chosenDocs,
})

export const setCancel = (isCancel: boolean): SetCancelType => ({
    type: MainActionTypes.SET_CANCEL,
    payload: isCancel,
})

export const requestDocs = (url: MainAPITypes) => {
    return async (dispatch: Dispatch<MainReducerActionTypes>) => {
        let responseObj = await docsAPI.getDocs(url)
        dispatch(setDocs(responseObj.response))
    }
}

export const requestSendDocs = (docsId: (string | number | undefined)[]) => {
    return async (dispatch: Dispatch<MainReducerActionTypes>) => {
        let responseObj = await docsAPI.sendDocs(docsId)
        dispatch(setDocs(responseObj.response))
    }
}