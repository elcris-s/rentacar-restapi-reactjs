import React from 'react'
import DashboardLayout from '../../dashboard/layout';
import Categorias from '../../components/Admin/categoria/categorias'


function categorias() {
    return (
        <>
        <DashboardLayout>
            <Categorias />
        </DashboardLayout>
        </>
    )
}

export default categorias
