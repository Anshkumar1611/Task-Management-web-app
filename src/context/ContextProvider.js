import { createContext, useContext, useState } from "react";

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [tasks, setTasks] = useState([])
    const [showAddTask, setShowAddTask] = useState(false)


    const deleteTask = (id) => {

    }
    const editTask = (id) => {

    }

    return <StateContext.Provider values={{
        loading, setLoading,
        tasks, setTasks,
        showAddTask, setShowAddTask,
        deleteTask, editTask
    }}>{children}</StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext)