import React, { useState } from 'react';
import { formatCurrency } from '../utils/formatCurrency';

const IncomeTracker = () => {
    const [income, setIncome] = useState('');
    const [error, setError] = useState(null);

    const handleIncomeChange = (e) => {
        const value = e.target.value;
        if (isNaN(value)) {
            setError('Please enter a valid number');
        } else {
            setError(null);
            setIncome(value);
        }
    };

    return (
        <div>
            <h2>Track Your Income</h2>
            <input
                type="text"
                value={income}
                onChange={handleIncomeChange}
                placeholder="Enter your income"
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <p>Total Income: {formatCurrency(income)}</p>
        </div>
    );
};

export default IncomeTracker;
