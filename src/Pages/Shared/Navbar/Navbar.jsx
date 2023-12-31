import React from 'react';
import { Link } from 'react-router-dom';
import terminal from '../../../assets/banner/terminal-1.jpg'
import terminal2 from '../../../assets/banner/terminal-2.jpg'
import { styled, css } from 'styled-components';
import { menuData } from '../../../data/MenuData';
import { Button } from '../../../styled/Button/Button';

import { HiBars3CenterLeft } from 'react-icons/hi2'

const Nav = styled.nav
    `
height:60px;

display:flex;
justify-content:space-between;
padding: 1rem 2rem;
z-index: 100;
position:fixed;
width: 100%
`;

const NavLink = css`
    color:#fff;
    display: flex;
    align-items: center;
    padding:0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration:none;
`;

const Logo = styled(Link)`
${NavLink}
font-style: italic;
`;

const MenuBars = styled(HiBars3CenterLeft)`
    display:none;
    
     @media screen and (max-width:768px){
        display:block;
font-weight: 40px;
height:30px; 
width: 30px;
       position: absolute;
       top:0;
       right:0;
       transform: translate(-50%, 50%);
       cursor:pointer;
       color:#fff;
     
    }
    `;


const NavMenu = styled.div
    `
    display:flex;
    align-items:center;
    margin-right:-48px;
 @media screen and (max-width:768px){
        display:none
    }
   
    `;
const NavMenuLinks = styled(Link)
    `
${NavLink}
`;

const NavBtn = styled.div
    `
    display: flex;
    align-items:center;
    margin-right:24px;
     @media screen and (max-width:768px){
        display:none
    }
`
const Navbar = ({ toggle }) => {

    return (
        <Nav>
            <Logo to='/'>Plain</Logo>
            <MenuBars onClick={toggle}></MenuBars>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}

            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>Contact Us</Button>
            </NavBtn>

        </Nav>

    );
};

export default Navbar;