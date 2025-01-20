import React from 'react'
import styled from 'styled-components'

function Button({text, icon}) {
  return (
    <ButtonStyle>
         <div className='button'>
            <button>{icon}{text}</button>
        </div>
    </ButtonStyle>
  )
}

export default Button

const ButtonStyle = styled.div`
        button{
            background-color: orange;
            color: #f4eeee;
            border: none;
            padding: 10px;
            font-size: 18px;
            border-radius: 10px;
        }
`;