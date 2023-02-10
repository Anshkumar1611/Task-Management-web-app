import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from 'uuid';

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [tasks, setTasks] = useState([])
    const [showAddTask, setShowAddTask] = useState(false)
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [priority, setPriority] = useState(1)
    

    useEffect(() => {
        setLoading(false);
    }, [])

    // Fetching from Local Storage
    const getTasks = JSON.parse(localStorage.getItem("taskAdded"));

    useEffect(() => {
        if (getTasks == null) {
            setTasks([])
        } else {
            setTasks(getTasks);
        }
    }, [getTasks])


    const addTask = (e) => {
        e.preventDefault()
        if (!text && !day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your task and date '
            })
        } else if (!text && day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your task!'
            })
        } else if (text && !day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your date!'
            })
        } else {
            const id = uuidv4();
            const newTask = { id, text, day }
            setTasks([...tasks, newTask])
            setText('')
            setDay('')
            Swal.fire({
                icon: 'success',
                title: 'Yay...',
                text: 'You have successfully added a new task!'
            })
            localStorage.setItem("taskAdded", JSON.stringify([...tasks, newTask]));
        }
    }
    const deleteTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id)
        setTasks(newTasks)
        Swal.fire({
            icon: 'success',
            title: 'Oops...',
            text: 'You have successfully deleted a task!'
        })
        localStorage.setItem("taskAdded", JSON.stringify(newTasks));
    }
    const editTask = (id) => {
        const text = prompt("Task Name");
        const day = prompt("Day and Time");
        let data = JSON.parse(localStorage.getItem('taskAdded'));
        const myData = data.map(x => {
            if (x.id === id) {
                return {
                    ...x,
                    text: text,
                    day: day,
                    id: uuidv4()
                }
            }
            return x;
        })
        Swal.fire({
            icon: 'success',
            title: 'Yay...',
            text: 'You have successfully edited an existing task!'
        })
        localStorage.setItem("taskAdded", JSON.stringify(myData));
        window.location.reload();
    }

    return <StateContext.Provider value={{
        loading, setLoading,
        tasks, setTasks,
        text, setText,
        day, setDay,
        priority, setPriority,
        showAddTask, setShowAddTask,
        addTask, deleteTask, editTask

    }}>{children}</StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext)