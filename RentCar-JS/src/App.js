import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';

import clienteHome from './pages/ClientePages/homecliente'
import clienteVehiculos from './pages/ClientePages/cliente'
import detailVehiculos from './pages/ClientePages/detailvehiculo'
import clienteReserva from './pages/ClientePages/reserva'


import 'bootstrap/dist/css/bootstrap.min.css';
import signinPage from './pages/signin';
import registerpage from './pages/register';
import adminHome from './pages/AdminPages/admin'
import adminCategoriaPage from './pages/AdminPages/categorias'
import adminAddCatePage from './pages/AdminPages/categoria/agregarcategoria'
import adminTodasCatePage from './pages/AdminPages/categoria/todascategorias'

import adminFacturasPage from './pages/AdminPages/factura'
import adminAddFacturaPage from './pages/AdminPages/factura/agregarfactura'
import adminTodasFacturaPage from './pages/AdminPages/factura/todasfacturas'

import adminMarcaPage from './pages/AdminPages/marca'
import adminAddMarcaPage from './pages/AdminPages/marca/agregarmarca'
import adminTodasMarcasPage from './pages/AdminPages/marca/todasmarcas'

import adminPagoPage from './pages/AdminPages/pago'
import adminAddPagoPage from './pages/AdminPages/pago/agregarpago'
import adminTodosPagosPage from './pages/AdminPages/pago/todospagos'

import adminReservaPage from './pages/AdminPages/reserva'
import adminAddReservaPage from './pages/AdminPages/reserva/agregarreserva'
import adminTodasReservasPage from './pages/AdminPages/reserva/todasreservas'

import adminRolPage from './pages/AdminPages/rol'
import adminAddRolPage from './pages/AdminPages/rol/agregarrol'
import adminTodosRolesPage from './pages/AdminPages/rol/todosroles'

import adminUsuarioPage from './pages/AdminPages/usuario'
import adminAddUsuarioPage from './pages/AdminPages/usuario/agregarusuario'
import adminTodosUsuariosPage from './pages/AdminPages/usuario/todosusuarios'

import adminVehiculoPage from './pages/AdminPages/vehiculo'
import adminAddVehiculoPage from './pages/AdminPages/vehiculo/agregarvehiculo'
import adminTodosVehiculosPage from './pages/AdminPages/vehiculo/todosvehiculos'

import Factura from './pages/factura'
import Extra from './pages/ClientePages/extras'
import Nosotros from './pages/ClientePages/nosotros'


function App() {
    return(
      <Router>
        <Switch>
          <Route path ='/' component={Home} exact/>

          <Route path ='/factura' component={Factura} exact/>
          <Route path ='/cliente/extras' component={Extra} exact/>
          <Route path ='/cliente/nosotros' component={Nosotros} exact/>

          <Route path ='/signin' component={signinPage} exact/>
          <Route path ='/register' component={registerpage} exact/>
          <Route path ='/cliente' component={clienteHome} exact/>
          <Route path ='/cliente/vehiculos' component={clienteVehiculos} exact/>
          <Route path ='/cliente/vehiculos/:id' component={detailVehiculos} exact/>
          <Route path ='/cliente/reserva' component={clienteReserva} exact/>
          
          <Route path ='/admin' component={adminHome} exact/>
          <Route path ='/admin/categoria' component={adminCategoriaPage} exact/>
          <Route path ='/admin/categoria/agregar' component={adminAddCatePage} exact/>
          <Route path ='/admin/categoria/all' component={adminTodasCatePage} exact/>

          <Route path ='/admin/facturas' component={adminFacturasPage} exact/>
          <Route path ='/admin/facturas/agregar' component={adminAddFacturaPage} exact/>
          <Route path ='/admin/facturas/all' component={adminTodasFacturaPage} exact/>

          <Route path ='/admin/marcas' component={adminMarcaPage} exact/>
          <Route path ='/admin/marcas/agregar' component={adminAddMarcaPage} exact/>
          <Route path ='/admin/marcas/all' component={adminTodasMarcasPage} exact/>

          <Route path ='/admin/pagos' component={adminPagoPage} exact/>
          <Route path ='/admin/pagos/agregar' component={adminAddPagoPage} exact/>
          <Route path ='/admin/pagos/all' component={adminTodosPagosPage} exact/>

          <Route path ='/admin/reservas' component={adminReservaPage} exact/>
          <Route path ='/admin/reservas/agregar' component={adminAddReservaPage} exact/>
          <Route path ='/admin/reservas/all' component={adminTodasReservasPage} exact/>

          <Route path ='/admin/roles' component={adminRolPage} exact/>
          <Route path ='/admin/roles/agregar' component={adminAddRolPage} exact/>
          <Route path ='/admin/roles/all' component={adminTodosRolesPage} exact/>

          <Route path ='/admin/usuarios' component={adminUsuarioPage} exact/>
          <Route path ='/admin/usuarios/agregar' component={adminAddUsuarioPage} exact/>
          <Route path ='/admin/usuarios/all' component={adminTodosUsuariosPage} exact/>

          <Route path ='/admin/vehiculos' component={adminVehiculoPage} exact/>
          <Route path ='/admin/vehiculos/agregar' component={adminAddVehiculoPage} exact/>
          <Route path ='/admin/vehiculos/all' component={adminTodosVehiculosPage} exact/>
        </Switch>
      </Router>
    );
}

export default App;