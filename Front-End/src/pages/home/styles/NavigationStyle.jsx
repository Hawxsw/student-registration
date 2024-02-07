import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  width: ${props => props.isOpen ? '250px' : '75px'};
  position: fixed;
  top: 0;
  left: 0;
  transition: width 0.3s ease-in-out;
  height: 100vh;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-right: ${({ theme }) => theme.borderRight};
    @media (min-width: 768px) {
    width: ${props => props.isOpen ? '250px' : '100px'}; 
  }
`;


export const LogoSpace = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
`;

export const ToggleButton = styled.div.attrs(({ isOpen, ...rest }) => rest)`
  position: absolute;
  top: 20px;
  left: ${props => props.isOpen ? 'calc(100% - 35px)' : '75px'};
  transition: left 0.3s ease-in-out;
  cursor: pointer;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};

  @media (min-width: 768px) {
    left: ${props => props.isOpen ? 'calc(100% - 35px)' : '90px'};
  }
`;


export const StyledLink = styled(Link)`
color: ${({ theme }) => theme.text};
text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 15px 20px;
  &:hover {
    color: #007bff;
  }
`;


export const IconOnly = styled.div`
color: ${({ theme }) => theme.text};
display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  visibility: ${props => props.isOpen ? 'hidden' : 'visible'};
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
`;

const NavContainerWithPropsFiltered = styled(NavContainer).attrs(props => ({
  ...props,
  isOpen: undefined,
}))``;
