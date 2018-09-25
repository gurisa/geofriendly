import React, { Component } from 'react';

import Navigation from '../../components/User/Navigation/Navigation';
import Footer from '../../components/User/Footer/Footer';
import Div from '../../hoc/Div/Div';
import Sidebar from '../../components/User/Navigation/Sidebar/Sidebar';
import Backdrop from '../../components/User/Backdrop/Backdrop';
import Routes from './Routes/Routes';

class User extends Component {
    state = {
        category: [
            { path: '/collection/flora', name: 'flora' },
            { path: '/collection/vertebrata', name: 'vertebrata' },
            { path: '/collection/invertebrata', name: 'invertebrata' },
            { path: '/collection/artefak', name: 'artefak' },
            { path: '/collection/batuan', name: 'batuan' }
        ],
        link: [
            { path: '/', name: 'Home', submenu: null },
            { path: '', name: 'Collection', submenu: null},
            { path: '/about', name: 'About Us', submenu: null }
        ],
        isShow: false,
        width: window.innerWidth
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));

        const link = this.state.link;
        link[1].submenu = this.state.category;
        this.setState({ link: link });
    }

    updateDimensions() {
        this.setState({ width: window.innerWidth });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    showSidebarHandler = () => {
        this.setState({ isShow: true });
    }

    closeSidebarHandler = () => {
        this.setState({ isShow: false });
    }
    
    render() {
        return (
            <Div>
                <Sidebar 
                    link={this.state.link} 
                    clicked={this.closeSidebarHandler}
                    show={this.state.isShow} />
                <Backdrop 
                    show={this.state.isShow}
                    clicked={this.closeSidebarHandler} />
                <Navigation 
                    link={this.state.link} 
                    clicked={this.showSidebarHandler} />
                <Routes 
                    width={this.state.width} 
                    category={this.state.category} />
                <Footer width={this.state.width} />
            </Div>
        );
    }
}

export default User;