import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import axios from 'axios'

function Cliente(){
    const [data, setData]= useState([]);

    const baseUrl = "https://localhost:44336/api/Vehiculoes";

    const peticiondatos=async()=>{
        await axios.get(baseUrl)
        .then(response=>{
            setData(response.data)
        })
    }

    useEffect(()=>{
        peticiondatos();
    }, [])

    return (
        <>
        <div className="py-8 rounded-3xl max-w-auto m-4 text-gray-700 bg shadow">
            {
                data.map(x => (
                    <div class="ml-12 mr-1 max-w-xs bg-white inline-block shadow rounded-lg overflow-hidden my-10">
                        <div class="px-4 py-2">
                            <h1 class="text-gray-900 font-bold text-2xl uppercase">{x.NombreVehiculo}</h1>
                        </div>

                    <img class="h-56 w-full object-cover mt-2" src={x.imagen} alt={x.NombreVehiculo}></img>
                    <div class="flex items-center justify-between px-4 py-2 bg-yellow-500">
                        <h1 class="text-white font-bold text-xl">US${x.CostoReservaVehiculo}</h1>
                        <Link to={`/cliente/vehiculos/${x.IdVehiculo}`} class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Reservar</Link>
                    </div>
                    </div>
                ))
            }
        </div>
        </>
    )
}
export default Cliente;