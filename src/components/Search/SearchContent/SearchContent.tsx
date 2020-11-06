import React, {useState, useEffect} from 'react'
import axios from 'axios'

interface Search{
    contentType: string;
    searchTerm: string
}

function SearchContent({contentType, searchTerm}: Search) {

    // State za spremanje rezultata pretrazivanja
    const [search, setSearch] = useState([])

    const API_endpoint: string = contentType === 'movie' 
    ? 
    'https://api.themoviedb.org/3/search/movie?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US&query=' + searchTerm + '&page=1&include_adult=false'
    :
    'https://api.themoviedb.org/3/search/tv?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US&page=1&query=' + searchTerm + '&include_adult=false'

    useEffect(() => {
        if(searchTerm.length >= 3){
            if(document.querySelector('.search-content__content')?.classList.contains('hidden')){
                document.querySelector('.search-content__content')?.classList.remove('hidden')
            }
            axios.get(API_endpoint)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log('ERROR: ', err)
            })
        }else{
            if(!document.querySelector('.search-content__content')?.classList.contains('hidden')){
                document.querySelector('.search-content__content')?.classList.add('hidden')
            }
        }
    }, [searchTerm])

    return (
        <div className='search-content'>
            <ul className='search-content__content'>

            </ul>
        </div>
    )
}

export default SearchContent
