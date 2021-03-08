import React from 'react'
import TodoListItem from "./TodoListItem";


const TodoList = (props) => {
    return (
        <div>
            {props.tasks.map(el =>
                <div key={el.id}>
                    <TodoListItem   {...el} onLabelClick={props.onLabelClick} onLabelDone={props.onLabelDone}
                                    onDeleted={props.onDeleted} setIsEdit={props.setIsEdit} isEdit={props.isEdit}
                                    editInput={props.editInput}
                                    inputTaskEdit={props.inputTaskEdit} setInputTaskEdit={props.setInputTaskEdit}
                    />

                </div>
            )}

        </div>
    )
}
export default TodoList

