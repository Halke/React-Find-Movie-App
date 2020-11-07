import React, {useEffect, useContext} from 'react'
import {SearchContext} from '../../context/SearchContext'


function SearchContent() {

    // State za spremanje rezultata pretrazivanja
    const {contentType, searchResults} = useContext(SearchContext)

    useEffect(() => {
        let contentNode = document.querySelector('.search-content__content')
        if(searchResults.length === 0){
            if(!contentNode?.classList.contains('hidden')){
                contentNode?.classList.add('hidden')
            }
        }else{
            if(contentNode?.classList.contains('hidden')){
                contentNode?.classList.remove('hidden')
            }
        }
    }, [searchResults])

    function renderResults(): any {
        searchResults.map(content => {
            return (
                <li className='search-content__content'>
                    <a 
                        href={'https://api.themoviedb.org/3/' + contentType + '/' + content.id + '?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US'}
                    >
                        {content.title}
                    </a>
                </li>
            )
        })
    }

    return (
        <div className='search-content'>
            <ul className='search-content__content'>
                {renderResults()}
            </ul>
        </div>
    )
}

export default SearchContent
