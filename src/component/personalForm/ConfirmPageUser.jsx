import React, { Component } from "react";
import history from "../../history";

import { Container, Table, Row, Col, Button } from "reactstrap";
import { reduxForm, reset } from "redux-form";
class ConfirmUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        nama: "",
        email: "",
        noUser: "",
        tglLahir: "",
        alamat: "",
        alamatKtp: "",
        noKtp: "",
        kawin: "",
        kelamin: "",
        agama: "",
        tinggal: "",
        kendaraan: "",
        sim: "",
        kepemilikan: ""
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
        ormas: ""
      }
    };
  }

  BackToHome() {
    localStorage.clear();
    history.push("/");
  }

  componentDidMount() {
    const local = localStorage.getItem("formUser");
    if (!local) {
      history.push("/");
    }
    const data = JSON.parse(local);

    const personal = {
      nama: data.nama,
      email: data.email,
      noUser: data.noUser,
      tglLahir: data.tglLahir,
      alamat: data.alamat,
      alamatKtp: data.alamatKtp,
      noKtp: data.noKtp,
      kawin: data.kawin,
      kelamin: data.kelamin,
      agama: data.agama,
      tinggal: data.tinggal,
      kendaraan: data.kendaraan || "tidak punya",
      sim: data.sim || "tidak punya",
      kepemilikan: data.kepemilikan || "tidak punya"
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
      ormas: data.ormas || "tidak ada"
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
                <Table bordered>
                  <thead>
                    <tr>
                      <th colSpan="2">
                        <center>KANDIDAT PERSONAL INFO</center>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nama</td>
                      <td>{personal.nama}</td>
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
                      <td>Tanggal Lahir</td>
                      <td>{personal.tglLahir}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Alamat</td>
                      <td>{personal.alamat}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Alamat KTP</td>
                      <td>{personal.alamatKtp}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Status nikah</td>
                      <td>{personal.kawin}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Jenis Kelamin</td>
                      <td>{personal.kelamin}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Agama</td>
                      <td>{personal.agama}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Jenis Tempat Tinggal</td>
                      <td>{personal.tinggal}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Kendaraan</td>
                      <td>{personal.kendaraan}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>SIM</td>
                      <td>{personal.sim}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Kepemilikan Kendaraan</td>
                      <td>{personal.kepemilikan}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col>
              <div>
                <Table bordered>
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
                <Table bordered>
                  <thead>
                    <tr>
                      <th colSpan="2">
                        <center>Pendidikan Calon Kandidat</center>
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
                      <td>Pendidiak Informal</td>
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
