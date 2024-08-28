import Galva from "../../assets/Galva.jpeg";
import Inox from "../../assets/Inox.jpeg";
import Corten from "../../assets/Corten.jpeg";

const Panier = () => {
  const cartItems = [
    {
      id: 1,
      name: "Tole simple",
      price: 29.99,
      quantité: 2,
      image: Galva,
    },
    {
      id: 2,
      name: "Tole Bac",
      price: 49.99,
      quantité: 1,
      image: Inox,
    },
    {
      id: 3,
      name: "Fer en T",
      price: 19.99,
      quantité: 3,
      image: Corten,
    },
  ];

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantité,
    0
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-8">Votre Panier</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Articles
            </h2>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border-b"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-medium text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Quantité: {item.quantité}
                  </p>
                  <p className="text-sm text-gray-500">
                    Prix unitaire: ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="text-lg font-extrabold text-green-500">
                  ${(item.price * item.quantité).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Résumé de la commande
            </h2>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Sous-total</span>
              <span className="font-medium text-gray-800">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Frais de livraison</span>
              <span className="font-medium text-gray-800">$5.00</span>
            </div>
            <div className="flex justify-between mb-4 text-xl font-semibold text-gray-800">
              <span>Total</span>
              <span>${(totalAmount + 5).toFixed(2)}</span>
            </div>
            <button className="w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition-colors">
              Passer à la caisse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panier;
