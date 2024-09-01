import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IncomeTracker from './components/IncomeTracker';
import ExpenseCategorizer from './components/ExpenseCategorizer';
import FinancialVisualization from './components/FinancialVisualization';
import AuthContext from './context/AuthContext';
import authService from './services/authService';

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <Router>
                <div>
                    <Switch>
                        <Route path="/income-tracker" component={IncomeTracker} />
                        <Route path="/expense-categorizer" component={ExpenseCategorizer} />
                        <Route path="/financial-visualization" component={FinancialVisualization} />
                    </Switch>
                </div>
            </Router>
        </AuthContext.Provider>
    );
};

export default App;
