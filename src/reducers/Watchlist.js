const watchlist = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_STOCK_SELECTION':
            if (state.includes(action.id))
                {return state.filter(stockId => stockId !== action.id);}
            else
                {return [...state, action.id];}
        default:
            return state;
    }
};
export default watchlist;
