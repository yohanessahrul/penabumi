import React from 'react'
import {Label,Col,Input,FormGroup} from 'reactstrap'

const agama =[
    'Islam',
    'Kristen',
    'Katolik',
    'Protestan',
    'Hindu',
    'Budha',
    'Konghuchu'
]

const tinggal =[
    'Rumah Pribadi',
    'Rumah Orang Tua',
    'Kontrakan',
    'Kos'
]

const kawin = [
    'Bujang',
    'Kawin',
    'Janda/Duda'
]

export const Agama = ({ label,input, meta: { touched, error } }) => (
    <FormGroup>
        <Label sm={2} md={12}>{label} {touched && error && <span className="errorStyle">{error}</span>}</Label>
        <Col sm={10} md={12}>
        <Input className="inputType"  type="select" {...input}>
            <option value="">Agama Anda</option>
            {agama.map(val => <option value={val} key={val}>{val}</option>)}
        </Input>
        </Col>
    </FormGroup>
);

export const Tinggal = ({ label,input, meta: { touched, error } }) => (
    <div>
        <Label sm={2} md={12}>{label} {touched && error && <span className="errorStyle">{error}</span>}</Label>
        <Col sm={10} md={12}>
        <Input className="inputType" type="select" {...input}>
            <option value="">Jenis Tempat Tinggal</option>
            {tinggal.map(val => <option value={val} key={val}>{val}</option>)}
        </Input>
    
        </Col>
    </div>
);

export const Kawin = ({ label,input, meta: { touched, error } }) => (
    <div>
        <Label sm={2} md={12}>{label} {touched && error && <span className="errorStyle">{error}</span>}</Label>
        <Col sm={10} md={12}>
        <Input className="inputType" type="select" {...input}>
            <option value="">Jenis Tempat Tinggal</option>
            {kawin.map(val => <option value={val} key={val}>{val}</option>)}
        </Input>
        </Col>
    </div>
);

