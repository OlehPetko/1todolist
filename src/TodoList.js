import React from 'react'
import TodoListItem from "./TodoListItem";



const TodoList = (props) => {
    return (
        <div>
            {props.tasks.map(el =>
                <div key={el.id} >
                    <TodoListItem   {...el} onLabelClick={props.onLabelClick} onLabelDone={props.onLabelDone} />

                </div>
            )}

        </div>
    )
}
export default TodoList

