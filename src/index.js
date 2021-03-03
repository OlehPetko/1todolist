import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from "./AppHeader";
import TodoList from "./TodoList";
import SearchPanel from "./SearchPanel";
import {useState} from "react";

const  todoData = [
    { id: Math.random(), label: 'Drink Cofee', important: false, done: false},
    { id: Math.random(), label: 'Make Awesome App', important: false,  done: false},
    {id: Math.random(), label: 'Have a lunch ', important: false,  done: false},

]
const App = () => {
const [tasks, setTasks] = useState(todoData)

    const onLabelClick = (id) => {
        const newTask = tasks.map(el => {
            if (id === el.id) {
                return {...el, done: !el.done}
            }
            return el
        })
        setTasks(newTask)

    }
    const onLabelDone = (id) => {
        const newTask = tasks.map(el => {
            if (id === el.id) {
                return {...el, important: !el.important}
            }
            return el
        })
        setTasks(newTask)

    }
    return (
        <div>
            <span>{(new Date().toString())}</span>
            <AppHeader />
            <SearchPanel/>
            <TodoList tasks={tasks} onLabelClick={onLabelClick} onLabelDone={onLabelDone}/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))
