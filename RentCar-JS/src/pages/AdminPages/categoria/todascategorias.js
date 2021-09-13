import React from 'react'
import DashboardLayout from '../../../dashboard/layout';
import TodasCategorias from '../../../components/Admin/categoria/todascategorias'


function todascategorias() {
    return (
        <>
        <DashboardLayout>
            <TodasCategorias />
        </DashboardLayout>
        </>
    )
}

export default todascategorias
