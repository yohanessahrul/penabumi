import axios from 'axios'
import history from '../history'
export function foundationFormAction(values){
    return dispatch => {
        dispatch(loading())
        axios.post('http://neoal.xyz:3001/api/foundationform/sendmail',{values})
        .then(response=>{
            console.log(response)
            if(response.data.message){
            localStorage.setItem("formYayasan", JSON.stringify(values));
            dispatch(success(values))
            history.push('/confirm-page')
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