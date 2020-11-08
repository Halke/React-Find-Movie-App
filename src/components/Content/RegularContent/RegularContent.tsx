import React, {useContext} from 'react'
import ContentCard from '../../Cards/ContentCard/ContentCard'
import {SearchContext} from '../../context/SearchContext'
import './styles.css'

function RegularContent() {

    const {contentType} = useContext(SearchContext)

    return (
        <div className='regular-content'>
            
        </div>
    )
}

export default RegularContent
