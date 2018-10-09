import {
    errNull,
    errNum,
    errMail,
    isMail,
    isNum,
    isWeb
    } from "../errorValMess";
    
    const validate = values => {
    const errors = {};
    if(!values.nama){
        errors.nama = errNull
    }
    if(!values.tglLahir){
        errors.tglLahir = errNull
    }
    if(!values.alamat){
        errors.alamat = errNull
    }
    if(!values.alamatKtp){
        errors.alamatKtp = errNull
    }
    if(!values.noKtp){
        errors.noKtp= errNull
    }else if(!values.noKtp.match(isNum)){
        errors.noKtp = errNum
    }
    if(!values.kawin){
        errors.kawin = errNull
    }
    if(!values.kelamin){
        errors.kelamin= errNull
    }
    if(!values.agama){
        errors.agama=errNull
    }
    if(!values.tinggal){
        errors.tinggal = errNull
    }
    if(!values.namaWali){
        errors.namaWali=errNull
    }
    if(!values.hubungan){
        errors.hubungan = errNull
    }
    if(!values.emailWali){
        errors.emailWali = errNull
    }else if(!isMail.test(values.emailWali)){
        errors.emailWali = errMail
    }
    if(!values.noWali){
        errors.noWali = errNull
    }else if(!values.noWali.match(isNum)){
        errors.noWali = errNum
    }
    if(!values.formal){
        errors.formal = errNull
    }
    if(!values.email){
        errors.email = errNull
    }else if(!isMail.test(values.email)){
        errors.email = errMail
    }
    if(!values.noUser){
        errors.noUser = errNull
    }else if(!values.noUser.match(isNum)){
        errors.noUser = errNum
    }
    
    return errors
    };
    export default validate;
