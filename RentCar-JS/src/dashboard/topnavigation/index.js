import { useToggle } from '../provider/context';
import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import Cookies from 'universal-cookie';

export default function TopNavigation() {

  const cookies = new Cookies();
  let history = useHistory();

  const cerrarSesion=()=>{
      cookies.remove('id', {path: '/'});
      cookies.remove('IdUsuario', {path: '/'});
      cookies.remove('IdRol', {path: '/'});
      cookies.remove('Usuario', {path: '/'});
      cookies.remove('Contraseña', {path: '/'});
      history.push('/signin');
  }

  // useEffect(()=>{
  //     if(!cookies.get('id')){
  //         history.push('/signin');
  //     }
  //       },[]);

  const { toggle } = useToggle();
  return (
    <header className="bg-white h-16 items-center relative shadow w-full z-10 md:h-20">
      <div className="flex flex-center flex-col h-full justify-center mx-auto px-3 relative">
        <div className="flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
          <div className="flex left-0 relative w-3/4">
            <div className="flex group h-full items-center relative w-12">
              <button
                type="button"
                aria-expanded="false"
                aria-label="Toggle sidenav"
                onClick={toggle}
                className="text-4xl text-black focus:outline-none"
              >
                &#8801;
              </button>
            </div>
          </div>
          <div className="flex items-center justify-end ml-5 p-1 relative w-full sm:mr-0 sm:right-auto">
          <button className="btn btn-danger" onClick={()=>cerrarSesion()}>Cerrar Sesión</button>
          </div>
        </div>
      </div>
    </header>
  );
}
