import {createContext} from 'react'

export const searchContextDefaultValue: SearchContextData = {
    contentType: 'tv',
    searchTerm: '',
    searchResults: [],
    searchOnFocus: false,
    fetchData: () => null,
    changeContentType: (changeTo: string) => null,
    changeSearchTerm: (newSearchTerm: string) => null,
    changeSearchOnFocus: () => null
}


export const SearchContext = createContext<SearchContextData>(searchContextDefaultValue)
