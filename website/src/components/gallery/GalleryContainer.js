import React, { useState } from 'react';
import { Gallery } from './Gallery'
import Data from '../../images.json'
import { ImageDetailsForm } from '../gallery/ImageDetailsForm'

export const GalleryContainer = () => {

    const styles = {
        page: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            marginTop: '10%',
            width: '100%',
            backgroundColor: '#fff',
        },
        ImageDetailsFormLink: {
            position: 'absolute',
            top: 15,
            textDecoration: 'none',
            fontSize: '1.2em',
            marginLeft: '82%',
        }
    }

    const formatData = () => {
        let id = 1;
        Data.forEach(item => { item.id = id++ });
        return Data;
    }

    const [images, setImages] = useState(formatData());
    const [showPopup, setShowPopup] = useState(false);
    const [buttonName, setButtonName] = useState('');
    const [imageDetails, setImageDetails] = useState({ name: "", url: "", information: "", id: 0 });

    const onSubmitHandler = (object) => {
        if (object.id === 0) {
            ImageDetailsFormhandler(object);
        } else {
            updateImage(object);
        }
    }

    const ImageDetailsFormhandler = (object) => {
        setImages(oldArray => [...oldArray, object]);
        closeForm();
    }

    const updateImage = (object) => {
        let index = object.id - 1;
        let newArr = [...images];
        newArr[index] = object;
        setImages(newArr);
        closeForm();
    }

    const showForm = (e) => {
        let id = Number(e.target.id);
        if (id === 0) {
            setButtonName('ADD');
        } else {
            let object;
            images.forEach(item => {
                if (item.id === id) {
                    object = item;
                }
            });
            setImageDetails(object);
            setButtonName('SAVE');
        }
        setShowPopup(true);
    }

    const closeForm = () => {
        setShowPopup(false);
        setImageDetails({ name: '', url: '', information: '' });
    }
    return (
        <div id="galleryContainer" style={styles.page}>
            <a href="#newImageForm" onClick={showForm} style={styles.ImageDetailsFormLink} id="0">+ New image</a>
            <Gallery id="test" pics={images} onClick={showForm} href="#newImageForm" />
            {showPopup ?
                <ImageDetailsForm onSubmit={onSubmitHandler} buttonName={buttonName} closeHandler={closeForm} imageId={imageDetails.id} name={imageDetails.name} url={imageDetails.url} info={imageDetails.information} />
                :
                null
            }
        </div >
    );
}