import axios from 'axios'
import history from '../history'
export function ktpImage(values){
    console.log(values)
    return dispatch => {
        dispatch(loading())
        axios.post(`http://localhost:3000/api/formuser/ktpImage`,values)
        .then(response=>{
            console.log(response.data.link)
            this.setState({
                imgUpload:response.data.link
            })
            input.onChange(this.state.imgUpload)
        }).catch(err=>{
            console.log(err)
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