// formatCurrency.js

export const formatCurrency = (amount) => {
    if (isNaN(amount)) {
        return 'Invalid amount';
    }

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(amount);
};
