import productDish from "@/assets/product-dish.jpg";
import productDish1L from "@/assets/product-dish - 1L.jpg";
import productDish5L from "@/assets/product-dish-5L.jpg";
import productDish20L from "@/assets/product-dish-20L.jpg";
import productHandwash from "@/assets/product-handwash.jpg";
import productHandwash500ml from "@/assets/product-handwash-500ml.jpg";
import productHandwash5L from "@/assets/product-handwash.-5L.jpg";
import productHandwash20L from "@/assets/product-handwash.-20L.jpg";
import productShower from "@/assets/product-shower.jpg";
import productShower250ml from "@/assets/product-shower-250ml.jpg";
import productShower500ml from "@/assets/product-shower-500ml.jpg";
import productShower5L from "@/assets/product-shower-5L.jpg";
import productShower20L from "@/assets/product-shower-20L.jpg";
import productLaundry from "@/assets/product-laundry.jpg";
import productLaundry20L from "@/assets/product-laundry-20L.jpg";
import productLaundry5L from "@/assets/product-laundry-1.5L.jpg";
import productLaundry55L from "@/assets/product-laundry-5L.jpg";

export type ProductCategory = "laundry" | "dish" | "handwash" | "shower";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  importantNote?: string;
  sizes: string[];
  sizeImages: Record<string, string[]>;
  uses?: string[];
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
      "Contains natural plant-based cleaning ingredients, quickly removing stubborn stains such as collar and cuff stains, barbecue marks, fruit juice stains, cola stains, etc. With targeted water-locking technology, it penetrates deep into the fiber to lock in invisible stains, achieving a refreshingly clean effect from the inside out. It contains ingredients like iodine to release super cleaning power, resulting in less foam on clothes, easy dissolution, easy rinsing, and no irritation to hands. Suitable for cleaning various types of clothes, saving time and effort while being environmentally friendly.",
    importantNote: "This laundry detergent has a 2-in-1 effect, eliminating the need for both washing powder and fabric softener, which saves both effort and money.",
    sizes: ["750ml", "1.5L", "5L", "20L"],
    sizeImages: {
      "750ml": [productLaundry, productLaundry5L, productLaundry55L],
      "1.5L": [productLaundry5L, productLaundry, productLaundry55L],
      "5L": [productLaundry55L, productLaundry5L, productLaundry],
      "20L": [productLaundry20L, productLaundry, productLaundry5L],
    },
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
    id: "Dish Wash",
    name: "Utensil Cleanser Essence",
    category: "dish",
    tagline: "Natural Without Additives",
    description:
      "Quickly removes greasy dirt and pecuilar smell on tableware kitchenware and other utensils with strong cleaning powder; helps dissolve harmfulsubstances such as pesticides residues on the surface of fruits and vegetables, easy to wash off with no residue, kees family healthy.",
    sizes: ["500ml", "1L", "5L", "20L"],
    sizeImages: {
      "500ml": [productDish, productDish, productDish],
      "1L": [productDish1L, productDish1L, productDish1L],
      "5L": [productDish5L, productDish5L, productDish5L],
      "20L": [productDish20L, productDish20L, productDish20L],
    },
    uses: [
      "Washing dishes",
      "Mopping floors",
      "Washing cars (after dilution)",
    ],
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
      "Enriched with moisturizing ingredients, it cleans hands while leaving them with a smooth touch, ensuring cleanliness without harming the skin. Contains disinfectant and bacteriostatic components, effectively combating 99.9% of disease-causing bacteria to protect hand hygiene. Offers a variety of fragrance options such as fruity and floral scents, and also supports custom fragrances to meet different preferences.",
    sizes: ["500ml", "5L", "20L"],
    sizeImages: {
      "500ml": [productHandwash500ml, productHandwash500ml, productHandwash500ml],
      "5L": [productHandwash5L, productHandwash5L, productHandwash5L],
      "20L": [productHandwash20L, productHandwash20L, productHandwash20L],
    },
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
    sizes: ["250ml", "500ml", "5L", "20L"],
    sizeImages: {
      "250ml": [productShower250ml, productShower250ml, productShower250ml],
      "500ml": [productShower500ml, productShower500ml, productShower500ml],
      "5L": [productShower5L, productShower5L, productShower5L],
      "20L": [productShower20L, productShower20L, productShower20L],
    },
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
