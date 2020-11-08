import React, {useContext, useEffect, useState} from 'react'
import ContentCard from '../../Cards/ContentCard/ContentCard'
import {SearchContext} from '../../context/SearchContext'
import axios from 'axios'
import './styles.css'

function RegularContent() {

    const {contentType} = useContext(SearchContext)

    const [regularContent, setRegularContent] = useState([])

    // https://api.themoviedb.org/3/movie/top_rated?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US&page=1
    // https://api.themoviedb.org/3/tv/top_rated?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US&page=1

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/' + contentType + '/top_rated?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US&page=1')
            .then(res => setRegularContent(res.data.results))
            .catch(err => console.log('ERROR: ', err))
    }, [contentType])

    return (
        <div className='regular-content'>
            
        </div>
    )
}

export default RegularContent
