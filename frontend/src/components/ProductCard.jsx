import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, featured = false }) => {
  return (
    <Card className={`group overflow-hidden hover:shadow-xl transition-all duration-300 ${featured ? "border-stone-200" : ""}`}>
      <div className="relative overflow-hidden h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-stone-800 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="text-xs bg-stone-100 text-stone-800 px-3 py-1 rounded-full font-medium"
            >
              {feature}
            </span>
          ))}
        </div>
        <Link to="/products">
          <Button variant="ghost" className="text-stone-800 hover:text-stone-900 hover:bg-stone-100 p-0 h-auto font-semibold group/btn">
            Learn More
            <ArrowRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
