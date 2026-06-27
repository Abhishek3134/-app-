import React from 'react';
import { 
  IoCellular,
  IoWalletOutline,
  IoCalendarOutline,
  IoCheckmarkCircle
} from "react-icons/io5";
import {
  IoIosWifi,
  IoIosBatteryFull
} from "react-icons/io";
import { 
  FaRupeeSign,
  FaUniversity,
  FaCheckCircle
} from "react-icons/fa";
import { 
  MdVerified,
  MdCalendarToday,
  MdTrendingUp
} from "react-icons/md";

export default function LaborDashboard() {
  const recentActivities = [
    { date: '15 दिसंबर', status: 'उपस्थित', amount: '₹500' },
    { date: '14 दिसंबर', status: 'उपस्थित', amount: '₹500' },
    { date: '13 दिसंबर', status: 'अनुपस्थित', amount: '₹0' }
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

      {/* Profile Header Section */}
      <div className="min-h-[120px] bg-[#F2F2F7] px-4 py-5 flex items-center gap-4">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop" 
          alt="Profile" 
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h1 className="text-xl font-semibold text-black">राजेश कुमार</h1>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-[15px] font-normal text-[#8E8E93]">ठेकेदार: संजय सिंह</span>
            <MdVerified className="w-4 h-4 text-[#007AFF]" />
          </div>
        </div>
      </div>

      {/* Hisab Summary Widget */}
      <div className="mx-4 mt-4 bg-white rounded-2xl p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-black mb-4">हिसाब सारांश</h2>
        
        {/* Total Earned */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#34C759]/10 flex items-center justify-center">
              <FaRupeeSign className="w-4 h-4 text-[#34C759]" />
            </div>
            <span className="text-[15px] font-medium text-[#8E8E93]">कुल कमाई</span>
          </div>
          <span className="text-2xl font-bold text-[#34C759]">₹12,500</span>
        </div>
        <div className="h-[1px] bg-[#E5E5EA] mb-4"></div>

        {/* Paid to Bank */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#007AFF]/10 flex items-center justify-center">
              <FaUniversity className="w-4 h-4 text-[#007AFF]" />
            </div>
            <span className="text-[15px] font-medium text-[#8E8E93]">बैंक में जमा</span>
          </div>
          <span className="text-2xl font-bold text-[#007AFF]">₹10,000</span>
        </div>
        <div className="h-[1px] bg-[#E5E5EA] mb-4"></div>

        {/* Remaining Balance */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FF9500]/10 flex items-center justify-center">
              <IoWalletOutline className="w-4 h-4 text-[#FF9500]" />
            </div>
            <span className="text-[15px] font-medium text-[#8E8E93]">शेष राशि</span>
          </div>
          <span className="text-2xl font-bold text-[#FF9500]">₹2,500</span>
        </div>
      </div>

      {/* Primary Action Button */}
      <div className="mx-4 mt-6">
        <button className="w-full min-h-[56px] bg-[#007AFF] rounded-xl flex items-center justify-center gap-2 shadow-sm">
          <IoCalendarOutline className="w-5 h-5 text-white" />
          <span className="text-[17px] font-semibold text-white">आज की हाजिरी दर्ज करें</span>
        </button>
      </div>

      {/* Quick Stats Section */}
      <div className="mx-4 mt-5 flex gap-2">
        <div className="flex-1 bg-white rounded-xl p-4 shadow-sm">
          <div className="flex flex-col items-center">
            <MdCalendarToday className="w-6 h-6 text-[#007AFF] mb-2" />
            <span className="text-[13px] font-normal text-[#8E8E93] text-center">इस महीने की हाजिरी</span>
            <span className="text-xl font-bold text-black mt-1">22/26 दिन</span>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-xl p-4 shadow-sm">
          <div className="flex flex-col items-center">
            <MdTrendingUp className="w-6 h-6 text-[#34C759] mb-2" />
            <span className="text-[13px] font-normal text-[#8E8E93] text-center">औसत दैनिक मजदूरी</span>
            <span className="text-xl font-bold text-black mt-1">₹480</span>
          </div>
        </div>
      </div>

      {/* Recent Activity List */}
      <div className="mx-4 mt-5">
        <h2 className="text-lg font-semibold text-black mb-3">हाल की गतिविधि</h2>
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          {recentActivities.map((activity, index) => (
            <div key={index}>
              <div className="flex items-center justify-between px-4 py-4">
                <span className="text-[15px] font-medium text-black">{activity.date}</span>
                <div className="flex items-center gap-2">
                  {activity.status === 'उपस्थित' ? (
                    <FaCheckCircle className="w-4 h-4 text-[#34C759]" />
                  ) : null}
                  <span className={`text-[15px] font-medium ${activity.status === 'उपस्थित' ? 'text-[#34C759]' : 'text-[#FF3B30]'}`}>
                    {activity.status}
                  </span>
                </div>
                <span className="text-[15px] font-semibold text-black">{activity.amount}</span>
              </div>
              {index < recentActivities.length - 1 && (
                <div className="h-[1px] bg-[#E5E5EA] mx-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Safe Area Spacing */}
      <div className="flex-1 min-h-[80px]"></div>

      {/* Home Indicator */}
      <div className="h-[34px] w-full flex items-center justify-center bg-[#F2F2F7]">
        <div className="w-[134px] h-[5px] bg-[#3C3C43] opacity-60 rounded-full" />
      </div>
    </div>
  );
}