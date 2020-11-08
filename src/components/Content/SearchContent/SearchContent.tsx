import React, {useEffect, useContext, useState} from 'react'
import {SearchContext} from '../../context/SearchContext'
import ContentCard from '../../Cards/ContentCard/ContentCard'
import './styles.css'


function SearchContent() {

    // Upotreba globalnog state-a
    const {contentType, searchResults, searchTerm, searchOnFocus, fetchData} = useContext(SearchContext)


    useEffect(() => {
        if(searchOnFocus && searchTerm.length >= 3){
            setTimeout(() => {
                fetchData()
            }, 1000)
        }
    }, [searchTerm, searchOnFocus, contentType])

    return (
        <div className={searchTerm.length < 3 ? 'hidden ' : '' + 'search-content'}>
            {searchResults.slice(0, 10).map(content => (
                        <ContentCard
                            key={content.id} 
                            id={content.id} 
                            title={contentType === 'movie' ? 
                            content.title : content.name}
                            imageUrl={content.poster_path}
                        />
            ))}
        </div>
    )
}

export default SearchContent
