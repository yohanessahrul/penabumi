import React, { Component } from 'react'
import history from '../../history'
import {Container,Table,Row,Col,Button} from 'reactstrap'
import {reduxForm,reset} from 'redux-form'
class ConfirmPage extends Component {
    constructor(props){
        super(props)
        this.state={
          yayasan:{
            namaYayasan:'',
            alamatYayasan:'',
            emailYayasan:'',
            website:'',
            noYayasan:'',
            jenis:'',
          },
          pendaftar:{
            namaPendaftar:'',
            emailPendaftar:'',
            jabatan:'',
            pic:'',
            noPendaftar:''
          }
        }
    }

    BackToHome() {
      localStorage.clear()
      history.push('/')
  }
    componentDidMount(){
      const local = localStorage.getItem('formYayasan')
      if(!local){
        history.push('/')
      }
      const data = JSON.parse(local)

      const yayasan = {
            namaYayasan:data.namaYayasan,
            alamatYayasan:data.alamatYayasan,
            emailYayasan:data.emailYayasan,
            website:data.website,
            noYayasan:data.noYayasan,
            jenis:data.jenis,
      }
      const pendaftar = {
            namaPendaftar:data.namaPendaftar,
            emailPendaftar:data.emailPendaftar,
            jabatan:data.jabatan,
            pic:data.pic,
            noPendaftar:data.noPendaftar
      }

      this.setState({
        yayasan:yayasan,
        pendaftar:pendaftar
      })
    }
  render() {
    const {yayasan,pendaftar} = this.state
    return (
      <Container>
        <center>
          <strong>
            <h5 style={{fontFamily:"time"}}>
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
                    <tr >
                      <th colSpan="2">
                        <center>DATA YAYASAN</center>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nama Yayasan</td>
                      <td>{yayasan.namaYayasan}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Alamat Yayasan</td>
                      <td>{yayasan.alamatYayasan}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Email Yayasan</td>
                      <td>{yayasan.emailYayasan}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>website Yayasan</td>
                      <td>{yayasan.website}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>No/Wa Yayasan</td>
                      <td>{yayasan.noYayasan}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Jenis Yayasan</td>
                      <td>{yayasan.jenis}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col>
              <div>
                <Table bordered>
                  <thead>
                    <tr >
                      <th colSpan="2">
                        <center>DATA YAYASAN</center>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nama Pendaftar</td>
                      <td>{pendaftar.namaPendaftar}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Email Pendaftar</td>
                      <td>{pendaftar.emailPendaftar}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>No/Wa Pendaftar</td>
                      <td>{pendaftar.noPendaftar}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Pic Pendaftar</td>
                      <td>{pendaftar.pic}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Jabatan Pendaftar</td>
                      <td>{pendaftar.jabatan}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <center>
              <Button onClick={this.BackToHome} color="success">KEMBALI KE HALAMAN UTAMA</Button>
              </center>
            </Col>
          </Row>
        </div>
      </Container>
    )
  }
}
const afterSubmit = (result,dispatch) => dispatch(reset('foundation'))
export default reduxForm({
    form:'foundation',
    onSubmitSuccess:afterSubmit
})(ConfirmPage)