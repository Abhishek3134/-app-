import React from 'react';
import { 
  IoCellular,
  IoChevronForward
} from "react-icons/io5";
import {
  IoIosWifi,
  IoIosBatteryFull
} from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";

export default function ThekedarDashboard() {
  const laborers = [
    { name: 'राजेश कुमार', status: 'pending', balance: 2500 },
    { name: 'विक्रम सिंह', status: 'approved', balance: 0 },
    { name: 'अमित यादव', status: 'pending', balance: 1200 },
    { name: 'सुरेश पटेल', status: 'approved', balance: 500 },
    { name: 'मनोज शर्मा', status: 'absent', balance: 800 },
    { name: 'रवि वर्मा', status: 'pending', balance: 3100 },
    { name: 'संदीप कुमार', status: 'approved', balance: 0 },
    { name: 'दीपक राज', status: 'pending', balance: 1800 }
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'pending':
        return { label: 'लंबित', bgColor: 'bg-[#FF9500]/10', textColor: 'text-[#FF9500]' };
      case 'approved':
        return { label: 'स्वीकृत', bgColor: 'bg-[#34C759]/10', textColor: 'text-[#34C759]' };
      case 'absent':
        return { label: 'अनुपस्थित', bgColor: 'bg-[#8E8E93]/10', textColor: 'text-[#8E8E93]' };
      default:
        return { label: '', bgColor: '', textColor: '' };
    }
  };

  return (
    <div className="w-[390px] min-h-[844px] bg-[#F2F2F7] flex flex-col font-['Inter']">
      {/* Status Bar */}
      <div className="h-11 bg-white px-5 flex items-center justify-between">
        <span className="text-sm font-medium">9:41</span>
        <div className="flex items-center gap-2">
          <IoCellular className="w-4 h-4" />
          <IoIosWifi className="w-4 h-4" />
          <IoIosBatteryFull className="w-4 h-4" />
        </div>
      </div>

      {/* Top Bar */}
      <div className="min-h-[88px] bg-white shadow-sm flex items-center justify-center border-b border-[#E5E5EA]">
        <h1 className="text-2xl font-bold text-black">संजय सिंह कंस्ट्रक्शन</h1>
      </div>

      {/* Pending Approval Banner */}
      <div className="mx-4 mt-4">
        <div className="min-h-[64px] bg-[#FF3B30]/8 rounded-xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <span className="text-xl">🚨</span>
            <span className="text-[15px] font-semibold text-[#FF3B30]">आज आपके पास 5 लंबित हाजिरी अनुरोध हैं</span>
          </div>
          <IoChevronForward className="w-5 h-5 text-[#FF3B30] flex-shrink-0" />
        </div>
      </div>

      {/* Section Header */}
      <div className="min-h-[48px] flex items-center px-5 mt-4">
        <h2 className="text-[17px] font-semibold text-black">मजदूर सूची</h2>
      </div>

      {/* Laborer List */}
      <div className="px-3 pb-4">
        {laborers.map((laborer, index) => {
          const statusConfig = getStatusConfig(laborer.status);
          const firstLetter = laborer.name.charAt(0);
          
          return (
            <div 
              key={index} 
              className="min-h-[96px] bg-white rounded-2xl shadow-sm p-4 flex items-center gap-4 mb-2"
            >
              {/* Profile Icon */}
              <div className="w-10 h-10 rounded-full bg-[#007AFF] flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">{firstLetter}</span>
              </div>

              {/* Middle Section */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[17px] font-semibold text-black mb-1">{laborer.name}</h3>
                <div className={`inline-flex items-center px-2.5 py-1 rounded-lg ${statusConfig.bgColor}`}>
                  <span className={`text-[13px] font-medium ${statusConfig.textColor}`}>
                    {statusConfig.label}
                  </span>
                </div>
              </div>

              {/* Right Section */}
              <div className="text-right flex-shrink-0">
                <div className="flex items-center justify-end gap-0.5 mb-0.5">
                  <FaRupeeSign className={`w-3.5 h-3.5 ${laborer.balance > 0 ? 'text-[#FF3B30]' : 'text-[#8E8E93]'}`} />
                  <span className={`text-[17px] font-semibold ${laborer.balance > 0 ? 'text-[#FF3B30]' : 'text-[#8E8E93]'}`}>
                    {laborer.balance.toLocaleString('en-IN')}
                  </span>
                </div>
                <span className="text-[11px] font-normal text-[#8E8E93]">बकाया</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Spacing */}
      <div className="min-h-[40px]"></div>

      {/* Home Indicator */}
      <div className="h-[34px] w-full flex items-center justify-center bg-[#F2F2F7]">
        <div className="w-[134px] h-[5px] bg-[#3C3C43] opacity-60 rounded-full" />
      </div>
    </div>
  );
}