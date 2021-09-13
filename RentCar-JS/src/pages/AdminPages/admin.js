import React from 'react'
import Admin from '../../components/Admin/index';
import DashboardLayout from '../../dashboard/layout';

const adminPage = () => {
    return ( 
        <>
        <DashboardLayout>
        <Admin />
        </DashboardLayout>
        </>
    )
}

export default adminPage

