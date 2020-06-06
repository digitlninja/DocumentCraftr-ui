import React from 'react';
import {MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBTypography} from 'mdbreact';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useLocation } from 'react-router-dom'

const ViewResources = (props) => {
    const columns = [
        {
            label: 'Type',
            field: 'type',
            sort: 'asc'
        },
        {
            label: 'Title',
            field: 'title',
            sort: 'asc'
        },
        {
            label: 'Content',
            field: 'body',
            sort: 'asc'
        },
        {
            label: 'documentName',
            field: 'documentName',
            sort: 'asc'
        },
        {
            label: 'Date Created',
            field: 'createdAt',
            sort: 'asc'
        },
        {
            label: 'Last Updated',
            field: 'updatedAt',
            sort: 'asc'
        },
        {
            label: '',
            field: 'edit',
            sort: 'asc'
        },
        {
            label: '',
            field: 'delete',
            sort: 'asc'
        }
    ];

    const rows = [
        {
            'type': 'file',
            'title': 'resource title e',
            'body': 'the body',
            'documentName': 'documentName',
            'createdAt': 'Date Created',
            'updatedAt': 'Last Updated',
            'edit': <MDBBtn gradient="peach" size="sm" href="/documentName/edit/1">Edit</MDBBtn>,
            'delete': <MDBBtn gradient="peach" size="sm">Delete</MDBBtn>
        },
        {
            'type': 'link',
            'title': 'resource title a',
            'body': 'the body',
            'documentName': 'documentName',
            'createdAt': 'Date Created',
            'updatedAt': 'Last Updated',
            'edit': <MDBBtn gradient="peach" size="sm" href="/documentName/edit/1">Edit</MDBBtn>,
            'delete': <MDBBtn gradient="peach" size="sm">Delete</MDBBtn>
        },
        {
            'type': 'file',
            'title': 'resource title t',
            'body': 'the body',
            'documentName': 'documentName',
            'createdAt': 'Date Created',
            'updatedAt': 'Last Updated',
            'edit': <MDBBtn gradient="peach" size="sm" href="/documentName/edit/1">Edit</MDBBtn>,
            'delete': <MDBBtn gradient="peach" size="sm">Delete</MDBBtn>
        },
        {
            'type': 'link',
            'title': 'resource title x',
            'body': 'the body',
            'documentName': 'documentName',
            'createdAt': 'Date Created',
            'updatedAt': 'Last Updated',
            'edit': <MDBBtn gradient="peach" size="sm" href="/documentName/edit/1">Edit</MDBBtn>,
            'delete': <MDBBtn gradient="peach" size="sm">Delete</MDBBtn>
        },
        {
            'type': 'file',
            'title': 'resource title z',
            'body': 'the body',
            'documentName': 'documentName',
            'createdAt': 'Date Created',
            'updatedAt': 'Last Updated',
            'edit': <MDBBtn gradient="peach" size="sm" href="/documentName/edit/1">Edit</MDBBtn>,
            'delete': <MDBBtn gradient="peach" size="sm">Delete</MDBBtn>
        }
    ];

    let { pathname } = useLocation();
    const transformDocumentsToRowData = (documentName) => {
        documentName.map((resource) => {
            return {
                ...resource,
                documentName: resource.documentName
            };
        });
    };

    return (
        <>
            <Breadcrumbs route={pathname}/>
            <MDBTypography tag='h2' className="mt-4" variant="h2-responsive">All of Your Resources</MDBTypography>
            <MDBTable responsive small hover striped btn>
                <MDBTableHead columns={columns} />
                <MDBTableBody rows={rows}/>
            </MDBTable>
        </>
    );
};

export default ViewResources;