import axios from 'axios';

const API_URL = 'https://your-api-url.com/api/transactions/';

const saveIncome = (income) => {
    return axios.post(API_URL + 'income', { income });
};

const saveExpense = (expense) => {
    return axios.post(API_URL + 'expense', expense);
};

const getExpenses = () => {
    return axios.get(API_URL + 'expenses').then(response => response.data);
};

export default {
    saveIncome,
    saveExpense,
    getExpenses,
};
