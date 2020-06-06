import React, {useState} from "react";
import {useLocation} from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBBtn,
} from 'mdbreact';
import Breadcrumbs from '../../components/Breadcrumbs';
import ViewDocumentResources from '../Resources/AddDocumentResources'
import ResourcePanel from '../Resources/ResourcePanel';
const FormPage = () => {
    const {pathname} = useLocation();
    const [showResourceForm, setShowResourceForm] = useState(false);

    return (
        <MDBContainer fluid>
            <Breadcrumbs route={pathname}/>
            <MDBRow>
                <MDBCol md='10' className="pr-1">
                    <MDBCard>
                        <MDBCardBody className='mx-4 my-5'>
                            <MDBRow>
                                <MDBCol md='8'>
                                    <h3 className='orange-text-lighten mb-5'>
                                        <strong>Create Document</strong>
                                    </h3>
                                </MDBCol>
                                <MDBCol md='2'>
                                    <MDBBtn className='z-depth-1' color='success' outline rounded block>
                                        Update
                                    </MDBBtn>
                                </MDBCol>
                                <MDBCol md='2.5'>
                                    <MDBBtn className='z-depth-1' color='warning' outline rounded block
                                            onClick={() => setShowResourceForm(!showResourceForm)}>
                                        Add Resources
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                            <MDBInput label='Document Title' type='text' validate/>
                            <MDBInput
                                type="textarea"
                                label="Document Body"
                                rows="10"
                            />
                            {showResourceForm && (
                                <ViewDocumentResources/>
                            )}
                        </MDBCardBody>
                        <div className='footer pt-3 mdb-color lighten-3'>
                            <MDBRow className='d-flex justify-content-center'>
                                <p className='font-small white-text mb-2 pt-3'>
                                    or Sign up with
                                </p>
                            </MDBRow>
                            <MDBRow className='mt-2 mb-3 d-flex justify-content-center'>
                                <a href='#!' className='fa-lg p-2 m-2 fb-ic'>
                                    <MDBIcon
                                        icon='facebook-f'
                                        fab
                                        size='lg'
                                        className='white-text'
                                    />
                                </a>
                                <a href='#!' className='fa-lg p-2 m-2 tw-ic'>
                                    <MDBIcon
                                        fab
                                        icon='twitter'
                                        size='lg'
                                        className='white-text'>

                                    </MDBIcon>
                                </a>
                                <a href='#!' className='fa-lg p-2 m-2 gplus-ic'>
                                    <MDBIcon
                                        fab
                                        icon='google-plus-g'
                                        size='lg'
                                        className='white-text'
                                    />
                                </a>
                            </MDBRow>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol className="pl-1">
                    {[1,2].map((resource) =>
                        <ResourcePanel resource={resource}/>
                    )}
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default FormPage;