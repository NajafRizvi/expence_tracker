import React, { createContext, useReducer } from 'react';
import transactionReducer from './transcationReducer';
const initalTransaction = [
    { Desc: "Cash", Amount: 100 },
    { Desc: "Book", Amount: 100 },
    { Desc: "Camera", Amount: 30 }
];
export const transactionContext = createContext(initalTransaction);
export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(transactionReducer, initalTransaction)

    function addTransaction(transObj) {
        dispatch({
            type: "ADD TRANSACTION",
            payload: {
                amount: transObj.Amount,
                description: transObj.Desc
            }
        })
    }
    return (
        <transactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}

        </transactionContext.Provider>
    )
} 
