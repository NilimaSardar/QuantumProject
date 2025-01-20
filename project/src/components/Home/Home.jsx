import React from 'react'
import styled from 'styled-components'
import Button from '../Button';
import { FaPlayCircle } from "react-icons/fa";

function Home() {
  return (
    <HomeSection>
        <div className='image-section'>
            <img src="Images/delivery.png" alt="" />
        </div>
        <div className='content-section'>
            <h1><span>Delivering</span> Happiness to Your Doorstep!!!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur iure beatae nihil asperiores suscipit illum maxime excepturi itaque blanditiis?</p>
            <div className='button'>
                <Button text='Get Started'/>
                <Button icon={<FaPlayCircle/>} text='Watch Video'/>
            </div>
        </div>
    </HomeSection>
  )
}

export default Home

const HomeSection = styled.div`
    height: calc(100vh - 80px);
    /* background-color: aqua; */
    display: flex;
    padding: 0 100px;
    gap: 10px;

    .image-section{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content-section{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        padding: 50px;
        gap: 10px;
    }

    .content-section h1{
        line-height: 72px;
        font-size: 65px;
        font-weight: 700;
        /* background-color: grey; */
    }
    .content-section span{
        color: orange;
    }
    .content-section p{
        line-height: 30px;
        font-size: 18px;
        text-align: justify;
        /* background-color: red; */
    }

    .button{
        display: flex;
        gap: 20px;
    }
`;