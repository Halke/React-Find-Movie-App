import * as actionTypes from './actionTypes'

const initialState: SearchState = {
    contentType: 'movie',
    searchTerm: '',
    results: []
}

const reducer = (
    state: SearchState = initialState,
    action: SearchAction
): SearchState => {
    switch(action.type){
        case actionTypes.ADD_SEARCH_RESULTS:
            return {
                ...state,
                results: action.results
            }
        case actionTypes.ADD_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.searchTerm
            }
        case actionTypes.CHANGE_CONTENT_TYPE:
            return {
                ...state,
                contentType: action.contentType
            }
    }
    return state
}

export default reducer