import React, {useEffect, useState} from "react";
import {MDBBreadcrumb, MDBBreadcrumbItem} from "mdbreact";

const Breadcrumbs = ({route}) => {
    const [segments, setSegments] = useState([]);

    // Convert a route to Capitalized segments
    const routeToCapitalizeSegments = () => {
        const capitalizedSegments = [];
            route.split('/').forEach((segment) => {
            if (segment) {
                capitalizedSegments.push(segment[0].toUpperCase() + segment.slice(1));
            }
        });
        setSegments(capitalizedSegments);
    };

    useEffect(() => {
        routeToCapitalizeSegments();
    // eslint-disable-next-line
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