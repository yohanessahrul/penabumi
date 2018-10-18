import React, { Component } from "react";
import Dropzone from "react-dropzone";
import alertify from "alertifyjs";
import axios from "axios";
import { Button } from "reactstrap";

const maxSize = 10000000000
export default class DropRenderKarya extends Component {
    constructor(props){
        super(props)
        this.state={
            karyaUpload:null,
            preview:null
        }
    }

    componentDidMount(){
        window.onload = function() {
            if (performance.navigation.type === 1) {
                localStorage.removeItem('karyaoff');
            }
        }
    }
    handleOnDrop = (files,reject) =>{
        if(reject && reject > 0){
            // console.log('reject',reject)
            alertify.alert('file anda ditolak')
        }
       if(files && files.length > 0){
        // console.log('file',files)
        let formData = new FormData()
        formData.append('zip',files[0])
        this.setState({
            preview:files[0].name
        })
        localStorage.setItem('karyaoff',this.state.preview)
        axios.post("http://neoal.xyz:3001/api/formuser/zipfile",formData)
        .then(response=>{
            // console.log(response)
            this.setState({
                karyaUpload:response.data.link
            })
            this.props.input.onChange(this.state.karyaUpload)
        })
        .catch(err=>{
            alertify.alert(err,"terjadi kesalahan Hubungi Kontak")
        })
       }

    }
    gantiFile = () =>{
        this.setState({
            karyaUpload:null,
            preview:null
        })
        localStorage.removeItem('karyaoff')
        this.props.input.onChange(this.state.karyaUpload)
    }
  render() {
    const {input,meta:{touched,error},label} = this.props
    const {karyaUpload,preview} = this.state
    const prevOffline = localStorage.getItem("karyaoff")
    return <div>
        {
            preview !== null || prevOffline !== null ? <div>
            {
            karyaUpload !== null || prevOffline !== null ? <div>
                <center><img src={require('./zip.png')} alt="zip" style={{height:"200px",width:"200px"}}/>
                <br/>
                {preview || prevOffline }
                <br/>
                <div>
            <Button onClick={this.gantiFile} {...input} color="danger">ganti gambar</Button>
            </div>
                </center>
            </div> :  <div><center> <img alt="loading" src={'/loader-bars.gif'} /> </center></div> 
        }
            </div> : <center> <Dropzone {...input} onDrop={this.handleOnDrop} maxSize={maxSize} multiple={false} accept=".zip"><center>{label} <br/> </center>
            <br/>
            {touched && error && <span className="errorStyle">{error}</span>}
        </Dropzone></center>
        }
    </div>;
  }
}
