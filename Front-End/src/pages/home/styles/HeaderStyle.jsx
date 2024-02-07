import styled from 'styled-components';
import { FiBell } from 'react-icons/fi';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
  width: 100%;

  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-direction: row-reverse;
    padding: 10px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

export const NotificationIcon = styled(FiBell)`
  margin-right: 20px;
  margin-left: 20px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  @media (max-width: 768px) {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 10px;
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

export const DropdownMenu = styled.ul`
    position: absolute;
    top: 100%;
    right: 0;
    background-color: ${({ theme }) => theme.body};
    border: ${({ theme }) => theme.border2};
    border-radius: 4px;
    padding: 5px 0;
    margin-top: 5px;
    list-style: none;
    width: 100px;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
    transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-10px)')};
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
    z-index: 1000;

    li {
        padding: 10px;
        cursor: pointer;
        &:hover {
          background-color: ${({ theme }) => theme.body};
        }
    }
`;

export const StyledElement = styled.div`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
  cursor: pointer;
`;