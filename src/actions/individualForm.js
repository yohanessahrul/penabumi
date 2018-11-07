import axios from 'axios'
import history from '../history'
import alertify from 'alertifyjs';
export function individualFormAction(values){
    // console.log(values)
    return dispatch => {
        dispatch(loading())
        axios.post('http://neoal.xyz:3001/api/formuser/sendmail',{values})
        .then(response=>{
            if(response.data.message){
                localStorage.setItem("formUser", JSON.stringify(values));
                dispatch(success(values))
                history.push('/user-confirm-page')
                }
        })
        .catch(err=>{
            alertify.alert(err,"terjadi kesalahan Hubungi Kontak")
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