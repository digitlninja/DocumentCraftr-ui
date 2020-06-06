import React, {useCallback, useState} from "react";
import {
    MDBRow,
    MDBCol,
    MDBTypography,
    MDBInput, MDBSwitch, MDBBtn
} from 'mdbreact';
import FileUpload from '../../components/Dropzone';

const AddDocumentResources = () => {
    const [switchOn, setSwitchOn] = useState(false);

    const handleSwitchChange = () => {
        setSwitchOn(!switchOn);
    };

    const onDrop = useCallback((acceptedFiles) => {
        console.log({acceptedFiles});
    }, []);

    return (
        <>
            <MDBRow>
                <MDBCol md='12' className="pr-0">
                    <MDBTypography tag='h5'
                                   className="p-2 white-text rounded stylish-color mt-0 mb-4 text-left">
                        Add Resources
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
            <MDBRow className="mb-4">
                <MDBCol md="10">
                    <MDBInput label='Title' labelClass="align-top" type='text' validate containerClass="mt-0 p-0" className="mt-0"/>
                </MDBCol>
                <MDBCol md='2'>
                    <MDBBtn className='z-depth-1' color='success' outline rounded block>
                        Add
                    </MDBBtn>
                </MDBCol>
                <MDBCol md='6' className="mb-2">
                    <MDBTypography tag='h5' >
                        What type of resource is it?
                    </MDBTypography>
                </MDBCol>

                <MDBCol md='4' className="mb-2">
                    <MDBSwitch labelLeft="Link" labelRight="File" checked={switchOn}
                               onChange={() => handleSwitchChange()}/>
                </MDBCol>

                {!switchOn && (
                    <MDBCol md="4">
                        <MDBInput label='http://...' labelClass="align-top" type='text' validate containerClass="m-0 p-0" className="m-0"/>
                    </MDBCol>
                )}
            </MDBRow>
            {switchOn && (
                <MDBRow>
                    <FileUpload onDrop={onDrop}/>
                </MDBRow>
            )}
        </>
    );
};

export default AddDocumentResources;