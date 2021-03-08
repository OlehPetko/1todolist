import React from 'react'


const ItemAddForm = (props) => {
    return (
        <div>
            <input type="text" onChange={props.onLabelChange} placeholder='What needs to be done' value={props.newInputTask} />
            <button onClick={props.addNewTasks}>Add Item</button>
        </div>
    )
}
export default ItemAddForm

