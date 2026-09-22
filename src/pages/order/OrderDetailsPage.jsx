import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../../layout/SideMenu";
import TopBar from "../../layout/TopBar";

const OrderDetailsPage = () => {
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
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Order Details</h1>
            <button className="inline-flex items-center gap-2 px-2 py-1 bg-white border border-gray-300 rounded-lg text-xs font-semibold text-slate-700 shadow-sm hover:bg-gray-50 focus:outline-none transition-colors" type="button">
              <span className="material-icons-outlined">arrow_back</span>
              Back
            </button>
          </div>

          <div className="bg-white rounded-lg p-5 border border-slate-200/80 shadow-sm mb-4">
            <div className="grid grid-cols-5 gap-6">
              <div>
                <div className="text-xs text-slate-500 font-normal mb-1">Order No.</div>
                <div className="text-sm font-bold text-slate-900">33826</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-normal mb-1">Customer</div>
                <div className="text-sm font-bold text-slate-900">ENGINEERED COMPOSITES INC</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-normal mb-1">Contact</div>
                <div className="text-sm font-bold text-slate-900">Jeff Hansen</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-normal mb-1">Customer PO</div>
                <div className="text-sm font-bold text-slate-900">15622</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-normal mb-1">Sales Rep</div>
                <div className="text-sm font-bold text-slate-900">Randy Burtt</div>
              </div>
            </div>
          </div>


          <div className="bg-white rounded-lg border border-slate-200/80 shadow-sm p-5 mb-4">
            <div className="flex items-center justify-between pb-4">
              <h2 className="text-lg font-bold text-slate-900">Notes</h2>
              <button className="px-5 py-1.5 bg-secondary hover:bg-red-700 text-white text-xs font-semibold rounded shadow-sm transition-colors" type="button">
                New
              </button>
            </div>
            <div className="divide-y divide-slate-100">
              
              <div className="py-4 flex items-center justify-between">
                <div className="flex items-start space-x-3">
                  
                  <div className="mt-0.5 text-red-500">
                    <span className="material-icons-outlined">sentiment_satisfied</span>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-700">
                      <span className="text-slate-800">Saby</span>
                      <span className="mx-2 font-bold text-slate-900">07-10-2026 | 11.23.00 PM</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Release Quantity to be Increased to 60,000 Lbs</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="inline-flex items-center px-3 py-1 bg-slate-50 border border-slate-300 rounded text-xs text-slate-700 space-x-1.5 cursor-pointer hover:bg-slate-100">
                    <span>Attach1.xlsx</span>
                    <span className="px-1 bg-emerald-600 text-white rounded text-[9px] font-bold">XLS</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-slate-50 border border-slate-300 rounded text-xs text-slate-700 space-x-1.5 cursor-pointer hover:bg-slate-100">
                    <span>Attach2.pdf</span>
                    <span className="px-1 bg-red-600 text-white rounded text-[9px] font-bold">PDF</span>
                  </div>
                </div>
              </div>
              
              <div className="py-4 flex items-center justify-between">
                <div className="flex items-start space-x-3">
                  
                  <div className="mt-0.5 text-red-500">
                    <span className="material-icons-outlined">phone</span>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-700">
                      <span className="text-slate-800">Saby</span>
                      <span className="mx-2 font-bold text-slate-900">07-10-2026 | 11.23.00 PM</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Release Quantity to be Increased to 60,000 Lbs</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="inline-flex items-center px-3 py-1 bg-slate-50 border border-slate-300 rounded text-xs text-slate-700 space-x-1.5 cursor-pointer hover:bg-slate-100">
                    <span>Attach1.xlsx</span>
                    <span className="px-1 bg-emerald-600 text-white rounded text-[9px] font-bold">XLS</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-slate-50 border border-slate-300 rounded text-xs text-slate-700 space-x-1.5 cursor-pointer hover:bg-slate-100">
                    <span>Attach2.pdf</span>
                    <span className="px-1 bg-red-600 text-white rounded text-[9px] font-bold">PDF</span>
                  </div>
                </div>
              </div>
              
              <div className="py-4 flex items-center justify-between">
                <div className="flex items-start space-x-3">
                  
                  <div className="mt-0.5 text-red-500">
                    <span className="material-icons-outlined">mail</span>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-700">
                      <span className="text-slate-800">Saby</span>
                      <span className="mx-2 font-bold text-slate-900">07-10-2026 | 11.23.00 PM</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Release Quantity to be Increased to 60,000 Lbs</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="inline-flex items-center px-3 py-1 bg-slate-50 border border-slate-300 rounded text-xs text-slate-700 space-x-1.5 cursor-pointer hover:bg-slate-100">
                    <span>Attach1.xlsx</span>
                    <span className="px-1 bg-emerald-600 text-white rounded text-[9px] font-bold">XLS</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-slate-50 border border-slate-300 rounded text-xs text-slate-700 space-x-1.5 cursor-pointer hover:bg-slate-100">
                    <span>Attach2.pdf</span>
                    <span className="px-1 bg-red-600 text-white rounded text-[9px] font-bold">PDF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <h2 className="text-lg font-bold text-slate-900">Line Items</h2>
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700 border-collapse">
                  <thead className="bg-slate-50/50 border-b border-slate-200 font-semibold text-slate-800">
                    <tr>
                      <th className="py-2.5 px-4 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Item Desc.</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-4 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Customer Item Desc.</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-4 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Quantity</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-4 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Unit Price</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-4 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Promise Date</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-4 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Industry</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-4 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Market</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-4 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Segment</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-4">
                        <div className="flex items-center justify-between gap-1">
                          <span>Department</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50/75">
                      <td className="py-2.5 px-4 border-r border-slate-200 font-medium">S10-03-20 LIGHT GRAY</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">SMC-OLDCASBTLN BRIGHTLINE</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">80000</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">1.28</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">07-20-2026</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">UTIL</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">INFRA</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">LBT</td>
                      <td className="py-2.5 px-4">SMC</td>
                    </tr>
                    <tr className="hover:bg-slate-50/75">
                      <td className="py-2.5 px-4 border-r border-slate-200 font-medium">S10-03-20 LIGHT GRAY</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">SMC-OLDCASBTLN BRIGHTLINE</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">80000</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">1.28</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">08-06-2026</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">UTIL</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">INFRA</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">LBT</td>
                      <td className="py-2.5 px-4">SMC</td>
                    </tr>
                    <tr className="hover:bg-slate-50/75">
                      <td className="py-2.5 px-4 border-r border-slate-200 font-medium">S10-03-20 LIGHT GRAY</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">SMC-OLDCASBTLN BRIGHTLINE</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">160000</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">1.28</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">08-13-2026</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">UTIL</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">INFRA</td>
                      <td className="py-2.5 px-4 border-r border-slate-200">LBT</td>
                      <td className="py-2.5 px-4">SMC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-end pt-1">
              <button className="px-4 py-1 text-xs font-semibold text-red-600 border border-red-500 rounded hover:bg-red-50 transition-colors" type="button">
                View All
              </button>
            </div>
          </div>

          <div className="space-y-3 mb-4" data-purpose="shipments-table">
            <h2 className="text-lg font-bold text-slate-900">Shipments</h2>
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700 border-collapse">
                  <thead className="bg-slate-50/50 border-b border-slate-200 font-semibold text-slate-800">
                    <tr>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Number</span>
                          <span className="material-icons-outlined">arrow_upward</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Type</span>
                          <span className="material-icons-outlined">arrow_upward</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Item Description</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Customer Item<br />Description</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Ship Date</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>BOL</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Ship Address</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Sales</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>COGS</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Material Cost</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div className="text-center">
                          <span>Overhead<br />Cost</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div className="text-center">
                          <span>Labor<br />Cost</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div className="text-center">
                          <span>Freight<br />Cost</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3">
                        <div className="text-center">
                          <span>Other<br />Cost</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50/75">
                      <td className="py-2 px-3 border-r border-slate-200">1</td>
                      <td className="py-2 px-3 border-r border-slate-200">Outbound</td>
                      <td className="py-2 px-3 border-r border-slate-200">S10-03-20 LIGHT GRAY</td>
                      <td className="py-2 px-3 border-r border-slate-200">40000</td>
                      <td className="py-2 px-3 border-r border-slate-200">07-20-2026</td>
                      <td className="py-2 px-3 border-r border-slate-200">NA</td>
                      <td className="py-2 px-3 border-r border-slate-200">HQ</td>
                      <td className="py-2 px-3 border-r border-slate-200 font-medium">$ 1,02,400</td>
                      <td className="py-2 px-3 border-r border-slate-200 font-medium">$ 60,000</td>
                      <td className="py-2 px-3 border-r border-slate-200 font-medium">$ 40,000</td>
                      <td className="py-2 px-3 border-r border-slate-200 text-center font-medium">$4,000</td>
                      <td className="py-2 px-3 border-r border-slate-200 text-center font-medium">12,000</td>
                      <td className="py-2 px-3 border-r border-slate-200 text-center font-medium">2,000</td>
                      <td className="py-2 px-3 text-center font-medium">2,000</td>
                    </tr>
                    <tr className="hover:bg-slate-50/75">
                      <td className="py-2 px-3 border-r border-slate-200">2</td>
                      <td className="py-2 px-3 border-r border-slate-200">Outbound</td>
                      <td className="py-2 px-3 border-r border-slate-200">S10-03-20 LIGHT GRAY</td>
                      <td className="py-2 px-3 border-r border-slate-200">40000</td>
                      <td className="py-2 px-3 border-r border-slate-200">07-20-2026</td>
                      <td className="py-2 px-3 border-r border-slate-200">NA</td>
                      <td className="py-2 px-3 border-r border-slate-200">HQ</td>
                      <td className="py-2 px-3 border-r border-slate-200 font-medium">$ 1,02,400</td>
                      <td className="py-2 px-3 border-r border-slate-200 font-medium">$ 60,000</td>
                      <td className="py-2 px-3 border-r border-slate-200 font-medium">$ 40,000</td>
                      <td className="py-2 px-3 border-r border-slate-200 text-center font-medium">$4,000</td>
                      <td className="py-2 px-3 border-r border-slate-200 text-center font-medium">12,000</td>
                      <td className="py-2 px-3 border-r border-slate-200 text-center font-medium">2,000</td>
                      <td className="py-2 px-3 text-center font-medium">2,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-end pt-1">
              <button className="px-4 py-1 text-xs font-semibold text-red-600 border border-red-500 rounded hover:bg-red-50 transition-colors" type="button">
                View All
              </button>
            </div>
          </div>

          <div className="space-y-3 mb-4" data-purpose="invoices-table">
            <h2 className="text-lg font-bold text-slate-900">Invoices</h2>
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700 border-collapse">
                  <thead className="bg-slate-50/50 border-b border-slate-200 font-semibold text-slate-800">
                    <tr>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Invoice No.</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Shipment Nos.</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Date</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Due Date</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Amount</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Tax Amount</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div className="flex items-center justify-between gap-1">
                          <span>Due Date</span>
                          <span className="material-icons-outlined">filter_list</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div>Freight<br />Amount</div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div>Special<br />Charge 1</div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div>Special Charge<br />1 Desc.</div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div>Special<br />Charge 2</div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div>Special Charge<br />2 Desc.</div>
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200">
                        <div>Total<br />Amount</div>
                      </th>
                      <th className="py-2.5 px-3">
                        <div>Terms</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50/75">
                      <td className="py-2 px-3 border-r border-slate-200 font-medium">1</td>
                      <td className="py-2 px-3 border-r border-slate-200">1,2</td>
                      <td className="py-2 px-3 border-r border-slate-200">07-20-2026</td>
                      <td className="py-2 px-3 border-r border-slate-200">08-05-2026</td>
                      <td className="py-2 px-3 border-r border-slate-200 font-medium">102400</td>
                      <td className="py-2 px-3 border-r border-slate-200">0</td>
                      <td className="py-2 px-3 border-r border-slate-200">0</td>
                      <td className="py-2 px-3 border-r border-slate-200">0</td>
                      <td className="py-2 px-3 border-r border-slate-200"></td>
                      <td className="py-2 px-3 border-r border-slate-200"></td>
                      <td className="py-2 px-3 border-r border-slate-200"></td>
                      <td className="py-2 px-3 border-r border-slate-200"></td>
                      <td className="py-2 px-3 border-r border-slate-200 font-medium">102400</td>
                      <td className="py-2 px-3 font-medium">Net 45 Days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
        </main>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
