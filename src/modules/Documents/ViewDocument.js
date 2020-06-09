import React, {useEffect, useState} from 'react';
import {useHistory, useLocation, useParams} from 'react-router-dom';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    MDBTypography,
    MDBCollapse,
    MDBCollapseHeader, MDBChip
} from 'mdbreact';
import Breadcrumbs from '../../components/Breadcrumbs';
import {fetchDocument} from '../../redux/documents/document-actions';
import ViewDocumentResources from '../Resources/ViewDocumentResources';

const ViewDocument = () => {
    const [collapseId, setCollapseId] = useState('collapse1');
    const history = useHistory();
    const {id} = useParams();
    const dispatch = useDispatch();

    const {
        document: {
            _id,
            title,
            body,
            resources,
            createdAt,
            updatedAt
        }
    } = useSelector(state => ({document: state.documentData.documents}), shallowEqual);

    useEffect(() => {
        (async () => {
            await dispatch(fetchDocument(id));
        })();

        // eslint-disable-next-line
    }, []);

    const toggleCollapse = (collapseId) => {
        setCollapseId((prevCollapseId) => {
            return prevCollapseId === '' ? collapseId : '';
        });
    };

    const {pathname} = useLocation();
    return (
        <MDBContainer fluid>
            <Breadcrumbs route={pathname}/>
            <MDBCol md='12' className='px-0'>
                <MDBCard>
                    <MDBCardBody className='mx-4 my-4'>
                        <MDBRow className='mb-4'>
                            <MDBCol md='10' className='float-left'>
                                <h3 className='orange-text-lighten mb-4'>
                                    <strong>View Document</strong>
                                </h3>
                                <hr/>
                                <MDBChip size='sm' bgColor='purple lighten-4' text='purple' waves
                                         className='float-left'>
                                    Created: ({new Date(createdAt).toLocaleDateString()})
                                </MDBChip>
                                <MDBChip size='sm' bgColor='purple lighten-4' text='purple' waves
                                         className='float-left'>
                                    Updated: ({updatedAt && (<>{new Date(updatedAt).toLocaleDateString()}</>)})
                                </MDBChip>
                            </MDBCol>
                            <MDBCol md='2'>
                                <MDBBtn className='z-depth-1' color='success' outline rounded block
                                        onClick={() => history.push(`/documents/edit/${_id}`)}>
                                    Open In Editor
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                        <MDBTypography tag='h2' className='mb-4'>{title}</MDBTypography>
                        <MDBTypography tag='p'>
                            {body}
                        </MDBTypography>
                    </MDBCardBody>

                </MDBCard>
            </MDBCol>
            <MDBCol md='12' className='px-0'>
                <MDBCard>

                    <MDBCard
                        style={{backgroundColor: 'rgba(0,0,0,.03)'}}
                        className='mx-0'
                    >
                        <MDBCollapseHeader className='footer py-2 mdb-color lighten-3'
                                           onClick={() => toggleCollapse('collapse1')}>
                            <MDBRow className='d-flex justify-content-center'>
                                <MDBTypography tag='h3' className='white-text pr-3 mb-2'>
                                    Resources
                                </MDBTypography>
                                <MDBIcon
                                    icon={
                                        collapseId === 'collapse1'
                                            ? 'angle-up'
                                            : 'angle-down'
                                    }
                                    className='white-text mt-2'
                                    style={{float: 'right'}}
                                />
                            </MDBRow>

                        </MDBCollapseHeader>
                        <MDBCollapse id='collapse1' className='resources-accordian' isOpen={collapseId}>
                            <ViewDocumentResources resources={resources}/>
                        </MDBCollapse>
                    </MDBCard>
                </MDBCard>
            </MDBCol>
        </MDBContainer>
    );
};

export default ViewDocument;