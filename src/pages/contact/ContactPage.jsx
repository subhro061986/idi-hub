import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../../layout/SideMenu";
import TopBar from "../../layout/TopBar";
import Modal from "../../Common/Modal";
import { useAuth } from "../../context/Authcontext";
import { UserProfile } from "../../context/Usercontext";
const ContactPage = () => {
  const navigate = useNavigate();
  const{authData}=useAuth();
  const { GetAllContacts } = UserProfile();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    handleGetContacts();
  }, [authData]);

  const handleGetContacts = async () => {
    const response = await GetAllContacts();
    console.log("Contacts Response", response?.data?.data);
    setContactList(response?.data?.data || []);
  };

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
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Contacts</h1>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                
                <div className="relative w-full sm:w-80">
                  <input className="w-full pl-4 pr-9 py-2 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none" placeholder="Search Contact" type="text" />
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
                        <span className="text-xs">Contact Name</span>
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
                    
                    <th className="text-xs py-2.5 px-3 border-r border-slate-200 text-center whitespace-nowrap">
                      Status
                    </th>
                    
                    <th className="text-xs py-2.5 px-3 text-center whitespace-nowrap">
                      Action
                    </th>
                  </tr>
                </thead>
                
                <tbody className="divide-y divide-slate-200 text-slate-600 font-normal">
                  {
                    contactList.map((contact, index) => (
                      <tr key={index} className="hover:bg-slate-50 transition-colors">
                        <td className="py-2 px-3 border-r border-slate-200 text-slate-700">{contact.name}</td>
                        <td className="py-2 px-3 border-r border-slate-200">{contact.customerName}</td>
                        <td className="py-2 px-3 border-r border-slate-200">{contact.department}</td>
                        <td className="py-2 px-3 border-r border-slate-200">{contact.jobTitle}</td>
                    
                    <td className="py-2 px-3 border-r border-slate-200">{contact.phone}</td>
                    <td className="py-2 px-3 border-r border-slate-200">{contact.email}</td>
                    <td className="py-2 px-3 border-r border-slate-200">{contact.address}</td>
                    <td className="py-2 px-3 border-r border-slate-200 text-center">
                      <div className="inline-flex items-center justify-center">
                        <span className="w-8 h-4 flex items-center bg-emerald-500 rounded-full p-0.5 cursor-pointer">
                          <span className="bg-white w-3 h-3 rounded-full shadow-md transform translate-x-4 transition-transform"></span>
                        </span>
                      </div>
                    </td>
                    <td className="py-2 px-3 text-center">
                      <button className="text-slate-400 hover:text-slate-700 inline-flex items-center cursor-pointer">
                      <span className="material-icons-outlined">edit_note</span>
                      </button>
                    </td>
                  </tr>
                    ))}
                  
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
                    Create New Contact
                  </span>
                }
                width="max-w-3xl"
              >
                <div className="border-t pt-8">
        
                  <div className="grid grid-cols-2 gap-x-14 gap-y-4">
                    <div>
                      <label className="text-sm">Contact Name</label>
        
                      <input
                        type="text"
                        className="w-full px-4 py-3 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none"
                      />
                    </div>
        
                    <div>
                      <label className="text-sm">Customer Name</label>
        
                      <input
                        type="text"
                        className="w-full px-4 py-3 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none"
                      />
                    </div>
        
                    <div>
                      <label className="text-sm">Departmnet</label>
        
                      <input
                        type="text"
                        className="w-full px-4 py-3 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none"
                      />
                    </div>

                    <div>
                      <label className="text-sm">Job TItle</label>
        
                      <input
                        type="text"
                        className="w-full px-4 py-3 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none"
                      />
                    </div>

                    <div>
                      <label className="text-sm">Email</label>
        
                      <input
                        type="text"
                        className="w-full px-4 py-3 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none"
                      />
                    </div>

                    <div>
                      <label className="text-sm">Phone</label>
        
                      <input
                        type="text"
                        className="w-full px-4 py-3 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none"
                      />
                    </div>
        
                    
        
                  </div>
        
                  <div className="mt-2">
                      <label className="text-sm">Address</label>
        
                      <input
                        type="text"
                        className="w-full px-4 py-3 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 text-slate-700 placeholder-slate-400 shadow-none"
                      />
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

export default ContactPage;
