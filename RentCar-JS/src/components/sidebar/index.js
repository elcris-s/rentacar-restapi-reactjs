import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
}
from './SidebarElements'

const sidebar = ({ isOpen, toggle }) => {
    return ( 
    <>
        <SidebarContainer isOpen = { isOpen }
        onClick = { toggle }>
        <Icon onClick = { toggle }>
        <CloseIcon />
        </Icon> 
        <SidebarWrapper>
        <SidebarMenu>
        <SidebarLink to = "about" onClick = { toggle }> Sobre Nosotros </SidebarLink> 
        <SidebarLink to = "discover" onClick = { toggle }> Vehiculos </SidebarLink> 
        <SidebarLink to = "services" onClick = { toggle }> Ubicacion </SidebarLink> 
        <SidebarLink to = "signup" onClick = { toggle }> Registrarse </SidebarLink> 
        </SidebarMenu>

        <SideBtnWrap>
        <SidebarRoute to = "/signin" > Iniciar Sesion </SidebarRoute> 
        <SidebarRoute to = "/register" > Registrarse </SidebarRoute> 
        </SideBtnWrap>

        </SidebarWrapper> 
        </SidebarContainer> 
    </>
    )
}

export default sidebar