const initialState = {
    currentUser: {}
}

export default testReducer = (state, action) => {
    const { type } = action;

    switch(type) {
        case LOGIN:
            return {
                ...state,
                data: action.payload
            };
            default:
                return state;
    }
}

export default testReducer;