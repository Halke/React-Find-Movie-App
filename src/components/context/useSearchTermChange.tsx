import {useContext, useEffect} from 'react'
import {SearchContext} from './SearchContext'

function useSearchTermChange(newSearchTerm: string) {
    const { changeSearchTerm } = useContext(SearchContext)

    useEffect(() => {
        changeSearchTerm(newSearchTerm)
    }, [changeSearchTerm])
}

export default useSearchTermChange