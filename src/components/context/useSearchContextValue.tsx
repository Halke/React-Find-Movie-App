import {useState, useCallback} from 'react'
import axios from 'axios'
import {searchContextDefaultValue} from './SearchContext'

function useSearchContextValue(): SearchContextData {
    const [searchResults, setSearchResults] = useState<ISearchResult[]>([])
    const [contentType, setContentType] = useState<string>(searchContextDefaultValue.contentType)
    const [searchTerm, setSearchTerm] = useState<string>(searchContextDefaultValue.searchTerm)

    const fetchData = useCallback(() => {
        axios.get('https://api.themoviedb.org/3/search/' + contentType + '?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US&query=' + searchTerm + '&page=1&include_adult=false')
        .then(res => setSearchResults(res.data.results))
        .catch(err => console.log('ERROR: ', err))
    }, [setSearchResults])

    const changeContentType = useCallback(() => {
        if(contentType === 'movie'){
            setContentType('tv')
        }else{
            setContentType('movie')
        }
    }, [setContentType])

    const changeSearchTerm = useCallback((newSearchTerm: string) => {
        setSearchTerm(newSearchTerm)
    }, [setSearchTerm, searchTerm])

    return {
        contentType,
        searchTerm,
        searchResults,
        fetchData,
        changeContentType,
        changeSearchTerm
    }
}

export default useSearchContextValue