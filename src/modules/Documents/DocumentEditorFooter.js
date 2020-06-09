import React from 'react';
import {MDBIcon, MDBRow} from 'mdbreact';

const DocumentEditorFooter = () => (
    <div className='footer pt-2 mdb-color lighten-3'>
        <MDBRow className='d-flex justify-content-center'>
            <p className='white-text mb-2 pt-3'>
                Reach out to us
            </p>
        </MDBRow>
        <MDBRow className='mt-2 mb-2 d-flex justify-content-center'>
            <a target="blank" href='https://www.facebook.com/pages/category/Internet-Company/Keenious-179868852558454/'
               className='fa-lg p-2 m-2 fb-ic'>
                <MDBIcon
                    icon='facebook-f'
                    fab
                    size='lg'
                    className='white-text'
                />
            </a>
            <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/keenious'
               className='fa-lg p-2 m-2 tw-ic'>
                <MDBIcon
                    fab
                    icon='twitter'
                    size='lg'
                    className='white-text'>
                </MDBIcon>
            </a>
        </MDBRow>
    </div>
);

export default DocumentEditorFooter;