import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
    return(
        <header className="h-14 bg-white border-b border-slate-200 px-8 flex items-center justify-end" data-purpose="top-navigation-bar">
            <div className="flex items-center space-x-5">
                <a className="text-xs font-semibold text-slate-600 hover:text-slate-900" href="#">Contact</a>
                <div className="h-4 w-px bg-slate-300"></div>
                
                <div className="flex items-center">
                    <img alt="User Profile" className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFTSVUj5MVvjHpk4VknG3GPv_5WxsGUb6wjHxO2Zqz-RVtvoh46zwBeDMuUYfDLwUDbEVyeTNzvOmGLXPNBsdGM0KMcmFSVN1mt8UWkbD0A-AGqIQ2trJTVWeJl_GMvA3bt2aFv_3ElsqpQZZUmf7N6WFFlOKQiWuaXyS5xxpC3K16UeN_ZAQX-6iA5ajQVrxCxM_vFe8z7vAlXX1lHYFF3n116EW5ZLZR7EtJvxlDYCb5JP9vuQ9N" />
                </div>
            </div>
        </header>
    )
}
export default TopBar;