
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <>
      <div 
        className="w-full h-28 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/fa3b4637-5864-4ab3-910b-f63c300d3c95.jpeg')",
          backgroundSize: 'cover'
        }}
      />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="w-8 h-8 bg-green-DEFAULT rounded-full flex items-center justify-center mr-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                    <path d="M8.5 8.5v.01" />
                    <path d="M16 15.5v.01" />
                    <path d="M12 12v.01" />
                    <path d="M11 17v.01" />
                    <path d="M7 14v.01" />
                  </svg>
                </div>
                <span className="font-merriweather font-bold text-xl text-green-DEFAULT">GreenThumb</span>
              </Link>

              <nav className="hidden md:ml-8 md:flex md:space-x-8">
                <Link to="/" className="text-green-DEFAULT px-3 py-2 text-sm font-medium border-b-2 border-green-DEFAULT">
                  Home
                </Link>
                <Link to="#" className="text-gray-500 hover:text-green-DEFAULT px-3 py-2 text-sm font-medium">
                  Browse
                </Link>
                <Link to="#" className="text-gray-500 hover:text-green-DEFAULT px-3 py-2 text-sm font-medium">
                  Sellers
                </Link>
                <Link to="#" className="text-gray-500 hover:text-green-DEFAULT px-3 py-2 text-sm font-medium">
                  Learn
                </Link>
              </nav>
            </div>

            <div className="flex items-center">
              <div className="hidden md:block relative mx-2 w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input type="text" placeholder="Search produce or sellers..." className="pl-10 border-gray-300 focus:border-green-light focus:ring-green-light" />
              </div>

              <Button variant="ghost" className="ml-4 flex items-center text-gray-500 hover:text-green-DEFAULT">
                <MapPin className="h-5 w-5 mr-1" />
                <span className="text-sm">Set pants</span>
              </Button>

              <Button variant="ghost" className="ml-2 text-gray-500 hover:text-green-DEFAULT">
                <User className="h-5 w-5" />
              </Button>

              <Button className="hidden md:ml-4 md:inline-flex bg-green-DEFAULT hover:bg-green-light">
                Become a Seller
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export { Navbar };
