import { createContext, useContext } from 'react'

export interface SearchResultsInterface{
    coverImage?: string;
    trailerVideo?: string;
    name: string;
    overview: string;
    originalName: string;
    ganre: string;
    releaseDate: string;
    revenue: string;
}

export type SearchContextType = {
    contentType: string;
    searchTerm: string;
    searchResults: SearchResultsInterface[];
    setSearchResults: (Search: SearchResultsInterface) => void;
    setSearchTerm: (term: string) => void;
    setContentType: () => void
}

export const SearchContext = 
    createContext<SearchContextType>({ 
        contentType: 'movie',
        searchTerm: '',
        searchResults: [], 
        setSearchResults: result => console.warn('no result provider'),
        setSearchTerm: value => console.warn('no value provider'),
        setContentType: () => console.warn('no value provider')
    })

export const useSearch = () => useContext(SearchContext)