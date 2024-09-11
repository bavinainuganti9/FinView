import React, { useState, useEffect } from 'react';
import transactionService from '../services/transactionService';

const ExpenseCategorizer = () => {
    const [expenses, setExpenses] = useState([]);
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const data = await transactionService.getExpenses();
                setExpenses(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchExpenses();
    }, []);

    const addExpense = async () => {
        if (category && amount && !isNaN(amount)) {
            const newExpense = { category, amount: parseFloat(amount) };
            try {
                await transactionService.saveExpense(newExpense);
                setExpenses([...expenses, newExpense]);
                setCategory('');
                setAmount('');
            } catch (err) {
                console.error('Failed to save expense', err);
            }
        }
    };

    return (
        <div>
            <h2>Categorize Your Expenses</h2>
            <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter category"
            />
            <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
            />
            <button onClick={addExpense}>Add Expense</button>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        {expense.category}: ${expense.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseCategorizer;
