import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
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
  );
};

export default Footer;
