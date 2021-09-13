import React from 'react'
import DashboardLayout from '../../../dashboard/layout';
import TodasReservas from '../../../components/Admin/reserva/todasreservas'


function todasreservas() {
    return (
        <>
        <DashboardLayout>
            <TodasReservas />
        </DashboardLayout>
        </>
    )
}

export default todasreservas
