import React from 'react';
import { styled } from 'styled-components';
import { menuData } from '../../../data/MenuData';
import { Button } from '../../../styled/Button/Button';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'

const DropDownContainer = styled.div
    `
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #cd853f;
display:grid ;
align-items: center;
top:0;
left: 0;
transition:0.3s ease-in-out;
opacity: ${({ isOpen }) => { isOpen ? '0' : '1' }};
top:${({ isOpen }) => (isOpen ? '0' : '-100%')}
`
const Icon = styled.div`
position: absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`


const CloseIcon = styled(FaTimes)`
color:#000d1a;

`
const DropDownWrapper = styled.div``
const DropDownMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows:repeat(4,80px);
text-align: center;
margin-bottom:4rem;

@media screen and (max-width: 480px) {
    grid-template-rows:repeat(4,60px);
}
`
const DropDownLink = styled(Link)`
display: flex;
color:#fff;
align-items: center;
justify-content: center;
font-size: 1.2rem;
text-decoration: none;
list-style: none;
cursor: pointer;
transition: 0.3s ease-in-out ;

&:hover{
    color:#000d1a
}
`
const BtnWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`


const SideMenu = ({ isOpen, toggle }) => {
    return (
        <DropDownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropDownWrapper>
                <DropDownMenu>
                    {menuData.map((item, index) => (
                        <DropDownLink to={item.link} key={index}>
                            {item.title}
                        </DropDownLink>
                    ))}
                </DropDownMenu>
                <BtnWrapper>
                    <Button primary='true' round='true'>Contact Us</Button>
                </BtnWrapper>
            </DropDownWrapper>
        </DropDownContainer>
    );
};

export default SideMenu;