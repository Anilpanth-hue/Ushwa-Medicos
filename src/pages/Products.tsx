"use client";

import type React from "react";
import { useState, useEffect } from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image6 from "../../assets/image6.jpg";
import image5 from "../../assets/image5.jpg";
import image10 from "../../assets/image10.jpg";
import image11 from "../../assets/image11.jpg";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    // Fetch products from API or local data source
    const fetchProducts = async () => {
      try {
        // Replace with your actual API endpoint or data source
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Fallback to local data if API fails
        setProducts([
          {
            id: 1,
            name: "Product 1",
            category: "Pain Relief",
            price: 10,
            description:
              "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) commonly used to reduce fever, relieve pain, and decrease inflammation.",
            image: image1,
          },
          {
            id: 2,
            name: "Product 2",
            category: "Antibiotics",
            price: 20,
            description:
              "Azithromycin is a broad-spectrum antibiotic used to treat bacterial infections like respiratory, skin, and ear infections. It works by stopping the growth of bacteria.",
            image: image2,
          },
          {
            id: 3,
            name: "Product 3",
            category: "Gastrointestinal",
            price: 30,
            description:
              "Omeprazole is a proton pump inhibitor (PPI) that reduces stomach acid production. It’s commonly used to treat acid reflux, ulcers, and GERD.",
            image: image3,
          },
          {
            id: 4,
            name: "Product 4",
            category: "Diabetes",
            price: 40,
            description:
              "Metformin is an oral medication used to manage type 2 diabetes by lowering blood sugar levels. It works by improving insulin sensitivity and reducing glucose production in the liver.",
            image: image4,
          },
          {
            id: 5,
            name: "Product 5",
            category: "Cardiovascular",
            price: 50,
            description:
              "Amlodipine is a calcium channel blocker used to treat high blood pressure and chest pain (angina). It helps relax blood vessels, improving blood flow and reducing heart workload.",
            image: image5,
          },
          {
            id: 6,
            name: "Product 6",
            category: "Medical Devices",
            price: 60,
            description:
              "A digital thermometer is a device that measures body temperature electronically and displays the result on a digital screen. It's known for providing quick and accurate readings.",
            image: image10,
          },
          {
            id: 7,
            name: "Product 7",
            category: "Pain Relief",
            price: 70,
            description:
              "ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) commonly used to reduce fever, relieve pain, and decrease inflammation. ",
            image: image6,
          },
          {
            id: 8,
            name: "Product 8",
            category: "Blood Pressure Monitor",
            price: 70,
            description:
              "A Blood Pressure Monitor is a medical device used to measure the force of blood against the artery walls. It typically displays systolic and diastolic pressure and helps monitor heart health.",
            image: image11,
          },
        ]);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory
      ? product.category === selectedCategory
      : true;
    const searchMatch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 mr-4"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">All Categories</option>
          <option value="Pain Relief">Pain Relief</option>
          <option value="Antibiotics">Antibiotics</option>
          <option value="Gastrointestinal">Gastrointestinal</option>
          <option value="Diabetes">Diabetes</option>
          <option value="Cardiovascular">Cardiovascular</option>
          <option value="Medical Devices">Medical Devices</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-48 object-cover mb-2 rounded-md"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-gray-700">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
