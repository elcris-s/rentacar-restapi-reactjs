import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Cookies from 'universal-cookie';

const Register = () => { 
  let history = useHistory();
  const baseUrl = "https://localhost:44336/api/UserLogins";
  const cookies = new Cookies();

  const [form, setForm] = useState({
      IdUsuario: '',
      NombreUsuario: '',
      ApellidoUsuario: '',
      FechaNacimiento: '',
      TelefonoUsuario: '',
      Usuario: '',
      Contraseña: '',
  });

  const handleChange= e => {
      const {name, value} = e.target;
      setForm({
          ...form,
          [name]: value
      });
  }

  const iniciarSesion=async()=>{
    fetch('https://localhost:44336/api/Usuarios', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'Usuario': {IdUsuario: form.IdUsuario, 
        NombreUsuario : form.NombreUsuario,
        ApellidoUsuario: form.ApellidoUsuario,
        FechaNacimiento: form.FechaNacimiento,
        TelefonoUsuario: form.TelefonoUsuario},
        'UserLogin':{
          'IdLogin': 0,
          'IdUsuario': form.IdUsuario,
          'IdRol': 3,
          Usuario: form.Usuario,
          Contraseña: form.Contraseña
        }
     }) // body data type must match "Content-Type" header
    })
    .then(response => response.json())
    .then(data => 
      {
        history.push('/signin')
      })
  }
    return ( 
      <> 
      <> 
      <div class="flex h-screen bg-yellow-200 items-center justify-center">
        <div class="grid bg-black rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
            <div class="grid grid-cols-1">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Cedula</label>
              <input name='IdUsuario' onChange={handleChange} class="py-2 px-3 rounded-lg border-2 border-white mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" type="text" placeholder="Input 2" />
            </div>
            <div class="grid grid-cols-1">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Nombre</label>
              <input name='NombreUsuario' onChange={handleChange} class="py-2 px-3 rounded-lg border-2 border-white mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" type="text" placeholder="Input 3" />
            </div>
            <div class="grid grid-cols-1">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Apellido</label>
              <input name='ApellidoUsuario' onChange={handleChange} class="py-2 px-3 rounded-lg border-2 border-white mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" type="text" placeholder="Input 2" />
            </div>
            <div class="grid grid-cols-1">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Fecha Nacimiento</label>
              <input name='FechaNacimiento' onChange={handleChange} class="py-2 px-3 rounded-lg border-2 border-white mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" type="date"/>
            </div>
          </div>
      
          <div class="grid grid-cols-1 mt-5 mx-7">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Telefono</label>
            <input onChange={handleChange} name='TelefonoUsuario' class="py-2 px-3 rounded-lg border-2 border-white mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" type="tel"/>

          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
            <div class="grid grid-cols-1">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Usuario</label>
              <input onChange={handleChange} name='Usuario' class="py-2 px-3 rounded-lg border-2 border-white mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" type="text"/>
            </div>
            <div class="grid grid-cols-1">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Contraseña</label>
              <input onChange={handleChange} name='Contraseña' class="py-2 px-3 rounded-lg border-2 border-white mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" type="password" />
            </div>
          </div>

          <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
            <button type='submit' onClick={()=>iniciarSesion()} class='w-auto bg-yellow-400 hover:bg-yellow-500 rounded-lg shadow-xl font-medium text-black px-4 py-2'>Registrar</button>
          </div>

        </div>
</div>
     </>   
     </> 
    ) 
} 
 
export default Register