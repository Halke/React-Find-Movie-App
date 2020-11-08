import React, {useContext} from 'react'
import {useHistory, withRouter} from 'react-router-dom'
import {SearchContext} from '../../context/SearchContext'
import './styles.css'

interface Props{
    imageUrl: string | undefined;
    title: string | undefined;
    id: number | string
}

function ContentCard({imageUrl, title, id}: Props) {

    const {contentType} = useContext(SearchContext)
    const history = useHistory()

    return (
        <div className='content-card'>
            <button 
                className='content-card__image-link'
                onClick={() => history.push('/' + contentType + '/' + id, {from: 'ContentCard'})}
            >
                <img 
                    className={'content-card__image ' + imageUrl != null ? 
                            ''
                            :
                            'content-card__image-not-found'}
                    src={imageUrl != null ? 
                        'https://image.tmdb.org/t/p/w300' + imageUrl
                        :
                        process.env.PUBLIC_URL +'/assets/icons/error404-icon.png'} 
                />
            </button>
            <div className='content-card__title'>
                <h2>
                    {title}
                </h2>
            </div>
        </div>
    )
}

export default ContentCard
