import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
