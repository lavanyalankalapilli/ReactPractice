import React, { useState } from 'react';
import { TextField } from '../generic/TextField';
import { Button } from '../generic/Button';
import { getDate, validateURL, isEmpty } from '../generic/Utilities'
import PropTypes from 'prop-types';

export const ImageDetailsForm = (props) => {

    const [id] = useState(props.imageId ? props.imageId : 0);
    const [name, setName] = useState(props.name ? props.name : '');
    const [url, setUrl] = useState(props.url ? props.url : '');
    const [info, setInfo] = useState(props.info ? props.info : '');
    const [nameError, setNameError] = useState("");
    const [urlError, setUrlError] = useState("");
    const [infoError, setinfoErrorr] = useState("");
    let isValid = true;

    const fields = [
        {
            value: name,
            setter: setName,
            errorField: nameError,
            errorSetter: setNameError,
            label: 'Name'
        },
        {
            value: url,
            setter: setUrl,
            errorField: urlError,
            errorSetter: setUrlError,
            label: 'URL'
        },
        {
            value: info,
            setter: setInfo,
            errorField: infoError,
            errorSetter: setinfoErrorr,
            label: 'Information'
        }]

    var styles = {
        popup: {
            position: 'fixed',
            width: '100 %',
            height: '100 %',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: 'auto',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        popupInner: {
            position: 'absolute',
            paddingLeft: 30,
            paddingRight: 30,
            paddingBottom: 40,
            paddingTop: 40,
            left: '25 %',
            right: '25 %',
            top: '25 %',
            bottom: '25 %',
            margin: '15% 20% 20% 30%',
            background: 'white',
            borderRadius: 1,
            border: 'solid 3px #191a1d'
        },
        heading: {
            fontSize: '2rem',
            fontWeight: 600,
            textAlign: 'center',
            color: '#191a1d',
            fontFamily: '"Rubik","Arial",sans-serif'
        },
        buttonSection: {
            paddingLeft: 15,
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        validateForm();
        if (isValid === true) {
            let newImage = {
                url: url, //https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/03/10/17/44-kung-fu-panda.jpg?w968h681
                name: name,
                information: info,
                uploaded_date: getDate,
                id: id
            }
            props.onSubmit(newImage);
            clearForm();
        } else {
            isValid = true;
        }
    }

    const clearForm = () => {
        fields.forEach(function (obj) {
            obj.setter('');
            obj.errorSetter('');
        })
    }

    const validateForm = () => {
        for (let index in fields) {
            isValid = isEmpty(fields[index]) || isValid;
        }
        let isValidUrl = validateURL(url, setUrlError);
        if (!isValidUrl) {
            isValid = false;
        }
    }

    return (
        <div id="newImageForm" style={styles.popup} >
            <form id={id} onSubmit={handleSubmit} style={styles.popupInner}>
                <h1 style={styles.heading}>Enter Image details</h1>
                <TextField parentType='popup' id='name' label='Name' name='name' placeholder='Enter name' value={name} onChange={e => setName(e.target.value)} />
                <span className='error-field'>{nameError}</span>
                <TextField parentType='popup' id='url' label='URL' name='url' placeholder='Enter url' value={url} onChange={e => setUrl(e.target.value)} />
                <span className='error-field'>{urlError}</span>
                <TextField parentType='popup' id='info' label='Information' name='info' placeholder='Enter information' value={info} onChange={e => setInfo(e.target.value)} />
                <span className='error-field'>{infoError}</span>
                <br></br>
                <div style={styles.buttonSection}>
                    <Button label={props.buttonName} />
                    <Button label='CLOSE' onClick={props.closeHandler} />
                </div>
            </form>
        </div>
    );
}

ImageDetailsForm.propTypes = {
    imageId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    buttonName: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    closeHandler: PropTypes.func.isRequired
}