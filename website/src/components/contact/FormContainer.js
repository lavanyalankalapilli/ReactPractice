import React, { useState } from 'react';
import { TextField } from '../generic/TextField';
import { TextArea } from '../generic/TextArea';
import { Button } from '../generic/Button';
import { validateEmail, isEmpty } from '../generic/Utilities';

export const FormContainer = () => {

    const styles = {
        form: {
            lineHeight: '115%',
            fontSize: '1rem',
            fontFamily: '"Rubik","Arial",sans-serif',
            fontWeight: 300,
            color: '#191a1d',
            paddingLeft: 400,
            backgroundColor: '#fff'
        }
    }

    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [fnameError, setFnameError] = useState("");
    const [lNameError, setLnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [messageError, setMessageError] = useState("");
    let isValid = true;

    const handleSubmit = (evt) => {
        evt.preventDefault();
        validateFields();
        if (isValid) {
            clearForm();
            alert(`Hi ${fname}, your message has been recorded. Will get back to you soon :)`);
        } else {
            isValid = true;
        }
    }

    function validateFields() {

        for (let index in fields) {
            isValid = isEmpty(fields[index]) || isValid;
        }
        let validEmail = validateEmail(email, setEmailError);
        if (!validEmail) {
            isValid = false;
        }
    }

    function clearForm() {
        fields.forEach(function (obj) {
            obj.setter('');
            obj.errorSetter('');
        })
    }

    const fields = [
        {
            value: fname,
            setter: setFName,
            errorField: fnameError,
            errorSetter: setFnameError,
            label: 'First Name'
        },
        {
            value: lname,
            setter: setLName,
            errorField: lNameError,
            errorSetter: setLnameError,
            label: 'Last Name'
        },
        {
            value: email,
            setter: setEmail,
            errorField: emailError,
            errorSetter: setEmailError,
            label: 'Email address'
        },
        {
            value: subject,
            setter: setSubject,
            errorField: subjectError,
            errorSetter: setSubjectError,
            label: 'Subject'
        },
        {
            value: message,
            setter: setMessage,
            errorField: messageError,
            errorSetter: setMessageError,
            label: 'Message'
        }
    ]

    return (
        <form name="contactForm" onSubmit={handleSubmit} style={styles.form}>
            <TextField id='fname' label='First Name' name='fname' placeholder='Enter your first name' value={fname} onChange={e => setFName(e.target.value)} />
            <span className='error-field'>{fnameError}</span>
            <TextField id='lname' label='Last Name' name='lname' placeholder='Enter your last name' value={lname} onChange={e => setLName(e.target.value)} />
            <span className='error-field'>{lNameError}</span>
            <TextField id='email' label='Email' name='email' placeholder='Enter your email address' value={email} onChange={e => setEmail(e.target.value)} />
            <span className='error-field'>{emailError}</span>
            <TextArea id='subject' label='Subject' name='subject' placeholder='Enter subject' value={subject} onChange={e => setSubject(e.target.value)} />
            <span className='error-field'>{subjectError}</span>
            <TextArea id='message' label='Message' name='message' placeholder='Start typing your message...' value={message} onChange={e => setMessage(e.target.value)} />
            <span className='error-field'>{messageError}</span>
            <br></br>
            <Button label='SUBMIT' />
        </form>
    );
}

