import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      amount: 1000,
      originalPrice: 1000,
      discountPrice: null,
      description: "Идеально для покупки аксессуаров и приложений",
    },
    {
      id: 2,
      amount: 2500,
      originalPrice: 2500,
      discountPrice: 2250,
      description: "Самый популярный номинал для подарка",
      badge: "Скидка 10%",
    },
    {
      id: 3,
      amount: 5000,
      originalPrice: 5000,
      discountPrice: null,
      description: "Достаточно для покупки устройства или крупных покупок",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Icon name="Gift" size={24} className="text-gray-900" />
              <span className="text-xl font-semibold text-gray-900">
                Apple Gift
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Главная
              </Link>
              <Link to="/products" className="text-gray-900 font-medium">
                Каталог
              </Link>
              <Link
                to="/instructions"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Инструкции
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Подарочные карты Apple
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите номинал подарочной карты и получите код мгновенно после
            оплаты
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Как это работает
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Выберите номинал
              </h3>
              <p className="text-gray-600">
                Выберите подходящий номинал подарочной карты
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Оплатите
              </h3>
              <p className="text-gray-600">
                Безопасная оплата любым удобным способом
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Получите код
              </h3>
              <p className="text-gray-600">
                Код карты придет мгновенно на вашу почту
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            to="/"
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <Icon name="Gift" size={20} className="text-gray-600" />
            <span className="text-gray-600">Apple Gift</span>
          </Link>
          <p className="text-sm text-gray-500">
            © 2024 Apple Gift. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Products;
