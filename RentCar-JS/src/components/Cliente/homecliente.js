import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Cookies from 'universal-cookie';

function Cliente(){
    const [data, setData]= useState([]);
    var [mensaje, setMensaje] = useState([]);
    var [mensaje1, setMensaje1] = useState([]);
    var [foto, setFoto] = useState([]);
    var [boton, setBoton] = useState([]);

    const cookies = new Cookies();

    const baseUrl = "https://localhost:44336/api/Reservas/Usuario";
    const apiUrl = baseUrl+`/${cookies.get('IdUsuario')}`;

    const peticiondatos=async()=>{
        await axios.get(apiUrl)
        .then(response=>{
            if(response.data === 'null'){
                setMensaje('Todavia no ha reservado ninguno vehiculo!')
                setMensaje1('Vea nuestro amplio catalogo y reserve su vehiculo')
                setFoto('https://i.imgur.com/ssaPyVV.png')
                setBoton('RESERVAR')
            }
            else{
                setMensaje('Tiene una Reserva!')
                setMensaje1('')
                setFoto(response.data.imagen)
                setBoton('Ver Reserva')
            }
        })
    }
    let history = useHistory();
    const routeChange = () =>{
        if(mensaje === 'Tiene una Reserva!'){
            history.push('/cliente/reserva')
        }
        else{
            let path = `/cliente/vehiculos`; 
            history.push(path);
        } 
      }
    useEffect(()=>{
        peticiondatos();
        console.log(data)
    }, [])

    return (
        <>
        <div className="py-8 rounded-3xl max-w-auto m-4 text-gray-700 bg shadow">
            <div class="hero bg-gray-100 py-16">
                <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                    <div class="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                       <div class="hero-text col-span-6">
                            <h1 class=" font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight">{mensaje}</h1>
                            <p class="text-gray-800 text-base leading-relaxed mt-8 font-semibold">{mensaje1}</p>
                            <div class="m-3">
                                <button onClick={routeChange} class="mx-32 w-32 bg-white hover:bg-yellow-400 tracking-wide text-gray-800 font-bold rounded border-b-2 border-black hover:border-yellow-500 hover:text-gray-800 shadow-md py-2 px-6 inline-flex items-center">
                                <span className="-mx-2">{boton}</span>
                                </button>
                            </div>
                        </div>
                        <div class="hero-image col-span-6">
                            <img src={foto}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Cliente;