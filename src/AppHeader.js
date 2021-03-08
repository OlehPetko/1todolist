import React from 'react'


const AppHeader = (props) => {
    return (
        <div>
            <h1>TODO LIST</h1>
            {props.todoCount} more to do,
            {props.doneCount} done
        </div>
    )
}
export default AppHeader

