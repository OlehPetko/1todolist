import React from 'react'

const ItemStatusFilter = (props) => {
    const buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ]


    return (
        <div>
            {buttons.map(el =>
                <button key={el.name} onClick={() => props.onFilterChange(el.name)}>{el.label}</button>
            )}
        </div>
    )
}
export default ItemStatusFilter

