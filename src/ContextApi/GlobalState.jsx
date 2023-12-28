import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
    transaction: []
}

// create context
export const GlobalContext = createContext(initialState);

// Provider components
export const GloabalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // actions to call reducer
    function delteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transaction: state.transaction,
        delteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}