import React, {useContext, useEffect, useState} from 'react'
import ContentCard from '../../Cards/ContentCard/ContentCard'
import {SearchContext} from '../../context/SearchContext'
import axios from 'axios'
import './styles.css'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

const RegularContent: React.FC<any> = () => {

    const {contentType} = useContext(SearchContext)
    const [regularContent, setRegularContent] = useState<ISearchResult[]>([])


    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/' + contentType + '/top_rated?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US&page=1')
            .then(res => setRegularContent(res.data.results))
            .catch(err => console.log('ERROR: ', err))
    }, [contentType])



    return (
        <div className='regular-content'>
            {regularContent.slice(0, 10).map((content, index) => (
                    <ContentCard 
                        key={index} 
                        title={contentType === 'movie' ? content.title : content.name} 
                        imageUrl={content.poster_path} 
                        id={content.id}
                    />
                )
            )}
        </div>
    )
}

export default RegularContent
