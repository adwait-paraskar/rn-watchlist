const watchlist = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_STOCK_SELECTION':
            if (state.includes(action.id))
                return state.filter(stockId => stockId !== action.id);
            else
                return [...state, action.id];
        default:
            return state;
    }
};
//rename watchlist to items
//add another property called selected - which will have id reference
//stock details screen will look up this property and 
//display the details
export default watchlist;