import React from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBIcon, MDBRow} from 'mdbreact';
import {useDispatch} from 'react-redux';
import {deleteResource} from '../../redux/documents/document-resource-actions';

const ResourcePanel = ({resource, onDeleteResource}) => {
    const dispatch = useDispatch();

    const handleDelete = async (event, resourceId) => {
        event.preventDefault();
        await dispatch(deleteResource(resourceId));
        onDeleteResource(resourceId);
    };

    return (
        <MDBCard className='mb-2'>
            <MDBCardBody className='py-3 grey lighten-4'>
                <MDBCardTitle className='pt-0 mt-0' tag='h4' style={{fontSize: '1rem', fontWeight: '500'}}>
                    {resource.title}
                </MDBCardTitle>
                <hr className='pb-1 my-0'/>
                <MDBRow style={{height: '30px'}}>
                    <MDBCol md='8' className='float-left' style={{height: 'auto'}}>
                        <strong>{resource.type}</strong>
                    </MDBCol>
                    <MDBCol md='4' style={{height: 'auto'}}>
                        <MDBBtn
                            tag='a'
                            size='sm'
                            floating
                            color='red'
                            className='m-0 py-1 float-left'
                            style={{transform: 'scale(0.7)'}}
                            onClick={(event) => handleDelete(event, resource._id)}>
                            <MDBIcon icon='times' size='sm' style={{fontSize: '.8rem', lineHeight: '30px'}}/>
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    );
};

export default ResourcePanel;