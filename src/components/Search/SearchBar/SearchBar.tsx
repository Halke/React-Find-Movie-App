import React, {useContext, useEffect} from 'react'
import {SearchContext} from '../../context/SearchContext'
import './styles.css'


function SearchBar() {

    const {searchTerm, searchOnFocus, changeSearchTerm, changeSearchOnFocus} = useContext(SearchContext)

    //const [search, setSearch] = useState<string>(searchTerm)

    function handleOnChange(event: any) {   
        const {value} = event.target
        changeSearchTerm(value)
    }

    useEffect(() => {
        if(searchTerm.length >= 3 && !searchOnFocus){
            changeSearchOnFocus()
        }else if(searchTerm.length < 3 && searchOnFocus){
            changeSearchOnFocus()
        }
    }, [searchTerm])

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
                    // onFocus={changeSearchOnFocus}
                    // onBlur={changeSearchOnFocus}
                    className='search-bar__input' 
                    onChange={handleOnChange} 
                    value={searchTerm} 
                    type='text' 
                    placeholder='Search here...'
                />
            </div>
        </div>
    )
}

export default SearchBar
