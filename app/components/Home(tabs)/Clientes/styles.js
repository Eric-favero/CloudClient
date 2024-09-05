import styled from 'styled-components';
import { FaRegCopy } from "react-icons/fa";
import { FaRegPaste } from "react-icons/fa6";


export const StyledCopy = styled(FaRegCopy)`

  display: flex;
  align-itens: center;
  cursor: pointer;
  align-items: center;
  margin-left: 10px;
  margin-top: 7px;

`
export const StyledPaste = styled(FaRegPaste)`

  display: flex;
  align-itens: center;
  cursor: pointer;
  align-items: center;
  margin-left: 10px;
  margin-top: 7px;

`

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  
`;

export const GridContainer = styled.div`
   
  overflow-y: auto;
  height: 100vh;
  width: 100vw;
`;

export const StyledDivSearch = styled.div`

  display: flex;
  justify-content: left;
  align-items: center;
  background-color: #2c3e50;
  font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
  
  
  
`

export const Dropdown = styled.select`
  
  right: 0;
  padding: 5px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: #e0e0e0;
  cursor: pointer;
  margin-left: 30px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const StyledSearch = styled.input`

  display: flex;
  border-radius: 10px;
  padding: 12px;
  border-color: Black;
  margin-left: 5px;
  background-color: #e0e0e0;

`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
`;


export const Grid = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  background-color: #ecebebb6;
  Color: white;
`;

export const GridHeader = styled.thead`
  background-color: #2c3e50;

  th {
    padding: 12px;
    border-bottom: 2px solid #ddd;
    font-size: 16px;
     font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    

  }
`;

export const GridBody = styled.tbody`
  max-height: 400px;
  overflow-y: auto;
  tr:nth-child(even) {
    background-color: #ecebebb6;
  }

  tr:hover {
    background-color: #e0e0e0;
  }

  td {
    padding: 30px;
    border-bottom: 1px solid #ddd;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    color: black;

  }

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background:  #2c3e50;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  color: white;
`;

export const ModalField = styled.div`
  margin-bottom: 15px;
  border-radius: 10px;

`;

export const ModalGroup = styled.div`

  display: flex;
`

export const ModalLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  
`;

export const ModalInput = styled.input`
  width: 80%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
`;

export const ModalButton = styled.button`
  margin-left: 10px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  background: #e0e0e0;
  color: #333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: #e0e0e0;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }

  &:disabled {
    background: #cccccc;
    color: #666666;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const StyledH2 = styled.h2`
  text-align: center;
`;

export const StyledDiv = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

