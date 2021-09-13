import React, { useEffect ,useState} from 'react'
import Nosotros from '../../components/Cliente/nosotros';
import Header from '../../components/NavBarCliente/Header'


const ClienteHome = () => {

    return ( 
        <>
        <Header />
        <Nosotros/>
        </>
    );
}

export default ClienteHome
