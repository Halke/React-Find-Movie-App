import React, {useContext} from 'react'
import {SearchContext} from '../../context/SearchContext'
import './styles.css'

interface Props{
    imageUrl: string;
    title: string
}

function ContentCard({imageUrl, title}: Props) {

    const {contentType} = useContext(SearchContext)

    return (
        <div 
            className={
                'content-card ' + contentType === 'movie' 
                ? 
                'content-card__movie' : 'content-card__tv'}
        >
            <img 
                className='content-card__image'
                src={'https://image.tmdb.org/t/p/w300' + imageUrl} 
            />
            <div className='content-card__title'>
                <h2>
                    {title}
                </h2>
            </div>
        </div>
    )
}

export default ContentCard
