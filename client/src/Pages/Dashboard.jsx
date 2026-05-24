import React, { useEffect, useState } from 'react'
import sidebar from '../components/Sidebar'
import { dummyEmployeeDashboardData, dummyAdminDashboardData } from '../assets/assets'
import Loading from '../components/Loading'
import EmployeeDashboard from '../components/EmployeeDashboard'
import AdminDashboard from '../components/AdminDashboard'

const Dashboard = () => {

    const [Data, setData] = useState(null)

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        
            setData(dummyAdminDashboardData)
         setTimeout(() => {
            setLoading(false)
         }, 1000);
       

    }, [])

    if (loading) return <Loading/>

    if (!Data) return <p className="text-center text-slate-500 ">No Data Available</p>

    if (Data.role == 'ADMIN'){
        return <AdminDashboard data={Data}/>
    }else{
        return <EmployeeDashboard data={Data} />
    }
 


    
    
}

export default Dashboard