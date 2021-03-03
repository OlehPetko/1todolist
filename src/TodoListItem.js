import React from 'react'



    const style = {
        'textDecoration': 'line-through'
    }
const TodoListItem = (props) => {
    const done = props.done ? style : {}
    const style1 = {color: props.important ? 'tomato' : 'black'}
    return (
        <ul>
            <li>
                <span style={done}  onClick={() => props.onLabelClick(props.id)}>
                    <div style={style1}>
                {props.label}
                    </div>
                </span>
                <button>delete</button>
                <button  onClick={() => props.onLabelDone(props.id)}>important</button>

            </li>
        </ul>
    )
}
export default TodoListItem

