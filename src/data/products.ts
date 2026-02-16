import productLaundry from "@/assets/product-laundry.jpg";
import productDish from "@/assets/product-dish.jpg";
import productHandwash from "@/assets/product-handwash.jpg";
import productShower from "@/assets/product-shower.jpg";

export type ProductCategory = "laundry" | "dish" | "handwash" | "shower";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  sizes: string[];
  features: string[];
  ingredients: string[];
  image: string;
}

export const categoryLabels: Record<ProductCategory, string> = {
  laundry: "Laundry Detergent",
  dish: "Utensil Cleanser",
  handwash: "Antibacterial Handwash",
  shower: "Shower Gel",
};

export const products: Product[] = [
  {
    id: "multi-effect-laundry-detergent",
    name: "Multi-Effect Laundry Detergent",
    category: "laundry",
    tagline: "No phosphorus, no fluorescent agent",
    description:
      "Containing the natural cleansing power of plants, it quickly and directionally locks in invisible stains in the deep layers of fibres, including collar and cuff stains, oil stains, barbecue stains, fruit juice, cola stains, iodine, etc. It unleashes super strong cleansing power, making clothes clean from inside out like new.",
    sizes: ["750ml", "1.5L", "5L", "20L"],
    features: [
      "Color protection and softness",
      "Natural Plant Cleanliness",
      "PH Neutral and Milder",
    ],
    ingredients: [
      "Deionized water",
      "AES",
      "surfactants",
      "non-iconic surfactnts",
      "stabilizers",
    ],
    image: productLaundry,
  },
  {
    id: "utensil-cleanser-essence",
    name: "Utensil Cleanser Essence",
    category: "dish",
    tagline: "Natural Without Additives",
    description:
      "Quickly removes greasy dirt and pecuilar smell on tableware kitchenware and other utensils with strong cleaning powder; helps dissolve harmfulsubstances such as pesticides residues on the surface of fruits and vegetables, easy to wash off with no residue, kees family healthy.",
    sizes: ["500ml", "1L", "5L", "20L"],
    features: [
      "Triple-action degreasing formula",
      "Natural citrus extract infusion",
      "Gentle on hands — dermatologically tested",
      "Rinse-clean technology — no residue",
      "Concentrated for economical use",
      "Suitable for commercial kitchens",
    ],
    ingredients: [
      "Deionized water",
      "Surface Active Agents",
      "Plant Extract",
      "Lemon Essense",
    ],
    image: productDish,
  },
  {
    id: "antibacterial-handwash",
    name: "Antibacterial Handwash Liquid",
    category: "handwash",
    tagline: "99.9% germ protection. Silky-soft feel.",
    description:
      "Jeyda moisturising handwash, enriched with moisturisers which leave your hands clean and soft while also protecting you from 99.9% of illness-causing germs",
    sizes: ["500ml", "1L", "5L", "20L"],
    features: [
      "Eliminates 99.9% of bacteria",
      "Moisturizing glycerin & vitamin E",
      "pH-balanced for sensitive skin",
      "Dermatologically tested",
      "Rich, creamy lather",
      "Suitable for frequent use",
    ],
    ingredients: [
      "Aqua",
      "Sodium Laureth sulfate",
      "disodium EDTA",
      "Cocamidopropyl betaine",
      "Glycerine",
      "Methylisothiazolinone",
      "Sodium Chloride",
      "Dichlorohydroxydiphenylether",
      "permitted colour and perfume",
    ],
    image: productHandwash,
  },
  {
    id: "aloe-moisturizing-shower-gel",
    name: "Aloe Moisturizing Shower Gel",
    category: "shower",
    tagline: "Luxurious hydration. Botanical purity.",
    description:
      "Infused with organic aloe vera and enriched with natural botanicals, our moisturizing shower gel transforms your daily routine into a spa-like experience. The creamy, pH-balanced formula gently cleanses while delivering deep hydration, leaving skin silky-smooth and delicately fragranced.",
    sizes: ["250ml", "500ml", "1L", "5L", "20L"],
    features: [
      "Organic aloe vera infusion",
      "Deep moisturizing formula",
      "pH-balanced for all skin types",
      "Rich, luxurious lather",
      "Paraben-free & sulfate-free option",
      "Spa-inspired botanical fragrance",
    ],
    ingredients: [
      "Water",
      "AES",
      "Glycerin",
      "K12A",
      "6501",
      "Pearlizing Agent",
      "Betaine",
      "Propylene Glycol",
      "Glycerin",
      "Citric Acid",
      "Fragrance",
      "Methylisothiazolinone",
      "C116185",
      "Sodium Chloride",
    ],
    image: productShower,
  },
];
