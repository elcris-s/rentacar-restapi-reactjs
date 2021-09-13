import React from 'react'
import DashboardLayout from '../../../dashboard/layout';
import TodasMarcas from '../../../components/Admin/marca/todasmarcas'


function todasmarcas() {
    return (
        <>
        <DashboardLayout>
            <TodasMarcas />
        </DashboardLayout>
        </>
    )
}

export default todasmarcas
