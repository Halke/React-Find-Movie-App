import React, {ReactComponentElement, useContext} from 'react'
import SearchContent from '../../Content/SearchContent/SearchContent'
import RegularContent from '../../Content/RegularContent/RegularContent'
import {SearchContext} from '../../context/SearchContext'
import './styles.css'

const TabContent:React.FC<any> = () => {

    const {searchOnFocus} = useContext(SearchContext)

    return (
        <div className='tab-content'>
            {searchOnFocus ? <SearchContent /> : <RegularContent />}
        </div>
    )
}

export default TabContent
