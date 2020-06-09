import React from 'react';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavItem,
    MDBIcon,
} from 'mdbreact';

class TopNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breakWidth: 1300,
            windowWidth: 0,
        };
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () =>
        this.setState({
            windowWidth: window.innerWidth
        });

    render() {
        const navStyle = {
            paddingLeft:
                this.state.windowWidth > this.state.breakWidth ? '210px' : '16px'
        };

        const specialCaseNavbarStyles = {
            WebkitBoxOrient: 'horizontal',
            flexDirection: 'row'
        };

        return (
            <MDBNavbar style={navStyle} double expand='md' fixed='top' scrolling>
                <MDBNavbarNav right style={specialCaseNavbarStyles}>
                    <MDBNavItem>
                        <MDBIcon icon='user' className='d-inline-inline'/>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
        );
    }
}

export default TopNavigation;