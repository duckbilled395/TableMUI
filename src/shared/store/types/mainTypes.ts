export type MainObjectType = {
    id: string,
    status: MainObjectStatusType | string, // {‘active’, ‘archive’}
    sum: number,
    qty: number,
    volume: number,
    name: string,
    delivery_date: string,
    currency: string
}

enum MainObjectStatusType {
    active = 'active',
    archive = 'archive'
}

export type InitialStateType = {
    documents: [] | MainObjectType[],
    documents2: MainObjectType | {}
}

export enum MainActionTypes {
    SET_DOCS1 = 'SET_DOCS1',
    SET_DOCS2 = 'SET_DOCS2'
}

export enum MainAPITypes {
    documents1 = 'documents1',
    documents2 = 'documents2',
}

export type SetDocs1Type = {
    type: MainActionTypes.SET_DOCS1,
    payload: MainObjectType,
}

export type SetDocs2Type = {
    type: MainActionTypes.SET_DOCS2,
    payload: MainObjectType,
}

export type MainReducerActionTypes = SetDocs1Type | SetDocs2Type