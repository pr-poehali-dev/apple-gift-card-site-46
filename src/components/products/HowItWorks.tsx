const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Выберите номинал",
      description: "Выберите подходящий номинал подарочной карты",
    },
    {
      number: 2,
      title: "Оплатите",
      description: "Безопасная оплата любым удобным способом",
    },
    {
      number: 3,
      title: "Получите код",
      description: "Код карты придет мгновенно на вашу почту",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Как это работает
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
