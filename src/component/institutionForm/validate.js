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

  if (!values.namaYayasan) {
    errors.namaYayasan = errNull;
  }
  if (!values.alamatYayasan) {
    errors.alamatYayasan = errNull;
  }
  if (!values.emailYayasan) {
    errors.emailYayasan = errNull;
  } else if (!isMail.test(values.emailYayasan)) {
    errors.emailYayasan = errMail;
  }
  if (!values.website) {
    errors.website = errNull;
  } else if (!isWeb.test(values.website)) {
    errors.website = "Format Website Salah";
  }
  if (!values.noYayasan) {
    errors.noYayasan = errNull;
  } else if (!values.noYayasan.match(isNum)) {
    errors.noYayasan = errNum;
  }
  if (!values.jenis) {
    errors.jenis = errNull;
  }
  if (!values.pic) {
    errors.pic = errNull;
  }
  if (!values.jabatan) {
    errors.jabatan = errNull;
  }
  if (!values.namaPendaftar) {
    errors.namaPendaftar = errNull;
  }
  if (!values.emailPendaftar) {
    errors.emailPendaftar = errNull;
  } else if (!isMail.test(values.emailPendaftar)) {
    errors.emailPendaftar = errMail;
  }
  if (!values.noPendaftar) {
    errors.noPendaftar = errNull;
  } else if (!values.noPendaftar.match(isNum)) {
    errors.noPendaftar = errNum;
  }
  return errors
};
export default validate;
