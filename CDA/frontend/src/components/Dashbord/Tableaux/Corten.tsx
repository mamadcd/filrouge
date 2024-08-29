import { useState } from "react";
import { IoClose } from "react-icons/io5";
import ModalDelete from "../../ModalDelete";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
const Corten = () => {
  const dataTable = [
    {
      name: "Annual Report",
      file: "PDF",
      category: "Property",
      author: "Diana Matthews",
      status: "Send",
    },
    {
      name: "Business Plan",
      file: "WORD",
      category: "Cryptocurrency",
      author: "Philip James",
      status: "Send",
    },
    {
      name: "Marketing Tool",
      file: "PDF",
      category: "Content Creator",
      author: "Amanda Ross",
      status: "Pending",
    },
  ];

  const [showFormModal, setShowFormModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const toggleFormModal = () => {
    setShowFormModal(!showFormModal);
  };

  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const handleAddClick = () => {
    setIsEditing(false);
    setCurrentItem(null);
    toggleFormModal();
  };

  const handleEditClick = (item) => {
    setIsEditing(true);
    setCurrentItem(item);
    toggleFormModal();
  };

  const handleDeleteClick = (item) => {
    setCurrentItem(item);
    toggleDeleteModal();
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">CORTEN</h3>

        <button
          onClick={handleAddClick}
          className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
        >
          Ajouter
        </button>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                  File
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dataTable.map((data, index) => (
                <tr key={index} className="hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {data.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {data.file}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {data.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {data.author}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                      data.status === "Send" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {data.status}
                  </td>
                  <td className="flex space-x-4 px-6 py-3 whitespace-nowrap text-right items-center">
                    <FaEdit
                      className="text-blue-500 cursor-pointer"
                      onClick={() => handleEditClick(data)}
                    />
                    <FaTrashCan
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleDeleteClick(data)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal d'ajout/modification */}
      {showFormModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-end">
              <IoClose
                className="text-3xl cursor-pointer text-red-500 hover:text-red-600"
                onClick={toggleFormModal}
              />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              {isEditing ? "Modifier le document" : "Ajouter un document"}
            </h2>
            <form>
              <div className="space-y-3">
                <label htmlFor="name" className="font-semibold">
                  Nom du document :
                </label>
                <input
                  required
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-blue-300 shadow-sm bg-gray-50"
                  defaultValue={isEditing ? currentItem?.name : ""}
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="file" className="font-semibold">
                  Type de fichier :
                </label>
                <input
                  required
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-blue-300 shadow-sm bg-gray-50"
                  defaultValue={isEditing ? currentItem?.file : ""}
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="category" className="font-semibold">
                  Catégorie :
                </label>
                <input
                  required
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-blue-300 shadow-sm bg-gray-50"
                  defaultValue={isEditing ? currentItem?.category : ""}
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="author" className="font-semibold">
                  Auteur :
                </label>
                <input
                  required
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-blue-300 shadow-sm bg-gray-50"
                  defaultValue={isEditing ? currentItem?.author : ""}
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="status" className="font-semibold">
                  Statut :
                </label>
                <input
                  required
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-blue-300 shadow-sm bg-gray-50"
                  defaultValue={isEditing ? currentItem?.status : ""}
                />
              </div>

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg shadow-gray-500"
                >
                  {isEditing ? "Modifier" : "Ajouter"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de suppression */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-2 rounded-lg shadow-lg w-full max-w-md">
            <ModalDelete
              showModal={showDeleteModal}
              confirmDelete={() => {
                toggleDeleteModal();
                // Logique de suppression ici
              }}
              cancelDelete={toggleDeleteModal}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Corten