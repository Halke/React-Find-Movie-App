import React, {useEffect, useContext, useState} from 'react'
import {SearchContext} from '../../context/SearchContext'
import './styles.css'


function SearchContent() {

    // State za spremanje rezultata pretrazivanja
    const {contentType, searchResults, searchTerm, fetchData} = useContext(SearchContext)


    useEffect(() => {
        fetchData()
    }, [searchTerm])

    return (
        <div className={searchTerm.length < 3 ? 'hidden ' : '' + 'search-content'}>
            <ul className='search-content__content'>
                {searchResults.map(content => (
                        <li className='search-content__content-item'>
                            <a 
                                href={'https://api.themoviedb.org/3/' + contentType + '/' + content.id + '?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US'}
                            >
                                {contentType === 'movie' ? content.title : content.name}
                            </a>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default SearchContent
