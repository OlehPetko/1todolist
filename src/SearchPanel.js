import React from 'react'

const SearchPanel = (props) => {

    return (
        <div>
            <input type="text" placeholder='search' value={props.term} onChange={props.onSearchChange} />

        </div>
    )
}
export default SearchPanel

