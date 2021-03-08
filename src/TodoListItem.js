import React from 'react'



    const style = {
        'textDecoration': 'line-through'
    }
const TodoListItem = (props) => {
    const done = props.done ? style : {}
    const importman = {color: props.important ? 'tomato' : 'black'}
    return (
        <ul>
            <li>
                <span style={done}  onClick={() => props.onLabelClick(props.id)}>
                    <div style={importman}>
                {props.label}
                    </div>
                </span>
                <button onClick={() => props.onLabelClick(props.id)}>done</button>
                <button onClick={() => props.onDeleted(props.id)}>delete</button>
                <button  onClick={() => props.onLabelDone(props.id)}>important</button>
                {!props.isEdit && <button onClick={() => props.setIsEdit(!props.isEdit)}>edit</button>}
                {props.isEdit && <input value={props.inputTaskEdit} onChange={(e) => props.setInputTaskEdit(e.target.value)}/>}
                {props.isEdit && <button onClick={() => props.editInput(props.id, props.inputTaskEdit)}>save</button>}
                {props.isEdit && <button onClick={() => props.setIsEdit(!props.isEdit)}>cancel</button>}



            </li>
        </ul>
    )
}
export default TodoListItem

