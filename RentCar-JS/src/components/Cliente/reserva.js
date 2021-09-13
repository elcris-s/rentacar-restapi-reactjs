import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {Modal} from 'react-bootstrap'
import Video from '../../videos/si.mp4'
import Cookies from 'universal-cookie'

function DetailVehiculo(){
    var [nombVehi, setNombVehi] = useState([]);
    var [desc, setDesc] = useState([]);
    var [precio, setPrecio] = useState([]);
    var [foto, setFoto] = useState([]);
    var [fechainic, setFechainic] = useState([]);
    var [fechafinal, setFechaFinal] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
    let history = useHistory();
    async function deletePost() {
        await fetch(apiUrl, { method: 'DELETE' });
        history.push('/cliente')
    }
    
    useEffect(()=>{
        peticiondatos();
    }, [])

    return (
        <>
        <style>@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);</style>
            <div class="min-w-screen min-h-screen bg-black flex items-center p-5 lg:p-10 overflow-hidden relative">
                <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div class="md:flex items-center -mx-10">
                        <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <div class="relative">
                                <img src={foto} class="w-full relative z-10" alt=""></img>
                                    <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 px-10">
                            <div class="mb-10">
                                <h1 class="font-bold uppercase text-2xl mb-5">{nombVehi}</h1>
                                <p class="text-sm">{desc}</p>
                            </div>
                            <div>
                                <div class="inline-block align-bottom mr-5">
                                    <span class="text-2xl font-bold leading-none align-baseline">Costo de la Reserva: US${precio}</span>
                                </div>
                                <div class="align-bottom mr-5">
                                    <span class="text-2xl font-bold leading-none align-baseline">Fecha Inicio: {new Date(fechainic).toLocaleDateString()}</span>
                                </div>
                                <div class="inline-block align-bottom mr-5">
                                    <span class="text-2xl font-bold leading-none align-baseline">Fecha Final: {new Date(fechafinal).toLocaleDateString()}</span>
                                </div>
                                <div class="inline-block align-bottom">
                                    <button onClick={handleShow} class="bg-red-500 opacity-75 hover:opacity-100 text-dark hover:text-dark rounded-full px-10 py-2 font-semibold">
                                        <i class="mdi mdi-cart -ml-2 mr-2"></i>
                                    Entregar vehiculo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                    <div className="py-8 rounded-3xl max-w-auto m-4 text-gray-700 bg shadow">
                        <video onEnded={deletePost} className="my-full mx-auto md:mx-96" autoPlay muted src={Video} type='video/mp4'/>
                        <h3 className="text-center">Procesando pago...</h3>
                    </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}
export default DetailVehiculo;