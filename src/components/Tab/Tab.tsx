import React, {useState, useContext} from 'react'
import TabButton from '../Buttons/TabButton/TabButton'
import useContentTypeChange from '../context/useContentTypeChange'
import {SearchContext} from '../context/SearchContext'
import SearchBar from '../Search/SearchBar/SearchBar'
import './styles.css'


const Tab = () => {

    const {contentType, changeContentType} = useContext(SearchContext)

    // const [moviesActive, setMoviesActive] = useState(true)

    //useContentTypeChange()

    function handleTabChange(changeTo: string){
        if(contentType === 'movie' && changeTo === 'tv'){
            changeContentType()
        }else if(contentType === 'tv' && changeTo === 'movie'){
            changeContentType()
        }
    }

    return (
        <div className="tab">
            {/* Buttons za mijenjanje tabova */}
            <div className="tab__change-tab-btns">
                {/* Movies TAB */}
                <TabButton 
                    onClick={() => handleTabChange('movie')} 
                    buttonText="Movies" 
                    isActive={contentType === 'movie' ? true : false} 
                />

                {/* TV Shows TAB */}
                <TabButton 
                    onClick={() => handleTabChange('tv')} 
                    buttonText="TV Shows" 
                    isActive={contentType === 'tv' ? true : false} 
                />
            </div>

            {/* Search Bar Section */}
            <div className="tab__search-bar">
                <SearchBar />
            </div>

            {/* Tab za prikaz sadrzaja */}
            <div className="tab__content">

            </div>
        </div>
    )
}

export default Tab
