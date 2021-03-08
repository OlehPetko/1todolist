import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from "./AppHeader";
import TodoList from "./TodoList";
import SearchPanel from "./SearchPanel";
import {useState} from "react";
import ItemAddForm from "./ItemAddForm";
import ItemStatusFilter from "./ItemStatusFilter";

const todoData = [
    {id: Math.random(), label: 'Drink Coffee', important: false, done: false},
    {id: Math.random(), label: 'Make Awesome App', important: false, done: false},
    {id: Math.random(), label: 'Have a lunch ', important: false, done: false},
]

const App = () => {
    const [tasks, setTasks] = useState(todoData)
    const [newInputTask, setNewTask] = useState('')
    const [inputTaskEdit, setInputTaskEdit] = useState('')
    const [term, setTerm] = useState('')
    const [filter, setFilter] =useState('')
    const [isEdit, setIsEdit] = useState(false)

    const doneCount = tasks.filter(el => el.done).length
    const todoCount = tasks.length - doneCount
    const onLabelChange = (e) => {
        setNewTask(e.target.value)
    }
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
    const onDeleted = (id) => {
        const newTask = tasks.filter(el => el.id !== id)
        setTasks(newTask)
    }
    const addNewTasks = () => {
        const newTask = {id: Math.random(), label: newInputTask, important: false, done: false}
        const newList = [...tasks, newTask]
        setTasks(newList)
        setNewTask('')
    }
    const editInput = (id, newName) => {
        const newEditTask = tasks.map(el => {
            if (el.id === id) {
                el.label = newName
            }
            return el
        })
        setTasks(newEditTask)
        setInputTaskEdit('')
        setIsEdit(false)
    }
    const onFilterChange = (filter) => {
    setFilter(filter)
    }
    const filterFun = (el, filter) => {
        switch (filter) {
            case 'all':
                return el
            case 'active' :
                return el.filter(el => !el.done )
            case 'done' :
                return el.filter(el => el.done)
            default: return el
        }
    }
    const onSearchChange = (e) => {
        const  term = e.target.value
        setTerm(term)

    }
    const search = (el, term) => {
        if (term.length === 0) {
            return el
        }
        return el.filter(el => {
            return el.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1
        })
    }
    const visibleItems = filterFun(search(tasks, term),filter)


    return (
        <div>
            <span>{(new Date().toString())}</span>
            <AppHeader doneCount={doneCount} todoCount={todoCount}/>
            <SearchPanel term={term} setTerm={setTerm} onSearchChange={onSearchChange}/>
            <ItemStatusFilter filter={filter} onFilterChange={onFilterChange} />
            <TodoList isEdit={isEdit} setIsEdit={setIsEdit} tasks={visibleItems}
                      onLabelClick={onLabelClick} onLabelDone={onLabelDone} onDeleted={onDeleted}
                      editInput={editInput} inputTaskEdit={inputTaskEdit} setInputTaskEdit={setInputTaskEdit}
            />
            <ItemAddForm addNewTasks={addNewTasks} onLabelChange={onLabelChange} newInputTask={newInputTask}/>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'))
