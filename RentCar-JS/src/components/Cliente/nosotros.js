import React from 'react'
import IMG2 from '../../images/1.svg'
import IMG1 from '../../images/2.svg'
import IMG3 from '../../images/3.svg'

function Nosotros(){

    return (
        <>
        <div class="bg-black py-14">
            <h3 class="text-2xl tracking-widest text-white text-center">¿Quienes Somos?</h3>
            <h1 class="mt-8 text-center text-5xl text-yellow-400 font-bold">JC Rent Car</h1>

            <div class="md:flex md:justify-center md:space-x-8 md:px-14">
            <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                <div class="w-sm">
                <img class="my-12 w-64" src={IMG1} alt="" />
                <div class="mt-4 text-black text-center">
                    <h1 class="text-xl font-bold">Calidad</h1>
                    <p class="mt-4 text-gray-600">Lo carro de nosotro son la real pampara... moderno y ecologico socio</p>
                </div>
                </div>
            </div>

            <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                <div class="w-sm">
                <img class="my-8 w-64" src={IMG2} alt="" />
                <div class="mt-4 text-black text-center">
                    <h1 class="text-xl font-bold">#1 en el mercado</h1>
                    <p class="mt-4 text-gray-600">Lo numero son lo que hablan yaaaaaa</p>
                </div>
                </div>
            </div>

            <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                <div class="w-sm">
                <img class="my-12 w-64" src={IMG3} alt="" />
                <div class="mt-4 text-black text-center">
                    <h1 class="text-xl font-bold">EMIL EL LIDEL</h1>
                    <p class="mt-4 text-gray-600">No hay mucho que deci, el lidel nos representa</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Nosotros;