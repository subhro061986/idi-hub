import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../../layout/SideMenu";
import TopBar from "../../layout/TopBar";

const InvoiceDetailsPage = () => {
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

          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-slate-900">Invoice Details</h1>
            <button className="inline-flex items-center gap-2 px-2 py-1 bg-white border border-gray-300 rounded-lg text-xs font-semibold text-slate-700 shadow-sm hover:bg-gray-50 focus:outline-none transition-colors" type="button">
              <span className="material-icons-outlined">arrow_back</span>
              Back
            </button>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-4 text-left">
              
              <div>
                <div className="text-[11px] text-slate-400 font-medium">Invoice Number</div>
                <div className="text-xs font-bold text-slate-900 mt-1">44227</div>
              </div>
              
              <div>
                <div className="text-[11px] text-slate-400 font-medium">Order Number</div>
                <div className="text-xs font-bold text-slate-900 mt-1">33308</div>
              </div>
              
              <div>
                <div className="text-[11px] text-slate-400 font-medium">Shipment Numbers</div>
                <div className="text-xs font-bold text-slate-900 mt-1">11008</div>
              </div>
              
              <div>
                <div className="text-[11px] text-slate-400 font-medium">Customer</div>
                <div className="text-xs font-bold text-slate-900 mt-1 truncate">ENGINEERED COMPOSITES INC</div>
              </div>
              
              <div>
                <div className="text-[11px] text-slate-400 font-medium">Sales Rep.</div>
                <div className="text-xs font-bold text-slate-900 mt-1">Randy Burtt</div>
              </div>
              
              <div>
                <div className="text-[11px] text-slate-400 font-medium">Terms</div>
                <div className="text-xs font-bold text-slate-900 mt-1">Net 45 Days</div>
              </div>
              
              <div>
                <div className="text-[11px] text-slate-400 font-medium">Date</div>
                <div className="text-xs font-bold text-slate-900 mt-1">07-08-2026</div>
              </div>
              
              
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Due Date</div>
                  <div className="text-xs font-bold text-slate-900 mt-1">08-20-2026</div>
                </div>
                
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Status</div>
                  <div className="text-xs font-bold text-emerald-600 mt-1">Cleared</div>
                </div>
              
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

            <div className="lg:col-span-6 space-y-6">

              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">

                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <h2 className="text-base font-bold text-slate-900">Category</h2>
                  <h2 className="text-base font-bold text-slate-900 pr-12">Amount</h2>
                </div>

                <div className="divide-y divide-gray-100">

                  <div className="grid grid-cols-12 py-3 text-xs">
                    <div className="col-span-5 font-medium text-slate-700">Item</div>
                    <div className="col-span-7 pl-4 border-l border-gray-200 text-slate-900 flex justify-between pr-12 font-medium">
                      <span>$</span>
                      <span>66,402.60</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 py-3 text-xs">
                    <div className="col-span-5 font-medium text-slate-700">Tax</div>
                    <div className="col-span-7 pl-4 border-l border-gray-200 text-slate-900 flex justify-between pr-12 font-medium">
                      <span>$</span>
                      <span>0.00</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 py-3 text-xs">
                    <div className="col-span-5 font-medium text-slate-700">Freight</div>
                    <div className="col-span-7 pl-4 border-l border-gray-200 text-slate-900 flex justify-between pr-12 font-medium">
                      <span>$</span>
                      <span>2,250.00</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 py-3 text-xs">
                    <div className="col-span-5 font-medium text-slate-700">Special Charges</div>
                    <div className="col-span-7 pl-4 border-l border-gray-200 text-slate-900 flex justify-between pr-12 font-medium">
                      <span>$</span>
                      <span>0.00</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-2 pt-4">
                  <div className="grid grid-cols-12 text-xs font-bold text-slate-900">
                    <div className="col-span-5">Total</div>
                    <div className="col-span-7 pl-4 border-l border-gray-200 flex justify-between pr-12">
                      <span>$</span>
                      <span>68,652.60</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm" data-purpose="special-charges-card">
                <h2 className="text-base font-bold text-slate-900 mb-4">Special Charges Breakdown</h2>
                <div className="w-full">

                  <div className="grid grid-cols-12 pb-2 text-xs font-semibold text-slate-800 border-b border-gray-200">
                    <div className="col-span-3">Charge No.</div>
                    <div className="col-span-3 pl-3 border-l border-gray-200">Amount</div>
                    <div className="col-span-6 pl-3 border-l border-gray-200">Description</div>
                  </div>

                  <div className="divide-y divide-gray-100 text-xs">

                    <div className="grid grid-cols-12 py-2.5 text-slate-700">
                      <div className="col-span-3">1</div>
                      <div className="col-span-3 pl-3 border-l border-gray-200 font-medium">$ 0.00</div>
                      <div className="col-span-6 pl-3 border-l border-gray-200"></div>
                    </div>

                    <div className="grid grid-cols-12 py-2.5 text-slate-700">
                      <div className="col-span-3">2</div>
                      <div className="col-span-3 pl-3 border-l border-gray-200 font-medium">$ 0.00</div>
                      <div className="col-span-6 pl-3 border-l border-gray-200"></div>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 mt-1"></div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm" data-purpose="notes-activity-card">

                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <h2 className="text-base font-bold text-slate-900">Notes</h2>
                  <button className="px-5 py-2 bg-secondary hover:bg-red-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors" type="button">
                    New
                  </button>
                </div>

                <div className="divide-y divide-gray-200">

                  <div className="py-5">
                    <div className="flex items-start justify-between">

                      <div className="flex items-start space-x-2.5">
                        <div className="text-red-500 mt-0.5">

                          <span className="material-icons-outlined">sentiment_satisfied</span>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800">
                            <span className="font-normal text-slate-600 mr-1.5">Saby</span>
                            <span>07-10-2026 | 11.23.00 PM</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-1.5">Release Quantity to be Increased to 60,000 Lbs</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 flex-shrink-0 ml-4">

                        <div className="flex items-center border border-gray-300 rounded px-2 py-1 bg-white text-slate-700 text-[11px] font-medium hover:bg-gray-50 cursor-pointer shadow-2xs">
                          <span>Attach1.xlsx</span>
                          <span className="ml-1.5 px-1 py-0.2 bg-emerald-600 text-white rounded text-[8px] font-bold">XLS</span>
                        </div>

                        <div className="flex items-center border border-gray-300 rounded px-2 py-1 bg-white text-slate-700 text-[11px] font-medium hover:bg-gray-50 cursor-pointer shadow-2xs">
                          <span>Attach2.pdf</span>
                          <span className="ml-1.5 px-1 py-0.2 bg-red-600 text-white rounded text-[8px] font-bold">PDF</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="py-5">
                    <div className="flex items-start justify-between">

                      <div className="flex items-start space-x-2.5">
                        <div className="text-red-500 mt-0.5">

                          <span className="material-icons-outlined">phone</span>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800">
                            <span className="font-normal text-slate-600 mr-1.5">Saby</span>
                            <span>07-10-2026 | 11.23.00 PM</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-1.5">Release Quantity to be Increased to 60,000 Lbs</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 flex-shrink-0 ml-4">

                        <div className="flex items-center border border-gray-300 rounded px-2 py-1 bg-white text-slate-700 text-[11px] font-medium hover:bg-gray-50 cursor-pointer shadow-2xs">
                          <span>Attach1.xlsx</span>
                          <span className="ml-1.5 px-1 py-0.2 bg-emerald-600 text-white rounded text-[8px] font-bold">XLS</span>
                        </div>

                        <div className="flex items-center border border-gray-300 rounded px-2 py-1 bg-white text-slate-700 text-[11px] font-medium hover:bg-gray-50 cursor-pointer shadow-2xs">
                          <span>Attach2.pdf</span>
                          <span className="ml-1.5 px-1 py-0.2 bg-red-600 text-white rounded text-[8px] font-bold">PDF</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="py-5">
                    <div className="flex items-start justify-between">

                      <div className="flex items-start space-x-2.5">
                        <div className="text-red-500 mt-0.5">

                          <span className="material-icons-outlined">mail</span>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800">
                            <span className="font-normal text-slate-600 mr-1.5">Saby</span>
                            <span>07-10-2026 | 11.23.00 PM</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-1.5">Release Quantity to be Increased to 60,000 Lbs</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 flex-shrink-0 ml-4">

                        <div className="flex items-center border border-gray-300 rounded px-2 py-1 bg-white text-slate-700 text-[11px] font-medium hover:bg-gray-50 cursor-pointer shadow-2xs">
                          <span>Attach1.xlsx</span>
                          <span className="ml-1.5 px-1 py-0.2 bg-emerald-600 text-white rounded text-[8px] font-bold">XLS</span>
                        </div>

                        <div className="flex items-center border border-gray-300 rounded px-2 py-1 bg-white text-slate-700 text-[11px] font-medium hover:bg-gray-50 cursor-pointer shadow-2xs">
                          <span>Attach2.pdf</span>
                          <span className="ml-1.5 px-1 py-0.2 bg-red-600 text-white rounded text-[8px] font-bold">PDF</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </main>
      </div>
    </div>
  );
};

export default InvoiceDetailsPage;
