import React from 'react';
import { 
  IoCellular,
  IoChevronBack,
  IoCheckmarkCircle
} from "react-icons/io5";
import {
  IoIosWifi,
  IoIosBatteryFull
} from "react-icons/io";
import {
  IoBusiness,
  IoCard,
  IoCode,
  IoWallet,
  IoHandLeftOutline
} from "react-icons/io5";
export default function PayoutScreen() {
  const suggestedAmounts = ['₹500', '₹1000', '₹2000'];
  
  const bankDetails = [
    { icon: IoBusiness, label: 'बैंक का नाम: भारतीय स्टेट बैंक' },
    { icon: IoCard, label: 'खाता संख्या: 1234 5678 9012' },
    { icon: IoCode, label: 'IFSC कोड: SBIN0001234' }
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
        <h1 className="text-2xl font-bold text-black">भुगतान भेजें</h1>
      </div>
      {/* Content Container */}
      <div className="flex-1 px-4 pt-4 pb-4">
        {/* Laborer Profile Card */}
        <div className="min-h-[120px] bg-white rounded-2xl shadow-sm p-4 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#007AFF] to-[#34C759] flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-bold text-white">र</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[17px] font-semibold text-black">रमेश कुमार</span>
                <IoCheckmarkCircle className="w-4 h-4 text-[#34C759]" />
              </div>
              <div className="inline-flex items-center px-3 py-1 bg-[#F2F2F7] rounded-lg">
                <span className="text-[13px] font-medium text-[#8E8E93]">मजदूर</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bank Details Section */}
        <div className="mb-3">
          <p className="text-[15px] font-semibold text-[#8E8E93] mb-2 px-1">बैंक विवरण</p>
          <div className="bg-white rounded-2xl shadow-sm p-4">
            {bankDetails.map((detail, index) => (
              <div key={index} className="min-h-[44px] flex items-center gap-3 mb-2 last:mb-0">
                <detail.icon className="w-5 h-5 text-[#8E8E93] flex-shrink-0" />
                <span className="text-[15px] font-normal text-black">{detail.label}</span>
              </div>
            ))}
            <div className="min-h-[44px] flex items-center gap-2 mt-3 pt-3 border-t border-[#E5E5EA]">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#34C759]/10 rounded-lg">
                <IoCheckmarkCircle className="w-4 h-4 text-[#34C759]" />
                <span className="text-[13px] font-medium text-[#34C759]">सत्यापित</span>
              </div>
            </div>
          </div>
        </div>
        {/* Amount Input Section */}
        <div className="mb-3">
          <p className="text-[15px] font-semibold text-[#8E8E93] mb-2 px-1">भुगतान राशि</p>
          <div className="min-h-[64px] bg-[#F2F2F7] rounded-xl flex items-center justify-center px-4 mb-3">
            <span className="text-[28px] font-semibold text-[#8E8E93] mr-2">₹</span>
            <span className="text-[28px] font-bold text-black">1500</span>
          </div>
          <div className="flex items-center gap-2">
            {suggestedAmounts.map((amount, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-[#007AFF]/10 rounded-full"
              >
                <span className="text-[13px] font-medium text-[#007AFF]">{amount}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Payment Method Section */}
        <div className="mb-4">
          <p className="text-[15px] font-semibold text-[#8E8E93] mb-2 px-1">भुगतान विधि</p>
          
          {/* Option 1 - Digital Payment */}
          <div className="min-h-[88px] bg-white border-[1.5px] border-[#007AFF] rounded-xl p-4 flex items-center gap-3 mb-3">
            <IoWallet className="w-6 h-6 text-[#007AFF] flex-shrink-0" />
            <div className="flex-1">
              <p className="text-[15px] font-semibold text-[#007AFF]">IMPS/UPI से भुगतान करें</p>
              <p className="text-[13px] font-normal text-[#8E8E93] mt-0.5">तुरंत स्थानांतरण</p>
            </div>
            <div className="w-5 h-5 rounded-full border-2 border-[#007AFF] flex items-center justify-center flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#007AFF]"></div>
            </div>
          </div>
{/* Option 2 - Manual Confirmation */}
          <div className="min-h-[88px] bg-white rounded-xl p-4 flex items-center gap-3">
            <IoHandLeftOutline className="w-6 h-6 text-black flex-shrink-0" />
            <div className="flex-1">
              <p className="text-[15px] font-semibold text-black">मैंने यह राशि स्थानांतरित की है</p>
              <p className="text-[13px] font-normal text-[#8E8E93] mt-0.5">मैनुअल पुष्टि</p>
            </div>
            <div className="w-5 h-5 rounded-full border-2 border-[#E5E5EA] flex-shrink-0"></div>
          </div>
        </div>
      </div>
      {/* Action Button Section */}
      <div className="px-4 pb-4">
        <button className="w-full min-h-[52px] bg-[#007AFF] rounded-xl flex items-center justify-center shadow-md">
          <span className="text-[17px] font-semibold text-white">भुगतान जारी रखें</span>
        </button>
      </div>
      {/* Bottom Safe Area */}
      <div className="min-h-[26px] bg-[#F2F2F7]"></div>
      {/* Home Indicator */}
      <div className="h-[34px] w-full flex items-center justify-center bg-[#F2F2F7]">
        <div className="w-[134px] h-[5px] bg-black opacity-60 rounded-full" />
      </div>
    </div>
  );
}