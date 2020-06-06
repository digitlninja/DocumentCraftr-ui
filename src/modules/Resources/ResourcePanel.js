import React from 'react';
import {MDBCard, MDBCardBody, MDBCardText, MDBCardTitle} from 'mdbreact';

const ResourcePanel = ({resource}) => (
    <MDBCard key={resource} className="mb-2">
        <MDBCardBody className="py-3 grey lighten-4">
            <MDBCardTitle className="pt-0 mt-0" tag="h4" style={{fontSize: '1rem', fontWeight: '500'}}>Resource Title {resource}</MDBCardTitle>
            <hr className="pb-1 my-0" />
            <MDBCardText>
                Link
            </MDBCardText>
        </MDBCardBody>
    </MDBCard>
);

export default ResourcePanel;