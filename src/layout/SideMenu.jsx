import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo_idi_full.png";
const SideMenu = () => {
    return(
        <aside className="w-56 bg-white border-r border-slate-200 flex flex-col flex-shrink-0" data-purpose="sidebar-navigation">
           
            <div className="p-4 border-b border-slate-100 flex flex-col items-center text-center">
                <img src={logo} alt="Logo" />
            </div>
            
            <nav className="flex-1 py-4 px-2 space-y-1 text-[13px] font-medium text-slate-700">
                
                <a className="flex items-center gap-3 px-3 py-2 rounded text-slate-700 hover:bg-slate-50 transition-colors" href="#">
                    <span className="material-icons-outlined text-xs text-slate-500">dashboard</span>
                    <span>Dashboard</span>
                </a>
                
                <a className="flex items-center gap-3 px-3 py-2 rounded text-slate-700 hover:bg-slate-50 transition-colors" href="#">
                    <span className="material-icons-outlined text-xs text-slate-500">corporate_fare</span>
                    <span>Customers</span>
                </a>
                
                <a className="flex items-center gap-3 px-3 py-2 rounded text-slate-700 hover:bg-slate-50 transition-colors" href="#">
                    <span className="material-icons-outlined text-xs text-slate-500">folder</span>
                    <span>Projects</span>
                </a>
                
                <a className="flex items-center gap-3 px-3 py-2 rounded font-semibold text-red-600 bg-red-50/60 transition-colors" href="#">
                    <span className="material-icons-outlined text-xs text-slate-500">contact_phone</span>
                    <span>Contacts</span>
                </a>
                
                <a className="flex items-center gap-3 px-3 py-2 rounded text-slate-700 hover:bg-slate-50 transition-colors" href="#">
                    <span className="material-icons-outlined text-xs text-slate-500">format_quote</span>
                    <span>Quotes</span>
                </a>
                
                <a className="flex items-center gap-3 px-3 py-2 rounded text-slate-700 hover:bg-slate-50 transition-colors" href="#">
                    <span className="material-icons-outlined text-xs text-slate-500">view_in_ar</span>
                    <span>Orders</span>
                </a>
                
                <a className="flex items-center gap-3 px-3 py-2 rounded text-slate-700 hover:bg-slate-50 transition-colors" href="#">
                    <span className="material-icons-outlined text-xs text-slate-500">local_shipping</span>
                    <span>Shipments</span>
                </a>
                
                <a className="flex items-center gap-3 px-3 py-2 rounded text-slate-700 hover:bg-slate-50 transition-colors" href="#">
                    <span className="material-icons-outlined text-xs text-slate-500">receipt</span>
                    <span>Invoices</span>
                </a>
                
                <a className="flex items-center gap-3 px-3 py-2 rounded text-slate-700 hover:bg-slate-50 transition-colors" href="#">
                    <span className="material-icons-outlined text-xs text-slate-500">report_problem</span>
                    <span>Non Conformance</span>
                </a>
                
                <a className="flex items-center gap-3 px-3 py-2 rounded text-slate-700 hover:bg-slate-50 transition-colors leading-tight" href="#">
                    <span className="material-icons-outlined text-xs text-slate-500">schedule</span>
                    <span className="text-xs leading-4">Temporary Deviation Log</span>
                </a>
                
                <a className="flex items-center gap-3 px-3 py-2 rounded text-slate-700 hover:bg-slate-50 transition-colors leading-tight" href="#">
                    <span className="material-icons-outlined text-xs text-slate-500">swap_horiz</span>
                    <span className="text-xs leading-4">Change Request Log</span>
                </a>
            </nav>
        </aside>
    )
}
export default SideMenu;