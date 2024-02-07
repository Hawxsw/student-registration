import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderContainer, NotificationIcon, Profile, Avatar, RightSection, DropdownMenu, StyledElement } from './styles/HeaderStyle';
import ToggleThemeButton from './utils/ToggleThemeButton';

function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        navigate('/');
    };

    const toggleDropdown = () => {
        setShowDropdown(current => !current);
    };

    return (
        <HeaderContainer>
            <RightSection>
                <ToggleThemeButton />
                <NotificationIcon size="24" />
                <Profile onClick={toggleDropdown}>
                    <Avatar src="/images.png" alt="Perfil" />
                    {showDropdown && (
                        <DropdownMenu show={showDropdown}>
                            <StyledElement onClick={handleLogout} >Sair</StyledElement>
                        </DropdownMenu>
                    )}
                </Profile>
            </RightSection>
        </HeaderContainer>
    );
}

export default Header;