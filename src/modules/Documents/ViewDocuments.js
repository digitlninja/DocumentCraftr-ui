import React from 'react';
import {MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBTypography} from 'mdbreact';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useLocation } from 'react-router-dom'

const ViewDocuments = (props) => {
    const columns = [
        {
            label: 'Title',
            field: 'documentTitle',
            sort: 'asc'
        },
        {
            label: 'Content',
            field: 'body',
            sort: 'asc'
        },
        {
            label: 'resources',
            field: 'resources',
            sort: 'asc'
        },
        {
            label: 'Date Created',
            field: 'createdAt',
            sort: 'asc'
        },
        {
            label: 'Date Updated',
            field: 'updatedAt',
            sort: 'asc'
        },
        {
            label: '',
            field: 'edit',
            sort: 'asc',
        },
        {
            label: '',
            field: 'delete',
            sort: 'asc'
        },
        {
            label: '',
            field: 'view',
            sort: 'asc',
        },
    ];

    const rows = [
        {
            'id': 1,
            'documentTitle': 'document title e',
            'body': 'the body',
            'resources': 'resources count',
            'edit': <MDBBtn gradient="peach" size="sm" href="/documents/edit/1">Edit</MDBBtn>,
            'delete': <MDBBtn gradient="peach" size="sm">Delete</MDBBtn>,
            'view': <MDBBtn color="teal" size="sm" href="/documents/view/1">View ></MDBBtn>
        },
        {
            'id': 2,
            'documentTitle': 'document title a',
            'body': 'the body',
            'resources': 'resources count',
            'edit': <MDBBtn gradient="peach" size="sm" href="/documents/edit/1">Edit</MDBBtn>,
            'delete': <MDBBtn gradient="peach" size="sm">Delete</MDBBtn>,
            'view': <MDBBtn color="teal" size="sm" href="/documents/view/1">View ></MDBBtn>
        },
        {
            'id': 3,
            'documentTitle': 'document title t',
            'body': 'the body',
            'resources': 'resources count',
            'edit': <MDBBtn gradient="peach" size="sm" href="/documents/edit/1">Edit</MDBBtn>,
            'delete': <MDBBtn gradient="peach" size="sm">Delete</MDBBtn>,
            'view': <MDBBtn color="teal" size="sm" href="/documents/view/1">View ></MDBBtn>
        },
        {
            'id': 4,
            'documentTitle': 'document title x',
            'body': 'the body',
            'resources': 'resources count',
            'edit': <MDBBtn gradient="peach" size="sm" href="/documents/edit/1">Edit</MDBBtn>,
            'delete': <MDBBtn gradient="peach" size="sm">Delete</MDBBtn>,
            'view': <MDBBtn color="teal" size="sm" href="/documents/view/1">View ></MDBBtn>
        },
        {
            'id': 5,
            'documentTitle': 'document title z',
            'body': 'the body',
            'resources': 'resources count',
            'edit': <MDBBtn gradient="peach" size="sm" href="/documents/edit/1">Edit</MDBBtn>,
            'delete': <MDBBtn gradient="peach" size="sm">Delete</MDBBtn>,
            'view': <MDBBtn color="teal" size="sm" href="/documents/view/1">View ></MDBBtn>
        }
    ];

    let { pathname } = useLocation();
    const transformDocumentsToRowData = (documents) => {
        documents.map((document) => {
            return {
                ...document,
                resources: document.resources.length
            };
        });
    };

    return (
        <>
            <Breadcrumbs route={pathname}/>
            <MDBTypography tag='h2' className="mt-4" variant="h2-responsive">Your Documents</MDBTypography>
            <MDBTable responsive small hover striped btn>
                <MDBTableHead columns={columns} />
                <MDBTableBody rows={rows}/>
            </MDBTable>
        </>
    );
};

export default ViewDocuments;