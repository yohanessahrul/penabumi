import axios from 'axios'
export function contactFormAction(email,nama,pesan){
    return dispatch => {
        dispatch(loading())
        axios.post('http://neoal.xyz:3001/api/bukutamu/add',{email:email,nama:nama,pesan:pesan})
        .then(response=>{
            dispatch(success(response))
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