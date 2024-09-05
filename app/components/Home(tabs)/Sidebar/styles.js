import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  box-sizing: border-box;
  border-right: 2px solid white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

export const SidebarHeader = styled.div`

    border-bottom: 2px solid white;
    width: 100%;
    color: #ecf0f1;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 30px;
`

export const SidebarItem = styled(Link)`
  color: #ecf0f1;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 0;
  width: 100%;
  text-align: left; 
  cursor: pointer;
   font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;

  &:hover {
    background-color: #34495e;
    padding-left: 10px;
  }
`;