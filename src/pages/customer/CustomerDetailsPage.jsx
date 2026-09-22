import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../../layout/SideMenu";
import TopBar from "../../layout/TopBar";

const CustomerDetailsPage = () => {
  const navigate = useNavigate();
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  return (
    <div className="flex flex-1 w-full min-h-screen">
      <SideMenu/>
      <div className="flex-1 flex flex-col min-w-0 bg-[#F8F9FA]">
        <TopBar/>
        <main className="flex-1 p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Customer Details</h1>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-4 bg-white rounded-lg border border-slate-200 shadow-sm p-6 mb-3">
            <div className="space-y-1.5">
              <label className="text-sm">Customer Number</label>
              <p className="text-sm font-medium">1001</p>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm">Customer Name</label>
              <p className="text-sm font-medium">John Doe</p>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm">HQ</label>
              <p className="text-sm font-medium">Buffalo , NY,USA</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm">Sales Rep</label>
              <p className="text-sm font-medium">Jane Smith</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm">Currency</label>
              <p className="text-sm font-medium">USD</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm">Credit</label>
              <p className="text-sm font-medium">$ 14000</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm">AR</label>
              <p className="text-sm font-medium">0</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm">AR Days</label>
              <p className="text-sm font-medium">0</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm">Acct Mgr</label>
              <p className="text-sm font-medium">Jane Doe</p>
            </div>
            
            
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Addresses</h1>
            </div>
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 mb-3">
            <div className="overflow-x-auto border border-slate-200 rounded">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-white text-slate-800 border-b border-slate-200 font-semibold text-[11px] select-none">
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Sl No</span>
                        <span className="material-icons-outlined text-sm">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Type</span>
                        <span className="material-icons-outlined text-sm">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Country</span>
                        <span className="material-icons-outlined">arrow_upward</span>
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
                        <span className="text-xs">City</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Pin Code</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Address</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    
                  </tr>
                </thead>
                
                <tbody className="divide-y divide-slate-200 text-slate-600 font-normal">
                  
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-2 px-3 border-r border-slate-200 text-slate-700">1</td>
                    <td className="py-2 px-3 border-r border-slate-200">HQ</td>
                    <td className="py-2 px-3 border-r border-slate-200">USA</td>
                    <td className="py-2 px-3 border-r border-slate-200">NY</td>
                    <td className="py-2 px-3 border-r border-slate-200">Buffalo</td>
                    <td className="py-2 px-3 border-r border-slate-200">123456789</td>
                    <td className="py-2 px-3 border-r border-slate-200">Engineered Composites INC, 55 Roberts Ave</td>
                    
                    
                  </tr>
                  
                  
                </tbody>
              </table>
            </div>
            
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Contacts</h1>
            </div>
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 mb-4">
            
            
            
            <div className="overflow-x-auto border border-slate-200 rounded">
              <table className="w-full text-left border-collapse text-xs">
                
                <thead>
                  <tr className="bg-white text-slate-800 border-b border-slate-200 font-semibold text-[11px] select-none">
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Name</span>
                        <span className="material-icons-outlined text-sm">filter_list</span>
                      </div>
                    </th>
                    
                    
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Department</span>
                        <span className="material-icons-outlined">arrow_upward</span>
                      </div>
                    </th>
                   
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Job Title</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Phone</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Email</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Address</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    
                  </tr>
                </thead>
                
                <tbody className="divide-y divide-slate-200 text-slate-600 font-normal">
                  
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-2 px-3 border-r border-slate-200 text-slate-700">Dave Holmes</td>
                    <td className="py-2 px-3 border-r border-slate-200">Procurement</td>
                    <td className="py-2 px-3 border-r border-slate-200">Manager</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">daveholmes@engcomposites.com</td>
                    <td className="py-2 px-3 border-r border-slate-200">Engineered Composites INC, 55 Roberts Ave.,</td>
                    
                  </tr>
                  
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-2 px-3 border-r border-slate-200 text-slate-700">Jeff Hansen</td>
                    <td className="py-2 px-3 border-r border-slate-200">Procurement</td>
                    <td className="py-2 px-3 border-r border-slate-200">Head of Procurment</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">jefholmes@engcomposites.com</td>
                    <td className="py-2 px-3 border-r border-slate-200">Engineered Composites INC, 55 Roberts Ave.,</td>
                    
                  </tr>
                  
                  
                </tbody>
              </table>
            </div>
           <div className="flex justify-end mt-2">
              <button className="px-2 py-1 border border-outline-secondary rounded text-xs">
                View All
              </button>
            </div>
          </div>


          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Recent Quotes</h1>
            </div>
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 mb-4">
            <div className="overflow-x-auto border border-slate-200 rounded">
              <table className="w-full text-left border-collapse text-xs">
                
                <thead>
                  <tr className="bg-white text-slate-800 border-b border-slate-200 font-semibold text-[11px] select-none">
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Number</span>
                        <span className="material-icons-outlined text-sm">filter_list</span>
                      </div>
                    </th>
                    
                    
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Date</span>
                        <span className="material-icons-outlined">arrow_upward</span>
                      </div>
                    </th>
                   
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Acct Mgr</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Contact</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Item</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Packaging</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Price</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Release Qty</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Qty</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">RM Cost/LB</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Quantity (LB)</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Tiered</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Notes</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    
                    
                    
                  </tr>
                </thead>
                
                <tbody className="divide-y divide-slate-200 text-slate-600 font-normal">
                  
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-2 px-3 border-r border-slate-200 text-slate-700">Dave Holmes</td>
                    <td className="py-2 px-3 border-r border-slate-200">Procurement</td>
                    <td className="py-2 px-3 border-r border-slate-200">Manager</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">daveholmes@engcomposites.com</td>
                    <td className="py-2 px-3 border-r border-slate-200">Engineered Composites INC, 55 Roberts Ave.,</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    
                  </tr>
                  
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-2 px-3 border-r border-slate-200 text-slate-700">Dave Holmes</td>
                    <td className="py-2 px-3 border-r border-slate-200">Procurement</td>
                    <td className="py-2 px-3 border-r border-slate-200">Manager</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">daveholmes@engcomposites.com</td>
                    <td className="py-2 px-3 border-r border-slate-200">Engineered Composites INC, 55 Roberts Ave.,</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    
                  </tr>
                  
                  
                </tbody>
              </table>
            </div>
           <div className="flex justify-end mt-2">
              <button className="px-2 py-1 border border-outline-secondary rounded text-xs">
                View All
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Recent Orders</h1>
            </div>
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 mb-4">
            <div className="overflow-x-auto border border-slate-200 rounded">
              <table className="w-full text-left border-collapse text-xs">
                
                <thead>
                  <tr className="bg-white text-slate-800 border-b border-slate-200 font-semibold text-[11px] select-none">
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Number</span>
                        <span className="material-icons-outlined text-sm">filter_list</span>
                      </div>
                    </th>
                    
                    
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Acct Mgr</span>
                        <span className="material-icons-outlined">arrow_upward</span>
                      </div>
                    </th>
                   
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Contact</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Contact</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Item</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Cust PO</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Dept</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Qty</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Price</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Prom Date</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">$ Sales</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Industry</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Market</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Segment</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    
                  </tr>
                </thead>
                
                <tbody className="divide-y divide-slate-200 text-slate-600 font-normal">
                  
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-2 px-3 border-r border-slate-200 text-slate-700">Dave Holmes</td>
                    <td className="py-2 px-3 border-r border-slate-200">Procurement</td>
                    <td className="py-2 px-3 border-r border-slate-200">Manager</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">daveholmes@engcomposites.com</td>
                    <td className="py-2 px-3 border-r border-slate-200">Engineered Composites INC, 55 Roberts Ave.,</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                  </tr>
                  
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-2 px-3 border-r border-slate-200 text-slate-700">Dave Holmes</td>
                    <td className="py-2 px-3 border-r border-slate-200">Procurement</td>
                    <td className="py-2 px-3 border-r border-slate-200">Manager</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">daveholmes@engcomposites.com</td>
                    <td className="py-2 px-3 border-r border-slate-200">Engineered Composites INC, 55 Roberts Ave.,</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                  </tr>
                  
                  
                </tbody>
              </table>
            </div>
           <div className="flex justify-end mt-2">
              <button className="px-2 py-1 border border-outline-secondary rounded text-xs">
                View All
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Recent Invoices</h1>
            </div>
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 mb-4">
            <div className="overflow-x-auto border border-slate-200 rounded">
              <table className="w-full text-left border-collapse text-xs">
                
                <thead>
                  <tr className="bg-white text-slate-800 border-b border-slate-200 font-semibold text-[11px] select-none">
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Number</span>
                        <span className="material-icons-outlined text-sm">filter_list</span>
                      </div>
                    </th>
                    
                    
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Sequence</span>
                        <span className="material-icons-outlined">arrow_upward</span>
                      </div>
                    </th>
                   
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Acct Mgr</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Contact</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Inv Date</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Due Date</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Dept</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Sales</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Terms</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    
                    
                    
                  </tr>
                </thead>
                
                <tbody className="divide-y divide-slate-200 text-slate-600 font-normal">
                  
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-2 px-3 border-r border-slate-200 text-slate-700">Dave Holmes</td>
                    <td className="py-2 px-3 border-r border-slate-200">Procurement</td>
                    <td className="py-2 px-3 border-r border-slate-200">Manager</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">daveholmes@engcomposites.com</td>
                    <td className="py-2 px-3 border-r border-slate-200">Engineered Composites INC, 55 Roberts Ave.,</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    
                  </tr>
                  
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-2 px-3 border-r border-slate-200 text-slate-700">Dave Holmes</td>
                    <td className="py-2 px-3 border-r border-slate-200">Procurement</td>
                    <td className="py-2 px-3 border-r border-slate-200">Manager</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">daveholmes@engcomposites.com</td>
                    <td className="py-2 px-3 border-r border-slate-200">Engineered Composites INC, 55 Roberts Ave.,</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    
                  </tr>
                  
                  
                </tbody>
              </table>
            </div>
           <div className="flex justify-end mt-2">
              <button className="px-2 py-1 border border-outline-secondary rounded text-xs">
                View All
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;
