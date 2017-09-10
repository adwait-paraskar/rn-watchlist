export const toggleStock = id => {
    return {
        type: 'TOGGLE_STOCK_SELECTION',
        id,
    }
};