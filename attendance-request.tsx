import React from 'react';
import { 
  IoCellular,
  IoChevronBack,
  IoCalendarOutline,
  IoCheckmarkCircle,
  IoCameraOutline,
  IoSendOutline,
  IoInformationCircleOutline
} from "react-icons/io5";
import {
  IoIosWifi,
  IoIosBatteryFull
} from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";

export default function AttendanceRequestForm() {
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
      <div className="min-h-[80px] bg-white shadow-sm flex items-center px-4">
        <button className="w-8 h-8 flex items-center justify-center">
          <IoChevronBack className="w-6 h-6 text-[#007AFF]" />
        </button>
        <h1 className="flex-1 text-xl font-semibold text-black text-center pr-8">हाजिरी का अनुरोध</h1>
      </div>

      {/* Form Content Card */}
      <div className="mx-4 mt-4 bg-white rounded-[20px] shadow-sm p-6">
        {/* Date Section */}
        <div className="min-h-[88px]">
          <label className="text-[13px] font-medium text-[#8E8E93] block mb-2">तारीख</label>
          <div className="bg-[#F7F7F7] rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <IoCalendarOutline className="w-5 h-5 text-[#007AFF]" />
              <span className="text-[17px] font-semibold text-black">आज, 16 दिसंबर 2024</span>
            </div>
            <IoCheckmarkCircle className="w-5 h-5 text-[#34C759]" />
          </div>
          <p className="text-xs font-normal text-[#8E8E93] mt-2">आज की तारीख स्वचालित रूप से चयनित है</p>
        </div>

        {/* Daily Wage Section */}
        <div className="min-h-[96px] mt-5">
          <label className="text-[13px] font-medium text-[#8E8E93] block mb-2">दैनिक मजदूरी</label>
          <div className="border border-[#E5E5EA] rounded-xl px-4 py-4 flex items-center gap-3">
            <FaRupeeSign className="w-4 h-4 text-[#007AFF]" />
            <input 
              type="text" 
              value="500" 
              className="flex-1 text-[17px] font-normal text-black bg-transparent outline-none"
              readOnly
            />
          </div>
          <p className="text-xs font-normal text-[#8E8E93] mt-2">मानक दैनिक दर (संपादन योग्य)</p>
        </div>

        {/* Photo Capture Section */}
        <div className="min-h-[160px] mt-6">
          <label className="text-[13px] font-medium text-[#8E8E93] block mb-2">कार्य/साइट की फोटो</label>
          <button className="w-full border-2 border-dashed border-[#007AFF] rounded-2xl py-8 flex flex-col items-center justify-center gap-3">
            <IoCameraOutline className="w-12 h-12 text-[#007AFF]" />
            <span className="text-[17px] font-semibold text-[#007AFF] text-center px-4">आज के काम / साइट की फोटो लें</span>
            <span className="text-[13px] font-normal text-[#8E8E93] text-center">फोटो अपलोड करने के लिए टैप करें</span>
          </button>
        </div>

        {/* Submit Button */}
        <div className="min-h-[56px] mt-8">
          <button className="w-full bg-[#34C759] rounded-[14px] shadow-sm flex items-center justify-center gap-2 py-4">
            <IoSendOutline className="w-5 h-5 text-white" />
            <span className="text-[17px] font-semibold text-white">ठेकेदार को भेजें</span>
          </button>
        </div>

        {/* Additional Information */}
        <div className="mt-5 bg-[#007AFF]/5 rounded-xl p-4 flex items-start gap-3">
          <IoInformationCircleOutline className="w-4 h-4 text-[#007AFF] mt-0.5 flex-shrink-0" />
          <p className="text-[13px] font-normal text-[#007AFF]">आपकी हाजिरी ठेकेदार संजय सिंह को भेजी जाएगी</p>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="flex-1 min-h-[40px]"></div>

      {/* Home Indicator */}
      <div className="h-[34px] w-full flex items-center justify-center bg-[#F2F2F7]">
        <div className="w-[134px] h-[5px] bg-[#3C3C43] opacity-60 rounded-full" />
      </div>
    </div>
  );
}