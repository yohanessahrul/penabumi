import React, { Component } from "react";
import history from "../../history";

import { Container, Table, Row, Col, Button } from "reactstrap";
import { reduxForm, reset } from "redux-form";
class ConfirmUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        ktp:"",
        email: "",
        noUser: "",
        tinggal: "",
        kendaraan: "",
        jenisKendaraan:""
      },
      wali: {
        namaWali: "",
        hubungan: "",
        emailWali: "",
        noWali: ""
      },
      pendidikan: {
        formal: "",
        informal: "",
        bahasa: "",
        ormas: "",
        ijazah:"",
        karya:""
      }
    };
  }

  BackToHome() {
    localStorage.clear();
    history.push("/");
  }

  componentDidMount() {
    const local = localStorage.getItem("formUser");
    const imgPreview = localStorage.getItem("imgPreview")
    if (!local) {
      history.push("/");
    }
    const data = JSON.parse(local);

    const personal = {
      ktp: imgPreview,
      email: data.email,
      noUser: data.noUser,
      tinggal: data.tinggal,
      kendaraan: data.kendaraan || "tidak punya",
      jenisKendaraan: data.jenisKendaraan || "tidak punya"
    };

    const wali = {
      namaWali: data.namaWali,
      hubungan: data.hubungan,
      emailWali: data.emailWali,
      noWali: data.noWali
    };

    const pendidikan = {
      formal: data.formal,
      informal: data.informal || "tidak ada",
      bahasa: data.bahasa || "tidak ada",
      ormas: data.ormas || "tidak ada",
      karya:data.karya || "tidak ada",
      ijazah:data.ijazah || "tidak ada"
    };

    this.setState({
      personal: personal,
      wali: wali,
      pendidikan: pendidikan
    });
  }

  render() {
    const { personal, wali, pendidikan } = this.state;
    return (
      <Container>
        <center>
          <strong>
            <h5 style={{ fontFamily: "time" }}>
              Tim Kami Akan Segera Menghubungi Anda
            </h5>
          </strong>
        </center>
        <div>
          <Row>
            <Col>
              <div>
                <Table bordered color="primary">
                  <thead>
                    <tr>
                      <th colSpan="2">
                        <center>KANDIDAT PERSONAL INFO</center>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>KTP</td>
                      <td><img style={{height:"200px",width:"300px"}} src={personal.ktp} alt="gambar preview ktp"/></td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Email</td>
                      <td>{personal.email}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>No hp/Wa</td>
                      <td>{personal.noUser}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Jenis Tempat Tinggal</td>
                      <td>{personal.tinggal}</td>
                    </tr>
                  </tbody>
                  <tbody>
                  {
                    personal.kendaraan === true ?
                    <tr>
                      <td>Kendaraan</td>
                      <td>Punya</td>
                    </tr>
                  :
                    <tr>
                      <td>Kendaraan</td>
                      <td>{personal.kendaraan}</td>
                    </tr>
                  
                  }
                  </tbody>
                  <tbody>
                  {
                  personal.kendaraan !== "tidak punya" ? 
                  <tr>
                  <td>Jenis Kendaraan</td>
                  <td>{personal.jenisKendaraan}</td>
                  </tr>
                  : <tr>
                    <td>Jenis Kendaraan</td>
                    <td>Tidak Punya</td>
                  </tr>
                  }
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col>
              <div>
                <Table bordered color="info">
                  <thead>
                    <tr>
                      <th colSpan="2">
                        <center>WALI/PENANGGUNG JAWAB INFO</center>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nama Wali</td>
                      <td>{wali.namaWali}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Email Wali</td>
                      <td>{wali.emailWali}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>No hp/Wa Wali</td>
                      <td>{wali.noWali}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Hubungan Kandidat Dengan Wali</td>
                      <td>{wali.hubungan}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div>
                <Table bordered color="warning">
                  <thead>
                    <tr>
                      <th colSpan="2">
                        <center>PENDIDIKAN CALON KANDIDAT</center>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pendidikan Formal Terakhir</td>
                      <td>{pendidikan.formal}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Pendidikan Informal</td>
                      <td>{pendidikan.informal}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Menguasai Bahasa</td>
                      <td>{pendidikan.bahasa}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Aktif Dalam Organisasi</td>
                      <td>{pendidikan.ormas}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Ijazah</td>
                      {
                        pendidikan.ijazah !== "tidak ada" ? 
                        <td> <a href={pendidikan.ijazah.replace(/ /g,"%20")}>Link Download Ijazah</a> </td> : <td>Tidak Mengupload</td>
                      }
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Karya</td>
                      {
                        pendidikan.karya !== "tidak ada" ? 
                        <td> <a href={pendidikan.karya.replace(/ /g,"%20")}>Link Download Ijazah</a> </td> : <td>Tidak Mengupload</td>
                      }
                    </tr>
                  </tbody>
                </Table>
              </div>
              <center>
                <Button onClick={this.BackToHome} color="success">
                  KEMBALI KE HALAMAN UTAMA
                </Button>
              </center>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

const afterSubmit = (result, dispatch) => dispatch(reset("personal"));
export default reduxForm({
  form: "personal",
  onSubmitSuccess: afterSubmit
})(ConfirmUser);
