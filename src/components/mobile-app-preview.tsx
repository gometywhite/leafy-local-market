
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Plus } from "lucide-react";

const MobileAppPreview = () => {
  return (
    <div className="relative mx-auto">
      <div className="relative mx-auto bg-gray-800 rounded-[3rem] h-[600px] w-[300px] shadow-xl overflow-hidden border-[14px] border-gray-800">
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-3xl z-30"></div>
        
        {/* Screen Content */}
        <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden bg-cream pb-4">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-5 h-8 bg-green-DEFAULT">
            <span className="text-white text-xs">9:41</span>
            <div className="flex space-x-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 9.5C19.1046 9.5 20 10.3954 20 11.5V17.5C20 18.6046 19.1046 19.5 18 19.5H6C4.89543 19.5 4 18.6046 4 17.5V11.5C4 10.3954 4.89543 9.5 6 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 4.5V14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 8.5L12 4.5L16 8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.7834 7.20075C18.0858 7.20075 18.3623 7.13075 18.3623 6.48236C18.3623 5.83398 18.0858 5.76398 17.7834 5.76398H16.3623C16.06 5.76398 15.7834 5.83398 15.7834 6.48236C15.7834 7.13075 16.06 7.20075 16.3623 7.20075H17.7834Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12.0774 14.916C10.2811 14.916 8.82463 13.4588 8.82463 11.6617C8.82463 9.86456 10.2811 8.40741 12.0774 8.40741C13.8738 8.40741 15.3302 9.86456 15.3302 11.6617C15.3302 13.4588 13.8738 14.916 12.0774 14.916Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M17.0852 19.1675C17.3644 19.1675 17.4634 19.0064 17.3352 18.7517C16.6615 17.4881 15.4095 16.666 13.9634 16.666H10.1915C8.74151 16.666 7.48953 17.4881 6.81582 18.7517C6.68772 19.0064 6.78675 19.1675 7.06596 19.1675H17.0852Z" fill="white"/>
                <path d="M16.4364 19.1675H7.77404C6.83426 19.1675 6.34437 18.1343 6.87681 17.3268C7.8153 15.9201 9.73904 15.166 12.1052 15.166C14.4714 15.166 16.3951 15.9201 17.3336 17.3268C17.866 18.1343 17.3761 19.1675 16.4364 19.1675Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12.1053 14.416C10.3089 14.416 8.85246 12.9588 8.85246 11.1617C8.85246 9.36456 10.3089 7.90741 12.1053 7.90741C13.9016 7.90741 15.358 9.36456 15.358 11.1617C15.358 12.9588 13.9016 14.416 12.1053 14.416Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 7.38909L8.38909 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.6109 5L20 7.38909" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.97053 19.0003C9.52866 15.8271 14.4714 15.8271 16.0295 19.0003" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 10L12 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.3" x="2" y="9" width="6" height="12" rx="1" fill="white"/>
                <rect opacity="0.5" x="9" y="5" width="6" height="16" rx="1" fill="white"/>
                <rect opacity="0.8" x="16" y="3" width="6" height="18" rx="1" fill="white"/>
              </svg>
            </div>
          </div>
          
          {/* App Header */}
          <div className="bg-white px-4 py-3 flex justify-between items-center shadow-sm">
            <div className="flex items-center">
              <div className="w-7 h-7 bg-green-DEFAULT rounded-full flex items-center justify-center mr-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                  <path d="M8.5 8.5v.01" />
                  <path d="M16 15.5v.01" />
                  <path d="M12 12v.01" />
                  <path d="M11 17v.01" />
                  <path d="M7 14v.01" />
                </svg>
              </div>
              <span className="font-semibold text-sm text-green-DEFAULT">GreenThumb</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 10C20 14.4183 16.4183 18 12 18C7.58172 18 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="#2D6A4F" strokeWidth="1.5"/>
                <path d="M19.4144 17L21.7071 19.2929C22.0976 19.6834 22.0976 20.3166 21.7071 20.7071C21.3166 21.0976 20.6834 21.0976 20.2929 20.7071L18 18.4142" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div className="relative">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 13.743C6 14.4409 6.41613 15.061 7.05385 15.316L10.7538 17.0021C11.5153 17.3136 12.3457 17.3136 13.1072 17.0021L16.8071 15.316C17.4449 15.061 17.861 14.4409 17.861 13.743V6.375C17.861 5.27043 16.8487 4.5 15.861 5L13.861 6V10.9711C13.861 11.7934 13.3198 12.5023 12.5308 12.7118L10.861 13.25C9.86102 13.5 8.86102 12.729 8.86102 11.6645V4.5L8.05284 4L7.05385 3.5C6.41613 3.245 6 3.62457 6 4.32254V13.743Z" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border border-white"></div>
              </div>
            </div>
          </div>
          
          {/* Seller Dashboard */}
          <div className="p-3">
            <div className="bg-white rounded-lg p-3 mb-3 shadow-sm">
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-semibold text-green-DEFAULT">My Products</h2>
                <Button 
                  size="sm"
                  variant="ghost"
                  className="h-7 text-xs text-green-DEFAULT hover:text-green-DEFAULT hover:bg-green-lighter"
                >
                  View All
                </Button>
              </div>
              
              <div className="mt-2 grid grid-cols-2 gap-2">
                <ProductItem 
                  name="Fresh Tomatoes" 
                  price="4.50"
                  unit="lb"
                  image="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
                <ProductItem 
                  name="Basil" 
                  price="2.00"
                  unit="bunch"
                  image="https://images.unsplash.com/photo-1588899451640-9ea54c7734d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                />
              </div>
            </div>
            
            {/* Add Product Button */}
            <div className="bg-white rounded-lg p-4 flex justify-center items-center shadow-sm">
              <div className="flex flex-col items-center">
                <div className="mb-2 w-14 h-14 bg-green-lighter rounded-full flex items-center justify-center">
                  <Camera className="h-6 w-6 text-green-DEFAULT" />
                </div>
                <span className="text-sm font-medium text-green-DEFAULT">Add New Product</span>
                <span className="text-xs text-gray-500 mt-1">Tap to capture photo</span>
              </div>
            </div>
          </div>
          
          {/* Bottom Navigation */}
          <div className="absolute bottom-0 inset-x-0 h-14 bg-white border-t flex justify-around items-center">
            <button className="flex flex-col items-center justify-center w-16 py-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10806L7.88403 3.86705C9.88939 2.62247 10.8921 2 12 2C13.1079 2 14.1106 2.62247 16.116 3.86705L18.116 5.10806C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039Z" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 18H9" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="text-[10px] text-green-DEFAULT font-medium mt-0.5">Home</span>
            </button>
            
            <button className="flex flex-col items-center justify-center w-16 py-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 10H2" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 14H6" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 2H5C3.343 2 2 3.343 2 5V19C2 20.657 3.343 22 5 22H19C20.657 22 22 20.657 22 19V5C22 3.343 20.657 2 19 2Z" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[10px] text-gray-400 font-medium mt-0.5">Orders</span>
            </button>
            
            <button className="flex flex-col items-center justify-center relative">
              <div className="absolute -top-5 w-14 h-14 bg-green-DEFAULT rounded-full flex items-center justify-center shadow-lg">
                <Plus className="h-8 w-8 text-white" />
              </div>
              <span className="text-[10px] text-gray-400 font-medium mt-8">Add</span>
            </button>
            
            <button className="flex flex-col items-center justify-center w-16 py-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6.5C2 5.09554 2 4.39331 2.20048 3.82912C2.47237 3.05963 3.05963 2.47237 3.82912 2.20048C4.39331 2 5.09554 2 6.5 2C7.90446 2 8.60669 2 9.17088 2.20048C9.94037 2.47237 10.5276 3.05963 10.7995 3.82912C11 4.39331 11 5.09554 11 6.5C11 7.90446 11 8.60669 10.7995 9.17088C10.5276 9.94037 9.94037 10.5276 9.17088 10.7995C8.60669 11 7.90446 11 6.5 11C5.09554 11 4.39331 11 3.82912 10.7995C3.05963 10.5276 2.47237 9.94037 2.20048 9.17088C2 8.60669 2 7.90446 2 6.5Z" stroke="#94A3B8" strokeWidth="1.5"/>
                <path d="M13 17.5C13 16.0955 13 15.3933 13.2005 14.8291C13.4724 14.0596 14.0596 13.4724 14.8291 13.2005C15.3933 13 16.0955 13 17.5 13C18.9045 13 19.6067 13 20.1709 13.2005C20.9404 13.4724 21.5276 14.0596 21.7995 14.8291C22 15.3933 22 16.0955 22 17.5C22 18.9045 22 19.6067 21.7995 20.1709C21.5276 20.9404 20.9404 21.5276 20.1709 21.7995C19.6067 22 18.9045 22 17.5 22C16.0955 22 15.3933 22 14.8291 21.7995C14.0596 21.5276 13.4724 20.9404 13.2005 20.1709C13 19.6067 13 18.9045 13 17.5Z" stroke="#94A3B8" strokeWidth="1.5"/>
                <path d="M13 6.5C13 5.09554 13 4.39331 13.2005 3.82912C13.4724 3.05963 14.0596 2.47237 14.8291 2.20048C15.3933 2 16.0955 2 17.5 2C18.9045 2 19.6067 2 20.1709 2.20048C20.9404 2.47237 21.5276 3.05963 21.7995 3.82912C22 4.39331 22 5.09554 22 6.5C22 7.90446 22 8.60669 21.7995 9.17088C21.5276 9.94037 20.9404 10.5276 20.1709 10.7995C19.6067 11 18.9045 11 17.5 11C16.0955 11 15.3933 11 14.8291 10.7995C14.0596 10.5276 13.4724 9.94037 13.2005 9.17088C13 8.60669 13 7.90446 13 6.5Z" stroke="#94A3B8" strokeWidth="1.5"/>
                <path d="M2 17.5C2 16.0955 2 15.3933 2.20048 14.8291C2.47237 14.0596 3.05963 13.4724 3.82912 13.2005C4.39331 13 5.09554 13 6.5 13C7.90446 13 8.60669 13 9.17088 13.2005C9.94037 13.4724 10.5276 14.0596 10.7995 14.8291C11 15.3933 11 16.0955 11 17.5C11 18.9045 11 19.6067 10.7995 20.1709C10.5276 20.9404 9.94037 21.5276 9.17088 21.7995C8.60669 22 7.90446 22 6.5 22C5.09554 22 4.39331 22 3.82912 21.7995C3.05963 21.5276 2.47237 20.9404 2.20048 20.1709C2 19.6067 2 18.9045 2 17.5Z" stroke="#94A3B8" strokeWidth="1.5"/>
              </svg>
              <span className="text-[10px] text-gray-400 font-medium mt-0.5">Products</span>
            </button>
            
            <button className="flex flex-col items-center justify-center w-16 py-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 21V19C4 16.7909 5.79086 15 8 15H16C18.2091 15 20 16.7909 20 19V21" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[10px] text-gray-400 font-medium mt-0.5">Profile</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Phone Button */}
      <div className="absolute right-0 w-4 h-20 bg-gray-700 rounded-r-lg top-1/3 transform -translate-y-1/2"></div>
    </div>
  );
};

const ProductItem = ({ name, price, unit, image }: { name: string; price: string; unit: string; image: string }) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden relative">
      <div className="h-16 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-2">
        <h3 className="text-xs font-medium">{name}</h3>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs">${price}/{unit}</span>
          <Badge className="h-4 px-1 text-[8px] bg-green-light">Active</Badge>
        </div>
      </div>
    </div>
  );
};

export { MobileAppPreview };
