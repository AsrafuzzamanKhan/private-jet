import React, { useState } from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import GlobalStyle from '../styled/globalStyled';
import { SliderData } from '../data/SliderData';
import SideMenu from '../Pages/Shared/SideMenu/SideMenu';

const Main = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <GlobalStyle></GlobalStyle>
            <Navbar toggle={toggle}></Navbar>
            <SideMenu isOpen={isOpen} toggle={toggle}></SideMenu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;