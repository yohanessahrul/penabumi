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

export const Agama = ({ label,input, meta: { touched, error } }) => (
    <FormGroup>
        <Label sm={2} md={12}>{label}</Label>
        <Col sm={10} md={12}>
        <Input type="select" {...input}>
            <option value="">Agama</option>
            {agama.map(val => <option value={val} key={val}>{val}</option>)}
        </Input>
        {touched && error && <span className="errorStyle">{error}</span>}
        </Col>
    </FormGroup>
);

export const Tinggal = ({ label,input, meta: { touched, error } }) => (
    <div>
        <Label sm={2} md={12}>{label}</Label>
        <Col sm={10} md={12}>
        <Input type="select" {...input}>
            <option value="">Tinggal Di</option>
            {tinggal.map(val => <option value={val} key={val}>{val}</option>)}
        </Input>
        {touched && error && <span className="errorStyle">{error}</span>}
        </Col>
    </div>
);