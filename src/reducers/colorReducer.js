const colorReducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            if (state.red + action.amount > 255 || state.red + action.amount < 0) {
                return state;
            }
            return { ...state, red: state.red + action.amount };
        case 'green':
            if (state.green + action.amount > 255 || state.green + action.amount < 0) {
                return state;
            }
            return { ...state, green: state.green + action.amount };
        case 'blue':
            if (state.blue + action.amount > 255 || state.blue + action.amount < 0) {
                return state;
            }
            return { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
};

export default colorReducer;
