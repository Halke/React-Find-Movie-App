import React, {useState, useContext} from 'react'
import TabButton from '../Buttons/TabButton/TabButton'
import SearchBar from '../Search/SearchBar/SearchBar'
import './styles.css'

function Tab() {

    const [moviesActive, setMoviesActive] = useState(true)

    function handleTabChange(){
        setMoviesActive(!moviesActive)
    }

    return (
        <div className="tab">
            {/* Buttons za mijenjanje tabova */}
            <div className="tab__change-tab-btns">
                {/* Movies TAB */}
                <TabButton 
                    onClick={() => handleTabChange()} 
                    buttonText="Movies" 
                    isActive={moviesActive ? true : false} 
                />

                {/* TV Shows TAB */}
                <TabButton 
                    onClick={() => handleTabChange()} 
                    buttonText="TV Shows" 
                    isActive={moviesActive ? false : true} 
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
