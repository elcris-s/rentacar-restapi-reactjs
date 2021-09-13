import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinksTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRight,
    SocialIcons,
    SocialIconLink
}
from './FooterElements'

const Footer = () => {
    return ( <
        FooterContainer >
        <
        FooterWrap >
        <
        FooterLinksContainer >
        <
        FooterLinksWrapper >
        <
        FooterLinkItems >
        <
        FooterLinksTitle > Sobre Nosotros < /FooterLinksTitle> <
        FooterLink to = "/signin" > Como funciona < /FooterLink> <
        FooterLink to = "/signin" > Autos < /FooterLink> <
        FooterLink to = "/signin" > Inversores < /FooterLink> <
        FooterLink to = "/signin" > Termino de servicios < /FooterLink> <
        /FooterLinkItems>

        <
        FooterLinkItems >
        <
        FooterLinksTitle > Sobre Nosotros < /FooterLinksTitle> <
        FooterLink to = "/signin" > Como funciona < /FooterLink> <
        FooterLink to = "/signin" > Autos < /FooterLink> <
        FooterLink to = "/signin" > Inversores < /FooterLink> <
        FooterLink to = "/signin" > Termino de servicios < /FooterLink> <
        /FooterLinkItems>

        <
        FooterLinkItems >
        <
        FooterLinksTitle > Sobre Nosotros < /FooterLinksTitle> <
        FooterLink to = "/signin" > Como funciona < /FooterLink> <
        FooterLink to = "/signin" > Autos < /FooterLink> <
        FooterLink to = "/signin" > Inversores < /FooterLink> <
        FooterLink to = "/signin" > Termino de servicios < /FooterLink> <
        /FooterLinkItems>

        <
        FooterLinkItems >
        <
        FooterLinksTitle > Redes Sociales < /FooterLinksTitle> <
        FooterLink to = "/" > Instagram < /FooterLink> <
        FooterLink to = "/" > Facebook < /FooterLink> <
        FooterLink to = "/" > Youtube < /FooterLink> <
        FooterLink to = "/" > Twitter < /FooterLink> <
        /FooterLinkItems> <
        /FooterLinksWrapper> <
        /FooterLinksContainer> <
        SocialMedia >
        <
        SocialMediaWrap >
        <
        SocialLogo to = '/' >
        Rentacar <
        /SocialLogo> <
        WebsiteRight > Rentacar { new Date().getFullYear() }
        Derechos reservados. < /WebsiteRight>

        <
        SocialIcons >
        <
        SocialIconLink href = "/"
        target = "_blank" >
        <
        FaFacebook / >

        <
        /SocialIconLink>

        <
        SocialIconLink href = "/"
        target = "_blank" >
        <
        FaInstagram / >
        <
        /SocialIconLink>

        <
        SocialIconLink href = "/"
        target = "_blank" >
        <
        FaYoutube / >
        <
        /SocialIconLink> <
        /SocialIcons> <
        /SocialMediaWrap> <
        /SocialMedia>

        <
        /FooterWrap> <
        /FooterContainer>
    )
}

export default Footer