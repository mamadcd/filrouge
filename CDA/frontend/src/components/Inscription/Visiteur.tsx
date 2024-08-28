import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Visiteur = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-300 to-primary pt-20 py-4 flex flex-col justify-center items-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-2xl">
        <div className="text-center mb-6 bg-yellow-400 rounded-md p-2 shadow-sm">
          <h1 className="text-3xl font-bold text-black shadow-2xl">
            Coup d'acier
          </h1>
        </div>
        <h2 className="text-2xl font-extrabold text-center mb-4">
          Compte Visiteur
        </h2>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden flex-1 mb-4 md:mb-0">
              <span className="bg-primary p-3">
                <FaUser className="text-white" />
              </span>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full px-4 py-2 focus:outline-none"
                required
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden flex-1 mb-4 md:mb-0">
              <span className="bg-primary p-3">
                <FaUser className="text-white" />
              </span>
              <input
                type="text"
                placeholder="Votre prenom"
                className="w-full px-4 py-2 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-4">
            <span className="bg-primary p-3">
              <FaEnvelope className="text-white" />
            </span>
            <input
              type="email"
              placeholder="Adresse mail"
              className="w-full px-4 py-2 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden flex-1 mb-4 md:mb-0">
              <span className="bg-primary p-3">
                <FaLock className="text-white" />
              </span>
              <input
                type="password"
                placeholder="Mot de passe"
                className="w-full px-4 py-2 focus:outline-none"
                required
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden flex-1 mb-4 md:mb-0">
              <span className="bg-primary p-3">
                <FaLock className="text-white" />
              </span>
              <input
                type="password"
                placeholder="Confirmer mot de passe"
                className="w-full px-4 py-2 focus:outline-none"
                required
              />
            </div>
          </div>

          <button className="w-full bg-green-700 hover:bg-green-600 hover:font-extrabold text-white py-2 rounded-lg mt-4">
            Créer
          </button>
          <div className="items-center mx-auto w-full">
            <span className="text-center justify-center content-center justify-items-center text-sm mx-auto">
              Vous avez déja un compte ?{" "}
              <a
                href="/login"
                className="text-primary hover:text-green-500 mt-2 font-bold text-md"
              >
                Se connecter
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Visiteur;
