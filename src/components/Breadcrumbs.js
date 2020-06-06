import React, {useEffect, useState} from "react";
import {MDBBreadcrumb, MDBBreadcrumbItem} from "mdbreact";

const Breadcrumbs = ({route}) => {

    const [segments, setSegments] = useState([]);

    // Convert a route to Capitalized segments
    const capitalizeSegments = () => {
        const capitalizedSegments = [];
            route.split('/').forEach((segment) => {
            if (segment) {
                capitalizedSegments.push(segment[0].toUpperCase() + segment.slice(1));
            }
        });
        setSegments(capitalizedSegments);
    };

    useEffect(() => {
        capitalizeSegments();
    },[]);

    return (
        <MDBBreadcrumb className="keenious-skin">
            {segments.map((segment) => (
                    <MDBBreadcrumbItem key={segment} appendIcon icon="angle-right" className="white-text">
                        {segment}
                    </MDBBreadcrumbItem>
                )
            )}
        </MDBBreadcrumb>
    );
};

export default Breadcrumbs;