import React, {useContext, useEffect, useState} from 'react'
import ContentCard from '../../Cards/ContentCard/ContentCard'
import {SearchContext} from '../../context/SearchContext'
import axios from 'axios'
import './styles.css'

function RegularContent() {

    const {contentType} = useContext(SearchContext)

    const [regularContent, setRegularContent] = useState([])


    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/' + contentType + '/top_rated?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US&page=1')
            .then(res => setRegularContent(res.data.results))
            .catch(err => console.log('ERROR: ', err))
    }, [contentType])


    function renderRegularContent(){
        if(regularContent.length <= 10){
            regularContent.map((content, index) => {
                const contentTitle = contentType === 'movie' ? content.title : content.name
                return (
                    <ContentCard 
                        key={index} 
                        title={contentTitle} 
                        imageUrl={content.poster_path} 
                        id={content.id}
                    />
                )
            })
        } else {
            regularContent.slice(0, 10).map((content, index) => {
                const contentTitle = contentType === 'movie' ? content.title : content.name
                return (
                    <ContentCard 
                        key={index} 
                        title={contentTitle} 
                        imageUrl={content.poster_path} 
                        id={content.id}
                    />
                )
            })
        }
    }


    return (
        <div className='regular-content'>
            {renderRegularContent}
        </div>
    )
}

export default RegularContent
