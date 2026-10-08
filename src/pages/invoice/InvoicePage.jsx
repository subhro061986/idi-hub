import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../../layout/SideMenu";
import TopBar from "../../layout/TopBar";
import { UserProfile } from "../../context/Usercontext";
import { useAuth } from "../../context/Authcontext";

const InvoicePage = () => {
  const navigate = useNavigate();
  const{authData}=useAuth();
  const {GetAllInvoices } = UserProfile();
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchInvoices();
  }, [authData]);

  const fetchInvoices = async () => {
    const response = await GetAllInvoices();
    setInvoices(response?.data?.data || []);
  }

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
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Invoices</h1>
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
                        <span className="text-xs">Invoice Number</span>
                        <span className="material-icons-outlined text-sm">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Order Number</span>
                        <span className="material-icons-outlined text-sm">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Shipment Number</span>
                        <span className="material-icons-outlined">arrow_upward</span>
                      </div>
                    </th>
                   
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Customer</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Sales Rep</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Date</span>
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
                        <span className="text-xs">Amount</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Tax Amount</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Freight Amount</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Special Charges</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Total Amount</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Terms</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Status</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    
                  </tr>
                </thead>
                
                <tbody className="divide-y divide-slate-200 text-slate-600 font-normal">
                  {invoices.splice(0,10).map((invoice, index) => (
                  <tr className="hover:bg-slate-50 transition-colors" key={index}>
                    <td className="py-2 px-3 border-r border-slate-200 text-slate-700">
                        <span onClick={()=>gotoDetails()} className="cursor-pointer">
                            {invoice.invoiceNo}
                        </span>
                    </td>
                    
                    <td className="py-2 px-3 border-r border-slate-200">{invoice.orderNo}</td>
                    <td className="py-2 px-3 border-r border-slate-200">{invoice.shipmentNo}</td>
                    <td className="py-2 px-3 border-r border-slate-200">{invoice.customerName}</td>
                    <td className="py-2 px-3 border-r border-slate-200">{invoice.salesRep}</td>
                    <td className="py-2 px-3 border-r border-slate-200">{invoice.date}</td>
                    <td className="py-2 px-3 border-r border-slate-200 text-center">{invoice.dueDate}</td>
                    <td className="py-2 px-3 border-r border-slate-200 text-center">{invoice.amount}</td>
                    <td className="py-2 px-3 border-r border-slate-200 text-center">{invoice.taxAmount}</td>
                    <td className="py-2 px-3 border-r border-slate-200 text-center">{invoice.frightAmount}</td>
                    <td className="py-2 px-3 border-r border-slate-200 text-center">{invoice.specialCharges}</td>
                    <td className="py-2 px-3 border-r border-slate-200 text-center">{invoice.totalAmount}</td>
                    <td className="py-2 px-3 border-r border-slate-200 text-center">{invoice.terms}</td>
                    <td className="py-2 px-3 border-r border-slate-200 text-center">{invoice.status}</td>
                    
                  </tr>
                  ))}
                  
                  
                  
                  
                  
                </tbody>
              </table>
            </div>
           
          </div>
        </main>
      </div>
    </div>
  );
};

export default InvoicePage;
