const colorReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_RED':
            if (state.red + action.payload > 255 || state.red + action.payload < 0) {
                return state;
            }
            return { ...state, red: state.red + action.payload };
        case 'CHANGE_GREEN':
            if (state.green + action.payload > 255 || state.green + action.payload < 0) {
                return state;
            }
            return { ...state, green: state.green + action.payload };
        case 'CHANGE_BLUE':
            if (state.blue + action.payload > 255 || state.blue + action.payload < 0) {
                return state;
            }
            return { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
};

export default colorReducer;
