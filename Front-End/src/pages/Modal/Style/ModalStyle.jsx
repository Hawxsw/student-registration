import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: opacity 0.4s ease, visibility 0s linear ${props => props.isOpen ? '0s' : '0.4s'};
  z-index: 10;
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.background}
  color: ${({ theme }) => theme.text};
  padding: 30px;
  border-radius: 8px; 
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); 
  width: auto;
  max-width: 600px; 
  margin: 20px;
  box-sizing: border-box;
  position: relative; 

  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-size: 16px;

  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-20px)'};
  transition: transform 0.4s ease-out;

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 15px;
  }

  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
`;

