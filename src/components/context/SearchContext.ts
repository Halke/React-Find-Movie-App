import {createContext} from 'react'

export const searchContextDefaultValue: SearchContextData = {
    contentType: 'movie',
    searchTerm: '',
    searchResults: [],
    fetchData: () => null,
    changeContentType: () => null
}


export const SearchContext = createContext<SearchContextData>(searchContextDefaultValue)
