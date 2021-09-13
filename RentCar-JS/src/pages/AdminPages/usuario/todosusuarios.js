import React from 'react'
import DashboardLayout from '../../../dashboard/layout';
import TodosUsuarios from '../../../components/Admin/usuario/todosusuarios'


function todosusuarios() {
    return (
        <>
        <DashboardLayout>
            <TodosUsuarios />
        </DashboardLayout>
        </>
    )
}

export default todosusuarios
