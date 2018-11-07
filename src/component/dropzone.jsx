import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import alertify from 'alertifyjs';
import axios from 'axios'
import {Button} from 'reactstrap'


const imageMaxSize = 10000000 
const acceptedFileType = 'image/x-png, image/png, image/jpg, image/jpeg'
const acceptedFileTypesArray = acceptedFileType.split(",").map((item)=>{return item.trim()})
export default class DropRender extends Component {
    constructor(props){
        super(props)
        this.state = {
            imgPreview:null,
            imgUpload:null
        }
    }

    componentDidMount(){
        window.onload = function() {
            if (performance.navigation.type === 1) {
                localStorage.removeItem('imgPreview');
            }
        }
    }
    verifyFile = (files) =>{
       if(files && files.length > 0){
        const currentFile = files[0]
        const currentFileType = currentFile.type
        const currentFileSize = currentFile.size
        if(currentFileSize > imageMaxSize){
            alertify.alert(`File Anda Tidak Diterima,Ukuran File Anda : ${currentFileSize} Terlalu besar`)
            return false
        }
        if(!acceptedFileTypesArray.includes(currentFileType)){
            alertify.alert(`File Ini Tidak Detrima,Kami Hanya Menerima File Gambar Seperti : .jpg/jpeg dan .png`)
            return false
        }
        return true
       }
    }
    handleOnDrop = (files,reject) =>{
        const {input} = this.props
        if(reject && reject > 0){
            this.verifyFile(reject)
        }
        if(files && files.length > 0){
            const isVerified = this.verifyFile(files)
            if(isVerified){
                const currentFile = files[0]
                // console.log(currentFile,'ini dia')
                const reader = new FileReader()
                reader.addEventListener("load",()=>{
                    this.setState({
                        imgPreview:reader.result
                    })
                    localStorage.setItem('imgPreview',this.state.imgPreview)
                    var formData = new FormData()
                    formData.append('image',currentFile)
                    axios.post(`http://neoal.xyz:3001/api/formuser/imagefile`,formData)
                    .then(response=>{
                        // console.log(response.data.link)
                        this.setState({
                            imgUpload:response.data.link
                        })
                        input.onChange(this.state.imgUpload)
                    }).catch(err=>{
                        alertify.alert(err,"terjadi kesalahan Hubungi Kontak")
                    })  
                },false)
                reader.readAsDataURL(currentFile)
            }
        }
    }
    gantiGambar = () =>{
    this.setState({
        imgUpload:null,
        imgPreview:null
    })
    this.props.input.onChange(this.state.imgUpload)
    localStorage.removeItem("imgPreview")
    }
render() {
    const {input,meta:{touched,error},label} = this.props
    const {imgPreview,imgUpload} = this.state
    // console.log(this.props.input.value)
    const imageOffline = localStorage.getItem("imgPreview")
    return (
    <div>
        {imgPreview !== null  || imageOffline !== null ? <div>
            {imgUpload !== null || imageOffline !==null ?  <div>
                <center><label>Gambar Yang Akan Anda Upload</label></center>
            <center>
            <img alt="placeholder" src={imgPreview || imageOffline} style={{height:"200px",width:"200px"}}/>
            <br/>
            <div>
            <Button onClick={this.gantiGambar} {...input} color="danger">ganti gambar</Button>
            </div>
        </center>
            </div> : <center> <img alt="loading" src={'/loader-bars.gif'} /> </center> }
        </div> : <center >
        <Dropzone {...input} multiple={false} accept={acceptedFileType} onDrop={this.handleOnDrop}><center>{label}
                <br/>
                {touched && error && <span className="errorStyle">{error}</span>}
            </center></Dropzone>
        </center>}
        
    </div>
    )
}
}
