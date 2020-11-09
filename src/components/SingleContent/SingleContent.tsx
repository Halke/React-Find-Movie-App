import React, {useState, useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {SearchContext} from '../context/SearchContext'
import axios from 'axios'
import './styles.css'

function SingleContent(props: any) {

    const [content, setContent] = useState({
        title: '',
        name: '',
        poster_path: '',
        overview: ''
    })
    const [videoKey, setVideoKey] = useState('')

    const { id } = props.match.params
    const { contentType } = useContext(SearchContext)

    //  https://api.themoviedb.org/3/movie/121?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US&append_to_response=videos
    //  https://api.themoviedb.org/3/tv/2140?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US&append_to_response=videos

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/' + contentType + '/' + id + '?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US&append_to_response=videos')
        .then(res => {
            setContent(prevVal => ({...prevVal, ...res.data}))
            setVideoKey(res.data.video.results[0].key)
        })
        .catch(err => console.log('ERROR: ', err))
    }, [id])

    return (
        <div className='single-content'>
            <div className='single-content__image-or-video'>
                {videoKey !== '' ? 
                    <iframe 
                        width="600" 
                        height="350" 
                        src="https://www.youtube.com/embed/_1xxsS8NugI" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                :
                    <img src={'https://image.tmdb.org/t/p/w300' + content.poster_path} alt={contentType + ' poster'}/>
                }
            </div>
        </div>
    )
}

export default SingleContent
