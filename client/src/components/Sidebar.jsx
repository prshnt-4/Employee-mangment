import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { dummyProfileData } from '../assets/assets'
import {
    CalendarCheck,
    FileText,
    LayoutDashboard,
    LogOutIcon,
    MenuIcon,
    Settings,
    UserIcon,
    Users,
    XIcon,
    ChevronRight
} from 'lucide-react'
import Employee from '../Pages/Employee'

const Sidebar = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const [UserName, setUserName] = useState("")
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName)
    }, [])

    useEffect(() => {
        setMobileOpen(false)
    }, [pathname])

    const role = "" || "EMPLOYEE"

    const navItems = [
        { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        ...(role === "ADMIN" ? [{ name: "Employee", href: "/employee", icon: Users }] : []),
        { name: "Attendance", href: "/attendance", icon: CalendarCheck },
        { name: "Leave", href: "/leave", icon: FileText },
        { name: "Pay Slips", href: "/payslips", icon: FileText },
        { name: "Settings", href: "/setting", icon: Settings },
    ]

    const handlelogout = () => {
        navigate("/")
    }

    const sidebarContent = (
        <>
            <div className='px-5 pt-6 pb-5 border-b border-white/20'>
                <div className='flex items-center justify-between gap-3'>
                    <div className='flex items-center gap-3'>
                        <UserIcon className='text-white' size={28} />
                        <div>
                            <p className='font-semibold text-[13px] text-white tracking-wide'>Employee MS</p>
                            <p className='text-[11px] text-slate-400 font-medium'>Management System</p>
                        </div>
                    </div>
                    <button onClick={() => setMobileOpen(false)} className='lg:hidden text-slate-400 hover:text-white p-1' >
                        <XIcon size={20} />
                    </button>
                </div>
            </div>

            {UserName && (
                <div className='mx-3 mt-4 mb-1 p-3 rounded-lg bg-white/3 border border-white/4'>
                    <div className='flex item-center gap-3'>
                        <div className='w-9 h-9 rounded-1g bg-slate-800 flex items-center justify-center ring-1 ring-white/10 shrink-0'  >
                            <span className='text-slate-400 text-xs font-semibold'>
                                {UserName.charAt(0).toUpperCase()}
                            </span>
                        </div>
                        <div className='min-w-0'>
                            <p className='text-[13px] font-medium test-slate-200 truncate '>
                                {UserName}
                            </p>
                            <p className='text-[11px] text-slate-500 truncate'>{role === "ADMIN" ? "Administrator" : "Employee"}</p>
                        </div>

                    </div>

                </div>
            )}
            {/*navigation */}
            <div className='px-5 pt-5 pb-2'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500'>Navigation</p>
            </div>

            <div className='flex-1 px-3 space-y-0.5 overflow-y-auto'>
                {navItems.map((item) => {
                    const isactive = pathname.startsWith(item.href)
                    return (
                        <Link key={item.name} to={item.href} className={`group relative flex items-center gap-3 rounded-xl px-3.5 py-3
                        transition-colors duration-150 relative ${isactive ? "bg-indigo-500/12 text-indigo-300" : "text-slate-300 hover:text-white hover:bg-white/4"}`}>
                            {isactive && <div className='absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-indigo-500' />}

                            <item.icon className={`w-[17px] h-[17px] shrink-0 ${isactive ? "text-indigo-300" : "text-slate-400 group-hover:text-slate-300"}`} />
                            <span className='flex-1'>{item.name}</span>
                            {isactive && <ChevronRight className="w-3.5 h-3.5 text-indigo-500/50" />}

                        </Link>
                    )

                })}
            </div>

            {/*logout */}

            <div onClick={handlelogout} className='px-5 pb-4 pt-3 border-t border-white/6'>
                <button  className='flex items-center gap-3 w-full px-3 py-2.5 rounded-md text-[13px] font-medium text-slate-400 hover:text-rose-400 hover:bg-rose-500/8 transition-all duration-150'>
                    <LogOutIcon className='w-[17px] h-[17px]'/> 
                    <span>LogOut</span>

                </button>
            </div>









        </>
    )

    return (
        <>
            <button onClick={() => setMobileOpen(true)} className='lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg shadow-lg border border-white/10'>
                <MenuIcon size={20} />
            </button>

            <aside className='hidden lg:flex flex-col h-full w-[260px] bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white shrink-0 border-r border-white/10'>
                {sidebarContent}
            </aside>

            {mobileOpen && (
                <div className='lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40' onClick={() => setMobileOpen(false)}>
                    <aside
                        className='fixed inset-y-0 left-0 w-72 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white z-50 flex flex-col transform transition-transform duration-300'
                        onClick={(event) => event.stopPropagation()}  >

                        {sidebarContent}
                    </aside>
                </div>
            )}
        </>
    )
}

export default Sidebar
