import React, { useContext } from 'react';
import './App.css';
import { transactionContext } from './transcationContext'
function Child() {
    let {transactions} = useContext(transactionContext)
    return (
        <div className="container">
            <h1 className="heading">Expence tracker World</h1>
            <h2>your balance<br />$260.00</h2>
            <div className="expence-container">
                <h2>INCOME<br />$500.00</h2>
                <h2>expence <br />$240.00</h2>
            </div>
            <h2>History</h2>
            <hr></hr>
            <ul className="history">
                {transactions.map((transObj, ind) => {
                    return (
                        <li key={ind}>
                            <span>{transObj.Desc}</span>
                            <span>{transObj.Amount}</span>
                        </li>
                    )
                })}

            </ul>
            <h2>Add new transaction</h2>
            <hr />
            <form className="transaction-from">
                <label className="label">Text
        <input type="text" required placeholder="Enter Text"></input>
                </label>
                <br />
                <label className="label">Enter amount
        <input type="number" required placeholder="Enter Text"></input>
                </label>
                <br />
                <br />
                <input type="button" value="Add transaction"></input>

            </form>
        </div>

    );
}
export default Child;