import {useContext, useEffect} from 'react'
import {SearchContext} from './SearchContext'

function useContentTypeChange(changeTo: string) {
    const { changeContentType } = useContext(SearchContext)

    useEffect(() => {
        changeContentType(changeTo)
    }, [])
}

export default useContentTypeChange