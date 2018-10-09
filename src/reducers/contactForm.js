const initialState = {
    isSuccess: null,
    isLoading: false,
    isError: false
}

export default function contactForm(state = { ...initialState }, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'SUCCESS':
            return {
                ...state,
                isLoading:false,
                isSuccess:action.payload
            }
        case 'ERROR':
            return{
                ...state,
                isLoading:false,
                isSuccess:null,
                isError:true
            }
        default:
            return state
    }
}