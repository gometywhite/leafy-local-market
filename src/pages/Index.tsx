import React, { useState, useEffect } from 'react';
import { Navbar } from "@/components/navbar";
import { Map } from "@/components/ui/map";
import { SellerProfile } from "@/components/seller-profile";
import { ProductCard } from "@/components/product-card";
import { EducationalContent } from "@/components/educational-content";
import { MobileAppPreview } from "@/components/mobile-app-preview";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Chatbox } from "@/components/chatbox";
import { Leprechaun } from '@/components/Leprechaun';

const Index = () => {
  const [selectedSeller, setSelectedSeller] = useState<any>(null);
  
  // Mock data for sellers
  const sellers = [
    {
      id: '1',
      name: "Maria's Garden",
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
      rating: 4.8,
      location: 'Westside, 2.3 miles',
      bio: 'Growing organic vegetables and herbs in my backyard garden for over 10 years. Specializing in heirloom tomatoes and fresh herbs.',
      specialties: ['Tomatoes', 'Herbs', 'Peppers', 'Leafy Greens'],
      joinDate: 'June 2023',
      distance: '2.3 miles',
      products: [
        {
          id: 'p1',
          name: 'Heirloom Tomatoes',
          image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          price: 4.50,
          unit: 'lb',
          organic: true,
          seasonal: true,
          rating: 4.9,
          harvestedDate: 'Today'
        },
        {
          id: 'p2',
          name: 'Fresh Basil',
          image: 'https://images.unsplash.com/photo-1588899451640-9ea54c7734d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
          price: 2.00,
          unit: 'bunch',
          organic: true,
          seasonal: true,
          rating: 4.7,
          harvestedDate: 'Today'
        },
        {
          id: 'p3',
          name: 'Bell Peppers',
          image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
          price: 3.25,
          unit: 'lb',
          organic: true,
          seasonal: true,
          rating: 4.5,
          harvestedDate: 'Yesterday'
        }
      ]
    },
    {
      id: '2',
      name: 'Urban Roots Farm',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      rating: 4.6,
      location: 'Downtown, 1.5 miles',
      bio: 'Small urban farm growing seasonal vegetables on a converted city lot. We focus on sustainable practices and growing unique varieties.',
      specialties: ['Root Vegetables', 'Squash', 'Microgreens', 'Edible Flowers'],
      joinDate: 'April 2023',
      distance: '1.5 miles',
      products: [
        {
          id: 'p4',
          name: 'Rainbow Carrots',
          image: 'https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
          price: 3.50,
          unit: 'bunch',
          organic: true,
          seasonal: true,
          rating: 4.8,
          harvestedDate: 'Today'
        },
        {
          id: 'p5',
          name: 'Microgreens Mix',
          image: 'https://images.unsplash.com/photo-1550499891-d5e0e54c1795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
          price: 5.00,
          unit: 'container',
          organic: true,
          seasonal: true,
          rating: 4.9,
          harvestedDate: 'Today'
        }
      ]
    },
    {
      id: '3',
      name: 'Backyard Bounty',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      rating: 4.5,
      location: 'Eastside, 3.1 miles',
      bio: 'Family garden with seasonal surplus. We grow what we eat and share the extra with our community. Everything grown with love!',
      specialties: ['Berries', 'Summer Squash', 'Cucumbers', 'Stone Fruit'],
      joinDate: 'May 2023',
      distance: '3.1 miles',
      products: [
        {
          id: 'p6',
          name: 'Strawberries',
          image: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
          price: 6.00,
          unit: 'pint',
          organic: true,
          seasonal: true,
          rating: 4.9,
          harvestedDate: 'Today'
        },
        {
          id: 'p7',
          name: 'Yellow Squash',
          image: 'https://images.unsplash.com/photo-1598453572637-a6195a41c562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
          price: 2.50,
          unit: 'lb',
          organic: true,
          seasonal: true,
          rating: 4.4,
          harvestedDate: 'Yesterday'
        }
      ]
    }
  ];

  const featuredProducts = [
    ...sellers[0].products,
    ...sellers[1].products,
    ...sellers[2].products,
  ];

  const handleSellerSelect = (seller) => {
    setSelectedSeller(seller);
  };

  useEffect(() => {
    const heroImage = new Image();
    heroImage.src = "https://images.unsplash.com/photo-1507464098501-1babb2fa9d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1771&q=80";
    
    heroImage.onload = () => {
      console.log('Hero image loaded successfully');
      console.log('Image naturalWidth:', heroImage.naturalWidth);
      console.log('Image naturalHeight:', heroImage.naturalHeight);
    };

    heroImage.onerror = (error) => {
      console.error('Hero image failed to load', error);
      console.log('Image source:', heroImage.src);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="font-merriweather text-4xl md:text-5xl font-bold text-green-DEFAULT leading-tight">
              Fresh Local Produce From Your Neighbors
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Connect with local gardeners and buy homegrown, seasonal produce directly from people in your neighborhood.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-green-DEFAULT hover:bg-green-light">
                Find Local Produce
              </Button>
              <Button size="lg" variant="outline" className="border-green-DEFAULT text-green-DEFAULT hover:bg-green-lighter">
                Become a Seller
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1507464098501-1babb2fa9d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1771&q=80" 
              alt="Local garden produce" 
              onError={(e) => {
                console.error('Image load error in component', e);
                e.currentTarget.src = "https://via.placeholder.com/1771x1000?text=Image+Not+Found";
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="font-semibold text-lg mb-1">Seasonal Highlights</p>
                <p>Tomatoes, Zucchini, Berries, and Fresh Herbs are in season now</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-merriweather text-3xl font-semibold text-green-DEFAULT mb-6">
            Find Sellers Near You
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Map sellers={sellers} onSellerSelect={handleSellerSelect} />
            </div>
            <div>
              {selectedSeller ? (
                <SellerProfile seller={selectedSeller} />
              ) : (
                <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-16 bg-green-lighter rounded-full flex items-center justify-center mb-4">
                    <svg 
                      width="32" 
                      height="32" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#2D6A4F" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3 className="font-merriweather text-xl font-semibold text-green-DEFAULT mb-2">
                    Select a Seller
                  </h3>
                  <p className="text-gray-600">
                    Click on a marker on the map to see details about the seller and their available products.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-merriweather text-3xl font-semibold text-green-DEFAULT mb-6">
            Fresh & In Season
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={{ ...product, seller: sellers.find(s => s.products.some(p => p.id === product.id))?.name }} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Educational Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EducationalContent />
        </div>
      </section>
      
      {/* Mobile App Section */}
      <section className="py-16 bg-green-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-merriweather text-3xl font-semibold text-green-DEFAULT mb-4">
                GreenThumb Mobile App
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Manage your garden inventory, update prices, and connect with buyers - all from your phone.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-DEFAULT flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-green-DEFAULT">Quick Photo Updates</h3>
                    <p className="text-gray-600">Take photos of your harvest and list them instantly.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-DEFAULT flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-green-DEFAULT">Real-time Notifications</h3>
                    <p className="text-gray-600">Get alerted when someone wants to purchase your produce.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-DEFAULT flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-green-DEFAULT">Inventory Management</h3>
                    <p className="text-gray-600">Track what you've sold and what's still available.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-DEFAULT flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-green-DEFAULT">Secure Payments</h3>
                    <p className="text-gray-600">Accept payments through the app or arrange for in-person exchanges.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button className="bg-green-DEFAULT hover:bg-green-light">
                  Download App
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <MobileAppPreview />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-green-DEFAULT text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#2D6A4F" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                    <path d="M8.5 8.5v.01" />
                    <path d="M16 15.5v.01" />
                    <path d="M12 12v.01" />
                    <path d="M11 17v.01" />
                    <path d="M7 14v.01" />
                  </svg>
                </div>
                <span className="font-merriweather font-bold text-xl">GreenThumb</span>
              </div>
              <p className="mt-4 text-green-lighter">
                Connecting local gardeners with neighbors who appreciate fresh, homegrown produce.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-lighter">About Us</a></li>
                <li><a href="#" className="hover:text-green-lighter">How It Works</a></li>
                <li><a href="#" className="hover:text-green-lighter">Become a Seller</a></li>
                <li><a href="#" className="hover:text-green-lighter">Find Local Produce</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-lighter">Growing Guides</a></li>
                <li><a href="#" className="hover:text-green-lighter">Seasonal Calendar</a></li>
                <li><a href="#" className="hover:text-green-lighter">Sustainability Tips</a></li>
                <li><a href="#" className="hover:text-green-lighter">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
              <p className="mb-4">Sign up for our newsletter to get updates on seasonal produce and local events.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 rounded-l-md text-green-DEFAULT w-full focus:outline-none"
                />
                <Button className="rounded-l-none bg-terracotta hover:bg-terracotta/80">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-green-light/20 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 GreenThumb Marketplace. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-green-lighter">Privacy Policy</a>
              <a href="#" className="hover:text-green-lighter">Terms of Service</a>
              <a href="#" className="hover:text-green-lighter">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
      <Chatbox />
      <Leprechaun />
    </div>
  );
};

export default Index;
