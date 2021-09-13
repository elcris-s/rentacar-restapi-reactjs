import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import Cookies from 'universal-cookie';
import Video from '../../videos/admin.mp4'

const Adminbase = () => {

    return (
        <>
        <div className="py-8 rounded-3xl max-w-full text-gray-700 bg-white shadow">
            <h2 className="text-3xl text-center font-medium mb-10 pl-3 md:pl-6">¡Bienvenido Administrador!</h2>
            <section className="px-3 md:px-8 my-16">
                <video className="w-8/12 md:w-3/12 mx-auto md:mx-96" autoPlay loop muted src={Video} type='video/mp4'/>
            </section>
        </div>
        </>
    );
}

export default Adminbase;
