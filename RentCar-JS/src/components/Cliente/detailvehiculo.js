import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'
import {Modal} from 'react-bootstrap'
import Video from '../../videos/payment.mp4'
import Cookies from 'universal-cookie'

function DetailVehiculo(){
    const {id} = useParams();

    const [form, setForm] = useState({
        FechaInicioReserva: '',
        FechaFinalReserva: ''
    });
  
    const handleChange= e => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    let cookies = new Cookies();
    var [nombVehi, setNombVehi] = useState([]);
    var [desc, setDesc] = useState([]);
    var [precio, setPrecio] = useState([]);
    var [foto, setFoto] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const baseUrl = "https://localhost:44336/api/Vehiculoes";
    const apiUrl = baseUrl+`/${id}`;

    const peticiondatos=async()=>{
        await axios.get(apiUrl)
        .then(response=>{
            setNombVehi(response.data.NombreVehiculo)
            setDesc(response.data.Descripcion)
            setPrecio(response.data.CostoReservaVehiculo)
            setFoto(response.data.imagen)
        })
    }
    let history = useHistory();
    const hacerReserva=async()=>{
        fetch('https://localhost:44336/api/Reservas', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            "IdReserva": 1,
            "IdUsuario": cookies.get('IdUsuario'),
            "IdVehiculo": id,
            "FechaInicioReserva": form.FechaInicioReserva,
            "FechaFinalReserva": form.FechaFinalReserva,
            "CostoReserva": precio
          
         }) // body data type must match "Content-Type" header
        })
        .then(response => response.json())
        .then(data => 
          {
            history.push('/cliente/reserva')
          })
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
                                    <span class="text-2xl font-bold leading-none align-baseline">US${precio}</span>
                                </div>
                                <div class="my-1 align-bottom mr-5">
                                    <span class="font-bold leading-none align-baseline">Fecha Inicio de Reserva: </span>
                                    <input name="FechaInicioReserva" onChange={handleChange} type="date"></input>
                                </div>
                                <div class="my-1 align-bottom mr-5">
                                    <span class="font-bold leading-none align-baseline">Fecha Final de Reserva: </span>
                                    <input name="FechaFinalReserva" onChange={handleChange} type="date"></input>
                                </div>
                                <div class="my-2 inline-block align-bottom">
                                    <button onClick={handleShow} class="bg-yellow-500 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                                        <i class="mdi mdi-cart -ml-2 mr-2"></i>
                                    RESERVAR
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Condiciones de Reserva</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div class="container flex mx-auto w-full items-center justify-center">                      
                        <ul class="flex flex-col p-4">
                                <li class="border-gray-400 flex flex-row mb-2">
                                <div class="select-none cursor-pointer rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                    <div class="flex flex-col rounded-md w-10 h-10 justify-center items-center mr-4">✔</div>
                                    <div class="flex-1 pl-1 mr-16">
                                    <div class="font-medium">Tratar bien el carro</div>
                                    </div>
                                </div>
                                </li>
                                <li class="border-gray-400 flex flex-row mb-2">
                                <div class="select-none cursor-pointer rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                    <div class="flex flex-col rounded-md w-10 h-10 justify-center items-center mr-4">✔</div>
                                    <div class="flex-1 pl-1 mr-16">
                                    <div class="font-medium">Darnos promocion por Instagram o su red social preferida</div>
                                    </div>
                                </div>
                                </li>
                                <li class="border-gray-400 flex flex-row mb-2">
                                <div class="select-none cursor-pointer rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                    <div class="flex flex-col rounded-md w-10 h-10 justify-center items-center mr-4">✔</div>
                                    <div class="flex-1 pl-1 mr-16">
                                    <div class="font-medium">Si la reserva del vehiculo es para un video musical, por lo menos una toma del video debe ser grabada en nuestras instalaciones</div>
                                    </div>
                                </div>
                                </li>
                                <li class="border-gray-400 flex flex-row mb-2">
                                <div class="select-none cursor-pointer rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                    <div class="flex flex-col rounded-md w-10 h-10 justify-center items-center mr-4">✔</div>
                                    <div class="flex-1 pl-1 mr-16">
                                    <div class="font-medium">Aceptar que vivimos en una simulacion</div>
                                    </div>
                                </div>
                                </li>
                                <li class="border-gray-400 flex flex-row mb-2">
                                <div class="select-none cursor-pointer rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                    <div class="flex flex-col rounded-md w-10 h-10 justify-center items-center mr-4">✔</div>
                                    <div class="flex-1 pl-1 mr-16">
                                    <div class="font-medium">Aceptar que Emil Lopez es nuestro lider</div>
                                    </div>
                                </div>
                                </li>
                                <li class="border-gray-400 flex flex-row mb-2">
                                <div class="select-none cursor-pointer rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                    <div class="flex flex-col rounded-md w-10 h-10 justify-center items-center mr-4">✔</div>
                                    <div class="flex-1 pl-1 mr-16">
                                    <div class="font-medium">Cualquier daño que reciba el vehiculo, usted lo paga</div>
                                    </div>
                                </div>
                                </li>
                                <li class="border-gray-400 flex flex-row mb-2">
                                <div class="select-none cursor-pointer rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                    <div class="flex flex-col rounded-md w-10 h-10 justify-center items-center mr-4">✔</div>
                                    <div class="flex-1 pl-1 mr-16">
                                    <div class="font-medium">No abusar del volumen de los altavoces cuando suene una cancion de Bad Bunny ie ie ie</div>
                                    </div>
                                </div>
                                </li>
                            </ul>                           
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={handleClose} class="bg-white hover:bg-gray-400 text-black hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                            Cancelar
                        </button>
                        <button onClick={handleShow1} class="bg-yellow-500 text-dark rounded-full px-10 py-2 font-semibold">
                            Aceptar Condiciones
                        </button>
                    </Modal.Footer>
                </Modal>

                <Modal onShow={handleClose} show={show1} onHide={handleClose1}>
                    <Modal.Body>
                    <div class=" p-5 rounded overflow-visible"> <span class="text-xl font-bold text-black block pb-3">Detalles de la tarjeta</span>
                            <div class="flex justify-center flex-col pt-3"> <label class="text-xl text-black ">Nombre en la tarjeta</label> <input type="text" class="focus:outline-none w-full h-6 text-black text-sm border-b border-gray-600 py-4"></input> </div>
                            <div class="flex justify-center flex-col pt-3"> <label class="text-xl text-black ">Numero de la tarjeta</label> <input type="text" class="focus:outline-none w-full h-6 text-black text-sm border-b border-gray-600 py-4" ></input> </div>
                            <div class="grid grid-cols-3 gap-2 pt-2 mb-3">
                                <div class="col-span-2 "> <label class="text-xl text-dark">Fecha de Expiracion</label>
                                    <div class="grid grid-cols-2 gap-2"> <input type="text" class="focus:outline-none w-full h-6 text-black text-sm border-b border-gray-600 py-4" placeholder="mm"></input> <input type="text" class="focus:outline-none w-full h-6 text-black text-sm border-b border-gray-600 py-4" placeholder="yy"></input> </div>
                                </div>
                                <div class=""> <label class="text-xl text-dark">CVV</label> <input type="text" class="focus:outline-none w-full h-6 text-black text-sm border-b border-gray-600 py-4" placeholder="XXX"></input> </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={handleClose1} class="bg-white hover:bg-gray-400 text-black hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                            Cancelar
                        </button>
                        <button onClick={handleShow2} class="bg-yellow-500 text-dark rounded-full px-10 py-2 font-semibold">
                            Pagar Reserva
                        </button>
                    </Modal.Footer>
                </Modal>
                <Modal onShow={handleClose1} show={show2} onHide={handleClose2}>
                    <Modal.Body>
                    <div className="py-8 rounded-3xl max-w-auto m-4 text-gray-700 bg shadow">
                        <video onEnded={hacerReserva} className="my-full mx-auto md:mx-96" autoPlay muted src={Video} type='video/mp4'/>
                        <h3 className="text-center">Procesando pago...</h3>
                    </div>
                    </Modal.Body>
                </Modal> 
            </div>
        </>
    )
}
export default DetailVehiculo;