import { ImageSourcePropType } from "react-native";

type ICategory = {
  label: string;
  image: ImageSourcePropType;
};

export const categoriesData: ICategory[] = [
  {
    label: "Bread",
    image: require("../../assets/images/bread.png"),
  },
  {
    label: "Coffee",
    image: require("../../assets/images/coffee.png"),
  },
  {
    label: "Deals",
    image: require("../../assets/images/deals.png"),
  },
  {
    label: "Desserts",
    image: require("../../assets/images/desserts.png"),
  },
  {
    label: "Fast food",
    image: require("../../assets/images/fast-food.png"),
  },
  {
    label: "Shopping bag",
    image: require("../../assets/images/shopping-bag.png"),
  },
  {
    label: "Soft drink",
    image: require("../../assets/images/soft-drink.png"),
  },
];
