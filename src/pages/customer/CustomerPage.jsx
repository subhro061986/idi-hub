import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../../layout/SideMenu";
import TopBar from "../../layout/TopBar";

const CustomerPage = () => {
  const navigate = useNavigate();
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gotoDetails = () => {
    navigate("/customer-details");
  }
  

  return (
    <div className="flex flex-1 w-full min-h-screen">
      <SideMenu/>
      <div className="flex-1 flex flex-col min-w-0 bg-[#F8F9FA]">
        <TopBar/>
        <main className="flex-1 p-6 md:p-8">
          
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Customer</h1>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                
                <div className="relative w-full sm:w-80">
                  <input className="w-full pl-4 pr-9 py-2 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none" placeholder="Search Contact" type="text" />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className="material-icons-outlined text-slate-400">search</span>
                  </div>
                </div>
                
                
              </div>
            </div>
            
            <div className="overflow-x-auto border border-slate-200 rounded">
              <table className="w-full text-left border-collapse text-xs">
                
                <thead>
                  <tr className="bg-white text-slate-800 border-b border-slate-200 font-semibold text-[11px] select-none">
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Customer Number</span>
                        <span className="material-icons-outlined text-sm">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Customer Name</span>
                        <span className="material-icons-outlined text-sm">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Sales Rep</span>
                        <span className="material-icons-outlined">arrow_upward</span>
                      </div>
                    </th>
                   
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">HQ City</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">State</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Credit</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">AR</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">AR Days</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    
                  </tr>
                </thead>
                
                <tbody className="divide-y divide-slate-200 text-slate-600 font-normal">
                  
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-2 px-3 border-r border-slate-200 text-slate-700">
                        <span onClick={()=>gotoDetails()} className="cursor-pointer">
                            1234897568
                        </span>
                    </td>
                    <td className="py-2 px-3 border-r border-slate-200">Jeff Hansen</td>
                    <td className="py-2 px-3 border-r border-slate-200">Wend pyle</td>
                    <td className="py-2 px-3 border-r border-slate-200">Benicia</td>
                    <td className="py-2 px-3 border-r border-slate-200">California</td>
                    <td className="py-2 px-3 border-r border-slate-200">0</td>
                    <td className="py-2 px-3 border-r border-slate-200">0</td>
                    <td className="py-2 px-3 border-r border-slate-200 text-center">0</td>
                    
                  </tr>
                  
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-2 px-3 border-r border-slate-200 text-slate-700">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">Jeff Hansen</td>
                    <td className="py-2 px-3 border-r border-slate-200">Wend pyle</td>
                    <td className="py-2 px-3 border-r border-slate-200">Benicia</td>
                    <td className="py-2 px-3 border-r border-slate-200">California</td>
                    <td className="py-2 px-3 border-r border-slate-200">0</td>
                    <td className="py-2 px-3 border-r border-slate-200">0</td>
                    <td className="py-2 px-3 border-r border-slate-200 text-center">0</td>
                    
                  </tr>
                  
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-2 px-3 border-r border-slate-200 text-slate-700">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">Jeff Hansen</td>
                    <td className="py-2 px-3 border-r border-slate-200">Wend pyle</td>
                    <td className="py-2 px-3 border-r border-slate-200">Benicia</td>
                    <td className="py-2 px-3 border-r border-slate-200">California</td>
                    <td className="py-2 px-3 border-r border-slate-200">0</td>
                    <td className="py-2 px-3 border-r border-slate-200">0</td>
                    <td className="py-2 px-3 border-r border-slate-200 text-center">0</td>
                    
                  </tr>
                  
                  
                  
                  
                </tbody>
              </table>
            </div>
           
          </div>
        </main>
      </div>
    </div>
  );
};

export default CustomerPage;
