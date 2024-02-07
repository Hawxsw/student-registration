import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineHome, AiOutlineUserAdd, AiOutlineTeam } from 'react-icons/ai';

import { NavContainer, StyledLink, ToggleButton, IconOnly, LogoSpace } from './styles/NavigationStyle';
import { useLayout } from '../context/LayoutContext';

function Navigation() {
    const navigate = useNavigate();
    const { navOpen, toggleNav } = useLayout();



    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <NavContainer style={{ width: navOpen ? '250px' : '100px' }}>
            <LogoSpace>
            </LogoSpace>
            <ToggleButton onClick={() => toggleNav()} style={{ left: navOpen ? '235px' : '90px' }}>
                {navOpen ? <AiOutlineArrowLeft size={24} /> : <AiOutlineArrowRight size={24} />}
            </ToggleButton>
            {!navOpen && (
                <>
                    <IconOnly onClick={() => navigateTo('/dashboard')}><AiOutlineHome size={24} /></IconOnly>
                    <IconOnly onClick={() => navigateTo('/alunos')}><AiOutlineUserAdd size={24} /></IconOnly>
                    <IconOnly onClick={() => navigateTo('/admins')}><AiOutlineTeam size={24} /></IconOnly>
                </>
            )}
            {navOpen && (
                <>
                    <StyledLink to="/dashboard"><AiOutlineHome size={24} /> Home</StyledLink>
                    <StyledLink to="/alunos"><AiOutlineUserAdd size={24} /> Cadastro de Alunos</StyledLink>
                    <StyledLink to="/admins"><AiOutlineTeam size={24} /> Cadastro de Administradores</StyledLink>
                </>
            )}
        </NavContainer>
    );
}

export default Navigation;