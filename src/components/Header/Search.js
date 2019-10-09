import React from 'react';
import search_logo from '../../img/Header/search.png'

let Search = () => {
    return (
        <div className='header-search-wrap'>
            <input type='text' className='header-search' />
            <label><img className='search-logo' src={search_logo} alt='search'/><p>Search</p></label>
        </div>
    )
}

export default Search