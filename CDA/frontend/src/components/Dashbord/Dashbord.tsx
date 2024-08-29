import { useState } from "react";
import Acier from "./Tableaux/Acier";
import Alu from "./Tableaux/Alu";
import Corten from "./Tableaux/Corten";
import Galva from "./Tableaux/Galva";
import Inox from "./Tableaux/Inox";
import Statistiques from "./Tableaux/Statistiques";

const links = [
  { id: 1, name: "Dashboard", isActive: true },
  { id: 2, name: "Acier" },
  { id: 3, name: "Alu" },
  { id: 4, name: "Corten" },
  { id: 5, name: "Galva" },


];

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [isactive, setIsactive] = useState(false);
  const [isactiveB, setIsactiveB] = useState(false);
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsactive(item.id);
    setIsactiveB(item);
  };
  return (
    <>
      <div className="flex h-screen bg-gray-100 pt-16 ">
        <div className="w-1/5 bg-blue-800 text-white p-4 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-6">Fil Rouge</h1>
          <ul>
            {links.map((link, index) => (
              <li key={index} className="mb-2">
                <button
                  onClick={() => handleItemClick(link.id)}
                  className={`block py-2 px-4 rounded p-4 cursor-pointer  w-full text-justify
                     text-lg border-t border-gray-600 shadow-sm shadow-gray-200 ${
                       isactiveB === link.id
                         ? " bg-blue-500 text-white font-extrabold hover:bg-blue-700"
                         : "hover:bg-blue-700"
                     }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-4/5 p-6 overflow-y-auto">
        {selectedItem === 1 && <Statistiques />}
          {selectedItem === 2 && <Acier />}
          {selectedItem === 3 && <Alu />}
          {selectedItem === 4 && <Corten />}
          {selectedItem === 5 && <Galva />}
          {selectedItem === 6 && <Inox />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
