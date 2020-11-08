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
    }, [searchTerm, searchOnFocus])

    return (
        <div className={searchTerm.length < 3 ? 'hidden ' : '' + 'search-content'}>
            {/* <ul className='search-content__content'>
                {searchResults.map(content => (
                        <li className='search-content__content-item'>
                            <a 
                                href={'https://api.themoviedb.org/3/' + contentType + '/' + content.id + '?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US'}
                            >
                                {contentType === 'movie' ? content.title : content.name}
                            </a>
                        </li>
                ))}
            </ul> */}
            {searchResults.map(content => (
                        <ContentCard 
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
