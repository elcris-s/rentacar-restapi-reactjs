import React, { useEffect ,useState} from 'react'
import Cliente from '../../components/Cliente/index';
import Header from '../../components/NavBarCliente/Header'

const ClienteHome = () => {

    return ( 
        <>
        <Header />
        <Cliente/>
        </>
    );
}

export default ClienteHome
