import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from "./AppHeader";
import TodoList from "./TodoList";
import SearchPanel from "./SearchPanel";






const App = () => {
    return (
        <div>
            <span>{(new Date().toString())}</span>
            <AppHeader />
            <SearchPanel/>
            <TodoList/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))
