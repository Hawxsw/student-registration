import styled, { css } from 'styled-components';
import { FiFilter } from 'react-icons/fi';


export const Container = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 20px auto;
  @media (max-width: 600px) {
    padding: 10px;
    margin: 10px;
  }
`;


const mobileStyle = css`
  flex-direction: column;
  align-items: stretch;

  & > *:not(:first-child) {
    margin-top: 10px;
  }
`;


export const InputFiltro = styled.input`
  flex: 1;
  padding: 10px;
  margin-left: 10px;
  border: ${({ theme }) => theme.border2};
  border-radius: 5px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export const BotaoAdicionar = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 600px) {
    margin-left: auto;
  }
`;

export const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto; 
  z-index: 5;
  background-color: ${({ theme }) => theme.body};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;

  th, td {
    text-align: left;
    padding: 12px;
    border-bottom: ${({ theme }) => theme.borderBottom};
  }

  th {
    background-color: #007bff;
    color: white;
  }

  tr:hover {
    background-color: ${({ theme }) => theme.body};
  }

  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.body};
  }

  @media (max-width: 600px) {
    box-shadow: none;
    border-radius: 0;

    th, td {
      padding: 8px;
    }
  }
`;


export const FiltroContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    ${mobileStyle}
  }
`;

export const BotaoIconeFiltro = styled.button`
display: inline-flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
background-color: #007bff;
color: white;
border: none;
border-radius: 50%;
cursor: pointer;
font-size: 20px;
margin-left: 5px;

&:hover {
  background-color: #0056b3;
}
`;

export const IconeFiltro = styled(FiFilter)`
  align-self: center;
  color: #fff;
`;

export const FiltroWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 10px;
  
  @media (max-width: 600px) {
    width: 100%;
    flex-wrap: wrap;
    gap: 5px;
    margin-left: 0;
  }
`;

export const SeletorFiltro = styled.select`
  padding: 8px;
  border-radius: 5px;
  border: ${({ theme }) => theme.border2};
  background-color: ${({ theme }) => theme.body};
  &:focus {
    outline: none;
    border-color: #007bff;
  }
  @media (max-width: 600px) {
    flex-grow: 1;
  }
`;

export const InputFiltroEstilizado = styled.input`
  padding: 5px 10px;
  border-radius: 5px;
  border: ${({ theme }) => theme.border2};
    flex-grow: 1; 
  &:focus {
    outline: none;
    border-color: #007bff; 
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
