import React, {useState, useEffect} from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'

function Factura(){
    var [nombVehi, setNombVehi] = useState([]);
    var [desc, setDesc] = useState([]);
    var [precio, setPrecio] = useState([]);
    var [foto, setFoto] = useState([]);
    var [fechainic, setFechainic] = useState([]);
    var [fechafinal, setFechaFinal] = useState([]);

    const cookies = new Cookies();
    const baseUrl = "https://localhost:44336/api/Reservas";
    const apiUrl = baseUrl+`/${cookies.get('IdUsuario')}`;

    const peticiondatos=async()=>{
        await axios.get(apiUrl)
        .then(response=>{
            setNombVehi(response.data.vehiculo.NombreVehiculo)
            setDesc(response.data.vehiculo.Descripcion)
            setPrecio(response.data.vehiculo.CostoReservaVehiculo)
            setFoto(response.data.vehiculo.imagen)
            setFechainic(response.data.reserva.FechaInicioReserva)
            setFechaFinal(response.data.reserva.FechaFinalReserva)
        })
    }
    
    useEffect(()=>{
        peticiondatos();
    }, [])
    return ( 
        <> 
        <section >
            <div class="container px-5 py-12 mx-auto lg:px-20">
                <div class="flex flex-col flex-wrap pb-6 mb-12 text-dark ">
                    <h1 class="mb-12 text-3xl font-medium text-dark">
                            Factura Reserva de Vehiculo
                        </h1>
                        <p class="text-base leading-relaxed">
                         Fecha de Impresion {new Date(fechainic).toLocaleDateString()}</p>
                </div>
                <div class="flex flex-wrap items-end justify-start w-full transition duration-500 ease-in-out transform bg-black border-2 border-gray-600 rounded-lg hover:border-white "></div>
                <div class="w-full">
                    <div class="flex-col h-full p-8 ">
                        <h2 class="mb-4 font-bold tracking-widest text-dark uppercase title-font">
                                Detalles
                        </h2>
                        <p class="flex items-center mb-2 text-lg font-normal tracking-wide text-dark">
                            <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-dark rounded-full bg-blue-1300">
                                ✔
                            </span><b>Vehiculo Reservado: </b> . {nombVehi}
                        </p>
                        <p class="flex items-center mb-2 text-lg font-normal tracking-wide text-dark">
                            <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-dark rounded-full bg-blue-1300">
                                ✔
                            </span><b>Fecha Inicio de Reserva: </b> . {new Date(fechainic).toLocaleDateString()}
                        </p>
                        <p class="flex items-center mb-2 text-lg font-normal tracking-wide text-dark">
                            <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-dark rounded-full bg-blue-1300">
                                ✔
                            </span><b>Fecha Final de Reserva: </b> . {new Date(fechafinal).toLocaleDateString()}
                        </p>  
                        <p class="flex items-center mb-2 text-lg font-normal tracking-wide text-dark">
                            <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-dark rounded-full bg-blue-1300">
                                ✔
                            </span><b>Costo Reserva: </b> . US${precio}
                        </p>      
                    </div>
                </div>
            </div>
        </section>
        </> 
    ) 
}

export default Factura

