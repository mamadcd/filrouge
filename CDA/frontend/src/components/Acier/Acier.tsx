import tole_normal from "../../assets/ToleNormal.jpeg";
import tole_a_larme from "../../assets/ToleaLarme.jpeg";
import fer_plat from "../../assets/FerPlat.jpeg";
import tole_perforeesl from "../../assets/TolePerforees.jpeg";
import corniere_a_aigle_egale from "../../assets/Corniere a Aigle Egale.jpeg";
import fer_en_t from "../../assets/Fer en T.jpeg";
import { FaBoxOpen } from "react-icons/fa";

const Produits_acier = () => {
  const products = [
    { image: tole_normal, name: "Tole Normal", aosDelay: 100 },
    { image: tole_a_larme, name: "Tole a Larme", aosDelay: 100 },
    { image: fer_plat, name: "Fer Plat", aosDelay: 100 },
    { image: tole_perforeesl, name: "Tole Perforees", aosDelay: 100 },
    {
      image: corniere_a_aigle_egale,
      name: "Corniere a Aigle Egale",
      aosDelay: 100,
    },
    { image: fer_en_t, name: "Fer en T", aosDelay: 100 },
  ];
  return (
    <div>
      {/* Produits de type acier */}
      <main className="p-4">
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
              data-aos="zoom-in"
              key={product.name}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center relative"
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
      </main>
    </div>
  );
};

export default Produits_acier;
