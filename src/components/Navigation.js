import React from "react";
import SideNavigation from './SideNavigation';
import TopNavigation from './TopNavigation';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleStateA: false,
            breakWidth: 1300,
            windowWidth: 0,
        };
    }
    componentDidMount() {
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () =>
        this.setState({
            windowWidth: window.innerWidth
        });


    render() {
        return (
            <div className="fixed-sn indigo-skin">
                <SideNavigation/>
                <TopNavigation/>
            </div>
        );
    }
}

export default Navigation;