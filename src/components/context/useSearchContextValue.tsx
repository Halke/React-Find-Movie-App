import {useState, useCallback} from 'react'
import axios from 'axios'

function useSearchContextValue(): SearchContextData {
    const [searchResults, setSearchResults] = useState<ISearchResult[]>([])
    const [contentType, setContentType] = useState<string>('movie')
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [searchOnFocus, setSearchOnFocus] = useState<boolean>(false)


    // Funkcija za dohvatanje podataka onda kad pojam u search baru ima
    // 3 ili vise karaktera
    const fetchData = useCallback(() => {
        console.log('Fetching Data...')
        axios.get('https://api.themoviedb.org/3/search/' + contentType + '?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US&query=' + searchTerm + '&page=1&include_adult=false')
        .then(res => {
            setSearchResults(res.data.results)
        })
        .catch(err => console.log('ERROR: ', err))
    }, [searchTerm, contentType])


    // Funkcija za promjenu tipa contenta ovisno o izabranom tabu
    const changeContentType = useCallback((changeTo: string) => {
        setContentType(changeTo)
    }, [contentType])

    // Funkcija za azuriranje search pojma unutar globalnog state-a
    const changeSearchTerm = useCallback((newSearchTerm: string) => {
        setSearchTerm(newSearchTerm)
    }, [searchTerm])


    const changeSearchOnFocus = useCallback(() => {
        setSearchOnFocus(!searchOnFocus)
    }, [searchOnFocus])

    return {
        contentType,
        searchTerm,
        searchResults,
        searchOnFocus,
        fetchData,
        changeContentType,
        changeSearchTerm,
        changeSearchOnFocus
    }
}

export default useSearchContextValue