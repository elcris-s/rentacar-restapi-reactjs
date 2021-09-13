import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import Cookies from 'universal-cookie';

const AgregarCategoria = () => {
    let history = useHistory();
    const [form, setForm] = useState({
        NombreCategoria: '',
        Estatus: '',
    });
  
    const handleChange= e => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }
  
    const iniciarSesion=async()=>{
      fetch('https://localhost:44336/api/Categorias', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          'IdCategoria': 0,
          'NombreCategoria': form.NombreCategoria,
          'Estatus': form.Estatus,
       }) // body data type must match "Content-Type" header
      })
      .then(response => response.json())
      .then(data => 
        {
          
        })
        history.push('/admin/categoria')
    }
    return (
        <>
        <div className="py-8 rounded-3xl max-w-full text-gray-700 bg-white shadow">
            <form >
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Nombre de la Categoria
                        </label>
                        <input name='NombreCategoria' onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"></input>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Estatus Categoria
                        </label>
                        <input name='Estatus' onChange={handleChange} maxLength='1' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"></input>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <button type='submit' onClick={()=>iniciarSesion()} className="bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded">
                        Agregar
                    </button>
                </div>
           </form>
        </div>
        </>
    );
}

export default AgregarCategoria;