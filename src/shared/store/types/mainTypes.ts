import {GridSelectionModel} from "@mui/x-data-grid";

export type MainObjectType = {
    id: string,
    status: MainObjectStatusType | string, // {‘active’, ‘archive’}
    sum: number,
    qty: number,
    volume: number,
    name: string,
    delivery_date: string | Date,
    currency: string
}

enum MainObjectStatusType {
    active = 'active',
    archive = 'archive'
}

export type InitialStateType = {
    documents: [] | Array<MainObjectType>,
    chosenDocuments: number[] | string[] | GridSelectionModel,
    isCancel: boolean
}

export enum MainActionTypes {
    SET_DOCS = 'SET_DOCS',
    SET_CHOSEN_DOCS = 'SET_CHOSEN_DOCS',
    SET_CANCEL = 'SET_CANCEL'
}

export enum MainAPITypes {
    documents1 = 'documents1',
    documents2 = 'documents2',
}

export type SetDocsType = {
    type: MainActionTypes.SET_DOCS,
    payload: MainObjectType,
}

export type SetChosenDocsType = {
    type: MainActionTypes.SET_CHOSEN_DOCS,
    payload: number[] | string[] | GridSelectionModel,
}

export type SetCancelType = {
    type: MainActionTypes.SET_CANCEL,
    payload: boolean,
}

export type MainReducerActionTypes = SetDocsType | SetChosenDocsType | SetCancelType

export enum CurrencyType {
    USD = 'USD',
    EUR = 'EUR',
    JPY = 'JPY',
    GBP = 'GBP',
    AUD = 'AUD'

}