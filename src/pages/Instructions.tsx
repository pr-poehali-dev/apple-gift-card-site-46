import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Instructions = () => {
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
              <Link
                to="/products"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Каталог
              </Link>
              <Link to="/instructions" className="text-gray-900 font-medium">
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
            Как использовать
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Подробные инструкции по использованию подарочных карт Apple Store
          </p>
        </div>
      </section>

      {/* Instructions */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Icon name="Smartphone" className="text-blue-600" />
                <span>На iPhone или iPad</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  1
                </div>
                <p className="text-gray-700">
                  Откройте App Store на вашем устройстве
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  2
                </div>
                <p className="text-gray-700">
                  Нажмите на иконку профиля в правом верхнем углу
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  3
                </div>
                <p className="text-gray-700">
                  Выберите "Погасить подарочную карту или код"
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  4
                </div>
                <p className="text-gray-700">
                  Введите код карты или отсканируйте камерой
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Icon name="Monitor" className="text-green-600" />
                <span>На Mac или ПК</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  1
                </div>
                <p className="text-gray-700">Откройте iTunes или App Store</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  2
                </div>
                <p className="text-gray-700">
                  В меню выберите "Учетная запись"
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  3
                </div>
                <p className="text-gray-700">
                  Нажмите "Погасить подарочную карту"
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  4
                </div>
                <p className="text-gray-700">Введите код карты и подтвердите</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-yellow-800">
                <Icon name="AlertTriangle" className="text-yellow-600" />
                <span>Важная информация</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-yellow-800">
              <p>
                • Коды подарочных карт действительны в течение неограниченного
                времени
              </p>
              <p>
                • Средства зачисляются на ваш Apple ID и могут быть использованы
                для любых покупок
              </p>
              <p>• Подарочные карты нельзя обменять на наличные или вернуть</p>
              <p>• Храните код в безопасном месте до использования</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Готовы купить подарочную карту?
          </h2>
          <p className="text-gray-600 mb-8">
            Выберите номинал и получите код мгновенно
          </p>
          <Link to="/products">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-colors">
              Перейти к каталогу
            </button>
          </Link>
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

export default Instructions;
