import React, {useState, useEffect, useContext} from 'react'
import SearchContent from '../SearchContent/SearchContent'
import {SearchContext} from '../../context/SearchContext'
import './styles.css'

function SearchBar() {

    const {searchTerm, changeSearchTerm} = useContext(SearchContext)

    //const [search, setSearch] = useState<string>(searchTerm)

    function handleOnChange(event : any) {   
        const {value} = event.target
        changeSearchTerm(value)
    }

    return (
        <div className='search-bar'>
            <div className='search-bar__input-section'>
                <div className='search-bar__icon-container'>
                    <img 
                        className='search-bar__icon' 
                        src={`${process.env.PUBLIC_URL}/assets/icons/search-icon.png`}
                    />
                </div>
                <input
                    className='search-bar__input' 
                    onChange={handleOnChange} 
                    value={searchTerm} 
                    type='text' 
                    placeholder='Search here...'
                />
            </div>
            <div className='search-bar__search-content'>
                <SearchContent />
            </div>
        </div>
    )
}

export default SearchBar
