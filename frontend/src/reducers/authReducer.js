const authReducer = (
    state = { authData: null, loading: false, error: false },
    action
) => {
    switch (action.type) {
        // save data authdata  =>authentication data key of our authentication reducer state
        case "AUTH_START":
            return { ...state, loading: true, error: false }
        case "AUTH_SUCCES":
            localStorage.setItem("profile",JSON.stringify({...action?.data}))
            return { ...state, authData: action.data, loading: false, error: false }
        case "AUTH_FAIL":
            return {...state, loading:false, error:true}
        default:
            return state
    }
};

export default authReducer;
