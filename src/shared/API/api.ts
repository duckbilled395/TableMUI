import {MainAPITypes, MainObjectType} from "../store/types/mainTypes";

type getDocsReturnObjType = {
    response: MainObjectType,
    url: MainAPITypes
}

export const docsAPI = {
    async getDocs(url: MainAPITypes): Promise<getDocsReturnObjType> {
        let response = await fetch(url)
        return await response.json();
    }
}