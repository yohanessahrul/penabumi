import axios from 'axios';
import alertify from 'alertifyjs';

export function contactFormAction(email,nama,pesan){
  return dispatch => {
    dispatch(loading())
    axios.post('http://neoal.xyz:3001/api/bukutamu/add',{email:email,nama:nama,pesan:pesan})
      .then(response=>{
        dispatch(success(response))
      if(response){
        alertify.alert('Pesan Terkirim', `Terimakasih ${nama}, karena telah menghubungi kami, Jika ada hal yang mendesak dapat menghubungi kami via : whatsapp di <b>0812-288-566-99</b> atau melalui email ke: <b>info@penabumi.com</b> !`);
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