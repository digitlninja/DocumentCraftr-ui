import React, {useState} from "react";
import {useLocation} from 'react-router-dom';
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
    MDBCollapseHeader
} from 'mdbreact';
import Breadcrumbs from '../../components/Breadcrumbs';

const ViewDocument = () => {
    const [collapseId, setCollapseId] = useState("collapse1");
    const toggleCollapse = (collapseId) => {
        setCollapseId((prevCollapseId) => {
            return prevCollapseId === "" ? collapseId : ""
        });
    };


    const {pathname} = useLocation();
    return (
        <MDBContainer fluid>
            <Breadcrumbs route={pathname}/>
            <MDBCol md='12' className="px-0">
                <MDBCard>
                    <MDBCardBody className='mx-4 my-5'>
                        <MDBRow>
                            <MDBCol md='10' className="float-left">
                                <h3 className='orange-text-lighten mb-5'>
                                    <strong>View Document</strong>
                                </h3>
                            </MDBCol>
                            <MDBCol md='2'>
                                <MDBBtn className='z-depth-1' color='success' outline rounded block href="/documents/edit/1">
                                    Open In Editor
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                        <MDBTypography tag="h2" className="mb-4">This is pretty pimp man. Well fkin
                            done!</MDBTypography>
                        <MDBTypography tag="p">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus architecto blanditiis
                            consectetur eligendi fugiat incidunt ipsa ipsam labore modi officiis possimus qui
                            recusandae reiciendis sit, soluta unde veniam, vero
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus architecto blanditiis
                            consectetur eligendi fugiat incidunt ipsa ipsam labore modi officiis possimus qui
                            recusandae reiciendis sit, soluta unde veniam, vero Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. A accusamus architecto blanditiis
                            consectetur eligendi fugiat incidunt ipsa ipsam labore modi officiis possimus qui
                            recusandae reiciendis sit, soluta unde veniam, vero Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. A accusamus architecto blanditiis
                            consectetur eligendi fugiat incidunt ipsa ipsam labore modi officiis possimus qui
                            recusandae reiciendis sit, soluta unde veniam, vero Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. A accusamus architecto blanditiis
                            consectetur eligendi fugiat incidunt ipsa ipsam labore modi officiis possimus qui
                            recusandae reiciendis sit, soluta unde veniam, vero Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. A accusamus architecto blanditiis
                            consectetur eligendi fugiat incidunt ipsa ipsam labore modi officiis possimus qui
                            recusandae reiciendis sit, soluta unde veniam, vero!!
                        </MDBTypography>
                        <MDBTypography tag="p">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus architecto blanditiis
                            consectetur eligendi fugiat incidunt ipsa ipsam labore modi officiis possimus qui
                            recusandae reiciendis sit, soluta unde veniam, vero
                            recusandae reiciendis sit, soluta unde veniam, vero!!
                        </MDBTypography>
                        <MDBTypography tag="p">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus architecto blanditiis
                            recusandae reiciendis sit, soluta unde veniam, vero!!
                        </MDBTypography>
                        <MDBTypography tag="p">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus architecto blanditiis
                            recusandae reiciendis sit, soluta unde veniam, vero!!
                        </MDBTypography>
                    </MDBCardBody>

                </MDBCard>
            </MDBCol>
            <MDBCol md='12' className="px-0">
                <MDBCard>

                    <MDBCard
                        style={{ backgroundColor: "rgba(0,0,0,.03)" }}
                        className="mx-0"
                    >
                        <MDBCollapseHeader className='footer py-2 mdb-color lighten-3' onClick={() => toggleCollapse("collapse1")}>
                                <MDBRow className='d-flex justify-content-center'>
                                    <MDBTypography tag="h3" className='white-text pr-3 mb-2'>
                                        Resources
                                    </MDBTypography>
                                    <MDBIcon
                                        icon={
                                            collapseId === "collapse1"
                                                ? "angle-up"
                                                : "angle-down"
                                        }
                                        className="white-text mt-2"
                                        style={{ float: "right" }}
                                    />
                                </MDBRow>

                        </MDBCollapseHeader>
                        <MDBCollapse id="collapse1" className="resources-accordian" isOpen={collapseId}>
                            {[1, 2, 3, 4, 5, 6].map((resource) =>
                                <MDBCardBody className={"col-md-4 float-left p-2 mb-1 grey lighten-2 border-white border-right"}>
                                    <MDBTypography className="blue-text p-1" tag="h4" style={{fontSize: '1rem' }}>
                                        Resource Title {resource} {resource > 1
                                        ? (<MDBIcon className="float-right" icon="link"/>)
                                        : (<MDBIcon className="float-right" icon="file"/>)}
                                    </MDBTypography>
                                </MDBCardBody>
                            )}
                        </MDBCollapse>
                    </MDBCard>
                </MDBCard>
            </MDBCol>
        </MDBContainer>
    );
};

export default ViewDocument;