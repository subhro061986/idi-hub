import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo_idi_full.png";

const SideMenu = () => {
    const getNavLinkClassName = ({ isActive }, additionalClasses = "") =>
        `flex items-center gap-3 px-3 py-2 rounded transition-colors ${additionalClasses} ${
            isActive
                ? "font-semibold text-red-600 bg-red-50/60"
                : "text-slate-700 hover:bg-slate-50"
        }`;

    return(
        <aside className="w-56 bg-white border-r border-slate-200 flex flex-col flex-shrink-0" data-purpose="sidebar-navigation">
           
            <div className="p-4 border-b border-slate-100 flex flex-col items-center text-center">
                <img src={logo} alt="Logo" />
            </div>
            
            <nav className="flex-1 py-4 px-2 space-y-1 text-[13px] font-medium text-slate-700">
                
                <NavLink className={getNavLinkClassName} to="/dashboard">
                    <span className="material-icons-outlined text-xs text-slate-500">dashboard</span>
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to="/contact" className={getNavLinkClassName}>
                    <span className="material-icons-outlined text-xs text-slate-500">contact_phone</span>
                    <span>Contacts</span>
                </NavLink>
                <NavLink to="/customer" className={getNavLinkClassName}>
                    <span className="material-icons-outlined text-xs text-slate-500">corporate_fare</span>
                    <span>Customers</span>
                </NavLink>
                
                <NavLink className={getNavLinkClassName} to="/projects">
                    <span className="material-icons-outlined text-xs text-slate-500">folder</span>
                    <span>Projects</span>
                </NavLink>
                
                
                
                <NavLink to="/quotes" className={getNavLinkClassName}>
                    <span className="material-icons-outlined text-xs text-slate-500">format_quote</span>
                    <span>Quotes</span>
                </NavLink>
                
                <NavLink to="/order" className={getNavLinkClassName}>
                    <span className="material-icons-outlined text-xs text-slate-500">view_in_ar</span>
                    <span>Orders</span>
                </NavLink>
                
                <NavLink to="/shipment" className={getNavLinkClassName}>
                    <span className="material-icons-outlined text-xs text-slate-500">local_shipping</span>
                    <span>Shipments</span>
                </NavLink>
                
                <NavLink to="/invoice" className={getNavLinkClassName}>
                    <span className="material-icons-outlined text-xs text-slate-500">receipt</span>
                    <span>Invoices</span>
                </NavLink>
                
                <NavLink className={(navLinkProps) => getNavLinkClassName(navLinkProps, "leading-tight")} to="/deviation-logs">
                    <span className="material-icons-outlined text-xs text-slate-500">schedule</span>
                    <span className="text-xs leading-4">Temporary Deviation Log</span>
                </NavLink>
                
                <NavLink className={(navLinkProps) => getNavLinkClassName(navLinkProps, "leading-tight")} to="/change-requests">
                    <span className="material-icons-outlined text-xs text-slate-500">swap_horiz</span>
                    <span className="text-xs leading-4">Change Request Log</span>
                </NavLink>
            </nav>
        </aside>
    )
}
export default SideMenu;