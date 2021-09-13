import React from 'react';
import {useHistory} from 'react-router-dom'
import Cookies from 'universal-cookie';
import Video from '../../../videos/categoria.mp4'

const CategoriaBase = () => {

    return (
        <>
        <div className="py-8 rounded-3xl max-w-full text-gray-700 bg-white shadow">
            <h2 className="text-3xl text-center font-medium mb-10 pl-3 md:pl-6">¡Seccion de Categorias!</h2>
            <section className="px-3 md:px-8 my-16">
                <video className="w-8/12 md:w-3/12 mx-auto md:mx-96" autoPlay loop muted src={Video} type='video/mp4'/>
                <div className="w-full flex justify-center items-center">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                        <a href="/admin/categoria/agregar">Agregar Categoria</a>
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                        <a href="/admin/categoria/all">Mostrar todas las Categorias</a>
                    </button>
                </div>        
            </section>
        </div>
        </>
    );
}

export default CategoriaBase;