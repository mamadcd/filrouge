import React, { useState } from "react";
import tole_normal from "../../../assets/ToleNormal.jpeg";
import tole_a_larme from "../../../assets/ToleaLarme.jpeg";
import fer_plat from "../../../assets/FerPlat.jpeg";
import tole_perforeesl from "../../../assets/TolePerforees.jpeg";
import corniere_a_aigle_egale from "../../../assets/Corniere a Aigle Egale.jpeg";
import fer_en_t from "../../../assets/Fer en T.jpeg";
import { FaBoxOpen } from "react-icons/fa";
import { FaTimes } from "react-icons/fa"; // Icone de fermeture
import clavier from "../../../assets/clavier.webp";

const ProduitsAcier = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      image: tole_normal,
      name: "Tole Normal",
      description: "Description de Tole Normal",
      prix: 120,
      stock: 40,
      aosDelay: 100,
    },
    {
      image: tole_a_larme,
      name: "Tole a Larme",
      description: "Description de Tole a Larme",
      prix: 12,
      stock: 15,
      aosDelay: 100,
    },
    {
      image: fer_plat,
      name: "Fer Plat",
      description: "Description de Fer Plat",
      prix: 20,
      stock: 50,
      aosDelay: 100,
    },
    {
      image: tole_perforeesl,
      name: "Tole Perforees",
      description: "Description de Tole Perforees",
      prix: 120,
      stock: 40,
      aosDelay: 100,
    },
    {
      image: corniere_a_aigle_egale,
      name: "Corniere a Aigle Egale",
      description: "Description de Corniere a Aigle Egale",
      prix: 120,
      stock: 40,
      aosDelay: 100,
    },
    {
      image: fer_en_t,
      name: "Fer en T",
      description: "Description de Fer en T",
      prix: 1200,
      stock: 30,
      aosDelay: 100,
    },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div
        className="w-full flex items-center justify-center lg:justify-center gap-1 pt-16 bg-cover bg-center"
        style={{
          backgroundImage: `url(${clavier})`,
        }}
      >
        <div className="w-full md:mb-0 ">
          <div className="shadow-lg flex items-center justify-center py-40 bg-black opacity-60 bg-opacity-80 rounded-lg">
            <div className="text-3xl text-indigo-500 text-center font-bold">
              <h2 className="md:text-5xl text-3xl font-extrabold text-white opacity-100 mb-2">
                Produits de type acier
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-cover bg-center h-16 flex items-center justify-center"
        style={{ backgroundColor: "green" }}
      >
        <FaBoxOpen className="text-white text-2xl mr-2" />
        <h1 className="text-white text-2xl">Produit de Type Acier</h1>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center relative cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="mt-2 text-xl font-semibold text-center">
              {product.name}
            </h2>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 xl:w-1/3 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              <FaTimes className="text-2xl" />
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="mt-4 text-2xl font-semibold text-center">
              {selectedProduct.name}
            </h2>
            <p className="mt-2 text-gray-700 text-center">
              {selectedProduct.description}
            </p>
            <p className="mt-2 text-gray-700 text-center">
              <span>Prix :</span>
              {selectedProduct.prix}
            </p>
            <p className="mt-2 text-gray-700 text-center">
              <span>Stock :</span>
              {selectedProduct.stock}
            </p>
            <div className="flex gap-3">
              <button className="mt-6 w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition-colors">
                Ajouter au panier
              </button>
              <button className="mt-6 w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition-colors">
                Favoris
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProduitsAcier;
