import React, {useContext} from 'react'
import SearchContent from '../../Content/SearchContent/SearchContent'
import RegularContent from '../../Content/RegularContent/RegularContent'
import {SearchContext} from '../../context/SearchContext'
import './styles.css'

function TabContent() {

    const {searchOnFocus, contentType} = useContext(SearchContext)

    function renderSearchContent(){
        return <SearchContent />
    }

    function renderRegularContent(){
        return (
            <RegularContent />
        )
    }

    return (
        <div className='tab-content'>
            {searchOnFocus ? renderSearchContent : renderRegularContent}
        </div>
    )
}

export default TabContent
