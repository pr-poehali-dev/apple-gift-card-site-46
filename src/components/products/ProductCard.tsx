import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group">
      {product.badge && (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
          {product.badge}
        </div>
      )}
      <CardContent className="p-8 text-center">
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon name="Gift" size={40} className="text-blue-600" />
        </div>

        <h3 className="text-4xl font-bold text-gray-900 mb-2">
          {product.amount.toLocaleString()} ₽
        </h3>

        <div className="mb-4">
          {product.discountPrice ? (
            <div className="space-y-1">
              <div className="text-lg text-gray-500 line-through">
                {product.originalPrice.toLocaleString()} ₽
              </div>
              <div className="text-2xl font-bold text-red-600">
                {product.discountPrice.toLocaleString()} ₽
              </div>
            </div>
          ) : (
            <div className="text-xl font-semibold text-gray-900">
              {product.originalPrice.toLocaleString()} ₽
            </div>
          )}
        </div>

        <p className="text-gray-600 mb-8 text-sm leading-relaxed">
          {product.description}
        </p>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 font-medium">
          Купить сейчас
        </Button>

        <div className="mt-4 text-xs text-gray-500">
          Мгновенная доставка кода
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
