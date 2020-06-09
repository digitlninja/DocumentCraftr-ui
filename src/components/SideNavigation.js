import React from 'react';
import {
    MDBSideNavLink,
    MDBSideNavCat,
    MDBSideNavNav,
    MDBSideNav,
} from 'mdbreact';
import logo from '../assets/keenious-logo-small.png';

class SideNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideNavLeft: false,
        };
    }
    render() {
        return (
            <MDBSideNav slim
                fixed
                triggerOpening={this.state.sideNavLeft}
                className='keenious-skin'
            >
                <li>
                    <div className='logo-wrapper sn-ad-avatar-wrapper'>
                        <a href='#!'>
                            <img alt='' src={logo} className='rounded-circle'/>
                            <span
                                style={{textTransform: 'uppercase', letterSpacing: '2px', fontStretch: 'expanded', fontWeight: '500'}}>keenious</span>
                        </a>
                    </div>
                </li>
                <MDBSideNavNav>

                    <MDBSideNavCat name='Documents' id='submit-blog' icon='file-alt'>
                        <MDBSideNavLink to='/documents/view' topLevel>
                            View All
                        </MDBSideNavLink>
                        <MDBSideNavLink to='/documents/create' topLevel>
                            Create
                        </MDBSideNavLink>
                    </MDBSideNavCat>
                    <MDBSideNavCat name='Resources' id='submit-blog' icon='scroll'>
                        <MDBSideNavLink to='/resources/view' topLevel>
                            View All
                        </MDBSideNavLink>
                    </MDBSideNavCat>

                </MDBSideNavNav>
            </MDBSideNav>
        );
    }
}

export default SideNavigation;
