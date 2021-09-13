import React, { useEffect ,useState} from 'react'
import Extras from '../../components/Cliente/extras';
import Header from '../../components/NavBarCliente/Header'
import { HomeObjOne, HomeObjTwo, HomeObjThree } from '../../components/Cliente/Extras/Data'


const ClienteHome = () => {

    return ( 
        <>
        <Header />
        <Extras {...HomeObjOne }/>
        <Extras {...HomeObjTwo }/>
        <Extras {...HomeObjThree}/>
        </>
    );
}

export default ClienteHome
