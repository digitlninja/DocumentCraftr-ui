import React, {useEffect} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

import {
    MDBBtn,
    MDBCol,
    MDBDataTable,
    MDBRow,
    MDBSpinner,
} from 'mdbreact';
import Breadcrumbs from '../../components/Breadcrumbs';
import {deleteDocument, fetchAllDocuments} from '../../redux/documents/documents-actions';
import Error from '../../components/Error';
import columns from './document-list-columns';

const ViewDocuments = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    let {pathname} = useLocation();

    const {loading, error, documents} = useSelector(state => state.documentData, shallowEqual);

    useEffect(() => {
        (async () => {
            await dispatch(fetchAllDocuments());
        })();
        // eslint-disable-next-line
    }, []);

    const handleDelete = (event, id) => {
        event.preventDefault();
        const deleteConfirmed = window.confirm('Doing this will completely remove your document... Are you sure?');
        if (!deleteConfirmed) {
            return;
        }
        dispatch(deleteDocument(id));
    };

    const _getDataTableData = (documents) => {
        if (!documents || !documents.length) {
            return;
        }

        const rows = documents && documents.map(({title, body, resources, createdAt, updatedAt, _id}, index) => {
            return {
                'id': index,
                'documentTitle': title,
                'body': `${body && body.substring(0, 45)} ...`,
                'resources': resources && resources.length,
                'createdAt': new Date(createdAt).toLocaleDateString(),
                'updatedAt': new Date(updatedAt).toLocaleDateString(),
                'edit': <MDBBtn gradient='peach' className='flex-center m0-auto' size='sm'
                                onClick={() => history.push(`/documents/edit/${_id}`)}>Edit</MDBBtn>,
                'delete': <MDBBtn gradient='peach' className='flex-center m0-auto' size='sm'
                                  onClick={(event) => handleDelete(event, _id)}>Delete</MDBBtn>,
                'view': <MDBBtn color='teal' className='flex-center m0-auto' size='sm'
                                onClick={() => history.push(`/documents/view/${_id}`)}>View</MDBBtn>
            };
        });
        return {columns, rows};
    };

    const data = _getDataTableData(documents);

    if (loading) {
        return (
            <MDBRow className='mt-5 d-flex align-self-center justify-content-center'>
                <MDBCol md='6' className='d-flex justify-content-center dashboard-margin-compensation'>
                    <MDBSpinner big green/>
                </MDBCol>
            </MDBRow>
        );
    }
    if (!loading && !error) {
        return (
            <>
                <Breadcrumbs route={pathname}/>
                <h2 className='mt-4'>Your Documents</h2>
                <MDBDataTable noBottomColumns searching autoWidth={false} striped bordered hover data={data}/>
            </>
        );
    }
    if (!loading && error) {
        return (
            <Error title='Oops!'
                   message='Error. This is embarrassing. Please try again or contact the administrator for help.'/>
        );
    }
};

export default ViewDocuments;