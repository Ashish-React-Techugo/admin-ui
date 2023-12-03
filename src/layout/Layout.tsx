import Header from "@/components/custom/common/Header"
import Sidebar from "@/components/custom/common/Sidebar"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="flex bg-slate-100">
            <div className="w-1/5 min-h-screen border-2 m-2 rounded-2xl bg-white">
                <Sidebar />
            </div>
            <div className="flex-1">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout