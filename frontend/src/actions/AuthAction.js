import * as AuthApi from '../api/AuthRequest'


export const logIn = (formData) => async (dispatch) => {
    dispatch({ type: "AUTH_START" })

    try {
        const { data } = await AuthApi.logIn(formData)
        dispatch({ type: "AUTH_SUCCES", data: data })
    } catch (error) {
        console.log(`\nin authAction/login \n${error}`)
        dispatch({ type: "AUTH_FAIL" })
    }
}

//register
export const signUp = (formData) => async (dispatch) => {
    dispatch({ type: "AUTH_START" })

    try {
        const { data } = await AuthApi.signUp(formData)
        dispatch({ type: "AUTH_SUCCES", data: data })
    } catch (error) {
        console.log(`\nin authAction/login \n${error}`)
        dispatch({ type: "AUTH_FAIL" })
    }
}