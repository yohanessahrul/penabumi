const errNull = "Harus Di Isi!!";
const errNum = "Harus Angka!!";
const errMail = "Format Email Tidak Valid";
const isNum = /^[0-9]+$/;
const isMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
const isWeb = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

export  {
    errNull,
    errNum,
    errMail,
    isNum,
    isMail,
    isWeb
}