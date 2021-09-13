import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import '../../../index.css'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

const columnas=[
    {
        title: 'Id de la Marca',
        id: 'IdMarca',
        field: 'IdMarca',
        sortable: true
    },
    {
        title: 'Nombre de la Marca',
        id: 'MarcaNombre',
        field: 'MarcaNombre',
        sortable: true
    },
    {
        title: 'Estatus',
        id: 'Estatus',
        field: 'Estatus',
        sortable: true
    }
]

const TodasMarcas = () => {

        const [data, setData]= useState([]);

        const baseUrl = "https://localhost:44336/api/Marcas";

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
        <div className="py-8 rounded-3xl max-w-full text-gray-700 bg-white shadow">
                <MaterialTable
                icons={tableIcons} 
                title='Todos las Marcas'
                columns={columnas}
                data={data}
                actions={[
                    {
                        icon: Edit,
                        tooltip: 'Editar Marca',
                        onclick: (event, rowData)=>alert(rowData.IdMarca)
                    },
                    {
                        icon: DeleteOutline,
                        tooltip: 'Eliminar Marca',
                        onclick: (event, rowData)=>window.confirm('sas')
                    }
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
                localization={{
                    header:{
                        actions: 'Acciones'
                    }
                }}
                />
        </div>
        </>
    );
}

export default TodasMarcas;