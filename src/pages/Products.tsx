import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import HowItWorks from "@/components/products/HowItWorks";
import { products } from "@/data/products";

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

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
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Products;
