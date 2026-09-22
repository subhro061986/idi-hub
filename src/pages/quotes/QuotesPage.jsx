import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../../layout/SideMenu";
import TopBar from "../../layout/TopBar";
import Modal from "../../Common/Modal";
const QuotesPage = () => {
  const navigate = useNavigate();
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resetStockModal=()=>{
    setShowCreateModal(false)
  }

  return (
    <div className="flex flex-1 w-full min-h-screen">
      <SideMenu/>
      <div className="flex-1 flex flex-col min-w-0 bg-[#F8F9FA]">
        <TopBar/>
        <main className="flex-1 p-6 md:p-8">
          
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Quotes</h1>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                
                <div className="relative w-full sm:w-80">
                  <input className="w-full pl-4 pr-9 py-2 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none" placeholder="Search Quotes" type="text" />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className="material-icons-outlined text-slate-400">search</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => setShowCreateModal(true)}
                  className="flex-shrink-0 bg-secondary hover:bg-[#b81034] text-white px-5 py-2 rounded-md text-xs font-semibold shadow-sm transition-colors duration-150" type="button">
                  Create New
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto border border-slate-200 rounded">
              <table className="w-full text-left border-collapse text-xs">
                
                <thead>
                  <tr className="bg-white text-slate-800 border-b border-slate-200 font-semibold text-[11px] select-none">
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Order Number</span>
                        <span className="material-icons-outlined text-sm">filter_list</span>
                      </div>
                    </th>
                    
                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">Date</span>
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
                        <span className="text-xs">Customer</span>
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
                        <span className="text-xs">Product</span>
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
                        <span className="text-xs">Tiered</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">RM Cost</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">RM %</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">OEM</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">EAV</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>

                    <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-xs">SMC / BMC</span>
                        <span className="material-icons-outlined">filter_list</span>
                      </div>
                    </th>
                    
                    
                    
                    <th className="text-xs py-2.5 px-3 text-center whitespace-nowrap">
                      Action
                    </th>
                  </tr>
                </thead>
                
                <tbody className="divide-y divide-slate-200 text-slate-600 font-normal">
                  
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-2 px-3 border-r border-slate-200 text-slate-700">1234567</td>
                    <td className="py-2 px-3 border-r border-slate-200">2026-09-18</td>
                    <td className="py-2 px-3 border-r border-slate-200">J.Marelli</td>
                    <td className="py-2 px-3 border-r border-slate-200">John Doe</td>
                    <td className="py-2 px-3 border-r border-slate-200">1234897568</td>
                    <td className="py-2 px-3 border-r border-slate-200">ABCD</td>
                    <td className="py-2 px-3 border-r border-slate-200">Bulk</td>
                    <td className="py-2 px-3 border-r border-slate-200">2.71</td>
                    <td className="py-2 px-3 border-r border-slate-200">MQ+</td>
                    <td className="py-2 px-3 border-r border-slate-200"></td>
                    <td className="py-2 px-3 border-r border-slate-200"></td>
                    <td className="py-2 px-3 border-r border-slate-200"></td>
                    <td className="py-2 px-3 border-r border-slate-200"></td>
                    <td className="py-2 px-3 border-r border-slate-200"></td>
                    <td className="py-2 px-3 border-r border-slate-200"></td>
                    <td className="py-2 px-3 text-center">
                      <button className="text-slate-400 hover:text-slate-700 inline-flex items-center">
                      <span className="material-icons-outlined">edit_note</span>
                      </button>
                    </td>
                  </tr>
                  
                  
                 
                  
                </tbody>
              </table>
            </div>
           
          </div>
        </main>
        <Modal
                isOpen={showCreateModal}
                onClose={resetStockModal}
                title={
                  <span className="text-xl font-bold text-slate-900">
                    Create Quotes
                  </span>
                }
                width="max-w-3xl"
              >
                <div className="border-t pt-8" style={{height:'70vh',overflowY:'auto'}}>
        
                  <div className="grid grid-cols-3 gap-x-10 gap-y-4 mb-4">
                    <div>
                      <label className="text-sm">Quote No</label>
        
                      <input
                        type="text"
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none"
                      />
                    </div>
        
                    <div>
                      <label className="text-sm">Date</label>
        
                      <input
                        type="date"
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none"
                      />
                    </div>
        
                    <div>
                      <label className="text-sm">Customer</label>
        
                      <select className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none">
                          <option>Please Select</option>
                      </select>
                        
                    </div>

                    <div>
                      <label className="text-sm">Acct Mgr</label>
        
                      <select className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none">
                          <option>Please Select</option>
                      </select>
                        
                    </div>

                    <div>
                      <label className="text-sm">Contact</label>
        
                      <select className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none">
                          <option>Please Select</option>
                      </select>
                        
                    </div>

                    <div>
                      <label className="text-sm">SMC / BMC</label>
        
                      <select className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none">
                          <option>Please Select</option>
                      </select>
                        
                    </div>

                    <div>
                      <label className="text-sm">Product</label>
        
                      <select className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none">
                          <option>Please Select</option>
                      </select>
                        
                    </div>

                    <div>
                      <label className="text-sm">Packaging</label>
        
                      <select className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none">
                          <option>Please Select</option>
                      </select>
                        
                    </div>

                    <div>
                      <label className="text-sm">Price</label>
        
                      <input
                        type="text"
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none"
                      />
                    </div>

                    <div>
                      <label className="text-sm">Release Quantity</label>
        
                      <input
                        type="text"
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none"
                      />
                    </div>

                    <div>
                      <label className="text-sm">Tiered</label>
        
                      <select className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none">
                          <option>Yes</option>
                          <option>No</option>
                      </select>
                        
                    </div>

                    <div>
                      <label className="text-sm">RM Cost</label>
        
                      <input
                        type="text"
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none"
                      />
                    </div>
        
                    <div>
                      <label className="text-sm">RM %</label>
        
                      <input
                        type="text"
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none"
                      />
                    </div>

                    <div>
                      <label className="text-sm">Sample Lot No</label>
        
                      <input
                        type="text"
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none"
                      />
                    </div>

                    <div>
                      <label className="text-sm">OEM</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none"
                      />
                    </div>

                    <div>
                      <label className="text-sm">EAV</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none"
                      />
                    </div>
                  </div>

          <h2 className="text-sm font-semibold text-slate-900 mb-2">Tiered Pricing</h2>
            <div className="w-full overflow-hidden border border-slate-300">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-300 text-slate-700 font-semibold bg-white">
                    <th className="py-1.5 px-3 border-r border-slate-300 w-5/12 font-medium">Tier</th>
                    <th className="py-1.5 px-3 border-r border-slate-300 w-5/12 font-medium">Price</th>
                    <th className="py-1.5 px-3 w-2/12"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300 text-slate-800">
                  <tr>
                    <td className="py-2.5 px-3 border-r border-slate-300">
                      <input
                        type="text"
                        className="w-full px-2 py-1 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none"
                      />
                    </td>
                    <td className="py-2.5 px-3 border-r border-slate-300">
                      <input
                        type="text"
                        className="w-full px-2 py-1 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none"
                      />
                    </td>
                    <td className="py-2.5 px-3">
                    <button className="px-2 py-1 bg-secondary rounded text-sm text-white-700">
                        Add
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 border-r border-slate-300">4,000-7,999 lbs</td>
                    <td className="py-2.5 px-3 border-r border-slate-300">$ 1.60</td>
                    <td className="py-2.5 px-3"><span className="material-icons-outlined text-red-600">delete_outline</span></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 border-r border-slate-300">8,000-19,999 lbs</td>
                    <td className="py-2.5 px-3 border-r border-slate-300">$ 1.55</td>
                    <td className="py-2.5 px-3"><span className="material-icons-outlined text-red-600">delete_outline</span></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 border-r border-slate-300">&gt;20,000 lbs</td>
                    <td className="py-2.5 px-3 border-r border-slate-300">$ 1.50</td>
                    <td className="py-2.5 px-3"><span className="material-icons-outlined text-red-600">delete_outline</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

                  <div className="mt-2">
                      <label className="text-sm">Terms & Condition</label>
        
                      <textarea
                        type="text"
                        className="w-full px-4 py-3 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none"
                      ></textarea>
                    </div>

                    <div className="mt-2">
                      <label className="text-sm">Notes</label>
        
                      <textarea
                        type="text"
                        className="w-full px-4 py-3 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none"
                      ></textarea>
                    </div>
        
                    <div className="flex justify-end mt-4">
                      <button className="px-6 py-3 bg-secondary rounded text-sm text-white-700">
                        Save
                      </button>
                    </div>
        
                </div>
              </Modal>
      </div>
    </div>
  );
};

export default QuotesPage;
