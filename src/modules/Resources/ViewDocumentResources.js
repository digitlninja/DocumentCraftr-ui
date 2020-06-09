import React from 'react';
import {
    MDBTypography,
    MDBCardBody, MDBIcon
} from 'mdbreact';
import {resourceTypes} from '../../constants';

const ViewDocumentResources = ({resources}) => {
    return (
        <>
            {resources && resources.length ? resources.map((resource) =>
                <MDBCardBody
                    className={'col-md-4 float-left p-2 mb-1 keenious-purple border-white border-right'}>
                    <MDBTypography className='white-text p-1' tag='h4' style={{fontSize: '1rem'}}>
                        {resource.title}
                        {resource.type === resourceTypes.url ? (
                            <a target='_blank' rel='noopener noreferrer' href={resource.body}>
                                <MDBIcon className='float-right' icon='link'/>
                            </a>
                        ) : (
                            <a target='_blank' rel='noopener noreferrer' href={resource.body}>
                                <MDBIcon className='float-right' icon='file'/>
                            </a>)}
                    </MDBTypography>
                    <MDBTypography className='white-text lighten pl-1 p-0 small mb-0' tag='p'>
                        Created on {new Date(resource.createdAt).toLocaleDateString()}
                    </MDBTypography>
                </MDBCardBody>
            ) : (
                <MDBCardBody
                    className={'text-center col-md-12 float-left p-2 mb-1 border-white border-right'}>
                    <MDBTypography className='text-primary p-1' tag='h4' style={{fontSize: '1rem'}}>
                        <i>You have no resources for this document yet. (add some by navigating to the editor above)
                            <MDBIcon className='ml-3' icon='location-arrow'/></i>
                    </MDBTypography>
                </MDBCardBody>
            )}
        </>
    );
};

export default ViewDocumentResources;