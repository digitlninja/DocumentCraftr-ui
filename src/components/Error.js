import React from 'react';
import {MDBBox, MDBCol, MDBRow, MDBTypography} from 'mdbreact';

const Error = ({title, message}) => (
    <MDBRow className="mt-5 d-flex align-self-center justify-content-center">
        <MDBCol md="6" className="d-flex justify-content-center dashboard-margin-compensation">
            <MDBTypography blockquote bqColor='danger'>
                <MDBBox tag='p' mb={0} className='bq-title'>
                    {title}
                </MDBBox>
                <p>
                    {message}
                </p>
            </MDBTypography>
        </MDBCol>
    </MDBRow>
);

export default Error;