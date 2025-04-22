
import React from 'react';
import { Star, MapPin, User } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SellerProfileProps {
  seller: {
    id: string;
    name: string;
    avatar?: string;
    rating: number;
    location: string;
    bio: string;
    specialties: string[];
    joinDate: string;
    distance?: string;
  };
}

const SellerProfile = ({ seller }: SellerProfileProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half-star" className="h-5 w-5 text-yellow-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-green-lighter h-32 relative">
        <div className="absolute -bottom-10 left-6">
          <Avatar className="h-20 w-20 border-4 border-white">
            <AvatarImage src={seller.avatar} alt={seller.name} />
            <AvatarFallback className="bg-green-light text-white text-xl">
              {seller.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
      
      <div className="pt-12 px-6 pb-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold font-merriweather text-green-DEFAULT">{seller.name}</h2>
            <div className="flex items-center mt-1">
              <div className="flex mr-2">
                {renderStars(seller.rating)}
              </div>
              <span className="text-sm text-gray-500">({seller.rating.toFixed(1)})</span>
            </div>
          </div>
          <Button variant="outline" className="border-green-DEFAULT text-green-DEFAULT hover:bg-green-lighter">
            Message
          </Button>
        </div>
        
        <div className="flex items-center mt-3 text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{seller.location}</span>
          {seller.distance && (
            <Badge variant="outline" className="ml-2 text-xs">
              {seller.distance} away
            </Badge>
          )}
        </div>
        
        <p className="mt-4 text-gray-700">{seller.bio}</p>
        
        <div className="mt-4">
          <h3 className="text-sm font-semibold mb-2">Growing Specialties:</h3>
          <div className="flex flex-wrap gap-2">
            {seller.specialties.map((specialty, index) => (
              <Badge key={index} variant="secondary" className="bg-green-lighter text-green-DEFAULT">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex items-center mt-6 pt-4 border-t text-sm text-gray-500">
          <User className="h-4 w-4 mr-1" />
          <span>Member since {seller.joinDate}</span>
        </div>
      </div>
    </div>
  );
};

export { SellerProfile };
