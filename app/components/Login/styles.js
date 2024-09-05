import React from 'react';
import styled from 'styled-components';



export const StyledContainer = styled.div`

    width: 100%;
  height: 100vh;

  display: flex;
  flex: 1;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  flex-direction: column;
  background-color: #121214;

  span {
    color: #8D8D99;
    margin-top: 80px;
    
  }


`

export const StyledButtonLogin = styled.button`
   
    height: 56px;
    width: 650px;

    color: #FFF;
    background: none;
    font-size: 18px;
    cursor: pointer;
    border-width: 2px;
    border-style: solid;
    border-color: #FFF;


    margin-top: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    >svg {
        font-size: 24px;
        margin-right: 7px;
    }

    transition: background-color .3s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.05);
    }

`

export const StyledH1 = styled.h1`

        color: #FFF;
        margin-bottom: 30px;
        display: inline;
        align-items: center;
        justify-content: center;

`

export const StyledImg = styled.img`

        width: 67px; 
        height: 67px; 
      margin-left: 40px;
      margin-top: 40px;
      align-items: left;
      justify-content: left;
      

`

export const styledDiv = styled.div`

    width: 100%;
  height: 100vh;

  display: flex;
  flex: 1;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  flex-direction: column;
  background-color: #121214;
  align-items: center;
  justify-content: center;

`