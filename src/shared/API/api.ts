import {MainAPITypes, MainObjectType} from "../store/types/mainTypes";

type getDocsReturnObjType = {
    response: MainObjectType,
    url: MainAPITypes
}

export const docsAPI = {
    async getDocs(url: MainAPITypes): Promise<getDocsReturnObjType> {
        let response = await fetch(url)
        return await response.json();
    },
    async sendDocs(docs: (string | number | undefined)[]): Promise<any> {
        const options = {
            method: 'POST',
            body: docs,
            credentials: 'include',
        }
        // @ts-ignore
        let response = await fetch( '/cancel', options)
        return await response.json();
    }

}