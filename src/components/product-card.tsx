
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, Star } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
    unit: string;
    seller: string;
    organic: boolean;
    seasonal: boolean;
    rating: number;
    harvestedDate: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-200 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center"
        />
        {product.seasonal && (
          <Badge className="absolute top-2 right-2 bg-terracotta">
            In Season
          </Badge>
        )}
        {product.organic && (
          <Badge className="absolute top-2 left-2 bg-green-light">
            Organic
          </Badge>
        )}
      </div>
      
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-merriweather text-xl font-semibold text-green-DEFAULT">{product.name}</h3>
          <span className="font-semibold text-lg">${product.price.toFixed(2)}<span className="text-xs text-gray-500">/{product.unit}</span></span>
        </div>
        <p className="text-sm text-gray-600">By {product.seller}</p>
        <div className="flex items-center mt-1">
          <div className="flex mr-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.rating.toFixed(1)})</span>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-0 flex-grow">
        <div className="flex items-center text-sm text-gray-600 mt-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>Harvested: {product.harvestedDate}</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-green-DEFAULT hover:bg-green-light">
          Add to Basket
        </Button>
      </CardFooter>
    </Card>
  );
};

export { ProductCard };
