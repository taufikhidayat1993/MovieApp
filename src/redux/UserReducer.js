



const initialState = {
    user: {
        name: "Deny Cagur",
        age: 37
    }
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "change_user":
            return {
                ...state,
                user: action.payload.user
            }
        default:
            return state;
    }
};