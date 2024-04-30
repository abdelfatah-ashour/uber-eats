export type IRestaurant = {
  id: number;
  name: string;
  image: string;
  categories: string[];
  price: number;
  reviews: number;
  rating: number;
  duration: number[];
};

export const restaurantsData: IRestaurant[] = [
  {
    id: 1,
    name: "Delicious Bites",
    image:
      "https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_960,c_limit/Prequel-lead.jpg",
    categories: ["Italian", "Pizzeria"],
    price: 20,
    reviews: 150,
    rating: 4.5,
    duration: [25, 40],
  },
  {
    id: 2,
    name: "Sushi Sensation",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReQg4l47Y7fPOfVzxtz2veEpGNi4WMJSYb7UahbVDW5w&s",
    categories: ["Japanese", "Sushi"],
    price: 35,
    reviews: 200,
    rating: 4.8,
    duration: [30, 45],
  },
  {
    id: 3,
    name: "Taste of India",
    image:
      "https://panoramicrestaurant.com/wp-content/uploads/2023/07/2TH08812-1-scaled.jpg",
    categories: ["Indian", "Curry"],
    price: 25,
    reviews: 180,
    rating: 4.6,
    duration: [35, 50],
  },
  {
    id: 4,
    name: "Burger Haven",
    image:
      "https://cache.marriott.com/is/image/marriotts7prod/wi-istnw-corte-verde-restrnt-32081-25678:Pano-Hor?wid=1920&fit=constrain",
    categories: ["American", "Burgers"],
    price: 15,
    reviews: 120,
    rating: 4.3,
    duration: [20, 35],
  },
  {
    id: 5,
    name: "Mediterranean Delight",
    image:
      "https://www.terhalak.com/wp-content/uploads/2020/08/ancient-restaurants-that-Alexandria.jpg",
    categories: ["Mediterranean", "Seafood"],
    price: 30,
    reviews: 220,
    rating: 4.7,
    duration: [40, 55],
  },
  {
    id: 6,
    name: "Thai Spice",
    image:
      "https://www.hollywoodreporter.com/wp-content/uploads/2022/11/Hotel-Per-La-Per-LOra-2-photo-credit_-The-Ingalls.jpg?w=1296&h=730&crop=1&resize=1000%2C563",
    categories: ["Thai", "Asian"],
    price: 18,
    reviews: 160,
    rating: 4.4,
    duration: [30, 45],
  },
  {
    id: 7,
    name: "French Fusion",
    image:
      "https://panoramicrestaurant.com/wp-content/uploads/2023/07/2TH08812-1-scaled.jpg",
    categories: ["French", "Fusion"],
    price: 40,
    reviews: 190,
    rating: 4.9,
    duration: [45, 60],
  },
  {
    id: 8,
    name: "Vegetarian Haven",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReQg4l47Y7fPOfVzxtz2veEpGNi4WMJSYb7UahbVDW5w&s",
    categories: ["Vegetarian", "Vegan"],
    price: 25,
    reviews: 180,
    rating: 4.7,
    duration: [35, 50],
  },
  {
    id: 9,
    name: "Steakhouse Supreme",
    image:
      "https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_960,c_limit/Prequel-lead.jpg",
    categories: ["Steakhouse", "Grill"],
    price: 50,
    reviews: 250,
    rating: 4.8,
    duration: [40, 55],
  },
  {
    id: 10,
    name: "Café de Paris",
    image:
      "https://www.terhalak.com/wp-content/uploads/2020/08/ancient-restaurants-that-Alexandria.jpg",
    categories: ["French", "Café"],
    price: 15,
    reviews: 120,
    rating: 4.2,
    duration: [20, 35],
  },
  {
    id: 11,
    name: "Authentic Mexican",
    image:
      "https://cache.marriott.com/is/image/marriotts7prod/wi-istnw-corte-verde-restrnt-32081-25678:Pano-Hor?wid=1920&fit=constrain",
    categories: ["Mexican", "Latin American"],
    price: 22,
    reviews: 170,
    rating: 4.6,
    duration: [35, 50],
  },
  {
    id: 12,
    name: "Gourmet Fusion",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReQg4l47Y7fPOfVzxtz2veEpGNi4WMJSYb7UahbVDW5w&s",
    categories: ["Fusion", "Gourmet"],
    price: 45,
    reviews: 210,
    rating: 4.9,
    duration: [50, 65],
  },
  {
    id: 13,
    name: "Cozy Corner Café",
    image:
      "https://panoramicrestaurant.com/wp-content/uploads/2023/07/2TH08812-1-scaled.jpg",
    categories: ["Café", "Breakfast"],
    price: 12,
    reviews: 110,
    rating: 4.3,
    duration: [25, 40],
  },
  {
    id: 14,
    name: "Healthy Haven",
    image:
      "https://www.hollywoodreporter.com/wp-content/uploads/2022/11/Hotel-Per-La-Per-LOra-2-photo-credit_-The-Ingalls.jpg?w=1296&h=730&crop=1&resize=1000%2C563",
    categories: ["Healthy", "Salads"],
    price: 20,
    reviews: 150,
    rating: 4.5,
    duration: [30, 45],
  },
  {
    id: 15,
    name: "Seafood Sensation",
    image:
      "https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_960,c_limit/Prequel-lead.jpg",
    categories: ["Seafood", "Fine Dining"],
    price: 55,
    reviews: 260,
    rating: 4.7,
    duration: [45, 60],
  },
];
