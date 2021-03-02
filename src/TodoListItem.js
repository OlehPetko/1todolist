import React from 'react'


const TodoListItem = () => {
    const item = ['drink coffee', ' build awesome app']

    return (
        <ul>
            <li>{item[0]}</li>
            <li>{item[1]}</li>
        </ul>
    )
}
export default TodoListItem

