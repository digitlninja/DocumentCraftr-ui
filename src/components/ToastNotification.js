import React from "react";
import {MDBNotification} from "mdbreact";
import {operationTypes} from "../constants";

const ToastNotification = ({failed, typeOfOperation}) => (
    <>
        {
            !failed ? (
                <MDBNotification
                    show
                    fade
                    iconClassName="text-success"
                    title="Success!"
                    message={`You've ${typeOfOperation === operationTypes.add ? "added" : "updated"} your document.`}
                    text={(new Date()).toLocaleTimeString()}
                    autohide={3000}
                    style={{
                        position: "fixed",
                        top: "10px",
                        right: "10px",
                        zIndex: 9999
                    }}
                />
            ) : (
                <MDBNotification
                    show
                    fade
                    iconClassName="text-danger"
                    title="Oops, something went wrong."
                    message="Please try again or contact the administrator for help.."
                    text={(new Date()).toLocaleTimeString()}
                    autohide={3000}
                    style={{
                        position: "fixed",
                        top: "10px",
                        right: "10px",
                        zIndex: 9999
                    }}
                />
            )
        }
    </>
);

export default ToastNotification;