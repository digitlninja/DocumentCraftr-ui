import React, {useState} from 'react';
import {
    MDBTypography,
    MDBCardBody,
    MDBIcon,
    MDBCard,
    MDBCollapseHeader,
    MDBRow,
    MDBCollapse
} from 'mdbreact';
import {resourceTypes} from '../../constants';

const ViewDocumentResources = ({resources}) => {
    const [collapseId, setCollapseId] = useState('collapse1');

    const toggleCollapse = (collapseId) => {
        setCollapseId((prevCollapseId) => {
            return prevCollapseId === '' ? collapseId : '';
        });
    };

    return (
        <>
            <MDBCard
                style={{backgroundColor: 'rgba(0,0,0,.03)'}}
                className='mx-0'
            >
                <MDBCollapseHeader className='footer py-2 mdb-color lighten-3' onClick={() => toggleCollapse('collapse1')}>
                    <MDBRow className='d-flex justify-content-center'>
                        <MDBTypography tag='h3' className='white-text pr-3 mb-2'>
                            Resources
                        </MDBTypography>
                        <MDBIcon
                            icon={ collapseId === 'collapse1' ? 'angle-up' : 'angle-down' }
                            className='white-text mt-2'
                            style={{float: 'right'}}
                        />
                    </MDBRow>
                </MDBCollapseHeader>

                <MDBCollapse id='collapse1' className='resources-accordian' isOpen={collapseId}>
                    {resources && resources.length ? resources.map((resource) =>
                        <MDBCardBody
                            className={'col-md-4 float-left p-2 keenious-purple border-white border-right mb-1'}
                            style={{height: '6rem'}}
                            key={resource._id}
                        >
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
                            {resource.notes && (
                                <MDBTypography className='white-text lighten pl-1 p-0 small mb-2' tag='p'>
                                    Note: {resource.notes.substring(0, 55)} {resource.notes.length > 54 && '...'}
                                </MDBTypography>
                            )}
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
                </MDBCollapse>

            </MDBCard>
        </>
    );
};

export default ViewDocumentResources;