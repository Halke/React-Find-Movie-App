import React, {useState, useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {SearchContext} from '../context/SearchContext'
import axios from 'axios'
import './styles.css'


function SingleContent(props: any) {

    const [content, setContent] = useState<any>({
        backdrop_path: '',
        poster_path: '',
        overview: '',
        videos: {
            results: [
                {
                    key: ''
                }
            ]
        }
    })

    const { id } = props.match.params
    const { contentType } = useContext(SearchContext)

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/' + contentType + '/' + id + '?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US&append_to_response=videos')
        .then(res => {
            setContent(res.data)
        })
        .catch(err => console.log('ERROR: ', err))
    }, [id])


    return (
        <div className='single-content'>
            <button className='single-content__back-btn'>
                <span className='single-content__back-btn-icon'>
                    <img src={process.env.PUBLIC_URL + '/assets/icons/back-icon.png'} alt='Back icon'/>
                </span>
                BACK
            </button>
            <div className='single-content__image-or-video'>
                {content.videos.results[0].key !== '' ? 
                    <iframe 
                        width="700" 
                        height="450" 
                        src={'https://www.youtube.com/embed/' + content.videos.results[0].key} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                :
                    <img 
                        className='single-content__image' 
                        src={content.backdrop_path !== '' ?
                            'https://image.tmdb.org/t/p/w500' + content.backdrop_path
                            :
                            'https://image.tmdb.org/t/p/w400' + content.poster_path} 
                        alt={contentType + ' poster'}
                    />
                }
            </div>
            <div>
                <h1 className='single-content__title'>
                    {content.title || content.name}
                </h1>
                <p className='single-content__overview'>
                    
                </p>
            </div>
        </div>
    )
}

export default SingleContent
