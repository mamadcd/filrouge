import { FaCubes, FaShoppingCart } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Statistiques = () => {
  // Simulations des données statistiques
  const stats = {
    products: {
      alu: 150,
      corten: 85,
      galva: 200,
      acier: 120,
    },
    orders: 58,
  };

  // Données pour le graphique
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Mois
    datasets: [
      {
        label: "Alu",
        data: [120, 150, 130, 140, 160, 170, 150], // Données simulées pour Alu
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
      {
        label: "Corten",
        data: [80, 85, 90, 70, 60, 75, 85], // Données simulées pour Corten
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        fill: true,
      },
      {
        label: "Galva",
        data: [180, 200, 190, 210, 220, 230, 200], // Données simulées pour Galva
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "Acier",
        data: [110, 120, 130, 115, 125, 130, 120], // Données simulées pour Acier
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Évolution des stocks",
      },
    },
  };
  return (
    <div >
      <div className="mb-6 bg-white shadow-lg">
        <h1 className="text-3xl font-bold ">Tableau de bord</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Statistique Alu */}
        <div className="bg-white shadow-lg rounded-lg p-5 flex items-center">
          <FaCubes className="text-4xl text-blue-500" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Alu en stock</h2>
            <p className="text-3xl font-bold">{stats.products.alu}</p>
          </div>
        </div>

        {/* Statistique Corten */}
        <div className="bg-white shadow-lg rounded-lg p-5 flex items-center">
          <FaCubes className="text-4xl text-orange-500" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Corten en stock</h2>
            <p className="text-3xl font-bold">{stats.products.corten}</p>
          </div>
        </div>

        {/* Statistique Galva */}
        <div className="bg-white shadow-lg rounded-lg p-5 flex items-center">
          <FaCubes className="text-4xl text-gray-500" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Galva en stock</h2>
            <p className="text-3xl font-bold">{stats.products.galva}</p>
          </div>
        </div>

        {/* Statistique Acier */}
        <div className="bg-white shadow-lg rounded-lg p-5 flex items-center">
          <FaCubes className="text-4xl text-gray-700" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Acier en stock</h2>
            <p className="text-3xl font-bold">{stats.products.acier}</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        {/* Statistique Commandes */}
        <div className="bg-white shadow-lg rounded-lg p-5 flex items-center">
          <FaShoppingCart className="text-4xl text-green-500" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Nombre de commandes</h2>
            <p className="text-3xl font-bold">{stats.orders}</p>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white shadow-lg rounded-lg p-5">
        <h2 className="text-2xl font-bold mb-4">Évolution des stocks</h2>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Statistiques;
