export interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
}

export interface NavLink {
  href: string;
  label: string;
}