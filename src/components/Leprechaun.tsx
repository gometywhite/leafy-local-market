
import React from 'react';
import { Clover } from 'lucide-react';

export const Leprechaun = () => {
  return (
    <div className="fixed bottom-4 left-4 z-50 hover-scale">
      <div className="bg-[#F2FCE2] p-4 rounded-lg shadow-lg flex items-center space-x-4">
        <div className="w-24 h-24 bg-[#FEF7CD] rounded-full flex items-center justify-center animate-blink">
          <Clover className="w-12 h-12 text-green-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#333]">Lucky Leprechaun</h3>
          <p className="text-sm text-gray-600">Bringing good fortune to GreenThumb!</p>
        </div>
      </div>
    </div>
  );
};
