export interface Product {
  id: number;
  amount: number;
  originalPrice: number;
  discountPrice?: number;
  description: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    amount: 1000,
    originalPrice: 1000,
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
    description: "Достаточно для покупки устройства или крупных покупок",
  },
];
