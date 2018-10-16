import React, { Component } from 'react'
import PersonalHome from './PersonalHome'
import Wali from './Wali'
import Pendidikan from './Pendidikan'
import { Progress,Container } from 'reactstrap';
import { Values } from 'redux-form-website-template';
class WizardForm extends Component {
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
            page: 1
        }
    }

    nextPage() {
        this.setState({
            page: this.state.page + 1
        })
    }

    previousPage() {
        this.setState({
            page: this.state.page - 1
        })
    }

    componentDidMount() {
        // console.log('Props untuk alang => ', this.props.lang)
    }

    render() {
        // const { onSubmit } = this.props
        const { page } = this.state
        return (
            <Container>
                <div>
                    <div style={{marginTop:"10px"}}>
                        {page === 1 && <Progress multi>
                            <Progress color="info" bar value="33" >1/3</Progress>
                        </Progress>}
                        {page === 2 && <Progress multi>
                            <Progress color="info" bar value="33">1/3</Progress>
                            <Progress color="info" bar value="33">2/3</Progress>
                        </Progress>}
                        {page === 3 && <Progress multi>
                            <Progress color="info" bar value="33">1/3</Progress>
                            <Progress color="info" bar value="33" >2/3</Progress>
                            <Progress color="info" bar value="34" >3/3</Progress>
                        </Progress>}
                    </div>
                    <br />
                    <div>
                        {page === 1 && <PersonalHome onSubmit={this.nextPage} />}
                        {page === 2 && <Wali previousPage={this.previousPage} onSubmit={this.nextPage} />}
                        {page === 3 && <Pendidikan previousPage={this.previousPage} onSubmit={this.nextPage} />}
                    </div>
                    <Values form="personal"/>
                </div>
            </Container>
        )
    }
}

export default WizardForm