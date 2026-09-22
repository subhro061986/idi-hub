import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../../layout/SideMenu";
import TopBar from "../../layout/TopBar";

const ShipmentDetailsPage = () => {
  const navigate = useNavigate();
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gotoDetails = () => {
    navigate("/shipment-details");
  }
  

  return (
    <div className="flex flex-1 w-full min-h-screen">
      <SideMenu/>
      <div className="flex-1 flex flex-col min-w-0 bg-[#F8F9FA]">
        <TopBar/>
        <main className="flex-1 p-6 md:p-8">
          
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Shipment Details</h1>
            <button className="inline-flex items-center gap-2 px-2 py-1 bg-white border border-gray-300 rounded-lg text-xs font-semibold text-slate-700 shadow-sm hover:bg-gray-50 focus:outline-none transition-colors" type="button">
              <span className="material-icons-outlined">arrow_back</span>
              Back
            </button>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-left">
              
              <div>
                <div className="text-[11px] text-slate-400 font-medium">Shipment Number</div>
                <div className="text-xs font-bold text-slate-900 mt-1">44227</div>
              </div>
              
              <div>
                <div className="text-[11px] text-slate-400 font-medium">Order Number</div>
                <div className="text-xs font-bold text-slate-900 mt-1">33308</div>
              </div>
              
              <div>
                <div className="text-[11px] text-slate-400 font-medium">Invoice Numbers</div>
                <div className="text-xs font-bold text-slate-900 mt-1">11008</div>
              </div>
              
              <div>
                <div className="text-[11px] text-slate-400 font-medium">Date</div>
                <div className="text-xs font-bold text-slate-900 mt-1 truncate">2026-09-16</div>
              </div>
              
              <div>
                <div className="text-[11px] text-slate-400 font-medium">Type</div>
                <div className="text-xs font-bold text-slate-900 mt-1">Outbound</div>
              </div>
              
              <div>
                <div className="text-[11px] text-slate-400 font-medium">Customer</div>
                <div className="text-xs font-bold text-slate-900 mt-1">HANWAH</div>
              </div>
              
              <div>
                <div className="text-[11px] text-slate-400 font-medium">Item Description</div>
                <div className="text-xs font-bold text-slate-900 mt-1">Lorem ipsum</div>
              </div>
              
              
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Customer Item Desc</div>
                  <div className="text-xs font-bold text-slate-900 mt-1">Lorem ipsum</div>
                </div>
                
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Ship Address</div>
                  <div className="text-xs font-bold text-emerald-600 mt-1">HQ</div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 font-medium">BOL</div>
                  <div className="text-xs font-bold text-emerald-600 mt-1">NA</div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Quantity</div>
                  <div className="text-xs font-bold text-emerald-600 mt-1">40397 lbs</div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Sales</div>
                  <div className="text-xs font-bold text-emerald-600 mt-1">$ 100397</div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Cogs</div>
                  <div className="text-xs font-bold text-emerald-600 mt-1">$ 100397</div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Material Cost</div>
                  <div className="text-xs font-bold text-emerald-600 mt-1">$ 100397</div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Overhead Cost</div>
                  <div className="text-xs font-bold text-emerald-600 mt-1">$ 100397</div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Labor Cost</div>
                  <div className="text-xs font-bold text-emerald-600 mt-1">$ 100397</div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Freight Cost</div>
                  <div className="text-xs font-bold text-emerald-600 mt-1">$ 100397</div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Tariff Cost</div>
                  <div className="text-xs font-bold text-emerald-600 mt-1">$ 100397</div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Inland Cost</div>
                  <div className="text-xs font-bold text-emerald-600 mt-1">$ 100397</div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Test Cost</div>
                  <div className="text-xs font-bold text-emerald-600 mt-1">$ 100397</div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 font-medium">DDP Cost</div>
                  <div className="text-xs font-bold text-emerald-600 mt-1">$ 100397</div>
                </div>
              
            </div>
          </div>


        </main>
      </div>
    </div>
  );
};

export default ShipmentDetailsPage;
