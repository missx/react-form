import React from 'react';
import { Form, Button, Icon } from 'semantic-ui-react';

import InputField from '../InputField/InputField';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import FileInput from '../FileInput/FileInput';
import Modal from '../Modal/Modal';
import './FormSection.css';

const dayOptions = [
    { key: '1', text: '1', value: '1' },
    { key: '2', text: '2', value: '2' },
];

const monthOptions = [
    { key: 'january', text: 'January', value: 'january' },
    { key: 'february', text: 'February', value: 'february' },
];

const yearOptions = [
    { key: '1988', text: '1988', value: '1988' },
    { key: '1989', text: '1989', value: '1989' },
];

let countryOptions = [
    { key: 'austria', text: 'Austria', value: 'austria' },
    { key: 'bulgaria', text: 'Bulgaria', value: 'bulgaria' },
    { key: 'colombia', text: 'Colombia', value: 'colombia' },    
];

export default class FormSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            dayBirth: '',
            monthBirth: '',
            yearBirth: '',
            email: '',
            country: '',
            errorFirstName: false,
            errorLastName: false,
            errorGender: false,
            errorDayBirth: false,
            errorMonthBirth: false,
            errorEmail: false,
            errorCountry: false,
            errors: false,
            womanColor: 'black',
            manColor: 'black',
            fileInput: null,
            showModal: false
        }

        this.saveData = this.saveData.bind(this);
        this.valuesOnChange = this.valuesOnChange.bind(this);
        this.onUpload = this.onUpload.bind(this);
        this.setGender = this.setGender.bind(this);
    }

    saveData() {
        this.setState({
            errors: false
        });

        (!this.state.firstName) ? this.setState({errorFirstName: true, errors: true}) : this.setState({errorFirstName: false});
        (!this.state.lastName) ? this.setState({errorLastName: true, errors: true}) : this.setState({errorLastName: false});
        (!this.state.email) ? this.setState({errorEmail: true, errors: true}) : this.setState({errorEmail: false});
        console.log('file', this.state.fileInput.files[0]);

        // open modal if no errors
        console.log(this.state.errors)
        if (!this.state.errors) {
            this.setState({
                showModal: true
            });
        }
    }

    valuesOnChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onUpload(input) {
        this.setState({
            fileInput: input
        });
    }

    setGender(e) {
        let gender = e.target.id;
        this.setState({ gender });
        if (gender === 'woman') {
            this.setState({
                womanColor: 'pink',
                manColor: 'black',
                gender: 'female'
            });
        } else {
            this.setState({
                womanColor: 'black',
                manColor: 'blue',
                gender: 'male'
            });
        }
    }

    render() {

        return (
            <div className="FormSection">
                <div className="Form">
                    <Form onSubmit={this.saveData} error={this.state.errors}>
                        <InputField label='First name' placeholder='John' required={true}
                        inputName="firstName" type="text" onChange={this.valuesOnChange}
                        inputError={this.state.errorFirstName}/>

                        <InputField label='Last name' placeholder='Doe' required={true}
                        inputName="lastName"  type="text" onChange={this.valuesOnChange}
                        inputError={this.state.errorLastName}/>

                        <Form.Field inline className="Inline">
                            <label>Gender</label>
                            <Icon id="woman" name='woman' size='large'onClick={this.setGender}
                            color={this.state.womanColor} link circular inverted/>
                            <Icon id="man" name='man' size='large' onClick={this.setGender}
                            color={this.state.manColor} link circular inverted/>
                        </Form.Field>
                        <Form.Group inline className="DateOfBirth">
                            <Form.Field className="Inline">
                                <label>Date of Birth</label>
                                <Form.Select fluid options={dayOptions} placeholder="Day" onChange={this.valuesOnChange}/>
                            </Form.Field>
                            <Form.Field className="Inline">
                                <Form.Select fluid options={monthOptions} placeholder="Month" onChange={this.valuesOnChange}/>
                            </Form.Field>
                            <Form.Field className="Inline">
                                <Form.Select fluid options={yearOptions} placeholder="Year" onChange={this.valuesOnChange}/>
                            </Form.Field>
                        </Form.Group>
                        <InputField label='Email' placeholder='johndoe@mail.com' required={true}
                        inputName="email" type="email" onChange={this.valuesOnChange}
                        inputError={this.state.errorEmail}/>                        
                        <Form.Field inline className="Inline">
                            <label>Country</label>
                            <Form.Select options={countryOptions} placeholder="Choose country" onChange={this.valuesOnChange}/>
                        </Form.Field>
                        <FileInput label="Image" onUpload={this.onUpload}/>
                        <ErrorMessage header='Error' content='Please review the form.' />
                        <div className="ButtonGroup">
                            <Button color='teal' type="submit">Save</Button>
                        </div>
                    </Form>
                    <Modal isOpen={this.state.showModal} contentLabel="This is a modal"/>
                </div>
            </div>
        );
    }
}