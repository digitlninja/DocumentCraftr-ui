import React, {useEffect } from 'react';
import {useLocation, useHistory, Link} from 'react-router-dom'
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

import {
    MDBBtn,
    MDBCol,
    MDBDataTable,
    MDBRow,
    MDBSpinner,
    MDBTypography
} from 'mdbreact'
import Breadcrumbs from '../../components/Breadcrumbs';
import {fetchAllResources} from '../../redux/resources/resource-actions';
import Error from '../../components/Error';
import columns from './resource-list-columns'

const ViewResources = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    let {pathname} = useLocation();

    const {loading, error, resources} = useSelector(state => state.resourceData, shallowEqual);

    useEffect(() => {
        (async () => {
            await dispatch(fetchAllResources());
        })();
        // eslint-disable-next-line
    }, []);

    const _getDataTableData = (resources) => {
        if(!resources || !resources.length) {
            return;
        }

        const rows = resources && resources.map(({documentTitle, title, body, createdAt, updatedAt, _id, documentId}, index) => {
            return {
                'id': index,
                'documentTitle': <Link className='keenious-purple-text' to={`/documents/view/${documentId}`}>{documentTitle}</Link>,
                'title':title,
                'body': `${body && body.substring(0,45)} ...`,
                'createdAt': new Date(createdAt).toLocaleDateString(),
                'updatedAt': new Date(updatedAt).toLocaleDateString(),
                'viewDocument': <MDBBtn color='teal'  className='flex-center m0-auto' size='sm' onClick={() => history.push(`/documents/view/${documentId}`)}>Go To Document</MDBBtn>
            };
        });
        return {columns, rows};
    };

    const data = _getDataTableData(resources);


    if (loading) {
        return (
            <MDBRow className='mt-5 d-flex align-self-center justify-content-center'>
                <MDBCol md='6' className='d-flex justify-content-center dashboard-margin-compensation'>
                    <MDBSpinner big green/>
                </MDBCol>
            </MDBRow>
        )
    }
    if (!loading && !error) {
        return (
            <>
                <Breadcrumbs route={pathname}/>
                <MDBTypography tag='h2' className='mt-4' variant='h2-responsive'>Your Resources</MDBTypography>
                <MDBDataTable noBottomColumns searching autoWidth={false} striped bordered hover data={data} />
            </>
        )
    }
    if (!loading && error) {
        return (
            <Error title='Oops!' message='Error. This is embarrassing. Please try again or contact the administrator for help.'/>
        )
    }
};

export default ViewResources;