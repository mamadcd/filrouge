function ModalDelete({ showModal, confirmDelete, cancelDelete }) {
  return (
    <>
      {showModal && (
        <div className="w-full lg:py-3 px-3 mx-auto my-auto modal">
          <div className="bg-white rounded-md p-3">
            <div className="border border-size-8 rounded-full border-slate-800 text-center h-20 w-20 font-bold align-middle place-content-center place-items-center mx-auto my-auto">
              <span className="font-bold text-3xl text-gray-500">!</span>
            </div>
            <p className="text-center mb-10">
              Êtes-vous sûr de vouloir supprimer cet élément ?
            </p>
            <div className="flex mx-auto my-auto space-x-4">
              <button
                onClick={confirmDelete}
                className="px-16 py-1 bg-red-500 hover:bg-red-600 focus:border-red-100 rounded-md text-white font-bold justify-center focus-outline-red-500"
              >
                Oui
              </button>
              <button
                onClick={cancelDelete}
                className="px-16 py-1 bg-blue-50 hover:bg-blue-200 focus:border-blue-100 rounded-md text-slate-700 font-bold justify-center focus-outline-blue-500"
              >
                Non
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalDelete;
