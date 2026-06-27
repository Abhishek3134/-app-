import React from 'react';
import { 
  IoCellular,
  IoChevronBack,
  IoTimeOutline,
  IoCamera
} from "react-icons/io5";
import {
  IoIosWifi,
  IoIosBatteryFull
} from "react-icons/io";
import { IoMdClose, IoMdCheckmark } from "react-icons/io";

export default function AttendanceApprovalScreen() {
  const requests = [
    {
      name: 'रमेश कुमार',
      initial: 'र',
      gradient: 'from-[#007AFF] to-[#34C759]',
      amount: 500,
      status: 'पूर्ण दिवस',
      statusColor: '#34C759',
      time: '2 घंटे पहले'
    },
    {
      name: 'सुनील वर्मा',
      initial: 'सु',
      gradient: 'from-[#FF3B30] to-[#FF9500]',
      amount: 350,
      status: 'आधा दिवस',
      statusColor: '#34C759',
      time: '3 घंटे पहले'
    },
    {
      name: 'विकास यादव',
      initial: 'वि',
      gradient: 'from-[#34C759] to-[#007AFF]',
      amount: 500,
      status: 'पूर्ण दिवस',
      statusColor: '#34C759',
      time: '4 घंटे पहले'
    },
    {
      name: 'अमित पाटिल',
      initial: 'अ',
      gradient: 'from-[#FF9500] to-[#FF3B30]',
      amount: 500,
      status: 'पूर्ण दिवस',
      statusColor: '#34C759',
      time: '5 घंटे पहले'
    },
    {
      name: 'राज कुमार',
      initial: 'रा',
      gradient: 'from-[#007AFF] to-[#FF9500]',
      amount: 450,
      status: 'ओवरटाइम',
      statusColor: '#FF9500',
      time: '6 घंटे पहले'
    }
  ];

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

      {/* Header Section */}
      <div className="min-h-[88px] bg-white flex items-center justify-center relative px-4">
        <IoChevronBack className="w-6 h-6 text-black absolute left-4" />
        <h1 className="text-2xl font-bold text-black">हाजिरी अनुमोदन</h1>
      </div>

      {/* Summary Card */}
      <div className="mx-4 mt-4">
        <div className="min-h-[80px] bg-[#007AFF]/8 rounded-xl p-4 flex items-center gap-3">
          <IoTimeOutline className="w-6 h-6 text-[#007AFF] flex-shrink-0" />
          <div className="flex-1">
            <p className="text-[15px] font-semibold text-[#007AFF]">आज 5 अनुरोध लंबित हैं</p>
            <p className="text-[13px] font-normal text-[#8E8E93] mt-0.5">कुल राशि: ₹2,800</p>
          </div>
        </div>
      </div>

      {/* Request Cards Section */}
      <div className="px-3 mt-2 pb-4">
        {requests.map((request, index) => (
          <div key={index} className="min-h-[180px] bg-white rounded-2xl shadow-sm p-4 mb-2">
            {/* Card Top Section */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${request.gradient} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-xl font-bold text-white">{request.initial}</span>
                </div>
                <span className="text-[17px] font-semibold text-black">{request.name}</span>
              </div>
              <span className="text-[13px] font-normal text-[#8E8E93]">{request.time}</span>
            </div>

            {/* Request Details Box */}
            <div className="min-h-[60px] bg-[#F2F2F7] rounded-xl p-3 mb-3">
              <p className="text-[13px] font-medium text-[#8E8E93] mb-1">अनुरोध</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-black">₹{request.amount}</span>
                <div 
                  className="px-3 py-1 rounded-full"
                  style={{ 
                    backgroundColor: `${request.statusColor}26`,
                    color: request.statusColor 
                  }}
                >
                  <span className="text-xs font-medium">{request.status}</span>
                </div>
              </div>
            </div>

            {/* Photo Button */}
            <button className="w-full min-h-[44px] bg-white border-[1.5px] border-[#007AFF] rounded-lg flex items-center justify-center gap-2 mb-3">
              <IoCamera className="w-5 h-5 text-[#007AFF]" />
              <span className="text-[15px] font-semibold text-[#007AFF]">कार्य फ़ोटो देखें</span>
            </button>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-3">
              <button className="flex-1 min-h-[48px] bg-[#FF3B30]/10 border-[1.5px] border-[#FF3B30] rounded-lg flex items-center justify-center gap-2">
                <IoMdClose className="w-5 h-5 text-[#FF3B30]" />
                <span className="text-[15px] font-semibold text-[#FF3B30]">अस्वीकार</span>
              </button>
              <button className="flex-1 min-h-[48px] bg-[#34C759] rounded-lg flex items-center justify-center gap-2">
                <IoMdCheckmark className="w-5 h-5 text-white" />
                <span className="text-[15px] font-semibold text-white">स्वीकृत करें</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Spacing */}
      <div className="min-h-[60px]"></div>

      {/* Home Indicator */}
      <div className="h-[34px] w-full flex items-center justify-center bg-[#F2F2F7]">
        <div className="w-[134px] h-[5px] bg-black opacity-60 rounded-full" />
      </div>
    </div>
  );
}