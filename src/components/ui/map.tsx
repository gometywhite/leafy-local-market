
import React, { useEffect, useRef, useState } from 'react';
import { Button } from './button';
import { MapPin } from 'lucide-react';

// Mock map implementation - in a real app, this would use Mapbox, Google Maps, etc.
const Map = ({ sellers = [], onSellerSelect }: { sellers: any[], onSellerSelect: (seller: any) => void }) => {
  const mapRef = useRef(null);
  const [mapToken, setMapToken] = useState("");
  const [isMapTokenInputVisible, setIsMapTokenInputVisible] = useState(true);

  // Simulated map loading for the concept
  useEffect(() => {
    if (mapRef.current && mapToken) {
      setIsMapTokenInputVisible(false);
      // In a real implementation, this would initialize the map with the token
      console.log("Map initialized with token:", mapToken);
    }
  }, [mapToken]);

  const handleSubmitToken = (e) => {
    e.preventDefault();
    const token = e.target.mapToken.value;
    if (token) {
      setMapToken(token);
    }
  };

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-md">
      {isMapTokenInputVisible ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 p-4">
          <form onSubmit={handleSubmitToken} className="w-full max-w-md space-y-4">
            <h3 className="text-lg font-semibold text-green-DEFAULT">Map Integration</h3>
            <p className="text-sm text-gray-600">
              For the full experience with interactive maps, you would enter your map provider token here.
            </p>
            <div className="flex flex-col space-y-2">
              <label htmlFor="mapToken" className="text-sm font-medium">
                Map API Token
              </label>
              <input
                id="mapToken"
                name="mapToken"
                type="text"
                placeholder="Enter your map API token"
                className="px-3 py-2 border rounded-md"
              />
            </div>
            <Button type="submit" className="w-full">
              Initialize Map
            </Button>
          </form>
        </div>
      ) : (
        <>
          <div ref={mapRef} className="absolute inset-0 bg-green-lighter opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full p-4 flex flex-wrap justify-around items-center">
              {sellers.map((seller) => (
                <div
                  key={seller.id}
                  className="cursor-pointer transform hover:scale-110 transition-transform"
                  onClick={() => onSellerSelect(seller)}
                >
                  <div className="relative">
                    <MapPin className="h-8 w-8 text-green-DEFAULT" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-terracotta flex items-center justify-center text-white text-xs">
                      {seller.products.length}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-4 right-4">
            <div className="bg-white rounded-lg shadow-lg p-3 text-sm">
              <p className="font-semibold text-green-DEFAULT">Map Legend</p>
              <div className="flex items-center mt-1">
                <MapPin className="h-4 w-4 text-green-DEFAULT mr-2" />
                <span>Seller Location</span>
              </div>
              <div className="flex items-center mt-1">
                <div className="h-4 w-4 rounded-full bg-terracotta mr-2 flex items-center justify-center text-white text-xs">
                  3
                </div>
                <span>Available Products</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export { Map };
