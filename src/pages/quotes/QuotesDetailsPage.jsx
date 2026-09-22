import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../../layout/SideMenu";
import TopBar from "../../layout/TopBar";
import Modal from "../../Common/Modal";
const QuotesDetailsPage = () => {
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
          
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Quote Details</h1>

            <div className="flex items-center gap-2 text-xs font-medium">
              <button className="px-4 py-1.5 rounded border border-slate-400 text-slate-800 bg-white hover:bg-slate-50 shadow-sm transition-colors" type="button">
                Send for Review
              </button>
              <button className="px-5 py-1.5 rounded bg-secondary hover:bg-rose-800 text-white font-semibold shadow-sm transition-colors" type="button">
                Print
              </button>
              <button className="px-3.5 py-1.5 rounded border border-slate-400 text-slate-800 bg-white hover:bg-slate-50 shadow-sm flex items-center gap-1.5 transition-colors" type="button">
                {/* <span className="material-icons-outlined">arrow_back</span> */}
                <span>Back</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200/80 p-5 shadow-sm relative mb-4">

            <button className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors" title="Edit Details" type="button">
              <span className="material-icons-outlined">edit_note</span>
            </button>

            <div className="grid grid-cols-10 gap-2 text-left">
              <div>
                <span className="block text-[11px] text-slate-400 font-normal mb-1">Quote No.</span>
                <span className="block text-xs font-semibold text-slate-900">26-001</span>
              </div>
              <div>
                <span className="block text-[11px] text-slate-400 font-normal mb-1">Status</span>
                <span className="block text-xs font-semibold text-slate-900">Accepted</span>
              </div>
              <div>
                <span className="block text-[11px] text-slate-400 font-normal mb-1">Date</span>
                <span className="block text-xs font-semibold text-slate-900">01-07-2026</span>
              </div>
              <div>
                <span className="block text-[11px] text-slate-400 font-normal mb-1">Customer</span>
                <span className="block text-xs font-semibold text-slate-900">Retterbush</span>
              </div>
              <div>
                <span className="block text-[11px] text-slate-400 font-normal mb-1">Acct. Mgr.</span>
                <span className="block text-xs font-semibold text-slate-900">J Merrell</span>
              </div>
              <div>
                <span className="block text-[11px] text-slate-400 font-normal mb-1">Contact</span>
                <span className="block text-xs font-semibold text-slate-900">Paul Retterbush</span>
              </div>
              <div>
                <span className="block text-[11px] text-slate-400 font-normal mb-1">Product</span>
                <span className="block text-xs font-semibold text-slate-900">46-16</span>
              </div>
              <div>
                <span className="block text-[11px] text-slate-400 font-normal mb-1">Packaging</span>
                <span className="block text-xs font-semibold text-slate-900">bulk</span>
              </div>
              <div>
                <span className="block text-[11px] text-slate-400 font-normal mb-1">Price</span>
                <span className="block text-xs font-semibold text-slate-900">2.71</span>
              </div>
              <div>
                <span className="block text-[11px] text-slate-400 font-normal mb-1">Release Quantity</span>
                <span className="block text-xs font-semibold text-slate-900">MOQ+</span>
              </div>
            </div>

            <div className="grid grid-cols-10 gap-2 text-left mt-5">
              <div>
                <span className="block text-[11px] text-slate-400 font-normal mb-1">Tiered</span>
                <span className="block text-xs font-semibold text-slate-900">0</span>
              </div>
              <div>
                <span className="block text-[11px] text-slate-400 font-normal mb-1">RM Cost</span>
                <span className="block text-xs font-semibold text-slate-900">0</span>
              </div>
              <div>
                <span className="block text-[11px] text-slate-400 font-normal mb-1">RM %</span>
                <span className="block text-xs font-semibold text-slate-900">0</span>
              </div>
              <div>
                <span className="block text-[11px] text-slate-400 font-normal mb-1">Sample Lot No.</span>
                <span className="block text-xs font-semibold text-slate-900">0</span>
              </div>
              <div>
                <span className="block text-[11px] text-slate-400 font-normal mb-1">OEM</span>
                <span className="block text-xs font-semibold text-slate-900">0</span>
              </div>
              <div>
                <span className="block text-[11px] text-slate-400 font-normal mb-1">EAV (lbs)</span>
                <span className="block text-xs font-semibold text-slate-900">1,000,000</span>
              </div>
              <div>
                <span className="block text-[11px] text-slate-400 font-normal mb-1">SMC / BMC</span>
                <span className="block text-xs font-semibold text-slate-900">SMC</span>
              </div>

              <div></div>
              <div></div>
              <button className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors" title="Edit Details" type="button">
                <span className="material-icons-outlined">edit_note</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200/80 p-5 shadow-sm mb-4">
            <h2 className="text-sm font-semibold text-slate-900 mb-3.5">Tiered Pricing</h2>
            <div className="w-1/2 overflow-hidden border border-slate-300">
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
                    <td className="py-2.5 px-3 border-r border-slate-300">4,000-7,999 lbs</td>
                    <td className="py-2.5 px-3 border-r border-slate-300">$ 1.60</td>
                    <td className="py-2.5 px-3"></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 border-r border-slate-300">8,000-19,999 lbs</td>
                    <td className="py-2.5 px-3 border-r border-slate-300">$ 1.55</td>
                    <td className="py-2.5 px-3"></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 border-r border-slate-300">&gt;20,000 lbs</td>
                    <td className="py-2.5 px-3 border-r border-slate-300">$ 1.50</td>
                    <td className="py-2.5 px-3"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200/80 p-5 shadow-sm mb-4">
            <h2 className="text-sm font-semibold text-slate-900 mb-3.5">Terms and Conditions</h2>
            <div className="border border-slate-300 rounded-lg p-4 bg-white relative flex justify-between">
              <ul className="text-[11px] text-slate-700 space-y-1 list-disc list-inside leading-relaxed">
                <li>The shipping terms for this quote areEx Works, Noblesville, Indiana, USA</li>
                <li>Payment terms at ___ day net of invoice date via wire transfer or ACH.</li>
                <li>Lead time for SMC &amp; military grades is ___ weeks from order date to shipment date. Lead time for BMC is ___ weeks.</li>
                <li>Shipping tolerances are +/- 15% of ordered quantity.</li>
                <li>Composites International Sales &amp; Services Guidelines and Standard Terms &amp; Conditions apply to all orders. Copies can be found at www.idicomposites.com.</li>
              </ul>

              <div className="w-1 bg-slate-300 rounded-full h-8 self-center ml-2 shrink-0"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 pb-6">

            <div className="bg-white rounded-lg border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between" data-purpose="notes-timeline">
              <div>
                <div className="flex items-center justify-between pb-3">
                  <h2 className="text-base font-semibold text-slate-900">Notes</h2>
                  <button className="px-5 py-1 rounded bg-secondary hover:bg-rose-800 text-white text-xs font-semibold shadow-sm transition-colors" type="button">
                    New
                  </button>
                </div>

                <div className="divide-y divide-slate-200 text-xs">

                  <div className="py-4 flex items-start justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-red-500">
                          <span className="material-icons-outlined">sentiment_satisfied</span>
                        </span>
                        <span className="text-slate-800 font-medium">Saby</span>
                        <span className="font-bold text-slate-900">07-10-2026 | 11.23.00 PM</span>
                      </div>
                      <p className="text-[11px] text-slate-600 pl-6">Release Quantity to be Increased to 60,000 Lbs</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-slate-300 rounded text-[11px] font-medium text-slate-800 bg-white">
                        Attach1.xlsx
                        <span className="w-3.5 h-3.5 rounded bg-emerald-600 text-[8px] text-white flex items-center justify-center font-bold">XLS</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-slate-300 rounded text-[11px] font-medium text-slate-800 bg-white">
                        Attach2.pdf
                        <span className="w-3.5 h-3.5 rounded bg-rose-600 text-[8px] text-white flex items-center justify-center font-bold">PDF</span>
                      </span>
                    </div>
                  </div>

                  <div className="py-4 flex items-start justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-red-500">
                          <span className="material-icons-outlined">phone</span>
                        </span>
                        <span className="text-slate-800 font-medium">Saby</span>
                        <span className="font-bold text-slate-900">07-10-2026 | 11.23.00 PM</span>
                      </div>
                      <p className="text-[11px] text-slate-600 pl-6">Release Quantity to be Increased to 60,000 Lbs</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-slate-300 rounded text-[11px] font-medium text-slate-800 bg-white">
                        Attach1.xlsx
                        <span className="w-3.5 h-3.5 rounded bg-emerald-600 text-[8px] text-white flex items-center justify-center font-bold">XLS</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-slate-300 rounded text-[11px] font-medium text-slate-800 bg-white">
                        Attach2.pdf
                        <span className="w-3.5 h-3.5 rounded bg-rose-600 text-[8px] text-white flex items-center justify-center font-bold">PDF</span>
                      </span>
                    </div>
                  </div>

                  <div className="py-4 flex items-start justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-red-500">
                          <span className="material-icons-outlined">mail</span>
                        </span>
                        <span className="text-slate-800 font-medium">Saby</span>
                        <span className="font-bold text-slate-900">07-10-2026 | 11.23.00 PM</span>
                      </div>
                      <p className="text-[11px] text-slate-600 pl-6">Release Quantity to be Increased to 60,000 Lbs</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-slate-300 rounded text-[11px] font-medium text-slate-800 bg-white">
                        Attach1.xlsx
                        <span className="w-3.5 h-3.5 rounded bg-emerald-600 text-[8px] text-white flex items-center justify-center font-bold">XLS</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-slate-300 rounded text-[11px] font-medium text-slate-800 bg-white">
                        Attach2.pdf
                        <span className="w-3.5 h-3.5 rounded bg-rose-600 text-[8px] text-white flex items-center justify-center font-bold">PDF</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200/80 p-5 shadow-sm" data-purpose="change-log-timeline">
              <h2 className="text-base font-semibold text-slate-900 pb-3">Change Log</h2>
              <div className="divide-y divide-slate-200 text-xs">

                <div className="py-3.5 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600">Saby</span>
                    <span className="font-bold text-slate-900">07-10-2026 | 3.23.00 PM</span>
                  </div>
                  <p className="text-[11px] text-slate-600">Updated Price from $1.1 to $1.55, Release Quantity from 40,000 lbs to 60,000 lbs</p>
                </div>

                <div className="py-3.5 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600">Saby</span>
                    <span className="font-bold text-slate-900">07-10-2026 | 3.23.00 PM</span>
                  </div>
                  <p className="text-[11px] text-slate-600">Updated RM Cost from $1.3 to $1.36</p>
                </div>

                <div className="py-3.5 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600">Saby</span>
                    <span className="font-bold text-slate-900">07-10-2026 | 3.23.00 PM</span>
                  </div>
                  <p className="text-[11px] text-slate-600">Updated Packaging from Bulk to Festooned</p>
                </div>

                <div className="py-3.5 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600">Saby</span>
                    <span className="font-bold text-slate-900">07-08-2026 | 10.23.00 AM</span>
                  </div>
                  <p className="text-[11px] text-slate-600">Created Quote No. 26-1000</p>
                </div>
              </div>
            </div>
          </div>

        </main>
        
      </div>
    </div>
  );
};

export default QuotesDetailsPage;
