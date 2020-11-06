import React, {useState, useEffect} from 'react'
import './styles.css'

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        
    }, [searchTerm])

    function handleOnChange(event : any) {   
        const {value} = event.target
        setSearchTerm(value)
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
                
            </div>
        </div>
    )
}

export default SearchBar
