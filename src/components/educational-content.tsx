
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const EducationalContent = () => {
  const articles = [
    {
      id: '1',
      title: 'Seasonal Growing Guide',
      description: 'Learn what to plant each season for optimal growth in your region.',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'growing',
    },
    {
      id: '2',
      title: 'Composting 101',
      description: 'Turn kitchen scraps into garden gold with these composting tips.',
      image: 'https://images.unsplash.com/photo-1511298341002-15d91b5d09b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      category: 'sustainability',
    },
    {
      id: '3',
      title: 'Natural Pest Control',
      description: 'Keep pests away without harmful chemicals using these natural methods.',
      image: 'https://images.unsplash.com/photo-1602491674275-16704de7f406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      category: 'growing',
    },
    {
      id: '4',
      title: 'Selling Your Garden Surplus',
      description: 'Tips for pricing and presenting your homegrown produce.',
      image: 'https://images.unsplash.com/photo-1557844352-761f2548b18b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      category: 'selling',
    },
    {
      id: '5',
      title: 'Water Conservation',
      description: 'Smart watering techniques to maintain your garden while saving water.',
      image: 'https://images.unsplash.com/photo-1563299796-17596ed6b017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'sustainability',
    },
    {
      id: '6',
      title: 'Growing in Small Spaces',
      description: 'Urban gardening techniques for balconies and small yards.',
      image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2091&q=80',
      category: 'growing',
    },
  ];

  return (
    <div className="bg-cream p-6 rounded-lg">
      <h2 className="text-2xl font-merriweather font-semibold text-green-DEFAULT mb-6">
        Garden Knowledge Hub
      </h2>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6 bg-green-lighter">
          <TabsTrigger value="all" className="data-[state=active]:bg-green-DEFAULT data-[state=active]:text-white">All Articles</TabsTrigger>
          <TabsTrigger value="growing" className="data-[state=active]:bg-green-DEFAULT data-[state=active]:text-white">Growing Tips</TabsTrigger>
          <TabsTrigger value="sustainability" className="data-[state=active]:bg-green-DEFAULT data-[state=active]:text-white">Sustainability</TabsTrigger>
          <TabsTrigger value="selling" className="data-[state=active]:bg-green-DEFAULT data-[state=active]:text-white">Selling Guide</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </TabsContent>
        
        {['growing', 'sustainability', 'selling'].map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles
                .filter((article) => article.category === category)
                .map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

const ArticleCard = ({ article }: { article: { id: string; title: string; description: string; image: string; category: string } }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-40 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <CardTitle className="font-merriweather text-xl text-green-DEFAULT">{article.title}</CardTitle>
        <CardDescription>{article.description}</CardDescription>
      </CardHeader>
      <CardFooter className="p-4 pt-2">
        <Button variant="outline" className="w-full border-green-DEFAULT text-green-DEFAULT hover:bg-green-lighter">
          Read Article
        </Button>
      </CardFooter>
    </Card>
  );
};

export { EducationalContent };
