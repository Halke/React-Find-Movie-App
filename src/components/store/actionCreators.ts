import * as actionTypes from './actionTypes'

export function addSearchResults(results: ISearch){
    const action: SearchAction = {
        type: actionTypes.ADD_SEARCH_RESULTS,
        results
    }
}

export function changeContentType(contentType: string){
    const action: SearchAction = {
        type: actionTypes.CHANGE_CONTENT_TYPE,
        contentType
    }
}

export function addSearchTerm(searchTerm: string){
    const action: SearchAction = {
        type: actionTypes.ADD_SEARCH_TERM,
        searchTerm
    }
}