import {useContext, useEffect} from 'react'
import {SearchContext} from './SearchContext'

function useContentTypeChange() {
    const { changeContentType } = useContext(SearchContext)

    useEffect(() => {
        changeContentType()
    }, [])
}

export default useContentTypeChange