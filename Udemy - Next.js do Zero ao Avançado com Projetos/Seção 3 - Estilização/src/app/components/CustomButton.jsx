'use client';
import React from 'react'
import styled from 'styled-components'

const MyStyledButton = styled.button`
    background-color: #4ac;
    color: #FFF;
    padding: 5px 10px;
    border-radius: 10px;
`

const CustomButton = ({children}) => {
  return (
    <MyStyledButton>{children}</MyStyledButton>
  )
}

export default CustomButton