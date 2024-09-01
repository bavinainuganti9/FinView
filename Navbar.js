import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/income-tracker">Income Tracker</Link></li>
                <li><Link to="/expense-categorizer">Expense Categorizer</Link></li>
                <li><Link to="/financial-visualization">Financial Visualization</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
