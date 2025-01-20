import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import styled from 'styled-components';
import Button from '../Button';
import { IoCall } from "react-icons/io5";

function Navbar() {
  return (
    <NavSection>
        <div className='logo'>
            <img src="" alt="logo-image" />
        </div>
        <div className='nav'>
            <ul>
                <li>Home</li>
                <li>Categories</li>
                <li>Menu</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='cart'>
            <IoSearch/>
            <FaCartShopping/>
           <Button icon={<IoCall fontSize='18px'/>} text='Call Us'/>
        </div>
    </NavSection>
  )
}

export default Navbar

const NavSection = styled.div`
        height: 80px;
        border-bottom: 4px solid grey;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 70px;

        .nav ul{
            display: flex;
            list-style-type: none;
            gap: 20px;
            font-size: 24px;
        }

        .cart{
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: 22px;
        }
`;