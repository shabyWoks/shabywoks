const authDefault = {
    uid: ''
}

const authReducer = (state = authDefault, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid
            };
        case 'LOGOUT':
            return {
                uid: ''
            };
        default:
            return state;
    }
}

export default authReducer;