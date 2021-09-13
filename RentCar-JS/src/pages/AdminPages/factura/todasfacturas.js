import React from 'react'
import DashboardLayout from '../../../dashboard/layout';
import TodasFacturas from '../../../components/Admin/factura/todasfacturas'


function todasfacturas() {
    return (
        <>
        <DashboardLayout>
            <TodasFacturas />
        </DashboardLayout>
        </>
    )
}

export default todasfacturas
