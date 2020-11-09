import React, {useState, useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {SearchContext} from '../context/SearchContext'
import axios from 'axios'
import './styles.css'

function SingleContent(props: any) {

    const [content, setContent] = useState({})

    const { id } = props.match.params
    const { contentType } = useContext(SearchContext)

    useEffect(() => {
        
    }, [id])

    return (
        <div>
            
        </div>
    )
}

export default SingleContent
