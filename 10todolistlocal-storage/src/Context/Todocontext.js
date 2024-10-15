import { createContext, useContext } from "react";



export const Todoconext = createContext({
    todos :[{
        id: 1,
        todo: "Todo msg",
        completed: false,
    }
    ],
    addTodo: (todo) => { },
    updatedTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete : (id) => {}
})



export const useTodo = () => {
    return useContext(Todoconext)
}


export const TodoProvider = Todoconext.Provider