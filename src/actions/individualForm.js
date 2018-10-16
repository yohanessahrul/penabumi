import axios from 'axios'
import history from '../history'
export function individualFormAction(values){
    console.log(values)
    return dispatch => {
        dispatch(loading())
        axios.post('http://localhost:3000/api/formuser/sendmail',{values})
        .then(response=>{
            if(response.data.message){
                localStorage.setItem("formUser", JSON.stringify(values));
                dispatch(success(values))
                history.push('/user-confirm-page')
                }
        })
        .catch(err=>{
            dispatch(error(err))
        })
    }
}

export function loading(){
    return {
        type:'LOADING'
    }
}

export function success(payload){
    return{
        type:'SUCCESS',
        payload:payload
    }
}

export function error(){
    return{
        type:'ERROR'
    }
}